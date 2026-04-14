---
title: Mängelmeldungen
description: Mängelmeldungen zu Fahrzeugen und Ausrüstung erfassen, kommentieren und verwalten im Connect Portal
---

# Mängelmeldungen

![Screenshot: Mängelmeldungen-Übersicht](/images/connect/10_maengel_uebersicht.png)

Mit der Funktion „Mängelmeldungen" können Mängel an Fahrzeugen und Geräten einfach und digital erfasst werden. Die Erfassung steht allen Benutzern zur Verfügung. Die Bearbeitung erfolgt durch Gerätewarte und Administratoren.

Meldungen können sowohl über das Connect Portal als auch direkt aus der **EinsatzApp** erstellt werden.

---

## Aktivieren

Die Funktion kann auf Organisationsebene aktiviert oder deaktiviert werden. Standardmäßig sind Mängelmeldungen aktiviert.

**Organisation → Verwaltung → „Mängelmeldung aktiviert"**

Diese Einstellung gilt für alle Standorte der Organisation. Wenn die Funktion deaktiviert wird, werden die entsprechenden Bereiche auch in der EinsatzApp ausgeblendet.

**Telefonnummer des Meldenden im PDF-Report:** Optional kann die Handynummer des Meldenden auf dem PDF-Report gedruckt werden, um Rückfragen zu erleichtern. Aus Datenschutzgründen kann diese Option deaktiviert werden.

---

## Rechtemanagement

| Rolle | Rechte |
|---|---|
| **Standardbenutzer** | Kann Mängelmeldungen erstellen; sieht nur eigene Meldungen sowie Meldungen, in denen er als verantwortliche Person eingetragen ist |
| **Standortadministrator / Gerätewart** | Kann Mängelmeldungen erstellen; sieht alle Mängelmeldungen des Standorts |
| **Organisationsadministrator** | Kann Mängelmeldungen erstellen; sieht alle Mängelmeldungen aller Standorte |

---

## Benachrichtigungen

**Neue Mängelmeldung erstellt:** Benachrichtigung per E-Mail und Push an Orga-Admins, Standort-Admins und Gerätewarte. Der Ersteller erhält keine Benachrichtigung.

**Mängelmeldung aktualisiert (innerhalb der letzten 15 min, von einem Benutzer):** Benachrichtigung an Orga-Admins, Standort-Admins, Gerätewarte und den Ersteller. Der Bearbeiter erhält keine Benachrichtigung.

**Mängelmeldung aktualisiert (innerhalb der letzten 15 min, von mehreren Benutzern):** Benachrichtigung an Orga-Admins, Standort-Admins, Gerätewarte, Ersteller und den Bearbeiter.

---

## Mailverteiler

Alle neu erstellten Mängelmeldungen können zusätzlich an einen Mailverteiler gesendet werden – z. B. an ein Sammelpostfach oder eine bestimmte Gruppe von Personen.

1. Auf Standortebene unter **Benutzer → Mailverteiler** einen Mailverteiler anlegen
2. In den **Standort-Einstellungen** den Mailverteiler für Mängelmeldungen aktivieren

---

## Kategorien anlegen

Mängelmeldungen können in individuellen Kategorien organisiert werden (z. B. Gebäude, Fahrzeug, Gerät). Beim Erstellen einer Mängelmeldung muss eine Kategorie ausgewählt werden.

Kategorien können auf Organisations- und Standortebene angelegt werden:

**Seitenleiste → Mängelmeldungen → Kategorien → „Neu"**

---

## Mängelmeldung erstellen

### Im Connect Portal

**Seitenleiste → Mängelmeldungen → „Neu"**

![Screenshot: Mängelmeldung erstellen](/images/connect/10_maengel_erstellen.png)

| Feld | Beschreibung |
|---|---|
| **Kategorie** | Pflichtfeld – vorher anlegen falls noch nicht vorhanden |
| **Informationen zur Kategorie** | Zusatzinfos zur gewählten Kategorie |
| **Kurzbeschreibung** | Knappe Bezeichnung des Mangels |
| **Detaillierte Beschreibung** | Ausführliche Fehlerbeschreibung |
| **Status** | Offen / In Bearbeitung / Abgeschlossen |
| **Verantwortliche Person** | Optional |
| **Betroffenes Fahrzeug** | Optional |
| **Kilometerstand / Pumpenbetriebsstunden** | Optional |
| **Priorität** | Optional |
| **Anhänge** | Fotos oder Dateien können direkt angehängt werden |

Nach dem Speichern werden Orga-Admins, Standort-Admins und Gerätewarte automatisch benachrichtigt.

### In der EinsatzApp

Über den Button **„Mängelmeldungen"** in der App kann eine neue Mängelmeldung erstellt werden. Der Button wird nur angezeigt, wenn die Funktion für die Organisation aktiviert ist.

### Im EinsatzTablet

Die kleine Zahl am Icon zeigt an, wie viele offene Mängel für das eigene Fahrzeug vorliegen. Standardmäßig werden nur Mängelmeldungen für das eigene Fahrzeug angezeigt. Über **„Alle Mängel anzeigen"** lassen sich alle aktiven Mängel des Standorts einblenden.

### Über die API

Mängelmeldungen können auch über die öffentliche Connect API abgerufen und erstellt werden.

→ [Swagger-Dokumentation](https://connectapi.feuersoftware.com/swagger/index.html)

---

## Mängelmeldung bearbeiten

Mängelmeldung in der Übersicht öffnen → Detailansicht:

- **Status ändern** – Offen / In Bearbeitung / Abgeschlossen
- **Kommentare** – alle Beteiligten können Kommentare hinterlassen
- **Anhänge hinzufügen** – Fotos oder Dateien nachträglich anfügen

---

## PDF-Export

Mängelmeldungen können als PDF heruntergeladen und ausgedruckt werden.

Detailansicht öffnen → **„Bericht"** (oben rechts) → PDF herunterladen.

Der PDF-Export enthält einen QR-Code, über den direkt zur Mängelmeldung im Connect Portal navigiert werden kann.
