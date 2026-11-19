---
title: Webhooks (Smart Home)
description: Benutzer- und Standort-Webhooks in Connect einrichten, um bei Alarm externe Systeme wie Smart-Home-Lösungen oder eigene Skripte anzusteuern
---

# Webhooks (Smart Home)

Webhooks ermöglichen es, externe Systeme automatisch zu benachrichtigen, wenn in Connect ein bestimmtes Ereignis eintritt – z. B. beim Eingang eines Alarms. Dabei wird eine URL aufgerufen, die optional mit Einsatzinformationen als Variablen befüllt werden kann.

Connect stellt Webhooks auf **Benutzerebene** und **Standortebene** bereit.

---

## Benutzer-Webhook

Kann von jedem Benutzer selbst eingerichtet werden.

**Connect Portal → Smart Home → Benutzer-Webhook**

Typischer Einsatzfall: Smart Home Geräte zuhause bei Alarmierung des Benutzers schalten (z. B. Licht einschalten).

> **Wichtig:** Die URL muss aus dem Internet erreichbar sein.

### Verfügbare Variablen

| Variable | Beschreibung |
|---|---|
| `{Kategorie}` | Einsatzkategorie |
| `{Standort}` | Connect-Standort, der den Einsatz empfangen hat |
| `{Stichwort}` | Einsatzstichwort |
| `{Stichwortübersetzung}` | Einsatzstichwort nach Übersetzung |
| `{Alarmgruppen}` | Alarmierte Alarmgruppen |
| `{Infogruppen}` | Informierte Alarmgruppen |

> **Hinweis:** Weitere Variablen (z. B. Adresse) sind auf Benutzerebene aus Datenschutzgründen nicht verfügbar.

---

## Standort-Webhook

Kann nur von einem **Standortadministrator** angelegt werden.

**Connect Portal → Schnittstellen → Standort-Webhook**

Typische Einsatzfälle: Tor der Fahrzeughalle öffnen, Licht in der Wache einschalten, Homepage-Info aktualisieren.

> **Wichtig:** Auch beim Standort-Webhook muss die URL aus dem Internet erreichbar sein. Ein Ziel, das nur im lokalen Netz der Wache erreichbar ist, kann Connect nicht aufrufen.

### Verfügbare Variablen

| Variable | Beschreibung |
|---|---|
| `{Kategorie}` | Einsatzkategorie |
| `{Stichwort}` | Einsatzstichwort |
| `{Stichwortübersetzung}` | Einsatzstichwort nach Übersetzung |
| `{Standort}` | Connect-Standort |
| `{Sachverhalt}` | Sachverhalt / Meldebild |
| `{Adresse}` | Vollständige Adresse des Einsatzortes |
| `{Straße}` / `{Street}` | Straße |
| `{Stadt}` / `{City}` | Stadt |
| `{Stadtteil}` / `{District}` | Stadtteil |
| `{Hausnummer}` / `{Housenumber}` | Hausnummer |
| `{PLZ}` / `{ZIP-Code}` | Postleitzahl |
| `{Einsatz-ID}` | Connect Einsatz-ID |
| `{RIC}` | Alarmierte Einsatzmittel / Schleifen |
| `{Alarmgruppen}` | Alarmierte Alarmgruppen |
| `{Infogruppen}` | Informierte Alarmgruppen |
| `{Fahrzeuge}` | Alarmierte Fahrzeuge |
| `{Start}` | Zeitstempel Einsatzbeginn (RFC1123, z. B. `2009-06-15T13:45:30`) |
| `{End}` / `{Ende}` | Zeitstempel Einsatzende (RFC1123) |

### Auslöser

Beim Anlegen wird festgelegt, bei welchem Ereignis der Webhook ausgelöst wird:

| Auslöser | Wird ausgelöst … |
|---|---|
| **Bei Einsatz erstellt** | sobald ein Einsatz angelegt wird |
| **Bei Einsatz alarmiert** | sobald ein Einsatz alarmiert wird |
| **Bei Einsatz aktualisiert** | bei jeder Aktualisierung eines Einsatzes |
| **Bei Einsatz abgebrochen** | wenn ein Einsatz abgebrochen wird |
| **Bei Einsatz beendet** | wenn ein Einsatz beendet wird |
| **Bei Fahrzeugstatus-Änderung** | wenn ein Fahrzeug des Standorts einen neuen Status meldet |
| **Bei Fahrzeugposition-Änderung** | wenn ein Fahrzeug des Standorts eine neue Position meldet |
| **Deaktiviert** | nie – der Webhook bleibt gespeichert, wird aber nicht ausgeführt |

