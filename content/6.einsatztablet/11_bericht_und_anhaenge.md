---
title: Bericht & Anhänge
description: Einsatzdokumentation im EinsatzTablet erfassen, Fotos und Dateien anhängen, Vollständigkeit prüfen und den Einsatzbericht als PDF erstellen oder über den EinsatzMonitor drucken
---

# Bericht & Anhänge

**Einsatz → Bericht**

Im Bereich Bericht wird der Einsatz direkt am Tablet dokumentiert – mit denselben Daten wie im [EinsatzManager](/einsatzmanager/05_einsatzdetails#einsatzbericht-pdf-export) und im [Connect Portal](/connect/07_einsaetze#einsatzbericht-herunterladen). Der Bereich hat drei Reiter: **Erfassung**, **Anhänge** und **Abschluss**.

---

## Erfassung

„Angaben zum Einsatz erfassen" – gegliedert in drei Abschnitte:

![Screenshot: Bericht – Erfassung](/images/einsatztablet/19_bericht_erfassung.png)

| Abschnitt | Felder |
|---|---|
| **Lage & Maßnahmen** | Einsatzleiter, Protokollant, Lage beim Eintreffen, Tätigkeit, Eingesetzte Materialien |
| **Beteiligte & Betroffene** | Eigentümer/Halter, Geschädigter, Verursacher |
| **Nachbereitung** | Noch zu erledigen (nach dem Einsatz), Bemerkungen |

Mit **„Speichern"** übernehmen. Texte aus dem Protokoll lassen sich über **„Text in Feld übernehmen"** direkt in ein Feld einfügen (siehe [Protokoll](/einsatztablet/08_protokoll#kopieren)).

---

## Anhänge

„Fotos und Dateien zum Einsatz ansehen, hinzufügen und löschen."

![Screenshot: Bericht – Anhänge](/images/einsatztablet/20_bericht_anhaenge.png)

- **„Foto aufnehmen"** – mit der Kamera des Tablets
- **„Aus Galerie"** – ein vorhandenes Foto wählen
- **„Datei auswählen"** – z. B. ein PDF

Fotos erhalten automatisch den **Aufnahmeort** und erscheinen damit auch auf der [Karte](/einsatztablet/07_karte) und im EinsatzManager. Schneller geht ein Foto über **Foto** in der Navigationsleiste oder die gleichnamige Schnellaktion.

Wo die Dateien gespeichert werden (Connect Storage oder Nextcloud des Standorts), wird im Connect Portal festgelegt – siehe [Dateispeicher & Anhänge](/connect/23_dateispeicher).

### Upload ohne Netz

| Anzeige | Bedeutung |
|---|---|
| **Wartet auf Netz** | Der Anhang ist auf dem Tablet gespeichert und wird hochgeladen, sobald wieder eine Verbindung besteht |
| **Wartet auf WLAN** | Ist [„Anhänge nur über WLAN hochladen"](/einsatztablet/15_setup#automatisierung) aktiv, wartet der Anhang auf ein WLAN. Über **„Jetzt senden"** geht er trotzdem über Mobilfunk raus |
| **Speicher voll** | Der Connect Storage der Organisation ist voll – ein Administrator muss Speicher freigeben oder buchen |

---

## Abschluss

„Vollständigkeit prüfen und Bericht als PDF erstellen."

![Screenshot: Bericht – Abschluss mit Vollständigkeitsprüfung](/images/einsatztablet/21_bericht_abschluss.png)

- **Grunddaten** und **Dokumentation** zeigen, welche Angaben noch fehlen („Vollständig" bzw. „2 Felder fehlen")
- **„Daten vervollständigen"** führt Schritt für Schritt durch alle fehlenden Felder – mit Vorschlägen wie „Rauchentwicklung sichtbar" oder „Brandbekämpfung" zum Antippen
- **„Bericht herunterladen"** – erstellt den Einsatzbericht als PDF
- **„Über EinsatzMonitor drucken"** – sendet den Bericht an einen EinsatzMonitor des Standorts zum Drucken

Der Einsatzbericht muss für die Organisation in Connect aktiviert sein; andernfalls steht dort „Für diese Organisation nicht verfügbar." Inhalt und Aufbau des Berichts: [Organisationseinstellungen – Einsatzberichte](/connect/12_organisationseinstellungen#einsatzberichte)

---

Der Bereich lässt sich unter [Setup → Anzeige & Filter](/einsatztablet/15_setup#anzeige-filter) einschränken: „Einsatzberichte schreiben erlauben", „Einsatz-Anhänge anzeigen", „Anhänge hinzufügen erlauben", „Dateien löschen erlauben".
