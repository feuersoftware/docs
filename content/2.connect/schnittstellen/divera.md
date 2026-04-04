---
title: Divera 24/7
description: Einsätze aus Divera 24/7 per Webhook an FeuerSoftware Connect weiterleiten
---

# Divera 24/7

Über die Divera-Schnittstelle können Einsatzdaten aus Divera 24/7 per Webhook an FeuerSoftware Connect weitergeleitet werden.

> **Voraussetzung:** Ein kostenpflichtiger **Divera 24/7 Alarm Account** ist zwingend erforderlich. In der kostenlosen Version ist die Webhook-Funktion vollständig deaktiviert.

> **Hinweis:** Über diese Schnittstelle werden ausschließlich **Einsätze** übertragen. Fahrzeugstatus und andere Daten werden nicht übermittelt.

---

## Einrichtung

### Schritt 1: Schnittstelle in Connect aktivieren

1. Im Connect Portal zur **Organisations-Ebene** wechseln
2. **Seitenleiste → Schnittstellen → Divera 24/7**
3. Checkbox **„Einsätze von Divera empfangen"** aktivieren
4. Die generierte **Webhook-URL** kopieren

### Schritt 2: Webhook in Divera konfigurieren

1. Im **Divera 24/7 Portal** anmelden
2. **Administration → Schnittstellen → Datentransfer**
3. Im Bereich **Webhooks** auf das Einstellungs-Symbol klicken
4. Folgenden Webhook anlegen:

| Feld | Wert |
|---|---|
| **URL / Ziel** | Generierte FeuerSoftware-URL einfügen |
| **Format** | POST application/json |
| **Inhalt** | „Vollständiges Objekt (inkl. Empfängernamen)" auswählen |

5. Speichern

### Schritt 3: Regeln in Connect anlegen

Nach der Webhook-Konfiguration können in Connect **Zuordnungsregeln** erstellt werden, die eingehende Divera-Einsätze dem richtigen Connect-Standort zuweisen. Regeln können auf Divera-Gruppen, -Einheiten und -Fahrzeugen basieren.
