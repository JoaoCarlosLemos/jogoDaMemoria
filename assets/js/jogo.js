
const grade = document.querySelector('.grade');
const personagens = [
    'frente-01',
    'frente-02',
    'frente-03',
    'frente-04',
    'frente-05',
    'frente-06',
    'frente-07',
    'frente-08',
    'frente-09',
    'frente-10'
]
let primeira_carta = '';
let segunda_carta = '';


const criacao_de_elemento = (tag,classe) =>{

    const elemento = document.createElement(tag);
    elemento.className=classe;
    return elemento;
}


const checar_final_do_jogo = ()=>{

    const cartas_desabilitadas = document.querySelectorAll('.desabilitar-carta');

    if(cartas_desabilitadas.length === 20 ){
        alert('Você Ganhou !!!');
    }

}

const checar_cartas = ()=>{
    const primeiro_personagem = primeira_carta.getAttribute('data-personagem');
    const segundo_personagem = segunda_carta.getAttribute('data-personagem');

    if(primeiro_personagem === segundo_personagem){
        
        primeira_carta.firstChild.classList.add('desabilitar-carta');
        segunda_carta.firstChild.classList.add('desabilitar-carta');

        primeira_carta = '';
        segunda_carta = '';

        setTimeout(()=>{
            checar_final_do_jogo();
        }, 200);

    }else{

        setTimeout(()=>{

            primeira_carta.classList.remove('revelar-carta');
            segunda_carta.classList.remove('revelar-carta');

            primeira_carta = '';
            segunda_carta = '';

        }, 600);
 
    }
}


const revelar_carta = ({target})=>{

    if(target.parentNode.className.includes('revelar-carta')){
        return;
    }

    if(primeira_carta ===''){

        target.parentNode.classList.add('revelar-carta');
        primeira_carta=target.parentNode;

    }else if(segunda_carta === ''){
        
        target.parentNode.classList.add('revelar-carta');
        segunda_carta=target.parentNode;

         checar_cartas();  
    }
    
}

const criacao_de_carta = (personagem) =>{

    const carta = criacao_de_elemento('div','carta');
    const frente = criacao_de_elemento('div','face frente');
    const verso = criacao_de_elemento('div','face verso');

    frente.style.backgroundImage= `url('../Imagens/${personagem}.png')`;

    carta.appendChild(frente);
    carta.appendChild(verso);

    carta.addEventListener('click', revelar_carta);
    carta.setAttribute('data-personagem',personagem);

    return carta;
}


const carregar_jogo = ()=>{

    const personagens_duplicados=[...personagens, ...personagens];

    const personagens_embaralhado= personagens_duplicados.sort(()=> Math.random()-0.5);

    personagens_embaralhado.forEach((personagem)=>{
        const carta = criacao_de_carta(personagem);
        grade.appendChild(carta);
    });
} 


carregar_jogo();