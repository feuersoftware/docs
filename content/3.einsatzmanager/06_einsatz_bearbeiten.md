# Einsatz bearbeiten & abschließen

Die Bearbeitungsseite eines Einsatzes ist über die Schaltfläche **„Bearbeiten"** in der Kopfzeile der Einsatzdetailseite erreichbar.

![Screenshot: Einsatz-Bearbeitungsformular](/images/einsatzmanager/06_einsatz_bearbeiten.png)

---

## Bearbeitbare Felder

Alle beim Anlegen erfassten Felder können nachträglich geändert werden:

- Stichwort, Priorität, Einsatznummer, Sachverhalt
- Standort / Wache
- RIC
- Start- und Endzeit
- Adresse und Koordinaten (inkl. Kartenmarker)
- Melder / Anrufer
- Zusatzinformationen (Schlüssel-Wert-Paare)

---

## Einsatz abschließen

Über die Schaltfläche **„Einsatz abschließen"** wird der Einsatz als beendet markiert. Es öffnet sich ein Bestätigungsdialog.

Nach dem Abschließen:
- Der Einsatz erscheint in der Einsatzübersicht unter dem Filter **„Abgeschlossen"**
- Der Zeitstempel des Abschlusses wird automatisch gesetzt
- Die Laufzeitberechnung wird eingefroren

> **Hinweis:** Abgeschlossene Einsätze ohne gesetzten Endstempel können nachträglich über diese Seite mit einer Endzeit versehen werden.

---

## Zeitleiste

Im oberen Bereich der Bearbeitungsseite wird die Einsatzzeitleiste angezeigt:

| Feld | Beschreibung |
|---|---|
| Gestartet | Zeitpunkt der Einsatzerstellung |
| Dauer | Laufende Berechnung seit Einsatzbeginn |
| Letzte Aktualisierung | Zeitpunkt der zuletzt gespeicherten Änderung |

---

## Änderungen speichern

- **„Speichern"** – übernimmt alle Änderungen und kehrt zur Einsatzdetailseite zurück
- **„Abbrechen"** – verwirft alle Änderungen und kehrt zur Einsatzdetailseite zurück

Jede Speicherung erzeugt automatisch einen Protokolleintrag vom Typ **„Einsatz aktualisiert"** mit Zeitstempel und Benutzerattribution.
