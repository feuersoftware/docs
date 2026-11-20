---
title: Alarmierung
description: Wie das EinsatzTablet Alarme empfängt, in neue Einsätze wechselt, bei Status 3 zur Anfahrt springt und nach Einsatzende zurückkehrt
---

# Alarmierung

Das EinsatzTablet empfängt die Alarmierungen des angemeldeten Fahrzeugs – per Push-Benachrichtigung und über eine dauerhafte Verbindung zum Server.

---

## Alarmempfang

**Android:** Die App hält im Hintergrund eine Verbindung zum Server. Das ist an der dauerhaften Benachrichtigung **„Alarmempfang aktiv"** („Mit dem Server verbunden") erkennbar. Damit Android diese Verbindung nicht trennt, muss die App von der **Akku-Optimierung ausgenommen** sein.

Mit der Einstellung [„Alarm über dem Sperrbildschirm"](/einsatztablet/15_setup#automatisierung) schaltet ein Alarm das Display ein und öffnet die App auch bei gesperrtem Tablet. Mit der Berechtigung **„Über anderen Apps einblenden"** holt ein Alarm die App nach vorne, auch wenn gerade eine andere App (z. B. die Navigation) läuft.

**iPad:** Alarme kommen per Push-Benachrichtigung. Damit die App im Hintergrund aktiv bleibt, muss der Standort mit **„Immer erlauben"** freigegeben und **„Fahrzeugposition übertragen"** eingeschaltet sein.

Ein neuer Einsatz wird zusätzlich als Banner **„Neuer Einsatz"** angezeigt und – wenn eingestellt – über die [Sprachausgabe](/einsatztablet/15_setup#sprachausgabe) angesagt.

---

## In den neuen Einsatz wechseln

Was beim Eingang eines neuen Einsatzes passiert, hängt davon ab, was gerade angezeigt wird:

| Situation | Verhalten |
|---|---|
| Kein Einsatz geöffnet, oder der geöffnete Einsatz ist beendet bzw. älter als 2 Tage | Der neue Einsatz öffnet sich **sofort** |
| Ein anderer laufender Einsatz ist geöffnet | Abfrage **„In neuen Einsatz wechseln?"** mit **„Wechseln"** und **„Beim alten bleiben (60)"** – ohne Eingabe bleibt die App nach 60 Sekunden im bisherigen Einsatz |
| Mehrere Einsätze laufen gleichzeitig | Abfrage **„Einsatzliste anzeigen?"** |
| Es gibt ungespeicherte Eingaben | Die App fragt immer nach, damit nichts verloren geht |

![Screenshot: Abfrage bei einem neuen Einsatz während ein anderer geöffnet ist](/images/einsatztablet/06_neuer_einsatz.png)

---

## Status 3: automatisch zur Anfahrt

Meldet das Fahrzeug **Status 3** (Einsatz übernommen), erscheint **„Status 3 – Wechsel zur Anfahrt in 3 Sek."**. Danach wechselt die App zur [Anfahrt](/einsatztablet/06_anfahrt). Ein Tipp auf den Bildschirm bricht den Wechsel ab.

![Screenshot: Automatischer Wechsel zur Anfahrt bei Status 3](/images/einsatztablet/07_status3.png)

Abschaltbar über [Setup → Automatisierung → „Automatisch zur Anfahrt wechseln"](/einsatztablet/15_setup#automatisierung).

---

## Nach dem Einsatz

Wird der geöffnete Einsatz **beendet** oder **abgebrochen** oder das eigene **Fahrzeug im Einsatz beendet**, erscheint sofort ein Hinweis mit:

- **„Hier bleiben"** – im Einsatz bleiben, z. B. um noch die Dokumentation abzuschließen
- **„In … erneut fragen"** – den Hinweis später erneut anzeigen
- **„Zur Einsatzliste"** (bzw. „Zur Karte" / „Zu den Fahrzeugen") – mit Countdown; ohne Eingabe wechselt die App nach Ablauf der Zeit zur Startansicht

Die Wartezeit wird unter [Setup → Automatisierung → „Automatisch zur Startansicht zurückkehren"](/einsatztablet/15_setup#automatisierung) eingestellt (Aus, 10 s, 1 min, 10 min oder 30 min; Standard 10 min).

---

## Neue Aufgabe für das Fahrzeug

Wird dem Fahrzeug im laufenden Einsatz eine Aufgabe zugewiesen, erscheint **„Neue Aufgabe für unser Fahrzeug"** mit den Schaltflächen **„Aufgabenliste öffnen"** und **„In Bearbeitung nehmen"**. Details: [Aufgaben](/einsatztablet/10_aufgaben)
