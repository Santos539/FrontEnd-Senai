/* Criando e pegando o botão e o icone para alterá-los */
const mudaTema = document.getElementById("mudar-tema");
const iconeTema = document.getElementById("icone-tema");

/* Recupera o tema salvo */
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  document.body.classList.add("dark");
  iconeTema.src = "img/favicon/sol.png";
}

/* Clique do botão de Tema */
mudaTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
    iconeTema.src = "img/favicon/sol.png";

  } else {
    localStorage.setItem("tema", "light");
    iconeTema.src = "img/favicon/lua.png";
  }
});
