---
title: Connect-Update im Oktober 2026
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-10-19
description: Connect Storage mit Nextcloud-Anbindung, Anhänge für Einsätze, News und Termine, ein überarbeiteter Einsatzbericht mit Bilddokumentation, Nachalarmierung ohne Zeitlimit, HomeResQ-Objektinformationen, neue Kartenansichten und Fahrzeug-Webhooks.
image: /images/blog/connect-update-oktober-2026.jpg
minRead: 5
navigation: false
---

Das Oktober-Update ist eines der größten des Jahres: Connect bekommt einen eigenen Dateispeicher mit optionaler Nextcloud-Anbindung, Anhänge in Einsätzen, News und Terminen sowie zahlreiche Verbesserungen im EinsatzManager und an den Schnittstellen. Hier der Überblick.

::note
**EinsatzApp und EinsatzTablet:** Die Anpassungen für EinsatzApp und EinsatzTablet sind gerade noch in Arbeit und werden in Kürze per App-Update zur Verfügung gestellt.
::

---

## Connect Portal

### Connect Storage und Nextcloud

Alle Anhänge landen jetzt im **Connect Storage**, dem neuen Dateispeicher von Connect – automatisch aktiv und kostenlos. Enthalten sind 500 MB plus 500 MB je volle 25 lizenzierte Benutzer; zusätzlicher Speicher ist in Paketen zu 25 GB (5 Lizenzpunkte pro Jahr) buchbar und monatlich kündbar. Eine Übersicht zeigt die Belegung, ab 90 % erscheint ein Hinweis, und der Assistent **„Speicher aufräumen"** schlägt nicht mehr benötigte Dateien zum Löschen vor.

Alternativ kann jeder Standort seine **eigene Nextcloud** verbinden – über den Nextcloud-Login, auch mit Zwei-Faktor-Anmeldung. Pro Dateikategorie lässt sich festlegen, ob Dateien im Connect Storage oder in einem Nextcloud-Ordner landen. Dateien in der Nextcloud zählen nicht zum Kontingent, und Anhänge bis **250 MB** sind dort möglich (im Connect Storage bis 25 MB).

Alle Details im ausführlichen Beitrag: [Anhänge überall – mit Connect Storage oder eigener Nextcloud](/blog/dateispeicher-nextcloud-anhaenge)

### Anhänge für Einsätze, News und Termine

Zu Einsätzen lassen sich Fotos und Dateien hochladen; der Standort wird aus den GPS-Daten des Fotos übernommen oder auf der Karte gesetzt. Auch **News und Termine** können jetzt Anhänge enthalten. Anhänge mit unangemessenem Inhalt können gemeldet werden.

