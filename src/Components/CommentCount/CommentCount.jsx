import React from "react";
import pic from "./Vector.png";
import s from "./CommentCount.module.css";

let CommentCount = () => {
  return (
    <button className={s.container}>
      <img src={pic} className={s.conmment}></img>
      <div class={s.count}>4</div>
    </button>
  );
};

export default CommentCount;
