// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "can i show my love for you", time: 1 },
  { text: "than say i do. i do, ido?", time: 2 },
  { text: "i do i do i do", time: 15 },
  { text: "you may not know right where you´re going, but", time: 22 },
  { text: "i do, i do,i do ", time: 27 },
  { text: "and all the times you wasn´t chosen", time: 31 },
  { text: "well, i´ll make it up to you", time: 34 },
  { text: "all of the feelings you´re not showing", time: 37 },
  { text: "when you river´s overflowing", time: 42 },
  { text: "it´s the truth, swear to you", time: 47 },
  { text: "I do, i do, i do, i do, ido", time: 51 },
  { text: "and all that you are, i do", time: 60 },
  { text: "my single line of stars in noon", time: 68 },
  { text: "reflection of the very moon, i do", time: 75 },
  { text: "I do, i do, i do", time: 83 },
  { text: "Show my love for you", time: 93 },
  { text: "can i show my love for you???", time: 100 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);