---
title: "Stellungnahme: Kritische PHP-Sicherheitslücken (PHP2Shell)"
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-10-22
description: "Zu den am 21. Oktober 2026 veröffentlichten kritischen Sicherheitslücken in PHP (CVE-2026-109618 und CVE-2026-109619): Unsere Kernsysteme waren nicht betroffen."
minRead: 2
navigation: false
---

Am 21. Oktober 2026 hat das PHP-Projekt zwei kritische Sicherheitslücken im PHP-Interpreter veröffentlicht und geschlossen. Da uns hierzu bereits erste Anfragen erreicht haben, möchten wir kurz Stellung nehmen.

::note
**Kurz gesagt:** Unsere Kernsysteme – das Connect Portal, der EinsatzManager, die öffentliche API sowie EinsatzApp, EinsatzTablet und EinsatzMonitor – basieren nicht auf PHP und waren von diesen Lücken **nicht betroffen**. Für unsere Kundinnen und Kunden besteht kein Handlungsbedarf.
::

## Worum geht es?

Die beiden Schwachstellen werden unter dem Namen **PHP2Shell** zusammengefasst und tragen die Kennungen **CVE-2026-109618** und **CVE-2026-109619**. Beide sind mit einem CVSS-v4.0-Score von 9.2 als kritisch eingestuft. Sie ermöglichen es Angreifern unter Umständen, ohne Anmeldung Schadcode auf einem Webserver auszuführen, auf dem eine verwundbare PHP-Version läuft.

- **CVE-2026-109618:** Wird PHP durch einen Speichermangel (Out-of-Memory) mitten in einer Operation unterbrochen, bleiben interne Request-Daten unvollständig initialisiert zurück und werden anschließend fälschlich als gültig weiterverarbeitet.
- **CVE-2026-109619:** PHP behält Verweise auf Request-Daten, obwohl der zugehörige Speicher bereits freigegeben wurde.

Betroffen sind alle PHP-Versionen vor 8.2.35, 8.3.36, 8.4.27 und 8.5.12. Da Details zu den Lücken bereits vor Veröffentlichung der Updates bekannt wurden und erste Angriffe beobachtet worden sind, empfehlen wir allen, die selbst PHP-basierte Systeme betreiben (z. B. eine eigene Website mit WordPress), umgehend auf eine der gepatchten Versionen zu aktualisieren.

## Weitere Informationen

- Sicherheitshinweis des PHP-Projekts zu CVE-2026-109618: [GHSA-w8hw-w9fx-j79w](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w)
- Sicherheitshinweis des PHP-Projekts zu CVE-2026-109619: [GHSA-6wmf-4rv5-p3rp](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp)
- Technische Analyse von Datadog Security Labs: [PHP2Shell – Critical vulnerabilities in PHP](https://securitylabs.datadoghq.com/articles/php2shell-critical-vulnerabilities-in-php/)

Bei Fragen erreichen Sie unseren Support wie gewohnt über [ticket.feuersoftware.com](https://ticket.feuersoftware.com).
