const manageRes = response => {
  if (!response.ok) {
    throw response;
  }
  return response.json()
}

export default manageRes;
