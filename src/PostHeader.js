import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header">
    <div className="post-avatar">
      <img alt={props.autor} src={props.avatar} />
    </div>
    <div className="post-autor">
      <span>
        <h2>{props.autor}</h2>
        <p>{props.data}</p>
      </span>
    </div>
  </div>
);

PostHeader.propTypes = {
  autor: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostHeader;
