import { Meteor } from 'meteor/meteor';
import request from 'request'
import feedparser from 'feedparser';

Meteor.startup(() => {
  // code to run on server at startup
});

function done(err, result){
    if(err){
        console.log(err);
    } else if(result) {
        console.log(result);
    };
};

function getFeed(done){
  const sceneFeed = "https://www.scenetime.com/get_rss.php?user=tintoverano&cat=51,47,59,80,57,103,1,9,100,43,77,2&passkey=8b7df9f8c0355fb58eb65f9496dbd41e";
  const req = request(sceneFeed, []);
  const aFeedparser = new feedparser();

  return "valami";
};


Meteor.methods({
  getFeed: function() {
    return getFeed (done);
  }
});
