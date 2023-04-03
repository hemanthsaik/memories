import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

// get posts

const Form = ({ currentId, setCurrentId }) => {
  const [formData, setFormData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setFormData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setFormData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, formData));
    } else {
      dispatch(createPost(formData));
    }
    clear();
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="shadow p-5 rounded">
      <h6>{currentId ? "Editing" : "Creating"} a Memory</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="creator"
            name="creator"
            placeholder="Creator"
            value={formData.creator}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="message"
            rows="3"
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <FileBase
            type="file"
            multiple={false}
            className="form-control"
            onDone={({ base64 }) => {
              setFormData({ ...formData, selectedFile: base64 });
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <button className="btn btn-secondary mx-2 float-end" onClick={clear}>
        clear
      </button>
    </div>
  );
};

export default Form;
