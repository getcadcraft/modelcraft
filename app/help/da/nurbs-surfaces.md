---
title: Frie overflader (NURBS)
summary: Glatte kurver og overflader til produktskaller, bilkarosserier og bådskrog — loft, sweep, kurvenet, firkantede flader, blends og beskæringer — med G0-, G1- og G2-kontinuitet målt på de præcise overflader, legemer med forening, træk fra og skæring, zebra- og krumningsvisninger, flader tilpasset en scanning med målt fejl, og STEP- eller IGES-filer.
keywords: nurbs, scanning, reverse engineering, tilpas, net til overflade, punktsky, stl, beskær, beskåret, hul, skær, legeme, legemer, boolesk, forening, træk fra, skæring, forskel, sy, lukket, frit form, freeform, frit-form, overflade, overflader, b-spline, bspline, kurve, spline, loft, sweep, skinne, net, coons, flade, blend, match, kontinuitet, g0, g1, g2, tangent, krumning, zebra, kontrolpunkter, knuder, grad, step, iges, klasse a
from: 09887405
---

**Overflader**-panelet laver glatte kurver og overflader af den slags, der bruges til produktskaller, bilkarosserier og bådskrog: NURBS, den samme matematik som andre overfladeværktøjer bruger. Alt måles på de præcise overflader, aldrig på de trekanter, du ser. Størrelser i panelet er i **millimeter**, uanset hvilken enhed modellen viser.

Åbn det fra panelet til højre: {{ui:Overflader}} › {{ui:Åbn panelet Overflader}}. En model, der allerede har overflader, åbner det af sig selv.

## Sådan virker en kommando

1. Tryk på en kommando (fx **Loft**). Panelet siger, hvad det stadig mangler: punkter, kurver, en fladekant eller en kurveende.
2. Vælg dem: klik på dem i 3D-visningen, eller tryk **Vælg** (eller kant- og endeknapperne) ved siden af hver i listen. For en kant klikker du nær den kant af overfladen.
3. Tjek indstillingerne (grad, tolerance, kontinuitet, …) og tryk **Lav**.

Kurver fra punkter tager punkterne skrevet ét pr. linje (`x, y, z` i mm), eller **Vælg punkter i visningen**: hvert klik bruger samme fangst som tegneværktøjerne; tryk <kbd>Enter</kbd> eller dobbeltklik for at afslutte, <kbd>Esc</kbd> for at stoppe.

## Kurver

- **Kurve gennem punkter** går gennem hvert punkt. **Kurve fra kontrolpunkter** følger i stedet et bur af punkter.
- **Indsæt knude**, **Hæv grad** og **Sænk grad** ændrer, hvordan en kurve beskrives, uden at flytte den (sænkning nægtes, når kurven ville flytte sig mere end tolerancen). **Genopbyg kurve** giver den et nyt antal kontrolpunkter og siger, hvor langt den flyttede sig.
- **Match kurve** får den ene kurves ende til at møde en anden med G0 (berøring), G1 (samme retning) eller G2 (også samme krumning). **Blend kurve** tilføjer en ny kurve mellem to ender.
- **Sammenføj kurver** og **Del kurve**.

## Overflader

- **Loft** gennem to eller flere kurver, **Rulet overflade** mellem to, **Ekstruder kurve**, **Drej kurve**.
- **Sweep langs én skinne** fører en profil langs en sti uden at vride den; **Sweep langs to skinner** holder profilens ender på begge skinner. Sweeps er tilpasset: statuslinjen siger, hvor tæt den blev på den rigtige sweep.
- **Overflade fra et kurvenet** går gennem et gitter af kurver (de første valg er profilerne, resten er guider). **Flade fra fire kanter** udfylder fire kurver, der mødes i deres hjørner.
- **Match overflade** får en fladekant til at møde en nabo med G0, G1 eller G2; **Blend overflade** tilføjer en overflade mellem to kanter.
- **Forskyd overflade**, **Forlæng overflade** (overfladen fortsætter som den var på vej), **Genopbyg overflade** og knuder og grad for overflader.

## Kontrol af kvaliteten

