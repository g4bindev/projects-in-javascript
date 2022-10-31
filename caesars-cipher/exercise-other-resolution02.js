function rot13(str) {
    let newStr = str.split("").reduce((all, chr) => {
        if (/[a-z]/.test(chr)) {
            let unicodeNum = chr.charCodeAt() - 110;
            return all + String.fromCharCode(97 + ((26 + unicodeNum) % 26))
        } else if (/[A-Z]/.test(chr)) {
            let unicodeNum = chr.charCodeAt() - 78;
            return all + String.fromCharCode(65 + ((26 + unicodeNum) % 26))
        } else {
            return all + chr
        }
    }, "")

    return newStr
}

console.log(rot13("URYYB JBEYQ!!!"))
// output: HELLO WORLD!!!