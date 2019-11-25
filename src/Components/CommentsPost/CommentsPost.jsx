import React from "react";
import s from './CommentsPost.module.css'

let CommentsPost = props => {
  return (
    <>
    <div>
    <span className={s.userName}>
      {props.username}
     </span>
     <span className={s.userComment}>
      {props.comment}
      </span>
      </div>
      </>
    
  );
};

export default CommentsPost;
