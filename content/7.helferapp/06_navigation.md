---
title: Navigation & Hauptbildschirm
description: Übersicht über den Hauptbildschirm der HelferApp – Tab-Navigation, App-Leiste mit Symbolen, Aktionsschaltfläche für Statusmeldungen sowie GPS-Ortungssteuerung
---

# Navigation & Hauptbildschirm

Nach der Einrichtung gelangen Sie zum **Hauptbildschirm** der App. Die Navigation erfolgt über zwei **Tabs** am unteren Bildschirmrand:

| Tab | Funktion |
|-----|----------|
| **Einsatzliste** | Alle aktiven Einsätze Ihrer Wache |
| **Karte** | Kartenansicht mit Einsätzen und Fahrzeugpositionen |

![Screenshot: Hauptbildschirm mit Tab-Navigation am unteren Rand](/images/helferapp/06_hauptbildschirm_navigation.png)

## App-Leiste

Die Leiste oben enthält folgende Schaltflächen:

| Symbol | Funktion |
|--------|----------|
| GPS-Symbol (grün/grau) | GPS-Ortung ein-/ausschalten |
| Personen-Symbol | Besatzung wechseln |
| Info-Symbol | Open-Source-Lizenzen anzeigen |
| Abmelden-Symbol | Aus der App abmelden |

![Screenshot: App-Leiste mit GPS-, Personen-, Info- und Abmelden-Symbol](/images/helferapp/06_app_leiste.png)

## Aktionsschaltfläche

Über den **runden Aktionsbutton** am unteren rechten Bildschirmrand erreichen Sie schnell:

- **Statusmeldungen 1–6** – Senden Sie einen Statuscode an die Leitstelle
- **Neuer Einsatz** – Erstellen Sie direkt einen neuen Einsatz

![Screenshot: Aufgeklapptes Aktionsbutton-Menü mit Statusmeldungen und Neuer Einsatz](/images/helferapp/06_aktionsbutton.png)

## GPS-Ortung

Die GPS-Ortung sendet Ihre Fahrzeugposition in Echtzeit an die Leitstelle und macht sie für andere Einheiten auf der Karte sichtbar.

Tippen Sie auf das **GPS-Symbol** in der App-Leiste:
- **Grünes Symbol** = Ortung aktiv
- **Graues Symbol** = Ortung deaktiviert

Die Einstellung wird gespeichert und beim nächsten App-Start wiederhergestellt.

> **Hinweis:** Für eine zuverlässige Standortübermittlung sollte die App die Berechtigung erhalten, auf den Standort auch im Hintergrund zuzugreifen. Auf manchen Geräten muss dies in den Systemeinstellungen separat erlaubt werden.

**Übertragungslogik:**
- Die Position wird übermittelt, wenn sich das Fahrzeug um mindestens **50 Meter** bewegt hat **oder** die letzte Übermittlung mehr als **10 Minuten** zurückliegt.
- Positionen mit einer GPS-Genauigkeit schlechter als 250 Meter werden nicht übermittelt.
