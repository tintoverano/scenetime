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

  req.on('error', function (error) {
    // handle any request errors
  });
  req.on('response', function (res) {
    var stream = this;

    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

    stream.pipe(aFeedparser);
  });


  aFeedparser.on('error', function(error) {
    // always handle errors
  });
  aFeedparser.on('readable', function() {
    // This is where the action is!
    var stream = this
      , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
      , item;

    while (item = stream.read()) {
      console.log(item);
    }
  });
};


Meteor.methods({
  getFeed: function() {
    return getFeed (done);
  }
});
