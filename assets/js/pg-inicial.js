
const input_nome = document.querySelector('.input-nome');
const botao_iniciar = document.querySelector('.botao-iniciar');
const login_form = document.querySelector('.login-form');

const handleSubmit =(event) =>{
    event.preventDefault();
    localStorage.setItem('jogador',input_nome.value);
    window.location = './assets/paginas/jogo.html';
}

login_form.addEventListener('submit',handleSubmit);

