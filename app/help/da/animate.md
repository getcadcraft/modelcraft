---
title: Animér alle egenskaber, form dem som kurver og bland klip
summary: Animér-arbejdsområdet sætter nøgler for et objekts placering, drejning og størrelse, en lampes lysstyrke, spredning og farve, linsen og et nets formnøgler; armaturer bøjer et net med knogler og malede vægte; IK og begrænsninger får knogler og objekter til at nå, kigge på, kopiere, holde sig inden for grænser, hænge fra eller følge andre; stive legemer falder, stables og kolliderer og bages til nøgler; drivere sætter en værdi ud fra andre; tidslinjens Kurver-visning former hver ændring med Bézier-greb og cyklusser, og dens Klip-visning gemmer animationer som handlinger, som du placerer igen og blander.
keywords: fysik, stift legeme, stive legemer, simulering, simulér, falde, tyngdekraft, kollision, stable, hoppe, friktion, bage, bagt, ik, invers kinematik, begrænsning, begrænsninger, se på, spor, kopiér transformationer, kopiér placering, kopiér rotation, begræns rotation, grænser, underordnet, forælder, følg bane, bane, pol, fabrik, kæde, armatur, armaturer, rig, rigging, knogler, knogle, skelet, hud, skinning, vægte, vægtmaling, vertex-grupper, automatiske vægte, knoglevarme, positur, positurtilstand, dual quaternion, lineær blanding, formnøgler, formnøgle, morph, morphs, morph-mål, blend shapes, ansigt, udtryk, driver, drivere, udtryk, Animér-arbejdsområdet, animér, animation, nøgleramme, nøgle, nøgler, egenskab, egenskaber, transformation, placering, rotation, størrelse, lampe, lys, lysstyrke, farve, linse, synsfelt, fov, grafeditor, kurver, kurve, bezier, greb, tangent, interpolation, cyklus, cyklusser, gentag, løkke, ping pong, forskydning, dope sheet, vælg nøgler, boksvalg, kopiér nøgler, indsæt nøgler, stræk nøgler, skalér nøgler, klip, handlinger, nla, bland, blanding, indflydelse, gem
from: 16d8e12f
---

[Tidslinjen](topic:animation) flytter kameraet og hele grupper og komponenter. **Animér**-arbejdsområdet nøgler mere end det, og tidslinjen får to ekstra visninger, hvor du kan forme og genbruge det, du har nøglet.

## Åbn den

Vælg {{ui:Animér}} i listen over arbejdsområder på værktøjslinjen. Tidslinjen åbner under visningen, værktøjslinjen viser Animér-grupperne ({{ui:Nøgler}}, {{ui:Afspil}}, {{ui:Tidslinje}}), og panelet til højre lister, hvad du kan sætte nøgler til ved playhead.

## Sæt nøgle til en egenskab

Panelet lister, ved playhead:

- **Valgt objekt**: dets {{ui:Placér}}, {{ui:Drejning (°)}} og {{ui:Størrelse}}, tre tal hver. Skriv et tal og tryk {{key:Enter}}: det sættes som nøgle ved playhead, og objektet flytter sig dertil. Rombet ved siden af en række sætter nøgle til værdien, som den er nu; et udfyldt rombe betyder, at der allerede er en nøgle ved playhead.
- **Lamper**: hver lampes {{ui:Lysstyrke (lm)}}, {{ui:Spredning (°)}} (spotlamper) og {{ui:Farve}}.
- **Kamera**: {{ui:Linsevinkel (°)}}, til zoom mens kameraet bevæger sig.

{{ui:Nøgle til transformation}} (eller {{key:I}}) sætter nøgle til placering, drejning og størrelse for hver valgt gruppe eller komponent på én gang; {{ui:Nøgle til kamera}} (eller {{key:K}}) sætter nøgle til kameraet. Med {{ui:Autonøgle}} slået til får en gruppe, hvis placering, drejning og størrelse er sat nøgle til på denne måde, en ny nøgle, hver gang du flytter den.

