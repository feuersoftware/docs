---
title: Alamos FE2
description: Einsatzdaten aus Eurofunk ELDIS BY Leitstellen über Alamos FE2 und MQTT an FeuerSoftware Connect übermitteln
---

# Alamos FE2

Die Alamos-FE2-Schnittstelle ermöglicht die Übertragung von Einsatzdaten aus Leitstellen, die das System **Eurofunk ELDIS BY** betreiben. Alamos FE2 verbindet sich mit der eMID-Schnittstelle des Leitsystems, verschlüsselt die Daten doppelt (TLS-Transport + AES-Datenverschlüsselung) und übermittelt sie über einen MQTT-Dienst an die alarmierten Standorte in FeuerSoftware Connect.

---

## Voraussetzungen

| Voraussetzung | Beschreibung |
|---|---|
| **Leitsystem** | Eurofunk ELDIS BY mit bereits installiertem Alamos FE2 |
| **Public Connect Schnittstelle** | Auf Standortebene aktiviert |
| **Übermittlung an Support** | Fünftonfolgen, Subadressierungen, GSSI (bei TETRA-Alarmierung) und Dienststellendaten |

---

## Übertragene Daten

- Stichwort und Einsatzart (nach ABek-Standard)
- Einsatzdetails und Sachverhalt
- Einsatzadresse und Koordinaten
- Objekt-Name/-Nummer und Meldernummer
- Alarmierte Schleifen und Dienststellen
- Alarmierte Fahrzeuge und Einheiten (inkl. externer Kräfte und Rettungsdienst)
- Statusmeldungen
- Freie Felder (ABek, What3Words etc.)
- Echtzeit-Updates zu laufenden Einsätzen

---

## Einrichtung

### Für die Leitstelle

- Zugangsdaten und Verschlüsselungszertifikate mit FeuerSoftware austauschen
- Übertragene Datenfelder abstimmen
- Schleife- und Dienststellenzuordnung erfolgt aktuell in Abstimmung mit dem FeuerSoftware-Support

**Kontakt:** info@feuersoftware.com

### Für Connect-Kunden

1. **Public Connect Schnittstelle** auf Standortebene aktivieren (**Schnittstellen → Public API**)
2. **AAO** anlegen – bei Bedarf **Dynamische AAO** verwenden, um das übertragene RIC-Feld für selektive Alarmierung auszuwerten
3. **EinsatzMonitor** auf **Slave-Modus** umstellen

> **Hinweis:** Die Schnittstelle ist für FeuerSoftware-Kunden kostenlos. Die Einrichtung erfolgt in Abstimmung mit dem Support.
