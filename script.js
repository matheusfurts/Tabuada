function tabuada() {
    var numero = document.getElementById("numero").value
    var listaTabuada = document.getElementById("listaTabuada")
    var linhasTabuada = ""

    if (numero==""){
        alert("Digite um número")
    } else {
        for (var i=1; i<=10;i++) {
            var multiplica = Number(numero)*i
            linhasTabuada += `<option>${numero} x ${i} = ${multiplica}</option>`
        }
        listaTabuada.innerHTML = linhasTabuada
    }   

    
}