---
title: TetraControl2Connect
description: Verbindet TetraControl mit mehreren Connect-Standorten – inkl. Admin-Oberfläche, SQLite-Datenbank und Einrichtungsassistent
source: "https://github.com/feuersoftware/tetracontrol-to-connect"
---

TetraControl2Connect verbindet eine TetraControl-Instanz mit mehreren Connect-Standorten – auch organisations- und standortübergreifend. Die Anwendung verarbeitet Fahrzeugpositionen, Fahrzeugstatus, Benutzerrückmeldungen, Verfügbarkeiten, Alarmierungen und sirenenbezogene Meldungen und überträgt die relevanten Informationen an Connect. Funkgespräche werden nicht verarbeitet.

Ab Version 3.0 wird die gesamte Konfiguration über eine webbasierte Admin-Oberfläche verwaltet. Die Einstellungen werden in einer SQLite-Datenbank gespeichert.

::u-button
---
color: primary
icon: i-lucide-download
size: lg
target: _blank
to: https://github.com/feuersoftware/tetracontrol-to-connect/releases/latest
---
Neueste Version herunterladen
::

::u-button
---
color: neutral
icon: i-simple-icons-github
size: lg
target: _blank
to: https://github.com/feuersoftware/tetracontrol-to-connect
variant: outline
---
GitHub Repository
::

## Voraussetzungen

Folgende Voraussetzungen müssen vor dem Betrieb erfüllt sein:

- **.NET 10.0 Runtime** oder neuer
- **TetraControl** läuft dauerhaft und der integrierte Webserver ist aktiviert
- Ein **TetraControl-Benutzer** mit ausreichenden Webserver-Berechtigungen
- Pro Connect-Standort ein **„Public Connect API"-Schlüssel**: [connect.feuersoftware.com/v2/app/interfaces](https://connect.feuersoftware.com/v2/app/interfaces)
- Fahrzeuge und Benutzer müssen in Connect mit den korrekten **ISSIs** gepflegt sein

::warning
**Wichtige Hinweise**
- Wenn Fahrzeuge oder Benutzer in Connect neu angelegt oder geändert werden, ist ein **Neustart der Anwendung** erforderlich.
- Die WebSocket-Verbindung zu TetraControl ist **unverschlüsselt**. TetraControl sollte deshalb möglichst lokal oder in einem vertrauenswürdigen Netz betrieben werden.
- Ab Version 2.8.0 sind ausschließlich **Standort-API-Schlüssel** (nicht mehr Organisations-Schlüssel) zulässig.
::

## Funktionsumfang

::card-group
  ::card{title="Installation" icon="i-lucide-package" to="/tools/tetracontrol2connect/installation"}
  Herunterladen, Starten und Einrichten mit dem integrierten Einrichtungsassistenten.
  ::

  ::card{title="Konfiguration" icon="i-lucide-settings" to="/tools/tetracontrol2connect/konfiguration"}
  Alle Einstellungsbereiche der Admin-Oberfläche – von der TetraControl-Verbindung bis zur Sirenenüberwachung.
  ::

  ::card{title="Migration" icon="i-lucide-arrow-up-circle" to="/tools/tetracontrol2connect/migration"}
  Upgrade von Version 2.x auf 3.x – von appsettings.json zur SQLite-Datenbank mit Admin-Oberfläche.
  ::
::
