document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generatePassword();
});

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeSpecialChars = document.getElementById('specialChars').checked;
    const includeUpperCase = document.getElementById('upperCaseChars').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = lowerCase;
    if (includeUpperCase) allChars += upperCase;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('result').innerText = password;
}
