Sicherheitsarchitektur
Gewisse Sicherheitsaspekte werden bereits vom Meteor-Framework abgedeckt. So kann man mittels weiterer Pakete, welche man von den Meteor-Entwicklern hinzuf�gen kann, die Sicherheitsanforderungen nach eigenem Ermessen erh�hen oder lockern.
Das Team entschied sich, die Sicherheitsaspekte so zu belassen, wie sie von Meteor als Standard zur Verf�gung gestellt werden.
Bei einem allf�lligen Release m�sste das Konzept sicher noch �berarbeitete werden, um die Privatsph�re-Rechte der Benutzer zu gew�hrleisten.

LIB
Das File Database.je sorgt daf�r, dass die Datenbank (hier MongoDB) initialisiert wird und die beiden Tabellen "Coordinates" und "Journeys" erstellt werden.

CLIENT
main.html:
Die Google-Maps API wird hier eingebunden. Mittels eines Keys, den man �ber Google l�st, kann die Karte initialisiert werden. Google stellt ein Volumen von 25'000 loadrequests der Karte kostenlos zur Verf�gung. 
Meteor strukturiert die HTML-Files mittels Templates, welche dann in den Body eingebunden werden.
main.js:
Es gibt von den Meteor-Entwicklern zur Verf�gung gestellte M�glichkeiten, einfach mit den Templates zu arbeiten. Hier geh�ren die "helpers" und "event" Funktionen dazu, mit denen Funktionalit�ten einfacher programmiert werden k�nnen.
Auch die spezifischen Funktionalit�ten von Google Maps werden hier als Funktionen definiert.
main.css:
Hier wird im n�chsten Schritt das Design der Applikation definiert.