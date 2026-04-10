---
title: Make.com
description: Make.com über Connect-Webhooks auslösen oder aus Make.com heraus Alarme in Connect erstellen
---

# Make.com

[Make.com](https://make.com) ist ein Cloud-Dienst, mit dem verschiedene Dienste vernetzt und automatisiert werden können. Bei Make.com gibt es einen **kostenlosen Account**, der für die meisten Anwendungsfälle ausreicht.

Die Integration mit Feuersoftware Connect funktioniert in zwei Richtungen:

- **Connect → Make.com:** Connect löst bei einem Alarm einen Webhook aus, den Make.com verarbeitet und daraufhin eigene Aktionen ausführt (z. B. Licht schalten, Nachricht senden)
- **Make.com → Connect:** Make.com empfängt einen externen Webhook (z. B. von einem Shelly oder Rauchwarnmelder) und erstellt daraus einen Alarm in Connect

---

## Connect → Make.com (Webhook)

Zur Ansteuerung von Make.com aus Connect heraus werden **Webhooks** verwendet. Bei einem Alarm ruft Connect eine Make.com-Webhook-URL auf und übergibt dabei Einsatzparameter wie Stichwort oder Adresse.

Die Einrichtung der Webhooks erfolgt im Connect Portal unter **Smart Home → Benutzer-Webhook** (für einzelne Benutzer) oder **Schnittstellen → Standort-Webhook** (für den gesamten Standort).

Alle Details zu Webhook-Einrichtung und verfügbaren Variablen: [→ Webhooks (Smart Home)](./webhooks)

---

## Make.com → Connect (Alarm via API)

Externe Systeme wie Shellys oder Rauchwarnmelder können Webhooks auslösen. Make.com kann diese Webhooks empfangen und daraus über die öffentliche Connect API einen Alarm erstellen.

### Schritt 1: Webhook in Make.com erstellen

Im Make.com-Szenario einen **Webhook** als Auslöser anlegen. Die generierte Webhook-URL kann von einem beliebigen externen System aufgerufen werden.

### Schritt 2: HTTP Request hinzufügen

Als nächsten Schritt im Szenario einen **HTTP-Request** hinzufügen mit folgender Konfiguration:

**URL:** `https://connectapi.feuersoftware.com/interfaces/public/operation`

**Method:** `POST`

**Headers:**

| Name | Wert |
|---|---|
| `Authorization` | `bearer APIKEY` *(Das Wort `bearer`, gefolgt von einem Leerzeichen und dem API-Key des Connect-Standorts)* |
| `Content-Type` | `application/json` |

**Body type:** Raw  
**Content type:** JSON (application/json)

**Request Content** (Beispiel, nach Bedarf anpassen):

```json
{
  "Start": "{{now}}",
  "Status": 0,
  "AlarmEnabled": true,
  "Keyword": "RWM [RAUCHWARNMELDER INTERN FAHRZEUG]",
  "Address": "Sankt Florian Straße 4, 65760 Eschborn",
  "Facts": "Ein Fahrzeug Rauchmelder hat ausgelöst",
  "Ric": "RWM-FHZ",
  "Source": "Shelly"
}
```

Der Inhalt kann frei angepasst werden – der JSON-Aufbau muss jedoch beibehalten werden.

Den API-Key des Connect-Standorts findest du im Connect Portal unter **Standort → Schnittstellen → Öffentliche Connect Schnittstelle**.

Nach erfolgreicher Auslösung des Webhooks wird in Connect ein Alarm mit den angegebenen Parametern angelegt.
