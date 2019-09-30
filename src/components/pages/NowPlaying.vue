<template>
  <div class="playing">
    <ul class="play-list">
      <li>
        <div class="pic-show"><img src="../../assets/images/wmzb.png" alt="" /></div>
        <div class="info-list">
          <h2>无名之辈</h2>
          <p>观众评<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映600场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic-show"><img src="../../assets/images/txwz.png" alt="" /></div>
        <div class="info-list">
          <h2>天下无贼</h2>
          <p>观众评<span class="grade">9.8</span></p>
          <p>主演：刘德华，刘若英，王宝强</p>
          <p>今天88家影院放映1600场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic-show"><img src="../../assets/images/wmzb.png" alt="" /></div>
        <div class="info-list">
          <h2>无名之辈</h2>
          <p>观众评<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映600场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic-show"><img src="../../assets/images/txwz.png" alt="" /></div>
        <div class="info-list">
          <h2>天下无贼</h2>
          <p>观众评<span class="grade">9.8</span></p>
          <p>主演：刘德华，刘若英，王宝强</p>
          <p>今天88家影院放映1600场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic-show"><img src="../../assets/images/wmzb.png" alt="" /></div>
        <div class="info-list">
          <h2>无名之辈</h2>
          <p>观众评<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映600场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic-show"><img src="../../assets/images/txwz.png" alt="" /></div>
        <div class="info-list">
          <h2>天下无贼</h2>
          <p>观众评<span class="grade">9.8</span></p>
          <p>主演：刘德华，刘若英，王宝强</p>
          <p>今天88家影院放映1600场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'playing',
  components:{},
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
.playing{
  display: flex;
  padding: .5rem .5rem 0rem .5rem;
  box-sizing: border-box;
  .play-list{
    flex: 1;
     li{
       display: flex;
       align-items: center;
       border-bottom: 1px solid #e6e6e6;
       padding-bottom:.5rem;
       margin-top: .6rem;
       .pic-show{
         width: 3.2rem;
         height: 4.5rem;
         overflow: hidden;
         img{
           min-height: 4.5rem;
         }
       }
       .info-list{
         margin-left: .5rem;
         position: relative;
         flex: 1; 
         h2{
           font-size: .85rem;
           line-height: 1.2rem;
           width: 7.5rem;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }
         p{
           color: #666;
           line-height: 1.1rem;
           width: 10rem;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }
         .grade{
            font-weight: 700;
            color: #faaf00;
            font-size: .75rem; 
          }
          img{
            width: 2.5rem;
            position: absolute;
            right: .5rem;
            top:.25rem;
          }
         
       }
       .btn_mall, .btn_pre{
          width: 2.35rem;
          height: 1.35rem;
          line-height: 1.4rem;
          text-align: center;
          background: #f03d37;
          border-radius: .2rem;
          font-size: .6rem;
          cursor: pointer;
          color: #fff;
       }
       .btn_pre{
         background: #3c9fe6;
       }
     }
  }

}
</style>