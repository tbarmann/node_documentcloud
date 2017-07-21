// import the library
var DocumentCloudClient = require('./documentcloud');

// create a client
var client = new DocumentCloudClient(process.env.DC_USER, process.env.DC_PASS);

var account = process.env.DC_ACCOUNT;

// get to work!
client.documents.search('account: ' + account, function (err, response) {
  if (err) throw err;

  console.log(JSON.stringify(response, null, 2));
});
