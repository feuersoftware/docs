---
title: Connect-Update im November 2026
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-11-11
description: Kartenformen und Lagekarte im EinsatzManager, Nextcloud-Dateien direkt am Einsatz, Ordner-Verweise, mehr geteilte Einsatzdaten und ein frei gestaltbarer Dienstausweis mit Barcode und QR-Code.
image: /images/blog/connect-update-november-2026.jpg
minRead: 4
navigation: false
---

Das November-Update bringt die Lage auf die Karte: Im EinsatzManager lassen sich jetzt **Einsatzabschnitte, Sperrbereiche und Wege direkt auf der Einsatzkarte zeichnen** – und als **Lagekarte** in den Einsatzbericht übernehmen. Dazu kommen Verbesserungen rund um die Nextcloud, das Teilen von Einsatzdaten und den digitalen Dienstausweis.

---

## Kartenformen im EinsatzManager

![Einsatzkarte mit Kartenformen im EinsatzManager](/images/einsatzmanager/05_kartenformen.png)

Über **„Form zeichnen"** markiert ihr Bereiche direkt auf der Einsatzkarte – als **Fläche, Rechteck, Kreis oder Linie**. Besonders praktisch ist das Werkzeug **„Freihand"**: Einfach drauflos zeichnen, der EinsatzManager erkennt automatisch, ob ihr einen Kreis, ein Rechteck, eine Fläche oder eine Linie gemeint habt.

Jede Form bekommt einen **Namen** und eine **Farbe** – etwa „Abschnitt Nord" oder „Bereitstellungsraum". Fahrzeuge lassen sich einer Form direkt zuweisen und erhalten deren Namen als **Tag**. So ist auf einen Blick sichtbar, welches Fahrzeug in welchem Abschnitt arbeitet. Mit **„Speichern und Benutzer informieren"** landet die neue Form zusätzlich im Einsatzprotokoll.

Alle Formen sind **sofort für alle sichtbar**, die den Einsatz geöffnet haben – im EinsatzManager und in der Einsatz-Detailansicht im Connect Portal.

Weitere Details: [EinsatzManager: Kartenformen zeichnen](/einsatzmanager/05_einsatzdetails#kartenformen-zeichnen)

## Lagekarte im Einsatzbericht

![Kachel „Lagekarte" im Einsatzbericht](/images/einsatzmanager/11_lagekarte_auswahl.png)

Die gezeichneten Formen gehören in die Dokumentation: Im Einsatzbericht gibt es dafür den neuen Abschnitt **„Lagekarte"**. Ihr wählt die gewünschten Formen aus, und der Bericht erhält eine eigene Seite mit **Karte und Legende** – im EinsatzManager wie im Connect Portal.

Weitere Details: [Lagekarte im Einsatzbericht](/einsatzmanager/11_anhaenge_und_dokumente#lagekarte-im-einsatzbericht)

---

## Nextcloud: Dateien anhängen und Ordner verlinken

**Dateien aus der Nextcloud an einen Einsatz hängen:** Im EinsatzManager gibt es beim Hinzufügen eines Anhangs den neuen Button **„Aus Nextcloud"**. Objektpläne, Fotos oder Dokumente, die bereits in eurer Nextcloud liegen, sind damit mit wenigen Klicks am Einsatz – ohne Umweg über den Download.

**Ganze Ordner verlinken:** Im Infoboard und in den dynamischen Zusatzinformationen kann eine Nextcloud-Referenz jetzt auch auf einen **Ordner** zeigen. Beim Öffnen zeigt die Vorschau links die Dateiliste und rechts das Dokument. Ideal, um z. B. alle Pläne eines Objekts mit einem einzigen Eintrag bereitzustellen – neue Dateien im Ordner erscheinen automatisch.

![Ordner-Verweis mit Dateiliste und Vorschau](/images/connect/09_ordner_verweis.png)

Weitere Details: [Anhänge & Dokumente](/einsatzmanager/11_anhaenge_und_dokumente) · [Infoboard: Nextcloud-Dokumente verlinken](/connect/09_infoboard#nextcloud-dokumente-verlinken)

---

## Einsatzdaten teilen: Kartenformen und Anhänge

Über [Einsatzdaten teilen](/connect/07_einsaetze#einsatzdaten-teilen) lassen sich jetzt auch **Kartenformen** und **Einsatzanhänge** mit anderen Standorten und Organisationen austauschen. Geteilte Formen erscheinen gestrichelt und mit dem Namen des Partner-Standorts, geteilte Anhänge mit „Geteilt von …".

Der EinsatzManager reagiert außerdem live: Wird eine Freigabe eingerichtet, geändert oder beendet, erscheinen bzw. verschwinden die geteilten Daten sofort – ganz ohne Neuladen der Seite.

---

## Dienstausweis: eigene Einstellungsseite mit Barcode und QR-Code

![Einstellungsseite „Dienstausweis" im Connect Portal](/images/connect/12_org_dienstausweis.png)

Der digitale Dienstausweis hat in den Organisationseinstellungen eine eigene Seite **„Dienstausweis"** bekommen – und kann jetzt deutlich mehr:

- **Profilbild** anzeigen und auf Wunsch verpflichtend machen
- **Barcode** in neun Formaten (u. a. Code 128, Code 39, EAN-13) – z. B. für Zutrittssysteme, Tankkarten oder Ausleihsysteme
- **QR-Code** mit frei festgelegtem Inhalt
- **FeuerSoftware-Verifizierung**, mit der sich Einsatzkräfte z. B. gegenüber der Polizei ausweisen können

![Dienstausweis mit Barcode, QR-Code und „Verifizieren" in der EinsatzApp](/images/einsatzapp/14_dienstausweis.png)

Die Inhalte von Barcode und QR-Code werden mit Platzhaltern wie `{FirstName}`, `{LastName}` und `{StaffNumber}` für jedes Mitglied individuell befüllt. Die dafür nötige **Personalnummer** lässt sich jetzt in der Benutzerverwaltung pflegen.

::note
Der neue Dienstausweis ist aktuell nur in der **Beta-Version der EinsatzApp** enthalten und wird mit dem nächsten regulären App-Update für alle verfügbar.::

Weitere Details: [Organisationseinstellungen – Dienstausweis](/connect/12_organisationseinstellungen#dienstausweis) · [EinsatzApp – Dienstausweis](/einsatzapp/14_weiteres#dienstausweis)

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
