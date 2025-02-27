function reajustarSalario() {
    var nome = prompt(`Nome do funcionário:`)
    var salario = (parseFloat(prompt(`Salário atual de ${nome}:`))).toFixed(2)
    var ajuste = parseFloat(prompt(`Ajuste salarial (%):`))
    var aumento = (parseFloat(salario * ajuste / 100)).toFixed(2)
    var salarioNovo = (parseFloat(salario + aumento)).toFixed(2)

    var restultado = document.getElementById('resultado')
    restultado.innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>`
    restultado.innerHTML += `<p>O salário atual era de ${salario}.<p>`
    restultado.innerHTML += `<p>Com ${ajuste}% de ajuste, ${nome} vai ganhar ${aumento} a mais no próximo mês.<p>`
    restultado.innerHTML += `<p>Com isso, ${nome} vai passar a ganhar R$${salarioNovo}.</p>`
}
