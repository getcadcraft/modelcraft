---
title: Modifikatorer på et net, en gruppe eller en komponent
summary: Skalér, spejl, array, udglat, affas, skær og bøj et net uden at ændre det; gentag eller skalér en gruppe eller komponent med samme stak; gør det permanent, når du er klar.
keywords: modifikator, modifikatorer, stak, gruppe, komponent, skalér, bag, rediger kilde, ikke-destruktiv, spejl, array, radialt array, underinddeling, underopdelt overflade, udglat, affas, gør massiv, tykkelse, boolesk, skær, forskyd, støj, svejs, decimér, forenkl, gitter, bur, kurvedeformation, bøj, krympeindpakning, anvend
from: dd5ec1cb
---

En **modifikator** ændrer, hvad et net viser, uden at ændre selve nettet. Spejl den ene halvdel af en del og modellér kun den halvdel; afrund en kasse med en underopdelt overflade og bliv ved med at redigere kassen. Modifikatorer står i en **stak** og virker i rækkefølge, øverst til nederst. Det, du ser, eksporterer, printer og renderer, er nettet med hver modifikator, der er slået til.

## Tilføj en modifikator

1. Vælg et net. I arbejdsområdet Model er dets sektion **Modifikatorer** i {{ui:Objektinfo}}; i arbejdsområdet Net er den i panelet til højre.
2. Vælg en fra {{ui:Tilføj en modifikator…}}. Den kommer nederst i stakken.
3. Ændr dens indstillinger under dens navn. Længder tager de samme værdier som værdifeltet, så `600mm`, `2'6"` og `(6m)/4` virker alle.

Hver ændring er ét trin i fortrydelsen: {{key:Mod+Z}} tager den tilbage.

## Knapperne på hver modifikator

- Afkrydsningsfeltet slår den til eller fra.
- Skærmknappen viser eller skjuler den i visningen (den bliver i stakken).
- Kamera-knappen viser eller skjuler den i renderede billeder og videoer, så en modifikator kan være kun til renderinger (eller kun til visningen).
- Pilene flytter den op eller ned i stakken. Rækkefølgen har betydning: spejl og derefter underinddel giver en glat søm, underinddel og derefter spejl gør det ikke.
- {{ui:Anvend}} gør formen til en del af nettet: modifikatorerne over den og denne selv udføres på selve nettet og forlader stakken. Det er ét trin i fortrydelsen.
- Krydset fjerner den.

## Modifikatorerne

| Modifikator | Hvad den gør |
| --- | --- |
| Skalér | Skalerer om objektets oprindelse, en faktor for rød, grøn og blå. Også på en gruppe eller komponent. |
| Spejl | Tilføjer en spejlet kopi på tværs af rød, grøn eller blå gennem nettets oprindelse, og samler halvdelene, hvor de mødes. |
| Array | Kopierer i en linje (et trin på sin egen størrelse ganget med de tal, du angiver, plus et fast trin), rundt om en akse eller langs en kurve i modellen. En gruppe eller komponent tager linjen. |
| Underopdelt overflade | Udglatter nettet ved Catmull-Clark-underinddeling. Skarpe kanter forbliver foldede. Renderinger kan bruge flere niveauer end visningen. |
| Affas | Runder hver kant, der er skarpere end den vinkel, du angiver. |
| Gør massiv | Giver en overflade en tykkelse og lukker kanten. |
| Boolesk | Skærer væk, samler eller beholder overlappet med et andet objekt i modellen. Begge skal være lukkede legemer. |
| Forskyd | Flytter overfladen ind eller ud med jævn støj. Det samme frø giver de samme ujævnheder hver gang. |
| Svejs | Samler hjørnepunkter, der er tættere end en afstand. |
| Decimér | Beholder en andel af trekanterne og fjerner dem, der ændrer formen mindst. |
| Udglat | Lader hjørnepunkterne slappe af mod deres naboer. |
| Gitter | Bøjer nettet med et bur: flyt burets punkter, og nettet følger med. |
| Kurvedeformation | Bøjer nettet langs en kurve i modellen, langs rød, grøn eller blå. |
| Krympeindpakning | Flytter hvert hjørnepunkt over på det nærmeste punkt på et andet objekt. |

## På en gruppe eller komponent

En gruppe eller komponent kan også beholde en opskrift, så en lampeskærm kan være en **Skalér** og et **Array** af én skærm, og ændrer du et tal, ændrer du lampen.

