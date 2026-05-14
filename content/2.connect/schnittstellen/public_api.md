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

- **Basis-URL:** `https://connectapi.feuersoftware.com/interfaces/public`
- **Authentifizierung:** Bearer Token (OAuth2)
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

---

## API-Referenz

### Authentifizierung & Rollen

| Rolle | Beschreibung |
|---|---|
| `InterfacePublic` | Zugriff auf einen einzelnen Standort. Erlaubt lesende und schreibende Operationen. |
| `InterfacePublicOrganization` | Organisationsweiter Zugriff. Erlaubt zusätzlich organisationsweite Abfragen (z. B. alle Benutzer der Organisation). Einige Schreiboperationen (POST/PUT/DELETE) sind nur für `InterfacePublic` erlaubt. |

> Einige Endpunkte (z. B. `POST /operation`, `PUT /user/{id}`) sind ausschließlich der Rolle `InterfacePublic` vorbehalten.

---

### ENUM-Referenz

#### `UpdateStrategy` – Abgleichstrategie beim POST eines Einsatzes

| Wert | Int | Bedeutung |
|---|---|---|
| `None` | 0 | Kein Abgleich – es wird immer ein neuer Einsatz erstellt. |
| `ByNumber` | 1 | Bestehenden Einsatz anhand der Einsatznummer suchen und aktualisieren. |
| `ByAddress` | 2 | Bestehenden Einsatz anhand der Adressfelder suchen und aktualisieren. |
| `ByPosition` | 3 | Bestehenden Einsatz anhand der GPS-Koordinaten suchen und aktualisieren. |

#### `OperationStatus`

| Wert | Int | Bedeutung |
|---|---|---|
| `New` | 0 | Neuer Einsatz. |
| `Update` | 1 | Aktualisierung eines bestehenden Einsatzes. |
| `Cancel` | 2 | Einsatz abgebrochen. |
| `Close` | 3 | Einsatz beendet/geschlossen. |

#### `OperationPriority`

| Wert | Int | Bedeutung |
|---|---|---|
| `None` | 0 | Keine Priorität gesetzt. |
| `Low` | 1 | Niedrig. |
| `Medium` | 2 | Mittel. |
| `High` | 3 | Hoch. |

#### `UserOperationStatus`

| Wert | Int | Bedeutung |
|---|---|---|
| `NotSet` | 0 | Noch keine Rückmeldung. |
| `Coming` | 1 | Kommt zum Einsatz. |
| `NotComing` | 2 | Kommt nicht. |
| `ComingLater` | 3 | Kommt später. |

#### `AvailabilityStatus`

| Wert | Int | Bedeutung | Farbe |
|---|---|---|---|
| `Available` | 0 | Verfügbar. | Grün |
| `LimitedAvailable` | 1 | Eingeschränkt verfügbar. | Gelb |
| `NotAvailable` | 2 | Nicht verfügbar. | Rot |

#### `AvailabilitySource`

| Wert | Int | Bedeutung |
|---|---|---|
| `None` | 0 | Keine Quelle. |
| `Manual` | 1 | Manuelle Eingabe. |
| `Pager` | 2 | Über Pager gesetzt. |
| `Auto` | 3 | Automatisch (Standard für API-Aufrufe). |
| `Scheduled` | 4 | Geplante Verfügbarkeit (einmalig). |
| `ScheduledRecurring` | 5 | Wiederkehrend geplant. |
| `UserApi` | 6 | Über die öffentliche Benutzer-API gesetzt. |

#### `AccountStatus`

| Wert | Int | Bedeutung |
|---|---|---|
| `Activated` | 0 | Konto aktiv. |
| `Deactivated` | 1 | Konto deaktiviert. |
| `Invited` | 2 | Eingeladen, noch nicht registriert. |

#### `IdentifierPreference`

| Wert | Int | Bedeutung |
|---|---|---|
| `PreferId` | 1 | Bevorzuge die numerische Fahrzeug-ID. |
| `PreferRadioId` | 2 | Bevorzuge die Funk-Kennung (Standard). |

#### `NewsType`

