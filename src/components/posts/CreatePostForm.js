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
  const { isLoading, success, postValues } = useSelector(
    (state) => state.createPost
  );
  const { title, description, location, price, owner, createdAt, imageCover } =
    postValues;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    dispatch(setInputValues({ name: e.target.name, value: e.target.value }));
  };

  const cancelHandler = () => {
    navigate("/");
  };

  const submitHandler = async (e) => {
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
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formContainer}>
          <div className={classes.leftside}>
            <div className={classes.box}>
              <label className={classes.form}>Title</label>
              <TitleInput changeHandler={changeHandler} value={title} />
            </div>
            {/* <label htmlFor="description">Add Description:</label> */}
            <div className={classes.box}>
              <label className={classes.form}>Location</label>

              <LocationInput changeHandler={changeHandler} value={location} />
            </div>

            <div className={classes.box}>
              <label className={classes.form}>Image Cover</label>

              <ImageCoverInput
                changeHandler={changeHandler}
                value={imageCover}
              />
            </div>
            <div className={classes.smInput}>
              <div className={classes.box}>
                <label className={classes.form}>Price</label>

                <PriceInput changeHandler={changeHandler} value={price} />
              </div>
              <div className={classes.box}>
                <label className={classes.form}>Date</label>

                <DateInput changeHandler={changeHandler} value={createdAt} />
              </div>
            </div>
          </div>
          <div className={classes.rightside}>
            <div className={classes.box}>
              <label className={classes.form}>Description</label>

              <DescInput changeHandler={changeHandler} value={description} />
            </div>
          </div>
        </div>
        <div className={classes.btnGroup}>
          <button className={classes.mainBtn} type="submit">
            {isLoading ? "Creating..." : "Create"}
          </button>
          <button className={classes.secondBtn} onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
