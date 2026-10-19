---
title: Anhänge & Dokumente
description: Einsatzfotos und -dateien im EinsatzManager hochladen, mit Standort auf der Karte verorten, im Einsatzbericht verwenden und Nextcloud-Dokumente im Einsatz aufrufen
---

# Anhänge & Dokumente

Im EinsatzManager lassen sich zu jedem Einsatz **Fotos und Dateien** hochladen, mit einem **Standort** versehen und auf der Einsatzkarte anzeigen. Zusätzlich stehen die **Dokumente der Standort-Nextcloud** (z. B. Objektpläne) direkt in der Einsatzdetailseite zur Verfügung.

Wo die Dateien gespeichert werden (Connect Storage oder eigene Nextcloud), wird im Connect Portal festgelegt – siehe [Connect: Dateispeicher & Anhänge](/connect/23_dateispeicher).

---

## Anhänge

**Einsatzdetailseite → rechte Spalte → Bereich „Anhänge"**

Der Bereich ist standardmäßig zugeklappt und lässt sich per Klick öffnen.

### Anhang hinzufügen

Es gibt zwei Wege:

- **„+"-Button** im Kopf des Bereichs „Anhänge"
- **Über die Einsatzkarte:** Rechtsklick (bzw. langes Drücken) auf die gewünschte Stelle → **„Anhang an dieser Position hinzufügen"**. Der Standort ist dann bereits vorbelegt.

