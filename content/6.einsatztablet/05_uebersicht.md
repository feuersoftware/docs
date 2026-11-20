---
title: Übersicht
description: Die Einsatzübersicht im EinsatzTablet – Einsatzort, Sachverhalt, Rückmeldungen, Mängelhinweis, HomeResQ, Dokumente, Einsatzdaten, Datenfreigabe sowie Einsatz anlegen, bearbeiten und beenden
---

# Übersicht

**Einsatz → Übersicht**

Die Übersicht fasst den geöffneten Einsatz auf einer Seite zusammen.

![Screenshot: Übersicht eines laufenden Einsatzes](/images/einsatztablet/08_uebersicht.png)

---

## Linke Spalte

### Einsatzort

Adresse mit Kartenausschnitt, aktuellem Wetter am Einsatzort, Stichwort und den **zugewiesenen Einheiten**.

### Sachverhalt

Meldebild bzw. Lage und darunter die laufenden Einträge aus dem [Protokoll](/einsatztablet/08_protokoll) – z. B. Lagemeldungen, Änderungen der Einsatzdaten oder neue Anhänge.

---

## Rechte Spalte

### Rückmeldungen

Die Rückmeldungen der Einsatzkräfte aus der EinsatzApp: **Komme**, **Komme später**, **Komme nicht** – jeweils mit Anzahl. Ein Tipp auf eine Kachel zeigt die Namen.

### Bekannte Mängel

Sind für das eigene Fahrzeug offene [Mängelmeldungen](/einsatztablet/13_fahrzeug_und_maengel#mängel) vorhanden, erscheint ein roter Hinweis („1 bekannter Mangel" bzw. „… bekannte Mängel") mit dem ersten Mangel. Ein Tipp öffnet die Mängelliste.

### HomeResQ

Liegen bei **HomeResQ** Informationen zum Objekt und zu den Bewohnern an der Einsatzadresse vor, erscheint die Karte **„HomeResQ – Hinterlegte Infos zu Objekt und Bewohnern"**.

- Vor dem Öffnen fragt die App nach: **„Bist du dir sicher? Die Besitzer werden beim Fortsetzen informiert."**
- Verfügbar nur für laufende Einsätze bis **12 Stunden** nach Einsatzbeginn.

### Dokumente

Dokumente aus dem [Online-Speicher des Standorts](/connect/23_dateispeicher) (z. B. Objektpläne), die über die dynamischen Zusatzinformationen mit dem Einsatz verknüpft sind. Ein Tipp öffnet die Vorschau. Ist kein Online-Speicher verbunden, steht dort „Online-Speicher nicht verbunden".

### Einsatzdaten

Kategorie, Priorität, Zusatzfelder der Leitstelle, Meldender und Telefon, Alarmzeit, Einsatzende, Einsatznummer, Quelle, Koordinaten, RIC und „Zuletzt aktualisiert". Welche Zeilen angezeigt werden, wird unter [Setup → Anzeige & Filter → Einsatzdaten](/einsatztablet/15_setup#anzeige-filter) festgelegt.

- **Bearbeiten** (Stift-Symbol) – Einsatzdaten ändern (siehe unten)
- **„Einsatz beenden"** – beendet den Einsatz nach Rückfrage „Einsatz beenden?"

### Datenfreigabe

Zeigt, ob die Daten dieses Einsatzes mit anderen Standorten oder Organisationen geteilt werden („Aktiv" / „Nicht aktiv", „Freigegeben für …"). Über **„Datenfreigabe verwalten"** lassen sich einstellen:

![Screenshot: Dialog „Datenfreigabe verwalten"](/images/einsatztablet/09_datenfreigabe.png)

| Feld | Beschreibung |
|---|---|
| **Freigabe aktiv** | Teilen ein- oder ausschalten |
| **Freigabestufe** | Organisation oder Leitstelle |
| **Freigabedauer** | Wie lange ab Einsatzbeginn geteilt wird |
| **Freigegebene Daten** | Nachrichten, Protokolleinträge, Zugewiesene Einsatzmittel, Besatzung, Anhänge |
| **Freigegeben für** | Ziele der Freigabe |

Wird die Freigabe automatisch über eine Vorlage verwaltet, steht dort „Diese Freigabe wird automatisch verwaltet." Voraussetzungen und Funktionsweise: [Connect: Einsatzdaten teilen](/connect/07_einsaetze#einsatzdaten-teilen)

::note
Damit Stärkemeldungen, Protokolleinträge und Lagemeldungen standortübergreifend ausgetauscht werden, muss **„Einsatzdaten teilen"** in Connect eingerichtet sein.
::

### Anhänge

Fotos und Dateien des Einsatzes mit Vorschau. Hinzufügen und Verwalten: [Bericht & Anhänge](/einsatztablet/11_bericht_und_anhaenge#anhänge)

---

## Einsatz anlegen und bearbeiten

**Neuen Einsatz anlegen:** In der Einsatzliste **„Neuer Einsatz"** antippen.

- **„Einfach"** – Stichwort (Pflichtfeld), Sachverhalt und Adresse
- **„Detailliert"** – zusätzlich alle Adressfelder (Straße, Hausnummer, PLZ, Ort, Ortsteil)
- **„Aktueller Standort"** übernimmt die Position des Fahrzeugs als Einsatzadresse

**Einsatz bearbeiten:** In der Übersicht auf **„Bearbeiten"** tippen. Zusätzlich änderbar: Einsatzende, Meldender, Telefon und Einsatznummer.

Anlegen und Bearbeiten lassen sich unter [Setup → Anzeige & Filter](/einsatztablet/15_setup#anzeige-filter) abschalten („Neue Einsätze anlegen", „Vorhandene Einsätze bearbeiten").
