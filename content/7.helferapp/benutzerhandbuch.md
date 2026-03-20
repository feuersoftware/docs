# HelferApp – Benutzerhandbuch

> Version: 1.0 | Stand: März 2026 | Entwickelt von Feuer Software

---

## Inhaltsverzeichnis

1. [Was ist die HelferApp?](#1-was-ist-die-helferapp)
2. [Download & Installation](#2-download--installation)
3. [Erste Schritte – Anmeldung](#3-erste-schritte--anmeldung)
   - [Anmeldung per QR-Code](#31-anmeldung-per-qr-code)
   - [Anmeldung per Benutzername und Passwort](#32-anmeldung-per-benutzername-und-passwort)
   - [Anmeldebestätigung](#33-anmeldebestätigung)
4. [Einrichtung nach der Anmeldung](#4-einrichtung-nach-der-anmeldung)
   - [Standortberechtigung](#41-standortberechtigung)
   - [Besatzungsauswahl](#42-besatzungsauswahl)
5. [Hauptbildschirm & Navigation](#5-hauptbildschirm--navigation)
6. [Einsatzliste](#6-einsatzliste)
7. [Einsatzdetails](#7-einsatzdetails)
   - [Reiter: Details](#71-reiter-details)
   - [Reiter: Karte](#72-reiter-karte)
   - [Reiter: Einheiten](#73-reiter-einheiten)
   - [Reiter: Meldungen & Protokoll](#74-reiter-meldungen--protokoll)
8. [Kartenansicht](#8-kartenansicht)
   - [Kartentypen](#81-kartentypen)
   - [Fahrzeugpositionen](#82-fahrzeugpositionen)
   - [Löschwasserversorgung & Einsatzmittel (POIs)](#83-löschwasserversorgung--einsatzmittel-pois)
9. [Einsatz erstellen](#9-einsatz-erstellen)
10. [Triage](#10-triage)
11. [GPS-Ortung](#11-gps-ortung)
12. [Besatzung wechseln](#12-besatzung-wechseln)
13. [Abmelden](#13-abmelden)
14. [Häufige Fragen (FAQ)](#14-häufige-fragen-faq)

---

## 1. Was ist die HelferApp?

Die **HelferApp** ist eine mobile Einsatz-App von Feuer Software, entwickelt für Fahrzeugbesatzungen von Rettungs- und Feuerwehreinheiten. Sie ist die mobile Ergänzung zum EinsatzTablet und ermöglicht die Koordination und Kommunikation direkt vom Smartphone aus.

**Die HelferApp unterstützt Einsatzkräfte bei:**

- Echtzeit-Überblick über aktive Einsätze der eigenen Wache
- Anzeige und Verfolgung von Fahrzeugpositionen auf der Karte
- Kommunikation über Meldungen und Einsatzprotokoll
- Anzeige von Löschwasserversorgung und Einsatzmitteln in der Umgebung
- Erstellung neuer Einsätze direkt aus dem Fahrzeug
- Triage-Erfassung im Massenanfall von Verletzten (optional, je nach Organisation)

Die App richtet sich an **Fahrzeugbesatzungen** und wird mit fahrzeuggebundenen Zugangsdaten betrieben, die vom Disponenten oder Administrator bereitgestellt werden.

---

## 2. Download & Installation

Die HelferApp ist kostenlos in beiden großen App-Stores verfügbar:

| Plattform | Link |
|-----------|------|
| **Google Play Store** (Android) | [HelferApp im Google Play Store](https://play.google.com/store/apps/details?id=com.feuersoftware.helferapp&hl=gsw) |
| **Apple App Store** (iOS/iPadOS) | [HelferApp im Apple App Store](https://apps.apple.com/de/app/helferapp/id6730127875) |

**Systemvoraussetzungen:**
- Android: Version 8.0 oder höher empfohlen
- iOS: Version 14.0 oder höher empfohlen

Laden Sie die App aus dem entsprechenden Store herunter und installieren Sie sie wie gewohnt auf Ihrem Gerät.

---

## 3. Erste Schritte – Anmeldung

Nach dem ersten Start der App erscheint der **Anmeldebildschirm**. Die Zugangsdaten für die HelferApp sind **fahrzeuggebunden** und werden von Ihrem Administrator oder Disponenten bereitgestellt – es handelt sich nicht um persönliche Benutzerkonten.

### 3.1 Anmeldung per QR-Code

Die schnellste Anmeldemethode ist der QR-Code-Scan:

1. Tippen Sie auf das **QR-Code-Symbol** auf dem Anmeldebildschirm.
2. Halten Sie die Kamera auf den bereitgestellten QR-Code (z. B. ausgehängt im Fahrzeug oder vom Disponenten bereitgestellt).
3. Die App liest die Zugangsdaten automatisch aus und meldet Sie an.

> **Hinweis:** Der QR-Code enthält die Fahrzeug-Zugangsdaten und ist nur für dieses Fahrzeug gültig. Teilen Sie ihn nicht mit Unbefugten.

### 3.2 Anmeldung per Benutzername und Passwort

Alternativ können Sie sich mit den Fahrzeug-Zugangsdaten manuell anmelden:

1. Geben Sie **Benutzername** und **Passwort** in die entsprechenden Felder ein.
2. Tippen Sie auf **Anmelden**.

### 3.3 Anmeldebestätigung

Nach erfolgreicher Überprüfung Ihrer Daten zeigt die App eine Bestätigungsseite mit folgenden Informationen:

- **Fahrzeug / Rufname** – Das Fahrzeug, dem dieser Zugang zugeordnet ist
- **Wache / Standort** – Die zugehörige Wache oder der Standort
- **Organisation** – Die übergeordnete Organisation
- **Token-Gültigkeit** – Wie lange der Zugang noch gültig ist (in Tagen oder Stunden)

Prüfen Sie, ob die angezeigten Angaben korrekt sind, und bestätigen Sie die Anmeldung. Falls die Angaben nicht stimmen, brechen Sie den Vorgang ab und wenden Sie sich an Ihren Administrator.

---

## 4. Einrichtung nach der Anmeldung

Nach der Anmeldebestätigung führt die App Sie durch zwei kurze Einrichtungsschritte.

### 4.1 Standortberechtigung

Die HelferApp benötigt Zugriff auf Ihren **Gerätestandort**, um:

- Ihre Fahrzeugposition in der Karte anzuzeigen
- Ihren Standort für andere Einheiten sichtbar zu machen
- Beim Erstellen eines neuen Einsatzes den aktuellen Standort automatisch zu ermitteln

Tippen Sie auf **Berechtigung erteilen** und bestätigen Sie die Abfrage des Betriebssystems. Ohne Standortberechtigung sind die Ortungsfunktionen der App nicht verfügbar, alle anderen Funktionen bleiben aber nutzbar.

### 4.2 Besatzungsauswahl

Wählen Sie die aktuelle Fahrzeugbesatzung aus:

1. Aus der Liste der verfügbaren Personen Ihrer Wache können Sie **Besatzungsmitglieder antippen**, um sie auszuwählen.
2. Falls eine Person nicht in der Liste erscheint, können Sie sie als **freien Text** (Name eingeben) hinzufügen.
3. Bestätigen Sie die Auswahl.

Die gewählte Besatzung wird mit dem Einsatz und den Fahrzeugdaten verknüpft und ist für Disponenten und andere Einheiten sichtbar.

> **Hinweis:** Die Besatzungsauswahl ist **für 2 Stunden gültig**. Danach fragt die App, ob die Besatzung noch aktuell ist. Sie können die Besatzung jederzeit über die App-Leiste aktualisieren (siehe [Besatzung wechseln](#12-besatzung-wechseln)).

---

## 5. Hauptbildschirm & Navigation

Nach der Einrichtung gelangen Sie zum **Hauptbildschirm** der App. Die Navigation erfolgt über zwei **Tabs** am unteren Bildschirmrand:

| Tab | Symbol | Funktion |
|-----|--------|----------|
| **Einsatzliste** | Liste-Symbol | Alle aktiven Einsätze Ihrer Wache |
| **Karte** | Karten-Symbol | Kartenansicht mit Einsätzen und Fahrzeugpositionen |

**App-Leiste (oben):**

Die Leiste oben enthält folgende Schaltflächen:

| Symbol | Funktion |
|--------|----------|
| GPS-Symbol (grün/grau) | GPS-Ortung ein-/ausschalten |
| Personen-Symbol | Besatzung wechseln |
| Info-Symbol | Open-Source-Lizenzen anzeigen |
| Abmelden-Symbol | Aus der App abmelden |

**Aktionsschaltfläche (unten rechts):**

Über den **runden Aktionsbutton** (FAB) am unteren rechten Bildschirmrand erreichen Sie schnell:

- **Statusmeldungen 1–6**: Senden Sie einen Statuscode an die Leitstelle
- **Neuer Einsatz**: Erstellen Sie direkt einen neuen Einsatz

---

## 6. Einsatzliste

Der erste Tab zeigt eine **Liste aller aktiven Einsätze** Ihrer Wache in Echtzeit.

**Jeder Einsatz zeigt:**
- **Stichwort** – Art des Einsatzes (z. B. „Brand", „Hilfeleistung")
- **Adresse** – Einsatzort
- **Uhrzeit** – Alarmierungszeit und weiterer Zeitverlauf
- **Status** – Aktueller Einsatzstatus

**Bedienung:**
- Tippen Sie auf einen Einsatz, um die **Einsatzdetails** zu öffnen.
- Scrollen Sie nach unten, um ältere Einsätze zu laden.
- Die Liste aktualisiert sich **automatisch in Echtzeit** – neue Einsätze erscheinen sofort.

---

## 7. Einsatzdetails

Die Einsatzdetailansicht ist in vier **Reiter** unterteilt.

### 7.1 Reiter: Details

Enthält alle Kerninformationen zum Einsatz:

- Einsatznummer und RIC
- Melder-Informationen
- Einsatzstichwort und -kategorie
- Einsatzadresse
- Zeitstempel (Alarmuhrzeit, Einsatzbeginn, ggf. Einsatzende)
- Weitere Einsatzeigenschaften

**Aktionen (bei laufendem Einsatz):**
- **Zum Einsatz zuweisen** – Weist Ihr Fahrzeug diesem Einsatz zu
- **Triage starten** – Öffnet das Triage-Formular (nur wenn von Ihrer Organisation aktiviert)

### 7.2 Reiter: Karte

Zeigt den **Einsatzort auf der Karte** mit:

- Marker auf dem Einsatzort (mit Adresse)
- Live-Positionen aller zugewiesenen Fahrzeuge
- Löschwasser-POIs und Einsatzmittel in der Umgebung (gleiche Layer wie in der Kartenansicht)

Tippen Sie auf Marker für weitere Informationen.

### 7.3 Reiter: Einheiten

Zeigt alle **dem Einsatz zugewiesenen Fahrzeuge und Einheiten**:

- Rufname und Fahrzeugtyp
- Aktueller Fahrzeugstatus
- Zugewiesene Besatzungsmitglieder

Die Anzeige aktualisiert sich automatisch in Echtzeit.

### 7.4 Reiter: Meldungen & Protokoll

Kombinierte Ansicht aller **Meldungen und Protokolleinträge** des Einsatzes in chronologischer Reihenfolge.

**Filterfunktion:** Filtern Sie die Einträge nach Kategorie:
- Einsatzdaten
- Fahrzeugmeldungen
- Nachrichten
- Manuelle Einträge

**Neue Meldung erstellen:**
Tippen Sie auf das Eingabefeld oder den Schreiben-Button, um einen neuen Protokolleintrag oder eine Nachricht hinzuzufügen.

---

## 8. Kartenansicht

Der zweite Tab zeigt eine **interaktive Karte** mit allen relevanten Informationen im Überblick.

### 8.1 Kartentypen

Über das **Einstellungen-Symbol** in der Karte können Sie den Kartentyp wechseln:

| Typ | Beschreibung |
|-----|--------------|
| **Standard** | Klassische Straßenkarte |
| **Satellit** | Luftbildaufnahmen |
| **Gelände** | Topographische Karte |
| **Hybrid** | Satellit mit Straßenbeschriftungen |

Zusätzlich kann der **Verkehrslayer** ein- und ausgeschaltet werden.

### 8.2 Fahrzeugpositionen

Alle Fahrzeuge Ihrer Organisation mit aktivierter GPS-Ortung sind als **Live-Marker** auf der Karte sichtbar. Die Positionen werden automatisch aktualisiert, sobald sich ein Fahrzeug bewegt (mindestens 50 Meter oder alle 10 Minuten).

Tippen Sie auf einen Fahrzeug-Marker, um den Rufnamen und weitere Informationen anzuzeigen.

### 8.3 Löschwasserversorgung & Einsatzmittel (POIs)

Über die Karteneinstellungen können verschiedene **Einsatzmittel-Layer** ein- und ausgeblendet werden:

**OpenStreetMap (OSM) Layer:**

| Layer | Symbol | Beschreibung |
|-------|--------|--------------|
| **Hydranten** | Hydrant | Unterflur- und Überflurhydranten mit Durchmesser (mm) und Kupplungstyp |
| **Wasserbehälter** | Tank | Stationäre und mobile Wasserspeicher |
| **Saugstellen** | Wasser | Natürliche und künstliche Wasserentnahmestellen |
| **Löschweiher** | Teich | Offene Löschwasserbecken und -teiche |
| **Landeplätze** | Hubschrauber | Hubschrauberlandezonen |
| **Zugangspunkte** | Zugang | Zugangs- und Ausfahrtspunkte für Einsatzfahrzeuge |

**Wasserkarte-Integration:**

- Zeigt Hydranten aus der Wasserkarte-Datenbank (detaillierte Wassernetzinformationen)
- Tippen Sie auf einen Hydranten für Durchmesser und Kupplungsdetails

> **Tipp:** Die Kartenlayer-Einstellungen werden gespeichert und bleiben beim nächsten App-Start erhalten.

---

## 9. Einsatz erstellen

Über den **Aktionsbutton** (FAB, unten rechts) → **Neuer Einsatz** können Sie direkt aus dem Fahrzeug einen Einsatz anlegen:

1. Die App ermittelt automatisch Ihren **aktuellen GPS-Standort** und zeigt die Adresse an.
2. Füllen Sie das Formular aus:
   - **Stichwort** *(Pflichtfeld)* – Art des Einsatzes
   - **Lage / Meldebild** *(Pflichtfeld)* – Beschreibung der Situation
   - **Hinweis** *(optional)* – Zusätzliche Informationen
   - **Ort** – Wird automatisch befüllt, kann bei Bedarf geändert werden
3. Tippen Sie auf **Einsatz erstellen**.

Der Einsatz erscheint sofort in der Einsatzliste aller berechtigten Einheiten.

---

## 10. Triage

> Diese Funktion ist nur verfügbar, wenn sie von Ihrer Organisation aktiviert wurde.

Die **Triage-Funktion** ermöglicht die strukturierte Sichtung von Verletzten bei einem Massenanfall (MANV) direkt über die App.

**Triage starten:**
Öffnen Sie einen Einsatz → Reiter **Details** → Tippen Sie auf **Triage starten**.

**Erfassungsfelder pro Patient:**

| Feld | Optionen |
|------|----------|
| **Sichtungskategorie** | SK1 – Rot (akute Lebensgefahr) / SK2 – Orange (schwer verletzt) / SK3 – Grün (leicht verletzt) / SK4 – Blau (ohne Überlebenschance) / EX – Schwarz (verstorben) |
| **Geschlecht** | Männlich / Weiblich / Divers |
| **Alter** | Altersgruppen von 0–5 bis 90+ Jahre |
| **Verletzungen** | Freitextbeschreibung der Verletzungen |
| **Behandlung** | Vor-Ort-Maßnahmen und Erstversorgung |

Nach dem Absenden wird der Triageeintrag dem Einsatz zugeordnet und ist für Disponenten und andere Einheiten sichtbar.

---

## 11. GPS-Ortung

Die GPS-Ortung sendet Ihre Fahrzeugposition in Echtzeit an die Leitstelle und macht sie für andere Einheiten auf der Karte sichtbar.

**GPS-Ortung ein-/ausschalten:**

Tippen Sie auf das **GPS-Symbol** in der App-Leiste (oben):
- **Grünes Symbol** = Ortung aktiv
- **Graues Symbol** = Ortung deaktiviert

Die Einstellung wird gespeichert und beim nächsten App-Start wiederhergestellt.

> **Hinweis:** Für eine zuverlässige Standortübermittlung sollte die App die Berechtigung erhalten, auf den Standort auch im Hintergrund zuzugreifen. Auf manchen Geräten muss dies in den Systemeinstellungen separat erlaubt werden.

**Übertragungslogik:**
- Die Position wird übermittelt, wenn sich das Fahrzeug um mindestens **50 Meter** bewegt hat **oder** die letzte Übermittlung mehr als **10 Minuten** zurückliegt.
- Positionen mit einer GPS-Genauigkeit schlechter als 250 Meter werden nicht übermittelt.

---

## 12. Besatzung wechseln

Die aktuelle Fahrzeugbesatzung kann jederzeit aktualisiert werden, ohne sich abzumelden:

1. Tippen Sie auf das **Personen-Symbol** in der App-Leiste (oben).
2. Der Besatzungs-Auswahlbildschirm öffnet sich.
3. Wählen Sie die neue Besatzung aus oder fügen Sie Personen manuell hinzu.
4. Bestätigen Sie die Auswahl.

> **Tipp:** Die App erinnert Sie automatisch, die Besatzung zu aktualisieren, wenn seit der letzten Auswahl mehr als 2 Stunden vergangen sind – beispielsweise bei einer Schichtübergabe.

---

## 13. Abmelden

Zum Abmelden tippen Sie auf das **Abmelden-Symbol** in der App-Leiste (oben). Ein Bestätigungsdialog erscheint – bestätigen Sie die Abmeldung.

Nach der Abmeldung werden alle lokalen Sitzungsdaten gelöscht und Sie kehren zum Anmeldebildschirm zurück.

---

## 14. Häufige Fragen (FAQ)

**Ich bekomme keine Zugangsdaten – an wen wende ich mich?**
Die Zugangsdaten sind fahrzeuggebunden und werden von Ihrem Administrator oder der Leitstelle bereitgestellt. Wenden Sie sich an Ihren Vorgesetzten oder den zuständigen IT-Verantwortlichen.

**Die App zeigt „Verbindung unterbrochen" an.**
Die App benötigt eine aktive Internetverbindung (WLAN oder mobile Daten). Prüfen Sie Ihre Verbindung. Die App versucht automatisch, die Verbindung wiederherzustellen.

**Mein Token läuft bald ab – was nun?**
Die App zeigt eine Warnung an, wenn Ihre Zugangsdaten in weniger als 4 Stunden ablaufen. Kontaktieren Sie Ihren Administrator, um neue Zugangsdaten zu erhalten.

**Warum werden manche Fahrzeuge nicht auf der Karte angezeigt?**
Fahrzeuge werden nur angezeigt, wenn deren GPS-Ortung aktiv ist. Möglicherweise hat die Besatzung die Ortung deaktiviert oder das Fahrzeug hat keine aktive Internetverbindung.

**Die Triage-Funktion ist bei mir nicht sichtbar.**
Die Triage-Funktion ist optional und muss von Ihrer Organisation freigeschaltet werden. Sprechen Sie Ihren Administrator an, wenn Sie diese Funktion benötigen.

**Kann ich die App auf mehreren Geräten gleichzeitig nutzen?**
Ein Fahrzeug-Zugang ist für ein Fahrzeug gedacht. Die gleichzeitige Nutzung auf mehreren Geräten mit denselben Zugangsdaten ist technisch möglich, aber nicht empfohlen, da Positionsdaten und Besatzungsauswahl dabei inkonsistent sein können.

**Wie aktuell sind die Einsatzdaten?**
Die Einsatzliste und alle Detailinformationen werden in Echtzeit über eine dauerhafte Serververbindung (SignalR) aktualisiert. Neue Einsätze und Statusänderungen erscheinen innerhalb von Sekunden.

---

*Dieses Handbuch beschreibt die HelferApp von Feuer Software.*
*Bei technischen Problemen wenden Sie sich an Ihren Systemadministrator oder den Feuer Software Support.*
