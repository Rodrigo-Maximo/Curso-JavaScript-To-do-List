var novo =document.createElement('p');

var texto = document.createTextNode("Este e o conteudo do paragrafo")


novo.appendChild(texto)

console.log(novo)


var body = document.querySelector('body');



console.log(body);

body.appendChild(novo)


// inserir container

var container=document.getElementById('container');

console.log(container)


var el = document.createElement('span')


el.appendChild(document.createTextNode('Texto do span'))


container.appendChild(el)