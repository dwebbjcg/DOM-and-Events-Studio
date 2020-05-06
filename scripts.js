// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function(event) {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");

        if (response) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";

            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";

            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = "10000";
        }
    });
    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");

        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";

        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";

        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = "0";
    });

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function() {

        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";

            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "green";

            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = "0";
        }

        let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';
    let right = document.getElementById('right');
    right.addEventListener("click", function() {
        let movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    });
    let left = document.getElementById('left');
    left.addEventListener("click", function() {
        let movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    });
    let down = document.getElementById('down');
    down.addEventListener("click", function() {
        let movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        let shuttleHeight = document.getElementById("spaceShuttleHeight")
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    });
    let up = document.getElementById('up');
    up.addEventListener("click", function() {
        let movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });

    });

}
window.onload = init;