Drejninger er tre vinkler, om X, derefter Y, derefter Z. En drejning, der er sat nøgle til over 180°, fortsætter i samme retning rundt (190° forbliver 190°, ikke −170°), så et hjul kan dreje flere gange.

:::tip
En gruppe nøglet med {{ui:Nøgle til valg}} på tidslinjen har nøgler til hele placeringen. Kurveknappen på dens række gør dem til kurver for placering, drejning og størrelse (den samme placering ved hver nøgle), så du kan forme dem i {{ui:Kurver}}.
:::

## Formnøgler (morphs)

En **formnøgle** er en anden form af det samme [net](topic:meshes): et smil på et ansigt, en døres bule, et bøjet blad. Dens skyder blander fra nettet, som det er (0), til den form (1); flere nøgler lægges sammen.

1. Vælg et net i Animér-arbejdsområdet: panelet viser dets {{ui:Formnøgler}}.
2. Klik på {{ui:Tilføj formnøgle}}. ModelCraft går til [net-arbejdsområdet](topic:mesh-edit) med den nye nøgle under redigering: flyt punkter, ekstruder, skulpturér — ændr nettet til den form, du vil have.
3. Vend tilbage til {{ui:Animér}} og klik på {{ui:Færdig}}. Nettet går tilbage, som det var, og nøglen beholder din ændring.

Træk derefter nøglens skyder (eller skriv en værdi) for at blande den ind. Rombet sætter værdien som nøgle ved playhead, så en formnøgle kan vokse og toner ud over tid; når den har et spor, sættes en ny værdi som nøgle ved playhead. Blyanten redigerer nøglens form igen (nettet viser den fuldt indtil {{ui:Færdig}}; {{ui:Annuller}} lader nøglen være, som den var), øjet slår nøglen fra, og skraldespanden fjerner den.

Et punkt, du tilføjer, mens du redigerer en nøgle, hører til selve nettet: det bliver, hvor du satte det, i alle former.

:::note
Formnøgler flytter nettet før dets [modifikatorer](topic:modifiers): en Subdivision-modifikator udglatter den blandede form. Renderede billeder og videoer viser nøglerne ved hvert billede.
:::

## Armaturer: knogler der bøjer et net

Et **armatur** er et sæt knogler inde i et [net](topic:meshes). Stil knoglerne, og nettet følger med, hvert punkt så meget, som dets **vægte** siger.

1. Vælg nettet i Animér-arbejdsområdet og klik på {{ui:Tilføj et armatur}} i panelet (eller {{ui:Tilføj knogle}} i gruppen {{ui:Rig}}): den første knogle løber op midt i nettet fra dets fod.
2. Med en knogle valgt tilføjer {{ui:Tilføj en underknogle}} den næste fra dens spids. Sæt enhver knogles {{ui:Hoved}}, {{ui:Spids}}, {{ui:Rul (°)}} og hvad den {{ui:Hænger fra}} i panelet; en knogle, der hænger fra en anden, flytter sig med den. Fjern markeringen ved {{ui:Flytter nettet}} for en knogle, der kun styrer andre.
3. Klik på {{ui:Automatiske vægte}}: hver knogle tager fat i de punkter, der er tættest på den, og grebet fordeles glat over nettet, så punkterne mellem to knogler deler dem. {{ui:Kun nærmeste knogler}} er en hurtigere og hårdere deling.

**Positur** knoglerne med {{ui:Positur}} ({{key:P}}): klik på en knogle for at vælge den, træk for at dreje den om visningens akse, {{key:Shift}}-træk for at flytte den. Eller skriv dens {{ui:Placér}}, {{ui:Drejning (°)}} og {{ui:Størrelse}} under {{ui:Positur}}; drejninger er i knoglens egne akser, fra der, hvor den hviler. Rombene og {{ui:Sæt nøgle på hele posituren}} sætter nøgle til positueren ved playhead; når en knogle har nøgler, sættes en nøgle der, når du stiller den. {{ui:Nulstil denne knogle}} og {{ui:Nulstil posituren}} sætter knoglerne tilbage i hvile.

