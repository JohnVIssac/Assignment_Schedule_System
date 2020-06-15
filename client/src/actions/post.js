import axios from 'axios';
import { setAlert } from './alert';
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
} from './types';
import { body } from 'express-validator';

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get teams
export const getTeams = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/team');

    dispatch({
      type: GET_TEAMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.msg
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/posts', formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Team post
export const addTeam = ({
  cname,
  batch,
  teamno,
  stud1,
  roll1,
  stud2,
  roll2,
  stud3,
  roll3,
  stud4,
  roll4,
  stud5,
  roll5,
  stud6,
  roll6
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    cname,
    batch,
    teamno,
    stud1,
    roll1,
    stud2,
    roll2,
    stud3,
    roll3,
    stud4,
    roll4,
    stud5,
    roll5,
    stud6,
    roll6
  });

  try {
    const res = await axios.post('/api/team', body, config);

    dispatch({
      type: ADD_TEAM,
      payload: res.data
    });

    dispatch(setAlert('Team Posted', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.msg
    });
  }
};

// Add Assign post - Assignment
export const addAssign = ({ cname, batch, studno }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ cname, batch, studno });

  try {
    const res = await axios.post('/api/assign', body, config);

    dispatch({
      type: ADD_ASSIGN,
      payload: res.data
    });

    dispatch(setAlert('Assignment Alert Posted', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.msg
    });
  }
};

// Add Schedule post
export const addSchedule = ({
  cname,
  batch,
  teamno,
  topic,
  datep,
  period
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ cname, batch, teamno, topic, datep, period });

  try {
    const res = await axios.post('/api/schedule', body, config);

    dispatch({
      type: ADD_SCHEDULE,
      payload: res.data
    });

    dispatch(setAlert('Assignment Schedule Posted', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.msg
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
