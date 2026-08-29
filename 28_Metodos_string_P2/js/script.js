// toLowerCase e toUpperCase


var frase = 'Esta é a frase que vamos manipular ';

console.log(frase.toLocaleUpperCase())

var fraseCaixaAlta=frase.toUpperCase()

console.log(fraseCaixaAlta())


// trim 


var nome = '         rodrigo    ';


var nomeTrim = nome.trim();

console.log(nomeTrim);

// split

console.log(frase.split(''));
var tags='PHP, JAvascript, HTML, CSS'


console.log(tags.split(','));


//lastIndexof

var frase2='Eu quero  a ultima palavra teste da frase';

console.log(frase2.lastIndexOf('Teste'));