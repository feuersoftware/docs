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
| **[Cobra / WDX3](/connect/schnittstellen/leitstelle/cobra)** | Leitstellenanbindung über ISE Cobra 4 WDX3 |
| **[DeAlarm](/connect/schnittstellen/leitstelle/dealarm_3pi)** | Integration mit DeAlarm für digitale Alarmierung |
| **[Katsys](/connect/schnittstellen/katsys)** | Einsatzalarmierung und Fahrzeugstatus aus dem Katsys-Leitstellensystem |
| **[Divera 24/7](/connect/schnittstellen/divera)** | Einsätze aus Divera 24/7 per Webhook weiterleiten |
| **[FAS](/connect/schnittstellen/spekter_fas)** | Anbindung an FAS-Systeme |
| **[Navlog](/connect/schnittstellen/navlog)** | Integration mit Navlog für Einsatznavigation |
| **News-Mail-Eingang** | News-Beiträge per E-Mail erstellen (Mail-to-News) |
| **[Public API](/connect/schnittstellen/public_api)** | Zugang zur öffentlichen FeuerSoftware-API auf Organisationsebene |
| **[Wasserkarte](/connect/schnittstellen/wasserkarte)** | Hydranten und Wasserentnahmestellen aus Wasserkarte.info einbinden |

---

## Standort-Schnittstellen

**Standort wählen → Seitenleiste → Schnittstellen**

| Schnittstelle | Beschreibung |
|---|---|
| **[Elion](/connect/schnittstellen/elion)** | Einsatzdaten, Fahrzeugstatus und -positionen an e:LION übermitteln |
| **[Fireboard](/connect/schnittstellen/fireboard)** | Einsatz- und Fahrzeugstatusdaten automatisiert an das Fireboard-Portal übermitteln |
| **[Public API](/connect/schnittstellen/public_api)** | Zugang zur öffentlichen FeuerSoftware-API auf Standortebene |
| **[Rauchwarnmelder](/connect/schnittstellen/rauchmelder)** | Übersicht aller Rauchwarnmelder-Integrationen (Homematic HCU1, CCU3, X-Sense, Lupus) |
| **[rescueTABLET](/connect/schnittstellen/rescuetablet)** | Einsatzdaten an rescueTABLET weiterleiten |
| **[TetraControl](/connect/schnittstellen/tetracontrol)** | Fahrzeugstatus, GPS und Rückmeldungen aus dem TETRA-Netz an Connect übermitteln |
| **[Status3IT – CVM & UBX](/connect/schnittstellen/status3it)** | CVM Spannungs-/Stromsensormodul und UBX Bluetooth-Box für Fahrzeugfunkgeräte |
| **[Webhooks](/connect/schnittstellen/webhooks)** | Ausgehende Webhooks bei Ereignissen (z. B. neuer Einsatz, Statusänderung) |

---

## Rauchwarnmelder-Schnittstellen

FeuerSoftware Connect unterstützt die Anbindung von Rauchwarnmeldern verschiedener Hersteller. Bei Auslösung eines Melders wird automatisch ein Einsatz im konfigurierten Standort erstellt.

> **Wichtig:** Alle Rauchwarnmelder-Schnittstellen dienen ausschließlich der **ergänzenden Informationsübermittlung** und sind kein primärer Alarmweg. Pro aktivierter Schnittstelle werden **5 Lizenzen** berechnet.

| Hersteller | Funktionsweise | Anleitung |
|---|---|---|
| **X-Sense** | Verbindung über X-Sense Installationsservice; Alarm wird direkt von der X-Sense Cloud an Connect übermittelt | [→ Einrichtung X-Sense](/connect/schnittstellen/rauchmelder/xsense) |
| **Homematic IP HCU1** | Plugin auf der HCU1 wertet Alarme aus und leitet sie an Connect weiter | [→ Einrichtung Homematic HCU1](/connect/schnittstellen/rauchmelder/homematic_hcu1) |
| **Homematic CCU3** | HomeMatic Script auf der CCU3 leitet Alarme über die öffentliche Connect API weiter | [→ Einrichtung Homematic CCU3](/connect/schnittstellen/rauchmelder/homematic_ccu3) |
| **Lupus Electronics** | Alarmweiterleitung über Webhook aus der Lupus Cloud | [→ Einrichtung Lupus](/connect/schnittstellen/rauchmelder/lupus) |

---

## Public API

Die öffentliche Connect API ermöglicht die Integration externer Systeme – z. B. um Einsätze zu erstellen oder Fahrzeugstatus zu übermitteln. Sie steht auf Organisations- und Standortebene zur Verfügung.

Alle Details zur Aktivierung, API-Dokumentation (Swagger) sowie den Tools EinsatzUpload und StatusUpload: [→ Öffentliche Connect API](/connect/schnittstellen/public_api)

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

