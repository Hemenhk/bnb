import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../store/posts/actions/getAllPostsActions";
import classes from "./styles/HomePage.module.css"

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts.postList);
  const isLoading = useSelector((state) => state.allPosts.isLoading);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <div className={classes.container}>
          {posts.map((post) => (
            <Link to={`/${post._id}`} key={post._id} className={classes.card}>
              <img src={post.imageCover} alt={post.title} />
              <div className={classes.content}>
                <h2>{post.title}</h2>
                <h4>{post.location}</h4>
                <p>{post.price} SEK night</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
