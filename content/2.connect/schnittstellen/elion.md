---
title: e:LION
description: Einsatzdaten, Fahrzeugstatus und -positionen an e:LION Einsatzdokumentationssoftware übermitteln
---

# e:LION

Die e:LION-Schnittstelle ermöglicht die Übertragung von Daten aus FeuerSoftware Connect an die Einsatzdokumentations- und Befehlsführungssoftware **e:LION** der Status 3 IT GmbH.

Weitere Informationen zu e:LION: [einsatzdokumentation.net](https://einsatzdokumentation.net/)

---

## Übertragene Daten

| Datenart | Beschreibung |
|---|---|
| **Einsätze** | Einsatzdaten und -details |
| **Fahrzeugstatus** | Aktuelle Verfügbarkeit und Statusmeldungen |
| **Fahrzeugpositionen** | GPS-Koordinaten der Fahrzeuge |

---

## Technische Voraussetzungen

e:LION bringt einen eigenen, voll funktionsfähigen **SSL-Webserver** mit, über den die Daten ausgetauscht werden. Ein separater Webserver ist nicht erforderlich.

- Der in e:LION enthaltene **SSL-Webserver** muss eingerichtet sein
- Der Server muss **aus dem Internet erreichbar** sein (z. B. über eine öffentliche IP oder einen Hostnamen)
- Es wird empfohlen, den Server in einer **DMZ** (demilitarisierte Zone) zu betreiben und mit geeigneten Schutzmaßnahmen abzusichern

---

## Einrichtung

Die Konfiguration erfolgt anhand der offiziellen Einrichtungsanleitung als PDF:

[e:LION Anleitung SSL-Server (PDF)](/downloads/elion_anleitung_ssl_server.pdf) – enthält die vollständigen Schritte zur Einrichtung des e:LION-Webservers und zur Verbindungskonfiguration mit FeuerSoftware Connect.

1. SSL-Webserver von e:LION gemäß Anleitung einrichten
2. Im Connect Portal zur **Standort-Ebene** wechseln
3. **Seitenleiste → Schnittstellen → Elion**
4. Verbindungsdaten des e:LION-Servers eintragen – die Adresse muss vollständig mit `https://` (bzw. `http://`) angegeben werden, z. B. `https://elion.feuerwehr-flammenhausen.de:8443`. Eine Adresse ohne Protokoll (z. B. `elion-server:8443`) wird beim Speichern abgelehnt.
5. Speichern

---

## Automatische Deaktivierung

Scheitern die Aufrufe an e:LION dauerhaft, deaktiviert Connect die Schnittstelle automatisch – bei jeder Art von Fehler (z. B. Server nicht erreichbar, Zertifikatsfehler, falsche Zugangsdaten). Deaktiviert wird erst, wenn

- seit **mindestens 3 Tagen** kein einziger Aufruf erfolgreich war **und**
- die Fehler an **mindestens 3 verschiedenen Tagen** aufgetreten sind.

Ein einzelner erfolgreicher Aufruf oder das Speichern der Einstellungen setzt die Prüfung zurück. Die Prüfung läuft täglich um 08:00 Uhr.

Nach der Deaktivierung erhalten die **Organisations- und Standortadministratoren** eine E-Mail „e:LION-Schnittstelle automatisch deaktiviert" mit der letzten Fehlermeldung. Bis die Schnittstelle wieder aktiv ist, sendet Connect keine Daten mehr an e:LION.

**Wieder einschalten:** Ursache anhand der Fehlermeldung beheben (ist der e:LION-Server unter der eingetragenen Adresse erreichbar, stimmen die Zugangsdaten?), die Schnittstelle in den Einstellungen wieder **aktivieren und speichern**. Scheitern die Aufrufe weiterhin, wird sie nach einigen Tagen erneut deaktiviert.
