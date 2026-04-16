---
title: Android-Systemeinstellungen für Alarmierung
description: Schritt-für-Schritt-Anleitung zur Konfiguration von Android-Smartphones für zuverlässige Alarme der EinsatzApp – Benachrichtigungen, DND, Akkuoptimierung und Benachrichtigungskanäle
---

# Android-Systemeinstellungen für Alarmierung

Damit die EinsatzApp auf Android-Smartphones **zuverlässig alarmiert** – auch bei stummgeschaltetem Gerät oder aktivem „Bitte nicht stören"-Modus – müssen folgende Einstellungen vorgenommen werden.

> **Betrifft:** Android-Smartphones ab Android 8.0  
> **Hinweis:** Menübezeichnungen können je nach Hersteller (Samsung, Google Pixel, Xiaomi, etc.) leicht abweichen.

---

## Übersicht: Was muss eingestellt werden?

| Schritt | Einstellung | Wichtigkeit |
|---|---|---|
| 1 | Benachrichtigungen aktivieren | Pflicht |
| 2 | Benachrichtigungskanäle konfigurieren | Pflicht |
| 3 | „Bitte nicht stören" Zugriff erlauben | Pflicht für „Immer laut" |
| 4 | Akkuoptimierung / Hintergrundnutzung | Pflicht |
| 5 | App-Verhalten bei Nichtnutzung deaktivieren | Pflicht (Android 14+) |
| 6 | Autostart erlauben | Empfohlen (Samsung, Xiaomi) |
| 7 | Hintergrundaktivität erlauben | Empfohlen |
| 8 | Benachrichtigungen auf Sperrbildschirm | Empfohlen |

---

## Schritt 1: Benachrichtigungen aktivieren

1. **Einstellungen** auf dem Gerät öffnen.
2. **„Apps"** oder **„Anwendungen"** antippen.
3. **„EinsatzApp"** in der Liste suchen und antippen.
4. Auf **„Benachrichtigungen"** tippen.
5. **„Alle Benachrichtigungen"** auf **Ein** stellen.

![Screenshot: Android Benachrichtigungseinstellungen](/images/einsatzapp/12_android_notifications.png)

**Alternativ:** Auf dem Homescreen die EinsatzApp **lang drücken** → **„App-Info"** → **„Benachrichtigungen"**.

---

## Schritt 2: Benachrichtigungskanäle konfigurieren

Die EinsatzApp verwendet drei separate **Benachrichtigungskanäle**. Jeder muss korrekt eingestellt sein:

1. **Einstellungen → Apps → EinsatzApp → Benachrichtigungen** öffnen.
2. Alle drei Kanäle prüfen:

| Kanalname | Priorität | Verwendung |
|---|---|---|
| **Alarm (Immer laut)** | Höchste | Modus „Immer laut" – ignoriert Stummschaltung und DND |
| **Alarm (Normal)** | Hoch | Normaler Alarmton |
| **Alarm (Lautlos)** | Mittel | Stille Benachrichtigung, kein Ton |

### Kanal „Alarm (Immer laut)" konfigurieren:

