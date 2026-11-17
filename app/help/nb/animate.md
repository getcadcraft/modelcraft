---
title: Animer alle egenskaper, form dem som kurver og bland klipp
summary: Animer-arbeidsområdet setter nøkler for et objekts plassering, dreining og størrelse, en lampes lysstyrke, spredning og farge, linsen og et netts formnøkler; skjelett bøyer et nett med bein og malte vekter; IK og betingelser får bein og objekter til å nå frem, se på, kopiere, holde seg innenfor grenser, henge fra eller følge andre; stive legemer faller, stables og kolliderer og bakes til nøkler; drivere setter en verdi ut fra andre; kurvevisningen på tidslinjen former hver endring med Bézier-håndtak og sykluser, og klippvisningen lagrer animasjoner som handlinger du kan plassere på nytt og blande.
keywords: fysikk, stivt legeme, stive legemer, simulering, simulere, slippe, falle, tyngdekraft, kollidere, kollisjon, stable, sprett, friksjon, bake, bakt, ik, invers kinematikk, betingelse, betingelser, se på, spor til, sikte, kopier transformasjoner, kopier plassering, kopier rotasjon, begrens rotasjon, grenser, barn av, forelder, følg bane, bane, pol, fabrik, kjede, skjelett, rigg, rigging, bein, hud, skinning, vekter, vektmaling, vertex-grupper, automatiske vekter, benvarme, posering, posemodus, dual kvaternion, lineær blanding, formnøkler, formnøkkel, morf, morfer, blandeformer, ansikt, uttrykk, driver, drivere, animer-arbeidsområdet, animer, animasjon, nøkkel, nøkler, egenskap, egenskaper, transformasjon, plassering, rotasjon, størrelse, lampe, lys, lysstyrke, farge, linse, synsfelt, grafredigerer, kurver, kurve, bezier, håndtak, tangent, interpolasjon, syklus, sykluser, gjenta, sløyfe, ping pong, forskyvning, nøkkeloversikt, velg nøkler, boksvalg, kopier nøkler, lim inn nøkler, strekk nøkler, skaler nøkler, klipp, handlinger, nla, bland, innflytelse, lagre midlertidig
from: 16d8e12f
---

Den [tidslinjen](topic:animation) flytter kameraet og hele grupper og komponenter. **Animer**-arbeidsområdet setter nøkler for mer enn det, og tidslinjen får to ekstra visninger for å forme og gjenbruke det du har satt nøkler for.

## Åpne den

Velg {{ui:Animer}} i arbeidsområdelisten på verktøylinjen. Tidslinjen åpnes under visningen, verktøylinjen viser animasjonsgruppene ({{ui:Nøkler}}, {{ui:Spill av}}, {{ui:Tidslinje}}), og panelet til høyre viser hva du kan sette nøkkel for ved avspillingshodet.

## Sett nøkkel for en egenskap

Panelet viser, ved avspillingshodet:

- **Valgt objekt**: dets {{ui:Plasser}}, {{ui:Dreining (°)}} og {{ui:Størrelse}}, tre tall hver. Skriv inn et tall og trykk {{key:Enter}}: det settes som nøkkel ved avspillingshodet, og objektet flytter seg dit. Diamanten ved siden av en rad setter nøkkel for verdien slik den er nå; en fylt diamant betyr at det allerede finnes en nøkkel ved avspillingshodet.
- **Lamper**: hver lampes {{ui:Lysstyrke (lm)}}, {{ui:Spredning (°)}} (spotlamper) og {{ui:Farge}}.
- **Kamera**: {{ui:Linsevinkel (°)}}, for en zoom mens kameraet beveger seg.

{{ui:Nøkkel for transformasjon}} (eller {{key:I}}) setter nøkkel for plassering, dreining og størrelse for alle valgte grupper eller komponenter samtidig; {{ui:Nøkkel for kamera}} (eller {{key:K}}) setter nøkkel for kameraet. Med {{ui:Autonøkkel}} på får en gruppe der plassering, dreining og størrelse er satt med nøkler, en ny nøkkel hver gang du flytter den.

