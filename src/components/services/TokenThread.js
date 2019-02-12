const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const postsEndpoint = ENDPOINT + "posts/2";


const tokenThreadFetch = (token) => fetch(postsEndpoint,{
  method: "GET",
  headers: {
    "Accept": "application/json",
    "AUTH-TOKEN": token
  }
}).then(response =>{
  if(!response.ok){
    throw (response)
  }
  return response.json()
})
export { tokenThreadFetch }
