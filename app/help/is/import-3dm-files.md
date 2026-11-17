---
title: Flytja inn .3dm-líkan
summary: Flyttu inn .3dm-skrá með möskvum, flötum, ferlum, blokkum, lögum og litum; hvaðan þríhyrningarnir koma, og hvað er skilið eftir.
keywords: 3dm, flytja inn, nurbs, fjölflötur, brep, fletir, birtingarmöskvi, útdráttur, ferlar, blokkir, lög, merki, litir, einingar, skipta, flytja yfir
from: 3cf29879
---

ModelCraft les `.3dm`-skrár með sínum eigin lesara, á síðunni. Ekkert er hlaðið upp, og það virkar án nettengingar hvenær sem ModelCraft gerir það. Skrár vistaðar í útgáfum 5, 6, 7 og 8 hafa verið prófaðar; eldri skrár (útgáfur 2 til 4) ættu líka að opnast, en hafa ekki verið prófaðar enn.

## Flytja inn skrána

1. Smelltu á {{ui:Flytja inn}} í hópnum {{ui:Skrá}} (eða slepptu `.3dm`-skránni á þrívíddarsýnina).
2. Veldu skrána.

   Stöðustikan segir „Les chair.3dm…“ meðan hún les, og síðan hvað kom inn, til dæmis „Flutt inn chair.3dm: 14 möskvar (8330 fletir), 8 ferlar, 5 staðsetningar blokka, 3 lög sem merki. Yfirborð: 7 fletir úr möskvum vistuðum í skránni, 29 skipt í þríhyrninga af CadCraft.“

Allt líkanið kemur sem einn hópur sem heitir eftir skránni, valinn, og sýnin þysjar að honum. Einn {{key:Mod+Z}} tekur allt aftur í burtu, þar með talin merki.

## Hvaðan þríhyrningarnir koma

ModelCraft byggir líkön úr fletum og möskvum, svo sérhvert yfirborð í skránni kemur inn sem [möskvi](topic:meshes) úr litlum flötum þríhyrningum. Fyrir hvern flöt á fjölfleti (og hverjum útdrætti) tekur ModelCraft, í þessari röð:

1. **Birtingarmöskvinn sem er vistaður í skránni.** Flest líkanforrit vista möskvann sem þau sýndu á skjánum með hverju yfirborði; þegar hann er til staðar notar ModelCraft hann óbreyttan.
2. **Eigin þríhyrningsskipting**, þegar skráin hefur engan vistaðan möskva: sléttar flatir, NURBS-yfirborð, snúningsyfirborð (kúlur, keilur, tórusar, rennibekkjaform), útdregnir ferlar og útdrættir (með götum og endalokum), skornir af jöðrum sínum. Fletir á sama fjölfleti deila jaðrapunktum sínum, svo lokaður fjölflötur kemur inn sem lokaður möskvi. Bogin svæði eru skipt þar til þríhyrningarnir liggja innan um 0.15 % af stærð hlutarins frá raunverulega yfirborðinu.
3. **Ekkert**, fyrir flöt af gerð yfirborðs sem ModelCraft les ekki enn. Stöðustikan segir hversu marga fleti, og af hvaða gerð.

Hlutinn „Yfirborð:“ á stöðustikunni segir hversu margir fletir komu úr vistuðum möskvum og hversu margir ModelCraft skipti í þríhyrninga. Jaðrar innan eins flatar í skránni eru mjúkir og jaðrar milli tveggja fleta skarpir, svo bogadreginn flötur skyggir mjúklega.

:::tip
Fyrir sem trúrust form, vistaðu skrána með birtingarmöskvum sínum í forritinu sem bjó hana til (það er venjulega sjálfgefið; valkostur „vista smátt“ sleppir þeim).
:::

## Hvað kemur inn

- **Möskvar** með hornpunktalitum sínum og áferðarhnitum.
- **Fjölfletir, yfirborð og útdrættir**, eins og lýst er hér að ofan.
- **Ferlar** (línur, fjöllínur, bogar, hringir, NURBS-ferlar og ferlar sem eru tengdir úr þeim) sem [jaðrar](topic:curves), einn hópur jaðra fyrir hvert lag.
- **Blokkir** verða að [einingum](topic:groups-components): sérhver staðsetning blokkar er staðsetning einnar einingar, svo breyting á einu eintaki breytir þeim öllum. Blokkir inni í blokkum haldast.
- **Lög** verða að [merkjum](topic:tags) með fullu heiti lagsins („Furniture::Chairs“), falin þegar lagið var slökkt. Staðsetning hvers hlutar ber merki lags síns.
- **Litir.** Litur hluta kemur frá því sem skráin segir til um: eigin lit hans, lits lagsins hans eða grunnlit efnisins. Hann verður málning fleta hans.
- **Faldir hlutir koma inn faldir**; {{ui:Sýna allt}} sýnir þá.
- **Einingar:** skráin segir til um sína einingu; líkanið kemur inn í sinni réttu stærð.

## Hvað er skilið eftir (og sagt frá)

Hlutinn „Athugasemdir:“ á stöðustikunni nefnir allt sem kom ekki inn, og hversu margt:

- punktar og punktaský, texti, textapunktar, málsetningar, vísilínur, skyggingar, ljós, klippiplön og uppsetningaratriði;
- SubD-hlutir: breyttu þeim í möskva eða fjölfleti í forritinu sem bjó til skrána fyrst;
- fletir á yfirborðum með jafnfjarlægð og öðrum gerðum yfirborðs sem ModelCraft les ekki enn, þegar skráin vistaði engan möskva fyrir þá;
- blokkir tengdar úr öðrum skrám (aðeins skráin sem þú flytur inn er lesin);
- útdrættir með skásettum (fleygskornum) endum koma inn með ferköntuðum endum.

Áferðir efna, birtingarstillingar, nefndar sýnir, hópar og notendatexti eru ekki lesin; efni gefur aðeins grunnlit sinn.

## Takmörk

Skrár allt að 300 MB. Skemmd skrá segir hvað er að og bætir engu við; einn hlutur sem ekki er hægt að lesa er skilinn eftir og talinn, og hitt kemur inn.
