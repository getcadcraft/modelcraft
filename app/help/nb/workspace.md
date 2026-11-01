---
title: ModelCraft-skjermen
summary: En omvisning i verktøylinjen, panelene på hver side, 3D-visningen og statuslinjen, med navnene slik de står på skjermen.
keywords: skjerm, oppsett, verktøylinje, paneler, oversikt, elementinfo, stil, scener, statuslinje, verdiboks, enheter, grensesnitt, omvisning
from: 4a9a4516
---

Ovenfra og ned: applinjen, verktøylinjen, de tre kolonnene (venstre paneler, 3D-visning, høyre paneler) og statuslinjen.

## Applinjen

Den slanke linjen helt øverst tilhører alle CadCraft-appene. Den har appnavnet og versjonen, {{ui:Om ModelCraft}}, skjermmodusknappen og bryteren {{ui:Papir}} / {{ui:Modell}}.

- {{ui:Papir}} er det lyse temaet og {{ui:Modell}} det mørke. 3D-visningen endrer fargene sine tilsvarende; modellen din endres ikke.
- Skjermmodusknappen (den står først som {{ui:Fullskjerm}}) og {{key:Ctrl+Shift+F}} går gjennom tre moduser: normal, fullskjerm, og fullskjerm med linjene skjult. Med linjene skjult peker du på øverste kant av skjermen (eller trykker der) for å få dem tilbake. {{key:Esc}} forlater fullskjerm.

:::note
{{key:Ctrl+Shift+F}} bruker Ctrl-tasten på alle datamaskiner, også Mac. På iPhone, der nettlesere ikke har fullskjerm, skjuler og viser knappen bare linjene.
:::

## Verktøylinjen

Verktøylinjen er delt inn i merkede grupper. Hold pekeren over en knapp for å se navnet og tasten.

Lengst til venstre bytter listen {{ui:Arbeidsområde}} hva verktøylinjen og høyre panel er til for: {{ui:Modell}} (trykk/trekk-modellering, omvisningen nedenfor), {{ui:Nett}} ([rediger et nett](topic:mesh-edit)), {{ui:Kurve}} ([kurveobjekter](topic:curves)), {{ui:UV}} ([legg ut UV-er](topic:uv)), {{ui:Skulpter}} ([skulpter](topic:sculpt)), {{ui:Shading}} ([materialer laget med noder](topic:shading)), {{ui:Animer}} ([animer](topic:animate)) og {{ui:Render}} ([render i visningen](topic:render#render-in-the-view)).

| Gruppe | Knapper |
|---|---|
| Fil | {{ui:Ny}}, {{ui:Åpne}}, {{ui:Lagre}}, {{ui:Importer}}, {{ui:Eksporter}} (en meny med formater) |
| Tegn | {{ui:Linje}} ({{key:L}}), {{ui:Rektangel}} ({{key:R}}), {{ui:Sirkel}} ({{key:C}}), {{ui:Mangekant}} ({{key:N}}) |
| Endre | {{ui:Velg}} ({{key:Space}}), {{ui:Trykk/trekk}} ({{key:P}}), {{ui:Flytt}} ({{key:M}}), {{ui:Roter}} ({{key:Q}}), {{ui:Skaler}} ({{key:S}}), {{ui:Viskelær}} ({{key:E}}), {{ui:Målebånd}} ({{key:T}}) |
| Organiser | {{ui:Komponent}} ({{key:G}}), {{ui:Gruppe}} ({{key:Shift+G}}), {{ui:Eksploder}} |
| Rediger | {{ui:Angre}} ({{key:Mod+Z}}), {{ui:Gjør om}} ({{key:Mod+Y}}), {{ui:Kopier}} ({{key:Mod+C}}), {{ui:Lim inn}} ({{key:Mod+V}}), {{ui:Mer}} (en meny: klipp ut, kopier, lim inn, lim inn på samme sted {{key:Mod+Shift+V}}, dupliser {{key:Mod+D}}, slett, velg alle, fjern utvalg og tastestilen) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Panorer}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Utstrekning}} ({{key:Shift+Z}}), {{ui:Visninger}} (en meny) |

Tastene som vises er trykk/trekk-tastene; når stilen Modeller er valgt i [ModelCraft-innstillinger](topic:settings), viser verktøytipsene de tastene i stedet. Verktøyet du bruker vises nedtrykket. På en smal skjerm ruller verktøylinjen sidelengs.

Menyen {{ui:Visninger}} har {{ui:Iso}}, {{ui:Topp}}, {{ui:Front}}, {{ui:Høyre}}, {{ui:Bak}}, {{ui:Venstre}} og {{ui:Bunn}}, hver tilpasset modellen, og {{ui:Perspektiv}}, som bytter mellom perspektiv og parallellprojeksjon.

## 3D-visningen

Midten av skjermen. De røde, grønne og blå linjene er aksene: rød og grønn ligger på bakken, blå peker opp, og **nord er den grønne aksen**. Der de møtes, er origo.

- Når du starter, lister et kort med tittelen «Begynn å modellere» de første tastene. Det forsvinner når du velger et tegneverktøy eller klikker i visningen.
- Mens et verktøy arbeider, viser visningen **slutningsmarkører**: små fargede former der pekeren fanger (en grønn sirkel ved et endepunkt, en cyan ved et midtpunkt, en rød firkant på en kant, en blå rombe på en flate). Se [Slutning og fangst](topic:inference).
- Valgte ting blir blå. En flate sett bakfra er blågrå.
- Når du åpner en gruppe for redigering, tones alt utenfor den ned, og aksene flyttes til gruppens egne akser.
- Når en modell har scener, vises en rad med scenefaner øverst i visningen.
- Slipp en fil hvor som helst på visningen for å åpne eller importere den.

