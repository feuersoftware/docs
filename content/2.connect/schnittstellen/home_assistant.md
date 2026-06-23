---
title: Home Assistant
description: Home Assistant per Webhook mit Connect verbinden und Automationen auf Basis von Einsatzdaten einrichten
---

# Automationen mit Home Assistant

## Allgemeines

Home Assistant ist eine Open-Source-Software zur Automatisierung von Smart-Home-Geräten und zur zentralen Steuerung verschiedener Systeme wie Beleuchtung, Heizung, Sicherheit oder Mediengeräte. Es läuft lokal auf einem Server, was eine hohe Datensicherheit und Kontrolle ermöglicht. Die Voraussetzungen für Home Assistant sind ein unterstütztes Gerät, wie ein Raspberry Pi, ein PC oder ein NAS, sowie grundlegende Netzwerkkenntnisse. Zur Installation wird empfohlen, Home Assistant OS zu verwenden. Dazu lädt man das entsprechende Image von der offiziellen Website herunter, schreibt es mit einem Tool wie Balena Etcher auf eine SD-Karte oder SSD und startet das Gerät. Danach erfolgt die Einrichtung über eine Weboberfläche im Browser. Alternativ kann Home Assistant auch in einer virtuellen Maschine oder per Docker installiert werden.

Wie die Installation genau funktioniert, wird in diversen Anleitungen erklärt. Einfach eine beliebige Suchmaschine bemühen.

## Home Assistant Fernzugriff

Um Home Assistant aus dem Internet erreichbar zu machen, kann ein **Cloudflare Tunnel** mit einer eigenen Domain genutzt werden, was eine sichere und einfache Lösung darstellt.

Hierzu ist es zwingend erforderlich, eine eigene Domain zu besitzen und Zugriff auf die DNS Einstellungen zu haben um die Nameserver zu ändern.

Zuerst registriert man die eigene Domain bei Cloudflare und richtet diese dort ein. Danach wird der Cloudflare Tunnel erstellt, indem man das Cloudflare-Tunnel-Tool (z. B. `cloudflared`) auf dem Gerät mit Home Assistant installiert.

Wie dies genau geht, ist in folgendem Video erklärt:

https://www.youtube.com/watch?v=saqvt9aEQPs

## Automationen

Nachdem Home Assistant nun installiert und aus dem Internet erreichbar ist, können wir mit ersten Automationen starten.

Verbinden Sie als ersten beliebige Geräte welche Sie steuern möchten. Dies kann z.B. Philips Hue Lampen, Schaltbare Steckdosen, Shellys oder ähnliches sein. Home Assistant bietet bereits von Haus aus eine sehr große Unterstützung von Smart Home Geräten.

Nun legen wir einen Webhook Trigger an, welcher über unsere Connect Plattform ausgelöst werden kann.

**Automation erstellen**

Klicken Sie in Home Assistant auf **Einstellungen** -> **Automationen & Szenen** und klicken Sie auf **Automation erstellen**. Nun kann eine neue Automation erstellt werden.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.11.37-1024x664.png)

### Auslöser

Fügen Sie einen Auslöser hinzu indem Sie auf **"Auslöser hinzufügen"** klicken. Suchen Sie nach Webhook und wählen Sie Webhook aus. Home Assistant fügt nun einen neuen Auslöser vom Typ Webhook hinzu. Sie bekommen nun eine **Webhook-ID** angezeigt. Diese wird später noch benötigt.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.13.40-1024x310.png)

Klicken Sie nun auf das Zahnrad neben der ID und entfernen Sie den Haken bei "**Nur über das lokales Netzwerk zugänglich**" und aktivieren Sie den Haken bei "**GET**". Da unsere Webhooks als GET Request gesendet werden, ist dies erforderlich.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.15.32-1024x546.png)

### Wenn Bedingungen (optional)

Die Wenn Bedingungen sind optional und müssen für den ersten Schritt nicht eingerichtet werden. Hier wäre es z.B. möglich die Automation nur Nachts auszuführen oder nur auszuführen wenn die Anwesenheit einer Person erkannt wurde.

### Aktionen

Nun definieren wir, welche Aktionen ausgeführt werden sollen wenn der Webhook ausgeführt wird. Hierzu klicken wir auf **"Aktion hinzufügen"** und wählen z.B. ein Gerät aus, welche wir schalten wollen. Jedes Gerät hat Abhängig seiner Fähigkeiten verschiedene Optionen. Wir schalten hier Beispielsweise eine Philips Hue Lampe, welche auch die Regulierung der Helligkeit und Blinken zulässt.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.25.41-1024x564.png)

