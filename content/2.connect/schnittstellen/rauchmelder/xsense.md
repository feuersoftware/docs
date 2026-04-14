---
title: X-Sense Rauchwarnmelder
description: Einrichtung der X-Sense Alarmweiterleitung an FeuerSoftware Connect – Schritt-für-Schritt-Anleitung
---

# X-Sense Rauchwarnmelder

Die X-Sense-Schnittstelle ermöglicht die Auswertung von Alarmen aus X-Sense Rauchwarnmeldern und deren automatische Weiterleitung an FeuerSoftware Connect. Bei Auslösung eines Melders wird automatisch ein Einsatz im konfigurierten Standort erstellt.

> **Hinweis:** Diese Schnittstelle dient ausschließlich der ergänzenden Informationsübermittlung und ist **kein primärer Alarmweg**. Es kann nicht gewährleistet werden, dass die Alarmübertragung jederzeit zuverlässig und unterbrechungsfrei erfolgt. Nutzung auf eigene Verantwortung.

---

## Voraussetzungen

| Anforderung | Details |
|---|---|
| **Basisstation** | X-Sense SBS50 |
| **Unterstützte Melder** | Rauchwarnmelder XS01-M, CO-Melder, Wasserleckmelder |
| **Lizenzen** | Pro aktivierter Schnittstelle an einem Standort werden **5 Lizenzen** berechnet (unabhängig von der Anzahl der Melder) |

---

## Einrichtung

### Schritt 1: Installateur in der X-Sense App einladen

1. **X-Sense App** öffnen
2. **Konto → Installationsservice → Installateur einladen** tippen
3. Bedingungen des Installationsdienstes lesen und bestätigen
4. X-Sense Datenschutzbestimmungen akzeptieren

![Screenshot: X-Sense App – Installateur einladen](/images/connect/schnittstellen/xsense_01_einladen.png)

### Schritt 2: FeuerSoftware als Installateur eintragen

1. **„Zu Einstellungen gehen"** unter „Installateur einladen" tippen
2. E-Mail-Adresse eingeben: **info@feuersoftware.com**
3. Gewünschte Geräte auswählen
4. **„Installateur einladen"** bestätigen

![Screenshot: X-Sense App – E-Mail eintragen](/images/connect/schnittstellen/xsense_02_email.png)

### Schritt 3: Schnittstelle im Connect Portal aktivieren

1. Im Connect Portal den gewünschten **Standort** wählen
2. **Seitenleiste → Schnittstellen → X-Sense**
3. Die X-Sense-E-Mail-Adresse eingeben und **„Weiter"** klicken
4. Bei gefundener Einladung auf **„Aktivieren"** klicken

![Screenshot: Connect Portal – X-Sense aktivieren](/images/connect/schnittstellen/xsense_03_aktivieren.png)

### Schritt 4: Alarmstichwörter konfigurieren

Nach der Aktivierung können die Alarmstichwörter für jeden Meldertyp individuell festgelegt werden:

| Meldertyp | Beispiel-Stichwort |
|---|---|
| Rauchalarm | `Interner Rauchwarnmelder` |
| CO-Alarm | `CO-Alarm` |
| Wasserleckalarm | `Wasserleckalarm` |

![Screenshot: Connect Portal – X-Sense Stichwörter konfigurieren](/images/connect/schnittstellen/xsense_04_stichwoerter.png)

> **Tipp:** Wenn du eine angepasste AAO oder dynamische AAO verwendest, prüfe, ob für die neuen Alarmstichwörter entsprechende Regeln angelegt werden müssen.

---

## Hinweise

- Die Schnittstelle kann nur für **einen Standort** gleichzeitig aktiviert werden
- Die Leitstelle wird **nicht** automatisch informiert – der Alarm wird nur im FeuerSoftware-System verarbeitet
- **Regelmäßige Funktionsprüfung** mit Rauchmelder-Testspray empfohlen
