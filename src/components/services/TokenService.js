import manageRes from './ManageResponse';

const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const sessionEndpoit = ENDPOINT + "sessions"

const fetchToken = (userInfo) => fetch(sessionEndpoit, {
  method: "POST",
  body: JSON.stringify(userInfo),
  headers: {
    "content-type": "application/json"
  }
}).then(manageRes)

export { fetchToken };
