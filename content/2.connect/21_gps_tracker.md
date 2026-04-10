---
title: GPS Tracker
description: Fahrzeuge, Drohnen oder Einheiten mit Hardware-GPS-Trackern oder der Traccar App in Echtzeit orten und in Connect integrieren
---

# GPS Tracker

Fahrzeuge, Drohnen, Motorräder oder Einheiten (z. B. Fußtrupp) können als Fahrzeug in Connect angelegt und mit einem GPS Tracker in Echtzeit geortet werden. Die aktuelle Position wird live in der EinsatzApp, am EinsatzMonitor und im Connect Portal auf der Karte angezeigt.

GPS Tracker sind eine kostengünstige Lösung für Fahrzeuge, die **nicht** mit einem EinsatzTablet ausgestattet sind. Ist bereits ein EinsatzTablet im Fahrzeug verbaut, sendet dieses die Position automatisch – ein zusätzlicher GPS Tracker ist dann nicht sinnvoll.

Feuersoftware nutzt die Software **Traccar** für die GPS-Integration.

---

## Hardware-Tracker

### Unterstützte Geräte

Alle mit Traccar kompatiblen Geräte sind auf [traccar.org/devices](https://www.traccar.org/devices/) gelistet.

### Serveradresse

| Einstellung | Wert |
|---|---|
| **DNS** | `gps.feuersoftware.com` |
| **IP-Adresse** | `4.184.237.26` |
| **Ports** | 5001–5194 (je nach Gerätemodell, siehe traccar.org/devices) |

### Tracker in Connect anlegen

1. Im Connect Portal den entsprechenden **Standort** wählen
2. **Fahrzeuge** → das gewünschte Fahrzeug öffnen oder ein neues anlegen
3. GPS-Tracker-Einstellungen aktivieren
4. **Modell** des Trackers eintragen
5. **Geräte-ID** (IMEI) eintragen – steht auf dem Gerät oder in der Betriebsanleitung

Sobald der Tracker erfolgreich eine Position an den Traccar Server gesendet hat, wird diese im Bereich **„Status"** des Fahrzeugs angezeigt. Den Zeitstempel prüfen, um sicherzustellen, dass die Position regelmäßig aktualisiert wird.

---

## Traccar App

Neben Hardware-Trackern steht die **Traccar App** für Android und iOS zur Verfügung. Die App kann verwendet werden, um die aktuelle GPS-Position eines Geräts an Connect zu senden.

**Einrichtung in der App:**

| Einstellung | Wert |
|---|---|
| **Gerätekennung** | Eindeutige Kennung, z. B. die IMEI des Geräts |
| **Server URL** | `http://gps.feuersoftware.com:5055` |
| **Positionsgenauigkeit** | Nach Bedarf konfigurieren |
| **Frequenz** | Intervall in Sekunden (Standard: 300 s = 5 min) |

Die Gerätekennung muss in der App unter **„Gerätekennung"** vergeben **und** in Connect beim Fahrzeug unter **„Geräte-ID"** eingetragen werden. Als Modell kann **„Traccar"** eingetragen werden.

Über den Status-Button in der rechten oberen Ecke der App ist ein Logfile abrufbar.

---

## Wichtige Hinweise

- Übermittelte Positionen werden auf die **4. Nachkommastelle** gerundet. Positionsupdates, bei denen sich weder Latitude noch Longitude um mindestens diesen Wert unterscheiden, werden nicht verarbeitet (Spamschutz).
- Es werden nur Positionsupdates verarbeitet, deren **Zeitstempel innerhalb einer Minute** liegt, um das Verarbeiten alter Daten zu verhindern.

---

## Hardware-Tracker einrichten (Beispiel TK104)

> Die Konfiguration variiert je nach Modell. Die folgenden Schritte beziehen sich auf das Modell **TK104** von Incutex / GPSvision. Für andere Modelle bitte die jeweilige Betriebsanleitung hinzuziehen.

### Internetverbindung

Der GPS Tracker benötigt eine SIM-Karte mit Datenoption (2G reicht). Die Position wird über das Mobilfunknetz an den Traccar Server übertragen.

### SIM-Karte vorbereiten

Die SIM-PIN muss vor der Verwendung im Tracker entfernt werden:

**iOS:**
1. SIM-Karte in iPhone einlegen und PIN eingeben
2. Einstellungen → Mobiles Netz → SIM-PIN
3. SIM-PIN deaktivieren

### Konfiguration per SMS

Die Konfiguration des TK104 erfolgt per SMS an die Telefonnummer der SIM-Karte im Tracker. Das Standard-Passwort ist `123456`.

**Passwort ändern:**
```
password123456 neuesPasswort
→ Antwort: password ok!
```
*(Nur 6 Ziffern, keine Buchstaben oder Sonderzeichen)*

**IMEI abfragen:**
```
imei123456
→ Antwort: 1234564798774651
```

**Status prüfen:**
```
check123456
→ Antwort: Bat: 100% / GPRS: ON / GPS: ON / GSM: 17 / APN: ... / IP: ...
```

**GPRS-Modus aktivieren** (Standard ist SMS-Modus):
```
gprs123456
→ Antwort: GPRS OK!
```

**IP-Adresse und Port des Traccar Servers eintragen:**
```
adminip123456 4.184.237.26 5001
→ Antwort: adminip ok!
```
*(Port je nach Modell, siehe [traccar.org/devices](https://www.traccar.org/devices/))*

**APN eintragen** (Zugangsdaten vom Provider erfragen):
```
apn123456 pinternet.interkom.de
→ Antwort: APN ok
```
Falls erforderlich (abhängig vom Provider) APN-User und APN-Passwort:
```
up123456 eplus gprs
```

**Trackingrate festlegen** (alle Angaben immer dreistellig):
```
fix060s***n123456   → sendet alle 60 Sekunden
fix005m***n123456   → sendet alle 5 Minuten
```

### Aktuellen Standort abfragen

Den Tracker anrufen – er legt nach 2–5 Ruftönen selbst auf. Wenige Sekunden später wird eine SMS mit den aktuellen Koordinaten und einem Google Maps Link gesendet. Rufnummernunterdrückung muss deaktiviert sein.
