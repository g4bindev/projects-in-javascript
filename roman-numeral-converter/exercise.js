function convertToRoman(num) {
    const romanList = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
    const romanChar = []

    romanList.forEach((item) => {
        while(num >= item[0]) {
            romanChar.push(item[1])
            num -= item[0]
        }
    })

    return romanChar.join("")
}

console.log(convertToRoman(467))
// output: CDLXVII