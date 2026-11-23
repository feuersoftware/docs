---
title: Setup
description: Alle Einstellungen des EinsatzTablet – Sprachausgabe, Darstellung, Bedienung, Automatisierung, Anzeige & Filter, Passwortschutz, Berechtigungen, Diagnose und Über die App
---

# Setup

**Fahrzeug → Setup**

Alle Einstellungen gelten **pro Tablet** und werden auf dem Gerät gespeichert. So kann jedes Fahrzeug passend eingerichtet werden – z. B. ein ELW anders als ein LF.

> **Tipp:** Über [Sicherheit](#sicherheit) lässt sich das Setup mit einem Passwort schützen, damit die Einstellungen im Einsatzbetrieb nicht versehentlich geändert werden.

---

## Sprachausgabe

„Steuert, was während des Einsatzes vorgelesen wird."

![Screenshot: Setup – Sprachausgabe](/images/einsatztablet/28_setup_sprachausgabe.png)

| Einstellung | Beschreibung |
|---|---|
| **Sprachausgabe über Tablet-Lautsprecher** | Ansagen über den eingebauten Lautsprecher |
| **Sprachausgabe über Bluetooth** | Ansagen über gekoppelte Bluetooth-Lautsprecher, Headsets oder Autoradios |
| **Sprachausgabe über Apple CarPlay** (iPad) / **über Android Auto** (Android) | Ansagen, solange das Auto verbunden ist |
| **Sprechgeschwindigkeit** | Tempo der Ansagen |
| **Lautstärke der Ansagen** | Anteil an der Lautstärke des jeweiligen Ausgabewegs. Lauter oder leiser stellst du am Tablet mit den Lautstärketasten, im Auto am Autoradio |

Unter **„Automatisch vorlesen"** wird festgelegt, was angesagt wird:

| Ereignis | Optionen |
|---|---|
| Neue Einsätze | Keine / Stichwort / Stichwort + Adresse |
| Einsatz beendet/abgebrochen | Keine / Stichwort / Stichwort + Adresse |
| Einsatzaktualisierungen | Keine / Kurz / Mit Änderungen |
| Neue Lagemeldungen | Keine / Mit Absender / Mit Absender + Inhalt |
| Neue Protokolleinträge | Keine / Mit Absender / Mit Absender + Inhalt |
| Neue Aufgabe im offenen Einsatz für unser Fahrzeug | Keine / Kurz / Mit Beschreibung |
| Neue Aufgabe im offenen Einsatz | Keine / Kurz / Mit Beschreibung |
| Statusänderungen des eigenen Fahrzeugs | ein / aus |
| Statusänderungen der anderen Einsatzmittel | ein / aus |
| Stärkemeldungen der anderen Einsatzmittel | ein / aus |
| Fahrzeug zugewiesen | ein / aus |
| Fahrzeug im Einsatz beendet | ein / aus |

**„Testansage abspielen"** prüft Ausgabeweg und Lautstärke. In der Kopfzeile zeigt ein Symbol jederzeit, worüber gerade angesagt wird – ein Tipp darauf erklärt die Einstellung, z. B. wenn die Medienlautstärke auf 0 % steht.

---

## Darstellung

„Design, Sprache, Navigation und Karte."

| Einstellung | Optionen / Beschreibung |
|---|---|
| **Design** | System / Hell / Dunkel |
| **Sprache** | System / Deutsch / English |
| **Navigationsleiste** | Links / Rechts |
| **Schnellaktionen** | Position des Schnellaktionen-Buttons: Links / Mitte / Rechts / Aus |
| **Kartentyp** | Standard für alle Karten: OSM / G-Straßen / G-Satellit / G-Hybrid |
| **Navigationstyp** | Die App, mit der eine Navigation gestartet wird (Anfahrt, Karte, Fahrzeug auf der Karte). Android: **Google Maps** (Standard) / Waze / Andere App – iPad: **Apple Karten** (Standard) / Google Maps / Waze. Die Route wird für das Auto berechnet; ist die App nicht installiert, öffnet sich die Route im Browser. Bei „Andere App" fragt Android beim ersten Mal, welche App die Route öffnen soll – diese App zeigt das Ziel, die Route startet mit einem weiteren Tippen |
| **Karten-Design** | Standard für alle Karten (hell/dunkel), unabhängig vom Design der App |
| **Verkehr auf Google Maps** | Zeigt die Verkehrslage auf den Google-Karten |
| **iKAT-Schnellzugriff** | Button auf der Karte, um iKAT mit der Einsatzposition zu öffnen |
| **ModiTech CRS (Rettungsdatenblätter)** | Button auf der Karte, um die CRS-App zu öffnen (muss installiert sein) |

Eine Auswahl direkt auf der Karte gilt nur bis zum nächsten Einsatz.

---

## Bedienung

„Bildschirm, Vibration und Bildschirmschoner."

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Bildschirm immer an** | Verhindert, dass das Tablet in den Ruhezustand wechselt | an |
| **Vibration bei Ansagen** | Vibriert bei jeder Ansage, bei neuen Einsätzen länger | – |
| **Bildschirmschoner** | Dunkelt den Bildschirm nach „X Min. Inaktivität" ab (siehe [Bildschirmschoner](/einsatztablet/03_aufbau_und_bedienung#bildschirmschoner)) | aus |

---

## Automatisierung

„Was die App selbstständig tut."

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Fahrzeugposition übertragen** | Sendet die GPS-Position des Tablets laufend an Connect, auch im Hintergrund. Unter iPadOS bleibt die App nur so im Hintergrund verbunden | an |
| **Automatisch zur Anfahrt wechseln** | Springt bei Status 3 nach 3 Sekunden zur Anfahrt; Tippen bricht ab | an |
| **Automatisch zur Startansicht zurückkehren** | Nach Einsatzende: Aus / nach 10 Sekunden / 1 / 10 / 30 Minuten | nach 10 Minuten |
| **Anhänge nur über WLAN hochladen** | Fotos, Videos und Dateien warten auf dem Tablet, bis ein WLAN verbunden ist. Ein Fahrzeug-WLAN zählt als WLAN | aus |
| **Alarm über dem Sperrbildschirm** (Android) | Bei einem Alarm geht die App über dem Sperrbildschirm auf, ohne dass das Tablet entsperrt werden muss | aus |

---

## Anzeige & Filter

„Welche Bereiche und Einsatzmittel angezeigt werden."

![Screenshot: Setup – Anzeige & Filter](/images/einsatztablet/29_setup_anzeige.png)

### Tabs

| Einstellung | Beschreibung |
|---|---|
| **Startansicht ohne Einsatz** | Einsatzliste / Karte / Fahrzeuge |
| **Startansicht beim Öffnen eines Einsatzes** | Übersicht / Anfahrt / Karte / Protokoll / Besatzung |
| **Infoboard-Tab anzeigen** | Bereich [Infoboard](/einsatztablet/14_infoboard_und_dateien) |
| **Dateien-Tab anzeigen** | Bereich [Dateien](/einsatztablet/14_infoboard_und_dateien#dateien) |
| **Alarmieren erlauben** | Bereich [Alarmieren](/einsatztablet/12_alarmieren) (Standard: **aus**) |

### Einsatzliste

| Einstellung | Beschreibung |
|---|---|
| **Standort** | Nur Einsätze eines bestimmten Standorts anzeigen oder „Alle Standorte" – erscheint nur, wenn das Fahrzeug die Einsätze mehrerer Standorte sehen darf |
| **Geschlossene Einsätze anzeigen** | Button „Geschlossene Einsätze anzeigen" in der Einsatzliste (Standard: aus) |
| **Einsätze anlegen erlauben** | Button „Neuer Einsatz" in der Einsatzliste |

### Im Einsatz

| Einstellung | Beschreibung |
|---|---|
| **Rückmeldungen in der Übersicht anzeigen** | [Rückmeldungen](/einsatztablet/05_uebersicht#rückmeldungen) (Komme / Komme später / Komme nicht) in der Übersicht – z. B. für Berufsfeuerwehren ausschalten |
| **Einsätze bearbeiten erlauben** | Einsatzdaten in der Übersicht bearbeiten |
| **Protokolleinträge & Lagemeldungen erlauben** | Schreiben im [Protokoll](/einsatztablet/08_protokoll) |
| **Aufgaben verwalten erlauben** | Bereich [Aufgaben](/einsatztablet/10_aufgaben) |
| **Einsatzberichte schreiben erlauben** | Bereich [Bericht](/einsatztablet/11_bericht_und_anhaenge) |

### Einsatzdaten

„Welche Einsatzdaten auf der Übersicht angezeigt werden": Priorität, Kategorie, Zusatzfelder der Leitstelle (Sonderrechte, Objekt, Bemerkung, …), Zusatzinformationen (inkl. Dokumente), Meldenden, Zeitpunkt der letzten Aktualisierung, Alarmzeit, Einsatzende, Einsatznummer, Quelle, Koordinaten, RIC – jeweils einzeln ein- und ausschaltbar.

### Dateien & Anhänge

| Einstellung | Beschreibung |
|---|---|
| **Einsatz-Anhänge anzeigen** | Anhänge in Übersicht und Bericht |
| **Anhänge hinzufügen erlauben** | Fotos und Dateien hochladen – auch Navigationspunkt und Schnellaktion „Foto" |
| **Dateien löschen erlauben** | Anhänge am Tablet löschen |
| **Bildqualität beim Hochladen festlegen** | Eigene **„Bildqualität hochgeladener Fotos"** festlegen (Standard 80 %), z. B. um mobile Daten zu sparen |

### Fahrzeuge

| Einstellung | Beschreibung |
|---|---|
| **Fahrzeugdaten anzeigen** | Bereich [Fahrzeugdaten](/einsatztablet/13_fahrzeug_und_maengel#fahrzeugdaten). Ausgeblendet entfällt auch das Status-Tastenfeld außerhalb eines Einsatzes; im Einsatz bleibt es in der Anfahrt |
| **Mängelmeldungen anzeigen** | Bereich [Mängel](/einsatztablet/13_fahrzeug_und_maengel#mängel) |
| **Eigenes Fahrzeug in Listen oben anzeigen** | Das eigene Fahrzeug steht in allen Listen an erster Stelle |
| **Stärkemeldungen absenden erlauben** | Bereich [Besatzung](/einsatztablet/09_besatzung) |
| **Funkstatus manuell setzen erlauben** | Ob am Tablet der Funkstatus gesetzt werden darf (Standard: aus) |
| **Nach letztem Status-Update filtern** | Blendet Fahrzeuge aus, die länger keinen Status gemeldet haben („Ausblenden nach X Std. ohne Update", Standard 12) |

---

## Sicherheit

„Schützt die Einstellungen mit einem Passwort."

**„Einstellungen mit Passwort schützen"** einschalten und **„Passwort festlegen"**. Danach ist das Setup gesperrt („Einstellungen geschützt") und lässt sich nur mit dem Passwort über **„Entsperren"** öffnen. Über **„Passwort ändern"** wird es neu gesetzt.

---

## Berechtigungen

„Was die App vom System braucht, damit Alarme und Funktionen zuverlässig laufen."

Zeigt alle Berechtigungen aus der [Ersteinrichtung](/einsatztablet/02_installation_und_anmeldung#berechtigungen-beim-ersten-start) mit Status **Erlaubt**, **Nicht erlaubt** oder **Abgelehnt**. Über **„Erlauben"** bzw. **„Einstellungen öffnen"** lassen sich fehlende Berechtigungen nachholen.

---

## Benachrichtigungen

Eigene Einstellungen für Benachrichtigungen folgen in Kürze.

---

## Diagnose

„Protokollierung und Fehlersuche."

- **„Fehler melden"** – öffnet eine E-Mail an den Support (siehe [Offline & Fehlerbehebung](/einsatztablet/16_offline_und_fehlerbehebung#fehler-melden))
- **„Protokoll-Level"** – Debug / Info / Warnung / Fehler
- **„Erweiterte Protokollierung"** – sendet ausführliche Protokolle an FeuerSoftware, z. B. auf Bitte des Supports. Schaltet sich nach 7 Tagen von selbst ab
- **„Protokoll"** – das Geräteprotokoll ansehen, kopieren, teilen oder leeren

---

## Über die App

- **App-Version**
- **Anmeldung** – angemeldetes Fahrzeug, Umgebung, Geräte-ID und Gerät
- **Server-Verbindung** – Status der Verbindungen und Netzwerk
- **„Abmelden"** – meldet das Tablet ab (nach Rückfrage „Wirklich abmelden?")
