---
title: Leitstellen-Integration
description: Control Center – Ressourcen, Geräte und Zuordnungen für Leitstellen im Connect Portal
---

# Leitstellen-Integration

Der Bereich **Control Center** ist nur sichtbar, wenn für die Organisation eine Leitstellen-Integration aktiv ist. FeuerSoftware unterstützt zwei Leitstellen-Systeme:

| System | Beschreibung |
|---|---|
| **Alamos** | Alamos-Leitstellen-Integration |
| **WDX** | WDX-Leitstellen-Integration |

Der Bereich wird über die Seitenleiste als eigener Abschnitt **„Control Center"** angezeigt.

---

## Zuordnungen (Assignments)

**Control Center → Zuordnungen**

Hier werden Leitstellen-Einheiten den FeuerSoftware-Ressourcen zugeordnet. Diese Zuordnung ist die Grundlage dafür, dass eingehende Alarme der Leitstelle den richtigen Alarmgruppen und Fahrzeugen zugeordnet werden.

### Bei Alamos-Integration
- **Einheiten bearbeiten** – Alamos-Einheiten den Standorten und Alarmgruppen zuordnen

### Bei WDX-Integration
- **Ressourcen bearbeiten** – WDX-Ressourcen den Fahrzeugen zuordnen
- **Geräte bearbeiten** – WDX-Geräte den FeuerSoftware-Einheiten zuordnen

---

## Geräte (WDX)

**Control Center → Geräte**

Übersicht aller im WDX-System bekannten Geräte und ihr Verbindungsstatus zu FeuerSoftware.

---

## Ressourcen (WDX)

**Control Center → Ressourcen**

Übersicht aller WDX-Ressourcen (z. B. Fahrzeuge, Einheiten) und ihre Zuordnung zu FeuerSoftware-Fahrzeugen.

---

## Eingehende Alarme

Wenn die Leitstellen-Integration aktiv ist, werden eingehende Alarme der Leitstelle automatisch verarbeitet:

1. Leitstelle sendet Alarmierungsdaten (Stichwort, Adresse, alarmierte Einheiten)
2. Connect ordnet die Einheiten anhand der Zuordnungskonfiguration den FeuerSoftware-Alarmgruppen zu
3. Die konfigurierten Alarmgruppen werden über die EinsatzApp alarmiert
4. Der Einsatz erscheint im EinsatzManager und EinsatzMonitor

---

## Hinweise zur Konfiguration

- Die Zuordnung von Leitstellen-Einheiten zu FeuerSoftware-Ressourcen muss sorgfältig gepflegt werden, damit Alarme korrekt weitergeleitet werden
- Änderungen an der Zuordnung werden sofort wirksam
- Bei Fragen zur Ersteinrichtung wende dich an den FeuerSoftware-Support
