import { BlogPostsInitialState } from './initialState';
import * as ActionTypes from '../actions/actionTypes';

export const blogpostReducer = (state = BlogPostsInitialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_BLOGPOST_START:
      return { ...state, addBlogPostStart: true };

    case ActionTypes.ADD_BLOGPOST_SUCCESS:
      return {
        ...state,
        addBlogPostStart: false,
        blogposts: [...state.blogposts, action.payload]
      };

    case ActionTypes.ADD_BLOGPOST_ERROR:
      return {
        ...state,
        addBlogPostStart: false,
        addBlogPostError: true
      };

    case ActionTypes.EDIT_BLOGPOST_START:
      return {
        ...state,
        editBlogPostStart: true
      };
    case ActionTypes.EDIT_BLOGPOST_SUCCESS:
      return {
        ...state,
        editBlogPostStart: false,
        singleBlogPost: action.payload,
        blogposts: state.blogposts.map((blogpost: any) =>
          blogpost.id === action.payload.id ? action.payload : blogpost
        )
      };
    case ActionTypes.EDIT_BLOGPOST_ERROR:
      return {
        ...state,
        editBlogPostStart: false,
        editBlogPostError: true
      };
    case ActionTypes.DELETE_BLOGPOST_START:
      return {
        ...state,
        deleteBlogPostStart: true
      };
    case ActionTypes.DELETE_BLOGPOST_SUCCESS:
      return {
        ...state,
        deleteBlogPostStart: false,
        blogposts: []
      };
    case ActionTypes.DELETE_BLOGPOST_ERROR:
      return {
        ...state,
        deleteBlogPostStart: false,
        deleteBlogPostError: true
      };

    case ActionTypes.GET_BLOGPOSTS_BY_USER_START:
      return {
        ...state,
        getBlogPostsByUserStart: true
      };

    case ActionTypes.GET_BLOGPOSTS_BY_USER_SUCCESS:
      return {
        ...state,
        getBlogPostsByUserStart: false,
        blogposts: [...state.blogposts, ...action.payload]
      };

    case ActionTypes.GET_BLOGPOSTS_BY_USER_ERROR:
      return {
        ...state,
        getBlogPostsByUserError: true,
        getBlogPostsByUserStart: false
      };

    case ActionTypes.GET_SINGLE_BLOGPOST_START:
      return {
        ...state,
        getSingleBlogPostStart: true
      };

    case ActionTypes.GET_SINGLE_BLOGPOST_SUCCESS:
      return {
        ...state,
        getSingleBlogPostStart: false,
        singleBlogPost: action.payload
      };

    case ActionTypes.GET_SINGLE_BLOGPOST_ERROR:
      return {
        ...state,
        getSingleBlogPostError: true,
        getSingleBlogPostStart: false
      };

      case ActionTypes.GET_ALL_BLOGPOSTS_START:
        return {
          ...state,
          getAllBlogPostsStart: true
        };
  
      case ActionTypes.GET_ALL_BLOGPOSTS_SUCCESS:
        return {
          ...state,
          getAllBlogPostsStart: false,
          allBlogPosts: action.payload
        };
  
      case ActionTypes.GET_ALL_BLOGPOSTS_ERROR:
        return {
          ...state,
          getAllBlogPostsError: true,
          getAllBlogPostsStart: false
        }
    default:
      return state;
  }
};