---
title: Spekter FAS – Starkregenfrühwarnsystem
description: Alarme des Spekter Starkregenfrühwarnsystems über die Connect-Schnittstelle an Standorte als Einsatz oder News weiterleiten
---

# Spekter FAS – Starkregenfrühwarnsystem

Die Firma Spekter bietet ein Starkregenfrühwarnsystem, das über Sensoren im Gemeindegebiet Starkregenereignisse erkennt und frühzeitig warnt. Das System informiert Bürger und Einsatzkräfte über dreistufige Alarmmeldungen.

In Zusammenarbeit mit Spekter wurde eine Schnittstelle entwickelt, die solche Alarme zusätzlich an Feuersoftware Connect weiterleitet. Die Alarmmeldungen können an Standorte in Connect als **Einsatzalarmierung** oder **News** weitergeleitet werden und optional mit Sensordaten (Pegelstände) angereichert werden.

---

## Einrichtung

Die Einrichtung erfolgt im Connect Portal auf **Organisationsebene**:

**Connect Portal → Organisation → Schnittstellen → Starkregen**

Für die Einrichtung werden Zugangsdaten benötigt, die in der Regel von der Kommune oder dem Landkreis bereitgestellt werden, der das Starkregenfrühwarnsystem betreibt.

| Feld | Beschreibung |
|---|---|
| **E-Mail** | Benutzername in Form einer E-Mail-Adresse |
| **Passwort** | Zugehöriges Passwort |
| **Gemeindeschlüssel** | Amtlicher Gemeindeschlüssel der Kommune. Nachschlagen unter [statistikportal.de](https://www.statistikportal.de/de/gemeindeverzeichnis) |
| **Hinweis** | Optionaler Zusatztext, der in der News oder Alarmierung mit angezeigt wird |
| **Sensordaten in Benachrichtigung übernehmen** | Wenn aktiviert, werden aktuelle Pegelstände in der Benachrichtigung mit ausgegeben |

---

## Regeln

Über Regeln wird festgelegt, welcher Standort bei welcher Alarmstufe wie benachrichtigt werden soll.

1. Entsprechenden **Standort** auswählen
2. **Alarmstufe** wählen (1–3)
3. **Maßnahme** festlegen (Einsatz alarmieren oder News erstellen)
4. Speichern – für jeden Standort wiederholen

> **Wichtig:** Bei der Maßnahme „Einsatz alarmieren" wird die Alarmierung ausschließlich über Feuersoftware-Systeme versendet. Die Leitstelle hat davon in der Regel keine Kenntnis. Wir sehen dies kritisch und weisen ausdrücklich darauf hin, den Prozess zu prüfen und mit allen Verantwortlichen abzustimmen.

---

## Anzeige in Connect

Je nach Konfiguration erscheinen die Alarme als Einsatz oder News im Connect Portal und in der EinsatzApp. Der konfigurierte Hinweis sowie die Pegelstände werden als Text in die Benachrichtigung aufgenommen.
