---
title: News & Termine
description: News-Beiträge und Termine erstellen und verwalten im Connect Portal
---

# News & Termine

News und Termine sind auf **Standort-Ebene** und **Organisations-Ebene** verfügbar. Auf Organisationsebene erstellte Inhalte sind für alle Standorte sichtbar, auf Standortebene nur für den jeweiligen Standort.

---

## News

**Seitenleiste → News**

### Übersicht
Die News-Übersicht zeigt alle Beiträge in chronologischer Reihenfolge mit Titel, Datum und Vorschau.

### News erstellen
1. **„News erstellen"** klicken
2. Felder ausfüllen:
   - **Titel** (Pflichtfeld)
   - **Inhalt** (Freitext mit Formatierung)
   - **Titelbild** (optional, Bild hochladen)
   - **Adressatengruppen** – welche Gruppen oder Alarmgruppen den Beitrag sehen können
3. **„Veröffentlichen"** klicken

Der Beitrag erscheint sofort in der EinsatzApp und im Connect-Dashboard. Benutzer mit aktivierten News-Benachrichtigungen erhalten eine Push-Benachrichtigung auf Ihr Mobiltelefon. News werden auch auf dem Einsatzmonitor in der Standby Anzeige angezeigt.

### News bearbeiten und löschen
News in der Übersicht antippen → **„Bearbeiten"** oder **„Löschen"**. Das Löschen erfordert eine Bestätigung.

---

## Termine

**Seitenleiste → Termine**

### Übersicht
Die Terminübersicht zeigt alle anstehenden Termine in einer Liste oder Kalenderansicht mit Titel, Datum, Uhrzeit und Standort.

### Kalender erstellen

Bevor Termine angelegt werden können, muss mindestens ein Kalender vorhanden sein. Pro Standort können mehrere Kalender angelegt werden.

**Seitenleiste → Termine → Kalender → „Neu"**

| Feld | Beschreibung |
|---|---|
| **Name** *(Pflichtfeld)* | Aussagekräftiger Name des Kalenders, z. B. „Einsatzabteilung" oder „Dienstplan" |
| **Farbe** *(Pflichtfeld)* | Farbe des Kalenders – Termine werden in der EinsatzApp in dieser Farbe angezeigt, um mehrere Kalender voneinander zu unterscheiden |
| **URL** | iCal-URL für einen Remote-Kalender (siehe unten). Leer lassen für einen lokalen Connect-Kalender. |
| **Erinnerung** | Optional: Push-Benachrichtigung an Mitglieder vor einem anstehenden Termin |
| **Sichtbarkeit eingeschränkt** | Wenn aktiviert, ist der Kalender nur für ausgewählte Benutzergruppen sichtbar |
| **Gruppen** | Wählbar sobald „Sichtbarkeit eingeschränkt" aktiv ist – legt fest, welche Gruppen den Kalender sehen können |

#### Lokaler Connect-Kalender

Beim lokalen Kalender werden Termine direkt im Connect Portal oder in der EinsatzApp erstellt und gepflegt. Das Feld **URL bleibt leer**.

Sobald ein lokaler Kalender angelegt ist, erscheint im Terminbereich die Schaltfläche **„Termin erstellen"**.

#### Remote-Kalender (iCal)

Beim Remote-Kalender werden Termine aus einem externen System – z. B. Google Kalender, Microsoft Outlook oder einem anderen Kalenderanbieter – über einen **iCal-Link** automatisch importiert. Termine können nicht in Connect bearbeitet werden, sondern nur im Quellsystem.

Hierzu wird die **öffentliche iCal-URL** (endet auf `.ics`) in das Feld **URL** eingetragen.

> **Beispiel Google Kalender:** In den Kalendereinstellungen unter „Öffentliche Adresse im iCal-Format" die URL kopieren. Der Kalender muss auf **„Öffentlich"** gestellt sein.

Connect ruft den Remote-Kalender automatisch ab. Um die Synchronisation sofort auszulösen, auf **„Kalender aktualisieren"** neben dem Kalender klicken.

---

### Termin erstellen
1. **„Termin erstellen"** klicken
2. Felder ausfüllen:

| Feld | Beschreibung |
|---|---|
| **Titel** | Bezeichnung des Termins (Pflichtfeld) |
| **Kalender / Standort** | Welchem Kalender/Standort der Termin zugeordnet wird |
| **Startdatum und -uhrzeit** | Beginn des Termins |
| **Enddatum und -uhrzeit** | Ende des Termins |
| **Ganztägig** | Termin ohne feste Uhrzeit |
| **Anmeldung aktivieren** | Ob Mitglieder sich an-/abmelden können |
| **Anmeldeschluss** | Bis wann eine Anmeldung möglich ist |
| **Beschreibung** | Detailangaben zum Termin |
| **Adressatengruppen** | Wer den Termin sieht |

3. **„Speichern"** klicken

### Anmeldefunktion
Wenn **„Anmeldung aktivieren"** gesetzt ist, können Mitglieder in der EinsatzApp auf den Termin reagieren:
- ✅ **Zugesagt** – Teilnahme bestätigt
- ❓ **Vielleicht** – unentschlossen
- ❌ **Abgesagt** – keine Teilnahme

Die aktuellen Anmeldungen sind in der Termindetailansicht im Connect Portal einsehbar.

> **Hinweis:** Wenn Termindetails nachträglich geändert werden, gehen bestehende An- und Abmeldungen **nicht** verloren, solange der Termin selbst nicht gelöscht wird. 
**Wenn Datum oder Uhrzeit geändert wird, verfallen die An- und Abmeldungen. Teilnehmer müssen sich dann erneut anmelden.**

### Termin bearbeiten und löschen
Termin in der Übersicht antippen → **„Bearbeiten"** oder **„Löschen"**. Das Löschen erfordert eine Bestätigung.

### Gerätekalender-Synchronisation
Mitglieder können in der EinsatzApp-Einstellung **„Termine mit Gerätekalender synchronisieren"** aktivieren, um alle Organisationstermine automatisch in ihren Gerätekalender zu exportieren.

---

## Orga-Kalender

Der Orga-Kalender ermöglicht das standortübergreifende Teilen von Terminen innerhalb einer gesamten Connect-Organisation. Mitglieder aller Standorte können auf diesen Kalender zugreifen und sich für Termine anmelden – ohne dass Einträge an jedem Standort separat gepflegt werden müssen.

### Orga-Kalender erstellen

Erfordert **Organisations-Administrator-Rechte**. Alternativ gibt es Orga Rollen für News- oder Kalenderadministratoren. 

1. Im Connect Portal zur **Organisations-Ebene** wechseln (Standort-Dropdown oben in der Seitenleiste → Organisation)
2. **Seitenleiste → Termine → Kalender**
3. **„Kalender erstellen"** klicken
4. Name und Einstellungen vergeben
5. Speichern

### Sichtbarkeit einschränken

Die Sichtbarkeit eines Orga-Kalenders kann auf bestimmte Gruppen eingeschränkt werden. Es können ausschließlich **Organisations-Gruppen** verwendet werden – Standort-Gruppen sind nicht geeignet.

> **Tipp:** Um den Verwaltungsaufwand zu minimieren, empfiehlt es sich, Gruppen automatisch auf Basis von Benutzerfunktionen zu befüllen (z. B. alle Benutzer mit der Funktion „Gruppenführer").
