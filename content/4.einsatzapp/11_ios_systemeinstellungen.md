---
title: iOS-Systemeinstellungen für Alarmierung
description: Schritt-für-Schritt-Anleitung zur Konfiguration von iPhone und iPad für zuverlässige Alarme der EinsatzApp – Benachrichtigungen, Fokus-Modi und Kritische Benachrichtigungen
---

# iOS-Systemeinstellungen für Alarmierung

Damit die EinsatzApp auf iPhone und iPad **zuverlässig alarmiert** – auch wenn das Gerät stummgeschaltet ist oder ein Fokus-Modus aktiv ist – müssen folgende Einstellungen vorgenommen werden.

> **Betrifft:** iPhone und iPad mit iOS 15 oder neuer

---

## Übersicht: Was muss eingestellt werden?

| Schritt | Einstellung | Wichtigkeit |
|---|---|---|
| 1 | Benachrichtigungen aktivieren | Pflicht |
| 2 | Kritische Benachrichtigungen erlauben | Pflicht für Lautlos/Fokus |
| 3 | Bannertyp auf „Dauerhaft" stellen | Empfohlen |
| 4 | Benachrichtigungen auf Sperrbildschirm aktivieren | Empfohlen |
| 5 | Fokus-Modi konfigurieren | Pflicht bei aktivem Fokus |
| 6 | Stummschalter-Verhalten prüfen | Empfohlen |

---

## Schritt 1: Benachrichtigungen aktivieren

1. **Einstellungen** öffnen (Zahnrad-App auf dem Homescreen).
2. Nach unten scrollen und auf **„EinsatzApp"** tippen.
3. Auf **„Mitteilungen"** tippen.
4. **„Mitteilungen erlauben"** auf **Ein** stellen.
5. Folgende Optionen aktivieren:
   - **Töne**
   - **Badges** (Zähler-Abzeichen auf dem App-Symbol)
   - **Banner**
   - **Auf dem Sperrbildschirm anzeigen**
   - **Im Mitteilungscenter anzeigen**

![Screenshot: iOS Benachrichtigungseinstellungen für EinsatzApp](/images/einsatzapp/11_ios_notifications.png)

---

## Schritt 2: Kritische Benachrichtigungen aktivieren

**Kritische Benachrichtigungen** sind der entscheidende Faktor: Sie werden zugestellt, auch wenn das Gerät stummgeschaltet ist oder ein Fokus-Modus aktiv ist.

1. **Einstellungen → EinsatzApp → Mitteilungen** öffnen (wie in Schritt 1).
2. **„Kritische Benachrichtigungen"** auf **Ein** stellen.

![Screenshot: Kritische Benachrichtigungen aktivieren](/images/einsatzapp/11_ios_critical_alerts.png)

> **Wichtig:** Wenn diese Option fehlt, prüfe, ob die EinsatzApp aktuell ist. Kritische Benachrichtigungen müssen von Apple für jede App einzeln genehmigt werden.

---

## Schritt 3: Bannertyp auf „Dauerhaft" stellen

Standardmäßig verschwinden Benachrichtigungsbanner nach einigen Sekunden. Damit Alarmmeldungen sichtbar bleiben, bis du sie bestätigst:

1. **Einstellungen → EinsatzApp → Mitteilungen** öffnen.
2. Auf **„Bannertyp"** tippen.
3. **„Dauerhaft"** auswählen (statt „Temporär").

![Screenshot: Bannertyp Dauerhaft](/images/einsatzapp/11_ios_banner_type.png)

---

## Schritt 4: Benachrichtigungen auf dem Sperrbildschirm

Damit Alarme auch auf dem gesperrten Bildschirm erscheinen:

1. **Einstellungen → EinsatzApp → Mitteilungen** öffnen.
2. **„Sperrbildschirm"** aktivieren.
3. Unter **„Vorschau anzeigen"**: **„Immer"** wählen, damit Stichwort und Adresse sichtbar sind.

---

## Schritt 5: Fokus-Modi konfigurieren (Nicht stören, Schlafen, etc.)

Fokus-Modi können Benachrichtigungen blockieren. Für jeden aktiven Fokus-Modus muss die EinsatzApp explizit erlaubt werden.

### Für jeden Fokus-Modus einzeln:

1. **Einstellungen → Fokus** öffnen.
2. Den gewünschten Fokus antippen (z. B. **„Nicht stören"**, **„Schlafen"**, **„Arbeit"**).
3. Auf **„Apps"** tippen (unter „Erlaubte Benachrichtigungen").
4. Auf **„App hinzufügen"** tippen.
5. **„EinsatzApp"** suchen und auswählen.
6. Tippe anschließend auf **„Fertig"**.

> **Tipp:** Wenn du **Kritische Benachrichtigungen** aktiviert hast (Schritt 2), kommen Alarme auch ohne diese Fokus-Ausnahme durch – allerdings ohne Ton bei manchen Fokus-Konfigurationen. Beide Einstellungen zusammen garantieren maximale Zuverlässigkeit.

### Fokus-Modi und Zeitpläne prüfen

