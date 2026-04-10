---
title: TetraControl mit Datenfunkgerät
description: TetraControl mit einem TETRA-Datenfunkgerät einrichten und Fahrzeugstatus, GPS-Positionen und Pager-Rückmeldungen an FeuerSoftware Connect übermitteln
---

# TetraControl mit Datenfunkgerät

> **Hinweis:** Diese Dokumentation richtet sich hauptsächlich an Kunden aus Hessen. In anderen Bundesländern können die entsprechenden Informationen abweichen.

---

## Voraussetzungen

- Datenfunkgerät ([unterstützte Geräte](https://tetracontrol.de/#voraussetzungen)) + Verbindungskabel
- TetraControl Instanz + [Pro Lizenz](https://shop.status3.it/collections/tetracontrol/products/lizenz-tetracontrol-pro)
- Entsprechende Freischaltung (Codeplug) für das Datenfunkgerät

---

## Allgemeines

Position und Status werden im TetraNetz in dedizierte Datengruppen des jeweiligen Landkreises bzw. der kreisfreien Stadt geleitet. Zur Auswertung dieser Gruppe ist ein speziell konfiguriertes und berechtigtes Endgerät erforderlich. Die Nutzung der Datengruppen muss bei der Autorisierten Stelle (in Hessen: AS-HE) angezeigt werden. Hierzu gibt es ein vorgefertigtes Formular in Hessen, welches Sie von der AS-HE bzw. Ihrem Service Point erhalten. Diese stellt daraufhin eine spezielle Konfiguration (Codeplug) zur Verfügung, welcher über das Update-System auf das Gerät gespielt werden kann.

Über die PEI-Schnittstelle von Funkgeräten kann eine Software wie TetraControl auf die Daten der Datengruppe zugreifen und diese steuern. Über TetraControl besteht die Möglichkeit, die Daten auszuwerten und an Connect zu senden.

Neben dem Funkstatus und der GPS-Position von Einsatzmitteln kann auch die taktische Verfügbarkeit und Rückmeldungen zu Einsätzen (auf dem Pager „Komme" / „Komme Nicht" drücken) ausgewertet und an Connect gesendet werden.

---

## Funkgerät vorbereiten

- Überprüfen Sie die von TetraControl unterstützten Geräte.
- Fordern Sie die entsprechende Freischaltung (Codeplug) an und installieren Sie diesen auf dem Funkgerät.
- Überprüfen Sie, ob Sie die entsprechende Datengruppe (z. B. **HE\_MTK\_D**) schalten können.
- Verbinden Sie das Funkgerät über die PEI-Schnittstelle mit einem Windows-Server, auf dem die Software TetraControl laufen soll. Sollte der Server an einem anderen Ort als das Datenfunkgerät betrieben werden oder als virtuelle Maschine installiert sein, kann das USB-Signal über einen USB-Dongle-Server geleitet werden (z. B. Geräte des Herstellers [SEH](https://www.seh-technology.com/)).
- Das Gerät sollte im Geräte-Manager des Windows-Systems auftauchen. Gegebenenfalls sind entsprechende Treiber des Gerätes zu installieren – diese erhalten Sie vom Hersteller. Tipp: Oftmals sind die Treiber in der Programmiersoftware des Gerätes enthalten.

---

## Installation von TetraControl

Laden Sie TetraControl von der Herstellerseite herunter und installieren Sie es nach Herstellervorgabe. TetraControl kann 14 Tage kostenlos getestet werden. Danach ist der Erwerb einer Lizenz erforderlich. Benötigt wird mindestens die **PRO Lizenz**, da nur diese den Webserver besitzt.

Um das Funkgerät mit TetraControl zu verbinden, ist es notwendig, ein neues Gerät in TetraControl anzulegen und den entsprechenden COM-Port auszuwählen. Den richtigen COM-Port können Sie im Windows Geräte-Manager einsehen. Stellen Sie außerdem die Baud-Rate entsprechend Ihrem Funkgerät ein. Weitere Hinweise hierzu finden Sie in der Benutzeranleitung von TetraControl, die sich in den Installationsdateien befindet.

Aktivieren Sie außerdem den **Webserver** von TetraControl und legen Sie einen Benutzer an, welcher auf den Webserver zugreifen darf. Wechseln Sie hierzu in den Tab **Netzwerk** und aktivieren Sie den HTTP Server. Der Webserver ist standardmäßig unter `http://localhost:80` erreichbar.

> **Empfehlung:** Den HTTP Server aus Sicherheitsgründen mit SSL absichern.

Um auf den HTTP Server zugreifen zu können, wird ein entsprechender Benutzer benötigt. Legen Sie einen Benutzer an und vergeben Sie ein sicheres Kennwort. Dieser Benutzer muss später in der Konfiguration von TetraControl2Connect bzw. im EinsatzMonitor eingetragen werden.

---

## Weiterleitung an FeuerSoftware Connect

Um FeuerSoftware Connect mit der lokal installierten TetraControl-Instanz zu verbinden, gibt es zwei Möglichkeiten:

### TetraControl2Connect (empfohlen für Connect-Kunden)

TetraControl2Connect ist ein Tool, das eine Verbindung zum TetraControl Webserver herstellt und die entsprechenden Daten an mehrere Connect-Standorte hochladen kann. Das Tool kann auf demselben Server wie TetraControl laufen. Es wird lediglich eine Internetverbindung benötigt. Stellen Sie sicher, dass folgende Adressen erreichbar sind:

- `connectapi.feuersoftware.com` (Port 443)
- ggf. `uptimerobot.com` (Port 443)
- Zugriff auf den TetraControl Webserver (falls nicht auf demselben Host)

→ [TetraControl2Connect einrichten](/tools/tetracontrol2connect)

### EinsatzMonitor

Über den EinsatzMonitor kann ebenfalls eine direkte Verbindung zum TetraControl Webserver hergestellt werden. Dies ist sinnvoll, wenn kein Connect im Einsatz ist – eine Weiterleitung an Connect ist jedoch möglich.

Hierzu müssen die Serveradresse des Webservers sowie Benutzername und Kennwort in den EinsatzMonitor-Einstellungen eingetragen werden.

→ [EinsatzMonitor TetraControl Einstellungen](/einsatzmonitor/einstellungen/tetracontrol)

---

## Rückmeldung von TETRA Pagern auswerten

TETRA Pager können so konfiguriert werden, dass Einsatzrückmeldungen sowie die taktische Verfügbarkeit ausgewertet und an Connect gesendet werden. Das bedeutet: Wenn auf dem Pager der Status „**Nicht Verfügbar**" gesetzt wird, wird dies an Connect übertragen und der zugehörige Benutzer in Connect ebenfalls auf „Rot – Nicht Verfügbar" gesetzt. Genauso bei „**Verfügbar**".

Außerdem kann die Alarmbestätigung (Komme / Komme Nicht) des Pagers empfangen und an Connect übertragen werden – ohne dass der Benutzer zusätzlich in der EinsatzApp bestätigen muss.

### Konfiguration am Airbus P8GR

In der entsprechenden Benutzerrolle die Einstellung **„Zusätzliche Benutzerantwort senden"** konfigurieren:

- **Adresstyp:** TETRA
- **Adresse:** ISSI des Datenfunkgerätes

Diese Einstellung für alle Benutzerrollen wiederholen (falls erforderlich).

Unter **Alarmierung → Benutzerantworten → Benutzerantwort (Status)** die Statuswerte für Benutzerantworten notieren. Diese müssen in der Konfiguration von TetraControl2Connect eingetragen werden, damit die Auswertung korrekt funktioniert.

Nach der Konfigurationsänderung kann bei einem eingehenden Einsatz am Pager „**Zusagen**" oder „**Ablehnen**" gedrückt werden. Dies wird vom Datenfunkgerät empfangen und via TetraControl an Connect weitergeleitet.

---

## Connect Benutzer pflegen

Bei den Connect-Benutzern muss die **ISSI des Pagers** im Benutzerprofil eingetragen sein, damit eine Zuordnung der gesendeten Daten vorgenommen werden kann. Die ISSI kann durch einen Connect-Administrator oder durch den Benutzer selbst eingetragen werden.

> **Hinweis:** TetraControl2Connect lädt neue Benutzerdaten nur alle 6 Stunden. Nach Änderungen an Benutzern oder Fahrzeugen in Connect ist ein Neustart von TetraControl2Connect erforderlich.
