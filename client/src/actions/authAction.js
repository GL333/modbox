import {LOG_IN, REGISTER,SET_USER, LOG_OUT, GET_ERRORS,} from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';


export function register(data, history) {
  console.log(data);
  return async function (dispatch) {
    try{
      const res = await axios.post('/api/register', data);
      console.log(res);
      dispatch({
        type:REGISTER,
        payload:'registration success'
      });
      // darom redirect
      history.push('/login')

    }catch (err) {
      console.log(err.response);
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data,
      });
    }
  }
}

export function login(data, history) {
  console.log(data);
  return async function (dispatch) {
    try{
      const res = await axios.post('/api/login', data);


      // issaugom token i localstorage
      localStorage.setItem('token','Bearer '+res.data);
      //nustatom axios biblotekai jog ji  naudoti headers
      axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data;


      //decode JWT

      const user  = jwt.decode(res.data);
      console.log(user);


      // dispatch user
      dispatch({
        type:LOG_IN,
        payload:user,
      });
      history.push('/');
    }catch (err) {
      console.log(err.response);
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data,
      });

    }
  }
}

export function setUser(user) {
  return{
    type:SET_USER,
    payload:user,
  }

}

export function logout() {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  return{
    type:LOG_OUT,
  }
}