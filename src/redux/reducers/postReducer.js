import { postActionTypes } from "../actions/posts/postActionTypes";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  isUpdated: false,
  isAdded: false,
};

const postReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case postActionTypes.ADD_POST:
      return {
        ...state,
        isAdded: true,
      };
    case postActionTypes.UPDATE_POST:
      return {
        ...state,
        //post: action.payload,
        isUpdated: true,
      };
    case postActionTypes.FETCH_POSTS:
      return {
        //...state,
        posts: action.payload,
        loading: false,
      };
    case postActionTypes.DELETE_POST: {
      const newState = { ...state };
      const posts = newState.posts.filter(
        (post) => post.id !== Number(action.payload)
      );
      console.log("posts", posts);
      newState.posts = posts;
      // console.log(action);
      return newState;
    }
    case "singlePost":
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
