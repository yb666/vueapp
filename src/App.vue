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
      padding-top:2.5rem;
      padding-bottom: 3.2rem;
    }
  }

</style>
