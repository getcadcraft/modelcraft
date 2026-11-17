---
title: Fra andre modelleringsprogrammer
summary: Hvordan vaner fra push/pull-modellering passer til ModelCraft, tast for tast, og forskjellene som lurer folk.
keywords: bytte, migrere, kjent, forskjeller, push pull-modellerer, skp, snarveier, vaner, sammenligne, målebokser, oversikt, elementinfo
from: 74ffd4ac
---

Hvis du har modellert i SketchUp, vil ModelCraft føles kjent: den samme ideen om flater og push/pull, de samme verktøybokstavene, en verdiboks du skriver i uten å klikke, inferens med røde, grønne og blå akser, grupper, komponenter, en Oversikt, Elementinfo og scener. Denne siden lister hva som kan overføres direkte og, enda viktigere, hva som ikke kan det.

## Vaner som følger med

| Du er vant til | I ModelCraft |
|---|---|
| Trykk Space for Velg, L for Linje, R for Rektangel, C for Sirkel | Det samme: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Trykk P for Trykk/trekk, M for Flytt, Q for Roter, S for Skaler, E for Viskelær, T for Målebånd | Det samme: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Trykk O for Roter visning, H for Panorer, Z for Zoom, Shift+Z for Zoom utstrekning | Det samme: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Trykk G for å lage en komponent | Det samme: {{key:G}}. {{key:Shift+G}} lager en gruppe |
| Skriv inn i målekassen uten å klikke på den | Det samme, i verdiboksen nederst. Trykk {{key:Enter}} |
| Skriv `4m,3m` for et rektangel, `12s` for sider | Det samme |
| Skriv `3x` eller `/3` etter en kopi med Flytt | Det samme; `*3` virker også |
| Skriv `[x,y,z]` eller `<dx,dy,dz>` for et punkt eller en forskyvning | Det samme |
| Skriv et bart tall i en modell i arkitektoniske tommer og få tommer | Det samme |
| Midtdra for å rotere visningen, Shift+midtdra for å panorere, hjul for å zoome ved markøren | Det samme |
| Dobbeltklikk med Trykk/trekk for å gjenta avstanden | Det samme |
| Piltaster for å låse rød, grønn, blå og parallell | Det samme: {{key:Right}} rød, {{key:Left}} grønn, {{key:Up}} blå, {{key:Down}} parallell |
| Hold Shift for å låse en inferens | Det samme |
| Ctrl (Option på en Mac) for å kopiere mens du flytter | {{key:Ctrl}}, {{key:Mod}} eller {{key:Alt}}, på hvilken som helst datamaskin |
| Shift for å veksle, Ctrl for å legge til, Shift+Ctrl for å fjerne fra valget | De samme tastene; på en Mac bruk {{key:Mod}} der det står Ctrl |
| Venstre-til-høyre-vindu, høyre-til-venstre-krysning | Det samme |
| Et Mål-verktøy for å merke lengder | {{key:D}}, og mer: skriv en ny lengde inn i en måltilsetting, så endrer modellen størrelse til den. Se [Mål og endre størrelse](topic:dimensions) |
| Dobbeltklikk en flate for flate pluss kanter; tredoblklikk for alt som henger sammen | Det samme |
| Dobbeltklikk en gruppe for å redigere den; Esc for å lukke | Det samme |
| Tegn en linje over en flate for å dele den; slett en kant mellom flater i samme plan for å lime dem sammen | Det samme |
| Skyv en vindusrektangel gjennom en vegg for å kutte den | Det samme |
| Bakflater i blågrå; Snu flater | Samme farge; {{ui:Snu flaten}} i {{ui:Elementinfo}} |
| Scener som faner over visningen, Page Up og Page Down | Det samme, med {{ui:Spill av}} i {{ui:Scener}}-panelet |
| Skygger fra dato, klokkeslett, breddegrad og lengdegrad, med nord på grønt | Det samme, i {{ui:Stil}}-panelet |

## Forskjeller som lurer folk

### Lagring er en nedlasting

Det finnes ingen Lagre som overskriver filen du åpnet, ingen Lagre som-dialog med navn, ingen automatisk lagring og ingen sikkerhetskopifil. {{ui:Lagre}} ({{key:Mod+S}}) laster ned en ny `.modelcraft`-fil hver gang, vanligvis til nedlastingsmappen din. Lagre ofte, og gi nytt navn til eller flytt filene selv. Se [Åpne, lagre, importer og eksporter](topic:files).

### Den importerer .skp-filer, men lagrer dem ikke

