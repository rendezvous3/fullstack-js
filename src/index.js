import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);

// axios.get('/api/contests')
// 	.then(resp => {
// 		//console.log(resp.data.contests)
// 		// this.setState({
// 		// 	contests: resp.data.contests
// 		// });
// 		ReactDOM.render(
// 		<App initialContests={resp.data.contests} />,
// 		document.getElementById('root')
// 		);
// 	})
// 	.catch(console.error);




// Console
// $r.setState({ contests: $r.state.contests.slice(1) })

// https://packagecontrol.io/docs/usage
// https://github.com/nwoltman/sublime-ejs

// npm run dev
// npm start