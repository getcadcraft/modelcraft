---
title: Tegn bildet med et annet program
summary: Vår egen path tracer tegner Render-bildet; et annet program kan bare tegne det gjennom et rendermotor-tillegg i CadCraft Studio. Hva som overføres, og hvorfor noen programmer aldri tilbys.
keywords: render, motor, eksternt program, tillegg-motor, studio, bakgrunn, kø, usd, gltf, tegnet av, blender, gpl
from: 150f94f1
---

Bildet i {{ui:Render et bilde…}} tegnes av **våre egne motorer**: Rask og Path tracer, i nettleseren og i CadCraft Studio. Et annet program kan bare tegne det når et **rendermotor-tillegg** henter det inn: se [Legg til en rendermotor med et tillegg](topic:render-engine-addons). For å ta scenen med til et annet program og fortsette å jobbe der, bruk [Åpne scenen i et annet program](topic:render-open-in) eller [Send scenen til en spillmotor](topic:render-unreal).

## Tegn et bilde med et tilleggs motor

1. Slå tillegget på under Innstillinger › Tillegg. Motoren vises i motorlisten til {{ui:Render et bilde…}}.
2. Velg den. Dens egne innstillinger vises under motorlisten.
3. Klikk {{ui:Render}}. I Studio spør Studio deg i sin egen dialog første gang et tillegg kjører et program. Fremdrift vises mens det tegner; {{ui:Stopp}} avslutter det. Bildet vises merket med motoren som tegnet det.

En motor skrevet i JavaScript kjører også i nettleseren. En motor som kjører et program på denne datamaskinen, kjører bare i Studio; i nettleseren vises den som en fil å lagre.

## Hva som overføres

Motoren får en **pakke**: modellen som en USD-fil (og en glTF-fil når den ber om en), og en innstillingsfil med de eksakte materialverdiene, solen og himmelen, hver lampe som er på med sin effekt og lysprofil, kameraet og eksponeringen. Hvert program belyser, toner og samplerer på sin egen måte, så bilder er like i kamera, sol, lamper og eksponering, men ikke piksel for piksel.

## Programmer CadCraft aldri kjører

CadCraft starter aldri et program under GNU GPL-lisensen, og lister aldri et slikt som motor eller som mål for Åpne i. Blender er ett av dem, så det er ikke i motorlisten. En USD- eller glTF-fil lagret fra {{ui:Render et bilde…}} åpnes fortsatt i det, som i ethvert program som leser disse filene.

:::note
Panorama- og stereokameraer og et himmelbilde (himmelens farger brukes i stedet) overføres ikke til et annet program. Ingenting som gjøres i et annet program kommer tilbake til modellen.
:::
