---
title: Neuerungen im August 2026
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-08-17
description: Der EinsatzManager erhält ein Zugriffsprotokoll und mehr Transparenz im Einsatzprotokoll, und die öffentliche API liefert jetzt Terminanmeldungen.
image: /images/blog/portal-update-juni-2026.jpeg
minRead: 3
navigation: false
---

Das aktuelle Produktions-Update bringt mehr Nachvollziehbarkeit im EinsatzManager, eine Erweiterung der öffentlichen API und einige kleinere Verbesserungen. Hier die wichtigsten Neuerungen im Überblick.

## Zugriffsprotokoll im EinsatzManager

Im EinsatzManager lässt sich jetzt nachvollziehen, **wer** einen Einsatz **wann** und **wie lange** angesehen hat – auch rückwirkend für bereits beendete Sitzungen. Aufgerufen wird das Zugriffsprotokoll über einen Link im Dialog „Aktive Betrachter". Wird eine Sitzung nicht sauber verlassen, endet sie automatisch nach 2 Minuten Inaktivität. Die Zugriffsdaten werden 90 Tage aufbewahrt.

![Screenshot: Zugriffsprotokoll aufrufen über den Dialog „Aktive Betrachter"](/images/blog/update-august-2026-zugriffsprotokoll.png)

Einsehbar ist das Zugriffsprotokoll nur für Benutzer mit der Berechtigung **„Einsätze verwalten"**.

Weitere Details: [EinsatzManager: Einsatzdetails](/einsatzmanager/05_einsatzdetails#zugriffsprotokoll)

---

## Mehr Transparenz im Einsatzprotokoll

Protokolleinträge im Einsatzprotokoll zeigen jetzt deutlich häufiger, aus welcher Anwendung sie stammen – **EinsatzApp**, **ConnectPortal**, **EinsatzTablet** oder **EinsatzManager**. Bei Einträgen aus dem EinsatzManager wird zusätzlich der Benutzername angezeigt.

Weitere Details: [Einsätze](/connect/07_einsaetze#tab-protokoll)

---

## Terminanmeldungen in der öffentlichen API

Der Endpunkt `GET interfaces/public/appointment` liefert jetzt zusätzlich die Anmeldungen je Termin (Benutzer, Name, Zeitpunkt, Kommentar, Rückmeldestatus) – praktisch für Organisationen, die Termine und Rückmeldungen automatisiert in ein angebundenes Fremdsystem übernehmen möchten.

Weitere Details: [Öffentliche Connect API](/connect/schnittstellen/public_api#termine--appointment)

---

## Kleinere Verbesserungen

- Der App-Start im EinsatzManager ist spürbar schneller geworden.
- Ein Fehler wurde behoben, durch den Moderatoren, die zusätzlich Standort- oder News-Administrator waren, bei Neuigkeiten fälschlich nur auf ihre zugewiesenen Gruppen eingeschränkt wurden.
- Ein Fehler wurde behoben, durch den Organisationen mit exakt aufgebrauchtem Lizenzkontingent fälschlich als unterlizenziert galten und grundlos eingeschränkt wurden.
- Ein Fehler bei der XSense-Rauchmelder-Schnittstelle wurde behoben: Stationen ohne Geräte führten beim Abrufen der Geräteliste zu einem Fehler.
- Heruntergeladene Dateien behalten jetzt zuverlässig ihren korrekten Dateinamen.

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
