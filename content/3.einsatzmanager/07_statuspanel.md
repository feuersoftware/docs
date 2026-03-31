# Statuspanel

Das **Statuspanel** bietet eine permanente Echtzeit-Übersicht aller Fahrzeuge der Organisation. Es ist besonders für die Leitstelle oder einen dedizierten Bildschirm in der Wache konzipiert.

Das Statuspanel ist über den Menüpunkt **„Statuspanel"** in der Hauptnavigation erreichbar.

![Screenshot: Statuspanel in der Kachelansicht mit mehreren Standorten](/images/einsatzmanager/07_statuspanel_kacheln.png)

---

## Anzeigemodi

### Kachelansicht (Standard)

Fahrzeuge werden nach Standorten / Wachen gruppiert in einer Kacheldarstellung angezeigt. Das Layout verteilt die Fahrzeuge automatisch auf zwei Spalten und gleicht die Höhe aus.

Jede Fahrzeugkachel zeigt:
- Fahrzeugbild
- Rufname und Fahrzeugbezeichnung
- Aktueller Funkstatus (farblich codiert)
- Letzter GPS-Zeitstempel

![Screenshot: Einzelne Fahrzeugkachel im Statuspanel](/images/einsatzmanager/07_statuspanel_kachel_detail.png)

### Kartenansicht

Die Kartenansicht stellt alle Fahrzeuge mit ihren aktuellen GPS-Positionen auf einer Karte dar. Farbige Marker entsprechen dem Funkstatus der Fahrzeuge.

![Screenshot: Statuspanel Kartenansicht mit Fahrzeugmarkierungen](/images/einsatzmanager/07_statuspanel_karte.png)

---

## Funkstatus-Farbkodierung

Der Funkstatus der Fahrzeuge wird durch Farben visuell unterschieden:

| Status | Farbe | Bedeutung |
|---|---|---|
| — | Weiß | Kein Status |
| 0 | Lila | Notruf |
| 1 | Hellgrün | Einsatzbereit über Funk |
| 2 | Grün | Einsatzbereit Wache |
| 3 | Gelb | Auftrag übernommen / ausgerückt |
| 4 | Rot | Einsatzort an |
| 5 | Blau | Sprechwunsch |
| 6 | Grau | Nicht einsatzbereit |
| 7 | Grau | Patient aufgenommen (RD) |
| 8 | Grau | Zielort an / Krankenhaus (RD) |
| 9 | Grau | Handquittung / Fremdanmeldung |

Die genaue Bedeutung der Statuscodes hängt von der Konfiguration der Organisation im Connect-Portal ab.

---

## Echtzeit-Aktualisierung

Das Statuspanel empfängt alle Statusänderungen und Positionsupdates in Echtzeit über SignalR:

- **Statuswechsel** eines Fahrzeugs werden sofort visuell dargestellt
- **Neue GPS-Positionen** aktualisieren den Zeitstempel und die Kartenposition
- **Akustische Benachrichtigungen** – optional konfigurierbar; ein Signalton ertönt bei relevanten Statusänderungen

Der Live-Verbindungsstatus wird analog zur Einsatzübersicht über ein farbiges Badge angezeigt.

---

## Fahrzeug-Detailansicht

Ein Klick auf eine Fahrzeugkachel öffnet eine seitliche Detailansicht mit weiteren Informationen und Aktionsmöglichkeiten.

### Informationen

- Fahrzeugbild, Rufname und ISSI
- Verlauf der letzten Statusmeldungen
- Aktuelle GPS-Position auf einer Karte

### Aktionen

**Status setzen**

Über die Statusschaltflächen kann der Funkstatus des Fahrzeugs manuell gesetzt werden. Verfügbare Statuswerte: 1, 2, 3, 4, 7, 8.

**Einsatz zuweisen**

Im Bereich „Aktive Einsätze" werden alle laufenden Einsätze aufgelistet. Mit **„Zuweisen"** kann das Fahrzeug direkt einem Einsatz zugeteilt werden. Über **„Anzeigen"** gelangt man zur Einsatzdetailseite.

**SDS-Nachricht senden**

Sofern für die Organisation aktiviert, kann über die Detailansicht eine SDS-Nachricht (Kurztextnachricht) direkt an das Fahrzeug gesendet werden.

---

## Standort-Gruppierung

Fahrzeuge werden automatisch ihrem konfigurierten Standort zugeordnet und in der Kachelansicht unter dem jeweiligen Standortnamen gruppiert angezeigt. Die Konfiguration der Standorte erfolgt im Connect-Portal.
