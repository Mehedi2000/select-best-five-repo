// js for seleceted player section

const plyerNameArry = [];

function display(playerName) {

    const tableBody = document.getElementById("player-products");
    tableBody.innerHTML = "";

    for (let i = 0; i < playerName.length; i++) {
        const name = plyerNameArry[i].playerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
<th>${i + 1}</th>
<td>${name}</td>
        `;

        tableBody.appendChild(tr);
    }
}

function addPlayer(element) {

    const playerName = element.parentNode.children[0].innerText;

    const playerNameObject = {
        playerName: playerName
    }

    if (plyerNameArry.length < 5) {

        plyerNameArry.push(playerNameObject);

        element.setAttribute('disabled', '');
        element.style.background = "grey";
    }
    else {
        alert('Only five player is allowed');
    }


    document.getElementById("total-player-added").innerText = plyerNameArry.length;

    display(plyerNameArry);
}

// js for Budget player section

// common function 

function getElementFieldValueById(element) {
    let elementField = document.getElementById(element);
    let elementFieldValueString = elementField.value;
    let elementValue = parseFloat(elementFieldValueString);
    elementField.value = "";
    return elementValue;

}

function setTextElementValueById(textId, value) {

    const textElementId = document.getElementById(textId);

    textElementId.innerText = value;
}

function returnTextElementValueById(id, value) {
    const textElementId = document.getElementById(id);

    let innerText = textElementId.innerText;

    innerText = value;

    return innerText;
}

let totalPlayerExpenses;

// Eventlistener for calculate button

document.getElementById('calculate-btn').addEventListener("click", function () {

    const perPlayerValue = getElementFieldValueById('per-player-field');

    totalPlayerExpenses = perPlayerValue * plyerNameArry.length;

    setTextElementValueById('player-expenses', totalPlayerExpenses);


})

// Eventlistener for total calculate button

document.getElementById("calculate-total-btn").addEventListener('click', function () {

    const managerValue = getElementFieldValueById('manager-value-field');

    const coachValue = getElementFieldValueById('coach-value-field');

    let totalPlayerExpensesValue = returnTextElementValueById('player-expenses', totalPlayerExpenses);


    const totalValue = managerValue + coachValue + totalPlayerExpensesValue;

    setTextElementValueById('total', totalValue);

})





