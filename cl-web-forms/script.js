const form = document.querySelector('form');
const pass_error = document.querySelector('#passerror');
const confirm_pass_error = document.querySelector('#confirm_passerror');
const name_error = document.querySelector('#namerror');
const submit = document.querySelector('#submit_message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let is_ok = true;

    name_error.textContent = '';
    pass_error.textContent = '';
    confirm_pass_error.textContent = '';
    submit.textContent = '';

    console.log('Form Submitted');

    const formData = new FormData(e.target);
    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password')
    };

    if (data.username) {
        if (data.username.length < 3) {
            is_ok = false;
            name_error.textContent = 'Username must be at least 3 characters long';
        }
    } else {
        is_ok = false;
        name_error.textContent = 'Username is required';
    }

    if (data.password) {
        if (data.password.length < 8) {
            is_ok = false;
            pass_error.textContent = 'Password must be at least 8 characters long';
        }
    } else {
        is_ok = false;
        pass_error.textContent = 'Password is required';
    }

    if (data.password !== data.confirm_password) {
        is_ok = false;
        confirm_pass_error.textContent = 'Passwords do not match';
    }

    if (is_ok) {
        form.reset();
        submit.textContent = 'Signup successful!';
    }
});
