import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
// 	React.createElement('h2', null, 'Hello React'),
// 	document.getElementById('root')
// );

const color = Math.random() > 0.5 ? 'cyan' : 'lightblue';

// const Header = (props) => {
// 	return (
// 		<h2 className="text-center" style={{ color:color }}>
// 			{props.message}
// 		</h2>
// 	)
// }

const Header = ({ message }) => {
	return (
		<h2 className="Header text-center" style={{ color:color }}>
			{message}
		</h2>
	)
}

Header.propTypes = {
	message: React.PropTypes.string.isRequired
}

const App = () => {
	return (
		<div className="App">
			<Header message="Naming contests" />
			<div>
				...
			</div>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// https://packagecontrol.io/docs/usage
// https://github.com/nwoltman/sublime-ejs

// npm run dev
// npm start