import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

import classes from "./styles/PostItem.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Alert from "../../ui/Alert";

const PostItem = ({ post, isAuthor }) => {
  const [showAlert, setShowAlert] = useState(false);
  const success = useSelector((state) => state.deletePost.success);

  const matchingId = isAuthor ? (
    <menu className={classes.menu}>
      <Link to="edit">
        <button className={classes.editButton}>Edit</button>
      </Link>
      <DeleteBtn success={success} setShowAlert={setShowAlert} />
    </menu>
  ) : null;

  const alert = success ? (
    <Alert type="success">
      <p>Successfully Deleted Post!</p>
    </Alert>
  ) : (
    <Alert type="error">
      <p>Failed to delete post...</p>
    </Alert>
  );

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {showAlert ? alert : null}
        <img
          className={classes.image}
          src={post?.imageCover}
          alt={post?.title}
        />
        <div className={classes.header}>
          <h1 className={classes.title}>{post?.title}</h1>
          <div className={classes.ratings}>
            <span className={classes.stars}>{post?.ratingsQuantity} stars</span>
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.detailItem}>
            <strong>Location:</strong> {post?.location}
          </div>
          <div className={classes.detailItem}>
            <strong>Created Date:</strong> {post?.createdAt}
          </div>
          <div className={classes.detailItem}>
            <strong>Price:</strong> {post?.price} SEK night
          </div>
          <div className={classes.detailItem}>
            <strong>Owner:</strong> {post?.owner}
          </div>
        </div>
        <div className={classes.description}>
          <h4>Description</h4>
          <p>{post?.description}</p>
        </div>
        {matchingId}
      </div>
    </div>
  );
};

export default PostItem;
