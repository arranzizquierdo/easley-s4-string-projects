const ENDPOINT = "https://adalab.string-projects.com/api/v1/sessions";


const fetchToken = () => fetch(ENDPOINT).then(response => response.json());

export {fetchToken};
