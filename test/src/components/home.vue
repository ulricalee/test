<template>
    <div class="home">
        <h1>HOME</h1>
        <router-link to="/list">go list</router-link>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home{
  background:red;
  transition:all 0.3s;
}
</style>
