console.log(document);
document.title = "Mein erster Test";
console.log(document);
document.title = "Mein erster Test";
let box = document.getElementById("myDiv");
box.textContent = "Ich wurde geändert!";

box.style.color = "red";

let liste = document.getElementById("myList");
console.log(liste);
console.log(liste.children[0].textContent);

// ===== div =====
console.log(box.textContent);
box.style.backgroundColor = "yellow";
box.style.border = "2px solid black";
box.style.padding = "10px";
box.innerHTML = "Hallo, ich bin <b>fett</b>!";


// ===== table =====
let tabelle = document.getElementById("myTable");
console.log(tabelle.rows.length);
console.log(tabelle.rows[1].cells[0].textContent);
tabelle.rows[2].cells[1].textContent = "99";
let neueZeile = tabelle.insertRow();
neueZeile.insertCell().textContent = "Clara";
neueZeile.insertCell().textContent = "22";


// ===== select / option =====
let farbe = document.getElementById("color");
console.log(farbe.value);

console.log(farbe.options.length);



farbe.value = "blue";

let neueFarbe = document.createElement("option");
neueFarbe.value = "orange";
neueFarbe.textContent = "Orange";
farbe.appendChild(neueFarbe);


// ===== input =====
let nameFeld = document.getElementById("name");
nameFeld.placeholder = "Dein Name hier";

nameFeld.value = "Mia";
document.getElementById("agree").checked = true;
document.getElementById("sizeLarge").checked = true;

// ===== button =====
let knopf = document.getElementById("submitBtn");
knopf.textContent = "Abschicken";

knopf.style.backgroundColor = "green";
knopf.style.color = "white";

knopf.addEventListener("click", function () {
    console.log("Knopf wurde geklickt!");
});

knopf.addEventListener("click", function () {
    box.textContent = "Hallo " + nameFeld.value + "!";
    box.style.backgroundColor = farbe.value;
});

// ===== form =====
let formular = document.getElementById("myForm");
console.log(formular.elements.length);

formular.style.border = "2px dashed blue";
formular.style.padding = "10px";

knopf.addEventListener("click", function () {
    formular.reset();
});