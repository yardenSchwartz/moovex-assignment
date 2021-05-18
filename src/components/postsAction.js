import axios from 'axios';
export const GET_POSTS = 'GET_POSTS';
export const POST_ERROR = 'POST_ERROR';

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res.data);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.respone.statusText, status: err.respone.status },
    });
  }
};
