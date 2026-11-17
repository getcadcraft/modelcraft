---
title: Tegn billedet med et andet program
summary: Vores egen path tracer tegner Render-billedet. Et andet program kan kun tegne det gennem et render-motor-add-on i CadCraft Studio. Hvad der overføres, og hvorfor nogle programmer aldrig tilbydes.
keywords: render, motor, eksternt program, add-on-motor, studio, baggrund, kø, usd, gltf, tegnet af, blender, gpl
from: 150f94f1
---

Billedet i {{ui:Render et billede…}} tegnes af **vores egne motorer**: Fast og Path tracer, i browseren og i CadCraft Studio. Et andet program kan kun tegne det, når et **render-motor-add-on** leverer det: se [Tilføj en render-motor med et add-on](topic:render-engine-addons). For at tage scenen med til et andet program og fortsætte arbejdet dér, brug [Åbn scenen i et andet program](topic:render-open-in) eller [Send scenen til en spilmotor](topic:render-unreal).

## Tegn et billede med et add-ons motor

1. Slå add-on'en til under Indstillinger › Add-ons. Dens motor vises i motorlisten i {{ui:Render et billede…}}.
2. Vælg den. Dens egne indstillinger vises under motorlisten.
3. Klik {{ui:Render}}. I Studio spørger Studio dig i sin egen dialog, første gang en add-on kører et program. Fremskridt vises, mens den tegner; {{ui:Stop}} afslutter den. Billedet vises markeret med motoren, der tegnede det.

En motor skrevet i JavaScript kører også i browseren. En motor, der kører et program på denne computer, kører kun i Studio; i browseren vises den som en fil, der skal gemmes.

## Hvad der overføres

Motoren får en **pakke**: modellen som en USD-fil (og en glTF-fil, når den beder om en), og en indstillingsfil med de præcise materialeværdier, solen og himlen, hver lampe, der er tændt med dens styrke og lysprofil, kameraet og eksponeringen. Hvert program belyser, tonemapper og sampler på sin egen måde, så billeder ligner hinanden i kamera, sol, lamper og eksponering, men ikke pixel for pixel.

## Programmer CadCraft aldrig kører

CadCraft starter aldrig et program under GNU GPL-licensen og lister aldrig et sådant som motor eller som Åbn i-mål. Blender er et af dem, så det er ikke på motorlisten. En USD- eller glTF-fil gemt fra {{ui:Render et billede…}} åbner stadig i det, ligesom i ethvert program, der læser de filer.

:::note
Panorama- og stereokameraer og et himmelbillede (himlens farver bruges i stedet) overføres ikke til et andet program. Intet, der gøres i et andet program, kommer tilbage til modellen.
:::
