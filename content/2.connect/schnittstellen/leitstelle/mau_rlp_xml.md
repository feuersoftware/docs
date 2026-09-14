---
title: MAÜ-Schnittstelle Rheinland-Pfalz
description: Einsatzdaten aus dem in Rheinland-Pfalz eingeführten MAÜ-Verfahren (XML per E-Mail) automatisch nach FeuerSoftware Connect übernehmen
---

# MAÜ-Schnittstelle Rheinland-Pfalz

> **Hinweis:** Diese Schnittstelle befindet sich in der **Beta-Phase**. Es kann noch zu Änderungen oder vereinzelten Fehlern kommen.

---

## Allgemeines

Über das in Rheinland-Pfalz einheitlich eingeführte **MAÜ-Verfahren** (Maschinenlesbare unidirektionale automatische Übergabe) versendet die Leitstelle bei jeder Alarmierung eine E-Mail mit einem XML-Anhang. FeuerSoftware Connect ruft dafür hinterlegte E-Mail-Postfächer automatisch ab und übernimmt die enthaltenen Einsatzdaten – ohne manuellen Eingriff.

> Die Schnittstelle nutzt dieselbe, bereits seit Jahren bei FeuerSoftware im Einsatz befindliche Auswertungs-Engine wie die bisherige, durch den Support manuell gepflegte MAÜ-Auswertung – neu ist die **Self-Service-Konfiguration direkt im Connect Portal**.

---

## Aktivierung

**Seitenleiste → Schnittstellen → „Rheinland-Pfalz MAÜ XML"**

![Screenshot: Übersichtsseite der MAÜ-Schnittstelle mit Beta-Banner](/images/connect/mau_rlp_xml_uebersicht.png)

Verwaltet werden kann die Schnittstelle mit einer Berechtigung auf **Organisationsebene** (Organisationsadministrator).

---

## Postfächer einrichten

Es können beliebig viele IMAP-Postfächer hinterlegt werden, in denen die XML-Meldungen der Leitstelle eingehen:

| Feld | Beschreibung |
|---|---|
| **Server** | IMAP-Server als `host:port` (z. B. `imap.beispiel.de:993`) |
| **Benutzername** | IMAP-Zugangsdaten |
| **Passwort** | IMAP-Zugangsdaten |

![Screenshot: Dialog „Postfach hinzufügen" mit E-Mail Server, Benutzer, Passwort und „Verbindung testen"](/images/connect/mau_rlp_xml_postfach.png)

Die Verbindung erfolgt immer verschlüsselt (SSL) und liest ausschließlich den Posteingang (`Inbox`) im Lesezugriff. Ein hinterlegtes Postfach wird alle **10 Sekunden** auf neue E-Mails geprüft.

### Verbindung testen

Die Zugangsdaten lassen sich sowohl direkt im Formular als auch über das Aktionsmenü der Postfach-Karte prüfen. Beim **Aktivieren der Gesamt-Schnittstelle** wird zusätzlich jedes hinterlegte Postfach automatisch getestet – schlägt eines fehl, wird die Aktivierung mit einer konkreten Fehlermeldung zu genau diesem Postfach abgelehnt, statt eine fehlerhafte Konfiguration stillschweigend zu aktivieren.

---

## Anforderungen an die E-Mail

Damit eine eingehende E-Mail verarbeitet wird, muss sie:

- **ungelesen** im Postfach ankommen – das Postfach wird ausschließlich lesend geöffnet, die Schnittstelle markiert E-Mails nie als gelesen, verschiebt oder löscht sie
- **mindestens einen XML-Anhang** enthalten – erkannt an der Dateiendung `.xml` oder einem MIME-Type, der „xml" enthält (Groß-/Kleinschreibung spielt keine Rolle)
- im Anhang das **RLP-ILtS-XML-Format** der Leitstelle liefern

**Nicht relevant für die Verarbeitung:**
- Der **Absender** wird nicht geprüft – jede E-Mail im konfigurierten Postfach wird gleich behandelt.
- Der **Betreff** hat kein Pflichtformat; einzige Ausnahme: Enthält er das Wort „Einsatzabschluss", wird die Meldung als Einsatzende statt als Einsatzeröffnung gewertet.

