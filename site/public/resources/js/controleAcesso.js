pegarCargo(sessionStorage.EMAIL_USUARIO);
function pegarCargo(email) {
    fetch(`/usuarios/pegarCargo/${email}`, { cache: "no-store" })
        .then(function (response) {
            if (response.status == 200) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        // cargoF.innerHTML += registro.Cargo;
                        cargoFuncionario = registro.Cargo;
                        sessionStorage.CARGO = cargoFuncionario;
                    }
                    // plotarGrafico(resposta, idAquario);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(
                `Erro na obtenção dos dados p/ gráfico: ${error.message}`
            );
        });
}

if(sessionStorage.CARGO == "Técnico" || sessionStorage.CARGO == "Supervisor" || sessionStorage.CARGO == undefined){
    funcionariosIcone.style.display = 'none';
    calendar.style.display = 'none';
}