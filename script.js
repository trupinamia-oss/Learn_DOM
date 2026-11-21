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