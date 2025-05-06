function playMusic() {
    const musica = document.getElementById('musicaFundo');
    musica.play();
  }
  
  window.addEventListener('click', () => {
    const musica = document.getElementById('musicaFundo');
    if (musica.paused) {
      musica.play();
    }
  }, { once: true });
  