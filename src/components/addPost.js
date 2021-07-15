import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmiddleware } from "../redux/actions/posts/postActions";

function AddPost() {
  const [post, setPost] = useState({
    body: "",
    title: "",
    pId: "",
    id: "",
  });
  const isAdded = useSelector((state) => state.postReducer.isAdded);
  console.log("isAdded:", isAdded);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const formHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    //console.log(e.target.validity);
    setPost({
      ...post,
      [fieldName]: value,
    });
  };

  const onAddPost = () => {
    const { body, title, pId } = post;
    if (!body || !title || !pId) {
      setError("Please Enter All The Filds ");
    } else {
      dispatch(addmiddleware(post));
      setError("");
      setDisplay(true);
    }

    setPost({
      ...post,
      body: "",
      title: "",
      pId: "",
      id: "",
    });
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  };

  console.log(post);
  return (
    <div className="bg-dark-center">
      <form
        className="form-group container w-50"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        encType="multipart/orm-data"
      >
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
          onInput={formHandler}
          pattern="[0-9]*"
        />
        <button className="btn btn-primary form-control" onClick={onAddPost}>
          submit
        </button>
        <p>{error}</p>
        {display && "POST IS ADDED"}
      </form>
    </div>
  );
}

export default AddPost;
