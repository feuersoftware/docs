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

Über die PEI-Schnittstelle von Funkgeräten kann eine Software wie TetraControl auf die Daten der Datengruppe zugreifen und diese steuern. Über TetraControl besteht die Möglichkeit, die Daten auszuwerten und an Connect zu senden. Die Einrichtung wird im Folgenden beschrieben.

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

### Gerät anlegen

Um das Funkgerät mit TetraControl zu verbinden, ist es notwendig, ein neues Gerät in TetraControl anzulegen und den entsprechenden COM-Port auszuwählen. Den richtigen COM-Port können Sie im Windows Geräte-Manager einsehen. Stellen Sie außerdem die Baud-Rate entsprechend Ihrem Funkgerät ein. Weitere Hinweise hierzu finden Sie in der Benutzeranleitung von TetraControl, die sich in den Installationsdateien befindet.

![TetraControl: Gerät anlegen mit COM-Port und Baud-Rate](/images/connect/schnittstellen/tetracontrol_datenfunk_01_geraet_anlegen.png)

### Webserver aktivieren

Aktivieren Sie außerdem den **Webserver** von TetraControl. Wechseln Sie hierzu in den Tab **Netzwerk** und aktivieren Sie den HTTP Server. Über den Webserver werden die Daten an FeuerSoftware übertragen. Der Webserver ist standardmäßig unter `http://localhost:80` erreichbar.

> **Empfehlung:** Den HTTP Server aus Sicherheitsgründen mit SSL absichern.

![TetraControl: Tab Netzwerk mit aktiviertem HTTP Server](/images/connect/schnittstellen/tetracontrol_datenfunk_02_http_server.png)

### Webserver-Benutzer anlegen

Um auf den HTTP Server zugreifen zu können, wird ein entsprechender Benutzer benötigt. Legen Sie einen Benutzer an und vergeben Sie ein sicheres Kennwort. Dieser Benutzer muss später in der Konfiguration von TetraControl2Connect bzw. im EinsatzMonitor eingetragen werden.

![TetraControl: Benutzer für den Webserver anlegen](/images/connect/schnittstellen/tetracontrol_datenfunk_03_webserver_benutzer.png)

### Webserver prüfen

Öffnen Sie nun Ihren Webbrowser und rufen Sie den Webserver von TetraControl auf. Dort sollten nach einiger Zeit bereits die ersten Statusmeldungen auftauchen.

![TetraControl Webserver mit eingehenden Statusmeldungen](/images/connect/schnittstellen/tetracontrol_datenfunk_04_webserver_status.png)

---

## Weiterleitung an FeuerSoftware Connect

Um FeuerSoftware Connect mit der lokal installierten TetraControl-Instanz zu verbinden, gibt es zwei Möglichkeiten: über das Tool **TetraControl2Connect** oder direkt über den **EinsatzMonitor**. Die Auswertung über den EinsatzMonitor wird zwingend benötigt, wenn kein Connect im Einsatz ist. Für Connect-Kunden wird die Nutzung von TetraControl2Connect empfohlen.

### TetraControl2Connect (empfohlen für Connect-Kunden)

TetraControl2Connect ist ein Tool, das eine Verbindung zum TetraControl Webserver herstellt und die entsprechenden Daten an mehrere Connect-Standorte hochladen kann. Das Tool kann auf demselben Server wie TetraControl laufen. Es wird lediglich eine Internetverbindung benötigt. Sollten Sie einen Proxy im Einsatz haben, stellen Sie sicher, dass folgende Adressen erreichbar sind:

- `connectapi.feuersoftware.com` (Port 443)
- ggf. `uptimerobot.com` (Port 443)
- Zugriff auf den TetraControl Webserver (falls nicht auf demselben Host)

Die Verbindung zum TetraControl Webserver wird in der Admin-Oberfläche von TetraControl2Connect unter **„TetraControl“** eingerichtet (bei der Ersteinrichtung im Schritt „TetraControl“ des Einrichtungsassistenten):

| Feld | Beschreibung |
|------|--------------|
| Host | Serveradresse des TetraControl Webservers (z. B. `localhost`) |
| Port | Port des TetraControl Webservers. TetraControl2Connect schlägt `8085` vor – tragen Sie den Port ein, der in TetraControl für den Webserver eingestellt ist (TetraControl-Standard: `80`) |
| Benutzername | Benutzername des oben angelegten Webserver-Benutzers |
| Passwort | Passwort des oben angelegten Webserver-Benutzers |

