import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMiddleware,
  loadPosts,
} from "../redux/actions/posts/postActions";
function GetPost() {
  const dispatch = useDispatch();
  //const [posts, setPosts] = useState([]);
  const postsReducer = useSelector((state) => state.postReducer);
  console.log("postReducer", postsReducer.posts);

  // const onDelete = (e) => {
  //   console.log(e.target.value);
  //   const id = e.target.value;
  //   axios.delete(`http://localhost:8080/posts/${id}`);
  //   //onGetPost();
  //   dispatch(loadPosts());
  // };
  const onDelete = (e) => {
    console.log(e.target.value);
    const id = e.target.value;
    dispatch(deleteMiddleware(id));
  };
  useEffect(() => {
    //onGetPost()
    dispatch(loadPosts());
  }, []);

  return (
    <div className="card text-center bg-dark">
      {postsReducer.posts.map((post) => {
        return (
          <div
            key={post.id}
            className="card w-50 text-center m-auto bg-info mt-3"
          >
            <h1>POST ID - {post.id}</h1>
            <hr />
            <h3>{post.title}</h3>
            <hr />
            <p>{post.body}</p>
            <button
              value={post.id}
              onClick={onDelete}
              className="btn btn-danger"
            >
              DELETE
            </button>
            {/* <button value={post.id} onClick={onEdit}>edit</button> */}

            <Link
              to={`/edit/${post.id}`}
              className="text-white text-decoration-none w-100"
            >
              <button className="btn btn-primary form-control">EDIT</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default GetPost;
