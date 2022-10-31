function telephoneCheck(str) {
    return /^(1[\s]?)?((?:[(]([0-9]{3})[)][\s]?)|(?:([0-9]{3})[\s.-]?))([0-9]{3}[\s.-]?)([0-9]{4})/.test(str)
}

console.log(telephoneCheck("1 (555) 555-5555"))
// output: true