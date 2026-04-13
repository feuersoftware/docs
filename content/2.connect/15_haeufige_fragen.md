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

## Benutzerverwaltung

### Kann ich einen versehentlich gelöschten Benutzer wiederherstellen?

Nein. Gelöschte Benutzer können nicht wiederhergestellt werden. Der Benutzer muss erneut per E-Mail eingeladen und neu eingerichtet werden.

→ [Benutzer einladen](/connect/04_benutzerverwaltung)

---

## Termine

### Kann ich einen Kalender nur für bestimmte Benutzer sichtbar machen?

Ja. Beim Erstellen oder Bearbeiten eines Kalenders die Option **„Sichtbarkeit eingeschränkt"** aktivieren und die gewünschten Gruppen auswählen. Der Kalender ist dann nur für Mitglieder dieser Gruppen sichtbar.

→ [News & Termine](/connect/08_news_und_termine)

---

### Können Mitglieder per Push über neue Termine benachrichtigt werden?

Ja. Beim Anlegen eines Kalenders kann eine **Erinnerung** konfiguriert werden. Mitglieder erhalten dann eine Push-Benachrichtigung vor jedem Termin in diesem Kalender.

→ [News & Termine](/connect/08_news_und_termine)

---

## Einsätze

### Wie schließe ich einen Einsatz ohne Endzeit ab?

**Seitenleiste → Einsätze → Einsatz öffnen → „Bearbeiten" → „Einsatz abschließen"** oder Endzeit manuell eintragen → Speichern.

---

### Kann ich Einsätze automatisch nach einer bestimmten Zeit beenden lassen?

Ja. Im Connect Portal kann unter **Organisation → Verwaltung → „Automatische Datenlöschung"** konfiguriert werden, nach welcher Zeit abgeschlossene Einsätze automatisch gelöscht werden. Eine automatische *Beendigung* laufender Einsätze ist jedoch nicht möglich – Einsätze müssen manuell abgeschlossen werden.

---

### Manuell angelegte Felder in Einsätzen werden nach einem Schnittstellenupdate gelöscht

Wenn ein Einsatzupdate über die Leitstellen-Schnittstelle eingeht, können Felder mit demselben Namen überschrieben werden. Verwende für manuell angelegte Felder eindeutige Bezeichnungen, die nicht von der Schnittstelle belegt werden.

---

## Alarmierung

### Wie kann ich testen, ob die Alarmierung funktioniert?

In der EinsatzApp: **Einstellungen → Alarmierungseinstellungen → Test-Alarm senden**.

Alternativ kann ein manueller Einsatz im Connect Portal erstellt werden, um die Alarmierung zu testen.

---

### Warum werden beim Eingang eines Alarms nicht die richtigen Alarmgruppen alarmiert?

Prüfe:
1. **Statische AAO** – ist für das Stichwort eine Regel mit den richtigen Alarmgruppen hinterlegt?
2. **Benutzer in Alarmgruppe** – sind die betreffenden Benutzer der Alarmgruppe zugeordnet?

---

### Kann ich einzelne Personen direkt alarmieren, ohne eine Alarmgruppe zu erstellen?

Nein. Die Alarmierung in Connect erfolgt immer über **Alarmgruppen**. Um eine einzelne Person zu alarmieren, kann eine Alarmgruppe mit nur dieser einen Person angelegt werden. 

→ [Alarmierung & AAO](/connect/11_alarmierung)

---

## Schnittstellen

### Wie erstelle ich einen API-Token?

**Schnittstellen → Öffentliche Connect-Schnittstelle → „Konfigurieren" -> "Aktivieren"** → Der API Key wird angezeigt
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

---

### Verlängert sich die Lizenz automatisch?

Nein. Lizenzen verlängern sich **nicht automatisch**. 90 Tage vor Ablauf wird eine Erinnerungs-E-Mail versendet. Die Verlängerung muss manuell über eine erneute Bestellung im Shop ausgelöst werden.

→ [Lizenzierung](/connect/14_lizenzierung)
