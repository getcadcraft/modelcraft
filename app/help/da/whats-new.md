---
title: Nyheder i 0.8 og 0.8.1
summary: Et valg af renderingsmotor med filer til andre programmer, frie NURBS-overflader med målt kontinuitet, en scene du beskriver for din assistent, et materiale lavet af ét foto, et skitsefoto på terrænet, møblerede rum, skrå snit til 3D-print og printtjekket i panelet Problemer.
keywords: hvad er nyt, nyheder, udgivelsesnoter, changelog, ændringer, 0.8, 0.8.1, version, nye funktioner, renderingsmotor, motor, åbn i, usd, gltf, unreal, add-on-motor, nurbs, overflader, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, beskriv scenen, scene, vejr, tid på dagen, årstid, assistent, materiale fra et foto, foto, skitsefoto, møbler, møbler et rum, skrå, skråt snit, opdeling, printtjek, problemer, egenskabsgitter, lamper, sprog, inputenheder, værktøjslinjerækker, dwg, live
from: e4989b17
---

Dette er ændringerne i ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02) sammenlignet med 0.7. Dialogen {{ui:Render et billede…}} kan nu sende scenen til et andet program, panelet {{ui:Overflader}} laver glatte frie overflader, og en assistent du forbinder kan sætte en hel scene op ud fra én sætning.

## Nyt

### Rendering

- **Et valg af renderingsmotor.** {{ui:Render et billede…}} har en liste **Motor** over **Tilstand**. Vores egne to motorer, Fast og Path tracer, er standard og virker overalt. De andre valg gemmer scenen som en pakke (modellen som en USD-fil, plus en indstillingsfil med de præcise materialeværdier, de lamper der er tændt, solen, himlen, eksponeringen og kameraet), så du kan tage den med til et andet program. Et billede tegnet af et andet program siger, hvilket program og hvilken version der lavede det. Se [Vælg hvilket program der tegner billedet](topic:render-engines).
- **Åbn i et andet program.** Listen Motor kan gemme scenen som en USD-fil, en glTF-fil (`.glb`) eller en Unreal-projektmappe (`.zip`), i browseren og i CadCraft Studio. I Studio kan den også starte usdview eller computerens eget program til filen. Se [Åbn scenen i et andet program](topic:render-open-in).
- **Send til en spilmotor fra Studio.** Studio skriver scenen ind i et Unreal Engine-projekt og holder det i takt ved hvert afsendelse, kun én vej. Dine egne ændringer ligger i et lag, som CadCraft aldrig skriver til. Se [Send scenen til en spilmotor](topic:render-unreal).
- **Motorer fra add-ons.** Et add-on kan tilføje en motor til listen. En motor skrevet i JavaScript tegner i browseren og i Studio; en motor der kører et program, kræver dit ja i Studio. Se [Tegn billedet med et andet program](topic:render-other-program) og [Tilføj en renderingsmotor med et add-on](topic:render-engine-addons).
- **Beskriv scenen.** Skriv til din forbundne assistent "skumring, let regn, efterårstræer, folk på pladsen", så opsætter ModelCraft det i ét trin: solen flyttes til dato og klokkeslæt, så skyggerne følger med, himlen ændres, våde flader vises, og træer og personer placeres som rigtige objekter på tags, som du kan skjule, flytte eller slette. Tid på dagen, dato eller årstid og vejr (klart, overskyet, tåge, let regn, regn, storm) virker også alene, og en senere anmodning ændrer den samme scene. Tåge vises i billedet i høj kvalitet på grafikkortet; de andre motorer viser himlen, lyset og de våde flader. Regn tegnes ikke som faldende striber.

### Materialer

- **Et materiale fra ét foto.** Giv ModelCraft et foto af en flade (en væg, et gulv, sten), og det laver et flisemateriale: lyset hen over fotoet udjævnes, kanterne gøres så de passer sammen, og et farvekort, et ruhedskort og et normalkort udregnes ud fra billedet. Det er ren billedbehandling af dit eget billede uden nogen trænet model. Ruhed er et skøn. Et enkelt, kvadratisk og lige forfra taget foto giver den bedste flise; et stærkt mønster som mursten kan vise et svagt spøgelsesbillede der hvor samlingen blødes sammen.

### Overflader

- **Frie overflader.** Panelet {{ui:Overflader}} laver NURBS-kurver og overflader uden beskæring: kurver gennem punkter, loft, lineær, ekstruder, drej, sweep langs én eller to skinner, overflader fra et kurvenet, flader ud fra fire kanter, tilpas og blend. Hver fælles kant måles som G0, G1 eller G2 (hul, vinkel, krumningsspring) på de præcise overflader, og en kant der er dårligere end du bad om, vises i panelet Problemer med en rettelse **Tilpas**. Zebrastriber og krumningsfarver tegnes ud fra de præcise overflader. STEP- og IGES-filer kan sendes ud og læses ind. Se [Frie overflader (NURBS)](topic:nurbs-surfaces).

