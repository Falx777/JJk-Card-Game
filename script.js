var dif = 1
function dificuldade(){
  var typeDif = ""
  if(dif == 1){
    dif = 3
    typeDif = "med"
  }else if(dif ==3){
    dif = 2
    typeDif = "dif"
  }else{
    dif =1
    typeDif = "easy"
  }
  document.getElementById("difImg").src = "game/jjk_font/dif_"+typeDif+".png"
  gameMode()
}

var vsBot = "game/card_game.html?mode=2";
var vsPlay = "game/card_game.html?mode=1"

function gameMode(){
  document.getElementById("bot").href = vsBot+"?dificuldade="+dif
    document.getElementById("player").href = vsPlay+"?dificuldade="+dif
}

gameMode()

var curRef = 0
var k = 0
var text =["Cada Jogador recebe um deck aleatório com 7 cartas + 1 ativo e 3 objetos amaldiçoados. Os movimentos dos jogadores são: atacar, amaldiçoar, esquivar e usar o especial. Para cada ação, o turno de quem joga se altera. Esquivar muda de turno",
          "As cartas podem ser trocadas quando a carta ativa tiver com vida igual a zero. O jogo termina quando um jogador derrota todas as cartas do oponente.",
        "Ao atacar, o jogador utiliza a sua força de ataque e o dano efetivo será a diferença entre a defesa do oponente e o seu ataque. Neste exemplo, como o ataque do jogador 1 é 6 e a defesa do jogador 2 é 15, não houve perda da vida do opnente. Cada ataque retira 1 de defesa do oponente (neste exemplo, o jogador 2 tinha inicialmente 15 de defesa. Após o ataque do jogador 1, ele ficou com 14 de defesa), mesmo que seja maio do que a força de ataque. A defesa pode ser reduzida para valores negativos, formando dano crítico. ",
        "Você pode utilizar uma das ferramentas amaldiçoadas para aumentar o seu ataque e a sua energia amaldiçoada. Neste exemplo, o jogador 1 tinha 6 de ataque + 5 da ferramente, ou seja, 11",
        "Ao atacar utilizando uma ferramenta amaldiçoada, o nível de ataque da ferramenta diminui em uma unidade. Neste exemplo, após o ataque, o nível de ataque da ferramenta caiu de 5 para 4",
      "Ao amaldiçoar, o usuário sobrepõe a defesa do oponente, mas em compensação, diminui a sua energia amaldiçoada na mesma proporção. Neste exemplo, o ataque do jogador 1 causou 6 de dano na vida do jogador 2, ainda que a defesa dele fosse maior, e a energia amaldiçõada do jogador 1 diminuiu de -125 para -119. Esse tipo de ataque também reduz a defesa do oponente em 1 unidade.",
      "Para cada carta nova no jogo, quando a vida do jogador estiver em menos da metade, é possível utilizar a habilidade especial (visualmente desbloqueada pela borda verde) que causa um dano efetivo na mesma proporção da energia amaldiçõada do jogador + seus pontos de ataque. Além disso, a defesa do oponente é reduzida a zero, bem como a energia amaldiçoada de quem a lançou",
       "Quando sua vida chegar a zero, você pode selecionar qualquer uma das 7 cartas disponíveis",
      "Cartas vermelhas são maldições. Para cada vez que esquivarem, convertem energia amaldiçoada em vida em 20 pontos. Usuários de energia amaldiçoada reversa também convertem essa energia em vida em 20 pontos","<h1 onclick='start_screen()'>Tela Inicial</h1>"]
function changeref(){
  var siz = window.innerHeight+60
  if(window.innerWidth <400){
    siz = 210
  }
  if(k< text.length){
    document.getElementById("texto_explicacao").innerHTML = text[k]
  }
  k+=1
  //window.scrollTo({
  //  top: window.scrollY + siz,
  //  behavior: 'smooth'
  //});
}


function start_screen(){
  window.location.href = "index.html"
}
