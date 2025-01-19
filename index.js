

let RankedStatus = WinsAndLoses(60, 3) 

function WinsAndLoses(Wins, Loses){

    return Wins - Loses;
}

if(RankedStatus < 10) {
  

}

function Playerlevel() {
     
    let nivel = "Unranked";

    if (RankedStatus <= 10) {
      nivel = "Ferro"
    }

 else if (RankedStatus >= 11 && RankedStatus <= 20) {
         nivel = "Bronze"
       }

       else if (RankedStatus >= 21 && RankedStatus <= 50) {
        nivel = "Prata"
       }

       else if (RankedStatus >= 51 && RankedStatus <= 80) {
         nivel = "Ouro"
       }

       else if (RankedStatus >= 81 && RankedStatus <= 90) {
         nivel = "Diamante"
       }

       else if (RankedStatus >= 91 && RankedStatus <= 100) {
         nivel = "Lendario"
       }

       else {
         nivel = "imortal"
       }
    
       return nivel;
}

let NivelPlayer = Playerlevel();

console.log("O Herói tem de saldo de " + RankedStatus + " está no nível de " + NivelPlayer + ".");