Dreininger er tre vinkler, om X, deretter Y, deretter Z. En dreining satt med nøkkel over 180° fortsetter samme vei rundt (190° blir 190°, ikke −170°), så et hjul kan snurre flere ganger.

:::tip
En gruppe som er satt med nøkler med {{ui:Nøkkel for valgte}} på tidslinjen, har nøkler for hele plasseringen. Kurveknappen på raden gjør dem om til kurver for plassering, dreining og størrelse (samme plassering ved hver nøkkel), slik at du kan forme dem i {{ui:Kurver}}.
:::

## Formnøkler (morfer)

En **formnøkkel** er en annen form av samme [nett](topic:meshes): et smil i et ansikt, en dørs bulk, et bøyd blad. Skyveknappen blander fra nettet slik det er (0) til den formen (1); flere nøkler legges sammen.

1. Velg et nett i Animer-arbeidsområdet: panelet viser dets {{ui:Formnøkler}}.
2. Klikk {{ui:Legg til formnøkkel}}. ModelCraft går til [Nett-arbeidsområdet](topic:mesh-edit) med den nye nøkkelen under redigering: flytt punkter, ekstruder, skulpter — endre nettet til formen du vil ha.
3. Gå tilbake til {{ui:Animer}} og klikk {{ui:Ferdig}}. Nettet går tilbake slik det var, og nøkkelen beholder endringen din.

Dra deretter skyveknappen for nøkkelen (eller skriv inn en verdi) for å blande den inn. Diamanten setter verdien som nøkkel ved avspillingshodet, slik at en nøkkel kan vokse og falme over tid; når den har et spor, settes en ny verdi som nøkkel ved avspillingshodet. Blyanten redigerer formen til nøkkelen igjen (nettet viser den fullt ut til {{ui:Ferdig}}; {{ui:Avbryt}} lar nøkkelen være som den var), øyet slår nøkkelen av, søppelbøtta fjerner den.

Et punkt du legger til mens du redigerer en nøkkel, hører til selve nettet: det blir der du satte det, i alle former.

:::note
Formnøkler flytter nettet før dets [modifikatorer](topic:modifiers): en underinndelingsmodifikator glatter den blandede formen. Renderte bilder og videoer viser nøklene ved hvert bilde.
:::

## Skjelett: bein som bøyer et nett

Et **skjelett** er et sett med bein inne i et [nett](topic:meshes). Still inn beinene, og nettet følger med, hvert punkt så mye som vektene sier.

1. Velg nettet i Animer-arbeidsområdet og klikk {{ui:Legg til et skjelett}} i panelet (eller {{ui:Legg til bein}} i gruppen {{ui:Rigg}}): det første beinet går opp midt i nettet fra foten.
2. Med et bein valgt legger {{ui:Legg til et barnebein}} til neste fra spissen. Sett beinets {{ui:Hode}}, {{ui:Spiss}}, {{ui:Rull (°)}} og hva det {{ui:Henger fra}} i panelet; et bein som henger fra et annet, beveger seg med det. Fjern haken ved {{ui:Flytter nettet}} for et bein som bare styrer andre.
3. Klikk {{ui:Automatiske vekter}}: hvert bein tar tak i punktene nærmest seg, og grepet sprer seg jevnt over nettet, slik at punktene mellom to bein deler dem. {{ui:Bare nærmeste bein}} er en raskere og hardere deling.

**Still inn** beinene med {{ui:Posering}} ({{key:P}}): klikk et bein for å velge det, dra for å dreie det om visningens akse, {{key:Shift}}-dra for å flytte det. Eller skriv inn {{ui:Plasser}}, {{ui:Dreining (°)}} og {{ui:Størrelse}} under {{ui:Posering}}; dreininger er i beinets egne akser, fra der det hviler. Diamantene og {{ui:Sett nøkkel for hele poseringen}} setter nøkkel for posituren ved avspillingshodet; når et bein har nøkler, settes det med nøkkel der når du poserer det. {{ui:Tilbakestill dette beinet}} og {{ui:Tilbakestill poseringen}} setter beinene tilbake i hvile.

