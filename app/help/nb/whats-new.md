---
title: Nytt i 0.8 og 0.8.1
summary: Et valg av renderingsmotor med filer for andre programmer, frie NURBS-flater med målt kontinuitet, en scene du beskriver for assistenten din, et materiale laget av ett bilde, et skissebilde på bakken, møblerte rom, skråstilte snitt for 3D-utskrift og utskriftskontrollen i Problemer-panelet.
keywords: nytt, hva er nytt, versjonsnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, renderingsmotor, motor, åpne i, usd, gltf, unreal, tillegg for motor, nurbs, flater, loft, sveip, kontinuitet, g0, g1, g2, sebra, step, iges, si scenen, scene, vær, tid på døgnet, årstid, assistent, materiale fra et bilde, bilde, skissebilde, møbler, møbler et rom, skrå, skråstilt snitt, del, utskriftskontroll, problemer, egenskapsrutenett, lamper, språk, inndataenheter, verktøylinjerader, dwg, live
from: e4989b17
---

Dette er endringene i ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. Dialogboksen {{ui:Render et bilde…}} kan nå sende scenen til et annet program, panelet {{ui:Overflater}} lager jevne frie flater, og en assistent du kobler til kan sette en hel scene fra én setning.

## Nytt

### Rendering

- **Et valg av motor.** {{ui:Render et bilde…}} har en liste **Motor** over Modus. Våre egne to motorer, Fast og Path tracer, er standard og fungerer overalt. Andre valg lagrer scenen som en pakke (modellen som en USD-fil, pluss en innstillingsfil med de nøyaktige materialverdiene, lampene som er på, solen, himmelen, eksponeringen og kameraet) som du kan ta med til et annet program. Et bilde tegnet av et annet program sier hvilket program og hvilken versjon som laget det. Se [Velg hvilket program som tegner bildet](topic:render-engines).
- **Åpne i et annet program.** Motorlisten kan lagre scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-prosjektmappe (`.zip`), i nettleseren og i CadCraft Studio. I Studio kan den også starte usdview eller datamaskinens eget program for filen. Se [Åpne scenen i et annet program](topic:render-open-in).
- **Send til en spillmotor fra Studio.** Studio skriver scenen inn i et Unreal Engine-prosjekt og holder det i takt ved hver sending, bare én vei. Dine egne endringer ligger i et layer som CadCraft aldri skriver til. Se [Send scenen til en spillmotor](topic:render-unreal).
- **Motorer fra tillegg.** Et tillegg kan legge til en motor i listen. En motor skrevet i JavaScript tegner i nettleseren og i Studio; en som kjører et program krever ditt ja i Studio. Se [Tegn bildet med et annet program](topic:render-other-program) og [Legg til en renderingsmotor med et tillegg](topic:render-engine-addons).
- **Si scenen.** Si «skumring, lett regn, høsttrær, folk på plassen» til den tilkoblede assistenten din, så setter ModelCraft den opp i ett steg: solen flytter seg til dato og klokkeslett slik at skyggene følger, himmelen endres, våte flater dukker opp, og trær og folk plasseres som ekte objekter på etiketter du kan skjule, flytte eller slette. Tid på døgnet, dato eller årstid, og vær (klart, overskyet, tåke, lett regn, regn, storm) virker også alene, og en senere forespørsel endrer samme scene. Tåke vises i bildet med høy kvalitet på grafikkortet; de andre motorene viser himmelen, lyset og de våte flatene. Regn tegnes ikke som fallende streker.

### Materialer

- **Et materiale fra ett bilde.** Gi ModelCraft et bilde av en flate (en vegg, et gulv, stein), så lager den et flislagt materiale: lyset over bildet jevnes ut, kantene gjøres sammenhengende, og et fargekart, et ruhetskart og et normalkart beregnes fra bildet. Det er ren bildebehandling av ditt eget bilde, uten en trent modell. Ruhet er et anslag. Et enkelt, kvadratisk bilde tatt rett forfra gir best flis; et sterkt mønster, som murstein, kan vise et svakt spøkelsesbilde der skjøten er blandet.

### Flater

- **Frie flater.** Panelet {{ui:Overflater}} lager NURBS-kurver og utrimmede flater: kurver gjennom punkter, loft, regelflater, ekstruder, roter rundt akse, sveip langs én eller to skinner, flater fra et kurvenett, lapper fra fire kanter, tilpass og bland. Hver felles kant måles som G0, G1 eller G2 (mellomrom, vinkel, kurvatursprang) på de eksakte flatene, og en kant som er dårligere enn du ba om, vises i Problemer-panelet med en **Tilpass**-reparasjon. Sebrastriper og kurvaturfarger tegnes fra de eksakte flatene. STEP- og IGES-filer går ut og kommer inn. Se [Frie flater (NURBS)](topic:nurbs-surfaces).

