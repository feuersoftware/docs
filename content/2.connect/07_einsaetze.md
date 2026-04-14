---
title: Einsätze
description: Einsatzübersicht, Details, Protokoll und Kartenansicht im Connect Portal
---

# Einsätze

Die Einsatzverwaltung ist auf **Standort-Ebene** verfügbar. Auf **Organisations-Ebene** können Einsätze aller Standorte übergreifend eingesehen werden (sofern Einsatz-Sharing aktiviert ist).

---

## Einsatzübersicht

**Seitenleiste → Einsätze**

![Screenshot: Einsatzübersicht](/images/connect/07_einsatz_liste.png)

Die Übersicht zeigt alle Einsätze des Standorts in einer Tabelle mit:

- Startdatum und -uhrzeit
- Stichwort
- Adresse
- Status (aktiv / abgeschlossen)

### Suche und Filter
- Freitextsuche über alle Felder
- Filterung nach Zeitraum
- Filterung nach Status (Aktiv / Abgeschlossen)
- Filterung nach Standort (auf Organisationsebene)

### Kartenansicht
Über den Button **„Karte"** wechselst du zur geografischen Darstellung aller Einsätze.

---

## Einsatz anlegen (manuell)

![Screenshot: Einsatz anlegen](/images/connect/07_einsatz_anlegen.png)

1. **Seitenleiste → Einsätze → „Einsatz anlegen"**
2. Felder ausfüllen:
   - **Stichwort** (aus konfigurierten Stichwörtern wählen oder frei eingeben)
   - **Adresse** (Straße, Hausnummer, PLZ, Ort)
   - **Startzeit**
   - **Alarmgruppen** (welche Einheiten alarmiert werden)
   - **Fahrzeuge** (welche Fahrzeuge zugeordnet werden)
   - **Zusatzinformationen** (optional)
3. **„Einsatz erstellen"** klicken

Der Einsatz wird sofort in der EinsatzApp, im EinsatzManager und auf dem EinsatzMonitor angezeigt.

---

## Einsatz-Detailansicht

Einen Einsatz in der Übersicht antippen → Detailansicht mit mehreren Tabs:

![Screenshot: Einsatz-Detailansicht](/images/connect/07_einsatz_detail.png)

### Tab: Allgemein
- Stichwort, Adresse, Start- und Endzeit
- Zugeordnete Alarmgruppen und Fahrzeuge
- Personenstatus (wer kommt / wer kommt nicht)
- Karte mit Einsatzort und Fahrzeugpositionen
- Zusatzinformationen und Dynamische Felder

### Tab: Protokoll
Chronologisches Protokoll aller Ereignisse des Einsatzes:
- Alarmierungszeitpunkt
- Statusmeldungen der Einsatzkräfte
- Fahrzeugbewegungen
- Manuelle Einträge aus dem EinsatzManager

Das Protokoll kann nach Sichtbarkeit gefiltert werden (öffentlich / intern).

---

## Einsatz bearbeiten

In der Detailansicht → **„Bearbeiten"**:
- Stichwort, Adresse und Zeiten ändern
- Alarmgruppen und Fahrzeuge hinzufügen oder entfernen
- Einsatz manuell abschließen (Endzeit setzen)

---

## Einsatz abschließen

Einsätze werden automatisch abgeschlossen, wenn die Leitstelle ein Endsignal sendet. Manuell:

1. Einsatz öffnen → **„Bearbeiten"**
2. **„Einsatz abschließen"** klicken oder Endzeit manuell eintragen
3. Speichern

> Ein automatisches Beenden nach einer konfigurierbaren Zeit ist in den Connect Organisationseinstellungen konfigurierbar.

---

## Einsatz löschen

In der Detailansicht → **„Einsatz löschen"** → Bestätigungsdialog. Gelöschte Einsätze können nicht wiederhergestellt werden.

---

## Einsatz-Sharing (Organisations-Ebene)

Wenn Einsatz-Sharing aktiviert ist, können Einsätze eines Standorts für andere Standorte der Organisation sichtbar gemacht werden. Die Konfiguration erfolgt in den [Standort-Einstellungen](./05_standorte) und den [Organisationseinstellungen](./12_organisationseinstellungen).
