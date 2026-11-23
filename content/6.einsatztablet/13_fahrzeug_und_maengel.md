---
title: Fahrzeug & Mängel
description: Fahrzeugstatus setzen, Fahrzeugwerte und Warnregeln anzeigen sowie Mängelmeldungen mit Fotos im EinsatzTablet erfassen und verfolgen
---

# Fahrzeug & Mängel

---

## Fahrzeugdaten

**Fahrzeug → Fahrzeugdaten** (Seitentitel „Fahrzeugzustand")

![Screenshot: Fahrzeugdaten mit Fahrzeugwerten und „Fahrzeugstatus setzen"](/images/einsatztablet/23_fahrzeugdaten.png)

### Fahrzeugstatus setzen

Über das Tastenfeld **„Fahrzeugstatus setzen"** meldet die Besatzung den Funkstatus des Fahrzeugs – auch ohne geöffneten Einsatz:

| Status | Bedeutung |
|---|---|
| 1 | frei Funk |
| 2 | frei Wache |
| 3 | Anfahrt |
| 4 | an E-Stelle |
| 5 | Sprechwunsch |
| 6 | nicht bereit |

Status 3 führt – wenn eingestellt – automatisch zur [Anfahrt](/einsatztablet/04_alarmierung#status-3-automatisch-zur-anfahrt). Ohne Netz wird der Status nachgesendet („Keine Verbindung – Status wird nachgesendet"); ist er bis dahin veraltet, verwirft die App ihn und weist darauf hin, den Status über Funk zu melden.

Ob der Status am Tablet gesetzt werden darf, wird unter [Setup → Anzeige & Filter → „Funkstatus manuell setzen erlauben"](/einsatztablet/15_setup#anzeige-filter) festgelegt (Standard: aus).

### Fahrzeugwerte

Ist das Fahrzeug mit einem Bordsystem verbunden, zeigt die Seite dessen Werte – z. B. Tankstand, Bordspannung oder Kilometerstand – gruppiert und mit Zeitpunkt der letzten Aktualisierung. Über die Fahrzeugauswahl lassen sich auch die Werte anderer Fahrzeuge des Standorts ansehen.

- **„Warnregeln"** zeigt die in Connect hinterlegten [Regeln für Gerätewarnungen](/connect/06_fahrzeuge#regeln-für-gerätewarnungen) – liegt ein Wert außerhalb des Normalbereichs, wird automatisch eine Mängelmeldung erzeugt
- **„Fahrzeugdaten neu laden"** aktualisiert die Anzeige

Die Fahrzeugdaten lassen sich unter [Setup → Anzeige & Filter → „Fahrzeugdaten anzeigen"](/einsatztablet/15_setup#anzeige-filter) ausblenden. Damit entfällt auch das Tastenfeld „Fahrzeugstatus setzen" außerhalb eines Einsatzes – im Einsatz bleibt der Funkstatus in der [Anfahrt](/einsatztablet/06_anfahrt#funkstatus) setzbar.

---

## Mängel

**Fahrzeug → Mängel** (oder Schnellaktion **„Mängelmeldung erstellen"**)

Die **Mängelmeldungen** des eigenen Fahrzeugs – oder aller Fahrzeuge – mit Status:

| Status | Bedeutung |
|---|---|
| **OFFEN** | Neu gemeldet |
| **IN PRÜFUNG** | Wird geprüft |
| **IN BEARBEITUNG** | Behebung läuft |
| **PAUSIERT** | Vorübergehend zurückgestellt |
| **BEHOBEN** | Erledigt |
| **ABGELEHNT** | Kein Mangel bzw. abgelehnt |

Filter: **„Mein Fahrzeug"** oder **„Alle Fahrzeuge"** sowie die Status-Schaltflächen darunter – behobene Mängel sind standardmäßig ausgeblendet. Ein Tipp auf einen Mangel zeigt die Details; dort lassen sich auch nachträglich Fotos und Dateien anhängen, der Mangel **bearbeiten** oder über **„Als behoben markieren"** direkt abschließen.

![Screenshot: Mängelmeldungen mit Details](/images/einsatztablet/24_maengel.png)

### Neue Mängelmeldung

1. **„Neu"** antippen
2. **Fahrzeug** prüfen (vorbelegt mit dem eigenen; ein anderes Fahrzeug wird mit „Anderes Fahrzeug" gekennzeichnet), **Titel**, **Priorität** und **Beschreibung** eingeben
3. Optional unter **„Weitere Angaben"**: Kategorie, Kilometerstand, Zuständig, Meldender
4. **Fotos** hinzufügen
5. **„Speichern"**

![Screenshot: Neue Mängelmeldung für ein anderes Fahrzeug](/images/einsatztablet/25_neue_maengelmeldung.png)

Die Mängelmeldung erscheint sofort im [Connect Portal](/connect/10_defektberichte). Offene Mängel des eigenen Fahrzeugs werden zusätzlich in der [Einsatzübersicht](/einsatztablet/05_uebersicht#bekannte-mängel) angezeigt.

> Die Kategorie lässt sich nach dem Anlegen nicht mehr ändern.

Mängel lassen sich unter [Setup → Anzeige & Filter → „Mängelmeldungen anzeigen"](/einsatztablet/15_setup#anzeige-filter) ausblenden.