**Delte kanter**-tabellen lister hver kant, to overflader deler, med spalten (mm), vinklen mellem dem (°) og krumningsspringet (1/mm), og om det gør den til G0, G1 eller G2. En kant, der er værre end du bad om, er også i **Problemer** (⚠-knappen i app-linjen) med en **Match**-rettelse.

**Vis som** › **Zebrastriber** og **Krumning (Gauss)** kommer fra den præcise overflade: striber, der løber ubrudt hen over en kant, betyder G1; striber, der også bevarer deres bredde, betyder G2. Krumning er blå, hvor overfladen er en sadel, rød, hvor den er en kuppel, og hvid, hvor den er flad. **Kontrolpunkter** tegner kontrolnettene.

G0–G2 måles i 33 punkter pr. kant. **G3 og "klasse A"-kvalitet måles ikke** og påstås ikke.

## Beskær en overflade

**Beskær**-gruppen skærer en overflade uden at ændre dens form: overfladen beholder alle sine kontrolpunkter, og kun delen inden for konturen vises, tælles og skrives. **Beskær til et rektangel** og **Beskær med en cirkel** virker på en andel (0 til 1) af overfladen i hver retning, så de ikke kræver valg i visningen; **Beskær med en kurve** tager en lukket kurve, der ligger på overfladen (den projiceres ind i overfladen, og den afvises med ord, hvis den er åben eller mere end tolerancen væk). Sæt kryds i **Skær et hul** for at fjerne indersiden af konturen; lad det være fra for kun at beholde indersiden. En overflade kan have én beholdt kontur og et vilkårligt antal huller; en kontur, der krydser en anden, afvises. **Fjern beskæringen** viser hele overfladen igen. De skårne kanter følger konturen præcist, og panelets Fortryd tager en beskæring tilbage som ethvert andet trin.

STEP bærer beskæringen som fladens grænser, og IGES som en beskåret overflade (entitet 144); begge læser den tilbage.

## Legemer og booleske operationer

**Massive legemer**-gruppen laver overflader om til lukkede kroppe og kombinerer dem. Et legeme her er et sæt af panelets egne overflader, som tilsammen lukker et volumen; dets flader forbliver præcise NURBS-overflader med deres beskæringer.

- **Massiv kasse**, **Massiv cylinder** og **Massiv kugle** laver ét ud fra skrevne størrelser (i mm): en kasse med seks flade flader, en cylinder med en rund side og to flade ender beskåret til cirklen, en kugle af én roteret overflade.
- **Solid fra overflader** grupperer overflader, du selv har lavet. Vælg dem, eller vælg ingen for at bruge alle viste overflader, der ikke allerede er i et legeme. De sys sammen inden for tolerancen: lukker de ikke, sker der intet, og panelet siger, hvor mange kanter der står åbne, og hvor tæt de skal mødes.
- **Forening**, **Træk fra** (det andet legeme trækkes fra det første) og **Skæring** (kun det, begge har) tager to legemer: klik på en flade af hvert i visningen, eller tryk **Vælg** i listen **Massive legemer**. Sæt kryds i **Behold de to legemer** for at lade dem ligge ved siden af resultatet.

En boolesk operation beholder hver flade på sin egen præcise overflade og skærer den med nye beskæringskonturer langs skæringen. Resultatlinjen giver de målte tal: hvor langt legememotorens punkter måtte flyttes for at ligge på de præcise overflader (aldrig mere end tolerancen), hvor tæt skæringspunkterne er på begge overflader (normalt nogle få milliontedele af en millimeter), volumen, og om de nye flader lukker igen, når de sys sammen på ny fra deres præcise overflader. Volumener måles på trekanter inden for tolerancen (0.05 mm, medmindre du sætter en anden), så en kugles eller cylinders volumen vises lidt under det præcise: en mindre tolerance kommer tættere på. En boolesk operation, der ikke kan udføres rent (legemerne deler intet, eller en kontur ville krydse sig selv), afvises med ord og ændrer intet. Én boolesk operation er ét trin i panelets **Fortryd**.

I listen **Massive legemer** fjerner **Opløs** legemet og lader fladerne stå som almindelige overflader; **Slet** fjerner legemet og dets flader.

