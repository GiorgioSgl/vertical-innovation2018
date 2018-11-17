function simulateTraffic(){
    var sec = (new Date().getTime()/1000)%60
    return Math.sin((sec*Math.PI)/60)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function foo(){
    while(1){
        await sleep(4000)
        console.log(simulateTraffic())
    }
}
foo();