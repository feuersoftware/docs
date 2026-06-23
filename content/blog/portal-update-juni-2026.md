---
title: Connect Portal Update – Juni 2026
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-06-23
description: Das aktuelle Update bringt neue Werkzeuge für die Benutzerverwaltung, mehr Rechte für Moderatoren, eine manuelle Terminerinnerung und einen erweiterten Einsatzbericht.
image: /images/blog/portal-update-juni-2026.jpeg
minRead: 4
navigation: false
---

Mit dem aktuellen Update erhält das Connect Portal mehrere neue Funktionen, die die tägliche Arbeit in der Verwaltung deutlich vereinfachen. Hier ein Überblick über die wichtigsten Neuerungen.

## Moderatoren können das Info-Board verwalten

Bisher konnten Einträge im Info-Board nur von Standortadministratoren erstellt und bearbeitet werden. Ab sofort haben auch **Moderatoren** diese Berechtigung – sie können Einträge anlegen, bearbeiten und löschen, ohne dass ein Administrator eingreifen muss.

> **Wichtig:** Diese Funktion erfordert ein Update auf die aktuelle App-Version.

Weitere Details: [Info-Board](/connect/09_infoboard)

---

## Benutzer per CSV importieren

Neu hinzugekommen ist eine **Importfunktion für Benutzer** direkt im Portal. Über eine einfache CSV-Datei lassen sich beliebig viele Benutzer auf einmal anlegen – inklusive Fortschrittsanzeige und der Möglichkeit, einzelne fehlgeschlagene Einträge zu wiederholen.

Die CSV-Datei benötigt mindestens die Spalten `FirstName`, `LastName` und `Email`. Auf Organisationsebene ist zusätzlich die Spalte `Site` erforderlich, damit Benutzer dem richtigen Standort zugeordnet werden.

> Per CSV importierte Benutzer können ausschließlich das neue Connect Portal und die neue EinsatzApp verwenden.

Weitere Details: [Benutzerverwaltung](/connect/04_benutzerverwaltung)

---

## Einladungen erneut versenden

Benutzer, die ihre Einladungsmail nicht mehr haben oder den Link abgelaufen sehen, können jetzt unkompliziert **erneut eingeladen** werden. Eine neue Aktion in der Benutzerverwaltung sendet automatisch an alle Benutzer mit Status „Eingeladen" eine neue Mail – ebenfalls mit Fortschrittsanzeige und Wiederholungsoption bei Fehlern.

---

## Neue Rolle: Benutzeradministrator

Für Standorte, bei denen die Benutzerverwaltung nicht in den Händen eines Standortadministrators liegen soll, gibt es ab sofort eine dedizierte Rolle: den **Benutzeradministrator**. Diese Rolle erlaubt es, Benutzer einzuladen, zu importieren und zu verwalten – ohne gleichzeitig Zugriff auf alle anderen Administrationsfunktionen eines Standorts zu haben.

Weitere Details: [Rollen und Rechtekonzept](/connect/20_rechtekonzept_connect)

---

## Manuelle Terminerinnerung per Push

In der Terminverwaltung gibt es einen neuen **„Benachrichtigen"-Button**. Damit lässt sich auf Knopfdruck eine Push-Benachrichtigung an alle registrierten Benutzer senden – nützlich, um kurzfristig auf einen Termin aufmerksam zu machen oder die automatische Kalender-Erinnerung zu ergänzen.

Weitere Details: [News & Termine](/connect/08_news_und_termine)

---

## Erweiterter Einsatzbericht

Beim Herunterladen des Einsatzberichts öffnet sich jetzt ein Dialog, in dem vor dem PDF-Export ergänzende Details zum Einsatz eingetragen werden können:

| Feld | Bedeutung |
|---|---|
| **Protokollant** | Name der berichtschreibenden Person |
| **Lage beim Eintreffen** | Vorgefundene Situation an der Einsatzstelle |
| **Tätigkeit** | Durchgeführte Maßnahmen |
| **Eigentümer/Halter** | Betroffener Eigentümer oder Fahrzeughalter |
| **Geschädigter** | Angaben zur geschädigten Person |
| **Verursacher** | Angaben zum Verursacher |
| **Eingesetzte Materialien** | Übersicht der verwendeten Einsatzmittel |
| **Noch zu erledigen** | Offene Nacharbeiten oder Folgemaßnahmen |
| **Bemerkungen** | Allgemeine Anmerkungen |

Alle Felder sind optional. Die eingetragenen Werte werden gespeichert und stehen beim nächsten Öffnen des Dialogs wieder zur Verfügung.

Weitere Details: [Einsätze](/connect/07_einsaetze)

---

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
