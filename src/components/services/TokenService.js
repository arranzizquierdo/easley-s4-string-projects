const ENDPOINT = "https://adalab.string-projects.com/api/v1/sessions";

const fetchToken = (userInfo) => fetch(ENDPOINT, {
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
