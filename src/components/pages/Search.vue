<template>
  <div class="search">
    <div class="search_input">
      <div class="search_input_wrapper">
        <span class="search_icon"><img src="../../assets/images/search_small.png" alt=""></span>
        <input type="text">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li>
          <div class="img"><img src="../../assets/images/wmzb.png" alt=""></div>
          <div class="info">
            <p class="info_title">
              <span class="movie_name">无名之辈</span>
              <span class="score">8.5</span>
            </p>
            <p>A Cool Fish</p>
            <p>喜剧，剧情，犯罪</p>
            <p>2019-12-20</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="../../assets/images/txwz.png" alt=""></div>
          <div class="info">
            <p class="info_title">
              <span class="movie_name">无名之辈</span>
              <span class="score">8.5</span>
            </p>
            <p>A Cool Fish</p>
            <p>喜剧，剧情，犯罪</p>
            <p>2019-12-20</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="../../assets/images/wmzb.png" alt=""></div>
          <div class="info">
            <p class="info_title">
              <span class="movie_name">无名之辈</span>
              <span class="score">8.5</span>
            </p>
            <p>A Cool Fish</p>
            <p>喜剧，剧情，犯罪</p>
            <p>2019-12-20</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="../../assets/images/txwz.png" alt=""></div>
          <div class="info">
            <p class="info_title">
              <span class="movie_name">无名之辈</span>
              <span class="score">8.5</span>
            </p>
            <p>A Cool Fish</p>
            <p>喜剧，剧情，犯罪</p>
            <p>2019-12-20</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="../../assets/images/wmzb.png" alt=""></div>
          <div class="info">
            <p class="info_title">
              <span class="movie_name">无名之辈</span>
              <span class="score">8.5</span>
            </p>
            <p>A Cool Fish</p>
            <p>喜剧，剧情，犯罪</p>
            <p>2019-12-20</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="../../assets/images/txwz.png" alt=""></div>
          <div class="info">
            <p class="info_title">
              <span class="movie_name">无名之辈</span>
              <span class="score">8.5</span>
            </p>
            <p>A Cool Fish</p>
            <p>喜剧，剧情，犯罪</p>
            <p>2019-12-20</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'search',
  props:{},
  data(){
    return {
    }
  },
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.search{
  .search_input{
    padding: .4rem .5rem;
    background: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search_input_wrapper{
      padding: 0 .5rem;
      border:1px solid #e6e6e6;
      border-radius: .25rem;
      background: #fff;
      position: relative;
      .search_icon{
        position:absolute;
        display: block;
        width: .8rem;
        top:.2rem;
        left: .2rem;
      }
      input{
        padding: .2rem 0;
        padding-left: .7rem;
        border:none;
        width: 100%;
        height: 1rem;
      }
    }
  }
  .search_result{
     h3{
       font-size: .75rem;
       color: #999;
       padding: .45rem .75rem;
       border-bottom: 1px solid #e6e6e6;
     }
     li{
       border-bottom: 1px dashed #c9c9c9;
       padding: .5rem .75rem;
       box-sizing: border-box;
       overflow: hidden;
       display: flex;
       .img{
         width: 3rem;
       }
       .info{
        flex: 1;
        margin-left:.75rem;
        p{
          height: 1.1rem;
          display: flex;
          line-height: 1.1rem;
        }
        .info_title{
          position: relative;
          .score{
            position: absolute;
            right: .2rem;
            color: #fc7103;
            font-size: .8rem;
          }
          .movie_name{
            font-size: .85rem;
          }
        }
       }
     }
  }
}
</style>