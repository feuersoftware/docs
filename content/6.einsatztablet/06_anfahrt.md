---
title: Anfahrt
description: Die Anfahrt-Ansicht im EinsatzTablet – Navigation starten, Funkstatus setzen, Lagemeldungen der Ersteintreffenden, Stärke, Gesamtstärke und Einsatzmittel
---

# Anfahrt

**Einsatz → Anfahrt**

Die Anfahrt bündelt alles, was auf dem Weg zum Einsatzort wichtig ist. Bei **Status 3** wechselt das Tablet automatisch hierher (siehe [Alarmierung](/einsatztablet/04_alarmierung#status-3-automatisch-zur-anfahrt)).

![Screenshot: Anfahrt mit Karte, Lagemeldungen, Stärke und Einsatzmitteln](/images/einsatztablet/10_anfahrt.png)

---

## Karte und Navigation

Die Karte zeigt Einsatzort, eigene Position und die Positionen der beteiligten Fahrzeuge. Darunter stehen Adresse und die Zusatzfelder der Leitstelle.

Der Navigations-Button (Pfeil-Symbol) neben der Adresse – bzw. **„Navigation starten"** auf der Karte – öffnet die Route zum Einsatzort in der Navi-App, die unter [Setup → Darstellung → „Navigationstyp"](/einsatztablet/15_setup#darstellung) gewählt ist: standardmäßig **Google Maps** auf Android-Tablets und **Apple Karten** auf dem iPad. Die Route wird für das **Auto** berechnet. Ist die gewählte App nicht installiert, öffnet sich die Route im Browser.

Fehlen die Koordinaten des Einsatzorts, wird die Adresse an die Navi-App übergeben.

---

## Lagemeldungen der Ersteintreffenden

Die neuesten Lagemeldungen aus Protokoll, EinsatzManager und von anderen Fahrzeugen – so weiß die Besatzung schon auf der Anfahrt, was sie erwartet. Über den Filter lassen sich die angezeigten Kategorien einschränken.

---

## Funkstatus

Über das Tastenfeld **„Funkstatus"** oberhalb der Stärke setzt die Besatzung den Status des eigenen Fahrzeugs (1–6). Ohne Netz wird der Status nachgesendet (siehe [Offline & Fehlerbehebung](/einsatztablet/16_offline_und_fehlerbehebung)).

Das Tastenfeld erscheint nur, wenn der Status am Tablet gesetzt werden darf – das wird unter [Setup → Anzeige & Filter → „Funkstatus manuell setzen erlauben"](/einsatztablet/15_setup#anzeige-filter) festgelegt.

---

## Stärke

Die Karte **„Stärke"** zeigt die gemeldete Stärke des eigenen Fahrzeugs (z. B. 1/8 mit 4 PA). **„Melden"** öffnet die [Besatzung](/einsatztablet/09_besatzung).

---

## Einsatzmittel und Gesamtstärke

Die Liste **„Einsatzmittel"** zeigt alle beteiligten Fahrzeuge mit Funkstatus, Zeitpunkt der letzten Statusänderung, gemeldeter Stärke und – falls bekannt – Position auf der Karte.

- **Sortierung:** Standard, Status oder Statuszeit
- **Darstellung:** „Kompaktansicht" oder „Kachelansicht"
- **Stärke melden:** Über den Stift an einem Fahrzeug lässt sich die Stärke auch **für andere Fahrzeuge** eintragen
- **„Einsatzmittel hinzufügen"** – ein Fahrzeug aus Connect oder per Freitext ein externes Fahrzeug zum Einsatz hinzufügen

Darüber fasst **„Gesamtstärke"** den Einsatz zusammen: Einheiten, Personal und PA – jeweils **im Einsatz**, **beendet** und **gesamt**, dazu die Verteilung der Funkstatus und die Herkunft („Eigene" / „Andere Organisationen"). Die Filter **„Ohne Stärkemeldung"** und **„Mit PA"** zeigen schnell, welche Einheiten noch nicht gemeldet haben bzw. Atemschutzgeräteträger mitbringen.

![Screenshot: Aufgeklappte Gesamtstärke des Einsatzes](/images/einsatztablet/11_gesamtstaerke.png)
