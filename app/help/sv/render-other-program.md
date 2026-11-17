---
title: Rita bilden med ett annat program
summary: Vår egen path tracer ritar renderingsbilden; ett annat program kan rita den bara via ett renderingsmotor-tillägg i CadCraft Studio. Vad som förs över, och varför vissa program aldrig erbjuds.
keywords: rendering, motor, externt program, tillägsmotor, studio, bakgrund, kö, usd, gltf, ritas av, blender, gpl
from: 150f94f1
---

Bilden i {{ui:Rendera en bild…}} ritas av **våra egna motorer**: Snabb och Path tracer, i webbläsaren och i CadCraft Studio. Ett annat program kan bara rita den när ett **renderingsmotor-tillägg** tar hit det: se [Lägg till en renderingsmotor med ett tillägg](topic:render-engine-addons). För att ta scenen till ett annat program och fortsätta arbeta där, använd [Öppna scenen i ett annat program](topic:render-open-in) eller [Skicka scenen till en spelmotor](topic:render-unreal).

## Rita en bild med ett tilläggs motor

1. Slå på tillägget under Inställningar › Tillägg. Dess motor visas i listan Motor i {{ui:Rendera en bild…}}.
2. Välj den. Dess egna inställningar visas under listan Motor.
3. Klicka på {{ui:Render}}. I Studio frågar Studio dig i sin egen dialogruta första gången ett tillägg kör ett program. Framsteg visas medan den ritar; {{ui:Stop}} avslutar den. Bilden visas markerad med motorn som ritade den.

En motor skriven i JavaScript körs i webbläsaren också. En motor som kör ett program på den här datorn körs bara i Studio; i webbläsaren visas den som en fil att spara.

## Vad som förs över

Motorn får ett **paket**: modellen som en USD-fil (och en glTF-fil när den begär en), och en inställningsfil med de exakta materialvärdena, solen och himlen, varje lampa som är på med sin effekt och ljusprofil, kameran och exponeringen. Varje program belyser, tonar och samplar på sitt eget sätt, så bilderna är lika i kamera, sol, lampor och exponering, men inte pixel för pixel.

## Program CadCraft aldrig kör

CadCraft startar aldrig ett program under GNU GPL-licensen, och listar aldrig ett sådant som motor eller som mål för Öppna i. Blender är ett av dem, så det finns inte i listan Motor. En USD- eller glTF-fil som sparas från {{ui:Rendera en bild…}} öppnas fortfarande i det, precis som i alla program som läser de filerna.

:::note
Panorama- och stereokameror och en himmelsbild (himlens färger används i stället) förs inte över till ett annat program. Inget som görs i ett annat program kommer tillbaka till modellen.
:::
