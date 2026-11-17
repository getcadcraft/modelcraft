---
title: Lag materialer med noder
summary: Bygg et materiale av teksturer, bilder og matematikk i arbeidsområdet Shading, se det i visningen mens du jobber, og mal flater med det.
keywords: shading, bak, baking, teksturbaking, ambient occlusion, ao, krumning, normalbaking, høy poly, lav poly, lyskart, dekal, klistremerke, logo, etikett, teksturmaling, mal tekstur, pensel, materiale, materialer, materialx, mtlx, openpbr, standard surface, materialbibliotek, librarycraft, teksturset, pbr, importer teksturer, zip, cc0, dra, node, noder, nodeeditor, skyggelegger, tekstur, prosedyre, støy, sjakkbrett, voronoi, celler, bølger, murstein, fliser, tre, marmor, gradient, smuss, kantslitasje, fargerampe, blanding, bump, normalkart, ruhet, metallisitet, opasitet, utsnitt, emisjon, glød, displacement, boksprojeksjon, triplanar, uv, bilde, bildetekstur, openpbr
from: d7368b21
---

Et materiale laget i arbeidsområdet **Shading** tilhører filen. Det er en liten graf: **noder** som lager teksturer, bilder og tall, koblet til **Materialutgang**, hvis innganger er flatens utseende — grunnfarge, ruhet, metallisitet, normal, opasitet, emisjon og resten av OpenPBR-modellen. Du maler flater med det som med et hvilket som helst bibliotekmateriale, og alle endringer vises i visningen med en gang.

## Åpne den

Velg {{ui:Shading}} i listen over arbeidsområder. 3D-visningen beholder toppen av skjermen, og **nodeeditoren** tar nederst. Panelet til høyre viser filens egne materialer.

- {{ui:Nytt materiale}} lager et grått materiale med bare Materialutgang.
- **Lag en redigerbar kopi av et bibliotekmateriale** gjør murstein, tre, flis og resten om til en graf du kan endre: teksturen kommer gjennom en Bibliotektekstur-node, og ujevnhetene gjennom en Bump-node.
- {{ui:Mal med det}} maler de valgte flatene eller gruppene, eller velger materialet for malverktøyet. Malverktøyets materialer viser også filens egne under **I denne filen**.
- {{ui:Dupliser}} og {{ui:Slett}} virker på materialet du redigerer. Sletting kan ikke angres: flater malt med det viser standardfargen til du maler dem på nytt.

## Materialer fra biblioteket

Panelets **Materialbibliotek (Bibliotek)** viser bibliotekets materialer, hver med en forhåndsvisning rendret av CadCraft sin path tracer. Det er teksturskinn utgitt under CC0, med kildehenvisning til personene som laget dem.

- Klikk på ett for å hente det inn i filen (bildene følger med) og, med flater eller grupper valgt, mal dem.
- Dra et over en flate eller gruppe i visningen for å male bare den.
- Det blir ett av filens materialer: endre nodene som vanlig. Kildehenvisningen vises i panelet og blir værende i filen.

## Importer et teksturskinn

{{ui:Bilder eller en zip…}} eller {{ui:En mappe…}} under **Importer et teksturskinn** lager et materiale av et sett med kart. Kartene finnes ut fra ordene i filnavnene: color, albedo, diffuse eller basecolor; roughness (eller gloss, gjort om til roughness); metalness eller metallic; normal (OpenGL eller DirectX, fra `gl` / `dx` i navnet); height eller displacement; ambient occlusion; opacity; emission. Pakkede kart (ARM, ORM) utelates. Flisen starter på 1 × 1 m: sett den virkelige størrelsen på Materialutgang. Høyde går til displacement med skalaen på 0 — øk skalaen for å bruke det på nett.

## MaterialX

MaterialX er det åpne formatet andre 3D- og rendringsprogrammer bruker for å overføre materialer.

- {{ui:Eksporter som MaterialX…}} lagrer materialet du redigerer: verdiene, og hver tekstur som et PNG-bilde ved siden av `.mtlx`-filen (i en zip). Velg skyggeleggeren det skrives som: **OpenPBR Surface** (MaterialX 1.39, samme modell som ModelCraft bruker) eller **Standard Surface** (MaterialX 1.38, som flere programmer leser i dag). Teksturene plasseres etter UV-koordinater i meter; boks- og triplanar-plassering skrives som UV.
- {{ui:Importer MaterialX…}} (eller {{ui:Fra en mappe…}}) leser `.mtlx`-filer med OpenPBR-, Standard Surface-, UsdPreviewSurface- eller glTF PBR-skyggeleggere. Gi det bildene også, eller en zip med alt: et bilde finnes etter sti, navn, eller navnet med en annen bildetype (en `.exr` som filnavnene nevner, kan komme som en `.jpg` ved siden av den). Teksturer, normalkart, aritmetikk, blandinger og displacement kommer inn som noder; alt annet beholder sin verdi, og statuslinjen sier hva som ble utelatt.

