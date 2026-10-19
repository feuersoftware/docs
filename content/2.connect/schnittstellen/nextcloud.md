---
title: Nextcloud
description: Eine eigene Nextcloud an einen Standort anbinden – als Dateispeicher für Anhänge und um vorhandene Dokumente in Connect durchsuchbar zu machen
---

# Nextcloud

Über die Nextcloud-Schnittstelle wird eine **eigene, selbst betriebene Nextcloud** an einen Standort angebunden. Sie erfüllt zwei Aufgaben:

1. **Dateispeicher** – Anhänge (z. B. Einsatzfotos, Anhänge an News, Termine und Mängelmeldungen, Monitor-Dateien) können statt im Connect Storage direkt in der Nextcloud abgelegt werden. Sie zählen dann nicht zum Speicherkontingent der Organisation.
2. **Dokumentenablage** – Vorhandene Dokumente wie Objekt-, Feuerwehr- oder BMA-Pläne werden in Connect durchsuchbar und können im Infoboard, in dynamischen Zusatzinformationen und im EinsatzManager geöffnet werden.

Die Anbindung ist **kostenlos**. Pro Standort kann genau eine Nextcloud verbunden werden.

> **Hinweis:** Aktuell nutzen das **Connect Portal** und der **EinsatzManager** die Standort-Nextcloud. Die Integration in **EinsatzApp** und **EinsatzTablet** folgt – bis dahin wird die Nextcloud dort weiterhin direkt in der App eingerichtet (siehe [EinsatzTablet: Dokumente & Nextcloud](/einsatztablet/07_dokumente_nextcloud)).

---

## Voraussetzungen

- Eine Nextcloud, die **aus dem Internet über `https://` erreichbar** ist. Server, die nur im lokalen Netz erreichbar sind (z. B. `192.168.x.x`), oder unverschlüsseltes `http://` werden aus Sicherheitsgründen nicht unterstützt.
- Ein Nextcloud-Benutzer, über den Connect auf die Dateien zugreift. Empfehlung: einen **eigenen Benutzer** für Connect anlegen und nur die benötigten Ordner für ihn freigeben.
- Die Rolle **Standortadministrator** im Connect Portal.

---

## Nextcloud verbinden

**Standort wählen → Seitenleiste → Schnittstellen → Nextcloud → „Konfigurieren"**

![Screenshot: Nextcloud-Schnittstelle – noch nicht verbunden](/images/connect/23_nextcloud_verbinden.png)

1. Die **Server-URL** der Nextcloud eingeben, z. B. `https://cloud.feuerwehr-flammenhausen.de`
2. Auf **„Verbinden"** klicken
3. Es öffnet sich ein **neuer Tab mit der Anmeldeseite der Nextcloud**. Dort mit dem gewünschten Nextcloud-Benutzer anmelden und den Zugriff für Connect bestätigen. Auch eine Zwei-Faktor-Anmeldung ist möglich.
4. Das Portal wartet währenddessen auf die Anmeldung („Warte auf die Anmeldung im neuen Tab…"). Sobald sie abgeschlossen ist, erscheint **„Nextcloud erfolgreich verbunden."**

> Ein **Passwort wird in Connect nicht eingegeben.** Die Nextcloud stellt bei der Anmeldung automatisch ein eigenes App-Passwort für Connect aus. Es ist in der Nextcloud unter *Einstellungen → Sicherheit → Geräte & Sitzungen* sichtbar und kann dort jederzeit widerrufen werden.

Falls der Tab durch einen Popup-Blocker verhindert wurde, kann er über **„Anmeldeseite öffnen"** erneut geöffnet werden. Die Anmeldung muss innerhalb von **20 Minuten** abgeschlossen werden, sonst läuft sie ab und muss neu gestartet werden.

---

## Verbindungsstatus

![Screenshot: Verbundene Nextcloud mit Einstellungen und Speicherzuordnung](/images/connect/23_nextcloud_standort.png)

Nach dem Verbinden zeigt die Seite:

| Feld | Bedeutung |
|---|---|
| **Status** | *Verbunden*, *Anmeldung fehlgeschlagen* oder *Nicht verbunden* |
| **Server-URL** | Adresse der Nextcloud |
| **Benutzername** | Nextcloud-Benutzer, mit dem verbunden wurde |
| **Verbunden am** | Zeitpunkt und Portal-Benutzer, der die Verbindung eingerichtet hat |
| **Zuletzt geprüft** | Zeitpunkt der letzten Verbindungsprüfung |

- **„Verbindung testen"** prüft die Verbindung sofort.
- Zusätzlich prüft Connect **jede Nacht automatisch** alle Verbindungen. Schlägt die Prüfung fehl, wechselt der Status auf **„Anmeldung fehlgeschlagen"** und die Standortadministratoren erhalten eine E-Mail („Nextcloud-Verbindung fehlgeschlagen") mit einem Link zur Schnittstelle.
- Solange die Verbindung gestört ist, werden neue Uploads automatisch im **Connect Storage** abgelegt.

