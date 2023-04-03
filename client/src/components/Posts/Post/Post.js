import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ setCurrentId, post }) => {
  const dispatch = useDispatch();
  return (
    <div className="card rounded" style={{ width: "25rem" }}>
      <div className="position-relative">
        <img
          src={post.selectedFile}
          className="card-img"
          alt={post.title}
          width={100}
          height={250}
        />
        <div className="position-absolute top-0 start-0 p-4">
          <p className="card-text text-light">{post.creator}</p>
          <p className="card-text text-light">
            {moment(post.createdAt).fromNow()}
          </p>
        </div>
        <div className="position-absolute top-0 end-0 ">
          <button
            onClick={() => {
              setCurrentId(post._id);
            }}
            className="btn fs-1 text-light"
          >
            ...
          </button>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{post.tags}</p>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.message}</p>
      </div>
      <div className="card-footer d-flex justify-content-between ">
        <button
          className="btn"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <p className="text-primary">Likes:{post.likeCount}</p>
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          {" "}
          delete
        </button>
      </div>
    </div>
  );
};

export default Post;
