---
title: Välj vilket program som ritar bilden
summary: Motorvalet i renderingsdialogen: våra egna två motorer, andra program i CadCraft Studio, och vad webben gör i stället.
keywords: rendering, motor, renderare, renderingsmotor, insticksprogram, plugin, studio, externt program, ritas av, kö, tilläggsmotor
from: be4b056a
---

{{ui:Rendera en bild…}} har ett val **Motor** ovanför Läge. Våra egna två motorer finns alltid där och fungerar överallt; tillägg kan lägga till fler, och i CadCraft Studio innehåller listan även de program som tar över scenen.

| Motor | Vad den gör | Var |
|---|---|---|
| Inbyggd: Snabb | Den snabba stillbilden: dagsljus, mjuka skuggor, glas- och metallutseende, på sekunder | Webbläsaren och Studio |
| Inbyggd: Path tracer | Ljus som studsar mellan ytor, på ditt grafikkort eller din processor, renderingskön och de andra datorerna i ditt nätverk | Webbläsaren och Studio |
| En tilläggsmotor | Den ritar och lämnar tillbaka bilden: se [Rita bilden med ett annat program](topic:render-other-program) | Webbläsaren (en motor skriven i JavaScript) eller Studio (en motor som kör ett program) |
| Ett program som tar över scenen | Studio lägger scenen i sin mapp och håller den i takt | Studio |
| Öppna i … | Sparar scenen och öppnar den i ett program; inget kommer tillbaka: se [Öppna scenen i ett annat program](topic:render-open-in) | Webben sparar filen |

## Så fungerar valet

- Att välja Snabb eller Path tracer ändrar Läge med det, och tvärtom. Inget annat i dialogen ändras för dem som aldrig använder en annan motor.
- En motor som inte är tillgänglig finns kvar i listan med skälet ("hittades inte", "behöver en nyare version"); du kan inte välja den. I webbläsaren visar en motor som bara körs i Studio "sparar en fil": {{ui:Rendera en bild…}} sparar då scenen och dess inställningar till en fil som du tar till det programmet.
- Valet sparas med filens renderingsinställningar, och den motor du valde senast är startmotorn för filer som inte har ett eget val.
- En bild från ett annat program säger vilket program som ritade den och dess version, i dialogen och i renderingskön. Löftena på sidan [Rendera](topic:render) gäller bara **våra egna** motorer: ett annat program belyser, tonar och samplar på sitt eget sätt, så två bilder av samma scen är lika i kamera, sol, lampor och exponering, men inte pixel för pixel.

## Vad varje motor får

Scenen går till ett annat program som ett **paket**: modellen som en USD-fil (samma fil som [Spara som USD](topic:usd) skriver), och en inställningsfil som innehåller det en USD-importör inte kan lita på: de exakta materialvärdena, lamporna som är på med sin effekt och ljusprofiler, solen, himlen, exponeringen och kameran så som dialogen skulle rita den. Inget laddas upp någonstans.

## Renderingskön

En bild eller en animation för ett annat program kan vänta i [renderingskön](topic:render#the-render-queue) precis som våra egna; dess jobb minns vilken motor det är för. En animation går till programmet i en enda körning.
