import manageRes from './ManageResponse';

const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const sessionsEndpoint = ENDPOINT + "sessions";

const sendTokenFetch = (token) => fetch(sessionsEndpoint, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "AUTH-TOKEN": token
  }
}).then(manageRes)

export { sendTokenFetch };