| Wert | Int | Bedeutung |
|---|---|---|
| `SiteNews` | 0 | Standort-Neuigkeit (Standard). |
| `OrganizationNews` | 1 | Organisationsweite Neuigkeit (erfordert `InterfacePublicOrganization`). |

#### `NewsCategory`

| Wert | Int | Bedeutung |
|---|---|---|
| `Announcement` | 0 | Allgemeine Ankündigung (Standard). |
| `TrafficObstruction` | 1 | Verkehrsbehinderung. |
| `FasNotification` | 2 | FAS-Benachrichtigung (nur lesend – kann nicht über API erstellt werden). |

#### `DefectReportStatus`

| Wert | Int | Bedeutung |
|---|---|---|
| `Reported` | 0 | Gemeldet. |
| `Reviewed` | 1 | Gesichtet. |
| `InProcess` | 2 | In Bearbeitung. |
| `Resolved` | 3 | Behoben. |
| `Rejected` | 4 | Abgelehnt. |
| `Paused` | 5 | Pausiert. |

#### `VehicleUserPosition`

| Wert | Int | Bedeutung |
|---|---|---|
| `None` | 0 | Keine spezifische Position. |
| `Leader` | 1 | Einsatzleiter/Gruppenführer (max. 1 pro Fahrzeug). |
| `Driver` | 2 | Fahrer (max. 1 pro Fahrzeug). |

#### `VehiclePropertyType`

| Wert | Int | Bedeutung |
|---|---|---|
| `String` | 0 | Zeichenkette. |
| `Integer` | 1 | Ganzzahl. |
| `Double` | 2 | Gleitkommazahl. |
| `Boolean` | 3 | Wahrheitswert. |
| `DateTime` | 4 | Datum und Uhrzeit. |

---

### Einsätze – `/operation`

#### `GET /interfaces/public/operation`

Gibt eine Liste von Einsätzen zurück. Unterstützt OData-Abfragen (max. 101 Ergebnisse).

| Parameter | Typ | Standard | Beschreibung |
|---|---|---|---|
| `onlyLatest` | bool | `true` | Nur den aktuellsten Einsatz pro Einsatznummer zurückgeben. |

**Antwort:** `200 OK` → Array von `OperationModel`

---

#### `POST /interfaces/public/operation`

Erstellt einen neuen Einsatz oder aktualisiert einen bestehenden. Erfordert Rolle `InterfacePublic`.

| Parameter | Typ | Standard | Beschreibung |
|---|---|---|---|
| `updateStrategy` | `UpdateStrategy` | `None` | `None`, `ByNumber`, `ByAddress`, `ByPosition` |
| `override` | bool | `false` | Felder bedingungslos übernehmen (umgeht Stale-Data-Detection). |

**Request Body:** `CreateOperationModel`

| Code | Bedeutung |
|---|---|
| `204 No Content` | Erfolgreich erstellt oder aktualisiert. |
| `400 Bad Request` | Ungültige `updateStrategy` oder Validierungsfehler. |
| `403 Forbidden` | Fehlende Berechtigung. |
| `429 Too Many Requests` | Rate Limit überschritten. |

---

#### `GET /interfaces/public/operation/{operationIdOrNumber}/message`

Gibt alle Nachrichten eines Einsatzes zurück.

**Antwort:** `200 OK` → Array von `OperationMessageModel` | `404 Not Found`

---

#### `POST /interfaces/public/operation/{operationIdOrNumber}/message`

Erstellt eine neue Nachricht zu einem Einsatz. Erfordert Rolle `InterfacePublic`.

| Feld | Typ | Beschreibung |
|---|---|---|
| `MessageText` | string | Nachrichtentext. |
| `Source` | string? | Quelle der Nachricht. |
| `SenderName` | string? | Name des Absenders. |
| `ReceiverName` | string? | Name des Empfängers. |

**Antwort:** `200 OK` → `OperationMessageModel` | `404 Not Found`

---

#### `GET /interfaces/public/operation/{operationIdOrNumber}/assignment`

Gibt alle Fahrzeugzuweisungen eines Einsatzes zurück.

**Antwort:** `200 OK` → Array von `OperationVehicleAssignmentModel` | `404 Not Found`

---