1. Auf den Kanal **„Alarm (Immer laut)"** tippen.
2. Sicherstellen:
   - **Benachrichtigungen anzeigen** → Ein
   - **Ton** → Der gewählte Alarmton ist eingestellt (nicht „Lautlos")
   - **Vibration** → Ein (empfohlen)
   - **Sperrbildschirm** → „Gesamten Inhalt von Benachrichtigungen anzeigen"
   - **„Bitte nicht stören" ignorieren** → Ein

![Screenshot: Kanal Immer laut – Einstellungen oben](/images/einsatzapp/12_android_channel_immer_laut_1.png)

![Screenshot: Kanal Immer laut – Einstellungen unten](/images/einsatzapp/12_android_channel_immer_laut_2.png)

![Screenshot: Kanal Immer laut – Sperrbildschirm-Option](/images/einsatzapp/12_android_channel_immer_laut_3.png)

> **Hinweis:** Wenn du in der EinsatzApp den Alarmton wechselst, wird automatisch ein neuer Benachrichtigungskanal erstellt. Alte Kanäle können in diesen Einstellungen gelöscht werden.

---

## Schritt 3: „Bitte nicht stören"-Zugriff erlauben

Damit die EinsatzApp im Modus **„Immer laut"** auch bei aktivem „Bitte nicht stören" alarmieren kann, muss der App der DND-Zugriff gewährt werden.

### Android-Version bis 13:

1. **Einstellungen → Apps → EinsatzApp → Berechtigungen** öffnen.
2. Oder: **Einstellungen → Töne & Vibration → „Bitte nicht stören"** (je nach Gerät variiert der Pfad).
3. Auf **„Zugriff auf „Nicht stören""** oder **„DND-Zugriff"** tippen.
4. **EinsatzApp** suchen und **aktivieren**.

### Android 14+:

1. **Einstellungen → Benachrichtigungen → „Bitte nicht stören"** öffnen.
2. Auf **„Apps"** tippen.
3. **EinsatzApp** antippen.
4. **„Zugriff erlauben"** aktivieren.

![Screenshot: DND-Zugriff für EinsatzApp erlauben](/images/einsatzapp/12_android_dnd_access.png)

**Direktlink aus der App:**  
In der EinsatzApp unter **Einstellungen → Alarmeinstellungen** auf den Button **„DND-Einstellungen"** tippen. Die App öffnet direkt die entsprechenden Android-Einstellungen.

---

## Schritt 4: Akkuoptimierung deaktivieren

Android schränkt Apps im Hintergrund ein, um Akku zu sparen. Dies kann dazu führen, dass die EinsatzApp keine Push-Nachrichten mehr empfängt. Deswegen muss die Akkuoptimierung für die EinsatzApp **deaktiviert** werden.

### Android 14+ (Google Pixel):

1. **Einstellungen → Apps → EinsatzApp** öffnen.
2. Auf **„Akkunutzung der App"** tippen.
3. **„Hintergrundnutzung zulassen"** → **„Uneingeschränkt"** auswählen.

![Screenshot: Akkunutzung der App](/images/einsatzapp/12_android_battery_optimization_1.png)

![Screenshot: Hintergrundnutzung – Uneingeschränkt](/images/einsatzapp/12_android_battery_optimization_2.png)

### Android (allgemein):

1. **Einstellungen → Apps → EinsatzApp** öffnen.
2. Auf **„Akku"** tippen.
3. **„Nicht eingeschränkt"** oder **„Keine Einschränkungen"** auswählen (nicht „Optimiert").

### Alternativ (alle Apps):

1. **Einstellungen → Akku → Akkuoptimierung** öffnen.
2. Dropdown auf **„Alle Apps"** stellen.
3. **EinsatzApp** suchen und auf **„Nicht optimieren"** stellen.

### Samsung-Geräte:

1. **Einstellungen → Gerätewartung → Akku** öffnen.
2. Auf **„Hintergrundnutzungslimits"** tippen.
3. Sicherstellen, dass die EinsatzApp **nicht** in der Liste der eingeschränkten Apps ist.

---

## Schritt 5: App-Verhalten bei Nichtnutzung deaktivieren (Android 14+)

Ab Android 14 kann das System automatisch Berechtigungen entziehen, Benachrichtigungen stoppen und die App archivieren, wenn sie längere Zeit nicht aktiv geöffnet wurde. Diese Option muss für die EinsatzApp **deaktiviert** sein.

### Über App-Berechtigungen:

1. **Einstellungen → Apps → EinsatzApp → Berechtigungen** öffnen.
2. Ganz nach unten scrollen zu **„Nicht verwendete App-Einstellungen"**.
3. **„App-Verhalten bei Nichtnutzung verwalten"** → **Aus**.

![Screenshot: App-Berechtigungen – Nichtnutzung 1](/images/einsatzapp/12_android_nichtnutzung_1.png)

![Screenshot: App-Berechtigungen – Nichtnutzung 2](/images/einsatzapp/12_android_nichtnutzung_2.png)

### Alternativ über App-Info:

1. **Einstellungen → Apps → EinsatzApp** öffnen (App-Info Übersicht).
2. Ganz nach unten scrollen zu **„App bei Nichtnutzung pausieren"** → **Aus**.

![Screenshot: App-Info – App bei Nichtnutzung pausieren](/images/einsatzapp/12_android_nichtnutzung_app_info.png)

> **Warum ist das wichtig?** Wird die EinsatzApp im Einsatzdienst nicht täglich aktiv geöffnet, stuft Android sie als „nicht genutzt" ein und entzieht ihr automatisch die Benachrichtigungsberechtigung – der Alarm käme dann nicht mehr an.

---

## Schritt 6: Autostart erlauben (Samsung, Xiaomi, Huawei)

Einige Hersteller verhindern, dass Apps nach einem Neustart automatisch starten. Für Hintergrundempfang muss die EinsatzApp als Autostart-App eingetragen werden.

### Samsung:

1. **Einstellungen → Apps → EinsatzApp** öffnen.
2. Auf **„Akku"** tippen.
3. **„Autostart zulassen"** aktivieren.

### Xiaomi (MIUI):

1. **Einstellungen → Apps → Apps verwalten → EinsatzApp** öffnen.
2. **„Autostart"** aktivieren.
3. Unter **„Sparmaßnahmen"**: **„Keine Einschränkungen"** wählen.

### Huawei (EMUI):

1. **Einstellungen → Apps → Apps → EinsatzApp** öffnen.
2. **„Autostart"** aktivieren.

---

## Schritt 7: Hintergrundaktivität erlauben

### Android allgemein:

1. **Einstellungen → Apps → EinsatzApp → Daten** öffnen.
2. **„Hintergrunddaten"** aktivieren.

### Samsung DeX / Energiesparmodus:

Wenn der Energiesparmodus aktiv ist, können Hintergrundaktivitäten eingeschränkt sein. Deaktiviere den Energiesparmodus für den normalen Betrieb oder trage die EinsatzApp als Ausnahme ein.

---

## Schritt 8: Benachrichtigungen auf dem Sperrbildschirm

1. **Einstellungen → Apps → EinsatzApp → Benachrichtigungen** öffnen.
2. Sicherstellen, dass **„Auf Sperrbildschirm anzeigen"** aktiviert ist.
3. **„Vertrauliche Inhalte anzeigen"** aktivieren, damit Stichwort und Adresse sichtbar sind.

---

## Häufige Probleme & Lösungen

### Kein Ton bei eingehendem Alarm

- ✅ Alarm-Modus in der App auf „Immer laut"? (Flammen-Symbol in der Menüleiste → Schnellaktionen)
- ✅ DND-Zugriff erlaubt? (Schritt 3)
- ✅ Benachrichtigungskanal „Alarm (Immer laut)" korrekt konfiguriert? (Schritt 2)
- ✅ Systemlautstärke für Benachrichtigungen erhöht?

### Kein Alarm im Hintergrund / nach längerem Nichtbenutzen

- ✅ Akkuoptimierung deaktiviert? (Schritt 4)
- ✅ App-Verhalten bei Nichtnutzung deaktiviert? (Schritt 5, Android 14+)
- ✅ Autostart erlaubt? (Schritt 6, Samsung/Xiaomi)
- ✅ Hintergrunddaten erlaubt? (Schritt 7)

### Alarm erscheint nicht auf dem Sperrbildschirm

- ✅ Sperrbildschirm-Benachrichtigungen aktiviert? (Schritt 8)

### Benachrichtigungskanal zeigt falschen Ton

- ✅ In der EinsatzApp den Alarmton neu auswählen – dies erstellt einen neuen Kanal mit korrektem Ton.
- ✅ Alten Kanal in den Android-Einstellungen löschen.

### Berechtigungsübersicht in der App zeigt Fehler

1. **Seitenmenü → Einstellungen → Alarmeinstellungen → Berechtigungsübersicht** öffnen.
2. Auf den roten Eintrag tippen – die App öffnet direkt die entsprechenden Android-Einstellungen.

---

## Alarmierung testen

Um zu prüfen, ob alle Einstellungen korrekt sind, kann direkt aus der App ein Testalarm ausgelöst werden.

**Seitenmenü → Einstellungen → Alarmierungseinstellungen → „Testalarm senden"**

![Screenshot: Alarmierungseinstellungen](/images/einsatzapp/11_alarmierungseinstellungen.png)

Nach dem Tippen auf **„Testalarm senden"** erscheint ein Bestätigungsdialog:

![Screenshot: Testalarm-Dialog](/images/einsatzapp/11_testalarm_dialog.png)

Nach Bestätigung wird eine Push-Benachrichtigung an alle angemeldeten Geräte des Accounts gesendet – mit ca. 10 Sekunden Verzögerung. Die App sollte dazu geschlossen sein.

> **Wichtig:** Es wird kein Einsatz erzeugt. Der Testalarm dient ausschließlich dazu, die Push-Zustellung und den Alarmton zu prüfen.