![Screenshot: Dialog „Anhang hinzufügen" mit Beschreibung und Standort-Karte](/images/einsatzmanager/11_anhang_hinzufuegen.png)

Im Dialog **„Anhang hinzufügen"**:

1. **„Datei auswählen"** – eine Datei auswählen (je Vorgang eine Datei)
2. **Beschreibung** – optional
3. **Standort** – optional, siehe unten
4. **„Hochladen"**

**Unterstützte Dateitypen:** Bilder (JPG, PNG, GIF, WebP, BMP, SVG, HEIC/HEIF), Dokumente (PDF, Word, Excel, TXT, CSV) und Videos (MP4, WebM, MOV). Maximale Größe: 25 MB im Connect Storage, 250 MB bei Ablage in einer Nextcloud.

> Auf Tablets und Smartphones bietet der Dateiauswahl-Dialog des Betriebssystems in der Regel auch direkt die **Kamera** an.

### Standort eines Anhangs

Im Upload-Dialog ist eine kleine Karte eingebettet, zentriert auf die Einsatzadresse:

- **Automatisch aus dem Foto:** Enthält ein Foto GPS-Daten (EXIF), wird die Position automatisch übernommen und mit **„Aus Foto"** gekennzeichnet. Zusätzlich wertet Connect die GPS-Daten nach dem Hochladen serverseitig aus, sodass auch Fotos ohne gesetzten Standort nachträglich verortet werden. Ein manuell gesetzter Standort wird dabei nie überschrieben.
- **Manuell:** Auf die Karte klicken, um den Pin zu setzen; der Pin lässt sich verschieben.
- **„Meinen Standort verwenden"** – übernimmt die aktuelle Position des Geräts.
- **„Standort entfernen"** – löscht die Position wieder.

Nachträglich lässt sich der Standort über das **Pin-Symbol** am Anhang („Standort setzen" / „Standort bearbeiten") ändern.

### Anhänge verwalten

Jeder Anhang zeigt Vorschaubild, Dateiname, Beschreibung und Größe. Anhänge mit Standort sind mit einem Pin-Symbol gekennzeichnet. Über die Symbole am Anhang:

| Symbol | Aktion |
|---|---|
| ⬇ | **Herunterladen** |
| 🚩 | **Melden** – Anhänge mit unangemessenem oder rechtswidrigem Inhalt melden; die Meldung wird von FeuerSoftware geprüft |
| 📍 | **Standort setzen / bearbeiten** |
| 🗑 | **Anhang löschen** (mit Sicherheitsabfrage) |

Ein Klick auf den Dateinamen oder das Vorschaubild öffnet die **Vorschau** (Bilder, PDFs, Videos).

> Beschreibung und Dateiname lassen sich nach dem Hochladen nicht mehr ändern – bei Bedarf den Anhang löschen und neu hochladen.

### Geteilte Anhänge

Ist der Einsatz über [Einsatzdaten teilen](/einsatzmanager/05_einsatzdetails#einsatzdaten-teilen) mit einem Einsatz eines anderen Standorts bzw. einer anderen Organisation verbunden und ist dort der Datentyp **„Einsatzanhänge"** freigegeben, erscheinen auch deren Anhänge – gekennzeichnet mit **„Geteilt von {Standort}"**. Geteilte Anhänge können angesehen und heruntergeladen, aber nicht verändert oder gelöscht werden.

### Aktualisierung

Neue Anhänge anderer Benutzer werden in der Anhang-Liste und auf der Karte nach dem **Neuladen der Seite** angezeigt. Der zugehörige Protokolleintrag erscheint dagegen sofort (siehe unten).

---

## Anhänge auf der Einsatzkarte

Anhänge mit Standort erscheinen auf der Einsatzkarte (kleine Karte und Vollbildkarte) als **orange Pins mit Kamera-Symbol**.

![Screenshot: Einsatzdetailseite mit Anhang-Pin auf der Karte, Protokolleintrag und Anhänge-Bereich](/images/einsatzmanager/11_anhaenge_karte_protokoll.png)

- **Klick auf einen Pin** öffnet die Vorschau des Anhangs.
- Liegen mehrere Anhänge sehr dicht beieinander, werden sie zu einem Pin mit **Anzahl** zusammengefasst. Ein Klick darauf öffnet eine **Diashow** mit allen Anhängen dieser Stelle – blättern per Pfeil-Button oder Pfeiltasten, inklusive Vorschaubild-Leiste und Beschreibung.

---

## Anhänge im Einsatzprotokoll

Jedes Hinzufügen und Löschen eines Anhangs wird automatisch im **Einsatzprotokoll** vermerkt. Der Eintrag **„Einsatzanhang hinzugefügt"** nennt den Dateinamen und – falls vorhanden – die Koordinaten (z. B. *Anhang "Vorne.jpeg" wurde hinzugefügt (Ort: 50.14494, 8.39624)*) und zeigt ein Vorschaubild mit dem Link **„Anhang ansehen"** – so ist die Bilddokumentation direkt im zeitlichen Ablauf des Einsatzes nachvollziehbar.

Die neuen Ereignisse („Anhang hinzugefügt" / „Anhang gelöscht") sind im Protokollfilter standardmäßig eingeschlossen und können dort bei Bedarf ausgeblendet werden.

---

## Bilddokumentation im Einsatzbericht

**Einsatzdetailseite → Reiter „Bericht" → Berichtsabschnitte → Kachel „Bilddokumentation"**

Fotos des Einsatzes können in den PDF-Einsatzbericht übernommen werden:

![Screenshot: Einsatzbericht mit Berichtsabschnitten und Kachel „Bilddokumentation"](/images/einsatzmanager/11_bilddokumentation.png)

1. In der Kachel **„Bilddokumentation"** auf **„Bilder auswählen"** klicken
2. In der Diashow die gewünschten Fotos per **„Auswählen"** (oder Leertaste) markieren – die Reihenfolge der Auswahl bestimmt die Reihenfolge im Bericht
3. **„Fertig"**

Es können **bis zu 10 Fotos** gewählt werden; sie erscheinen **zwei pro Seite am Ende des Berichts** – jeweils mit Dateiname, Beschreibung und, sofern vorhanden, der Position. Auswählbar sind nur Bild-Anhänge.

![Screenshot: Seite „Bilddokumentation" im PDF-Einsatzbericht](/images/einsatzmanager/11_bericht_bilddokumentation_pdf.png)

### Erstellte Berichte

Jeder heruntergeladene, gedruckte oder per E-Mail versendete Einsatzbericht wird automatisch als PDF gespeichert und erscheint im Bereich „Anhänge" unter **„Erstellte Berichte"** – mit Datum, Größe und einer Zusammenfassung der enthaltenen Abschnitte (z. B. „Eigene Auswahl: Einsatzdaten, Einsatzprotokoll (3 Kategorien), 4 Bilder"). Gespeicherte Berichte können heruntergeladen und gelöscht werden.

---

## Reiter „Dokumente"

**Einsatzdetailseite → linke Spalte → Reiter „Dokumente"** *(nur sichtbar, wenn am Standort eine [Nextcloud](/connect/schnittstellen/nextcloud) verbunden ist)*

![Screenshot: Reiter „Dokumente" in der Einsatzdetailseite](/images/einsatzmanager/11_dokumente.png)

Der Reiter zeigt die **Dokumentenablage der Standort-Nextcloud** (ab dem eingestellten [Dokumenten-Stammordner](/connect/schnittstellen/nextcloud#dokumenten-stammordner)) – ideal, um im Einsatz schnell auf Objektpläne, Feuerwehrpläne oder Checklisten zuzugreifen.

- **Navigieren:** Ordner per Klick öffnen, über die Pfadleiste oder **„Zurück"** eine Ebene nach oben. Der zuletzt geöffnete Ordner bleibt pro Einsatz erhalten, auch beim Wechsel zwischen den Reitern.
- **Suchen:** Im Feld **„Diesen Ordner durchsuchen"** nach Dateinamen suchen (ab 2 Zeichen) – durchsucht den aktuellen Ordner und alle Unterordner. Unter jedem Treffer steht sein Ordnerpfad.
- **Öffnen:** Ein Klick auf eine Datei öffnet die Vorschau (PDF, Bilder, Videos, Office-Dokumente). Jede Datei lässt sich auch direkt herunterladen.

> Der Reiter „Dokumente" zeigt die Nextcloud-Dokumentenablage – die **Einsatzanhänge** selbst erscheinen dort nicht, sondern im Bereich „Anhänge".

### Dokument-Verweise

Verweise auf Nextcloud-Dokumente im **Infoboard** und in den **dynamischen Zusatzinformationen** werden als Button mit dem Dateinamen angezeigt und öffnen das Dokument direkt in der Vorschau. Ist am Standort keine Nextcloud verbunden, werden solche Verweise ausgeblendet.

---

## Fehlermeldungen

| Meldung | Ursache / Lösung |
|---|---|
| **„Speicher ist voll"** | Der Connect Storage der Organisation ist voll. Einen Organisationsadministrator informieren oder nicht mehr benötigte Anhänge löschen. Siehe [Wenn der Speicher voll ist](/connect/23_dateispeicher#wenn-der-speicher-voll-ist). |
| **„Ungültiger Dateityp"** | Der Dateityp wird nicht unterstützt (siehe oben). |
| **„Standort konnte nicht ermittelt werden"** | Der Browser hat keinen Zugriff auf den Gerätestandort – Standortfreigabe im Browser erlauben oder Pin manuell setzen. |
| **„Für diesen Standort ist keine Nextcloud-Verbindung eingerichtet"** | Im Connect Portal unter Schnittstellen → Nextcloud eine Nextcloud verbinden. |
| **„Dokument nicht gefunden"** | Das verlinkte Dokument wurde in der Nextcloud verschoben, umbenannt oder gelöscht. |
