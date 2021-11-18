setInterval(function() {
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do"));
}, 1000);

isItTime();

let scheduleStorage = [];

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

let scheduleEvent = document.this.form("");

document.forms.addEventListener("submit", storageSubmit);

function storageSubmit(scheduleEvent) {
    let clicked = scheduleEvent.currentTarget;   
}

let timeArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

let scheduleEvent = document.this.form("");


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

function pageLoad() {
    if (localStorage. getItem("scheduleStorage") === null) {
    localStorage.setItem("scheduleStorage", "");
    // } else if (localStorage !== null) {
    //     JSON.parse(window.localStorage.getItem("scheduleStorage"));
    // }
    // return ;
}



let nineSubmit = document.getElementById("nine-am");

nineSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    let nineInput = document.getElementById("nine-input");
    let scheduleEvent = {
        description: nineInput.value,
        time: nine.time
    }   
    localStorage.setItem(nine.time, JSON.stringify(scheduleEvent));
});





// var testObject = [{ 'name': 'James', 'score': 90, 'time': '16:00' }, { 
//     'name': 'Robert', 'score': 80, 'time': '15:00' }];
//     localStorage.setItem('testObject', JSON.stringify(testObject));
    
//     var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    
//     var tbody = document.getElementById('tbody');
    
//     for (var i = 0; i < retrievedObject.length; i++) {
//       var tr = "<tr>";
//       tr += "<td>Name</td>" + "<td>" + retrievedObject[i].name + "</td></tr>";
//       tr += "<td>Score</td>" + "<td>" + retrievedObject[i].score + "</td></tr>";
//       tr += "<td>Time</td>" + "<td>" + retrievedObject[i].time + "</td></tr>";
//       tbody.innerHTML += tr;
//     }

// localStorage.getItem(eventStorage)



console.log(moment().hours());
