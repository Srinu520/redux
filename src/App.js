import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DeletePost from "./components/deletePost";
import AddPost from "./components/addPost";
import EditPost from "./components/editPost";
import GetPost from "./components/getPost";
import EditPost2 from "./components/editpost2";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/add">
        <AddPost />
      </Route>

      <Route path="/edit/:pid">
        <EditPost2 />
      </Route>
      <Route exact path="/">
        <GetPost />
      </Route>
      <Route path="/delete">
        <DeletePost />
      </Route>
    </Router>
  );
}

export default App;