### Terræn og rum

- **Et skitsefoto på terrænet.** {{ui:Fil}} › {{ui:Importér et skitsefoto…}} laver et telefonfoto af en håndtegning om til kanter på terrænet i den målestok du angiver: én gruppe, med et tag for hver pennefarve. Papiret findes og rettes op på din computer, og intet sendes nogen steder hen. Se [Model på en situationsplan](topic:site-plan).
- **Møbler et rum.** Vælg en etage og brug {{ui:Organisér}} › {{ui:Møbler et rum…}}. Soveværelses-, stue-, spisestue-, køkken-, badeværelses- eller kontormøbler placeres efter regler, op mod væggene og uden for døre og vinduer, i én gruppe som du kan fjerne i ét trin. Det er et standardudlæg, som du skal gennemgå, ikke et design. Se [Startbibliotek](topic:starter).

### 3D-print

- **Skrå snit.** Opdeling til print kan skråne sine snit med op til 60 grader, hvilket giver delene mere limflade. Forbindere står lodret på snittet. Se [Opdel en model til print](topic:print-split).
- **Printtjekket i Problemer.** Fundene fra 3D-printtjekket vises i panelet Problemer med markører på modellen, og **Reparér** retter dem derfra. Se [Understøtninger, vægtykkelse, udhulning og reparation](topic:print-tools).

### I alle apps

- **Sprog.** Hjælp og apps findes på 54 sprog. Ti er nye: litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk. Sprog andet end engelsk er maskinoversættelser, indtil en modersmålstaler har læst dem, og hjælpeemner kan stadig være på engelsk.
- **Inputenheder.** Et trackpad, en pen, en 3D-mus, en spilcontroller og MIDI-kontrollere kan styre apps, for dem alle eller for én.
- **Værktøjslinjerækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › Værktøjslinjerækker sætter Bryd linjen (som før), 2 rækker eller 1 række. En bjælke der ikke passer, scroller sidelæns i stedet for at tage plads fra tegningen. Bryd linjen er stadig standard.
- **Egenskabsgitter.** ModelCraft's lampefelter bruger det fælles gitter: sammenklappelige kategorier, kolonner for navn og værdi og tæthed Kompakt. Indtastet regning som `2*450` virker stadig.
- **Problemer.** Panelet Problemer (advarselsknappen i appbjælken) deles af alle apps. I ModelCraft rummer det printtjekket og advarsler om overfladekontinuitet.
- **Live.** En Live TeamWork-session viser hvem der er hvor. Se [Model sammen med Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons kan tilføje renderingsmotorer, som ovenfor.
- **Forbind din AI.** Værktøjskontrakten og kontrollerne i de otte apps består, med 454 værktøjer i alt. Forbindelse med ét klik i Studio, en hostet forbindelse for browserassistenter, din egen nøgle i Studio og en udgivet pakke er ikke lovet endnu. Apps indeholder ingen AI selv. Se [Brug ModelCraft med AI-assistenter](topic:use-with-ai-assistants).

## Rettet i 0.8.1

- **Afsnittet DWG-klasser.** Afsnittet med klasser i en DWG-fil blev læst som forkert type, hvilket kunne ødelægge filen ved import. Det læses rigtigt nu, i ModelCraft og i de andre apps der læser DWG.
- **Tablets i portræt.** Ledig gitterhøjde går til lærredet, og arkoplægget starter ved 760 pixel i bredden eller mindre. ModelCraft's typografiark har ændringen også.
- **Sprog i Studio.** CadCraft Studio og de pakkede udgaver kan skifte sprog mens de kører; før var de kun på engelsk. Det er endnu ikke testet på alle platforme: giv os besked hvis sproget ikke skifter.

## Ikke med i denne version endnu

- **Ikke kodesignerede.** Windows kan vise SmartScreen: vælg {{ui:Mere info}} og derefter {{ui:Kør alligevel}}. På en Mac højreklikker du og vælger {{ui:Åbn}}. Butiksudgaver er sat på pause, og iPad- og iPhone-udgaven blev ikke bygget om til 0.8.1.
- Et andet program der tegner billedet uden et add-on til renderingsmotor, panorama- eller stereokameraer og en himmelbillede via et andet program, og plugin'et der åbner Unreal-scenen, findes endnu ikke. Filerne skrives; plugin'et er ikke udgivet og er ikke kørt i Unreal.
- Frie overflader: G3 og klasse A måles ikke og påstås ikke, og beskæring og massive legemer kommer senere.
- Billeder fra andre programmer er ikke pixel for pixel som vores: kun kameraet, solen, lamperne og eksponeringen stemmer overens.
- Rettelsen i 0.8.1 af sprogskiftet i Studio er ikke testet på alle platforme.

Alt andet findes under [Ikke lavet endnu](topic:not-built-yet). Om den forrige udgivelse, se [Nyheder i 0.7](topic:whats-new-0-7).
