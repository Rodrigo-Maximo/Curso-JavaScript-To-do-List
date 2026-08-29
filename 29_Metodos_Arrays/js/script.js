// length

var arr =[1,2,3,4,5];

console.log(arr.length)

//push adciona no final

arr.push(6);
arr.push('Qualquer coisa');

console.log(arr)


//unshift adiciona no final

arr.unshift(0);
arr.unshift('teste');


console.log(arr)

//shift


arr.shift();

console.log(arr);




// acessar o ultimo elemento

console.log(arr[arr.length-1]);

// isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));