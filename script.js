const btnAdd = document.getElementById("btn-add");
const btnEffacer = document.getElementById("btn-effacer");
const intitule = document.getElementById("intitule");
const somme = document.getElementById("somme");
const depList = document.getElementById("dep-list");
const spanTotal = document.getElementById("total");


let total = 0;

btnAdd.addEventListener('click', () => {
    let intituleValue = intitule.value;
    let sommeValue = somme.value;
    console.log(intituleValue, sommeValue);
    const newLabel = document.createElement('ion-label');
    // newLabel.textContent = intituleValue + ' : ' + sommeValue + ' TND';
    newLabel.textContent = `${intituleValue} : ${sommeValue} TND`;
    const newItem = document.createElement('ion-item');
    newItem.appendChild(newLabel);
    depList.appendChild(newItem);

    // total = total + Number(sommeValue);

    total += +sommeValue;
    spanTotal.textContent = `${total} TND`;
    clear();
});


btnEffacer.addEventListener('click', clear)

function clear() {

    intitule.value = '';
    somme.value = '';
}