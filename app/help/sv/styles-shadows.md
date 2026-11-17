---
title: Stilar och solskuggor
summary: Visa modellen skuggad, som dolda linjer, som trådmodell eller genomskinlig, och studera skuggorna den kastar vid vilket datum, klockslag och plats som helst.
keywords: presentationsvy, ren vy, dölj hjälplinjer, dölj axlar, stil, skuggad, dolda linjer, trådmodell, röntgen, kanter, skuggor, sol, solstudie, solar, datum, tid, latitud, longitud, tidszon, norr
from: 09c95329
---

Panelen {{ui:Stil}} till höger ändrar hur modellen ritas. Inget i den ändrar modellen självt, och det ingår inte i ångra-historiken. Varje [scen](topic:scenes) minns sin egen stil, och filen minns stilen du hade när du sparade.

## Ytor

Välj en i listan {{ui:Ytor}}:

| Stil | Ser ut som |
|---|---|
| {{ui:Skuggad}} | Solida ytor, mjukt belysta. Ytor som ses bakifrån är blågrå. Importerade färger visas. |
| {{ui:Dolda linjer}} | Ytor i bakgrundsfärgen med kanter i svart: en ren linjeteckning där dolda linjer tagits bort. Vit på {{ui:Papper}}, mörk på {{ui:Modell}}. |
| {{ui:Trådmodell}} | Bara kanter. Ytor ritas inte, men de räknas ändå vid klick och fångst: du kan inte klicka igenom dem. |
| {{ui:Röntgen}} | Genomskinliga ytor, för att se vad som finns bakom eller inuti. Liksom i trådmodell stannar klick och fångst fortfarande vid närmaste yta. |

{{ui:Visa kanter}} slår av eller på kanterna i alla stilar utom {{ui:Trådmodell}}. Med den avslagen visar {{ui:Dolda linjer}} nästan ingenting, eftersom dess ytor stämmer med bakgrunden. Mjuka kanter, till exempel sidorna på en dragen cirkel, ritas aldrig.

## Slå på solskuggor

1. Markera {{ui:Solskuggor}}. Solinställningarna under den blir aktiva, och modellen kastar skuggor på sig själv och på marken.
2. Ange platsen:
   - {{ui:Latitud}}: norr är positivt, söder negativt (New York är ungefär 40.7, Sydney ungefär -33.9).
   - {{ui:Longitud}}: öster är positivt, väster negativt (New York är ungefär -74.0).
   - {{ui:UTC-förskjutning}}: platsens förskjutning från UTC i timmar, till exempel `-5` för New York på vintern. ModelCraft tillämpar inte sommartid; använd `-4` för New York på sommaren.
3. Ange {{ui:Datum}} (månad och dag) och dra i reglaget {{ui:Tid}}. Tiden rör sig i steg om 15 minuter och visas bredvid reglaget, till exempel "3:00 pm".

En rad under inställningarna säger var solen är, till exempel "Sol 52° upp, 250° från norr. Norr är den gröna axeln." På natten står det "Solen är under horisonten vid den här tiden."

En ny modell startar med solen den 21 juni klockan 3:00 pm, vid latitud 40, longitud -105 och UTC-förskjutning -7.

## Rikta modellen mot norr

ModelCraft:s norr är alltid den **gröna axeln**. För att studera en verklig plats vrider du modellen så att dess norrsida pekar längs grönt: markera allt ({{key:Mod+A}}), tryck på {{key:Q}}, klicka på ett centrum på marken och vrid den med platsens vinkel från norr (se [Rotera och skala](topic:rotate-scale)).

## En solstudie

1. Ställ in platsen och datumet.
2. Lägg till en scen ({{ui:Lägg till scen}} i {{ui:Scener}}).
3. Flytta tidsreglaget och lägg sedan till en scen till. Upprepa för varje timme du vill ha.
4. Klicka på {{ui:Spela upp}} för att gå igenom dem. Se [Spara vyer som scener](topic:scenes).

## Att tänka på

- Skuggor kan se taggiga ut på en mycket stor modell, eftersom en skuggkarta täcker hela modellen.
- Skuggor ritas inte i {{ui:Trådmodell}}.
- Solpositionen följer NOAA:s solberäkning och är exakt till en bråkdel av en grad, vilket räcker för volymstudier. Atmosfärisk refraktion ignoreras, så mycket låga solvinklar nära soluppgång och solnedgång kan vara något felaktiga.

## Presentationsvy

{{ui:Vyer}} › {{ui:Presentationsvy}} (eller {{key:Shift+P}}) visar bara modellen: axlarna, hjälplinjer och hjälppunkter, sektionsplanens konturer (snittet finns kvar), lampornas markeringar, lådan runt en öppen grupp, fångstmarkeringarna och tipsen samt markeringen av val. Använd den för att titta på modellen tydligt eller före en skärmdump. Verktygen fungerar fortfarande och fångar fortfarande; du ser bara inte markeringarna. Tryck på {{key:Shift+P}} igen för att visa dem. Mått finns kvar, eftersom de är en del av ritningen. När du redigerar inuti en grupp tonas inte resten av modellen längre ned: den visas som den är, även med texturer.
