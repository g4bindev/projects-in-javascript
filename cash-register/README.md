É basicamente uma caixa registradora que recebe parâmetros de preço, valor pago, e a quantidade de dinheiro em caixa (contando com notas), que retorna um objeto com o status atual do caixa, e o troco a ser pago para o cliente.

*OBS: O sistema de troca aqui utilizado foi configurado para o dollar, mas pode ser mudado para o real com apenas algumas modificações no objeto cashList.

Exemplos de uso:

1. Preço: 3.26| Valor Pago: 100 | Quantidade de dinheiro em caixa: array multidimensional

3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]

retorna:

{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

2. Preço: 19.20 | Valor Pago: 20 | Quantidade de dinheiro em caixa: array multidimensional

19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

retorna: 

{status: "INSUFFICIENT_FUNDS", change: []}

3. Preço: 19.20 | Valor Pago: 20 | Quantidade de dinheiro em caixa: array multidimensional

19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

retorna:

{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}