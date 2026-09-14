---
title: ISE Cobra 4 – WDX3 Schnittstelle
description: Einsatzdaten von ISE COBRA4-Leitstellen über die WDX3-Schnittstelle an FeuerSoftware Connect übermitteln
---

# ISE Cobra 4 – WDX3 Schnittstelle

Die WDX3-Schnittstelle ermöglicht die Übertragung von Einsatzdaten aus dem Leitsystem **ISE COBRA4** an FeuerSoftware Connect. Die Daten durchlaufen dabei einen von ISE oder der Leitstelle betriebenen WDX3-Server, auf den FeuerSoftware nach Freigabe zugreift.

---

## Voraussetzungen

| Voraussetzung | Beschreibung |
|---|---|
| **ISE COBRA4** | Version 4.18.4 oder neuer |
| **WDX3-Lizenz** | Von ISE zu beschaffen |
| **Public Connect Schnittstelle** | Auf Standortebene aktiviert |
| **Fahrzeug- und Einheitendaten** | Werden vorab an den FeuerSoftware-Support übermittelt |

---

## Übertragene Daten

- Einsatzdaten und Stichwort
- Sachverhalt und Ortsinformationen
- Anrufer-Details *(Zugriff sollte per Benutzergruppe eingeschränkt werden – Datenschutz)*
- Objekt-Details
- Alarmierte Einheiten und Fahrzeuge
- Lagemeldungen *(Berechtigung muss über Benutzergruppen explizit vergeben werden)*
- Statusinformationen und zugewiesene Einheiten inkl. externer Kräfte

> **Hinweis:** Das Anrufer-Feld enthält personenbezogene Daten. Die Sichtbarkeit sollte über Benutzergruppen-Einstellungen eingeschränkt werden.

---

## Technische Details

- **Positionsupdates:** Werden nur während aktiver Einsätze verarbeitet; Statusänderungen außerhalb von Einsätzen werden nicht übertragen
- **Stille Alarme:** Einsätze ohne Alarmierungszeitpunkt werden erst nach Einsatzende eingetragen, wenn eine Einheit den Status bestätigt hat
- **Einsatzende:** Wird durch die Leitstelle ausgelöst; Endzeit wird in der App angezeigt
- **Priorität:** Numerisches Prioritätsfeld verfügbar (niedrigerer Wert = höhere Dringlichkeit)
- **Externe Fahrzeuge:** Alle alarmierten/zugewiesenen Einheiten sichtbar, auch außerhalb der eigenen Organisation – keine Connect-Registrierung erforderlich

---

## Ressourcen-Freigabe für Organisationen

Innerhalb einer Leitstellen-Organisation (WDX oder Alamos) lässt sich die Zuordnung von Leitstellen-Ressourcen zweistufig verwalten:

1. **Leitstellenadministrator** (Rolle innerhalb der Leitstellen-Organisation) gibt je Mitgliedsorganisation eine Teilmenge an WDX-Ressourcen/-Geräten bzw. Alamos-Einheiten frei.
2. **Organisationsadministrator** der Mitgliedsorganisation weist aus dieser freigegebenen Teilmenge eigenständig den einzelnen Standorten zu – ganz ohne Zugang zur Leitstellen-Organisation selbst.

Bestehende Organisationsadministratoren benötigen dafür keine zusätzliche Berechtigung – die entsprechende Berechtigung ist automatisch enthalten.

> Änderungen an den freigegebenen Ressourcen bzw. an den Standort-Zuweisungen werden **gebündelt per E-Mail gemeldet**: Mehrere Änderungen innerhalb von 10 Minuten lösen nur eine gemeinsame Benachrichtigung aus, statt für jede einzelne Änderung eine separate E-Mail zu verschicken.

Siehe auch: [Rollen und Rechtekonzept – Leitstellen-Organisationen](/connect/20_rechtekonzept_connect#leitstellen-organisationen)

---

## Einrichtung

### Für die Leitstelle

Die Leitstelle beschafft und konfiguriert die WDX3-Schnittstelle über ISE und erteilt FeuerSoftware die Zugriffsberechtigung auf den WDX3-Server.

### Für Connect-Kunden

**Schritt 1: Fahrzeuge und Einheiten melden**

Fahrzeuge und Einheiten (z. B. „FD 1-30-1") per E-Mail an **wdx@feuersoftware.com** übermitteln:

- Organisationsname
- Ansprechpartner und Kontaktdaten
- Zuständige Leitstelle
- Vollständige Fahrzeug-/Einheitenliste

**Schritt 2: Konfiguration in Connect**

- Public Connect Schnittstelle auf Standortebene aktivieren
- AAO (Alarm- und Ausrückeordnung) anlegen und Stichwort-Zuordnungen prüfen
- Datenschutz: Sichtbarkeit sensibler Felder (Anrufer, Lagemeldungen) einschränken
- Dynamische Zusatzinformationsregeln testen
- EinsatzMonitor auf **Slave-Modus** umstellen
- **Alarmsperre** konfigurieren (mind. 30 Sekunden empfohlen)
