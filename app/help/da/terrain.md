---
title: Terræn: grund ud fra højdekurver, og skulptering af den
summary: Lav grund ud fra højdekurver eller som et gitter, og hæv og sænk den derefter med en blød pensel.
keywords: terræn, grund, landskab, topografi, højdekurver, højdekurvelinjer, byggegrund, skråning, bakke, vold, sandkasse, smoove, skulptér, planér, TIN
from: 407652b3
---

Terræn er grund lavet af trekanter, så det kan følge enhver form. Det er en gruppe: dobbeltklik på den for at redigere den.

## Fra højdekurver

1. Få højdekurverne i deres højder: tegn dem, eller [importér en situationsplan](topic:site-plan) og flyt hver kurve op til sin kote.
2. Vælg dem (alle kanterne på alle kurverne).
3. {{ui:Rediger}} › {{ui:Mere}} › {{ui:Terræn ud fra valgte højdekurver}}.

ModelCraft forbinder punkterne i højdekurverne med trekanter (en TIN) og blødgør hver kant indeni, så grunden skygges glat. Linjerne selv bliver; slet dem eller skjul dem, når du ikke har brug for dem mere. Meget tætte højdekurver reduceres til 8 000 punkter.

## Et gitter at skulptere

{{ui:Rediger}} › {{ui:Mere}} › {{ui:Terrængitter…}} spørger efter en bredde, en dybde og en cellestørrelse og placerer derefter et fladt trekantgitter, hvor du klikker på dets hjørne. Små celler giver blødere skulptering, men flere flader (højst 200 × 200 celler).

## Skulptér: hæv og sænk grunden

1. Dobbeltklik på terrænet for at åbne det.
2. {{ui:Rediger}} › {{ui:Mere}} › {{ui:Skulptér terræn}}. En cirkel viser penslen på jorden under markøren.
3. Træk op for at hæve grunden under penslen, eller ned for at sænke den. Midten flytter sig mest, og grunden udjævnes til intet ved cirklens kant, så volde og fordybninger bliver glatte.

For at lave en vold i en præcis højde klikker du én gang, skriver derefter højden, fx `1.5m` (et minus sænker den), og trykker på {{key:Enter}}. For at ændre penslen skriver du en længde, før du klikker: `5m` giver en pensel med en radius på 5 m.

Hver skulptering er ét fortryd-trin.

## Ting at vide

- Skulptering flytter kun trekantflader, så hver flade forbliver flad. Flader tegnet i hånden (rektangler, polygoner) er ikke terræn: værktøjet siger det.
- Skulptering flytter punkter lige op og ned; den tilføjer ikke punkter. For mere detalje, lav et gitter med mindre celler.
- Terræn eksporteres som enhver anden gruppe. I IFC er det et bygningselement-proxy, ligesom alt andet.
