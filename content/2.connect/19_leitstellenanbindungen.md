---
title: Leitstellenanbindungen
description: Wie Einsatzdaten von der Leitstelle an FeuerSoftware Connect übermittelt werden – Übersicht aller verfügbaren Anbindungen
---

# Leitstellenanbindungen

Über Leitstellenanbindungen werden Einsatzdaten automatisch von der zuständigen Leitstelle an FeuerSoftware Connect übermittelt. Sobald ein Einsatz in der Leitstelle ausgelöst wird, erscheint er in Connect und in der EinsatzApp – ohne manuelle Eingabe.

Je nach Leitstelle und Bundesland gibt es unterschiedliche technische Anbindungen. FeuerSoftware unterstützt mehrere Schnittstellen und koordiniert die Einrichtung in Abstimmung mit der jeweiligen Leitstelle.

> **Hinweis:** Die Aktivierung einer Leitstellenanbindung erfordert immer die Einrichtung der **Public Connect Schnittstelle** auf Standortebene sowie eine Abstimmung mit dem FeuerSoftware-Support.

---

## Verfügbare Anbindungen

| Anbindung | Einsatzgebiet | Beschreibung |
|---|---|---|
| **[ISE Cobra 4 – WDX3](./schnittstellen/leitstelle/cobra)** | Deutschland (ISE-Leitstellen) | WDX3-Schnittstelle über ISE-Server |
| **[Alamos FE2](./schnittstellen/leitstelle/alamos_fe2)** | Deutschland (Eurofunk ELDIS BY) | Einsatzdaten via Alamos FE2 und MQTT |
| **[Oberösterreich (LFV OÖ)](./schnittstellen/leitstelle/oberoesterreich)** | Österreich – Land Oberösterreich | Direktanbindung via LFV OÖ API |
| **MAÜ Auswertung Rheinland-Pfalz** | Deutschland – Rheinland-Pfalz | Dokumentation in Vorbereitung |

---

## Allgemeine Voraussetzungen

Unabhängig von der jeweiligen Anbindung gelten folgende Voraussetzungen:

- **Public Connect Schnittstelle** auf Standortebene aktiviert (**Schnittstellen → Public API**)
- **AAO (Alarm- und Ausrückeordnung)** konfiguriert, damit eingehende Einsätze korrekt zugeordnet werden
- **EinsatzMonitor** auf **Slave-Modus** eingestellt (empfängt Alarme aus Connect statt eigenständig auszuwerten)
- **Alarmsperre** konfiguriert (mind. 30 Sekunden empfohlen, um Doppelalarme zu vermeiden)

---

## Einrichtung beauftragen

Die Einrichtung einer Leitstellenanbindung erfolgt in Abstimmung mit dem FeuerSoftware-Support:

**E-Mail:** info@feuersoftware.com

Die Schnittstelle ist für FeuerSoftware-Kunden kostenlos. Die technische Koordination mit der Leitstelle übernimmt FeuerSoftware.
