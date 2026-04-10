---
title: Benutzerverwaltung
description: Benutzer einladen und verwalten, Rollen und Gruppen vergeben, Funktionen und Mailing-Listen im Connect Portal
---

# Benutzerverwaltung

Die Benutzerverwaltung ist sowohl auf **Organisations-Ebene** als auch auf **Standort-Ebene** verfügbar. Auf Organisationsebene werden alle Benutzer der gesamten Organisation verwaltet, auf Standortebene nur die Benutzer des jeweiligen Standorts.

---

## Benutzerübersicht

**Seitenleiste → Benutzer**

Die Übersicht zeigt alle Benutzer in einer durchsuchbaren Tabelle:

- Name, E-Mail-Adresse
- Zugewiesene Rollen
- Zugehörige Gruppen
- Gerätestatus

Über die Suche können Benutzer nach Name oder E-Mail gefiltert werden.

---

## Benutzer einladen

1. **Seitenleiste → Benutzer → „Benutzer einladen"**
2. E-Mail-Adresse eingeben
3. Optional: Rolle und Gruppe direkt bei der Einladung zuweisen
4. **„Einladen"** klicken

Der Benutzer erhält eine E-Mail mit einem Einladungslink. Nach dem Klick auf den Link wird das Konto aktiviert und ein Passwort gesetzt.

> Wenn die Benutzerverifizierung in den Organisationseinstellungen aktiviert ist, muss der Benutzer seine E-Mail-Adresse zusätzlich bestätigen.

---

## Benutzer bearbeiten

Benutzer in der Liste antippen → **„Bearbeiten"**. Die Detailansicht hat mehrere Tabs:

### Tab: Allgemein
- Name, E-Mail, Profilbild
- Zwei-Faktor-Authentifizierung zurücksetzen

### Tab: Geräte
- Übersicht aller verbundenen Geräte (EinsatzApp, EinsatzTablet etc.)
- Geräte können hier entfernt werden

### Tab: Rollen
- Rollen auf Organisations- oder Standortebene zuweisen und entziehen

### Tab: Gruppen
- Benutzer Gruppen zuordnen oder entfernen

### Tab: Benachrichtigungen
- Einstellen, welche Push-Benachrichtigungen der Benutzer erhält

### Tab: Alarmgruppen
- Benutzer Alarmgruppen zuordnen

---

## Benutzer deaktivieren / löschen

In der Benutzer-Detailansicht kann ein Konto deaktiviert oder dauerhaft gelöscht werden. Deaktivierte Benutzer können sich nicht mehr anmelden, bleiben aber in der Datenbank erhalten.

---

## Rollen

**Seitenleiste → Rollen**

Rollen definieren, welche Bereiche und Aktionen ein Benutzer im Connect Portal nutzen darf. Die Rollen sind fest vorgegeben und können nicht verändert oder gelöscht werden. Eigene Rollen können nicht erstellt werden.

### Rollen auf Organisationsebene

| Rolle | Beschreibung |
|---|---|
| **Organisationsadministrator** | Vollzugriff auf alle Einstellungen der Organisation |
| **Organisation News-Administrator** | Kann News auf Organisationsebene erstellen und verwalten |
| **Organisation Kalender-Administrator** | Kann Kalender und Termine auf Organisationsebene verwalten |
| **Organisation Termin-Administrator** | Kann Termine auf Organisationsebene erstellen und verwalten |

### Rollen auf Standortebene

| Rolle | Beschreibung |
|---|---|
| **Standortadministrator** | Vollzugriff auf alle Einstellungen des Standorts |
| **Moderator** | Kann News und Termine erstellen sowie Fahrzeugverfügbarkeit bearbeiten |
| **Gerätewart** | Kann Fahrzeuge und Fahrzeugverfügbarkeit bearbeiten |
| **Standort News-Administrator** | Kann News auf Standortebene erstellen und verwalten |
| **Standort Kalender-Administrator** | Kann Kalender und Termine auf Standortebene verwalten |
| **Standort Termin-Administrator** | Kann Termine auf Standortebene erstellen und verwalten |

Benutzer ohne zugewiesene Rolle haben eingeschränkten Lesezugriff (Standardbenutzer).

Werden mehrere Rollen zugewiesen, werden die Rechte addiert. Eine vollständige Übersicht aller Berechtigungen je Rolle findet sich im [Rechtekonzept](./20_rechtekonzept_connect).

---

## Gruppen

**Seitenleiste → Gruppen**

Gruppen fassen Benutzer zusammen, z. B. für Alarmierung oder Mailing-Listen.

- Gruppen anlegen, umbenennen und löschen
- Benutzer einer Gruppe zuordnen (direkt hier oder in der Benutzerbearbeitung)
- Gruppen können in Alarmgruppen und Mailing-Listen referenziert werden

---

## Funktionen

**Seitenleiste → Funktionen** *(nur Organisations-Ebene)*

Funktionen sind Bezeichnungen für Positionen innerhalb der Organisation (z. B. Gruppenführer, Atemschutzgeräteträger). Sie können Benutzern zugewiesen werden und dienen der Darstellung im EinsatzManager.

---

## Mailing-Listen

**Seitenleiste → Mailing-Listen**

Mailing-Listen sind E-Mail-Verteilerlisten, z. B. für Mängelmeldungen oder Benachrichtigungen.

- Listen anlegen und benennen
- Benutzer oder Gruppen als Empfänger hinterlegen
- Mailing-Listen können in den Standorteinstellungen als Empfänger für Mängelmeldungen eingetragen werden

---

## Geräte-Accounts

**Seitenleiste → Geräte**

Hier werden speziell konfigurierte Accounts für den **EinsatzMonitor** verwaltet. Diese Accounts sind für den Dauerbetrieb auf einem festen Anzeigegerät in der Fahrzeughalle vorgesehen und haben eingeschränkte Berechtigungen.

![Screenshot: Geräte-Accounts](/images/connect/04_geraete_accounts.png)
