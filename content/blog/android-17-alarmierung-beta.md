---
title: Android 17 – Alarmierungsprobleme in der EinsatzApp und Beta zum Testen
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-11-05
description: Unter Android 17 kann die EinsatzApp Alarme ohne Ton oder gar nicht melden. Ursache ist eine Änderung von Google. Eine Korrektur steht als Beta bereit – wir suchen Testerinnen und Tester.
image: /images/blog/android-17-alarmierung-beta.jpg
minRead: 3
navigation: false
---

In den vergangenen Wochen haben uns mehrere Meldungen erreicht, dass die **EinsatzApp auf Android-Geräten Alarmierungen nicht mehr wie gewohnt meldet** – etwa ohne Ton, wenn das Telefon auf lautlos oder „Bitte nicht stören" steht, oder ganz ohne Push-Benachrichtigung.

## Was ist die Ursache?

Ursache ist eine **Änderung von Google am Benachrichtigungssystem der aktuellen Android-Version (Android 17)**. Sie betrifft nicht nur die EinsatzApp, sondern auch andere Alarmierungs-Apps. Betroffen sind Geräte, die bereits auf Android 17 aktualisiert wurden; iOS ist nicht betroffen.

Wir haben die EinsatzApp an die Änderungen angepasst. Die Korrektur steckt in der **aktuellen Beta-Version** der EinsatzApp, die über das Beta-Programm im Google Play Store verfügbar ist.

::warning
**Die Beta-Version ist nicht für den Produktiveinsatz gedacht.** Beta-Versionen können noch Fehler enthalten. Bitte nutzt sie nur zum Testen – idealerweise auf einem Gerät, auf das ihr euch im Ernstfall nicht als einzigen Alarmierungsweg verlasst.
::

---

## Wir brauchen euer Feedback

Bevor die Korrektur in die stabile Version übernommen wird, möchten wir sicherstellen, dass sie auf möglichst vielen Geräten zuverlässig funktioniert. Dabei sind wir auf eure Unterstützung angewiesen – besonders von allen, die bereits Android 17 nutzen.

### So nehmt ihr an der Beta teil

1. **Am Beta-Programm teilnehmen:** [play.google.com/apps/testing/com.feuersoftware.einsatzapp](https://play.google.com/apps/testing/com.feuersoftware.einsatzapp) öffnen, mit dem Google-Konto des Geräts anmelden und auf **„Tester werden"** tippen.

   Alternativ direkt im Play Store: **EinsatzApp öffnen → ganz nach unten scrollen → „Beta-Tester werden" → „Mitmachen"**.
2. **EinsatzApp aktualisieren:** Nach ein paar Minuten steht die Beta-Version im [Play Store](https://play.google.com/store/apps/details?id=com.feuersoftware.einsatzapp) als Update bereit. Aktualisieren und die App **einmal öffnen**.
3. **Testalarm auslösen:** Das Telefon auf **lautlos** stellen und in der App unter **Seitenmenü → Einstellungen → Alarmeinstellungen → „Test-Alarm senden"** einen Testalarm auslösen. Am besten zusätzlich mit aktivem „Bitte nicht stören" und bei gesperrtem Bildschirm testen.

### Android-Einstellungen prüfen

Nach dem Update auf Android 17 lohnt sich außerdem ein Blick in die Android-Einstellungen, ob für die EinsatzApp die Ausnahme für **„Bitte nicht stören"** und die **Benachrichtigungsberechtigungen** noch gesetzt sind. Systemupdates setzen diese Einstellungen teilweise zurück.

Schritt-für-Schritt-Anleitung: [Android-Systemeinstellungen für Alarmierung](/einsatzapp/12_android_systemeinstellungen)

### Feedback geben

Uns interessiert vor allem eins: **Hat die Alarmierung funktioniert?** Jede Rückmeldung hilft uns weiter – auch ein kurzes „Klappt".

Am einfachsten über **Seitenmenü → „Fehler melden"** in der EinsatzApp oder per E-Mail an [info@feuersoftware.com](mailto:info@feuersoftware.com). Bitte schreibt in die Nachricht, **ob die Alarmierung erfolgreich war**. Bei „Fehler melden" werden Gerätemodell und Android-Version automatisch mitgeschickt.

### Beta wieder verlassen

Wer die Beta nicht mehr nutzen möchte, kann sie jederzeit über denselben [Beta-Link](https://play.google.com/apps/testing/com.feuersoftware.einsatzapp) mit **„Programm verlassen"** beenden. Sobald die nächste stabile Version erscheint, wird die App wieder regulär aktualisiert.

---

Sobald die Korrektur ausreichend getestet ist, veröffentlichen wir sie in der stabilen Version der EinsatzApp und informieren euch hier im Blog.

::note
Vielen Dank fürs Testen! Bei Fragen hilft unser Support-Team gerne weiter.
::
