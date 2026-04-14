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

![Screenshot: Fahrzeug Tab Allgemein](/images/connect/06_fahrzeug_allgemein.png)

### Tab: Verfügbarkeit
Definiert die möglichen Verfügbarkeitszustände des Fahrzeugs:

| Status | Beschreibung |
|---|---|
| **Verfügbar** | Fahrzeug ist einsatzbereit |
| **Eingeschränkt verfügbar** | Fahrzeug ist mit Einschränkungen verfügbar |
| **Nicht verfügbar** | Fahrzeug ist außer Betrieb |

Eigene Verfügbarkeitszustände können nicht angelegt werden.

![Screenshot: Fahrzeug Tab Verfügbarkeit](/images/connect/06_fahrzeug_verfuegbarkeit.png)

### Tab: Dashboard
Zeigt ein konfigurierbares Dashboard für Fahrzeugdaten z.B. von CVM Modulen (Siehe Zusatzinformationen)

![Screenshot: Fahrzeug Tab Dashboard](/images/connect/06_fahrzeug_dashboard.png)

### Tab: Zusatzinformationen
Technische Messwerte und Statusdaten des Fahrzeugs, die automatisch über externe Systeme befüllt werden. Typische Anwendungsfälle sind:

| Beispiel | Quelle |
|---|---|
| Batteriespannung | TetraControl CVM-Modul |
| Ladezustand | UBX-Box |
| CAN Bus Daten | UBX-Box |

Die Werte werden automatisch über **MQTT** oder die **FeuerSoftware API** aktualisiert und sind schreibgeschützt – sie können nicht manuell bearbeitet werden.

> **Hinweis:** Wenn ein Feldname über die Schnittstelle belegt wird, sollten manuell angelegte Felder mit anderen Namen verwendet werden, um Überschreibungen zu vermeiden.

![Screenshot: Fahrzeug Zusatzinformationen mit technischen Werten](/images/connect/06_fahrzeug_zusatzinformationen.png)

### Tab: Integrationen
Fahrzeugspezifische Einstellungen für angebundene Drittsysteme (z. B. Traccar GPS-Tracking).

![Screenshot: Fahrzeug Tab Integrationen](/images/connect/06_fahrzeug_integrationen.png)

### Tab: Vehicle App (EinsatzTablet)
Konfiguration für das EinsatzTablet, das in diesem Fahrzeug verbaut ist:
- Verknüpfung mit einem EinsatzTablet-Account
- Tablet-spezifische Einstellungen

![Screenshot: Fahrzeug Tab Vehicle App](/images/connect/06_fahrzeug_vehicle_app.png)

---

## GPS-Tracking

GPS-Tracker ermöglichen die Live-Positionsanzeige von Fahrzeugen, Drohnen oder Fußtrupps auf der Karte. Um einen GPS-Tracker einem Fahrzeug zuzuweisen, das Fahrzeug öffnen → Tab **„Integrationen"** → GPS-Tracker aktivieren → Gerätemodell und Geräte-ID (IMEI) eintragen.

Alle Informationen zur Einrichtung von Hardware-Trackern und der Traccar-App sind auf der Seite [GPS Tracker](/connect/21_gps_tracker) beschrieben.

---

## Regeln für Gerätewarnungen

Über Regeln für Gerätewarnungen können individuelle Eigenschaften von Fahrzeugen überwacht werden. Weicht ein Wert vom konfigurierten Normalbereich ab, wird automatisch eine **Mängelmeldung** erstellt.

**Beispiele:**
- Ein CVM-Modul überwacht die Batteriespannung. Fällt die Spannung unter den Normalbereich, wird eine Mängelmeldung für die Gerätewarte erstellt.
- Eine UBX-Box liefert den Tankfüllstand. Fällt der Füllstand unter 15 %, wird eine Mängelmeldung erstellt.
- Ein Temperatursensor im Medikamentenkühlschrank eines RTW schlägt Alarm, wenn die Temperatur einen konfigurierten Grenzwert überschreitet.

### Regeln erstellen

Regeln werden auf **Organisationsebene** angelegt:

**Connect Portal → Organisation → Regeln für Gerätewarnungen → „Neu"**

Es stehen zwei Regeltypen zur Verfügung:

**Numerischer Wertebereich**

Legt einen Min- und Max-Wert fest, zwischen dem der Wert im Normalfall liegen soll. Über- oder unterschreitet der Wert diesen Bereich, wird eine Mängelmeldung erstellt.

Beispiel: Batteriespannung 12V – Normalbereich Min `12,6` / Max `12,8` Volt.

**Numerischer Wert**

Legt einen exakten Sollwert fest. Bei jeder Abweichung wird eine Mängelmeldung erstellt.

Gib der Regel einen aussagekräftigen Namen und speichere sie.

### Regeln mit Fahrzeugeigenschaften verknüpfen

Regeln werden auf Standortebene an die Eigenschaften einzelner Fahrzeuge geknüpft:

1. Fahrzeug öffnen → Tab **„Zusatzinformationen"**
2. Die zu überwachende Eigenschaft suchen und auf bearbeiten klicken
3. Eine der zuvor erstellten Regeln auswählen und speichern

Sobald sich der Wert einer Eigenschaft ändert, wird die verknüpfte Regel geprüft. Bei einer Abweichung wird automatisch eine Mängelmeldung erstellt und der entsprechende Eintrag mit einem **Ausrufezeichen** gekennzeichnet.

Ändert sich der Wert wieder in den Normalbereich zurück, wird die Mängelmeldung automatisch auf **„Behoben"** gesetzt.

---

## Fahrzeug löschen

In der Fahrzeug-Detailansicht → **„Fahrzeug löschen"** → Bestätigungsdialog. Gelöschte Fahrzeuge können nicht wiederhergestellt werden.
