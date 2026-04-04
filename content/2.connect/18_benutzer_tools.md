---
title: Benutzer-Tools (Export, Import, API)
description: Benutzerdaten exportieren, per CSV importieren und die Benutzer-API für Smart-Home-Integrationen verwenden
---

# Benutzer-Tools

---

## Excel-Export

Benutzerdaten lassen sich als Excel-Datei exportieren, um sie außerhalb des Portals zu bearbeiten, zu filtern oder auszuwerten.

1. **Seitenleiste → Benutzer**
2. Schaltfläche **„Export"** klicken
3. Excel-Datei herunterladen und in Microsoft Excel öffnen

Die Datei enthält alle Benutzer des Standorts oder der Organisation mit ihren Stammdaten. In Excel können die Daten nach beliebigen Feldern gefiltert und sortiert werden.

---

## CSV-Benutzerimport (Massenimport)

Das **CSV User Importer**-Tool ermöglicht den Massenimport von Benutzern in Connect über die öffentliche Schnittstelle. Nützlich bei der Ersteinrichtung einer Organisation oder nach Mitgliederwechseln.

### Download

[CSV User Importer herunterladen](https://feuersoftware.com/Download/tools/UserImporter.zip)

### Unterstützte Datenquellen

| Quelle | Beschreibung |
|---|---|
| **Allgemeine CSV-Datei** | Eigene CSV mit definiertem Aufbau |
| **Drägerware.ZMS Florix Hessen** | Erreichbarkeits-Report als CSV |
| **Fox112** | Excel-Liste aus dem Listengenerator |

### CSV-Dateiformat

- **Trennzeichen:** Komma (`,`)
- **Header** in der ersten Zeile erforderlich
- Reihenfolge der Spalten beliebig

**Unterstützte Felder:**

| Feldname | Beschreibung | Pflicht |
|---|---|---|
| `EMail` | E-Mail-Adresse | Ja |
| `FirstName` | Vorname | Nein |
| `LastName` | Nachname | Nein |
| `Street` | Straße | Nein |
| `HouseNumber` | Hausnummer | Nein |
| `ZipCode` | Postleitzahl | Nein |
| `City` | Stadt | Nein |
| `District` | Ortsteil | Nein |
| `PhoneNumber` | Mobiltelefon | Nein |
| `LandlineNumber` | Festnetz | Nein |
| `PagerIssi` | Pager-ISSI | Nein |
| `DeactivateAvailability` | Verfügbarkeit deaktivieren (`true`/`false`) | Nein |

Eine Beispieldatei `Beispiel.csv` liegt im Anwendungsverzeichnis.

### Importvorgang

1. Tool starten
2. CSV-Datei (oder Florix/Fox112-Export) laden
3. Daten in der Tabelle prüfen und ggf. anpassen
4. **Standort-Schlüssel** der öffentlichen Connect-Schnittstelle eintragen
   > **Wichtig:** Den Schlüssel des **Standorts** verwenden, nicht den der Organisation – sonst erscheint eine Fehlermeldung.
5. Import starten

**Hinweise:**
- Import-Geschwindigkeit: max. 1 Benutzer pro Sekunde (API-Limit)
- Eingeladene Benutzer erhalten eine E-Mail zur Kontoaktivierung – erst danach ist der Account aktiv
- Eine Protokolldatei `log.txt` im Anwendungsverzeichnis enthält Fehlerdetails

---

## Benutzer-API

Die Benutzer-API ermöglicht es, Rückmeldungen zu Einsätzen und die eigene Verfügbarkeit programmatisch über HTTP-Anfragen zu setzen – z. B. aus Smart-Home-Systemen oder Taster-Lösungen heraus.

> Anders als die öffentliche Connect-Schnittstelle kann die Benutzer-API nur auf **persönliche Daten** des jeweiligen Benutzers zugreifen, nicht auf Standort- oder Organisationsdaten.

### API-Schlüssel erstellen

1. Im Connect Portal anmelden
2. **Seitenleiste → Smart Home → Benutzer-API**
3. **„Neu"** klicken
4. Beschreibung und Verwendungszweck eingeben
5. Schlüssel wird angezeigt und kann jederzeit wieder abgerufen werden

### Einsatzrückmeldung via API

Setzt den eigenen Alarmierungsstatus für den aktuellsten Einsatz (max. 2 Stunden alt).

```
GET https://connectapi.feuersoftware.com/interfaces/public/user/userstatus
  ?token=<TOKEN>
  &status=<STATUS>
  &siteID=<STANDORT-ID>        (optional)
  &driveTimeSeconds=<SEKUNDEN> (optional)
```

**Status-Werte:**

| Wert | Bedeutung |
|---|---|
| `coming` | Komme |
| `notComing` | Komme nicht |
| `comingLater` | Komme später |

**Rückgaben:**
- `HTTP 204` – Erfolgreich
- `HTTP 401` – Token ungültig
- `HTTP 404` – Benutzer nicht gefunden

### Verfügbarkeit via API

Setzt die allgemeine Verfügbarkeit des Benutzers.

```
GET https://connectapi.feuersoftware.com/interfaces/public/user/useravailability
  ?token=<TOKEN>
  &status=<STATUS>
  &lifeTimeDays=<TAGE> (optional – danach automatisches Zurücksetzen)
```

**Status-Werte:**

| Wert | Bedeutung |
|---|---|
| `available` | Verfügbar |
| `limitedAvailable` | Eingeschränkt verfügbar |
| `notAvailable` | Nicht verfügbar |

### Vollständige API-Dokumentation

Die vollständige API-Referenz ist unter [connectapi.feuersoftware.com/swagger](https://connectapi.feuersoftware.com/swagger/index.html) verfügbar.
