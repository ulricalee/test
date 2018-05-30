<template>
  <div id="app">
    <!-- 动态绑定路由动画，根据路由状态的不同绑定不同的路由动画分别为  ：‘slide-left’  和 'slide-right' -->
    <transition :name="transitionName">
      <navigation>
      <router-view class="router"></router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {},
  created () {
    // bind event
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('back', (to, from) => {
      alert(213)
      this.transitionName = 'slide-right'
    })
    this.$navigation.on('replace', (to, from) => {
      console.log('replace to', to, 'from ', from)
    })
    this.$navigation.on('refresh', (to, from) => {
      console.log('refresh to', to, 'from ', from)
    })
    this.$navigation.on('reset', () => {
      console.log('reset')
    })
  }
}
</script>

<style>
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
li{
  list-style-type: none;
}
h1,h2,h3,h4,h5,h6{
  font-weight:300
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
  outline:none;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input:-webkit-autofill {
-webkit-box-shadow: 0 0 0px 1000px white inset;
}
::-moz-placeholder{color:#ababab;}              //ff
::-webkit-input-placeholder{color:#ababab;}     //chrome,safari
:-ms-input-placeholder{color:#ababab;}          //ie10
.placeholder {color: #ababab;}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
a {
  background-color: transparent;
  text-decoration:none;
}
a:active,
a:hover {
  outline: 0;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
}
* {
  box-sizing:border-box;
}
body,html{
  width:100%;
  height:100%;
  overflow:hidden;
}
#app {
  font-family: Helvetica Neue,Helvetica,Microsoft Yahei,STHeiTi,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router {
  position: absolute;
  width: 100%;
  transition: all .8s ease;
  transform: translateZ(0);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
