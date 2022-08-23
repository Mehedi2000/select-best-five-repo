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

        // element.disable = true;
        // element.style.background = "grey";
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

// common function start

function getElementFieldValueById(element) {
    let elementField = document.getElementById(element);
    let elementFieldValueString = elementField.value;
    let elementValue = parseFloat(elementFieldValueString);
    elementField.value = "";
    return elementValue;

}



