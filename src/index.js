import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
// 	React.createElement('h2', null, 'Hello React'),
// 	document.getElementById('root')
// );

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
	<h2 style={{ color:color }}>
		Hello React with JSX! -- {Math.random()}
	</h2>,
	document.getElementById('root')
);

ReactDOM.render(
	<h2 className="text-center">
		Hello React with JSX!
	</h2>,
	document.getElementById('root')
);

// https://packagecontrol.io/docs/usage
// https://github.com/nwoltman/sublime-ejs

// npm run dev
// npm start