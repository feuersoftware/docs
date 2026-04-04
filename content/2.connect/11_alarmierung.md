---
title: Alarmierung
description: Stichwörter, Alarmgruppen, statische und dynamische AAO sowie Zusatzinformationen im Connect Portal konfigurieren
---

# Alarmierung

Die Alarmierungskonfiguration ist auf **Standort-Ebene** und teilweise auf **Organisations-Ebene** verfügbar. Hier werden Stichwörter, Alarmgruppen und Ausrückeordnungen (AAO) definiert, die bei eingehenden Alarmen automatisch angewendet werden.

---

## Stichwörter

**Seitenleiste → Alarmierung → Stichwörter**

![Screenshot: Stichwörter Übersicht](/images/connect/11_stichwoerter.png)

Stichwörter (auch Einsatzstichwörter) beschreiben die Art eines Einsatzes (z. B. „B2 – Brand Mittel", „TH1 – Technische Hilfe Klein").

### Standort-Ebene
Stichwörter auf Standortebene gelten nur für diesen Standort.

### Organisations-Ebene
Stichwörter auf Organisationsebene stehen allen Standorten zur Verfügung.

### Stichwort anlegen
1. **„Stichwort anlegen"** klicken
2. Felder ausfüllen:
   - **Bezeichnung** (z. B. „B2")
   - **Beschreibung** (z. B. „Brand Mittel")
   - **Kategorie** (z. B. Brand, Technische Hilfe, Rettungsdienst)
3. Speichern

---

## Alarmgruppen

**Seitenleiste → Alarmierung → Alarmgruppen**

![Screenshot: Alarmgruppe bearbeiten](/images/connect/11_alarmgruppen.png)

Alarmgruppen definieren, welche Mitglieder bei einem Alarm benachrichtigt werden. Sie können aus einzelnen Benutzern oder Gruppen zusammengestellt werden.

### Alarmgruppe anlegen
1. **„Alarmgruppe anlegen"** klicken
2. Name vergeben
3. Benutzer und/oder Gruppen hinzufügen
4. Speichern

Alarmgruppen werden in der AAO und bei manuell erstellten Einsätzen verwendet.

---

## Statische AAO (Alarm- und Ausrückeordnung)

**Seitenleiste → Alarmierung → Alarm-Regelwerk**

![Screenshot: Statische AAO – Regelwerk](/images/connect/11_aao_statisch.png)

Die statische AAO definiert, welche Alarmgruppen und Fahrzeuge bei einem bestimmten Stichwort automatisch alarmiert werden.

### Regel anlegen
1. **„Regel anlegen"** klicken
2. **Stichwort** auswählen (oder Stichwortmuster eingeben)
3. **Alarmgruppen** zuordnen – welche Gruppen alarmiert werden
4. **Fahrzeuge** zuordnen – welche Fahrzeuge dem Einsatz zugewiesen werden
5. Speichern

Wenn ein Einsatz mit dem konfigurierten Stichwort eingeht, werden die hinterlegten Alarmgruppen und Fahrzeuge automatisch aktiviert.

---

## Dynamische AAO

**Seitenleiste → Alarmierung → Dynamisches Regelwerk**

Das dynamische Regelwerk erlaubt komplexere Regeln auf Basis mehrerer Bedingungen (z. B. Tageszeit, Wochentag, aktuelle Verfügbarkeit).

### Dynamische Regel anlegen
1. **„Regel anlegen"** klicken
2. **Bedingungen** definieren:
   - Stichwort (oder Muster)
   - Zeitraum (z. B. Werktags 08:00–17:00)
   - Wochentag
   - Weitere Felder aus dem Einsatzdatensatz
3. **Aktionen** festlegen:
   - Alarmgruppen zuordnen
   - Fahrzeuge zuordnen
4. Speichern

Dynamische Regeln werden nach dem Eingang eines Einsatzes ausgewertet und überschreiben bei Übereinstimmung die statische AAO.

---

## Dynamische Zusatzinformationen

**Seitenleiste → Alarmierung → Zusatzinformationen**

Zusatzinformationen sind dynamisch befüllte Felder, die bei einem Einsatz angezeigt werden – z. B. Gefahrstoffhinweise, Gebäudedaten oder Anfahrtsbeschreibungen.

### Zusatzinformation anlegen
1. **„Zusatzinformation anlegen"** klicken
2. Felder konfigurieren:
   - **Bezeichnung** des Feldes
   - **Bedingung** – wann soll dieses Feld angezeigt werden (z. B. nur bei bestimmtem Stichwort oder Adressbereich)
   - **Inhalt** (statischer Text oder dynamisch befüllt über Schnittstelle)
3. Speichern

---

## Einsatz-Kategorien

**Seitenleiste → Alarmierung → Einsatz-Kategorien** *(nur Organisations-Ebene)*

Einsatz-Kategorien gruppieren Stichwörter nach Art des Einsatzes (z. B. Brand, Technische Hilfe, Rettungsdienst). Sie dienen der Statistik und Filterung.

---

## Einsatz-Einheiten

**Seitenleiste → Alarmierung → Einsatz-Einheiten**

Einsatz-Einheiten sind benannte Gruppen, die in einem Einsatz eingesetzt werden können (z. B. „Gruppe 1", „Angriffstrupp"). Sie werden im EinsatzManager zur Strukturierung der Einsatzkräfte verwendet.

### Einheit anlegen
1. **„Einheit anlegen"** klicken
2. Name vergeben
3. Optional: Mitglieder vorbelegen
4. Speichern

---

## Alert-Regeln

**Seitenleiste → Alert-Regeln** *(nur Organisations-Ebene)*

Alert-Regeln definieren automatische Benachrichtigungen für bestimmte Ereignisse – z. B. wenn ein Einsatz mit einem bestimmten Stichwort eingeht oder ein Fahrzeug einen bestimmten Status erreicht.

### Alert-Regel anlegen
1. **„Alert-Regel anlegen"** klicken
2. **Auslöser** definieren (Ereignistyp, Bedingungen)
3. **Empfänger** festlegen (Benutzer, Gruppen, E-Mail)
4. Speichern
