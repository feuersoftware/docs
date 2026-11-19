---
title: Homematic HCU1 Rauchwarnmelder
description: Einrichtung der Homematic IP HCU1 Alarmweiterleitung an FeuerSoftware Connect über das Connect-Plugin
---

# Homematic HCU1 Rauchwarnmelder

Die Homematic IP Home Control Unit (HmIP-HCU1) unterstützt die Installation eigener Plugins. Ein spezielles FeuerSoftware-Plugin wertet Alarme von Rauchwarnmeldern aus und leitet diese automatisch an Connect weiter. Bei Auslösung eines Melders wird über die öffentliche Schnittstelle (API) ein Einsatz im konfigurierten Standort erstellt.

Für Homematic wird ausschließlich die **HCU1** über dieses Plugin unterstützt.

> **Hinweis:** Diese Schnittstelle dient ausschließlich der ergänzenden Informationsübermittlung und ist **kein primärer Alarmweg**.

---

## Voraussetzungen

- Homematic IP Home Control Unit (HmIP-HCU1)
- Rauchwarnmelder in der HCU1 angelernt
- Zugang zum HCU1-Webinterface (über Hostname oder IP-Adresse)
- API-Token aus dem Connect Portal (Standort → Schnittstellen → Public API)

**Lizenzen:** Pro angebundener HCU1-Basisstation werden **5 Lizenzen** berechnet. Die Verrechnung erfolgt automatisch bei Aktivierung.

---

## Einrichtung

### Schritt 1: Plugin herunterladen

Plugin-Datei herunterladen: [homematic-connect-plugin.zip](https://feuersoftware.com/Download/tools/homematic-connect-plugin.zip)

ZIP-Archiv entpacken – es entsteht eine `.tar.gz`-Datei, die für den nächsten Schritt benötigt wird.

### Schritt 2: Plugin in der HCU1 installieren

1. Im HCU1-Webinterface anmelden (Hostname oder IP-Adresse im Browser aufrufen; alternativ finden Sie einen Link zum Webinterface in der Homematic IP App). Das Kennwort für den Login steht auf der Unterseite der Basisstation.
2. Menüpunkt **„Plugins"** wählen
3. **Entwicklermodus aktivieren** (Voraussetzung für die Plugin-Installation)

![HCU1-Webinterface: Menüpunkt Plugins mit Entwicklermodus](/images/connect/schnittstellen/homematic_hcu1_01_plugins.png)

4. Die `.tar.gz`-Datei hochladen
5. Installation abwarten – dieser Vorgang kann mehrere Minuten dauern

![HCU1-Webinterface: Plugin-Datei (.tar.gz) hochladen](/images/connect/schnittstellen/homematic_hcu1_02_plugin_upload.png)

Nach der erfolgreichen Installation zeigt die Statusseite des Plugins an, dass eine Konfiguration erforderlich ist.

![HCU1-Webinterface: Plugin-Statusseite mit Hinweis „Konfiguration erforderlich"](/images/connect/schnittstellen/homematic_hcu1_04_konfiguration_erforderlich.png)

### Schritt 3: Plugin konfigurieren

Nach der Installation auf das **Zahnrad-Symbol** neben dem Plugin klicken und folgende Felder ausfüllen:

![HCU1-Webinterface: Konfigurationsdialog des Plugins](/images/connect/schnittstellen/homematic_hcu1_05_konfiguration.png)

| Feld | Beschreibung |
|---|---|
| **Authentifizierungsschlüssel** | API-Token aus dem Connect Portal (Standort → Schnittstellen → Public API) |
| **Alarmstichwort** | Stichwort für den erstellten Einsatz, z. B. `Interner Rauchwarnmelder` |
| **Zusatzinfo für Connect-Einsatz** | Optionaler Hinweistext oder Handlungsanweisung |

**„Speichern"** klicken.

> **Wichtig:** Den API-Token aus dem Connect Portal auf **Standort-Ebene** verwenden – nicht auf Organisationsebene.

### Schritt 4: SGTIN im Connect Portal eintragen

Nach erfolgreicher Konfiguration zeigt das Plugin die **SGTIN** (Seriennummer der Basisstation) an. Die SGTIN steht außerdem auf der Unterseite der Basisstation.

![HCU1-Webinterface: Erfolgsmeldung mit Anzeige der SGTIN](/images/connect/schnittstellen/homematic_hcu1_06_erfolgreich.png)

1. Im Connect Portal den gewünschten **Standort** wählen
2. **Seitenleiste → Schnittstellen** öffnen und die **Homematic**-Schnittstelle hinzufügen
3. Die SGTIN **ohne Bindestriche** eintragen
4. Optional eine **Beschreibung** hinzufügen, um die Basisstation einfacher zu identifizieren
5. Speichern

> Die SGTIN ist zwingend erforderlich, damit Alarmereignisse korrekt übertragen werden.

![Screenshot: Connect Portal – Homematic SGTIN eintragen](/images/connect/schnittstellen/homematic_hcu1_03_sgtin.png)

### Schritt 5: Verbindung prüfen

Funktionsprüfung mit **Rauchmelder-Testspray** durchführen und anschließend im Connect Portal prüfen, ob ein Einsatz erstellt wurde.

**Seitenleiste → Einsätze** → Ein neuer Einsatz mit dem konfigurierten Stichwort sollte erscheinen.
