window.onload = function() {

    let area = document.getElementById("campos");
  
    for (let i = 1; i <= 4; i++) {
        let div = document.createElement("div");
        div.innerHTML = `
            Pessoa ${i}: 
            <input type="number" id="idade${i}" placeholder="Idade">
        `;
        area.appendChild(div);
    }
};

function podeAssistir(idade) {
    return idade >= 16;
}

function verificar() {

    let permitido = true;
    let valido = true;
    let mensagens = "";

    for (let i = 1; i <= 4; i++) {

        let campo = document.getElementById("idade" + i);
        let idade = parseInt(campo.value);

        if (isNaN(idade) || idade < 0) {
            campo.classList.add("erro");
            valido = false;
        } else {
            campo.classList.remove("erro");

            if (!podeAssistir(idade)) {
                permitido = false;
                mensagens += "Pessoa " + i + " NÃO pode assistir.<br>";
            } else {
                mensagens += "Pessoa " + i + " pode assistir.<br>";
            }
        }
    }

    if (!valido) {
        document.getElementById("resultado").innerHTML =
            "Digite apenas idades válidas (inteiro não-negativo).";
        return;
    }

    let imagem = document.getElementById("cartaz");

    if (!permitido) {
        imagem.classList.add("bloqueado");
    } else {
        imagem.classList.remove("bloqueado");
    }

    document.getElementById("resultado").innerHTML = mensagens;
}