**Mal vægte** ({{key:W}}) for den valgte knogle: nettet vises i hvile, og hver flade er farvet efter, hvor meget den knogle holder den — rød alt, blå intet. Mal for at tilføje greb ({{key:Mod}} fjerner det, {{key:Shift}} udglatter); {{ui:Størrelse (px)}} og {{ui:Styrke}} sætter penslen. Med {{ui:Lad hvert punkts vægte give 1 samlet}} tager det at give én knogle mere det samme fra de andre. Hvert streg er ét trin i modellens fortryd.

{{ui:Hud}} vælger, hvordan et punkt mellem knogler bevæger sig: {{ui:Lineær (hurtig)}} blander knoglernes bevægelser og klemmer et bøjet led en smule; {{ui:Dobbelt kvaternion (bevarer volumen ved led)}} drejer punktet rundt om leddet i stedet, så en albue eller et knæ beholder sin tykkelse (en knogles {{ui:Størrelse}} strækker så ikke huden).

:::note
Formnøgler kommer først, så armaturet, så [modifikatorerne](topic:modifiers). Visningen, billeder og videoer viser alle det stillede net; et nets vægte gemmes med det, og knoglerne og deres positur gemmes med animationen.
:::

## IK og begrænsninger

En **begrænsning** flytter en knogle eller et objekt efter dets nøgler, efter en regel. Vælg objektet (eller, i et armatur, knoglen) og tilføj en under {{ui:Begrænsninger af …}}; flere kører i den rækkefølge, de står (pilene ændrer den), og hver har {{ui:Hvor meget}} (0 til 1, sat nøgle til med sit rombe som enhver egenskab) og en til/fra-knap.

| Begrænsning | Til | Hvad den gør |
|---|---|---|
| {{ui:Række (IK)}} | Knogler | Knoglen og de knogler, den hænger fra ({{ui:Knogler i kæden}}), bøjer, så dens spids når målet. Med to knogler og en {{ui:Pol (bøjningen peger mod den)}} peger albuen eller knæet mod polen; længere kæder bøjer glat. Uden for rækkevidde peger kæden lige mod målet. |
| {{ui:Se på}} | Begge | Drejer, så {{ui:Akse der peger}} vender mod målet, og holder {{ui:Akse der holdes opad}} så tæt på op, som den kan. |
| {{ui:Kopiér transformationer}} | Begge | Overtager målets placering, drejning eller størrelse — dem, der er markeret. |
| {{ui:Grænser}} | Begge | Holder sin egen placering, drejning (grader) eller størrelse mellem et {{ui:min}} og en {{ui:maks}} pr. akse; lad et par stå tomt for at lade den akse være fri. |
| {{ui:Underordnet af}} | Begge | Flytter sig med målet, som om den hang fra det, fra der hvor de begge stod, da du valgte målet. |
| {{ui:Følg bane}} | Objekter | Sidder på et [kurveobjekt](topic:curves) ved {{ui:Langs kurven}} (0 dens start, 1 dens slut; sæt nøgle til det for at køre hen) og vender langs den med {{ui:Drej langs kurven}}. |

Et mål er et andet objekt i den åbne gruppe, en knogle i samme armatur eller {{ui:Et punkt}}, du skriver (et objekts punkt er i modellens koordinater, en knogles i dets nets). For et IK-ben: sæt målet, hvor foden skal være, og sæt nøgle til målet — eller sæt nøgle til {{ui:Hvor meget}} for at overlade benet mellem nøglerne og IK'en.

:::tip
Et objekt, der kigger på et, der følger en bane, ser det på banen: ModelCraft finder målene først, uanset rækkefølgen af objekterne.
:::

## Fysik: falder, stables og kolliderer

Lad objekter falde og støde ind i hinanden, og behold resultatet som nøgler.

