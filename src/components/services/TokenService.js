const ENDPOINT = "https://adalab.string-projects.com/api/v1/sessions";
const { userInfo } = this.props;
const fetchToken = (c) => fetch(ENDPOINT, {
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
