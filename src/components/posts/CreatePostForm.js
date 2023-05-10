import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInputValues } from "../../store/posts/reducers/createPostSlice";
import { createPostAction } from "../../store/posts/actions/createPostActions";

import classes from "./styles/CreatePostForm.module.css";

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.createPost.isLoading);
  const { title, description, location, price, owner, createdAt, imageCover } =
    useSelector((state) => state.createPost);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    dispatch(setInputValues({ name: e.target.name, value: e.target.value }));
  };

  const cancelHandler = () => {
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPostAction({
        title: title,
        description: description,
        location: location,
        price: parseInt(price),
        owner: owner,
        createdAt: parseInt(createdAt),
        imageCover: imageCover,
      })
    );
    setTimeout(() => {
      navigate("/");
    }, 2000);
    console.log("Movie was created successfully!");
  };
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Add A New Listing</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.box}>
          <label htmlFor="title">Add Title:</label>
          <input
            type="text"
            id="title"
            onChange={changeHandler}
            name="title"
            value={title}
            required
          />
        </div>
        <label htmlFor="description">Add Description:</label>
        <div className={classes.box}>
          <textarea
            rows={4}
            cols={50}
            id="description"
            onChange={changeHandler}
            className={classes.desc}
            name="description"
            value={description}
            required
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="location">Add Location:</label>
          <input
            type="text"
            id="location"
            onChange={changeHandler}
            name="location"
            value={location}
            required
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="price">Add Price:</label>
          <input
            type="number"
            id="price"
            onChange={changeHandler}
            name="price"
            value={price}
            required
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="owner">Add Owner:</label>
          <input
            type="text"
            id="owner"
            onChange={changeHandler}
            name="owner"
            value={owner}
            required
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="createdAt">Add Created Date:</label>
          <input
            type="date"
            id="createdAt"
            onChange={changeHandler}
            name="createdAt"
            value={createdAt}
            required
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="imageCover">Add Image Cover:</label>
          <input
            type="text"
            id="imageCover"
            onChange={changeHandler}
            name="imageCover"
            value={imageCover}
            required
          />
        </div>
        <div>
          <button type="submit">{isLoading ? "Creating..." : "Create"}</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