1. Vælg en gruppe eller komponent. I {{ui:Objektinfo}} viser sektionen **Modifikatorer** stakken (tom i starten).
2. Vælg {{ui:Skalér}} eller {{ui:Array}} fra {{ui:Tilføj en modifikator…}}. Gruppen bliver til en komponent, der er **originalen, placeret af stakken**. Originalen beholdes: redigerer du den, følger alle kopier med med det samme.
3. Skalér tager en faktor for rød, grøn og blå (`1, 1, 2` fordobler højden). Array tager antallet af kopier, et trin som en andel af resultatets størrelse indtil nu og et ekstra trin i længder.

Stakken kører øverst til nederst på originalens egne akser om dens oprindelse, så rækkefølgen har betydning: et Array med tre kopier 3 m fra hinanden, derefter Skalér 2 på rød, sætter kopierne 6 m fra hinanden; skalér først og derefter Array holder dem 3 m fra hinanden. Afkrydsningsfeltet, pilene og krydset virker som på et net; visnings- og kamera-knapperne og Anvend på én modifikator virker ikke, fordi en stak på en gruppe er én ting.

- {{ui:Rediger kilde}} åbner originalen på stedet. Ændringer vises i hver kopi; når du lukker den, vender du tilbage dddér, du var.
- {{ui:Bag modifikatorer}} gør resultatet til almindelige kanter og flader og fjerner stakken, som ét trin i fortrydelsen. Kopier, der overlapper, forbliver som særskilt geometri: Bag er ikke en sammenlægning.
- Kopier af komponenten deler opskriften; {{ui:Gør unik}} skiller den ad (originalen forbliver delt).
- Stakken gemmes i filen, medtages af kopiér og sæt ind og af fortryd, og Ryd ubrugte beholder originalen. Et program, der ikke kender modifikatorer, viser stadig kopierne.
- Indtil Bag kan resultatet ikke gå ind i, eksplodere, ændre størrelse eller strækkes: det ville blive bygget igen ved næste ændring. Hver af dem siger det.
- Grænserne er 32 modifikatorer og 1.000 kopier. En komponent lavet til at blive strukket (Stræk) og en stak kan endnu ikke dele en definition.

## Underopdelt overflade

Underopdeling udglatter et net ved Catmull-Clark: hver flade bliver til firkantede flader, og hvert niveau giver fire gange så mange. En kasse med to eller tre niveauer ser allerede ud som en afrundet form, og du bliver ved med at redigere kassen.

- **Niveauer i visningen** sætter, hvor glat den er.
- **Niveauer i renderinger** sætter, hvor glatte renderede billeder og videoer er; renderinger kan bruge flere niveauer end visningen.
- **Renderinger på den sande glatte overflade** sætter en renderet masks punkter på grænseoverfladen, som niveauerne går mod, så selv to niveauer renderes lige så glat som mange.
- **Folder** holder kanter skarpe: i arbejdsområdet Net vælger du kanter og bruger {{ui:Fold}} (1 forbliver skarp, 0,5 runder lidt, 0 er glat). Se [Rediger et net](topic:mesh-edit).
- **Sænk visningsniveauet på et stort net:** når de niveauer, du beder om, ville give flere flader, end denne computers visning håndterer godt, viser visningen et lavere niveau og siger hvilket. {{ui:Anvend}} bruger altid alle niveauer. Hvor mange flader der er tilladt, sættes af din maskines klasse under {{ui:Indstillinger}} › Rendering › Din maskine.
- Åbne kanter beholder deres hjørner og bliver på deres kanters linje.

## Bøj med et gitterbur

1. Tilføj en {{ui:Gitter}}-modifikator og tryk {{ui:Tilføj et gitterbur rundt om nettet}}. Et bur på 3 × 3 × 3 punkter dukker op rundt om nettet, tegnet som tråde.
2. Åbn buret i arbejdsområdet Net (dobbeltklik på det), og flyt dets punkter. Nettet følger glat med.

:::tip
Et bur er et net som alle andre: skjul det med dets markering, når du er færdig.
:::

## Store net

Små stakke udregnes med det samme. En stor udregnes i baggrunden på hver kerne i din computer: visningen viser det sidste resultat, indtil det nye er klart. Booleske handlinger indlæser den faste modelleringsmotor første gang; visningen siger det et øjeblik.

## Hvad modifikatorer ikke gør endnu

- Vægte pr. hjørnepunkt (et fald malet på nettet) for Forskyd, Udglat og Krympeindpakning.
- Modifikatorer ud over Skalér og det lineære Array på skub/træk-geometri (grupper og komponenter): lav det om til et net først ({{ui:Konvertér til net}}). Spejl, et rundt eller kurvet Array, Bøj og Smal på grupper kommer senere.
