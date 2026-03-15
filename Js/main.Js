const form = document.getElementById("formCadastro");

form.addEventListener("submit", (Event) => {

    Event.preventDefault();

    const usuarioDTO = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        email: document.getElementById("email").value,
        CreatedAt: new Date().toLocaleDateString('pt-BR')
    };

    const JsonParaEnviar = JSON.stringify(usuarioDTO, null, 2);

    console.log("Objeto Capturado (Pronto para POST): ");
    console.log(JsonParaEnviar);
    console.log(usuarioDTO);

});