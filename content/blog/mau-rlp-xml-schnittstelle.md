---
title: MAÜ-Schnittstelle für Rheinland-Pfalz
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-09-04
description: Einsatzdaten aus dem in Rheinland-Pfalz eingeführten MAÜ-Verfahren lassen sich jetzt direkt im Connect Portal einrichten – inklusive Postfachverwaltung, Standort-Zuordnung und Verarbeitungsprotokoll.
image: /images/blog/mau-rlp-xml-schnittstelle.jpg
minRead: 3
navigation: false
---

Für Feuerwehren in Rheinland-Pfalz gibt es ab sofort eine neue Möglichkeit, Einsatzdaten der Leitstelle automatisch in FeuerSoftware Connect zu übernehmen: die **MAÜ-Schnittstelle** ist jetzt direkt im Connect Portal einrichtbar.

## Was ist MAÜ?

Über das in Rheinland-Pfalz einheitlich eingeführte Verfahren **MAÜ** (Maschinenlesbare unidirektionale automatische Übergabe) versendet die Leitstelle bei jeder Alarmierung eine E-Mail mit einem XML-Anhang. Connect ruft dafür hinterlegte Postfächer automatisch ab und übernimmt die enthaltenen Einsatzdaten – Einsatzstichwort, Adresse, alarmierte Fahrzeuge, Maßnahmen und Lagemeldungen – ohne manuellen Eingriff.

Die Auswertungs-Engine dahinter ist bei FeuerSoftware bereits seit Jahren im Einsatz; neu ist, dass die Konfiguration jetzt direkt von der Organisation selbst im Portal vorgenommen werden kann, statt wie bisher manuell durch den FeuerSoftware Support gepflegt zu werden.

---

## Postfächer selbst verwalten

Es lassen sich beliebig viele IMAP-Postfächer hinterlegen. Die Zugangsdaten lassen sich jederzeit direkt im Formular oder über das Aktionsmenü der Postfach-Karte testen. Beim Aktivieren der Schnittstelle wird zusätzlich jedes hinterlegte Postfach automatisch geprüft – schlägt eines fehl, wird die Aktivierung mit einer konkreten Meldung zu genau diesem Postfach abgelehnt, statt eine defekte Konfiguration stillschweigend live zu nehmen.

---

## Standort-Zuordnung über Suchbegriffe

Je Postfach legt ein Suchbegriff fest, welche Meldung auf welchen Standort läuft – abgeglichen gegen die in der Meldung enthaltenen alarmierten Fahrzeuge und Maßnahmen. Der Sonderwert `all` überträgt stattdessen jede eingehende Meldung an den zugeordneten Standort, unabhängig von den enthaltenen Einsatzmitteln.

---

## Verarbeitungsprotokoll

Eine durchsuchbare, seitenweise Tabelle zeigt für jede eingegangene E-Mail Zeitpunkt, Betreff und Ergebnis der Verarbeitung sowie Zustandswechsel der Postfach-Verbindung – damit lässt sich jederzeit nachvollziehen, ob und warum eine Meldung nicht übernommen wurde.

> **Beta-Hinweis:** Die Schnittstelle befindet sich noch in der Stabilisierungsphase – ein entsprechender Hinweis erscheint auf der Einstellungsseite.

Weitere Details zur Einrichtung: [MAÜ-Schnittstelle Rheinland-Pfalz](/connect/schnittstellen/leitstelle/mau_rlp_xml)

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
