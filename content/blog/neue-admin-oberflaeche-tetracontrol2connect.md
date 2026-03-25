---
title: Neue Admin-Oberfläche für TetraControl2Connect
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2025-03-25
description: Mit Version 3.0 von TetraControl2Connect wurde die Konfiguration vollständig in eine moderne, webbasierte Admin-Oberfläche überführt. Wir erklären, was sich geändert hat und wie der Umstieg gelingt.
image: /images/tools/tetracontrol2connect/dashboard.png
minRead: 5
navigation: false
---

TetraControl2Connect verbindet TetraControl-Instanzen mit mehreren Connect-Standorten und ist ein wichtiges Werkzeug für viele Feuerwehren und Rettungsdienste. Mit der neuen Version 3.0 haben wir die Anwendung grundlegend überarbeitet: Die bisherige Konfiguration über eine `appsettings.json` ist Geschichte – willkommen zur webbasierten Admin-Oberfläche.

## Was hat sich geändert?

Bis Version 2.x wurde TetraControl2Connect ausschließlich über eine `appsettings.json`-Datei konfiguriert. Das hatte einige Nachteile:

- Bearbeitung nur mit einem Texteditor
- Fehler in der JSON-Struktur führten zum Absturz der Anwendung
- Keine Echtzeitüberwachung des Verbindungsstatus
- Keine Möglichkeit, Konfigurationsänderungen ohne Neustart zu übernehmen

## Die neue Admin-Oberfläche

Mit Version 3.0 wird die gesamte Konfiguration über eine moderne, webbasierte Oberfläche verwaltet, die beim Start der Anwendung automatisch unter `http://localhost:5050` erreichbar ist.

![TetraControl2Connect Admin-Dashboard](/images/tools/tetracontrol2connect/dashboard.png)

### Einrichtungsassistent

Beim ersten Start führt ein interaktiver Einrichtungsassistent durch die Grundkonfiguration:

1. **TetraControl-Verbindung** – Hostname, Port und Zugangsdaten
2. **Connect-Standorte** – API-Schlüssel für jeden anzubindenden Standort
3. **Programmoptionen** – Auswahl der zu übertragenden Datentypen
4. **Status-Zuordnungen** – Mapping von TETRA-Statuscodes zu Connect-Verfügbarkeitsstatus

### SQLite-Datenbank statt JSON

Alle Einstellungen werden jetzt in einer SQLite-Datenbank (`settings.db`) gespeichert. Das bietet mehrere Vorteile:

- **Datenkonsistenz**: Die Datenbank verhindert ungültige Konfigurationseinträge
- **Automatische Backups**: Tägliche Sicherungen im `backups/`-Unterordner
- **Manuelle Backups**: Über die Admin-Oberfläche unter `/backups` jederzeit möglich

### Live-Ansicht und Monitoring

Neu ist auch die Live-Ansicht unter `/live`, die alle eingehenden Nachrichten von TetraControl in Echtzeit anzeigt. Das erleichtert die Fehlersuche erheblich.

![TetraControl2Connect Live-Ansicht](/images/tools/tetracontrol2connect/live.png)

## Migration von Version 2.x

Der Umstieg ist unkompliziert: Beim ersten Start von Version 3.0 erkennt die Anwendung eine vorhandene `appsettings.json` und importiert die Einstellungen automatisch in die neue Datenbank.

::note
Ausführliche Informationen zur Migration finden Sie in der [Migrationsdokumentation](/tools/tetracontrol2connect/migration).
::

## Fazit

Die neue Admin-Oberfläche macht TetraControl2Connect deutlich benutzerfreundlicher. Konfigurationsänderungen sind jetzt ohne Texteditor möglich, und die Live-Ansicht erleichtert die Fehlerdiagnose erheblich. Wir empfehlen allen Nutzern das Update auf Version 3.0.

::u-button
---
color: primary
icon: i-lucide-download
size: lg
target: _blank
to: https://github.com/feuersoftware/tetracontrol-to-connect/releases/latest
---
Jetzt aktualisieren
::