## Dekaler

En dekal er et bilde lagt på en flate — en logo, et skilt, en etikett, en flekk — med et eget materiale.

- Sett **Bredde på ny dekal**, deretter {{ui:Plasser en dekal…}} (eller {{ui:Dekal}} på verktøylinjen), velg et PNG-, JPEG- eller WebP-bilde og klikk på en flate. Bildet projiseres på flatene der, med bevarte proporsjoner; gjennomsiktige deler av et PNG forblir gjennomsiktige.
- Den tilhører gruppen eller komponenten du klikket i og flytter med den. Den dekker flatene innenfor boksen som vender likt, og stopper ved kantene av det den ligger på.
- Hver dekal får sitt eget materiale, kalt **Dekal: <bilde>**, i filens liste: rediger det som et hvilket som helst annet (ruhet, ujevnhet, glød). {{ui:Materiale}} ved siden av dekalen åpner det.
- Ved hver dekal: bredden (høyden følger bildet), {{ui:Drei}} (en kvart omdreining) og {{ui:Slett}}. Dekaler lagres sammen med filens materialer, utenfor Angre.
- De vises i skyggelagt visning, i raske rendringer og i høykvalitetsbilder.

## Mal på teksturen

{{ui:Mal tekstur}} (eller {{ui:Mal}} under **Mal på teksturen**) gjør pekeren til en rund pensel. Dra på en flate som har ett av filens materialer: penselen maler bildet bak grunnfargen.

- På et nett maler den langs nettets UV-er (løs det ut i UV-arbeidsområdet først); på andre flater maler den tvers over flaten, så malingen gjentas med materialets flis.
- Et materiale hvis grunnfarge er en ren farge, får et nytt 512 × 512-bilde av den fargen første gang du maler det. Et materiale hvis grunnfarge kommer fra andre noder, trenger en Bilde-node koblet til Grunnfarge.
- Sett penselfarge, størrelse (i bildepiksler), styrke og hardhet i panelet. {{ui:Angre strøk}} eller Ctrl+Z (mens du maler) tar tilbake et strøk, opptil de siste 20.
- Det malte bildet lagres i filen. Bibliotekmaterialer kan ikke males: lag en redigerbar kopi først.

## Bak teksturer

**Bak teksturer** skriver det form og scenen gir en flate, til bilder langs et netts UV-er.

- Velg et nett som har UV-er (løs det ut i UV-arbeidsområdet), kryss av kartene og trykk {{ui:Bak}}:
  - **Ambient occlusion** — hvor åpent hvert punkt er: hjørner, folder og steder under andre ting blir mørkere. Alt som vises i modellen, skygger det, opp til okklusjonsavstanden.
  - **Krumning** — lys langs ytre kanter, mørk i innvendige hjørner, mellomgrå på flate og svakt buede deler, over kantbredden du setter.
  - **Normaler fra objektet med høy detaljgrad** — velg også en detaljert kopi: overflatedetaljene skrives som et normalkart for den enklere (objektet med færre trekanter blir bakt over). Søkeavstanden er hvor langt fra hverandre de to flatene kan være.
  - **Belysning** — solen på modellens sted og dato (Stil) med skyggene, pluss himmelen, som et lyskart.
- Bildene blir en del av filen og vises i Bilde-noder. Hvis materialet du redigerer har en **Smuss og kantslitasje**-node, leser den straks den nye okklusjonen og krumningen.
- Flere stråler per texel gir jevnere occlusion og belysning, og tar lengre tid. Baking kjører på datamaskinens prosessorkjerner i bakgrunnen; {{ui:Stopp bakingen}} stopper den.

## Bygg en graf

1. {{ui:Legg til en node…}} (eller {{key:Shift+A}} i nodeeditoren) legger til en node midt i editoren.
2. Dra fra en utgangsprikk (på høyre side av en node) til en inngangsprikk (på venstre side) for å koble dem. En ny kobling til en inngang erstatter den første; dra en tilkoblet inngang bort for å koble den fra.
3. Ukoblede innganger viser verdien sin: skriv et tall eller velg en farge. Innstillinger står nederst på hver node.

