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

Rollen definieren, welche Bereiche und Aktionen ein Benutzer im Connect Portal nutzen darf.

### Vordefinierte Rollen
FeuerSoftware liefert Standardrollen aus (z. B. Administrator, Einsatzmanager, Beobachter). Diese können nicht gelöscht, aber angepasst werden.

### Eigene Rollen erstellen
1. **Seitenleiste → Rollen → „Rolle erstellen"**
2. Name vergeben
3. Berechtigungen einzeln aktivieren (Lesen / Erstellen / Verwalten pro Bereich)
4. Speichern

### Berechtigungsebenen
Jede Berechtigung hat drei Stufen:

| Stufe | Bedeutung |
|---|---|
| **Lesen** | Inhalte anzeigen |
| **Erstellen** | Neue Einträge anlegen |
| **Verwalten** | Bearbeiten und Löschen |

Berechtigungen können separat für Organisations- und Standortebene vergeben werden.

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

Mailing-Listen sind E-Mail-Verteilerlisten, z. B. für Defektberichte oder Benachrichtigungen.

- Listen anlegen und benennen
- Benutzer oder Gruppen als Empfänger hinterlegen
- Mailing-Listen können in den Standorteinstellungen als Empfänger für Defektberichte eingetragen werden

---

## Geräte-Accounts

**Seitenleiste → Geräte**

Hier werden speziell konfigurierte Accounts für Geräte verwaltet:

| Typ | Beschreibung |
|---|---|
| **EinsatzManager** | Account für den webbasierten EinsatzManager |
| **EinsatzMonitor** | Account für den Anzeigebildschirm in der Fahrzeughalle |

Diese Accounts sind für den Dauerbetrieb auf einem festen Gerät vorgesehen und haben eingeschränkte Berechtigungen.
