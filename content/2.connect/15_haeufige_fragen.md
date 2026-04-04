---
title: Häufige Fragen (FAQ)
description: Antworten auf häufige Fragen zur Bedienung und Konfiguration des Connect Portals
---

# Häufige Fragen (FAQ)

---

## Anmeldung & Zugang

### Ich kann mich nicht anmelden

Prüfe folgende Punkte:
- Ist das Benutzerkonto aktiv? (Administrator fragen)
- Ist die E-Mail-Adresse korrekt geschrieben?
- Wurde das Passwort vergessen? → **„Passwort vergessen"** auf der Login-Seite nutzen
- Ist die Benutzerverifizierung erforderlich? → Einladungs-E-Mail prüfen und Konto aktivieren

---

### Wie lade ich einen neuen Benutzer ein?

**Seitenleiste → Benutzer → „Benutzer einladen"** → E-Mail-Adresse eingeben → Einladung senden. Der Benutzer erhält eine E-Mail mit Aktivierungslink.

---

### Ein Benutzer hat keinen Zugriff auf bestimmte Bereiche

Prüfe, ob dem Benutzer die notwendige **Rolle** zugewiesen ist. Rollen steuern, welche Bereiche und Aktionen ein Benutzer nutzen darf.

**Seitenleiste → Benutzer → Benutzer öffnen → Tab „Rollen"**

---

### Wie setze ich die 2FA eines Benutzers zurück?

**Seitenleiste → Benutzer → Benutzer öffnen → Tab „Allgemein" → „2FA zurücksetzen"**

Der Benutzer muss 2FA danach neu einrichten.

---

## Benutzerverwaltung

### Was ist der Unterschied zwischen Organisations- und Standort-Ebene?

Die **Organisations-Ebene** verwaltet alle Standorte übergreifend (Lizenzen, globale Rollen, Schnittstellen). Die **Standort-Ebene** verwaltet einen einzelnen Standort (Fahrzeuge, Alarmgruppen, lokale Schnittstellen).

Der Wechsel erfolgt über das **Standort-Dropdown** oben in der Seitenleiste.

---

### Kann ein Benutzer mehreren Standorten angehören?

Ja. Benutzer können auf Organisationsebene angelegt und dann mehreren Standorten zugeordnet werden. Die Rollenvergabe kann standortspezifisch erfolgen.

---

## Einsätze

### Wie schließe ich einen Einsatz ohne Endzeit ab?

**Seitenleiste → Einsätze → Einsatz öffnen → „Bearbeiten" → „Einsatz abschließen"** oder Endzeit manuell eintragen → Speichern.

---

### Kann ich Einsätze automatisch nach einer bestimmten Zeit beenden lassen?

Nein, eine automatische Beendigung nach konfigurierbarer Zeit ist aktuell nicht möglich. Einsätze müssen manuell abgeschlossen werden.

---

### Manuell angelegte Felder in Einsätzen werden nach einem Schnittstellenupdate gelöscht

Wenn ein Einsatzupdate über die Leitstellen-Schnittstelle eingeht, können Felder mit demselben Namen überschrieben werden. Verwende für manuell angelegte Felder eindeutige Bezeichnungen, die nicht von der Schnittstelle belegt werden.

---

## Fahrzeuge

### Wie konfiguriere ich die automatische Fahrzeugzuordnung bei Alarmen?

**Seitenleiste (Organisations-Ebene) → Organisationseinstellungen → Einsätze → Fahrzeugzuordnung**

Dort kann eingestellt werden, ob Fahrzeuge bei bestimmten Statusmeldungen (z. B. Status 3) automatisch einem Einsatz zugeordnet werden.

---

### Zusatzfelder eines Fahrzeugs werden nach einem Update gelöscht

Dasselbe Verhalten wie bei Einsatzfeldern: Wenn die Schnittstelle ein Feld mit demselben Namen aktualisiert, wird das manuell angelegte Feld überschrieben. Eindeutige Feldnamen verwenden.

---

## Alarmierung

### Wie kann ich testen, ob die Alarmierung funktioniert?

In der EinsatzApp: **Flammen-Symbol in der Menüleiste → Schnellaktionen → Test-Alarm senden** (erfordert entsprechende Berechtigung in Connect).

Alternativ kann ein manueller Einsatz im Connect Portal erstellt werden, um die Alarmierung zu testen.

---

### Warum werden beim Eingang eines Alarms nicht die richtigen Alarmgruppen alarmiert?

Prüfe:
1. **Statische AAO** – ist für das Stichwort eine Regel mit den richtigen Alarmgruppen hinterlegt?
2. **Leitstellen-Zuordnung** – sind die eingehenden Leitstellen-Einheiten den richtigen FeuerSoftware-Alarmgruppen zugeordnet? (Control Center → Zuordnungen)
3. **Benutzer in Alarmgruppe** – sind die betreffenden Benutzer der Alarmgruppe zugeordnet?

---

## Schnittstellen

### Wie erstelle ich einen API-Token?

**Schnittstellen → Public API → „API-Token erstellen"** → Bezeichnung und Berechtigungen vergeben → Token kopieren (wird nur einmal angezeigt).

---

### Meine Webhook-URL empfängt keine Daten

Prüfe:
- Ist die URL erreichbar (kein Firewall-Block)?
- Ist das richtige Ereignis als Auslöser ausgewählt?
- Wird ein Secret erwartet und ist es korrekt konfiguriert?

In den Webhook-Einstellungen kann ein Test-Aufruf gesendet werden.

---

## Allgemein

### Wo finde ich die Aktivitätsprotokolle?

**Seitenleiste → Aktivitätsprotokolle** – sowohl auf Standort- als auch auf Organisationsebene verfügbar.

---

### Der Hinweis „Live-Aktualisierungen deaktiviert" erscheint

Die WebSocket-Verbindung zum Server wurde unterbrochen. Seite neu laden, um die Verbindung wiederherzustellen. Bei anhaltenden Problemen die Netzwerkverbindung prüfen.

---

### Kann ich das Connect Portal auf mehreren Geräten gleichzeitig nutzen?

Ja. Das Portal ist vollständig webbasiert und kann in beliebig vielen Browserfenstern oder auf verschiedenen Geräten gleichzeitig geöffnet werden.
