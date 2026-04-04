---
title: Häufige Fragen (FAQ)
description: Antworten auf die häufigsten Fragen zur EinsatzApp – Alarmierung, Termine, Konten, Berechtigungen und mehr
---

# Häufige Fragen (FAQ)

---

## Alarmierung

### Ich bekomme keinen Alarmton, obwohl ich alarmiert werde

Die häufigsten Ursachen:

- **Alarm-Modus ist auf „Lautlos" gestellt** – Flammen-Symbol in der Menüleiste antippen und auf „Immer laut" wechseln.
- **iOS:** Kritische Benachrichtigungen nicht aktiviert → [iOS-Systemeinstellungen](/einsatzapp/ios-systemeinstellungen)
- **Android:** DND-Zugriff nicht erteilt oder Akkuoptimierung aktiv → [Android-Systemeinstellungen](/einsatzapp/android-systemeinstellungen)
- **Apple Watch verbunden?** Der Alarmton wird dann über die Watch ausgegeben, nicht über das iPhone. Benachrichtigungen in der Watch App für die EinsatzApp deaktivieren.

---

### Ich bekomme gar keine Benachrichtigungen

- Benachrichtigungen für die EinsatzApp in den Systemeinstellungen aktiviert?
- **iOS:** Einstellungen → EinsatzApp → Mitteilungen → Mitteilungen erlauben: Ein
- **Android:** Einstellungen → Apps → EinsatzApp → Benachrichtigungen → Ein
- Ist die App korrekt angemeldet? Seitenmenü öffnen und prüfen, ob Name und Organisation angezeigt werden.

---

### Alarme kommen tagsüber, aber nachts nicht an

- **iOS:** Fokus-Modus „Schlafen" blockiert Benachrichtigungen → EinsatzApp als Ausnahme eintragen oder Kritische Benachrichtigungen aktivieren. → [iOS-Systemeinstellungen](/einsatzapp/ios-systemeinstellungen)
- **Android:** Energiesparmodus oder Akkuoptimierung schränkt Hintergrundaktivität ein → [Android-Systemeinstellungen](/einsatzapp/android-systemeinstellungen)

---

### Was ist der Unterschied zwischen den Alarm-Modi?

| Modus | Verhalten |
|---|---|
| **Lautlos** | Kein Ton, nur stille Benachrichtigung |
| **Normal** | Alarmton, respektiert Stummschaltung |
| **Immer laut** | Alarmton immer, ignoriert Stummschaltung und „Bitte nicht stören" |

Wechseln über: **Flammen-Symbol in der Menüleiste → Schnellaktionen**

---

### Bei verbundenem Auto (CarPlay / Bluetooth) kommt kein Alarmton

Wenn das iPhone oder Android-Gerät über CarPlay oder Bluetooth mit einem Fahrzeug verbunden ist, leitet das Betriebssystem Audiosignale an das Fahrzeugsystem weiter. Der Alarmton der EinsatzApp wird dann über das Autosystem ausgegeben — sofern das Fahrzeugsystem das unterstützt.

Falls kein Ton zu hören ist:

- **Lautstärke am Fahrzeugsystem** prüfen (Medienlautstärke, nicht Telefonlautstärke)
- **Bluetooth-Verbindung trennen** und prüfen, ob der Alarm dann über das Gerät ausgelöst wird
- Auf **iOS:** Sicherstellen, dass Kritische Benachrichtigungen aktiviert sind – diese können auch bei verbundenem CarPlay den Alarmton erzwingen

---

### Was ist ein Info-Alarm?

Ein Info-Alarm informiert dich über einen laufenden Einsatz, **ohne dich zu alarmieren**. Er kommt als normale Benachrichtigung (kein lauter Ton, kein Durchbrechen der Stummschaltung) und du erscheinst nicht in der Alarmierungsliste. Erkennbar am Titel „Einsatzinformation" statt dem Einsatzstichwort.

---

### Wie sende ich einen Test-Alarm?

