# Einsatzdetails

Die Einsatzdetailseite ist das Herzstück des EinsatzManagers. Sie vereint alle einsatzrelevanten Informationen in einer dreispaltigen Ansicht und aktualisiert sich in Echtzeit.

![Screenshot: Einsatzdetailseite in der Gesamtansicht (dreispaltig)](screenshots/05_details_gesamt.png)

---

## Aufbau der Seite

Die Seite ist in drei Bereiche unterteilt:

| Bereich | Inhalt |
|---|---|
| Linke Spalte | Einsatzkarte mit Fahrzeugpositionen und Kartenebenen |
| Mittlere Spalte | Einsatzprotokoll und Meldungen |
| Rechte Spalte | Zusammenfassung, Einsatzinformationen, zugeteilte Einheiten |

Am oberen Rand befinden sich Stichwort, Sachverhalt, Adresse, Laufzeitanzeige sowie der Alarmierungsbereich.

---

## Kopfzeile

Die Kopfzeile zeigt:
- **Stichwort** mit Hintergrundfarbe
- **Sachverhalt** (Freitext)
- **Einsatzadresse**
- **Laufzeit** (bei aktiven Einsätzen in Echtzeit)
- **Live-Status-Badge** (Verbindungsstatus)
- Schaltfläche **„Bearbeiten"** zum Öffnen der Bearbeitungsseite

---

## Einsatzkarte (linke Spalte)

Die interaktive Karte basiert auf OpenStreetMap und zeigt:
- **Einsatzort** als Marker
- **Fahrzeugpositionen** mit Statussymbolen (in Echtzeit aktualisiert)
- **Fahrzeugbilder als Pins** – individuelle Kartenmarkierungen pro Fahrzeug mit farblicher Umrandung entsprechend dem aktuellen Funkstatus

Wenn der Mauszeiger über einen Fahrzeug-Pin bewegt wird, erscheinen der Fahrzeugname und der Zeitstempel des letzten Positionsupdates.

![Screenshot: Einsatzkarte mit Fahrzeugmarkierungen](screenshots/05_details_karte.png)

### Kartenebenen

Über das Ebenen-Menü können zusätzliche Informationsebenen ein- und ausgeblendet werden:

**Wasserkarte (wasserkarte.info)**

