const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const sessionsEndpoint = ENDPOINT + "sessions";

const fetchToken = (userInfo) => fetch(sessionsEndpoint, {
  method: "POST",
  body: JSON.stringify(userInfo),
  headers: {
    "content-type": "application/json"
  }
}).then(response => {
  if(!response.ok){
  throw (response);
}
return response.json()
})

export {fetchToken};
