// Catálogo do banco de ilustrações.
//
// Liga desenhos de bancos gratuitos às histórias. O arquivo fica em imagens/ (JPEG, PNG ou SVG de traço
// preto sobre fundo branco; o branco é ignorado, então a criança pinta "por baixo" do contorno).
// Cada história pode ter vários desenhos: a criança alterna entre eles pelas setas da barra de pintura.
//
// Para acrescentar uma imagem, salve-a em imagens/ e some uma entrada com o id da história:
//   { arquivo: "noe-1.jpg", credito: "..." }
// Confira sempre os termos de uso do conjunto antes (veja CREDITOS.md).
(() => {
  // Conjuntos CommonToAll (CC0), publicados em FreeBibleimages.org.
  const CTA = "CommonToAll.com / FreeBibleimages.org (CC0)";
  const serie = (id, n) =>
    Array.from({ length: n }, (_, i) => ({ arquivo: `${id}-${i + 1}.jpg`, credito: CTA }));

  window.CATALOGO_IMAGENS = {
    jacob: serie("jacob", 4),
    sarca: serie("sarca", 8),
    "mar-vermelho": serie("mar-vermelho", 8),
    "agua-rocha": serie("agua-rocha", 4),
    "josue-calebe": serie("josue-calebe", 8),
    serpente: serie("serpente", 4),
    davi: serie("davi", 4),
    eliseu: serie("eliseu", 4)
  };
})();
