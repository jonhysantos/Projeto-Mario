let formulário = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara")

function cliqueiNoBotao(){
    formulário.style.left = '980px'
    mascara.style.visibility = 'visible'
}

function sumirFormulario(){
    formulário.style.left = '.320px'
    mascara.style.visibility = 'hidden'
}