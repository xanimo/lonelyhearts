export function getRandomUsers(userCount, seed, gender) {
  const promise = fetch(`https://randomuser.me/api/?results=${userCount}&nat=US&seed=${seed}&gender=${gender}`)
    .then(response => {
      if(response.status >= 400) {
        throw `Response invalid ( ${response.status} )`;
        return;
      }
      return response.json();
    })
    .then(({results}) => {
        return (
          results
          );
    })
    .catch(error => {
      console.log(error);
    });
  return promise;
}
