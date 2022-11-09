export  function fetchOrganizations() {
  return fetch('./fakeJSONData.json')
    .then((response) => {
      return response
    })
}