Dra en node på tittelen for å flytte den, dra i tomt rom for å panorere, og bruk hjulet for å zoome. {{key:Delete}} fjerner de valgte nodene eller koblingen, {{key:Mod+Z}} angrer, {{key:Mod+D}} dupliserer, {{key:F}} viser alle noder. Hver endring er ett angrertrinn i nodeeditoren. Modellens egen angring endrer ikke materialer.

| Noder | Hva de lager |
|---|---|
| Teksturkoordinater | Hvor på flisen et punkt er: gjenta det, forskyv det, drei det en kvart. |
| Verdi, Farge | Et tall, en farge. |
| Bilde | Et bilde i filen (et som fulgte med en importert modell, eller et du la til med {{ui:Legg til et bilde…}}). Velg **Farger** for et fotografi og **Data** for et ruhets- eller normalkart. |
| Bibliotektekstur | Et bibliotekmateriales tekstur, ruhet og høyde. |
| Sjakkbrett, Støy | Ruter; jevn fraktal støy med detalj, ruhet og frø. |
| Voronoi-celler, Bølger, Gradient | Celler (avstand til nærmeste punkt, kantene mellom cellene, en farge per celle); bånd på tvers, opp eller diagonalt, som sinus, sag eller trekant, bøyd av støy; lineære, kvadratiske, radiale og sfæriske gradienter. |
| Murstein, Fliser | Rader med murstein med forskyvning, eller et rutenett av fliser: farger, mørtel eller fuger, et gap og en skråkant i meter, en høyde for ujevnheter, et tilfeldig tall per brikke. |
| Tre, Marmor | Ringer langs årene med fine fibre; årer bøyd av turbulens. |
| Smuss og kantslitasje | Slitasje på utstående kanter og smuss i hulrom, fra nettets krumnings- og okklusjonsbilder ([Bak teksturer](topic:shading#bake-textures) lager dem; eller sett de to bildeinnstillingene, i nettets UV-oppsett: plasser materialet etter UV-koordinater). Uten dem endrer den ingenting. |
| Bland farger, Fargerampe, Fargetone/metning/verdi, Lysstyrke og kontrast, Inverter, Gamma, Del og kombiner RGB | Fargearbeid. |
| Matematikk, Områdeskalering | Aritmetikk på tall (addisjon, multiplikasjon, potens, glatt trinn med mer). |
| Bump, Normalkart | En normal fra en høyde (Bump) eller fra et normalkartbilde (Normalkart: velg retningen til den grønne kanalen). |

## Materialutgang

Innstillingene sier hvordan teksturen ligger på flatene:

- **Flisbredde** og **Flishøyde**: hvor mange meter én flis av teksturen dekker. Alt en graf lager, gjentas over flisen uten søm.
- **Plassert etter**: **UV-koordinater** følger flater (trykk/trekk-flater: langs hver flate; nett: deres UV-er, én UV-enhet = én flis), **Boks** projiserer fra den nærmeste av de tre aksene, **Triplanar** blander de tre projeksjonene på flater som heller (**Blandingsskarphet**: høyere gir en hardere blanding).
- **Normalstyrke** skalerer normalinngangen. **Displacement-skala** setter hvor langt displacement-inngangen flytter et netts hjørnepunkter.
- {{ui:Flere innganger}} viser de resten av OpenPBR-inngangene: coat, fuzz, subsurface, thin film, transmission og deres farger.

## I høykvalitetsbilder

Stisporeren leser grunnfarge, ruhet, metallisitet, opasitet, normal og emisjon fra grafen etter hvert som de endrer seg over flaten. Enhver annen inngang du kobler (for eksempel en coat som varierer), brukes med gjennomsnittsverdien; panelet sier hvilke. Et utsnitt fra en opasitetstekstur viser sin form, og skyggen er jevnt gjennomsiktig. En glødende tekstur lyser opp det den vender mot, uten å bli samplet som en lampe.

**Displacement** flytter hjørnepunktene til nett bare, så legg til en Subdivision-modifikator for detaljer ([Modifikatorer](topic:modifiers)). Trykk/trekk-flater beholder formen sin og får ujevnhetene fra normalen.

:::tip
På en datamaskin med WebGPU regnes grafen ut på grafikkortet; uten det, på prosessoren. Resultatet er det samme.
:::
