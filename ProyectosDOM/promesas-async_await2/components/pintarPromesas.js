
export const pintarPromesas = (component) => {
    getUsersWithPromise()
    .then(users => {
        for (const user of users) {
            component.innerHTML += `<p>${user.firstname}</p>`;
        };
      })
    .catch(err => (component.innerHTML = err.message));
};

function getUsersWithPromise() {
    return new Promise((resolve,reject) =>{
        fetch("https://jsonplaceholder.org/users")
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
                reject(new Error("--->Couldn't fetch users"));
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err));

    });
}