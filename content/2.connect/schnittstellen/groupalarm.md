---
title: Groupalarm Alarmweiterleitung
description: Einsatzdaten aus Groupalarm über einen Flow an Feuersoftware Connect weiterleiten
---

# Groupalarm Alarmweiterleitung

Für Organisationen, die Groupalarm nutzen oder deren Leitstelle eine Schnittstelle zu Groupalarm implementiert hat, können Einsatzdaten automatisch von Groupalarm an Feuersoftware Connect weitergeleitet werden. Hierzu wird im Groupalarm-Webportal ein **Flow** erstellt, der eingehende Einsatzdetails an die öffentliche Connect API überträgt.

---

## Voraussetzungen

- Aktiver Groupalarm-Account mit Administratorzugang
- Feuersoftware Connect mit Standort- oder Organisationsadministrations-Rechten
- API-Key des Connect-Standorts (Connect Portal → Standort → Schnittstellen → Öffentliche Connect Schnittstelle)

---

## Einrichtung

![Groupalarm: Übersicht des Flows](/images/connect/schnittstellen/groupalarm_01_flow_uebersicht.png)

Im [Groupalarm Webinterface](https://app.groupalarm.com/login) anmelden und einen neuen Flow anlegen:

**Admin → Flows → „Flow anlegen"**

![Groupalarm: Admin → Flows mit Schaltfläche „Flow anlegen"](/images/connect/schnittstellen/groupalarm_02_flow_anlegen.png)

Der Flow besteht aus drei Elementen in dieser Reihenfolge:

1. **Alarm ausgelöst** (Trigger)
2. **JSON Parser**
3. **HTTP Client**

![Groupalarm: Fertiger Flow mit den Elementen Alarm ausgelöst, JSON Parser und HTTP Client](/images/connect/schnittstellen/groupalarm_03_flow_fertig.png)

![Groupalarm: Detailansicht der Flow-Elemente](/images/connect/schnittstellen/groupalarm_04_flow_elemente.png)

---

### Flow Element 1: Alarm ausgelöst

Einen Namen für diesen Schritt vergeben, z. B. „Alarm ausgelöst". Weitere Konfiguration ist nicht erforderlich.

![Groupalarm: Flow-Element „Alarm ausgelöst"](/images/connect/schnittstellen/groupalarm_05_alarm_ausgeloest.png)

---

### Flow Element 2: JSON Parser

| Einstellung | Wert |
|---|---|
| **JSON: Input-Funktion** | Alarm ausgelöst |
| **Entität** | Alle Felder |

Neue Variable hinzufügen:

| Einstellung | Wert |
|---|---|
| **Name** | `json` |
| **Pfad** | siehe unten |

**Pfad:**
```
{"Start":event.startDate,"Status":"new","AlarmEnabled":true,"Keyword":event.name,"Address":optionalContent.address,"Position":{"Latitude":optionalContent.latitude,"Longitude":optionalContent.longitude},"Facts":message,"Ric":creatorName,"Number":event.id}
```

Mit „Fertig" speichern.

![Groupalarm: Flow-Element „JSON Parser" mit Variable json](/images/connect/schnittstellen/groupalarm_06_json_parser.png)

---

### Flow Element 3: HTTP Client

| Einstellung | Wert |
|---|---|
| **HTTP-Methode** | `POST` |
| **URL** | `https://connectapi.feuersoftware.com/interfaces/public/operation` |
| **Fehler ignorieren** | Aktiv |

**Header-Felder:**

| Feld | Wert |
|---|---|
| `Authorization` | `bearer <Connect API-Key des Standorts>` |
| `Accept` | `application/json` |
| `Content-Type` | `application/json` |

Bei **Body** auf „JSON Parser" umstellen und Entität auf `json` ändern. Mit „Fertig" speichern.

---

## Abschluss

Den Flow über den Speichern-Button sichern. Beim nächsten Alarm in Groupalarm erfolgt automatisch eine Weiterleitung an Feuersoftware Connect.
