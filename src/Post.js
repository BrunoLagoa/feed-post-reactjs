import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div>
    <div className="post">
      <PostHeader autor={props.data.autor} data={props.data.data} avatar={props.data.avatar} />
      <div className="post-conteudo">
        <hr />
        {props.data.descricao}
      </div>
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    autor: PropTypes.string,
    data: PropTypes.string,
    avatar: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};

export default Post;
