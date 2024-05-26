document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('form-title');
    const authBtn = document.getElementById('authBtn');
    const toggleBtn = document.getElementById('toggleBtn');
    const message = document.getElementById('message');
    const nameField = document.getElementById('nameField');
    const nameInput = document.getElementById('name');

    let isSignUp = true;

    toggleBtn.addEventListener('click', () => {
        isSignUp = !isSignUp;
        formTitle.textContent = isSignUp ? 'Sign Up' : 'Sign In';
        authBtn.textContent = isSignUp ? 'Sign Up' : 'Sign In';
        toggleBtn.textContent = isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up';
        nameField.style.display = isSignUp ? 'block' : 'none';
        if (!isSignUp) {
            nameInput.removeAttribute('required');
        } else {
            nameInput.setAttribute('required', 'required');
        }
        clearForm();
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (isSignUp) {
            const name = document.getElementById('name').value;
            if (name && email && password) {
                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                alert('Sign up successful!');
                message.textContent = 'Sign up successful!';
                clearForm();
            } else {
                message.textContent = 'Please fill in all fields.';
            }
        } else {
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            if (email === storedEmail && password === storedPassword) {
                alert('Sign in successful!');
                message.textContent = 'Sign in successful!';
                console.log('Redirecting to welcome page...');
                window.location.href = 'welcome.html';
            } else {
                message.textContent = 'Incorrect credentials.';
            }
        }
    });

    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        message.textContent = '';
    }
});
