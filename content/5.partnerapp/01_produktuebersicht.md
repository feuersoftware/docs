---
title: Produktübersicht
description: Funktionsweise der PartnerApp – Statusanzeige, Push-Benachrichtigungen und Voraussetzungen
---

# PartnerApp – Produktübersicht

Die **PartnerApp** ist eine eigenständige App für Partner von Einsatzkräften. Sie ermöglicht es, dass Angehörige, Lebenspartner oder Arbeitgeber automatisch benachrichtigt werden, sobald eine Einsatzkraft zu einem Einsatz ausrückt – ganz ohne dass operative Einsatzdetails weitergegeben werden.

---

## Funktionsweise

Die Benachrichtigung wird **nicht beim Eingang eines Alarms** ausgelöst, sondern erst dann, wenn die Einsatzkraft in der EinsatzApp auf den Alarm **reagiert** (Zusagen, Absagen, Später). Damit gibt die Einsatzkraft selbst die Rückmeldung, die ihren Partner informiert.

```
Alarm eingehend → Einsatzkraft reagiert in EinsatzApp → Partner erhält Push-Benachrichtigung
```

Die Partner-App zeigt ausschließlich den **Status der Einsatzkraft** – keine Einsatzadresse, kein Stichwort, keine sensiblen Daten.

---

## Statusanzeige

Die App zeigt für jeden verbundenen Partner einen der folgenden Statuswerte:

| Status | Farbe | Bedeutung |
|---|---|---|
| **Einsatz bestätigt** | Grün | Einsatzkraft hat zugesagt |
| **Einsatz bestätigt (später)** | Gelb | Einsatzkraft kommt zeitverzögert |
| **Einsatz abgelehnt** | Rot | Einsatzkraft hat abgesagt |
| **Kein Einsatz aktiv** | Grau | Kein laufender Einsatz |

Neben dem Status werden der **Name der Einsatzkraft**, die **Organisation** und der **Zeitstempel** der letzten Statusänderung angezeigt.

---

## Mehrere Partner und Organisationen

- **Mehrere Partner:** Die PartnerApp kann gleichzeitig mehrere Einsatzkräfte überwachen. Jede Verbindung wird separat angezeigt.
- **Mehrere Organisationen:** Gehört eine Einsatzkraft mehreren Organisationen an, muss die Verbindung für jede Organisation separat eingerichtet werden.

---

## Voraussetzungen

### Auf Seite der Organisation
Der **Partnermodus** muss in den Connect-Organisationseinstellungen durch einen Administrator aktiviert sein:

**Connect Portal → Organisations-Ebene → Einstellungen → HelferApp / Partnermodus**

### Auf Seite der Einsatzkraft
- **EinsatzApp** installiert und eingerichtet
- Mitglied einer Organisation, in der der Partnermodus aktiviert ist

### Auf Seite des Partners
- **PartnerApp** installiert (iOS oder Android)
- Berechtigung für Push-Benachrichtigungen erteilt
- Berechtigung für Kamerazugriff erteilt (für QR-Code-Scan)

---

## App herunterladen

| Plattform | Store |
|---|---|
| **iOS** | Apple App Store – „FeuerSoftware PartnerApp" |
| **Android** | Google Play Store – „FeuerSoftware PartnerApp" |

---

## Push-Benachrichtigungen

Die Benachrichtigungen werden über **Firebase Cloud Messaging (FCM)** zugestellt und funktionieren auch dann, wenn die App im Hintergrund läuft oder das Gerät gesperrt ist. Ton und Vibration können in den Systemeinstellungen des Geräts angepasst werden.

