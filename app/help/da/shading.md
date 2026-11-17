---
title: Lav materialer med noder
summary: Byg et materiale af teksturer, billeder og matematik i arbejdsområdet Shading, se det i visningen, mens du arbejder, og mal flader med det.
keywords: shading, bag, bagning, teksturbagning, ambient occlusion, ao, krumning, normalbagning, høj poly, lav poly, lysmap, decal, decals, klistermærke, logo, etiket, teksturmaling, mal tekstur, pensel, materiale, materialer, materialx, mtlx, openpbr, standard surface, materialbibliotek, librarycraft, teksturssæt, pbr, importér teksturer, zip, cc0, træk, node, noder, node-editor, shader, tekstur, procedural, støj, skakbræt, voronoi, celler, bølger, mursten, fliser, træ, marmor, farveforløb, snavs, kantslid, farveramp, bland, bump, normalkort, ruhed, metalhed, uigennemsigtighed, udskæring, emission, glød, forskydning, boksmapping, triplanar, uv, billede, billedtekstur
from: d7368b21
---

Et materiale lavet i arbejdsområdet **Shading** hører til filen. Det er en lille graf: **noder**, der laver teksturer, billeder og tal, forbundet til **Materialeudgang**, hvis indgange er fladens udseende — grundfarve, ruhed, metalhed, normal, uigennemsigtighed, emission og resten af OpenPBR-modellen. Du maler flader med det, ligesom med et hvilket som helst bibliotekmateriale, og hver ændring vises i visningen med det samme.

## Åbn det

Vælg {{ui:Shading}} i listen over arbejdsområder. 3D-visningen beholder den øverste del af skærmen, og **node-editoren** tager den nederste del. Panelet til højre viser filens egne materialer.

- {{ui:Nyt materiale}} laver et gråt et med kun dets Materialeudgang.
- **Lav en redigerbar kopi af et bibliotekmateriale** gør mursten, træ, fliser og resten til en graf, du kan ændre: dens tekstur kommer gennem en Biblioteksteksturnode, dens bump gennem en Bump-node.
- {{ui:Mal med det}} maler de valgte flader eller grupper eller vælger materialet til værktøjet Maling. Malingsværktøjets materialer viser også filens egne under **I denne fil**.
- {{ui:Duplikér}} og {{ui:Slet}} virker på det materiale, du redigerer. Sletning kan ikke fortrydes: flader malet med det viser standardfarven, indtil du maler dem igen.

## Materialer fra biblioteket

Panelets **Materialebibliotek (Library)** lister bibliotekets materialer, hver med en forhåndsvisning renderet af CadCraft's path tracer. De er teksturssæt udgivet under CC0 og krediteret til de personer, der har lavet dem.

- Klik på et for at hente det ind i filen (dets billeder følger med) og, med flader eller grupper valgt, male dem.
- Træk et over på en flade eller en gruppe i visningen for kun at male den.
- Det bliver et af filens materialer: ændr dets noder ligesom ethvert andet. Dets kreditering vises i panelet og bliver i filen.

## Importér et teksturssæt

{{ui:Billeder eller en zip…}} eller {{ui:En mappe…}} under **Importér et teksturssæt** laver et materiale af et sæt kort. Kortene findes ud fra ordene i deres filnavne: color, albedo, diffuse eller basecolor; roughness (eller gloss, omdannet til ruhed); metalness eller metallic; normal (OpenGL eller DirectX, ud fra `gl` / `dx` i navnet); height eller displacement; ambient occlusion; opacity; emission. Pakkede kort (ARM, ORM) springes over. Flisen starter på 1 × 1 m: sæt dens rigtige størrelse på Materialeudgangen. Højde går til forskydning med dens skala på 0 — hæv skalaen for at bruge den på net.

## MaterialX

MaterialX er det åbne format, andre 3D- og renderingsprogrammer bruger til at udveksle materialer.

- {{ui:Eksportér som MaterialX…}} gemmer det materiale, du redigerer: dets værdier og hver tekstur som et PNG-billede ved siden af `.mtlx`-filen (i en zip). Vælg den shader, det skrives som: **OpenPBR Surface** (MaterialX 1.39, den samme model ModelCraft bruger) eller **Standard Surface** (MaterialX 1.38, som flere programmer læser i dag). Teksturerne placeres efter UV-koordinater i meter; boks- og triplanar-placering skrives som UV.
- {{ui:Importér MaterialX…}} (eller {{ui:Fra en mappe…}}) læser `.mtlx`-filer med OpenPBR-, Standard Surface-, UsdPreviewSurface- eller glTF PBR-shadere. Giv den billederne også, eller en zip med alt: et billede findes ud fra sin sti, sit navn eller sit navn med en anden billedtype (en `.exr`, som filen nævner, kan komme som en `.jpg` ved siden af den). Teksturer, normalkort, aritmetik, blandinger og forskydning kommer ind som noder; alt andet beholder sin værdi, og statuslinjen siger, hvad der blev udeladt.

