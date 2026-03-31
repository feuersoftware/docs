# Integrationen & Konfiguration

## Kartenintegrationen

### OpenStreetMap (OSM)

OpenStreetMap ist die Basiskarte für alle Kartendarstellungen im EinsatzManager. Zusätzlich zur Basiskarte können folgende OSM-Ebenen eingeblendet werden:

- **Hydranten** – Standorte von Hydranten im Leitungsnetz
- **Wassertanks** – Oberirdische Wasservorräte
- **Saugstellen** – Entnahmestellen aus Gewässern
- **Wasserteiche** – Natürliche und künstliche Gewässer
- **Landeplätze** – Hubschrauber-Landeplätze
- **Zufahrtspunkte** – Besondere Zufahrten und Zugänge

Diese Ebenen helfen Einsatzkräften, Löschwasserversorgung und Zufahrten direkt in der Einsatzkarte zu identifizieren.

---

### Wasserkarte

Die [Wasserkarte](https://www.wasserkarte.info) ist ein spezialisierter Löschwasserkataster, der detaillierte Informationen zu Wasserentnahmestellen liefert. Die Integration ist optional und muss im Connect-Portal aktiviert werden.

Wenn aktiviert:
- Erscheint die Wasserkarte als zusätzliche Kartenebene in der Einsatzkarte
- Wasserentnahmestellen werden rund um die Einsatzstelle geladen und mit Pins angezeigt
- Per Mouseover über einen Pin werden weitere Detailinformationen zur jeweiligen Entnahmestelle geladen

---

### Navlog

NavLog stellt speziell für Feuerwehren detaillierte Wald- und Forstwegekarten bereit. Einsatzkräfte können damit auch abseits öffentlicher Straßen navigieren und geeignete Zufahrtswege für Einsatzfahrzeuge identifizieren. Besonders bei Waldbränden, Unwettereinsätzen oder vermissten Personen bietet NavLog einen entscheidenden Lage- und Zeitvorteil.

Voraussetzung: Die Navlog-Schnittstelle muss im Connect-Portal aktiviert und die Zugangsdaten hinterlegt sein.

Wenn aktiviert:
- Erscheint die Navlog-Karte als zusätzliche Ebene in der Einsatzkarte
- Wird in der rechten unteren Ecke der Karte eine Legende zu den Kartensymbolen eingeblendet

---

## Connect-Portal Integration

Folgende Daten werden automatisch aus dem Connect-Portal übernommen und stehen im EinsatzManager zur Verfügung:

| Datentyp | Beschreibung |
|---|---|
| Fahrzeuge | Alle Fahrzeuge der Organisation mit Rufname, Typ und Standort |
| Standorte | Wachen und Standorte mit GPS-Koordinaten |
| Stichwörter | Einsatzstichwörter mit Farbe und Kategorie |
| AAO | Alarm- und Ausrückeordnungen (Alarmgruppen) |
| Benutzer | Benutzerverwaltung und Rollenzuweisung |
| Sprache | Spracheinstellung der Organisation (Deutsch / Englisch) |

Änderungen im Connect-Portal werden in Echtzeit oder bei der nächsten Anmeldung übernommen.

---

## Konfigurierbare Funktionen

Folgende Funktionen können pro Organisation im Connect-Portal aktiviert oder deaktiviert werden:

| Funktion | Beschreibung |
|---|---|
| Wasserkarte | Löschwasserkataster-Integration |
| Navlog | Forststraßenkarten-Integration |
| Fahrzeugzuteilung | Manuelle Fahrzeugzuweisung zu Einsätzen |
| Helfer-App | Integration mit der mobilen Helfer-App |
| Schadensberichte | Meldung von Fahrzeugdefekten und Schäden |

---

## FeuerSoftware-Ökosystem

Der EinsatzManager ist nahtlos in das FeuerSoftware-Ökosystem eingebettet:

### EinsatzMonitor

Der EinsatzMonitor zeigt Einsatzinformationen auf großen Bildschirmen in der Wache an. Alle Daten, die im EinsatzManager erfasst werden, stehen dem EinsatzMonitor in Echtzeit zur Verfügung.

### EinsatzTablet

Das EinsatzTablet ist die fahrzeuggebundene Lösung. Fahrzeuge, die mit einem EinsatzTablet ausgerüstet sind, senden automatisch:
- GPS-Positionen
- Funkstatus
- Besatzungsdaten

Diese Daten werden direkt im EinsatzManager auf der Karte und im Statuspanel angezeigt.

### EinsatzApp

Die EinsatzApp alarmiert Einsatzkräfte auf ihren mobilen Geräten. Alarmierungen aus dem EinsatzManager werden über das Connect-Portal an die EinsatzApp weitergegeben.

---

## Technische Schnittstellen

Für Entwickler und Administratoren: Der EinsatzManager kommuniziert über folgende Protokolle:

- **REST API** – Datenaustausch mit dem Backend (`/api/vehicleApp/`)
- **SignalR (WebSocket)** – Echtzeit-Events für Einsätze, Fahrzeuge und Viewer
- **OIDC / OAuth 2.0** – Authentifizierung via Keycloak (Connect-Portal)
- **OSM Geocoding API** – Adressauflösung und Reverse-Geocoding
