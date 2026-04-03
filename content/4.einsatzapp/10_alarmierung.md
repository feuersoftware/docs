---
title: Alarmierung & Alarmeinstellungen
description: Alarmton, Lautstärke und Alarm-Modus in der EinsatzApp konfigurieren für zuverlässige Alarmierung
---

# Alarmierung & Alarmeinstellungen

Damit die EinsatzApp im Ernstfall zuverlässig alarmiert, müssen sowohl die **App-internen Alarmeinstellungen** als auch die **Systemberechtigungen** auf deinem Gerät korrekt konfiguriert sein.

---

## Alarm-Modi

Die EinsatzApp kennt drei Alarm-Modi, die du jederzeit über den **Flammen-FAB → Schnellaktionen** wechseln kannst:

| Modus | Symbol | Verhalten |
|---|---|---|
| **Lautlos** | 🔕 | Kein Alarmton. Du erhältst nur eine stille Benachrichtigung. |
| **Normal** | 🔔 | Der Alarmton wird abgespielt. Stummschaltung des Geräts wird respektiert – kein Ton bei stummem Telefon. |
| **Immer laut** | 📢 | Der Alarmton wird **immer** abgespielt, auch wenn das Gerät stummgeschaltet ist oder „Bitte nicht stören" aktiv ist. Ideal für den Nacht- und Ruhemodus. |

> **Empfehlung:** Für Einsatzkräfte im aktiven Dienst sollte der Modus **„Immer laut"** gewählt werden, um auch nachts oder bei deaktivierten Tönen sicher alarmiert zu werden.

Der aktuell aktive Modus wird als kleines Symbol **unterhalb des Flammen-FAB** in der Navigationsleiste angezeigt.

---

## Alarmton auswählen

1. **Seitenmenü → Einstellungen → Alarmeinstellungen** öffnen.
2. Auf das Dropdown **„Alarmton"** tippen.
3. Aus über 30 verfügbaren Tönen auswählen:
   - Pager 1–5
   - Diverse Sirenen und Melder
   - Spezielle Signaltöne (Navy, Schiffsalarm, Retro, Emergency, u. v. m.)
4. Mit dem **Play-Button** neben der Auswahl den Ton vorab anhören.
5. Auswahl wird automatisch gespeichert.

> **Hinweis für Android:** Wenn der Alarmton geändert wird, muss ein neuer Android-Benachrichtigungskanal erstellt werden (technische Einschränkung von Android). Der alte Kanal bleibt als „veraltet" in den Systemeinstellungen sichtbar und kann dort manuell gelöscht werden.

---

## Lautstärke einstellen

Im Bereich **Alarmeinstellungen** den Schieberegler **„Lautstärke"** auf den gewünschten Wert zwischen 10 % und 100 % setzen.

> Bei Modus **„Immer laut"** wird diese Lautstärke auch dann verwendet, wenn das Gerät stummgeschaltet ist.

---

## Test-Alarm senden

Mit dem Button **„Test-Alarm senden"** in den Alarmeinstellungen kannst du überprüfen, ob die Alarmierung funktioniert:
- Die App sendet einen simulierten Einsatz-Alarm an dein Gerät
- Ton, Vibration und Benachrichtigung werden wie bei einem echten Einsatz ausgelöst
- Der Test-Alarm erscheint auch in der Einsatzliste (als Testeinsatz)

---

## Berechtigungsübersicht

Die **Berechtigungsübersicht** (in den Alarmeinstellungen) zeigt den Status aller für die Alarmierung benötigten Berechtigungen:

| Berechtigung | Bedeutung |
|---|---|
| Benachrichtigungen | Grundvoraussetzung für jeden Alarm |
| Kritische Benachrichtigungen *(iOS)* | Notwendig für Alarm trotz Stummschaltung/Fokus |
| „Bitte nicht stören" Zugriff *(Android)* | Notwendig für Alarmton trotz DND |
| Exakte Weckzeiten *(Android 12+)* | Für zuverlässige Hintergrundverarbeitung |
| Akkuoptimierung deaktiviert *(Android)* | Verhindert, dass das System die App im Hintergrund beendet |

Wenn eine Berechtigung fehlt, wird sie rot markiert und ein direkter Link zu den entsprechenden Systemeinstellungen angezeigt.

---

## Systemeinstellungen für zuverlässige Alarmierung

Die App allein reicht nicht aus – das Betriebssystem muss ebenfalls korrekt konfiguriert sein. Ausführliche Anleitungen für dein Gerät findest du hier:

- [iOS-Systemeinstellungen für Alarmierung](/einsatzapp/ios-systemeinstellungen)
- [Android-Systemeinstellungen für Alarmierung](/einsatzapp/android-systemeinstellungen)
