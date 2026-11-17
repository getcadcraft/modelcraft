---
title: Gennemgå modellen i et VR-headset
summary: Gå rundt i modellen i fuld størrelse i et VR-headset. Hop rundt, drej, mål, skær den op, placér emner med et billede, se den som en bordmodel, og mød de andre i en levende session.
keywords: vr, virtual reality, headset, webxr, xr, immersiv, quest, oculus, vive, index, pico, gå igennem, rundtur, teleportér, designgennemgang, gennemgang, mål, snit, skær, emne, emner, bcf, bordmodel, skalamodel, tilstedeværelse, avatarer, levende, sammen
from: fa2f591a
---

{{ui:Gennemgå i VR}} placerer dig inde i modellen med et VR-headset i fuld størrelse. Du står, hvor visningens kamera er, på gulvet under det, og vender samme vej. Intet uploades: headsettet viser det, browseren tegner på denne computer (eller i headsettets egen browser).

## Det du skal bruge

- Et headset, som browseren kan styre (WebXR): headsettets egen browser, eller Chrome eller Edge på en pc med et headset tilsluttet.
- ModelCraft åbnet på en sikker side (https), sådan som den er på dette websted.

Når der ikke er noget headset, er {{ui:Gennemgå i VR}} nedtonet, og den siger hvorfor.

## Start

1. Opsæt visningen, hvor du vil starte: i et rum, eller udenfor og kigge på bygningen.
2. Klik på {{ui:Visninger}} i gruppen {{ui:Kamera}}, og klik derefter på {{ui:Gennemgå i VR}}.
3. Tag headsettet på.

Menuen sidder på bagsiden af din venstre hånd. Peg på den med den højre controller, og træk i aftrækkeren for at vælge en knap. (Med kun én hånd svæver menuen foran det sted, hvor du startede.)

## Sådan ser det ud

Headsettet viser modellen i [den levende visnings](topic:live-view) udseende: de udseender og materialer, du har givet fladerne, himlen og solen ud fra modellens sted og dato med dens skygge, lamper, spredte planter og sten, og lys, der kastes tilbage fra vægge og gulve. Lyset beregnes på denne computer, mens du kigger rundt, og følger dig, når du bevæger dig. Lysstyrke og visningstransformation (ACES eller AgX) er de samme som i [Render et billede](topic:render). Hvor meget der tegnes, afhænger af, hvad headsettets browser kan, ligesom på desktop. Ambient occlusion, refleksioner og bloom bliver på desktop.

## Bevæg dig rundt

- **Hop:** i {{ui:Flyt}} peger du på et gulv og trækker i aftrækkeren. Så lander du der. Eller du skubber joysticket fremad for at sigte og slipper for at hoppe. Du kan kun lande på gulve og jord (flader, der vender opad), aldrig på en væg.
- **Drej:** skub joysticket til venstre eller højre. Du drejer 30° hver gang.
- **Gå:** gå bare i dit spilområde.

## Mål

Vælg {{ui:Mål}}, og træk derefter i aftrækkeren på to punkter. Afstanden vises mellem dem, i modellens enheder. Et punkt tæt på et hjørne fastgøres til hjørnet.

## Skær den op

Vælg {{ui:Snit}}, og træk i aftrækkeren på en flade:

- på en væg (eller noget, der ikke er et gulv): alt mellem dig og fladen skæres væk, så du kan se ind. Det virker bedst udefra eller på tværs af et rum.
- på et gulv, oppefra: et planudsnit 1.2 m over gulvet, så væggene viser deres nederste del.

{{ui:Ryd}} fjerner snittet og målingerne. Hvis et snitplan skærer modellen i visningen, når du starter, starter headsettet med det.

## Placér et emne

Vælg {{ui:Emne}}, og træk i aftrækkeren, hvor problemet er. En nummereret nål markerer det, og ModelCraft gemmer emnet med et billede af det, du så, og hvor du stod. Når du forlader VR, ligger emnerne i listen {{ui:Emner}} til højre:

- øjeknappen viser emnet fra det sted, det blev placeret;
- {{ui:Gem som BCF}} downloader dem alle som en BCF-fil, som BIM-gennemgangsprogrammer åbner (inklusive kamera og billede);
- de gemmes også i `.modelcraft`-filen.

Tilføj en kommentar til et emne, efter du har forladt VR, i et BCF-program. At skrive i headsettet er ikke lavet endnu.

## Se den som en bordmodel

{{ui:Bordplade}} formindsker modellen, så den passer til et bord foran dig. Gå rundt om den, eller drej den med joysticket. {{ui:Fuld størrelse}} sætter dig tilbage, hvor du var.

## Sammen med andre, live

I en [levende session](topic:work-live) ser alle i VR de andre som et hoved og to hænder i deres egen farve, med deres navn og en prik, hvor hver enkelt peger. Ændringer, som nogen foretager, når dit headset inden for et øjeblik. Personer ved skrivebordet vises ikke i headsettet endnu.

## Forlad

Vælg {{ui:Forlad VR}} (eller tag headsettet af og afslut dér). Visningen på skærmen flytter til der, hvor dit hoved var.

:::note
Testet med en headset-emulator alene, endnu ikke med et rigtigt headset. En stor model kan få headsettet til at hakke. Skjul det, du ikke har brug for, først ([skjul og isolér](topic:hide-isolate)).
:::
