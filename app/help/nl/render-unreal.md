---
title: Een scène naar een game-engine verzenden
summary: Studio kan de scène naar een Unreal Engine-project schrijven en die bij elke verzending bijwerken; uw eigen bewerkingen staan in een laag die CadCraft nooit schrijft. De plug-in die die opent, is nog niet uitgebracht.
keywords: unreal, unreal engine, game-engine, koppeling, verzenden, usd-stage, project, live, cinecamera, filmrenderwachtrij
from: 9a765cc2
---

In CadCraft Studio kan de lijst **Engine** een **koppeling** naar een Unreal Engine-project bevatten. Eén richting alleen: van CadCraft naar Unreal.

## De scène verzenden

1. Kies het Unreal-item in de Engine-lijst. De eerste keer vraagt Studio u de map van uw project aan te wijzen (die met het `.uproject`-bestand); Studio onthoudt die.
2. Klik op {{ui:Verzenden}}. Studio schrijft `CadCraft/<file name>/` in het project: de scène als USD-bestand, het instellingenbestand, lichtprofielen en twee kleine laagbestanden.
3. Wijzig het model, sla op en verzend opnieuw. Alleen de scène en het instellingenbestand worden vervangen.

## Uw eigen bewerkingen blijven behouden

De stage die Unreal opent, is één keer gemaakt als kleine rootlaag, met twee lagen eronder: **uw laag** bovenaan (`<name>.user.usda`, eerst leeg, en door CadCraft nooit herschreven) en de scène van CadCraft eronder. Bewerkingen die u in uw eigen laag opslaat, blijven bewaard wanneer de scène opnieuw wordt verzonden. Lampen en andere actors die u in het Unreal-level plaatst, staan buiten de stage en worden ook niet aangeraakt.

## Zonder Studio

In de browser, of op een computer waar Studio Unreal niet vindt, kiest u **Unreal-projectmap (.zip)** in de Engine-lijst en klikt u op {{ui:Renderen}}. Dit slaat dezelfde map op als zip: pak hem uit in de map `CadCraft` van uw project. Laat **Stagebestanden meenemen** de eerste keer aan staan; zet het uit bij latere opslagen, zodat de zip alleen de scène en het instellingenbestand bevat en uw eigen laag nooit wordt vervangen.

:::note
De Unreal-plug-in die de stage opent, de zon, lampen, camera's en belichting toepast, elke verzending volgt en een camera rendert, is **nog niet uitgebracht** en is in Unreal nog niet uitgevoerd. Tot die tijd zet Verzenden de bestanden in het project, en de eigen USD-hulpmiddelen van Unreal kunnen ze openen. Windows is het eerste besturingssysteem; macOS volgt.
:::
