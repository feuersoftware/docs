---
title: Karte
description: Die Einsatzkarte im EinsatzTablet – Kartentypen, Kartenebenen und Legende, Wasserversorgung, Waldwege (Navlog), Einsatzort verschieben, what3words, iKAT und Rettungsdatenblätter
---

# Karte

**Einsatz → Karte**

Die Einsatzkarte zeigt Einsatzort, eigene Position, die beteiligten Einsatzmittel mit Funkstatus und auf Wunsch Wasserentnahmestellen, Rettungspunkte, Straßensperrungen, Fotos und Waldwege.

---

## Kartentyp

Über **„Kartentyp wechseln"** stehen zur Auswahl:

| Kartentyp | Beschreibung |
|---|---|
| **OSM** | OpenStreetMap |
| **G-Straßen** | Google Maps Straßenkarte |
| **G-Satellit** | Google Maps Satellitenbild |
| **G-Hybrid** | Satellitenbild mit Straßennamen |

Zusätzlich kann unter [Setup → Darstellung](/einsatztablet/15_setup#darstellung) die **Verkehrslage** von Google Maps eingeblendet und das Karten-Design (hell/dunkel) gewählt werden.

---

## Kartenebenen und Legende

Über **„Kartenebenen"** bzw. die **„Legende"** werden einzelne Ebenen ein- und ausgeblendet. **„Alles an"** schaltet alle ein, **„Alles aus"** schaltet alle wieder aus – bis auf die Ebenen des Einsatzes (Einsatzort, Einsatzmittel, Fotos). So ist die Karte z. B. nach „Hydrant finden" mit einem Tipp wieder aufgeräumt.

![Screenshot: Einsatzkarte mit Legende, Hydranten und Waldwege-Overlay](/images/einsatztablet/12_karte.png)

| Gruppe | Inhalte |
|---|---|
| **Einsatz** | Einsatzort, Einsatzmittel (mit Funkstatus), eigene Position, Standort (Wache) |
| **Wasserversorgung** | Hydrant, Löschwasserteich, Löschwasserbehälter/Zisterne, Saugstelle – aus **OpenStreetMap** und, falls eingerichtet, aus **wasserkarte.info**. Über „Einzelne Typen anzeigen" lassen sich die Typen getrennt schalten |
| **Verkehr & Wege** | Straßensperrung, Verkehr (frei / zäh / Stau) |
| **Weitere Punkte** | Rettungspunkt, Hubschrauber-LS/LP, Feuerwache, Fotos aus dem Einsatz |

Ein Tipp auf eine Wasserentnahmestelle zeigt Details wie Typ und Nennweite.

**Voraussetzungen in Connect:**
- **wasserkarte.info** – die Schnittstelle muss im Connect Portal aktiviert sein: [wasserkarte.info](/connect/schnittstellen/wasserkarte)
- **Waldwege** – die Navlog-Schnittstelle muss aktiviert sein: [Navlog](/connect/schnittstellen/navlog)

> **Tipp:** Die Schnellaktion **„Hydrant finden"** öffnet die Karte direkt mit allen Wasserentnahmestellen.

### Waldwege (Navlog)

Das **„Waldwege-Overlay (Navlog)"** zeigt Wald- und Forstwege mit ihrer Befahrbarkeit, z. B. „LKW, mit Wendemöglichkeit", „LKW, enge Kurven", „nur PKW" oder „Rückeweg, nicht befahrbar". Die **„Navlog-Legende"** erklärt alle Wegeklassen und Symbole.

---

## Kartensteuerung

| Schaltfläche | Funktion |
|---|---|
| **Zum Einsatzort** | Karte auf den Einsatzort zentrieren |
| **Zur eigenen Position** | Karte auf das eigene Fahrzeug zentrieren |
| **Eigener Position folgen** | Karte läuft mit dem Fahrzeug mit („Folgen beenden" stoppt) |
| **Karte einnorden** | Karte wieder nach Norden ausrichten |

---

## Einsatzort verschieben

Stimmt die Position des Einsatzortes nicht – oder hat der Einsatz noch keine –, lässt sie sich direkt am Tablet korrigieren:

![Screenshot: Einsatzort per langem Druck auf die Karte verschieben](/images/einsatztablet/13_einsatzort_verschieben.png)

1. **„Einsatzort verschieben"** antippen (oder lange auf die Karte drücken → **„Einsatzort hierher verschieben"** bzw. **„Einsatzort hier setzen"**)
2. Karte verschieben, bis das **Fadenkreuz** auf dem Einsatzort liegt – oder **„Auf meinen Standort"**
3. **„Hier setzen"**
4. Im Dialog **„Adresse am neuen Einsatzort"** die vorbelegte Adresse prüfen und **„Speichern"**

Der neue Einsatzort ist sofort für alle Beteiligten sichtbar.

---

## what3words

**„what3words öffnen"** ermittelt die what3words-Adresse (drei Wörter) eines Punktes. Sie lässt sich **kopieren** – z. B. um sie per Funk weiterzugeben – oder im Browser öffnen.

---

## iKAT und Rettungsdatenblätter (CRS)

Sind die Schnellzugriffe unter [Setup → Darstellung](/einsatztablet/15_setup#darstellung) aktiviert, erscheinen auf der Karte die Schaltflächen:

- **„iKAT öffnen"** – öffnet iKAT
- **„Rettungsdatenblätter (CRS)"** – öffnet die Rettungsdatenblätter in der App ModiTech Crash Recovery System (muss auf dem Tablet installiert sein)

---

## Offline-Karte

Kartenkacheln von OpenStreetMap werden auf dem Tablet zwischengespeichert. Bereits angesehene Kartenausschnitte bleiben so auch bei schlechtem Netz verfügbar. Hydranten und Waldwege werden dagegen online geladen.
