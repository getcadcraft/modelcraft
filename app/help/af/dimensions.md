---
title: Maat en verander grootte van wat jy geteken het
summary: Plaas afmetings tussen hoeke, op bôë en sirkels, of tussen twee rande; tik 'n nuwe lengte in om die model te verander. Tik 'n rand se lengte of 'n groep se breedte, diepte en hoogte weer in in Entiteitinligting.
keywords: maat, afmetings, verander grootte, grootte wysig, lengte, breedte, diepte, hoogte, rek, aandrywende maat, annoteer, meet, na die feit, radius, deursnee, hoek, boog, sirkel, R, Ø
from: a1f815ec
---

Groottes in ModelCraft is nie vas nadat iets geteken is nie. 'n Maat wys 'n lengte op die model, en 'n nuwe lengte daarin tik verander die model om daarby te pas. Jy kan ook 'n rand se lengte, of 'n groep se breedte, diepte en hoogte, in {{ui:Entiteitinligting}} weer intik.

## Plaas 'n maat

1. Druk {{key:D}}, of klik {{ui:Maat}} op die nutsbalk.
2. Klik 'n hoek om vanaf te meet. Dit klik vas op hoeke, middelpunte en rande, soos tekening.
3. Klik die tweede hoek.

   Of klik een keer op 'n **rand** (die wenk sê "Op rand") om daardie hele rand in een klik te meet.
4. Beweeg die wyser na waar die maatlyn moet wees, en klik. Jy kan ook die verskuiwing tik, soos `0.5m`, en {{key:Enter}} druk.

   Die maatlyn bly gelyk vir 'n gelyke rand, tensy jy daarna van die kant kyk. Vir 'n regop rand bly dit in die regop vlak wat die beste na jou kyk.

Die statusbalk sê "Maat 4 m." Afmetings wys hul lengte in die model se eenheid en verander wanneer jy die eenheid in die kieser verander.

## Radius, deursnee en hoek

Dieselfde {{ui:Maat}}-gereedskap meet ronde dinge en hoeke:

- **'n Boog:** klik die boog. Die wenk sê {{ui:Radius}}. Beweeg die wyser na waar die teks moet wees en klik: die maat lees **R 1.5 m**.
- **'n Sirkel:** klik die sirkel. Jy kry 'n **deursnee** (**Ø 3 m**) met 'n lyn oor die sirkel deur sy middelpunt. Veelhoeke werk dieselfde, met hul hoeke op die sirkel.
- **Die hoek tussen twee rande:** klik een rand, dan 'n tweede rand wat by 'n hoek daarop aansluit (terwyl jy daaroor hover, sê die wenk {{ui:Hoek tussen die rande}}). Beweeg dan in die hoek wat jy wil hê, en klik. Binne die hoek kry jy die hoek tussen die rande; beweeg na een kant en jy kry die hoek langs dit (byvoorbeeld 150° in plaas van 30°). Hoe ver van die hoek jy klik, bepaal waar die boog gaan; of tik daardie afstand in.

Om 'n radius na 'n deursnee om te skakel of terug, kies die maat en kies in {{ui:Wys as}} in {{ui:Entiteitinligting}}.