**Seitenmenü → Einstellungen → Alarmeinstellungen → „Test-Alarm senden"**

Der Test löst Ton, Vibration und eine Benachrichtigung aus – genau wie ein echter Einsatz.

---

## Termine

### Wie melde ich mich zu einem Termin an?

**Option 1:** Termin antippen → Detailansicht → farbigen Statusbutton antippen → Status wählen.

**Option 2 (schneller):** Terminkarte im Dashboard **lang drücken** → direkt Anmeldestatus wählen.

---

### Ich sehe den Anmeldebutton nicht

Die Anmeldefunktion muss vom Administrator für diesen Termin aktiviert sein. Außerdem muss die Anmeldefrist noch laufen. Prüfe in den Termindetails, ob ein Anmeldeschluss eingetragen ist.

---

### Wie exportiere ich einen Termin in meinen Gerätekalender?

**Einmalig:** Termin öffnen → Drei-Punkte-Menü oben rechts → **„Im Kalender speichern"**

**Automatisch alle Termine:** Seitenmenü → Einstellungen → App-Einstellungen → **„Termine mit Gerätekalender synchronisieren"** aktivieren.

---

### Ich habe die Kalender-Synchronisation aktiviert, aber es erscheinen keine Termine auf meinem Gerät

Prüfe folgende Punkte:

- **Kalender-Berechtigung erteilt?** Die App benötigt Zugriff auf den Gerätekalender. Prüfe unter Systemeinstellungen → EinsatzApp → Kalender, ob die Berechtigung erteilt ist.
- **Richtiger Kalender ausgewählt?** Beim Aktivieren der Synchronisation wirst du nach einem Zielkalender gefragt. Prüfe in den App-Einstellungen, ob der gewünschte Kalender ausgewählt ist.
- **Termine wurden vor der Aktivierung erstellt?** Es werden nur neue oder geänderte Termine synchronisiert. Bereits bestehende Termine können nachträglich manuell exportiert werden (Termin öffnen → Drei-Punkte-Menü → **„Im Kalender speichern"**).

---

## Konten & Anmeldung

### Ich kann mich nicht anmelden

- Prüfe, ob du einen aktiven Account in deiner Organisation hast (ggf. beim Administrator nachfragen).
- Stelle sicher, dass du eine stabile Internetverbindung hast.
- Versuche, den Browser-Cache zu leeren oder einen anderen Browser zu verwenden, wenn der Login-Bildschirm nicht lädt.

---

### Kann ich mehrere Organisationen auf einem Gerät nutzen?

Ja. Seitenmenü → **„Konto hinzufügen"** → mit den Zugangsdaten der zweiten Organisation anmelden. Zwischen den Konten wechselst du im Seitenmenü.

---

### Wie melde ich mich ab?

Seitenmenü → ganz unten auf **„Abmelden"** tippen (mit Organisations- und Benutzername angezeigt) → bestätigen.

---

## Verfügbarkeit & Status

### Ich bekomme keine Benachrichtigungen für neue News

Prüfe, ob News-Benachrichtigungen aktiviert sind:

**Seitenmenü → Einstellungen → Benachrichtigungs-Abonnements** → sicherstellen, dass **„Neue News"** aktiviert ist.

Falls die Einstellung bereits aktiv ist, prüfe zusätzlich die Systemberechtigungen:
- **iOS:** Einstellungen → EinsatzApp → Mitteilungen → Mitteilungen erlauben: Ein
- **Android:** Einstellungen → Apps → EinsatzApp → Benachrichtigungen → Ein

---

### Was ist der Unterschied zwischen Verfügbarkeit und Einsatzstatus?

- **Verfügbarkeit** – allgemeiner Bereitschaftsstatus im Dienstalltag (z. B. „Verfügbar", „Nicht verfügbar"). Wird über das Flammen-Symbol in der Menüleiste gesetzt.
- **Einsatzstatus** – spezifische Rückmeldung zu einem konkreten Einsatz (Komme / Komme später / Komme nicht). Wird in der Einsatzdetailansicht gesetzt.

---

### Meine Verfügbarkeit setzt sich automatisch zurück, obwohl ich das nicht möchte

Wenn du die Verfügbarkeit mit einem **Endzeitpunkt** gesetzt hast, wird sie nach Ablauf dieses Zeitpunkts automatisch zurückgesetzt — das ist das erwartete Verhalten.

Prüfe beim Setzen der Verfügbarkeit, ob ein Endzeitpunkt eingetragen ist: Flammen-Symbol in der Menüleiste antippen → Verfügbarkeits-Button **lang drücken** → im Dialog den Endzeitpunkt prüfen oder entfernen.

Wenn du die Verfügbarkeit **ohne** Endzeitpunkt gesetzt hast und sie sich trotzdem zurücksetzt, wende dich bitte an den Support.

---

### Wie setze ich die Verfügbarkeit nur für einen bestimmten Zeitraum?

Flammen-Symbol in der Menüleiste antippen → Verfügbarkeits-Button **lang drücken** → Dialog mit **Endzeitpunkt** und optionalem **Kommentar** öffnet sich.

---

## App & Einstellungen

### Wie ändere ich den Alarmton?

Seitenmenü → Einstellungen → **Alarmeinstellungen** → Dropdown „Alarmton" → Ton auswählen → mit Play-Button vorhören.

---

### Kann ich pro Organisation oder Standort einen anderen Alarmton einstellen?

Nein. Der Alarmton ist eine **geräteweite Einstellung** – es gibt einen Ton für alle Alarme, unabhängig von Organisation oder Standort.

---

### Kann ich eigene Alarmtöne hinzufügen?

Nein. Es können nur die **vorhandenen Töne** aus der App verwendet werden. Das Hinzufügen eigener Audiodateien wird nicht unterstützt.

---

### Welche Alarmtöne stehen zur Verfügung?

Die App enthält über 30 vordefinierte Töne, darunter:

- Pager 1–5
- Melder 01–03 (lang und kurz)
- P8GR 01–05
- Retro 01–04
- Sirene, Hausalarm, Schiffsalarm, Navy
- Emergency, Biohazard, Cyber, Gong, Police u. v. m.

Alle Töne können in den **Alarmeinstellungen** vorab angehört werden.

---

### Die App zeigt veraltete Daten an

Seitenmenü → Einstellungen → **„Cache leeren"** – löscht lokal zwischengespeicherte Daten und lädt alles neu.

---

### Wie aktiviere ich den Dunkelmodus?

Seitenmenü → Einstellungen → App-Einstellungen → **Design** → „Dunkel" auswählen (oder „System" für automatische Anpassung).

