# 📖 Bíblia Ilustrada para Crianças

Um projeto aberto de histórias bíblicas para crianças, com ilustrações de contorno para elas **colorirem na tela** (ou desenharem no papel e **fotografarem**). O desenho é diagramado junto com o texto da história, em uma página pronta para **imprimir ou salvar em PDF**.

Não precisa de instalação nem de servidor: é HTML, CSS e JavaScript puros.

## Como usar

1. Abra `index.html` no navegador (ou publique no GitHub Pages, veja abaixo).
2. Escolha uma história e leia o texto.
3. Pinte o desenho com o dedo, o mouse ou a caneta, ou envie a foto de um desenho feito no papel.
4. Se a história tiver mais de um desenho, use **Outro desenho**.
5. Digite o nome do pequeno artista e clique em **Imprimir / Salvar PDF**.

O desenho fica salvo automaticamente no navegador (localStorage), por história.

> Para **baixar o PNG** com desenhos do banco de imagens, use o site publicado ou um servidor local (`python3 -m http.server`). Abrindo o arquivo direto do computador, o navegador bloqueia esse recurso.

## Histórias incluídas (14)

**Antigo Testamento:** A Criação do Mundo (Gn 1) · Noé e a Arca (Gn 6–9) · Abraão e as Estrelas (Gn 12; 15; 21) · José e a Túnica Colorida (Gn 37–45) · O Bebê Moisés no Rio (Êx 2) · A Travessia do Mar Vermelho (Êx 14) · Davi e o Gigante Golias (1 Sm 17) · Daniel e os Leões (Dn 6) · Jonas e o Grande Peixe (Jn 1–3)

**Novo Testamento:** O Nascimento de Jesus (Lc 2; Mt 2) · Jesus Acalma a Tempestade (Mc 4) · Cinco Pães e Dois Peixes (Jo 6) · Zaqueu Sobe na Árvore (Lc 19) · Jesus Está Vivo! (Mt 28; Lc 24; Jo 20)

## Estrutura

```
index.html             página principal
css/style.css          estilos (inclui o layout de impressão A4)
js/historias.js        4 primeiras histórias e ilustrações em SVG
js/historias-extra.js  demais histórias, ilustrações em SVG e ordem da lista
js/app.js              desenho no canvas, foto, banco de imagens, download e impressão
imagens/catalogo.js    lista de desenhos do banco de ilustrações (você preenche)
imagens/               coloque aqui os arquivos de imagem
CREDITOS.md            licenças e fontes
```

## Banco de ilustrações bíblicas gratuito

Cada história já vem com uma ilustração de contorno própria. Para oferecer também desenhos de um banco gratuito, o projeto tem um catálogo simples.

A fonte que recomendo é o **CommonToAll**, no [FreeBibleimages.org](https://www.freebibleimages.org/): são desenhos em preto e branco para colorir, em **CC0 (domínio público)**, que permitem uso e adaptação, inclusive comercial. Os termos de download do conjunto pedem que se dê crédito a "CommonToAll.com / FreeBibleimages.org".

Passo a passo:

1. No FreeBibleimages, abra o conjunto da história e baixe a imagem (JPEG ou PNG). Leia o "Terms of Download" da página.
2. Salve o arquivo em `imagens/`, por exemplo `imagens/noe-1.jpg`.
3. Registre-o em `imagens/catalogo.js` usando o `id` da história:

```js
window.CATALOGO_IMAGENS = {
  noe: [
    { arquivo: "noe-1.jpg", credito: "CommonToAll.com / FreeBibleimages.org (CC0)" }
  ]
};
```

4. Pronto: a história passa a ter o botão **Outro desenho**, e o crédito aparece abaixo da imagem e na impressão.

O fundo branco das imagens é ignorado automaticamente (efeito *multiply*), então a criança pinta por baixo dos traços pretos. Imagens com proporção 4:3 se encaixam melhor.

Os ids das histórias estão no topo de `imagens/catalogo.js`. Mais detalhes sobre licenças em [CREDITOS.md](CREDITOS.md).

## Como adicionar uma nova história

Em `js/historias-extra.js`, acrescente um objeto à lista `novas` e inclua o `id` na lista `ORDEM`:

```js
{
  id: "ester",
  titulo: "A Rainha Ester",
  referencia: "Ester 4–8",
  texto: ["Primeiro parágrafo...", "Segundo parágrafo..."],
  svg: SVG(`<circle cx="400" cy="300" r="100"/>`) // contorno SEM preenchimento
}
```

Dicas para as ilustrações: use apenas linhas (`fill="none"`), traços grossos e formas grandes, fáceis de colorir. Tela de 800×600. Há funções prontas em `historias-extra.js`: `sol`, `estrela`, `nuvem`, `onda`, `pessoa`, `peixe`.

## Publicar no GitHub Pages

```bash
git remote add origin https://github.com/SEU-USUARIO/biblia-ilustrada.git
git push -u origin main
```

Depois, no repositório: **Settings → Pages → Branch: main / (root) → Save**. O site ficará em `https://SEU-USUARIO.github.io/biblia-ilustrada/`.

## Ideias para o futuro

- Mais histórias (Rute, Ester, Sansão, Jesus e as crianças, o Bom Samaritano…)
- Modo "livro": juntar várias páginas num único PDF
- Versão em outros idiomas
- Ilustrações feitas por voluntários e por crianças

## Licença

Código, textos e ilustrações originais sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br). Imagens de terceiros mantêm a licença de origem (veja [CREDITOS.md](CREDITOS.md)). Contribuições são bem-vindas!
