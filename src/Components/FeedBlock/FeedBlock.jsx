import React from "react";
import LikeCount from "./../LikeCount/LikeCount";
import CommentCount from "./../CommentCount/CommentCount";
import s from "./FeedBlock.module.css";
import "./FeedBlock.module.css";

import picLike from "./PictureLike.png";

class FeedBlock extends React.Component {
  state = {
    showLike: false,
    likes: 59
  };

  handleLikeClick = () => {
    const { likes } = this.state;
    this.setState({ showLike: true, likes: likes + 1 });
    this.removeLikePic();
  };

  removeLikePic = () => {
    setTimeout(() => {
      this.setState({ showLike: false });
    }, 800);
  };

  render() {
    const { showLike, likes } = this.state;
    return (
      <div className={s.container}>
        {showLike && (
          <>
            <div className={s.picLike}>
              <div>
                <img src={picLike} />
              </div>
            </div>

            <div className={s.counter}>{likes}</div>
          </>
        )}

        <a href={'/post/'+this.props.id}><img src={this.props.image} className={s.picture}></img></a>
        <div className={s.text}>Lorem ipsum dolor sit amet #hashtag</div>
        <div className={s.count_container}>
          <LikeCount likes={likes} handleLikeClick={this.handleLikeClick} />
          <CommentCount />
        </div>
      </div>
    );
  }
}

export default FeedBlock;