→ [TetraControl2Connect einrichten](/tools/tetracontrol2connect/installation) · [Konfiguration der TetraControl-Verbindung](/tools/tetracontrol2connect/konfiguration#tetracontrol-verbindung)

### EinsatzMonitor

Über den EinsatzMonitor kann ebenfalls eine direkte Verbindung zum TetraControl Webserver hergestellt werden. Der EinsatzMonitor empfängt Status- und Positionsupdates der Fahrzeuge und wertet außerdem die Rückmeldungen der Benutzer aus.

Wenn die Verbindung über den EinsatzMonitor hergestellt wird, wird nicht zwingend Connect benötigt. Kunden, die nur den EinsatzMonitor nutzen, können so ebenfalls eine Auswertung der TETRA-Daten vornehmen. Eine Weiterleitung an Connect ist aber möglich.

Hierzu müssen die Serveradresse des Webservers sowie Benutzername und Kennwort in den EinsatzMonitor-Einstellungen eingetragen werden.

![EinsatzMonitor: TetraControl-Einstellungen mit Server, Benutzer und Passwort](/images/connect/schnittstellen/tetracontrol_datenfunk_05_einsatzmonitor.png)

→ [EinsatzMonitor TetraControl Einstellungen](/einsatzmonitor/einstellungen/tetracontrol)

---

## Rückmeldung von TETRA Pagern auswerten

TETRA Pager können so konfiguriert werden, dass Einsatzrückmeldungen sowie die taktische Verfügbarkeit ausgewertet und an Connect gesendet werden. Das bedeutet: Wenn auf dem Pager der Status „**Nicht Verfügbar**" gesetzt wird, wird dies an Connect übertragen und der zugehörige Benutzer in Connect ebenfalls auf „Rot – Nicht Verfügbar" gesetzt. Genauso bei „**Verfügbar**".

Außerdem kann die Alarmbestätigung (Komme / Komme Nicht) des Pagers empfangen und an Connect übertragen werden. Der Benutzer sagt damit dem aktuellen Einsatz zu, ohne zusätzlich in der EinsatzApp bestätigen zu müssen.

Hierzu ist eine Konfiguration in der Programmierung des Pagers erforderlich. Wir zeigen dies exemplarisch am Airbus P8GR. Die Funktionsweise bei anderen Herstellern ist ähnlich.

### Konfiguration am Airbus P8GR

In der entsprechenden Benutzerrolle die Einstellung **„Zusätzliche Benutzerantwort senden"** konfigurieren:

- **Adresstyp:** TETRA
- **Adresse:** ISSI des Datenfunkgerätes

Diese Einstellung für alle Benutzerrollen wiederholen (falls erforderlich).

![Airbus P8GR Programmierung: Zusätzliche Benutzerantwort senden mit Adresstyp TETRA und ISSI](/images/connect/schnittstellen/tetracontrol_datenfunk_06_p8gr_benutzerantwort.png)

Öffnen Sie außerdem den Menüpunkt **Alarmierung → Benutzerantworten → Benutzerantwort (Status)** und notieren Sie sich die Statuswerte für Benutzerantworten. Diese müssen in TetraControl2Connect unter **„Status“ → [„Status-Zuordnungen“](/tools/tetracontrol2connect/konfiguration#status-zuordnungen)** eingetragen werden, damit die Auswertung korrekt funktioniert. Mehrere Werte werden dort mit Semikolon `;` getrennt.

![Airbus P8GR Programmierung: Statuswerte der Benutzerantworten](/images/connect/schnittstellen/tetracontrol_datenfunk_07_p8gr_statuswerte.png)

Nachdem die Konfigurationsänderung des Pagers erfolgreich installiert wurde, können die Rückmeldungen zu Einsätzen ausgewertet werden. Bei einem eingehenden Einsatz kann am Pager „**Zusagen**" oder „**Ablehnen**" gedrückt werden. Dies wird vom Datenfunkgerät empfangen und via TetraControl an Connect weitergeleitet.

![In TetraControl empfangene Rückmeldung eines TETRA Pagers](/images/connect/schnittstellen/tetracontrol_datenfunk_08_pager_rueckmeldung.png)

---

## Connect Benutzer pflegen

Bei den Connect-Benutzern muss die **ISSI des Pagers** im Benutzerprofil eingetragen sein, damit eine Zuordnung der gesendeten Daten vorgenommen werden kann. Die ISSI kann durch einen Connect-Administrator oder durch den Benutzer selbst eingetragen werden. Weitere Informationen: [Benutzer bearbeiten](/connect/04_benutzerverwaltung#benutzer-bearbeiten)

> **Hinweis:** TetraControl2Connect lädt neue oder geänderte **Benutzer** spätestens alle **12 Stunden** und **Fahrzeuge** spätestens alle **6 Stunden** neu. Hier ist mit entsprechender Wartezeit zu rechnen. Für eine sofortige Übernahme kann TetraControl2Connect neu gestartet werden.
