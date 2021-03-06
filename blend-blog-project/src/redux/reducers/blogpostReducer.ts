import { BlogPostsInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";
import { ACTIONTYPE } from "./ACTIONTYPES";

// Need to replace 'any' type with correct type
// 'payload' definition needs to be described in ACTIONTYPES.ts
export const blogpostReducer = (state = BlogPostsInitialState, action: any) => {
  switch (action.type) {
    // ADD BLOG
    case ActionTypes.ADD_BLOGPOST_START:
      return { ...state, addBlogPostStart: true };

    case ActionTypes.ADD_BLOGPOST_SUCCESS:
      return {
        ...state,
        addBlogPostStart: false,
        blogposts: [...state.blogposts, action.payload],
      };

    case ActionTypes.ADD_BLOGPOST_ERROR:
      return {
        ...state,
        addBlogPostStart: false,
        addBlogPostError: true,
      };

    // GET FAVORITES
    case ActionTypes.GET_FAVORITES_START:
      return {
        ...state,
        getFavoritesStart: true,
      };

    case ActionTypes.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        getFavoriteStart: false,
        favorites: action.payload,
      };

    case ActionTypes.GET_FAVORITES_ERROR:
      return {
        ...state,
        getFavoritesStart: false,
        getFavoritesError: true,
      };

    // DELETE FAVORITE
    case ActionTypes.DELETE_FAVORITE_START:
      return {
        ...state,
        deleteFavoriteStart: true,
      };
    case ActionTypes.DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        deleteFavoriteStart: false,
      };
    case ActionTypes.DELETE_FAVORITE_ERROR:
      return {
        ...state,
        deleteFavoriteStart: false,
        deleteFavoriteError: true,
      };

    // ADD FAVORITE
    case ActionTypes.ADD_FAVORITE_START:
      return {
        ...state,
        addFavoriteStart: true,
      };

    case ActionTypes.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        addFavoriteStart: false,
        favorites: [...state.favorites, action.payload],
      };

    case ActionTypes.ADD_FAVORITE_ERROR:
      return {
        ...state,
        addFavoriteStart: false,
        addFavoriteError: true,
      };

    //  EDIT BLOGPOST
    case ActionTypes.EDIT_BLOGPOST_START:
      return {
        ...state,
        editBlogPostStart: true,
      };
    case ActionTypes.EDIT_BLOGPOST_SUCCESS:
      return {
        ...state,
        editBlogPostStart: false,
        singleBlogPost: action.payload,
        blogposts: state.blogposts.map((blogpost: any) =>
          blogpost.id === action.payload.id ? action.payload : blogpost
        ),
      };
    case ActionTypes.EDIT_BLOGPOST_ERROR:
      return {
        ...state,
        editBlogPostStart: false,
        editBlogPostError: true,
      };
    // DELETE BLOGPOST
    case ActionTypes.DELETE_BLOGPOST_START:
      return {
        ...state,
        deleteBlogPostStart: true,
      };
    case ActionTypes.DELETE_BLOGPOST_SUCCESS:
      return {
        ...state,
        deleteBlogPostStart: false,
        blogposts: [],
      };
    case ActionTypes.DELETE_BLOGPOST_ERROR:
      return {
        ...state,
        deleteBlogPostStart: false,
        deleteBlogPostError: true,
      };

    // GET FILTERED
    case ActionTypes.GET_FILTERED_BLOGPOSTS_START:
      return {
        ...state,
        getFilteredBlogPostsStart: true,
      };

    case ActionTypes.GET_FILTERED_BLOGPOSTS_SUCCESS:
      return {
        ...state,
        getFilteredBlogPostsStart: false,
        filteredBlogPosts: [...action.payload],
      };

    case ActionTypes.GET_FILTERED_BLOGPOSTS_ERROR:
      return {
        ...state,
        getFilteredBlogPostsError: true,
        getFilteredBlogPostsStart: false,
      };

    // GET BLOGPOST BY USER
    case ActionTypes.GET_BLOGPOSTS_BY_USER_START:
      return {
        ...state,
        getBlogPostsByUserStart: true,
      };

    case ActionTypes.GET_BLOGPOSTS_BY_USER_SUCCESS:
      return {
        ...state,
        getBlogPostsByUserStart: false,
        blogposts: [...action.payload],
      };

    case ActionTypes.GET_BLOGPOSTS_BY_USER_ERROR:
      return {
        ...state,
        getBlogPostsByUserError: true,
        getBlogPostsByUserStart: false,
      };

    // GET SINGLE BLOGPOST
    case ActionTypes.GET_SINGLE_BLOGPOST_START:
      return {
        ...state,
        getSingleBlogPostStart: true,
      };

    case ActionTypes.GET_SINGLE_BLOGPOST_SUCCESS:
      return {
        ...state,
        getSingleBlogPostStart: false,
        singleBlogPost: action.payload,
      };

    case ActionTypes.GET_SINGLE_BLOGPOST_ERROR:
      return {
        ...state,
        getSingleBlogPostError: true,
        getSingleBlogPostStart: false,
      };

    // GET ALL BLOGPOSTS
    case ActionTypes.GET_ALL_BLOGPOSTS_START:
      return {
        ...state,
        getAllBlogPostsStart: true,
      };

    case ActionTypes.GET_ALL_BLOGPOSTS_SUCCESS:
      return {
        ...state,
        getAllBlogPostsStart: false,
        allBlogPosts: action.payload,
      };

    case ActionTypes.GET_ALL_BLOGPOSTS_ERROR:
      return {
        ...state,
        getAllBlogPostsError: true,
        getAllBlogPostsStart: false,
      };
    default:
      return state;
  }
};