{{ui:Importer}} leser SketchUp-filer med ModelCraft sin egen leser, i siden: grupper, komponenter, farger, teksturer på flater, etiketter og myke kanter følger med. Se [Filformater i detalj](topic:formats#skp-files). ModelCraft kan ikke lagre `.skp`: for å gå tilbake, eksporter Collada fra ModelCraft og importer det i SketchUp.

### Ingen høyreklikk-meny

Høyredra panorerer; et høyreklikk gjør ingenting. Kommandoene du ville funnet i hurtigmenyen, er i {{ui:Elementinfo}} ({{ui:Snu flaten}}, {{ui:Rediger}}, {{ui:Eksploder}}, {{ui:Gjør unik}}, {{ui:Lag komponent}}) og i verktøylinjens gruppe {{ui:Organiser}}.

### Enheter ligger i statuslinjen

Det finnes ingen Modellinfo eller malvalg. Enhetsvelgeren er nederst til høyre. En ny modell starter i fot og tommer i USA og i millimeter ellers, etter språkinnstillingen i nettleseren din. Desimaler skrives alltid med punktum: `2.5m`, aldri `2,5m`, fordi komma alltid skiller verdier.

### Maling har egne materialer

{{ui:Mal}} ({{key:B}}) maler heldekkende farger og materialene i {{ui:Materialer}}-seksjonen: murstein, kledning, takbelegg, tre, stein og mer, tegnet av ModelCraft. Du kan ikke laste inn ditt eget bilde som materiale ennå; teksturer som følger med importerte filer, beholdes. Se [Mal med farger og materialer](topic:paint).

### Skalering er jevn, uten håndtak

Skaler viser ingen boks med håndtak. Klikk på punktet som skal bli stående, et referansepunkt, deretter den nye størrelsen eller en skrevet faktor. Den skalerer alltid jevnt i alle retninger. For å strekke i én retning, trykk/trekk eller flytt en flate, eller skriv inn gruppens bredde, dybde eller høyde på nytt i {{ui:Elementinfo}}, eller [endre størrelse med en måltilsetting](topic:dimensions).

### Roter velger plan fra der du klikker

Det finnes ingen vinkelmåler som sitter fast på flater mens du svever over dem med piltastene for å velge plan. Klikk midtpunktet på en flate for å dreie i den flatens plan, eller på bakken for å dreie om den vertikale. Piltastene roterer visningen før det første klikket.

### Inferens fra punkter du passerer over

ModelCraft fanger retninger langs aksene fra **startpunktet ditt**, og til punkter, kanter og flater under pekeren. Den følger ikke en retning fra et punkt du bare har sveipet over (den prikkete «fra punkt»-inferensen). For å linje opp med et fjernt hjørne, lås aksen med en piltast og hold over hjørnet: det låste punktet glir for å linje opp med det. Eller plasser en [hjelpelinje](topic:guides-measure).

### Parallell bruker kanten du passerte før start

Inferensen for parallell og vinkelrett bruker den siste kanten pekeren krysset **før det første klikket**, ikke kanter du sveiper over mens du tegner. Se [Inferens og fangst](topic:inference#parallel-and-perpendicular).

### Kopier av en gruppe er koblet

Å kopiere en gruppe med {{ui:Flytt}} lager en andre plassering av den samme gruppen, slik at redigering av én endrer begge, som med komponenter. SketchUp gjør grupper uavhengige. Se [Feilsøking](topic:troubleshooting#editing-one-group-changed-another).

### Mellomrom panorerer ikke

{{key:Space}} velger {{ui:Velg}}, som i SketchUp. I noen andre nettapper panorerer du ved å holde Space nede; her gjør den ikke det. Høyredra panorerer i stedet.

### Tofingerrulling zoomer

På en styreflate, sett {{ui:Innstillinger}} › {{ui:ModelCraft}} › Rulling til Styreflate: to fingre roterer, {{key:Shift}} og to fingre panorerer, en klype zoomer. Se [Roter, panorer og zoom](topic:orbit-pan-zoom#on-a-trackpad).

Hvis hendene dine kjenner Blenders taster og ikke SketchUps, velg menystilen {{ui:Modellerer}}: {{key:G}}, {{key:R}} og {{key:S}} virker på utvalget samtidig, {{key:E}} ekstruderer (trykk/trekk), {{key:Shift+D}} dupliserer, og en overskriftsmenylinje (Fil, Rediger, Vis, Velg, Legg til, Objekt, Nett) erstatter verktøylinjen. Kommer du fra SketchUp, gir stilen {{ui:Trykk/trekk}} en menylinje som ligner dens egen, over de samme verktøybokstavene. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).

### Solider som er skjøvet inn i hverandre, kutter ikke

Trykk/trekk kutter gjennom flaten bak den i samme objekt, men to separate solider som skyves inn i hverandre, skjærer ikke hverandre. Det finnes ikke Intersect Faces og ingen Solid Tools.

### Det som mangler

Freehand, Trim, Split og Outer Shell, egne bildematerialer, utvidelser og et layoutverktøy for ark finnes ikke i denne versjonen. [Ikke bygget ennå](topic:not-built-yet) lister hva du kan gjøre i stedet.

## Snarveier nettleseren beholder

ModelCraft kjører i en nettleser, så noen snarveier hører til nettleseren, ikke appen. {{key:Mod+N}} åpner et nettleservindu (bruk {{ui:Ny}}), og {{key:Mod+W}} lukker fanen. Har du ulagrede endringer, spør nettleseren før den lukkes. Se [Taster, mus og styreflater](common:keys#shortcuts-the-browser-keeps).
