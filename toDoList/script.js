let listData = [];

function add() {
    let inp = document.getElementById("inp");
    let inpV = inp.value.trim();

    if (!!inpV) {
        if (!listData.includes(inpV)) {
            listData.push(inpV);
            listData.sort((a, b) => a.localeCompare(b));
            display();
        } else {
            alert(`'${inpV}' already exists. Enter something else.`);
        }
    } else {
        alert("You cannot add an empty element!");
    }
    inp.value = "";
}

function display() {
    let listUl = document.getElementById("listUl");
    let data = "";
    for (let i = 0; i < listData.length; i++) {
        data += `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${listData[i]}
                    <button onclick="remove(${i})" class="btn btn-danger">Remove</button>
                </li>`;
    }
    listUl.innerHTML = data;
}

function remove(index) {
    listData.splice(index, 1);
    display();
}
