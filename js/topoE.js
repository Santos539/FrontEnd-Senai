/* Botão Reservado para os Campeões, apenas para mudar de Cor */

const voltarTopo = document.getElementById("voltar-topoE");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    voltarTopo.classList.add("mostrar");
  } else {
    voltarTopo.classList.remove("mostrar");
  }
});

voltarTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
