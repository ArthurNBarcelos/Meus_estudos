function converter() {
    tempC = Number(prompt(`Digite uma temperatura em °C (Celsius)`))
    var res = document.getElementById("res")
    res.innerHTML = `<h2>A temperatura de ${tempC}, corresponde a...</h2>`
    res.innerHTML += `<p>${tempC+273}°K (Kelvin)</p>`
    res.innerHTML += `<p>${tempC*1.8+32}°F (Fahrenheit)</p>`
}