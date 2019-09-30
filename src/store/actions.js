import {INCRE_COUNT,DECRE_COUNT} from './types';

export default{
    incre_count({commit},num){
        commit(INCRE_COUNT,num)
    },
    decre_count({commit},num){
        commit(DECRE_COUNT,num)
    }
}
