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
          'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/46.png',
        data: 'há 3 min',
        descricao:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam non diam a sapien fermentum iaculis. Quisque faucibus nunc quis laoreet posuere. Phasellus ac ipsum mi. Nullam interdum sapien eget dolor facilisis, et efficitur justo dictum. Donec tempor turpis sit amet ipsum luctus, nec dignissim sem semper. Ut finibus, erat id vehicula vestibulum, diam purus suscipit turpis, vitae sollicitudin nulla turpis a sem.',
      },
      {
        id: 1,
        autor: 'Rubia Savolksi',
        avatar:
          'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/45.png',
        data: 'há 10 min',
        descricao:
          'Fusce metus sem, dignissim ut varius id, consequat a neque. Quisque in augue non nisi tempor convallis. Proin a enim ut nunc sagittis condimentum eget eget arcu. Nulla vitae feugiat neque. Aenean ligula metus, maximus nec consequat non, efficitur vel lectus. Fusce semper dolor mauris, non elementum dui sollicitudin non. Donec vitae gravida elit. Duis luctus consectetur rhoncus. Nulla tempus, urna non bibendum venenatis, sem leo dapibus diam, in efficitur felis ligula ut ex. Morbi a mi massa.',
      },
      {
        id: 2,
        autor: 'Mr. Mustache',
        avatar:
          'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/44.png',
        data: 'há 20 min',
        descricao:
          'In hendrerit vel sapien non tristique. Nulla sed sapien justo. Nunc gravida urna facilisis, rhoncus urna vitae, porttitor odio. Morbi iaculis pellentesque mauris. Quisque vitae turpis dignissim, venenatis lacus nec, aliquet dolor. Vestibulum vestibulum sodales lectus. Praesent posuere mi in efficitur rhoncus. Cras non nunc fermentum, sollicitudin magna et, lacinia nibh. Etiam ac orci convallis, vehicula nibh sed, eleifend tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras dignissim lorem sit amet fermentum laoreet. Suspendisse viverra porttitor magna non auctor.',
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

render(<App />, document.getElementById('app'));