## Decals

Et decal er et billede lagt på en flade — et logo, et skilt, en etiket, en plet — med et materiale af sit eget.

- Sæt **Bredde på et nyt decal**, og vælg derefter {{ui:Placér en decal…}} (eller {{ui:Decal}} på værktøjslinjen), vælg et PNG-, JPEG- eller WebP-billede, og klik på en flade. Billedet projiceres på fladerne dér og bevarer sine proportioner; gennemsigtige dele af et PNG forbliver gennemsigtige.
- Det hører til den gruppe eller komponent, du klikkede i, og flytter sig med den. Det dækker de flader inde i sin boks, der vender samme vej, og stopper ved kanterne af det, det ligger på.
- Hvert decal får sit eget materiale, navngivet **Decal: <billede>**, i filens liste: rediger det ligesom ethvert andet (ruhed, et bump, en glød). {{ui:Materiale}} ved siden af decalet åbner det.
- Ved hvert decal: dets bredde (højden følger billedet), {{ui:Drej}} (en kvart omgang) og {{ui:Slet}}. Decals gemmes sammen med filens materialer, uden for Fortryd.
- De vises i den skyggede visning, i hurtige renderinger og i billeder af høj kvalitet.

## Mal på teksturen

{{ui:Mal tekstur}} (eller {{ui:Maling}} under **Mal på teksturen**) gør markøren til en rund pensel. Træk på en flade, der har et af filens materialer: penslen maler billedet bag dets grundfarve.

- På et net maler den langs netets UV'er (udfold det i UV-arbejdsområdet først); på andre flader maler den på tværs af fladen, så malingen gentages med materialets flise.
- Et materiale, hvis grundfarve er en ensartet farve, får et nyt billede på 512 × 512 pixels af den farve, første gang du maler det. Et materiale, hvis grundfarve kommer fra andre noder, kræver en Billedenode forbundet til Grundfarve.
- Angiv penselfarve, størrelse (i billedpixels), styrke og hårdhed i panelet. {{ui:Fortryd strøg}} eller Ctrl+Z (mens du maler) tager et strøg tilbage, op til de sidste 20.
- Det malede billede gemmes i filen. Bibliotekmaterialer kan ikke males: lav en redigerbar kopi først.

## Bag teksturer

**Bag teksturer** skriver det, som form og scene giver en flade, ind i billeder langs et nets UV'er.

- Vælg et net med UV'er (udfold det i UV-arbejdsområdet), sæt flueben ved kortene, og tryk {{ui:Bag}}:
  - **Ambient occlusion** — hvor åbent hvert punkt er: hjørner, folder og steder under andre ting bliver mørkere. Alt, der vises i modellen, skygger det, op til occlusion-afstanden.
  - **Krumning** — lyst langs ydre kanter, mørkt i indvendige hjørner, mellemgråt på flade og let buede dele, over den kantbredde, du angiver.
  - **Normaler fra det højdetalje objekt** — vælg også en detaljeret kopi: dens overfladedetalje skrives som et normalkort til det enklere objekt (objektet med færre trekanter bages ind på). Søgeafstanden er, hvor langt fra hinanden de to flader må være.
  - **Belysning** — solen på modellens sted og dato (Stil) med dens skygger, samt himlen, som et lysmap.
- Billederne føjes til filen og vises i Billedenoder. Hvis materialet, du redigerer, har en node **Snavs og kantslid**, læser den straks den nye occlusion og krumning.
- Flere stråler pr. texel giver glattere occlusion og belysning, men tager længere tid. Bagning kører i baggrunden på computerens processorkerner; {{ui:Stop bagningen}} stopper den.

## Byg en graf

1. {{ui:Tilføj en knude…}} (eller {{key:Shift+A}} i node-editoren) tilføjer en node midt i editoren.
2. Træk fra en udgangsprik (på en nodes højre side) til en indgangsprik (på en nodes venstre side) for at forbinde dem. En ny forbindelse til et input erstatter den første; træk et forbundet input væk for at fjerne forbindelsen.
3. Indgange, der ikke er forbundet, viser deres værdi: skriv et tal, eller vælg en farve. Indstillinger står nederst i hver node.

