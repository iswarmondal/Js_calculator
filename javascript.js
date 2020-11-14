function calculate() {

    // collecting the values
    var totalAmmount = document.getElementById("totalAmmount").value;
    var selection = document.getElementById("selection").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;

    //validate inputs
    if (numberOfPeople === "" || numberOfPeople <= 0) {
        numberOfPeople = 1;
    }

    if (selection == 0) {
        alert('Please input the tip percentage !');
    }

    if (totalAmmount === "" || totalAmmount <= 0) {
        alert('Please enter the main amount');
    }

    else{
        document.getElementById("result").style.display = "block";
    };

    var result = (totalAmmount * selection)/numberOfPeople

    result = Math.round(result);

    document.getElementById("result").innerHTML = result;
}

document.getElementById("cal").onclick = function () {
    calculate()
}