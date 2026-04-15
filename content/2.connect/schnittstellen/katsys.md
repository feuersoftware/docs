---
title: Katsys
description: Einsatzalarmierung und Fahrzeugstatus aus dem Katsys-Leitstellensystem in FeuerSoftware Connect einbinden
---

# Katsys-Integration

Die Katsys-Integration verbindet das Leitstellensystem **Katsys** mit FeuerSoftware Connect. Eingehende Alarme werden automatisch als Einsätze in Connect angelegt, und Fahrzeugstatusänderungen aus dem TETRA-Funk werden in Echtzeit übertragen.

---

## Funktionsumfang

| Funktion | Verfügbar |
|---|---|
| Einsätze automatisch anlegen | ✅ |
| Einsatzdaten (Stichwort, Adresse, Freitext) | ✅ |
| GPS-Koordinaten am Einsatzort | ✅ |
| Fahrzeugstatus (TETRA-Statusmeldungen) | ✅ |
| Alarmierung mehrerer Standorte | ✅ |
| Fahrzeugpositionen (GPS-Tracking) | ❌ |

---

## Einrichtung

Die Einrichtung der Katsys-Integration erfolgt durch den **FeuerSoftware Support**. Bitte wende dich für die Aktivierung an unser Support-Team.

Folgende Informationen werden für die Einrichtung benötigt:

- **Connect API-Key** des Standorts oder der Organisation (zu finden im Connect Portal unter Schnittstellen → Public API)
- **Zugangsdaten von Katsys** – Master Token, Sub Token und Client-Zertifikat (werden von Katsys bereitgestellt)

---

## Übertragene Einsatzdaten

Bei einem eingehenden Alarm werden folgende Felder nach Connect übertragen:

| Connect-Feld | Beschreibung |
|---|---|
| **Stichwort** | Einsatzstichwort / Schlagwort |
| **Sachverhalt** | Freitext / Bemerkung |
| **Adresse** | Straße, Hausnummer, PLZ, Ort/Ortsteil |
| **GPS-Position** | Koordinaten am Einsatzort (automatisch umgerechnet) |
| **Zusatzfelder** | Objekt, Einsatznummer, Einsatzmittel, Schleifen u. a. |

---

## Fahrzeugstatus

Statusmeldungen aus dem TETRA-Funk (z. B. Status 1–9) werden anhand der **ISSI-Nummer** des Funkgeräts dem entsprechenden Fahrzeug in Connect zugeordnet.

> **Voraussetzung:** Das Fahrzeug muss in Connect mit der korrekten ISSI als Funk-ID hinterlegt sein.

---

## Mehrere Standorte alarmieren

Wenn ein Alarm mehrere Einheiten verschiedener Connect-Standorte betrifft, kann ein automatisches Routing eingerichtet werden. Dabei wird der Einsatz anhand der im Alarm enthaltenen Schleifen-Bezeichnungen an die jeweiligen Standorte weitergeleitet. Die Konfiguration übernimmt der FeuerSoftware Support.

---

## Hinweise

- Die Verbindung zur Katsys-Cloud wird bei einem Verbindungsabbruch automatisch wiederhergestellt.
- Testalarme werden wie reguläre Einsätze verarbeitet. Über die [automatische Datenlöschung](../12_organisationseinstellungen#automatisches-datenlöschen) in Connect können Probealarme automatisch entfernt werden.
