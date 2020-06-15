import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_TEAM,
  GET_TEAMS,
  ADD_ASSIGN,
  ADD_SCHEDULE
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  team: null,
  teams: null,
  assign: null,
  assings: [],
  loading: true,
  schedule: null,
  schedules: [],
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case ADD_TEAM:
      return {
        ...state,
        team: [payload, ...state.team],
        loading: false
      };
    case ADD_ASSIGN:
      return {
        ...state,
        assign: [payload, ...state.team],
        loading: false
      };
    case ADD_SCHEDULE:
      return {
        state,
        schedule: [payload, ...state.team],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
