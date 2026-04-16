---
title: Dokumente & Nextcloud
description: Nextcloud-Anbindung am EinsatzTablet für Einsatzpläne, BMA-Pläne und Einsatzfotos einrichten
---

# Dokumente & Nextcloud

Das EinsatzTablet kann mit einer **Nextcloud**-Instanz verbunden werden. Damit stehen im Einsatz Dokumente wie BMA-Pläne, Waldbrandkonzepte oder Feuerwehrpläne direkt auf dem Tablet zur Verfügung. Außerdem können Fotos zur Einsatzdokumentation direkt in die Nextcloud hochgeladen werden.

> **Nextcloud** ist eine kostenlose Open-Source-Software zur Dateiverwaltung, die auf einem eigenen Webserver betrieben wird. Viele Hoster bieten einen 1-Click-Installer an.

---

## Einrichtung

### 1. Nextcloud-Benutzer anlegen

1. Als Administrator in der Nextcloud anmelden
2. Einen neuen Benutzer mit sicherem Passwort anlegen
3. Das Passwort wird nur einmalig in der App eingegeben

> **Hinweis:** Eine Zwei-Faktor-Authentifizierung ist aktuell nicht unterstützt. Ein sicheres Passwort wählen.

### 2. Verbindung im EinsatzTablet konfigurieren

**Einstellungen** des EinsatzTablets öffnen und folgende Felder befüllen:

| Einstellung | Beschreibung |
|---|---|
| **Nextcloud-Adresse** | URL der Nextcloud-Instanz. Falls nötig `/index.php` anhängen. |
| **Benutzername** | Angelegter Nextcloud-Benutzername |
| **Passwort** | Passwort des Nextcloud-Benutzers |

Nach dem Speichern kann die Verbindung durch Tippen auf das **Dokumenten-Symbol** in der Einsatzansicht getestet werden. Bei erfolgreicher Verbindung erscheint die Ordnerstruktur des Nextcloud-Benutzers.

---

## Dokumente ansehen

1. In der Einsatzansicht auf das **Dokumenten-Symbol** tippen
2. Die Ordnerstruktur des Nextcloud-Benutzers wird angezeigt (links Navigation, rechts Dateien)
3. Gewünschtes Dokument antippen – es öffnet sich direkt in der App

**Empfohlen:** Dokumente im **PDF-Format** ablegen.

> Für den Abruf ist eine **Internetverbindung** erforderlich (WLAN oder Mobilfunk). Dokumente werden nicht lokal gespeichert.

---

## Einsatzfotos aufnehmen

1. In der Einsatzansicht auf das **Kamera-Symbol** tippen
2. Foto aufnehmen
3. Das Foto wird automatisch in die Nextcloud hochgeladen

**Ordnerstruktur in der Nextcloud:**

```
Einsätze/
  YYYY-MM-DD HH-MM - Einsatznummer - Adresse/
    Fahrzeugname/
      foto.jpg
```

Der Name des Einsatz-Ordners kann in den Einstellungen geändert werden.
