let grilleSize = 4;
let grille = [];






let NbsAleatoires = [];
const Aleatoire = ()=>{
    while(NbsAleatoires.length < 15){
        let nb = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
        if(NbsAleatoires.indexOf(nb) == -1){
            NbsAleatoires.push(nb);
        }
    } 
}
Aleatoire();


for(let i = 0; i < grilleSize; i++){
    grille[i] = [];
    for(let j = 0; j < grilleSize; i++){

    }

}