#### `POST /interfaces/public/operation/{operationIdOrNumber}/assignment`

Erstellt eine neue Fahrzeugzuweisung. Erfordert Rolle `InterfacePublic`.

**Request Body:** `CreateOrUpdateOperationVehicleAssignmentModel`

---

#### `PUT /interfaces/public/operation/{operationIdOrNumber}/assignment/{vehicleOrRadioId}/crew`

Aktualisiert die Besatzungsangaben einer Fahrzeugzuweisung. Erfordert Rolle `InterfacePublic`.

| Feld | Typ | Beschreibung |
|---|---|---|
| `Crew` | int? | Anzahl Besatzungsmitglieder. |
| `RespiratorCarriers` | int? | Anzahl Atemschutzträger. |

---

#### `GET /interfaces/public/operation/{operationIdOrNumber}/userstatus`

Gibt die Rückmeldungen aller Benutzer zu einem Einsatz zurück.

| Parameter | Typ | Standard | Beschreibung |
|---|---|---|---|
| `includeNotSet` | bool | `false` | Benutzer ohne Rückmeldung einbeziehen. |

**Antwort:** `200 OK` → Array von `UserOperationStatusModel` | `404 Not Found` (kein Einsatz der letzten 2 Stunden)

---

#### `POST /interfaces/public/operation/userstatus`

Setzt die Rückmeldung eines Benutzers zu einem Einsatz.

**Request Body:** `UserOperationStatusModel`

> Mindestens eines der Felder `UserId`, `UserName` oder `PagerIssi` muss gesetzt sein.

---

#### Benutzer-Zuweisungen in Einsatzfahrzeugen

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/operation/{id}/assignment/{vehicle}/users` | Alle Benutzer-Zuweisungen eines Fahrzeugs abrufen. |
| `POST` | `/operation/{id}/assignment/{vehicle}/users` | Benutzer einem Einsatzfahrzeug zuweisen. |
| `PUT` | `/operation/{id}/assignment/{vehicle}/users` | Alle Zuweisungen vollständig ersetzen. |
| `DELETE` | `/operation/{id}/assignment/{vehicle}/users/{userAssignmentId}` | Benutzer aus Fahrzeug entfernen. |

---

### Fahrzeuge – `/vehicle`

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/vehicle` | Alle Fahrzeuge des Standorts. |
| `GET` | `/vehicle/{vehicleId}/availability` | Aktuelle und zukünftige Verfügbarkeiten (sortiert nach Startdatum). |
| `GET` | `/vehicle/{radioId}/status` | Aktuellen Status eines Fahrzeugs abrufen. |
| `POST` | `/vehicle/{radioId}/status` | Status und/oder Position eines Fahrzeugs setzen. |
| `GET` | `/vehicle/{radioId}/image` | Fahrzeugbild als JPEG. |
| `GET` | `/vehicle/{vehicleId}/properties` | Benutzerdefinierte Fahrzeugeigenschaften. |
| `POST` | `/vehicle/{vehicleId}/properties` | Fahrzeugeigenschaften erstellen oder aktualisieren. |
| `GET/POST/PUT/DELETE` | `/vehicle/{vehicleId}/cvm/{id}` | CVM-Module (Fahrzeugcomputer) verwalten. |

**Query-Parameter für Status-Endpunkte:**

| Parameter | Typ | Standard | Beschreibung |
|---|---|---|---|
| `identifierPreference` | `IdentifierPreference` | `PreferRadioId` | Bevorzugter Bezeichner bei Mehrdeutigkeit: `PreferId` oder `PreferRadioId`. |

---

