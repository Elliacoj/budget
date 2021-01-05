let spent = document.getElementById("partOne");
let income = document.getElementById("partTwo");
let spentField = document.getElementById("labelNewD");
let incomeField = document.getElementById("labelNewR");
let spentAdd = document.getElementById("spaceAddD");
let incomeAdd = document.getElementById("spaceAddR");
let arraySpent = [];
let arrayIncome = [];
let total = document.getElementById("total");

for(let x = 0; x < document.getElementsByClassName("spent").length; x++) {
    arraySpent.push(document.getElementsByClassName("spent")[x]);
}

for(let x = 0; x < document.getElementsByClassName("income").length; x++) {
    arraySpent.push(document.getElementsByClassName("income")[x]);
}

/**
 * Function for creat a new field of value
 * @param place
 * @param field
 * @param add
 * @param array
 */
function added(place, field, add, array) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let p = document.createElement("p");

    div.className = "space";
    p.innerHTML = "€";
    div.classList.add("addSpace");

    place.append(div);
    place.insertBefore(div, add);
    div.append(label, input, p);

    label.id = field.value;
    input.id = field.value;
    label.innerHTML = field.value;
    input.pattern = "[0-9]{0,}.[0-9]{2}";
    input.placeholder = "0.00";
    array.push(input);

    document.getElementById("reset").addEventListener("click", function () {
        for(let x = 0; x < document.getElementsByClassName("addSpace").length; x++){
            document.getElementsByClassName("addSpace")[x].remove();
        }
    });
}

document.getElementById("addD").addEventListener("click", function () {
    if(spentField.value.length >=  1) {
        added(spent, spentField, spentAdd, arraySpent);
        spentField.value = "";
        console.log(document.getElementsByClassName("addSpace").length)
    }
});

document.getElementById("addR").addEventListener("click", function () {
    if(incomeField.value.length >=  1) {
        added(income, incomeField, incomeAdd, arrayIncome);
        incomeField.value = "";
    }
});

document.getElementById("calcul").addEventListener("click", function () {
    result();
});

function result() {
    total.innerHTML = "";
    for(let x = 0; x < arraySpent.length; x++) {
        console.log(parseFloat(arraySpent[x].value))
        if(((isNaN(arraySpent[x]) === true) && (arraySpent[x].length > 0))) {
            alert("Un champ n'est pas valide");
        }

        else if((parseFloat(arraySpent[x].value) % 1 !== 0) && (arraySpent[x].length > 0) && ((parseFloat(arraySpent[x].value) * 100) % 1 === 0) && ((parseFloat(arraySpent[x].value) * 10) % 1 !== 0)) {
            total.innerHTML -= arraySpent[x].value;
        }
    }
}


