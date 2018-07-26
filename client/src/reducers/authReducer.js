import {LOG_IN, REGISTER, SET_USER, LOG_OUT} from '../actions/types';

const initialState = {
  isAuth : false,
  message : '',
  user:null,
};

export default (state=initialState, action)=>{
    switch (action.type){
      case REGISTER :
        return {...initialState, message:action.payload};

      case LOG_IN:
        //console.log(action);
        return {isAuth:true, message:'', user:action.payload};

      case SET_USER:
        return {isAuth:true, message:'', user:action.payload};

      case LOG_OUT:
        return initialState;


      default : return state
    }
}