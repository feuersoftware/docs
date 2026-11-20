---
title: Umstieg vom alten EinsatzTablet
description: Vom bisherigen EinsatzTablet auf das neue EinsatzTablet wechseln – Installation, Anmeldung, neue Funktionen, Änderungen und Funktionen, die noch folgen
---

# Umstieg vom alten EinsatzTablet

Das bisherige EinsatzTablet (.NET MAUI) hat das **Ende seiner Lebensdauer** erreicht und wird nicht mehr weiterentwickelt. Das neue EinsatzTablet ist von Grund auf neu entwickelt: Es funktioniert grundsätzlich wie gewohnt, die Bedienung ist aber komplett neu und viele Funktionen sind hinzugekommen.

Die Dokumentation der bisherigen App bleibt vorerst unter [EinsatzTablet (alt)](/einsatztablet/alt) erhalten.

---

## So wechselt ihr

1. **Neue App installieren** – das neue EinsatzTablet ist eine **eigene App** und kommt nicht als Update der bisherigen. Download: [Produktübersicht](/einsatztablet/01_produktuebersicht#plattformen-download)
2. **Berechtigungen erteilen** – die App führt beim ersten Start durch alle nötigen Berechtigungen ([Installation & Anmeldung](/einsatztablet/02_installation_und_anmeldung#berechtigungen-beim-ersten-start))
3. **Anmelden** – mit den **bisherigen Fahrzeug-Zugangsdaten** bzw. dem QR-Code. Ein neuer Zugang ist nicht nötig
4. **Setup einrichten** – die Einstellungen der bisherigen App werden **nicht übernommen**. Am besten einmal [Setup](/einsatztablet/15_setup) durchgehen, insbesondere Sprachausgabe, Anzeige & Filter und den Passwortschutz
5. **Alte App entfernen** – sobald die neue App im Fahrzeug zuverlässig läuft, die bisherige App deinstallieren, damit nicht beide gleichzeitig Alarme empfangen und Positionen senden

---

## Was neu ist

- **Komplett neue Oberfläche** mit Navigationsleiste, hellem und dunklem Design und Unterstützung für Hoch- und Querformat
- **Anfahrt** mit Navigation, Funkstatus, Lagemeldungen der Ersteintreffenden und Gesamtstärke aller Einsatzmittel
- **Besatzung** – Stärkemeldung per Schnellzuweisung oder namentlich mit Funktionen GF/MA/AGT, auch für andere Fahrzeuge
- **Protokoll** – Protokolleinträge und Lagemeldungen lesen und schreiben
- **Aufgaben**, **Bericht** (Einsatzdokumentation und PDF) und **Alarmieren**
- **Karte** mit Google Maps, Verkehrslage, Waldwegen (Navlog), Straßensperrungen, Fotos und „Einsatzort verschieben"
- **HomeResQ**-Objektinformationen und **Datenfreigabe** mit anderen Standorten
- **Sprachausgabe** über Tablet, Bluetooth, Apple CarPlay oder Android Auto
- **Arbeiten ohne Netz** – Meldungen, Status, Besatzung und Fotos werden zwischengespeichert und nachgesendet
- **Schnellaktionen** für Foto, Mängelmeldung, Besatzung, Meldung und Hydrantensuche
- **Online-Speicher über Connect** – Nextcloud oder Connect Storage werden zentral im Connect Portal verbunden, keine Zugangsdaten mehr auf dem Tablet

---

## Was sich geändert hat

| Bisher | Neu |
|---|---|
| Nextcloud wird in der App mit eigenen Zugangsdaten eingerichtet | Online-Speicher wird pro Standort im [Connect Portal](/connect/schnittstellen/nextcloud) verbunden |
| Hydrantenkarte als eigene Ansicht | Wasserversorgung als Ebenen der [Karte](/einsatztablet/07_karte); Schnellaktion „Hydrant finden" |
| Rückmeldungen und „Personal absenden" | Rückmeldungen in der [Übersicht](/einsatztablet/05_uebersicht), Stärke über [Besatzung](/einsatztablet/09_besatzung) |
| Meldungen | [Protokoll](/einsatztablet/08_protokoll) mit Lagemeldungen und Protokolleinträgen |
| Einstellungen wie „RIC ausblenden" | Einzelne Schalter unter [Setup → Anzeige & Filter](/einsatztablet/15_setup#anzeige-filter) |

---

## Was noch folgt

| Funktion | Stand |
|---|---|
| **TETRAcontrol UBX-Box** (Status und SDS über das Funkgerät) | Noch nicht enthalten, geplant für das **2. Quartal 2027**. Wer die UBX-Box nutzt, bleibt dafür bis dahin beim bisherigen EinsatzTablet |
| **Funkgruppen** | Noch nicht verfügbar |
| **Einstellungen für Benachrichtigungen** | Folgen in Kürze |

::note
Fragen oder Probleme beim Umstieg? Meldet euch über **Setup → Diagnose → „Fehler melden"** oder per E-Mail an [info@feuersoftware.com](mailto:info@feuersoftware.com).
::
