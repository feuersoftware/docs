---
title: Status3IT – CVM Modul & UBX
description: Hardware-Produkte von Status3IT – CVM Spannungs- und Stromsensormodul und UBX Bluetooth-Box für Fahrzeugfunkgeräte
---

# Status3IT – CVM Modul & UBX

[Status3IT](https://status3.it/) ist der Hersteller von TetraControl sowie ergänzender Hardware für den Fahrzeugeinsatz. Die folgenden Produkte lassen sich unabhängig von der TetraControl-Software mit FeuerSoftware verbinden.

---

## CVM Modul

![TetraControl CVM Modul](/images/connect/schnittstellen/status3it_cvm_01_modul.png)

Das **TetraControl CVM Modul** ist ein Spannungs- und Stromsensor zur Fahrzeuginstallation. CVM steht für **„Current and Voltage Monitor“**. Das Modul misst Gleichspannung (max. 30 V) und Strom (max. 5 A) und überträgt die Messdaten per **MQTT** an FeuerSoftware Connect, wo sie als Fahrzeug-Zusatzinformationen angezeigt werden. Anhand der Stromaufnahme des angeschlossenen Endgerätes lässt sich so einfach erkennen, ob ein Gerät vorhanden ist, ob es gerade lädt oder ob es vollständig geladen ist.

Das CVM Modul kann **„Standalone“** oder in Verbindung mit einer **UBX Box** betrieben werden. Im Standalone-Betrieb ist eine **WLAN-Verbindung mit Internetzugriff** erforderlich.

Weitere Informationen finden Sie auf der [Produktseite von Status3IT](https://www.status3.it/tetracontrol-detail/tetracontrol-ubx-cvm).

### Varianten

| Variante | Beschreibung |
|---|---|
| **CVM (Standard)** | Gibt die Eingangsspannung 1:1 aus; misst den Strom, der durch das Modul fließt |
| **CVM-USB** | Wandelt die Eingangsspannung in fixe 5 V / max. 18 W um; Anschluss der Endgeräte über passende Kabel für USB-A oder USB-C |

### Datenübertragung

Das CVM Modul kann Daten auf mehreren Wegen bereitstellen:

- **MQTT(S)** → FeuerSoftware Connect (Fahrzeug-Zusatzinformationen) oder ein eigener MQTT-Server
- **Bluetooth** → [CVM Scanner App](#cvm-scanner-app)
- **HTTP-Webserver** (integriert im Modul, siehe [HTTP-Webclient](#http-webclient))
- **UBX-Box** (falls vorhanden)

### Einbau und Anschlussplan

Der Einbau der CVM Module erfolgt nach folgendem Schema.

**TetraControl CVM**

![Anschlussplan TetraControl CVM](/images/connect/schnittstellen/status3it_cvm_02_anschlussplan_cvm.jpg)

**TetraControl CVM-USB**

Die CVM-USB-Variante gibt eine fixe Ausgangsspannung von **5 V** aus.

![Anschlussplan TetraControl CVM-USB](/images/connect/schnittstellen/status3it_cvm_03_anschlussplan_cvm_usb.jpg)

### LED-Status

Zur Kontrolle blinkt die eingebaute LED in unterschiedlichen Farben:

| Farbe | Bedeutung |
|---|---|
| **Rot** | Kein Verbraucher angeschlossen oder nur sehr geringe Leistung |
| **Blau** | Verbraucher wird geladen |
| **Grün** | Geringe Ladeleistung (z. B. Erhaltungsladung) |

Sind WLAN- und MQTT-Zugangsdaten konfiguriert, wird der Verbindungszustand **alle 10 Sekunden** durch ein **zusätzliches** Blinkzeichen angezeigt:

| Farbe | Bedeutung |
|---|---|
| **Türkis** | WLAN verbunden |
| **Gelb** | MQTT-Server verbunden |

### Ersteinrichtung (Access-Point-Modus)

1. Spannungsversorgung am Eingang herstellen → das Modul stellt in den ersten **3 Minuten** einen WLAN-Access-Point bereit
2. Die SSID (WLAN-Name) entspricht der **Seriennummer** auf dem Typenschild des Moduls; das Passwort ist in der Bedienungsanleitung angegeben
3. Mit dem Access-Point verbinden → Sie werden automatisch auf die Konfigurationsoberfläche weitergeleitet

> **Hinweis:** Der Access-Point-Modus wird nur aktiviert, wenn kein WLAN konfiguriert ist oder sich das CVM nicht mit dem konfigurierten WLAN verbinden kann.

![CVM Konfigurationsoberfläche mit WLAN- und MQTT-Einstellungen](/images/connect/schnittstellen/status3it_cvm_04_konfiguration.png)

### Konfigurationsseite

**WLAN**

Tragen Sie die Zugangsdaten für Ihr WLAN-Netzwerk ein: im Feld **SSID** den Namen des WLAN-Netzwerks und im Feld **Passwort** das dazugehörige Kennwort. Klicken Sie auf **„Submit WiFi Config“**, um die Zugangsdaten zu speichern.

**MQTT Server**

Hier werden die Zugangsdaten für den MQTT-Server eingetragen, der die Daten empfangen soll.

- **FeuerSoftware Connect:** Tragen Sie im Feld MQTT Server nur `fs` ein – **kleingeschrieben und ohne Anführungszeichen**. Die Zugangsdaten für den MQTT-Server von FeuerSoftware sind bereits in der Firmware hinterlegt, eine weitere Konfiguration ist nicht erforderlich.
- **Eigener MQTT-Server:** Alternativ können die Zugangsdaten eines eigenen MQTT-Servers eingetragen werden.

**MQTT Topic**

Das Topic ist ein **frei wählbares Präfix**, an das automatisch `info` bzw. `data` angehängt wird. Das Präfix muss mit einem Schrägstrich `/` enden.

Beispiel: Mit dem Präfix `cvm/fwfd/` veröffentlicht das CVM

- unter `cvm/fwfd/info` regelmäßig Daten des Moduls (Hostname, Firmware-Version usw.) und
- unter `cvm/fwfd/data` die Messdaten.

**Empfehlung:** `cvm/fwxx/` – „fw“ steht für Feuerwehr, „xx“ für ein Kürzel Ihrer Feuerwehr (z. B. `fd` für Fulda).

**Neustart**

Nachdem die WLAN- und MQTT-Einstellungen abgeschlossen sind, muss das CVM neu gestartet werden – über den Button **„Restart CVM“** oder durch kurzzeitiges Unterbrechen der Stromversorgung. Nach dem Neustart ist das Modul unter der zugewiesenen IP-Adresse und unter seinem Hostnamen erreichbar.

### HTTP-Webclient

Ist das CVM mit dem WLAN verbunden, stellt es alle Messdaten über einen eingebauten Webserver bereit. Rufen Sie dazu die **IP-Adresse des CVM Moduls** im Browser auf – dort werden die Messdaten angezeigt. Über den Webclient kann dem Modul außerdem ein Name gegeben werden (Standard: die Seriennummer).

![CVM HTTP-Webclient mit Messdaten](/images/connect/schnittstellen/status3it_cvm_05_webclient.png)

### CVM Scanner App

Die Messdaten können auch per **Bluetooth** mit der CVM Scanner App abgerufen werden. Nach dem Start zeigt die App alle CVM Module in der Nähe an – mit **Spannung**, **Stromstärke** und **Leistung** sowie der **Seriennummer** des Moduls und der aktuellen **Empfangsstärke** zwischen Modul und Telefon.

- [CVM Scanner im App Store](https://apps.apple.com/de/app/cvm-scanner/id6483806860)
- [CVM Scanner bei Google Play](https://play.google.com/store/apps/details?id=it.status3.cvm_scanner_app&hl=de)

![CVM Scanner App mit Messwerten eines Moduls](/images/connect/schnittstellen/status3it_cvm_06_scanner_app.png)

### CVM Modul in Connect einrichten

1. Im Connect Portal den Standort wählen und das gewünschte **Fahrzeug** öffnen
2. Tab **„Zusatzinformationen"** → Bereich **„CVM Modul"**
3. **„Neu"** klicken
4. **Seriennummer** des Moduls eintragen – sie ist auf dem Modul aufgedruckt oder kann mit der [CVM Scanner App](#cvm-scanner-app) ausgelesen werden
5. Optional: Haken bei **„Beschreibung überschreiben“** setzen und im Feld **„Beschreibung“** eine eindeutige Bezeichnung vergeben, z. B. `G4 Handlampe 1`. Alternativ kann dem Modul über den HTTP-Webclient ein Name gegeben werden (Standard: Seriennummer); ein Name ist nicht zwingend notwendig.
6. **„Speichern“** klicken

Die ersten Messdaten werden innerhalb der nächsten Minuten angezeigt; es kann bis zu **30 Minuten** dauern. Die Werte erscheinen als **Zusatzfelder** im Tab [„Zusatzinformationen“](/connect/06_fahrzeuge#tab-zusatzinformationen) des Fahrzeugs, **gruppiert nach der vergebenen Beschreibung**. Anhand des Zeitstempels sehen Sie, wann zuletzt Daten des Moduls empfangen wurden.

### Gerätewarnungen konfigurieren

Mit Gerätewarnregeln lassen sich Alarmschwellen festlegen, z. B. für die Unterspannung einer Batterie. Weicht ein Wert vom Sollbereich ab, wird automatisch eine Mängelmeldung erzeugt.

1. Die Regeln werden **einmal auf Organisationsebene** angelegt und konfiguriert: **Connect Portal → Organisation → Regeln für Gerätewarnungen**
2. Anschließend werden sie unter **Fahrzeuge → Fahrzeug öffnen → Tab „Zusatzinformationen“** den gewünschten CVM-Werten zugewiesen

→ Ausführliche Anleitung: [Regeln für Gerätewarnungen](/connect/06_fahrzeuge#regeln-für-gerätewarnungen)

### Netzwerk / Firewall

Für die Verbindung mit dem MQTT-Server von FeuerSoftware muss folgende Adresse erreichbar sein:

| Server | Port |
|---|---|
| `iot.feuersoftware.com` | `8883` (TCP/UDP) |

Ist die Verbindung zum MQTT-Server erfolgreich hergestellt, blinkt die LED am CVM Modul alle 10 Sekunden gelb.

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