**Tilføj til modellen** (i listen **Massive legemer**) lægger en kopi af legemet ind i modellen som én lukket gruppe, dets flader som trekanter inden for 0.05 mm, i ét trin i modellens Fortryd. Det virker så med modellens egne **Forening**, **Træk fra** og **Skæring**, træk/skub og 3D-printtjekket; det præcise legeme bliver i panelet.

## Afrundinger og fortykkelse

**Afrundning mellem flader** runder kanten, hvor to flader af ét legeme mødes: vælg de to flader (i visningen, eller med **Vælg** i listen), skriv **radius**, og for en radius, der ændrer sig langs kanten, **radius ved enden** (0 beholder én radius). En kugle med den radius rulles langs kanten og rører begge flader; afrundingen er den præcise cirkelbue, den efterlader i hvert punkt, sammenføjet til én overflade, og de to flader beskæres, hvor kuglen rører dem. En ydre kant mister materiale, og et indvendigt hjørne får det. Resultatlinjen giver det målte: hvor langt afrundingsoverfladen er fra den rullende kugle mellem de punkter, den blev bygget ud fra (punkter tilføjes, indtil den er inden for en fjerdedel af tolerancen), den største vinkel mellem afrundingen og hver flade langs berøringslinjerne, og de samme tal som for en forening. En radius, der ikke passer (kuglen ville forlade en flade, eller en flade krummer strammere end radius), afvises med navnet på fladen, og intet ændrer sig.

**Afrund flere kanter** runder mange kanter i ét trin: vælg de to flader af den første kant, derefter de to flader af den næste, og så videre (en flade kan være i flere par, fx topfladen på en kasse i fire af dem); alle kanter får den radius, du skriver. Hver afrunding beregnes på legemet, som det var, og derefter skæres de efter hinanden, så rækkefølgen ikke betyder noget. Hvor to afrundede kanter mødes i et hjørne, hvor de andre kanter forbliver skarpe, løber de to afrundinger ind i hinanden langs deres skæringskurve (en fold). Hvor tre afrundede ydre kanter på tre flade flader, der står vinkelret på hinanden, mødes med én radius, bliver hjørnet til ét **kugleflade-stykke**, der tangerer alle tre afrundinger (fjern markeringen i **Hjørner** for i stedet at få det foldede hjørne); en kant skal være mindst dobbelt så lang som radius, hvor begge ender er sådanne hjørner. Resultatlinjen siger, hvor mange kanter der blev afrundet, og hvordan hjørnerne blev. Indvendige kanter kan også afrundes sammen, men et resultat, der ikke lukker igen, bliver kun rapporteret (linjen siger det), så kontrollér det.

**Fortyk til et legeme** giver en overflade en tykkelse: vælg den, skriv **tykkelsen**, og sæt kryds i **Den anden side** for at gøre den tykkere den anden vej. Den forskudte flade tilpasses overfladen og måles mod den (resultatlinjen giver den største forskel fra tykkelsen); vægge følger hver kant og hver beskæringskontur. Hvis overfladen krummer strammere end tykkelsen på den side, eller en anden del af den ligger tættere end tykkelsen, afvises den med navnet på overfladen og stedet, og intet ændrer sig.

## Fortryd, filen, STEP og IGES

Panelet har sin egen **Fortryd** og **Gentag** (ét trin pr. kommando). Overfladerne gemmes i `.modelcraft`-filen sammen med modellen; de er ikke en del af modellens egen fortryd, ligesom filens materialer ikke er det.

**STEP…** (AP242) og **IGES…** gemmer kurver og overflader præcis, som de er (B-spline-kurver og -overflader, intet gjort til trekanter). Hver overflade er sin egen flade med sin beskæring. Et legeme skrives som én lukket skal, med hver kant delt af sine to flader, som andre CAD-programmer forventer (statuslinjen siger, hvor mange legemer der blev sendt ud på den måde). I IGES skrives det samme legeme som ét manifold-massivt B-rep (entitet 186 over lukket skal 514, flader 510, sløjfer 508, én kantliste 504 og én hjørnepunktliste 502); et legeme, hvis flader ikke parrer kant for kant, skrives som separate flader, og linjen siger det. **Importér…** læser sådan et legeme tilbage som et legeme, fra STEP og fra IGES. Den læser kurver og overflader skrevet på denne måde og `.ccnurbs`-patchsæt; andre programmers STEP-legemer åbnes med Fil › Importér som net.