1. **Einstellungen → Fokus** öffnen.
2. Prüfe, ob ein Fokus-Modus einen **automatischen Zeitplan** hat (z. B. nachts aktiv).
3. Falls ja: Sicherstellen, dass die EinsatzApp unter den erlaubten Apps eingetragen ist.

---

## Schritt 6: Stummschalter (Ring/Lautlos)

Beim iPhone gibt es einen physischen Schalter an der Seite:
- **Klingeln (nach oben):** Normale Töne
- **Lautlos (nach unten):** Normale Töne werden stummgeschaltet

**Mit aktivierten Kritischen Benachrichtigungen** kommen Alarme der EinsatzApp auch bei stummgeschaltetem Gerät mit Ton durch.

> Stelle sicher, dass der **Alarm-Modus** in der EinsatzApp auf **„Immer laut"** gestellt ist (Flammen-Symbol in der Menüleiste → Schnellaktionen), damit der Alarmton unabhängig vom Stummschalter abgespielt wird.

---

## Schritt 7: Hintergrund-App-Aktualisierung

Damit die App auch im Hintergrund Daten empfangen kann:

1. **Einstellungen → Allgemein → Hintergrundaktualisierung** öffnen.
2. **„Hintergrundaktualisierung"** aktivieren.
3. In der App-Liste **EinsatzApp** auf **Ein** stellen.

---

## Apple Watch

Wenn eine **Apple Watch** mit dem iPhone verbunden ist, wird der Alarmton bei eingehenden Benachrichtigungen **über die Apple Watch ausgegeben – nicht über das iPhone**. Die Watch gibt dabei einen Standard-Hinweiston aus; ein eigener Alarmton ist für die Apple Watch nicht wählbar.

> **Wichtig:** Dies gilt auch dann, wenn die Funktion **„Stummschaltung umgehen" (Kritische Mitteilungen)** aktiviert ist. Kritische Mitteilungen sorgen zwar dafür, dass das iPhone trotz Stummschaltung alarmiert – ist jedoch eine Apple Watch verbunden, übernimmt diese die Ausgabe mit dem Standard-Hinweiston.

### Apple Watch-Benachrichtigungen deaktivieren (empfohlen für Einsatzkräfte)

Damit der Alarmton wieder über das iPhone kommt:

1. Die **Watch App** auf dem iPhone öffnen.
2. Auf **„Mitteilungen"** tippen.
3. Nach unten scrollen und **„EinsatzApp"** antippen.
4. **„Mitteilungen aus"** auswählen.

Ab jetzt kommen alle EinsatzApp-Alarme wieder mit vollem Alarmton über das iPhone.

---

## Häufige Probleme & Lösungen

### Kein Ton bei eingehendem Alarm

- ✅ Kritische Benachrichtigungen aktiviert? (Schritt 2)
- ✅ Alarm-Modus in der App auf „Immer laut"? (Flammen-Symbol in der Menüleiste → Schnellaktionen)
- ✅ Lautstärke über die Seitentasten am iPhone erhöht?
- ✅ **Einstellungen → Töne & Haptik → „Klingelton und Hinweise"** auf maximale Lautstärke gestellt? Diese Einstellung begrenzt die maximale Alarmtonlautstärke – auch bei aktivierten Kritischen Benachrichtigungen.
- ✅ Apple Watch verbunden? → Benachrichtigungen in der Watch App für EinsatzApp deaktivieren (siehe oben)

### Alarm erscheint nicht auf dem Sperrbildschirm

- ✅ Einstellungen → EinsatzApp → Mitteilungen → Sperrbildschirm aktiviert? (Schritt 4)
- ✅ Vorschau auf „Immer" eingestellt?

### Kein Alarm bei aktivem Fokus-Modus

- ✅ EinsatzApp in den erlaubten Apps des Fokus eingetragen? (Schritt 5)
- ✅ Kritische Benachrichtigungen aktiviert? (Schritt 2)

### Berechtigungsübersicht in der App zeigt Fehler

1. **Seitenmenü → Einstellungen → Alarmeinstellungen → Berechtigungsübersicht** öffnen.
2. Auf den roten Eintrag tippen – die App öffnet direkt die passenden iOS-Einstellungen.

---

## Alarmierung testen

Um zu prüfen, ob alle Einstellungen korrekt sind, kann direkt aus der App ein Testalarm ausgelöst werden.

**Seitenmenü → Einstellungen → Alarmierungseinstellungen → „Testalarm senden"**

![Screenshot: Alarmierungseinstellungen](/images/einsatzapp/11_alarmierungseinstellungen.png)

Nach dem Tippen auf **„Testalarm senden"** erscheint ein Bestätigungsdialog:

![Screenshot: Testalarm-Dialog](/images/einsatzapp/11_testalarm_dialog.png)

Nach Bestätigung wird eine Push-Benachrichtigung an alle angemeldeten Geräte des Accounts gesendet – mit ca. 10 Sekunden Verzögerung. Die App sollte dazu geschlossen sein.

> **Wichtig:** Es wird kein Einsatz erzeugt. Der Testalarm dient ausschließlich dazu, die Push-Zustellung und den Alarmton zu prüfen.
