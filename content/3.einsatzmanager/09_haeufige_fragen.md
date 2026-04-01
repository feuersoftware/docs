---
title: Häufige Fragen (FAQ)
description: Antworten auf häufige Fragen zur Anmeldung, Bedienung und Konfiguration des EinsatzManagers
---

# Häufige Fragen (FAQ)

## Anmeldung & Zugang

**Ich kann mich nicht anmelden. Was ist zu tun?**

Stelle sicher, dass:
1. Du ein aktives Connect-Konto besitzt
2. Dir die Rolle **„Einsatzmanager"** im Connect-Portal zugewiesen wurde
3. Dein Konto nicht gesperrt ist

Wende dich bei anhaltenden Problemen an den Administrator deiner Organisation.

---

**Ich werde nach der Anmeldung sofort wieder abgemeldet.**

Ursache: Die Rolle „Einsatzmanager" ist deinem Konto nicht zugewiesen. Ein Administrator muss die Rolle im Connect-Portal vergeben.

---

## Einsätze

**Wie schließe ich einen abgeschlossenen Einsatz, der kein Enddatum hat?**

Öffne den Einsatz und klicke auf **„Bearbeiten"**. Dort kann über die Schaltfläche **„Einsatz abschließen"** ein Endstempel gesetzt werden. Alternativ kann ein Enddatum manuell in das Feld „Endzeit" eingetragen werden.

---

**Warum sehe ich keine Einsätze auf dem Dashboard?**

Prüfe die aktiven Filter:
- Ist der Status-Filter auf **„Aktiv"** gesetzt und es gibt keine aktiven Einsätze?
- Schränkt der Zeitraumfilter die Anzeige ein?
- Ist ein Standortfilter gesetzt, dem keine Einsätze zugeordnet sind?

Setze alle Filter zurück und prüfe erneut.

---

**Kann ich Einsätze löschen?**

Ja, Einsätze können gelöscht werden. Es erscheint ein Bestätigungsdialog. Beachte, dass gelöschte Einsätze nicht wiederhergestellt werden können.

---

## Karte & Fahrzeuge

**Die Fahrzeugposition auf der Karte stimmt nicht.**

GPS-Positionen werden vom EinsatzTablet oder anderen Fahrzeuggeräten übermittelt. Wenn kein GPS-Signal vorhanden ist, zeigt das Fahrzeug zuletzt bekannte Koordinaten. Über das Kontextmenü auf der Einsatzkarte kann die Position manuell korrigiert werden.

---

**Warum sind manche Fahrzeuge nicht im Statuspanel sichtbar?**

Fahrzeuge werden nur angezeigt, wenn sie im Connect-Portal konfiguriert und dem entsprechenden Standort zugeordnet sind. Prüfe die Fahrzeugkonfiguration im Connect-Portal.

---

## Echtzeit & Verbindung

**Das Badge „Live-Aktualisierungen deaktiviert" wird angezeigt. Was bedeutet das?**

Die WebSocket-Verbindung zum Server wurde unterbrochen. Neue Einsätze und Änderungen werden nicht automatisch angezeigt. Lade die Seite neu, um die Verbindung wiederherzustellen. Bei anhaltenden Problemen prüfe die Netzwerkverbindung.

---

**Wie viele Benutzer können gleichzeitig auf einen Einsatz zugreifen?**

Es gibt keine technische Begrenzung. In der Einsatzdetailseite wird angezeigt, wie viele Benutzer den Einsatz gerade geöffnet haben.

