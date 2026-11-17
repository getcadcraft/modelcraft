---
title: Slogi in sončne sence
summary: Prikažite model osenčen, kot skrite črte, kot žični model ali prosojno, in preučite sence, ki jih meče pri katerem koli datumu, času in kraju.
keywords: predstavitveni pogled, čist pogled, skrij vodila, skrij osi, slog, osenčeno, skrite črte, žični model, rentgen, robovi, sence, sonce, študija sence, solarno, datum, čas, zemljepisna širina, zemljepisna dolžina, časovni pas, sever
from: 09c95329
---

Podokno {{ui:Slog}} na desni spremeni način risanja modela. Nič v njem ne spremeni samega modela in ni del razveljavitve. Vsak [prizor](topic:scenes) si zapomni svoj slog, datoteka pa si zapomni slog, ki ste ga imeli, ko ste jo shranili.

## Ploskve

Izberite enega v seznamu {{ui:Ploskve}}:

| Slog | Videz |
|---|---|
| {{ui:Osenčeno}} | Polne ploskve, mehko osvetljene. Ploskve, gledane od zadaj, so modro sive. Uvožene barve so vidne. |
| {{ui:Skrite črte}} | Ploskve v barvi ozadja z robovi v črnilu: čist risalni prikaz brez skritih črt. Belo na {{ui:Papir}}, temno na {{ui:Model}}. |
| {{ui:Žični model}} | Samo robovi. Ploskve niso narisane, vendar se še vedno štejejo, ko klikate in lovite: skozi njih ne morete izbrati. |
| {{ui:Rentgen}} | Prosojne ploskve, da vidite, kaj je za njimi ali znotraj. Kakor pri žičnem modelu se klik in lovljenje še vedno ustavita na najbližji ploskvi. |

{{ui:Pokaži robove}} vklopi ali izklopi robove v vseh slogih razen v {{ui:Žični model}}. Ko je izklopljen, {{ui:Skrite črte}} skoraj ničesar ne prikažejo, saj se njihove ploskve ujemajo z ozadjem. Mehki robovi, na primer boki povlečenega kroga, se nikoli ne narišejo.

## Vklopite sončne sence

1. Označite {{ui:Sončne sence}}. Nastavitve sonca pod njim postanejo aktivne, model pa meče sence na samega sebe in na tla.
2. Nastavite kraj:
   - {{ui:Zemljepisna širina}}: sever je pozitiven, jug negativen (New York je približno 40.7, Sydney približno -33.9).
   - {{ui:Zemljepisna dolžina}}: vzhod je pozitiven, zahod negativen (New York je približno -74.0).
   - {{ui:Odmik UTC}}: odmik kraja od UTC v urah, na primer `-5` za New York pozimi. ModelCraft ne upošteva poletnega časa; za New York poleti uporabite `-4`.
3. Nastavite {{ui:Datum}} (mesec in dan) in povlecite drsnik {{ui:Čas}}. Čas se premika v korakih po 15 minut in se prikaže ob drsniku, na primer "3:00 pm".

Vrstica pod nastavitvami pove, kje je sonce, na primer "Sonce je 52° nad obzorjem, 250° od severa. Sever je zelena os." Ponoči piše "Sonca ob tem času ni."

Nov model se začne s soncem 21. junija ob 3:00 pm, pri zemljepisni širini 40, zemljepisni dolžini -105 in odmiku UTC -7.

## Usmerite model proti severu

Sever v ModelCraft je vedno **zelena os**. Za preučevanje resničnega mesta obrnite model tako, da njegova severna stran gleda vzdolž zelene: izberite vse ({{key:Mod+A}}), pritisnite {{key:Q}}, kliknite središče na tleh in ga zasukajte za kot kraja od severa (glejte [Zasukaj in spremeni merilo](topic:rotate-scale)).

## Študija sonca

1. Nastavite kraj in datum.
2. Dodajte prizor ({{ui:Dodaj prizor}} v {{ui:Prizori}}).
3. Premaknite drsnik časa, nato dodajte še en prizor. Ponovite za vsako uro, ki jo želite.
4. Kliknite {{ui:Predvajaj}}, da se premikate po njih. Glejte [Shranjevanje pogledov kot prizorov](topic:scenes).

## Dobro vedeti

- Sence so lahko nazobčane na zelo velikem modelu, saj ena senčna karta pokrije celoten model.
- Sence se v {{ui:Žični model}} ne narišejo.
- Položaj sonca sledi izračunu NOAA in je natančen na delček stopinje, kar zadostuje za študije mas. Lomljenje svetlobe v ozračju je zanemarjeno, zato so lahko zelo nizki koti sonca blizu vzhoda in zahoda malo nenatančni.

## Predstavitveni pogled

{{ui:Pogledi}} › {{ui:Predstavitveni pogled}} (ali {{key:Shift+P}}) prikaže samo model: osi, vodilne črte in vodilne točke, obrise prereznih ravnin (rez ostane), oznake svetilk, okvir odprte skupine, oznake lovljenja in namigov ter označitev izbora izginejo. Uporabite ga za jasen pogled na model ali pred posnetkom zaslona. Orodja delujejo in še vedno lovijo; oznak preprosto ne vidite. Znova pritisnite {{key:Shift+P}}, da jih prikažete. Kote ostanejo, saj so del risbe. Med urejanjem znotraj skupine se preostali model ne zbledi več: prikaže se takšen, kot je, vključno s teksturami.
