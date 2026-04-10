---
title: Webhooks (Smart Home)
description: Benutzer- und Standort-Webhooks in Connect einrichten um bei Alarm externe Systeme wie Smart Home Lösungen, Alexa oder Philips Hue anzusteuern
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

Standort-Webhooks können bei verschiedenen Ereignissen ausgelöst werden, z. B. Einsatz eingegangen oder Einsatz beendet.

### Webhook testen

Über den **Play-Button** neben dem angelegten Webhook kann die Ausführung manuell getestet werden.

---

## Praxisbeispiel: Alexa via VoiceMonkey

Mit dem Dienst [VoiceMonkey](https://voicemonkey.io) kann Alexa bei einem Einsatz das Stichwort vorlesen.

**Voraussetzungen:**
- Amazon Alexa
- VoiceMonkey Pro Account (14-tägige Testphase verfügbar)

### Einrichtung

1. In der **Alexa App** den Skill **„Voice Monkey"** unter „Skills und Spiele" suchen und installieren
2. Bei [console.voicemonkey.io](https://console.voicemonkey.io/dashboard) mit Amazon-Konto einloggen
3. Unter **„Manage Devices"** → **„Add a speaker"** ein neues Gerät anlegen (Einzelgerät oder Gruppe) und einen Namen vergeben
4. Eine **Alexa Routine** anlegen (Anleitung in VoiceMonkey unter „Tell me how"):
   - Alexa App → Hauptmenü → Routinen → Plus
   - Wenn folgendes passiert: Smart Home → das erstellte VoiceMonkey-Gerät wählen
   - Aktion hinzufügen: Skills → Meine Skills → Voice Monkey → Alexa-Gerät auswählen → Speichern
5. Zurück in VoiceMonkey auf **„Sync Devices"** klicken und Verbindung bestätigen

### Webhook in Connect anlegen

**Benutzer-Webhook** (nur Stichwort):

```
https://api-v2.voicemonkey.io/announcement?token=TOKEN_HIER_EINFÜGEN&device=DEVICEID_HIER_EINFÜGEN&text=Einsatz%20Feuerwehr%20Flammenhausen%20-%20{Stichwortübersetzung}&chime=soundbank%3A%2F%2Fsoundlibrary%2Falarms%2Fbeeps_and_bloops%2Ftone_02
```

**Standort-Webhook** (mit Sachverhalt und Adresse):

```
https://api-v2.voicemonkey.io/announcement?token=TOKEN_HIER_EINFÜGEN&device=DEVICEID_HIER_EINFÜGEN&text=Einsatz%20Feuerwehr%20Flammenhausen%20-%20{Stichwortübersetzung}{Sachverhalt}{Adresse}&chime=soundbank%3A%2F%2Fsoundlibrary%2Falarms%2Fbeeps_and_bloops%2Ftone_02
```

`TOKEN_HIER_EINFÜGEN` und `DEVICEID_HIER_EINFÜGEN` durch die eigenen Werte aus [console.voicemonkey.io/credentials](https://console.voicemonkey.io/credentials) ersetzen.

---

## Praxisbeispiel: Philips Hue via Olisto

Mit [Olisto](https://olisto.com) können Philips Hue Lampen bei einem Einsatz gesteuert werden (z. B. blinken lassen).

**Voraussetzungen:**
- Philips Hue Leuchtmittel mit Philips Hue Bridge
- Steuerung von Unterwegs in der Hue App aktiviert

### Einrichtung

1. **Olisto App** installieren und Account erstellen
2. Reiter **„Triggs"** → **„Create new trigg"**
3. Im Abschnitt **„When"**: Condition hinzufügen → **„Olisto Connect"** → **„Add channel"** → **„Connector is activated"** → neuen Connector anlegen (Typ: Olisto Connector, Name z. B. „Webhook"). Die Webhook-URL wird automatisch per E-Mail zugesendet.
4. Im Abschnitt **„Then"**: Action hinzufügen → **Philips Hue** → Hue-Account verbinden → gewünschte Aktion wählen (z. B. „Blink the lights" mit Farbe und Anzahl)

### Webhook in Connect anlegen

**Connect Portal → Smart Home → Webhook** → neuen Eintrag anlegen und die per E-Mail erhaltene Olisto-URL eintragen.

Über den **Play-Button** testen – die Philips Hue Lampen sollten nun blinken.

> **Hinweis:** IFTTT unterstützt Webhooks seit dem 15.02.2024 nur noch in der kostenpflichtigen Version.
