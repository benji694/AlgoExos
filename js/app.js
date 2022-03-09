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
nbAleatoire();
