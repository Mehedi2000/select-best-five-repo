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

        element.disable = true;
        element.style.background = "grey";

    }
    else {
        alert('Only five player is allowed')
    }


    document.getElementById("total-player-added").innerText = plyerNameArry.length;

    display(plyerNameArry);
}

