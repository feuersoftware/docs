---
title: TetraControl
description: Übersicht der TetraControl-Integrationen mit FeuerSoftware – TetraControl2Connect und EinsatzMonitor
---

# TetraControl

[TetraControl](https://tetracontrol.de/) ist eine Software von Status 3 IT zur Auswertung von TETRA-Datenfunkgeräten und Pagern (z. B. Airbus P8GR). Sie empfängt Fahrzeugstatus, GPS-Positionen, Einsatzrückmeldungen und Verfügbarkeiten aus dem TETRA-Netz und stellt diese über einen integrierten Webserver bereit.

Damit TetraControl mit FeuerSoftware kommunizieren kann, muss zunächst das Datenfunkgerät vorbereitet und TetraControl eingerichtet sein: [→ TetraControl mit Datenfunkgerät einrichten](./tetracontrol_datenfunkgeraet)

Für die Weiterleitung der Daten an FeuerSoftware gibt es zwei Wege:

::card-group
  ::card{title="TetraControl2Connect" icon="i-lucide-arrow-right-left" to="/tools/tetracontrol2connect"}
  Software-Bridge für mehrere Connect-Standorte – verarbeitet Status, Positionen, Rückmeldungen und Sirenen. Empfohlen für Connect-Kunden.
  ::

  ::card{title="EinsatzMonitor Verbindung" icon="i-lucide-monitor" to="/einsatzmonitor/einstellungen/tetracontrol"}
  Direkte Verbindung vom EinsatzMonitor zum TetraControl Webserver – auch ohne Connect nutzbar.
  ::
::
