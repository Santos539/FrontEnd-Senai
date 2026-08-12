// Lista de noticias.html:
const NOTICIAS_DATA = [
  {
    id: 1,
    titulo: "Espanha é a Campeã da Copa do Mundo de 2026!!",
    resumo:
      "A Espanha venceu a Argentina na Final da Copa do Mundo por 1 a 0 aos 90 minutos de jogo com gol histórico!",
    tag: "Espanha",
    tagClass: "tag--espanha",
    imagem: "img/EspanhaCampea.avif",
  },
  {
    id: 2,
    titulo: "Inglaterra garante Terceiro Lugar na Copa",
    resumo:
      "Com direito a 10 gols na partida e um Hat-Trick de Bukayo Saka, a Inglaterra vence a França em jogo eletrizante.",
    tag: "Inglaterra",
    tagClass: "tag--inglaterra",
    imagem: "img/Inglaterra.webp",
  },
  {
    id: 3,
    titulo: "Argentina nas Finais Novamente!",
    resumo:
      "Com duas assistências de Lionel Messi, a Argentina ganha da Inglaterra aos 90+2' com um gol de cabeça espetacular.",
    tag: "Argentina",
    tagClass: "tag--argentina",
    imagem: "img/Argentina.jpg",
  },
  {
    id: 4,
    titulo: "Espanha nas Finais!",
    resumo:
      "Com o bom Tiki-Taka Espanhol, a Espanha ganha da França por 2 a 0 e aguarda adversários entre Argentina e Inglaterra para as Finais da Copa do Mundo de 2026.",
    tag: "Espanha",
    tagClass: "tag--espanha",
    imagem: "img/EspanhaFinal.avif",
  },

  {
    id: 5,
    titulo: "3 a 1 nas Quartas de Finais",
    resumo:
      "A Argentina atropelou a Suíça por 3 a 1 nas Quartas de Finais da Copa do Mundo de 2026, e enfrentará a Inglaterra.",
    tag: "Argentina",
    tagClass: "tag--argentina",
    imagem: "img/ArgentinaSuica.avif",
  },

  {
    id: 6,
    titulo: "Bellingham Decisivo!",
    resumo:
      "Com direito a 2 gols de Bellingham, sendo o segundo aos 93min para garantir a vitória contra a Noruega, a Inglaterra avança para as SemiFinais e aguarda confronto entre Argentina x Suíça.",
    tag: "Inglaterra",
    tagClass: "tag--inglaterra",
    imagem: "img/InglaterraNoruega.avif",
  },

  {
    id: 7,
    titulo: "Gol no Finalzinho!",
    resumo:
      "Com um gol de Mikel Merino aos 88 minutos, a Espanha vence a Bélgica nessas Quartas de Finais.",
    tag: "Espanha",
    tagClass: "tag--espanha",
    imagem: "img/EspanhaBelgica.avif",
  },

  {
    id: 8,
    titulo: "A dupla da França ataca novamente!",
    resumo:
      "Kylian Mbappé e Ousmane Dembélé combinam 2 gols para eliminar o Marrocos nessas Quartas de Finais.",
    tag: "França",
    tagClass: "tag--franca",
    imagem: "img/FrancaMarrocos.avif",
  },

  {
    id: 9,
    titulo: "Suíça passa nos pênaltis!",
    resumo:
      "A Suíça venceu a Colômbia nas disputas de pênaltis por 4 a 3 nessas Oitavas de Finais.",
    tag: "Suíça",
    tagClass: "tag--suica",
    imagem: "img/SuicaColombia.avif",
  },

  {
    id: 10,
    titulo: "Gol de desempate aos 90+3'!",
    resumo:
      "A Argentina venceu o Egito por 3 a 2 com um gol de cabeça de Enzo Fernández aos 90+3' e avança nessas Oitavas de Finais.",
    tag: "Argentina",
    tagClass: "tag--argentina",
    imagem: "img/ArgentinaEgito.avif",
  },

  {
    id: 11,
    titulo: "Atropelo Bélga!",
    resumo:
      "A Bélgica atropela e elimina os Estados Unidos por 4 a 1 nessas Oitavas de Finais e enfrentará a Espanha.",
    tag: "Bélgica",
    tagClass: "tag--belgica",
    imagem: "img/BelgicaEstadosUnidos.avif",
  },

  {
    id: 12,
    titulo: "Revanche da Liga das Nações!",
    resumo:
      "Perdendo para Portugal na Liga das Nações, a Espanha conseguiu a revanche e venceu a seleção de Portugal por 1 a 0, com gol de Mikel Merino aos 90+1' e avança nessas Oitavas de Finais.",
    tag: "Espanha",
    tagClass: "tag--espanha",
    imagem: "img/EspanhaPortugal.avif",
  },

  {
    id: 13,
    titulo: "Dupla da Inglaterra brilha novamente!",
    resumo:
      "Com dois gols de Bellingham e um de Harry Kane de pênalti, a Inglaterra vence o México por 3 a 2 e avança nessas Oitavas de Finais.",
    tag: "Inglaterra",
    tagClass: "tag--inglaterra",
    imagem: "img/InglaterraMexico.avif",
  },

  {
    id: 14,
    titulo: "Brasil fora da Copa do Mundo...",
    resumo:
      "O Brasil perde por 2 a 1 da Noruega, e está fora dessas Copas do Mundo de 2026...",
    tag: "Brasil",
    tagClass: "tag--brasil",
    imagem: "img/brasil.avif",
  },

  {
    id: 15,
    titulo: "Halland fazendo o que sabe fazer de melhor!",
    resumo:
      "O cometa norueguês Halland marca 2 gols e elimina o Brasil da Copa do Mundo de 2026.",
    tag: "Noruega",
    tagClass: "tag--noruega",
    imagem: "img/noruega.jpg",
  },

  {
    id: 16,
    titulo: "Gol do Artilheiro!",
    resumo:
      "Com um gol de pênalti de Kylian Mbappé, a França vence o Paraguai por 1 a 0.",
    tag: "França",
    tagClass: "tag--franca",
    imagem: "img/frança.avif",
  },

  {
    id: 17,
    titulo: "3 a 0 do Marrocos!",
    resumo:
      "Atropelando o Canadá por 3 a 0, o Marrocos avança essas Oitavas de Finais.",
    tag: "Marrocos",
    tagClass: "tag--marrocos",
    imagem: "img/marrocos.jpg",
  },

  {
    id: 18,
    titulo: "Colômbia vence Gana por 1 a 0!",
    resumo:
      "Com um gol de Jhon Arias logo no início do jogo, a Colômbia segura e vence Gana por 1 a 0 e avança para as Oitavas de Finais da Copa do Mundo de 2026.",
    tag: "Colômbia",
    tagClass: "tag--colombia",
    imagem: "img/colombia.avif",
  },

  {
    id: 19,
    titulo: "O melhor jogo da Copa?",
    resumo:
      "Um espetáculo de futebol em campo. Argentina e Cabo Verde proporcionaram um jogo de 5 gols, sendo um de empate aos 103min e o da vitória aos 111min! 3 a 2 para a Argentina, avançando para as Oitavas de Finais da Copa do Mundo de 2026.",
    tag: "Argentina",
    tagClass: "tag--argentina",
    imagem: "img/ArgentinaCaboVerde.avif",
  },

  {
    id: 20,
    titulo: "Salah cavou no meio!",
    resumo:
      "O Egito venceu a Austrália por 4 a 2 nas disputas de pênaltis, com direito a um golaço de Mohamed Salah cavando no meio do gol!",
    tag: "Egito",
    tagClass: "tag--egito",
    imagem: "img/EgitoAustralia.avif",
  },

  {
    id: 21,
    titulo: "Suíça nas Oitavas de Finais!",
    resumo:
      "A Suíça avança para as Oitavas de Finais da Copa do Mundo de 2026 após vencer a Argélia por 2 a 0.",
    tag: "Suíça",
    tagClass: "tag--suica",
    imagem: "img/SuicaArgelia.avif",
  },
];

