---
title: Karte
description: Die Einsatzkarte im EinsatzTablet – Kartentypen, Kartenebenen und Legende, Kartenformen und Bereiche, Wasserversorgung, Waldwege (Navlog), Einsatzort verschieben, what3words, iKAT und Rettungsdatenblätter
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

Über **„Kartenebenen"** bzw. die **„Legende"** werden einzelne Ebenen ein- und ausgeblendet; **„Alles an"** schaltet alle ein, **„Alles aus"** blendet alle wieder aus.

![Screenshot: Einsatzkarte mit Legende, Hydranten und Waldwege-Overlay](/images/einsatztablet/12_karte.png)

| Gruppe | Inhalte |
|---|---|
| **Einsatz** | Einsatzort, Einsatzmittel (mit Funkstatus), [Kartenformen](#kartenformen), Fotos, eigene Position, Standort (Wache) |
| **Wasserversorgung** | Hydrant, Löschwasserteich, Löschwasserbehälter/Zisterne, Saugstelle – aus **OpenStreetMap** und, falls eingerichtet, aus **wasserkarte.info**. Über „Einzelne Typen anzeigen" lassen sich die Typen getrennt schalten |
| **Verkehr & Wege** | Straßensperrung, Verkehr (frei / zäh / Stau) |
| **Weitere Punkte** | Rettungspunkt, Hubschrauber-LS/LP, Feuerwache |

Ein Tipp auf eine Wasserentnahmestelle zeigt Details wie Typ und Nennweite.

**Voraussetzungen in Connect:**
- **wasserkarte.info** – die Schnittstelle muss im Connect Portal aktiviert sein: [wasserkarte.info](/connect/schnittstellen/wasserkarte)
- **Waldwege** – die Navlog-Schnittstelle muss aktiviert sein: [Navlog](/connect/schnittstellen/navlog)

> **Tipp:** Die Schnellaktion **„Hydrant finden"** öffnet die Karte direkt mit allen Wasserentnahmestellen.

### Waldwege (Navlog)

Das **„Waldwege-Overlay (Navlog)"** zeigt Wald- und Forstwege mit ihrer Befahrbarkeit, z. B. „LKW, mit Wendemöglichkeit", „LKW, enge Kurven", „nur PKW" oder „Rückeweg, nicht befahrbar". Die **„Navlog-Legende"** erklärt alle Wegeklassen und Symbole.

---

## Kartenformen

Mit Kartenformen wird die Einsatzstelle in **Bereiche** gegliedert – z. B. Einsatzabschnitte, Bereitstellungsräume, eine Wasserentnahme oder eine Absperrung. Formen, die im [EinsatzManager](/einsatzmanager/05_einsatzdetails#kartenformen-zeichnen) gezeichnet wurden, erscheinen automatisch auf der Karte – und umgekehrt. Jede Form trägt ihren Namen in der gewählten Farbe.

![Screenshot: Einsatzkarte mit Kartenformen „Einsatzstelle", „BR" und „Wasserentnahme"](/images/einsatztablet/32_kartenformen.png)

Kartenformen werden auch auf der Karte der [Anfahrt](/einsatztablet/06_anfahrt) angezeigt. Über die [Legende](#kartenebenen-und-legende) lassen sich alle Formen mit dem Schalter **„Kartenformen"** ausblenden.

### Form zeichnen

1. Auf der Einsatzkarte **„Form zeichnen"** antippen und die Art wählen:

   ![Screenshot: Auswahl der Formart unter „Form zeichnen"](/images/einsatztablet/34_form_zeichnen.png)

   | Art | So wird gezeichnet |
   |---|---|
   | **Freihand (wird erkannt)** | Form mit dem Finger frei zeichnen – die App erkennt daraus Kreis, Rechteck, Fläche oder Linie |
   | **Fläche** | Punkte setzen; zum Abschließen auf den ersten Punkt tippen oder **„Fertig"** |
   | **Rechteck** | Erste Ecke setzen, dann die gegenüberliegende |
   | **Kreis** | Mittelpunkt setzen, dann einen Punkt auf dem Rand |
   | **Linie** | Punkte setzen; zum Abschließen **„Fertig"** |

   **„Letzten Punkt entfernen"** nimmt einen falsch gesetzten Punkt zurück, **„Abbrechen"** verwirft die Zeichnung.

2. Im Dialog **„Neue Form"** einen **Namen** (z. B. „Abschnitt Nord") und eine **Farbe** wählen. Der Name muss im Einsatz eindeutig sein.
3. Optional unter **„Fahrzeuge"** die Fahrzeuge markieren, die diesem Bereich zugeordnet werden – sie erhalten den Tag des Bereichs sofort.
4. **„Speichern"** – oder **„Speichern und Benutzer informieren"**, um die Beteiligten zusätzlich zu benachrichtigen.

![Screenshot: Dialog „Neue Form" mit Name, Farbe und Fahrzeugauswahl](/images/einsatztablet/35_neue_form.png)

### Form bearbeiten, Fahrzeuge zuweisen und löschen

Ein Tipp auf eine Form öffnet ihr Menü:

![Screenshot: Menü der Kartenform „Wasserentnahme" mit zugewiesenen Fahrzeugen](/images/einsatztablet/33_kartenform_menue.png)

| Schaltfläche | Funktion |
|---|---|
| **Navigieren** | Startet die Navigation zum Mittelpunkt der Form (mit der unter [Setup → Darstellung → „Navigationstyp"](/einsatztablet/15_setup#darstellung) gewählten App) |
| **Name/Farbe** | Name und Farbe der Form ändern |
| **Form** | Form auf der Karte anpassen: Punkte ziehen, einen Zwischenpunkt ziehen fügt einen Punkt hinzu, Doppeltippen entfernt ihn. Der **blaue Punkt** verschiebt die ganze Form; beim Kreis ändert der Randpunkt den Radius |
| **Löschen** | Entfernt die Form von der Karte und von allen damit markierten Fahrzeugen (nach Rückfrage) |

Unter **„Zugewiesene Fahrzeuge"** stehen alle Fahrzeuge des Bereichs; **✕** nimmt ein Fahrzeug wieder heraus. Unter **„Hinzufügen"** werden die übrigen aktiven Fahrzeuge des Einsatzes angeboten – ein Tipp weist zu, über **„Fahrzeug suchen"** lässt sich die Liste filtern. Ist ein Fahrzeug bereits einem anderen Bereich zugeordnet, steht dessen Name in Farbe daneben.

> Formen lassen sich nur in laufenden Einsätzen zeichnen und bearbeiten. Formen, die eine andere Organisation über [„Einsatzdaten teilen"](/connect/07_einsaetze#einsatzdaten-teilen) bereitstellt, sind mit **„Geteilt von …"** gekennzeichnet und können nur angesehen werden.

### Hinweis bei Zuordnung des eigenen Fahrzeugs

Wird das eigene Fahrzeug von anderer Stelle – z. B. im EinsatzManager oder an einem anderen Tablet – einem Bereich zugeordnet, erscheint groß in der Bildschirmmitte **„Unser Fahrzeug wurde einem Bereich zugeordnet"** mit Name und Farbe des Bereichs:

![Screenshot: Hinweis „Unser Fahrzeug wurde einem Bereich zugeordnet" für den Bereich „Wasserentnahme"](/images/einsatztablet/38_bereich_zugeordnet.png)

- **„Auf Karte anzeigen"** – öffnet die Einsatzkarte mit dem Bereich im Blick
- **„Navigieren"** – startet die Navigation zum Mittelpunkt des Bereichs
- **„Verstanden"** (oder ein Tipp irgendwohin) schließt den Hinweis; weitere Zuordnungen folgen nacheinander

Zusätzlich sagt die [Sprachausgabe](/einsatztablet/15_setup#sprachausgabe) „Neuer Bereich für …" an. Im [Protokoll](/einsatztablet/08_protokoll) werden angelegte Kartenformen und geänderte Tags festgehalten.

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
