import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

// this should create style.css in public directory
server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import './serverRender';

server.get('/', (req, res) => {
	//res.send("Hello Express");
	res.render('index', {
		content: "..."
	});
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
	console.info('Express listening on port', config.port);
});


// npm start
// curl http://localhost:8080/
// npm i -S ejs
// rendering data from server side vs api
// Chrome 3 vertical dots, Customize and control DevTools, settings, Debugger, Disable JavaScript
// our app gets empty, only thing rendered is ... from server.get('/')
// npm start
// curl http://localhost:8080/