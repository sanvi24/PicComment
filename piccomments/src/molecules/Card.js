import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Like, PinkLike, Comment } from "../assets";
import { addLikes } from "../blogs";
import { CommentButton, Description } from "../atoms";

const Card = ({ article }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isComment, setIsComment] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(true);
    setLikes(likes + 1);
    dispatch(addLikes(likes));
  };

  const handleCommentClick = () => {
    setIsComment(!isComment);
  };
  
  return (
    <div className="flex flex-col m-6 p-4 pt-3 max-w-96 border-2 border-pink-900 rounded-md shadow-lg">
      <div className="flex-col p-2 px-4 font-semibold justify-between">
        <div className="text-sm">Author: @{article.author}</div>
        <div className="text-xs py-2">Posted: {article.publishedAt}</div>
      </div>
      <div className="text-center font-sans text-sm py-2 pt-2 sm: px-2">
        <Description text={article.title} maxLength={70} />
      </div>
      <div className="sm:pl-7 items-center justify-center">
        <img
          src={`${article.urlToImage}`}
          className="w-72 h-48 object-cover"
          alt="content-pic"
        />
      </div>
      <div className="text-sm text-justify p-3 px-4 text-pretty">
        <Description text={article.description} maxLength={80} />
      </div>
      <div className="flex p-4 space-x-8 sm:space-x-28">
        <div className="flex space-x-4 sm:space-x-8">
          <button className="" onClick={handleLikeClick}>
            {isLiked}
            <img
              src={isLiked ? PinkLike : Like}
              className="w-6 h-6 sm:w-6"
              alt="Like"
            />
          </button>
          <button className="" onClick={handleCommentClick}>
            <img src={Comment} className="w-6 h-6 sm:w-6" alt="Comment" />
          </button>
        </div>
      </div>
      <div className="flex px-3 font-semibold text-xs text-right">
        {likes} likes
      </div>
      {isComment && <CommentButton author={article.author} />}
    </div>
  );
};

export default Card;
