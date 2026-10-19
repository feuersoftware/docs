---
title: Anhänge überall – mit Connect Storage oder eigener Nextcloud
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-10-19
description: Connect bekommt einen neuen Dateispeicher. Anhänge an News und Termine, Einsatzfotos mit Standort auf der Karte, Bilddokumentation im Einsatzbericht und Nextcloud-Dokumente direkt im Einsatz – gespeichert im Connect Storage oder in der eigenen Nextcloud.
image: /images/blog/dateispeicher-nextcloud-anhaenge.jpg
minRead: 6
navigation: false
---

Dateien spielen im Feuerwehralltag eine immer größere Rolle: Fotos von der Einsatzstelle, Objektpläne, Dienstpläne, Checklisten. Mit dem neuen **Dateispeicher** bekommt Connect dafür eine gemeinsame Grundlage – und eine ganze Reihe neuer Funktionen im **Connect Portal** und im **EinsatzManager**.

::note
**EinsatzApp und EinsatzTablet:** Die Anpassungen für EinsatzApp und EinsatzTablet sind gerade noch in Arbeit und werden in Kürze per App-Update zur Verfügung gestellt. Bis dahin sind die neuen Funktionen im Connect Portal und im EinsatzManager nutzbar.
::

Hier der Überblick für alle Administratoren.

## Zwei Speicher zur Wahl

Alle Dateien landen jetzt in einem von zwei Speichern:

- **Connect Storage** – der Standard-Dateispeicher von Connect, für jede Organisation automatisch aktiv. Ein Grundkontingent ist im Lizenzumfang enthalten (500 MB + 500 MB je volle 25 lizenzierte Benutzer), zusätzlicher Speicher kann in Einheiten zu **25 GB für 5 Lizenzpunkte pro Jahr** direkt im Portal gebucht werden.
- **Eigene Nextcloud** – wer bereits eine Nextcloud betreibt, kann sie pro Standort anbinden. Dateien liegen dann auf dem eigenen Server und zählen nicht zum Connect-Kontingent. Die Anbindung ist kostenlos.

Pro Standort lässt sich für jede Kategorie – **Mängelmeldungen, Einsätze, News, Termine und Monitor-Dateien** – festlegen, wo die Dateien gespeichert werden. So können z. B. speicherintensive Einsatzfotos in die eigene Nextcloud gehen, während alles andere im Connect Storage bleibt. Ohne weitere Einrichtung landet alles automatisch im Connect Storage.

![Screenshot: Speicherzuordnung je Kategorie in der Nextcloud-Schnittstelle](/images/connect/23_nextcloud_standort.png)

Weitere Details: [Dateispeicher & Anhänge](/connect/23_dateispeicher)

---

## Nextcloud in wenigen Klicks verbinden

Unter **Standort → Schnittstellen → Nextcloud** genügt die Server-URL: Connect öffnet die Anmeldeseite der Nextcloud in einem neuen Tab, dort wird wie gewohnt angemeldet – fertig. Ein Passwort muss in Connect nicht eingegeben werden, die Nextcloud stellt automatisch ein eigenes App-Passwort aus. Connect prüft die Verbindung jede Nacht und informiert die Standortadministratoren per E-Mail, falls etwas nicht stimmt.

![Screenshot: Nextcloud verbinden – nur die Server-URL wird benötigt](/images/connect/23_nextcloud_verbinden.png)

Voraussetzung ist eine Nextcloud, die aus dem Internet über `https://` erreichbar ist.

Weitere Details: [Schnittstellen: Nextcloud](/connect/schnittstellen/nextcloud)

---

## Anhänge an News und Termine

News und Termine können jetzt **Dateianhänge** enthalten – etwa den Dienstplan als PDF, eine Anfahrtsskizze oder Fotos. Anhänge werden direkt beim Erstellen hinzugefügt oder später ergänzt und lassen sich im Portal in der Vorschau öffnen.

![Screenshot: News mit Anhang im Connect Portal](/images/connect/08_news_anhaenge.png)

