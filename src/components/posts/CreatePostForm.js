import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInputValues } from "../../store/posts/reducers/createPostSlice";
import { createPostAction } from "../../store/posts/actions/createPostActions";

import classes from "./styles/CreatePostForm.module.css";
import { useState } from "react";
import Alert from "../../ui/Alert";
import TitleInput from "../form/posts/TitleInput";
import DescInput from "../form/posts/DescInput";
import LocationInput from "../form/posts/LocationInput";
import PriceInput from "../form/posts/PriceInput";
import DateInput from "../form/posts/DateInput";
import ImageCoverInput from "../form/posts/ImageCoverInput";

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const { isLoading, success } = useSelector((state) => state.createPost);
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
    setShowAlert(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const alert = success ? (
    <Alert type="success">
      <p>Successfully Created Post!</p>
    </Alert>
  ) : (
    <Alert type="error">
      <p>Failed to create post...</p>
    </Alert>
  );

  return (
    <div className={classes.container}>
      {showAlert ? alert : null}
      <h2 className={classes.heading}>Add A New Listing</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.box}>
          <TitleInput changeHandler={changeHandler} value={title} />
        </div>
        <label htmlFor="description">Add Description:</label>
        <div className={classes.box}>
          <DescInput changeHandler={changeHandler} value={description} />
        </div>
        <div className={classes.box}>
          <LocationInput changeHandler={changeHandler} value={location} />
        </div>
        <div className={classes.box}>
          <PriceInput changeHandler={changeHandler} value={price} />
        </div>
        <div className={classes.box}>
          <DateInput changeHandler={changeHandler} value={createdAt} />
        </div>
        <div className={classes.box}>
          <ImageCoverInput changeHandler={changeHandler} value={imageCover} />
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
