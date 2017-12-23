/* eslint-disable no-undef */

const API_END_POINT = 'https://food-lookup-demo-chinna.herokuapp.com/';

function search(query, cb) {
  return fetch(`api/food?q=${query}`, {
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  alert(`HTTP Error ${response.statusText}
        \n HTTP Error status ${response.status}`);
  return {};
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json && response.json();
}

const Client = { search };
export default Client;
