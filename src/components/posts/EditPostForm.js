import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPostAction } from "../../store/posts/actions/editPostActions";
import { getPrePop } from "../../store/posts/actions/getPostIdActions";
import { editInputValues } from "../../store/posts/reducers/editPostSlice";

import classes from "./styles/CreatePostForm.module.css";
import { useState } from "react";
import Alert from "../../ui/Alert";
import TitleInput from "../form/posts/TitleInput";
import DescInput from "../form/posts/DescInput";
import LocationInput from "../form/posts/LocationInput";
import PriceInput from "../form/posts/PriceInput";
import DateInput from "../form/posts/DateInput";
import ImageCoverInput from "../form/posts/ImageCoverInput";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { postId } = useParams();
  const { isLoading, postValues, success } = useSelector(
    (state) => state.editPost
  );

  const { title, description, location, price, createdAt, imageCover } =
    postValues || {};

  useEffect(() => {
    dispatch(getPrePop(postId));
  }, [dispatch, postId]);

  const changeHandler = (e) => {
    dispatch(editInputValues({ name: e.target.name, value: e.target.value }));
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(editPostAction(postId, postValues));
    setShowAlert(true);
    setTimeout(() => {
      navigate(`/${postId}`);
    }, 2000);
  };

  const alert = success ? (
    <Alert type="success">
      <p>Successfully Edited Post!</p>
    </Alert>
  ) : (
    <Alert type="error">
      <p>Failed to edit post...</p>
    </Alert>
  );

  return (
    <div className={classes.container}>
      {showAlert ? alert : null}
      <h2 className={classes.heading}>Edit Your Listing</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.box}>
          <TitleInput changeHandler={changeHandler} title={title} />
        </div>
        <label htmlFor="description">Description:</label>
        <div className={classes.box}>
          <DescInput changeHandler={changeHandler} description={description} />
        </div>
        <div className={classes.box}>
          <LocationInput changeHandler={changeHandler} location={location} />
        </div>
        <div className={classes.box}>
          <PriceInput changeHandler={changeHandler} price={price} />
        </div>
        <div className={classes.box}>
          <DateInput changeHandler={changeHandler} createdAt={createdAt} />
        </div>
        <div className={classes.box}>
          <ImageCoverInput
            changeHandler={changeHandler}
            imageCover={imageCover}
          />
        </div>
        <div>
          <button type="submit">
            {isLoading ? "Submit..." : "Submitting"}
          </button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
