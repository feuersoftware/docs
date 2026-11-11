---
title: Android 17 – neue EinsatzApp-Version behebt das Alarmierungsproblem
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-11-11
description: Unter Android 17 blieben Alarmierungen vieler Alarm-Apps stumm – auch bei DE-Alarm und KATRETTER. Die neue Version der EinsatzApp behebt das Problem und steht ab sofort für alle im Play Store bereit.
image: /images/blog/einsatzapp-android-17-update.jpg
minRead: 3
navigation: false
---

Gute Nachrichten für alle, die die EinsatzApp auf einem Android-Gerät nutzen: **Die neue Version der EinsatzApp behebt das Alarmierungsproblem unter Android 17** und steht ab sofort für alle als Update im [Google Play Store](https://play.google.com/store/apps/details?id=com.feuersoftware.einsatzapp) bereit.

Ein großes Dankeschön an alle, die die [Beta getestet](/blog/android-17-alarmierung-beta) und uns Rückmeldung gegeben haben – das hat uns sehr geholfen.

---

## Was war das Problem?

Seit dem Update auf **Android 17** kamen Alarmierungen auf vielen Geräten **ohne Ton** an – vor allem, wenn das Telefon auf lautlos stand. Die Alarmierung selbst erreichte das Gerät, ein akustisches Signal blieb aber aus.

Ursache ist eine neue Schutzfunktion, die Google mit Android 17 eingeführt hat: das sogenannte **„Background Audio Hardening"**. Apps, die im Hintergrund laufen, dürfen seitdem weder selbst Töne abspielen noch Lautstärke oder Klingelmodus des Geräts umstellen. Android ignoriert solche Versuche ohne Fehlermeldung. Google will damit unerwünschte Tonausgaben aus dem Hintergrund verhindern – die Änderung richtet sich nicht gegen Alarmierungs-Apps, trifft sie aber direkt. Denn genau so haben sie bisher dafür gesorgt, dass ein Alarm auch im Lautlos-Modus laut klingelt.

### Nicht nur die EinsatzApp betroffen

Das Problem betrifft **zahlreiche Warn- und Alarmierungs-Apps verschiedener Anbieter** – unter anderem auch **DE-Alarm** und **KATRETTER**. Die Leitstelle Lausitz hat dazu eine ausführliche Störungsmeldung veröffentlicht: [Störungsmeldung: Alarmierung über KatRetter und DE-Alarm auf Android 17 lautlos](https://www.leitstelle-lausitz.de/stoerungsmeldung-alarmierung-ueber-katretter-und-de-alarm-auf-android-17-lautlos/)

Geräte mit älteren Android-Versionen und iPhones waren nicht betroffen.

---

## Unsere Lösung

Wir haben eine Lösung gefunden, mit der die EinsatzApp auch unter Android 17 wieder zuverlässig und laut alarmiert. Die Korrektur steckt in der neuen Version der EinsatzApp, die ab sofort für alle im Play Store bereitsteht.

---

## Was ihr jetzt tun solltet

1. **EinsatzApp aktualisieren:** Im [Play Store](https://play.google.com/store/apps/details?id=com.feuersoftware.einsatzapp) auf die neueste Version aktualisieren und die App **einmal öffnen**.
2. **Hinweis bestätigen:** Auf Geräten mit Android 17 erscheint einmalig der Hinweis **„Alarmierung für Android 17 überarbeitet"**. Über **„Berechtigungen prüfen"** gelangt ihr direkt zu den nötigen Einstellungen.
3. **„Wecker & Erinnerungen" erlauben:** Diese Berechtigung unbedingt erteilen. Ihr findet sie auch jederzeit unter **Seitenmenü → Einstellungen → Alarmierungseinstellungen → „Berechtigungsübersicht"**.
4. **Nicht-Stören-Modus prüfen:** Wer „Bitte nicht stören" nutzt, sollte darin Wecker zulassen („Nur Wecker" oder „Wecker" bei den Ausnahmen). Bei **„Keine Unterbrechungen"** bleibt auch ein Einsatzalarm stumm.
5. **Testalarm auslösen:** Telefon auf lautlos stellen und unter **Seitenmenü → Einstellungen → Alarmierungseinstellungen → „Testalarm senden"** prüfen, ob der Alarm laut ankommt.

Weitere Hinweise zu den Android-Einstellungen: [Android-Systemeinstellungen für Alarmierung](/einsatzapp/12_android_systemeinstellungen)

::warning
Eine Alarmierungs-App ergänzt die Alarmierung über den Meldeempfänger, ersetzt sie aber nicht. Bitte führt euren Meldeempfänger weiterhin mit.
::

---

## Ihr habt die Beta genutzt?

Wer am Beta-Programm teilgenommen hat, bekommt die Korrektur bereits. Ihr könnt die Beta jetzt über den [Beta-Link](https://play.google.com/apps/testing/com.feuersoftware.einsatzapp) mit **„Programm verlassen"** beenden und erhaltet anschließend wieder die regulären Updates.

::note
Kommt der Alarm trotz Update nicht laut an? Meldet euch über **Seitenmenü → „Fehler melden"** in der EinsatzApp oder per E-Mail an [info@feuersoftware.com](mailto:info@feuersoftware.com) – unser Support-Team hilft gerne weiter.
::
