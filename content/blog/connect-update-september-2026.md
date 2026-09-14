---
title: Connect-Update im September 2026
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-09-04
description: Leitstellen-Organisationen können Ressourcen jetzt zweistufig freigeben, die dynamische AAO lässt sich exportieren, und News bekommen Mailinglisten sowie eine bessere Kartenhervorhebung für Verkehrsbehinderungen.
image: /images/blog/connect-update-september-2026.jpg
minRead: 4
navigation: false
---

Ein weiteres Update ist auf unseren Produktionsservern angekommen. Im Fokus stehen dieses Mal Neuerungen rund um Leitstellen-Organisationen sowie kleine aber praktische Verbesserungen bei News. Hier der Überblick.

## Leitstellen-Ressourcen zweistufig verwalten

Innerhalb einer Leitstellen-Organisation (WDX oder Alamos) lässt sich die Zuordnung von Ressourcen jetzt zweistufig verwalten: Der **Leitstellenadministrator** gibt je Mitgliedsorganisation eine Teilmenge an WDX-Ressourcen/-Geräten bzw. Alamos-Einheiten frei. Die **Organisationsadministratoren** der Mitgliedsorganisationen weisen aus dieser Teilmenge anschließend eigenständig ihren Standorten zu – ganz ohne Zugang zur Leitstellen-Organisation selbst. Bestehende Organisationsadministratoren benötigen dafür keine zusätzliche Berechtigung.

Änderungen an Freigaben und Zuweisungen werden außerdem gebündelt gemeldet: Mehrere Änderungen innerhalb von 10 Minuten lösen nur eine gemeinsame E-Mail aus, statt für jeden einzelnen Klick eine eigene Benachrichtigung zu verschicken.

Weitere Details: [ISE Cobra 4 – WDX3](/connect/schnittstellen/leitstelle/cobra#ressourcen-freigabe-für-organisationen)

---

## Dynamische AAO exportieren

Das dynamische Alarmierungs-Regelwerk lässt sich jetzt für jeden Standort als CSV-Datei exportieren – z. B. für die eigene Dokumentation oder zur Weitergabe.

Weitere Details: [Alarmierung](/connect/11_alarmierung#dynamische-aao-exportieren)

---

## News: Farbe und Hervorhebung für Verkehrsbehinderungen

Beim Anlegen und Bearbeiten von Verkehrsbehinderungen lässt sich jedem Streckenzug jetzt eine eigene Farbe zuweisen – praktisch, um z. B. neben der eigentlichen Sperrung eine empfohlene Umleitungsstrecke einzuzeichnen. Beim Anlegen mehrerer Strecken wird die gerade bearbeitete Strecke zusätzlich durch eine dickere Linie auf der Karte hervorgehoben.

Weitere Details: [News & Termine](/connect/08_news_und_termine#verkehrsbehinderung--pfad-einzeichnen)

---

## News: Mailinglisten direkt beim Anlegen auswählbar

Beim Erstellen und Bearbeiten einer News lassen sich Organisations- oder Standort-Mailinglisten jetzt direkt im Formular als zusätzlicher Verteiler auswählen.

Weitere Details: [News & Termine](/connect/08_news_und_termine#news-erstellen)

---

## Kleinere Verbesserungen

- In der Swagger-/OpenAPI-Dokumentation der öffentlichen API stehen bei Aufzählungswerten (z. B. Verfügbarkeit, Mängelmeldungen, Einsatz- und News-Typen) jetzt Beschreibungen statt bloßer Zahlen.
- Ein wiederkehrender Fehler im Hintergrundjob zur Verarbeitung von FAS-Unwetterwarnungen wurde behoben – Warnungen werden jetzt zuverlässig aktualisiert statt fehlerhaft doppelt angelegt.

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
