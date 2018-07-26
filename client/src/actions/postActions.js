import {
  FETCH_ALL_POSTS,
  GET_ERRORS,
  FETCH_SINGLE_POST,
  DELETE_POST,
  LIKE_POST,
COMMENT_POST} from './types';

import axios from 'axios';

export function fetchAllPost() {
  return async function (dispach) {
    // darom uzklausa i bacend (posts)
    try {
      const res = await axios.get('/api/posts');
      dispach({
        type:FETCH_ALL_POSTS,
        payload:res.data,
      })
    }catch (err) {
      console.log(err);
      dispach({
        type:GET_ERRORS,
        payload:'unexpected server error'

      })
    }
  }
}

export function fetchSinglePost(title) {
  return async function (dispach) {
    try{
      const res = await axios.get(`/api/post/${title}`);
      dispach({
        type:FETCH_SINGLE_POST,
        payload:res.data,
      })
    }catch (err) {
      dispach({
        type:GET_ERRORS,
        payload:{post:'post not found'}
      })
    }

  }

}

export function deletePost(id) {
  return async function (dispach) {
    try {
      await axios.delete('/api/posts/'+id);
      dispach({
        type:DELETE_POST,
        payload:id,
      })
    }catch(err) {

    }
  }

}

export function likePost(id) {
  return async function (dispach) {
    try {
      const res = await axios.post('/api/posts/'+id);
      dispach({
        type:LIKE_POST,
        payload:res.data,
      })

    }catch (err) {
      console.log(err);

    }


  }

}

export function commentPost(id,comment) {
  return async function (dispach) {
    try {
      const res = await axios.post('/api/post-comment/'+id,{comment});
      console.log(res.data);
      dispach({
        type:COMMENT_POST,
        payload:res.data,
      })
    }catch (err) {
      console.log(err);
      dispach({
        type:GET_ERRORS,
        payload:{message:'internal server error'}
      })
    }
  }
}