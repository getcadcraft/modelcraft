---
title: Taggar: visa och dölj uppsättningar av objekt
summary: Ge grupper och komponenter en tagg, till exempel Möbler eller Väggar, och dölj eller visa allt med den taggen på en gång.
keywords: taggar, tagg, lager, visa, dölj, synlighet, ordna, möbler, väggar, utan tagg, byt namn på tagg, ta bort tagg
from: c1a95a05
---

En tagg är ett namn du ger grupper och komponenter, till exempel **Möbler**, **Väggar** eller **Tomt**, så att du kan dölja eller visa allt med den taggen på en gång. Taggar är vad CAD-program kallar lager. För att dölja ett objekt i taget, se [Dölj, isolera och visa igen](topic:hide-isolate).

## Skapa en tagg

1. Klicka på {{ui:Lägg till tagg}} i {{ui:Taggar}} till höger.
2. Skriv namnet och tryck på {{key:Enter}}.

Om du vill byta namn på en tagg klickar du på dess namn i {{ui:Taggar}}, skriver det nya namnet och trycker på {{key:Enter}}. Två taggar kan inte ha samma namn.

## Tagga grupper och komponenter

1. Markera en eller flera grupper eller komponenter.
2. Välj taggen i {{ui:Tagg}} i {{ui:Entitetsinfo}}. {{ui:Ny tagg…}} skapar en ny och taggar markeringen med den.

{{ui:Utan tagg}} tar bort taggen. Siffran bredvid varje tagg i {{ui:Taggar}} visar hur många grupper och komponenter som har den.

Tagga grupper och komponenter, inte lösa ytor och kanter: rita de objekt du vill tagga som grupper först (markera dem och tryck på {{key:Shift+G}}).

## Dölj och visa

Klicka på ögat bredvid en tagg. Allt med den taggen försvinner från sikte, var det än finns i modellen (även inuti andra grupper), och klick och fångst går förbi det. Klicka på ögat igen för att visa det. Objekt {{ui:Utan tagg}} visas alltid.

Om du redigerar inuti en grupp vars tagg du döljer, stängs gruppen.

## Ta bort en tagg

Klicka på papperskorgen bredvid den. Det som hade taggen blir {{ui:Utan tagg}} och visas.

## Att tänka på

- Taggar, deras namn och vilka som är dolda sparas i ModelCraft-filen. Kopierar du en taggad grupp till en annan modell följer taggen med.
- Att dölja och visa en tagg, och alla andra ändringar av taggar, är ett steg i ångra.
- Exporter innehåller allt, även dolda taggar, precis som för dolda objekt.
- Lager i DWG- och DXF-situationsplaner importeras ännu inte som taggar: hela ritningen importeras som en grupp.
