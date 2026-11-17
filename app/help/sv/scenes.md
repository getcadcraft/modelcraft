---
title: Spara vyer som scener
summary: Spara en kamera och stil som en scen, uppdatera och byt namn på den, och stega eller spela upp scener för att presentera en design.
keywords: scen, vy, sparad vy, kamera, presentation, animering, spela upp, bildspel, page up, page down, flikar, genomgång
from: 38680d6e
---

En **scen** minns en kameraposition, en stil och vad som är dolt: varifrån du tittar, perspektiv eller parallell, ytstilen, kanter, solinställningarna, dolda grupper, avstängda taggar och sektionssnittet. Scener sparas i `.modelcraft`-filen.

## Lägg till en scen

1. Ställ in vyn: kretsa, zooma, välj en stil, ställ in solen.
2. Klicka på {{ui:Lägg till scen}} i panelen {{ui:Scener}} till höger.

   Scenen visas i listan, namngiven "Scen 1", "Scen 2" och så vidare, och som en flik överst i 3D-vyn. Statusfältet säger "Scen 1 sparades: den här kameran, stilen och det som är dolt."

## Gå till en scen

- Klicka på dess flik över 3D-vyn, eller på dess namn i listan {{ui:Scener}}.
- Eller tryck på {{key:PageDown}} för nästa scen och {{key:PageUp}} för föregående. {{ui:Nästa}} och {{ui:Föregående}} under listan gör detsamma.

Kameran glider till scenen på lite över en halv sekund. Om datorn är inställd på att minska rörelse, hoppar den dit i stället.

## Ändra, byt namn på eller ta bort en scen

Varje scen i listan har tre små knappar efter sitt namn:

- **Uppdatera** (de cirkulära pilarna): sparar den aktuella kameran, stilen och det som är dolt i scenen. "Scen 2 uppdaterades."
- **Byt namn** (pennan): öppnar dialogen "Byt namn på scen". Skriv det nya namnet och klicka på {{ui:Spara}}.
- **Ta bort** (papperskorgen): tar bort scenen. "Scen 2 togs bort. Ctrl+Z återställer den."

Att lägga till, uppdatera, byta namn på och ta bort scener är steg i Ångra, precis som ändringar i modellen.

## Lås en scens kamera

När du renderar samma vy om och om igen medan designen ändras, lås scenens kamera så att vyn aldrig flyttas av misstag.

1. Klicka i listan {{ui:Scener}} på **lås**-knappen (det öppna hänglåset) efter scenens namn. Den stängs, och scenens flik över 3D-vyn visar ett litet hänglås. Statusfältet säger "Scen 2: kameran låst."
2. Gå till scenen när du vill rendera: kameran går tillbaka till exakt den sparade vyn, så att bilder gjorda från den går i linje med de tidigare.

Medan kameran är låst sparar **Uppdatera** fortfarande stilen och det som är dolt i scenen, men kameran står kvar där den var, även om du har kretsat bort. Klicka på hänglåset igen för att låsa upp; då sparar Uppdatera den aktuella vyn på nytt. Att låsa och låsa upp är steg i Ångra, och låset sparas i `.modelcraft`-filen.

## Presentera

1. Lägg till två eller fler scener.
2. Klicka på {{ui:Spela upp}} under listan. ModelCraft går till nästa scen var några sekund och börjar om från den första efter den sista.
3. Klicka på {{ui:Stopp}} (samma knapp) eller tryck på {{key:Esc}} för att stoppa.

För en solstudie, lägg till en scen per timme där bara {{ui:Tid}} ändras, och spela sedan upp dem. Se [Stilar och solskuggor](topic:styles-shadows#a-sun-study).

För att presentera utan listorna, tryck två gånger på {{key:Ctrl+Shift+F}}: helskärm, sedan helskärm med listorna dolda. Scenflikarna finns kvar över vyn.

## Vad en scen visar

En scen minns vad som var dolt när du sparade den: grupper och komponenter som du [har dolt](topic:hide-isolate), [taggar](topic:tags) som du stängt av och vilka [sektionsplan](topic:sections) som skär. Att gå till scenen döljer och visar dem igen. Så en scen kan visa hela huset, nästa huset med takets tagg avstängd, och nästa ett snitt genom det.

Dolda lösa ytor och kanter ingår inte i scener. Att gå till en scen skapar inget steg i Ångra. Scener som sparats av en tidigare version av ModelCraft lämnar det dolda som det är; klicka på Uppdatera för att spara det i dem.

## Exportera en animering

{{ui:Exportera animering}}, under listan, spelar scenerna från första till sista, flyttar kameran mjukt mellan dem och sparar filmen som en **WebM**-video (två sekunders förflyttning och en kort paus per scen). Den spelar in vyn som du ser den, i sin storlek på skärmen, i [presentationsvy](topic:styles-shadows#presentation-view) (inga axlar, guider eller markering). Tryck på {{key:Esc}} eller klicka på knappen igen för att stoppa utan att spara. WebM spelas i webbläsare och VLC, och videoredigerare konverterar den.

För en renderad genomgång (himmel, sol, skuggor, material) i en storlek du väljer, använd {{ui:Rendera video…}} i stället: utan animeringsnycklar tar den scenerna, i ordning, som kamerans väg. Se [Animera kameran och objekt](topic:animation).

## Att tänka på

- Att ändra stilen eller flytta kameran efter att du gått till en scen ändrar inte scenen förrän du klickar på Uppdatera.
- Scener exporteras inte till Collada, OBJ, glTF, STL eller IFC.
