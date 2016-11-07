# Architekturübersicht 

![Architektur](/_images/Architektur.PNG)

## Sicherheitsarchitektur
Sicherheitsaspekte werden vom Meteor-Framework abgedeckt und sind vorgegeben. Mittels weiterer Pakete, welche man von Meteor hinzufügen kann, können gewisse Sicherheitsfunktionalitäten ergänzt werden.
Das Team entschied sich, die Sicherheitsaspekte so zu belassen, wie sie von Meteor als Standard zur Verfügung gestellt werden.
Bei einem allfälligen Release müsste das Konzept sicher noch überarbeitete werden, um die Privatsphäre-Rechte der Benutzer zu gewährleisten.

## lib
Das File Database.je sorgt dafür, dass die Datenbank (hier MongoDB) initialisiert wird und die beiden Tabellen "Coordinates" und "Journeys" erstellt werden. Die MongoDB speichert Daten im JSON Format.

## client
### main.html:
Die Google-Maps API wird hier eingebunden. Mittels eines Keys, den man über Google löst, kann die Karte initialisiert werden. Google stellt ein Volumen von 25'000 loadrequests der Karte kostenlos zur Verfügung. 
Meteor strukturiert die HTML-Files mittels Templates, welche dann in den Body eingebunden werden.

### main.js:
Es gibt von den Meteor-Entwicklern zur Verfügung gestellte Möglichkeiten, einfach mit den Templates zu arbeiten. Hier gehören die "helpers" und "event" Funktionen dazu, mit denen Funktionalitäten einfacher programmiert werden können.
Auch hilfs Funktionalitäten von Google Maps werden hier als Funktionen definiert.

### main.css:
Hier wird im nächsten Schritt das Design der Applikation definiert.
