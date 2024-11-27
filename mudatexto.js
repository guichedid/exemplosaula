
const mensagem = document.getElementById("mensagem");
const mudaMensagem = document.getElementById("mudaMensagem");
const resetar = document.getElementById("resetar");

mudaMensagem.addEventListener("click", () => {
    mensagem.innerText += "Mensagem alterada com sucesso!";
});

resetar.addEventListener("click", () => {
    mensagem.innerText = "Clique no botão para mudar esta mensagem!";
});
