import React, { Component } from 'react';
import { feedparser } from 'feedparser';

// App component - represents the whole app
export default class App extends Component {

  renderFeed() {
    return "a feed";
  }

  render() {
    return (
      <div className="container">
          {this.renderFeed()}
      </div>
    );
  }
}
