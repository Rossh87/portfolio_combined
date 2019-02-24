import axios from 'axios';

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

async function ajaxHandler(method, path, data) {
		const response = await axios[method](`${REACT_APP_API_ENDPOINT}/${path}`, data);

		return response.data;
};

export default ajaxHandler;

