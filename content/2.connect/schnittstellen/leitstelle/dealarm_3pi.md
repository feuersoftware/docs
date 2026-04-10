---
title: DE-Alarm 3PI Schnittstelle
description: Einsatzdaten aus DE-Alarm über die gRPC-basierte 3PI-Schnittstelle an Feuersoftware Connect übertragen (aktuell Brandenburg)
---

# DE-Alarm 3PI Schnittstelle

> **Hinweis:** Aktuell nur in Brandenburg verfügbar.

---

## Allgemeines

Die 3PI-Schnittstelle von DE-Alarm ist eine einheitliche, auf **gRPC** basierende Drittanbieterschnittstelle, über die Alarm- und Einsatzdaten aus DE-Alarm an externe Systeme übertragen werden. In Brandenburg steht diese Schnittstelle in allen Leitstellen zur Verfügung.

Die Anbindung an Feuersoftware Connect erfolgt über eine gRPC-Verbindung, die auf Basis eines von der Leitstelle vergebenen Organisations-Schlüssels aufgebaut wird.

Allgemeine Informationen zur Schnittstelle: [leitstelle-lausitz.de/3pi](https://www.leitstelle-lausitz.de/3pi-die-drittanbieterschnittstelle-von-de-alarm/)

---

## Voraussetzungen

- Freischaltung der Organisation in der Leitstelle
- Administrationsrechte im Connect Portal für die Einrichtung der Integration und Standort-/Gruppen-Zuordnung

---

## Funktionsprinzip

- Die Leitstelle stellt über 3PI einen kontinuierlichen gRPC-Datenstrom mit Einsatz-/Alarminformationen bereit.
- Connect baut als Client die gRPC-Verbindung zur Leitstelle auf und übernimmt eingehende Einsätze automatisiert.
- Pro Organisation wird mit privatem Schlüssel (Client) und bekanntem Server Public Key (Base64) ver- und entschlüsselt.
- Die Verteilung auf Standorte und Alarmgruppen erfolgt in Connect gemäß der konfigurierten Zuordnung.
- Alarmierungen werden gepuffert und anhand einer eindeutigen Alarm-ID zusammengeführt – es entstehen keine doppelten Alarmierungen bei der Auslösung mehrerer Alarmgruppen.

---

## Übertragene Daten

Über die Schnittstelle werden **nur Einsatzdaten** übertragen. Diese werden **einmalig** übermittelt und während des Einsatzes nicht mehr aktualisiert (z. B. bei Stichwort- oder Adressänderung). Status- oder Positionsdaten von Fahrzeugen werden nicht übermittelt.

Die vollständige Feldübersicht ist auf [leitstelle-lausitz.de/3pi](https://www.leitstelle-lausitz.de/3pi-die-drittanbieterschnittstelle-von-de-alarm/) einsehbar.

**Einsatzdaten**

| Feld | Beschreibung |
|---|---|
| `uuid` | Eindeutige Identifikation des Einsatzes |
| `einsatznummer` | Offizielle Einsatznummer |
| `alarmzeit` / `alarmzeit_iso` | Zeitpunkt des Alarms lokal und in ISO-Format |
| `art` | Art des Einsatzes (z. B. Hilfeleistung, Brand) |
| `stichwort` | Kurzbeschreibung / Einsatzstichwort |
| `sondersignal` | Boolean – ob ein Sondersignal (z. B. Blaulicht) aktiviert wird |
| `besonderheiten` | Zusätzliche Hinweise oder Risiken |
| `alarm_einsatzmittel` | Alarmierte Einheiten oder Fahrzeuge |
| `alarm_wachen` | Involvierte Wachen |
| `feuerwehrplan` | Referenz auf ggf. existierenden Feuerwehrplan (optional) |

**Ortsdaten**

| Feld | Beschreibung |
|---|---|
| `ort` / `ortsteil` / `ortslage` | Geografische Einordnung des Einsatzortes |
| `strasse` / `hausnummer` | Adresse des Einsatzortes |
| `objekt` / `objektteil` / `objektnr` | Gebäudebezeichnungen oder Nummerierungen |
| `ort_sonstiges` | Freitext für zusätzliche Ortsinformationen |
| `wgs84_x` / `wgs84_y` | GPS-Koordinaten |

**Einsatzmittel**

| Feld | Beschreibung |
|---|---|
| `wachenname` | Name der Wache, von der das Mittel stammt |
| `einsatzmittel` | Bezeichnung des alarmierten Fahrzeugs oder Geräts |
| `zeit_alarmierung` / `zeit_alarmierung_iso` | Zeitpunkt der Alarmierung |

---

## Beantragung

Aufgabenträger im Zuständigkeitsbereich des technischen Leitstellenverbundes „Netzwerk 112" können die Bereitstellung der 3PI über das Self-Service-Portal der Geschäftsstelle beantragen. Nach Bewilligung wird die 3PI bereitgestellt und der Zugriff auf die notwendigen Alarmierungsinformationen ermöglicht. Die 3PI kann durch alle Aufgabenträger **kostenfrei** genutzt werden.

---

## Schnittstelle aktivieren

1. Im Connect Portal auf die **Organisationseinstellungen** → **Schnittstellen** wechseln
2. Neue Integration hinzufügen und **„DE-Alarm 3PI Schnittstelle"** auswählen
3. Schnittstelle aktivieren – der **Öffentliche Schlüssel (Public Key)** wird angezeigt
   - Diesen Schlüssel an die **Leitstelle übermitteln**
   - Bis der Schlüssel von der Leitstelle hinterlegt wurde, können keine Einsätze empfangen werden. Die Schnittstelle befindet sich solange in einem fehlerhaften Zustand (entsprechend gekennzeichnet). Sobald der Schlüssel hinterlegt wurde, wechselt der Status auf funktionsfähig.
4. **Zuordnung** der eingehenden 3PI-Daten zu den Connect-Standorten einrichten

---

## Standort-Zuordnung

Die Zuordnung legt fest, welche Organisationskennungen und Alarmgruppen welchem Connect-Standort zugewiesen werden.

**Beispiel:** Organisation `6052`, Alarmgruppe `10` → Standort „Feuerwehr Flammenhausen Nord"

Als Wildcard kann `*` verwendet werden, sodass eine Regel immer zutrifft. Der Vergleich ist unabhängig von Groß-/Kleinschreibung.

---

## Fahrzeugmapping

Damit Einsatzmittel aus der Schnittstelle korrekt den Connect-Fahrzeugen zugeordnet werden, muss im Fahrzeug-Feld **„Funkgerätekennung"** der Funkrufname eingetragen werden.

Beispiel: `FL XXX 05/14-02`
