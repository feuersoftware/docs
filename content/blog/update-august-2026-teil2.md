---
title: Neuerungen im August 2026 – Teil 2
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-08-24
description: Webhooks laufen wieder zuverlässig, die öffentliche API kann jetzt die Einsatzdokumentation lesen und schreiben, und Verkehrsbehinderungen können jetzt farblich von einer eingezeichneten Umleitung unterschieden werden.
image: /images/blog/portal-update-juni-2026.jpeg
minRead: 3
navigation: false
---

Ein weiteres Update ist auf unseren Produktionsservern angekommen. Im Fokus stehen dieses Mal mehr Zuverlässigkeit bei Webhooks, eine Erweiterung der öffentlichen API und einige kleinere Verbesserungen im Alltag. Hier der Überblick.

## Webhooks laufen wieder zuverlässig

Die Übersicht der Benutzer- und Standort-Webhooks konnte in bestimmten Fällen leer oder fehlerhaft angezeigt werden, und einzelne Benutzer-Webhooks sind gelegentlich nicht ausgelöst worden. Beide Ursachen sind behoben – Webhooks werden jetzt zuverlässig geladen und ausgeführt.

Weitere Details: [Webhooks](/connect/schnittstellen/webhooks)

---

## Einsatzdokumentation über die öffentliche API

Die öffentliche Connect API kann jetzt die erweiterten Berichtsfelder eines Einsatzes (Einsatzleiter, Protokollant, Lage beim Eintreffen, Tätigkeit u. a.) auslesen und befüllen. Damit lassen sich diese Angaben auch aus angebundenen Drittsystemen automatisiert übernehmen. Über die API vorgenommene Änderungen sind im Einsatzprotokoll klar als solche erkennbar.

Weitere Details: [Öffentliche Connect API](/connect/schnittstellen/public_api#einsätze--operation)

---

## Farbe für Verkehrsbehinderungen in News

Beim Einzeichnen einer Verkehrsbehinderung auf der Karte kann dem Streckenzug jetzt eine eigene Farbe zugewiesen werden – praktisch, um z. B. neben der eigentlichen Sperrung zusätzlich eine empfohlene Umleitungsstrecke einzuzeichnen und farblich von der Sperrung abzugrenzen.

Weitere Details: [News & Termine](/connect/08_news_und_termine#verkehrsbehinderung--pfad-einzeichnen)

---

## Mailinglisten für News-Verantwortliche

Organisations-Mailinglisten sind jetzt auch für Benutzer mit der Berechtigung „Organisations-News verwalten" sichtbar, nicht mehr nur für Organisationsadministratoren. Standort-Mailinglisten können ab sofort von allen Mitgliedern eines Standorts eingesehen werden, auch ohne Benutzerverwaltungs-Berechtigung.

Weitere Details: [Benutzerverwaltung](/connect/04_benutzerverwaltung#mailing-listen)

---

## Kleinere Verbesserungen

- Die Auffangkategorie „Unbekannt" bei den Einsatz-Kategorien kann nicht mehr versehentlich gelöscht werden; beim Löschen einer anderen Kategorie werden zugeordnete Stichwörter jetzt zuverlässig umgehängt.
- Schlägt eine Benutzereinladung fehl (z. B. durch eine ungültige Eingabe), lässt sich dieselbe E-Mail-Adresse jetzt problemlos erneut einladen, statt dauerhaft blockiert zu sein.
- Beim Einladen von Benutzern und beim Anlegen von Organisationen erscheinen jetzt klarere Fehlermeldungen – u. a. der explizite Hinweis, wenn eine E-Mail-Adresse bereits verwendet wird.

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
