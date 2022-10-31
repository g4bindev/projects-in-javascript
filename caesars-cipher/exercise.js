function rot13(str) {
    // Setup
    const alphabet = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    str = str.split("")

    const specialFilter = /[\W]/ // Regex para filtrar caracteres especiais
    let convertedText = ""

    for(let char in str) {
        // Checa se char é um caractere especial
        if(specialFilter.test(str[char])) {
            convertedText += str[char]
        } else {
            convertedText += alphabet[alphabet.lastIndexOf(str[char]) - 13]
        }
    }

    return convertedText
}

console.log(rot13("URYYB JBEYQ!!!"))
// output: "HELLO WORLD!!!"