---
title: Den levende visning
summary: Et vindue ved siden af modellen, der viser den i den realtidsbaserede look med sol og skygger, og følger hver ændring, du laver. Gå rundt i den, og sæt tidspunkt på dagen og måneden.
keywords: deling, panorama, 360, rundtur, virtuel rundtur, selvstændig visning, offline-visning, send til kunde, video, gennemgangsvideo, spredning, spredning, græs, eng, skov, sten, planter, træer, menneskemængde, mal planter, levende visning, realtid, realtidsrender, gennemgang, gå, gå igennem, førstepersonsvisning, præsentation, kunde, andet skærm, andet vindue, skærm, tidspunkt på dagen, sol, årstid, måned, skygger, ambient occlusion, refleksioner, lys fra refleksion, global belysning, webgpu, webgl
from: fca3b0d6
---

{{ui:Eksportér}} › {{ui:Levende visning}} åbner et panel over appen, der viser modellen i den realtidsbaserede look: himlen og solen fra din models sted og dato, solens skygger, de looks og materialer, du har givet flagene, lamper og lys, der kastes tilbage fra vægge og gulve. Det følger det, du gør: drejer du visningen, drejer den også, og ændrer du modellen, vises ændringen et øjeblik senere. Intet uploades.

## Åbn den

1. Vælg {{ui:Eksportér}} › {{ui:Levende visning}}. Panelet åbnes i nederste højre hjørne.
2. Træk i titellinjen for at flytte det, og træk i hjørnet for at gøre det større.
3. {{ui:Nyt vindue}} flytter det til et eget vindue, til en andet skærm. {{ui:Eksportér}} › {{ui:Levende visning i et nyt vindue}} åbner det dér med det samme. Blokerer din browser pop-up-vinduer, åbnes det som panel.
4. {{ui:Luk}} lukker det.

## Betjeningen

| Betjening | Hvad den gør |
|---|---|
| {{ui:Følg visningen}} | Til: den levende visning kigger ddér, hvor ModelCraft-visningen kigger. Når du går rundt, slås den fra |
| {{ui:Gå}} | Gå rundt i modellen (se nedenfor) |
| {{ui:Tyngdekraft}} | Mens du går: stå på gulve og gå op ad trapper. Fra: flyv |
| {{ui:Tid}} | Klokkeslættet på dagen, fra 05:00 til 21:00. Solen flytter sig, når du trækker |
| {{ui:Måned}} | Måneden (den 21. i den), så du kan se solen om vinteren og sommeren |
| {{ui:Kvalitet}} | {{ui:Til denne computer}} (det som [din maskine](topic:your-machine) får), eller {{ui:Lav}}, {{ui:Middel}} eller {{ui:Høj}} |

Linjen nederst siger, hvad der tegner visningen (WebGPU eller WebGL 2), kvaliteten og lyset fra refleksioner.

## Gå rundt i modellen