Træk en node i dens titel for at flytte den, træk i et tomt område for at panorere, og brug hjulet til at zoome. {{key:Delete}} fjerner de valgte noder eller forbindelsen, {{key:Mod+Z}} fortryder, {{key:Mod+D}} duplikerer, {{key:F}} viser alle noder. Hver ændring er ét fortrydelsestrin i node-editoren. Modellens egen fortryd ændrer ikke materialer.

| Noder | Hvad de laver |
|---|---|
| Teksturkoordinater | Hvor på flisen et punkt ligger: gentag det, forskyd det, drej det en kvart. |
| Værdi, Farve | Et tal, en farve. |
| Billede | Et billede i filen (et, der fulgte med en importeret model, eller et du tilføjede med {{ui:Tilføj et billede…}}). Vælg **Farver** til et foto og **Data** til et ruheds- eller normalkort. |
| Bibliotekstekstur | Et bibliotekmaterales tekstur, ruhed og højde. |
| Skakbræt, Støj | Kvadrater; glat fraktal støj med dens detalje, ruhed og seed. |
| Voronoi-celler, Bølger, Farveforløb | Celler (afstand til nærmeste punkt, kanterne mellem cellerne, en farve pr. celle); bånd på tværs, op eller diagonalt, som sinus, sav eller trekant, bøjet af støj; lineære, kvadratiske, radiale og sfæriske farveforløb. |
| Mursten, Fliser | Rækker af mursten med en forskudt forbandt, eller et gitter af fliser: farver, mørtel eller fugemasse, et mellemrum og en fase i meter, en højde for bump, et tilfældigt tal pr. stykke. |
| Træ, Marmor | Ringe langs årerne med fine fibre; årer bøjet af turbulens. |
| Snavs og kantslid | Slider konvekse kanter og gør hulrum snavsede ud fra et nets krumnings- og occlusion-billeder ([Bag teksturer](topic:shading#bake-textures) laver dem; eller sæt dets to billedindstillinger i netets UV-layout: placér materialet efter UV-koordinater). Uden dem ændrer den intet. |
| Bland farver, Farveramp, Nuance/mætning/værdi, Lysstyrke og kontrast, Invertér, Gamma, Opdel og Kombinér RGB | Farvearbejde. |
| Matematik, Kortlæg interval | Aritmetik på tal (læg sammen, gang, potens, glat trin og mere). |
| Bump, Normalkort | En normal ud fra en højde (Bump) eller fra et normalkort-billede (Normalkort: vælg den grønne kanals retning). |

## Materialeudgang

Dens indstillinger siger, hvordan teksturen ligger på flader:

- **Flisebredde** og **Flisehøjde**: hvor mange meter én flise af teksturen dækker. Alt, en graf laver, gentages hen over flisen uden søm.
- **Placeret efter**: **UV-koordinater** følger flader (skub/træk-flader: langs hver flade; net: deres UV'er, én UV-enhed = én flise), **Boks** projicerer fra den nærmeste af de tre akser, **Triplanar** blander de tre projektioner på skrånende flader (**Blandingsskarphed**: højere er en hårdere blanding).
- **Normalstyrke** skalerer normalindgangen. **Forskydningsskala** angiver, hvor langt forskydningsindgangen flytter et nets hjørnepunkter.
- {{ui:Flere indgange}} viser resten af OpenPBR-indgangene: coat, fuzz, subsurface, thin film, transmission og deres farver.

## I billeder af høj kvalitet

Path traceren læser grundfarve, ruhed, metalhed, uigennemsigtighed, normal og emission fra grafen, efterhånden som de varierer hen over fladen. Enhver anden indgang, du forbinder (en coat, der varierer, for eksempel), bruges med sin gennemsnitsværdi; panelet siger, hvilke. En udskæring fra en uigennemsigtighedstekstur viser sin form, og dens skygge er jævnt gennemsigtig. En glødende tekstur lyser på det, den vender mod, uden at blive behandlet som en lampe.

**Forskydning** flytter kun nets hjørnepunkter, så tilføj en underopdelingsmodifikator for detalje ([Modifikatorer](topic:modifiers)). Skub/træk-flader beholder deres form og får bumpene fra normalen.

:::tip
På en computer med WebGPU beregnes grafen på grafikkortet; uden det på processoren. Resultatet er det samme.
:::
