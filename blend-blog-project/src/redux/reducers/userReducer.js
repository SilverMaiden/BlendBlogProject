/* eslint-disable import/prefer-default-export */
import { UserInitialState } from './initialState';
import * as ActionTypes from '../actions/actionTypes';

export const userReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER_START:
      return { ...state, registerUserStart: true };

    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserStart: false,
        id: action.payload.id,
        email: action.payload.email
      };

    case ActionTypes.REGISTER_USER_ERROR:
      return { ...state, registerUserStart: false, registerUserError: true };

    case ActionTypes.LOGIN_USER_START:
      return { ...state, loginUserStart: true };

    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        tokenPresent: true,
        loginUserStart: false,
        id: action.payload.id,
        email: action.payload.email,
      };

    case ActionTypes.LOGIN_USER_ERROR:
      return { ...state, loginUserStart: false, loginUserError: true };

    case ActionTypes.LOGOUT_USER_START:
      return { ...state, logoutUserStart: true };

    case ActionTypes.LOGOUT_USER_SUCCESS:
      return { ...UserInitialState, tokenPresent: false };

    case ActionTypes.LOGOUT_USER_ERROR:
      return { ...state, logoutUserStart: false, logoutUserError: true };
    
    case ActionTypes.GET_USER_START:
      return {
        ...state,
        getUserStart: true
      };

    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        getUserStart: false,
        id: action.payload.id,
        email: action.payload.email,
      };

    case ActionTypes.GET_USER_ERROR:
      return {
        ...state,
        getUserError: true
      };

    default:
      return state;
  }
};