Die oben genannten Einsatz-Variablen stehen nur bei den Einsatz-Auslösern zur Verfügung.

### Fahrzeug-Webhooks (Status und Position)

Mit den Auslösern **„Bei Fahrzeugstatus-Änderung"** und **„Bei Fahrzeugposition-Änderung"** reagiert ein Webhook nicht auf Einsätze, sondern auf Meldungen der Fahrzeuge – unabhängig davon, ob gerade ein Einsatz läuft. Typische Einsatzfälle: Fahrzeugstatus an eine Wachen-Anzeige oder ein Smart-Home-System übergeben, Fahrzeugpositionen an ein externes Lagesystem weiterleiten oder beim Ausrücken (Status 3) automatisch das Hallentor öffnen.

**Verhalten:**

- Ausgelöst wird nur für **Fahrzeuge des Standorts**, an dem der Webhook angelegt ist.
- **Status:** Der Webhook wird bei jeder gemeldeten Statusänderung ausgeführt.
- **Position:** Positionsmeldungen kommen sehr häufig. Damit das Zielsystem nicht überlastet wird, wird der Webhook **pro Fahrzeug höchstens alle 30 Sekunden** ausgeführt; dazwischen eingehende Positionen werden übersprungen.

**Verfügbare Variablen:**

| Variable | Beschreibung |
|---|---|
| `{Site}` | Connect-Standort des Fahrzeugs |
| `{VehicleId}` | Connect Fahrzeug-ID |
| `{CallSign}` | Funkrufname des Fahrzeugs |
| `{ShortCallSign}` | Kurzer Funkrufname |
| `{RadioId}` | Funkgerätekennung (ISSI) |
| `{Status}` | Gemeldeter Fahrzeugstatus (Zahl, z. B. `3`) |
| `{StatusTimestamp}` | Zeitpunkt der Statusmeldung (z. B. `2026-10-20T13:45:30`) |
| `{Latitude}` | Breitengrad der Position (Dezimalpunkt, z. B. `50.14494`) |
| `{Longitude}` | Längengrad der Position (Dezimalpunkt, z. B. `8.39624`) |
| `{PositionTimestamp}` | Zeitpunkt der Positionsmeldung |

> Die Fahrzeug-Variablen gibt es nur in der hier aufgeführten (englischen) Schreibweise. Ist ein Wert nicht vorhanden – z. B. keine Position bei einer reinen Statusmeldung – bleibt die Variable leer.

**Beispiel:**

```
https://example.com/fahrzeug?rufname={CallSign}&status={Status}&lat={Latitude}&lng={Longitude}
```

Standort-Webhooks – auch Fahrzeug-Webhooks – lassen sich zusätzlich über die [öffentliche Connect API](/connect/schnittstellen/public_api) unter `/interfaces/public/webhooks` verwalten.

### Webhook testen

Über den **Play-Button** neben dem angelegten Webhook kann die Ausführung manuell getestet werden.

---

## Tipps

### Weitere Einsatzdaten per Skript abrufen

Ein Webhook übergibt nur die oben aufgeführten Variablen. Werden weitere Einsatzdaten benötigt, kann der Standort-Webhook ein eigenes Skript aufrufen und dabei die Connect Einsatz-ID über die Variable `{Einsatz-ID}` mitgeben, z. B.:

```
https://example.com/einsatz.php?id={Einsatz-ID}
```

Das Skript ruft anschließend mit dieser ID über die [öffentliche Connect API](/connect/schnittstellen/public_api) weitere Informationen ab, z. B. Einsatznachrichten (`/operation/{id}/message`), Fahrzeugzuweisungen (`/operation/{id}/assignment`) oder Rückmeldungen (`/operation/{id}/userstatus`).

### Einsatzlicht nach Kategorie

Über die Variable `{Kategorie}` lässt sich z. B. ein Einsatzlicht je nach Einsatzkategorie unterschiedlich ansteuern – etwa indem ein Smart-Home-System oder Skript die Kategorie auswertet und eine passende Lichtfarbe schaltet:

```
https://example.com/einsatzlicht?kategorie={Kategorie}
```

`{Kategorie}` steht sowohl im Benutzer- als auch im Standort-Webhook zur Verfügung.