1. Drej hovedvisningen ddér, hvor du vil stå, og vælg {{ui:Gå}}. Du står på gulvet under visningens øjepunkt, 1,6 m høj.
2. Klik i den levende visning, og brug derefter {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piletasterne. Hold {{key:Shift}} nede for at løbe. Træk for at kigge rundt.
3. Trin op til 40 cm bestiges (trapper); alt højere er en væg. Vægge stopper dig, og du glider langs dem.
4. Med {{ui:Tyngdekraft}} fra flyver du: {{key:E}} går op, {{key:Q}} går ned.
5. {{key:Esc}} stopper gangen.

## Spred planter, sten og mennesker

{{ui:Spred}} i den levende visnings bjælke åbner spredningspanelet ved siden af billedet. Et spredningssæt fordeler genstande fra entourage-biblioteket (træer, buske, græs, blomster, sten, mennesker, biler) over en del af modellen. Genstandene tegnes kun i den levende visning: de er ikke geometri i modellen, og hovedvisningen viser dem ikke.

1. **Udfyld flader:** vælg flader (eller en gruppe, for eksempel et terræn) i ModelCraft, og vælg derefter {{ui:Udfyld valget}}. Sættet dækker dem.
2. **Mal:** vælg {{ui:Maling}}, og træk derefter over den levende visning. Er flader valgt, lander malingen kun på dem. Er intet valgt, lander den på alt under penslen, også jorden. {{ui:Penselstørrelse}} sætter penslen, og {{ui:Viskelæder}} fjerner malede pletter.
3. Sæt kryds ved det, der skal spredes. Tallet ved siden af hver er dens vægt: 3 og 1 giver tre af den første for hver én af den anden.

| Betjening | Hvad den gør |
|---|---|
| {{ui:Pr. m²}} | Hvor mange genstande der er pr. kvadratmeter |
| {{ui:Hold afstand (m)}} | Ingen genstande tættere på andre objekter end dette, og ingen under et tag eller et bord. 0 slår det fra |
| {{ui:Drejning (°)}} | Hvor meget hver genstand drejes tilfældigt om lodret |
| {{ui:Stejleste (°)}} | Ingen genstande, hvor overfladen er stejlere end dette |
| {{ui:Størrelse}} | Mindste og største størrelse, som en faktor af genstandens egen størrelse |
| {{ui:Højde fra, til (m)}} | Kun mellem disse højder (tomt = alle) |
| {{ui:Læn med overfladen}} | 0 holder genstande lodrette; 1 stiller dem vinkelret på en skråning |
| {{ui:Seed}}, {{ui:Bland}} | Det samme frø giver altid den samme spredning; Bland vælger en anden |

Sættene gemmes i .modelcraft-filen og følger de flader, de dækker, når du ændrer dem. Hvor mange genstande den levende visning højst tegner, afhænger af [din maskines](topic:your-machine) niveau: 20 000 for {{ui:Kun processor}}, 100 000 for {{ui:Grafikkort, grundlæggende}} og en million for {{ui:Grafikkort, højt}}. Panelet viser, hvor mange der er placeret af dem, tætheden kræver: færre placeres, når budgettet er nået, eller hvor objekter holder dem ude. Genstande tæt på kameraet tegnes som sig selv; fjerne tegnes som enkle former i deres farver.

:::note
Spredte genstande findes i den levende visning (og i dens gang, panoramaer og den selvstændige visning). Render et billede tegner dem endnu ikke.
:::

## Del: panoramaer, rundture, en visning, en video

{{ui:Del}} i den levende visnings bjælke laver filer ud fra den levende visning. Alt laves på denne computer; intet uploades.

| Valg | Hvad du får |
|---|---|
| {{ui:360°-panorama}} | Et 360°-billede fra det sted visningen står (eller hvor du går), som PNG i ligrektangulær projektion, som panoramavisninger og de fleste fotosider åbner |
| {{ui:Føj dette sted til rundturen}}, og derefter {{ui:Gem rundturen}} | Én webside med et panorama ved hvert sted og pile til de steder, hver kan se (en væg imellem skjuler pilen) |
| {{ui:Gem en viser}} | Én webside med modellen i denne realtidsbaserede look: drej den, gå igennem den, hop til dens gemte scener. Den åbnes offline i en browser med WebGPU eller WebGL 2, fra en mappe, en USB-nøgle eller en e-mail, uden installation og uden konto, og den henter intet fra internettet |
| {{ui:Video af banen}} | Kameraets sti på tidslinjen (eller de gemte scener i rækkefølge) som en video i denne realtidsbaserede look, i den levende visnings størrelse: WebM eller MP4, hvor browseren kan lave dem, ellers nummererede billeder i en ZIP |

Panoramaets størrelse følger kvaliteten: 1024, 2048 eller 4096 pixels bredde ved {{ui:Lav}}, {{ui:Middel}} og {{ui:Høj}}. En visningsfil er ca. 5 MB plus modellen.

:::note
Rundturen og visningen er lavet til at vise, ikke til at redigere: de bevarer modellen, som den er, når du gemmer dem.
:::

## Kvalitet

| | Lav | Middel | Høj |
|---|---|---|---|
| Solskygger | ét skyggekort | tre kaskader | fire kaskader |
| Ambient occlusion (kontaktskygger) | | ✓ | ✓, finere |
| Refleksioner i metal | | | ✓ |
| Bloom (når Render et billede sætter det) | | ✓ | ✓ |
| Udglattede kanter | FXAA | over flere billeder (TAA) | over flere billeder (TAA) |
| Lys fra refleksion | grovt | finere | finest |

{{ui:Til denne computer}} vælger Lav på en computer uden brugbart grafikkort, Middel med en indbygget grafikchip og Høj med et separat grafikkort. Lav er beregnet til en bærbar med 8 GB og intet grafikkort.

## Lys fra refleksion

Lys, der kastes fra en solbeskinnet væg ned på gulvet, og det mørkere indre af et rum, beregnes af den samme stistracer, der laver [renderede billeder](topic:render): den renderer et lille panorama på punkter i modellen, i baggrunden på hver processorkerne. Mens den arbejder, siger den nederste linje {{ui:Lys fra refleksion: 40 %}}; når den er klar, tager visningen den med. Efter en ændring starter den forfra.

:::note
Dette er en tilnærmelse til en levende visning, ikke et renderet billede: små detaljer mellem punkterne får lys fra refleksion af de punkter, der ligger tæt på. Til et færdigt billede brug [Render et billede](topic:render).
:::

## Lysstyrke og farver

Den levende visning bruger den samme lysstyrke, hvidbalance, kontrast og visningstransformation (ACES, AgX, filmisk eller standard) som [Render et billede](topic:render). Indstil dem dér, og den levende visning følger med.

:::note
Browsere er forskellige. Hvor browseren har WebGPU (Chrome og Edge på Windows, macOS og ChromeOS, Safari 26), bruger den levende visning det. Andre steder (de fleste browsere på Linux, ældre Apple-systemer) bruger den WebGL 2 og ser ens ud.
:::
