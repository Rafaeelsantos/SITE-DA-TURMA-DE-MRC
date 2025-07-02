async function atualizarSensores() {
  try {
    const response = await fetch('sensores.json'); // ou 'sensores.txt' se for texto JSON
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const dados = await response.json();

    // Altura da Água
    const alturaValorEl = document.getElementById('altura-valor');
    const alturaDescEl = document.getElementById('altura-desc');
    const alturaNum = parseFloat(dados.alturaAgua);

    alturaValorEl.textContent = dados.alturaAgua + " cm";

    if (alturaNum < 50) {
      alturaDescEl.textContent = "Baixo";
      alturaDescEl.style.color = "red";
    } else if (alturaNum < 100) {
      alturaDescEl.textContent = "Médio";
      alturaDescEl.style.color = "orange";
    } else {
      alturaDescEl.textContent = "Alto";
      alturaDescEl.style.color = "green";
    }

    // Qualidade da Água
    const qualidadeValorEl = document.getElementById('qualidade-valor');
    const qualidadeDescEl = document.getElementById('qualidade-desc');
    const qualidadeNum = parseFloat(dados.qualidadeAgua);

    qualidadeValorEl.textContent = dados.qualidadeAgua;

    if (qualidadeNum < 3) {
      qualidadeDescEl.textContent = "Limpa";
      qualidadeDescEl.style.color = "green";
    } else if (qualidadeNum < 7) {
      qualidadeDescEl.textContent = "Moderada";
      qualidadeDescEl.style.color = "orange";
    } else {
      qualidadeDescEl.textContent = "Suja";
      qualidadeDescEl.style.color = "red";
    }
  } catch (error) {
    console.error('Erro ao buscar dados do sensor:', error);
    // Opcional: Atualizar UI para indicar erro
    document.getElementById('altura-valor').textContent = 'Erro';
    document.getElementById('altura-desc').textContent = '-';
    document.getElementById('qualidade-valor').textContent = 'Erro';
    document.getElementById('qualidade-desc').textContent = '-';
  }
}

// Atualiza os sensores a cada 5 segundos
atualizarSensores();
setInterval(atualizarSensores, 5000);
