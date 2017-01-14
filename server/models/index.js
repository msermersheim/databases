var con = require('../db');

module.exports = {
  messages: {
    get: function () {

      var data;

      con.query('SELECT * FROM messages', function(error, result) {
        if (error) {
          //return error;
          //throw error;
          console.log('ERROR:', error);
        }
        //return rows;
        console.log('RESULT:', result);
        console.log('MESSAGE:', result[0].message);


        data = result[0].message;
        
      });

      return 'HELLO';

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('does this work?');
    },
    post: function () {}
  }
};

