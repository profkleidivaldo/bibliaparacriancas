# 📖 Bíblia Ilustrada

Histórias bíblicas para crianças, com desenhos para **colorir na tela do celular** (ou desenhar no papel e **fotografar**). O desenho é diagramado junto com o texto, em uma página pronta para **imprimir ou salvar em PDF**.

É HTML, CSS e JavaScript puros: não precisa de instalação nem de servidor.

## Como usar

1. Abra `index.html` (ou o site publicado) e escolha uma história no **índice**.
2. Pinte o desenho com o dedo. A barra de baixo tem cor, pincel, borracha, desfazer e as setas ◀ ▶ para trocar de desenho.
3. O botão **⋯** abre mais opções: tamanho do pincel (na paleta de cores), mostrar o contorno, nome do artista, limpar, foto do papel, PNG e Imprimir / PDF.
4. O botão **⌄** recolhe a barra e deixa só um 🎨 no canto da tela.

Cada desenho fica salvo automaticamente no navegador.

> Para **baixar o PNG**, use o site publicado ou um servidor local (`python3 -m http.server`). Abrindo o arquivo direto do computador, o navegador bloqueia esse recurso.

## Histórias (20)

**Antigo Testamento:** Criação · Noé e a Arca · Abraão e as Estrelas · A Escada de Jacó · José e a Túnica Colorida · O Bebê Moisés no Rio · A Sarça que Pegava Fogo · A Travessia do Mar Vermelho · Água que Saiu da Rocha · Josué e Calebe Confiam em Deus · A Serpente de Bronze · Davi e o Gigante Golias · O Azeite da Viúva · Jonas e o Grande Peixe · Daniel e os Leões

**Novo Testamento:** O Nascimento de Jesus · Jesus Acalma a Tempestade · Cinco Pães e Dois Peixes · Zaqueu Sobe na Árvore · Jesus Está Vivo!

## Estrutura

```
index.html             índice e página da história
css/style.css          estilos (celular primeiro) e layout de impressão A4
js/historias.js        4 primeiras histórias
js/historias-extra.js  demais histórias, ordem, ícones e ilustrações SVG de reserva
js/app.js              índice, pintura, foto, PNG e impressão
imagens/               desenhos para colorir (CC0) e imagens/catalogo.js
CREDITOS.md            licenças e artistas
```

## Como adicionar uma história

Em `js/historias-extra.js`, inclua um objeto em `novas` e o `id` nas listas `ORDEM` (e em `NOVO`, se for do Novo Testamento) e em `ICONES`:

```js
{
  id: "ester", titulo: "A Rainha Ester", referencia: "Ester 4–8",
  texto: ["Primeiro parágrafo...", "Segundo parágrafo..."],
  svg: SVG(`<circle cx="400" cy="300" r="100"/>`) // opcional: contorno SEM preenchimento
}
```

## Como adicionar desenhos do banco de imagens

Os desenhos ficam em `imagens/` e são ligados às histórias em `imagens/catalogo.js`:

```js
noe: [{ arquivo: "noe-1.jpg", credito: "CommonToAll.com / FreeBibleimages.org (CC0)" }]
```

Use imagens de traço preto sobre fundo branco, de preferência 4:3 e com cerca de 800×600 px (`convert original.jpg -resize 800x600 -quality 80 -strip noe-1.jpg`). O fundo branco é ignorado, então a criança pinta por baixo dos traços. Veja [CREDITOS.md](CREDITOS.md) para fontes e licenças.

## Publicar no GitHub Pages

```bash
git remote add origin https://github.com/SEU-USUARIO/biblia-ilustrada.git
git push -u origin main
```

No repositório: **Settings → Pages → Branch: main / (root) → Save**.

## Licença

Código, textos e ilustrações SVG originais sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br). Os desenhos de `imagens/` são CC0 (veja [CREDITOS.md](CREDITOS.md)). Contribuições são bem-vindas!
