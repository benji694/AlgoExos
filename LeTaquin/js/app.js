let grille = document.querySelector('#grille');
let result = [];

function nbAleatoire(){
    while(result.length < 15){
        let nb = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
        if(result.indexOf(nb) == -1){
            result.push(nb);
        }
    }
}
function créerGrille(){
    for(let i = 0; i < result.length; i++){
        let el = document.createElement('li');
        el.textContent = result[i];
        grille.appendChild(el);    
    }
    grille.appendChild(document.createElement('li'))
}


let cases = document.getElementsByTagName('li');
let caseVide = 15;

function GlisserDeposer(){
    console.log(caseVide)
    for(let i = 0; i < cases.length; i++){
        cases[i].addEventListener('click', function listen(){
            if(i == caseVide - 1 || i == caseVide - 4 || i == caseVide + 1 || i == caseVide + 4){
                let text = cases[i].textContent;
                console.log(text)
                cases[i].textContent = '';
                cases[caseVide].textContent = text;
                caseVide = i;
                GlisserDeposer();
            }
            
        })
        
    }
}



console.log(cases)

nbAleatoire();
créerGrille();
GlisserDeposer();

