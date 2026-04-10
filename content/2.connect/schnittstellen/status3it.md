---
title: Status3IT – CVM Modul & UBX
description: Hardware-Produkte von Status3IT – CVM Spannungs- und Stromsensormodul und UBX Bluetooth-Box für Fahrzeugfunkgeräte
---

# Status3IT – CVM Modul & UBX

[Status3IT](https://status3.it/) ist der Hersteller von TetraControl sowie ergänzender Hardware für den Fahrzeugeinsatz. Die folgenden Produkte lassen sich unabhängig von der TetraControl-Software mit FeuerSoftware verbinden.

---

## CVM Modul

Das **TetraControl CVM Modul** ist ein Spannungs- und Stromsensor zur Fahrzeuginstallation. Es misst Gleichspannung (max. 30 V) und Strom (max. 5 A) und überträgt die Messdaten per **MQTT** an FeuerSoftware Connect, wo sie als Fahrzeug-Zusatzinformationen angezeigt werden.

### Varianten

| Variante | Beschreibung |
|---|---|
| **CVM (Standard)** | Gibt die Eingangsspannung 1:1 aus; misst den Strom, der durch das Modul fließt |
| **CVM-USB** | Wandelt die Eingangsspannung in stabile 5 V / max. 18 W um; Ausgang über USB-A oder USB-C |

### Datenübertragung

Das CVM Modul kann Daten auf mehreren Wegen bereitstellen:

- **MQTT** → FeuerSoftware Connect (Fahrzeug-Zusatzinformationen)
- **Bluetooth** → CVM Scanner App
- **HTTP-Webserver** (integriert im Modul)
- **UBX-Box** (falls vorhanden)

### LED-Status

| Farbe | Bedeutung |
|---|---|
| **Rot** | Kein Verbraucher angeschlossen oder minimale Last |
| **Blau** | Gerät wird geladen |
| **Grün** | Geringe Ladeleistung (Erhaltungsladung) |
| **Türkis** | WLAN verbunden |
| **Gelb** | MQTT-Server verbunden |

### Ersteinrichtung

1. CVM einschalten → Modul stellt für **3 Minuten** einen WLAN-Access-Point bereit
2. SSID entspricht der **Seriennummer** des Moduls; Passwort ist im Handbuch angegeben
3. Mit dem Access-Point verbinden → Konfigurationsoberfläche öffnet sich automatisch
4. **WLAN-Zugangsdaten** und **MQTT-Server-Einstellungen** eingeben
5. Modul neu starten

**MQTT-Konfiguration für FeuerSoftware:**
- Server: `iot.feuersoftware.com:8883` (TCP/UDP)
- Als MQTT-Server-Kürzel `fs` eingeben (Zugangsdaten sind in der Firmware hinterlegt)
- Topic: Seriennummer des Moduls mit abschließendem Schrägstrich (z. B. `cvm/fwxx/`)

### CVM Modul in Connect einrichten

1. Im Connect Portal den Standort wählen und das gewünschte **Fahrzeug** öffnen
2. Tab **„Zusatzinformationen"** → Bereich **„CVM Modul"**
3. **„Neu"** klicken
4. **Seriennummer** des Moduls eintragen
5. Optional: Beschreibung anpassen
6. Speichern

Die Messdaten erscheinen innerhalb von 30 Minuten als fahrzeugspezifische Felder unter den Zusatzinformationen.

### Gerätewarnungen konfigurieren

Für Spannungs- oder Stromabweichungen können Schwellenwert-Alarme konfiguriert werden.

**Seitenleiste → Fahrzeuge → Fahrzeug öffnen → Tab „Zusatzinformationen" → Regeln für Gerätewarnungen**

---

## UBX Box

Die **TetraControl UBX Box** bietet eine Bluetooth-Schnittstelle zur Steuerung des Fahrzeugfunkgerätes über das EinsatzTablet. Die UBX Box wird mit dem im Fahrzeug verbauten Funkgerät (Sepura oder Motorola via PMI Interface) verbunden; das EinsatzTablet verbindet sich per Bluetooth 4.0 LE.

> **Hinweis:** Für die Bluetooth-Schnittstelle der UBX ist eine gesonderte Lizenz erforderlich.

Die UBX Box ist über [shop.status3.it](https://shop.status3.it/collections/tetracontrol-ubx) erhältlich.

### Funktionsumfang

- Status senden (FMS)
- Steuerung des Funkgerätes (Lautstärke, TMO/DMO-Wechsel)
- SDS-Nachrichten versenden (max. 85 Zeichen)
- Anzeige der geschalteten Funkgruppe
- Gesprächshistorie (temporär)
- Übergabe der Einsatzdaten an ein Garmin Navigationsgerät
