import React, { useEffect } from "react";
import PostItem from "../../components/posts/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../store/posts/actions/getPostIdActions";
import { setLogin } from "../../store/auth/reducers/authSlice";
import { getAuthUser } from "../../store/utils/auth";
import Spinner from "../../ui/Spinner";

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.singlePost.post);
  const { user } = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state.singlePost.isLoading);

  useEffect(() => {
    dispatch(getSinglePostAction(postId));
    dispatch(setLogin(JSON.parse(getAuthUser())));
  }, [dispatch, postId]);
  const isAuthor = user === post?.author;
  return (
    <div>
      {isLoading ? <Spinner /> : <PostItem post={post} isAuthor={isAuthor} />}
    </div>
  );
};

export default PostDetailPage;
