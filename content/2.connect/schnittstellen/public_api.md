---
title: Öffentliche Connect API
description: Die öffentliche Feuersoftware Connect API aktivieren, API-Token erstellen und über die Schnittstelle Einsätze und Fahrzeugstatus übertragen
---

# Öffentliche Connect API

Die öffentliche Connect API ermöglicht es, externe Systeme an Feuersoftware Connect anzubinden und z. B. Einsätze zu erstellen oder Fahrzeugstatus zu übermitteln. Die Schnittstelle kann auf **Organisations-** und **Standortebene** aktiviert werden.

> Der API-Token gewährt vollen Zugriff auf den jeweiligen Standort oder die Organisation. **Den Token vertraulich behandeln** – wer den Token kennt, kann Alarme erzeugen.

---

## Aktivierung

**Connect Portal → Schnittstellen → Öffentliche Connect Schnittstelle → „Aktivieren"**

Nach dem Aktivieren wird der **Authentifizierungsschlüssel (API-Token)** angezeigt. Dieser wird für alle API-Aufrufe benötigt.

> Der Unterschied zwischen Organisations- und Standortebene: Ein Token auf Organisationsebene erlaubt den Zugriff auf Entitäten aller Standorte. Ein Token auf Standortebene gilt nur für den jeweiligen Standort.

---

## Technische Details

- **Basis-URL:** `https://connectapi.feuersoftware.com/interfaces/`
- **Format:** Ausschließlich JSON
- **Protokoll:** HTTPS (mindestens TLS 1.1)
- **Rate Limit:** max. 5 Einsätze pro Minute, max. 25 Einsätze pro Stunde
- **Einsätze älter als 120 Minuten** werden von der Zusatzalarmierung ausgenommen und nicht mehr an Handys und EinsatzMonitore gepusht

Feuersoftware behält sich vor, einen API-Token zu sperren, wenn das System einen (D)DoS-Angriff erkennt. Bei Bedarf an höheren Rate Limits bitte über die bekannten Kanäle anfragen.

---

## API-Dokumentation (Swagger)

Die vollständige API-Dokumentation ist unter folgendem Link verfügbar:

[connectapi.feuersoftware.com/swagger/ui/index#/Public](https://connectapi.feuersoftware.com/swagger/ui/index#/Public)

---

## EinsatzUpload (Tool)

Das Tool **EinsatzUpload** richtet sich an Benutzer, die nicht selbst programmieren möchten, aber dennoch von einem externen Programm einen Einsatz in Connect erstellen wollen.

[EinsatzUpload herunterladen](https://feuersoftware.com/Download/EinsatzUpload.zip)

Parameter mit Leerzeichen müssen in Anführungszeichen eingeschlossen werden, z. B. `"Ich bin ein Text"`.

| Parameter | Pflicht | Beschreibung |
|---|---|---|
| `-S`, `--Stichwort` | Ja | Einsatzstichwort |
| `-A`, `--Adresse` | Ja | Einsatzadresse |
| `-K`, `--ApiKey` | Ja | API-Token des Connect-Standorts |
| `-R`, `--Ric` | Nein | Alarmiertes Einsatzmittel / Schleife |
| `-E`, `--EinsatzNummer` | Nein | Einsatznummer |
| `-F`, `--Sachverhalt` | Nein | Sachverhalt / Meldebild |
| `-a`, `--Lat` | Nein | Latitude (GPS) |
| `-n`, `--Lng` | Nein | Longitude (GPS) |
| `-U`, `--UpdateStrategy` | Nein | `None` / `ByNumber` / `ByAddress` / `ByPosition` |
| `-s`, `--EinsatzStatus` | Nein | `New` / `Update` / `Cancel` / `Close` |

---

## StatusUpload (Tool)

Mit dem Tool **StatusUpload** kann ein Fahrzeugstatus an Connect übermittelt werden.

[StatusUpload herunterladen](https://feuersoftware.com/Download/StatusUpload.zip)

**Aufruf:**
```
Einsatzupload.exe "<API-Token>" "<FahrzeugKennung>" "<Status>"
```

**Beispiel:**
```
Einsatzupload.exe "f34f3hrewrwed4dc34t4vt3zurewb2b6543c52c525q345wqe5vwev5a5a3" "225643" "1"
```
