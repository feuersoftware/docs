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

> **Hinweis:** Die folgenden Einstellungen sind nur als Organisationsadministrator änderbar.

### Stichwortübersetzung

Über die Stichwortübersetzung können Stichworte in ein besser verständliches Format übersetzt werden. Beispielsweise kann das Stichwort „F Wald 1" zu „Waldbrand" übersetzt werden. Die übersetzte Bezeichnung wird dann in der EinsatzApp und am EinsatzMonitor angezeigt.

### CSV Import / Export

Mehrere Stichworte können als CSV exportiert bzw. eine vorhandene CSV-Datei importiert werden. Verwende dafür die entsprechenden Buttons oberhalb der Stichwort-Tabelle.

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

**Seitenleiste → Alarmierung → Dyn. Zusatzinfos**

> Mindestvoraussetzung: EinsatzApp Version 2023.03

Mit den Dynamischen Zusatzinfos (kurz: Dyn. Zusatzinfos) lassen sich individuelle Regeln erstellen, die unter konfigurierten Kriterien entsprechende Zusatzinfos zu Einsätzen hinzufügen. Regeln prüfen auf bekannte Felder wie Stichwort, Ort, Ortsteil, Straße oder Sachverhalt und fügen entsprechende Zusatzfelder hinzu. Die Zusatzfelder werden dann in den Einsatzdetails im Connect Portal, in der EinsatzApp und am EinsatzMonitor angezeigt.

**Beispiele:**

> **Stadt = Flammenhausen** **UND** **Objekt = Krankenhaus** → Zusatzfeld „Hinweis Gebäudefunk" mit Wert „Gebäudefunk Kanal XYZ"
>
> **Stichwort enthält Unwetter** → Zusatzfeld „Hinweis Unwetter" mit Wert „Wassersauger mitnehmen, Lager 1 Regal 3"

### Einrichtung

Dynamische Zusatzinfos können sowohl auf Organisationsebene als auch auf Standortebene eingerichtet werden. **Angelegte Regeln gelten immer für die gesamte Organisation**, auch wenn sie auf Standortebene angelegt werden.

Hierfür wird mindestens das Recht „Standortadministrator" benötigt.

Wähle den Menüpunkt **„Alarm"** und anschließend **„Dyn. Zusatzinfos"**. Klicke auf **„Neu"** um eine neue Regel anzulegen.

### Regel konfigurieren

**Name**

Vergib der Regel einen aussagekräftigen Namen, über den sie eindeutig identifiziert werden kann.

**Bedingungen**

Erstelle Bedingungen, auf die die Regel angewendet werden soll. Zugegriffen werden kann auf allgemeine Felder (z. B. Stadt, Straße, Stichwort, Sachverhalt). Mehrere Bedingungen werden **UND-verknüpft** – alle Bedingungen müssen zutreffen, damit die Regel angewendet wird.

Beispiel:
- **Stadt / Gemeinde ist gleich „Flammenhausen"** UND **Zusatzfeld „Objekt" ist gleich „Klinikum"**

Zusätzlich kann ein **Zeitfilter** eingerichtet werden, damit die Regel nur zu bestimmten Tageszeiten oder an bestimmten Wochentagen ausgeführt wird (z. B. nur zwischen 07:00 und 16:00 Uhr).

**Zusätzliche Hinweise**

Hier werden die Felder und Inhalte definiert, die hinzugefügt werden, sobald die Regel greift. Folgende Typen stehen zur Verfügung:

| Typ | Beschreibung |
|---|---|
| **Text** | Einfacher Text, max. 2000 Zeichen. Z. B. „Funkkanal XYZ schalten". |
| **Dokument-Referenz** | Pfad zu einem Ordner oder einer Datei in der Nextcloud, z. B. `/Feuerwehrplan/Klinikum`. Setzt eine eingerichtete Nextcloud-Verbindung in der EinsatzApp voraus. |
| **Weblink** | Eine URL, z. B. `https://www.feuerwehr-flammenhausen.de`. Wird direkt aus der App heraus geöffnet. |

### Anzeige

**Connect Portal**

Die hinzugefügten Zusatzfelder werden unter den Einsatzdetails angezeigt. Unter „Dynamische Zusatzinformationen" erscheinen die Namen der zutreffenden Regeln, unter „Zusätzliche Hinweise" die eigentlichen Informationen.

**EinsatzApp**

Die Dynamischen Zusatzinformationen erscheinen in der Einsatzanzeige unter dem Punkt „Zusätzliche Informationen". Durch Antippen wird der Bereich aufgeklappt. Dokument-Referenzen sind nur sichtbar, wenn auf dem Gerät eine Nextcloud konfiguriert ist. Weblinks öffnen sich direkt im Browser.

