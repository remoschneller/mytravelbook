//Initialisiert die MongoDB 
import { Mongo } from 'meteor/mongo';

console.log("Create Databases");

//Erzeut die Tabellen der Datenbank
Coordinates = new Mongo.Collection('coordinate');
Journeys = new Mongo.Collection('journeys');

console.log("DBs Created");
