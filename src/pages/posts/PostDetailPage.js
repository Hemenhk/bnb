import React, { useEffect } from "react";
import PostItem from "../../components/posts/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../store/posts/actions/getPostIdActions";

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.singleMovie.post);
  const isLoading = useSelector((state) => state.singleMovie.isLoading);

  useEffect(() => {
    dispatch(getSinglePostAction(postId));
  }, [dispatch, postId]);

  return <div>{!isLoading && <PostItem post={post} />}</div>;
};

export default PostDetailPage;
