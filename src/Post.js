import React, { Component } from 'react';
import PostHeader from './PostHeader';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="post">
          <PostHeader />
          <div className="post-conteudo">
            <hr />
            conteudo
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
