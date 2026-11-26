---
title: Rollen und Rechtekonzept
description: Übersicht aller Rollen im FeuerSoftware Connect Portal – wofür jede Rolle gedacht ist, was sie darf und welche Rolle du für welche Aufgabe brauchst
---

# Rollen und Rechtekonzept

Im Connect Portal werden Berechtigungen über **vordefinierte Rollen** gesteuert. Eigene Rollen können nicht erstellt werden. Rollen werden entweder für die **ganze Organisation** oder für **einzelne Standorte** vergeben.

## Grundprinzipien

- **Rechte werden addiert.** Hat ein Benutzer mehrere Rollen, darf er alles, was eine seiner Rollen erlaubt. Es gibt keine Rolle, die Rechte wegnimmt.
- **Standortrollen gelten nur für den jeweiligen Standort.** Wer am Standort A Gerätewart ist, darf an Standort B keine Fahrzeuge bearbeiten, solange er dort nicht ebenfalls eine passende Rolle hat.
- **Organisationsadministratoren dürfen alles an jedem Standort**, ohne dass sie dort zusätzlich eine Standortrolle brauchen.
- **Jedes Standortmitglied ist automatisch Standardbenutzer.** Damit kann es die wichtigsten Inhalte seines Standorts lesen (siehe [Standardbenutzer](#standardbenutzer)). Alle weiteren Rollen kommen obendrauf.

---

## Welche Rolle brauche ich wofür?

Die folgende Tabelle hilft bei der Auswahl. Sie nennt jeweils die **kleinste** Rolle, mit der die Aufgabe möglich ist. Organisations- und Standortadministratoren dürfen die Aufgabe immer ebenfalls.

| Aufgabe | Passende Rolle |
|---|---|
| Benutzer einladen, importieren, bearbeiten, deaktivieren | Benutzeradministrator |
| Benutzer nur einladen (ohne sie bearbeiten zu dürfen) | Moderator |
| Alarmgruppen anlegen und Benutzern zuweisen | Benutzeradministrator |
| Gruppen eines Standorts verwalten, Benutzer Gruppen zuordnen | Benutzeradministrator |
| Standortrollen an Mitglieder vergeben | Benutzeradministrator |
| Mailing-Listen eines Standorts verwalten | Benutzeradministrator |
| Fahrzeuge anlegen, bearbeiten, löschen | Gerätewart |
| EinsatzTablet / Fahrzeug-App für ein Fahrzeug freischalten | Gerätewart |
| GPS-Tracker, CVM-Module, Fahrzeugeigenschaften, Fahrzeug-Dashboards pflegen | Gerätewart |
| Mängelmeldungen bearbeiten und abschließen | Gerätewart |
| Fahrzeugverfügbarkeit und Fahrzeugbild ändern | Moderator oder Gerätewart |
| News eines Standorts schreiben | Standort News-Administrator (oder Moderator) |
| Info-Board pflegen | Moderator |
| Termine eintragen | Standort Termin-Administrator (oder Moderator) |
| Kalender anlegen und verwalten | Standort Kalender-Administrator |
| Am EinsatzManager anmelden | EinsatzManager |
| Alarmmonitore (EinsatzMonitor) einrichten, bearbeiten, löschen | Standortadministrator |
| EinsatzMonitor per EinsatzApp fernsteuern | Standortadministrator |
| Standortschnittstellen, Webhooks, AAO, Einheiten, Bluetooth-Beacons, Verfügbarkeitsalarm | Standortadministrator |
| Einsätze bearbeiten, Einsatzdaten teilen, Einsatzprotokoll | Standortadministrator |
| Ereignisprotokoll des Standorts einsehen | Standortadministrator |
| Organisationseinstellungen, Standorte anlegen, Funktionen, Stichwörter, Lizenzen | Organisationsadministrator |
| Regeln für Gerätewarnungen anlegen | Organisationsadministrator |

---

## Rollen auf Organisationsebene

### Organisationsadministrator

**Zweck:** Vollständige Verwaltung der Organisation. Typisch für Kommandanten, Wehrleitung oder den IT-Verantwortlichen der Gemeinde.

**Darf:**
- alles, was ein Standortadministrator darf – und zwar an **allen** Standorten der Organisation
- Organisationseinstellungen, Datenaufbewahrung, Lizenzen und Connect-Storage-Speicher
- Standorte anlegen und löschen
- Funktionen, Stichwörter und Einsatzkategorien
- Organisationsgruppen, Organisations-Mailinglisten und Organisationsrollen
- organisationsweite Alarmmonitore
- Organisationsschnittstellen (z. B. Cobra, DE-Alarm, Divera, FAS, Navlog, RLP-XML, Wasserkarte, Public API der Organisation)
- Regeln für Gerätewarnungen anlegen und bearbeiten
- Mängelkategorien der Organisation
- einer Fahrzeug-App den Zugriff auf alle Einsätze der Organisation erlauben
- WDX-, Alamos- bzw. Vivasecur-Ressourcen, die eine Leitstelle freigegeben hat, den eigenen Standorten zuordnen

### Organisation News-Administrator

**Zweck:** Organisationsweite Nachrichten an alle Standorte. Typisch für Öffentlichkeitsarbeit oder Pressewart der Organisation.

**Darf:**
- News auf Organisationsebene lesen, erstellen, bearbeiten und löschen
- Organisations-Mailinglisten einsehen
- Organisationskalender lesen

### Organisation Kalender-Administrator

**Zweck:** Pflege der organisationsweiten Kalender, z. B. für einen gemeinsamen Übungs- oder Lehrgangskalender.

**Darf:**
- Kalender auf Organisationsebene anlegen, bearbeiten und löschen
- Termine in diesen Kalendern anlegen, bearbeiten und löschen
- Organisations-News lesen

### Organisation Termin-Administrator

**Zweck:** Termine in bestehende Organisationskalender eintragen, ohne die Kalender selbst verändern zu dürfen.

**Darf:**
- Termine auf Organisationsebene anlegen, bearbeiten und löschen
- Organisationskalender und Organisations-News lesen

### Übersicht Organisationsebene

| Rolle | Organisations­einstellungen, Standorte, Funktionen, Schnittstellen | Regeln für Gerätewarnungen | News | Kalender | Termine |
|---|---|---|---|---|---|
| Organisationsadministrator | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` |
| Organisation News-Administrator | `—` | `—` | `R/W` | `R` | `R` |
| Organisation Kalender-Administrator | `—` | `—` | `R` | `R/W` | `R/W` |
| Organisation Termin-Administrator | `—` | `—` | `R` | `R` | `R/W` |

---

## Rollen auf Standortebene

Alle Standortrollen dürfen zusätzlich die **News und Kalender der Organisation lesen**.

### Standardbenutzer

**Zweck:** Grundrechte jedes Standortmitglieds. Diese Rolle wird nicht vergeben, sondern gilt automatisch für alle Mitglieder.

**Darf (lesen):**
- News, Kalender und Termine
- Info-Board und die dort verknüpften Nextcloud-Dateien
- Benutzerliste des Standorts
- Einsätze inkl. Anhänge
- Fahrzeuge und Fahrzeugverfügbarkeit
- Mängelmeldungen
- Standort-Mailinglisten

**Darf (anlegen):**
- Mängelmeldungen erstellen und kommentieren

### Standortadministrator

**Zweck:** Vollständige Verwaltung eines Standorts. Typisch für Wehrführer oder den Standortverantwortlichen.

**Darf:** alles am Standort, insbesondere
- Standorteinstellungen und Standortdaten
- Alarmmonitore (EinsatzMonitor) und weitere Geräte des Standorts einrichten, bearbeiten und löschen
- den EinsatzMonitor per EinsatzApp fernsteuern (Befehle an das Gerät senden)
- EinsatzManager-Zugänge (Geräte-Accounts) verwalten
- Standortschnittstellen (z. B. TetraControl, Elion, Fireboard, Lupus, X-Sense, Homematic, RescueTablet, Public API des Standorts), Webhooks und Nextcloud-Anbindung
- Alarm- und Ausrückeordnung (AAO), dynamische Zusatzinformationen, Einheiten, Bluetooth-Beacons
- Verfügbarkeitsalarm
- Einsätze bearbeiten, Einsatzprotokoll, Fahrzeug-/Personalzuordnung im Einsatz, Einsatzdaten teilen, Push-Zustellungen einsehen
- Ereignisprotokoll des Standorts einsehen
- Mängelkategorien des Standorts
- Regeln für Gerätewarnungen lesen und Fahrzeugeigenschaften zuordnen
- alles, was Benutzeradministrator, Gerätewart, Moderator, News-, Kalender- und Termin-Administrator dürfen

**Darf nicht:** Organisationseinstellungen ändern, Standorte anlegen oder löschen, Funktionen und Stichwörter der Organisation pflegen, Regeln für Gerätewarnungen anlegen.

### Benutzeradministrator

**Zweck:** Personalverwaltung eines Standorts, ohne Zugriff auf Technik und Einstellungen. Typisch für Schriftführer oder Personalverantwortliche.

**Darf:**
- Benutzer einladen, per CSV importieren, bearbeiten, deaktivieren und löschen
- Einladungen, Bestätigungs-E-Mails und Passwort-Resets senden sowie die Zwei-Faktor-Anmeldung eines Benutzers zurücksetzen
- **Alarmgruppen** anlegen, bearbeiten, löschen und Benutzern zuweisen
- **Gruppen** des Standorts anlegen, bearbeiten und Benutzer zuordnen
- **Standortrollen** an Mitglieder des Standorts vergeben und entziehen
- Standort-Mailinglisten anlegen, bearbeiten und löschen
- bei Benutzern deren Geräte (EinsatzApp), Benachrichtigungseinstellungen, Verfügbarkeit und Bluetooth-Beacons verwalten

> **Wichtig:** Der Benutzeradministrator kann **alle Standortrollen** vergeben – also auch die Rolle Standortadministrator. Vergib die Rolle deshalb nur an vertrauenswürdige Personen. Rollen kann er nur an Benutzer vergeben, die Mitglied des Standorts sind.

**Darf nicht:** Monitore und Geräte, Schnittstellen, Fahrzeuge oder Einsätze bearbeiten.

### Gerätewart

**Zweck:** Fahrzeug- und Tabletpflege. Typisch für Gerätewarte und Maschinisten.

**Darf:**
- Fahrzeuge anlegen, bearbeiten und löschen
- EinsatzTablets bzw. die Fahrzeug-App für ein Fahrzeug freischalten
- Fahrzeugverfügbarkeit und Fahrzeugbild ändern
- GPS-Tracker, CVM-Module, Fahrzeugeigenschaften und Fahrzeug-Dashboards pflegen
- Regeln für Gerätewarnungen lesen und den Fahrzeugeigenschaften zuordnen
- Mängelmeldungen lesen, bearbeiten und abschließen

**Darf nicht:** Alarmmonitore und andere Standortgeräte verwalten, Mängelkategorien anlegen, Benutzer verwalten.

### Moderator

**Zweck:** Redaktion und Information am Standort. Typisch für Jugendwart, Ausbilder oder Pressewart.

**Darf:**
- News erstellen, bearbeiten und löschen
- Info-Board pflegen
- Termine eintragen, bearbeiten und löschen (Kalender selbst nur lesen)
- Fahrzeugverfügbarkeit und Fahrzeugbild ändern
- neue Benutzer **einladen** (bestehende Benutzer aber nicht bearbeiten)

### Standort News-Administrator

**Zweck:** Nur News am Standort schreiben.

**Darf:** News des Standorts lesen, erstellen, bearbeiten und löschen.

### Standort Kalender-Administrator

**Zweck:** Kalender des Standorts verwalten.

**Darf:** Kalender des Standorts anlegen, bearbeiten und löschen sowie Termine darin verwalten.

### Standort Termin-Administrator

**Zweck:** Termine in bestehende Kalender eintragen.

**Darf:** Termine des Standorts anlegen, bearbeiten und löschen; Kalender nur lesen.

### EinsatzManager

**Zweck:** Zugang zum [EinsatzManager](/einsatzmanager/02_zugang_und_anmeldung) für diesen Standort. Typisch für Einsatzleiter und Führungsassistenten.

**Darf:** sich am EinsatzManager anmelden und dort mit den Einsätzen des Standorts arbeiten. Im Connect Portal gibt die Rolle keine zusätzlichen Rechte.

---

## Übersicht Standortebene

Die Tabelle zeigt, was ein **Mitglied des Standorts** mit der jeweiligen Rolle darf. Die Rechte des Standardbenutzers sind also bereits enthalten.

### Legende

| Symbol | Bedeutung |
|---|---|
| `R/W` | lesen und bearbeiten (inkl. anlegen und löschen) |
| `R/+` | lesen und neu anlegen (z. B. Benutzer einladen, Mängel melden), aber nicht bearbeiten |
| `R` | nur lesen |
| `W` | bearbeiten |
| `—` | kein Zugriff |

| Rolle | Standort­einstellungen & Schnittstellen | Monitore & Geräte | Benutzer | Rollen vergeben | Gruppen & Alarmgruppen | Fahrzeuge | Fahrzeug­verfügbarkeit | Mängel­meldungen | Einsätze | News | Info-Board | Kalender | Termine | Verfügbarkeits­alarm | Ereignis­protokoll |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Standardbenutzer | `—` | `—` | `R` | `—` | `—` | `R` | `R` | `R/+` | `R` | `R` | `R` | `R` | `R` | `—` | `—` |
| Standortadministrator | `R/W` | `R/W` | `R/W` | `W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R` |
| Benutzeradministrator | `—` | `—` | `R/W` | `W` | `R/W` | `R` | `R` | `R/+` | `R` | `R` | `R` | `R` | `R` | `—` | `—` |
| Gerätewart | `—` | `—` | `R` | `—` | `—` | `R/W` | `R/W` | `R/W` | `R` | `R` | `R` | `R` | `R` | `—` | `—` |
| Moderator | `—` | `—` | `R/+` | `—` | `—` | `R` | `R/W` | `R/+` | `R` | `R/W` | `R/W` | `R` | `R/W` | `—` | `—` |
| Standort News-Administrator | `—` | `—` | `R` | `—` | `—` | `R` | `R` | `R/+` | `R` | `R/W` | `R` | `R` | `R` | `—` | `—` |
| Standort Kalender-Administrator | `—` | `—` | `R` | `—` | `—` | `R` | `R` | `R/+` | `R` | `R` | `R` | `R/W` | `R/W` | `—` | `—` |
| Standort Termin-Administrator | `—` | `—` | `R` | `—` | `—` | `R` | `R` | `R/+` | `R` | `R` | `R` | `R` | `R/W` | `—` | `—` |
| EinsatzManager | `—` | `—` | `R` | `—` | `—` | `R` | `R` | `R/+` | `R` | `R` | `R` | `R` | `R` | `—` | `—` |

> Der Organisationsadministrator hat an jedem Standort dieselben Rechte wie ein Standortadministrator.

> Die Berechtigung **„Einsätze verwalten"**, auf die an anderer Stelle verwiesen wird (z. B. beim [Zugriffsprotokoll im EinsatzManager](/einsatzmanager/05_einsatzdetails#zugriffsprotokoll) oder bei [„Einsatzdaten teilen"](/connect/07_einsaetze#einsatzdaten-teilen)), entspricht `R/W` in der Spalte **Einsätze** – also dem Standort- bzw. Organisationsadministrator.

---

## Rollen an Standorten, bei denen man kein Mitglied ist

Eine Standortrolle kann auch an Benutzer vergeben werden, die nicht Mitglied des Standorts sind, z. B. wenn ein Gerätewart die Fahrzeuge mehrerer Standorte betreut. Dann gilt:

- Der Benutzer erhält **genau die Rechte der Rolle** an diesem Standort.
- Die Rechte des **Standardbenutzers fehlen**, weil er kein Mitglied ist. Ein Gerätewart sieht dort also die Fahrzeuge und Mängelmeldungen, aber z. B. keine News, Termine oder Einsätze.
- Die Rolle **EinsatzManager** macht einen fremden Standort im Portal nicht sichtbar; sie wirkt nur im EinsatzManager.

---

## Mailing-Listen

Organisations-Mailinglisten verwaltet der Organisationsadministrator; Benutzer mit der Rolle **Organisation News-Administrator** können sie einsehen. Standort-Mailinglisten kann jedes Standortmitglied einsehen; anlegen, bearbeiten und löschen dürfen Standortadministrator und Benutzeradministrator.

## Dateispeicher & Anhänge

Nextcloud verbinden und die Speicherzuordnung ändern darf der Standortadministrator; Connect-Storage-Speicher buchen, kündigen und aufräumen der Organisationsadministrator. Einsatzanhänge sehen zusätzlich Gruppen mit der Sichtbarkeit „Einsatzanhänge". Vollständige Übersicht: [Dateispeicher & Anhänge – Berechtigungen](/connect/23_dateispeicher#berechtigungen).

---

## Leitstellen-Organisationen

Leitstellen (WDX- oder Alamos-Organisationen) sind ein eigener Organisationstyp mit einer zusätzlichen Rolle:

| Rolle | Beschreibung |
|---|---|
| **Leitstellenadministrator** | Gibt Mitgliedsorganisationen der Leitstelle eine Teilmenge an WDX-Ressourcen/-Geräten, Alamos-Einheiten bzw. Vivasecur-Geräten frei (siehe [ISE Cobra 4 – WDX3: Ressourcen-Freigabe](/connect/schnittstellen/leitstelle/cobra#ressourcen-freigabe-für-organisationen)). |

Diese Rolle ist nur innerhalb einer Leitstellen-Organisation zuweisbar. Die Zuordnung der freigegebenen Ressourcen zu den eigenen Standorten übernimmt anschließend der Organisationsadministrator der Mitgliedsorganisation.
