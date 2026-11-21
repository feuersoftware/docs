---
title: rescueTABLET
description: Einsatzdaten aus FeuerSoftware Connect an rescueTABLET weiterleiten – Einrichtung, Funktionsumfang und Fehlerbehebung
---

# rescueTABLET

FeuerSoftware Connect bietet eine Schnittstelle zu [rescueTABLET](https://rescuetablet.de/). Über diese Schnittstelle können Einsatzdaten von Connect an rescueTABLET weitergeleitet werden. Für die Einrichtung ist ein API-Key von rescueTABLET erforderlich.

---

## Einrichtung

Im Connect Portal als Standort- oder Organisationsadministrator anmelden, den entsprechenden Standort wählen und auf **Schnittstellen → rescueTABLET** navigieren.

1. Schnittstelle über die Checkbox **„Aktiviert"** einschalten
2. API-Schlüssel von rescueTABLET in das Feld **„Authentifizierungsschlüssel"** eintragen
3. In das Feld **„Group-ID"** die MissionGroup von rescueTABLET eintragen

Eine MissionGroup ist eine Einheit, für die der Einsatz gilt – das kann eine ganze Stadt, eine Einheit, ein einzelnes Fahrzeug oder eine einzelne Person sein. In der Regel wird pro Orts- bzw. Stadtteilwehr eine MissionGroup verwendet.

> **Hinweis:** API-Key und Group-ID finden Sie im **rescueTABLET-Datenportal**. Wenn Sie die Daten dort nicht einsehen können, wenden Sie sich bitte an den rescueTABLET-Support.

---

## Funktionsumfang

Connect überträgt an rescueTABLET folgende Daten:

- Einsatzdaten inkl. Zusatzinformationen
- Einsatzupdates
- Fahrzeugzuordnungen
- Statusupdates
- Lagemeldungen

---

## Fehlermeldungen

| Fehler | Ursache |
|---|---|
| `403 Forbidden` | Group-ID falsch, oder API-Key hat keine Schreibrechte in der gewählten Gruppe |
| `401 Unauthorized` | Authentifizierungsschlüssel falsch |

---

## Automatische Deaktivierung

Scheitern die Aufrufe an rescueTABLET dauerhaft, deaktiviert Connect die Schnittstelle automatisch – allerdings nur, wenn rescueTABLET die Aufrufe mit `401 Unauthorized` oder `403 Forbidden` ablehnt (siehe [Fehlermeldungen](#fehlermeldungen)). Andere Fehler, etwa eine kurzzeitige Nichterreichbarkeit, führen nicht zur Deaktivierung. Deaktiviert wird erst, wenn

- seit **mindestens 3 Tagen** kein einziger Aufruf erfolgreich war **und**
- die Fehler an **mindestens 3 verschiedenen Tagen** aufgetreten sind.

Ein einzelner erfolgreicher Aufruf oder das Speichern der Einstellungen setzt die Prüfung zurück. Die Prüfung läuft täglich um 08:00 Uhr.

Nach der Deaktivierung erhalten die **Organisations- und Standortadministratoren** eine E-Mail „rescueTABLET-Schnittstelle automatisch deaktiviert" mit der letzten Fehlermeldung. Bis die Schnittstelle wieder aktiv ist, sendet Connect keine Daten mehr an rescueTABLET.

**Wieder einschalten:** Ursache anhand der Fehlermeldung beheben (stimmen Authentifizierungsschlüssel und Group-ID?), die Schnittstelle in den Einstellungen wieder **aktivieren und speichern**. Scheitern die Aufrufe weiterhin, wird sie nach einigen Tagen erneut deaktiviert.

---

## Kontakt rescueTABLET

Bei Fragen zu Zugangsdaten oder zum Datenportal: [Kontaktseite von rescueTABLET](https://www.rescuetablet.de/index.php/kontakt)
