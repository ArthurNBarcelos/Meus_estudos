function converter() {
    var m = Number(prompt(`Digite uma distância em metros (m)`))
    var res = document.getElementById("res")
    res.innerHTML =
    `
    <h2>A distância de ${m} metros, corresponde a...</h2>
    ${m/1000} quilômetros (Km)<br>
    ${m/100} hectômetros (Hm)<br>
    ${m/10} decâmetros (Dam)<br>
    ${m*10} decímetros (dm)<br>
    ${m*100} centrímetros (cm)<br>
    ${m*1000} milímetros (mm)
    `
}

/*
Converter metro para:
Km
Hm
Dam
m
dm
cm
mm
*/