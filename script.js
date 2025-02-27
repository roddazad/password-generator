// script.js

// Function to generate a random password
function generatePassword() {
    // Get user-selected options
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    
    // Character sets
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";
    
    let allChars = "";
    let password = "";
    
    // Add selected character sets
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
    
    // Ensure at least one set is selected
    if (allChars === "") {
        alert("Please select at least one character type.");
        return;
    }
    
    // Generate the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    
    // Display the generated password
    document.getElementById("password").value = password;
}

// Function to copy password to clipboard
function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click", copyToClipboard);
