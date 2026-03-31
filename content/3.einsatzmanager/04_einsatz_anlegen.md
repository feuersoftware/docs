# Einsatz anlegen

## Leitstellenanbindung

In der Regel werden Einsätze **automatisch** über die Leitstelle oder bestehende Alarmwege über die Connect-Plattform angelegt. Das manuelle Anlegen von Einsätzen kann jedoch in besonderen Situationen sinnvoll sein, z. B. bei Unwetterlagen oder anderen Szenarien, in denen kein automatischer Alarm eingeht.

---

## Manuelles Anlegen

Der Bereich „Einsatz anlegen" ist über die Schaltfläche **„+ Einsatz erstellen"** erreichbar.

![Screenshot: Formular „Einsatz anlegen" in der Gesamtansicht](/images/einsatzmanager/04_einsatz_anlegen_gesamt.png)

---

## Pflichtfelder

Folgende Felder müssen ausgefüllt werden, bevor der Einsatz gespeichert werden kann:

- **Stichwort** – Auswahl aus der konfigurierten Stichwortliste (farblich hinterlegt)
- **Straße** – Straßenadresse des Einsatzortes

Alle anderen Felder sind optional.

---

## Basisdaten

| Feld | Beschreibung |
|---|---|
| Stichwort | Farblich codiertes Einsatzstichwort aus der Organisationskonfiguration |
| Priorität | Keine / Niedrig / Mittel / Hoch |
| Einsatznummer | Optionale interne Nummer |
| Sachverhalt | Freitext zur Einsatzbeschreibung |
| Standort / Wache | Zuordnung zu einer bestimmten Wache |
| RIC | Optionaler Funkrufidentifikationscode |
| Startzeit | Datum und Uhrzeit des Einsatzbeginns |

---

## Einsatzort

Der Einsatzort kann auf drei Wegen eingegeben werden:

### 1. Manuelle Adresseingabe

Die Felder Stadt, Postleitzahl, Ortsteil und Straße können direkt befüllt werden. Nach Eingabe einer vollständigen Adresse werden automatisch Koordinaten via OpenStreetMap ermittelt und der Marker auf der Karte positioniert.

### 2. Marker auf der Karte verschieben

Der Kartenmarker kann per Drag-and-Drop auf die exakte Position gezogen werden. Die Koordinaten und – wenn möglich – die Adresse werden automatisch rückwärts aufgelöst.

### 3. Position auf der Karte auswählen

Über **„Position auf der Karte auswählen"** kann der Marker durch Klick an eine beliebige Stelle der Karte gesetzt werden.

![Screenshot: Kartenbereich beim Anlegen eines Einsatzes mit positioniertem Marker](/images/einsatzmanager/04_einsatz_karte.png)

---

## Melder / Anrufer

| Feld | Beschreibung |
|---|---|
| Name des Melders | Name des Anrufers oder der meldenden Person |
| Telefonnummer | Rückrufnummer des Melders |

---

## Zusatzinformationen

Im Bereich „Zusatzinformationen" können beliebige **Schlüssel-Wert-Paare** ergänzt werden. Damit lassen sich einsatzspezifische Angaben strukturiert festhalten, die in den Standardfeldern nicht vorgesehen sind (z. B. Gebäudetyp, Stockwerk, Ansprechpartner vor Ort).

- Felder können dynamisch hinzugefügt und entfernt werden.
- Es gibt keine Begrenzung der Anzahl.

---

## Einsatz speichern

Nach dem Ausfüllen der erforderlichen Felder wird der Einsatz über **„Speichern"** angelegt. Er erscheint danach sofort in der Einsatzübersicht und allen verbundenen Clients in Echtzeit.

> **Hinweis:** Durch das Speichern wird der Einsatz angelegt, jedoch **noch nicht alarmiert**. Wenn eine Alarmierung erforderlich ist, kann diese im nächsten Schritt über den Button **„Alarmieren"** ausgelöst werden, sobald der Einsatz geöffnet ist.

Mit **„Abbrechen"** wird das Formular verworfen und zur Einsatzübersicht zurückgekehrt.
