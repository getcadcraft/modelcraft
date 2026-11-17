---
title: Ein Grundstück aus CivilCraft übernehmen
summary: Öffnen Sie die Adresse-zu-Grundstück-Datei, die CivilCraft erstellt, und fügen Sie die Gebäude und das Flurstück darum als Baukörper und Grundstückslinie hinzu, nur die, die Sie markieren.
keywords: Grundstück, civilcraft, Adresse, Flurstück, Nachbargebäude, Baukörper, Kontext, ccsite, offene Daten, openstreetmap
from: f28e4a3b
---

CivilCraft kann eine Adresse nachschlagen und speichern, was die offenen Datenquellen darum herum kennen: Nachbargebäude, das Flurstück sowie Umrisse für Hochwasser, Bauleitplanung und Boden. ModelCraft übernimmt diese Datei als Vorschläge. Nichts wird hinzugefügt, bis Sie es bestätigen.

## Die Datei einbinden

1. Senden Sie in CivilCraft das Grundstück an ModelCraft oder speichern Sie die Datei (sie endet auf `.ccsite.json`).
2. Öffnen oder ziehen Sie in ModelCraft die Datei hinein. Eine Liste öffnet sich mit einem Kontrollkästchen für jedes Gebäude und für das Flurstück.
3. Geben Sie eine Höhe für die Gebäude ein, für die die Quelle keine angab. Eine Zeile daneben zeigt, woher die Höhe stammt: die Anzahl der Geschosse zu je 3 m oder die Höhe, die Sie eingegeben haben.
4. Drücken Sie {{ui:Markierte hinzufügen}}.

Die markierten Gebäude werden zu extrudierten Baukörpern in einer Komponente, und das Flurstück wird zu einer Linie um das Grundstück. Alles zusammen ist ein Rückgängig-Schritt. Der Adresspunkt liegt im Ursprung, in Metern nach Osten und Norden davon.

Umrisse für Hochwasser, Bauleitplanung und Boden werden nur zur Information aufgeführt; sie werden nicht gezeichnet.

Die Daten stammen aus offenen Quellen und tragen ihre Quellenangabe unten in der Liste. Nicht angegebene Höhen sind Annahmen; prüfen Sie sie, bevor Sie sich darauf verlassen.
