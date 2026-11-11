---
title: Weitere Funktionen
description: Statistiken, Blog, Benutzer, Mangelberichte, Einsatzmonitor-Geräte und weitere Funktionen der EinsatzApp
---

# Weitere Funktionen

Alle weiteren Funktionen der EinsatzApp sind über das **Hauptmenü** (vierter Tab „Mehr" in der Navigationsleiste) erreichbar.

---

## Statistiken

Zeigt Kennzahlen zum Einsatzgeschehen – als eigener Tab je zugänglichem Standort und, mit entsprechender Berechtigung, zusätzlich für die gesamte Organisation. Unter anderem:

- **Einsatzanzahl:** pro Woche, pro Tag, sowie für die letzten 90/180/365 Tage, den laufenden Monat und das laufende Jahr
- **Nach Tageszeit/Wochentag:** Verteilung der Einsätze (z. B. 7–19 Uhr / 19–7 Uhr, Mo–Fr / Sa–So)
- **Durchschnittliche Einsatzdauer**, häufigstes Stichwort und häufigste Kategorie
- **Rückmeldungen:** Anzahl „Komme" / „Komme nicht" / „Komme später" jeweils für die letzten 7, 30, 90, 180 und 365 Tage
- **Verfügbarkeitsstatistik:** separater Bereich mit der Verfügbarkeitshistorie der Mitglieder je Standort

---

## Benutzer

Die Benutzerliste zeigt alle Mitglieder der Organisation:
- Name und Profilbild
- Aktueller Verfügbarkeitsstatus
- Antippen → Benutzerdetails mit Kontaktinformationen und Einsatzhistorie

---

## Mangelberichte (Defektmeldungen)

Schäden an Fahrzeugen oder Ausrüstung können direkt gemeldet werden:

1. **Flammen-Symbol in der Menüleiste → „Mangel melden"** oder **Hauptmenü → Mangelberichte → Plus**
2. Formular ausfüllen: Bezeichnung, Beschreibung, betroffenes Fahrzeug
3. Speichern → Meldung wird an Verantwortliche weitergeleitet

In der **Mangelbericht-Liste** (Hauptmenü → Mangelberichte) sind alle offenen und abgeschlossenen Meldungen einsehbar.

---

## Verdienstausfallbescheinigung

Einsatzkräfte, die während der Arbeitszeit zu einem Einsatz ausrücken, können direkt aus der App eine **Verdienstausfallbescheinigung** als PDF generieren. Die Bescheinigung ist bereits mit den wichtigsten Informationen wie Einsatznummer und Personaldaten vorausgefüllt und muss nur noch vom Wehrführer / Kommandanten unterschrieben werden.

> **Wichtig:** Die Verdienstausfallbescheinigung ist nur **mit Unterschrift** gültig.

### Aktivierung (Administratoren)

Die Funktion muss zunächst durch einen **Organisationsadministrator** im Connect Portal aktiviert werden:

**Connect Portal → Standort wählen → Organisation → Verwaltung**

Dort folgende Einstellungen konfigurieren und speichern:

| Feld | Beschreibung |
|---|---|
| **Aktiviert** | Checkbox aktivieren um die Funktion global freizuschalten (keine Einschränkung auf einzelne Standorte möglich) |
| **Ansprechpartner** | Kontaktdaten der zuständigen Gemeinde / Stadt – erscheinen im oberen Bereich der Bescheinigung |
| **Unterschriftsberechtigte** | Wer die Bescheinigung unterschreiben darf |
| **Zusätzliche Hinweise** | Freitext z. B. für Rechtstexte oder weitere Hinweise |

### Bescheinigung anfordern

1. Einsatz aus dem Newsfeed oder der Einsatzhistorie öffnen
2. **3-Punkte-Menü** oben rechts antippen → **„Verdienstausfallbescheinigung"**
3. Zustellungsart wählen:
   - **E-Mail** – die Bescheinigung wird als PDF an die hinterlegte E-Mail-Adresse gesendet
   - **Drucken** – die Bescheinigung wird direkt über den am EinsatzMonitor angeschlossenen Drucker ausgedruckt

### Hinweise zum Drucken

Für den Direktdruck in der Wache sind folgende Voraussetzungen erforderlich:

- EinsatzMonitor muss Connect aktiviert haben
- **Adobe Acrobat Reader** muss installiert und als Standard-PDF-Programm eingestellt sein
- Der gewünschte Drucker muss als **Standarddrucker** eingestellt sein

### Vorlage

Die Vorlage der Verdienstausfallbescheinigung ist fest vorgegeben und kann – abgesehen von den konfigurierbaren Freitextfeldern – nicht angepasst werden. Das Einbinden eigener Logos ist nicht möglich.

---

## Einsatzmonitor-Geräte

Die EinsatzApp kann zur Verwaltung von **EinsatzMonitor**-Geräten (Wachendisplays) verwendet werden:
- Geräte-Liste anzeigen
- Status der Verbindung prüfen
- Neue Geräte registrieren

---

## Blog

Ein integrierter Blog-Feed zeigt Neuigkeiten von FeuerSoftware:
- Produktankündigungen
- Updates und neue Funktionen
- Tipps und Tricks

Der Blog ist über das Hauptmenü erreichbar und lädt externe RSS-Inhalte.

---

## Dienstausweis

![Screenshot: Dienstausweis in der EinsatzApp mit Barcode, QR-Code und „Verifizieren"](/images/einsatzapp/14_dienstausweis.png)

Der digitale Dienstausweis ermöglicht es Einsatzkräften, sich – z. B. bei örtlichen Einrichtungen wie Schwimmbädern für vergünstigte Eintritte – als Mitglied der eigenen Organisation auszuweisen. Zusätzlich kann er Barcodes oder QR-Codes für andere Systeme enthalten, z. B. für Zutrittskontrollen.

**Hauptmenü → Dienstausweis**

> **Hinweis:** Der neue Dienstausweis mit Profilbild, Barcode, QR-Code und Personalnummer ist aktuell nur in der **Beta-Version der EinsatzApp** enthalten und wird mit dem nächsten regulären Update für alle verfügbar. So kommt ihr an die Beta: [EinsatzApp – Betaversionen](/einsatzapp/01_produktuebersicht#betaversionen)

Je nach Einstellung der Organisation (siehe [Connect: Organisationseinstellungen – Dienstausweis](/connect/12_organisationseinstellungen#dienstausweis)) zeigt der Ausweis:
- Profilbild, Name und Organisation der Einsatzkraft
- die Personalnummer (sofern hinterlegt)
- einen **Barcode** und/oder **QR-Code** mit dem von der Organisation festgelegten Inhalt
- den Button **„Verifizieren"** für die FeuerSoftware-Verifizierung

Damit die Codes auch bei Dunkelheit gut gescannt werden können, stellt die App beim Öffnen der Ansicht automatisch die maximale Bildschirmhelligkeit ein und verhindert, dass der Bildschirm währenddessen ausgeht.

> Der Dienstausweis wird bei jedem Öffnen aktuell vom Server geladen und benötigt daher eine **Internetverbindung**.

**Profilbild erforderlich:** Verlangt die Organisation ein Profilbild und ist keines hinterlegt, erscheint der Hinweis **„Für deinen Dienstausweis wird ein Profilbild benötigt."** Über **„Profilbild hochladen"** lässt sich direkt ein Bild im Profil hinterlegen; danach den Dienstausweis erneut öffnen.

### Ablauf der Prüfung (FeuerSoftware-Verifizierung)

1. Die Einsatzkraft öffnet den Dienstausweis und tippt auf **„Verifizieren"**.
2. Es erscheint der QR-Code **„FeuerSoftware-Verifizierung"** mit der Angabe „Code gültig bis".
3. Die prüfende Person scannt den QR-Code mit einem beliebigen Smartphone (keine spezielle App nötig).
4. Es öffnet sich automatisch eine Webseite mit dem Prüfergebnis:
   - **Grüner Haken:** Vor- und Nachname sowie die zugehörige Organisation der Einsatzkraft werden angezeigt.
   - **Rotes Kreuz:** Der Code ist ungültig oder abgelaufen.

> **Wichtig:** Ein Verifizierungs-Code ist **15 Minuten** gültig. Ist er abgelaufen, lädt die App automatisch einen neuen Code.

### Voraussetzungen

Der Menüpunkt ist nur nutzbar, wenn ein Organisationsadministrator die Funktion im Connect Portal aktiviert hat (siehe [Connect: Organisationseinstellungen – Dienstausweis](/connect/12_organisationseinstellungen#dienstausweis)) **und** die Organisation über eine reguläre Lizenz verfügt. Ist eine der beiden Voraussetzungen nicht erfüllt, wird der Menüpunkt ausgegraut mit dem Hinweis „Durch Organisation deaktiviert" angezeigt.

---

## Partnerregistrierung

Für Organisationen, die mit Partnern (z. B. Nachbarfeuerwehren) zusammenarbeiten:
- **Hauptmenü → Partner registrieren**
- Partnerorganisation suchen und verbinden

---

## Benutzerverwaltung (Verifikation)

Administratoren können neue Benutzer über die App verifizieren:
- **Hauptmenü → Benutzer verifizieren**
- Ausstehende Verifikationsanfragen bestätigen oder ablehnen

---

## Über die App

**Seitenmenü → Über die App** zeigt:
- Aktuelle App-Version
- Versionsdatum
- Lizenzinformationen der verwendeten Open-Source-Bibliotheken
- Kontakt zu FeuerSoftware

---

## Fehler melden

Falls ein Fehler in der App auftritt:
1. **Seitenmenü → Fehler melden** antippen.
2. Die E-Mail-App öffnet sich mit vorausgefüllter Empfängeradresse (`info@feuersoftware.com`) und Betreff.
3. Fehlerbeschreibung eingeben und senden.

> Für schnellere Hilfe: Beschreibe, was du getan hast, welcher Fehler aufgetreten ist und welches Gerät und Betriebssystem du verwendest.
