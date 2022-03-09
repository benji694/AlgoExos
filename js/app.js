let grille = document.querySelector('#grille');
let result = [];

function nbAleatoire(){
    while(result.length < 15){
        let nb = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
        if(result.indexOf(nb) == -1){
            result.push(nb);
        }
    }
    console.log(result);
}
function créerCases(){
    for(let i = 0; i < result.length; i++){
        let el = document.createElement('li');
        el.textContent = result[i];
        grille.appendChild(el);    
    }
    grille.appendChild(document.createElement('li'))
}




nbAleatoire();
créerCases();