Weitere Details: [Dateispeicher & Anhänge](/connect/23_dateispeicher#anhänge)

### Einsatzbericht

Die Abschnitte des Einsatzberichts sind jetzt einzeln wählbar: Einsatzdaten, Zusatzinfos, Fahrzeugbesatzung, Lagemeldung, Einsatzprotokoll und – neu – **Bilddokumentation**. Ausgewählte Fotos erscheinen am Ende des Berichts, zwei pro Seite. Das Einsatzprotokoll vermerkt außerdem hinzugefügte und gelöschte Anhänge.

Weitere Details: [Einsätze – Berichtsabschnitte und Bilddokumentation](/connect/07_einsaetze#berichtsabschnitte-und-bilddokumentation)

### Fahrzeug-Webhooks

Standort-Webhooks haben zwei neue Auslöser: **„Bei Fahrzeugstatus-Änderung"** und **„Bei Fahrzeugposition-Änderung"**. In der Ziel-URL stehen dafür Fahrzeug-Platzhalter wie `{CallSign}`, `{Status}`, `{Latitude}` und `{Longitude}` zur Verfügung. Positions-Webhooks lösen pro Fahrzeug höchstens alle 30 Sekunden aus.

Weitere Details: [Webhooks](/connect/schnittstellen/webhooks)

### HomeResQ-Objektinformationen

Liegen zu einem Einsatzort Objektinformationen bei **HomeResQ** vor, zeigt der Einsatz das jetzt mit dem Hinweis „HomeResQ Objektinformationen vorhanden" an. Die Details selbst sind im EinsatzManager abrufbar (siehe unten).

### Weitere Neuerungen

- Das **Ereignisprotokoll** erfasst jetzt auch Mängelmeldungen.
- Die Startseite zeigt unter **„Neuigkeiten"** die neuesten Beiträge aus unserem Blog.
- Die [MAÜ-Schnittstelle Rheinland-Pfalz](/connect/schnittstellen/leitstelle/mau_rlp_xml) weist jetzt darauf hin, dass dafür die Öffentliche Connect-Schnittstelle aktiviert sein muss.
- Karten laden weniger Kacheln und dadurch schneller; die Vollbildansicht öffnet ohne erneutes Laden.

---

## EinsatzManager

- **Einsatzanhänge:** Fotos und Dokumente lassen sich direkt im Einsatz hochladen, ansehen, herunterladen und löschen. Anhänge mit Standort – aus dem Gerät, den GPS-Daten des Fotos oder von Hand gesetzt – erscheinen als **Pins mit Vorschau auf der Einsatzkarte**, z. B. für Funde einer Drohneneinheit.
- **Dokumente aus der Nextcloud:** Ist für den Standort eine Nextcloud verbunden, lassen sich deren Dokumente im neuen Reiter **„Dokumente"** durchsuchen und öffnen – auch Videos werden abgespielt.
- **Einsatzbericht überarbeitet:** Abschnitte sind einzeln wählbar, Fotos kommen als Bilddokumentation in den Bericht, und die **Datenübersicht** zeigt, welche Angaben in den gewählten Abschnitten noch fehlen. Über **„Daten vervollständigen"** lassen sie sich Schritt für Schritt ergänzen.
- **Nachalarmierung ohne Zeitlimit:** Nachalarmieren ist jetzt möglich, solange der Einsatz nicht beendet ist – bisher ging das nur bis 90 Minuten nach Einsatzbeginn.
- **HomeResQ:** Der Einsatz zeigt, ob HomeResQ-Objektinformationen vorliegen, und öffnet sie über **„HomeResQ öffnen"** direkt. Der Abruf ist für aktive Einsätze bis 12 Stunden nach Einsatzbeginn möglich; der Hauseigentümer wird über den Abruf informiert.
- **Neue Kartenansichten:** Unter **„Kartenansicht"** stehen jetzt Karte (OpenStreetMap), Karte (Google), Satellit und Hybrid zur Auswahl. Zusätzlich lässt sich die **Verkehrslage** einblenden. Die Vollbildansicht öffnet direkt in der Karte.
- **Einsatzprotokoll:** Über **„Kopieren"** lassen sich Nachrichten in die Zwischenablage kopieren oder per **„Text in Feld übernehmen"** direkt in ein Dokumentationsfeld wie „Lage beim Eintreffen" oder „Tätigkeit" einfügen.
- Einsatzkopf und Berichtsseite wurden übersichtlicher gestaltet.

Weitere Details: [EinsatzManager: Anhänge & Dokumente](/einsatzmanager/11_anhaenge_und_dokumente)

---

## Schnittstellen & Plattform

- **Öffentliche Schnittstelle – Kommentare zu Mängelmeldungen:** Kommentare lassen sich über `/interfaces/public/defectReport/{id}/comments` abrufen, anlegen, ändern und löschen.
- **Öffentliche Schnittstelle – Standort-Webhooks:** Webhooks lassen sich über `/interfaces/public/webhooks` jetzt auch per API verwalten, testen und protokollieren – inklusive der neuen Fahrzeug-Auslöser.
- **Performance:** Fahrzeug- und Einsatzabfragen über die öffentliche Schnittstelle sowie das Laden der Benutzerdaten in den Apps sind deutlich schneller.

Weitere Details: [Öffentliche Connect API](/connect/schnittstellen/public_api) · [Swagger-Dokumentation](https://connectapi.feuersoftware.com/swagger/index.html)

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
