---
title: Einsatzdaten-Auswertung
description: Wie der EinsatzMonitor Einsatzdaten empfängt (E-Mail, File/Fax, Netzwerk, DME, TETRA-SDS, Connect) und mit Pattern auswertet
---

# Einsatzdaten-Auswertung

Damit der EinsatzMonitor einen Einsatz anzeigen kann, muss er die Einsatzdaten zunächst **empfangen** und anschließend **auswerten**. Bei der Auswertung lernt der EinsatzMonitor, an welcher Stelle im Alarmtext welche Information steht (z. B. Stichwort, Ort, Straße).

Die Einstellungen dazu finden Sie in der Standby-Ansicht über die Schaltfläche **Auswertung**. Das Menü ist in zwei Gruppen aufgeteilt:

| Gruppe | Menüpunkte |
|---|---|
| **Einsatzdaten bekommen** | E-Mail, DME, Netzwerk, File Überwachung |
| **Einsatzdaten verarbeiten** | Pattern - Standard, Tabelle - Securecad, AAO-Auswertung |

---

## Eingangswege

::card-group
  ::card{title="E-Mail-Auswertung" icon="i-heroicons-envelope" to="/einsatzmonitor/auswertung/e-mail"}
  Alarm-E-Mails der Leitstelle per IMAP, Exchange oder Office 365 abrufen.
  ::

  ::card{title="File-Auswertung" icon="i-heroicons-document-text" to="/einsatzmonitor/auswertung/file"}
  Textdateien aus einem überwachten Ordner verarbeiten – z. B. für die Faxauswertung.
  ::

  ::card{title="DME-Auswertung" icon="i-heroicons-signal" to="/einsatzmonitor/einstellungen/dme"}
  Alarmtexte von einem Digitalen Meldeempfänger über einen COM Port empfangen.
  ::

  ::card{title="TETRA-SDS (TetraControl)" icon="i-heroicons-radio" to="/einsatzmonitor/einstellungen/tetracontrol"}
  Alarm-SDS über TetraControl empfangen.
  ::
::

### E-Mail

Der EinsatzMonitor ruft ein E-Mail-Postfach regelmäßig ab und verarbeitet neue Alarm-E-Mails. Siehe [E-Mail-Auswertung](/einsatzmonitor/auswertung/e-mail).

### File / Fax

Der EinsatzMonitor überwacht einen Ordner auf der lokalen Festplatte und verarbeitet darin abgelegte Dateien. Um ein **Fax** auszuwerten, muss die File-Auswertung aktiviert werden: Ein Drittanbieter-Programm (z. B. eine OCR-Software) legt den erkannten Faxtext als Datei in diesem Ordner ab. Siehe [File-Auswertung](/einsatzmonitor/auswertung/file).

### Netzwerk (BosMon)

Über **Auswertung → Netzwerk** kann der EinsatzMonitor Einsatzdaten per TCP-Verbindung von BosMon empfangen. Dort stehen die Felder **Aktiviert**, **Port** (z. B. `5000`) und **Eigene IP** zur Verfügung.

### DME

Der EinsatzMonitor lauscht an einem seriellen Anschluss (COM Port) auf Alarmtexte eines Digitalen Meldeempfängers. Siehe [DME-Auswertung](/einsatzmonitor/einstellungen/dme).

### TETRA-SDS

Über eine Verbindung zu TetraControl kann der EinsatzMonitor durch Alarm-SDS ausgelöst werden. Siehe [TetraControl Verbindung](/einsatzmonitor/einstellungen/tetracontrol).

### Einsätze von Connect empfangen

Werden die Einsatzdaten nicht direkt am EinsatzMonitor, sondern über Connect empfangen (z. B. über eine Leitstellenschnittstelle), aktivieren Sie unter **Einstellungen → Connect Verbindung** den Schalter **Einsätze von Connect empfangen**. Für diesen Weg muss kein Pattern angelegt werden. Siehe [Einsätze von Connect empfangen](/einsatzmonitor/einstellungen/connect#einsätze-von-connect-empfangen).

---

## Auswertungslogik

Alle Eingangswege außer „Einsätze von Connect empfangen“ liefern zunächst nur einen Text. Diesen Text wertet der EinsatzMonitor in folgender Reihenfolge aus:

1. **Pattern-Auswertung:** Es werden **alle** angelegten Pattern ausprobiert. Für jedes ausgewertete Feld erhält ein Pattern Punkte. Verwendet wird das Pattern mit den **meisten Punkten** – also das Pattern, das die meisten Informationen ausgewertet hat. Bei Punktgleichstand bleibt das zuerst getroffene Pattern. Siehe [Pattern](/einsatzmonitor/auswertung/pattern).
2. **Tabellenauswertung (SECURECAD):** Ist kein Pattern angelegt, versucht der EinsatzMonitor die Tabellenauswertung (Menüpunkt **Tabelle - Securecad**). Sie wurde speziell für „SECURECAD“-E-Mails entwickelt, deren Aufbau sich stark unterscheiden kann.

::callout{type="info"}
Mit dem Schalter **Nur Patternauswertung** unter [Einstellungen → Einsatz](/einsatzmonitor/einstellungen/allgemein) wird ausschließlich die Pattern-Auswertung verwendet. Ist bei der E-Mail-Auswertung **RLP XML** aktiv, werden Pattern- und Tabellenauswertung übersprungen.
::

::callout{type="info"}
Lassen Sie sich beim Einrichten der Auswertung nicht entmutigen: Dies ist der aufwendigste Schritt und erfordert je nach empfangenen Daten etwas Zeit.
::
