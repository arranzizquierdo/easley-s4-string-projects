import manageRes from './ManageResponse';

const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const postsEndpoint = ENDPOINT + "posts";

const postConversFetch = (token) => fetch (postsEndpoint, {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "AUTH-TOKEN": token
  }
}).then(manageRes)

export { postConversFetch };

