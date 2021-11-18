setInterval(function() {
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do"));
}, 1000);

let nine = document.getElementById("nine");
nine.time = 9;
let ten = document.getElementById("ten");
ten.time = 10;
let eleven = document.getElementById("eleven");
eleven.time = 11;
let twelve = document.getElementById("twelve");
twelve.time = 12;
let thirteen = document.getElementById("thirteen");
thirteen = 13;
let fourteen = document.getElementById("fourteen");
fourteen= 14;
let fifteen = document.getElementById("fifteen");
fifteen= 15;
let sixteen = document.getElementById("sixteen");
fifteen= 16;
let seventeen = document.getElementById("seventeen");
fifteen= 17;

let schedTime;


let timeArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];


function isItTime() {
   
    for (let i = 0; i < timeArray.length; i++) {
        schedTime = timeArray[i].time;
        if (moment().hours() === schedTime) {
            timeArray[i].setAttribute("style", "background-color: red");
        }
        else if (moment().hours() > schedTime) {
            timeArray[i].setAttribute("style", "background-color: green");
        }
        else if (moment().hours() < schedTime) {
            timeArray[i].setAttribute("style", "background-color: grey");
        }  
    }        
};     

  console.log(moment().hours());
