---
title: Standorte
description: Standorte anlegen, konfigurieren und verwalten im Connect Portal
---

# Standorte

Standorte sind die lokalen Einheiten einer Organisation – z. B. einzelne Feuerwehrhäuser oder Gerätehäuser. Jede Organisation hat mindestens einen Standort.

Die Standortverwaltung ist nur auf **Organisations-Ebene** verfügbar.

---

## Standortübersicht

**Seitenleiste (Organisations-Ebene) → Standorte**

![Screenshot: Standortübersicht](/images/connect/05_standorte_uebersicht.png)

Die Übersicht zeigt alle Standorte der Organisation mit Name, Adresse und Anzahl der zugeordneten Benutzer und Fahrzeuge.

---

## Standort anlegen

1. **Seitenleiste → Standorte → „Standort anlegen"**
2. Pflichtfelder ausfüllen:
   - **Name** des Standorts
   - **Adresse** (Straße, PLZ, Stadt)
   - **Koordinaten** (Latitude / Longitude) – werden für Kartenanzeige und Geofence verwendet
3. Speichern

Nach dem Anlegen erscheint der neue Standort im Standort-Dropdown und kann individuell konfiguriert werden.

---

## Standort-Einstellungen

**Standort wählen → Seitenleiste → Standort-Einstellungen**

![Screenshot: Standort-Einstellungen](/images/connect/05_standort_einstellungen.png)

### Allgemein
- Name des Standorts
- Adresse (Straße, PLZ, Stadt)
- GPS-Koordinaten (Latitude / Longitude)
- **Mailing-Listen für Defektberichte** – welche Empfänger bei neuen Defektmeldungen benachrichtigt werden

### Ressourcen-Zuordnung
Hier werden externe Ressourcen (z. B. Leitstellen-Einheiten) dem Standort zugeordnet. Diese Zuordnung ist relevant für die Leitstellen-Integration.

### Einsätze
Konfiguration, wie Einsätze für diesen Standort verwaltet werden – z. B. ob Einsatz-Sharing mit anderen Standorten aktiviert ist.

---

## Verfügbarkeitswarnungen

**Standort wählen → Seitenleiste → Verfügbarkeitswarnungen**

Verfügbarkeitswarnungen benachrichtigen, wenn die Einsatzbereitschaft des Standorts unter einen definierten Schwellenwert fällt.

- Schwellenwert für Mindestverfügbarkeit festlegen
- Benachrichtigungsempfänger (Benutzer oder Mailing-Listen) hinterlegen
- Warnungen können für verschiedene Tageszeiten und Wochentage separat konfiguriert werden

---

## Aktivitätsprotokolle

**Standort wählen → Seitenleiste → Aktivitätsprotokolle**

Alle Änderungen am Standort und seinen Daten werden im Aktivitätsprotokoll aufgezeichnet. Das Protokoll zeigt:

- Wer was wann geändert hat
- Erstellte, bearbeitete und gelöschte Einträge

Das Protokoll kann nach Zeitraum und Bereich gefiltert werden.
