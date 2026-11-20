---
title: Offline & Fehlerbehebung
description: Verhalten des EinsatzTablet ohne Netz, Verbindungsanzeige und Hinweise, häufige Probleme sowie Fehler melden und Diagnose
---

# Offline & Fehlerbehebung

---

## Verbindungsanzeige

Der **Verbindungspunkt** in der Kopfzeile zeigt den Zustand der Verbindung zu Connect:

| Farbe | Bedeutung |
|---|---|
| grün | Mit dem Server verbunden |
| orange | Verbindung wird aufgebaut |
| rot | Keine Verbindung zum Server |

Bricht die Verbindung länger ab, erscheint oben der Hinweis **„Keine Verbindung zum Server – die Anmeldung wird erneuert. Angezeigte Daten können veraltet sein."** mit dem Zeitpunkt des nächsten Versuchs und dem Button **„Jetzt versuchen"**. Das Tablet bleibt dabei angemeldet.

---

## Arbeiten ohne Netz

Im Fahrzeug ist das Netz nicht immer stabil. Das EinsatzTablet speichert Eingaben deshalb zwischen und sendet sie automatisch nach, sobald wieder eine Verbindung besteht:

| Was | Verhalten ohne Netz |
|---|---|
| **Funkstatus** | „Keine Verbindung – Status wird nachgesendet". Ein inzwischen veralteter Status wird verworfen – dann bitte über Funk melden |
| **Protokolleinträge & Lagemeldungen** | „Wartet auf Verbindung – nur auf diesem Tablet sichtbar", danach automatisch gesendet; „Erneut senden" oder „Verwerfen" möglich |
| **Meldung über Schnellaktion** | „Keine Verbindung – wird im Protokoll nachgesendet" |
| **Stärke (Schnellzuweisung)** | Wird gespeichert und automatisch erneut gesendet („Nächster Versuch in … s") |
| **Namentliche Besatzung** | Braucht eine Verbindung – ohne Netz die Schnellzuweisung nutzen |
| **Fotos und Dateien** | „Wartet auf Netz" – bleiben auf dem Tablet und werden später hochgeladen |
| **Karte** | Bereits angesehene OpenStreetMap-Ausschnitte bleiben verfügbar; Hydranten und Waldwege werden online geladen |

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| **Alarme kommen nicht an (Android)** | Unter [Setup → Berechtigungen](/einsatztablet/15_setup#berechtigungen) prüfen: Benachrichtigungen, Standort im Hintergrund („Immer zulassen") und **„Von Akku-Optimierung ausnehmen"**. Die Benachrichtigung „Alarmempfang aktiv" muss sichtbar sein |
| **Alarme kommen nicht an (iPad)** | Benachrichtigungen erlauben, Standort auf **„Immer erlauben"** setzen und [„Fahrzeugposition übertragen"](/einsatztablet/15_setup#automatisierung) einschalten |
| **App öffnet sich bei Alarm nicht über dem Sperrbildschirm (Android)** | „Alarm über dem Sperrbildschirm" einschalten und die Berechtigungen „Alarm im Vollbild" und „Über anderen Apps einblenden" erteilen |
| **Fahrzeugposition wird nicht übertragen** | Standort „Immer" erlauben, Standortdienst des Tablets einschalten, „Fahrzeugposition übertragen" prüfen |
| **Ansagen sind nicht zu hören** | Medienlautstärke prüfen (Symbol in der Kopfzeile antippen) und unter [Setup → Sprachausgabe](/einsatztablet/15_setup#sprachausgabe) den Ausgabeweg einschalten; „Testansage abspielen" |
| **Ein Bereich fehlt in der Navigation** | Unter [Setup → Anzeige & Filter](/einsatztablet/15_setup#anzeige-filter) prüfen, ob er ausgeblendet ist |
| **„Dieses Konto ist für diese App nicht freigeschaltet."** | Mit dem **Fahrzeug-Zugang** anmelden, nicht mit einem persönlichen Konto (siehe [Anmeldung](/einsatztablet/02_installation_und_anmeldung)) |
| **Dateien: „kein Online-Speicher verbunden"** | Ein Administrator muss im Connect Portal den [Online-Speicher](/connect/23_dateispeicher) für den Standort einrichten |

---

## Fehler melden

**Setup → Diagnose → „Fehler melden"** (auch als Eintrag in der Navigationsleiste)

![Screenshot: Setup – Diagnose mit „Fehler melden"](/images/einsatztablet/30_setup_diagnose.png)

Öffnet eine E-Mail an [info@feuersoftware.com](mailto:info@feuersoftware.com) mit dem Betreff „Supportanfrage EinsatzTablet". Angaben zu Gerät, Fahrzeug und Verbindung werden automatisch eingefügt – bitte nur noch beschreiben, was passiert ist, wann und unter welcher Nummer wir zurückrufen können. Ist keine Mail-App eingerichtet, öffnet sich stattdessen das Teilen-Menü mit dem Geräteprotokoll als Anhang.

Bittet der Support um ausführlichere Daten, kann unter **Setup → Diagnose** die **„Erweiterte Protokollierung"** eingeschaltet werden. Sie schaltet sich nach 7 Tagen automatisch ab.