**Mal vekter** ({{key:W}}) for valgt bein: nettet vises i hvile, og hver flate er farget etter hvor mye det beinet holder den — rødt alt, blått ingenting. Mal for å legge til grep ({{key:Mod}} fjerner det, {{key:Shift}} glatter); {{ui:Størrelse (px)}} og {{ui:Styrke}} setter penselen. Med {{ui:La hvert punkts vekter summere seg til 1}} tar det å gi ett bein mer fra de andre. Hvert strøk er ett steg i modellens angre.

{{ui:Hud}} velger hvordan et punkt mellom bein beveger seg: {{ui:Lineær (rask)}} blander beinenes bevegelser og klemmer litt sammen et bøyd ledd; {{ui:Duale kvaternioner (beholder volum i ledd)}} dreier punktet rundt leddet i stedet, slik at en albue eller et kne beholder tykkelsen sin ({{ui:Størrelse}} for et bein strekker da ikke huden).

:::note
Formnøkler kommer først, deretter skjelettet, deretter [modifikatorene](topic:modifiers). Visningen, bilder og videoer viser alle det posete nettet; vektene til et nett lagres med det, og beinene og posituren med animasjonen.
:::

## IK og betingelser

En **betingelse** flytter et bein eller et objekt etter nøklene sine, etter en regel. Velg objektet (eller, i et skjelett, beinet) og legg til en under {{ui:Betingelser for …}}; flere kjører i den rekkefølgen de står (pilene endrer den), og hver har {{ui:Hvor mye}} (0 til 1, satt med nøkkel med diamanten som alle andre egenskaper) og en av/på-bryter.

| Betingelse | For | Hva den gjør |
|---|---|---|
| {{ui:Strekk mot (IK)}} | Bein | Beinet og beinene det henger fra ({{ui:Bein i kjeden}}) bøyer seg slik at spissen når målet. Med to bein og en {{ui:Pol (bøyen peker mot den)}} peker albuen eller kneet mot polen; lengre kjeder bøyer seg jevnt. Utenfor rekkevidde peker kjeden rett mot målet. |
| {{ui:Se på}} | Begge | Dreier slik at {{ui:Akse som peker}} vender mot målet, og holder {{ui:Akse som holdes opp}} så nær opp som den kan. |
| {{ui:Kopier transformasjoner}} | Begge | Tar målets plassering, dreining eller størrelse — de som er avkrysset. |
| {{ui:Grenser}} | Begge | Holder sin egen plassering, dreining (grader) eller størrelse mellom en {{ui:min}} og en {{ui:maks}} per akse; la et par stå tomt for å la den aksen være fri. |
| {{ui:Barn av}} | Begge | Beveger seg med målet som om den hang fra det, fra der de begge var da du valgte målet. |
| {{ui:Følg bane}} | Objekter | Sitter på et [kurveobjekt](topic:curves) ved {{ui:Langs kurven}} (0 er starten, 1 er slutten; sett nøkkel for å reise) og vender langs den med {{ui:Drei langs kurven}}. |

Et mål er et annet objekt i den åpne gruppen, et bein i samme skjelett, eller {{ui:Et punkt}} du skriver inn (et objekts punkt er i modellens koordinater, et beins i nettets). For et IK-ben: plasser målet der foten skal være og sett nøkkel for målet, eller sett nøkkel for {{ui:Hvor mye}} for å overlate benet mellom nøklene og IK-en.

:::tip
Et objekt som ser på et som følger en bane, ser det på banen: ModelCraft finner målene først, uansett rekkefølgen på objektene.
:::

## Fysikk: falle, stable og kollidere

La objekter falle og støte inn i hverandre, og behold resultatet som nøkler.

