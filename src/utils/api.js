import axios from 'axios';

const API = axios.create({
  responseType: 'json',
});

function errorResponseHandler(error) {
  const { response } = error;
  if (response.status === 401) {
    console.log('authorization error');
  }
  if (response.status !== 404) {
    // will open snackbar
    console.log('404 error');
  }
}

API.interceptors.response.use(({ data }) => data, errorResponseHandler);

API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

export default API;