Weitere Details: [News & Termine – Anhänge](/connect/08_news_und_termine#anhänge)

---

## Einsatzfotos mit Standort – direkt auf der Karte

Im **EinsatzManager** und im Portal lassen sich zu jedem Einsatz Fotos und Dateien hochladen. Das Besondere: Jeder Anhang kann einen **Standort** bekommen. Fotos mit GPS-Daten übernehmen ihre Position automatisch, alternativ wird der Pin auf der Karte gesetzt oder der aktuelle Gerätestandort übernommen. Im EinsatzManager geht es sogar direkt per Rechtsklick auf die Einsatzkarte: **„Anhang an dieser Position hinzufügen"**.

![Screenshot: Anhang mit Standort im EinsatzManager hinzufügen](/images/einsatzmanager/11_anhang_hinzufuegen.png)

Auf der Einsatzkarte erscheinen die Fotos als orange Kamera-Pins. Ein Klick öffnet die Vorschau, dicht beieinander liegende Fotos werden zusammengefasst und lassen sich als Diashow durchblättern.

![Screenshot: Einsatzfoto als Pin auf der Karte und im Einsatzprotokoll](/images/einsatzmanager/11_anhaenge_karte_protokoll.png)

Weitere Details: [EinsatzManager: Anhänge & Dokumente](/einsatzmanager/11_anhaenge_und_dokumente)

---

## Fotos im Einsatzprotokoll und im Einsatzbericht

Jedes hochgeladene Foto wird automatisch im **Einsatzprotokoll** vermerkt – mit Vorschaubild und direktem Link. So ist die Bilddokumentation im zeitlichen Ablauf des Einsatzes nachvollziehbar.

Für den **Einsatzbericht** gibt es den neuen Abschnitt **„Bilddokumentation"**: Bis zu 10 Fotos werden ausgewählt und erscheinen zwei pro Seite am Ende des PDFs. Außerdem lassen sich die Berichtsabschnitte jetzt direkt per Kachel ein- und ausschließen, und jeder erstellte Bericht wird automatisch beim Einsatz gespeichert.

![Screenshot: Berichtsabschnitte mit Kachel „Bilddokumentation"](/images/einsatzmanager/11_bilddokumentation.png)

Weitere Details: [Einsätze – Berichtsabschnitte und Bilddokumentation](/connect/07_einsaetze#berichtsabschnitte-und-bilddokumentation)

---

## Dokumente aus der Nextcloud im Einsatz

Ist eine Nextcloud verbunden, zeigt der EinsatzManager in der Einsatzdetailseite den neuen Reiter **„Dokumente"**: ein Dateibrowser für die Dokumentenablage des Standorts – mit Ordnernavigation, Suche über alle Unterordner und Vorschau für PDFs, Bilder und Office-Dokumente. Objektpläne oder Checklisten sind damit im Einsatz nur einen Klick entfernt.

![Screenshot: Reiter „Dokumente" im EinsatzManager](/images/einsatzmanager/11_dokumente.png)

Welcher Ordner der Nextcloud als Dokumentenablage gilt, wird über den **Dokumenten-Stammordner** in der Nextcloud-Schnittstelle festgelegt.

---

## Nextcloud-Dokumente im Infoboard verlinken

Im **Infoboard** und in den **dynamischen Zusatzinformationen** lassen sich Nextcloud-Dokumente jetzt bequem über einen Dateiauswahl-Dialog mit Suche verlinken – statt den Pfad von Hand einzutippen. Im Portal und im EinsatzManager öffnet ein Klick auf den Eintrag das Dokument direkt in der Vorschau.

![Screenshot: Infoboard-Eintrag mit Nextcloud-Referenz](/images/connect/09_infoboard_nextcloud_referenz.png)

Weitere Details: [Infoboard – Nextcloud-Dokumente verlinken](/connect/09_infoboard#nextcloud-dokumente-verlinken)

---

## Mängelmeldungen: Vorschau und einfachere Bedienung

Anhänge an Mängelmeldungen nutzen jetzt ebenfalls den neuen Dateispeicher: mit Vorschaubildern, Vorschau direkt im Portal und der Möglichkeit, Anhänge in der Detailansicht hinzuzufügen, ohne in den Bearbeitungsmodus zu wechseln.

Weitere Details: [Mängelmeldungen – Anhänge](/connect/10_defektberichte#anhänge)

---

## Speicher im Blick behalten

Unter **Organisationseinstellungen → Connect Storage** sehen Organisationsadministratoren jederzeit, wie viel Speicher belegt ist. Wird es knapp, erscheint ab 90 % Belegung ein Hinweis im Portal, und die Organisationsadministratoren werden per E-Mail informiert.

Der neue Assistent **„Speicher aufräumen"** schlägt Dateien vor, die nicht mehr benötigt werden – zuerst Anhänge vergangener News und Termine sowie erledigter Mängelmeldungen, dann Fotos älterer Einsätze – und zeigt vorab, wie viel Platz frei wird.

![Screenshot: Assistent „Speicher aufräumen"](/images/connect/23_speicher_aufraeumen.png)

> **Gut zu wissen:** Bereits vorhandene Anhänge von Mängelmeldungen sowie Monitor-Dateien (Logo, Hintergrund, Töne) liegen ab sofort ebenfalls im Connect Storage und zählen zum Kontingent.

---

## Was Administratoren jetzt tun sollten

1. **Speichernutzung prüfen** unter Organisationseinstellungen → Connect Storage
2. **Nextcloud vorhanden?** Dann unter Standort → Schnittstellen → Nextcloud verbinden und die Speicherzuordnung festlegen
3. **Sichtbarkeit „Einsatzanhänge"** in den Gruppeneinstellungen prüfen – sie legt fest, wer Einsatzfotos sehen darf. Gruppen, die bisher Einsatznachrichten und Einsatzprotokoll sehen durften, haben sie automatisch erhalten.

::note
Fragen zum Update oder zur Einrichtung? Unser Support-Team hilft gerne weiter.
::
