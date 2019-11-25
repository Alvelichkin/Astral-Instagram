import React, { Component } from "react";
import { withRouter } from "react-router";
import s from "./Post.module.css";
import FeedBlock from "../FeedBlock/FeedBlock";
import CommentsPost from "./../CommentsPost/CommentsPost";
import { stat } from "fs";
import png2 from './../FeedBlock/2.png';

class Post extends Component {
  state = {
    commentsFeed: [{ username: "Иван", comment: "Зашибись картинка!" }],
    author:'',
    comment:''
  };

addNewComment = () => {

this.setState({
    commentsFeed:this.state.commentsFeed.concat({
      username: this.state.author,
      comment: this.state.comment
    })
  }
);
}


  commentElement = () =>
    this.state.commentsFeed.map((commentElem) => {
      return (
        <CommentsPost
          username={commentElem.username}
          comment={commentElem.comment}
        />
      );
    });

    handleChange=(fieldName) => event => {
      this.setState({
        [fieldName]:event.target.value
      })
    }

    // handleChangeAuthor = event => {
    //   this.setState({
    //     author: event.target.value
    //   })
    // }

    // handleChange = fieldName => {
    //   return event => {
    //     this.setState...
    //   }
    // }

    getPost = () => {
      const { posts, match: { params: { id }}} = this.props;
      return posts.find(post => post.id == id);
    }

  render() {
    const post = this.getPost();
 
    return (
      <>
        <div className={s.container}>
          <div>
            <FeedBlock image={post.image} />
          </div>
          <div>    
                
            <form className={s.regForm}>
              <div className={s.previousComment}>
              {this.commentElement()} 
              </div>
              <div>
                <input
                  placeholder="Author"
                  type="text"
                  value={this.state.author}
                  onChange={this.handleChange('author')}
                ></input>
              </div>
              <div>
                <input
                  placeholder="Comment"
                  type="textarea"
                  value={this.state.comment}
                  onChange={this.handleChange('comment')}
                ></input>
              </div>
            </form>
          </div>
          <div>
            <div>
              <button className={s.addPostButton} onClick={this.addNewComment}>
                Добавить
              </button>
            </div>
            <div>
              <p className={s.replacePostButton}>Отмена</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Post);
