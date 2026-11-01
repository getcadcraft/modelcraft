---
title: ModelCraft-skærmen
summary: En rundvisning i værktøjslinjen, panelerne på hver side, 3D-visningen og statuslinjen, med de navne, der står på skærmen.
keywords: skærm, layout, værktøjslinje, paneler, oversigt, objektinfo, stil, scener, statuslinje, værdiboks, enheder, brugerflade, rundvisning
from: 4a9a4516
---

Oppefra og ned: applinjen, værktøjslinjen, de tre kolonner (venstre paneler, 3D-visning, højre paneler) og statuslinjen.

## Applinjen

Den slanke linje allerøverst tilhører alle CadCraft-apps. Den har appens navn og version, {{ui:Om ModelCraft}}, skærmtilstandsknappen og skiftet {{ui:Papir}} / {{ui:Model}}.

- {{ui:Papir}} er det lyse tema og {{ui:Model}} det mørke. 3D-visningen skifter farver, så de passer; din model ændres ikke.
- Skærmtilstandsknappen (den står først som {{ui:Fuld skærm}}) og {{key:Ctrl+Shift+F}} skifter mellem tre tilstande: normal, fuld skærm og fuld skærm med linjerne skjult. Når linjerne er skjult, peger du på skærmens øverste kant (eller trykker dér) for at hente dem tilbage. {{key:Esc}} forlader fuld skærm.

:::note
{{key:Ctrl+Shift+F}} bruger Control-tasten på alle computere, også en Mac. På iPhone, hvor browsere ikke har fuld skærm, skjuler og viser knappen kun linjerne.
:::

## Værktøjslinjen

Værktøjslinjen er delt i mærkede grupper. Hold markøren over en knap for at se dens navn og tast.

Yderst til venstre skifter listen {{ui:Arbejdsområde}}, hvad værktøjslinjen og det højre panel er til: {{ui:Model}} (skub/træk-modellering, rundvisningen nedenfor), {{ui:Net}} ([redigér et net](topic:mesh-edit)), {{ui:Kurve}} ([kurveobjekter](topic:curves)), {{ui:UV}} ([læg UV'er ud](topic:uv)), {{ui:Skulptér}} ([skulptér](topic:sculpt)), {{ui:Shading}} ([materialer lavet med noder](topic:shading)), {{ui:Animér}} ([animér](topic:animate)) og {{ui:Render}} ([render i visningen](topic:render#render-in-the-view)).

| Gruppe | Knapper |
|---|---|
| Fil | {{ui:Ny}}, {{ui:Åbn}}, {{ui:Gem}}, {{ui:Importér}}, {{ui:Eksportér}} (en menu med formater) |
| Tegn | {{ui:Linje}} ({{key:L}}), {{ui:Rektangel}} ({{key:R}}), {{ui:Cirkel}} ({{key:C}}), {{ui:Polygon}} ({{key:N}}) |
| Rediger | {{ui:Vælg}} ({{key:Space}}), {{ui:Skub/træk}} ({{key:P}}), {{ui:Flyt}} ({{key:M}}), {{ui:Roter}} ({{key:Q}}), {{ui:Skalér}} ({{key:S}}), {{ui:Viskelæder}} ({{key:E}}), {{ui:Målebånd}} ({{key:T}}) |
| Organisér | {{ui:Komponent}} ({{key:G}}), {{ui:Gruppe}} ({{key:Shift+G}}), {{ui:Eksplodér}} |
| Rediger | {{ui:Fortryd}} ({{key:Mod+Z}}), {{ui:Gentag}} ({{key:Mod+Y}}), {{ui:Kopiér}} ({{key:Mod+C}}), {{ui:Sæt ind}} ({{key:Mod+V}}), {{ui:Mere}} (en menu: klip, kopiér, sæt ind, sæt ind på samme sted {{key:Mod+Shift+V}}, duplikér {{key:Mod+D}}, slet, vælg alle, fravælg alle og tastestilen) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Panorér}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Udstrækning}} ({{key:Shift+Z}}), {{ui:Visninger}} (en menu) |

De viste taster er skub/træk-tasterne; hvis stilen Modellør er valgt i [ModelCraft-indstillinger](topic:settings), viser værktøjstipsene de taster i stedet. Det værktøj, du bruger, vises nedtrykt. På en smal skærm ruller værktøjslinjen sidelæns.

Menuen {{ui:Visninger}} har {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Højre}}, {{ui:Bagside}}, {{ui:Venstre}} og {{ui:Bund}}, hver tilpasset til modellen, og {{ui:Perspektiv}}, som skifter mellem perspektivisk og parallel projektion.

## 3D-visningen

Midten af skærmen. De røde, grønne og blå linjer er akserne: rød og grøn ligger på jorden, blå peger op, og **nord er den grønne akse**. Hvor de mødes, er origo.

- Når du starter, viser et kort med titlen »Begynd at modellere« de første par taster. Det forsvinder, når du vælger et tegneværktøj eller klikker i visningen.
- Mens et værktøj arbejder, viser visningen **inferensmarkører**: små farvede figurer, hvor markøren fanger (en grøn cirkel ved et endepunkt, en cyan ved et midtpunkt, en rød firkant på en kant, en blå rombe på en flade). Se [Inferens og fang](topic:inference).
- Valgte ting bliver blå. En flade set bagfra er blågrå.
- Når du åbner en gruppe for at redigere den, toner alt uden for den ud, og akserne flytter til gruppens egne akser.
- Når en model har scener, vises en række scenefaner øverst i visningen.
- Slip en fil et vilkårligt sted på visningen for at åbne eller importere den.

