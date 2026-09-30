const campoCapa = document.querySelector("#capa");
const previaCapa = document.querySelector("#previa-capa");
const imagemCapa = document.querySelector("#imagem-capa");
const nomeCapa = document.querySelector("#nome-capa");
const botaoRemoverCapa = document.querySelector("#remover-capa");
const formLoginUnico = document.querySelector("#form-login-unico");
const resultadoLogin = document.querySelector("#resultado-login");

if (campoCapa && previaCapa && imagemCapa && nomeCapa && botaoRemoverCapa) {
  let urlCapa = "";

  campoCapa.addEventListener("change", () => {
    const arquivo = campoCapa.files[0];

    if (!arquivo) return;

    if (urlCapa) URL.revokeObjectURL(urlCapa);
    urlCapa = URL.createObjectURL(arquivo);
    imagemCapa.src = urlCapa;
    nomeCapa.textContent = arquivo.name;
    previaCapa.hidden = false;
  });

  botaoRemoverCapa.addEventListener("click", () => {
    campoCapa.value = "";
    imagemCapa.removeAttribute("src");
    nomeCapa.textContent = "";
    previaCapa.hidden = true;

    if (urlCapa) URL.revokeObjectURL(urlCapa);
    urlCapa = "";
    campoCapa.focus();
  });
}

if (formLoginUnico && resultadoLogin) {
  formLoginUnico.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login");
    const senha = document.querySelector("#senha-login");

    if (!email || !senha) {
      resultadoLogin.textContent = "Preencha os campos para continuar.";
      return;
    }

    resultadoLogin.textContent = `Login do aluno realizado com sucesso para ${email.value}.`;
    resultadoLogin.style.backgroundColor = "#e8f5e9";
    resultadoLogin.style.color = "#1b5e20";
  });
}
