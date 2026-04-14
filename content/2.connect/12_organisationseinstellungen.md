---
title: Organisationseinstellungen
description: Zentrale Einstellungen der Organisation im Connect Portal – Allgemein, Lizenzen, Einsätze, HelferApp und Datenlöschung
---

# Organisationseinstellungen

Die Organisationseinstellungen sind ausschließlich auf **Organisations-Ebene** verfügbar und erfordern Administrator-Berechtigungen. Hier werden die grundlegenden Parameter der gesamten Organisation konfiguriert.

**Seitenleiste (Organisations-Ebene) → Organisationseinstellungen**

---

## Allgemein

![Screenshot: Organisationseinstellungen – Allgemein](/images/connect/12_org_allgemein.png)

| Einstellung | Beschreibung |
|---|---|
| **Organisations-Name** | Der angezeigte Name der Organisation |
| **Sprache** | Standard-Sprache des Portals (Deutsch / Englisch) |
| **Leitstellen-Name** | Name der zuständigen Leitstelle (wird in der App angezeigt) |
| **Standard-Verfügbarkeit** | Welcher Verfügbarkeitsstatus beim ersten Login eines Nutzers voreingestellt ist |
| **Unwetterwarnungen-Anbieter** | Anbieter für Unwetterwarnungen (z. B. Deutscher Wetterdienst) |
| **Unwetterwarnungen-Region** | Geografische Region für die Unwetterwarnung |
| **Benutzerverifizierung** | Ob neue Benutzer ihre E-Mail-Adresse bestätigen müssen |
| **Partner-Modus** | Ob die PartnerApp für diese Organisation aktiviert ist |

---

## Lizenzen & Buchungen

![Screenshot: Organisationseinstellungen – Lizenzen](/images/connect/12_org_lizenzen.png)

**Organisationseinstellungen → Lizenzen**

Zeigt die aktuell gebuchten Lizenzen der Organisation:

- Anzahl der lizenzierten Benutzer
- Lizenz-Typ (z. B. Normal, Free)
- Gültigkeitsdatum

Hier können Lizenzen erweitert oder neue gebucht werden.

---

## Dokumente

![Screenshot: Organisationseinstellungen – Dokumente](/images/connect/12_org_dokumente.png)

**Organisationseinstellungen → Dokumente**

Verwaltung von Dokumenten auf Organisationsebene, die allen Mitgliedern zur Verfügung stehen.

---

## HelferApp-Einstellungen

![Screenshot: Organisationseinstellungen – HelferApp](/images/connect/12_org_helferapp.png)

**Organisationseinstellungen → HelferApp**

Die HelferApp kann grundsätzlich ohne gesonderte Freischaltung genutzt werden. Die **Verarbeitung von Patientendaten** ist jedoch nur nach Aktivierung durch den **Feuersoftware Support** möglich. Voraussetzung dafür ist das Vorliegen eines **Auftragsverarbeitungsvertrags (AVV)** nach DSGVO mit der Feuer Software GmbH.

| Einstellung | Beschreibung |
|---|---|
| **Status** | Zeigt an, ob die vollständige HelferApp (inkl. Patientendaten) aktiv ist (Aktivierung durch Support) |
| **Aktivierung ohne Verarbeitung von Gesundheitsdaten** | Nutzung der HelferApp ohne Patientendatenverarbeitung – kein AVV erforderlich, schränkt den Funktionsumfang ein |
| **Bezeichnung der Verfahrenstätigkeit** | Bezeichnung der Organisation für den Auftragsverarbeitungsvertrag |

---

## Einsätze

![Screenshot: Organisationseinstellungen – Einsätze](/images/connect/12_org_einsaetze.png)

**Organisationseinstellungen → Einsätze**

| Einstellung | Beschreibung |
|---|---|
| **Einsatz-Sichtbarkeit** | Wie lange abgeschlossene Einsätze für Mitglieder sichtbar sind |
| **Einsatz-Sharing** | Ob Einsätze zwischen Standorten geteilt werden können |
| **Einsatz-Reports** | Automatisch generierte Einsatzberichte aktivieren |
| **Fahrzeugzuordnung** | Automatische Fahrzeugzuordnung bei eingehenden Alarmen (z. B. bei Status 3) |

