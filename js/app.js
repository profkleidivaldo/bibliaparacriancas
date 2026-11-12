(() => {
  const CORES = ["#e53935","#fb8c00","#fdd835","#43a047","#00acc1","#1e88e5",
                 "#8e24aa","#d81b60","#6d4c41","#8bc34a","#90a4ae","#212121"];
  const W = 800, H = 600;

  const canvas = document.getElementById("desenho");
  const ctx = canvas.getContext("2d");
  const contornoImg = document.getElementById("contornoImg");
  const el = (id) => document.getElementById(id);

  let atual = window.HISTORIAS[0];
  let cor = CORES[0], borracha = false, desenhando = false;
  let ultimo = null, pilha = [];

  const svgUrl = (h) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(h.svg);
  const chave = (h) => "biblia-ilustrada:" + h.id;

  function fundoBranco() { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, H); }

  function salvar() {
    try { localStorage.setItem(chave(atual), canvas.toDataURL("image/png")); } catch (e) {}
  }
  function carregar() {
    fundoBranco();
    let url = null;
    try { url = localStorage.getItem(chave(atual)); } catch (e) {}
    if (!url) return;
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0, W, H);
    img.src = url;
  }
  function empilhar() {
    pilha.push(ctx.getImageData(0, 0, W, H));
    if (pilha.length > 25) pilha.shift();
  }

  function escolher(h) {
    atual = h;
    pilha = [];
    el("titulo").textContent = h.titulo;
    el("referencia").textContent = h.referencia;
    el("texto").innerHTML = h.texto.map((p) => `<p>${p}</p>`).join("");
    contornoImg.src = svgUrl(h);
    el("contorno").checked = true;
    contornoImg.style.display = "";
    document.querySelectorAll("#historias button").forEach((b) =>
      b.classList.toggle("ativo", b.dataset.id === h.id));
    carregar();
  }

  function posicao(e) {
    const r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (W / r.width), y: (e.clientY - r.top) * (H / r.height) };
  }
  function tracar(a, b) {
    ctx.strokeStyle = borracha ? "#fff" : cor;
    ctx.lineWidth = +el("tamanho").value;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }

  canvas.addEventListener("pointerdown", (e) => {
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

  // Interface
  window.HISTORIAS.forEach((h) => {
    const b = document.createElement("button");
    b.textContent = h.titulo; b.dataset.id = h.id;
    b.onclick = () => escolher(h);
    el("historias").appendChild(b);
  });
  CORES.forEach((c, i) => {
    const b = document.createElement("button");
    b.style.background = c; b.title = c; b.setAttribute("aria-label", "Cor " + (i + 1));
    if (i === 0) b.classList.add("ativo");
    b.onclick = () => {
      cor = c; borracha = false;
      el("pincel").classList.add("ativo"); el("borracha").classList.remove("ativo");
      document.querySelectorAll("#cores button").forEach((x) => x.classList.toggle("ativo", x === b));
    };
    el("cores").appendChild(b);
  });
  el("pincel").onclick = () => { borracha = false; el("pincel").classList.add("ativo"); el("borracha").classList.remove("ativo"); };
  el("borracha").onclick = () => { borracha = true; el("borracha").classList.add("ativo"); el("pincel").classList.remove("ativo"); };
  el("desfazer").onclick = () => { const s = pilha.pop(); if (s) { ctx.putImageData(s, 0, 0); salvar(); } };
  el("limpar").onclick = () => { if (confirm("Apagar todo o desenho desta história?")) { empilhar(); fundoBranco(); salvar(); } };
  el("contorno").onchange = (e) => { contornoImg.style.display = e.target.checked ? "" : "none"; };
  el("nome").oninput = (e) => {
    const n = e.target.value.trim();
    el("assinatura").textContent = n ? "Ilustrado por " + n : "";
  };

  // Foto de um desenho feito no papel: ocupa o quadro (corte central) e o contorno é desligado.
  el("foto").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      empilhar(); fundoBranco();
      const escala = Math.max(W / img.width, H / img.height);
      const w = img.width * escala, h = img.height * escala;
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
      URL.revokeObjectURL(url);
      el("contorno").checked = false; contornoImg.style.display = "none";
      salvar();
    };
    img.src = url; e.target.value = "";
  };

  // Baixar o desenho (cores + contorno) como PNG
  el("baixar").onclick = () => {
    const out = document.createElement("canvas"); out.width = W; out.height = H;
    const o = out.getContext("2d");
    o.drawImage(canvas, 0, 0);
    const fechar = () => {
      const a = document.createElement("a");
      a.download = "desenho-" + atual.id + ".png";
      a.href = out.toDataURL("image/png"); a.click();
    };
    if (el("contorno").checked) {
      const img = new Image();
      img.onload = () => { o.drawImage(img, 0, 0, W, H); fechar(); };
      img.src = svgUrl(atual);
    } else fechar();
  };
  el("imprimir").onclick = () => window.print();

  escolher(atual);
})();
