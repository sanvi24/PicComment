import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { addComment } from "../blogs";
import { UpArrow } from "../assets";
import getCurrentDateAndTime from "../helpers/getCurrentDateAndTime";

const CommentButton = ({ author }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [comment, setComment] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const currentDate = getCurrentDateAndTime();
    if (comment.trim() !== "") {
      const newComment = {
        id: Date.now(),
        author: author,
        comment: comment,
        date: currentDate,
      };
      const combinedComment = [...comments, newComment];
      dispatch(addComment(combinedComment));
      setComment("");
    }
  };

  return (
    <div>
      <div className="px-4 pt-2 font-semibold text-sm">
        {!isEmpty(comments) &&
          comments.map(({ comment, author }) => <div>@{author}: {comment}</div>)}
      </div>
      <form className="flex p-4" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          className="outline-none w-full h-10 text-center"
          onChange={(e) => setComment(e.target.value)}
        />
        {comment && (
          <button type="submit" className="">
            <img src={UpArrow} className="w-6 h-6" alt="up-arrow" />
          </button>
        )}
      </form>
    </div>
  );
};

export default CommentButton;
