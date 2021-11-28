setInterval(function () {
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
thirteen.time = 13;
let fourteen = document.getElementById("fourteen");
fourteen.time = 14;
let fifteen = document.getElementById("fifteen");
fifteen.time = 15;
let sixteen = document.getElementById("sixteen");
sixteen.time = 16;
let seventeen = document.getElementById("seventeen");
seventeen.time = 17;


let forms = document.querySelectorAll("form");
console.log(forms);

saveBtn = document.querySelectorAll("#saveBtn");

forms.forEach(form => {
    form.children[1].value = localStorage.getItem(form.id) ? localStorage.getItem(form.id): "";
})    



saveBtn.forEach(form => {
    form.addEventListener("click", function (e) {
        e.preventDefault();
        forms.forEach(form => {
            let scheduleEvent = form.children[1].value;
            // console.log(scheduleEvent);
            // let hour = e.target.id;
            // console.log(hour);
            // let inputsObject = {
            //     time: hour,
            //     toDo: scheduleEvent
            // }    
            // scheduleStorage.push(inputsObject);
            localStorage.setItem(form.id, scheduleEvent);
        })    
})        
});

let hoursArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

// let scheduleEvent = document.this.form("");
let schedTime;

isItTime();

function isItTime() {
    for (let i = 0; i < hoursArray.length; i++) {
        schedTime = hoursArray[i].time;
        if (moment().hours() === schedTime) {
            hoursArray[i].setAttribute("style", "background-color: #ff6961");
        } else if (moment().hours() < schedTime) {
            hoursArray[i].setAttribute("style", "background-color: #77dd77");
        } else if (moment().hours() > schedTime) {
            hoursArray[i].setAttribute("style", "background-color: #d3d3d3");
        }
    }
}

console.log(moment().hours());
