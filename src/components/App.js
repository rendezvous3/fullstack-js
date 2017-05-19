import React from 'react';
import Header from './Header';

class App extends React.Component {
	state = {
		pageHeader: "Naming Contests"
	};

	// componentDidMount() {
	// // timers, listners, ajax	
	// 	console.log("Did mount");
	// 	debugger;
	// }

	// componentWillUnmount() {
	//  // clean timers, listners, ajax	
	// 	console.log("Unmounted");
	// 	debugger;
	// }
	render () {
	return (
		<div className="App">
			<Header message={ this.state.pageHeader } />
			<div>
				...
			</div>
		</div>
		);
	}
};

export default App;

