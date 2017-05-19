import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
console.log(data);

import App from './components/App';

ReactDOM.render(
	<App contests={data.contests} />,
	document.getElementById('root')
);

// https://packagecontrol.io/docs/usage
// https://github.com/nwoltman/sublime-ejs

// npm run dev
// npm start