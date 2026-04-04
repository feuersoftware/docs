---
title: Leitstellenanbindung Oberösterreich
description: Einsatzdaten aus der Leitstelle Oberösterreich über die LFV OÖ API an FeuerSoftware Connect übermitteln
---

# Leitstellenanbindung Oberösterreich

FeuerSoftware bietet eine Direktanbindung an die Leitstellen des Landes Oberösterreich über die API des **Landesfeuerwehrverbands Oberösterreich (LFV OÖ)**.

> **Hinweis:** Diese Anbindung ist kostenfrei für FeuerSoftware-Kunden. Die Freischaltung erfolgt über den FeuerSoftware-Support, der die Datenberechtigung mit dem Landesfeuerwehrkommando abstimmt.

---

## Übertragene Daten

- Einsatznummer, Stichwort und Beschreibung
- Einsatzadresse (Straße, Hausnummer, Ort, Gemeinde)
- Koordinaten
- Anrufer-Information
- Zusatzfelder: Ortsbemerkung, Funkgruppe, Alarmstufe, Objekt, Kurzbeschreibung
- RIC (Funkrufkennung)
- Externe Fahrzeuge
- Fahrzeugstatus via TETRA-Digitalfunk
- Fahrzeugpositionsdaten

---

## Voraussetzungen

- Bestehende Connect-Organisation (erste 90 Tage kostenlos, danach Lizenz erforderlich)
- **Public Connect Schnittstelle** auf Standortebene aktiviert
- Fahrzeuge im Connect Portal angelegt mit eingetragener **Funkgerätekennung** (nur numerisch)

> **Wichtig:** Die API-Schlüssel der Public Connect Schnittstelle ermöglichen vollständigen Zugriff auf den Standort – vertraulich behandeln und nur an den FeuerSoftware-Support weitergeben.

---

## Fahrzeuge konfigurieren

Damit Fahrzeugstatus und -positionen korrekt übertragen werden, muss für jedes Fahrzeug die Funkgerätekennung hinterlegt sein:

1. Im Connect Portal das Fahrzeug öffnen
2. Tab **„Allgemein"**
3. Feld **„Funkgerätekennung"** ausfüllen (ausschließlich numerisches Format)
4. Speichern

---

## Einrichtung beauftragen

1. Connect-Organisation erstellen (falls noch nicht vorhanden)
2. Public Connect Schnittstelle auf allen betroffenen Standorten aktivieren
3. API-Schlüssel an **info@feuersoftware.com** übermitteln

FeuerSoftware koordiniert die Datenberechtigung mit dem Landesfeuerwehrkommando und konfiguriert die Datenübertragung nach Freigabe.

---

## API-Dokumentation (LFV OÖ)

Die technische API-Referenz der LFV OÖ ist unter [einsatz-api.ooelfv.at/swagger](https://einsatz-api.ooelfv.at/swagger/) verfügbar.
