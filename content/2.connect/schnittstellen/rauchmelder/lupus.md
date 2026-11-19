---
title: Lupus Electronics Rauchwarnmelder
description: Einrichtung der Lupus Rauchwarnmelder Alarmweiterleitung an FeuerSoftware Connect über die Lupus Cloud
---

# Lupus Electronics Rauchwarnmelder

Die Lupus-Schnittstelle ermöglicht die Weiterleitung von Alarmen aus Lupus Electronics Rauchwarnmeldern (mit IoT-SIM-Karte) an FeuerSoftware Connect. Die Melder benötigen **keine Basisstation und keine WLAN-Verbindung**. Die Konfiguration und Alarmweiterleitung erfolgt über die **Lupus Cloud** mittels Webhooks. Bei Auslösung eines Melders wird in Connect im entsprechenden Standort ein Einsatz erzeugt.

Weitere Infos zu den Meldern finden Sie auf der [Website von Lupus Electronics](https://www.lupus-electronics.de/de/rauchmelder).

> **Hinweis:** Diese Schnittstelle dient ausschließlich der ergänzenden Informationsübermittlung und ist **kein primärer Alarmweg**.

---

## Voraussetzungen

- Lupus Electronics Rauchwarnmelder mit IoT-SIM-Karte
- Zugang zur Lupus Cloud ([lupuscloud.com](https://www.lupuscloud.com/auth))
- Zugang zum FeuerSoftware Connect Portal

**Lizenzen:** Pro aktivierter Lupus-Schnittstelle an einem Standort werden **5 Lizenzen** berechnet.

---

## Einrichtung

Die Einrichtung erfolgt in zwei Teilen: zuerst im Connect Portal, dann in der Lupus Cloud.

### Teil 1: Schnittstelle im Connect Portal einrichten

1. Im Connect Portal den gewünschten **Standort** wählen
2. **Seitenleiste → Schnittstellen → Lupus**
3. Kontrollkästchen **„Aktiviert"** setzen
4. Gewünschte **Ereignisse** auswählen, für die ein Einsatz erstellt werden soll (z. B. Rauchalarm)
5. **Alarmstichwort** anpassen (z. B. `Interner Rauchwarnmelder`)
6. **„Speichern"** klicken → ein **Bearer Token** wird generiert und angezeigt

![Screenshot: Connect Portal – Lupus Schnittstelle einrichten](/images/connect/schnittstellen/lupus_01_connect.png)

> Den generierten Bearer Token für den nächsten Schritt notieren oder kopieren.

### Teil 2: Webhook in der Lupus Cloud konfigurieren

Der Webhook kann sowohl auf einem **Gebäude** als auch auf darunterliegenden Einheiten (z. B. einem **Stockwerk**) angelegt werden.

1. Unter [lupuscloud.com](https://www.lupuscloud.com/auth) anmelden
2. Auf das **Einstellungssymbol** klicken und **„Integrationen und Webhooks verwalten"** wählen

![Lupus Cloud: Einstellungsmenü mit „Integrationen und Webhooks verwalten"](/images/connect/schnittstellen/lupus_03_cloud_integrationen.png)

3. Im neuen Fenster auf **„Neuen Webhook anlegen"** klicken
4. **„Aktiviert"** aktivieren
5. Folgende URL eintragen:
   ```
   https://connectapi.feuersoftware.com/interfaces/lupus/webhook
   ```
6. Die Felder **Benutzername** und **Passwort** leer lassen
7. Den **Bearer Token** aus dem Connect Portal einfügen – per Copy & Paste, damit die komplette Zeichenkette übernommen wird
8. Mit **„Testalarm senden"** die Verbindung prüfen

> **Achtung:** „Testalarm senden" erzeugt einen echten Einsatz im entsprechenden Connect-Standort und **alarmiert** diesen.

![Screenshot: Lupus Cloud – Webhook konfigurieren](/images/connect/schnittstellen/lupus_02_cloud.png)

### Schritt 3: Verbindung prüfen

Nach dem Testalarm im Connect Portal prüfen, ob ein Einsatz im konfigurierten Standort erstellt wurde.

**Seitenleiste → Einsätze** → Ein neuer Testeinsatz sollte in der Liste erscheinen.

> **Empfehlung:** Führen Sie zur Überprüfung der Funktionalität zusätzlich einen Test mit einem **Rauchmelder-Testspray** durch.