Da wir die Lampe nach einer kurzen Zeit auch wieder Ausschalten wollen, fügen wir eine weitere Aktion hinzu. Wählen Sie nun "**Bausteine**" und anschließend "**Eine Zeit warten (Verzögerung)**". Tragen Sie nun eine Zeit ein, wie lange die Lampe eingeschaltet bleiben soll.

Anschließend fügen wir eine weitere Aktion hinzu. Hier wählen wir das gleiche Gerät wie im vorherigen Schritt aus und wählen nun bei Aktion Ausschalten aus.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.32.32-1024x271.png)

Nun ist unsere erste Aktion angelegt und kann getestet werden. Hierzu rufen wir den Webhook über seine die URL auf. Die URL setzt sich wie folgt zusammen:

Ersetzen Sie den Domainnamen durch den Namen der Domain, über welche Ihre Home Assistant Instanz erreichbar ist. Ersetzen Sie außerdem "IHREWEBHOOKID" durch die Webhook ID, welche Sie beim erstellen des Webhooks von Home Assistant angezeigt bekommen haben.

```
https://IHREDOMAIN.de/api/webhook/IHREWEBHOOKID
```

Sie können die URL nun in einem beliebigen Browser in die Adresszeile eingeben und aufrufen. Ihre Aktion sollte nun ausgeführt werden.

Sollte dies erfolgreich sein, können Sie die URL Ihres Webhooks in Connect konfigurieren. Wie dies funktioniert lesen Sie hier: [Link](https://feuersoftware.com/doku/connect-heimautomatisierung-mit-webhooks/)

## Webhook um Daten ergänzen

Sollte dies bis hier erfolgreich gewesen sein, können wir die Webhooks auch um Einsatzdaten ergänzen um darauf abgestimmte Aktionen auszuführen.

Ein Anwendungsfall hierfür könnte z.B. sein, eine Aktion nur auszuführen wenn in den alarmierten Fahrzeugen das Fahrzeug 1-30-1 enthalten ist.

Hierfür müssen wir die URL anpassen und Variablen aus Feuersoftware Connect übergeben. Wir übergeben in diesem Beispiel die Variablen Stichwortübersetzung, Adresse, Sachverhalt und Fahrzeuge. Beachten Sie das nur Standort Webhooks die Adresse übergeben können. Benutzerwebhooks können auf diese Variable nicht zugreifen. Weitere Infos dazu finden Sie hier: [Link](https://feuersoftware.com/doku/connect-heimautomatisierung-mit-webhooks/)

Die URL muss nun wie folgt angepasst werden:

```
https://IHREDOMAIN.de/api/webhook/IHREWEBHOOKID?keyword={Stichwortübersetzung}&address={Adresse}&description={Sachverhalt}&vehicles={Fahrzeuge}
```

Home Assistant kann nun auf die einzelnen Parameter der URL zugreifen. Der Zugriff auf die übermittelten Daten erfolgt in Home Assistant nun über die Variablen:

{{ trigger.query['parameter\_name'] }}  
{{ trigger.query.address }}  
{{ trigger.query.keyword }}  
{{ trigger.query.description }}  
{{ trigger.query.vehicles }}

### Auslöser

Den Auslöser konfigurieren wir identisch wie oben beschrieben. Hier ist keine weitere Anpassung erforderlich.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.13.40-1024x310.png)

### Aktionen

Hier fügen wir eine neue Aktion hinzu.

Aktion hinzufügen - "**Bausteine**" -> "**Wenn-dann**" auswählen.

Nun klicken wir im Bereich "Wenn" auf "**Bedingung hinzufügen**". Dort wählen Sie "**Andere Bedingungen**" - "**Template**".

Im Feld Wert-Template fügen Sie nun folgende Zeile hinzu:

```
{{ "1-30-1" in trigger.query.get('vehicles', '') }}
```

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-17.53.21-1024x456.png)

Der `trigger.query` enthält die übergebenen Query-Parameter als Dictionary. Mit `.get('parameter_name', '')` wird der Parameter abgefragt. Wenn der Parameter fehlt, wird ein leerer String als Standardwert zurückgegeben.

Nun erfolgt die Aktion welche ausgeführt werden soll, wenn der String "1-30-1" in der Liste der Fahrzeuge enthalten ist. Hierzu fügen wir im Bereich "Dann" eine Aktion hinzu. Hier kann z.B. eine Pushnachricht an ein Mobiltelefon gesendet werden. Als Inhalt der Nachricht soll stehen "Drehleiter rückt aus!".  
Hier ist aber auch jede andere Aktion möglich.

![](https://feuersoftware.com/wp-content/uploads/2025/01/Bildschirmfoto-2025-01-27-um-18.04.09-1024x401.png)

Sie können die Aktion jetzt beliebig oft kopieren und für jedes Fahrzeug eine andere Aktion ausführen lassen.
