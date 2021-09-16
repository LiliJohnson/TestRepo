export var stateObj = {
    timerRunning: false,
    lastDate: null
};
export var timerButtonDiv = `<p id="heading">1</p><br/><button id="timerButton">Start Timer</button>`;


export var timerButton = document.getElementById("timerButton");

timerButton.onclick = function() {
    stateObj.timerRunning = !stateObj.timerRunning;
    stateObj.lastDate = Date();
    updateStatus();
}

updateStatus = () => {
    document.getElementById("heading").innerHTML = stateObj.timerRunning ? "Timer is running" : "Timer not running";
    document.getElementById("timerButton").innerHTML = (stateObj.timerRunning ? "Stop " : "Start ") + "Timer";
    var fullModal = document.getElementById("insideModal");
    var timerStateText = !stateObj.lastDate ? "Timer not started" :
        stateObj.timerRunning ? "Timer started at " + stateObj.lastDate : "Timer stopped at " + stateObj.lastDate;
    if (document.getElementById("timerState")) {
        document.getElementById("timerState").innerHTML = timerStateText;
    } else {
        var innerData = document.createElement("div");
        innerData.innerHTML = `<p id="timerState">${timerStateText}</p>`;
        fullModal.appendChild(innerData);
    }
}