1. Velg en gruppe, komponent eller et nett, og sett dets {{ui:Stivt legeme}} under {{ui:Fysikk}}: {{ui:Faller og kolliderer}} (det beveger seg) eller {{ui:Blir stående, er i veien}} (et bord, en vegg, en rampe). Gi et fallende objekt sin {{ui:Form}} — {{ui:Boks (omrisset)}} eller {{ui:Kule (rundt omrisset)}} — sin {{ui:Masse (kg)}}, {{ui:Friksjon}} og {{ui:Sprett}} (0 dunker, 1 spretter tilbake like høyt).
2. Under {{ui:Hele modellen}} setter du {{ui:Fra (s)}} og {{ui:Til (s)}}, {{ui:Tyngdekraft (m/s², nedover)}} og om det skal være {{ui:Et underlag å lande på}} (og dets høyde).
3. Klikk {{ui:Bak fysikk}} (i panelet eller gruppen {{ui:Fysikk}}). Hvert fallende objekt får en nøkkel for plassering, dreining og størrelse på hvert bilde mellom de to tidspunktene; spill det av som vanlig animasjon.

Å bake på nytt erstatter disse nøklene; {{ui:Fjern bakte nøkler}} tar dem bort. Objektene starter i hvile, der nøklene, kurvene og betingelsene deres setter dem ved {{ui:Fra (s)}} (en bevegelse med nøkler før det fortsetter ikke inn i fallet). Flere {{ui:Steg per bilde}} holder høye stabler mer stabile; statuslinjen sier når noe fortsatt beveger seg til slutt.

:::note
Former er bokser og kuler rundt hvert objekts omriss; en boks berører med hjørnene, kantmidtene og flatemidtene, slik at bokser stables og velter som du ville forvente. Stoff, væsker, ledd mellom objekter og eksakte former er ikke bygget.
:::

## Drivere

En **driver** setter en formnøkkel ut fra andre ting i stedet for for hånd: åpne en nøkkels driver (kalkulatorknappen), skriv et **uttrykk**, og gi hvert navn i det det leser ({{ui:Leser}}): tiden i sekunder, bildet, en plassering, dreining eller størrelse langs X, Y eller Z, en lampes lysstyrke, eller en annen formnøkkel. For eksempel, med `v` som leser en dørs dreining om Z, åpner `clamp(v / 90, 0, 1)` en form når døren åpnes.

Uttrykk bruker tall, navnene, `+ - * / % ^` og parenteser, og funksjonene `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` med `pi` og `e`. En feil blir påpekt og endrer ingenting. Skyveknappen til en nøkkel som styres, viser driverens verdi; driveren vinner over nøklenes spor til du fjerner den.

## Velg og endre nøkler (Nøkler-visningen)

{{ui:Nøkler}} viser én rad per spor: kameraet, hver bevegelig gruppe og hver egenskap («Lampe 2 · Lysstyrke (lm)»; egenskapsnøkler er runde).

- Klikk en nøkkel for å velge den; {{key:Shift}}-klikk eller {{key:Mod}}-klikk legger til eller fjerner nøkler fra valget. {{key:Shift}}-dra over radene tegner en boks som legger til alle nøklene i den.
- Dra en valgt nøkkel for å flytte dem alle; {{key:Left}} / {{key:Right}} flytter dem ett bilde ({{key:Shift}}: ti).
- {{key:Mod+C}} kopierer de valgte nøklene, {{key:Mod+V}} limer dem inn fra avspillingshodet på de samme sporene (en annen ModelCraft-fane kan også lime dem inn).
- {{ui:Strekk}} sprer de valgte nøklene utover fra avspillingshodet med tallet ved siden av (2 = dobbelt så langt fra hverandre; 0.5 trekker dem sammen).
- Listen for {{ui:Jevn fart}} setter hvordan hver valgt nøkkel beveger seg videre.

## Form kurvene (Kurver-visningen)

{{ui:Kurver}} er en graf over hvert tall over tid: tid bortover, verdi oppover. Kryss av kurvene som skal vises i listen til venstre (X, Y og Z er rød, grønn og blå).

