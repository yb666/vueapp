import {INCRE_COUNT,DECRE_COUNT,CHANGE_MESSAGE} from './types';

export default{
    [INCRE_COUNT](state,num){
        state.count+=num
    },
    [DECRE_COUNT](state,num){
        state.count-=num;
    },
    [CHANGE_MESSAGE](state){
        state.message="hello mutations"
    }
}
