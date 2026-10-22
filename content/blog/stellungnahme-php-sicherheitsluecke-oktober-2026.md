---
title: "PHP2Shell: Die Alarmierung über Feuer Software ist nicht betroffen"
author:
  name: FeuerSoftware Team
  description: Das FeuerSoftware Entwicklungsteam
date: 2026-10-22
description: "Das BSI warnt vor zwei kritischen Schwachstellen in PHP (CVE-2026-109618 und CVE-2026-109619). Connect, die EinsatzApp und unsere weiteren Systeme zur Alarmierung sind davon nicht betroffen."
minRead: 2
navigation: false
---

Das BSI [warnt aktuell vor zwei kritischen Schwachstellen in PHP](https://www.bsi.bund.de/SharedDocs/Cybersicherheitswarnungen/DE/2026/2026-297981-1032.html) („PHP2Shell“, CVE-2026-109618 und CVE-2026-109619). Connect, die EinsatzApp und unsere weiteren Systeme zur Alarmierung sind davon **nicht betroffen**.

::note
**Sie müssen nichts unternehmen.**
::

## Warum wir nicht betroffen sind

1. **Kein PHP im Einsatz.** Unsere Systeme sind in C#/.NET, TypeScript und Flutter entwickelt. Auf keinem System der Alarmierungskette läuft ein PHP-Interpreter – die Schwachstelle hat dort keinen Angriffspunkt.
2. **Gekapselte Dienste.** Unsere Backend-Dienste laufen als einzelne Container mit minimalen Rechten in europäischen Rechenzentren und werden ausschließlich über eine automatisierte Pipeline ausgeliefert.
3. **Laufende Überwachung.** Server werden durch eine EDR-Lösung überwacht, sicherheitsrelevante Ereignisse in einem zentralen SIEM ausgewertet und Updates zentral gesteuert eingespielt.

## Worum geht es bei PHP2Shell?

Beide Schwachstellen stecken im PHP-Interpreter selbst und sind mit einem CVSS-v4.0-Score von 9.2 als kritisch eingestuft. Sie können es Angreifern ermöglichen, ohne Anmeldung Schadcode auf einem Webserver auszuführen, auf dem eine verwundbare PHP-Version läuft.

- **CVE-2026-109618:** Wird PHP durch einen Speichermangel (Out-of-Memory) mitten in einer Operation unterbrochen, bleiben interne Request-Daten unvollständig initialisiert zurück und werden anschließend fälschlich als gültig weiterverarbeitet.
- **CVE-2026-109619:** PHP behält Verweise auf Request-Daten, obwohl der zugehörige Speicher bereits freigegeben wurde.

Betroffen sind alle PHP-Versionen vor 8.2.35, 8.3.36, 8.4.27 und 8.5.12. Wer selbst PHP-basierte Systeme betreibt – etwa eine eigene Website mit WordPress –, sollte umgehend auf eine der gepatchten Versionen aktualisieren.

## Weitere Informationen

- Cybersicherheitswarnung des BSI: [PHP – Kritische Schwachstellen bedrohen Webanwendungen weltweit](https://www.bsi.bund.de/SharedDocs/Cybersicherheitswarnungen/DE/2026/2026-297981-1032.html)
- Sicherheitshinweis des PHP-Projekts zu CVE-2026-109618: [GHSA-w8hw-w9fx-j79w](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w)
- Sicherheitshinweis des PHP-Projekts zu CVE-2026-109619: [GHSA-6wmf-4rv5-p3rp](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp)
- Technische Analyse von Datadog Security Labs: [PHP2Shell – Critical vulnerabilities in PHP](https://securitylabs.datadoghq.com/articles/php2shell-critical-vulnerabilities-in-php/)

Bei Fragen erreichen Sie uns wie gewohnt über den [Support](https://ticket.feuersoftware.com).
