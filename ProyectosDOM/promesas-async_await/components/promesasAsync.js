async function loadUserData() {
    try {
        const usersData = await loadUsers();
        loadUsers(usersData);
    }
    catch (error) {
        console.log(error);
    }
}