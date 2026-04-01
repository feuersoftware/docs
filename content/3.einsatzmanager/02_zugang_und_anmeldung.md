---
title: Zugang & Anmeldung
description: Voraussetzungen und Schritte zur Anmeldung im FeuerSoftware EinsatzManager
---

# Zugang & Anmeldung

## Voraussetzungen

Um den EinsatzManager nutzen zu können, sind folgende Voraussetzungen zu erfüllen:

1. **Connect-Konto** – Es wird ein aktives FeuerSoftware-Connect-Konto benötigt.
2. **Rolle „Einsatzmanager"** – Die Berechtigung muss im Connect-Portal durch einen Administrator zugewiesen werden.

Fehlt die Rolle, wird der Benutzer nach der Anmeldung automatisch abgemeldet und erhält keinen Zugriff.

---

## Anmeldeprozess

Der EinsatzManager verwendet **Single Sign-On (SSO)** über das Connect-Portal. Eine separate Registrierung oder ein eigenes Passwort für den EinsatzManager sind nicht erforderlich.

**Schritt-für-Schritt:**

1. Rufe **https://manager.feuersoftware.com** im Browser auf.
2. Klicke auf **„Anmelden"** – du wirst zum Connect-Portal weitergeleitet.
3. Melde dich mit deinen Connect-Zugangsdaten an.
4. Nach erfolgreicher Authentifizierung wirst du automatisch zur Einsatzübersicht weitergeleitet.

![Screenshot: Login-Seite mit „Anmelden"-Button](/images/einsatzmanager/02_login_seite.png)

---

## Rollen & Berechtigungen

| Rolle | Beschreibung |
|---|---|
| Einsatzmanager | Vollzugriff auf alle Funktionen des EinsatzManagers |

Die Zuweisung der Rolle erfolgt ausschließlich über das **Connect-Portal** durch einen Administrator der Organisation. Wende dich bei Fragen zur Rechtevergabe an deinen Connect-Administrator.

---

## Abmeldung

Die Abmeldung erfolgt über das Benutzermenü oben rechts. Nach der Abmeldung wird die Sitzung beendet und alle Sitzungsdaten werden gelöscht.

> **Hinweis:** Aus Sicherheitsgründen wird empfohlen, sich nach der Arbeit aktiv abzumelden – insbesondere auf gemeinsam genutzten Geräten.

---

## Sitzungsverwaltung

- Anmeldesitzungen werden serverseitig gespeichert und laufen nach einer definierten Inaktivitätsdauer automatisch ab.
- Bei abgelaufener Sitzung wird der Benutzer zur Anmeldeseite weitergeleitet.
- Tabs im Hintergrund werden bei abgelaufenen Tokens automatisch aktualisiert.
