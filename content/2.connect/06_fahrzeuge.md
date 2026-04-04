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

## Fahrzeug löschen

In der Fahrzeug-Detailansicht → **„Fahrzeug löschen"** → Bestätigungsdialog. Gelöschte Fahrzeuge können nicht wiederhergestellt werden.
