# Anforderungsliste

Nachfolgend eine gekürzte Anforderungsliste, welche die Bearbeiteten Anforderungen beinhaltet.

##	Allgemeine Beschreibung	
### Produktfunktionen
#### Reise Darstellen
Der Benutzer sieht in einer Liste alle seine Reisen, die er im MyTravelBook eingefügt hat. In dieser Liste kann er sich einzelne Reisen auf der Karte anzeigen lassen, welche mit Punkten und Vektoren visuell dargestellt werden.
Wenn er einen Kartenpunkt markiert, wird ein Fenster eingeblendet, welches eine Vorschau der Texte und Fotos anzeigt, die an diesem Punkt abgelegt wurden. Klickt der Benutzer auf den Text oder auf ein Bild, kann er sich den ganzen Text oder eine grosse Ansicht der Bilder anzeigen lassen.
#### Reise erstellen
Der Benutzer kann eine Reise erstellen, indem er auf der Karte Punkte setzt und bei diesen Texte und Fotos hoch lädt. Hat der Benutzer mehrere Punkte gesetzt, so kann er sie mit Vektoren graphisch zu einer Reise verbinden.
#### Reise bearbeiten
Der Benutzer hat die Möglichkeit, den Namen einer Reise zu bearbeiten. Falls er nachträglich weitere Punkte zu seiner Reise hinzufügt, hat er auch die Möglichkeit, neue Vektoren zu setzen, sodass die Reise zusammenhängend bleibt.
Er kann nachträglich auch weitere Texte und Bilder zu den einzelnen Punkten hinzufügen. Bereits vorhandene Texte kann er zudem editieren.
#### Reise löschen
Der Benutzer kann eine ganze Reise oder einzelne Elemente der Reisen löschen. So kann er Punkte, Vektoren, Fotos und Texte löschen.
#### Reise ansehen
Gäste können die Seite besuchen um die Reise in einem «View Only» Modus anschauen.
 
### Benutzermerkmale (Zu erwartende Benutzer)
Die Applikation wird von 2 Arten von Personen verwendet.
#### Personengruppe 1:
Eine Person, die gerade Urlaub macht. Diese Person befindet sich nicht zu Hause und hat somit meist keinen permanenten Zugang zum Internet. Je nachdem, wo sich die Person befindet, ist nur sehr begrenzte Internetbandbreite vorhanden.
Diese Personen werden die Applikation mit Texten und Fotos ihrer Reisen füllen. 
#### Personengruppe 2:
Diese Personen wollen sehen, welche Erlebnisse eine Person der Personengruppe 1 in der Applikation hochgeladen hat. Diese Personengruppe benutzt die Applikation nur als Zuschauer und ändern nichts an den hochgeladenen Daten. 


## Spezifische Anforderungen
### Funktionale Anforderungen
#### /F1 Reise erstellen
##### /F1110/ Erstellen von Reisen
Um eine Reise zu erstellen, klickt der Benutzer auf das entsprechende Symbol auf der Webseite und gibt der Reise einen Namen. Im Hintergrund wird ein neuer Datenbankeintrag erstellt, inklusive einem eindeutigen Schlüssel, welcher für das Hinzufügen von Kartenpunkten, Fotos und Texten zur Reise benötigt wird.
##### /F1120/ Punkte auf der Karte setzen
Innerhalb einer Reise kann durch eine Eingabe im Suchfenster, wie man es von der Ortssuche bei Google Maps kennt, ein beliebiger Ort auf der Karte angezeigt werden. Der Ort kann aber auch durch verschieben und zoomen auf der Kartenoberfläche erreicht werden. Als nächster Schritt klickt der Benutzer auf die gewünschte Stelle, an der er einen Reisepunkt setzen will. Durch diese Aktion wird im Hintergrund die Koordinate in die Datenbank geschrieben, wodurch der Punkt mit Bildern und Texten referenziert werden kann. Nachdem ein neuer Punkt erstellt wurde, können Texte und Bilder erstellt, beziehungsweise hochgeladen, werden.
##### /F1130/ Kartenpunkte verbinden mittels simpler Vektoren
Der Benutzer hat die Möglichkeit, mittels der Option „Punkte verbinden“ zwei bestehende Kartenpunkte auszuwählen und die Punkte mit einem geradlinigen Vektor zu verbinden. In der Datenbank wird zwischen den beiden Punkten, welche als Koordinaten gespeichert sind, eine Relation erstellt. Der Vektor auf der Karte wird durch die Google Maps API erzeugt.
##### /F1150/ Texte verfassen
Bei jedem erstellten Kartenpunkt (siehe /F113/) wird mit einem weiteren Link auf die Möglichkeit, Texte zu erfassen, hingewiesen. Der Benutzer kann so seine Texte in ein Eingabefeld tippen oder bestehende Texte in das Feld einfügen. Das Eingabefeld bietet nur minimale Textgestaltungsmöglichkeiten. Durch klicken des Speichern-Symbols werden die Texte in der Datenbank gespeichert und mit den Koordinaten des Kartenpunktes verknüpft.

