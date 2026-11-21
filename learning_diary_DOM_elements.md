es ändert sich in der Console 
mal gefragt was ul lisind: 

ul heißt unordered list (ungeordnete Liste). Das ist die ganze Liste, also die Verpackung außen herum.
li heißt list item (Listenpunkt). Das ist ein einzelner Punkt in der Liste.
Es gibt auch ol (ordered list, geordnete Liste). Da stehen dann Zahlen statt Punkte: 1., 2., 3.

in unserem Fall sind das die Items 1-3 
  <ul id="myList">
        <li>Item 1</li> = ein li in meiner ul
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
ist in unserer html bereits als solche vorhanden ab Zeile 11
 ul in ol geändert dann ist die liste geordnet und nummeriert 
 Leonie hat in ihrem code weitere Änderungen vorgenommen 


 1. div

Was ist ein div?
Ein div ist eine leere Box auf der Seite. Sie macht von sich aus nichts Besonderes, man kann aber Text oder andere Elemente hineinlegen. Im Haus-Bild ist das ein leeres Zimmer, das du einrichten kannst, wie du willst.

2. table

Was ist das? Eine Tabelle mit Zeilen und Spalten. Wie ein Regal mit Fächern.

<tr> ist eine Zeile (table row).
<td> ist ein Feld (table data).
<th> ist ein Überschrift-Feld (table header).
Eine Tabelle besteht aus Zeilen (tr) und Feldern (td, th).
Mit rows und cells komme ich an jedes einzelne Feld. Gezählt wird ab 0.
Die Überschrift-Zeile zählt bei rows.length mit.
Mit insertRow() und insertCell() kann ich neue Zeilen hinzufügen.


3. select / option
Ein Auswahlmenü (Dropdown).

<select> ist das ganze Menü.
<option> ist eine einzelne Auswahl darin.

Das ist ähnlich wie ul und li!
Diary: select/option
select ist das ganze Menü, option eine einzelne Auswahl, ähnlich wie ul und li.
Mit .value lese ich die Auswahl und kann sie auch ändern.
options.length zählt die Auswahlmöglichkeiten.
Neue Optionen baue ich wie neue Listenpunkte: createElement, beschriften, appendChild.

