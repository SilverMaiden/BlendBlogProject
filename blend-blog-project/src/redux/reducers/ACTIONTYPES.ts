// Types for actions in userActions.tsx and blogpostActions.tsx

interface UserType {
  id: number;
  email: string;
  password: string;
}
export type ACTIONTYPE =
  | { type: "REGISTER_USER_START"; payload: boolean }
  | { type: "REGISTER_USER_SUCCESS"; payload: object }
  | { type: "REGISTER_USER_ERROR"; payload: boolean }
  | { type: "LOGIN_USER_START"; payload: boolean }
  | { type: "LOGIN_USER_SUCCESS"; payload: UserType }
  | { type: "LOGIN_USER_ERROR"; payload: boolean }
  | { type: "GET_USER_START"; payload: boolean }
  | { type: "GET_USER_SUCCESS"; payload: object }
  | { type: "GET_USER_ERROR"; payload: boolean }
  | { type: "ADD_FAVORITE_START"; payload: boolean }
  | { type: "ADD_FAVORITE_SUCCESS"; payload: object }
  | { type: "ADD_FAVORITE_ERROR"; payload: boolean }
  | { type: "LOGIN_USER_START"; payload: boolean }
  | { type: "LOGIN_USER_SUCCESS"; payload: UserType }
  | { type: "LOGIN_USER_ERROR"; payload: boolean }
  | { type: "LOGOUT_USER_START"; payload: boolean }
  | { type: "LOGOUT_USER_SUCCESS"; payload: object }
  | { type: "LOGOUT_USER_ERROR "; payload: boolean }
  | { type: "GET_USER_START "; payload: boolean }
  | { type: "GET_USER_SUCCESS "; payload: object }
  | { type: "GET_USER_ERROR "; payload: boolean }
  | { type: "GET_FAVORITES_START"; payload: boolean }
  | { type: "GET_FAVORITES_SUCCESS"; payload: object }
  | { type: "GET_FAVORITES_ERROR"; payload: boolean }
  | { type: "ADD_FAVORITE_START"; payload: boolean }
  | { type: "ADD_FAVORITE_SUCCESS"; payload: object }
  | { type: "ADD_FAVORITE_ERROR"; payload: boolean }
  | { type: "DELETE_FAVORITE_START"; payload: boolean }
  | { type: "DELETE_FAVORITE_SUCCESS"; payload: object }
  | { type: "DELETE_FAVORITE_ERROR"; payload: boolean }
  | { type: "ADD_BLOGPOST_START"; payload: boolean }
  | { type: "ADD_BLOGPOST_SUCCESS"; payload: object }
  | { type: "ADD_BLOGPOST_ERROR"; payload: boolean }
  | { type: "EDIT_BLOGPOST_START"; payload: boolean }
  | { type: "EDIT_BLOGPOST_SUCCESS"; payload: object }
  | { type: "EDIT_BLOGPOST_ERROR"; payload: boolean }
  | { type: "DELETE_BLOGPOST_START"; payload: boolean }
  | { type: "DELETE_BLOGPOST_SUCCESS"; payload: object }
  | { type: "DELETE_BLOGPOST_ERROR"; payload: boolean }
  | { type: "GET_FILTERED_BLOGPOSTS_START"; payload: boolean }
  | { type: "GET_FILTERED_BLOGPOSTS_SUCCESS"; payload: object }
  | { type: "GET_FILTERED_BLOGPOSTS_ERROR"; payload: boolean }
  | { type: "GET_BLOGPOSTS_BY_USER_START "; payload: boolean }
  | { type: "GET_BLOGPOSTS_BY_USER_SUCCESS"; payload: object }
  | { type: "GET_BLOGPOSTS_BY_USER_ERROR"; payload: boolean }
  | { type: "GET_SINGLE_BLOGPOST_START"; payload: boolean }
  | { type: "GET_SINGLE_BLOGPOST_SUCCESS"; payload: object }
  | { type: "GET_SINGLE_BLOGPOST_ERROR"; payload: boolean }
  | { type: "GET_ALL_BLOGPOSTS_START"; payload: boolean }
  | { type: "GET_ALL_BLOGPOSTS_SUCCESS"; payload: object }
  | { type: "GET_ALL_BLOGPOSTS_ERROR"; payload: boolean };
