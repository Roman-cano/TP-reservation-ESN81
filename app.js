const date = document.querySelector(".date");
const place = document.querySelector(".quantite");
const ajouter = document.querySelector("#add");
const reservations = document.querySelector(".reservations");
let datesToDisplay = [
    {value:"2024-01-06"},
    {value:"2024-01-13"},
    {value:"2024-01-20"},
    {value:"2024-01-27"},
]

function checkvalue(value) {
    present = false;
    datesToDisplay.forEach((aDate) => {
        if(aDate.value == value) {
           present = true;
        }
    });
    return present;

}
function insertDates() {

    for(let i = date.options.length - 1 ; i >= 1 ; i--) {
        date.innerHTML = "";
    }
    let option = document.createElement("option");
    option.textContent = "Selectionner une date";
    option.value = null;
    date.appendChild(option);

    datesToDisplay.forEach((aDate) => {
        option = document.createElement("option");
        option.value = aDate.value;
        option.textContent = aDate.value;
        date.appendChild(option);
    });
}


insertDates(datesToDisplay);

date.addEventListener("change", (e) => {
    if(checkvalue(e.target.value, datesToDisplay) === true) {
        console.log(e.target.value);
        console.log("Date exists");
        ajouter.disabled = false;
        ajouter.classList.remove("disabled");
        ajouter.classList.add("enabled");
    } else {
        console.log("Date does not exist");
        ajouter.disabled = true;
        ajouter.classList.add("disabled");
        ajouter.classList.remove("enabled");
    }
});

ajouter.addEventListener("click" ,(e) => {
    let valeurDate = date.value;

    let placeR = place.value;
    let x = datesToDisplay.findIndex(aDate => aDate.value === valeurDate);
    datesToDisplay.splice(x, 1);
    insertDates();
    ajouter.classList.add("disabled");

    let reservationDiv = document.createElement("div");
    reservationDiv.classList.add("reservation");
    let sup = document.createElement("button");
    sup.textContent = "Supprimer";
    sup.classList.add("remove");
    let dateDiv = document.createElement("div");
    dateDiv.textContent = valeurDate;
    let placeDiv = document.createElement("div");
    placeDiv.textContent = "le nombre de place est de "+ placeR;
    sup.addEventListener("click", (e) => {
        reservationDiv.remove();
        datesToDisplay.push({value: valeurDate});
        insertDates();

    });
    reservationDiv.appendChild(dateDiv);
    reservationDiv.appendChild(placeDiv);
    reservationDiv.appendChild(sup);
    reservations.appendChild(reservationDiv);
});



