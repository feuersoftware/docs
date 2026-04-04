---
title: Einsätze
description: Einsatzbenachrichtigungen empfangen, Statusmeldungen abgeben und Einsatzdetails einsehen in der EinsatzApp
---

# Einsätze

Der Bereich „Einsätze" ist das Herzstück der EinsatzApp. Hier werden eingehende Alarme empfangen, der eigene Status gemeldet und alle Einsatzinformationen eingesehen.

---

## Eingehende Alarmbenachrichtigung

Wenn ein Einsatz ausgelöst wird, erscheint eine **Push-Benachrichtigung** auf dem Sperrbildschirm und im Benachrichtigungszentrum.

![Screenshot: Eingehende Alarm-Push-Benachrichtigung](/images/einsatzapp/04_alarm_notification.png)

Die Benachrichtigung enthält:
- Stichwort und Adresse des Einsatzes
- Zwei Aktionsbuttons direkt in der Benachrichtigung:
  - **✓ ANNEHMEN** – ich komme zum Einsatz
  - **✗ ABLEHNEN** – ich komme nicht

> Die Aktionsbuttons funktionieren auch ohne Öffnen der App. Der Status wird sofort übermittelt.

Beim Antippen der Benachrichtigung öffnet sich die App direkt in der **Einsatzdetailansicht**.

---

## Einsatzliste

Der Tab „Einsätze" (zweites Symbol in der Navigationsleiste) zeigt alle bisherigen Einsätze in einer Liste, neueste zuerst.

![Screenshot: Einsatzliste](/images/einsatzapp/04_einsatz_liste.png)

- Antippen eines Eintrags → Einsatzdetails
- Aktive Einsätze werden oben hervorgehoben

---

## Einsatzdetails

Die Detailansicht eines Einsatzes ist in mehrere Tabs unterteilt:

### Tab: Details

- **Stichwort** (z. B. B2 – Wohnungsbrand)
- **Adresse** mit Möglichkeit zur Navigation (Kartensymbol)
- **Langpress auf Adresse:** Adresse in die Zwischenablage kopieren
- Zeitpunkt der Alarmierung
- Zusätzliche Informationen aus der Leitstelle

#### Statusmeldung

Direkt in der Detailansicht kannst du deinen Status für diesen Einsatz setzen:

| Button | Bedeutung |
|---|---|
| **Komme** | Ich bin auf dem Weg zum Einsatz |
| **Komme später** | Ich komme mit Verzögerung |
| **Komme nicht** | Ich nehme nicht am Einsatz teil |

**Longpress auf „Komme später":** Öffnet einen Dialog zur Eingabe einer **genauen Ankunftszeit**. So können Einsatzleiter besser planen, wann du eintriffst.

![Screenshot: Einsatzdetails mit Statusbuttons](/images/einsatzapp/04_einsatz_details.png)

---

### Tab: Karte

Zeigt den Einsatzort auf einer Karte (Google Maps). Die Karte kann in den Normal- oder Satellitenmodus gewechselt werden.

---

### Tab: Fahrzeuge

Listet alle dem Einsatz zugewiesenen Fahrzeuge mit Status.

**Longpress auf einen Fahrzeugeintrag:** Zeigt ein **Detailpopup** mit vollständigen Informationen zur Fahrzeugzuweisung (Zeitstempel, Mannschaft, Status).

![Screenshot: Longpress auf Fahrzeugeintrag](/images/einsatzapp/04_fahrzeug_longpress.png)

---

### Tab: Personen

Übersicht aller Einsatzkräfte mit deren gemeldeten Status (Komme / Komme nicht / Komme später usw.).

**Longpress auf einen Personeneintrag:** Öffnet ein **Detailpopup** mit genauer Statusinformation und Zeitstempel.

![Screenshot: Longpress auf Personenstatus](/images/einsatzapp/04_person_longpress.png)

---

### Tab: Protokoll

Chronologisches Protokoll aller Ereignisse im Einsatz (Alarmierung, Statusmeldungen, Anmerkungen).

**Langpress auf Adress-/Textfeld im Protokoll:** Kopiert den Text in die Zwischenablage.

---

## Info-Alarm (Einsatzinformation)

Neben dem regulären Einsatz-Alarm gibt es den **Info-Alarm** – eine reine Information über einen laufenden Einsatz, ohne dass die Einsatzkraft alarmiert wird.

| | Regulärer Alarm | Info-Alarm |
|---|---|---|
| **Benachrichtigungstitel** | Stichwort des Einsatzes | „Einsatzinformation" |
| **Durchbricht Stummschaltung** | Ja (bei Modus „Immer laut") | Nein |
| **Person in Alarmierungsliste** | Ja | Nein |
| **Zugriff auf Einsatzdetails** | Ja | Ja |

**Typische Anwendungsfälle:** Ein Führungsoffizier in der Wache wird über den Ausrückeinsatz einer Teileinheit informiert, ohne selbst disponiert zu sein. Oder die Presse-/Social-Media-Zuständigen werden über einen Einsatz in Kenntnis gesetzt.

> Info-Alarme kommen als normale Benachrichtigung an – kein Ton bei stummem Gerät, kein Durchbrechen des Fokus-Modus.

---

## Einsatz manuell erstellen

Berechtigte Benutzer können einen Einsatz direkt aus der App heraus anlegen:

1. **Flammen-Symbol in der Menüleiste** antippen.
2. Im Schnellaktionen-Sheet auf **„Einsatz erstellen"** tippen.
3. Stichwort, Adresse und weitere Daten eingeben und speichern.
