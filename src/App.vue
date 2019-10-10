<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './assets/css/reset.css';

  #app{
    height: 100%;
    .content{
      position: fixed;
      width: 100%;
      top:2.5rem;
      height: calc(100% - 5.5rem);
      overflow-y: scroll;
    }
  }

</style>
