import axios from "axios";
import { postActionTypes } from "./postActionTypes";

export const fetchPosts = (payload) => ({
  type: postActionTypes.FETCH_POSTS,
  payload,
});
export const addPost = (payload) => ({
  type: postActionTypes.ADD_POST,
  payload,
});
export const updatePost = (payload) => ({
  type: postActionTypes.UPDATE_POST,
  payload,
});
export const deletePost = (payload = "") => ({
  type: postActionTypes.DELETE_POST,
  payload,
});
export const singlePost = (payload) => ({
  type: "singlePost",
  payload,
});

export const loadPosts = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8080/posts")
      .then((res) => {
        //console.log("res", res);
        dispatch(fetchPosts(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const deleteMiddleware = (id) => {
  console.log("ID :", id);
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/posts/${id}`)
      .then((res) => {
        console.log("res on DELETE :", res);
        dispatch(deletePost(id));
      })
      .catch((err) => console.log(err));
  };
};

export const addmiddleware = (post) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:8080/posts`, post)
      .then((res) => {
        console.log("res", res);
        dispatch(addPost(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateMiddleware = (id, post) => {
  console.log("id=", id, "post=", post);
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/posts/${id}`, post)
      .then((res) => {
        console.log("res", res);
        dispatch(updatePost(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const selectedPost = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((res) => {
        //console.log("res", res);
        dispatch(singlePost(res.data));
      })
      .catch((err) => console.log(err));
  };
};
// axios
//       .put(`http://localhost:8080/posts/${post.id}`, post)
//       .then((responce) => {
//         setIsUpdated(true)
//         console.log(responce.data)
//         setTimeout(()=>{
//           history.push('/get')
//         },3000)
//       })
//       .catch(error => {
//         setIsUpdated(false)
//       })
