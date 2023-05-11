import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostAction } from "../../store/posts/actions/deletePostActions";

const DeleteBtn = ({ setShowAlert }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();

  const deleteHandler = () => {
    const proceed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (proceed) {
      dispatch(deletePostAction(postId));
      setShowAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  return (
    <div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
