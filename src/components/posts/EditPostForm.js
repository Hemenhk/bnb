import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPostAction } from "../../store/posts/actions/editPostActions";
import { getPrePop } from "../../store/posts/actions/getPostIdActions";
import { editInputValues } from "../../store/posts/reducers/editPostSlice";

import classes from "./styles/CreatePostForm.module.css";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const isLoading = useSelector((state) => state.editPost.isLoading);
  const postValues = useSelector((state) => state.editPost.postValues);

  const { title, description, location, price, owner, createdAt, imageCover } =
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
    setTimeout(() => {
      navigate(`/${postId}`);
    }, 2000);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Edit Your Listing</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.box}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={changeHandler}
            name="title"
            value={title}
          />
        </div>
        <label htmlFor="description">Description:</label>
        <div className={classes.box}>
          <textarea
            rows={4}
            cols={50}
            id="description"
            onChange={changeHandler}
            className={classes.desc}
            name="description"
            value={description}
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            onChange={changeHandler}
            name="location"
            value={location}
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="price">Price:</label>
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
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            onChange={changeHandler}
            name="owner"
            value={owner}
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="createdAt">Created Date:</label>
          <input
            type="date"
            id="createdAt"
            onChange={changeHandler}
            name="createdAt"
            value={createdAt}
          />
        </div>
        <div className={classes.box}>
          <label htmlFor="imageCover">Image Cover:</label>
          <input
            type="text"
            id="imageCover"
            onChange={changeHandler}
            name="imageCover"
            value={imageCover}
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
