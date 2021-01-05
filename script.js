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
    arrayIncome.push(document.getElementsByClassName("income")[x]);
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
        for(let y = 0; y < arraySpent.length; y++) {
            arraySpent[y].value = "";
            console.log(arraySpent[y].value)
        }

        for(let x = 0; x < arrayIncome.length; x++) {
            arrayIncome[x].value = "";
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
    let income = additionIncome();
    let spent = additionSpent()
    total.innerHTML = income - spent + " €";
}

function additionSpent() {
    let additionSpentT = 0;
    for(let x = 0; x < arraySpent.length; x++) {
        if(((arraySpent[x].value[arraySpent[x].value.indexOf(".") + 2] >= 0) && (arraySpent[x].value[arraySpent[x].value.indexOf(".") + 1] >= 0) &&
            (isNaN(arraySpent[x].value[arraySpent[x].value.indexOf(".") + 3]) === true))) {
            additionSpentT += parseFloat(arraySpent[x].value);
        }

        else if(arraySpent[x].value.length > 0) {
            alert("Un champ n'est pas valide");
        }

    }
    return additionSpentT
}

function additionIncome() {
    let additionIncomeT = 0;
    for(let y = 0; y < arrayIncome.length; y++) {
        if(((arrayIncome[y].value[arrayIncome[y].value.indexOf(".") + 2] >= 0) && (arrayIncome[y].value[arrayIncome[y].value.indexOf(".") + 1] >= 0) &&
            (isNaN(arrayIncome[y].value[arrayIncome[y].value.indexOf(".") + 3]) === true))) {
            additionIncomeT += parseFloat(arrayIncome[y].value);
        }

        else if(arrayIncome[y].value.length > 0) {
            alert("Un champ n'est pas valide");
        }
    }
    return additionIncomeT
}

document.getElementById("reset").addEventListener("click", function () {
    for(let x = 0; x < arraySpent.length; x++) {
        arraySpent[x].value = "";
    }

    for(let x = 0; x < arrayIncome.length; x++) {
        arrayIncome[x].value = "";
    }
});
