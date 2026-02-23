


    function calcularMedia(n1, n2, n3) {
        return (n1 + n2 + n3) / 3;
    }

    function validarNotas() {

        let notas = [
            document.getElementById("nota1"),
            document.getElementById("nota2"),
            document.getElementById("nota3")
        ];

        let valores = [];
        let valido = true;

        // Laço de repetição para validar todas as notas
        for (let i = 0; i < notas.length; i++) {

            let valor = parseFloat(notas[i].value);

            if (isNaN(valor) || valor < 0 || valor > 10) {
                notas[i].classList.add("erro");
                valido = false;
            } else {
                notas[i].classList.remove("erro");
                valores.push(valor);
            }
        }

        if (!valido) {
            document.getElementById("mensagem").innerHTML =
                " Atenção! Digite notas entre 0 e 10.";
            document.getElementById("mensagem").style.color = "red";
            document.getElementById("resultado").innerHTML = "";
            return;
        }

        let media = calcularMedia(valores[0], valores[1], valores[2]);

        document.getElementById("mensagem").innerHTML = "";
        document.getElementById("resultado").innerHTML =
            "<span class='sucesso'> Parabéns! Média: " + media.toFixed(2) + "</span><br><span class='icone'>!</span>";
    }
