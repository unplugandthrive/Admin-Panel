var phoneRegex = /^[2-9]{3}-[2-9]{3}-[0-9]{4}/gm

function isValidPhone(input) {
    return phoneRegex.test(input);
}