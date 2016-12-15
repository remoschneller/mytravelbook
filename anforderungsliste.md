# Anforderungsliste

Nachfolgend eine gek�rzte Anforderungsliste, welche die Bearbeiteten Anforderungen beinhaltet.

##	Allgemeine Beschreibung	
### Produktfunktionen
#### Reise Darstellen
Der Benutzer sieht in einer Liste alle seine Reisen, die er im MyTravelBook eingef�gt hat. In dieser Liste kann er sich einzelne Reisen auf der Karte anzeigen lassen, welche mit Punkten und Vektoren visuell dargestellt werden.
Wenn er einen Kartenpunkt markiert, wird ein Fenster eingeblendet, welches eine Vorschau der Texte und Fotos anzeigt, die an diesem Punkt abgelegt wurden. Klickt der Benutzer auf den Text oder auf ein Bild, kann er sich den ganzen Text oder eine grosse Ansicht der Bilder anzeigen lassen.
#### Reise erstellen
Der Benutzer kann eine Reise erstellen, indem er auf der Karte Punkte setzt und bei diesen Texte und Fotos hoch l�dt. Hat der Benutzer mehrere Punkte gesetzt, so kann er sie mit Vektoren graphisch zu einer Reise verbinden.
#### Reise bearbeiten
Der Benutzer hat die M�glichkeit, den Namen einer Reise zu bearbeiten. Falls er nachtr�glich weitere Punkte zu seiner Reise hinzuf�gt, hat er auch die M�glichkeit, neue Vektoren zu setzen, sodass die Reise zusammenh�ngend bleibt.
Er kann nachtr�glich auch weitere Texte und Bilder zu den einzelnen Punkten hinzuf�gen. Bereits vorhandene Texte kann er zudem editieren.
#### Reise l�schen
Der Benutzer kann eine ganze Reise oder einzelne Elemente der Reisen l�schen. So kann er Punkte, Vektoren, Fotos und Texte l�schen.
#### Reise ansehen
G�ste k�nnen die Seite besuchen um die Reise in einem �View Only� Modus anschauen.
 
### Benutzermerkmale (Zu erwartende Benutzer)
Die Applikation wird von 2 Arten von Personen verwendet.
#### Personengruppe 1:
Eine Person, die gerade Urlaub macht. Diese Person befindet sich nicht zu Hause und hat somit meist keinen permanenten Zugang zum Internet. Je nachdem, wo sich die Person befindet, ist nur sehr begrenzte Internetbandbreite vorhanden.
Diese Personen werden die Applikation mit Texten und Fotos ihrer Reisen f�llen. 
#### Personengruppe 2:
Diese Personen wollen sehen, welche Erlebnisse eine Person der Personengruppe 1 in der Applikation hochgeladen hat. Diese Personengruppe benutzt die Applikation nur als Zuschauer und �ndern nichts an den hochgeladenen Daten. 


## Spezifische Anforderungen
### Funktionale Anforderungen
#### /F1 Reise erstellen
##### /F1110/ Erstellen von Reisen
Um eine Reise zu erstellen, klickt der Benutzer auf das entsprechende Symbol auf der Webseite und gibt der Reise einen Namen. Im Hintergrund wird ein neuer Datenbankeintrag erstellt, inklusive einem eindeutigen Schl�ssel, welcher f�r das Hinzuf�gen von Kartenpunkten, Fotos und Texten zur Reise ben�tigt wird.
##### /F1120/ Punkte auf der Karte setzen
Innerhalb einer Reise kann durch eine Eingabe im Suchfenster, wie man es von der Ortssuche bei Google Maps kennt, ein beliebiger Ort auf der Karte angezeigt werden. Der Ort kann aber auch durch verschieben und zoomen auf der Kartenoberfl�che erreicht werden. Als n�chster Schritt klickt der Benutzer auf die gew�nschte Stelle, an der er einen Reisepunkt setzen will. Durch diese Aktion wird im Hintergrund die Koordinate in die Datenbank geschrieben, wodurch der Punkt mit Bildern und Texten referenziert werden kann. Nachdem ein neuer Punkt erstellt wurde, k�nnen Texte und Bilder erstellt, beziehungsweise hochgeladen, werden.
##### /F1130/ Kartenpunkte verbinden mittels simpler Vektoren
Der Benutzer hat die M�glichkeit, mittels der Option �Punkte verbinden� zwei bestehende Kartenpunkte auszuw�hlen und die Punkte mit einem geradlinigen Vektor zu verbinden. In der Datenbank wird zwischen den beiden Punkten, welche als Koordinaten gespeichert sind, eine Relation erstellt. Der Vektor auf der Karte wird durch die Google Maps API erzeugt.
##### /F1150/ Texte verfassen
Bei jedem erstellten Kartenpunkt (siehe /F113/) wird mit einem weiteren Link auf die M�glichkeit, Texte zu erfassen, hingewiesen. Der Benutzer kann so seine Texte in ein Eingabefeld tippen oder bestehende Texte in das Feld einf�gen. Das Eingabefeld bietet nur minimale Textgestaltungsm�glichkeiten. Durch klicken des Speichern-Symbols werden die Texte in der Datenbank gespeichert und mit den Koordinaten des Kartenpunktes verkn�pft.

