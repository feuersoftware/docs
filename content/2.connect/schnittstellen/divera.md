---
title: Divera 24/7
description: Einsätze aus Divera 24/7 per Webhook an FeuerSoftware Connect weiterleiten
---

# Divera 24/7

Über die Divera-Schnittstelle können Einsatzdaten aus Divera 24/7 an FeuerSoftware Connect weitergeleitet werden. Dazu wird im Divera-Portal ein Webhook angelegt, der die Einsätze an FeuerSoftware sendet. In Connect ordnen Auswertungsregeln die eingehenden Einsätze anschließend den richtigen Connect-Standorten zu.

> **Voraussetzung:** Ein kostenpflichtiger **Divera 24/7 Alarm Account** ist zwingend erforderlich. In der kostenlosen Version ist die Webhook-Funktion vollständig deaktiviert.

> **Hinweis:** Über diese Schnittstelle werden ausschließlich **Einsätze** übertragen. Fahrzeugstatus und andere Daten werden nicht übermittelt.

---

## Einrichtung

Die Schnittstelle wird auf Organisationsebene aktiviert und eingerichtet. Dazu sind **Orga-Admin-Rechte** erforderlich.

### Schritt 1: Schnittstelle in Connect aktivieren

1. Im Connect Portal zur **Organisations-Ebene** wechseln
2. **Organisation → Schnittstellen → Divera 24/7** öffnen
3. Den Schalter **„Einsätze vom Divera empfangen"** aktivieren
4. Die angezeigte **Webhook-Url** in die Zwischenablage kopieren

### Schritt 2: Webhook in Divera anlegen

1. In der **Divera 24/7 Administrationsoberfläche** anmelden. Unter Umständen fragt Divera zur Verifizierung das Passwort Ihres Divera-Accounts ab.
2. Im Bereich **Webhooks** auf das Einstellungs-Symbol klicken, um einen neuen Webhook anzulegen

3. Folgende Werte eintragen:

| Feld | Wert |
|---|---|
| **URL / Ziel des Requests** | Die in Connect angezeigte Webhook-Url einfügen |
| **Format** | POST application/json |
| **Inhalt** | „Vollständiges Objekt (inkl. Empfänger-Namen)" auswählen |

![Divera 24/7: Webhook-Formular mit URL, Format und Inhalt](/images/connect/schnittstellen/divera_02_webhook_formular.png)

4. Oben auf **Speichern** klicken

### Schritt 3: Auswertungsregeln in Connect anlegen

Wechseln Sie zurück ins Connect Portal zu **Organisation → Schnittstellen → Divera 24/7**. Unter **Auswertungsregeln** legen Sie fest, in welchem Connect-Standort ein eingehender Divera-Einsatz angelegt wird.

| Feld | Beschreibung |
|---|---|
| **Divera-Feld** | Das Divera-Feld, das geprüft wird: **Alarmierte Divera-Einheiten**, **Alarmierte Divera-Fahrzeuge** oder **Alarmierte Divera-Gruppen** |
| **Vergleichswert** | Die Einheit, das Fahrzeug oder die Gruppe, wie Sie sie in Divera verwenden |
| **Standort** | Der Connect-Standort, in dem der Einsatz angelegt werden soll |
