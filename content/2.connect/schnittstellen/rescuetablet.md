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

## Kontakt rescueTABLET

Bei Fragen zu Zugangsdaten oder zum Datenportal: [Kontaktseite von rescueTABLET](https://www.rescuetablet.de/index.php/kontakt)
