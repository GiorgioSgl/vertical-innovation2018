var point = 1000;
var pShareCar = 100;
var pbonus=10;
var pBike = 1000;
var pElectricCar=100;
var timePassed;



var UsingBike = true;
var UsingCarSharing = true;
var UsingBus = true;
var UsingWalk = true;
var UsingElectricCar = true;
var Driver = true;

var isRaining = 0.5;
var traffic=0.2;




const timeStart = + new Date/1000|0; 
var id;
function increment(){
    
}

function AddP_Share_Your_Car(id,timePassed){
    if(Drive)        //se sono il guidatore, ricevo piu' punti di un passeggero.
        pShareCar*=6;
    point += pShareCar + timePassed/100 + pbonus;

}

function AddP_Use_Bycicle(timePassed){
    point += pBike + timePassed / 100 + pbonus * 5;

}

function AddP_Walking(timePassed){
    point += pWalk + timePassed / 100 + pbonus * 5;
}
 
function AddP_Electric_Car(){
    if(pElectricCar)        //se io possiedo una macchina elettrica, ricevo piu' punti di un passeggero.
        pElectricCar*=6;        
    point += pElectricCar + timePassed / 100 + pbonus * 5;
}



//se piove, in base all'attivita che sto facendo, mi da piu' o meno punti
function ADDp_Is_Raining(isRaining){ 
    if(UsingBike || UsingWalk)
        point += isRaining * 3;
    else
        points += isRaining * 1.5;
}


function ADDp_Traffic_level(traffic){
    if(UsingBike || UsingWalk)
        points += traffic*2;
    else    
        points += traffic;
}
//calcolo da quando sono inattivo
function RMp_inactivity(timeStart,timeLastTime){
        var x = (timeStart-timeLastTimt-86400) / 600         //differenza tra ora, altra volta e le 24 ore, tutto diviso 10 minuti 
        points -= x * 10;     
        //DA AGGIUNGERE: sostituire in database il valore di timeStart con timeLastTime, in modo che la funzione non venga sempre richiamata              
}



function Main() {
    var now = + new Date/1000|0;
    console.log(now-timeStart);

    timePassed=now-timeStart;

    if(UsingCarSharing) 
        AddP_Share_Your_Car(id,timePassed);
    if(UsingBike)
        AddP_Use_Bycicle(timePassed);
    if(UsingBus)
        AddP_Use_Bus(timePassed);
    if(UsingElectricCar)
        AddP_Electric_Car(timePassed);
    if(UsingWalk)
        AddP_Walking(timePassed);

    //DA AGGIUNGERE: mi prendo dal database il timeLastTime    
    if(timeStart-timeLastTime > 86400)
        RMp_inactivity(timeStart,timeLastTime)



    ADDp_Is_Raining(isRaining);
    ADDp_Traffic_level(traffic);






    setTimeout( Main, 5000);
 }


setTimeout(Main, 5000);