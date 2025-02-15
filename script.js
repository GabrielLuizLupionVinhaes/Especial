document.addEventListener("DOMContentLoaded", function () {
    // Função dos corações
    let coracoesAtivos = 0; // Controla quantos corações estão ativos
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      if (scrollPosition >= documentHeight / 2 && coracoesAtivos < 5) {
        criarCoraçoes();
      }
    });
  
    function criarCoraçoes() {
      const container = document.body;
      const coracao = document.createElement("div");
      coracao.classList.add("coracao");
      coracao.style.left = `${Math.random() * 100}vw`;
      coracao.style.animationDuration = `${3 + Math.random() * 2}s`; // Tempo de subida aleatório
      container.appendChild(coracao);
      coracoesAtivos++;
  
      // Verifica a posição do coração para removê-lo
      coracao.addEventListener("animationend", () => {
        coracao.remove();
        coracoesAtivos--;
      });
    }
  
    // Função da música
    const audio = document.getElementById("background-music");
  
    // Inicia a música automaticamente (sem som inicialmente)
    audio.play();
  
    // Remove o muted e ativa o som após a primeira interação do usuário
    document.body.addEventListener("click", function () {
      if (audio.muted) {
        audio.muted = false;
        audio.play(); // Garante que a música continue tocando
      }
    });
  });