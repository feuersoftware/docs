---
title: Einsatzansicht
description: Aufbau der Einsatzansicht im EinsatzTablet – Einsatzdetails, Fahrzeugstatus, Karte und Kräfteübersicht
---

# Einsatzansicht

Die Einsatzansicht ist die zentrale Ansicht des EinsatzTablets. Sie zeigt alle relevanten Informationen eines aktiven Einsatzes sowie den Fahrzeugstatus der gesamten Organisation.

---

## Bildschirmschoner

Nach dem Start zeigt das Tablet den Bildschirmschoner. Solange dieser aktiv ist, wird **keine GPS-Position** an Connect gesendet. Der Bildschirmschoner kann in den Einstellungen deaktiviert werden.

---

## Aufbau der Ansicht

### Menüleiste (rechts)

Auf der rechten Seite befindet sich die Menüleiste mit den wichtigsten Funktionsbereichen:

- **Glocken-Symbol** – Einsatzdetails öffnen
- **Rückmeldungen** – Übersicht der Einsatzkräfte-Rückmeldungen
- **Meldungen** – Lagemeldungen zum Einsatz
- **Funk** *(bei verbundener UBX-Box)* – Funksteuerung

### Einsatzdetails (Mitte)

Über das **Glocken-Symbol** werden die Details des aktiven Einsatzes eingeblendet:

- Stichwort, Adresse, Sachverhalt
- Zugewiesene Fahrzeuge
- Alle in Connect verfügbaren Einsatzfelder und Zusatzinformationen

### Fahrzeugstatus (links)

Die linke Seite zeigt alle Fahrzeuge der Organisation mit ihrem aktuellen Funkstatus:

- Fahrzeuge mit dem aktuellsten Statusupdate erscheinen oben
- In der oberen rechten Ecke jedes Eintrags: Zeitpunkt des letzten Status
- Liste ist durch Wischen scrollbar
- Durch Tippen auf ein Fahrzeug springt die Karte zum entsprechenden Fahrzeug
- Statusänderungen werden **akustisch vorgelesen** (z. B. „1/46/1 Status 1")

#### Fahrzeuge filtern

In den Einstellungen kann festgelegt werden, dass nur Fahrzeuge angezeigt werden, deren letztes Statusupdate innerhalb eines bestimmten Zeitraums liegt. Außerdem können auf Wunsch nur dem Einsatz zugewiesene Fahrzeuge angezeigt werden – sinnvoll bei aktiver Leitstellenanbindung.

---

## Kartenansicht

In der Mitte des Tablets befindet sich die Karte mit dem Einsatzort:

- Der Einsatzort ist mit einem **Flammen-Symbol** markiert
- Fahrzeuge, die eine GPS-Position gesendet haben, werden mit ihrem Fahrzeugbild auf der Karte angezeigt
- Die Karte aktualisiert sich **live** – Fahrzeugbewegungen sind in Echtzeit sichtbar

### Navigation

- Die Navigation zur Einsatzstelle startet **automatisch** beim Losfahren
- Über den blauen Balken unterhalb der Karte kann die Navigation in **Google Maps** oder **Apple Maps** geöffnet werden

### GPS-Übertragung

Das Tablet sendet seine GPS-Position automatisch an Connect, solange die App im **Vordergrund** läuft. Dadurch ist die Fahrzeugposition in der EinsatzApp, im EinsatzMonitor und im EinsatzTablet anderer Fahrzeuge sichtbar. Fahrten ohne aktive App (z. B. Gerätewartfahrten) werden nicht übertragen.

---

## Kräfteübersicht

Unterhalb der Einsatzdetails werden die Rückmeldungen der alarmierten Einsatzkräfte als farbige Kästchen angezeigt:

| Farbe | Bedeutung |
|---|---|
| Grün | Komme |
| Gelb | Komme später |
| Rot | Komme nicht |

Durch Tippen auf ein Kästchen öffnet sich die Namensliste der jeweiligen Gruppe.
