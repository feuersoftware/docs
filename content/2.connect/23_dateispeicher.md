---
title: Dateispeicher & Anhänge
description: Wo Connect Dateien ablegt – Connect Storage, eigene Nextcloud, Speicherzuordnung je Standort, Speicherkontingent, Anhänge und Berechtigungen
---

# Dateispeicher & Anhänge

Überall dort, wo in Connect Dateien anfallen – Anhänge an News, Termine und Mängelmeldungen, Fotos und Dokumente zu Einsätzen, Monitor-Dateien wie Hintergrundbilder und Töne – legt Connect diese in einem **Dateispeicher** ab. Dafür gibt es zwei Möglichkeiten:

| Speicher | Beschreibung | Ebene |
|---|---|---|
| **Connect Storage** | Der Standard-Dateispeicher von Connect, betrieben von FeuerSoftware. Für jede Organisation automatisch aktiv. Ein Grundkontingent ist enthalten, zusätzlicher Speicher kann gebucht werden. | Organisation |
| **Nextcloud** | Eine eigene, selbst betriebene Nextcloud wird an einen Standort angebunden. Dateien landen dann direkt dort und belasten das Connect-Kontingent nicht. | Standort |

Pro Standort lässt sich je Dateikategorie festlegen, welcher Speicher verwendet wird (→ [Speicherzuordnung](#speicherzuordnung)). Ohne weitere Einrichtung landet alles im Connect Storage.

> **Hinweis:** Die Funktionen sind aktuell im **Connect Portal** und im **EinsatzManager** verfügbar. Die Integration in **EinsatzApp** und **EinsatzTablet** folgt.

---

## Connect Storage

![Screenshot: Organisationseinstellungen – Connect Storage](/images/connect/23_connect_storage.png)

**Organisationseinstellungen → Connect Storage**

Der Connect Storage ist das standardmäßige Speicher-Add-in jeder Organisation und kann nicht deinstalliert werden. Speicherkontingent und Buchungen gelten für die **gesamte Organisation** – alle Standorte teilen sich dasselbe Kontingent.

### Speichernutzung

| Kennzahl | Bedeutung |
|---|---|
| **Belegt** | Aktuell im Connect Storage belegter Speicher (alle Standorte) |
| **Kostenlos enthalten** | Im Lizenzumfang enthaltenes Grundkontingent (siehe unten) |
| **Gebucht** | Zusätzlich gebuchter Speicher |
| **Gesamtlimit** | Kostenlos enthalten + gebucht |

Der Fortschrittsbalken färbt sich **gelb ab 90 %** Belegung und **rot bei 100 %**.

### Kostenlos enthaltenes Kontingent

Das Grundkontingent richtet sich nach der Anzahl lizenzierter Benutzer:

| Lizenz | Enthaltener Speicher |
|---|---|
| Testphase | 50 MB (fest, kein Zubuchen möglich) |
| Kostenfreie Lizenz | 50 MB |
| Bezahlte Lizenz | **500 MB + 500 MB je volle 25 lizenzierte Benutzer** |

**Beispiele:** 0–24 Benutzer → 0,5 GB · 25–49 Benutzer → 1 GB · 50–74 Benutzer → 1,5 GB · 100–124 Benutzer → 2,5 GB

> Dateien, die in einer **Nextcloud** abgelegt werden, zählen **nicht** zum Kontingent.

### Zusätzlichen Speicher buchen

**Organisationseinstellungen → Connect Storage → „Speicher buchen"**

Zusätzlicher Speicher wird in **Einheiten zu je 25 GB** gebucht und mit **Lizenzpunkten** bezahlt (aktuell **5 Lizenzpunkte pro Einheit und Jahr**).

![Screenshot: Dialog „Zusätzlicher Speicher" beim Buchen](/images/connect/23_speicher_buchen.png)

1. **„Speicher buchen"** klicken
2. Anzahl der **Einheiten** wählen (1–100, begrenzt durch die verfügbaren Lizenzpunkte)
3. Der Dialog zeigt Speichergröße, Kosten pro Jahr und das **neue Gesamtlimit**
4. **„Speicher buchen"** bestätigen

Die Buchung verlängert sich **automatisch**. Reichen die verfügbaren Lizenzpunkte nicht aus, wird ein entsprechender Hinweis angezeigt – dann müssen zuerst weitere Lizenzen gebucht oder bestehende Buchungen gekündigt werden.

> Während der **Testphase** kann kein zusätzlicher Speicher gebucht werden. Ebenfalls nicht möglich, solange die Organisation [unterlizenziert](/connect/14_lizenzierung#unterlizenzierung) ist.

Die Tabelle **„Zusätzlicher Speicher"** zeigt alle Buchungen mit Einheiten, Kosten, Status (*Aktiv*, *Gekündigt*, *Beendet*) und Enddatum. Aktive Buchungen mit automatischer Verlängerung sind entsprechend gekennzeichnet. Die Buchungen erscheinen zusätzlich unter [Lizenzen & Buchungen](/connect/12_organisationseinstellungen#lizenzen--buchungen) als Produkt „Connect Storage".

### Buchung kündigen

Bei einer aktiven Buchung auf **„Buchung kündigen"** klicken und bestätigen. Die automatische Verlängerung wird beendet, die Buchung läuft zum **Ende des aktuellen Monats** aus. Danach steht der zusätzliche Speicher nicht mehr zur Verfügung.

### Speicher aufräumen

**Organisationseinstellungen → Connect Storage → „Speicher aufräumen"**

![Screenshot: Assistent „Speicher aufräumen"](/images/connect/23_speicher_aufraeumen.png)

Der Assistent schlägt Dateien vor, die gelöscht werden können, und zeigt vorab, wie viel Speicher dadurch frei wird (*Aktuell belegt*, *Wird freigegeben*, *Danach belegt*).

**Kriterien:**

| Kriterium | Optionen |
|---|---|
| **Älter als** | Beliebiges Alter, 1 / 3 / 6 / 12 / 24 Monate (Standard: 3 Monate) |
| **Mindestgröße** | Beliebige Größe, 1 / 5 / 10 / 50 MB |
| **Ziel** | Nur nicht mehr Benötigtes, unter 90 / 80 / 70 / 50 % Belegung, alle passenden Dateien |
| **Kategorien** | News, Termine, Mängelmeldungen, Einsätze: Fotos & Dateien, Einsätze: Berichte |

Der Vorschlag ist nach Priorität gestaffelt – zuerst wird das Unkritischste vorgeschlagen:

1. **Nicht mehr benötigt** – Anhänge vergangener News und Termine sowie erledigter oder abgelehnter Mängelmeldungen
2. **Fotos und Dateien älterer Einsätze** – Anhänge abgeschlossener Einsätze, die ältesten zuerst
3. **Gespeicherte Einsatzberichte** – Teil der Einsatzdokumentation, nur löschen, wenn es nicht anders geht

Jede Stufe lässt sich aufklappen, einzelne Dateien können ab- oder angewählt werden. Wird das Ziel mit den passenden Dateien nicht erreicht, weist der Assistent darauf hin.

> **Achtung:** Das Löschen ist **endgültig** und muss über die Checkbox *„Mir ist bewusst, dass diese Dateien endgültig gelöscht werden."* bestätigt werden. Es werden nur Dateien aus dem Connect Storage angezeigt, keine Nextcloud-Dateien.

### Wenn der Speicher voll ist

- Ab **90 %** Belegung erscheint im Portal ein gelber Hinweisbanner, bei **100 %** ein roter. Organisationsadministratoren können direkt aus dem Banner den Aufräum-Assistenten öffnen.
- Ist der Speicher voll, werden neue Uploads in den Connect Storage **abgelehnt** (mit einer Toleranz von 5 %). Es erscheint der Dialog **„Speicher ist voll"** mit Links zum Aufräumen bzw. Buchen (nur für Organisationsadministratoren sichtbar; alle anderen werden gebeten, einen Administrator zu informieren).
- Organisationsadministratoren erhalten eine **E-Mail**, sobald an einem Tag erstmals ein Upload abgelehnt wurde (max. einmal täglich), sowie **wöchentlich montags**, solange die Belegung bei mindestens 90 % liegt. Die Mail enthält die größten Kategorien und Links zum Freigeben bzw. Buchen.
- Uploads in eine Nextcloud sind vom Kontingent nicht betroffen.

---

## Nextcloud anbinden

Eine eigene Nextcloud wird pro Standort unter **Standort → Schnittstellen → Nextcloud** verbunden. Die Anbindung ist kostenlos.

> **Voraussetzung:** Die Nextcloud muss **aus dem Internet über `https://` erreichbar** sein. Server, die nur im lokalen Netz oder per VPN erreichbar sind, sowie unverschlüsseltes `http://` werden aus Sicherheitsgründen nicht unterstützt.

Die ausführliche Anleitung (Voraussetzungen, Verbinden, Dokumenten-Stammordner, Trennen) steht unter [Schnittstellen: Nextcloud](/connect/schnittstellen/nextcloud).

---

## Speicherzuordnung

![Screenshot: Speicherzuordnung in der Nextcloud-Schnittstelle eines Standorts](/images/connect/23_nextcloud_standort.png)

**Standort → Schnittstellen → Nextcloud → Abschnitt „Speicherzuordnung"** *(nur sichtbar, wenn eine Nextcloud verbunden ist)*

Hier wird je Kategorie festgelegt, in welchem Speicher die Dateien dieses Standorts abgelegt werden:

| Kategorie | Betrifft | Standard-Ordner in der Nextcloud |
|---|---|---|
| **Mängelmeldungen** | Anhänge an Mängelmeldungen | `/Connect/Maengelmeldungen` |
| **Einsätze** | Einsatzfotos und -dateien, gespeicherte Einsatzberichte | `/Connect/Einsaetze` |
| **News** | Anhänge an News des Standorts | `/Connect/Neuigkeiten` |
| **Termine** | Anhänge an Termine des Standorts | `/Connect/Termine` |
| **Monitor-Dateien** | Logo, Hintergrundbild und Töne des EinsatzMonitors | `/Connect/Monitore` |

- **Speicher:** *Connect Storage* oder *Nextcloud*
- **Ordner:** Bei Connect Storage legt Connect die Ablage selbst fest (Anzeige „Standard"). Bei Nextcloud muss ein **Zielordner** angegeben werden – per Eingabe oder über das Ordner-Symbol, in dem auch neue Ordner angelegt werden können. Ohne Zielordner lässt sich nicht speichern.
- Innerhalb des Zielordners legt Connect je Eintrag automatisch einen Unterordner an, z. B. `2026-09-21 E1234 B2 Brand` bei Einsätzen, `2026-09-21 Übungsabend` bei News/Terminen oder `{Nummer} {Kurzbeschreibung}` bei Mängelmeldungen.

> **Wichtig:**
> - Eine geänderte Zuordnung gilt **nur für neue Uploads**. Bereits gespeicherte Dateien bleiben dort, wo sie abgelegt wurden – es findet keine Migration statt.
> - News und Termine auf **Organisationsebene** (z. B. Orga-Kalender) werden immer im Connect Storage abgelegt.
> - Ist die Nextcloud-Verbindung gestört (Status „Anmeldung fehlgeschlagen"), landen neue Uploads automatisch im **Connect Storage**, damit keine Dateien verloren gehen.

---

## Anhänge

Mit dem neuen Dateispeicher stehen Anhänge in folgenden Bereichen zur Verfügung:

| Bereich | Funktion | Details |
|---|---|---|
| **News** | Dateien an News anhängen *(neu)* | [News & Termine](/connect/08_news_und_termine#anhänge) |
| **Termine** | Dateien an Termine anhängen *(neu)* | [News & Termine](/connect/08_news_und_termine#anhänge) |
| **Mängelmeldungen** | Fotos und Dateien anhängen, jetzt mit Vorschau | [Mängelmeldungen](/connect/10_defektberichte#anhänge) |
| **Einsätze** | Einsatzfotos und -dokumente mit Standort, Anzeige auf der Karte, Bilddokumentation im Einsatzbericht *(neu)* | [Einsätze](/connect/07_einsaetze#tab-anhänge), [EinsatzManager: Anhänge & Dokumente](/einsatzmanager/11_anhaenge_und_dokumente) |
| **Infoboard** | Dokumente aus der Nextcloud verlinken | [Infoboard](/connect/09_infoboard) |

### Dateitypen und Größen

- **Unterstützte Dateitypen beim Hochladen:** Bilder (JPG, PNG, GIF, WebP, BMP, SVG, HEIC/HEIF), Dokumente (PDF, Word, Excel, TXT, CSV) und Videos (MP4, WebM, MOV)
- **Maximale Dateigröße:** **25 MB** im Connect Storage, **250 MB** in einer Nextcloud
- **Monitor-Dateien:** Logo max. 5 MB (JPG, PNG, WebP, SVG), Hintergrundbild max. 10 MB (JPG, PNG, WebP), Töne max. 5 MB (MP3, WAV, OGG)
- Von Bildern und PDFs werden automatisch Vorschaubilder erzeugt.

### Vorschau und Download

Ein Klick auf einen Anhang öffnet die **Vorschau**. Direkt angezeigt werden Bilder, PDFs und Videos; Word- und Excel-Dateien werden über den Microsoft-Office-Viewer dargestellt. HEIC-Bilder und MOV-Videos lassen sich meist nur in Safari anzeigen – ansonsten steht der Download zur Verfügung.

### Anhang melden

Über das **Fahnen-Symbol** („Melden") können Anhänge mit unangemessenem oder rechtswidrigem Inhalt gemeldet werden. Die Meldung geht an die Standortadministratoren und an FeuerSoftware und wird geprüft. Gesperrte Dateien können anschließend nicht mehr heruntergeladen werden.

---

## Berechtigungen

| Aktion | Berechtigung |
|---|---|
| Nextcloud verbinden, testen, trennen, Stammordner festlegen | Standortadministrator |
| Speicherzuordnung ändern | Standortadministrator |
| Speichernutzung einsehen | alle Benutzer der Organisation |
| Speicher buchen, kündigen, aufräumen | Organisationsadministrator |
| Anhänge an News/Termine hochladen, bearbeiten, löschen | Verwaltungsrecht für News bzw. Termine |
| Anhänge an Mängelmeldungen hochladen, löschen | Ersteller der Mängelmeldung, Standortadministrator, Verwaltungsrecht für Mängelmeldungen |
| Einsatzanhänge hochladen, bearbeiten, löschen | Standortadministrator, EinsatzManager, EinsatzTablet |
| Einsatzanhänge ansehen | wie oben, zusätzlich Gruppen mit der Sichtbarkeit **„Einsatzanhänge"** |
| Nextcloud-Dokumente durchsuchen und öffnen | alle Benutzer mit Lesezugriff auf das Infoboard |

> Die Sichtbarkeit **„Einsatzanhänge"** wird in den Gruppeneinstellungen vergeben. Gruppen, die bereits Einsatznachrichten und Einsatzprotokoll sehen durften, haben sie automatisch erhalten.

---

## Datenschutz & Sicherheit

- Die Zugangsdaten zur Nextcloud (ein von der Nextcloud ausgestelltes App-Passwort) werden **verschlüsselt** auf dem Server gespeichert und verlassen diesen nie.
- Dateien in einer Nextcloud werden **über Connect geladen** – Apps und Browser verbinden sich nicht direkt mit der Nextcloud und benötigen keine Nextcloud-Zugangsdaten. Download-Links sind jeweils nur kurz (15 Minuten) und nur für eine einzelne Datei gültig.
- Wird ein Anhang in Connect gelöscht, wird die Datei auch in der Nextcloud gelöscht. Beim Löschen von Einsätzen, News oder Terminen (auch durch das [automatische Datenlöschen](/connect/12_organisationseinstellungen#automatisches-datenlöschen)) werden die zugehörigen Anhänge ebenfalls entfernt.

---

## Häufige Fragen

### Brauche ich eine Nextcloud?

Nein. Ohne Nextcloud werden alle Dateien im Connect Storage abgelegt. Eine Nextcloud lohnt sich vor allem, wenn viele oder große Dateien anfallen (z. B. Einsatzfotos) oder vorhandene Dokumente wie Objektpläne in den Apps durchsuchbar sein sollen.

### Werden bestehende Dateien verschoben, wenn ich die Speicherzuordnung ändere?

Nein. Die Änderung gilt nur für neue Uploads.

### Warum ist mein Kontingent schon belegt, obwohl ich noch nichts hochgeladen habe?

Bereits vorhandene Anhänge von Mängelmeldungen sowie Monitor-Dateien (Logo, Hintergrund, Töne) liegen im Connect Storage und zählen zum Kontingent.

### Was passiert mit meinen Nextcloud-Dateien, wenn ich die Verbindung trenne?

Die Dateien bleiben in der Nextcloud erhalten, sind über Connect aber nicht mehr abrufbar. Details: [Schnittstellen: Nextcloud – Verbindung trennen](/connect/schnittstellen/nextcloud#verbindung-trennen).
