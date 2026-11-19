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
4. Verbindungsdaten des e:LION-Servers eintragen
5. Speichern
