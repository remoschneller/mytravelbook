# mytravelbook


## Architekturübersicht 

![Architektur](architektur.md)

## Installationsanleitung
### Installationsanleitung unter Windows: 

1. Meteor (Version 1.4) auf https://www.meteor.com/ herunterladen und installieren.
Den Schritt "Account Register" mit "Skip this Step" überspringen.
2. Den Projektordner "MyTravelBook" an den gewünschten Ort verschieben und entpacken.
3. CMD starten und an gewünschtem Ort mittels "meteor create mytravelbook" neues Meteor Projekt erstellen.
4. Mit der Konsole in der Ordner mytravelbook navigieren und den Befehl "meteor add twbs:bootstrap" ausführen.
5. Die Ordner Client und Server entfernen.
6. Aus dem GitHub Projekt die Ordner Client und Lib in das mytravelbook Root Verzeichnis kopieren
4. In der Konsole "Meteor run" ausführen. 
5. Die Applikation ist nun unter localhost:3000 im Browser erreichbar.

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
