---
title: NavLog Waldwegekarten
description: NavLog-Karten für detaillierte Wegenetze und Waldgebiete in Feuersoftware Connect einbinden
---

# NavLog Waldwegekarten

NavLog ist ein externer Karten- und Navigationsdienst, der ursprünglich für die Waldwirtschaft entwickelt wurde. Der Fokus liegt auf detaillierten Karten, Wegenetzen und Objektinformationen in schwer zugänglichen Gebieten.

Aufgrund dieser Eigenschaften eignet sich NavLog auch sehr gut für den Einsatz im Feuerwehr- und Einsatzumfeld. Durch die Integration in Feuersoftware können die NavLog-Karten direkt innerhalb der Anwendung genutzt werden – aktuell im **EinsatzManager** sowie in der **EinsatzTablet-Ansicht**.

---

## Zugangsdaten

Für die Nutzung von NavLog ist ein gültiger Zugang erforderlich, der über NavLog bereitgestellt wird. Die Organisation erhält in der Regel eine **Kunden-ID**, die für die Anbindung externer Systeme vorgesehen ist.

Die Kunden-ID ist Bestandteil der NavLog-URL und befindet sich im Parameter `kid`:

```
https://gdw.navlog.de/data/navlog/wms?kid=<KUNDENID>&
```

**Nur der Wert des `kid`-Parameters** (ohne `kid=` und ohne weitere URL-Bestandteile) muss im Connect Portal eingetragen werden.

---

## Einrichtung im Connect Portal

Die Anbindung erfolgt zentral auf **Organisationsebene**:

1. Im Connect Portal mit einem Konto mit **Organisationsadministrator-Rechten** anmelden
2. **Schnittstellen** öffnen
3. **NavLog** auswählen
4. **Kunden-ID** eintragen
5. Speichern

Nach dem Speichern ist NavLog aktiv und steht allen Modulen der Organisation zur Verfügung.

---

## Nutzung

### EinsatzManager

Im EinsatzManager kann die NavLog-Karte über das Symbol oben rechts aktiviert werden. Die Legende ist unten links zu finden.

### EinsatzTablet

Im EinsatzTablet kann NavLog über den Button **„MAPSET"** aktiviert werden.
