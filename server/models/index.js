var con = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      //console.log('RES', res);
      $sql = 'SELECT * FROM messages';
      con.query($sql, function(error, result) {
        
        if (result.length > 0) {
          res.setHeader('Content-Type', 'application/json');
          res.send(result);
        } else {
          console.log('no results');
        }
        
      });

      return 'HELLO';

    }, // a function which produces all the messages
    post: function (message) {
      $sql = 'INSERT INTO messages VALUES (null, \'' + message + '\', null, 1, 1)';
      con.query($sql, function(error, result) {

      });
      return;
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('does this work?');
    },
    post: function (username) {
      $sql = 'INSERT INTO users VALUES (null, \'' + username + '\')';
      con.query($sql, function(error, result) {
        console.log('result: ', result);
      });
      return;

    }
  }
};

