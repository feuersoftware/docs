---
title: Fireboard
description: Einsatz- und Fahrzeugstatusdaten automatisiert an das Fireboard-Portal übermitteln
---

# Fireboard

Über die Fireboard-Schnittstelle können Einsatz- und Fahrzeugstatusdaten vom Einsatzmonitor automatisiert an das Fireboard-Portal gesendet werden.

Die Konfiguration erfolgt im Connect Portal auf Standortebene unter **Seitenleiste → Schnittstellen → Fireboard-Schnittstelle**.

---

## Konfiguration

### Aktiviert

Aktiviert oder deaktiviert die Schnittstelle für diesen Standort. Ist die Schnittstelle deaktiviert, werden keine Daten an Fireboard übertragen.

> **Hinweis:** Mindestens einer der beiden Auth.-Keys (Einsatz oder Status) muss gesetzt sein, damit die Schnittstelle gespeichert werden kann.

---

### Einsatz-Upload Vers.

Legt das Format und den Umfang der übertragenen Einsatzdaten fest.

| Version | Format | Übertragene Daten |
|---|---|---|
| Version 1.00 | XML | Basisdaten: Stichwort, Adresse, Koordinaten, Alarmzeit |
| Version 1.01 | XML | Erweitert: + Einsatzmittel, Anruferdaten, Custom Properties |
| Version 1.10 | JSON | Basisdaten (JSON-Format) |
| Version 1.11 | JSON | Erweitert: + Einsatzmittel, Anruferdaten, Custom Properties |

**Empfehlung:** Version 1.11 bietet den größten Datenumfang im modernen JSON-Format.

> **Wichtig:** Version 1.01 unterstützt **keinen Fahrzeugstatus-Upload**. Wer Fahrzeugstatus übertragen möchte, muss Version 1.00, 1.10 oder 1.11 verwenden.

---

### Einsatz-Upload Auth.-Key

Der API-Schlüssel für die Übertragung von Einsatzdaten. Dieser Schlüssel wird von Fireboard bereitgestellt.

- Ist das Feld leer, werden **keine Einsatzdaten** übertragen.
- Wird der Key von Fireboard als ungültig zurückgewiesen, setzt Connect den Key automatisch auf `Invalid` und stoppt weitere Übertragungen. In diesem Fall muss ein neuer gültiger Key eingetragen werden.

---

### Status-Upload Auth.-Key

Der API-Schlüssel für die Übertragung von Fahrzeugstatusdaten. Dieser Schlüssel wird von Fireboard bereitgestellt und kann identisch mit dem Einsatz-Key oder ein separater Key sein.

- Ist das Feld leer, werden **keine Statusdaten** übertragen.
- Auch hier gilt: Bei Ablehnung durch Fireboard wird der Key automatisch auf `Invalid` gesetzt.

> **Hinweis:** Fahrzeugstatus wird für **alle Fahrzeuge der gesamten Organisation** übertragen, sobald die Schnittstelle an mindestens einem Standort aktiviert ist. Einsätze hingegen werden nur für den jeweiligen Standort übertragen, an dem die Schnittstelle aktiviert ist.

---

### Speichern

Übernimmt alle Einstellungen. Änderungen werden erst nach dem Speichern wirksam.

---

## Export-Funktionen

Über die Schaltflächen oben rechts können Stammdaten als CSV-Datei für den Import in Fireboard heruntergeladen werden:

| Schaltfläche | Inhalt |
|---|---|
| **Fahrzeuge** | Funkrufname, Stärke, Bezeichnung, ISSI, OPTA, FMS, Gerätekennung |
| **Stichworte** | Einsatzstichwort, Alarmnachricht |
| **Benutzer** | Name (mit Funktionskürzeln) |

---

## Logs

Im unteren Bereich der Seite werden alle Übertragungen protokolliert. Die Tabelle kann nach Endpunkt, Nachricht und Status Code gefiltert werden.

| Spalte | Beschreibung |
|---|---|
| **Zeitstempel** | Datum und Uhrzeit der Übertragung |
| **Endpunkt** | `/api?call=operation_data` (Einsatz) oder `/api?call=status_data` (Status) |
| **Dauer** | Antwortzeit der Fireboard-API |
| **Nachricht** | HTTP-Statusmeldung (z. B. `OK`) |
| **Status Code** | HTTP-Statuscode (`200` = Erfolg) |
| **Anfrage** | Der gesendete Inhalt (XML oder JSON) |
| **Antwort** | Die Antwort von Fireboard (`{"status":"ok"}` oder Fehlermeldung) |

---

## Häufige Probleme

| Problem | Mögliche Ursache | Lösung |
|---|---|---|
| Keine Logs sichtbar | Schnittstelle nicht aktiviert oder Auth.-Key fehlt | Aktivieren und Key eintragen |
| Keine Logs bei Version 1.01 und Fahrzeugstatus | V1.01 unterstützt keinen Status-Upload | Version auf 1.00, 1.10 oder 1.11 wechseln |
| Auth.-Key zeigt `Invalid` | Fireboard hat den Key als ungültig zurückgewiesen | Neuen Key von Fireboard einholen und eintragen |
| Einsätze werden nicht übertragen | Schnittstelle am falschen Standort aktiviert | Schnittstelle am Standort des Einsatzes aktivieren |
| Fahrzeugstatus wird nicht übertragen | Kein Status-Upload Auth.-Key gesetzt | Status-Key eintragen und speichern |
