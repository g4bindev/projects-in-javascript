function rot13(str) {
    // Setup
    const alphabet = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const letterArray = str.split("");

    const specialFilter = /[\W]/; // Regex para filtrar caracteres especiais

    // Função que traduz o parâmetro passado
    const convertedText = letterArray.reduce((result, letter) => {
        const convertedLetter = specialFilter.test(letter) ? letter : alphabet[alphabet.lastIndexOf(letter) - 13];
        return result + convertedLetter;
    }, "");
    
    return convertedText;
}

console.log(rot13("URYYB JBEYQ!!!"))
// output: "HELLO WORLD!!!"