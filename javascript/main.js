function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const list_keys = document.querySelectorAll('.tecla');
let contador = 0;

while(contador < list_keys.length) {
    
    const key = list_keys[contador];
    const instrumento = key.classList[1];
    const idAudio = `#som_${instrumento}`;
    key.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;  
}
