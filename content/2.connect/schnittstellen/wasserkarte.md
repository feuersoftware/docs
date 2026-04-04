---
title: Wasserkarte.info
description: Hydranten und Wasserentnahmestellen aus Wasserkarte.info in FeuerSoftware einbinden
---

# Wasserkarte.info

Die Wasserkarte.info-Integration blendet Hydranten und Wasserentnahmestellen in der Karte der EinsatzApp, des EinsatzTablets und des EinsatzMonitors ein.

[wasserkarte.info](https://wasserkarte.info/) ist ein Portal zur Verwaltung von Wasserentnahmestellen (Hydranten, Löschteiche etc.) und zur einsatztaktischen Planung.

> **Hinweis:** Die Schnittstelle wird auf **Organisations-Ebene** eingerichtet.

---

## Voraussetzungen

- Ein Account bei [wasserkarte.info](https://wasserkarte.info/)
- Ein API-Schlüssel aus dem Wasserkarte.info Administrationsportal
- Für standortübergreifende Daten und Mehrbenutzer-Funktionen: kostenpflichtiges **Wasserkarte Plus**-Abo

---

## Schritt 1: API-Schlüssel bei Wasserkarte.info erstellen

1. Im [Wasserkarte.info Administrationsportal](https://portal.wasserkarte.info/) anmelden
2. In der linken Navigation **„Zugriffsschlüssel"** öffnen
3. **„Zugriffsschlüssel anlegen"** klicken
4. Felder ausfüllen:

| Feld | Beschreibung |
|---|---|
| **Aktiv** | Aktivieren |
| **Anmerkungen** | Optional: Verwendungszweck notieren |
| **Verbundenes System** | „feuer-software.de – Einsatz Monitor" auswählen |
| **Marker Design** | Gewünschtes Symbol und Größe wählen |

5. Speichern – der API-Schlüssel wird angezeigt und kopiert

---

## Schritt 2: API-Schlüssel in Connect eintragen

1. Im Connect Portal zur **Organisations-Ebene** wechseln
2. **Seitenleiste → Schnittstellen → Wasserkarte**
3. Den kopierten **API-Schlüssel** eintragen
4. Speichern

---

## Anzeige in den Apps

| App | Zugriff |
|---|---|
| **EinsatzApp** | Hauptmenü → „Wasserquellen" / Kartenelemente einblenden; im Einsatz werden Hydranten im 300-m-Radius angezeigt |
| **EinsatzTablet** | Menü → „Hydranten" |
| **EinsatzMonitor** | Einstellungen → Karten → API-Schlüssel eintragen, Radius und Anzahl konfigurieren |
