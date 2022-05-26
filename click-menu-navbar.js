/*
    Utilizando o javascript para fazer a animacao de abrir e fechar o menu hamburguer chamando menu-icon

    * criar variaveis para o menu e a navbar
    * criar uma funcao chamando a açao do menu
    *  funcao de abrir e fechar o menu

*/

// criando variavel para o menu estilo 'hamburguer'
let menu = document.querySelector("#menu-icon");

// cirando variavel para a navbar onde tem os li com home - about - products - contact
let navbar = document.querySelector(".navbar");

// criando uma evento que será executado apos um click do mouse sobre o menu
// na qual vai entrar uma funcao
menu.addEventListener("click", function(){

    //funcao criada quando houver o click em cima do menu 
    navbar.classList.toggle("active");

}); //fechamento da funcao

// tela será direcionada em movimento de scroll quando clicar
window.onscroll = () => {

    //fechando o menu
    navbar.classList.remove("active");
}; //executando a funcao









