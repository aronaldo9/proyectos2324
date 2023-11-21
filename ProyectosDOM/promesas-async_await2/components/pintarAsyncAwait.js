export const pintarAsyncAwait = async (component) => {
    const usuarios = await getUsersWithAsyncAwait();
    usuarios.forEach(user => { 
        component.innerHTML += `<ul>
                                    <li style="background-color:gray;color:white;list-style:none">${user.login.username}</li>
                                    <li style="background-color:gray;color:white;list-style:none">${user.login.password}</li>
                                    <li style="background-color:gray;color:white;list-style:none">${user.address.city}</li>
                                </ul>`
    });
};

async function getUsersWithAsyncAwait() {
    try {
        const response = await fetch("https://jsonplaceholder.org/users");
        if(!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}