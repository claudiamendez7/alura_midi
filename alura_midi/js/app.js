function playSound(idAudioElement) {
  document.querySelector(idAudioElement).play();
}
const mediaList = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < 9) {
  const media = mediaList[contador];
  const instrument = media.classList[1];

  const idAudio = `#sonido_${instrument}`;
  console.log(idAudio);
  media.onclick = function () {
    playSound(idAudio);
  };
  contador = contador + 1;
}
