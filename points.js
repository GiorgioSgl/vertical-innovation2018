var point = 1000;
var pShareCar = 100;
var pbonus=10;
var pBike = 500;
var pElectricCar=100;
var timePassed;




/*

var UsingBike = false;
var UsingCarSharing = true;
var UsingBus = false;
var UsingWalk = false;
var UsingElectricCar = false;
var Driver = false;
*/


function myFunction() {
    var UsingBike = document.getElementById("UsingBike").value;
    var UsingCarSharing = document.getElementById("UsingCarSharing").value;
    var UsingBus = document.getElementById("UsingBus").value;
    var UsingElectricCar = document.getElementById("UsingElectricCar").value;
    var UsingWalk = document.getElementById("UsingWalk").value;
    var Driver = document.getElementById("Driver").value;  
}

myFunction();

var isRaining = 0.1;
var traffic=0;


var d = new Date();
var n = d.getDay()

const timeLastTime =+ new Date/1000|0; 
const timeStart = + new Date/1000|0; 

function AddP_Share_Your_Car(timePassed,Drive){
    if(Driver)        //se sono il guidatore, ricevo piu' punti di un passeggero.
        pShareCar *= 6;
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
        pElectricCar *= 6;        
    point += pElectricCar + timePassed / 100 + pbonus * 5;
}


//se piove, in base all'attivita che sto facendo, mi da piu' o meno punti, in base al mezzo che stai usando
function ADDp_Is_Raining(isRaining){ 
    if(UsingBike || UsingWalk || UsingBus)
        point += isRaining*10;
    else
        point -= isRaining*10;
}

//se c'e' il traffico, ti da piu' punti, 
function ADDp_Traffic_level(traffic){
    if(UsingBike || UsingWalk)
        point += traffic*2;
    else    
        point += traffic;
}
//calcolo da quando sono inattivo
function RMp_inactivity(timeStart,timeLastTime){
        var x = (timeStart-timeLastTime-86400) / 600         //differenza tra ora, altra volta e le 24 ore, tutto diviso 10 minuti 
        point -= x * 10;     
        //DA AGGIUNGERE: sostituire in database il valore di timeStart con timeLastTime, in modo che la funzione non venga sempre richiamata              
}

function ADDp_festivity(day,n){
    var x=1;
    if(UsingBike || UsingWalk)
        x = 5;
    else if(UsingBus)
        x = 3;
    else 
        x = 2;

    if( day==0 || day==6)
        point+= 10 + x;
    if (n.getMonth() == 11 && n.getDate() == 25 )
        point+= 25 + x;
}

function Main() {
    var now = + new Date/1000|0;
    console.log(now-timeStart);

    timePassed=now-timeStart;

    if(UsingCarSharing) 
        AddP_Share_Your_Car(timePassed,Driver);
    if(UsingBike)
        AddP_Use_Bycicle(timePassed);
    if(UsingBus)
        AddP_Use_Bus(timePassed);
    if(UsingElectricCar)
        AddP_Electric_Car(timePassed);
    if(UsingWalk)
        AddP_Walking(timePassed);

    //DA AGGIUNGERE: mi prendo dal database il timeLastTime    
//    if(timeStart-timeLastTime > 86400)
  //      RMp_inactivity(timeStart,timeLastTime)

    ADDp_Is_Raining(isRaining);
    ADDp_Traffic_level(traffic);

    ADDp_festivity(n,d);  
    console.log(point);
    setTimeout( Main, 5000);
 }


setTimeout(Main, 5000);