### Benutzer – `/user`

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/user` | Alle Benutzer des Standorts (mit `InterfacePublicOrganization`: gesamte Organisation). |
| `GET` | `/user/{userId}` | Einzelnen Benutzer abrufen. |
| `PUT` | `/user/{userId}` | Benutzer vollständig aktualisieren. |
| `PATCH` | `/user/{userId}` | Einzelne Felder per JSON Patch (RFC 6902) aktualisieren. |
| `DELETE` | `/user/{userId}` | Benutzer löschen. |
| `POST` | `/user/invite` | Neuen Benutzer einladen. |
| `PUT` | `/user/{idOrPagerNumber}/availability/current` | Aktuelle Verfügbarkeit setzen. |
| `GET` | `/user/{id}/profilepicture` | Profilbild als PNG. |
| `GET` | `/user/useravailability` | Verfügbarkeit per signiertem Token-Link setzen *(anonym)*. |
| `GET` | `/user/userstatus` | Einsatz-Rückmeldestatus per signiertem Token-Link setzen *(anonym)*. |

**Beispiel PATCH-Body:**
```json
[
  { "op": "replace", "path": "/lastName", "value": "Mustermann" },
  { "op": "replace", "path": "/address/city", "value": "München" }
]
```

---

### Neuigkeiten – `/news`

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/news` | Alle Neuigkeiten (mit `InterfacePublicOrganization` auch Organisations-Neuigkeiten). |
| `POST` | `/news` | Neuigkeit erstellen. Query-Parameter: `newsType` (`SiteNews`=0, `OrganizationNews`=1). |
| `PUT` | `/news/{id}` | Neuigkeit aktualisieren. |
| `DELETE` | `/news/{id}` | Neuigkeit löschen. |

> Kategorie `FasNotification` kann nicht erstellt werden – wird mit `403 Forbidden` abgelehnt.

---

### Alarmgruppen – `/alarmgroup`

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/alarmgroup` | Alle benutzerdefinierten Alarmgruppen (keine Systemgruppen). |
| `PUT` | `/alarmgroup/{id}` | Mitglieder einer Gruppe vollständig ersetzen. |

Benutzer werden anhand von `Id`, `UserName` oder `PagerIssi` identifiziert.

---

### Termine – `/appointment`

#### `GET /interfaces/public/appointment`

Gibt Termine aus allen verfügbaren Kalendern zurück. Unterstützt OData-Filter. Maximal 1000 Ergebnisse. Standard-Sortierung: Startdatum aufsteigend.

> **Tipp:** Für aktuelle und zukünftige Termine OData-Filter verwenden: `?$filter=End ge {heute}`

---

### Mängelberichte – `/defectReport`

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/defectReport` | Alle Mängelberichte. |
| `GET` | `/defectReport/{id}` | Einzelnen Mängelbericht abrufen. |
| `GET` | `/defectReport/{id}/statusHistory` | Statushistorie eines Mängelberichts. |
| `POST` | `/defectReport` | Neuen Mängelbericht erstellen. |
| `PUT` | `/defectReport/{id}` | Mängelbericht bearbeiten. |
| `DELETE` | `/defectReport/{id}` | Mängelbericht löschen. |
| `GET` | `/defectReportCategory` | Alle Kategorien. |
| `POST/PUT/DELETE` | `/defectReportCategory/{id}` | Kategorie verwalten. |

**Anhänge:**

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `POST` | `/defectReport/{id}/attach` | Upload starten – liefert `attachmentId` und Upload-URL. Upload via `PUT` mit Header `x-ms-blob-type: BlockBlob`. |
| `PUT` | `/defectReport/{id}/attach/{attachmentId}?ok=true` | Upload abschließen (`ok=true`) oder abbrechen (`ok=false`). |
| `PUT` | `/defectReport/attach/{attachmentId}` | Beschreibung aktualisieren. |
| `DELETE` | `/defectReport/attach/{attachmentId}` | Anhang löschen. |
| `GET` | `/defectReport/attach/url/{attachmentId}` | Download-URL abrufen. |
| `GET` | `/defectReport/attach/{attachmentId}` | Direkter Download (302 Redirect). |

---

### Funktionen – `/function`

#### `GET /interfaces/public/function`

Gibt alle Funktionen/Dienstgrade der Organisation zurück.

| Feld | Typ | Beschreibung |
|---|---|---|
| `Id` | int | Funktions-ID. |
| `Name` | string | Name der Funktion. |
| `Abbreviation` | string | Abkürzung. |

---

### Organisation – `/organization`

#### `GET /interfaces/public/organization`

Gibt Informationen zur Organisation zurück, einschließlich der Standorte.

> Mit `InterfacePublic` werden nur die eigenen Standorte angezeigt. Mit `InterfacePublicOrganization` alle Standorte der Organisation.

