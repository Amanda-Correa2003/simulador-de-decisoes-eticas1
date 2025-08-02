const escolhas = {
  inicio: {
    texto: "Você encontra uma carteira na rua com dinheiro. O que você faz?",
    opcoes: [
      { texto: "Devolve para a polícia", destino: "honestidade" },
      { texto: "Fica com o dinheiro", destino: "ganancia" },
      { texto: "Tenta achar o dono", destino: "esforco" }
    ]
  },
  honestidade: {
    texto: "Você se sente bem consigo mesmo. A polícia elogia sua atitude!",
    opcoes: [
      { texto: "Próxima situação", destino: "roubo" }
    ]
  },
  ganancia: {
    texto: "Você compra algo com o dinheiro, mas depois se sente culpado.",
    opcoes: [
      { texto: "Próxima situação", destino: "roubo" }
    ]
  },
  esforco: {
    texto: "Você acha o dono da carteira, que agradece e te dá uma recompensa!",
    opcoes: [
      { texto: "Próxima situação", destino: "roubo" }
    ]
  },
  roubo: {
    texto: "Você vê um colega furtando algo na escola. O que faz?",
    opcoes: [
      { texto: "Conta para a direção", destino: "justica" },
      { texto: "Finge que não viu", destino: "omissao" }
    ]
  },
  justica: {
    texto: "O colega é punido, mas você sente que fez o certo.",
    opcoes: [
      { texto: "Próxima situação", destino: "cola" }
    ]
  },
  omissao: {
    texto: "Você se sente mal por não ter feito nada.",
    opcoes: [
      { texto: "Próxima situação", destino: "cola" }
    ]
  },
  cola: {
    texto: "Um amigo cola na prova e pede para você não contar. O que faz?",
    opcoes: [
      { texto: "Fala com o professor", destino: "denuncia" },
      { texto: "Dá um toque no amigo", destino: "conselho" },
      { texto: "Não se mete", destino: "indiferenca" }
    ]
  },
  denuncia: {
    texto: "Seu amigo fica bravo, mas a cola para e ele estuda da próxima vez.",
    opcoes: [
      { texto: "Próxima situação", destino: "cachorro" }
    ]
  },
  conselho: {
    texto: "O amigo agradece e tenta melhorar. A amizade se fortalece.",
    opcoes: [
      { texto: "Próxima situação", destino: "cachorro" }
    ]
  },
  indiferenca: {
    texto: "Você ignora, mas se sente meio falso depois.",
    opcoes: [
      { texto: "Próxima situação", destino: "cachorro" }
    ]
  },
  cachorro: {
    texto: "Você vê um cachorro preso no sol, sem água, e ninguém por perto. O que faz?",
    opcoes: [
      { texto: "Liga para a proteção animal", destino: "resgate" },
      { texto: "Solta o cachorro na hora", destino: "impulsivo" },
      { texto: "Passa reto", destino: "apatia" }
    ]
  },
  resgate: {
    texto: "Você liga e espera. O cachorro é resgatado com segurança!",
    opcoes: [
      { texto: "Próxima situação", destino: "idoso" }
    ]
  },
  impulsivo: {
    texto: "Você solta o cachorro, mas ele corre pra rua. Quase foi atropelado!",
    opcoes: [
      { texto: "Próxima situação", destino: "idoso" }
    ]
  },
  apatia: {
    texto: "Você segue sua vida. Mas algo te incomoda o resto do dia.",
    opcoes: [
      { texto: "Próxima situação", destino: "idoso" }
    ]
  },
  idoso: {
    texto: "Um idoso pede ajuda com o celular e sem querer te dá acesso ao banco. Você...",
    opcoes: [
      { texto: "Ajuda e avisa sobre o erro", destino: "etica" },
      { texto: "Transfere um dinheiro pra você", destino: "rouboBanco" }
    ]
  },
  etica: {
    texto: "O idoso fica imensamente grato. Você se sente digno.",
    opcoes: []
  },
  rouboBanco: {
    texto: "Você transfere, mas é rastreado e denunciado. Acaba preso.",
    opcoes: []
  }
};

let estadoAtual = "inicio";

function mostrarCena() {
  const cena = escolhas[estadoAtual];
  const texto = document.getElementById("texto");
  const opcoesDiv = document.getElementById("opcoes");

  texto.textContent = cena.texto;
  opcoesDiv.innerHTML = "";

  cena.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.onclick = () => {
      estadoAtual = opcao.destino;
      mostrarCena();
    };
    opcoesDiv.appendChild(botao);
  });

  if (cena.opcoes.length === 0) {
    const reiniciar = document.createElement("button");
    reiniciar.textContent = "Reiniciar História";
    reiniciar.onclick = () => {
      estadoAtual = "inicio";
      mostrarCena();
    };
    opcoesDiv.appendChild(reiniciar);
  }
}

mostrarCena();
