<template>
  <div class="movie">
    <Headers :title="title"/>
    <div class="content">
        <div class="content-menu">
          <router-link tag="div" to="/movie/city" class="city-name">
            <span class="city">成都</span>
            <i class="triangle"></i>
          </router-link>
          <div class="hot-search">
            <router-link tag="div" to="/movie/nowPlaying" class="hot-item">正在热映</router-link>
            <router-link tag="div" to="/movie/comingSoon" class="hot-item">即将上映</router-link>
          </div>
          <router-link  tag="div"  to="/movie/search" class="search-entry">
            <span class="search"><img src="../../assets/images/search.png" alt=""></span>
          </router-link>
        </div>
        <div class="content-container">
          <keep-alive>
              <router-view/>
          </keep-alive>
        </div>
    </div>
    <Footers/>
  </div>
</template>

<script>
import {mapMutations,mapActions,mapState} from 'vuex'
import Headers from '@/components/common/Headers.vue'
import Footers from '@/components/common/Footers.vue'


export default {
  name:'Movie',
  data(){
    return {
      title:"喵喵电影"
    }
  },
  computed:{},
  methods:{
   
  },
  components:{
    Footers,
    Headers
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
 .movie{
   .content-menu{
     display: flex;
     height: 2.5rem;
     border-bottom: 2px solid #e0e0e0;
     box-sizing: border-box;
     .city-name{
       flex: 1.1;
       text-align: center;
       line-height: 2.5rem;
       position: relative;
       margin-right: 1.2rem;
      &.router-link-active{
           border-bottom: 2px solid #d81e06;
           color: #d81e06;
        }
       .city{
         font-size: .7rem;
       }
       .triangle{
         border-left: .2rem solid transparent;
         border-bottom: 0rem solid transparent;
         border-right: .2rem solid transparent;
         border-top: .4rem solid #000;
         position: absolute;
         top:50%;
         right: 0;
         margin-top: -.15rem; 
       }
     }
     .hot-search{
       flex: 3.5;
       display: flex;
       margin-right: .5rem;
       .hot-item{
         flex: 1;
         text-align: center;
         line-height: 2.5rem;
         height: 2.4rem;
         cursor: pointer;
         &.router-link-active{
           border-bottom: 2px solid #d81e06;
           color: #d81e06;
        }
       }
     }
     .search-entry{
       flex: 1;
       text-align: center;
       line-height: 2.5rem;
       img{
         width: 1.2rem;
       }
        &.router-link-active{
           border-bottom: 2px solid #d81e06;
           color: #d81e06;
        }
     }
   }
  
  
 }
</style>
