---
title: Installation & Anmeldung
description: Fahrzeug-Zugang für das EinsatzTablet in Connect aktivieren, Berechtigungen beim ersten Start erteilen und per QR-Code oder Zugangsdaten anmelden
---

# Installation & Anmeldung

Das EinsatzTablet meldet sich nicht mit einem persönlichen Benutzerkonto an, sondern mit einem **Fahrzeug-Zugang**. Dieser ist an ein Fahrzeug in Connect gebunden: Das Tablet empfängt die Alarmierungen dieses Fahrzeugs, setzt dessen Funkstatus und überträgt dessen Position.

---

## Fahrzeug-Zugang aktivieren

Das Fahrzeug muss im Connect Portal angelegt sein (siehe [Fahrzeuge](/connect/06_fahrzeuge)).

**Im Connect Portal:**

1. Den gewünschten **Standort** wählen
2. **Seitenleiste → Fahrzeuge** → Fahrzeug öffnen
3. Tab **„EinsatzTablet"** wählen und **aktivieren**

Für die Aktivierung wird eine zusätzliche Lizenz benötigt (siehe [Lizenzierung](/connect/14_lizenzierung)). Nach der Aktivierung wird eine E-Mail mit den **Zugangsdaten** und einem **QR-Code** für die Anmeldung versendet.

**Alternativ in der EinsatzApp:** **Fahrzeuge** → Fahrzeug antippen → oben links auf das **Aktivierungs-Symbol** tippen. Der QR-Code wird direkt angezeigt, zusätzlich geht eine E-Mail mit den Zugangsdaten raus.

> Wer bereits das bisherige EinsatzTablet nutzt, kann für die neue App **dieselben Fahrzeug-Zugangsdaten** verwenden.

---

## App installieren

Die App aus dem App Store bzw. Google Play installieren – aktuell über die Beta, siehe [Produktübersicht – Download](/einsatztablet/01_produktuebersicht#plattformen-download). Auf dem Gerät heißt die App **„EinsatzTablet"**.

---

## Berechtigungen beim ersten Start

Beim ersten Start fragt die App **vor der Anmeldung** nacheinander alle Berechtigungen ab, die für Alarmierung und Fahrzeugposition nötig sind („Schritt X von Y", **„Weiter"**). Zu jedem Schritt erklärt die App, wofür die Berechtigung gebraucht wird.

![Screenshot: Berechtigungs-Assistent beim ersten Start](/images/einsatztablet/01_berechtigungen.png)

| Berechtigung | Wofür | Plattform |
|---|---|---|
| **Benachrichtigungen** | Push-Alarme, auch wenn das Tablet gesperrt ist, und die Statusmeldung der Alarmverbindung | iPad & Android |
| **Genauer Standort** | Fahrzeugposition an Connect übertragen, Position auf den Karten, Aufnahmeort von Einsatzfotos | iPad & Android |
| **Standort im Hintergrund** | Position auch übertragen, wenn die App nicht im Vordergrund ist. Bitte **„Immer erlauben"** (iPad) bzw. **„Immer zulassen"** (Android) wählen | iPad & Android |
| **Kamera** | Anmeldung per QR-Code, Fotos für die Einsatzdokumentation und Mängelmeldungen | iPad & Android |
| **Von Akku-Optimierung ausnehmen** | Ohne Ausnahme trennt Android die Alarmverbindung, sobald das Tablet ruht – Alarme kommen dann nicht mehr an | Android |
| **Alarm im Vollbild** | Ein Alarm schaltet das Display ein und öffnet die App, auch wenn das Tablet gesperrt ist (nur wenn [„Alarm über dem Sperrbildschirm"](/einsatztablet/15_setup#automatisierung) aktiv ist) | Android |
| **Über anderen Apps einblenden** | Ein Alarm holt die App nach vorne, auch wenn gerade eine andere App läuft, z. B. die Navigation | Android |

Jede Berechtigung kann abgelehnt und später unter **Setup → Berechtigungen** nachgeholt werden. Fehlt eine wichtige Berechtigung, zeigt die App oben den Hinweis **„Der App fehlen Berechtigungen für Alarme und Fahrzeugposition: …"** – über **„Beheben"** gelangt man direkt zur passenden Einstellung.

::warning
Ohne die Berechtigungen für Benachrichtigungen, Standort im Hintergrund und (unter Android) die Ausnahme von der Akku-Optimierung ist ein zuverlässiger Alarmempfang nicht möglich.
::

---

## Am Tablet anmelden

![Screenshot: Anmeldung am EinsatzTablet](/images/einsatztablet/02_login.png)

### Per QR-Code (empfohlen)

1. Auf **„QR-Code scannen"** tippen
2. Den QR-Code aus der Aktivierungs-E-Mail oder der EinsatzApp scannen

### Per Zugangsdaten

1. **Benutzername** und **Passwort** aus der Aktivierungs-E-Mail eingeben
2. Auf **„Anmelden"** tippen

Nach der Anmeldung öffnet sich die eingestellte **Startansicht** (standardmäßig die Einsatzliste). Läuft gerade ein Einsatz, wird er direkt geöffnet.

Das Tablet bleibt dauerhaft angemeldet; die Anmeldung wird im Hintergrund automatisch erneuert. Abmelden ist unter **Setup → Über die App → „Abmelden"** möglich.

### Fehlermeldungen bei der Anmeldung

| Meldung | Ursache / Lösung |
|---|---|
| „Benutzername oder Passwort ist falsch." | Zugangsdaten prüfen oder QR-Code verwenden |
| „Dieses Konto ist für diese App nicht freigeschaltet." | Es wurde kein Fahrzeug-Zugang verwendet (z. B. ein persönliches Benutzerkonto). Den Fahrzeug-Zugang aus der Aktivierungs-E-Mail nutzen |
| „Dieses Konto oder die Organisation ist deaktiviert." | Fahrzeug-Zugang bzw. Organisation in Connect prüfen |
| „Dieser QR-Code gehört zu einem anderen Konto. …" | Das Tablet ist bereits mit einem anderen Fahrzeug angemeldet – zuerst unter Setup abmelden |
| „Verbindung zum Server nicht möglich. Bitte Internetverbindung prüfen." | Keine Internetverbindung |
| „QR-Code konnte nicht gelesen werden." | QR-Code erneut scannen oder Zugangsdaten eingeben |

### Wenn die Anmeldung abgelehnt wird

Wurde das Passwort des Fahrzeug-Zugangs geändert, meldet die App: **„Die gespeicherten Zugangsdaten wurden abgelehnt …"** Das Tablet bleibt noch eine Zeit lang angemeldet („Das Tablet bleibt noch bis … angemeldet"), damit der Einsatzbetrieb weiterläuft. Über **„Neu anmelden"** mit den neuen Zugangsdaten bzw. dem neuen QR-Code anmelden.