- Klikk en nøkkel (en firkant) for å velge den, {{key:Shift}}-klikk for flere, eller dra en boks. Dra en valgt nøkkel for å endre tidspunkt og verdi; med flere valgt flytter dra dem langs tiden.
- En valgt nøkkel viser sine to **håndtak**. Dra ett for å forme kurven på den siden. {{ui:Håndtak}} sier hvordan de oppfører seg: {{ui:Automatisk}} (en jevn kurve gjennom nøklene rundt), {{ui:Peker mot neste nøkkel}}, {{ui:Justert}} (de to ligger på en rett linje, slik at kurven ikke har noe hjørne) eller {{ui:Fri}}.
- {{ui:Fra de valgte nøklene}} setter hvordan hver valgt nøkkel beveger seg videre til den neste: {{ui:Kurve (håndtak)}}, {{ui:Jevn}}, {{ui:Jevn fart}}, {{ui:Rolig inn og ut}} eller {{ui:Hold}}.
- {{ui:Før}} og {{ui:Etter}} setter hva en kurve gjør utenfor sine nøkler: {{ui:Hold}} (blir på første eller siste verdi), {{ui:Gjenta}}, {{ui:Frem og tilbake}}, eller {{ui:Gjenta og fortsett}} (hver gjentakelse starter der den forrige sluttet: et hjul fortsetter å rulle, en gående fortsetter å gå).
- Hjulet zoomer ({{key:Mod}}: bare verdier, {{key:Shift}}: bare tid); dra med midtknappen eller med {{key:Alt}} for å panorere; {{ui:Vis alle}} eller {{key:Home}} tilpasser alle viste kurver. Klikk på tomt rom for å flytte avspillingshodet dit. {{key:Delete}} sletter de valgte nøklene.

Håndtakene holdes fra å krysse hverandre i tid, slik at en kurve aldri går baklengs.

## Gjenbruk animasjoner (Klipp-visningen)

Et **klipp** spiller en lagret animasjon (en **handling**) på tidslinjen. Klipp blandes i rekkefølge, de nederste radene over de øverste; tidslinjens egne spor går over alle klipp.

1. Sett nøkler for gruppene og lampene som vanlig, klikk deretter {{ui:Lag et klipp}} i {{ui:Klipp}} og gi handlingen et navn. Sporene blir til handlingen, og et klipp spiller den der de var (kameraet blir på tidslinjen).
2. For å bruke den igjen, velg handlingen og klikk {{ui:Legg til klipp}}: et nytt klipp starter ved avspillingshodet.
3. Dra et klipp langs raden for å flytte det; klikk på det for å sette {{ui:Start (s)}}, {{ui:Hastighet}} (2 = dobbelt så raskt), {{ui:Gjentakelser}}, {{ui:Hvor mye}} (0 til 1), {{ui:Blanding}} ({{ui:Erstatt}}, eller {{ui:Legg oppå}} av klippene før det), {{ui:Utenfor klippet}} (ingenting, hold slutten, eller hold begge ender) og {{ui:Demp}}. Pilene endrer rekkefølgen; søppelbøtta fjerner det (en handling som ingen klipp bruker lenger, går med).

Et klipp med mindre enn full {{ui:Hvor mye}} blander seg fra det som er under: klippet før det, eller lampen eller plasseringen slik den er uten animasjonen.

## Hva spiller hvor

| Hva | I visningen | I en renderet video |
|---|---|---|
| Kameranøkler, linsevinkel med kameranøkler | Ja | Ja |
| Plassering, dreining og størrelse (nøkler, kurver, klipp) | Ja | Ja |
| Lampens lysstyrke, spredning og farge | Ja | Ikke ennå: videoen bruker lampene slik de er når den starter (se [hva som ikke er bygget ennå](topic:not-built-yet)) |
| Linsevinkel uten kameranøkler | Ja | Ikke ennå: sett nøkkel for kameraet også |
| Formnøkler og drivere | Ja | Ja |
| Skjeletter (posete nett) | Ja | Ja |
| IK og betingelser | Ja | Ja |
| Bakt fysikk (nøkler) | Ja | Ja |

Alt lagres i `.modelcraft`-filen sammen med resten av animasjonen, og {{ui:Angre}} og {{ui:Gjør om}} på tidslinjen tar tilbake hva som helst av det.
