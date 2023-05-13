import React, { useEffect } from "react";
import PostItem from "../../components/posts/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../store/posts/actions/getPostIdActions";
import Spinner from "../../ui/Spinner";

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post, isLoading } = useSelector((state) => state.singlePost);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getSinglePostAction(postId));
    
  }, [dispatch, postId]);
  const isAuthor = user && user._id === post?.author;
  return (
    <div>
      {isLoading ? <Spinner /> : <PostItem post={post} isAuthor={isAuthor} />}
    </div>
  );
};

export default PostDetailPage;
