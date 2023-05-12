const inputPasswordLength = document.getElementById("password_length")
const inputPasswordComplexity = document.getElementById("password_complexity")
const outputPassword = document.getElementById("password")

function generatePassword(){

    let passwordLength = inputPasswordLength.value
    let passwordComplexity = inputPasswordComplexity.value
    let characters = ""
    let password = ""

    if(passwordComplexity === "low") {
        characters = "abcdefghijklmnopqrstuvwxyz"
    } else if (passwordComplexity === "medium") {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    } else {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.*/_-¿?¡!#$%&+"
    }

    for(let index = 0; index < passwordLength; index++){
        let randomNumber = Math.floor(Math.random() * characters.length)
        let randomCharacter = characters.charAt(randomNumber)
        password = password + randomCharacter
    }

    outputPassword.value = password
}