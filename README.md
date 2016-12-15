# mytravelbook


## Architekturübersicht 
![Architektur](architektur.md)


## Anforderungsliste
![Anforderungsliste](anforderungsliste.md)

## Installationsanleitung
### Installationsanleitung unter Windows: 

1. Meteor (Version 1.4) auf https://www.meteor.com/ herunterladen und installieren. Den Schritt "Account Register" mit "Skip this Step" überspringen.
2. Den Projektordner "MyTravelBook" an gewünschtenm Ort erzeugen.
3. Git Projekt mittels pul in dem entsprechenden Ordner kopieren.
4. Zusätzliche Libraries installieren:
  * meteor add twbs:bootstrap
  * meteor add accounts-password
  * meteor add accouts-ui
  * meteor add twbs:bootstrap
  * meteor add iron:router
5. In der Konsole "Meteor run" ausführen. 
6. Die Applikation ist nun unter localhost:3000 im Browser erreichbar.

### Ordnerstruktur:
Im Client-Ordner befinden sich die Files main.css, main.html und main.js. Alle Files im Client-Ordner werden nur Client-seitig ausgeführt.
Im Lib-Ordner befindet sich das File database. Alle Files im Lib-Ordner werden Client- und Serverseitig ausgeführt.
Alle Informationen zum Code sind in den Files als Kommentar enthalten.


### Testing:
1. Im Textfeld Reisenamen eingeben. "Add Journey" Button bestätigen. 
--> Reise wird im Dropdown Menu aufgeführt.
2. Reise auswählen im Dropdown Menu. Per Mausklick in die Karte können nun Punkte erstellt werden. Ab 2 Punkten werden diese 
automatisch verbunden (chronologisch). Im untersten Textfeld kann eine Beschreibung für den Marker eingefügt werden. Dieser wird bei einem Klick auf den Marker angezeigt.
3. Wenn eine zweite Reise erstellt wird, erscheint diese auch im Dropdown Menu. Wird die neue Reise ausgewählt, erscheint 
die Karte blank. Per Mausklick in die Karte können nun Punkte erstellt werden. Ab 2 Punkten werden diese 
automatisch verbunden (chronologisch)
4. Beim erneuten auswählen der ersten Reise erscheinen die zuvor eingegebenen Punkte der Reise und es können weitere Punkte hinzugefügt
werden.
5. Ist keine Reise im Dropdown Menu ausgewählt können keine Punkte erstellt werden.
