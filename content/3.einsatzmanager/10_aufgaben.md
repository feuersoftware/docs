---
title: Aufgaben
description: Einsatzaufgaben erstellen, zuweisen und verwalten – die integrierte Aufgabenverwaltung im EinsatzManager
---

# Aufgaben

Das Aufgaben-Feature ermöglicht es, während eines Einsatzes strukturierte Arbeitsaufträge zu erfassen, zuzuweisen und ihren Bearbeitungsstand nachzuverfolgen. Alle Aufgaben sind einem konkreten Einsatz zugeordnet und für alle beteiligten Benutzer sichtbar.

![Screenshot: Aufgabenübersicht mit Statistikkarten und Tabelle](/images/einsatzmanager/10_aufgaben_uebersicht.png)

---

## Aufgaben öffnen

Es gibt zwei Wege zur Aufgabenverwaltung:

| Weg | Beschreibung |
|---|---|
| **Aufgaben-Button** (Einsatzdetails) | In der rechten Spalte der Einsatzdetailseite zeigt ein Button mit rotem Badge die Anzahl offener Aufgaben an. Ein Klick öffnet das **Aufgaben-Sidepanel**. |
| **Vollansicht** | Im Sidepanel befindet sich unten der Link **„Alle Aufgaben anzeigen"** – er führt zur vollständigen Aufgabenseite unter `/app/operation/[id]/tasks`. |

---

## Aufgaben-Sidepanel

Das Sidepanel ist eine schnelle Seitenleiste direkt auf der Einsatzdetailseite. Es zeigt alle **offenen und in Bearbeitung** befindlichen Aufgaben als kompakte Karten.

![Screenshot: Aufgaben-Sidepanel mit offenen Aufgaben](/images/einsatzmanager/10_aufgaben_sidepanel.png)

Jede Karte enthält:
- Aufgabenbeschreibung (max. zwei Zeilen)
- Farbiger Statusbadge
- Zugewiesene Person (oder „—" wenn nicht zugewiesen)
- Erstellungsdatum und Ersteller
- Datum der letzten Änderung (falls vorhanden)
- Schaltfläche **„Mir zuweisen"** bei nicht zugewiesenen Aufgaben

Ein Klick auf eine Karte öffnet das Bearbeitungsformular.

---

## Vollständige Aufgabenansicht

Die Vollansicht stellt alle Aufgaben des Einsatzes in einer Tabelle dar.

![Screenshot: Aufgabentabelle in der Vollansicht](/images/einsatzmanager/10_aufgaben_tabelle.png)

### Statistikkarten

Am oberen Rand befinden sich fünf Übersichtskarten:

| Karte | Bedeutung |
|---|---|
| Gesamt | Anzahl aller Aufgaben |
| Offen | Neue, noch nicht begonnene Aufgaben (gelb) |
| In Bearbeitung | Aktiv bearbeitete Aufgaben (blau) |
| Erledigt | Abgeschlossene Aufgaben (grün) |
| Abgebrochen | Nicht mehr benötigte Aufgaben (rot) |

### Tabellenspalten

| Spalte | Beschreibung |
|---|---|
| Erstellt am | Zeitstempel der Erstellung |
| Beschreibung | Aufgabentext |
| Zugewiesen an | Name der zuständigen Person |
| Status | Aktueller Bearbeitungsstand (farbig) |
| Erstellt von | Name des Erstellers |
| Zuletzt geändert | Zeitstempel der letzten Änderung |
| Aktionen | Bearbeiten, Verlauf, Löschen |

Die Tabelle ist nach jeder Spalte sortierbar.

---

## Aufgabe erstellen

Neue Aufgaben können auf zwei Wegen angelegt werden:

**Methode 1 – Vollansicht:**
1. Zur vollständigen Aufgabenseite navigieren
2. Oben rechts **„+ Aufgabe erstellen"** klicken
3. Formular ausfüllen und bestätigen

**Methode 2 – Einsatzprotokoll:**
1. In der mittleren Spalte der Einsatzdetailseite das Eingabefeld auf den Modus **„Aufgabe"** umschalten
2. Beschreibung eingeben
3. Optional: Person für die Zuweisung auswählen
4. Eintrag absenden – die Aufgabe wird sofort angelegt

![Screenshot: Aufgabe-Erstellungsformular (Modal)](/images/einsatzmanager/10_aufgaben_erstellen.png)

### Felder im Erstellungsformular

| Feld | Pflichtfeld | Beschreibung |
|---|---|---|
| Beschreibung | Ja | Freitext, der den Arbeitsauftrag beschreibt |
| Zugewiesen an | Nein | Auswahl aus den Benutzern der Organisation |
| Status | Nein | Startstatus; Standard ist **„Offen"** |

---

## Aufgabe bearbeiten

Über das **Stift-Symbol** in der Tabelle oder durch Klick auf eine Aufgabenkarte im Sidepanel öffnet sich das Bearbeitungsformular.

Folgende Felder können geändert werden:
- Beschreibung
- Zugewiesene Person
- Status

Änderungen werden mit **„Speichern und schließen"** übernommen. Alle Änderungen werden im Verlauf protokolliert.

---

## Aufgabenstatus

Der Status bildet den Bearbeitungsfortschritt einer Aufgabe ab:

| Status | Farbe | Bedeutung |
|---|---|---|
| Offen | Gelb | Aufgabe angelegt, noch nicht begonnen |
| In Bearbeitung | Blau | Aufgabe wird aktiv bearbeitet |
| Erledigt | Grün | Aufgabe ist abgeschlossen |
| Abgebrochen | Rot | Aufgabe wird nicht mehr benötigt |

Aufgaben mit Status **„Erledigt"** oder **„Abgebrochen"** werden im Sidepanel nicht mehr angezeigt.

---

## Aufgabe zuweisen

Aufgaben können beim Erstellen oder nachträglich beim Bearbeiten einer Person zugewiesen werden. Im Sidepanel steht zusätzlich die Schaltfläche **„Mir zuweisen"** zur Verfügung: Sie überträgt eine nicht zugewiesene Aufgabe mit einem Klick auf den aktuell angemeldeten Benutzer.

---

## Änderungsverlauf

Jede Aufgabe führt ein vollständiges Änderungsprotokoll. Über das **Uhr-Symbol** in der Tabelle öffnet sich der Verlauf.

![Screenshot: Aufgabenverlauf mit Änderungseinträgen](/images/einsatzmanager/10_aufgaben_verlauf.png)

Jeder Eintrag zeigt:
- Name der Person, die die Änderung vorgenommen hat
- Exakter Zeitstempel (TT.MM.JJJJ HH:mm:ss)
- Geändertes Feld
- Neuer Wert

---

## Aufgabe löschen

Über das **Papierkorb-Symbol** in der Tabelle kann eine Aufgabe gelöscht werden. Ein Bestätigungsdialog verhindert versehentliches Löschen. Das Löschen ist nicht rückgängig zu machen.

---

## Hinweise

> Aufgaben sind einsatzgebunden – sie können nur innerhalb eines bestehenden Einsatzes erstellt werden und sind ausschließlich für diesen Einsatz sichtbar.

> Das Aufgaben-Feature ist für alle authentifizierten Benutzer mit Zugriff auf den jeweiligen Einsatz verfügbar. Es gibt keine weiteren rollenbasierten Einschränkungen auf Aufgabenebene.
