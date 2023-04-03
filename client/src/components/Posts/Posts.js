import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <p>Loading...</p>
  ) : (
    <div className="row">
      {posts.map((post, index) => (
        <div className="col-lg-6" key={index}>
          <Post setCurrentId={setCurrentId} post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