Enthält eine E-Mail **mehrere XML-Anhänge**, wird jeder einzeln verarbeitet – in der Praxis versendet die Leitstelle aber normalerweise eine E-Mail mit einem Anhang pro Einsatzereignis.

> **Hinweis zur Ersteinrichtung:** Bereits im Postfach liegende, alte E-Mails werden beim erstmaligen Aktivieren **nicht** rückwirkend verarbeitet – nur ab diesem Zeitpunkt neu eingehende Meldungen.

---

## Standort-Zuordnung

Je Postfach wird über einen **Suchbegriff** festgelegt, welche eingehende Meldung auf welchen Connect-Standort läuft. Der Suchbegriff wird **nicht** gegen Betreff, Adresse oder Einsatzstichwort geprüft, sondern als Teilstring (Groß-/Kleinschreibung wird ignoriert) gegen die in der Meldung enthaltenen **Einsatzmittel** (Fahrzeuge) und **Maßnahmen** abgeglichen.

![Screenshot: Standort-Zuordnungen eines Postfachs mit Suchbegriffen je Standort](/images/connect/mau_rlp_xml_standort_zuordnung.png)

> **Sonderwert:** Wird als Suchbegriff **`all`** eingetragen, wird jede über dieses Postfach eingehende Meldung an den zugeordneten Standort übertragen – unabhängig von den enthaltenen Einsatzmitteln, nicht nur als Rückfalloption für sonst nicht zugeordnete Meldungen.

---

## Verarbeitungsprotokoll

Eine durchsuchbare, seitenweise Tabelle zeigt für jede eingegangene E-Mail Zeitpunkt, Betreff sowie das Ergebnis der Verarbeitung (Erfolgreich/Fehlgeschlagen mit Klartext-Meldung), u. a.:

| Meldung | Bedeutung |
|---|---|
| „Einsatz {Nr} erfolgreich übertragen." | Einsatz wurde erfolgreich nach Connect übernommen |
| „Einsatz {Nr} erkannt, aber kein Standort-Connect-Key hinterlegt — Übertragung nicht möglich." | Keine passende Standort-Zuordnung gefunden |
| „Fehler bei der Verarbeitung des Anhangs: …" | XML-Anhang konnte nicht ausgewertet oder nicht nach Connect übertragen werden |
| „Keine relevanten Anhänge gefunden, Email übersprungen." | E-Mail enthielt keinen auswertbaren XML-Anhang |

![Screenshot: Verarbeitungsprotokoll mit Zeitstempel, Status, Betreff und Nachricht](/images/connect/mau_rlp_xml_verarbeitungsprotokoll.png)

Zusätzlich werden Zustandswechsel der Postfach-Verbindung selbst protokolliert (z. B. „IMAP-Verbindung wiederhergestellt." / „IMAP-Verbindung fehlgeschlagen: …").

---

## Übertragene Daten

Aus der XML-Meldung werden u. a. folgende Felder übernommen:

- Einsatznummer, Einsatzstichwort, Meldebild
- Adresse (Ort, Ortsteil, Straße, Hausnummer, Objekt) und GPS-Koordinaten
- Alarmierte Fahrzeuge (Einsatzmittel) inkl. Statuszeiten
- Angeordnete Maßnahmen
- Lagemeldungen der Leitstelle (werden laufend als Nachrichten am Einsatz ergänzt)

Der Einsatz wird in Connect mit der Quelle **„MAÜ"** gekennzeichnet.

---

## Lizenz

Die Aktivierung der Schnittstelle bucht automatisch das zugehörige Lizenzprodukt, die Deaktivierung entfernt die Buchung wieder. Das Lizenzprodukt ist aktuell **kostenlos**.

---

## Bestehende Kunden der bisherigen MAÜ-Auswertung

Wer die MAÜ-Auswertung bereits über die bisherige, durch FeuerSoftware manuell gepflegte Lösung nutzt (siehe [MAÜ Auswertung (RLP) – Anwenderdokumentation](/tools/MAÜ_Auswertung_RLP)), kann für eine Umstellung auf die neue Self-Service-Schnittstelle den FeuerSoftware-Support kontaktieren: **info@feuersoftware.com**
