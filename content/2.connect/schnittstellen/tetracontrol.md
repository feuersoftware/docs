---
title: TetraControl CVM Modul
description: TetraControl CVM Spannungs- und Stromsensormodul mit FeuerSoftware Connect verbinden und Fahrzeugdaten überwachen
---

# TetraControl CVM Modul

Das **TetraControl CVM Modul** ist ein Spannungs- und Stromsensor zur Fahrzeuginstallation. Es misst Gleichspannung (max. 30 V) und Strom (max. 5 A) und überträgt die Messdaten per **MQTT** an FeuerSoftware Connect, wo sie als Fahrzeug-Zusatzinformationen angezeigt werden.

---

## Varianten

| Variante | Beschreibung |
|---|---|
| **CVM (Standard)** | Gibt die Eingangsspannung 1:1 aus; misst den Strom, der durch das Modul fließt |
| **CVM-USB** | Wandelt die Eingangsspannung in stabile 5 V / max. 18 W um; Ausgang über USB-A oder USB-C |

---

## Datenübertragung und Anzeige

Das CVM Modul kann Daten auf mehreren Wegen bereitstellen:

- **MQTT** → FeuerSoftware Connect (Fahrzeug-Zusatzinformationen)
- **Bluetooth** → CVM Scanner App
- **HTTP-Webserver** (integriert im Modul)
- **UBX-Box** (falls vorhanden)

---

## LED-Status

| Farbe | Bedeutung |
|---|---|
| **Rot** | Kein Verbraucher angeschlossen oder minimale Last |
| **Blau** | Gerät wird geladen |
| **Grün** | Geringe Ladeleistung (Erhaltungsladung) |
| **Türkis** | WLAN verbunden |
| **Gelb** | MQTT-Server verbunden |

---

## Ersteinrichtung

1. CVM einschalten → Modul stellt für **3 Minuten** einen WLAN-Access-Point bereit
2. SSID entspricht der **Seriennummer** des Moduls; Passwort ist im Handbuch angegeben
3. Mit dem Access-Point verbinden → Konfigurationsoberfläche öffnet sich automatisch
4. **WLAN-Zugangsdaten** und **MQTT-Server-Einstellungen** eingeben
5. Modul neu starten

**MQTT-Konfiguration für FeuerSoftware:**
- Server: `iot.feuersoftware.com:8883` (TCP/UDP)
- Als MQTT-Server-Kürzel `fs` eingeben (Zugangsdaten sind in der Firmware hinterlegt)
- Topic: Seriennummer des Moduls mit abschließendem Schrägstrich (z. B. `cvm/fwxx/`)

---

## CVM Modul in Connect einrichten

1. Im Connect Portal den Standort wählen und das gewünschte **Fahrzeug** öffnen
2. Tab **„Zusatzinformationen"** → Bereich **„CVM Modul"**
3. **„Neu"** klicken
4. **Seriennummer** des Moduls eintragen
5. Optional: Beschreibung anpassen
6. Speichern

Die Messdaten erscheinen innerhalb von 30 Minuten als fahrzeugspezifische Felder unter den Zusatzinformationen.

---

## Gerätewarnungen konfigurieren

Für Spannungs- oder Stromabweichungen können Schwellenwert-Alarme konfiguriert werden, die automatisch Fehlermeldungen generieren.

**Seitenleiste → Fahrzeuge → Fahrzeug öffnen → Tab „Zusatzinformationen" → Regeln für Gerätewarnungen**
