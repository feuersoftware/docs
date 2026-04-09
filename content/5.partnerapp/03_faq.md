---
title: Häufige Fragen
description: Antworten auf häufige Fragen zur PartnerApp
---

# Häufige Fragen

## Wann genau wird der Partner benachrichtigt?

Die Benachrichtigung wird ausgelöst, sobald die Einsatzkraft in der **EinsatzApp auf einen Alarm reagiert** – also zusagt, absagt oder „später" auswählt. Der bloße Eingang eines Alarms löst noch keine Benachrichtigung aus.

---

## Welche Einsatzdetails sieht der Partner?

Keine. Die PartnerApp zeigt ausschließlich den **Status der Einsatzkraft** (z. B. „Einsatz bestätigt"). Einsatzadresse, Stichwort und andere operative Daten werden bewusst nicht übermittelt.

---

## Muss die PartnerApp geöffnet sein, damit Benachrichtigungen ankommen?

Nein. Die Benachrichtigungen werden über Firebase Cloud Messaging (FCM) zugestellt und kommen auch an, wenn die App im Hintergrund läuft oder das Gerät gesperrt ist.

---

## Kann ein Partner mehrere Einsatzkräfte verfolgen?

Ja. Die PartnerApp unterstützt mehrere verbundene Einsatzkräfte gleichzeitig. Jede Verbindung wird separat in der Liste angezeigt und muss einzeln per QR-Code eingerichtet werden.

---

## Muss der Partnermodus in Connect aktiviert sein?

Ja. Ein **Organisations-Administrator** muss den Partnermodus im Connect Portal freischalten:

**Connect Portal → Organisations-Ebene → Einstellungen → Partnermodus aktivieren**

Ohne diese Aktivierung kann kein QR-Code in der EinsatzApp generiert werden.

---

## Die Einsatzkraft ist in zwei Organisationen – wie wird das gehandhabt?

Für jede Organisation muss die Verbindung separat eingerichtet werden. In der EinsatzApp unter „Partner verbinden" kann vor dem QR-Code die gewünschte Organisation ausgewählt werden. Der Partner scannt dann für jede Organisation einen eigenen Code.

---

## Wie lange ist eine Verbindung gültig?

Jede Verbindung hat ein Ablaufdatum, das in der PartnerApp unter dem jeweiligen Partner angezeigt wird („Verbunden bis…"). Läuft die Verbindung ab, muss sie neu per QR-Code eingerichtet werden.

---

## Was passiert, wenn der QR-Code beim Scannen nicht funktioniert?

Der QR-Code ist nur wenige Minuten gültig. Falls er abgelaufen ist, einfach in der EinsatzApp einen neuen generieren. Außerdem Internetverbindung und Kameraberechtigung prüfen.
