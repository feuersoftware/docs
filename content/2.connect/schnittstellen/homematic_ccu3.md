---
title: Homematic CCU3 Alarmweiterleitung
description: Alarme von Rauchwarnmeldern über die Homematic CCU3 und ein HoemScript an die öffentliche Feuersoftware Connect API weiterleiten
---

# Homematic CCU3 Alarmweiterleitung

> **Hinweis:** Diese Anleitung gilt für die **Homematic CCU3** (klassische Homematic-Zentrale). Für die neuere **Homematic IP HCU1** gibt es eine separate [Plugin-basierte Anbindung](/connect/schnittstellen/homematic).

Alarme aus der Homematic CCU3 – z. B. von Rauchwarnmeldern – können über ein Programm / Script auf der CCU3 an die öffentliche Feuersoftware Connect API weitergeleitet werden. Bei Auslösung wird ein Einsatz im konfigurierten Connect-Standort erstellt.

> **Hinweis:** Diese Schnittstelle dient ausschließlich der ergänzenden Informationsübermittlung und ist **kein primärer Alarmweg**.

---

## Voraussetzungen

- Homematic CCU3
- Rauchwarnmelder in der CCU3 angelernt
- API-Key aus dem Connect Portal (Standort → Schnittstellen → Öffentliche Connect Schnittstelle)
- **CUxD** (CUx-Daemon) auf der CCU3 installiert (notwendig für HTTP-Requests aus HomeMatic-Scripts)

> **Empfehlung:** Einen eigenen Connect-Standort nur für diese Anbindung anlegen, damit Alarme nicht unbeabsichtigt an den gesamten Standort gesendet werden.

---

## CUx-Daemon installieren

Der CUx-Daemon wird benötigt, da die native Scriptsprache von Homematic keine HTTP-Requests unterstützt.

1. Aktuelle Version im Forum [HomeMatic-Inside](http://www.homematic-inside.de/software/cuxdaemon) herunterladen
2. CCU3-Weboberfläche öffnen → **Einstellungen → Systemsteuerung → Zusatzsoftware**
3. Heruntergeladene Datei über „Datei auswählen" hochladen und installieren (**nicht entpacken**)
4. Nach der Installation startet die CCU3 neu – unter **Einstellungen → Systemsteuerung** erscheint der neue Menüpunkt **„CUx-Daemon"**

### CMD_EXEC Gerät anlegen

1. Im CUx-Daemon auf **„Geräte"** klicken und ein neues Gerät vom Typ **„(28) System"** mit der Funktion **„Exec"** anlegen
2. In der CCU3-Weboberfläche → **Einstellungen → Geräte → Posteingang**: das neu erstellte Gerät suchen und **„Fertigstellen"**
3. **CCU3 neu starten** – danach steht `CMD_EXEC` im Script zur Verfügung

---

## Programm erstellen

1. In der CCU3-Weboberfläche → **Programme und Verknüpfungen → Programme & Zentralverknüpfungen** → neues Programm anlegen
2. Im Abschnitt **„Wenn"**: den Rauchmelder auswählen, auf den reagiert werden soll. Sicherstellen, dass **„Rauchkammer verschmutzt: Ja"** ausgewählt ist. Über „Oder"-Bedingungen können weitere Rauchmelder ergänzt werden.
3. Im Abschnitt **„Aktivität"**: **„Script"** auswählen → drei Punkte → neues Script hinzufügen

---

## Script anpassen und eintragen

Das Script vor dem Eintragen in einem Texteditor anpassen:

**`APIKEYEINFUEGEN`** → API-Key des Connect-Standorts (Connect Portal → Standort → Schnittstellen → Öffentliche Connect Schnittstelle)

**Adresse und Stichwort** → an das eigene Feuerwehrhaus anpassen

> **Wichtig:** Keine Umlaute (ä, ö, ü) und keine Sonderzeichen verwenden – das führt zu Übertragungsfehlern.

**`CUxD.CUX2801001:1.CMD_EXEC`** → prüfen, ob diese ID mit dem in CUxD angelegten Gerät übereinstimmt

```homescript
string apiUrl = "https://connectapi.feuersoftware.com/interfaces/public/operation";
string bearerToken = "APIKEYEINFUEGEN"; ! Bearer-Token einfuegen

! JSON-Payload vorbereiten
string jsonPayload = "{";
jsonPayload = jsonPayload # "\"Start\":\"" # system.Date("%Y-%m-%dT%H:%M:%S.000%z") # "\",";
jsonPayload = jsonPayload # "\"Keyword\":\"Interner Rauchwarnmelder\",";
jsonPayload = jsonPayload # "\"Address\":{\"Street\":\"Karlsbader Strasse\",\"HouseNumber\":\"16\",\"ZipCode\":\"65760\",\"City\":\"Eschborn\"},";
jsonPayload = jsonPayload # "\"Facts\":\"Rauchmelder hat ausgeloest\",";
jsonPayload = jsonPayload # "\"Ric\":\"Homematic RWM\",";
jsonPayload = jsonPayload # "\"Properties\":[{\"Key\":\"Melder\",\"Value\":\"HLF1\"}]}";

string command = "wget --method=POST";
command = command # " --header=\"Authorization: Bearer " # bearerToken # "\"";
command = command # " --header=\"Content-Type: application/json\"";
command = command # " --body-data='" # jsonPayload # "'";
command = command # " \"" # apiUrl # "\" --server-response -O - --timeout=30 --user-agent=\"Mozilla/5.0\"";

object cuxdExec = dom.GetObject("CUxD.CUX2801001:1.CMD_EXEC");
if (cuxdExec) {
    cuxdExec.State(command);
    string response = cuxdExec.State();
    WriteLine("HTTP-Response: " # response);
} else {
    WriteLine("Fehler: CUxD nicht verfuegbar oder falsch konfiguriert.");
}
```

---

## Test

Über die Homematic **Script-Testfunktion** (Script einfügen → „Ausführen") kann das Script vorab getestet werden. Im Connect Portal unter **Seitenleiste → Einsätze** sollte danach ein neuer Einsatz mit dem konfigurierten Stichwort erscheinen.

Zusätzlich kann im Programm als weitere „Wenn"-Bedingung **„Systemtest ok"** hinzugefügt werden – damit wird bei Drücken des Testknopfs am Rauchmelder ebenfalls ein Einsatz erzeugt, was für laufende Tests hilfreich ist.
