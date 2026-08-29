function exibir(num){
    console.log(num);
}


function soma(a, b,callback ){
    var op =a+b
    callback(op)
}


function mult(a,b,callback){
    var op = a*b
    callback(op)
}

soma(2,2,exibir);

mult(2,2,exibir)