---

### Abrechnung – `/billing`

> Erfordert Rolle `InterfacePublicOrganization`.

#### `GET /interfaces/public/billing/account`

Gibt eine Übersicht aller Konten für Abrechnungszwecke zurück.

| Feld | Beschreibung |
|---|---|
| `UserAccounts` | Aktive Benutzerkonten. |
| `MonitorAccounts` | Betriebsmonitor-Konten. |
| `ManagerAccounts` | Einsatzleiter-Konten. |
| `ApiAccounts` | API-Konten (öffentliche API, TetraControl, Lupus). |
| `VehicleAppAccounts` | Fahrzeug-App-Konten. |

---

### Geocodierung – `/geocoding`

#### `GET /interfaces/public/geocoding`

Geocodiert eine Adresse und gibt Koordinaten zurück.

| Parameter | Typ | Beschreibung |
|---|---|---|
| `address` | string | Vollständige Adresse als Freitext. |

---

### Datenmodelle

#### `OperationModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Id` | int | Einsatz-ID. |
| `Start` | DateTime | Startzeit. |
| `CreatedAt` | DateTime | Erstellungszeitpunkt. |
| `LastUpdateAt` | DateTime? | Letzte Aktualisierung. |
| `End` | DateTime? | Endzeit (null = noch aktiv). |
| `Priority` | `OperationPriority` | Priorität. |
| `Keyword` | string | Einsatzstichwort. |
| `Category` | string? | Einsatzkategorie. |
| `Facts` | string? | Lageinformationen. |
| `Ric` | string? | RIC-Nummer (max. 5 Zeichen). |
| `Address` | `AddressReadModel` | Einsatzadresse. |
| `Reporter` | `ReporterModel`? | Melder. |
| `Number` | string? | Einsatznummer. |
| `Source` | string? | Quelle. |
| `Leader` | string? | Einsatzleiter. |
| `Properties` | `OperationPropertyModel[]` | Benutzerdefinierte Eigenschaften. |
| `AdditionalInformation` | `AdditionalInformationModel[]` | Zusätzliche Informationen. |

---

#### `CreateOperationModel`

| Feld | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `Start` | DateTime | Ja | Startzeit. |
| `End` | DateTime? | Nein | Endzeit. |
| `Status` | `OperationStatus` | Nein | Standard: `New` (0). |
| `Priority` | `OperationPriority`? | Nein | Priorität. |
| `AlarmEnabled` | bool? | Nein | Ob Alarm ausgelöst werden soll. |
| `Keyword` | string | Ja | Stichwort (max. 255 Zeichen). |
| `Address` | `CreateAddressModel`? | Nein | Einsatzadresse. |
| `Reporter` | `ReporterModel`? | Nein | Melder. |
| `Position` | `PositionModel`? | Nein | GPS-Position. |
| `Facts` | string? | Nein | Lageinformation. |
| `Ric` | string? | Nein | RIC-Nummer (max. 5 Zeichen). |
| `Number` | string? | Nein | Einsatznummer (max. 255 Zeichen). |
| `Source` | string? | Nein | Quelle (max. 255 Zeichen). |
| `Leader` | string? | Nein | Einsatzleiter (max. 255 Zeichen). |
| `Properties` | `OperationPropertyModel[]`? | Nein | Benutzerdefinierte Eigenschaften. |
| `AlarmedVehicles` | `AlarmedVehicleModel[]`? | Nein | Alarmierte Fahrzeuge. |
| `AssignedVehicles` | `CreateOrUpdateOperationVehicleAssignmentModel[]`? | Nein | Zugewiesene Fahrzeuge. |

---

#### `AddressReadModel` / `CreateAddressModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Address` | string | Vollständige Adresse (nur lesend). |
| `Street` | string | Straße. |
| `HouseNumber` | string | Hausnummer. |
| `ZipCode` | string | Postleitzahl. |
| `City` | string | Ort. |
| `District` | string | Stadtteil. |
| `Lat` / `Lng` | double | GPS-Koordinaten. |

---

#### `OperationVehicleAssignmentModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Id` | int | Zuweisungs-ID. |
| `OperationId` | int | Einsatz-ID. |
| `Name` | string | Fahrzeugname. |
| `RadioId` | string | Funk-Kennung. |
| `Vehicle` | `SharedVehicleModel`? | Verknüpftes Fahrzeug (wenn in Connect hinterlegt). |
| `Assigned` | DateTime | Zeitpunkt der Zuweisung. |
| `Alerted` | DateTime? | Alarmierungszeitpunkt. |
| `Finished` | DateTime? | Einsatzende für dieses Fahrzeug. |
| `Status1`–`Status4`, `Status7`, `Status8` | DateTime? | TETRA-Status-Zeitstempel. |
| `Status` | byte? | Aktueller TETRA-Status. |
| `Crew` | int? | Besatzungsstärke. |
| `RespiratorCarriers` | int? | Atemschutzträger. |
| `Position` | `PositionModel` | GPS-Position. |

---

#### `CreateOrUpdateOperationVehicleAssignmentModel`

| Feld | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `Name` | string? | Bedingt | Fahrzeugname. Pflicht wenn `VehicleId` fehlt. |
| `VehicleId` | int? | Nein | Fahrzeug-ID (wenn in Connect bekannt). |
| `RadioId` | string? | Bedingt | Funk-Kennung. Pflicht wenn `VehicleId` fehlt. |
| `Assigned` | DateTime? | Nein | Zuweisungszeitpunkt (Standard: Jetzt). |
| `Alerted` | DateTime? | Nein | Alarmierungszeitpunkt. |
| `Finished` | DateTime? | Nein | Endzeit Fahrzeug. |
| `Status1`–`Status4`, `Status7`, `Status8` | DateTime? | Nein | TETRA-Status-Zeitstempel. |

---

#### `SharedVehicleExtendedModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Id` | int | Fahrzeug-ID. |
| `RadioId` | string? | Primäre Funk-Kennung. |
| `SecondaryRadioIds` | string[] | Weitere Funk-Kennungen. |
| `PlaceName` | string | Standortname. |
| `OrganizationCallSign` | string | Organisations-Rufzeichen. |
| `VehicleIdentifier` | string | Fahrzeugkennzeichen/-bezeichner. |
| `Description` | string | Beschreibung. |
| `Crew` | int | Aktuelle Besatzungsstärke. |
| `Phone` | string? | Telefonnummer. |
| `Site` | `SiteBriefModel` | Zugehöriger Standort. |
| `Status` | `SharedVehicleStatusModel` | Aktueller Status. |
| `Availability` | `VehicleAvailabilityModel`? | Aktuelle Verfügbarkeit. |

---

#### `SharedVehicleStatusModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `VehicleId` | int | Fahrzeug-ID. |
| `RadioId` | string? | Funk-Kennung. |
| `Status` | byte? | TETRA-Status 1–8 (null = nur Positions-Update). |
| `Position` | `PositionModel`? | GPS-Position. |
| `StatusTimestamp` | DateTime? | Zeitpunkt des letzten Status. |
| `PositionTimestamp` | DateTime? | Zeitpunkt der letzten Position. |
| `Source` | string? | Quelle. |

---

#### `SetVehicleStatusModel`

| Feld | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `Status` | byte? | Bedingt | TETRA-Status (1–8). Mindestens `Status` oder `Position` erforderlich. |
| `Position` | `PositionModel`? | Bedingt | GPS-Position. |
| `StatusTimestamp` | DateTime? | Nein | Standard: Jetzt. |
| `PositionTimestamp` | DateTime? | Nein | Standard: Jetzt. |
| `Source` | string? | Nein | Quelle. |

---

#### `VehicleAvailabilityModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `VehicleId` | int | Fahrzeug-ID. |
| `Status` | `AvailabilityStatus` | Verfügbarkeit. |
| `Info` | string | Infotext. |
| `Start` | DateTime | Startzeit. |
| `End` | DateTime | Endzeit. |
| `MailingLists` | `MailingListBriefModel[]` | Zugehörige Verteilerlisten. |

---

