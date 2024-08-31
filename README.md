
# Mongoose Node.js CRUD Anwendung

## Übersicht

Diese Anwendung ist eine einfache CRUD (Create, Read, Update, Delete) Applikation, die mit Node.js, Express und MongoDB/Mongoose erstellt wurde. Sie ermöglicht das Verwalten von Benutzerdaten (Name und E-Mail) über eine Weboberfläche. Die Daten werden in einer MongoDB-Datenbank gespeichert.

## Dateistruktur

Die Projektdateien sind wie folgt organisiert:

```
├── app.js            # Hauptserverdatei für die Express-Anwendung
├── index.html        # HTML-Datei für das Frontend
└── package.json      # Enthält die Projektinformationen und Abhängigkeiten
```

## Installation

### Voraussetzungen

Stelle sicher, dass die folgenden Softwarekomponenten auf deinem System installiert sind:

- [Node.js](https://nodejs.org/) (inkl. npm)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installationsanleitung

1. **Repository klonen**:
   ```bash
   git clone https://github.com/BitSparkCode/Mongoose-Node-JS.git
   cd Mongoose-Node-JS
   ```

2. **Abhängigkeiten installieren**:
   Installiere die notwendigen npm-Pakete mit folgendem Befehl:
   ```bash
   npm install
   ```

3. **MongoDB starten**:
   Stelle sicher, dass der MongoDB-Server läuft. Dies kann über die Kommandozeile oder MongoDB Compass geschehen.

4. **Anwendung starten**:
   Starte die Node.js-Anwendung mit folgendem Befehl:
   ```bash
   node app.js
   ```

5. **Anwendung im Browser öffnen**:
   Öffne deinen Webbrowser und navigiere zu [http://localhost:3000](http://localhost:3000), um die Anwendung zu verwenden.

## Nutzung

Nach dem Start der Anwendung kannst du Benutzer erstellen, anzeigen, aktualisieren und löschen. Die Änderungen werden direkt in der MongoDB-Datenbank gespeichert.
