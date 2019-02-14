import manageRes from './ManageResponse';

const ENDPOINT = "https://adalab.string-projects.com/api/v1/";

const tokenThreadFetch = ((token, idMessage) => {
  const postsEndpoint = ENDPOINT + "posts/" + idMessage;

  return fetch(postsEndpoint, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "AUTH-TOKEN": token
    }
  }).then(manageRes)
})

export { tokenThreadFetch }
