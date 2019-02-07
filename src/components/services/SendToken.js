const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const sessionsEndpoint = ENDPOINT + "sessions";

const sendTokenFetch = (token) => fetch(sessionsEndpoint, {
 method: "GET",
 headers: {
   "Content-Type": "application/json",
   "AUTH-TOKEN": token
 }
}).then(response => {
  console.log(response);
  console.log("token", token);
  return response.json()
  // if(!!response.ok){
  //   //return true;
  //   return console.log(token);
  // }
})

 export  { sendTokenFetch };
