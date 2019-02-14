import manageRes from './ManageResponse';

const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const postsEndpoint = ENDPOINT + "posts/10";


const tokenThreadFetch = (token) => fetch(postsEndpoint,{
  method: "GET",
  headers: {
    "Accept": "application/json",
    "AUTH-TOKEN": token
  }
}).then(manageRes)

export { tokenThreadFetch }
