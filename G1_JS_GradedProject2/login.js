document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store credentials in local storage
    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', 'password123');

    // Validate credentials
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        window.location.href= 'resume.html'
    } else {
        document.getElementById('error-message').textContent = 'Invalid username/password';
    }
});
