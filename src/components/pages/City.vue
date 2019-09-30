<template>
  <div class="city">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="hot-list">
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>成都</li>
          <li>杭州</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>保定</li>
            <li>蚌埠</li>
            <li>亳州</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'city',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.city{
  display: flex;
  width: 100%;
  .city_list{
    flex: 1;
    overflow: auto;
    background: #fff5f0;
    .city_hot{
      h2{
        padding-left: .75rem;
        line-height: 1.5rem;
        font-size: .7rem;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul{
        overflow: hidden;
        li{
          width: 27%;
          float: left;
          background: #fff;
          height: 1.65rem;
          margin-top: .75rem;
          margin-left:3%;
          padding: 0 .2rem;
          border: 1px solid #999;
          text-align: center;
          line-height: 1.65rem;
        }
      }
    }
    .city_sort{
      div{
        margin-top: 1rem;
        h2{
          padding-left: .75rem;
          line-height: 1.5rem;
          font-size: .7rem;
          background: #f0f0f0;
          font-weight: normal;
        }
        ul{
          padding-left: .5rem;
          margin-top: .5rem;
          li{
            line-height: 1.5rem;

          }
        }
      }
    }
  }
  .city_list::-webkit-scrollbar{
      background: transparent;
  }
  .city_index{
    width: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #e6e6e6;
  }
}
</style>