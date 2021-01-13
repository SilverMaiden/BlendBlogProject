import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axiosWithAuth.js";

// User Onboarding and Login/Logout Actions.
export const loginUser = (userInfo, history) => (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_USER_START });

  axiosWithAuth()
    .post("/login/", userInfo)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: ActionTypes.LOGIN_USER_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
      window.localStorage.setItem("id", response.data.id);
      if (history.location.pathname === "/login") {
        history.push("/home");
        //console.log(history)
      }
      //dispatch action here to get user info in store
      dispatch(getUser(response.data.id));
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.LOGIN_USER_ERROR, payload: err });
    });
};

// User registration request - on a successful register,
// the application then attempts to log the user in.
export const registerUser = (infoNeeded, history) => (dispatch) => {
  dispatch({ type: ActionTypes.REGISTER_USER_START });
  axiosWithAuth()
    .post("/register/", infoNeeded)
    .then((response) => {
      // history.push('/home');
      dispatch({
        type: ActionTypes.REGISTER_USER_SUCCESS,
        payload: response.data,
      });

      // --login the user after registering
      dispatch({ type: ActionTypes.LOGIN_USER_START });
      axiosWithAuth()
        .post("/login/", infoNeeded)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          dispatch({
            type: ActionTypes.LOGIN_USER_SUCCESS,
            payload: response.data,
          });
          localStorage.setItem("id", response.data.id);
          if (history.location.pathname === "/") {
            history.push("/home");
          }
        })
        .catch((err) => {
          dispatch({ type: ActionTypes.LOGIN_USER_ERROR, payload: err });
        });

      // end of login request section.
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.REGISTER_USER_ERROR, payload: err });
    });
};

// Request to logout the user, clearing the JWT from local storage.
export const logoutUser = (history) => (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUT_USER_START });
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    dispatch({ type: ActionTypes.LOGOUT_USER_SUCCESS });
    history.push("/login");
  } else {
    dispatch({
      type: ActionTypes.LOGOUT_USER_ERROR,
      payload: "no token found",
    });
  }
};

// Request to get user information from the backend given a user id.
export const getUser = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_USER_START });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then((response) => {
      dispatch({ type: ActionTypes.GET_USER_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.GET_USER_ERROR, payload: err });
    });
};
