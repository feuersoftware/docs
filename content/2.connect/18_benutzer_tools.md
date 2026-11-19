---
title: Benutzer-Tools (Export, Import, API)
description: Benutzerdaten exportieren, per CSV importieren und die Benutzer-API für Smart-Home-Integrationen verwenden
---

# Benutzer-Tools

---

## Excel-Export

Benutzerdaten lassen sich als Excel-Datei exportieren, um sie außerhalb des Portals zu bearbeiten, zu filtern oder auszuwerten.

1. **Seitenleiste → Benutzer**
2. Schaltfläche **„Export"** klicken
3. Excel-Datei herunterladen und in Microsoft Excel öffnen

Die Datei enthält alle Benutzer des Standorts oder der Organisation mit ihren Stammdaten. In Excel können die Daten nach beliebigen Feldern gefiltert und sortiert werden.

---

## CSV-Import

Mehrere Benutzer können direkt im Connect Portal unter **Benutzer** über **„Benutzer importieren“** per CSV-Datei importiert werden. Wie das funktioniert und welche Spalten die Datei enthalten muss, steht unter [Benutzer per CSV importieren](/connect/04_benutzerverwaltung#benutzer-per-csv-importieren).

---

## Benutzer-API

Die Benutzer-API ermöglicht es, Rückmeldungen zu Einsätzen und die eigene Verfügbarkeit programmatisch über HTTP-Anfragen zu setzen – z. B. aus Smart-Home-Systemen oder Taster-Lösungen heraus.

> Anders als die öffentliche Connect-Schnittstelle kann die Benutzer-API nur auf **persönliche Daten** des jeweiligen Benutzers zugreifen, nicht auf Standort- oder Organisationsdaten.

### API-Schlüssel erstellen

1. Im Connect Portal anmelden
2. **Seitenleiste → Smart Home → Benutzer-API**
3. **„Neu"** klicken
4. Beschreibung und Verwendungszweck eingeben
5. Schlüssel wird angezeigt und kann jederzeit wieder abgerufen werden

### Einsatzrückmeldung via API

Setzt den eigenen Alarmierungsstatus für den aktuellsten Einsatz (max. 2 Stunden alt).

```
GET https://connectapi.feuersoftware.com/interfaces/public/user/userstatus
  ?token=<TOKEN>
  &status=<STATUS>
  &siteID=<STANDORT-ID>        (optional)
  &driveTimeSeconds=<SEKUNDEN> (optional)
```

**Status-Werte:**

| Wert | Bedeutung |
|---|---|
| `coming` | Komme |
| `notComing` | Komme nicht |
| `comingLater` | Komme später |

**Rückgaben:**
- `HTTP 204` – Erfolgreich
- `HTTP 401` – Token ungültig
- `HTTP 404` – Benutzer nicht gefunden

### Verfügbarkeit via API

Setzt die allgemeine Verfügbarkeit des Benutzers.

```
GET https://connectapi.feuersoftware.com/interfaces/public/user/useravailability
  ?token=<TOKEN>
  &status=<STATUS>
  &lifeTimeDays=<TAGE> (optional – danach automatisches Zurücksetzen)
```

**Status-Werte:**

| Wert | Bedeutung |
|---|---|
| `available` | Verfügbar |
| `limitedAvailable` | Eingeschränkt verfügbar |
| `notAvailable` | Nicht verfügbar |

### Vollständige API-Dokumentation

Die vollständige API-Referenz ist unter [connectapi.feuersoftware.com/swagger](https://connectapi.feuersoftware.com/swagger/index.html) verfügbar.
