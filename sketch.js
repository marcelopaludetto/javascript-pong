function setup() {
  createCanvas(600, 400);
}

let x = 300;
let y = 200;
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;
let xRaquete = 5;

let yRaqueteOponente = 100;
let yRaquete = 100;
let yRaqueteLargura = 10;
let xRaqueteOponente = 600 - yRaqueteLargura - 5;
let yRaqueteAltura = 90;
let diametro = 30;
let raio = diametro / 2;
let hit = false;
let meusPontos = 0;
let pontosOponente = 0;

function draw() {
  background(0);

  bolinha();
  raquete();
  raqueteOponente();
  movimentaRaqueteOponente();
  colisao(xRaquete, yRaquete);
  colisao(xRaqueteOponente, yRaqueteOponente);
  pontos();
  pontosDoOponente();
  desenhaPontuacao(meusPontos, 200);
  desenhaPontuacao(pontosOponente, 400);

  function desenhaPontuacao(ponto, x2) {
    textSize(32);
    text(ponto, x2, 30);
    fill(255);
  }

  function pontos() {
    if (x + raio > width) {
     meusPontos++;
    }
  }
  function pontosDoOponente() {
    if (x-raio < 0){
      pontosOponente++;
    }
  }
  function colisao(x1, y1) {
    hit = collideRectCircle(
      x1,
      y1,
      yRaqueteLargura,
      yRaqueteAltura,
      x,
      y,
      diametro
    );

    if (hit) {
      frameCount  
      velocidadeXBolinha *= -1;
    }
  }
  function bolinha() {
    circle(x, y, diametro);
    x += velocidadeXBolinha;
    y += velocidadeYBolinha;
    if (y + raio > height) {
      velocidadeYBolinha *= -1;
    }
    if (y - raio < 0) {
      velocidadeYBolinha *= -1;
    }

    if (x + raio > width) {
      velocidadeXBolinha *= -1;
    }

    if (x - raio < 0) {
      velocidadeXBolinha *= -1;
    }
  }

  function raqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, yRaqueteLargura, yRaqueteAltura);
  }
  function raquete() {
    rect(xRaquete, yRaquete, yRaqueteLargura, yRaqueteAltura);

    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 5;
    }
  }

  function movimentaRaqueteOponente() {
    yRaqueteOponente = y - yRaqueteAltura / 2 - 150;
  }
}
