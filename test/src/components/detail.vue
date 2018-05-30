<template>
    <div class="detail">
        <h1>DETAIL----{{aaa}}</h1>
        <h3>is detail - {{ID}}</h3>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'detail',
  data () {
    return {
      ID: 0
    }
  },
  created () {
    this.ID = this.$route.params.id
  },
  computed: {
    ...mapState({
      aaa: state => state.one.oneJ
    })
  }
}
</script>

<style scoped lang="scss">

</style>
