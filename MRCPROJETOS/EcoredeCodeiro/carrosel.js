const imagens = document.querySelectorAll('.carrossel-img');
let index = 0;

setInterval(() => {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
}, 5000); // troca a cada 5 segundos