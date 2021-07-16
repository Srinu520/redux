import React, { useEffect, useState } from "react";
//import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedPost,
  updateMiddleware,
} from "../redux/actions/posts/postActions";

function EditPost2() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postReducer);
  console.log("postData:", postData);
  const history = useHistory();
  const [post, setPost] = useState({
    body: "",
    title: "",
    pId: "",
    id: "",
  });
  //const [isUpdated, setIsUpdated] = useState();
  const formHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [fieldName]: value,
    });
  };
  const onEditPost = (e) => {
    e.preventDefault();
    console.log("updating post");

    dispatch(updateMiddleware(pid, post));
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  useEffect(() => {
    dispatch(selectedPost(pid));
  }, [pid]);
  useEffect(() => {
    if (postData.post) {
      setPost({ ...postData.post });
    }
  }, [postData.post]);

  console.log(post);
  return (
    <div className="bg-dark-center">
      <form className="form-group container w-50">
        <label>BODY</label>
        <textarea
          className="form-control"
          name="body"
          value={post.body}
          onChange={formHandler}
        />

        <label>TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={post.title}
          onChange={formHandler}
        />

        <label>USER ID</label>
        <input
          className="form-control"
          type="text"
          name="pId"
          value={post.pId}
          onChange={formHandler}
        />
        <label>ID</label>
        <input
          type="number"
          name="id"
          value={post.id}
          onChange={formHandler}
          className="form-control"
        />

        <button className="btn btn-primary form-control" onClick={onEditPost}>
          submit
        </button>

        <h1 className="w-100 text-white">
          {postData.isUpdated && "updated succesfully"}
        </h1>
      </form>
      <br />
    </div>
  );
}

export default EditPost2;
