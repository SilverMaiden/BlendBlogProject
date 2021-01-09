import * as ActionTypes from './actionTypes';
import axiosWithAuth from '../../utils/axiosWithAuth.js';

// User Onboarding and Login/Logout Actions.
export const loginUser = (userInfo, history) => dispatch => {
  dispatch({ type: ActionTypes.LOGIN_USER_START });

  axiosWithAuth()
    .post('/login/', userInfo)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: ActionTypes.LOGIN_USER_SUCCESS,
        payload: response.data
      });
      console.log(window.history)
      window.history.pushState({}, "welcome", "/home");
      window.location.reload();
    })
    .catch(err => {
      dispatch({ type: ActionTypes.LOGIN_USER_ERROR, payload: err });
    });
};

export const registerUserAction = (infoNeeded, history) => dispatch => {
  dispatch({ type: ActionTypes.REGISTER_USER_START });
  axiosWithAuth()
    .post('/register/', infoNeeded)
    .then(response => {
      // history.push('/home');
      dispatch({
        type: ActionTypes.REGISTER_USER_SUCCESS,
        payload: response.data
      });

      // login user after registering
      dispatch({ type: ActionTypes.LOGIN_USER_START });
      axiosWithAuth()
        .post('/login/', infoNeeded)
        .then(response2 => {
          localStorage.setItem('token', response2.data.token);
          dispatch({
            type: ActionTypes.LOGIN_USER_SUCCESS,
            payload: response2.data
          });
          if (history.location.pathname === '/') {
            history.push('/home');
          }
        })
        .catch(err => {
          dispatch({ type: ActionTypes.LOGIN_USER_ERROR, payload: err });
        });

      // end of login user
    })
    .catch(err => {
      dispatch({ type: ActionTypes.REGISTER_USER_ERROR, payload: err });
    });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: ActionTypes.LOGOUT_USER_START });
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.LOGOUT_USER_SUCCESS });
  } else {
    dispatch({
      type: ActionTypes.LOGOUT_USER_ERROR,
      payload: 'no token found'
    });
  }
};

// Need to set up backend routes for '/user/:id
export const getUser = id => dispatch => {
  dispatch({ type: ActionTypes.GET_USER_START });
  axiosWithAuth()
    .get(`/user/${id}`)
    .then(response => {
      dispatch({ type: ActionTypes.GET_USER_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.GET_USER_ERROR, payload: err });
    });
};