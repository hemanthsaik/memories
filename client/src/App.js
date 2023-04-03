import React, { useState, useEffect } from "react";
import Form from "./components/Forms/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary shadow bg-light mt-4 rounded d-flex p-0">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand d-flex gap-2" href="/">
            <h1>Memories</h1>
            <img
              className="mt-2"
              src={memories}
              alt="memories"
              width={40}
              height={40}
            />
          </a>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div className="col-lg-4">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
