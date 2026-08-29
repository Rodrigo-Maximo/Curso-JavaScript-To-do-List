// inserir click

var btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    console.log('clickou');

    console.log(this);



    this.style.color='red'


});




var title =document.querySelector('#title')

title.addEventListener('click',function(){
    var sub = document.querySelector('.subtitle')

    sub.style.display='none';
}) 


// dobleclick



var sub1=document.querySelector('.subtitle')

subtitle.addEventListener('dbclick',function(){
    console.log('Click Duplo');
});