---

### Wo finde ich die Versionsnummer der App?

Seitenmenü → **„Über die App"** → aktuelle Version und Versionsdatum werden angezeigt.

---

### Wie melde ich einen Fehler?

Seitenmenü → **„Fehler melden"** → E-Mail-App öffnet sich mit vorausgefüllter Empfängeradresse. Fehlerbeschreibung, Gerät und Betriebssystemversion angeben.

---

## Berechtigungen

### Die App zeigt eine Warnung wegen fehlender Berechtigungen

Seitenmenü → Einstellungen → Alarmeinstellungen → **„Berechtigungsübersicht"** öffnen. Rote Einträge antippen – die App öffnet direkt die passenden Systemeinstellungen.

---

### Welche Berechtigungen braucht die App?

| Berechtigung | Wozu |
|---|---|
| Benachrichtigungen | Alarme empfangen |
| Standort | Anfahrtszeit berechnen, Geofence |
| Kalender | Termine auf Gerät synchronisieren |
| Kritische Benachrichtigungen *(iOS)* | Alarm trotz Stummschaltung/Fokus |
| DND-Zugriff *(Android)* | Alarm trotz „Bitte nicht stören" |
| Akkuoptimierung deaktiviert *(Android)* | Zuverlässiger Hintergrundempfang |
