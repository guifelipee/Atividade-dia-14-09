'use strict'

var elemento = document.querySelector('#t2 th');
// compatibilidade com IE antigo via innerText
var conteudo = elemento.textContent || elemento.innerText; 
console.log(conteudo.length); // 1