## Overflader fra en scanning (reverse engineering)

Vælg det scannede net i modellen (intet valgt betyder alt, der vises), åbn **Overflader**, og vælg **Tilpas overflader til scanningen** i gruppen **Scanning**. Værktøjet leder efter **planer**, **cylindre**, **kugler** og **kegler** (de præcise overflader, en bearbejdet del består af; hver række viser den radius eller halve vinkel, det fandt), finder **afrundinger** (afrundede kanter og hjørner: en lille cylinder eller kugle, der løber tangent ind i to eller flere andre flader, vist med sin radius og de flader, den forbinder), **randafrundinger** (en torus: den afrundede kant, hvor en flad flade møder en cylinder eller kegle, vist med sin radius og sin ringradius) og **variable afrundinger** (en afrundet kant, hvis radius ændrer sig langs den, vist med radius i hver ende), tilpasser **én frit-form-flade** til et glat, svagt krummet stykke, og skærer hver flade til konturen af den del af scanningen, den kom fra, så huller og hjørner bevares. Indstillinger: **tolerancen** (hvor langt, i mm, et scanningspunkt må være fra et plan eller en cylinder og stadig høre til den, og målet for en frit-form-flade), **den mindste del** (en andel af overfladearealet) og **de fleste flader**. Den samme scanning og de samme indstillinger giver altid de samme flader.

Resultatet er en tabel, én række pr. flade: dens type, hvor mange trekanter den kom fra, og fejlen **målt fra scanningen til fladen** (rms, den største, og andelen af punkter inden for tolerancen). De målte punkter er scanningens hjørnepunkter og midten af hver trekant. Fejlen måles ikke den anden vej (fra flade til scanning), så en flade, der rækker ud over scanningen, ville ikke vises. Noten under tabellen siger også, hvor meget af arealet der var for småt til at blive tilpasset. I visningen farves scanningspunkterne efter deres **afvigelseskort**: blå på fladen, grøn halvvejs til tolerancen, rød ved tolerancen eller derover (fjern markeringen i **Vis afvigelseskortet** for at skjule det). Stykker, der foldes tilbage på sig selv (fx et lukket rør tilpasset med frit-form-flader), vises som ikke tilpasset og tvinges aldrig ind i én overflade.

**Sy overfladerne til et legeme** syr hver viste overflade, der ikke er i et legeme, til ét lukket legeme. Scanningsflader mødes kun inden for scanningens egen fejl, så den prøver den mindste samlingsafstand, der lukker (aldrig mere end den **syafstand**, du har sat), og afviser med ord, når fladerne ikke lukker. Den udfylder aldrig et hul. En kasse med afrundede kanter syr sig, når dens afrundinger blev fundet som egne flader; samlingsafstanden, der lukkede, står i resultatet. Legemet virker så med Forening, Træk fra, Skæring og **Tilføj til modellen**.

Hvad den ikke gør: en **randafrunding** (en torus) søges kun omkring aksen af en cylinder eller kegle, der allerede er fundet, og en **variabel afrunding** kun langs en nogenlunde lige kant (dens snit skæres vinkelret på én retning). Andre steder bliver de til frit-form-flader, når de er glatte nok, og udelades ellers. Kugler, kegler og afrundinger findes ved tilfældig stikprøvning, så en meget lille én (få trekanter) kan blive overset. Afvigelseskortet viser afstanden fra scanningen til fladerne, ikke den anden vej, og meget store scanninger (over 300,000 trekanter) afvises her. Flader af en fuldt drejet cylinder skæres om huller, med sømmen lagt, hvor der ikke er et hul. Kontrollér hver flade mod din scanning, før du stoler på den.

## Ikke lavet endnu

Afrunding af kanter, der mødes i et hjørne af buede flader eller med forskellige radier (en hjørneblanding), en afrunding mellem flader, der ikke mødes, en indvendig afrunding, der ender på en skrå eller buet flade, og booleske operationer og afrundinger beregnet på overflader uden trekanter (her arbejder legememotoren på trekanter inden for tolerancen, og hvert punkt sættes derefter tilbage på de præcise overflader).
