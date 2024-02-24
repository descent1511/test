function login() {
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (user !== "" && password !== "") {
        // Sử dụng Cookies thay vì sessionStorage
        document.cookie = `loggedInUser=${user}; path=/`;

        // Cập nhật giao diện
        document.getElementById('header-login').innerHTML = `
        <a href="/login">Logged in as: ${user}</a>
        <a onclick="logout()">Logout</a>
        `;
    }

    return false;
}

function logout() {
    // Xóa Cookies
    document.cookie = 'loggedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Cập nhật giao diện
    document.getElementById('header-login').innerHTML = '<a href="/login">Login</a>';
}
