---
title: Organisationseinstellungen
description: Zentrale Einstellungen der Organisation im Connect Portal – Allgemein, Lizenzen, Einsätze, HelferApp und Datenlöschung
---

# Organisationseinstellungen

Die Organisationseinstellungen sind ausschließlich auf **Organisations-Ebene** verfügbar und erfordern Administrator-Berechtigungen. Hier werden die grundlegenden Parameter der gesamten Organisation konfiguriert.

**Seitenleiste (Organisations-Ebene) → Organisationseinstellungen**

---

## Allgemein

![Screenshot: Organisationseinstellungen – Allgemein](/images/connect/12_org_allgemein.png)

| Einstellung | Beschreibung |
|---|---|
| **Organisations-Name** | Der angezeigte Name der Organisation |
| **Sprache** | Standard-Sprache des Portals (Deutsch / Englisch) |
| **Leitstellen-Name** | Name der zuständigen Leitstelle (wird in der App angezeigt) |
| **Standard-Verfügbarkeit** | Welcher Verfügbarkeitsstatus beim ersten Login eines Nutzers voreingestellt ist |
| **Unwetterwarnungen-Anbieter** | Anbieter für Unwetterwarnungen (z. B. Deutscher Wetterdienst) |
| **Unwetterwarnungen-Region** | Geografische Region für die Unwetterwarnung |
| **Partner-Modus** | Ob die PartnerApp für diese Organisation aktiviert ist |

---

## Dienstausweis

**Organisationseinstellungen → Dienstausweis**

