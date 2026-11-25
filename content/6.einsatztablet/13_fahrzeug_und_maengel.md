---
title: Fahrzeug & Mängel
description: Fahrzeugwerte und Warnregeln anzeigen sowie Mängelmeldungen mit Fotos im EinsatzTablet erfassen und verfolgen
---

# Fahrzeug & Mängel

---

## Fahrzeugdaten

**Fahrzeug → Fahrzeugdaten** (Seitentitel „Fahrzeugzustand")

![Screenshot: Fahrzeugdaten mit den Werten des Bordsystems](/images/einsatztablet/23_fahrzeugdaten.png)

> Der **Funkstatus** wird nicht mehr hier, sondern über den Status in der [Kopfzeile](/einsatztablet/03_aufbau_und_bedienung#funkstatus-in-der-kopfzeile) gesetzt – von jeder Ansicht aus. Dort stehen auch die letzten Statusänderungen des Fahrzeugs.

### Fahrzeugwerte

Ist das Fahrzeug mit einem Bordsystem verbunden, zeigt die Seite dessen Werte – z. B. Tankstand, Bordspannung oder Kilometerstand – gruppiert und mit Zeitpunkt der letzten Aktualisierung. Über die Fahrzeugauswahl lassen sich auch die Werte anderer Fahrzeuge des Standorts ansehen.

- **„Warnregeln"** zeigt die in Connect hinterlegten [Regeln für Gerätewarnungen](/connect/06_fahrzeuge#regeln-für-gerätewarnungen) – liegt ein Wert außerhalb des Normalbereichs, wird automatisch eine Mängelmeldung erzeugt
- **„Fahrzeugdaten neu laden"** aktualisiert die Anzeige

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
