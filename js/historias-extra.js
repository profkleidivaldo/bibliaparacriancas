// Histórias adicionais. Este arquivo acrescenta itens a window.HISTORIAS e reordena a lista
// em ordem bíblica. Ilustrações de reserva (SVG de contorno) são desenhadas aqui; para usar
// desenhos de bancos gratuitos, veja imagens/catalogo.js.
(() => {
  const SVG = (corpo) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" ` +
    `fill="none" stroke="#222" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${corpo}</svg>`;

  const sol = (x, y, r) => {
    let raios = "";
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI / 4) * i, c = Math.cos(a), s = Math.sin(a);
      raios += `M${(x + c * (r + 12)).toFixed(0)} ${(y + s * (r + 12)).toFixed(0)}L${(x + c * (r + 34)).toFixed(0)} ${(y + s * (r + 34)).toFixed(0)}`;
    }
    return `<circle cx="${x}" cy="${y}" r="${r}"/><path d="${raios}"/>`;
  };
  const estrela = (x, y, r) => {
    let p = [];
    for (let i = 0; i < 10; i++) {
      const rr = i % 2 ? r * 0.45 : r, a = -Math.PI / 2 + (Math.PI / 5) * i;
      p.push(`${(x + rr * Math.cos(a)).toFixed(0)},${(y + rr * Math.sin(a)).toFixed(0)}`);
    }
    return `<polygon points="${p.join(" ")}"/>`;
  };
  const nuvem = (x, y) => `<path d="M${x} ${y}c30-30 80-30 100 0c40-10 60 30 30 45H${x + 10}c-30 0-35-35-10-45z"/>`;
  const onda = (y) =>
    `<path d="M0 ${y}c50-30 100-30 150 0s100 30 150 0s100-30 150 0s100 30 150 0s100-30 150 0s100 30 50 15V600H0z"/>`;
  const pessoa = (x, y, k = 1) =>
    `<g transform="translate(${x} ${y}) scale(${k})"><circle cx="0" cy="0" r="25"/>` +
    `<path d="M-25 28h50l22 110h-94zM-25 42L-52 100M25 42L52 100"/>` +
    `<path d="M-9 -4v2M9 -4v2M-9 8q9 7 18 0" stroke-width="4"/></g>`;
  const peixe = (x, y) =>
    `<path d="M${x} ${y}c40-30 90-30 130 0c-40 30-90 30-130 0zM${x + 130} ${y}l30-20v40z"/><circle cx="${x + 25}" cy="${y - 4}" r="4"/>`;

  const novas = [
    {
      id: "abraao", titulo: "Abraão e as Estrelas", referencia: "Gênesis 12; 15; 21",
      texto: [
        "Abraão era um homem que confiava em Deus. Um dia, Deus lhe disse: “Saia da sua terra e vá para o lugar que eu vou lhe mostrar.” Abraão obedeceu e partiu com sua esposa, Sara.",
        "Os dois já eram idosos e não tinham filhos. Certa noite, Deus levou Abraão para fora da tenda e disse: “Olhe para o céu e conte as estrelas, se puder. Assim será a sua família!”",
        "Abraão acreditou na promessa de Deus, mesmo sem entender como ela se cumpriria.",
        "Algum tempo depois, Deus cumpriu o que prometeu: Sara teve um filho, chamado Isaque. Abraão e Sara riram de alegria!"
      ],
      svg: SVG(`
        <path d="M560 70a50 50 0 1 0 50 85a40 40 0 1 1-50-85z"/>
        ${estrela(130, 90, 34)}${estrela(300, 150, 26)}${estrela(430, 70, 38)}${estrela(690, 230, 28)}${estrela(250, 40, 18)}${estrela(560, 210, 20)}${estrela(80, 220, 20)}
        <path d="M0 500C150 470 300 520 450 495S700 470 800 500V600H0z"/>
        <path d="M90 500L215 340L340 500zM180 500L215 430L250 500"/>
        <path d="M470 500l25-25M610 505l22-22"/>
        ${pessoa(520, 345, 1.1)}
        <path d="M468 405L440 330" /><circle cx="437" cy="322" r="6"/>`)
    },
    {
      id: "jose", titulo: "José e a Túnica Colorida", referencia: "Gênesis 37–45",
      texto: [
        "José era o filho preferido de Jacó, que lhe deu de presente uma túnica muito colorida. Os irmãos mais velhos ficaram com ciúme.",
        "Um dia, os irmãos venderam José a viajantes que iam para o Egito. Longe de casa, José trabalhou duro e, mesmo quando injustiças aconteceram com ele, continuou confiando em Deus.",
        "Deus ajudou José a explicar um sonho do rei do Egito: viriam anos de fartura e depois anos de fome. O rei ficou tão agradecido que fez de José um governante.",
        "Quando a fome chegou, os irmãos de José foram ao Egito buscar comida. José os reconheceu e, em vez de se vingar, disse: “Eu perdoo vocês.” A família se abraçou e voltou a ficar unida."
      ],
      svg: SVG(`
        <path d="M300 160L360 120Q400 155 440 120L500 160L585 265L520 300L490 258V490H310V258L280 300L215 265Z"/>
        <path d="M310 320H490M310 380H490M310 440H490M360 120v40M440 120v40"/>
        <path d="M385 195l15 30l15-30"/>
        ${sol(110, 110, 38)}
        <path d="M690 70a40 40 0 1 0 40 70a32 32 0 1 1-40-70z"/>
        ${estrela(640, 230, 24)}${estrela(710, 300, 20)}${estrela(110, 300, 22)}${estrela(60, 400, 18)}${estrela(160, 460, 20)}
        <path d="M0 540H800"/>`)
    },
    {
      id: "moises", titulo: "O Bebê Moisés no Rio", referencia: "Êxodo 2",
      texto: [
        "No Egito, o faraó tinha feito leis muito injustas contra o povo hebreu, e os bebês corriam perigo. A mãe de um menininho o escondeu em casa por três meses.",
        "Quando não pôde mais escondê-lo, ela preparou um cestinho bem forte e colocou o bebê entre os juncos, na beira do rio. Maria, a irmã dele, ficou vigiando de longe.",
        "A filha do faraó foi se banhar no rio, ouviu o bebê chorar e teve pena dele. Maria se aproximou e perguntou: “Quer que eu chame uma ama para cuidar dele?” E chamou a própria mãe do menino!",
        "A princesa deu ao bebê o nome de Moisés, que quer dizer “tirado das águas”. Moisés cresceu, e Deus o escolheu para libertar o seu povo."
      ],
      svg: SVG(`
        <ellipse cx="400" cy="385" rx="160" ry="30"/>
        <path d="M240 385C245 480 555 480 560 385M270 425H530M300 455H500"/>
        <circle cx="400" cy="350" r="45"/>
        <path d="M382 342v3M418 342v3M385 365q15 12 30 0" stroke-width="4"/>
        <path d="M120 540C125 420 108 320 130 230M170 540C170 430 185 340 175 270M630 540C625 420 642 320 620 230M680 540C682 430 665 350 675 280"/>
        <ellipse cx="130" cy="215" rx="12" ry="32"/><ellipse cx="175" cy="255" rx="10" ry="28"/>
        <ellipse cx="620" cy="215" rx="12" ry="32"/><ellipse cx="675" cy="265" rx="10" ry="28"/>
        ${sol(400, 95, 42)}
        ${onda(500)}`)
    },
    {
      id: "mar-vermelho", titulo: "A Travessia do Mar Vermelho", referencia: "Êxodo 14",
      texto: [
        "Depois de muito sofrimento no Egito, o povo de Deus foi libertado, guiado por Moisés. Mas o faraó mudou de ideia e mandou seu exército atrás deles.",
        "O povo chegou à beira do Mar Vermelho. Atrás vinham os soldados; na frente, o mar. Todos ficaram com medo, mas Moisés disse: “Não tenham medo! Deus vai cuidar de vocês.”",
        "Deus mandou Moisés levantar o cajado sobre o mar. Um forte vento abriu as águas e formou um caminho seco, com muralhas de água dos dois lados.",
        "O povo atravessou em segurança. Quando todos estavam do outro lado, as águas voltaram ao lugar, e o exército não conseguiu alcançá-los. O povo agradeceu a Deus pelo cuidado e pela libertação."
      ],
      svg: SVG(`
        <path d="M0 60H260C240 130 280 200 250 270S270 400 240 600H0Z"/>
        <path d="M30 150c30-20 60-20 90 0M30 250c30-20 60-20 90 0M30 350c30-20 60-20 90 0M30 450c30-20 60-20 90 0"/>
        <path d="M800 60H540C560 130 520 200 550 270S530 400 560 600H800Z"/>
        <path d="M680 150c30-20 60-20 90 0M680 250c30-20 60-20 90 0M680 350c30-20 60-20 90 0M680 450c30-20 60-20 90 0"/>
        ${sol(400, 100, 44)}
        ${pessoa(400, 280, 1)}
        <path d="M425 322L470 250M470 190V400"/>
        ${pessoa(330, 470, 0.5)}${pessoa(470, 480, 0.5)}
        <path d="M300 590L330 520M500 590L470 520"/>`)
    },
    {
      id: "davi", titulo: "Davi e o Gigante Golias", referencia: "1 Samuel 17",
      texto: [
        "O exército de Israel estava com medo de um gigante chamado Golias, que gritava todos os dias: “Quem vai lutar comigo?”",
        "Davi era um pastorzinho que cuidava das ovelhas. Foi levar comida aos irmãos soldados e ouviu o gigante. Então disse ao rei Saul: “Eu vou lutar! Deus me ajudou a proteger as ovelhas, e vai me ajudar agora.”",
        "O rei quis que Davi usasse sua armadura, mas era pesada demais. Davi pegou o seu cajado, a sua funda e cinco pedras lisas do riacho.",
        "“Você vem com espada e lança, mas eu venho em nome de Deus!”, gritou Davi. Ele girou a funda, lançou a pedra, e o gigante caiu. O povo comemorou, porque Deus tinha dado a vitória."
      ],
      svg: SVG(`
        ${sol(110, 90, 36)}${nuvem(330, 60)}
        ${pessoa(190, 330, 1)}
        <path d="M215 372L262 300M262 300c30-40 70-10 40 25c-20 20-45 5-40-25"/>
        <circle cx="150" cy="525" r="14"/><circle cx="195" cy="535" r="12"/><circle cx="238" cy="525" r="13"/>
        <path d="M525 205a55 55 0 0 1 110 0z"/><path d="M580 150v-28"/>
        ${pessoa(580, 205, 2.2)}
        <path d="M680 160V470M668 160l12-30l12 30"/>
        <circle cx="470" cy="420" r="55"/><circle cx="470" cy="420" r="22"/>
        <path d="M0 540H800"/>`)
    },
    {
      id: "natal", titulo: "O Nascimento de Jesus", referencia: "Lucas 2; Mateus 2",
      texto: [
        "Maria e José viajaram até a cidade de Belém. Estava tudo cheio e não havia lugar para eles na hospedaria. Então ficaram num lugar onde os animais dormiam.",
        "Ali nasceu Jesus. Maria o envolveu em panos e o deitou numa manjedoura.",
        "Perto dali, pastores cuidavam das ovelhas durante a noite. Um anjo apareceu e disse: “Não tenham medo! Hoje nasceu o Salvador!” O céu se encheu de anjos que cantavam louvores a Deus.",
        "Os pastores correram a Belém e encontraram o bebê, exatamente como o anjo havia dito. Voltaram felizes, contando a todos o que tinham visto.",
        "Mais tarde, sábios vindos de longe seguiram uma estrela brilhante até Jesus e lhe deram presentes."
      ],
      svg: SVG(`
        ${estrela(400, 95, 55)}
        <path d="M340 95H300M460 95H500M355 55l-20-20M445 55l20-20"/>
        <path d="M120 310L400 170L680 310M160 300V530M640 300V530"/>
        <path d="M0 530H800"/>
        <path d="M330 470L470 470L490 525H310Z"/>
        <ellipse cx="400" cy="458" rx="48" ry="18"/><circle cx="400" cy="432" r="22"/>
        <path d="M392 428v2M408 428v2M393 438q7 5 14 0" stroke-width="3"/>
        ${pessoa(250, 335, 1.1)}${pessoa(555, 335, 1.1)}
        ${estrela(70, 60, 20)}${estrela(740, 70, 20)}${estrela(720, 190, 16)}${estrela(80, 190, 16)}
        <path d="M200 530l15-18M580 530l-12-16M430 530l12-14"/>`)
    },
    {
      id: "tempestade", titulo: "Jesus Acalma a Tempestade", referencia: "Marcos 4:35-41",
      texto: [
        "Certa tarde, Jesus e seus amigos, os discípulos, atravessavam o lago de barco. Jesus estava cansado e adormeceu.",
        "De repente, veio uma tempestade forte. As ondas enchiam o barco e os discípulos ficaram com medo. Eles acordaram Jesus: “Mestre, o senhor não se importa que a gente esteja em perigo?”",
        "Jesus acordou, levantou a mão e disse ao vento e ao mar: “Silêncio! Acalmem-se!” O vento parou e o lago ficou calmo.",
        "Jesus perguntou: “Por que vocês têm medo? Ainda não confiam em mim?” Os discípulos ficaram admirados: até o vento e o mar obedeciam a Jesus."
      ],
      svg: SVG(`
        ${nuvem(60, 80)}${nuvem(300, 40)}${nuvem(560, 90)}
        <path d="M660 130L610 215H655L615 300"/>
        <path d="M100 200l-14 40M180 215l-14 40M270 160l-14 40M470 175l-14 40M540 215l-14 40M720 215l-14 40"/>
        <path d="M220 360H580L530 460H270Z"/>
        <path d="M400 360V160M400 170L520 340H400Z"/>
        <circle cx="320" cy="335" r="22"/><circle cx="480" cy="335" r="22"/>
        <path d="M300 335H340M460 335H500" stroke-width="3"/>
        ${onda(470)}
        <path d="M0 540c50-25 100-25 150 0s100 25 150 0s100-25 150 0s100 25 150 0s100-25 150 0s100 25 50 12" />`)
    },
    {
      id: "paes", titulo: "Cinco Pães e Dois Peixes", referencia: "João 6:1-13",
      texto: [
        "Uma grande multidão seguiu Jesus para ouvi-lo. Já era tarde e todos estavam com fome. Os discípulos disseram que não havia comida suficiente para tanta gente.",
        "Um menino ofereceu o que tinha: cinco pãezinhos e dois peixinhos. André perguntou: “O que é isso para tanta gente?”",
        "Jesus agradeceu a Deus pelo alimento e começou a repartir. Os discípulos serviram, e todos comeram até ficar satisfeitos. Eram milhares de pessoas!",
        "No fim, os discípulos recolheram doze cestos cheios de sobras. Deus pode fazer coisas grandes com o pouco que oferecemos."
      ],
      svg: SVG(`
        ${sol(680, 90, 36)}
        <ellipse cx="400" cy="400" rx="170" ry="32"/>
        <path d="M230 400C240 520 560 520 570 400M260 445H540M300 485H500"/>
        <circle cx="300" cy="360" r="38"/><circle cx="375" cy="342" r="38"/><circle cx="450" cy="352" r="38"/><circle cx="520" cy="370" r="34"/><circle cx="405" cy="398" r="30"/>
        <path d="M285 345l20 15M360 327l20 15M435 337l20 15M505 355l18 14"/>
        ${peixe(120, 240)}${peixe(500, 200)}
        ${pessoa(130, 420, 0.9)}
        <path d="M0 560H800"/>`)
    },
    {
      id: "zaqueu", titulo: "Zaqueu Sobe na Árvore", referencia: "Lucas 19:1-10",
      texto: [
        "Zaqueu era um homem baixinho, cobrador de impostos em Jericó. Muita gente não gostava dele, porque ele cobrava mais do que devia.",
        "Um dia, Jesus passou pela cidade. Zaqueu queria muito ver Jesus, mas a multidão era grande. Então ele correu à frente e subiu numa árvore.",
        "Quando Jesus chegou ali, olhou para cima e disse: “Zaqueu, desça depressa! Hoje eu vou ficar na sua casa.”",
        "Zaqueu desceu muito feliz. Prometeu devolver o dinheiro que tinha tirado dos outros e dar metade do que tinha aos pobres. Jesus disse que a salvação tinha chegado àquela casa."
      ],
      svg: SVG(`
        ${sol(100, 90, 36)}
        <path d="M580 540C575 470 585 420 575 380M640 540C645 470 635 420 640 380"/>
        <path d="M575 400C520 370 480 340 450 320"/>
        <circle cx="560" cy="230" r="85"/><circle cx="640" cy="190" r="70"/><circle cx="700" cy="260" r="70"/><circle cx="610" cy="300" r="70"/>
        ${pessoa(448, 270, 0.55)}
        ${pessoa(220, 360, 1.2)}
        <path d="M274 405L330 335"/>
        <circle cx="90" cy="525" r="20"/><circle cx="360" cy="535" r="20"/><circle cx="440" cy="520" r="20"/>
        <path d="M0 540H800"/>`)
    },
    {
      id: "ressurreicao", titulo: "Jesus Está Vivo!", referencia: "Mateus 28; Lucas 24; João 20",
      texto: [
        "Jesus morreu na cruz e foi colocado num túmulo, fechado com uma grande pedra. Seus amigos estavam muito tristes.",
        "No domingo de manhã bem cedo, algumas mulheres foram ao túmulo e viram que a pedra tinha sido removida e o túmulo estava vazio.",
        "Um anjo disse a elas: “Não tenham medo! Jesus não está aqui, ele ressuscitou, como tinha dito!”",
        "As mulheres correram para contar aos discípulos. Depois, Jesus apareceu para eles e disse: “Paz esteja com vocês!” A tristeza virou alegria, e todos passaram a contar a boa notícia."
      ],
      svg: SVG(`
        ${sol(110, 100, 40)}
        <path d="M180 530V300A220 220 0 0 1 620 300V530"/>
        <path d="M290 530V350A110 110 0 0 1 510 350V530"/>
        <circle cx="670" cy="440" r="85"/><path d="M630 400c20 15 45 15 60 0M635 470c25 10 50 5 65-10"/>
        <path d="M0 530H800"/>
        <circle cx="90" cy="500" r="10"/><path d="M90 510v40M75 495a8 8 0 1 0 0.1 0M105 495a8 8 0 1 0 0.1 0M82 485a8 8 0 1 0 0.1 0M98 485a8 8 0 1 0 0.1 0"/>
        <circle cx="160" cy="520" r="10"/><path d="M160 530v30"/>
        <circle cx="740" cy="550" r="9"/><path d="M740 559v30"/>
        <path d="M60 570H760"/>`)
    }
  ];

  // Daniel: o leão tem juba de círculos ao redor do rosto, e Daniel ora ao lado.
  const juba = Array.from({ length: 11 }, (_, i) => {
    const a = (2 * Math.PI * i) / 11;
    return `<circle cx="${(500 + 102 * Math.cos(a)).toFixed(0)}" cy="${(320 + 102 * Math.sin(a)).toFixed(0)}" r="29"/>`;
  }).join("");
  window.HISTORIAS.find((h) => h.id === "daniel").svg = SVG(`
    ${sol(110, 90, 36)}${estrela(690, 80, 28)}${estrela(610, 40, 16)}
    ${juba}
    <circle cx="500" cy="320" r="72"/>
    <circle cx="478" cy="305" r="7"/><circle cx="522" cy="305" r="7"/>
    <path d="M486 336h28l-14 16zM500 352v16M476 372q24 18 48 0"/>
    <path d="M60 560V470C60 440 90 430 120 440M740 560V470C740 440 710 430 690 440"/>
    ${pessoa(200, 300, 1.25)}
    <path d="M188 345l12-12l12 12"/>
    <path d="M0 560H800"/>`);

  // Histórias que usam só os desenhos do banco (imagens/catalogo.js), sem SVG próprio.
  novas.push(
    {
      id: "jacob", titulo: "A Escada de Jacó", referencia: "Gênesis 28:10-22",
      texto: [
        "Jacó estava viajando sozinho, longe de casa. Quando anoiteceu, ele pegou uma pedra para servir de travesseiro e dormiu ao ar livre.",
        "Jacó sonhou com uma escada que ia da terra até o céu. Anjos de Deus subiam e desciam por ela.",
        "No sonho, Deus lhe disse: “Eu estou com você e vou cuidar de você aonde quer que vá. Nunca vou abandoná-lo.”",
        "Jacó acordou admirado: “Deus está aqui, e eu nem sabia!” De manhã, ele colocou a pedra em pé, derramou azeite sobre ela e chamou aquele lugar de Betel, que quer dizer “casa de Deus”."
      ]
    },
    {
      id: "sarca", titulo: "A Sarça que Pegava Fogo", referencia: "Êxodo 3–4",
      texto: [
        "Moisés cuidava das ovelhas no deserto, perto de um monte. Um dia ele viu uma coisa estranha: um arbusto estava pegando fogo, mas as chamas não o queimavam!",
        "Moisés se aproximou para olhar. Então Deus o chamou do meio do arbusto: “Moisés! Moisés! Não chegue mais perto. Tire as sandálias, porque este lugar é santo.”",
        "Deus disse: “Eu vi o sofrimento do meu povo no Egito. Quero que você vá até o faraó e conduza o meu povo para fora de lá.” Moisés ficou com medo: “Quem sou eu para fazer isso?”",
        "Deus respondeu: “Eu estarei com você.” Mostrou a Moisés alguns sinais, como o cajado que virava serpente, e disse que o irmão dele, Arão, o ajudaria. Então Moisés obedeceu e foi."
      ]
    },
    {
      id: "agua-rocha", titulo: "Água que Saiu da Rocha", referencia: "Êxodo 17:1-7",
      texto: [
        "O povo de Deus caminhava pelo deserto e chegou a um lugar sem água. Todos estavam com muita sede: crianças, pais, avós e até os animais.",
        "As pessoas ficaram nervosas e reclamaram com Moisés: “Vocês nos trouxeram até aqui para morrermos de sede?” Moisés pediu ajuda a Deus.",
        "Deus disse: “Pegue o seu cajado e vá até a rocha. Eu estarei lá. Bata na rocha, e a água vai sair.”",
        "Moisés bateu na rocha, e jorrou água fresquinha! O povo bebeu à vontade. Mais uma vez, Deus tinha cuidado deles."
      ]
    },
    {
      id: "josue-calebe", titulo: "Josué e Calebe Confiam em Deus", referencia: "Números 13–14",
      texto: [
        "Moisés enviou doze homens para espiar a terra que Deus havia prometido ao povo. Eles voltaram trazendo frutas enormes, como um cacho de uvas tão pesado que dois homens o carregavam num bastão.",
        "Dez espias disseram: “A terra é boa, mas o povo de lá é forte, e nós somos pequenos demais!” O povo ouviu, ficou com medo e chorou a noite toda.",
        "Mas dois espias, Josué e Calebe, disseram: “A terra é muito boa! Se Deus estiver conosco, ele nos ajudará. Não tenham medo!”",
        "Por falta de confiança, o povo precisou esperar muitos anos no deserto. Josué e Calebe, que confiaram em Deus, entraram na terra prometida."
      ]
    },
    {
      id: "serpente", titulo: "A Serpente de Bronze", referencia: "Números 21:4-9",
      texto: [
        "O povo de Israel caminhava pelo deserto e ficou cansado e impaciente. Começaram a reclamar de Deus e de Moisés: “Por que nos trouxeram para cá?”",
        "Então apareceram serpentes venenosas no acampamento, e muita gente foi picada. O povo percebeu que tinha errado e pediu: “Moisés, ore a Deus para que tire essas serpentes!”",
        "Moisés orou. Deus lhe disse: “Faça uma serpente de bronze e coloque no alto de uma haste. Quem for picado e olhar para ela vai viver.”",
        "Moisés fez como Deus mandou. Quem olhava para a serpente de bronze ficava curado. Deus cuidou do seu povo, mesmo depois de tanta reclamação."
      ]
    },
    {
      id: "eliseu", titulo: "O Azeite da Viúva", referencia: "2 Reis 4:1-7",
      texto: [
        "Uma mulher estava muito preocupada. Seu marido tinha morrido, e ela devia dinheiro a um homem que queria levar seus dois filhos para trabalharem para ele.",
        "Ela pediu ajuda ao profeta Eliseu. Ele perguntou: “O que você tem em casa?” Ela respondeu: “Só um pouquinho de azeite numa jarra.”",
        "Eliseu disse: “Peça emprestadas muitas vasilhas vazias aos vizinhos. Depois feche a porta e comece a encher todas elas.”",
        "A mulher e os filhos obedeceram. Ela despejava o azeite, e ele não acabava, até todas as vasilhas ficarem cheias! Eliseu disse: “Venda o azeite, pague a sua dívida e viva com o que sobrar.” Deus cuidou daquela família."
      ]
    }
  );

  const ORDEM = ["criacao","noe","abraao","jacob","jose","moises","sarca","mar-vermelho","agua-rocha",
                 "josue-calebe","serpente","davi","eliseu","jonas","daniel",
                 "natal","tempestade","paes","zaqueu","ressurreicao"];
  const NOVO = ["natal","tempestade","paes","zaqueu","ressurreicao"];
  const ICONES = {
    criacao: "🌍", noe: "🚢", abraao: "⭐", jacob: "🪜", jose: "🧥", moises: "🧺", sarca: "🔥",
    "mar-vermelho": "🌊", "agua-rocha": "💧", "josue-calebe": "🍇", serpente: "🐍", davi: "🪨",
    eliseu: "🏺", jonas: "🐋", daniel: "🦁", natal: "🌟", tempestade: "⛈️", paes: "🍞",
    zaqueu: "🌳", ressurreicao: "☀️"
  };
  window.HISTORIAS.push(...novas);
  window.HISTORIAS.sort((a, b) => ORDEM.indexOf(a.id) - ORDEM.indexOf(b.id));
  window.HISTORIAS.forEach((h) => {
    h.testamento = NOVO.includes(h.id) ? "novo" : "antigo";
    h.icone = ICONES[h.id] || "📖";
  });
})();
