---
title: Wasserkarte.info
description: Hydranten und Wasserentnahmestellen aus Wasserkarte.info in FeuerSoftware einbinden
---

# Wasserkarte.info

Die Wasserkarte.info-Integration blendet Hydranten und Wasserentnahmestellen in der Karte der EinsatzApp, des EinsatzTablets und des EinsatzMonitors ein.

[wasserkarte.info](https://wasserkarte.info/) ist ein Portal zur Verwaltung von Wasserentnahmestellen (Hydranten, Löschteiche etc.) und zur einsatztaktischen Planung, z. B. der Löschwasserförderung. Zu den Entnahmestellen können zahlreiche Zusatzinformationen gepflegt werden.

In Wasserkarte.info eingepflegte Entnahmestellen sind nur für den eigenen Benutzer bzw. über den erzeugten API-Schlüssel abrufbar. Mit der kostenpflichtigen **Wasserkarte Plus**-Mitgliedschaft lassen sich u. a. mehrere Benutzeraccounts anlegen und die Daten auch mit Feuerwehren aus Nachbarorten teilen.

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

![Wasserkarte.info-Portal: Menü Zugriffsschlüssel mit Schaltfläche „Zugriffsschlüssel anlegen"](/images/connect/schnittstellen/wasserkarte_01_zugriffsschluessel.png)

4. Felder ausfüllen:

| Feld | Beschreibung |
|---|---|
| **Aktiv** | Aktivieren |
| **Anmerkungen** | Optional: Verwendungszweck notieren |
| **Verbundenes System** | „feuer-software.de – Einsatz Monitor" auswählen |
| **Marker Design** | Gewünschten Marker wählen – die Varianten unterscheiden sich hauptsächlich in Größe und Detailreichtum |

![Wasserkarte.info-Portal: Formular zum Anlegen eines API-Schlüssels](/images/connect/schnittstellen/wasserkarte_02_api_key.png)

5. Speichern – Sie gelangen zur Übersichtsseite, auf der der API-Schlüssel angezeigt wird und kopiert werden kann

---

## Schritt 2: API-Schlüssel in Connect eintragen

1. Im Connect Portal zur **Organisations-Ebene** wechseln
2. **Seitenleiste → Schnittstellen → Wasserkarte**
3. Den kopierten **API-Schlüssel** eintragen
4. Speichern

Connect ist nun mit Wasserkarte.info verknüpft. Die Wasserentnahmestellen werden im EinsatzTablet und in der EinsatzApp angezeigt. Für die Anzeige im EinsatzMonitor ist eine gesonderte Einrichtung erforderlich (siehe unten).

---

## Anzeige in den Apps

| App | Zugriff |
|---|---|
| **EinsatzApp** | Hauptmenü → „Wasserquellen"; über „Kartenelemente" lassen sich weitere Elemente wie OSM-Hydranten oder Rettungspunkte Forst ein- und ausblenden; im Einsatz werden Hydranten im 300-m-Radius angezeigt |
| **EinsatzTablet** | Menü → „Hydranten" |
| **EinsatzMonitor** | Einstellungen → Karten → API-Schlüssel eintragen, Radius und Anzahl konfigurieren |

### EinsatzMonitor einrichten

1. In den Einstellungen des EinsatzMonitors den Menüpunkt **„Karten"** öffnen
2. Im Abschnitt **„Hydranten by Wasserkarte.info"** den Schalter **„Hydranten anzeigen"** aktivieren
3. Den API-Schlüssel von Wasserkarte.info in das Feld **„Zugriffsschlüssel"** eintragen
4. Radius und Anzahl der Hydranten wählen, die um die Einsatzstelle geladen werden sollen

> **Hinweis:** Mehr Hydranten zu laden kann zu längeren Ladezeiten führen.

![EinsatzMonitor: Einstellungen Karten mit Abschnitt Hydranten by Wasserkarte.info](/images/connect/schnittstellen/wasserkarte_03_einsatzmonitor.png)

Weitere Infos: [EinsatzMonitor – Karten](/einsatzmonitor/einstellungen/karten)
