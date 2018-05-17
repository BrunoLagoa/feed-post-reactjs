import React from 'react';
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

export default Post;
