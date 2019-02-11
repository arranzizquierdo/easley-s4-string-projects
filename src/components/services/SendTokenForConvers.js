const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const postsEndpoint = ENDPOINT + "posts";

const postConversFetch = (token) => fetch (postsEndpoint, {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "AUTH-TOKEN": token
  }
}).then(response => {
  if(!response.ok){
    throw (response);
  }
  return response.json()
})

export { postConversFetch };

