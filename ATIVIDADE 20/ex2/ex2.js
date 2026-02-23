 
window.onload = function() {

    let area = document.getElementById("campos");


    for (let i = 1; i <= 5; i++) {
        let linha = document.createElement("div");

        linha.innerHTML = `
            Produto ${i}: 
            <input type="number" id="p${i}" placeholder="Quantidade">
        `;

        area.appendChild(linha);
    }

};

function somar(lista) {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }

    return total;
}

function processar() {

    let valores = [];
    let valido = true;

    for (let i = 1; i <= 5; i++) {

        let campo = document.getElementById("p" + i);
        let numero = parseInt(campo.value);

        if (isNaN(numero) || numero <= 0) {
            campo.classList.add("erro");
            valido = false;
        } else {
            campo.classList.remove("erro");
            valores.push(numero);
        }
    }

    if (!valido) {
        document.getElementById("resultado").innerHTML =
            "Digite apenas números inteiros positivos!";
        return;
    }

    let total = somar(valores);

    let texto = "<h2>Lista de Produtos:</h2>";

    for (let i = 0; i < valores.length; i++) {
        texto += "Produto " + (i+1) + ": " + valores[i] + " unidades<br>";
    }

    texto += "<br>Total de itens cadastrados: " + total;

    document.getElementById("resultado").innerHTML = texto;
}