<template>
  <div class="cList">
      <ul>
          <li>
              <div>
                  <span>太平洋影院(世纪城店)</span>
                  <span class="q"><span class="price">22.9</span>元起</span>
              </div>
              <div class="address">
                  <span>成都市高新区世纪城5楼</span>
                  <span>3.7km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>万达影院(蜀都万达店)</span>
                  <span class="q"><span class="price">26.9</span>元起</span>
              </div>
              <div class="address">
                  <span>成都市郫都区万达广场5楼</span>
                  <span>8.9km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>太平洋影院(世纪城店)</span>
                  <span class="q"><span class="price">22.9</span>元起</span>
              </div>
              <div class="address">
                  <span>成都市高新区世纪城5楼</span>
                  <span>3.7km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>万达影院(蜀都万达店)</span>
                  <span class="q"><span class="price">26.9</span>元起</span>
              </div>
              <div class="address">
                  <span>成都市郫都区万达广场5楼</span>
                  <span>8.9km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>太平洋影院(世纪城店)</span>
                  <span class="q"><span class="price">22.9</span>元起</span>
              </div>
              <div class="address">
                  <span>成都市高新区世纪城5楼</span>
                  <span>3.7km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>万达影院(蜀都万达店)</span>
                  <span class="q"><span class="price">26.9</span>元起</span>
              </div>
              <div class="address">
                  <span>成都市郫都区万达广场5楼</span>
                  <span>8.9km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'cList',
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
.cList{
    padding-bottom: 2rem;
    ul{
        padding:1rem;
        li{
            border-bottom: 1px solid #e6e6e6;
            margin-bottom: 1rem;
            div{
                margin-bottom: .5rem;
                .q{
                    font-size: .55rem;
                    color: #f03d37;
                    .price{
                        font-size: .9rem;
                    }
                }
            }
            .address{
                color: #666;
                overflow: hidden;
                span:nth-child(2){
                 float: right;
                }
            }
            .card{
                display: flex;
                div{
                    padding: 0 .15rem;
                    line-height: .75rem;
                    border-radius: .1rem;
                    color: #f90;
                    border:1px solid #f90;
                    margin-right: .25rem;
                    .or{
                        color: #f90;
                        border:1px solid #f90;
                    }
                    .bl{
                        color: #589daf;
                        border:1px solid #589daf;
                    }
                }
            }
             
        }
    }
}
</style>