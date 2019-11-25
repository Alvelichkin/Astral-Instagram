import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import FeedBlock from "./Components/FeedBlock/FeedBlock";
import Auth from "./Components/Auth/Auth";
import Enter from "./Components/Enter/Enter";
import Post from "./Components/Post/Post";
import pic from "./Components/FeedBlock/1.png";
import png2 from "./Components/FeedBlock/2.png";
import png4 from "./Components/FeedBlock/4.png";
import png6 from "./Components/FeedBlock/6.png";
import png8 from "./Components/FeedBlock/8.png";
import png9 from "./Components/FeedBlock/9.png";

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        image: pic
      },
      {
        id: 2,
        image: png2
      },
      {
        id: 3,
        image: png4
      },
      {
        id: 4,
        image: png6
      },
      {
        id: 5,
        image: png8
      },
      {
        id: 6,
        image: png9
      }
    ]
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/auth" component={Auth}>
            <Header />
            <div className="appContainer">
              <div className="wrap">
                <Auth />
                <FeedBlock image={pic} />
                <FeedBlock image={png2} />
                <FeedBlock image={png4} />
                <FeedBlock image={png6} />
                <FeedBlock image={png8} />
                <FeedBlock image={png9} />
              </div>
            </div>
          </Route>

          <Route path="/enter" component={Enter}>
            <Header />
            <div className="appContainer">
              <div className="wrap">
                <Enter />
                <FeedBlock image={pic} />
                <FeedBlock image={png2} />
                <FeedBlock image={png4} />
                <FeedBlock image={png6} />
                <FeedBlock image={png8} />
                <FeedBlock image={png9} />
              </div>
            </div>
          </Route>

          <Route
            path="/post/:id"
            render={props => <Post posts={this.state.posts} />}
          />

          <Route exact path="/">
            <Header />
            <div className="appContainer">
              <div className="wrap">
                {this.state.posts.map(post => (
                  <FeedBlock {...post} key={post.id} />
                ))}
              </div>
            </div>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
