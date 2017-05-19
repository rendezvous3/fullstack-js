// import config, { nodeEnv, logStarts } from './config';

// console.log(config, nodeEnv);
// logStarts("Yo, Mr. White!");

// source ~/profile
// export NVM_DIR="/Users/bojanjovanovic/.nvm"
// [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

// export PATH=$PATH:./node_modules/.bin 

// ./node_modules/.bin/babel-node server.js

// import https from 'https';

// https.get('https://www.lynda.com', res => {
// 	console.log('Response status code: ', res.statusCode);
// 	res.on('data', chunk => {
// 		console.log(chunk.toString());
// 	});
// });

import http from 'http';

const server = http.createServer((req, res) => {
	res.write("Hello HTTP!\n");
	setTimeout(() => {
		res.write('I can stream!\n');
		res.end();
	}, 3000);
});

server.listen(8080);

// server.on('request', (req, res) => {
// 	res.write("Hello HTTP!\n");
// 	setTimeout(() => {
// 		res.write('I can stream!\n');
// 		res.end();
// 	}, 3000);
// });


// ./node_modules/.bin/babel-node server.js
// curl http://localhost:8080/
