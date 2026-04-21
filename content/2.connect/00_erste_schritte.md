---
title: Erste Schritte
description: Schnelleinstieg in FeuerSoftware Connect – Organisation registrieren, Standorte und Benutzer anlegen, Einsatzdaten empfangen und Alarmierung einrichten
---

# Erste Schritte mit Connect

FeuerSoftware Connect ist ein Cloud-Dienst, der alle FeuerSoftware-Produkte miteinander verbindet und den Datenaustausch ermöglicht. Eine Connect-Organisation besteht aus der Organisation selbst und beliebig vielen zugehörigen Standorten (Wachen). In der Regel wird pro Stadt oder Gemeinde eine Organisation erstellt – jede Orts- bzw. Stadtteilfeuerwehr erhält einen eigenen Standort.

---

## 1. Organisation registrieren

Unter [connect.feuersoftware.com](https://connect.feuersoftware.com/) auf **„Erstellen Sie eine neue Organisation"** klicken, das Formular ausfüllen und AGBs sowie Datenschutzerklärung akzeptieren. Nach der Registrierung mit dem neu erstellten Administrator-Account anmelden.

→ [Anmeldung & Registrierung](/connect/02_anmeldung)

---

## 2. Lizenzen

Connect ist kostenpflichtig. Nach einem **Testzeitraum von 90 Tagen** wird eine Lizenz benötigt. Lizenzen werden für ein Jahr erworben und verlängern sich nicht automatisch. 90 Tage vor Ablauf wird eine Erinnerung per E-Mail versendet.

→ [Lizenzierung und Lizenzbestellung](/connect/14_lizenzierung)

---

## 3. Standorte und Benutzer anlegen

Für jede Orts- oder Stadtteilfeuerwehr einen Standort anlegen. Innerhalb des Standorts können Benutzer per E-Mail eingeladen werden. Die eingeladenen Einsatzkräfte erhalten eine Einladungsmail zur Registrierung und können sich anschließend im Connect Portal sowie in der EinsatzApp anmelden.

Über das Rechtesystem können einzelnen Benutzern verschiedene Rechte zugewiesen werden. Empfehlung: Pro Standort mindestens einen **Standortadministrator** ernennen.

→ [Standorte](/connect/05_standorte)  
→ [Benutzerverwaltung](/connect/04_benutzerverwaltung)  
→ [Rechtekonzept](/connect/20_rechtekonzept_connect)  
→ [CSV Benutzerimport](/connect/18_benutzer_tools) — mehrere Benutzer auf einmal importieren

---

## 4. Fahrzeuge anlegen

Pro Standort können beliebig viele Fahrzeuge erstellt werden. Zu jedem Fahrzeug können Zusatzinformationen wie Besatzung oder Telefonnummer hinterlegt werden. Für die Übermittlung von Fahrzeugstatus und GPS-Daten (z. B. über eine Leitstellenanbindung oder TetraControl) muss die **ISSI** des Funkgerätes eingetragen sein.

→ [Fahrzeuge](/connect/06_fahrzeuge)

---

## 5. Einsatzdaten empfangen

Einsatzdaten können über verschiedene Wege in Connect eingehen. Die Wahl des richtigen Weges sollte gemeinsam mit der zuständigen Leitstelle abgeklärt werden.

→ [Leitstellenanbindungen](/connect/19_leitstellenanbindungen) — Übersicht aller unterstützten Anbindungen  
→ [Schnittstellen](/connect/13_schnittstellen) — alle weiteren Integrationen

### E-Mail Auswertung

Mit dem EinsatzMonitor kann ein E-Mail-Postfach (IMAP oder Exchange) auf eingehende Alarm-Mails überwacht und ausgewertet werden. Die Einsatzinfos werden anschließend an Connect übermittelt.

**Voraussetzung:** EinsatzMonitor erforderlich  
→ [EinsatzMonitor](/einsatzmonitor)

### Digitaler Meldeempfänger (DME)

Der EinsatzMonitor kann einen angeschlossenen digitalen Meldeempfänger überwachen – sowohl ältere POCSAG-Melder als auch TETRA-Melder (z. B. Airbus P8GR). Bei TETRA-Meldern wird zusätzlich TetraControl benötigt.

**Voraussetzung:** EinsatzMonitor erforderlich, ggf. TetraControl erforderlich  
→ [EinsatzMonitor](/einsatzmonitor)  
→ [TetraControl](/connect/schnittstellen/tetracontrol)

### Datei- / Fax-Auswertung

Der EinsatzMonitor kann einen Ordner auf eingehende Textdateien überwachen und auswerten. Mit einer OCR-Software können Alarmfaxe digitalisiert und vom EinsatzMonitor verarbeitet werden.

**Voraussetzung:** EinsatzMonitor erforderlich, ggf. OCR-Software erforderlich  
→ [EinsatzMonitor](/einsatzmonitor)

### WDX3 Schnittstelle (ISE Cobra)

Die WDX3-Schnittstelle des Einsatzleitprogramms Cobra 4 ermöglicht die direkte Übermittlung von Einsatzdaten, Fahrzeugstatus und GPS-Koordinaten an Connect. Die Einrichtung erfordert eine lizenzierte WDX3-Schnittstelle in der Leitstelle. Ein EinsatzMonitor ist dabei nicht zwingend erforderlich.

→ [Cobra / WDX3](/connect/schnittstellen/leitstelle/cobra)

### Öffentliche Connect API

Über die REST-API können Alarme aus Drittanbieterprodukten oder Eigenentwicklungen an Connect übermittelt werden.

→ [Öffentliche Connect API](/connect/schnittstellen/public_api)

### Manueller Alarm über die EinsatzApp

Speziell berechtigte Mitglieder können direkt in der EinsatzApp einen Alarm mit Adresse, Stichwort und weiteren Informationen auslösen – unabhängig von der Leitstelle.

→ [Einsätze in der EinsatzApp](/einsatzapp/04_einsaetze)

---

## 6. Alarm- und Ausrückeordnung einrichten

Nach der Einrichtung von Standorten, Benutzern und dem Einsatzdateneingang muss über die **Alarm- und Ausrückeordnung (AAO)** definiert werden, welche Benutzer bei welchem Einsatz alarmiert werden.

- **Alarmgruppen** anlegen (vergleichbar mit Alarmschleifen) und Benutzer zuweisen
- **AAO-Regeln** definieren – nicht nur anhand des Stichworts, sondern anhand aller Einsatzinformationen; tages- und uhrzeitabhängige Regeln sind möglich

→ [Alarmierung, AAO und Alarmgruppen](/connect/11_alarmierung)

---

## 7. Datenschutz & DSGVO

Beim Einsatz von Connect werden personenbezogene Daten verarbeitet. Ein **Auftragsverarbeitungsvertrag (AVV)** mit FeuerSoftware ist datenschutzrechtlich verpflichtend.

→ [Datenschutz & DSGVO](/connect/22_datenschutz) — AVV, TOMs und Datenschutzerklärung
