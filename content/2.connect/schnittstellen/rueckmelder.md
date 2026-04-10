---
title: Rückmelder (Hardware)
description: Den Hardware-Rückmeldebutton rueckmelder.de mit Feuersoftware Connect verbinden und per Knopfdruck eine Einsatzrückmeldung absetzen
---

# Rückmelder (Hardware)

Der Rückmelder ist ein batteriebetriebener Hardware-Button für zuhause, mit dem per Knopfdruck eine Einsatzrückmeldung „**Komme**" an Connect gesendet werden kann. Die Rückmeldung erscheint sofort in allen verbundenen Apps und am EinsatzMonitor. Die erfolgreiche Übertragung wird durch eine grüne LED am Gerät quittiert.

Der Rückmelder wird von einem Partnerunternehmen produziert und vertrieben: [rueckmelder.de](https://www.rueckmelder.de/)

---

## Voraussetzungen

- Rückmelder mit voller CR123A-Batterie (Schutzfolie vor erster Nutzung entfernen)
- Computer oder Smartphone mit WLAN
- WLAN-Zugangsdaten (Name + Passwort) – **nur 2,4 GHz WLAN wird unterstützt**
- Benutzer-API-Schlüssel aus dem Connect Portal (siehe unten)

> **Tipp:** WLAN-Zugangsdaten und API-Key vorab in einem Notizprogramm speichern, um bei der Einrichtung fehlerfrei per Copy & Paste einfügen zu können.

---

## Benutzer-API-Key erstellen

Der Rückmelder benötigt einen persönlichen API-Schlüssel aus dem Connect Portal:

**Connect Portal → Smart Home → Benutzer API → „Neu"**

- Beschreibung eingeben, z. B. „Rückmelder Wohnung"
- Verwendungszweck: **Einsatzrückmeldung User-API**
- Speichern und den angezeigten Schlüssel kopieren

Weitere Infos zur Benutzer API: [→ Benutzer API](./benutzer_api)

---

## Einrichtung

### Schritt 1 – Konfigurationsmodus aktivieren

Rückmelder länger als 5 Sekunden drücken bis die orangene LED langsam blinkt. Der Rückmelder stellt nun ein eigenes WLAN als Access-Point bereit.

> **Achtung:** Nach 5 Minuten im Konfigurationsmodus schaltet sich das Gerät automatisch ab. Bei Schritt 1 neu beginnen falls nötig.

### Schritt 2 – Mit dem Rückmelder-WLAN verbinden

Am Smartphone oder PC mit folgendem WLAN verbinden:

**WLAN-Name: `RueckmelderVX-XXXXXXX`**

> **Hinweis:** Viele Smartphones schalten bei fehlendem Internet automatisch auf ein bekanntes WLAN oder LTE um. Falls das passiert, Router und LTE kurz deaktivieren, damit das Gerät sich mit dem Rückmelder verbindet.

### Schritt 3 – Konfigurationsseite öffnen

Falls sich der Browser nicht automatisch öffnet, folgende Adresse aufrufen: **`192.168.4.1`**

### Schritt 4 – WLAN-Zugangsdaten eintragen

Heimnetz-Name (SSID) und Passwort in der Konfigurationsseite eintragen.

### Schritt 5 – App auswählen und API-Key eintragen

Alarm-App **„FeuerSoftware [USER-KEY]"** auswählen und den zuvor erstellten API-Key in das Feld **„Persönliche URL oder API-Key"** eintragen.

> **Hinweis (ab Firmware 7.5.2):** Die Fahrtzeit in Sekunden kann zusätzlich mit einem Semikolon an den API-Key angehangen werden: `API-KEY;Fahrzeit_in_Sekunden`

### Schritt 6 – Speichern und Neustart

Auf **„Speichern und Neustarten"** klicken. Der Rückmelder verbindet sich mit dem Heimnetz (orange LED blinkt schnell, dann Dauerlicht) und schaltet sich nach ca. 30 Sekunden ab. Die Einrichtung ist abgeschlossen.

---

## Einsatzzusage

Im Einsatzfall den Knopf kurz drücken (ca. 0,5–1 Sekunde) bis die orangene LED zu blinken beginnt. Der Rückmelder versucht für bis zu 30 Sekunden einem aktiven Einsatz zuzusagen. Bei Erfolg blinkt die LED kurz grün und das Gerät schaltet sich ab.

Geht das Gerät ohne grünes Blinken aus, wurde kein aktiver Einsatz gefunden – das ist normal beim ersten Drücken nach der Einrichtung.

---

## LED-Status

| LED-Status | Bedeutung |
|---|---|
| Langsames oranges Blinken | Konfigurationsmodus aktiv (Access-Point bereitgestellt) |
| Schnelles oranges Blinken | Verbindung mit Heimnetz wird hergestellt |
| Dauerhaft orange (max. 30 s) | WLAN verbunden, Rückmeldung wird übertragen |
| Kurzes grünes Blinken | Rückmeldung erfolgreich, Gerät schaltet ab |
| Abwechselnd orange/grün | Konfigurationsfehler – API-Key oder URL prüfen |
| Dauerhaft orange (>30 s) | Batterie zu schwach, bitte wechseln |

---

## Firmware-Update

Aktuelle Firmware: [rueckmelder.de/downloads](https://www.rueckmelder.de/downloads)

Rückmelder in den Konfigurationsmodus versetzen (Schritt 1), mit dem Rückmelder-WLAN verbinden und im Webinterface auf **„Firmware Update"** klicken. Die heruntergeladene `.bin`-Datei hochladen.

> **Achtung:** Nach einem Firmware-Update setzt sich das Gerät auf Werkseinstellungen zurück. WLAN-Zugangsdaten und API-Key müssen danach erneut eingetragen werden.

---

## Wandmontage

Der Rückmelder kann mit zwei Schrauben an der Wand befestigt werden. Eine Bohrschablone liegt bei. Eine Stromversorgung ist nicht erforderlich – das Gerät läuft auf Batterie.
