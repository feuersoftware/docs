---
title: Einsatzprotokoll.com
description: Einsatzberichte über die Webhook-Funktion von Feuersoftware Connect automatisch in Einsatzprotokoll.com anlegen
---

# Einsatzprotokoll.com

[Einsatzprotokoll.com](https://einsatzprotokoll.com/) bietet Hilfsorganisationen ein kostenloses Presseportal, das auf der eigenen Website verlinkt oder eingebunden werden kann. Einsatzberichte können über die Webhook-Funktion von Feuersoftware Connect automatisch angelegt werden – als Entwurf mit vorausgefüllten Einsatzdaten. Der Pressesprecher muss den Bericht anschließend nur noch mit Inhalt ergänzen und veröffentlichen.

> **Kostenlos für das Ehrenamt:** Der Dienst ist für ehrenamtliche Organisationen aus dem BOS-Bereich kostenlos (Feuerwehr, Rettungsdienst, THW u. a.).

---

## Registrierung

Registrierung unter: [register.einsatzprotokoll.com](https://register.einsatzprotokoll.com/)

Nach kurzer Zeit werden per E-Mail eine Bestätigung sowie die Zugangsdaten zugesendet.

---

## Grundeinstellungen

Das Portal nach eigenen Bedürfnissen einrichten: Fahrzeuge anlegen, Einheiten und Einsatzkategorien definieren usw. Weitere Informationen in der Anleitung des Herausgebers: [einsatzprotokoll.com/portal-konfiguration](https://www.einsatzprotokoll.com/portal-konfiguration)

---

## Anbindung per Webhook

Die Berichte werden über einen **Standort-Webhook** in Connect automatisch angelegt.

**Connect Portal → Standort → Schnittstellen → Standort-Webhooks → Neuen Webhook anlegen**

### Auslösezeitpunkt

| Zeitpunkt | Hinweis |
|---|---|
| **Bei Alarm** | Bericht wird sofort beim Eingang eines Einsatzes angelegt |
| **Bei Einsatzende** | Bericht wird angelegt, wenn der Einsatz in Connect geschlossen wird (z. B. bei WDX3-Leitstellenanbindung). Vorteil: Die Endzeit des Einsatzes wird direkt mitübergeben. |

### Webhook-URL

Folgende URL eintragen – `xxxxx` durch den eigenen Instanznamen und `TOKEN` durch den Access Token aus dem Einsatzprotokoll.com-Portal ersetzen:

```
https://xxxxx.einsatzprotokoll.com/rest/v1/bericht/create/feuersoftware?access=TOKEN&title={Stichwortübersetzung}&text={Sachverhalt}&address={Adresse}&start={Start}&ende={Ende}&anzeige=hidden
```

### Übergabeparameter

| Parameter | Beschreibung |
|---|---|
| `title` | Stichwort |
| `text` | Sachverhalt |
| `address` | Adresse des Einsatzortes (kann auch mit einzelnen Platzhaltern wie `{Stadt}`, `{Stadtteil}` befüllt werden) |
| `start` | Einsatzbeginn |
| `ende` | Einsatzende |
| `anzeige` | `hidden` = als Entwurf anlegen, `visible` = direkt veröffentlichen |

Die vollständige API-Dokumentation von Einsatzprotokoll.com: [api.int.einsatzprotokoll.com](https://api.int.einsatzprotokoll.com/#api-Webhook-feuersoftware)

---

Der Access Token wird im Portal von Einsatzprotokoll.com erstellt.
