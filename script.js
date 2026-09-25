const campoCapa = document.querySelector("#capa");
const previaCapa = document.querySelector("#previa-capa");
const imagemCapa = document.querySelector("#imagem-capa");
const nomeCapa = document.querySelector("#nome-capa");
const botaoRemoverCapa = document.querySelector("#remover-capa");

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
