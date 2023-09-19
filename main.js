document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pass');

    const correctUsername = 'Zuzia18';
    const correctPassword = 'Osiemnastka18';

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (emailInput.value === correctUsername && passwordInput.value === correctPassword) {
            window.location.href = 'PhotoPage.html';
        } else {
            alert('Nieprawidłowy login lub hasło. Spróbuj ponownie.');
            passwordInput.value = '';
        }
    });
});


    