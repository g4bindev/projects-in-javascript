function palindrome(str) {
    // Filtra caracteres especiais e junta as palavras em uma só
    str = str.match(/[^\W_]/g).join("").toLowerCase()

    // Separa os caracteres para mudar o sentido da palavra
    const reverseWord = str.split("")
    reverseWord.reverse()

    // Checa se a palavra é um palindromo
    return (reverseWord.join("") === str) ? true : false
}

console.log(palindrome("race car"))
// output: true