import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./styles/HomePage.module.css";
import Spinner from "../ui/Spinner.js";
import { fetchAllPosts } from "../store/posts/actions/getAllPostsActions.js";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts.postList);
  const isLoading = useSelector((state) => state.allPosts.isLoading);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const loadPosts = posts
    ? posts.map((post) => (
        <Link id="link" to={`/${post._id}`} key={post._id} className={classes.card}>
          <img src={post.imageCover} alt={post.title} />
          <div className={classes.content}>
            <h2>{post.title}</h2>
            <h4>{post.location}</h4>
            <p>
              <strong>{post.price} SEK</strong> night
            </p>
          </div>
        </Link>
      ))
    : "There are no Posts";

  return (
    <>
      <div className={classes.container}>
        {isLoading ? <Spinner id="spinner" /> : loadPosts}
      </div>
    </>
  );
};

export default HomePage;