1. Vælg en gruppe, komponent eller et net og sæt dets {{ui:Stift legeme}} under {{ui:Fysik}}: {{ui:Falder og støder sammen}} (det flytter sig) eller {{ui:Bliver, hvor det er, er i vejen}} (et bord, en væg, en rampe). Giv et faldende objekt dets {{ui:Form}} — {{ui:Boks (dets rammer)}} eller {{ui:Kugle (rundt om dets rammer)}} — samt dets {{ui:Masse (kg)}}, {{ui:Friktion}} og {{ui:Hop}} (0 dunker, 1 hopper lige så højt tilbage).
2. Under {{ui:Hele modellen}} sæt {{ui:Fra (s)}} og {{ui:Til (s)}}, {{ui:Tyngdekraft (m/s², nedad)}} og om der er {{ui:Et terræn at lande på}} (og dets højde).
3. Klik på {{ui:Bag fysik}} (i panelet eller gruppen {{ui:Fysik}}). Hvert faldende objekt får en nøgle til placering, drejning og størrelse på hvert billede mellem de to tider; afspil det som enhver anden animation.

Bag igen erstatter disse nøgler; {{ui:Fjern bagte nøgler}} tager dem af. Objekterne starter i hvile, der hvor deres nøgler, kurver og begrænsninger sætter dem ved {{ui:Fra (s)}} (en nøglet bevægelse før det fortsætter ikke ind i faldet). Flere {{ui:Trin pr. billede}} holder høje stakke mere stabile; statuslinjen siger, når noget stadig bevæger sig til sidst.

:::note
Former er bokse og kugler rundt om hvert objekts rammer; en boks rører med sine hjørner, kantmidter og fladmidter, så bokse stables og vælter, som du ville forvente. Stof, væsker, led mellem objekter og præcise former er ikke bygget.
:::

## Drivere

En **driver** sætter en formnøgle ud fra andre ting i stedet for i hånden: åbn en nøgles driver (lommeregner-knappen), skriv et **udtryk**, og giv hvert navn i det, det læser ({{ui:Læser}}): tiden i sekunder, billedet, en placerings placering, drejning eller størrelse langs X, Y eller Z, en lampes lysstyrke eller en anden formnøgle. For eksempel, med `v` der læser en døres drejning om Z, åbner `clamp(v / 90, 0, 1)` en form, mens døren åbner.

Udtryk bruger tal, navnene, `+ - * / % ^` og parenteser samt funktionerne `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` med `pi` og `e`. En fejl bliver peget ud og ændrer intet. En drevet nøgles skyder viser driverens værdi; driveren vinder over nøglens spor, indtil du fjerner den.

## Vælg og ændr nøgler (Nøgler-visning)

{{ui:Nøgler}} viser en række pr. spor: kameraet, hver bevægende gruppe og hver egenskab ("Lampe 2 · Lysstyrke (lm)"; egenskabsnøgler er runde).

- Klik på en nøgle for at vælge den; {{key:Shift}}-klik eller {{key:Mod}}-klik tilføjer eller fjerner nøgler fra valget. {{key:Shift}}-træk hen over rækkerne tegner en boks, der tilføjer alle nøgler i den.
- Træk en valgt nøgle for at flytte dem alle; {{key:Left}} / {{key:Right}} flytter dem et billede ({{key:Shift}}: ti).
- {{key:Mod+C}} kopierer de valgte nøgler, {{key:Mod+V}} indsætter dem fra playhead på de samme spor (en anden ModelCraft-fane kan også indsætte dem).
- {{ui:Stræk}} spreder de valgte nøgler ud fra playhead med tallet ved siden af (2 = dobbelt så langt fra hinanden; 0.5 trækker dem sammen).
- Udjævningslisten sætter, hvordan hver valgt nøgle bevæger sig videre.

## Form kurverne (Kurver-visning)

{{ui:Kurver}} er en graf over hvert tal over tid: tid ud ad, værdi op. Sæt flueben ved de kurver, der skal vises i listen til venstre (X, Y og Z er rød, grøn og blå).

