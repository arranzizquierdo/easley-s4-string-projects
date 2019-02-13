const ENDPOINT = "https://adalab.string-projects.com/api/v1/";



 function tokenThreadFetch(token, idMessage){
  const postsEndpoint = ENDPOINT + "posts" + idMessage;
  fetch(postsEndpoint,{
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
 }
export { tokenThreadFetch }
