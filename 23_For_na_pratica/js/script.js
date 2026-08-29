

var arr =['Banana','Maça','Laranja','Limão','Melancia']


var listaUL=document.createElement('ul');


var body= document.getElementsByTagName('body')

console.log(body[0])


body[0].appendChild(listaUL)

var listaNoBody=document.getElementsByTagName('ul')

console.log(listaNoBody[0])


for (i=0;i<listaNoBody.length;i++){
    var liFor=document.createElement('li');
    var textoli= document.createTextNode(lista[i])
    liFor.appendChild(textoli)

    listaNoBody[0].appendChild(liFor)
}