## Venstre paneler

**{{ui:Oversikt}}** lister gruppene og komponentene i modellen, nestet slik de er nestet i modellen. En komponent som brukes mer enn én gang, viser hvor mange ganger, for eksempel «Vindu (4)».

- Klikk på et navn for å velge det. Dobbeltklikk for å åpne det for redigering.
- **Søk etter navn** (vises når det er to eller flere grupper) beholder bare radene hvis navn stemmer, sammen med gruppene de ligger i. {{key:Esc}} tømmer det.
- **Øyet** på slutten av en rad skjuler eller viser den gruppen eller komponenten (som {{ui:Rediger}} › {{ui:Mer}} › {{ui:Skjul}} gjør). Et etikettikon betyr at den er skjult av [etiketten](topic:tags) sin.
- **Gi nytt navn på stedet:** klikk på en rad, trykk {{key:F2}}, skriv og trykk {{key:Enter}} ({{key:Esc}} beholder det gamle navnet).
- **Dra en rad** på midten av en annen gruppes rad for å flytte den inn i den gruppen, på øvre eller nedre kant av en rad for å sette den rett før eller etter den raden, eller på overskriften {{ui:Oversikt}} for å flytte den til øverste nivå. Den blir værende der den er i modellen, og beholder farge, etikett og navn. En gruppe kan ikke gå inn i seg selv. Hver flytting er ett angretrinn. Se [Ordne om i oversikten](topic:groups-components#rearrange-in-the-outliner).
- Mens du redigerer inni en gruppe, står det en linje «Redigerer: Modell › …», og en knapp {{ui:Lukk gruppe}} vises. Den lukker alle åpne nivåer på én gang.

**{{ui:Komponenter}}** lister hver komponentdefinisjon med hvor mange kopier som er plassert («3×») og en knapp {{ui:Plasser}} som legger til en kopi til der du klikker.

## Høyre paneler

**{{ui:Elementinfo}}** beskriver det som er valgt. Overskriften endres for å si hva det er:

| Overskrift | Viser | Knapper |
|---|---|---|
| Modell (ingenting valgt) | Flater, kanter, grupper, komponenter og hvor mange som er plassert, hjelpelinjer, samlet størrelse | {{ui:Slett alle hjelpelinjer}} (når det finnes hjelpelinjer) |
| Flate | Areal, antall hull | {{ui:Snu flaten}} |
| Kant | Lengde | ingen |
| Gruppe eller komponent | Navn (skriv for å endre), hvor mange ganger den er plassert, om den er et lukket volumlegeme, volumet, størrelsen | {{ui:Rediger}}, {{ui:Eksploder}}, {{ui:Gjør unik}} (en komponent plassert mer enn én gang), {{ui:Lag komponent}} (en gruppe) |
| Hjelpepunkt eller hjelpelinje | ingenting | {{ui:Slett}} |
| Flere ting | Hvor mange flater, kanter, grupper og hjelpelinjer, samlet areal av flatene | {{ui:Lag komponent (G)}}, {{ui:Lag gruppe (Shift+G)}} |

**{{ui:Stil}}** angir hvordan modellen tegnes: {{ui:Flater}} ({{ui:Skygget}}, {{ui:Skjulte linjer}}, {{ui:Trådramme}}, {{ui:Røntgen}}), {{ui:Vis kanter}} og {{ui:Solskygger}} med dato, tid og sted for solen. Se [Stiler og solskygger](topic:styles-shadows).

**{{ui:Scener}}** lagrer visninger: {{ui:Legg til scene}}, listen over scener, og {{ui:Forrige}}, {{ui:Spill av}} og {{ui:Neste}}. Se [Lagre visninger som scener](topic:scenes).

## Statuslinjen

Langs bunnen, fra venstre mot høyre:

1. **Tipset**: hva verktøyet vil ha neste, eller hva pekeren fanger mot («Endepunkt», «På rød akse»).
2. **Meldinger**: hva som nettopp skjedde («Angret trykk/trekk.», «Importerte site.dxf: 1697 kanter på bakken, i en gruppe.») eller hvorfor noe ikke fungerte.
3. **Verdiboksen**: etiketten endres med verktøyet ({{ui:Lengde}}, {{ui:Måltilsettinger}}, {{ui:Radius}}, {{ui:Sider}}, {{ui:Avstand}}, {{ui:Vinkel}}, {{ui:Skala}}, {{ui:Forskyvning}}). Den viser den levende størrelsen mens du arbeider, og tar imot det du skriver. Se [Skriv nøyaktige størrelser i verdiboksen](topic:value-box).
4. **Tastestilen**: {{ui:Taster: Trykk/trekk}} eller {{ui:Taster: Modeller}} bytter tastatursnarveiene og museknappene på én gang (det samme som i [ModelCraft-innstillinger](topic:settings)).
5. **{{ui:Fang}} og {{ui:Kollisjon}}**: fangst mot punkter, kanter og akser, og volumlegemer som stopper der de berører hverandre. Overstrøket = av. Klikk for å bytte. Se [ModelCraft-innstillinger](topic:settings).
6. **Enhetsvelgeren**: enheten lengder vises i. Se [Kom i gang](topic:getting-started#check-the-units-first).

## På en smal skjerm

Under omtrent 760 piksler bredde (en telefon, eller et smalt vindu) beholder 3D-visningen skjermen. Verktøylinjen er én rad som ruller sidelengs, og panelene åpnes som ark fra linjen nederst på skjermen.
