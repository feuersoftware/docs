---
title: Integrationen
description: iKAT, Moditech CRS und TETRAcontrol UBX im EinsatzTablet aktivieren und verwenden
---

# Integrationen

Das EinsatzTablet lässt sich mit externen Anwendungen und Hardware verbinden, um den Funktionsumfang zu erweitern.

---

## iKAT

Die **iKAT App** ist ein mobiles Geoinformationssystem mit Offline-Funktionalität. Sie bietet Zugriff auf Liegenschaftsinformationen, Entwässerungseinrichtungen, Hydranten und weitere Infrastrukturobjekte.

Das EinsatzTablet kann die **Einsatzkoordinaten direkt an iKAT übergeben**, sodass sich beim Öffnen automatisch der richtige Kartenausschnitt zeigt.

> **Hinweis:** Die iKAT-Integration ist ausschließlich auf **Apple-Geräten** verfügbar.

### Aktivierung

1. **Einstellungen → Allgemein** öffnen
2. Schalter **„iKAT aktiviert"** einschalten
3. In der Einsatzansicht erscheint oben rechts auf der Karte der Button **„iKAT öffnen"**
4. Beim Tippen öffnet sich die iKAT App mit den Koordinaten des Einsatzorts

Weitere Informationen: [www.i-kat.de](https://www.i-kat.de/feuerwehr/)

---

## Moditech CRS (Crash Recovery System)

**CRS** ist ein Fahrzeuginformationssystem für Rettungskräfte. Es ermöglicht den Zugriff auf Sicherheitsinformationen verunfallter Fahrzeuge (Rettungskarten). Hersteller ist die Firma [Moditech](https://www.moditech.com/de/).

Das EinsatzTablet schaltet eine **Verknüpfung** zur CRS App frei. CRS ist nicht direkt integriert – die Installation der CRS App ist Voraussetzung.

### Aktivierung

1. **Einstellungen → Layout** öffnen
2. Schalter **„Moditech CRS aktiviert (Rettungskarten)"** einschalten
3. In der Menüleiste erscheint das Symbol **„CRS"**
4. Beim Tippen öffnet sich die CRS App

> Falls die CRS App nicht installiert ist, erscheint die Meldung „Unable to open the link to the rescuesheet".

---

## TETRAcontrol UBX

Die **TETRAcontrol UBX Box** von [Status 3 IT](https://status3.it/) ermöglicht die Steuerung des Fahrzeugfunkgerätes über das EinsatzTablet via **Bluetooth**.

Die UBX Box wird mit einem im Fahrzeug verbauten Sepura- oder Motorola-Funkgerät (via PMI Interface) verbunden. Das Tablet kommuniziert über Bluetooth 4.0 LE mit der Box.

> **Hinweis:** Für die Aktivierung der Bluetooth-Schnittstelle der UBX ist eine gesonderte Lizenz bei Status 3 IT erforderlich.

### Funktionsumfang

| Funktion | Beschreibung |
|---|---|
| **Status senden** | FMS-Status über das Funkgerät senden |
| **TMO / DMO** | Zwischen Trunked Mode und Direct Mode umschalten |
| **Lautstärke** | Lautstärke des Funkgeräts regeln |
| **SDS senden** | Kurznachricht (max. 85 Zeichen) über das Funkgerät senden |
| **Aktive Gruppe** | Anzeige der aktuell geschalteten Funkgruppe (inkl. Gesprächsstatus) |
| **Garmin-Navigation** | Übergabe der Einsatzdaten an ein Garmin-Navigationsgerät bei Status 3 |

### Verbindungsaufbau

1. **Einstellungen** öffnen
2. Schalter **„UBX aktiviert"** einschalten
3. Eine nahe gelegene UBX Box auswählen und verbinden
4. Nach erfolgreicher Verbindung ändert sich der Menüpunkt **„Status"** zu **„Funk"**

### Bedienung

Über den Menüeintrag **„Funk"** in der Menüleiste sind alle Steuerungselemente erreichbar.

Die aktive Funkgruppe wird in der **unteren linken Ecke** des Tablets angezeigt. Eine farbliche Kennzeichnung zeigt an, ob die Gruppe frei oder belegt ist. Ist die UBX nicht verbunden, erscheint ein entsprechender Hinweis.

Weitere Informationen und Bezugsquellen:
- [Shop Status 3 IT](https://shop.status3.it/collections/tetracontrol-ubx)
