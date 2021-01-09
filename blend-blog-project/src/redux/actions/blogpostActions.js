import axiosWithAuth from '../../utils/axiosWithAuth';
import * as ActionTypes from './actionTypes';

export const addBlogPost = (postInfo, history) => dispatch => {
  dispatch({ type: ActionTypes.ADD_BLOGPOST_START });

  const postToSubmit = {
    blogpost_title: postInfo.name,
    date: postInfo.date,
    user_id: postInfo.user_id,
  };

  return axiosWithAuth()
    .post('/', postToSubmit)
    .then(response => {
      dispatch({
        type: ActionTypes.ADD_BLOGPOST_SUCCESS,
        payload: { ...response.data }
      });
      //history.push('/');
      return response;
    })
    .catch(err => {
      dispatch({
        type: ActionTypes.ADD_BLOGPOST_ERROR,
        payload: err
      });
      return err;
    });
};


export const editBlogPost = (postInfo, postId) => dispatch => {
  dispatch({ type: ActionTypes.EDIT_BLOGPOST_START });
  axiosWithAuth()
    .put(`/${postId}`, postInfo)
    .then(response => {
      dispatch({
        type: ActionTypes.EDIT_BLOGPOST_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.EDIT_BLOGPOST_ERROR, payload: err });
    });
};

export const deleteBlogPost = (postId, history) => dispatch => {
  dispatch({ type: ActionTypes.DELETE_BLOGPOST_START });
  axiosWithAuth()
    .delete(`/${postId}`)
    .then(response => {
      dispatch({ type: ActionTypes.DELETE_BLOGPOST_SUCCESS, payload: postId });
      //history.push('/blogposts');
    })
    .catch(err => {
      dispatch({ type: ActionTypes.DELETE_BLOGPOST_ERROR, payload: err });
    });
};

// getting all blogposts by user id

export const getBlogPostsByUser = userId => dispatch => {
  dispatch({ type: ActionTypes.GET_BLOGPOSTS_BY_USER_START });
  axiosWithAuth()
    .get('/')
    .then(response => {
      const filteredPosts = response.data.filter(
        post => post.user_id === userId
      );
      dispatch({
        type: ActionTypes.GET_BLOGPOSTS_BY_USER_SUCCESS,
        payload: filteredPosts
      });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.GET_BLOGPOSTS_BY_USER_ERROR, payload: err });
    });
};

export const getSingleBlogPost = postId => dispatch => {
  dispatch({ type: ActionTypes.GET_SINGLE_BLOGPOST_START });
  axiosWithAuth()
    .get(`/${postId}`)
    .then(response => {
      dispatch({
        type: ActionTypes.GET_SINGLE_BLOGPOST_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.GET_SINGLE_BLOGPOST_ERROR, payload: err });
    });
};

export const getAllBlogPosts = dispatch => {
    dispatch({ type: ActionTypes.GET_ALL_BLOGPOSTS_START });
    axiosWithAuth()
      .get('/')
      .then(response => {
        dispatch({
          type: ActionTypes.GET_ALL_BLOGPOSTS_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ActionTypes.GET_ALL_BLOGPOSTS_ERROR, payload: err });
      });
  };