// Função que renderiza as notícias na página através do NOTICIAS_DATA
function renderizarNoticias(noticias = NOTICIAS_DATA) {
  const container = document.getElementById("gradeNoticias");

  // Significa que "SE a variável ou objeto chamado container NÂO existir, pare a execução da função atual e saia dela imediatamente.
  if (!container) return;

  // Caso a busca não encontre nenhum resultado
  if (noticias.length === 0) {
    container.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">Nenhuma notícia encontrada para esta busca.</p>`;
    return;
  }


  
  //Insere esse texto pronto de HTML dentro do elemento da página que foi escolhido como container.
  container.innerHTML 
  = noticias.map( // Passa por cada item da lista de notícias e cria um bloco de HTML personalizado com os dados daquele item específico.

      // Permite misturar o texto do HTML com as variáveis dos dados, como ${noticia.titulo} e ${noticia.imagem}.
      (noticia) => `
    <article class="card-noticia">
      <div
        class="card-noticia__imagem"
        style="background-image: url('${noticia.imagem}')"
      >
        <span class="tag ${noticia.tagClass}">${noticia.tag}</span>
      </div>
      <div class="card-noticia__corpo">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.resumo}</p>
        <a href="#" class="link-leia-mais">Leia a matéria completa</a>
      </div>
    </article>
  `,
    )

    // Junta todos os blocos de HTML criados em um único texto contínuo, removendo as vírgulas entre eles.
    .join("");
}

// Configuração do filtro de busca
function configurarBusca() {
  const inputBusca = document.getElementById("buscaNoticia");

  // Encerra a função se o elemento não for encontrado
  if (!inputBusca) return;

  // Adiciona o evento 'input' que dispara a cada letra digitada/apagada
  inputBusca.addEventListener("input", (evento) => {
    // Pega o valor digitado e converte para minúsculas
    const termo = evento.target.value.toLowerCase();

    // Filtra o array original
    const noticiasFiltradas = NOTICIAS_DATA.filter((noticia) => {
      // Converte os dados da notícia para minúsculas também
      const titulo = noticia.titulo.toLowerCase();
      const resumo = noticia.resumo.toLowerCase();
      const tag = noticia.tag.toLowerCase();

      // Verifica se o termo digitado está incluso em algum desses campos
      return (
        titulo.includes(termo) || resumo.includes(termo) || tag.includes(termo)
      );
    });

    // Chama a função de renderizar passando apenas as notícias que passaram no filtro
    renderizarNoticias(noticiasFiltradas);
  });
}

// Ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderizarNoticias(); // Renderiza as notícias
  configurarBusca(); // Campo de Pesquisa
});

