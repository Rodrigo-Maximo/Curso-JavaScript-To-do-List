console.log(this)

let pessoa={
    nome='Rodrigo',
    idade=29,
    falar:function(){
        console.log('Ola')
    },
    soma:function(a,b){
        return soma
    },
    dizerNome:function(){
        console.nome("nome é "+this.nome)
    },
    aniversario:function(){
        this.idade+=1;
    }
};


pessoa.dizerNome();
pessoa.aniversario();

console.log(pessoa)