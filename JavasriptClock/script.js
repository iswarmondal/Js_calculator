function updatingTime() {

    var dt = new Date()

//the time section of the lock screen
    var hour = dt.getHours();

    var min = dt.getMinutes()
    if (min <= 9) {
        min = "0" + min;
    }

//    var ms = dt.getSeconds()

    var showingTime = hour + ":" + min + "&nbsp" + ""

    if(hour < 12) {
        showingTime += "AM";
    }

    else {
        showingTime += "PM"
    }

    document.getElementById ("showinTime").innerHTML = showingTime;
}

function unlock() {
    document.getElementById("container").style.backgroundImage = "linear-gradient(rgb(255, 0, 255), rgb(255, 0, 0), rgb(121, 163, 253),rgb(231, 243, 61), black);";
    document.getElementById("container").style.animationName = "unlockAnimation";
    document.getElementById("container").style.animationName = "zoomOutEffect";
    document.getElementById("container").style.animationDuration = "2s";
    document.getElementById("container").style.animationIterationCount = "1";
}