- Klik på en nøgle (en firkant) for at vælge den, {{key:Shift}}-klik for flere, eller træk en boks. Træk en valgt nøgle for at ændre dens tid og værdi; med flere valgt flytter træk dem langs tiden.
- En valgt nøgle viser sine to **greb**. Træk et for at forme kurven på den side. {{ui:Greb}} siger, hvordan de opfører sig: {{ui:Automatisk}} (en glat kurve gennem nøglerne omkring den), {{ui:Peger mod næste nøgle}}, {{ui:Justeret}} (de to bliver på en lige linje, så kurven ingen hjørne har) eller {{ui:Fri}}.
- {{ui:Fra de valgte nøgler}} sætter, hvordan hver valgt nøgle bevæger sig videre til den næste: {{ui:Kurve (greb)}}, {{ui:Udglat}}, {{ui:Jævn}}, {{ui:Langsomt ind og ud}} eller {{ui:Hold}}.
- {{ui:Før}} og {{ui:Efter}} sætter, hvad en kurve gør uden for sine nøgler: {{ui:Hold}} (bliver ved første eller sidste værdi), {{ui:Gentag}}, {{ui:Frem og tilbage}} eller {{ui:Gentag og fortsæt}} (hver gentagelse starter, hvor den sidste sluttede: et hjul ruller videre, en gående går videre).
- Hjulet zoomer ({{key:Mod}}: kun værdier; {{key:Shift}}: kun tid); træk med midterknappen eller med {{key:Alt}} for at panorere; {{ui:Vis alle}} eller {{key:Home}} tilpasser alle viste kurver. Klik i tomt rum for at flytte playhead dertil. {{key:Delete}} sletter de valgte nøgler.

Greb holdes fra at krydse hinanden i tid, så en kurve aldrig løber baglæns.

## Genbrug animationer (Klip-visning)

Et **klip** afspiller en gemt animation (en **handling**) på tidslinjen. Klip blandes i rækkefølge, de nederste rækker over de øverste; tidslinjens egne spor ligger over alle klip.

1. Sæt nøgler til grupper og lamper som sædvanligt, klik derefter på {{ui:Lav et klip}} i {{ui:Klip}} og giv handlingen et navn. Sporene bliver til handlingen, og et klip afspiller den, hvor de var (kameraet bliver på tidslinjen).
2. For at bruge den igen, vælg handlingen og klik på {{ui:Tilføj klip}}: et nyt klip starter ved playhead.
3. Træk et klip langs dets række for at flytte det; klik på det for at sætte {{ui:Start (s)}}, {{ui:Hastighed}} (2 = dobbelt så hurtigt), {{ui:Gentagelser}}, {{ui:Hvor meget}} (0 til 1), {{ui:Blanding}} ({{ui:Erstat}}, eller {{ui:Læg oven på}} klipene før det), {{ui:Uden for klippet}} (intet, hold dets slutning, eller hold begge ender) og {{ui:Slå lyden fra}}. Pilene ændrer rækkefølgen; skraldespanden fjerner det (en handling, som intet klip bruger længere, går med).

Et klip med mindre end fuld {{ui:Hvor meget}} blander sig ind fra det, der er under det: klippet før det, eller lampen eller placeringen, som den er uden animationen.

## Hvad der afspilles hvor

| Hvad | I visningen | I en renderet video |
|---|---|---|
| Kameranøgler, linsevinkel med kameranøgler | Ja | Ja |
| Placering, drejning og størrelse (nøgler, kurver, klip) | Ja | Ja |
| Lampe-lysstyrke, spredning og farve | Ja | Ikke endnu: videoen bruger lamperne, som de er, når den starter (se [hvad der ikke er bygget endnu](topic:not-built-yet)) |
| Linsevinkel uden kameranøgler | Ja | Ikke endnu: sæt også nøgle til kameraet |
| Formnøgler og drivere | Ja | Ja |
| Armaturer (stillede net) | Ja | Ja |
| IK og begrænsninger | Ja | Ja |
| Bagt fysik (nøgler) | Ja | Ja |

Alt gemmes i `.modelcraft`-filen sammen med resten af animationen, og tidslinjens {{ui:Fortryd}} og {{ui:Gentag}} tager alt tilbage.
