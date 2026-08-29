// criar elemento

var el = document.createElement('h3');

el.classList='testando-classe';

var texto = document.createTextNode('Este e o texto');

el.appendChild(texto);


console.log(el);


//selecionar elemento


var title = document.querySelector('#title');

//selecionar o pai

var pai = title.parentNode;

pai.replaceChild(el,title);

