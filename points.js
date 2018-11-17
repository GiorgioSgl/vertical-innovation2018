var point = 0;
var pShareCar = 10;
var pbonus = 1;
var pBike = 50;
var pBus = 15;
var pElectricCar = 10;
var pWalk = 50;

var timePassed;

var UsingBike = false;
var UsingCarSharing = true;
var UsingBus = false;
var UsingWalk = false;
var UsingElectricCar = false;
var Driver = false;

var traffic;
var precipitation;


var d = new Date();
var n = d.getDay();
let timeLastTime = + new Date / 1000 | 0;
const timeStart = + new Date / 1000 | 0;


function AddP_Share_Your_Car(timePassed, Driver) {
    if (Driver)        //se sono il guidatore, ricevo piu' punti di un passeggero.
        pShareCar *= 6;
    point += (pShareCar + timePassed / 100 + pbonus) / 10;
}
function AddP_Use_Bycicle(timePassed) {
    point += (pBike + timePassed / 100 + pbonus * 5) / 10;
}
function AddP_Use_Bus(timePassed) {
    point += (pBus + timePassed / 100 + pbonus) / 10;
}
function AddP_Walking(timePassed) {
    point += (pWalk + timePassed / 100 + pbonus * 5) / 10;
}
function AddP_Electric_Car() {
    if (pElectricCar)        //se io possiedo una macchina elettrica, ricevo piu' punti di un passeggero.
        pElectricCar *= 6;
    point += (pElectricCar + timePassed / 100 + pbonus * 5) / 10;
}
//se piove, in base all'attivita che sto facendo, mi da piu' o meno punti, in base al mezzo che stai usando
function ADDp_Is_Raining(isRaining) {
    if (UsingBike || UsingWalk || UsingBus)
        point += isRaining;
    else
        point -= isRaining;
}
//se c'e' il traffico, ti da piu' punti, 
function ADDp_Traffic_level(traffic) {
    if (UsingBike || UsingWalk)
        point += traffic * 4;
    else if (UsingCarSharing || UsingBus)
        point += traffic * 2;
    else
        point -= traffic;
}


function tree(punti) {
    var alberi = 25000000 / (punti * 2 * 250)
}

function ADDp_Is_Hot(temperatura) {
    if ((temperatura < 15 || temperatura > 30) && (UsingBike || UsingWalk))
        point += Math.abs(temperatura / 2);
    else if ((temperatura < 10 || temperatura > 30) && !(UsingBike || UsingWalk))
        point -= Math.abs(temperatura / 2);
}


function Prediction(durataViaggio) {
    var pp = 0;
    if (UsingCarSharing)
        pp = 10;
    else if (UsingBike) {
        pbonus = pbonus * 5
        pp = 50;
    }
    else if (UsingElectricCar)
        pp = 10;
    else if (UsingWalk)
        pp = 50;
    else if (UsingBus)
        pp = 15;
    else
        pp = 5;
    var punti = ((pp / 100 + pbonus) * durataViaggio / 4) / 10;

    tree(punti);
}
//calcolo da quando sono inattivo
function RMp_inactivity(timeStart, timeLastTime) {
    var x = (timeStart - timeLastTime - 86400) / 600;         //differenza tra ora, altra volta e le 24 ore, tutto diviso 10 minuti 
    point -= x * 10;
    //DA AGGIUNGERE: sostituire in database il valore di timeStart con timeLastTime, in modo che la funzione non venga sempre richiamata              
}
function ADDp_festivity(day, n) {
    var x = 1;
    if (UsingBike || UsingWalk)
        x = 5;
    else if (UsingBus)
        x = 3;
    else
        x = 2;
    if (day == 0 || day == 6)
        point += 10 + x;
    if (n.getMonth() == 11 && n.getDate() == 25)
        point += 25 + x;
}
// Parametri: precipitation, traffic, timeLastTime (from db)
exports.calculatePoints = (p, traf, t) => {
    precipitation = p;
    temperatura = t;
    traffico = traf;
    var now = + new Date / 1000 | 0;
    timePassed = now - timeStart;
    if (UsingCarSharing)
        AddP_Share_Your_Car(timePassed, Driver);
    if (UsingBike)
        AddP_Use_Bycicle(timePassed);
    if (UsingBus)
        AddP_Use_Bus(timePassed);
    if (UsingElectricCar)
        AddP_Electric_Car(timePassed);
    if (UsingWalk)
        AddP_Walking(timePassed);
    if (timeStart - timeLastTime > 86400)
        RMp_inactivity(timeStart, timeLastTime);
    ADDp_Is_Raining(precipitation);
    ADDp_Is_Hot(temperatura);
    ADDp_Traffic_level(traffico);
    ADDp_festivity(n, d);
    return point;
};