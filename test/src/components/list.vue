<template>
  <div class="list">
    <h1>LIST--{{aaa}}---{{bbb}}</h1>
    <h3 v-for="sl in getList" :key="sl">one store:{{sl}}</h3>
    <h4 v-for="dl in doubleList" :key="dl">one store:{{dl}}</h4>
    <h5 v-for="twol in getTwoList" :key="twol">two store: {{twol}}</h5>
    <button type="button" @click="add" class="btn">oneJ +1</button>
    <button type="button" @click="addOne({num:4444})" class="btn">oneJ +4</button>
    <button type="button" @click="actionAdd({num:66666})" class="btn">act oneJ +6</button>
    <router-link :to="{name: 'detail', params: {id: m.id}}"  v-for="m in list" :key="m.id">
      go detail - {{m.id}}<br>
    </router-link>
    <hr>
  <div class="slider" v-for="m in list">
         <div class="slidecontent"
            :class="{'active':m.useTransition}"
            @touchstart='touchStart($event,m)'
            @touchmove='touchMove($event,m)'
            @touchend='touchEnd($event,m)'
            :style="m.deleteSlider"
         >
            <slot></slot>
            <div class="remove">
               删除
           </div>
         </div>
  </div>
    <!-- <div class="slider">
         <div class="slidecontent"
            :class="{'active':useTransition}"
            @touchstart='touchStart'
            @touchmove='touchMove'
            @touchend='touchEnd'
            :style="deleteSlider"
         >
            <slot></slot>
            <div class="remove" ref='remove'>
               删除
           </div>
         </div>
  </div> -->

    <div class="move-list">
        <div class="left-move">
            块1
           <span>删除</span>
        </div>
        <div class="left-move">
            块2
           <span>删除</span>
        </div>
    </div>
    
  </div>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'list',
  data () {
    return {
      list:[
        {
          id:1,
          startX: 0,
          endX: 0,
          moveX: 0,
          disX: 0,
          useTransition: false,
          moveIsOver: false,
          deleteSlider: ''
        },
        {
          id:2,
          startX: 0,
          endX: 0,
          moveX: 0,
          disX: 0,
          useTransition: false,
          moveIsOver: false,
          deleteSlider: ''
        }
      ],
      // deleteSlider: '',
      // list: [
      //   {id: 1, name: 'lyc'},
      //   {id: 2, name: 'lyc2'}
      // ]
    }
  },
  methods: {
    resetTouch(obj){
        this.list.forEach(item=>{
            console.log(item)
            if(item.id != obj.id){
              item.deleteSlider = 'transform:translateX(0px)';
              item.startX=0
              item.endX=0
              item.moveX=0
              item.disX=0

              item.moveIsOver = false;
            }
        })
    },
    touchStart (ev,obj) {
      ev = ev || event
      if (ev.touches.length === 1) {
        obj.startX = ev.touches[0].clientX
obj.disX=0
        console.log('start:' + obj.startX)

        this.resetTouch(obj)
      }
    },
    touchMove (ev,obj) {
      ev = ev || event
      let wd = 100

      if (ev.touches.length === 1) {
        obj.moveX = ev.touches[0].clientX
        obj.disX = obj.startX - obj.moveX
        console.log('move:' + obj.disX)

        if (obj.moveIsOver) return
        console.log('====')
        // 移动中关闭transition 防止页面卡顿
        obj.useTransition = false

        if (obj.disX < 0 || obj.disX === 0) {
          obj.deleteSlider = 'transform:translateX(0px)'
        } else if (obj.disX > 0) {
          if (obj.disX >= wd) {
            obj.moveIsOver = true;
            obj.deleteSlider = 'transform:translateX(-' + wd + 'px)'
            return
          }
          obj.deleteSlider = 'transform:translateX(-' + obj.disX + 'px)'
        }
      }
    },
    touchEnd (ev,obj) {
      ev = ev || event
      let wd = 100


      if (ev.changedTouches.length === 1) {
        let endX = ev.changedTouches[0].clientX
        obj.disX = obj.startX - endX
        console.log('end:' + obj.disX)

        // 放开手 打开transition
        obj.useTransition = true

        if (obj.disX < wd) {
          obj.moveIsOver = false;
          setTimeout(() => {
            obj.deleteSlider = 'transform:translateX(0px)'
          }, 1)
        } else {
          obj.moveIsOver = true;
          setTimeout(() => {
            obj.deleteSlider = 'transform:translateX(-' + wd + 'px)'
          }, 1)
        }
      }
    },
    // touchStart (ev) {
    //   ev = ev || event
    //   if (ev.touches.length === 1) {
    //     this.startX = ev.touches[0].clientX
    //     console.log('start:' + this.startX)
    //   }
    // },
    // touchMove (ev) {
    //   ev = ev || event
    //   let _this = this
    //   let wd = _this.$refs.remove.offsetWidth

      

    //   if (ev.touches.length === 1) {
    //     _this.moveX = ev.touches[0].clientX
    //     _this.disX = _this.startX - _this.moveX
    //     console.log('move:' + _this.disX)

    //     if (_this.moveIsOver) return
    //     // 移动中关闭transition 防止页面卡顿
    //     _this.useTransition = false

    //     if (_this.disX < 0 || _this.disX === 0) {
    //       _this.deleteSlider = 'transform:translateX(0px)'
    //     } else if (_this.disX > 0) {
    //       if (_this.disX >= wd) {
    //         _this.moveIsOver = true;
    //         _this.deleteSlider = 'transform:translateX(-' + wd + 'px)'
    //         return
    //       }
    //       _this.deleteSlider = 'transform:translateX(-' + _this.disX + 'px)'
    //     }
    //   }
    // },
    // touchEnd (ev) {
    //   ev = ev || event
    //   let _this = this
    //   let wd = _this.$refs.remove.offsetWidth


    //   if (ev.changedTouches.length === 1) {
    //     let endX = ev.changedTouches[0].clientX
    //     _this.disX = _this.startX - endX
    //     console.log('end:' + _this.disX)

    //     // 放开手 打开transition
    //     _this.useTransition = true

    //     if (_this.disX < wd) {
    //       _this.moveIsOver = false;
    //       setTimeout(() => {
    //         _this.deleteSlider = 'transform:translateX(0px)'
    //       }, 1)
    //     } else {
    //       _this.moveIsOver = true;
    //       setTimeout(() => {
    //         _this.deleteSlider = 'transform:translateX(-' + wd + 'px)'
    //       }, 1)
    //     }
    //   }
    // },
    add () {
      this.$store.commit('addOne', {
        num: 1
      })
    },
    ...mapMutations([
      'addOne'
    ]),
    ...mapActions([
      'actAdd'
    ]),
    ...mapActions({
      actionAdd: 'actAdd'
    })
  },
  computed: {
    ...mapState({
      aaa: state => state.one.oneJ,
      bbb: state => state.two.twoJ
    }),
    ...mapGetters([
      'getList',
      'doubleList',
      'getTwoList'
    ])
  },
  created () {
    console.log('this is list...')
    // this.addOne
  }
}
</script>

<style scoped lang="scss">
.slider{
  width: 100%;
  height:100px;
  position: relative;
  user-select: none;
  overflow:hidden;
  .slidecontent{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background:green;
      z-index: 100;
      // transition: transform 0.3s linear;
      &.active{
        transition: transform 0.3s linear;
      }
  }
  .remove{
      position: absolute;
      width:100px;
      height:100%;
      background:red;
      right:-100px;
      top: 0;
      color:#fff;
      text-align: center;
      font-size: 40px;
      line-height: 100px;
  }
}

.move-list{
  display:block;
  width:100%;
  overflow:hidden;
}
.left-move{
    position:relative;
    display:block;
    width:100%;
    height:100px;
    line-height:100px;
    border-bottom:1px solid #999;
    &>span{
      position:absolute;
      top:0;
      left:100%;
      width:150px;
      height:100%;
      line-height:100px;
      background:red;
    }
}
.list{
  background:#b5f5b3;
}
.btn{
  display:block;
  background:yellow;
  width:100%;
  height:30px;
  font-size:14px;
}
</style>