Zeigt Wasserentnahmestellen aus dem Löschwasserkataster von [wasserkarte.info](https://www.wasserkarte.info) an. Die Entnahmestellen werden rund um die Einsatzstelle geladen und mit entsprechenden Pins dargestellt. Fährt man mit der Maus über einen Pin, werden weitere Detailinformationen zu der jeweiligen Entnahmestelle geladen.

> Voraussetzung: Die Wasserkarte-Integration muss im Connect-Portal aktiviert sein.

**OSM-Ebene**

Auf Basis von OpenStreetMap-Daten können folgende Objekte eingeblendet werden, sofern sie in OSM gepflegt sind:
- Hydranten
- Wassertanks
- Saugstellen
- Wasserteiche
- Landeplätze
- Zufahrtspunkte / Rettungspunkte

**Navlog (Waldwege)**

NavLog stellt speziell für Feuerwehren detaillierte Wald- und Forstwegekarten bereit. Einsatzkräfte können damit auch abseits öffentlicher Straßen zuverlässig navigieren und geeignete Zufahrtswege für Einsatzfahrzeuge identifizieren. Besonders bei Waldbränden, Unwettereinsätzen oder vermissten Personen bietet NavLog einen entscheidenden Lage- und Zeitvorteil.

In der rechten unteren Ecke der Karte befindet sich eine **Legende** zu den Navlog-Kartensymbolen.

> Voraussetzung: Die Navlog-Schnittstelle muss im Connect-Portal aktiviert und die Zugangsdaten hinterlegt sein.

### Fahrzeug auf Karte verschieben

Wenn Fahrzeuge keine Live-Position empfangen, kann die Position manuell gesetzt werden: Klicke auf die gewünschte Position auf der Karte und wähle dann **„Fahrzeug hierher bewegen"**, um das entsprechende Fahrzeug auszuwählen.

### Vollbildkarte

Die Karte kann über ein Steuerelement auf die gesamte Bildschirmfläche vergrößert werden.

---

## Einsatzprotokoll (mittlere Spalte)

Das System dokumentiert automatisch alle Statuswechsel und Dispositionen, die von Connect empfangen werden. Zusätzlich können manuelle Einträge ergänzt werden.

![Screenshot: Einsatzprotokoll mit verschiedenen Ereignistypen](screenshots/05_details_protokoll.png)

### Automatische Protokolleinträge

| Kategorie | Ereignisse |
|---|---|
| Einsatzdaten | Einsatz angelegt, Einsatz aktualisiert, Einsatz abgeschlossen |
| Fahrzeuge | Alarmiert, Zugewiesen, Abgerückt, Statuswechsel, Positionsupdate, Besatzungsänderung |
| Meldungen | Lagemeldung erstellt, Lagemeldung übermittelt |

### Manuelle Protokolleinträge

Zusätzlich können **freie Protokolleinträge** manuell erfasst werden, z. B. für Lagemeldungen, Führungsentscheidungen oder besondere Ereignisse. Die Eingabe erfolgt über das Textfeld am unteren Ende des Protokollbereichs.

### Protokoll filtern

Das Protokoll kann nach **Kategorien** und **Ereignistypen** gefiltert werden, um bei umfangreichen Einsätzen die Übersicht zu behalten.

### Einsatzbericht (PDF-Export)

Über den Button **„Einsatzbericht"** kann das Protokoll als PDF heruntergeladen werden. Dabei lässt sich auswählen, welche Informationen im Ausdruck enthalten sein sollen.

> **Voraussetzung:** Der Einsatzbericht muss zuvor in den **Organisationseinstellungen im Connect-Portal** aktiviert werden. Ohne diese Aktivierung ist der Button nicht verfügbar.

---

## Meldungen

Im Meldungsbereich werden **Lagemeldungen** (Status Reports) erfasst und verwaltet.

| Status | Bedeutung |
|---|---|
| Offen | Meldung erstellt, noch nicht übermittelt |
| Gesendet | Meldung abgeschickt |
| Übermittelt | Empfang bestätigt |

Jede Meldung enthält Zeitstempel, Ersteller und Übermittlungshistorie.

---

## Zusammenfassung & Einsatzinformationen (rechte Spalte)

### Aktive Betrachter

Anzeige, wie viele Benutzer die Einsatzseite gerade geöffnet haben. Über ein Modal können die einzelnen Benutzer eingesehen werden.

### Einsatzinformationen

Aufklappbarer Bereich mit allen beim Anlegen erfassten Feldern:
- Stichwort, Priorität, Einsatznummer, Sachverhalt
- Adresse und Koordinaten
- Melder / Anrufer
- Zusatzinformationen (Schlüssel-Wert-Paare)
- Start-, End- und Aktualisierungszeitstempel

---

## Zugeteilte Einheiten

Dieser Bereich zeigt alle dem Einsatz zugewiesenen Fahrzeuge und Einheiten.

![Screenshot: Bereich „Zugeteilte Einheiten" mit Fahrzeugkarten](screenshots/05_details_einheiten.png)

Grundsätzlich werden alle Connect-Fahrzeuge automatisch geladen und stehen zur Verfügung. Für jede zugeteilte Einheit sind sichtbar:
- Fahrzeugbild
- Rufname und Beschreibung
- Aktuelle Besatzungszahl und Anzahl Atemschutzgeräteträger (AGT), z. B. „1/8 4 AGT"
- Funkstatus
- Zeitstempel der Alarmierung / Zuteilung / Abrückung

### Einheit dem Einsatz zuweisen

Über den **+**-Button können weitere Fahrzeuge dem Einsatz hinzugefügt werden. Im Dropdown-Feld werden die Fahrzeuge der eigenen Organisation vorgeschlagen. Es handelt sich dabei um ein **Freitext-Feld**: Es kann auch ein beliebiger Funkrufname eingegeben werden, der dann als **temporäres Fahrzeug** zur Einsatzliste hinzugefügt wird. Dies ist insbesondere nützlich, um organisationsfremde Fahrzeuge übersichtlich im Einsatz zu erfassen und zu koordinieren.

### Besatzung & Funktionen

Ein Klick auf ein Fahrzeug in der Liste öffnet die Detailansicht. Dort können:
- **Besatzungsmitglieder** namentlich zugewiesen werden (inkl. PA-Tauglichkeit)
- **Funktionen** festgelegt werden: Maschinist, Fahrzeugführer u. a.

Die Stärke (z. B. 1/8 4 AGT) wird im Einsatz hinterlegt und ist für alle Beteiligten sichtbar. Die namentliche Besatzung wird im **Einsatzbericht (PDF)** aufgeführt.

> **Hinweis:** Die Stärke kann für jedes am Einsatz beteiligte Fahrzeug festgelegt werden. Die namentliche Besatzung kann jedoch nur für Fahrzeuge des **eigenen Standortes** eingetragen werden. Geplant ist außerdem, dass die Stärkemeldung künftig direkt durch das Fahrzeug am EinsatzTablet eingegeben werden kann.

### Einheit als abgerückt markieren

Wenn eine Einheit den Einsatz beendet hat, kann sie als abgerückt markiert werden. Dabei wird ein Zeitstempel gesetzt.

---

## Alarmierung

Im oberen Bereich der Seite befindet sich der Button **„Alarmieren"**. Dieser dient der gezielten Alarmierung von Benutzern, Alarmgruppen, Fahrzeug-Tablets oder Monitoren – z. B. für die direkte Übermittlung eines Einsatzauftrags an ein Fahrzeug.

Standardmäßig wird der Einsatz nach der im Connect-Portal hinterlegten **AAO (Alarm- und Ausrückeordnung)** alarmiert. Dabei greifen die konfigurierten AAO- bzw. Dyn.-AAO-Regeln. Wird der AAO-Haken entfernt, stehen weitere Möglichkeiten zur individuellen Alarmierung zur Verfügung:
- **Alarmgruppen** gezielt alarmieren
- **Einzelne Fahrzeuge** direkt alarmieren
- **Informationen** (ohne Alarmsignal) übermitteln

> **Hinweis:** Diese Funktion befindet sich derzeit noch in Entwicklung und ist noch nicht vollumfänglich aktiv.

---

## Echtzeit-Aktualisierung

Alle Bereiche der Einsatzdetailseite werden bei eingehenden Ereignissen automatisch aktualisiert:
- Neue Protokolleinträge erscheinen sofort
- Fahrzeugpositionen und -status werden live nachgeführt
- Zugeteilte Einheiten aktualisieren sich bei Statusänderungen
