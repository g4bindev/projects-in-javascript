// Money Setup
const cashList = [
    {name: "ONE HUNDRED", val: 100},
    {name: "TWENTY", val: 20}, 
    {name: "TEN", val: 10}, 
    {name: "FIVE", val: 5}, 
    {name: "ONE", val: 1}, 
    {name: "QUARTER", val: 0.25}, 
    {name: "DIME", val: 0.1}, 
    {name: "NICKEL", val: 0.05}, 
    {name: "PENNY", val: 0.01}
]

function checkCashRegister(price, cash, cid) {
    // Setup
    const changeOut = {status: null, change: []}
    let pendingChange = cash - price

    // Calcula o total de dinheiro em caixa
    let totalCid = cid.reduce((result, value) => {
        result.total += value[1]
        result[value[0]] = value[1]
        return result
    }, {total: 0})

    // Checa se o troco pendente é igual a quantia total do CID
    if(totalCid.total === pendingChange) {
        changeOut.status = "CLOSED"
        changeOut.change = cid
        return changeOut
    }

    // Checa se o total do CID é insuficiente para pagar o troco
    if(totalCid.total < pendingChange) {
        changeOut.status = "INSUFICIENT_FUNDS"
        return changeOut
    }

    // Cria a array do troco a ser passado
    let changeList = cashList.reduce((result, curr) => {
        let flag = 0

        while(totalCid[curr.name] > 0 && pendingChange >= curr.val) {
            totalCid[curr.name] -= curr.val
            flag += curr.val
            pendingChange -= curr.val
            pendingChange = Math.round(pendingChange * 100) / 100
        }

        if(flag > 0) {
            result.push([curr.name, flag])
        }
        return result
    }, [])

    if(changeList.length < 1 || pendingChange > 0) {
        changeOut.status = "INSUFFICIENT_FUNDS"
        return changeOut
    }

    changeOut.status = "OPEN"
    changeOut.change = changeList

    return changeOut
}

console.log(checkCashRegister(19.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// output: { status: 'OPEN', change: [[ 'TWENTY', 60 ], [ 'TEN', 20 ], [ 'QUARTER', 0.5 ]] }