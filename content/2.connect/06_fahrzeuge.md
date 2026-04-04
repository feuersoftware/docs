---
title: Fahrzeuge
description: Fahrzeuge anlegen, konfigurieren und Verfügbarkeit verwalten im Connect Portal
---

# Fahrzeuge

Die Fahrzeugverwaltung ist auf **Standort-Ebene** verfügbar. Auf **Organisations-Ebene** können Fahrzeuge aller Standorte im Überblick eingesehen werden.

---

## Fahrzeugübersicht

**Seitenleiste → Fahrzeuge**

![Screenshot: Fahrzeugübersicht](/images/connect/06_fahrzeuge_uebersicht.png)

Die Übersicht zeigt alle Fahrzeuge des Standorts in einer Tabelle:

- Fahrzeugname und -typ
- Aktueller Verfügbarkeitsstatus
- Zugewiesener Standort

Die Ansicht kann nach Verfügbarkeitsstatus gefiltert und per Suche eingeschränkt werden. Zusätzlich steht eine **Kartenansicht** zur Verfügung, die Fahrzeugpositionen geografisch darstellt.

---

## Fahrzeug anlegen

1. **Seitenleiste → Fahrzeuge → „Fahrzeug anlegen"**
2. Pflichtfelder ausfüllen:
   - **Name** (z. B. „LF 10", „HLF 20/16")
   - **Funkrufname / Kennung**
   - **Typ** (aus vordefinierten Kategorien)
3. Speichern

---

## Fahrzeug-Detailansicht

Ein Fahrzeug öffnen → mehrere Tabs:

### Tab: Allgemein
- Name, Funkrufname, Typ
- Zugeordneter Standort
- Bild des Fahrzeugs hochladen
- Interne Notizen

### Tab: Verfügbarkeit
Definiert die möglichen Verfügbarkeitszustände des Fahrzeugs:

| Status | Beschreibung |
|---|---|
| **Verfügbar** | Fahrzeug ist einsatzbereit |
| **Eingeschränkt verfügbar** | Fahrzeug ist mit Einschränkungen verfügbar |
| **Nicht verfügbar** | Fahrzeug ist außer Betrieb |
| **Im Einsatz** | Fahrzeug befindet sich in einem laufenden Einsatz |

Eigene Verfügbarkeitszustände können angelegt und mit Farben versehen werden.

### Tab: Dashboard
Zeigt eine Echtzeit-Übersicht des Fahrzeugs mit aktuellem Status, Position und laufenden Einsätzen.

### Tab: Zusatzinformationen
Technische Messwerte und Statusdaten des Fahrzeugs, die automatisch über externe Systeme befüllt werden. Typische Anwendungsfälle sind:

| Beispiel | Quelle |
|---|---|
| Batteriespannung | TetraControl CVM-Modul |
| Ladezustand | UBX-Box |
| Funkstatus | TetraControl |
| GPS-Position | MQTT-Telemetrie |

Die Werte werden automatisch über **MQTT** oder die **FeuerSoftware API** aktualisiert und sind schreibgeschützt – sie können nicht manuell bearbeitet werden.

> **Hinweis:** Wenn ein Feldname über die Schnittstelle belegt wird, sollten manuell angelegte Felder mit anderen Namen verwendet werden, um Überschreibungen zu vermeiden.

![Screenshot: Fahrzeug Zusatzinformationen mit technischen Werten](/images/connect/06_fahrzeug_zusatzinformationen.png)

### Tab: Integrationen
Fahrzeugspezifische Einstellungen für angebundene Drittsysteme (z. B. Traccar GPS-Tracking).

### Tab: Vehicle App (EinsatzTablet)
Konfiguration für das EinsatzTablet, das in diesem Fahrzeug verbaut ist:
- Verknüpfung mit einem EinsatzTablet-Account
- Tablet-spezifische Einstellungen

---

## GPS-Tracking

GPS-Tracker ermöglichen die Live-Positionsanzeige von Fahrzeugen, Drohnen, Motorrädern oder Fußtrupps auf der Karte – in der EinsatzApp, dem EinsatzTablet und dem EinsatzMonitor. Praktisch für Fahrzeuge ohne verbau­tes EinsatzTablet.

Das System nutzt die Open-Source-Software **Traccar**. Alle bei [traccar.org/devices](https://www.traccar.org/devices/) gelisteten Geräte werden unterstützt.

### Traccar-App (Smartphone)

Die Traccar-App ist für Android und iOS verfügbar und ermöglicht die Positionsübermittlung per Smartphone.

**Einrichtung:**
1. App installieren und öffnen
2. **Gerätekennung** (IMEI empfohlen) eingeben
3. **Server-URL:** `http://gps.feuersoftware.com:5055`
4. Tracking aktivieren

**Einstellungen:**
- **Aktualisierungsintervall:** Standard 300 Sekunden (5 Minuten)
- **Positionsgenauigkeit:** konfigurierbar

### Hardware-Tracker (z. B. TK104)

Für Fahrzeuge ohne Smartphone eignen sich dedizierte Hardware-Tracker wie der TK104 von Incutex/GPSvision.

**Voraussetzungen:**
- SIM-Karte mit Datentarif (z. B. Netzclub Prepaid mit kostenlosem 200-MB-Kontingent)
- SIM-PIN deaktivieren
- IMEI-Nummer des Geräts notieren

**Konfiguration:**
- Standard-Passwort: `123456`
- Modus: GPRS (nicht SMS)
- Server-IP: `4.184.237.26`
- Port: je nach Gerätemodell (5001–5194, Modell-Liste auf traccar.org)
- Tracking-Intervall: mindestens 30 Sekunden

> Für eine Positionsabfrage per Anruf: Tracker-Nummer anrufen → nach 2–5 Klingeln automatische Ablehnung → GPS-Koordinaten werden per SMS gesendet.

### GPS-Tracker in Connect einrichten

1. Im Connect Portal den Standort wählen und das gewünschte Fahrzeug öffnen
2. Tab **„Integrationen"**
3. **GPS-Tracker aktivieren**
4. **Gerätemodell** (z. B. `Traccar`) auswählen
5. **Geräte-ID** (IMEI) eintragen – muss mit der im Gerät konfigurierten Gerätekennung übereinstimmen
6. Speichern

Sobald das Gerät Positionsdaten sendet, erscheint das Fahrzeug auf der Karte.

> **Hinweis:** Koordinaten werden gerundet und nur verarbeitet, wenn der Zeitstempel innerhalb der letzten Minute liegt. Positions­updates müssen sich mindestens in der 4. Dezimalstelle unterscheiden, um verarbeitet zu werden.

---

## Fahrzeug löschen

In der Fahrzeug-Detailansicht → **„Fahrzeug löschen"** → Bestätigungsdialog. Gelöschte Fahrzeuge können nicht wiederhergestellt werden.