Der digitale Dienstausweis zeigt den Mitgliedern der Organisation in der **EinsatzApp** einen persönlichen Ausweis – mit Profilbild, Name, Organisation und Personalnummer sowie wahlweise einem Barcode, einem QR-Code und der FeuerSoftware-Verifizierung. Auf dieser Seite legst du fest, welche Angaben und Codes der Ausweis enthält. Details zur Nutzung in der App: [EinsatzApp: Weitere Funktionen – Dienstausweis](/einsatzapp/14_weiteres#dienstausweis).

> **Hinweis:** Der neue Dienstausweis mit Profilbild, Barcode, QR-Code und Personalnummer ist aktuell nur in der **Beta-Version der EinsatzApp** enthalten und wird mit dem nächsten regulären Update für alle verfügbar. So kommt ihr an die Beta: [EinsatzApp – Betaversionen](/einsatzapp/01_produktuebersicht#betaversionen)

![Screenshot: Organisationseinstellungen – Dienstausweis](/images/connect/12_org_dienstausweis.png)

| Einstellung | Beschreibung |
|---|---|
| **Aktiviert** | Schaltet den Dienstausweis für alle Mitglieder der Organisation frei |
| **Profilbild anzeigen** | Zeigt das Profilbild des Mitglieds auf dem Ausweis |
| **Profilbild erforderlich** | Nur Benutzer mit Profilbild können den Dienstausweis öffnen. Ohne Profilbild werden sie in der App aufgefordert, eines hochzuladen |
| **FeuerSoftware-Verifizierung (QR-Code)** | Ein zeitlich begrenzt gültiger QR-Code, über den Dritte die Person und ihre Organisation prüfen können (siehe unten) |
| **Barcode** | Zeigt zusätzlich einen Barcode, z. B. für Zutrittssysteme, Tankkarten oder Ausleihsysteme |
| **Barcode-Typ** | Format des Barcodes (siehe Tabelle unten) |
| **Inhalt des Barcodes** | Inhalt mit Platzhaltern, z. B. `{StaffNumber}`. Ist der Inhalt für einen Benutzer leer oder lässt er sich nicht in den gewählten Barcode umwandeln, wird für ihn kein Barcode angezeigt |
| **QR-Code** | Zeigt zusätzlich einen QR-Code mit frei festgelegtem Inhalt |
| **Inhalt des QR-Codes** | Inhalt mit Platzhaltern, z. B. `{FirstName} {LastName} {StaffNumber}` |

Änderungen mit **„Änderungen speichern"** übernehmen.

### Platzhalter

In den Inhalten von Barcode und QR-Code können folgende Platzhalter verwendet werden. Sie werden für jedes Mitglied durch dessen Daten ersetzt:

| Platzhalter | Wird ersetzt durch |
|---|---|
| `{FirstName}` | Vorname |
| `{LastName}` | Nachname |
| `{StaffNumber}` | Personalnummer (wird in der [Benutzerverwaltung](/connect/04_benutzerverwaltung#tab-allgemein) gepflegt) |

**Beispiel:** Barcode-Typ „Code 128" mit dem Inhalt `FW-{StaffNumber}` ergibt für ein Mitglied mit der Personalnummer 4711 den Barcode „FW-4711".

### Barcode-Typen

| Barcode-Typ | Erlaubter Inhalt |
|---|---|
| **Code 128** | Buchstaben, Ziffern und Sonderzeichen – für die meisten Inhalte geeignet |
| **Code 39** | Großbuchstaben, Ziffern sowie die Zeichen `- . $ / + %` und Leerzeichen |
| **Interleaved 2 of 5 (I 2/5)** | Nur Ziffern, in gerader Anzahl |
| **EAN-128 (GS1-128)** | Inhalt im GS1-Format mit Application Identifiers, z. B. `(01)12345678901231` |
| **EAN-13** | Nur Ziffern: 12 Ziffern (Prüfziffer wird ergänzt) oder 13 Ziffern |
| **EAN-8** | Nur Ziffern: 7 Ziffern (Prüfziffer wird ergänzt) oder 8 Ziffern |
| **UPC-A** | Nur Ziffern: 11 Ziffern (Prüfziffer wird ergänzt) oder 12 Ziffern |
| **UPC-E** | Nur Ziffern: 7 oder 8 Ziffern, beginnend mit 0 oder 1 |
| **Codabar** | Ziffern und die Zeichen `- $ : / . +`, optional mit den Start-/Stopp-Zeichen A bis D |

> **Tipp:** Welcher Barcode-Typ benötigt wird, gibt in der Regel das System vor, das den Code lesen soll (z. B. Zutrittskontrolle oder Tankstelle).

### FeuerSoftware-Verifizierung

Mit der Verifizierung können sich Mitglieder vor Ort – z. B. gegenüber der Polizei – als aktive Einsatzkraft der Organisation ausweisen. Der QR-Code verweist auf eine öffentliche Prüfseite im Connect Portal, die beim Scannen Name und Organisation der Einsatzkraft anzeigt (oder einen Fehler, falls der Code ungültig oder abgelaufen ist). Ein einzelner Code ist **15 Minuten** gültig.

> Die Verifizierung steht aus regulatorischen Gründen nur Organisationen mit einer regulären (bezahlten) Lizenz zur Verfügung. Während der kostenlosen 90-tägigen Teststellung (siehe [Lizenzierung](/connect/14_lizenzierung)) kann sie nicht aktiviert werden.

### Dienstausweis deaktivieren

Wird **„Aktiviert"** abgewählt, erscheint die Sicherheitsabfrage **„Dienstausweis deaktivieren"**: Beim Deaktivieren werden **alle Einstellungen des Dienstausweises gelöscht**. Bei einer erneuten Aktivierung müssen Barcode, QR-Code usw. neu eingerichtet werden.

---

## Lizenzen & Buchungen

![Screenshot: Organisationseinstellungen – Lizenzen](/images/connect/12_org_lizenzen.png)

**Organisationseinstellungen → Lizenzen**

Zeigt die aktuell gebuchten Lizenzen der Organisation:

- Anzahl der lizenzierten Benutzer
- Lizenz-Typ (z. B. Normal, Free)
- Gültigkeitsdatum

Hier können Lizenzen erweitert oder neue gebucht werden. Gebuchter zusätzlicher Speicher für den Connect Storage erscheint hier ebenfalls (Produkt „Connect Storage").

---

## Connect Storage

![Screenshot: Organisationseinstellungen – Connect Storage](/images/connect/23_connect_storage.png)

**Organisationseinstellungen → Connect Storage**

Übersicht über den Standard-Dateispeicher der Organisation: Speichernutzung (Belegt, Kostenlos enthalten, Gebucht, Gesamtlimit), **„Speicher aufräumen"**, **„Speicher buchen"** sowie die Liste der zusätzlichen Speicherbuchungen.

→ Ausführlich beschrieben unter [Dateispeicher & Anhänge](/connect/23_dateispeicher#connect-storage).

---

## Dokumente

![Screenshot: Organisationseinstellungen – Dokumente](/images/connect/12_org_dokumente.png)

**Organisationseinstellungen → Dokumente**

Verwaltung von Dokumenten auf Organisationsebene, die allen Mitgliedern zur Verfügung stehen.

---

## HelferApp-Einstellungen

![Screenshot: Organisationseinstellungen – HelferApp](/images/connect/12_org_helferapp.png)

**Organisationseinstellungen → HelferApp**

Die HelferApp kann grundsätzlich ohne gesonderte Freischaltung genutzt werden. Die **Verarbeitung von Patientendaten** ist jedoch nur nach Aktivierung durch den **Feuersoftware Support** möglich. Voraussetzung dafür ist das Vorliegen eines **Auftragsverarbeitungsvertrags (AVV)** nach DSGVO mit der Feuer Software GmbH.

| Einstellung | Beschreibung |
|---|---|
| **Status** | Zeigt an, ob die vollständige HelferApp (inkl. Patientendaten) aktiv ist (Aktivierung durch Support) |
| **Aktivierung ohne Verarbeitung von Gesundheitsdaten** | Nutzung der HelferApp ohne Patientendatenverarbeitung – kein AVV erforderlich, schränkt den Funktionsumfang ein |
| **Bezeichnung der Verfahrenstätigkeit** | Bezeichnung der Organisation für den Auftragsverarbeitungsvertrag |

---

## Einsätze

![Screenshot: Organisationseinstellungen – Einsätze](/images/connect/12_org_einsaetze.png)

**Organisationseinstellungen → Einsätze**

| Einstellung | Beschreibung |
|---|---|
| **Einsatz-Sichtbarkeit** | Wie lange abgeschlossene Einsätze für Mitglieder sichtbar sind |
| **Einsatz-Sharing** | Ob Einsätze zwischen Standorten geteilt werden können |
| **Einsatz-Reports** | Einsatzberichte aktivieren und deren Inhalt festlegen (siehe [Einsatzberichte](#einsatzberichte) unten) |
| **Fahrzeugzuordnung** | Automatische Fahrzeugzuordnung bei eingehenden Alarmen (z. B. bei Status 3) |
| **Einsatzhistorie anhand Alarmgruppen filtern** | Schränkt die sichtbare Einsatzhistorie auf Einsätze ein, bei denen der jeweilige Benutzer einer alarmierten oder informierten Gruppe angehört. Standardmäßig deaktiviert — alle Mitglieder sehen alle Einsätze. Standortverantwortliche und Benutzer mit der Berechtigung „Einsätze verwalten" sind von dieser Filterung ausgenommen und sehen stets alle Einsätze. |
| **Fahrzeugzuweisungsmodus** | Legt fest, wie Fahrzeuge einem laufenden Einsatz zugeordnet werden: **Automatisch** — Connect weist Fahrzeuge anhand eingehender Funkstatusmeldungen (Status 3/4) selbstständig dem aktuellen Einsatz zu. **Manuell** — Fahrzeuge müssen explizit dem Einsatz hinzugefügt werden; eingehende Statusmeldungen werden nur für bereits manuell zugewiesene Fahrzeuge erfasst. |
| **Kräfteerfassung einschließlich PA** | Erweitert die Kräfteerfassung um ein separates Feld für Atemschutzgeräteträger (AGT/PA). Ist diese Option aktiviert, kann pro Fahrzeugeinsatz zusätzlich zur Gesamtstärke die Anzahl der eingesetzten PA-Träger erfasst werden. Bei der personenbezogenen Kräfteerfassung wird pro Person hinterlegt, ob sie PA trägt. Die PA-Anzahl erscheint im Einsatzbericht und im Einsatzprotokoll. |
| **PA automatisch zuweisen anhand Funktion** | Legt fest, welche Funktionen (z. B. AGT) als PA-Träger gelten. Benutzer, denen eine dieser Funktionen zugewiesen ist, werden in der EinsatzApp und der FahrzeugApp bei der Kräfteerfassung automatisch als PA-Träger vorausgewählt. Die Funktionen werden aus den unter **Funktionen** angelegten Einträgen ausgewählt. Voraussetzung: **Kräfteerfassung einschließlich PA** muss aktiviert sein. |

### Einsatzberichte

**Organisationseinstellungen → Einsätze → Einsatzberichte**

Legt fest, ob und mit welchem Inhalt der PDF-Einsatzbericht (siehe [Einsätze → Einsatzbericht herunterladen](./07_einsaetze#einsatzbericht-herunterladen)) erzeugt werden kann.

| Feld | Beschreibung |
|---|---|
| **Aktiviert** | Schaltet die Einsatzbericht-Funktion für die Organisation frei |
| **Einsatzdaten drucken** | Nimmt eine Seite mit den Basisdaten (Stichwort, Adresse, Zeiten, Melder …) in den Bericht auf |
| **Ergänzende Informationen drucken** | Nimmt die erweiterten Berichtsfelder (Lage, Tätigkeit, Schadensinformationen, Materialien, Nachbereitung) auf |
| **Fahrzeugbesatzung drucken** | Listet die zugeordneten Fahrzeuge inkl. Besatzung im Bericht auf |
| **Lagemeldungen drucken** | Nimmt alle Lagemeldungen des Einsatzes auf |
| **Einsatzprotokoll drucken** | Nimmt das Einsatzprotokoll auf; zusätzlich müssen die zu druckenden **Protokoll-Kategorien** ausgewählt werden |

> **Achtung:** Der Bericht wird ggf. per E-Mail versendet, was einen unsicheren Übertragungsweg darstellt. Vor der Aktivierung des Drucks von Lagemeldungen bzw. des Einsatzprotokolls sollte geprüft werden, ob dabei schützenswerte Informationen enthalten sein können.

### Einsatz Update Push Nachrichten

Konfiguriert, bei welchen Änderungen an einem laufenden Einsatz eine Push-Benachrichtigung an alle alarmierten Benutzer gesendet wird. Standardmäßig werden Benachrichtigungen für alle Änderungstypen verschickt.

| Änderungstyp | Beschreibung |
|---|---|
| **Stichwort** | Das Einsatzstichwort wurde geändert |
| **Bemerkungen** | Der Freitext-Bemerkungsbereich wurde aktualisiert |
| **Adresse** | Die Einsatzadresse wurde angepasst |
| **Position** | Die GPS-Koordinaten der Einsatzstelle haben sich geändert |
| **RIC** | Der Alarmierungscode (Radio Identification Code) wurde geändert |
| **Einsatzeigenschaft** | Ein benutzerdefiniertes Einsatzfeld (Custom Property) wurde geändert |
| **Melder** | Angaben zum Meldenden (Name, Telefon) wurden aktualisiert |

> **Hinweis:** Deaktivierte Typen lösen keine Push-Benachrichtigung aus — die Änderung wird jedoch weiterhin im Einsatz gespeichert und im Einsatzprotokoll vermerkt.

### Einsatzdaten teilen – Vorlage für die automatische Freigabe

![Screenshot: Organisationseinstellungen – Einsatzdaten teilen](/images/connect/12_org_einsatzdaten_teilen.png)

> **Wichtig:** Dieser Bereich ist nur sichtbar, wenn die Funktion **„Einsatzdaten teilen"** zuvor durch den **Feuersoftware Support** für die Organisation freigeschaltet wurde. Ohne diese Freischaltung fehlt der Abschnitt vollständig – wende dich für eine Aktivierung an [info@feuersoftware.com](mailto:info@feuersoftware.com).

Mit **Einsatzdaten teilen** können Einsatzinformationen (Fahrzeuge, Besatzung, Lagemeldungen, Einsatzprotokoll) live mit anderen Standorten oder Organisationen ausgetauscht werden, sofern zu einem Einsatz die **gleiche Einsatznummer** vorliegt – z. B. wenn eine Leitstelle mehrere Feuerwehren mit derselben Einsatznummer alarmiert. Die vollständige Funktionsweise ist unter [Einsätze → Einsatzdaten teilen](/connect/07_einsaetze#einsatzdaten-teilen) beschrieben.

Hier wird eine **Vorlage** hinterlegt, die automatisch auf jeden neu angelegten Einsatz angewendet wird, sodass die Freigabe nicht für jeden Einsatz einzeln konfiguriert werden muss.

| Feld | Beschreibung |
|---|---|
| **Aktiviert** | Schaltet die automatische Freigabe anhand dieser Vorlage ein |
| **Ebene** | **Organisation** – Daten werden mit den ausgewählten Zielen dieser Organisation geteilt. **Leitstelle** – Daten werden zusätzlich mit allen Organisationen derselben Leitstelle geteilt (nur wählbar, wenn eine Leitstellenanbindung besteht) |
| **Freigegebene Daten** | Welche Datentypen automatisch geteilt werden: Zugewiesene Fahrzeuge, Besatzung (nur zusammen mit Fahrzeugen), Lagemeldungen, Einsatzprotokoll, Einsatzanhänge, Kartenformen |
| **Freigabedauer** | Zeitspanne ab Einsatzbeginn, nach der die Freigabe automatisch endet (1 / 2 / 6 / 12 / 24 Stunden) |
| **Zielorganisation** | **Genau eine** Partnerorganisation (Einfachauswahl). Gemeint sind damit **alle Standorte** dieser Organisation, auch solche, die später hinzukommen |
| **Zielstandorte** | Ergänzend: beliebig viele einzelne Standorte (Mehrfachauswahl), auch aus anderen Organisationen derselben Leitstelle oder aus der eigenen Organisation |

> Eine automatische Verbindung zwischen zwei Einsätzen kommt nur zustande, wenn **beide Seiten** eine aktive Vorlage hinterlegt haben, die jeweils auf die andere Organisation bzw. den anderen Standort zeigt. Ein Standort-Template hat Vorrang vor dem Organisations-Template. Fehlt bei einer Seite die passende Vorlage, kann die Freigabe für den betroffenen Einsatz weiterhin manuell in der Einsatz-Detailansicht eingerichtet werden.

#### Zielorganisation und Zielstandorte kombinieren

Die beiden Felder **ergänzen sich**: Ein Einsatz wird automatisch verbunden, wenn er **zur Zielorganisation gehört ODER an einem der Zielstandorte** angelegt wurde.

- **Mehrere Organisationen:** Als Zielorganisation kann nur eine Organisation gewählt werden. Weitere Organisationen werden erreicht, indem ihre Standorte unter **Zielstandorte** ausgewählt werden.
- **Eigene Standorte:** Ist bei der Ebene **Leitstelle** eine fremde Organisation als Zielorganisation gewählt, sind die eigenen Standorte **nicht** automatisch enthalten. Sollen auch die eigenen Standorte untereinander Daten austauschen, müssen sie zusätzlich unter Zielstandorte ausgewählt werden.
- **Auswahlliste:** Bei der Ebene **Leitstelle** erscheinen nur Organisationen, die an derselben Leitstelle angebunden sind und für die „Einsatzdaten teilen" freigeschaltet ist.
- **Standort-Vorlage ersetzt Organisations-Vorlage:** Hat ein Standort eine eigene Vorlage, gilt für diesen Standort **ausschließlich** dessen Vorlage. Die Ziele der Organisations-Vorlage werden nicht zusätzlich übernommen.
- **Gleiche Datentypen:** Ein Datentyp wird nur ausgetauscht, wenn ihn beide Seiten unter „Freigegebene Daten" ausgewählt haben. Partnerorganisationen sollten ihre Vorlagen daher abstimmen.

**Beispiel:** Eine Feuerwehr möchte Einsatzdaten mit allen Standorten der Gemeinde A und mit der Gemeinde B teilen, die an dieselbe Leitstelle angebunden ist.

| Feld | Einstellung |
|---|---|
| **Ebene** | Leitstelle |
| **Zielorganisation** | Gemeinde A – damit sind alle Standorte von Gemeinde A abgedeckt |
| **Zielstandorte** | Alle Standorte von Gemeinde B, sowie bei Bedarf die eigenen Standorte |

Gemeinde A und Gemeinde B hinterlegen ihrerseits eine aktive Vorlage, in der die Feuerwehr als Ziel eingetragen ist, und wählen dieselben Datentypen aus.

---

## EinsatzManager-Einstellungen

![Screenshot: Organisationseinstellungen – EinsatzManager](/images/connect/12_org_einsatzmanager.png)

**Organisationseinstellungen → EinsatzManager**

| Einstellung | Beschreibung |
|---|---|
| **SDS-Nachrichten** | Aktiviert den Empfang von SDS-Nachrichten im EinsatzManager |
| **Eingeschränkter Zugriff auf beendete Einsätze** | Benutzer ohne Vollzugriff können beendete Einsätze nur eingeschränkt einsehen |
| **Gruppen mit Vollzugriff auf beendete Einsätze** | Benutzergruppen, die auch auf beendete Einsätze vollen Zugriff haben |

### Externe Fahrzeuge

Fahrzeuge externer Organisationen können hier gepflegt werden. Über **„Externes Fahrzeug hinzufügen"** können einzelne Fahrzeuge manuell eingetragen werden. Alternativ können Fahrzeuglisten per **Import** hochgeladen oder per **Herunterladen** exportiert werden.

---

## Automatisches Datenlöschen

![Screenshot: Automatisches Datenlöschen](/images/connect/12_org_datenschutz.png)

**Seitenleiste → Automatisches Datenlöschen**

Aus Datenschutzgründen empfehlen wir, die automatische Datenlöschung in Connect einzurichten. Als Organisationsadministrator kann festgelegt werden, wann und welche Daten automatisch gelöscht werden sollen.

Die Datenlöschung läuft automatisiert jede Nacht auf den Servern von Feuersoftware und kann manuell nicht gestartet werden. Gelöschte Daten sind anschließend nicht mehr im Connect Portal, in der EinsatzApp oder am EinsatzMonitor verfügbar.

### Konfigurierbare Zeiträume

Für jeden Datentyp kann ein Löschintervall gewählt werden:

- Nie
- Nach einem Tag
- Nach einer Woche
- Nach einem Monat
- Nach sechs Monaten
- Nach einem Jahr
- Nach zwei Jahren

### Zu löschende Datentypen

| Datentyp | Beschreibung |
|---|---|
| **Einsatz löschen** | Löscht den kompletten Einsatz mit allen zugehörigen Details. |
| **Einsatzinformationen löschen** | Löscht im Einsatz alle Felder außer Stichwort, PLZ, Ort, Ortsteil, Einsatznummer und RIC. Datenschutzkritische Felder werden entfernt, die für die Einsatzstatistik relevanten Basisdaten bleiben erhalten. Empfehlung: eine Woche. |
| **Probealarme** | Löscht alle Einsätze, die der Kategorie Probealarm zugewiesen sind, um die Einsatzstatistik nicht zu verfälschen. |
| **Abgelaufene Termine** | Löscht alle vergangenen Termine in Kalendern. |
| **Abgelaufene News** | Löscht alle abgelaufenen Newseinträge. |
| **Nicht genutzte Geräte** | Löscht Mobiltelefone (EinsatzApp), die von Benutzern einmal angemeldet wurden, aber mittlerweile keinen gültigen Token mehr haben (z. B. nach Gerätewechsel). |
| **Abgelaufene Fahrzeugverfügbarkeiten** | Löscht Fahrzeugverfügbarkeiten, nachdem der eingetragene Zeitraum abgelaufen ist. |

> **Wichtig:** Die Daten werden automatisch und unwiederbringlich gelöscht. Die Einstellungen sorgfältig prüfen, bevor sie aktiviert werden.

---

## Organisation löschen

**Organisationseinstellungen → Organisation löschen**

Löscht die gesamte Organisation und alle zugehörigen Daten dauerhaft. Dieser Vorgang ist **nicht umkehrbar** und erfordert eine ausdrückliche Bestätigung.
