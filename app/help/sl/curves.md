---
title: Krivuljni predmeti
summary: Narišite krivulje Bézier, NURBS in ravnih segmentov, jim dajte debelino, širino ali zožitev, zapolnite ploske krivulje, nastavite besedilo kot krivuljo in jih spremenite v mreže.
keywords: krivulja, krivulje, bezier, nurbs, zlepek, spline, zlepki, pot, cev, tuba, kabel, vrv, skos, iztisni, zožitev, nagib, polmer, polnilo, profil, besedilo, črke, logotip, krivulja v mrežo
from: 602bf077
---

**Krivuljni predmet** je krivulja, ki naredi obliko: cev vzdolž nje (skos), trak (iztisni), zoženi rog (zožitev) ali – kadar je ploska in zaprta – zapolnjena plošča ali črke. Oblika sledi krivulji: premaknete točko in cev se premakne z njo. Ko je oblika prava, jo spremenite v mrežo.

## Dodajte krivuljo

Izberite {{ui:Krivulja}} v seznamu delovnih prostorov in pritisnite {{ui:Dodaj}}:

| Vrsta | Kaj je |
| --- | --- |
| Krivulja Bézier, krog Bézier | Gre skozi svoje točke; vsaka točka ima dve ročici, ki določata smer krivulje |
| Krivulja NURBS, krog NURBS, Pot | Gladka, riše se proti svojim točkam (začne in konča se v svojih končnih točkah); vsaka točka ima utež |
| Besedilo | Vaše besedilo kot ravne, zapolnjene obrise črk |

Nova krivulja dobi tanko cev, da jo je videti in izbrati; za golo krivuljo nastavite globino skosa na 0.

Lahko začnete tudi z nečim narisanim: izberite lok, krog, mnogokotnik ali narisano krivuljo v delovnem prostoru Model in pritisnite {{ui:Naredi objekt krivine}} v {{ui:Podatki o entiteti}}. Narisane črte ostanejo.

## Uredite točke

Dvokliknite krivuljni predmet (ali ga izberite in izberite {{ui:Krivulja}}), da ga uredite.

- Kliknite točko ali ročico (Shift doda ali odstrani); povlecite jo, da jo premaknete. Povlecite po prazni površini, da izberete z okvirjem.
- {{ui:Podaljšaj}} ({{key:E}} ali {{key:Ctrl}}+klik) doda točko za izbranim koncem, na kazalcu.
- {{ui:Razdeli}} ({{key:W}}) postavi točko med vsak par izbranih sosedov; krivulja Bézier ohrani svojo obliko.
- {{ui:Premakni (M)}}, {{ui:Zasukaj}}, {{ui:Merilo (S)}} premaknejo izbrane točke s kazalcem (tipke modelarja {{key:G}} {{key:R}} {{key:S}}, tipke potisni/povleci {{key:M}} {{key:Q}} {{key:S}}); kliknite, da ohranite, {{key:Esc}} za preklic.
- {{ui:Zapri}} ({{key:C}}) zapre odprt zlepek ali odpre zaprtega; {{ui:Obrni}} ({{key:Shift+R}}) ga požene v nasprotno smer.
- Ročice Bézier: {{ui:Zgladi}} ({{key:V}}) jih postavi za gladko krivuljo, {{ui:Oglišče}} ({{key:Shift+V}}) jih usmeri proti sosedom, {{ui:Prosto}} ({{key:Alt+V}}) pa jih pusti tam, kamor ste jih dali. Povlečenje ročice jo naredi prosto.
- {{ui:Bézier}}, {{ui:NURBS}} in {{ui:Poly}} spremenijo vrsto izbranih zlepkov, točke ohranijo.

Vsaka sprememba je en korak razveljavitve.

## Oblika

Nastavitve so v podoknu (in v podatkih o entiteti v delovnem prostoru Model):

- **Oblika:** 3D krivulje gredo kamorkoli; ravna krivulja ostane v svoji ravnini in se lahko zapolni.
- **Zapolni zaprte zlepke** (ravne): obrisi postanejo plošča; obris znotraj drugega je luknja, zato črke ohranijo svoje luknje.
- **Iztisni:** polovica širine traku (odprte ali 3D krivulje) ali polovica debeline plošče (zapolnjeno).
- **Globina skosa** in **zaobljenost:** okrogla cev vzdolž krivulje (pri iztisnitvi: zaobljen trak); pri zapolnjeni obliki zaobljen rob.
- **Zapri konce:** pokrovčki na odprti cevi.
- **Zoženje vzdolž:** enakomerno skalira vzdolž vsakega zlepka, na primer `1, 0.2` za rog, `0, 1, 0` za vreteno.
- **Gladkost** in za NURBS **red**: kako natančno je narisana in kako gladka je (2 ravno … 6 najgladkejše).
- Z izbranimi točkami: **polmer** (debelina cevi tam, krat skos), **nagib** (zavrti trak okoli krivulje) in za NURBS **utež**.

Modifikatorji delujejo na vrhu krivuljnega predmeta kot na mreži: razpostavitev vzdolž nje, Zrcali, površina Subdivision. Glejte [Modifikatorji na mreži](topic:modifiers).

## Spremenite v mrežo

{{ui:V mrežo}} (v delovnem prostoru Krivulja ali v podatkih o entiteti, {{ui:Krivina v mrežo}}) naredi krivuljni predmet v mrežo, kakršna je zdaj; njegovi modifikatorji ostanejo na vrhu. Nato jo uredite v delovnem prostoru Mreža. Razveljavitev jo vrne nazaj.

Glejte tudi [Mreže](topic:meshes) in [Urejanje mreže](topic:mesh-edit).
