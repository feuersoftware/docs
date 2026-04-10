---
title: Rollen und Rechtekonzept
description: Übersicht aller Rollen im FeuerSoftware Connect Portal und ihre Berechtigungen auf Organisations- und Standortebene
---

# Rollen und Rechtekonzept

Im Connect Portal werden Berechtigungen über **vordefinierte Rollen** gesteuert. Eigene Rollen können nicht erstellt werden. Die Rollen werden auf Organisations- oder Standortebene vergeben und bestimmen, welche Bereiche ein Benutzer einsehen oder bearbeiten kann.

Werden einem Benutzer mehrere Rollen zugewiesen, werden die Rechte addiert.

## Legende

| Symbol | Bedeutung |
|---|---|
| `R/W` | Anzeigen / Bearbeiten |
| `R/I/W` | Lesen / Einladen / Bearbeiten |
| `R/I` | Anzeigen / Einladen |
| `R` | Anzeigen |
| `—` | kein Zugriff |

---

## Organisationsebene

| Rolle | Organisations­einstellungen | Benutzer | Geräte | News | Kalender | Termine | Standorte | Fahrzeuge | Alarm | Schnittstellen | Ereignisprotokoll |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Organisationsadministrator | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R` |
| Organisation News-Administrator | `—` | `—` | `—` | `R/W` | `—` | `—` | `—` | `—` | `—` | `—` | `—` |
| Organisation Kalender-Administrator | `—` | `—` | `—` | `—` | `R/W` | `R/W` | `—` | `—` | `—` | `—` | `—` |
| Organisation Termin-Administrator | `—` | `—` | `—` | `—` | `R` | `R/W` | `—` | `—` | `—` | `—` | `—` |

---

## Standortebene – Benutzer ist Mitglied des entsprechenden Standortes

> Die Rechte einzelner Benutzerrollen werden addiert, wenn mehrere Rollen zugewiesen werden.

| Rolle | Organisations­einstellungen | Standort­einstellungen | Verfügbarkeitsalarm | Info-Board | News | Kalender | Termine | Benutzer | Geräte | Einsätze | Fahrzeuge | Fahrzeug­verfügbarkeit | Alarm | Schnittstellen | Ereignisprotokoll |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Standardbenutzer (keine Rolle) | `—` | `—` | `—` | `R` | `R` | `R` | `R` | `R` | `—` | `R` | `R` | `R` | `—` | `—` | `—` |
| Standortadministrator | `—` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/I/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R` |
| Moderator | `—` | `—` | `—` | `R` | `R/W` | `R` | `R/W` | `R/I` | `—` | `R` | `R` | `R/W` | `—` | `—` | `—` |
| Gerätewart | `—` | `—` | `—` | `R` | `R` | `R` | `R` | `R` | `—` | `R` | `R/W` | `R/W` | `—` | `—` | `—` |
| Standort News-Administrator | `—` | `—` | `—` | `R` | `R/W` | `R` | `R` | `R` | `—` | `R` | `R` | `R` | `—` | `—` | `—` |
| Standort Kalender-Administrator | `—` | `—` | `—` | `R` | `R` | `R/W` | `R/W` | `R` | `—` | `R` | `R` | `R` | `—` | `—` | `—` |
| Standort Termin-Administrator | `—` | `—` | `—` | `R` | `R` | `R` | `R/W` | `R` | `—` | `R` | `R` | `R` | `—` | `—` | `—` |

---

## Standortebene – Benutzer ist **kein** Mitglied des entsprechenden Standortes

> Die Rechte einzelner Benutzerrollen werden addiert, wenn mehrere Rollen zugewiesen werden.

| Rolle | Organisations­einstellungen | Standort­einstellungen | Verfügbarkeitsalarm | Info-Board | News | Kalender | Termine | Benutzer | Geräte | Einsätze | Fahrzeuge | Fahrzeug­verfügbarkeit | Alarm | Schnittstellen | Ereignisprotokoll |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Standortadministrator | `—` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/I/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R/W` | `R` |
| Moderator | `—` | `—` | `—` | `R` | `R/W` | `R` | `R/W` | `R/I` | `—` | `R` | `R` | `R/W` | `—` | `—` | `—` |
| Gerätewart | `—` | `—` | `—` | `R` | `—` | `—` | `—` | `—` | `—` | `—` | `R/W` | `R/W` | `—` | `—` | `—` |
| Standort News-Administrator | `—` | `—` | `—` | `R` | `R/W` | `—` | `—` | `—` | `—` | `—` | `—` | `—` | `—` | `—` | `—` |
| Standort Kalender-Administrator | `—` | `—` | `—` | `R` | `—` | `R/W` | `R/W` | `—` | `—` | `—` | `—` | `—` | `—` | `—` | `—` |
