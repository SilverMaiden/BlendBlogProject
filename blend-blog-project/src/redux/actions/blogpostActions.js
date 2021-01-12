import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export const addBlogPost = (postInfo, history) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_BLOGPOST_START });

  const postToSubmit = {
    blogpost_title: postInfo.blogpost_title,
    user_id: postInfo.user_id,
    blogpost_content: postInfo.blogpost_content,
  };

  axiosWithAuth()
    .post("/blogposts/", postToSubmit)
    .then((response) => {
      dispatch({
        type: ActionTypes.ADD_BLOGPOST_SUCCESS,
        payload: { ...response.data },
      });
      //history.push('/myposts/')
      return response;
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.ADD_BLOGPOST_ERROR,
        payload: err,
      });
      return err;
    });
};


export const editBlogPost = (postInfo, history) => (dispatch) => {
  dispatch({ type: ActionTypes.EDIT_BLOGPOST_START });
  console.log(history)

  axiosWithAuth()
    .put(`/blogposts/${postInfo.id}`, postInfo)
    .then((response) => {
      dispatch({
        type: ActionTypes.EDIT_BLOGPOST_SUCCESS,
        payload: response.data,
      });
      history.push('/myposts')
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.EDIT_BLOGPOST_ERROR, payload: err });
    });
  };



  export const getFavorites = (userId) => (dispatch) => {
    dispatch({ type: ActionTypes.GET_FAVORITES_START });
    axiosWithAuth()
      .get(`/favorites/${userId}`)
      .then((response) => {
        //let responsePayload = [response.data]

        dispatch({
          type: ActionTypes.GET_FAVORITES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.GET_FAVORITES_ERROR, payload: err });
      });
  };

export const addFavorite = (userId, blogpostId, history) => async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_FAVORITE_START });
  
    const postToSubmit = {
      blogpost_id: blogpostId,
      user_id: userId,
    };
  
    axiosWithAuth()
      .post("/favorites", postToSubmit)
      .then((response) => {
        dispatch({
          type: ActionTypes.ADD_FAVORITE_SUCCESS,
          payload: { ...response.data },
        });
        //history.push('/myposts/')
        return response;
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.ADD_FAVORITE_ERROR,
          payload: err,
        });
        return err;
      });
  };


export const deleteFavorite = (userId, postId, history) => (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_FAVORITE_START });
  axiosWithAuth()
    .delete(`/favorites/${userId}/${postId}/`)
    .then((response) => {
      dispatch({ type: ActionTypes.DELETE_FAVORITE_SUCCESS, payload: postId });
      //history.push("/home");
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.DELETE_FAVORITE_ERROR, payload: err });
    });
};

  

export const getFilteredBlogPosts = (value, history) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_FILTERED_BLOGPOSTS_START });
  console.log(history)
  if (value.length === 0) {
    console.log("HII")
    axiosWithAuth()
    .get('/blogposts')
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_FILTERED_BLOGPOSTS_SUCCESS,
        payload: response.data
      })
    }).catch((err) => {
      dispatch({type: ActionTypes.GET_FILTERED_BLOGPOSTS_ERROR})
    }) 
  } else {

  // Action for search has not been created yet
  // Need to go into action types and create GET_FILTERED_BLOGPOSTS
  // Also need to create reducers for this 
  // Steps:
  // 1. Dispatch search term to this action
  // 2. This action makes an axiosWithAuth request to the endpoint
  //    with /searchterm
  // 3. return search filtered results

  axiosWithAuth()
    .get(`/blogposts/search/${value}`)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_FILTERED_BLOGPOSTS_SUCCESS,
        payload: response.data,
      });
      //history.push(`/${value.searchTerm}`)
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.GET_FILTERED_BLOGPOSTS_ERROR, payload: err });
    });
  }
};


export const deleteBlogPost = (postId, history) => (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_BLOGPOST_START });
  axiosWithAuth()
    .delete(`/blogposts/${postId}/`)
    .then((response) => {
      dispatch({ type: ActionTypes.DELETE_BLOGPOST_SUCCESS, payload: postId });
      history.push("/home");
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.DELETE_BLOGPOST_ERROR, payload: err });
    });
};

// getting all blogposts by user id

export const getBlogPostsByUser = (userId) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_BLOGPOSTS_BY_USER_START });
  axiosWithAuth()
    .get("/blogposts/")
    .then((response) => {
      const filteredPosts = response.data.filter(
        (post) => post.user_id === userId
      );
      dispatch({
        type: ActionTypes.GET_BLOGPOSTS_BY_USER_SUCCESS,
        payload: filteredPosts,
      });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.GET_BLOGPOSTS_BY_USER_ERROR, payload: err });
    });
};

export const getSingleBlogPost = (postId) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_SINGLE_BLOGPOST_START });
  axiosWithAuth()
    .get(`/blogposts/${postId}`)
    .then((response) => {
      console.log(response.data)
      dispatch({
        type: ActionTypes.GET_SINGLE_BLOGPOST_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.GET_SINGLE_BLOGPOST_ERROR, payload: err });
    });
};

export const getAllBlogPosts = () => (dispatch) => {
  dispatch({ type: ActionTypes.GET_ALL_BLOGPOSTS_START });
  axiosWithAuth()
    .get("/blogposts/")
    .then((response) => {
      //let responsePayload = [response.data]
      dispatch({
        type: ActionTypes.GET_ALL_BLOGPOSTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.GET_ALL_BLOGPOSTS_ERROR, payload: err });
    });
};
