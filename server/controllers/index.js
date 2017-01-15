var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { 

      models.messages.get(res);

    }, // a function which handles a get request for all messages
    post: function (req, res) { 

      // send data to model post method. 
      //console.log('POST MESSAGE YA: ', req);
      models.messages.post(req.body.message);
      res.send('end the message request');

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { 
      res.send('inside GET user controller!');
    },
    post: function (req, res) { 
      //console.log('USERNAME:', req.body.username);
      models.users.post(req.body.username);
      res.send('end the request');
    } 
  }
};