#### /F2 Reisen ansehen
Die Reisen werden anhand der Reisenamen aufgelistet und angezeigt. So kann der Benutzer ausw�hlen, welche Reise er n�her anschauen m�chte. Durch einen Klick auf den Reisenamen wird die Reise dargestellt.
##### /F2110/ Reise darstellen
Um die ganze Reise darzustellen, werden aus der Datenbank verschiedene Eintr�ge ausgelesen. Es werden dazu alle Kartenpunkte und die Informationen �ber die Vektoren ben�tigt, um die Punkte graphisch zu verbinden.
##### /F2120/ Kartenpunkte anzeigen
Um die Kartenpunkte anzuzeigen, werden die Koordinaten aus der Datenbank gelesen und mit Hilfe der Google Maps API auf der Karte dargestellt.
##### /F2130/ Reiseroute darstellen
Die Kartenpunkte werden mit Vektoren verbunden. Dazu werden die Koordinaten der zu verbindenden Kartenpunkte aus der Datenbank ausgelesen und mittels Google Maps API auf der Karte dargestellt. F�r den Benutzer ist dadurch die Reiseroute ersichtlich.
##### /F2140/ Vorschau darstellen
Sobald die Reise komplett dargestellt wird, kann der Benutzer auf einen beliebigen Kartenpunkt klicken. Sofort wird eine kleine Vorschau angezeigt, welche Bilder im Kleinformat oder die ersten Zeilen von Texten enth�lt. Im Hintergrund werden die Datenbankeintr�ge, welche mit den Koordinaten des Kartenpunktes verkn�pft sind, ausgelesen. Die darin enthaltenen Bilder werden dargestellt, die Texte werden so gek�rzt, dass sie in der Vorschau darstellbar sind.
##### /F2160/ Texte anzeigen
Die Texte werden im selben Fenster wie die Bilder dargestellt. Der Benutzer kann sie auch direkt in der Vorschau anw�hlen und anzeigen lassen, wodurch sich ein neues Fenster �ffnet, in welchem alle Bilder und Texte dieses Kartenpunktes nach der Reihenfolge des Uploads untereinander dargestellt werden. 
F�r den Benutzer macht es keinen Unterschied, ob er in der Vorschau ein Bild oder einen Text ausgew�hlt hat. Die Galerie beinhaltet in beiden F�llen sowohl die Bilder als auch die Texte des Kartenpunktes.

#### /F3 Benutzerverwaltung
##### /F3110/ Login
Die Benutzerverwaltung wird f�r den Benutzer sehr einfach gehalten. Auf der Startseite gibt es ein Login, mit welchem sich der Benutzer anmelden kann. Dazu ben�tigt er einen Benutzernamen und ein Passwort. Der eingegebene Benutzername muss in der Datenbank existieren, das eingegebene Passwort muss mit dem in der Datenbank gespeicherten, zum entsprechenden Benutzer geh�renden, verschl�sselten Passwort �bereinstimmen. Ist das der Fall, wird f�r den Benutzer eine Session erstellt, mit welcher er Zugriff auf seine Reisen erh�lt.
##### /F3120/ Benutzer erstellen
Damit sich ein Benutzer einloggen kann, braucht er ein Benutzerkonto. Dazu gibt es ein Formular, in welchem er eine E-Mail-Adresse und ein Wunschpasswort angeben muss. Das Passwort muss zur Sicherheit doppelt angegeben werden, um Tippfehler des Benutzers abzufangen.
 
### Nicht-Funktionale Anforderungen
#### /R0500/ Gebrauchsf�higkeit (Usability)
Die Webseiten m�ssen durch den Benutzer, welcher dem Benutzerprofil entspricht, ohne weitere Hilfe verwendet werden k�nnen.
#### /R0510/ Fehlertoleranz
Hinweise und Fehlermeldungen m�ssen f�r den Benutzer verst�ndlich formuliert sein und eine Hilfestellung zur Probleml�sung beinhalten.
#### /R0520/ Sprache + l�nderspezifische Einstellungen
Die Webseiten sind in deutscher Sprache (Schweiz) verfasst, verwenden den Zeichensatz UTF-8 und die Schweiz-spezifischen Einstellungen von Datum, Zeit, Zahlen und W�hrung.
#### /R0530/ Zielplattform (Server)
Die Web-Applikation muss eine MySQL-Datenbank verwenden. 
#### /R0540/ Zielplattform (Client)
Die Webseiten werden in der aktuellsten freigegebenen Version des Google Chrome korrekt dargestellt.
#### /R0550/ Werkzeuge zur Entwicklung
Als Projektmanagement-Tool und zur Verwaltung des Sourcecode und der Dokumente soll ein Versionierungstool (z.B. SVN, GitHub) verwendet werden.
#### /R0560/ Robustheit
Auch nach einem Neustart des virtuellen Servers muss die Webseite voll funktionsf�hig sein.
#### /R0570/ Testbarkeit
F�r die Durchf�hrung der Tests und der Abnahme m�ssen sinnvolle Testdaten in gen�gendem Umfang zur Verf�gung gestellt werden.
#### /R0580/ Google Maps API
F�r die Darstellung und Verwaltung der Kartendaten wird die Google Maps API verwendet. Bis 25'000 Zugriffe pro Tag ist die Verwendung der Google Maps API kostenlos. Die Suchfunktion der Karte wird ebenfalls durch die Google Maps API zur Verf�gung gestellt.