**EinsatzMonitor**

Am EinsatzMonitor werden die Zusatzinformationen im unteren Bereich des Einsatzes angezeigt. Es werden ausschließlich Texthinweise angezeigt.

### Berechtigungen

Die Dynamischen Zusatzinformationen können über Benutzergruppen ein- oder ausgeblendet werden. Das entsprechende Recht heißt **„Zusätzliche Informationen"** und kann in den Benutzergruppen-Einstellungen aktiviert oder deaktiviert werden.

### Wichtige Hinweise

**Zeitverzögerung:** Die Regeln werden nicht direkt im Alarmablauf ausgeführt, sondern nachgelagert. Dies bringt eine Verzögerung von wenigen Sekunden, damit der Alarmablauf nicht durch das Regelwerk verlangsamt wird.

**Verhalten bei Einsatzupdate:** Die Regeln werden bei jedem Einsatzupdate erneut durchlaufen. So ist sichergestellt, dass z. B. bei einer Stichwort- oder Adressänderung die entsprechenden Regeln erneut ausgeführt werden.

**Löschen von Regeln:** Beim Löschen einer Regel werden die Informationen auch rückwirkend aus den Einsätzen entfernt. Das gleiche gilt beim Anpassen von Regeln.

---

## Einsatz-Kategorien

**Seitenleiste → Alarmierung → Einsatz-Kategorien** *(nur Organisations-Ebene)*

Einsatz-Kategorien gruppieren Stichwörter nach Art des Einsatzes (z. B. „Feuer", „Technische Hilfeleistung"). Jeder Kategorie kann eine Farbe zugewiesen werden. Diese Farbe wird am EinsatzMonitor und in der EinsatzApp entsprechend angezeigt. Anschließend können Einsatzstichworte in Connect eingepflegt und den entsprechenden Kategorien zugewiesen werden.

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

## Testalarm versenden

Eine Testbenachrichtigung kann direkt aus dem Connect Portal gesendet werden, um zu prüfen, ob Push-Benachrichtigungen beim gewünschten Gerät ankommen.

### Für einzelne Benutzer

1. Im Connect Portal anmelden
2. **Seitenleiste → Profil**
3. Im unteren Bereich sind alle registrierten Geräte des Benutzers aufgelistet
4. Gewünschtes Gerät auswählen und auf das **Glocken-Symbol** klicken

Die Testbenachrichtigung wird als Push-Nachricht zugestellt mit dem Text: **„Testbenachrichtigung – Dies ist eine Testnachricht"**

Die Nachricht verwendet kritischen Benachrichtigungsstatus – sie wird auch bei stummgeschaltetem Gerät angezeigt, sofern die App-Berechtigungen und das Alarmprofil entsprechend eingestellt sind.

> **Wichtig:** Testalarme erscheinen weder in der Einsatzhistorie noch als aktiver Einsatz – es wird ausschließlich eine Push-Benachrichtigung gesendet.

Nicht mehr genutzte Geräte können über das **Papierkorb-Symbol** entfernt werden.

### Für Administratoren (Gruppentest)

Als Administrator kann eine dedizierte Alarmgruppe für Testzwecke angelegt werden:

1. **Seitenleiste → Alarmierung → Alarmgruppen → „Alarmgruppe anlegen"**
2. Aussagekräftigen Namen vergeben (z. B. „Alarmgruppe Testbenachrichtigung")
3. Gewünschte Mitglieder hinzufügen
4. In der Alarmgruppenübersicht auf das **Glocken-Symbol** klicken

> **Achtung:** Nach dem Klicken auf das Glocken-Symbol erfolgt **keine weitere Bestätigungsabfrage** – die Benachrichtigung wird sofort gesendet.

### Regelmäßige Testalarme

Für wiederkehrende Testalarme kann die öffentliche Connect-Schnittstelle mit dem Einsatz-Upload-Tool und einem geplanten Task (z. B. Windows Task Scheduler) verwendet werden.

---

## Alert-Regeln

**Seitenleiste → Alert-Regeln** *(nur Organisations-Ebene)*

Alert-Regeln definieren automatische Benachrichtigungen für bestimmte Ereignisse – z. B. wenn ein Einsatz mit einem bestimmten Stichwort eingeht oder ein Fahrzeug einen bestimmten Status erreicht.

### Alert-Regel anlegen
1. **„Alert-Regel anlegen"** klicken
2. **Auslöser** definieren (Ereignistyp, Bedingungen)
3. **Empfänger** festlegen (Benutzer, Gruppen, E-Mail)
4. Speichern
