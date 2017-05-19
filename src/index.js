import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
// 	React.createElement('h2', null, 'Hello React'),
// 	document.getElementById('root')
// );

const color = Math.random() > 0.5 ? 'cyan' : 'lightblue';

const App = (props) => {
	return (
		<h2 className="text-center" style={{ color:color }}>
			{props.headerMessage}
		</h2>
	);
};

App.propTypes = {
	headerMessage: React.PropTypes.string.isRequired 
};

App.defaultProps = {
	headerMessage: "Hello!"
};

ReactDOM.render(
	<App headerMessage="Hello props!" />,
	document.getElementById('root')
);

// https://packagecontrol.io/docs/usage
// https://github.com/nwoltman/sublime-ejs

// npm run dev
// npm start