---
title: Produktübersicht
description: Überblick über das FeuerSoftware Connect Portal – Funktionsumfang, Aufbau und Einbettung ins FeuerSoftware-Ökosystem
---

# Produktübersicht

Das **FeuerSoftware Connect Portal** ist die zentrale Administrations- und Verwaltungsplattform für alle FeuerSoftware-Produkte. Es ist vollständig webbasiert und unter [connect.feuersoftware.com](https://connect.feuersoftware.com) erreichbar – ohne Installation, auf jedem Gerät mit aktuellem Browser.

---

## Funktionsumfang im Überblick

| Bereich | Beschreibung |
|---|---|
| **Benutzerverwaltung** | Benutzer einladen, Rollen und Gruppen vergeben, Geräte verwalten |
| **Fahrzeugverwaltung** | Fahrzeuge konfigurieren, Verfügbarkeitsstatus, Zusatzinformationen |
| **Einsätze** | Einsatzübersicht, manuelle Einsätze, Protokoll, Kartenansicht |
| **News & Termine** | Organisationsinterne Beiträge und Dienstplan verwalten |
| **Infoboard** | Informationsaushänge anlegen und pflegen |
| **Defektberichte** | Mängelmeldungen erfassen, kommentieren und abschließen |
| **Alarmierung** | Stichwörter, Alarmgruppen, statische und dynamische AAO |
| **Schnittstellen** | Anbindung an Leitstellen, Drittsysteme und externe Dienste |
| **Organisationseinstellungen** | Lizenzen, globale Konfiguration, Datenlöschung |
| **Leitstellen-Integration** | Ressourcen- und Gerätezuordnung für Leitstellen |

---

## Organisations- und Standort-Ebene

Das Connect Portal arbeitet mit zwei Ebenen:

### Organisations-Ebene
Die Organisationsebene umfasst alle standortübergreifenden Einstellungen. Hier werden z. B. Lizenzen verwaltet, globale Benutzerrollen vergeben, organisationsweite Schnittstellen (z. B. Leitstellen-Anbindung, Wasserkarte) konfiguriert und übergreifende Statistiken eingesehen.

### Standort-Ebene
Jeder Standort hat seine eigene Konfigurationsebene. Hier werden Fahrzeuge, Alarmgruppen, lokale Schnittstellen (z. B. Smart-Home-Systeme, Webhooks) und standortspezifische Einsatzregeln verwaltet.

Der Wechsel zwischen den Ebenen erfolgt über das **Standort-Dropdown** oben in der Seitenleiste. Ein Klick auf den Organisations-Namen wechselt zur Organisationsebene.

---

## Einbettung ins FeuerSoftware-Ökosystem

Connect ist die Schaltzentrale aller FeuerSoftware-Produkte:

| Produkt | Verbindung zu Connect |
|---|---|
| **EinsatzApp** | Benutzer, Rollen, Alarmierung, Fahrzeuge, News, Termine |
| **EinsatzManager** | Einsätze, Fahrzeugstatus, Lagemeldungen |
| **EinsatzMonitor** | Fahrzeugstatus, aktive Einsätze |
| **EinsatzTablet** | Fahrzeugkonfiguration, Einsatzdaten |
| **HelferApp** | Benutzerkonten, vereinfachte Alarmierung |

Änderungen in Connect (z. B. neue Fahrzeuge, neue Benutzer, geänderte Stichwörter) stehen in allen verbundenen Produkten automatisch zur Verfügung.

---

## Technische Grundlage

- **Plattform:** Webbasiert (Nuxt 3 / Vue 3), kein App-Download nötig
- **Echtzeit:** WebSocket-Verbindungen (SignalR) für Live-Aktualisierungen
- **Authentifizierung:** OpenID Connect (OIDC) via Keycloak
- **Berechtigungen:** Feingranulares Rollen- und Rechtesystem auf Organisations- und Standort-Ebene
- **Mehrsprachigkeit:** Deutsch und Englisch

---

## Systemvoraussetzungen

- Aktueller Webbrowser (Chrome, Firefox, Edge, Safari)
- Stabile Internetverbindung
- Aktives FeuerSoftware-Benutzerkonto mit entsprechender Rolle
