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
| 4 | Akkuoptimierung deaktivieren | Pflicht |
| 5 | Autostart erlauben | Empfohlen (Samsung, Xiaomi) |
| 6 | Hintergrundaktivität erlauben | Empfohlen |

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
   - **Benachrichtigungen** → Ein
   - **Ton** → Der gewählte Alarmton ist eingestellt
   - **Vibration** → Ein (empfohlen)
   - **„Bitte nicht stören" überschreiben** → Ein *(falls sichtbar)*
   - **Wichtigkeit** / **Priorität** → **Dringend** oder **Hoch**

![Screenshot: Benachrichtigungskanal Einstellungen](/images/einsatzapp/12_android_channel_settings.png)

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

### Android (allgemein):

1. **Einstellungen → Apps → EinsatzApp** öffnen.
2. Auf **„Akku"** tippen.
3. **„Nicht eingeschränkt"** oder **„Keine Einschränkungen"** auswählen (nicht „Optimiert").

![Screenshot: Akkuoptimierung deaktivieren](/images/einsatzapp/12_android_battery_optimization.png)

### Alternativ (alle Apps):

1. **Einstellungen → Akku → Akkuoptimierung** öffnen.
2. Dropdown auf **„Alle Apps"** stellen.
3. **EinsatzApp** suchen und auf **„Nicht optimieren"** stellen.

### Samsung-Geräte:

1. **Einstellungen → Gerätewartung → Akku** öffnen.
2. Auf **„Hintergrundnutzungslimits"** tippen.
3. Sicherstellen, dass die EinsatzApp **nicht** in der Liste der eingeschränkten Apps ist.

---

## Schritt 5: Autostart erlauben (Samsung, Xiaomi, Huawei)

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

## Schritt 6: Hintergrundaktivität erlauben

### Android allgemein:

1. **Einstellungen → Apps → EinsatzApp → Daten** öffnen.
2. **„Hintergrunddaten"** aktivieren.

### Samsung DeX / Energiesparmodus:

Wenn der Energiesparmodus aktiv ist, können Hintergrundaktivitäten eingeschränkt sein. Deaktiviere den Energiesparmodus für den normalen Betrieb oder trage die EinsatzApp als Ausnahme ein.

---

## Schritt 7: Benachrichtigungen auf dem Sperrbildschirm

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
- ✅ Autostart erlaubt? (Schritt 5, Samsung/Xiaomi)
- ✅ Hintergrunddaten erlaubt? (Schritt 6)

### Alarm erscheint nicht auf dem Sperrbildschirm

- ✅ Sperrbildschirm-Benachrichtigungen aktiviert? (Schritt 7)

### Benachrichtigungskanal zeigt falschen Ton

- ✅ In der EinsatzApp den Alarmton neu auswählen – dies erstellt einen neuen Kanal mit korrektem Ton.
- ✅ Alten Kanal in den Android-Einstellungen löschen.

### Berechtigungsübersicht in der App zeigt Fehler

1. **Seitenmenü → Einstellungen → Alarmeinstellungen → Berechtigungsübersicht** öffnen.
2. Auf den roten Eintrag tippen – die App öffnet direkt die entsprechenden Android-Einstellungen.