**Grootte verander daarmee:** tik 'n nuwe radius of deursnee direk nadat jy een geplaas het, of kies dit later en tik. Die boog of sirkel behou sy middelpunt en verander van grootte; 'n vlak wat dit omskryf (’n skyf, die einde van 'n gleuf) verander saam daarmee. Twee dinge meet net:

- **'n Hoekmaat** verander nooit die model nie. Om 'n hoek te verander, draai die rande met {{ui:Draai}}.
- **Die sirkel aan die einde van 'n silinder** (’n sirkel wat jy met {{ui:Stoot/trek}} uitgetrek het) kan nie uit sy maat verander word nie, want sy sye sou ook moet verander. Skaal eerder die silinder, om sy as.

## Verander die model met 'n maat

Direk nadat jy 'n maat geplaas het, tik 'n nuwe lengte en druk {{key:Enter}}: `6m`, `12'`, `3500` in 'n millimeter-model. Die model verander na daardie grootte.

Later, op enige tyd:

1. Met {{ui:Kies}}, klik die maat se teks of lyn. {{ui:Entiteitinligting}} sê **Maat** en wys sy {{ui:Lengte}}.
2. Tik die nuwe lengte en druk {{key:Enter}}. Jy kan direk in die waardeblokkie tik, of in die {{ui:Lengte}}-blokkie in {{ui:Entiteitinligting}}.

### Wat beweeg

Die tweede hoek wat jy geklik het, beweeg, en so ook alles verder daarvan af:

- **Albei hoeke op een stuk** (’n boks se wydte, 'n muur se hoogte): die kant by die bewegende hoek skuif uit of in, en vlakke wat daaraan vas is, rek. 'n Boks bly 'n geslote soliede, en alles wat heeltemal aan daardie kant sit, soos 'n vensterkomponent, beweeg saam daarmee.
- **Die hoeke op twee aparte stukke** (die gaping tussen twee bokse): die bewegende hoek se stuk beweeg heel, en die gaping verander.
- **Die bewegende hoek binne 'n groep of komponent wat die ander hoek nie in is nie**: die hele groep beweeg.
- **Albei hoeke binne dieselfde groep of komponent**: dit word binne gerek. 'n Komponent verander oral waar dit geplaas is, soos redigeer dit altyd doen.

Om te verander watter einde beweeg, kies die maat en kies in {{ui:Beweeg}} in {{ui:Entiteitinligting}}:

| Keuse | Wat gebeur |
|---|---|
| {{ui:Tweede einde}} (die verstek) | Die einde wat jy tweede geklik het, beweeg |
| {{ui:Eerste einde}} | Die einde wat jy eerste geklik het, beweeg |
| {{ui:Albei eindes (gesentreer)}} | Elke einde beweeg die helfte van die verandering, sodat die middel staan bly |

### Wanneer 'n grootteverandering geweier word

ModelCraft verander niks nie en sê hoekom in die statusbalk:

- "'n vlak sou uit sy vlak buig": die maat loop skuins oor die vorm. Meet langs 'n rand, of langs rooi, groen of blou.
- "'n vlak sou tot niks krimp of binne-uit draai": die nuwe lengte is te kort vir die vorm.
- "die einde wat beweeg is nie op 'n hoek van die model nie": daardie einde is in leë ruimte of op die middel van 'n rand geplaas. Kies die ander einde in {{ui:Beweeg}}, of plaas die maat op twee hoeke.
- "'n lengte moet groter as nul wees".

Elke grootteverandering is een stap: {{key:Mod+Z}} ontdoen dit.

## Verander 'n grootte in Entiteitinligting

Jy het nie altyd 'n maat nodig nie:

- **'n Rand:** kies dit. Sy {{ui:Lengte}} in {{ui:Entiteitinligting}} is 'n boks waarin jy kan tik. Om 'n lengte in die waardeblokkie te tik werk ook. Die einde wat verder langs rooi, dan groen, dan blou is, beweeg, en wat daaraan vas is, rek. Byvoorbeeld, om die voorste onderste rand van 'n boks weer in te tik, maak die boks wyer na regs.
- **'n Groep of komponent:** kies dit. {{ui:Breedte (rooi)}}, {{ui:Diepte (groen)}} en {{ui:Hoogte (blou)}} is bokse. Die verre kant (regs, agter, bo) beweeg. Dit is die groep se eie asse, voor enige draai wat jy daaraan gegee het.

Druk {{key:Enter}} om toe te pas, of {{key:Esc}} om die ou waarde terug te sit.

## Afmetings volg die model

'n Maat is aangeheg aan die twee hoeke waarop dit geplaas is (’n hoek: aan sy hoek en die verre einde van sy twee rande; 'n radius of deursnee: aan sy boog of sirkel). Skuif, stoot/trek of verander die geometrie, en die maat volg en wys die nuwe lengte. Dit bly aangeheg wanneer jy die geometrie in 'n groep of komponent maak.

As 'n einde êrens geplaas is wat nie 'n hoek is nie (op 'n vlak, of in leë ruimte), of sy hoek is uitgevee, bly daardie einde waar dit was. Die maat meet steeds, maar dit kan slegs van sy ander einde af verander.

## Verwyder afmetings

- Een maat: kies dit en druk {{key:Delete}}, of klik dit met die {{ui:Uitveër}}.
- Alle afmetings: met niks gekies nie, klik {{ui:Skrap alle afmetings}} in {{ui:Entiteitinligting}}.

Afmetings word in die `.modelcraft`-lêer gestoor. Hulle word nie na ander formate uitgevoer nie, wat net die 3D-model dra. 'n Lêer met afmetings open steeds in 'n ouer ModelCraft, net sonder hulle.
