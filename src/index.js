import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';
import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        autor: 'Diego Schell Fernandes',
        avatar:
          'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/44.png',
        data: '',
        descricao: '...',
      },
      {
        id: 1,
        autor: 'Rubia Savolksi',
        avatar:
          'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/45.png',
        data: '',
        descricao: '...',
      },
      {
        id: 2,
        autor: 'Mr. Mustache',
        avatar:
          'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/46.png',
        data: '',
        descricao: '...',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        <div id="footer" />
      </Fragment>
    );
  }
}

// github.com/degaus/Desafio-01-Rocketseat/blob/master/src/

render(<App />, document.getElementById('app'));
