import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, GET_REPOS } from './types';

//Get posts
export const getPosts = () => async dispatch => {
  try {
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {}
};
