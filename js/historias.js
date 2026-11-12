// Histórias recontadas em linguagem simples (texto original, a partir dos relatos bíblicos).
// Cada ilustração é um SVG de contorno SEM preenchimento: a criança pinta por baixo.
const S = (corpo) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" ` +
  `fill="none" stroke="#222" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${corpo}</svg>`;

window.HISTORIAS = [
  {
    id: "criacao",
    titulo: "A Criação do Mundo",
    referencia: "Gênesis 1",
    texto: [
      "No princípio, tudo era escuridão e silêncio. Então Deus disse: “Que haja luz!” E a luz apareceu, brilhante e bonita.",
      "Deus separou o céu das águas, fez a terra firme, as montanhas, as árvores e as flores. Depois colocou o sol para o dia, a lua e as estrelas para a noite.",
      "Em seguida, Deus encheu o mar de peixes e o céu de pássaros. Também criou os animais da terra, grandes e pequenos.",
      "Por fim, Deus criou as pessoas e cuidou delas com muito amor. Ele olhou para tudo o que tinha feito e viu que era muito bom!"
    ],
    svg: S(`
      <circle cx="140" cy="110" r="50"/>
      <path d="M140 38v-22M140 182v22M68 110H46M212 110h22M89 59l-16-16M191 161l16 16M89 161l-16 16M191 59l16-16"/>
      <path d="M560 70a60 60 0 1 0 60 100a48 48 0 1 1-60-100z"/>
      <path d="M440 80l8 18 20 2-15 13 5 19-18-10-18 10 5-19-15-13 20-2zM700 60l6 14 15 1-11 10 4 15-14-8-14 8 4-15-11-10 15-1z"/>
      <path d="M0 470L170 280L270 380L380 250L560 470z"/>
      <path d="M0 470C150 440 300 500 450 470S700 440 800 470V600H0z"/>
      <path d="M620 470v-110"/>
      <circle cx="620" cy="320" r="55"/>
      <circle cx="585" cy="345" r="30"/><circle cx="655" cy="345" r="30"/>
      <path d="M120 540c40-30 90-30 130 0c-40 30-90 30-130 0zM250 540l30-20v40z"/>
      <circle cx="150" cy="535" r="5"/>
      <path d="M420 520c30-20 70-20 100 0c-30 20-70 20-100 0zM520 520l25-18v36z"/>
      <circle cx="445" cy="516" r="4"/>`)
  },
  {
    id: "noe",
    titulo: "Noé e a Arca",
    referencia: "Gênesis 6–9",
    texto: [
      "Noé era um homem bom que amava a Deus. Um dia, Deus lhe disse: “Vai chover muito. Construa uma grande arca de madeira.”",
      "Noé obedeceu, mesmo quando os outros riam dele. Ele e sua família trabalharam muito até a arca ficar pronta.",
      "Então vieram os animais, de dois em dois, e entraram na arca com a família de Noé. Deus fechou a porta, e a chuva começou a cair.",
      "Depois de muitos dias, as águas baixaram. Noé soltou uma pomba, que voltou com um raminho de oliveira. Era sinal de que a terra estava seca!",
      "Deus pôs um arco-íris no céu e prometeu: “Nunca mais haverá um dilúvio para destruir a terra.”"
    ],
    svg: S(`
      <path d="M100 330a300 300 0 0 1 600 0M130 330a270 270 0 0 1 540 0M160 330a240 240 0 0 1 480 0"/>
      <path d="M150 380L650 380L590 480L210 480Z"/>
      <path d="M300 380V300H500V380"/>
      <path d="M280 300L400 235L520 300Z"/>
      <rect x="340" y="325" width="40" height="40" rx="4"/><rect x="420" y="325" width="40" height="40" rx="4"/>
      <path d="M400 235V195l45 14l-45 14"/>
      <path d="M0 520c50-30 100-30 150 0s100 30 150 0s100-30 150 0s100 30 150 0s100-30 150 0s100 30 50 15V600H0z"/>
      <path d="M60 120c30-30 80-30 100 0c40-10 60 30 30 45H70c-30 0-35-35-10-45z"/>
      <path d="M600 90c25-25 65-25 85 0c35-8 50 25 25 38H610c-25 0-30-30-10-38z"/>
      <path d="M700 230c20-12 40-5 50 10c-15 2-30 10-50-10zM700 230l-18-8 20 3M750 240l12 4-14 4"/>
      <circle cx="740" cy="236" r="3"/>`)
  },
  {
    id: "jonas",
    titulo: "Jonas e o Grande Peixe",
    referencia: "Jonas 1–3",
    texto: [
      "Deus pediu a Jonas que fosse à cidade de Nínive falar às pessoas de lá. Mas Jonas ficou com medo e fugiu num barco, para o lado contrário.",
      "Veio uma tempestade enorme. Jonas disse aos marinheiros: “A culpa é minha. Joguem-me ao mar.” Assim que o fizeram, o mar se acalmou.",
      "Deus mandou um grande peixe, que engoliu Jonas. Dentro do peixe, durante três dias, Jonas orou e pediu perdão.",
      "O peixe levou Jonas até a praia. Dessa vez, Jonas obedeceu e foi a Nínive. As pessoas ouviram, mudaram de atitude, e Deus cuidou delas."
    ],
    svg: S(`
      <path d="M130 340C180 230 400 200 540 290C600 240 680 230 730 260C710 300 710 340 730 380C680 400 600 390 540 340C420 440 190 440 130 340z"/>
      <circle cx="220" cy="320" r="12"/>
      <path d="M170 370C220 400 280 400 330 370"/>
      <path d="M350 215C340 170 365 150 345 120M390 212C385 175 405 160 395 130"/>
      <path d="M320 230l-6-20M360 224l-4-22"/>
      <path d="M0 470c50-30 100-30 150 0s100 30 150 0s100-30 150 0s100 30 150 0s100-30 150 0s100 30 50 15V600H0z"/>
      <path d="M560 130L660 130L640 175H580Z"/>
      <path d="M610 130V60L660 110H610"/>
      <path d="M40 90c20-20 55-20 70 0c25-5 40 20 20 32H50c-20 0-25-24-10-32z"/>
      <path d="M470 440c15 25 40 25 55 0M130 520c15 25 40 25 55 0"/>`)
  },
  {
    id: "daniel",
    titulo: "Daniel e os Leões",
    referencia: "Daniel 6",
    texto: [
      "Daniel orava a Deus todos os dias, três vezes ao dia, perto da janela. Ele era honesto e o rei gostava muito dele.",
      "Alguns homens ficaram com inveja e fizeram o rei assinar uma lei: ninguém poderia orar a ninguém além do rei. Quem desobedecesse seria jogado na cova dos leões.",
      "Daniel continuou orando a Deus como sempre. Por isso, foi levado à cova dos leões. O rei, triste, disse: “O seu Deus vai salvá-lo.”",
      "Na manhã seguinte, o rei correu até a cova e chamou: “Daniel, você está vivo?” Daniel respondeu: “Deus mandou seu anjo e fechou a boca dos leões!”"
    ],
    svg: "" // desenhada em historias-extra.js (usa as funções de apoio de lá)
  }
];
