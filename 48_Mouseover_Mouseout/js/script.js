// evento de mouser over

var title = document.querySelector('#title');

title.addEventListener('mouseover',function(){
    this.style.backgroundColor='red'
})



// mouse out

title.addEventListener('mouseout',function(){
    this.style.backgroundColor='blue'
})


// afetar o elemtno com mouseover

var sub=document.querySelector('.subtitle');

sub.addEventListener('mouseover',function(){
    var legenda =document.querySelector('#legenda')

    legenda.classList.remove('hide');


});


var sub=document.querySelector('.subtitle');

sub.addEventListener('mouseout',function(){
    var legenda =document.querySelector('#legenda')

    legenda.classList.add('hide');


});