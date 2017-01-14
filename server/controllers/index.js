var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { 

      // Go to model and fetch messages

      // send messages as JSON 

      

      var ourGreeting = models.messages.get();

      res.send(ourGreeting);

    }, // a function which handles a get request for all messages
    post: function (req, res) { 

      // send data to model post method. 

      var data = models.messages.post();

      res.send('Hello World!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { 
      res.send('inside GET user controller!');
    },
    post: function (req, res) { console.log('lets make jon mad3.'); } 
  }
};

