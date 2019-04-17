var Destiny2API = require('node-destiny-2');

var apiToken = require('./config/token.json').token;

var destiny = new Destiny2API({
    key: apiToken
});

var main = async function() {
    var response = await destiny.getManifest();
    console.log(response.Response);
};

main();

process.on('unhandledRejection', function(error) {
    console.error(error);
    process.exit(1);
});
