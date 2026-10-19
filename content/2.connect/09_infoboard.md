---
title: Infoboard
description: Informationsaushänge im Connect Portal anlegen und verwalten
---

# Infoboard

Das Infoboard enthält kurze, themenbezogene Informationsaushänge für die Mitglieder einer Organisation oder eines Standorts. Es ist auf **Standort-Ebene** verfügbar.

In der EinsatzApp und im EinsatzTablet ist das Infoboard unter dem Menüpunkt **„Infoboard"** erreichbar.

> **Neu:** Moderatoren können das Infoboard jetzt selbst verwalten (Einträge erstellen, bearbeiten und löschen). Bisher war das ausschließlich Standortadministratoren vorbehalten. Diese Funktion erfordert ein **App-Update** auf die aktuelle Version.

---

## Infoboard-Übersicht

**Seitenleiste → Infoboard**

![Screenshot: Infoboard-Übersicht](/images/connect/09_infoboard_uebersicht.png)

Die Übersicht zeigt alle aktiven Einträge gegliedert nach **Info-Gruppen** (Kategorien). Einträge können auf- und zugeklappt werden.

---

## Gruppierungen anlegen und umbenennen

Gruppierungen sind Kategorien, unter denen Einträge zusammengefasst werden (z. B. „Gerätewart", „Atemschutz", „Allgemeines"). Eine neue Gruppe wird direkt beim Anlegen des ersten Eintrags erstellt (siehe unten).

Zum **Umbenennen** einer bestehenden Gruppe auf das Stift-Symbol am rechten Rand der jeweiligen Gruppenüberschrift in der Übersicht klicken, neuen Namen eingeben und speichern.

---

## Infoboard-Eintrag anlegen

![Screenshot: Infoboard-Eintrag anlegen](/images/connect/09_infoboard_eintrag.png)

1. **„Eintrag anlegen"** klicken
2. Felder ausfüllen:
   - **Gruppe** – bestehende Gruppe auswählen oder neuen Namen eingeben, um direkt eine neue Gruppe anzulegen
   - **Beschreibung** (Überschrift des Eintrags)
   - **Typ** – legt fest, wie der Wert dargestellt und verlinkt wird (siehe Tabelle unten)
   - **Wert** – der eigentliche Inhalt, abhängig vom gewählten Typ
3. Speichern

| Typ | Verhalten |
|---|---|
| **Text** | Reiner Text ohne Verlinkung |
| **Telefonnummer** | Wert wird als anklickbarer Anruf-Link dargestellt |
| **E-Mail** | Wert wird als anklickbarer E-Mail-Link dargestellt |
| **Web-Referenz** | Wert wird als externer Link geöffnet (vollständige URL erforderlich) |
| **Nextcloud-Referenz** | Verweist auf ein Dokument in der Nextcloud des Standorts (siehe unten) |

Der Eintrag erscheint sofort in der EinsatzApp und im EinsatzTablet unter dem Infoboard.

### Nextcloud-Dokumente verlinken

Mit dem Typ **„Nextcloud-Referenz"** lassen sich Dokumente aus der [Nextcloud des Standorts](/connect/schnittstellen/nextcloud) verlinken – z. B. Objektpläne, Alarm- und Ausrückeordnungen oder Checklisten.

![Screenshot: Infoboard-Eintrag mit Typ „Nextcloud-Referenz" und Ordner-Symbol](/images/connect/09_infoboard_nextcloud_referenz.png)

1. Als Typ **„Nextcloud-Referenz"** wählen
2. Im Feld **„Wert"** auf das **Ordner-Symbol** („Nextcloud durchsuchen") klicken
3. Im Dialog **„Datei auswählen"** durch die Ordner navigieren oder über **„Diesen Ordner durchsuchen"** nach dem Dateinamen suchen (ab 2 Zeichen, inkl. Unterordner)
4. Datei anklicken – der Pfad wird übernommen

Alternativ kann ein Pfad oder ein aus der Nextcloud kopierter Link direkt in das Feld eingefügt werden.

Im Connect Portal und im EinsatzManager erscheint der Eintrag als Button mit dem Dateinamen, der das Dokument direkt in der Vorschau öffnet.

> **Voraussetzungen und Hinweise:**
> - Der Typ „Nextcloud-Referenz" wird nur angeboten, wenn am Standort eine Nextcloud verbunden ist. Bestehende Einträge bleiben bearbeitbar.
> - Es können nur Dokumente innerhalb des [Dokumenten-Stammordners](/connect/schnittstellen/nextcloud#dokumenten-stammordner) verlinkt werden. Der Pfad wird relativ zu diesem Ordner gespeichert.
> - Wird das Dokument in der Nextcloud verschoben, umbenannt oder gelöscht, erscheint beim Öffnen „Das Dokument wurde in der Nextcloud nicht gefunden."
> - EinsatzApp und EinsatzTablet werden mit einem späteren Update an die Standort-Nextcloud angebunden.

> In der EinsatzApp kann der Textinhalt eines Eintrags durch **langes Drücken** in die Zwischenablage kopiert werden – praktisch für Telefonnummern oder Adressen.

---

## Einträge bearbeiten und löschen

Eintrag in der Übersicht antippen → **„Bearbeiten"** oder über das Drei-Punkte-Menü **„Löschen"**. Gruppen können über das Stift-Symbol umbenannt werden; eine leere Gruppe (ohne Einträge) wird automatisch aus der Übersicht ausgeblendet.
