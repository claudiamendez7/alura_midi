function playSound(idAudioElement) {
  document.querySelector(idAudioElement).play();
}
const mediaList = document.querySelectorAll(".tecla");

for (let contador = 0; contador < mediaList.length; contador++) {
  const media = mediaList[contador];
  const instrument = media.classList[1];
  console.log(contador);

  const idAudio = `#sonido_${instrument}`;
  console.log(idAudio);
  media.onclick = function () {
    playSound(idAudio);
  };
  media.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      media.classList.add("activa");
    }
    console.log(event.code === "Space" || event.code === "Enter");
  };
  media.onkeyup = function () {
    media.classList.remove("activa");
  };
}

// todo: ciclo While
// while (contador < 9) {
//   const media = mediaList[contador];
//   const instrument = media.classList[1];

//   const idAudio = `#sonido_${instrument}`;
//   console.log(idAudio);
//   media.onclick = function () {
//     playSound(idAudio);
//   };
// }
