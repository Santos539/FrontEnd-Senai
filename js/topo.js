const voltarTopo = document.getElementById("voltar-topo");

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
