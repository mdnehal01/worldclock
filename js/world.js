
function indianTime(){
    var fun = new Date();

    var hr = fun.getHours();
    let min = fun.getMinutes();
    let sec = fun.getSeconds();
    var d = fun.getDate();
    var m = fun.getMonth();
    var y = fun.getFullYear();

    var dubaiHr = hr-2;
    var dubaiMin = min+30;;
    var dubaiSec = sec;


    var usaHr = hr-10;
    var usaMin = min+30;;
    var usaSec = sec;


    var londonHr = hr-5;
    var londonMin = min+30;;
    var londonSec = sec;



    document.getElementById("india-date").innerHTML= d+"/"+m+"/"+y;

    document.getElementById("dubai-date").innerHTML= d+"/"+m+"/"+y;

    document.getElementById("usa-date").innerHTML= d+"/"+m+"/"+y;

    document.getElementById("london-date").innerHTML= d+"/"+m+"/"+y;

    if(hr<=11){
        document.getElementById("india-time").innerHTML= hr+ ":" +min+ ":" +sec+"AM";
    }

    else{
        document.getElementById("india-time").innerHTML= hr+ ":" +min+ ":" +sec+"PM"; 
    }



    if(dubaiHr<=11){
        document.getElementById("dubai-time").innerHTML= dubaiHr+ ":" +dubaiMin+ ":" +sec+"AM";
    }

    else{
        document.getElementById("dubai-time").innerHTML= dubaiHr+ ":" +dubaiMin+ ":" +sec+"PM";
    }



    if(usaHr<=11){
        document.getElementById("usa-time").innerHTML= usaHr+ ":" +usaMin+ ":" +sec+"AM";
    }

    else{
        document.getElementById("usa-time").innerHTML= usaHr+ ":" +usaMin+ ":" +sec+"PM";
    }


    if(londonHr<=11){
        document.getElementById("london-time").innerHTML= londonHr+ ":" +londonMin+ ":" +sec+"AM";
    }

    else{
        document.getElementById("london-time").innerHTML= londonHr+ ":" +londonMin+ ":" +sec+"PM";
    }
};

setInterval(indianTime,10);
