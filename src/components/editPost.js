import React, { useEffect, useState } from "react";
import axios from "axios";

function EditPost() {
  const [post, setPost] = useState({
    body: "",
    title: "",
    userId: "",
    id: "",
  });
  // const msg = useState({
  //   success:false,
  //   error:''
  // })
  const [isUpdated,setIsUpdated] = useState(false)
  const formHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [fieldName]: value,
    });
  };
  const onEditPost = () => {
    console.log("updating post");
    axios
      .put(`http://localhost:8080/posts/${post.id}`, post)
      .then((responce) => {
        setIsUpdated(true)
        console.log(responce.data)
      })

      .catch(error => {
        setIsUpdated(false)
      })
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${post.id}`)
      .then((res) => setPost(res.data));
  }, [post.id]);

  return (
    <div>
      <form
        className="form-group container w-50"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        encType="multipart/orm-data"
      >
        <label>Body</label>
        <textarea
          className="form-control"
          name="body"
          value={post.body}
          onChange={formHandler}
        />

        <label>Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={post.title}
          onChange={formHandler}
        />

        <label>userId</label>
        <input
          className="form-control"
          type="text"
          name="userId"
          value={post.userId}
          onChange={formHandler}
        />
        <label>id</label>
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
        {post.title}
        {post.body}
        {post.userId}
        {post.id}
        {isUpdated && 'updated succesfully'}
      </form>

      <br />
    </div>
  );
}

export default EditPost;