---

## EinsatzManager-Einstellungen

![Screenshot: Organisationseinstellungen – EinsatzManager](/images/connect/12_org_einsatzmanager.png)

**Organisationseinstellungen → EinsatzManager**

| Einstellung | Beschreibung |
|---|---|
| **SDS-Nachrichten** | Aktiviert den Empfang von SDS-Nachrichten im EinsatzManager |
| **Eingeschränkter Zugriff auf beendete Einsätze** | Benutzer ohne Vollzugriff können beendete Einsätze nur eingeschränkt einsehen |
| **Gruppen mit Vollzugriff auf beendete Einsätze** | Benutzergruppen, die auch auf beendete Einsätze vollen Zugriff haben |

### Externe Fahrzeuge

Fahrzeuge externer Organisationen können hier gepflegt werden. Über **„Externes Fahrzeug hinzufügen"** können einzelne Fahrzeuge manuell eingetragen werden. Alternativ können Fahrzeuglisten per **Import** hochgeladen oder per **Herunterladen** exportiert werden.

---

## Automatisches Datenlöschen

![Screenshot: Automatisches Datenlöschen](/images/connect/12_org_datenschutz.png)

**Seitenleiste → Automatisches Datenlöschen**

Aus Datenschutzgründen empfehlen wir, die automatische Datenlöschung in Connect einzurichten. Als Organisationsadministrator kann festgelegt werden, wann und welche Daten automatisch gelöscht werden sollen.

Die Datenlöschung läuft automatisiert jede Nacht auf den Servern von Feuersoftware und kann manuell nicht gestartet werden. Gelöschte Daten sind anschließend nicht mehr im Connect Portal, in der EinsatzApp oder am EinsatzMonitor verfügbar.

### Konfigurierbare Zeiträume

Für jeden Datentyp kann ein Löschintervall gewählt werden:

- Nie
- Nach einem Tag
- Nach einer Woche
- Nach einem Monat
- Nach sechs Monaten
- Nach einem Jahr
- Nach zwei Jahren

### Zu löschende Datentypen

| Datentyp | Beschreibung |
|---|---|
| **Einsatz löschen** | Löscht den kompletten Einsatz mit allen zugehörigen Details. |
| **Einsatzinformationen löschen** | Löscht im Einsatz alle Felder außer Stichwort, PLZ, Ort, Ortsteil, Einsatznummer und RIC. Datenschutzkritische Felder werden entfernt, die für die Einsatzstatistik relevanten Basisdaten bleiben erhalten. Empfehlung: eine Woche. |
| **Probealarme** | Löscht alle Einsätze, die der Kategorie Probealarm zugewiesen sind, um die Einsatzstatistik nicht zu verfälschen. |
| **Abgelaufene Termine** | Löscht alle vergangenen Termine in Kalendern. |
| **Abgelaufene News** | Löscht alle abgelaufenen Newseinträge. |
| **Nicht genutzte Geräte** | Löscht Mobiltelefone (EinsatzApp), die von Benutzern einmal angemeldet wurden, aber mittlerweile keinen gültigen Token mehr haben (z. B. nach Gerätewechsel). |
| **Abgelaufene Fahrzeugverfügbarkeiten** | Löscht Fahrzeugverfügbarkeiten, nachdem der eingetragene Zeitraum abgelaufen ist. |

> **Wichtig:** Die Daten werden automatisch und unwiederbringlich gelöscht. Die Einstellungen sorgfältig prüfen, bevor sie aktiviert werden.

---

## Organisation löschen

**Organisationseinstellungen → Organisation löschen**

Löscht die gesamte Organisation und alle zugehörigen Daten dauerhaft. Dieser Vorgang ist **nicht umkehrbar** und erfordert eine ausdrückliche Bestätigung.
