function login() { 
    const user = document.getElementById('username').value; 
    const password = document.getElementById('password').value; 
 
    if (user !== "" && password !== "") { 
        sessionStorage.setItem('loggedInUser', user); 
        updateLogin();
    } 
 
    return false;   
} 

function logout() { 
    sessionStorage.removeItem('loggedInUser'); 
    updateLogin(); 
}

function updateLogin() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const headerLoginElement = document.getElementById('header-login');
    
    if (loggedInUser) {
        headerLoginElement.innerHTML = `
            <a href="/login">Logged in as: ${loggedInUser}</a>
            <a onclick="logout()">Logout</a>
        `;
    } else {
        headerLoginElement.innerHTML = '<a href="/login">Login</a>';
    }
}

updateLogin();