#### /F2 Reisen ansehen
Die Reisen werden anhand der Reisenamen aufgelistet und angezeigt. So kann der Benutzer auswählen, welche Reise er näher anschauen möchte. Durch einen Klick auf den Reisenamen wird die Reise dargestellt.
##### /F2110/ Reise darstellen
Um die ganze Reise darzustellen, werden aus der Datenbank verschiedene Einträge ausgelesen. Es werden dazu alle Kartenpunkte und die Informationen über die Vektoren benötigt, um die Punkte graphisch zu verbinden.
##### /F2120/ Kartenpunkte anzeigen
Um die Kartenpunkte anzuzeigen, werden die Koordinaten aus der Datenbank gelesen und mit Hilfe der Google Maps API auf der Karte dargestellt.
##### /F2130/ Reiseroute darstellen
Die Kartenpunkte werden mit Vektoren verbunden. Dazu werden die Koordinaten der zu verbindenden Kartenpunkte aus der Datenbank ausgelesen und mittels Google Maps API auf der Karte dargestellt. Für den Benutzer ist dadurch die Reiseroute ersichtlich.
##### /F2140/ Vorschau darstellen
Sobald die Reise komplett dargestellt wird, kann der Benutzer auf einen beliebigen Kartenpunkt klicken. Sofort wird eine kleine Vorschau angezeigt, welche Bilder im Kleinformat oder die ersten Zeilen von Texten enthält. Im Hintergrund werden die Datenbankeinträge, welche mit den Koordinaten des Kartenpunktes verknüpft sind, ausgelesen. Die darin enthaltenen Bilder werden dargestellt, die Texte werden so gekürzt, dass sie in der Vorschau darstellbar sind.
##### /F2160/ Texte anzeigen
Die Texte werden im selben Fenster wie die Bilder dargestellt. Der Benutzer kann sie auch direkt in der Vorschau anwählen und anzeigen lassen, wodurch sich ein neues Fenster öffnet, in welchem alle Bilder und Texte dieses Kartenpunktes nach der Reihenfolge des Uploads untereinander dargestellt werden. 
Für den Benutzer macht es keinen Unterschied, ob er in der Vorschau ein Bild oder einen Text ausgewählt hat. Die Galerie beinhaltet in beiden Fällen sowohl die Bilder als auch die Texte des Kartenpunktes.

#### /F3 Benutzerverwaltung
##### /F3110/ Login
Die Benutzerverwaltung wird für den Benutzer sehr einfach gehalten. Auf der Startseite gibt es ein Login, mit welchem sich der Benutzer anmelden kann. Dazu benötigt er einen Benutzernamen und ein Passwort. Der eingegebene Benutzername muss in der Datenbank existieren, das eingegebene Passwort muss mit dem in der Datenbank gespeicherten, zum entsprechenden Benutzer gehörenden, verschlüsselten Passwort übereinstimmen. Ist das der Fall, wird für den Benutzer eine Session erstellt, mit welcher er Zugriff auf seine Reisen erhält.
##### /F3120/ Benutzer erstellen
Damit sich ein Benutzer einloggen kann, braucht er ein Benutzerkonto. Dazu gibt es ein Formular, in welchem er eine E-Mail-Adresse und ein Wunschpasswort angeben muss. Das Passwort muss zur Sicherheit doppelt angegeben werden, um Tippfehler des Benutzers abzufangen.
 
### Nicht-Funktionale Anforderungen
#### /R0500/ Gebrauchsfähigkeit (Usability)
Die Webseiten müssen durch den Benutzer, welcher dem Benutzerprofil entspricht, ohne weitere Hilfe verwendet werden können.
#### /R0510/ Fehlertoleranz
Hinweise und Fehlermeldungen müssen für den Benutzer verständlich formuliert sein und eine Hilfestellung zur Problemlösung beinhalten.
#### /R0520/ Sprache + länderspezifische Einstellungen
Die Webseiten sind in deutscher Sprache (Schweiz) verfasst, verwenden den Zeichensatz UTF-8 und die Schweiz-spezifischen Einstellungen von Datum, Zeit, Zahlen und Währung.
#### /R0530/ Zielplattform (Server)
Die Web-Applikation muss eine MySQL-Datenbank verwenden. 
#### /R0540/ Zielplattform (Client)
Die Webseiten werden in der aktuellsten freigegebenen Version des Google Chrome korrekt dargestellt.
#### /R0550/ Werkzeuge zur Entwicklung
Als Projektmanagement-Tool und zur Verwaltung des Sourcecode und der Dokumente soll ein Versionierungstool (z.B. SVN, GitHub) verwendet werden.
#### /R0560/ Robustheit
Auch nach einem Neustart des virtuellen Servers muss die Webseite voll funktionsfähig sein.
#### /R0570/ Testbarkeit
Für die Durchführung der Tests und der Abnahme müssen sinnvolle Testdaten in genügendem Umfang zur Verfügung gestellt werden.
#### /R0580/ Google Maps API
Für die Darstellung und Verwaltung der Kartendaten wird die Google Maps API verwendet. Bis 25'000 Zugriffe pro Tag ist die Verwendung der Google Maps API kostenlos. Die Suchfunktion der Karte wird ebenfalls durch die Google Maps API zur Verfügung gestellt.
