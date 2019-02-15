import manageRes from './ManageResponse';

const ENDPOINT = "https://adalab.string-projects.com/api/v1/";
const postEndpoint = ENDPOINT + "posts";

const sendGeneralMessageFetch = ((token, textInput, threadId) => {
  let description;
  if (threadId) {
    description = {"post": {
      "description": `${textInput}`,
      "post_id": `${threadId}`
    }};
  } else {
    description = {"post": {
      "description": `${textInput}`
    }};
  }

  return fetch(postEndpoint, {
    method: "POST",
    body: JSON.stringify(description),
    headers: {
      "content-type": "application/json",
      "AUTH-TOKEN": token
    }
  })
  .then(manageRes)
})

export { sendGeneralMessageFetch };
