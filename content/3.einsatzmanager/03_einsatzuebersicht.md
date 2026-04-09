---
title: Einsatzübersicht
description: Das Dashboard des EinsatzManagers mit Übersicht aller laufenden und abgeschlossenen Einsätze
---

# Einsatzübersicht (Dashboard)

Nach der Anmeldung gelangt der Benutzer direkt zur **Einsatzübersicht**. Diese ist die zentrale Anlaufstelle des EinsatzManagers und zeigt alle laufenden sowie abgeschlossenen Einsätze der Organisation.

![Screenshot: Dashboard in der Kachelansicht mit mehreren aktiven Einsätzen](/images/einsatzmanager/03_dashboard_kacheln.png)

---

## Anzeigemodi

Die Einsätze können in zwei verschiedenen Ansichten dargestellt werden:

### Kachelansicht

Die Standardansicht zeigt jeden Einsatz als Kachel. Jede Kachel enthält:
- Farblich hinterlegtes Stichwort
- Adresse und Ortsteil
- Priorität (Ampelfarbe)
- Zeitstempel (Beginn und Laufzeit)
- Anzahl alarmierter Einheiten

![Screenshot: Dashboard in der Kachelansicht mit mehreren aktiven Einsätzen](/images/einsatzmanager/03_dashboard_kacheln.png)

### Kartenansicht

Die Kartenansicht zeigt bis zu 50 Einsätze geografisch auf einer Geografischen Karte. Einsätze werden als farbige Marker dargestellt; ein Klick öffnet eine Kurzübersicht.

![Screenshot: Dashboard Kartenansicht mit Einsatzmarkierungen](/images/einsatzmanager/03_dashboard_karte.png)

---

## Filter & Suche

Auf der linken Seite befinden sich die Schnellfilter (Quick Actions), mit denen die Anzeige gezielt eingeschränkt werden kann.

| Filter | Optionen |
|---|---|
| Status | Aktiv, Abgeschlossen |
| Priorität | Keine, Niedrig, Mittel, Hoch |
| Zeitraum | Letzte Stunde, Heute, Benutzerdefiniert |
| Standort | Auswahl eines Standorts / Wache |
| Freitextsuche | Durchsucht Stichwort, Sachverhalt und Adresse |

> **Standardfilter:** Beim Aufruf des Dashboards werden automatisch die **aktiven Einsätze** angezeigt.

Alle Filter lassen sich kombinieren. Die Einstellungen bleiben beim Wechsel des Anzeigemodus erhalten.

::callout{type="warning"}
**Eingeschränkter Zugriff auf beendete Einsätze**

Ist diese Funktion aktiv, sehen Nutzer des EinsatzManagers abgeschlossene Einsätze nur noch, wenn diese **nicht älter als 2 Stunden** sind. Ältere Einsätze werden ausgeblendet.

**Ausnahmen:** Einzelne Gruppen können im Connect-Portal als Ausnahme hinterlegt werden – deren Mitglieder haben dann weiterhin Vollzugriff auf alle beendeten Einsätze.

**Wo konfigurieren?** Connect-Portal → Organisationseinstellungen → EinsatzManager
::

> **Hinweis:** Sollten alte Einsätze als aktiv erscheinen, liegt dies daran, dass diese keinen Einsatzende-Zeitstempel besitzen. Betroffene Einsätze können über das **Connect-Portal** manuell geschlossen werden.

---

## Echtzeit-Aktualisierung

Das Dashboard empfängt Einsatzmeldungen in Echtzeit über eine WebSocket-Verbindung (SignalR). Der aktuelle Verbindungsstatus wird oben rechts angezeigt:

- **„Live-Aktualisierungen aktiviert"** (grün) – neue und geänderte Einsätze erscheinen automatisch
- **„Live-Aktualisierungen deaktiviert"** (rot) – Verbindung unterbrochen, Seite manuell neu laden

---

## Einsatzstatistiken

Über der Einsatzliste werden Kurzstatistiken angezeigt, z. B.:
- Anzahl aktiver Einsätze
- Gesamtanzahl der Einsätze im gewählten Zeitraum

---

## Navigation zu einem Einsatz

Ein Klick auf eine Kachel, eine Tabellenzeile oder einen Kartenmarker öffnet die **Einsatzdetailseite** des jeweiligen Einsatzes.
