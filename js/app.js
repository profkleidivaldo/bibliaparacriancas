(() => {
  const CORES = ["#e53935", "#fb8c00", "#fdd835", "#43a047", "#00acc1", "#1e88e5",
                 "#8e24aa", "#d81b60", "#6d4c41", "#8bc34a", "#90a4ae", "#212121"];
  const W = 800, H = 600;
  const $ = (id) => document.getElementById(id);

  const canvas = $("desenho");
  const ctx = canvas.getContext("2d");
  const contornoImg = $("contornoImg");
  const HIST = window.HISTORIAS;

  let atual = null, opcoes = [], idx = 0;
  let cor = CORES[0], borracha = false, desenhando = false, ultimo = null, pilha = [];
  let contornoLigado = true;

  const svgUrl = (s) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
  const chave = () => "biblia-ilustrada:" + atual.id + ":" + opcoes[idx].id;

  /* ---------- Índice ---------- */
  function montarIndice() {
    const grupos = [["antigo", "Antigo Testamento"], ["novo", "Novo Testamento"]];
    $("lista").innerHTML = "";
    grupos.forEach(([t, nome]) => {
      const itens = HIST.filter((h) => h.testamento === t);
      if (!itens.length) return;
      const sec = document.createElement("section");
      sec.className = "grupo";
      const h2 = document.createElement("h2");
      h2.textContent = nome;
      const grade = document.createElement("div");
      grade.className = "grade";
      itens.forEach((h) => {
        const a = document.createElement("a");
        a.className = "cartao";
        a.href = "#/" + h.id;
        const ic = document.createElement("span"); ic.className = "icone"; ic.textContent = h.icone;
        const no = document.createElement("span"); no.className = "nome"; no.textContent = h.titulo;
        const rf = document.createElement("small"); rf.textContent = h.referencia;
        a.append(ic, no, rf);
        grade.appendChild(a);
      });
      sec.append(h2, grade);
      $("lista").appendChild(sec);
    });
  }

  /* ---------- Desenho: salvar e carregar por história e por imagem ---------- */
  function fundoBranco() { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, H); }
  function salvar() {
    try { localStorage.setItem(chave(), canvas.toDataURL("image/png")); } catch (e) {}
  }
  function carregar() {
    fundoBranco();
    const k = chave();
    let url = null;
    try { url = localStorage.getItem(k); } catch (e) {}
    if (!url) return;
    const img = new Image();
    img.onload = () => { if (k === chave()) ctx.drawImage(img, 0, 0, W, H); };
    img.src = url;
  }
  function empilhar() {
    pilha.push(ctx.getImageData(0, 0, W, H));
    if (pilha.length > 12) pilha.shift();
  }

  /* ---------- Contornos disponíveis para a história ---------- */
  function montarOpcoes(h) {
    const lista = [];
    ((window.CATALOGO_IMAGENS || {})[h.id] || []).forEach((i) =>
      lista.push({ id: i.arquivo, url: "imagens/" + i.arquivo, credito: i.credito ? "Desenho: " + i.credito : "" }));
    if (h.svg) lista.push({ id: "svg", url: svgUrl(h.svg), credito: "" });
    return lista;
  }
  function mostrarOpcao() {
    const o = opcoes[idx];
    pilha = [];
    contornoImg.onerror = () => { // arquivo ausente: pula para o próximo desenho
      if (opcoes.length > 1) { opcoes.splice(idx, 1); idx %= opcoes.length; mostrarOpcao(); }
    };
    contornoImg.src = o.url;
    contornoImg.style.display = contornoLigado ? "" : "none";
    $("credito").textContent = o.credito;
    $("contador").textContent = (idx + 1) + "/" + opcoes.length;
    $("navDesenho").hidden = opcoes.length < 2;
    carregar();
  }

  /* ---------- Navegação ---------- */
  function fecharPopovers() { $("paleta").hidden = true; $("mais").hidden = true; }
  function alternar(id) { const p = $(id); const abrir = p.hidden; fecharPopovers(); p.hidden = !abrir; }
  function recolher(sim) { $("barra").hidden = sim; $("fab").hidden = !sim; fecharPopovers(); }

  function abrir(id) {
    const h = HIST.find((x) => x.id === id);
    if (!h) { location.hash = "#/"; return; }
    atual = h; opcoes = montarOpcoes(h); idx = 0;
    document.title = h.titulo + " · Bíblia Ilustrada";
    $("tituloTopo").textContent = h.titulo;
    $("titulo").textContent = h.titulo;
    $("referencia").textContent = h.referencia;
    $("texto").innerHTML = h.texto.map((p) => "<p>" + p + "</p>").join("");
    contornoLigado = true; $("contorno").checked = true;
    recolher(false);
    $("indice").hidden = true; $("historia").hidden = false;
    mostrarOpcao();
    window.scrollTo(0, 0);
  }
  function mostrarIndice() {
    document.title = "Bíblia Ilustrada";
    fecharPopovers();
    $("historia").hidden = true; $("indice").hidden = false;
  }
  function rota() {
    const m = location.hash.match(/^#\/(.+)$/);
    if (m) abrir(decodeURIComponent(m[1])); else mostrarIndice();
  }

  /* ---------- Pintura ---------- */
  function posicao(e) {
    const r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (W / r.width), y: (e.clientY - r.top) * (H / r.height) };
  }
  function tracar(a, b) {
    ctx.strokeStyle = borracha ? "#fff" : cor;
    ctx.lineWidth = +$("tamanho").value;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  canvas.addEventListener("pointerdown", (e) => {
    fecharPopovers();
    desenhando = true; empilhar();
    canvas.setPointerCapture(e.pointerId);
    ultimo = posicao(e); tracar(ultimo, ultimo);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!desenhando) return;
    const p = posicao(e); tracar(ultimo, p); ultimo = p;
  });
  const fim = () => { if (desenhando) { desenhando = false; salvar(); } };
  canvas.addEventListener("pointerup", fim);
  canvas.addEventListener("pointercancel", fim);

  /* ---------- Controles ---------- */
  function usarPincel(sim) {
    borracha = !sim;
    $("pincel").classList.toggle("ativo", sim);
    $("borracha").classList.toggle("ativo", !sim);
  }
  function escolherCor(c, botao) {
    cor = c; usarPincel(true);
    $("btnCor").style.background = c;
    document.querySelectorAll("#cores button").forEach((x) => x.classList.toggle("ativo", x === botao));
  }
  CORES.forEach((c, i) => {
    const b = document.createElement("button");
    b.style.background = c; b.setAttribute("aria-label", "Cor " + (i + 1));
    b.onclick = () => escolherCor(c, b);
    $("cores").appendChild(b);
  });
  escolherCor(CORES[0], $("cores").firstChild);

  $("btnCor").onclick = () => alternar("paleta");
  $("btnMais").onclick = () => alternar("mais");
  $("btnRecolher").onclick = () => recolher(true);
  $("fab").onclick = () => recolher(false);
  $("pincel").onclick = () => usarPincel(true);
  $("borracha").onclick = () => usarPincel(false);
  $("desfazer").onclick = () => { const s = pilha.pop(); if (s) { ctx.putImageData(s, 0, 0); salvar(); } };
  $("limpar").onclick = () => {
    if (confirm("Apagar todo o desenho?")) { empilhar(); fundoBranco(); salvar(); fecharPopovers(); }
  };
  $("anterior").onclick = () => { idx = (idx - 1 + opcoes.length) % opcoes.length; mostrarOpcao(); };
  $("proximo").onclick = () => { idx = (idx + 1) % opcoes.length; mostrarOpcao(); };
  $("contorno").onchange = (e) => {
    contornoLigado = e.target.checked;
    contornoImg.style.display = contornoLigado ? "" : "none";
  };
  $("nome").oninput = (e) => {
    const n = e.target.value.trim();
    $("assinatura").textContent = n ? "Ilustrado por " + n : "";
  };

  // Foto de um desenho feito no papel: ocupa o quadro (corte central) e o contorno é desligado.
  $("foto").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      empilhar(); fundoBranco();
      const esc = Math.max(W / img.width, H / img.height);
      const w = img.width * esc, h = img.height * esc;
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
      URL.revokeObjectURL(url);
      contornoLigado = false; $("contorno").checked = false; contornoImg.style.display = "none";
      salvar(); fecharPopovers();
    };
    img.src = url; e.target.value = "";
  };

  // Baixar o desenho (cores + contorno) como PNG
  $("baixar").onclick = () => {
    const out = document.createElement("canvas"); out.width = W; out.height = H;
    const o = out.getContext("2d");
    o.drawImage(canvas, 0, 0);
    const fechar = () => {
      try {
        const a = document.createElement("a");
        a.download = "desenho-" + atual.id + ".png";
        a.href = out.toDataURL("image/png"); a.click();
      } catch (e) {
        alert("Não foi possível baixar ao abrir o arquivo direto do computador. Use o site publicado (GitHub Pages) ou um servidor local.");
      }
    };
    if (contornoLigado) {
      const img = new Image();
      img.onload = () => {
        const k = Math.min(W / img.naturalWidth, H / img.naturalHeight);
        const w = img.naturalWidth * k, h = img.naturalHeight * k;
        o.globalCompositeOperation = "multiply";
        o.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
        o.globalCompositeOperation = "source-over";
        fechar();
      };
      img.src = opcoes[idx].url;
    } else fechar();
  };
  $("imprimir").onclick = () => { fecharPopovers(); window.print(); };

  montarIndice();
  window.addEventListener("hashchange", rota);
  rota();
})();
