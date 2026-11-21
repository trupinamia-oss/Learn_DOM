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