#### `UserModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Id` | string | Benutzer-ID. |
| `FirstName` | string? | Vorname. |
| `LastName` | string? | Nachname. |
| `Email` | string | E-Mail-Adresse. |
| `UserName` | string | Benutzername (= E-Mail). |
| `PagerIssi` | string? | Pager-ISSI-Nummer. |
| `Address` | `AddressModel`? | Adresse. |
| `PhoneNumber` | string? | Mobiltelefonnummer. |
| `LandlineNumber` | string? | Festnetznummer. |
| `AccountStatus` | `AccountStatus` | Kontostatus. |
| `Availability` | `UserAvailabilityExtendedModel` | Aktuelle Verfügbarkeit. |
| `Availabilities` | `UserAvailabilityExtendedModel[]` | Alle Verfügbarkeiten. |
| `DefaultUserAvailability` | `AvailabilityStatus` | Standard-Verfügbarkeit (Fallback). |
| `BluetoothBeacons` | `BluetoothBeaconModel[]`? | Registrierte Bluetooth-Beacons. |
| `Sites` | `SiteBriefModel[]`? | Zugehörige Standorte. |
| `Functions` | `UserFunctionModel[]`? | Funktionen/Dienstgrade. |

---

#### `UpdateUserModel`

| Feld | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `FirstName` | string? | Nein | Vorname. |
| `LastName` | string? | Nein | Nachname. |
| `Email` | string | Ja | E-Mail. |
| `UserName` | string | Ja | Benutzername (= E-Mail). |
| `PagerIssi` | string? | Nein | Pager-ISSI-Nummer. |
| `Address` | `AddressModel`? | Nein | Adresse. |
| `PhoneNumber` | string? | Nein | Mobiltelefonnummer. |
| `LandlineNumber` | string? | Nein | Festnetznummer. |
| `BluetoothBeacons` | `BluetoothBeaconModel[]`? | Nein | Bluetooth-Beacons. |
| `Sites` | `SiteBriefModel[]`? | Nein | Standort-Zuordnung. |
| `Functions` | `UserFunctionModel[]`? | Nein | Funktionen (Abgleich über `Id`, `Name` oder `Abbreviation`). |

---

#### `UserAvailabilityModel`

| Feld | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `Status` | `AvailabilityStatus` | Ja | Verfügbarkeitsstatus. |
| `Until` | DateTime | Ja | Gültig bis (max. +1 Jahr). |
| `Source` | `AvailabilitySource` | Nein | Standard: `Auto` (3). |
| `Info` | string? | Nein | Freitextinformation. |

---

#### `UserOperationStatusModel`

| Feld | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `OperationId` | int? | Nein | Einsatz-ID. Wenn nicht gesetzt, wird der aktuellste Einsatz der letzten 2 Stunden verwendet. |
| `UserId` | string? | Bedingt | Mindestens eines von `UserId`, `UserName`, `PagerIssi` ist Pflicht. |
| `UserName` | string? | Bedingt | Benutzername. |
| `PagerIssi` | string? | Bedingt | Pager-ISSI-Nummer. |
| `Status` | `UserOperationStatus` | Ja | Rückmeldestatus. |
| `Source` | string? | Nein | Quelle (max. 255 Zeichen). |
| `TimeUntilArrival` | `TimeUntilArrivalModel`? | Nein | Voraussichtliche Ankunftszeit. |

---

#### `NewsModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Id` | int | Neuigkeiten-ID. |
| `Title` | string | Titel. |
| `Category` | `NewsCategory` | Kategorie. |
| `Content` | string | Inhalt. |
| `CreatedBy` | string | Ersteller. |
| `Start` | DateTime | Startdatum. |
| `End` | DateTime | Enddatum. |
| `Groups` | string[] | Zielgruppen (leer = alle). |
| `MailingLists` | string[] | Verteilerlisten. |
| `Site` | string | Standortname (null bei Organisations-Neuigkeiten). |
| `AdditionalInformation` | `NewsAdditionalInformation`? | Zusätzliche strukturierte Informationen. |

---

#### `PositionModel`

| Feld | Typ | Beschreibung |
|---|---|---|
| `Latitude` | double | Breitengrad (WGS84). |
| `Longitude` | double | Längengrad (WGS84). |
