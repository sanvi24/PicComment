import React from "react";
import { PinkLike } from "../assets";

const Cover = () => (
  <div className="flex w-full h-screen items-center justify-center bg-[#ffb3c6]">
    <div className="text-xl text-pink-900">
      <span>Pic</span>
      <img src={PinkLike} className="w-6 h-6" alt="pink-like" />
      <span>Comment</span>
    </div>
  </div>
);

export default Cover;
