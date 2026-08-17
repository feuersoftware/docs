---
title: Einsätze
description: Einsatzübersicht, Details, Protokoll und Kartenansicht im Connect Portal
---

# Einsätze

Die Einsatzverwaltung ist auf **Standort-Ebene** verfügbar. Auf **Organisations-Ebene** können Einsätze aller Standorte übergreifend eingesehen werden (sofern Einsatz-Sharing aktiviert ist).

---

## Einsatzübersicht

**Seitenleiste → Einsätze**

![Screenshot: Einsatzübersicht](/images/connect/07_einsatz_liste.png)

Die Übersicht zeigt alle Einsätze des Standorts in einer Tabelle mit:

- Startdatum und -uhrzeit
- Stichwort
- Adresse
- Status (aktiv / abgeschlossen)

### Suche und Filter
- Freitextsuche über alle Felder
- Filterung nach Zeitraum
- Filterung nach Status (Aktiv / Abgeschlossen)
- Filterung nach Standort (auf Organisationsebene)

### Kartenansicht
Über den Button **„Karte"** wechselst du zur geografischen Darstellung aller Einsätze.

---

## Einsatz anlegen (manuell)

![Screenshot: Einsatz anlegen](/images/connect/07_einsatz_anlegen.png)

1. **Seitenleiste → Einsätze → „Einsatz anlegen"**
2. Felder ausfüllen:
   - **Stichwort** (aus konfigurierten Stichwörtern wählen oder frei eingeben)
   - **Adresse** (Straße, Hausnummer, PLZ, Ort)
   - **Startzeit**
   - **Alarmgruppen** (welche Einheiten alarmiert werden)
   - **Fahrzeuge** (welche Fahrzeuge zugeordnet werden)
   - **Zusatzinformationen** (optional)
3. **„Einsatz erstellen"** klicken

Der Einsatz wird sofort in der EinsatzApp, im EinsatzManager und auf dem EinsatzMonitor angezeigt.

---

## Einsatz-Detailansicht

Einen Einsatz in der Übersicht antippen → Detailansicht mit mehreren Tabs:

![Screenshot: Einsatz-Detailansicht](/images/connect/07_einsatz_detail.png)

### Tab: Allgemein
- Stichwort, Adresse, Start- und Endzeit
- Zugeordnete Alarmgruppen und Fahrzeuge
- Personenstatus (wer kommt / wer kommt nicht)
- Karte mit Einsatzort und Fahrzeugpositionen
- Zusatzinformationen und Dynamische Felder

### Tab: Protokoll
Chronologisches Protokoll aller Ereignisse des Einsatzes:
- Alarmierungszeitpunkt
- Statusmeldungen der Einsatzkräfte
- Fahrzeugbewegungen
- Manuelle Einträge aus dem EinsatzManager

Das Protokoll kann nach Sichtbarkeit gefiltert werden (öffentlich / intern). Jeder Eintrag zeigt zudem seine Herkunft (EinsatzApp, ConnectPortal, EinsatzTablet oder EinsatzManager) – bei Einträgen aus dem EinsatzManager inklusive Benutzername.