### Område og rom

- **Et skissebilde på bakken.** {{ui:Fil}} › {{ui:Importer et skissebilde…}} gjør et telefonbilde av en håndskisse om til kanter på bakken i den målestokken du oppgir: én gruppe, med en etikett for hver pennfarge. Papiret finnes og rettes opp på datamaskinen din, og ingenting sendes noe sted. Se [Modeller på en situasjonsplan](topic:site-plan).
- **Møbler et rom.** Velg et gulv og bruk {{ui:Organiser}} › {{ui:Møbler et rom…}}. Soverom-, stue-, spisestue-, kjøkken-, bad- eller kontormøbler plasseres etter regler, mot veggene og fritt for dører og vinduer, i én gruppe du kan fjerne i ett steg. Det er et standardoppsett for deg å gjennomgå, ikke en design. Se [Startbibliotek](topic:starter).

### 3D-utskrift

- **Skråstilte snitt.** Deling for utskrift kan skråstille snittene med opptil 60 grader, noe som gir delene mer limflate. Koblinger står vinkelrett på snittet. Se [Del en modell for utskrift](topic:print-split).
- **Utskriftskontrollen i Problemer.** Funnene fra 3D-utskriftskontrollen vises i Problemer-panelet med markører på modellen, og {{ui:Reparer}} fikser dem derfra. Se [Støtter, veggtykkelse, uthuling og reparasjon](topic:print-tools).

### I alle apper

- **Språk.** Hjelp og apper finnes på 54 språk. Ti er nye: litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filipino, swahili og usbekisk. Språk andre enn engelsk er maskinelle utkast til de er lest av en morsmålstaler, og hjelpeemner kan fortsatt være på engelsk.
- **Inndataenheter.** En styreplate, en penn, en 3D-mus, en spillkontroller og MIDI-kontroller kan styre appene, for alle eller for én.
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › Verktøylinjerader setter Bryt (som før), 2 rader eller 1 rad. En linje som ikke får plass ruller sideveis i stedet for å ta plass fra tegningen. Bryt er fortsatt standard.
- **Egenskapsrutenett.** Lampefeltene i ModelCraft bruker det felles rutenettet: kategorier som kan foldes sammen, etikett- og verdikolonner, og tettheten Kompakt. Regning som `2*450` virker fortsatt.
- **Problemer.** Panelet Problemer (advarselsknappen i programlinjen) er felles for alle appene. I ModelCraft har det utskriftskontrollen og advarslene om kontinuitet på flater.
- **Live.** En Live TeamWork-økt viser hvem som er hvor. Se [Modeller sammen med Live TeamWork](topic:work-live).
- **Tillegg.** Tillegg kan legge til renderingsmotorer, som over.
- **Koble til KI-en din.** Verktøykontrakten og sjekkene for de åtte appene består, med 454 verktøy til sammen. Ettklikkstilkobling i Studio, en hostet kobling for nettleserassistenter, din egen nøkkel i Studio og en publisert pakke er ikke lovet ennå. Appene har ingen KI av egen. Se [Bruk ModelCraft med KI-assistenter](topic:use-with-ai-assistants).

## Fikset i 0.8.1

- **DWG-klasseseksjon.** Klasseseksjonen i en DWG-fil ble lest som feil type, noe som kunne ødelegge filen ved import. Den leses riktig nå, i ModelCraft og i de andre appene som leser DWG.
- **Nettbrett i stående retning.** Ledig rutenetthøyde går til lerretet, og arkoppsettet begynner ved 760 piksler bredt eller mindre. ModelCrafts stilark har endringen også.
- **Språk i Studio.** CadCraft Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare på engelsk. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endres.

## Ikke i denne versjonen ennå

- **Ikke kodesignert.** Windows kan vise SmartScreen: velg {{ui:Mer informasjon}}, og så {{ui:Kjør likevel}}. På en Mac: høyreklikk og velg {{ui:Åpne}}. Butikkversjonene er satt på vent, og iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- Et annet program som tegner bildet uten et tillegg for renderingsmotor, panorama- eller stereokameraer og et himmelbilde gjennom et annet program, og programtillegget som åpner Unreal-scenen, finnes ikke ennå. Filene skrives; tillegget er ikke utgitt og er ikke kjørt i Unreal.
- Frie flater: G3 og klasse A måles ikke og påstås ikke, og trimming og volumlegemer kommer senere.
- Bilder fra andre programmer er ikke piksel for piksel like våre: bare kameraet, solen, lampene og eksponeringen stemmer overens.
- Rettelsen i 0.8.1 for språkbyttet i Studio er ikke testet på alle plattformer.

Alt annet står i [Ikke bygget ennå](topic:not-built-yet). For forrige utgave, se [Nytt i 0.7](topic:whats-new-0-7).
