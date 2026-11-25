---
title: Aufbau & Bedienung
description: Navigationsleiste, Kopfzeile mit Funkstatus, Einsatzliste, Übersichtskarte, Fahrzeugübersicht, Schnellaktionen und Bildschirmschoner des EinsatzTablet
---

# Aufbau & Bedienung

---

## Navigationsleiste

Die Navigationsleiste liegt standardmäßig am rechten Bildschirmrand (umstellbar unter [Setup → Darstellung](/einsatztablet/15_setup#darstellung)) und ist in drei Bereiche gegliedert:

| Bereich | Einträge | Sichtbar |
|---|---|---|
| **Einsatz** | Übersicht, Anfahrt, Karte, Protokoll, Aufgaben, Besatzung, Bericht, Alarmieren | nur bei geöffnetem Einsatz |
| **Allgemein** | Infoboard, Dateien, Foto | immer |
| **Fahrzeug** | Fahrzeugdaten, Mängel, Setup | immer |

Ohne geöffneten Einsatz zeigt der Bereich „Einsatz" stattdessen **Einsatzliste**, **Karte** und **Fahrzeuge**.

Einzelne Einträge lassen sich unter [Setup → Anzeige & Filter](/einsatztablet/15_setup#anzeige-filter) ausblenden, z. B. Aufgaben, Besatzung, Bericht, Alarmieren, Infoboard, Dateien, Foto, Fahrzeugdaten oder Mängel. Setup und „Fehler melden" bleiben immer sichtbar. Ungelesene Protokolleinträge werden als Zähler am Eintrag **Protokoll** angezeigt.

> Auf schmalen Bildschirmen (z. B. im Hochformat oder bei geteiltem Bildschirm) erscheint die Navigation als Leiste am unteren Rand; weitere Bereiche sind dort über **„Mehr"** erreichbar.

---

## Kopfzeile

- **„‹ Einsatzliste"** – verlässt den geöffneten Einsatz und führt zurück zur Startansicht
- **Funkrufname** des angemeldeten Fahrzeugs
- **Funkstatus** des eigenen Fahrzeugs – siehe [Funkstatus in der Kopfzeile](#funkstatus-in-der-kopfzeile)
- **Verbindungspunkt** – grün: mit dem Server verbunden, orange: Verbindung wird aufgebaut, rot: keine Verbindung (siehe [Offline & Fehlerbehebung](/einsatztablet/16_offline_und_fehlerbehebung))
- **Sprachausgabe** – zeigt, über welchen Weg Ansagen ausgegeben werden (Tablet-Lautsprecher, Bluetooth oder Auto). Antippen erklärt die aktuelle Einstellung, z. B. wenn die Medienlautstärke auf 0 % steht
- **Bildschirmschoner** – startet den Bildschirmschoner sofort

### Funkstatus in der Kopfzeile

Neben dem Funkrufnamen zeigt die Kopfzeile ständig den aktuellen **Funkstatus des eigenen Fahrzeugs** als farbige Zahl. Ein Tipp darauf öffnet den Dialog **„Funkstatus"** – in jeder Ansicht, mit und ohne geöffneten Einsatz:

![Screenshot: Dialog „Funkstatus" mit Statustasten und den letzten Statusänderungen](/images/einsatztablet/31_funkstatus_dialog.png)

- **Statustasten 1–6** (frei Funk, frei Wache, Anfahrt, an E-Stelle, Sprechwunsch, nicht bereit) – setzen den Status des eigenen Fahrzeugs. Sie erscheinen nur, wenn [„Funkstatus manuell setzen erlauben"](/einsatztablet/15_setup#anzeige-filter) eingeschaltet ist; darunter steht der aktuelle Status („Aktuell: …")
- **„Letzte Statusänderungen"** – die fünf letzten Statuswechsel des Fahrzeugs mit Uhrzeit und Dauer. Beim aktuellen Status steht, wie lange er schon gilt („seit …")

Status 3 führt – wenn eingestellt – automatisch zur [Anfahrt](/einsatztablet/04_alarmierung#status-3-automatisch-zur-anfahrt). Ohne Netz wird der Status nachgesendet (siehe [Offline & Fehlerbehebung](/einsatztablet/16_offline_und_fehlerbehebung)).

---

## Startansicht ohne Einsatz

Welche Ansicht ohne geöffneten Einsatz erscheint, wird unter **Setup → Anzeige & Filter → „Startansicht ohne Einsatz"** festgelegt: Einsatzliste, Karte oder Fahrzeuge.

### Einsatzliste

![Screenshot: Einsatzliste mit laufenden Einsätzen](/images/einsatztablet/03_einsatzliste.png)

- Unter **„Laufend"** stehen alle laufenden Einsätze; **„Geschlossene Einsätze anzeigen"** lädt zusätzlich die abgeschlossenen (einschaltbar unter Setup → Anzeige & Filter)
- Jede Karte zeigt Stichwort, Adresse, Status („Aktiv" / „Geschlossen"), Einheiten, Personal und die zugewiesenen Einheiten
- **„Nach Standort filtern"** – nur verfügbar, wenn das Fahrzeug die Einsätze aller Standorte der Organisation sehen darf
- **„Neuer Einsatz"** – legt einen Einsatz direkt am Tablet an (Modus „Einfach" oder „Detailliert", mit **„Aktueller Standort"** als Einsatzadresse). Darf das Fahrzeug die Einsätze aller Standorte der Organisation sehen, wird beim Anlegen auch der **Standort** des Einsatzes gewählt. Abschaltbar über die Einstellung „Einsätze anlegen erlauben"

Ein Tipp auf einen Einsatz öffnet ihn – je nach Einstellung in der Übersicht, der Anfahrt, der Karte, dem Protokoll oder der Besatzung.

### Karte

Die Übersichtskarte zeigt alle laufenden Einsätze, die Wachen und die eigene Position.

### Fahrzeuge

Alle Fahrzeuge der Organisation mit aktuellem Funkstatus und der Zeit der letzten Statusänderung („seit …").

![Screenshot: Fahrzeugübersicht in der Kachelansicht](/images/einsatztablet/04_fahrzeuge.png)

- Darstellung als **„Liste"** oder **„Kacheln"**, sortierbar nach Funkrufname, Status oder Statuszeit
- Das eigene Fahrzeug ist mit **„Eigenes"** gekennzeichnet, Fahrzeuge anderer Organisationen stehen unter **„Überörtlich"**

---

## Schnellaktionen

Der runde Button mit dem FeuerSoftware-Logo öffnet die **Schnellaktionen** – die wichtigsten Aktionen mit einem Tipp:

![Screenshot: Geöffnete Schnellaktionen](/images/einsatztablet/05_schnellaktionen.png)

| Aktion | Funktion |
|---|---|
| **Foto** | Kamera öffnen und das Foto als Anhang zum Einsatz hochladen |
| **Mängelmeldung erstellen** | Neue Mängelmeldung für das eigene Fahrzeug |
| **Besatzung** | Direkt zur Stärkemeldung |
| **Meldung erstellen** | Kurze Lagemeldung oder Protokolleintrag schreiben |
| **Hydrant finden** | Wechselt zur Einsatzkarte und blendet alle Wasserentnahmestellen und weiteren Punkte ein |

Welche Aktionen angeboten werden, hängt vom geöffneten Einsatz und den Einstellungen unter „Anzeige & Filter" ab – ohne geöffneten Einsatz steht z. B. nur „Mängelmeldung erstellen" zur Verfügung.

Die Position des Buttons (links, Mitte, rechts) oder das Ausblenden wird unter [Setup → Darstellung](/einsatztablet/15_setup#darstellung) eingestellt.

---

## Bildschirmschoner

Der Bildschirmschoner zeigt eine abgedunkelte Uhr und schont so Display und Akku. Er endet bei Berührung („Zum Fortfahren berühren") oder automatisch, sobald ein neuer Alarm eingeht.

- Automatischer Start nach einer einstellbaren Zeit ohne Bedienung: [Setup → Bedienung](/einsatztablet/15_setup#bedienung) (standardmäßig aus)
- Während eines laufenden Einsatzes startet er frühestens nach 60 Minuten
