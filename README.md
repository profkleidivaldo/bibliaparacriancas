# 📖 Bíblia Ilustrada para Crianças

Um projeto aberto de histórias bíblicas para crianças, com ilustrações de contorno para elas **colorirem na tela** (ou desenharem no papel e **fotografarem**). O desenho é diagramado junto com o texto da história, em uma página pronta para **imprimir ou salvar em PDF**.

Não precisa de instalação nem de servidor: é HTML, CSS e JavaScript puros.

## Como usar

1. Abra `index.html` no navegador (ou publique no GitHub Pages, veja abaixo).
2. Escolha uma história e leia o texto.
3. Pinte o desenho com o dedo, o mouse ou a caneta, ou envie a foto de um desenho feito no papel.
4. Digite o nome do pequeno artista e clique em **Imprimir / Salvar PDF**.

O desenho fica salvo automaticamente no navegador (localStorage), por história.

## Histórias incluídas

- A Criação do Mundo (Gênesis 1)
- Noé e a Arca (Gênesis 6–9)
- Jonas e o Grande Peixe (Jonas 1–3)
- Daniel e os Leões (Daniel 6)

## Estrutura

```
index.html        página principal
css/style.css     estilos (inclui o layout de impressão A4)
js/historias.js   textos das histórias e ilustrações em SVG
js/app.js         desenho no canvas, foto, download e impressão
```

## Como adicionar uma nova história

Em `js/historias.js`, acrescente um objeto à lista `window.HISTORIAS`:

```js
{
  id: "davi",
  titulo: "Davi e Golias",
  referencia: "1 Samuel 17",
  texto: ["Primeiro parágrafo...", "Segundo parágrafo..."],
  svg: S(`<circle cx="400" cy="300" r="100"/>`) // contorno SEM preenchimento
}
```

Dicas para as ilustrações: use apenas linhas (`fill="none"`), traços grossos e formas grandes, fáceis de colorir. Tela de 800×600.

## Publicar no GitHub Pages

```bash
git init
git add .
git commit -m "Bíblia ilustrada para crianças"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/biblia-ilustrada.git
git push -u origin main
```

Depois, no repositório: **Settings → Pages → Branch: main / (root) → Save**. O site ficará em `https://SEU-USUARIO.github.io/biblia-ilustrada/`.

## Ideias para o futuro

- Mais histórias (Davi e Golias, Moisés, José, Natal, Páscoa…)
- Modo "livro": juntar várias páginas num único PDF
- Versão em outros idiomas
- Ilustrações feitas por voluntários e por crianças

## Licença

Textos e ilustrações originais, publicados sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br). Contribuições são bem-vindas!
