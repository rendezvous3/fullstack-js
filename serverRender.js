// fetch data from api on server level

import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contests`)
	.then(resp => {
		console.log(resp.data);
	});