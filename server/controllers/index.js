var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { console.log('lets make jon mad1.'); }, // a function which handles a get request for all messages
    post: function (req, res) { console.log('lets make jon mad.'); } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { console.log('lets make jon mad2.'); },
    post: function (req, res) { console.log('lets make jon mad3.'); } 
  }
};

