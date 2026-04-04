---
title: Schnittstellen
description: Alle Integrationen und Schnittstellen zu Drittsystemen im Connect Portal – auf Organisations- und Standort-Ebene
---

# Schnittstellen

Das Connect Portal bietet zahlreiche Schnittstellen zu externen Systemen. Diese sind auf zwei Ebenen verfügbar:

- **Organisations-Schnittstellen** – gelten für die gesamte Organisation (z. B. Leitstellen-Anbindung)
- **Standort-Schnittstellen** – gelten nur für den jeweiligen Standort (z. B. Smart-Home-Systeme)

---

## Organisations-Schnittstellen

**Seitenleiste (Organisations-Ebene) → Schnittstellen**

| Schnittstelle | Beschreibung |
|---|---|
| **Cobra** | Anbindung an das Cobra-Alarmierungssystem |
| **DeAlarm** | Integration mit DeAlarm für digitale Alarmierung |
| **Divera** | Datenaustausch mit Divera 24/7 |
| **FAS** | Anbindung an FAS-Systeme |
| **Navlog** | Integration mit Navlog für Einsatznavigation |
| **News-Mail-Eingang** | News-Beiträge per E-Mail erstellen (Mail-to-News) |
| **Public API** | Zugang zur öffentlichen FeuerSoftware-API auf Organisationsebene |
| **Wasserkarte** | Integration der Wasserkarte (Hydranten und Wasserentnahmestellen) |

---

## Standort-Schnittstellen

**Standort wählen → Seitenleiste → Schnittstellen**

| Schnittstelle | Beschreibung |
|---|---|
| **Elion** | Anbindung an das Elion-System |
| **Fireboard** | Integration mit Fireboard für Alarmierung und Statusmeldungen |
| **Homematic** | Smart-Home-Integration mit Homematic (z. B. Türöffner, Licht) |
| **Lupus** | Smart-Home-Integration mit Lupus Electronics |
| **Public API** | Zugang zur öffentlichen FeuerSoftware-API auf Standortebene |
| **RescueTablet** | Anbindung an RescueTablet-Systeme |
| **Webhooks** | Ausgehende Webhooks bei Ereignissen (z. B. neuer Einsatz, Statusänderung) |
| **TetraControl** | Integration mit TetraControl für Digitalfunk-Status |
| **Xsense** | Anbindung an Xsense-Rauchmelder mit Gebäudeverwaltung |

---

## Public API

Die Public API ermöglicht die Integration eigener Systeme mit FeuerSoftware. Sie steht auf Organisations- und Standortebene zur Verfügung.

### API-Token erstellen
1. **Schnittstellen → Public API**
2. **„API-Token erstellen"** klicken
3. Bezeichnung vergeben (z. B. „Leitstellen-Anbindung")
4. Berechtigungen für den Token festlegen (Lesen / Schreiben)
5. Token kopieren und sicher aufbewahren – er wird nur einmal angezeigt

> Die API-Dokumentation ist unter [docs.feuersoftware.com](https://docs.feuersoftware.com) verfügbar.

---

## Webhooks

**Schnittstellen → Webhooks**

Webhooks senden automatisch HTTP-Anfragen an eine externe URL, wenn bestimmte Ereignisse in FeuerSoftware auftreten.

### Webhook anlegen
1. **„Webhook anlegen"** klicken
2. **Ziel-URL** eingeben
3. **Ereignisse** auswählen, die den Webhook auslösen sollen:
   - Neuer Einsatz
   - Einsatz aktualisiert
   - Einsatz abgeschlossen
   - Fahrzeugstatus geändert
   - u. v. m.
4. Optional: **Secret** für Signatur-Verifizierung hinterlegen
5. Speichern

---

## Wasserkarte

**Organisations-Schnittstellen → Wasserkarte**

Die Wasserkarte-Integration blendet Hydranten und Wasserentnahmestellen in der Kartenansicht der EinsatzApp und des EinsatzManagers ein.

### Einrichten
1. **Schnittstellen → Wasserkarte**
2. API-Schlüssel der Wasserkarte eingeben
3. Region konfigurieren
4. Speichern

---

## Homematic / Lupus (Smart Home)

Diese Integrationen ermöglichen die automatische Steuerung von Smart-Home-Geräten bei Alarmereignissen (z. B. Licht einschalten, Tor öffnen).

### Einrichten
1. **Schnittstellen → Homematic** (oder Lupus)
2. IP-Adresse und Zugangsdaten der Zentrale eingeben
3. Geräte und Aktionen konfigurieren (welches Gerät bei welchem Ereignis)
4. Speichern

---

## TetraControl

**Schnittstellen → TetraControl**

Integration mit dem TetraControl-System für die Anzeige von Digitalfunk-Fahrzeugstatus im EinsatzManager und EinsatzMonitor.

### Einrichten
1. **Schnittstellen → TetraControl**
2. Verbindungsdaten des TetraControl-Servers eingeben
3. Fahrzeuge und Statusmapping konfigurieren
4. Speichern

---

## Xsense

**Schnittstellen → Xsense**

Integration mit Xsense-Rauchmeldern. Gebäude und Melder können im Portal verwaltet werden. Bei Auslösung eines Melders wird ein Einsatz erstellt.

### Einrichten
1. **Schnittstellen → Xsense**
2. Xsense-Account verknüpfen
3. Gebäude und Melder zuordnen
4. Speichern
