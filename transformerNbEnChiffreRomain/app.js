let nb = prompt('entrez votre nombre à transformer');

const key = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]


let nbRomain = '';

for(let i = 0; i < key.length; i++){
    while(nb >= key[i][1]){
        nbRomain += key[i][0];
        nb -= key[i][1];
    }
}

console.log(nbRomain);