**Typische Ursachen für „Anmeldung fehlgeschlagen":** Das App-Passwort wurde in der Nextcloud widerrufen, der Nextcloud-Benutzer wurde gelöscht oder deaktiviert, oder die Nextcloud ist nicht erreichbar. Lösung: Verbindung trennen und neu verbinden.

---

## Dokumenten-Stammordner

**Nextcloud → Einstellungen → „Dokumenten-Stammordner"** *(Standard: `/`)*

Legt fest, welcher Ordner der Nextcloud als **Dokumentenablage** gilt. Benutzer und Apps können nur Dokumente innerhalb dieses Ordners durchsuchen und öffnen – etwa beim Verlinken im Infoboard oder im Reiter „Dokumente" des EinsatzManagers. Über **„Durchsuchen"** lässt sich der Ordner bequem auswählen.

**Empfehlung:** Einen eigenen Ordner für einsatzrelevante Dokumente anlegen (z. B. `/Einsatzdokumente`) und diesen als Stammordner wählen, statt die gesamte Nextcloud freizugeben.

> **Achtung:** Verlinkungen auf Nextcloud-Dokumente (z. B. im Infoboard oder in dynamischen Zusatzinformationen) werden **relativ zum Stammordner** gespeichert. Wird der Stammordner nachträglich geändert, können bestehende Verlinkungen ins Leere laufen. Vor dem Speichern erscheint deshalb eine Sicherheitsabfrage.

![Screenshot: Dialog „Ordner auswählen"](/images/connect/23_nextcloud_ordner_auswaehlen.png)

Die Suche findet Dateien anhand des Namens (ab 2 Zeichen, Groß-/Kleinschreibung egal) im aktuellen Ordner und allen Unterordnern. Dateien und Ordner, deren Name mit einem Punkt beginnt, werden ausgeblendet.

---

## Speicherzuordnung

Sobald eine Nextcloud verbunden ist, erscheint darunter der Abschnitt **„Speicherzuordnung"**. Dort wird je Kategorie (Mängelmeldungen, Einsätze, News, Termine, Monitor-Dateien) festgelegt, ob Dateien im Connect Storage oder in der Nextcloud abgelegt werden – und in welchem Ordner.

→ Ausführliche Beschreibung: [Dateispeicher & Anhänge – Speicherzuordnung](/connect/23_dateispeicher#speicherzuordnung)

> Die Zielordner für Uploads können unabhängig vom Dokumenten-Stammordner frei in der gesamten Nextcloud des verbundenen Benutzers gewählt werden. Im Auswahldialog lassen sich auch neue Ordner anlegen.

---

## Verbindung trennen

**Nextcloud → „Trennen"**

Beim Trennen passiert Folgendes:

- Die Verbindung und das gespeicherte App-Passwort werden aus Connect **gelöscht**.
- Alle Kategorien der Speicherzuordnung, die auf die Nextcloud zeigen, werden auf **Connect Storage zurückgesetzt**. Neue Uploads landen ab sofort dort.
- Die **Dateien in der Nextcloud bleiben erhalten** – Connect löscht dort nichts.
- Bereits in der Nextcloud abgelegte **Anhänge** sind über Connect **nicht mehr abrufbar** – auch nicht nach einem erneuten Verbinden, da sie an die alte Verbindung geknüpft sind.
- **Verlinkungen auf Nextcloud-Dokumente** (Infoboard, dynamische Zusatzinformationen) können bis zum erneuten Verbinden nicht geöffnet werden (im EinsatzManager werden sie ausgeblendet). Wird dieselbe Nextcloud mit gleicher Ordnerstruktur und gleichem Stammordner wieder verbunden, funktionieren sie wieder.

> **Tipp:** Muss nur die Anmeldung erneuert werden (z. B. nach „Anmeldung fehlgeschlagen"), ist ein Trennen in der Regel nicht nötig – zuerst **„Verbindung testen"** versuchen und die Ursache in der Nextcloud beheben.

---

## Häufige Fragen

### Die Verbindung schlägt direkt beim Verbinden fehl

- Ist die Server-URL korrekt und beginnt mit `https://`?
- Ist die Nextcloud aus dem Internet erreichbar (nicht nur im lokalen Netz oder per VPN)?
- Wurde die Anmeldung im neuen Tab innerhalb von 20 Minuten abgeschlossen?

### „Die Datei wurde im Nextcloud-Speicher nicht gefunden"

Die Datei wurde in der Nextcloud manuell verschoben, umbenannt oder gelöscht, oder die Pfad-Konfiguration (Stammordner) wurde geändert.

### Kann ich eine Nextcloud für mehrere Standorte nutzen?

Ja. Die Verbindung wird zwar pro Standort eingerichtet, es kann aber an mehreren Standorten dieselbe Nextcloud (mit demselben oder unterschiedlichen Benutzern) verbunden werden.
