---
title: Neuerungen im Juli 2026
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-07-21
description: Fahrzeuge lassen sich im EinsatzManager jetzt Aufgaben zuweisen, der EinsatzManager aktualisiert schneller und der EinsatzMonitor läuft stabiler und bietet einen neuen Support-Daten-Upload.
image: /images/blog/portal-update-juni-2026.jpeg
minRead: 4
navigation: false
---

Die letzten Wochen brachten mehrere Verbesserungen über Connect Portal, EinsatzManager und EinsatzMonitor hinweg. Hier die wichtigsten Neuerungen im Überblick.

## Fahrzeuge auf Aufgaben zuweisen

Aufgaben im EinsatzManager lassen sich jetzt nicht mehr nur Personen, sondern auch **Fahrzeugen** zuweisen. Das ist besonders bei Einsätzen hilfreich, bei denen ganze Fahrzeugbesatzungen einen Auftrag gemeinsam abarbeiten, ohne dass jede Person einzeln eingetragen werden muss.

Weitere Details: [Aufgaben](/einsatzmanager/10_aufgaben)

---

## Überarbeitete Eingabemaske für Einsatzberichte

Beim Erstellen von Einsatzberichten weist die Eingabemaske jetzt deutlicher auf fehlende Informationen hin. An der eigentlichen Funktion des Einsatzberichts selbst hat sich nichts geändert – die Anpassung erleichtert lediglich das vollständige Ausfüllen.

![Screenshot: Einsatzbericht mit Hinweisen auf fehlende Informationen](/images/blog/update-juli-2026-einsatzbericht.png)

Weitere Details: [Einsätze](/connect/07_einsaetze)

---

## Fahrzeugübersicht zeigt Tablet-Status

In der Fahrzeugübersicht im Connect Portal ist jetzt direkt erkennbar, ob für ein Fahrzeug ein **Fahrzeugtablet aktiviert** ist – ohne dass dafür erst ins Fahrzeug hineingeklickt werden muss.

![Screenshot: Fahrzeugübersicht mit Anzeige des EinsatzTablet-Status](/images/blog/update-juli-2026-fahrzeuguebersicht.png)

Weitere Details: [Fahrzeuge](/connect/06_fahrzeuge)

---

## Schnellere Aktualisierung im EinsatzManager

Die Live-Verbindung des EinsatzManager wurde überarbeitet: Status- und Fahrzeugänderungen werden dadurch zuverlässiger und schneller in der Oberfläche sichtbar, ohne dass ein manuelles Neuladen nötig ist.

---

## Mehr Stabilität im EinsatzMonitor

Der EinsatzMonitor hat mehrere Fixes erhalten, die vor allem im Dauerbetrieb an der Leitstelle spürbar sind:

- Ein Absturz beim Schließen der seriellen DME-Schnittstelle bei nicht verfügbarem Gerät wurde behoben.
- Ein Fehler, der zu einem Programmabsturz sowie zu Problemen beim Entschlüsseln gespeicherter Passwörter führen konnte, wurde behoben.
- Backups blieben bislang dauerhaft hängen, wenn bereits eine Datei mit demselben Zielnamen existierte – auch das ist nun behoben.

---

## Support-Daten direkt aus dem EinsatzMonitor hochladen

Über **Einstellungen → „Hilfe / Support"** lassen sich jetzt ausgewählte Einsatz- und Log-Daten direkt aus dem EinsatzMonitor an das FeuerSoftware-Team übermitteln – praktisch bei der Fehlersuche, ohne Dateien manuell zusammensuchen zu müssen. Persönliche Daten wie Namen, E-Mail-Adressen und Telefonnummern werden vor dem Hochladen automatisch entfernt. Zeitraum und einbezogene Daten (Einsätze, Logs) lassen sich frei wählen, optional mit einer Nachricht an das Support-Team.

---

## Neuer API-Endpoint fürs Info-Board

Für Organisationen, die das Info-Board über die öffentliche Connect API automatisiert befüllen möchten (z. B. aus einem angebundenen Fremdsystem), steht jetzt ein eigener **`/infoboard`-Endpoint** zur Verfügung. Damit lassen sich Einträge und Gruppen des Info-Boards per API abrufen, anlegen, bearbeiten und löschen – bisher war das ausschließlich über das Portal möglich.

Weitere Details: [Öffentliche Connect API](/connect/schnittstellen/public_api) · [Swagger-Dokumentation](https://connectapi.feuersoftware.com/swagger/index.html)

---

## Kleinere Verbesserungen

- Ein Anzeigefehler bei den Kategorien von Mängelmeldungen wurde behoben.
- Der „Benachrichtigen"-Button bei Terminen wird jetzt in den korrekten Fällen ein- bzw. ausgeblendet.
- Menüpunkte im Connect Portal werden jetzt zuverlässig entsprechend der Berechtigungen ein- oder ausgeblendet.
- Ein Fehler beim Teilen von Einsätzen auf der Detailseite wurde behoben.
- Der Lizenztext für „Divera-Schnittstelle – eingehendes Konto" wurde übersetzt.

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