## De venstre paneler

**{{ui:Oversigt}}** viser grupperne og komponenterne i modellen, indlejret, som de er indlejret i modellen. En komponent, der bruges mere end én gang, viser hvor mange gange, som »Vindue (4)«.

- Klik på et navn for at vælge det. Dobbeltklik for at åbne det til redigering.
- **Find efter navn** (vises, når der er to eller flere grupper) beholder kun de rækker, hvis navn matcher, sammen med de grupper, de ligger i. {{key:Esc}} rydder det.
- **Øjet** yderst i en række skjuler eller viser den gruppe eller komponent (som {{ui:Rediger}} › {{ui:Mere}} › {{ui:Skjul}} gør). Et tag-ikon betyder, at den er skjult af sit [tag](topic:tags).
- **Omdøb på stedet:** klik på en række, tryk derefter {{key:F2}}, skriv, og tryk {{key:Enter}} ({{key:Esc}} beholder det gamle navn).
- **Træk en række** hen på midten af en anden gruppes række for at flytte den ind i den gruppe, hen på en rækkes øverste eller nederste kant for at sætte den lige før eller efter den række, eller hen på overskriften {{ui:Oversigt}} for at flytte den til øverste niveau. Den bliver, hvor den er i modellen, og beholder sin farve, sit tag og sit navn. En gruppe kan ikke komme ind i sig selv. Hver flytning er ét fortryd-trin. Se [Omarranger i Oversigt](topic:groups-components#rearrange-in-the-outliner).
- Mens du redigerer inde i en gruppe, står der en linje »Redigerer: Model › …«, og en knap {{ui:Luk gruppe}} vises. Den lukker alle åbne niveauer på én gang.

**{{ui:Komponenter}}** viser hver komponentdefinition med, hvor mange kopier der er placeret (»3×«), og en knap {{ui:Placér}}, der tilføjer endnu en kopi, hvor du klikker.

## De højre paneler

**{{ui:Objektinfo}}** beskriver det, der er valgt. Dens overskrift skifter og siger, hvad det er:

| Overskrift | Viser | Knapper |
|---|---|---|
| Model (intet valgt) | Flader, kanter, grupper, komponenter og hvor mange der er placeret, hjælpelinjer, samlet størrelse | {{ui:Slet alle hjælpelinjer}} (når der er hjælpelinjer) |
| Flade | Areal, antal huller | {{ui:Vend fladen om}} |
| Kant | Længde | ingen |
| Gruppe eller Komponent | Navn (skriv for at omdøbe), hvor mange gange den er placeret, om den er et lukket massivt legeme, dens volumen, dens størrelse | {{ui:Rediger}}, {{ui:Eksplodér}}, {{ui:Gør unik}} (en komponent placeret mere end én gang), {{ui:Lav komponent}} (en gruppe) |
| Hjælpepunkt eller hjælpelinje | intet | {{ui:Slet}} |
| Flere ting | Hvor mange flader, kanter, grupper og hjælpelinjer, fladernes samlede areal | {{ui:Lav komponent (G)}}, {{ui:Lav gruppe (Shift+G)}} |

**{{ui:Stil}}** bestemmer, hvordan modellen tegnes: {{ui:Flader}} ({{ui:Skygget}}, {{ui:Skjulte linjer}}, {{ui:Trådmodel}}, {{ui:Røntgen}}), {{ui:Vis kanter}} og {{ui:Solskygger}} med solens dato, tid og sted. Se [Stilarter og solskygger](topic:styles-shadows).

**{{ui:Scener}}** gemmer visninger: {{ui:Tilføj scene}}, listen over scener samt {{ui:Forrige}}, {{ui:Afspil}} og {{ui:Næste}}. Se [Gem visninger som scener](topic:scenes).

## Statuslinjen

Nederst, fra venstre mod højre:

1. **Tippet:** hvad værktøjet vil have næste gang, eller hvad markøren fanger (»Endepunkt«, »På rød akse«).
2. **Meddelelser:** hvad der netop skete (»Fortrød skub/træk.«, »site.dxf importeret: 1697 kanter på jorden, i en gruppe.«) eller hvorfor noget ikke virkede.
3. **Værdiboksen:** dens mærkat skifter med værktøjet ({{ui:Længde}}, {{ui:Mål}}, {{ui:Radius}}, {{ui:Sider}}, {{ui:Afstand}}, {{ui:Vinkel}}, {{ui:Skalér}}, {{ui:Forskyd}}). Den viser den aktuelle størrelse, mens du arbejder, og tager imod det, du skriver. Se [Skriv præcise størrelser i værdiboksen](topic:value-box).
4. **Tastestilen:** {{ui:Taster: Skub/træk}} eller {{ui:Taster: Modellør}} skifter tastaturgenvejene og museknapperne på én gang (det samme som i [ModelCraft-indstillinger](topic:settings)).
5. **{{ui:Fang}} og {{ui:Kollision}}:** fang til punkter, kanter og akser, og massive legemer, der stopper, hvor de rører. Overstreget = slået fra. Klik for at skifte. Se [ModelCraft-indstillinger](topic:settings).
6. **Enhedsvælgeren:** den enhed, længder vises i. Se [Kom i gang](topic:getting-started#check-the-units-first).

## På en smal skærm

Under ca. 760 pixel i bredden (en telefon eller et smalt vindue) beholder 3D-visningen skærmen. Værktøjslinjen er én række, der ruller sidelæns, og panelerne åbnes som ark fra linjen nederst på skærmen.