> Ein detailliertes **Zugriffsprotokoll** (wer den Einsatz wann und wie lange angesehen hat) steht aktuell im [EinsatzManager](/einsatzmanager/05_einsatzdetails#zugriffsprotokoll) zur Verfügung.

---

## Einsatzbericht herunterladen

Für abgeschlossene Einsätze kann ein Einsatzbericht als PDF heruntergeladen werden. Welche Seiten/Inhalte der Bericht enthält, wird zentral in den [Organisationseinstellungen](./12_organisationseinstellungen#einsatzberichte) festgelegt.

### Vollständigkeits-Check

![Screenshot: Vollständigkeits-Check mit Statuskacheln in der Einsatz-Detailansicht](/images/connect/07_einsatzbericht_status.png)

Im Reiter **„Bericht"** der Einsatz-Detailansicht zeigt ein Statusbereich auf einen Blick, welche für den Bericht relevanten Angaben bereits vorhanden sind (grün) und welche noch fehlen (orange) – u. a.:

- Stichwort, Sachverhalt, Adresse, Melder, Kategorie, Enddatum
- Einsatzleiter, Protokollant sowie die weiteren Berichtsfelder (siehe Tabelle unten)
- Fahrzeuge ohne eingetragene Besatzungsstärke oder mit abweichender Anzahl zugeordneter Personen

Solange Pflichtangaben fehlen, erscheint zusätzlich ein Hinweisbanner mit der Schaltfläche **„Einsatzdaten vervollständigen"**.

### Erweiterte Berichtsfelder

| Feld | Beschreibung |
|---|---|
| **Einsatzleiter** | Verantwortliche Führungskraft des Einsatzes |
| **Protokollant** | Name der Person, die den Bericht erstellt |
| **Lage beim Eintreffen** | Beschreibung der vorgefundenen Situation |
| **Tätigkeit** | Durchgeführte Maßnahmen |
| **Eigentümer/Halter** | Angaben zum betroffenen Eigentümer oder Halter |
| **Geschädigter** | Angaben zur geschädigten Person |
| **Verursacher** | Angaben zum Verursacher |
| **Eingesetzte Materialien** | Übersicht der verwendeten Einsatzmittel |
| **Noch zu erledigen (nach dem Einsatz)** | Offene Nacharbeiten oder Folgemaßnahmen |
| **Bemerkungen** | Allgemeine Anmerkungen zum Einsatz |

### Assistent „Einsatzdaten vervollständigen"

Der Assistent führt Schritt für Schritt durch alle fehlenden Angaben, bevor die Berichte heruntergeladen werden:

1. **Enddatum** setzen, falls der Einsatz noch nicht abgeschlossen ist (nur bei Einsätzen ab dem 01.08.2025)
2. **Sachverhalt**, **Kategorie** und **Melder**, falls nicht bereits erfasst
3. Für jedes betroffene Fahrzeug: **Besatzungsstärke** und ggf. **namentliche Besatzung**
4. **Einsatzleiter** und **Protokollant**
5. Die restlichen Berichtsfelder aus der Tabelle oben (Lage, Tätigkeit, Schadensinformationen, Materialien, Nachbereitung & Bemerkungen)
6. Abschließender **Download-Schritt** mit allen für den Einsatz verfügbaren Dokumenten:
   - **Einsatzbericht**
   - **Benutzerrückmeldungen** – Übersicht, wer alarmiert wurde und wie reagiert wurde
   - **Verdienstausfallbescheinigung** (sofern aktiviert, siehe [Weitere Funktionen](/einsatzapp/14_weiteres#verdienstausfallbescheinigung))

Jeder Schritt außer den Downloads kann über **„Überspringen"** ausgelassen werden; die Eingaben werden direkt beim Klick auf „Weiter" gespeichert.

Alternativ steht der klassische Weg weiterhin zur Verfügung: **Einsatz öffnen → Reiter „Bericht" → „Herunterladen"**.

Die Felder sind optional – der Bericht kann auch ohne Zusatzangaben heruntergeladen werden.

---

## Einsatz bearbeiten

In der Detailansicht → **„Bearbeiten"**:
- Stichwort, Adresse und Zeiten ändern
- Alarmgruppen und Fahrzeuge hinzufügen oder entfernen
- Einsatz manuell abschließen (Endzeit setzen)

---

## Einsatz abschließen

Einsätze werden automatisch abgeschlossen, wenn die Leitstelle ein Endsignal sendet. Manuell:

1. Einsatz öffnen → **„Bearbeiten"**
2. **„Einsatz abschließen"** klicken oder Endzeit manuell eintragen
3. Speichern

> Ein automatisches Beenden nach einer konfigurierbaren Zeit ist in den Connect Organisationseinstellungen konfigurierbar.

---

## Einsatz löschen

In der Detailansicht → **„Einsatz löschen"** → Bestätigungsdialog. Gelöschte Einsätze können nicht wiederhergestellt werden.

---

## Einsatz-Sharing (Organisations-Ebene)

Wenn Einsatz-Sharing aktiviert ist, können Einsätze eines Standorts für andere Standorte der Organisation sichtbar gemacht werden. Die Konfiguration erfolgt in den [Standort-Einstellungen](./05_standorte) und den [Organisationseinstellungen](./12_organisationseinstellungen).

---

## Einsatzdaten teilen

> **Wichtig:** Diese Funktion muss aktuell noch **individuell durch den Feuersoftware Support** für die jeweilige Organisation freigeschaltet werden. Ohne Freischaltung ist weder die Schaltfläche **„Einsatzdaten teilen"** in der Einsatz-Detailansicht noch der zugehörige Bereich in den Organisationseinstellungen sichtbar. Für eine Aktivierung bitte an [info@feuersoftware.com](mailto:info@feuersoftware.com) wenden. Damit zwei Organisationen tatsächlich Daten austauschen können, muss die Funktion bei **beiden Organisationen** freigeschaltet sein.

„Einsatzdaten teilen" (auch Einsatzdatenfreigabe genannt) ermöglicht den **Echtzeit-Austausch von Einsatzinformationen zwischen verschiedenen Standorten oder Organisationen** – z. B. wenn eine Leitstelle mehrere Feuerwehren zum selben Ereignis alarmiert und die beteiligten Kräfte gegenseitig über Fahrzeuge, Besatzung, Lagemeldungen und Protokolleinträge informiert bleiben sollen, ohne dass Daten doppelt gepflegt werden müssen.

Anders als beim oben beschriebenen **Einsatz-Sharing** (reine Sichtbarkeit von Einsätzen zwischen Standorten derselben Organisation) werden hier gezielt **einzelne Datentypen** eines Einsatzes mit **frei wählbaren** Standorten oder ganzen Organisationen ausgetauscht – auch über Organisationsgrenzen hinweg.

### Voraussetzung: Gleiche Einsatznummer

Zwei Einsätze können nur miteinander verbunden werden, wenn sie:

- die **identische Einsatznummer** besitzen (i. d. R. von der Leitstelle vergeben),
- beide noch **aktiv** sind (nicht abgeschlossen),
- jeweils zu einer Organisation gehören, für die **„Einsatzdaten teilen" freigeschaltet** ist.

Ohne Einsatznummer ist eine Freigabe nicht möglich.

### Freigabe manuell einrichten

![Screenshot: Dialog „Einsatzdaten teilen" in der Einsatz-Detailansicht](/images/connect/07_einsatzdaten_teilen.png)

**Einsatz-Detailansicht → „Einsatzdaten teilen"** (Schaltfläche nur mit der Berechtigung „Einsätze verwalten" sichtbar)

| Feld | Beschreibung |
|---|---|
| **Aktiviert** | Schaltet die Freigabe für diesen Einsatz ein |
| **Ebene** | **Organisation** – nur Standorte der eigenen Organisation kommen als Ziel infrage. **Leitstelle** – zusätzlich alle Organisationen derselben Leitstelle (nur verfügbar, wenn eine Leitstellenanbindung besteht) |
| **Freigebene Daten** | Zugewiesene Fahrzeuge, Besatzung (nur zusammen mit Fahrzeugen wählbar), Lagemeldungen, Einsatzprotokoll |
| **Freigabedauer** | 1 / 2 / 6 / 12 / 24 Stunden ab Einsatzbeginn – danach endet die Freigabe automatisch |
| **Zielstandorte** | Auswahl der Standorte bzw. Organisationen, mit denen der Einsatz verbunden werden soll (Vorschlagsliste basiert auf Einsätzen mit gleicher Einsatznummer, siehe unten) |

Im Auswahlfeld für Zielstandorte schlägt Connect automatisch alle **anderen aktiven Einsätze mit derselben Einsatznummer** vor, die für die gewählte Ebene infrage kommen.

### Verbindung bestätigen (beidseitige Freigabe)

Eine Verbindung zwischen zwei Einsätzen muss von **beiden Seiten** bestätigt werden, ähnlich einer Kontaktanfrage:

1. Standort/Organisation **A** wählt im Dialog den Einsatz von Standort/Organisation **B** als Ziel aus → für A erscheint der Status **„Ausgehende Anfrage"**, für B **„Eingehende Anfrage"**.
2. Standort/Organisation **B** öffnet ebenfalls „Einsatzdaten teilen" und nimmt die eingehende Anfrage an (bzw. wählt umgekehrt A als Ziel aus).
3. Sobald beide Seiten den jeweils anderen Einsatz als Ziel eingetragen haben, wechselt der Status auf **„Verbunden"** und die freigegebenen Daten werden gegenseitig live ausgetauscht.

Der Verbindungsstatus jedes Ziels wird direkt in der Zielliste angezeigt: *Keine Verbindung*, *Eingehende Anfrage*, *Ausgehende Anfrage* oder *Verbunden*.

> Im EinsatzManager wird auf der Schaltfläche „Einsatzdaten teilen" zusätzlich die Anzahl offener eingehender Anfragen als roter Zähler angezeigt.

### Automatische Freigabe per Vorlage

Damit die Freigabe nicht für jeden Einsatz manuell eingerichtet werden muss, kann eine **Vorlage** auf Standort- oder Organisationsebene hinterlegt werden (Standort-Vorlage hat Vorrang). Neue Einsätze mit passender Einsatznummer werden dann automatisch verbunden, sofern die Gegenseite ebenfalls eine passende aktive Vorlage besitzt. Details zur Einrichtung der Vorlage: [Organisationseinstellungen → Einsatzdaten teilen](/connect/12_organisationseinstellungen#einsatzdaten-teilen--vorlage-für-die-automatische-freigabe).

Automatisch übernommene Einstellungen sind im Dialog entsprechend gekennzeichnet und können bei Bedarf für den einzelnen Einsatz überschrieben werden.

### Freigabe beenden

Die Freigabe endet automatisch nach Ablauf der **Freigabedauer** oder wenn der Einsatz abgeschlossen wird. Bereits ausgetauschte Daten bleiben bis zu diesem Zeitpunkt einsehbar. Eine bereits abgeschlossene Freigabe kann nicht erneut aktiviert werden; die freigegebenen Daten bzw. Zielstandorte lassen sich in diesem Fall aber weiterhin zurücksetzen.

### Im EinsatzManager

Die gleiche Funktion steht mit identischem Funktionsumfang auch im **EinsatzManager** zur Verfügung, siehe [EinsatzManager: Einsatzdetails](/einsatzmanager/05_einsatzdetails#einsatzdaten-teilen).
