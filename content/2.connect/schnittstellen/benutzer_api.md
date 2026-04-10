---
title: Benutzer API
description: Persönlichen API-Schlüssel in Connect erstellen und damit Einsatzrückmeldungen oder Verfügbarkeiten über HTTP-Requests aus externen Systemen übermitteln
---

# Benutzer API

Die Connect Benutzer API ermöglicht API-Anfragen im Kontext des eigenen Benutzers. Im Unterschied zur [öffentlichen Connect API](./public_api) – die Zugriff auf alle Daten eines Standorts oder einer Organisation gewährt – können über die Benutzer API ausschließlich Daten des eigenen Benutzerkontos abgerufen und geändert werden. Die Benutzer API kann daher von **jedem Connect Benutzer** selbst aktiviert werden.

Die vollständige API-Dokumentation ist auf Swagger verfügbar: [connectapi.feuersoftware.com/swagger/index.html](https://connectapi.feuersoftware.com/swagger/index.html)

---

## API-Schlüssel erstellen

**Connect Portal → Smart Home → Benutzer API → „Neu"**

1. Beschreibung für den Schlüssel eingeben (z. B. „Rückmelder Wohnung", „Smart Home")
2. **Verwendungszweck** auswählen (siehe unten)
3. Speichern – der Schlüssel wird im Portal angezeigt und kann jederzeit wieder abgerufen werden

---

## Verwendungszweck: Einsatzrückmeldung

Über diesen Verwendungszweck kann eine Rückmeldung zu einem Einsatz übermittelt werden – aus jedem System, das einen HTTP-GET-Request absetzen kann (z. B. Smart Home Routine oder der [Hardware-Rückmelder](./rueckmelder)).

**Protokoll:** Ausschließlich HTTPS

**Basisadresse:**
```
https://connectapi.feuersoftware.com/interfaces/public/user/userstatus
```

**Parameter:**

| Parameter | Pflicht | Beschreibung |
|---|---|---|
| `token` | Ja | Authentifizierungsschlüssel aus dem Connect Portal |
| `status` | Ja | `coming` / `notComing` / `comingLater` |
| `siteID` | Nein | ID des Standorts – schränkt die Zusage auf Einsätze dieses Standorts ein |
| `driveTimeSeconds` | Nein | Voraussichtliche Fahrtzeit in Sekunden bis zum Feuerwehrhaus |

**Beispielaufruf:**
```
https://connectapi.feuersoftware.com/interfaces/public/user/userstatus?token=<TOKEN>&status=coming
```

**Rückantworten:**

| HTTP Status | Beschreibung |
|---|---|
| `204 No Content` | Rückmeldung erfolgreich übermittelt |
| `401 Unauthorized` | Token ungültig |
| `404 Not Found` | Benutzer zum Token nicht gefunden |

> **Hinweis:** Die Zusage gilt für den aktuellsten Einsatz des Nutzers, der nicht älter als 2 Stunden ist. Wenn noch kein Einsatz vorhanden ist, wird die Rückmeldung in einen Puffer geschrieben und automatisch übernommen, sobald ein Einsatz innerhalb der nächsten 5 Minuten eingeht.

---

## Verwendungszweck: Verfügbarkeit

Über diesen Verwendungszweck kann die allgemeine Verfügbarkeit des Benutzers gesetzt werden – z. B. automatisch über eine Smart-Home-Routine.

**Basisadresse:**
```
https://connectapi.feuersoftware.com/interfaces/public/user/useravailability
```

**Parameter:**

| Parameter | Pflicht | Beschreibung |
|---|---|---|
| `token` | Ja | Authentifizierungsschlüssel aus dem Connect Portal |
| `status` | Ja | `available` / `limitedAvailable` / `notAvailable` |
| `lifeTimeDays` | Ja | Anzahl Tage, für die die Verfügbarkeit gilt. Nach Ablauf wird automatisch zurückgesetzt. |

**Beispielaufruf:**
```
https://connectapi.feuersoftware.com/interfaces/public/user/useravailability?token=<TOKEN>&status=available&lifeTimeDays=1
```

**Rückantworten:**

| HTTP Status | Beschreibung |
|---|---|
| `204 No Content` | Verfügbarkeit erfolgreich gesetzt |
| `401 Unauthorized` | Token ungültig |
| `404 Not Found` | Benutzer zum Token nicht gefunden |
