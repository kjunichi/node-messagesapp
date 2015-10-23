const messages = require('../');

if(process.argv.length!=4) {
	console.log("usage: node send.js iCloudId messages");
	process.exit(0);
}
const id = process.argv[2];
const msg = process.argv[3];

messages.send(id,msg);

