// Dados simulados para teste (vai mudar a cada 4 segundos)
const dadosSimulados = [
  { alturaAgua: "45", qualidadeAgua: "2" },
  { alturaAgua: "75", qualidadeAgua: "5" },
  { alturaAgua: "120", qualidadeAgua: "8" },
];

let indice = 0;

function atualizarSensores() {
  // Pegamos o dado atual e avançamos o índice
  const dados = dadosSimulados[indice];
  indice = (indice + 1) % dadosSimulados.length;

  // Altura da Água
  const alturaValorEl = document.getElementById("altura-valor");
  const alturaDescEl = document.getElementById("altura-desc");
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
  const qualidadeValorEl = document.getElementById("qualidade-valor");
  const qualidadeDescEl = document.getElementById("qualidade-desc");
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
}

// Inicializa atualização e configura intervalo
atualizarSensores();
setInterval(atualizarSensores, 4000);


// alturaValorEl.textContent = dados.alturaAgua + " cm";
// 