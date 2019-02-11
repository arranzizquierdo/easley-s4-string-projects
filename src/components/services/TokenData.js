const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const sessionsEndpoint = ENDPOINT + "sessions";

const tokenDataFetch = (token) => fetch(sessionsEndpoint,{
  method: "GET",
  headers : {
    "Accept": "application/json",
  "AUTH-TOKEN": token
  }
}).then (response => {
  if(!response.ok) {
    throw (response);
  }
  return response.json()
})

export { tokenDataFetch };
