import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import feedparser from 'feedparser';

// App component - represents the whole app
export default class App extends Component {

  renderFeed() {
    //const sceneFeed = "https://www.scenetime.com/get_rss.php?user=tintoverano&cat=51,47,59,80,57,103,1,9,100,43,77,2&passkey=8b7df9f8c0355fb58eb65f9496dbd41e";
    //const sceneFeed = "http://index.hu/24ora/rss";

    //const aFeedparser = new feedparser();

    Meteor.call('getFeed', (err, res) => {
      if (err) {
        alert(err);
      } else {
        console.log("getFeed method success");
      }
    });
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
