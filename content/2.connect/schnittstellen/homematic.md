---
title: Homematic CCU3 Rauchwarnmelder
description: Einrichtung der Homematic CCU3 Alarmweiterleitung an FeuerSoftware Connect über die öffentliche API
---

# Homematic CCU3 Rauchwarnmelder

Die Homematic-Schnittstelle ermöglicht es, Alarme von Rauchwarnmeldern einer Homematic CCU3 automatisch als Einsatz in FeuerSoftware Connect einzustellen. Die Weiterleitung erfolgt über ein Script auf der CCU3, das die öffentliche FeuerSoftware API aufruft.

> **Hinweis:** Diese Schnittstelle dient ausschließlich der ergänzenden Informationsübermittlung und ist **kein primärer Alarmweg**.

---

## Voraussetzungen

- Homematic CCU3 mit Internetzugang
- Rauchwarnmelder in der CCU3 angelernt
- API-Token aus dem Connect Portal (Standort → Schnittstellen → Public API)

---

## Einrichtung

### Schritt 1: CUx-Daemon installieren

Der CUx-Daemon wird benötigt, da die native Scriptsprache der CCU3 keine HTTP-Requests unterstützt.

1. In der CCU3-Weboberfläche navigieren: **Einstellungen → Systemsteuerung → Zusatzsoftware**
2. CUx-Daemon vom HomeMatic-Inside Forum herunterladen
3. Die Datei **nicht entpacken**
4. Datei hochladen und installieren → CCU3 startet automatisch neu
5. Nach dem Neustart erscheint ein neuer Menüpunkt: **Einstellungen → Systemsteuerung → CUx-Daemon**

![Screenshot: CCU3 – CUx-Daemon installieren](/images/connect/schnittstellen/homematic_01_cuxdaemon.png)

### Schritt 2: CUxD-Gerät anlegen

1. **Einstellungen → Systemsteuerung → CUx-Daemon** öffnen
2. Auf **„Geräte"** klicken
3. Neues Gerät vom Typ **„(28) System"** mit Funktion **„Exec"** erstellen
4. In der CCU3-Weboberfläche navigieren: **Einstellungen → Geräte → Posteingang**
5. Das neue Gerät **„fertigstellen"**
6. CCU3 neu starten, damit die `CMD_EXEC`-Funktionalität verfügbar wird

![Screenshot: CCU3 – CUxD-Gerät anlegen](/images/connect/schnittstellen/homematic_02_cuxdgeraet.png)

### Schritt 3: Programm erstellen

1. In der CCU3-Weboberfläche navigieren: **Programme und Verknüpfungen → Programme & Zentralverknüpfungen**
2. Neues Programm anlegen

**Bedingungen (Wenn-Bereich):**
- Deinen Rauchwarnmelder auswählen
- Bedingung setzen: **„Rauchkammer verschmutzt: Ja"**

**Aktivität (Dann-Bereich):**
- **„Script"** auswählen → Drei-Punkte-Menü → Script-Editor öffnen

![Screenshot: CCU3 – Programm anlegen](/images/connect/schnittstellen/homematic_03_programm.png)

### Schritt 4: Script einfügen und anpassen

Folgendes Script in den Editor einfügen und die markierten Stellen anpassen:

```
string apiUrl = "https://connectapi.feuersoftware.com/interfaces/public/operation";
string bearerToken = "APIKEYEINFUEGEN";

string jsonPayload = "{";
jsonPayload = jsonPayload # "\"Start\":\"" # system.Date("%Y-%m-%dT%H:%M:%S.000%z") # "\",";
jsonPayload = jsonPayload # "\"Keyword\":\"Interner Rauchwarnmelder\",";
jsonPayload = jsonPayload # "\"Address\":{\"Street\":\"STRASSEEINFUEGEN\",\"HouseNumber\":\"HAUSNUMMEREINFUEGEN\",\"ZipCode\":\"PLZEINFUEGEN\",\"City\":\"STADTEINFUEGEN\"},";
jsonPayload = jsonPayload # "\"Facts\":\"Rauchmelder hat ausgeloest\",";
jsonPayload = jsonPayload # "\"Ric\":\"Homematic RWM\",";
jsonPayload = jsonPayload # "\"Properties\":[{\"Key\":\"Melder\",\"Value\":\"MELDERNAMEINFUEGEN\"}]}";

string command = "wget --method=POST";
command = command # " --header=\"Authorization: Bearer " # bearerToken # "\"";
command = command # " --header=\"Content-Type: application/json\"";
command = command # " --body-data='" # jsonPayload # "'";
command = command # " \"" # apiUrl # "\" --server-response -O - --timeout=30 --user-agent=\"Mozilla/5.0\"";

object cuxdExec = dom.GetObject("CUxD.CUX2801001:1.CMD_EXEC");
if (cuxdExec) {
    cuxdExec.State(command);
} else {
    WriteLine("Fehler: CUxD nicht verfuegbar oder falsch konfiguriert.");
}
```

**Anpassungen vornehmen:**

| Platzhalter | Ersetzen durch |
|---|---|
| `APIKEYEINFUEGEN` | API-Token aus Connect Portal (Standort → Schnittstellen → Public API) |
| `STRASSEEINFUEGEN` | Straße des Gebäudes |
| `HAUSNUMMEREINFUEGEN` | Hausnummer |
| `PLZEINFUEGEN` | Postleitzahl |
| `STADTEINFUEGEN` | Stadt |
| `MELDERNAMEINFUEGEN` | Name oder Bezeichnung des Melders (optional) |
| `CUxD.CUX2801001:1.CMD_EXEC` | Ggf. an ID des in Schritt 2 erstellten Geräts anpassen |

> **Wichtig:** Keine Umlaute (ä, ö, ü) oder Sonderzeichen im Script verwenden.

### Schritt 5: Script testen und speichern

1. Im Script-Editor auf **„Ausführen"** klicken
2. Im Connect Portal prüfen, ob ein Einsatz im konfigurierten Standort erstellt wurde
3. Script speichern → Programm ist einsatzbereit

---

## API-Token abrufen

Den benötigten API-Token findest du im Connect Portal:

**Standort wählen → Seitenleiste → Schnittstellen → Public API → API-Token erstellen**

> **Empfehlung:** Lege einen separaten Standort speziell für Rauchmelder-Alarme an, um diese klar von regulären Einsätzen zu trennen.
