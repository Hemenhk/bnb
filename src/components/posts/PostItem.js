import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

import classes from "./styles/PostItem.module.css";

const PostItem = ({ post }) => {
  return (
    <div className={classes.container}>
  <div className={classes.content}>
    <img className={classes.image} src={post?.imageCover} alt={post?.title} />
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
    <menu className={classes.menu}>
      <Link to="edit">
        <button className={classes.editButton}>Edit</button>
      </Link>
      <DeleteBtn />
    </menu>
  </div>
</div>

  );
};

export default PostItem;
