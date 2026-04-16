---
title: Produktübersicht
description: Überblick über die FeuerSoftware EinsatzApp – Funktionen, Plattformen und Einbettung ins FeuerSoftware-Ökosystem
---

# Produktübersicht

Die **FeuerSoftware EinsatzApp** ist die mobile Einsatz-Plattform für Einsatzkräfte in Feuerwehr, Rettungsdienst und THW. Sie verbindet die Mitglieder einer Organisation in Echtzeit und stellt alle relevanten Informationen bei einem Alarm oder im Dienstalltag bereit.

Die App ist verfügbar für:
- **iOS** (iPhone / iPad) – [Im Apple App Store laden](https://apps.apple.com/de/app/feuersoftware-einsatzapp/id6737230606)
- **Android** – [Im Google Play Store laden](https://play.google.com/store/apps/details?id=com.feuersoftware.einsatzapp)

### Betaversionen

| Plattform | Zugang |
|---|---|
| **iOS – TestFlight** | [Beta über TestFlight installieren](https://testflight.apple.com/join/ejxGcjRq) |
| **Android – Play Store** | Play Store → EinsatzApp → ganz nach unten scrollen → **„Beta-Tester werden"** → **„Mitmachen"** |

---

## Funktionsumfang im Überblick

| Bereich | Beschreibung |
|---|---|
| **Alarmierung** | Eingehende Einsätze mit Ton, Vibration und Aktionsbuttons direkt in der Benachrichtigung |
| **Einsatzdetails** | Adresse, Stichwort, Karte, Fahrzeugzuweisungen, Personenstatus, Protokoll |
| **Statusmeldung** | Eigenen Status für einen Einsatz setzen (Komme / Komme später / Komme nicht) |
| **Verfügbarkeit** | Allgemeine Verfügbarkeit im Dienstalltag verwalten |
| **Termine** | Kalender mit Dienstplan, Übungen und Veranstaltungen; An-/Abmeldung |
| **Fahrzeuge** | Fahrzeugstatus und Verfügbarkeit einsehen |
| **News** | Organisationsinterne Neuigkeiten lesen |
| **Infoboard** | Kurzinfos und Aushänge der Organisation |
| **Karte** | Google Maps mit Fahrzeugen, Hydranten (Wasserkarte) und Geofence |
| **Unwetterwarnungen** | Aktuelle Warnmeldungen direkt im Dashboard |
| **Statistiken** | Persönliche Einsatz- und Dienststatistiken |
| **Mehrere Konten** | Mehrere Organisationen auf einem Gerät verwalten |

---

## Einbettung ins FeuerSoftware-Ökosystem

Die EinsatzApp ist Teil der FeuerSoftware-Produktfamilie und arbeitet nahtlos mit den anderen Produkten zusammen:

- **Connect** – Zentrales Portal für Benutzerverwaltung, Alarmierung und Konfiguration
- **EinsatzManager** – Webbasiertes Einsatzleitsystem für die Leitstelle
- **EinsatzMonitor** – Anzeigesystem für die Fahrzeughalle
- **EinsatzTablet** – Fahrzeuggebundene Lösung für den Einsatzbetrieb
- **HelferApp** – Vereinfachte App für Helfer und Mitglieder

Fahrzeuge, Standorte, Stichwörter und Benutzerrollen werden zentral im **Connect**-Portal verwaltet und stehen in der EinsatzApp automatisch zur Verfügung.

---

## Technische Grundlage

- **Plattform:** Flutter (iOS & Android, nativ)
- **Echtzeit:** WebSocket-Verbindungen (SignalR) für Live-Updates bei Einsätzen, Fahrzeugstatus u. v. m.
- **Push-Nachrichten:** Firebase Cloud Messaging (FCM)
- **Authentifizierung:** OpenID Connect (OIDC) via Keycloak
- **Backend:** `connect.feuersoftware.com`

---

![Screenshot: Startbildschirm der EinsatzApp mit aktivem Einsatz](/images/einsatzapp/01_dashboard_overview.png)
