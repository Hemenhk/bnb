import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPostsByAuthor } from "../../store/posts/actions/getPostsByAuthorActions";
import classes from "../styles/HomePage.module.css";
import Spinner from "../../ui/Spinner";

const PostByAuthor = () => {
  const { profileId } = useParams();
  const { postList, isLoading } = useSelector((state) => state.authorPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsByAuthor(profileId));
  }, [dispatch, profileId]);

  const loadPosts = postList
    ? postList.map((post) => (
        <Link to={`/posts/${post._id}`} key={post._id} className={classes.card}>
          <img src={post.imageCover} alt={post.title} />
          <div className={classes.content}>
            <h2>{post.title}</h2>
            <h4>{post.location}</h4>
            <p>{post.owner}</p>
            <p>
              <strong>{post.price} SEK</strong> night
            </p>
          </div>
        </Link>
      ))
    : "User has not uploaded any posts";

  return (
    <>
      <div className={classes.container}>
        {isLoading ? <Spinner /> : loadPosts}
      </div>
    </>
  );
};

export default PostByAuthor;
