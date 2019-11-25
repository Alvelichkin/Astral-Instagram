import React, { Component } from "react";
import s from "./LikeCount.module.css";
import LikeIcon  from "./Like.png";

const LikeCount = ({ likes, handleLikeClick }) => (
  <button className={s.container} onClick={handleLikeClick}>
    <div>
      <img src={LikeIcon} className={s.like}></img>
    </div>
    <div class={s.count}>{likes}</div>
  </button>
);

export default LikeCount;
