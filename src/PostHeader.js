import React, { Component } from 'react';

class PostHeader extends Component {
  render() {
    return (
      <div className="post-header">
        <div className="post-avatar">
          <img
            title="avatar"
            src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
          />
        </div>
        <div className="post-autor">
          <span>
            <h2>Bruno Castro</h2>
            <p>17/05/2018</p>
          </span>
        </div>
      </div>
    );
  }
}

export default PostHeader;
