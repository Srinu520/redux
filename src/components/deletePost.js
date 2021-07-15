import React, { useState } from "react";
import axios from "axios";
function DeletePost() {
  const [id, setId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false)
  const getId = (e) => {
    setId(e.target.value);
    setIsDeleted(false);
  };
  const onDeletePost = () => {
    console.log("deleting post");
    axios
      .delete(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        console.log(response)
        setIsDeleted(true)
      });
  };
  console.log(id);

  return (
    <div>
      <button onClick={onDeletePost}>delete</button>
      <input
        type="number"
        placeholder="enter id to delete"
        defaultValue={id}
        onChange={getId}
      />
      {isDeleted && <h1>post is deleted {id}</h1>}
    </div>
  );
}

export default DeletePost;
