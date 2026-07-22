const escolhas = {
  inicio: {
    etapa: 1,
    texto: "Você encontra uma carteira na rua com dinheiro. O que você faz?",
    opcoes: [
      { texto: "Devolve para a polícia", destino: "honestidade" },
      { texto: "Fica com o dinheiro", destino: "ganancia" },
      { texto: "Tenta achar o dono", destino: "esforco" }
    ]
  },
  honestidade: {
    etapa: 2,
    texto: "Você se sente bem consigo mesmo. A polícia elogia sua atitude!",
    opcoes: [
      { texto: "Próxima situação", destino: "roubo" }
    ]
  },
  ganancia: {
    etapa: 2,
    texto: "Você compra algo com o dinheiro, mas depois se sente culpado.",
    opcoes: [
      { texto: "Próxima situação", destino: "roubo" }
    ]
  },
  esforco: {
    etapa: 2,
    texto: "Você acha o dono da carteira, que agradece e te dá uma recompensa!",
    opcoes: [
      { texto: "Próxima situação", destino: "roubo" }
    ]
  },
  roubo: {
    etapa: 3,
    texto: "Você vê um colega furtando algo na escola. O que faz?",
    opcoes: [
      { texto: "Conta para a direção", destino: "justica" },
      { texto: "Finge que não viu", destino: "omissao" }
    ]
  },
  justica: {
    etapa: 4,
    texto: "O colega é punido, mas você sente que fez o certo.",
    opcoes: [
      { texto: "Próxima situação", destino: "cola" }
    ]
  },
  omissao: {
    etapa: 4,
    texto: "Você se sente mal por não ter feito nada.",
    opcoes: [
      { texto: "Próxima situação", destino: "cola" }
    ]
  },
  cola: {
    etapa: 5,
    texto: "Um amigo cola na prova e pede para você não contar. O que faz?",
    opcoes: [
      { texto: "Fala com o professor", destino: "denuncia" },
      { texto: "Dá um toque no amigo", destino: "conselho" },
      { texto: "Não se mete", destino: "indiferenca" }
    ]
  },
  denuncia: {
    etapa: 6,
    texto: "Seu amigo fica bravo, mas a cola para e ele estuda da próxima vez.",
    opcoes: [
      { texto: "Próxima situação", destino: "cachorro" }
    ]
  },
  conselho: {
    etapa: 6,
    texto: "O amigo agradece e tenta melhorar. A amizade se fortalece.",
    opcoes: [
      { texto: "Próxima situação", destino: "cachorro" }
    ]
  },
  indiferenca: {
    etapa: 6,
    texto: "Você ignora, mas se sente meio falso depois.",
    opcoes: [
      { texto: "Próxima situação", destino: "cachorro" }
    ]
  },
  cachorro: {
    etapa: 7,
    texto: "Você vê um cachorro preso no sol, sem água, e ninguém por perto. O que faz?",
    opcoes: [
      { texto: "Liga para a proteção animal", destino: "resgate" },
      { texto: "Solta o cachorro na hora", destino: "impulsivo" },
      { texto: "Passa reto", destino: "apatia" }
    ]
  },
  resgate: {
    etapa: 8,
    texto: "Você liga e espera. O cachorro é resgatado com segurança!",
    opcoes: [
      { texto: "Próxima situação", destino: "idoso" }
    ]
  },
  impulsivo: {
    etapa: 8,
    texto: "Você solta o cachorro, mas ele corre pra rua. Quase foi atropelado!",
    opcoes: [
      { texto: "Próxima situação", destino: "idoso" }
    ]
  },
  apatia: {
    etapa: 8,
    texto: "Você segue sua vida. Mas algo te incomoda o resto do dia.",
    opcoes: [
      { texto: "Próxima situação", destino: "idoso" }
    ]
  },
  idoso: {
    etapa: 9,
    texto: "Um idoso pede ajuda com o celular e sem querer te dá acesso ao banco. Você...",
    opcoes: [
      { texto: "Ajuda e avisa sobre o erro", destino: "etica" },
      { texto: "Transfere um dinheiro pra você", destino: "rouboBanco" }
    ]
  },
  etica: {
    etapa: 10,
    texto: "Parabéns! O idoso fica imensamente grato. Você concluiu a jornada com uma postura ética exemplar.",
    opcoes: []
  },
  rouboBanco: {
    etapa: 10,
    texto: "Fim de jogo. Você transfere, mas é rastreado e denunciado. Suas escolhas te levaram a um caminho ruim.",
    opcoes: []
  }
};

let estadoAtual = "inicio";

function mostrarCena() {
  const cena = escolhas[estadoAtual];
  const texto = document.getElementById("texto");
  const opcoesDiv = document.getElementById("opcoes");
  const contadorEtapa = document.getElementById("contador-etapa");

  // Atualiza o contador de fases
  contadorEtapa.textContent = `Fase ${cena.etapa || 1} de 10`;

  // Adiciona animação suave de troca de texto
  texto.classList.remove("animate-fade-in");
  void texto.offsetWidth; // Força o reflow para reiniciar a animação
  texto.classList.add("animate-fade-in");
  
  texto.textContent = cena.texto;
  opcoesDiv.innerHTML = "";

  // Criação dos botões com estilo moderno
  cena.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.className = "w-full text-left bg-slate-700 hover:bg-emerald-600 text-slate-100 font-medium py-3 px-4 rounded-xl transition-all duration-200 border border-slate-600 hover:border-emerald-500 shadow-sm cursor-pointer flex items-center justify-between group";
    
    // Adiciona uma setinha indicativa no botão
    const seta = document.createElement("span");
    seta.innerHTML = "→";
    seta.className = "text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1";
    botao.appendChild(seta);

    botao.onclick = () => {
      estadoAtual = opcao.destino;
      mostrarCena();
    };
    opcoesDiv.appendChild(botao);
  });

  // Botão de Reiniciar caso seja o fim da linha
  if (cena.opcoes.length === 0) {
    const reiniciar = document.createElement("button");
    reiniciar.textContent = "🔄 Reiniciar Simulação";
    reiniciar.className = "w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg cursor-pointer text-center";
    reiniciar.onclick = () => {
      estadoAtual = "inicio";
      mostrarCena();
    };
    opcoesDiv.appendChild(reiniciar);
  }
}

mostrarCena();
  
  