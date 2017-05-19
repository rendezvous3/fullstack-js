import config from './config';
import apiRouter from './api'
//import fs from 'fs';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
	res.send("Hello Express");
});

server.use('/api', apiRouter);
server.use(express.static('public'));


// server.get('/about.html', (req, res) => {
// 	res.send("about page");
// });

// server.get('/about.html', (req, res) => {
// 	fs.readFile('./about.html', (err, data) => {
// 		res.send(data.toString());
// 	});
// });

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});


// npm start
// curl http://localhost:8080/

// curl http://localhost:8080/about.html