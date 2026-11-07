wie kriege ich ihn dazu auf meinem Niveau zu beschreiben oder zu antworten: 
meine erfahrungen, wissensstand, studiengang klar gemacht + gefragt ob er es so einfach wie möglcih erklären kann
ich hab den Chat auch mit den Folien der LV "gefüttert 
-Stell dir die Seite wie einen Schrank vor. Jedes HTML-Element (<div>, <li>, <input> …) ist eine Schublade darin. document ist der Schrank selbst. Wenn du an eine Schublade willst, gehst du immer über den Schrank
mit:
console.log(document);
document.title = "Mein erster Test";

habe den Titel überschrieben
erste zeile geändert  


zweite frage:
mal nur die frage 
mitDocument kann man alles auf der website steuern 
zB. document.getElementById("myDiv") - frage: was ist der inhalt = das Document (die ganze Seite ändert sich nicht), getElementByID (Befehl/Funktion, den document kann "hol mir das Element mit dieser ID"), myDiv ist die ID nach der gesucht wird 
"Seite hol mir das Elemnt mit der id myDiv"

folgende punkte sind genannt worden: 
2. Inhalt und Aussehen ändern
3. Neue Elemente bauen und einfügen
4. Elemente löschen
5. Eingaben lesen
6. Auf Klicks reagieren
7. Die ganze Seite ändern
-Prompt: beschreibe alle punkte vereinfacht und erkläre anhand eines Beispiels

1. bevor ich etwas ändern kann muss ich es in die Hand nehmen 
2. Wenn du das Element hast, kannst du den Text oder das Aussehen ändern.
3.Das geht in drei Schritten: bauen, beschriften, einfügen.
let neu = document.createElement("li");                // 1. bauen
neu.textContent = "Item 4";                            // 2. beschriften
document.getElementById("myList").appendChild(neu);    // 3. einfügen

Deine Liste hat jetzt 4 Punkte statt 3. Ohne Schritt 3 gäbe es das Element zwar, aber man würde es nicht sehen.

Prompt:bei punkt 3 hatte ich jz bereits ein elemt getElementById welches jetzt als createElemt neu definiert wird? bleibt das original bestehen?
Nein, da wird nichts überschrieben. In Punkt 3 gibt es zwei verschiedene Elemente:

javascript
let neu = document.createElement("li");                // ein NEUES <li>
neu.textContent = "Item 4";
document.getElementById("myList").appendChild(neu);    // die BESTEHENDE <ul>
createElement("li") baut ein neues <li>, das es vorher nicht gab.
getElementById("myList") holt die bestehende Liste <ul id="myList">.
appendChild(neu) steckt das neue <li> in die bestehende Liste.

Das Original bleibt also komplett bestehen. Es bekommt nur ein Kind dazu

- man kann auf einzelne Punkte eingehen - anhand von bildlichen Beispielen kann man es sich am besten Vorstellen - sind keine schlechten Dinge

eine zeile rot eingefärbt- wieso nur die eine?: Diese Zeile holt nur ein einziges Element, nämlich das mit der id myDiv. Mit dem Haus-Beispiel gesagt: Du gehst nur in ein Zimmer. - hätte ich die ganze Zeile einfärben wollen - hätte ich document.body rot einfärben müssen 

Task 2 
How can I access the list "myList" in the html file? - im selben Chat wie für die vorherigen Fragen in Task 1 
Das heißt: Ein Zimmer hat an der Tür ein Schild mit der Aufschrift „myList“. Drinnen stehen drei Kisten: Item 1, Item 2 und Item 3.

Jetzt kommt JavaScript ins Haus und will in genau dieses Zimmer. Also sagt es:
Auf Deutsch: „Haus, bring mich zu der Tür mit dem Schild ‚myList‘.“

JavaScript geht durchs Haus, findet die Tür mit dem passenden Schild und merkt sich das Zimmer unter dem Namen liste.

Ab jetzt muss es nicht mehr suchen. Wenn es liste sagt, steht es sofort in dem Zimmer und kann sich umsehen, etwas umräumen oder eine neue Kiste hineinstellen.

Wichtig: Das Schild muss genau stimmen. Steht an der Tür „myList“ und du suchst „mylist“, findet JavaScript nichts. Dann bekommst du null (also „kein Zimmer gefunden“).

How can I change the list "myList" in the html file?
Erst holst du die Liste. Du gehst also ins Zimmer mit dem Schild „myList“:

javascript
let liste = document.getElementById("myList");

Danach kannst du drinnen umräumen. Die vier wichtigsten Möglichkeiten:

1. Eine Kiste neu beschriften (Text eines Punktes ändern)

javascript
liste.children[0].textContent = "Äpfel";

Aus „Item 1“ wird „Äpfel“. children[0] ist die erste Kiste, denn gezählt wird ab 0.

2. Eine neue Kiste hineinstellen (Punkt hinzufügen)

javascript
let neu = document.createElement("li");
neu.textContent = "Item 4";
liste.appendChild(neu);

Die Liste hat jetzt 4 Punkte.

3. Eine Kiste rausschmeißen (Punkt löschen)

javascript
liste.children[0].remove();

Der erste Punkt ist weg.

4. Das Zimmer streichen (Aussehen ändern)

javascript
liste.style.color = "blue";

Die ganze Liste ist jetzt blau.

Kurz gesagt: Erst das Zimmer holen (getElementById), dann drinnen umräumen.S