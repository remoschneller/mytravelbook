//Stellt sicher, dass das main.html vorgängig geladen wird
import './main.html';

// Ein Helpers-Template, welches alle Journeys zurückgibt
Template.addJourneyForm.helpers({
	'getjourneys': function () {
		var activeUser = Meteor.userId();
		return Journeys.find({ createdBy: activeUser }).fetch();
	}
});


//Der eingegebene Reisename wird per Klick auf den Button in die Datenbanktabelle Journeys geschrieben.
Template.addJourneyForm.events({
	//Klick auf Submit Button
	'submit form': function (event) {
		var activeUser = Meteor.userId();
		//Verhindert das automatische Neuladen der Website durch den Browser
		event.preventDefault();
		//Name der neuen Reise auslesen
		var newJourney = event.target.journeyName.value;

		console.log('Neue Reise hinzufügen ' + newJourney);

		//Reise in DB speichern
		Journeys.insert({
			createdBy: activeUser,
			newJourney
		});

		//Das Eingabefeld wird nach dem Eintragen wieder leer
		event.target.journeyName.value = "";
	},

	//Wenn man die Reise im Dropdown Menü ändert, werden nur die Marker angezeigt, welche zu der Reise gehören.
	"change #journey-select": function (event, template) {
		//aktuelle Reise auslesen
		selectedJourneyField = $(event.currentTarget).val();
		console.log("Ausgewählte Reise: " + selectedJourneyField);

		//Methode, welche die aktuell angezeigten Marker löscht
		clearMarkers();
		//Setzt die start Markervariable wieder auf null
		startCoordinate = null;

		/*Sucht in der Datenbank bei der aktuell ausgewählten Reise den letzten Marker.
		Wird dieser gefunden, wird er der Variable "startCoordinate" übergeben.
		Falls die Reise noch keine Marker hat, bleibt er auf null, da der Reise noch keine Marker hinzugefügt wurden.
		*/
		lastCoordinate = Coordinates.find({ travelName: selectedJourneyField }).fetch();
		if (lastCoordinate != null && lastCoordinate.length > 0) {
			startCoordinate = lastCoordinate[lastCoordinate.length - 1];
		}

		//Methode, die Marker und Linien der gewählten Reise zeichnen
		drawMarkerAndLines(selectedJourneyField);
	}
});

//Setzt alle im Array vorhandenen Marker auf die Map und zeichnet die Polylines dazwischen
function setMapOnAll(map) {
	//Zeichnet alle Marker
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
	//Zeichnet die Verbindungslinien
	for (var i = 0; i < polylines.length; i++) {
		polylines[i].setMap(map);
	}
}

// Löscht die Marker aus der Map, behält sie aber im Array der Reise.
clearMarkers = (function clearMarkers() {
	console.log("Marker und Polylines entfernen");
	setMapOnAll(null);
});

//Zeichnet die Marker und Linien auf die Map
drawMarkerAndLines = function drawMarkerAndLines(selectedJourney) {
	//Sucht die Einträge in der Coordinates Tabelle mit dem Suchfilter "travelName".
	var foundTravels = Coordinates.find({ travelName: selectedJourney }).fetch();

	console.log("Anzahl gefundener Marker: " + foundTravels.length);
	console.log("Ausgewählte Marker Zeichnen");

	//Geht durch das gefundene Array der Einträge und setzt die Marker
	for (var i = 0; i < foundTravels.length; i++) {
		console.log("Marker: " + foundTravels[i]);
		//Marker hinzufügen
		addMarker(foundTravels[i]);
		//Wenn es mehr als einen Marker gibt und es nicht der erste ist werden sie mit Polylines verbunden
		if (foundTravels.length >= 2 && i >= 1) {
			//Polyline hinzufügen
			addPolyline(foundTravels[i - 1], foundTravels[i]);
		}
	}
}

