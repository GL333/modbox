import {FETCH_ALL_POSTS, FETCH_SINGLE_POST, LOG_OUT, DELETE_POST, LIKE_POST, COMMENT_POST} from '../actions/types';

export default (state=null, actions)=>{
    switch (actions.type){

      case FETCH_ALL_POSTS : return actions.payload;

      case FETCH_SINGLE_POST : return [actions.payload];
      case DELETE_POST :
        console.log(actions.payload);
        return state.filter((post)=>{
            return post._id!==actions.payload
      });
      case LIKE_POST:
        console.log(actions.payload);
        return state.map((post)=>{
         if(post._id===actions.payload._id){
           return{...post, likes:actions.payload.likes}
         }else {
           return post
         }
        });
      case COMMENT_POST :
        return state.map((post)=>{
          if(post._id===actions.payload._id){
            return{...post, comments:actions.payload.comments}
          }else {
            return post
          }
        });

      case LOG_OUT : return null;
      default : return state;
    }
};