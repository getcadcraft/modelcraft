---
title: Settu hluti á prentflötinn og sendu þá í prentara
summary: Bættu atriðum úr Safni eða eigin líkani á prentflöt prentarans, raðaðu þeim, skoðaðu sneiddu lögin og sendu prentunina um USB eða netið, eða vistaðu G-code, án þess að flytja út STL-skrá fyrst.
keywords: prentstig, þrívíddarprentun, prentari, prentflötur, senda í þrívíddarprentara, sneiðari, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, safn, raða, passa allt, lagaforskoðun, fylling, stuðningar, þráður, pla, petg, viðbót, þrívíddarprentunarviðbót
from: abcf5d7e
---

{{ui:Prentstig}} raðar hlutum á prentflöt prentarans, sneiðir þá og sendir þá í prentarann. Þú flytur ekki út skrá fyrst. Það tilheyrir þrívíddarprentunarviðbótinni, sem er kveikt á sjálfgefið.

:::note
Ekkert hefur enn verið prentað á alvöru prentara með þessu. Sneiðarinn er nýr: fylgstu með fyrstu lögunum í fyrstu prentuninni þinni og notaðu lagaforskoðunina áður en þú sendir.
:::

## Það sem þú gerir

Settu líkan á prentflötinn, athugaðu að það passi, skoðaðu sneiddu lögin og sendu það í prentara eða vistaðu G-code.

## Skref

1. Smelltu á {{ui:Prentstig}} á tækjastikunni. Spjald opnast yfir sýninni og strikuð útlína sýnir prentflötinn þinn.
2. Undir **Bæta við úr Safni** skrifaðu heiti í leitarreitinn, ýttu á {{ui:Leita}} og ýttu á {{ui:Bæta við}} við niðurstöðu. Hluturinn lendir á prentfletinum í fullri stærð, eða minnkaður til að passa. Allt sem þú hefur þegar teiknað eða flutt inn og sérð í sýninni er líka á prentfletinum.
3. Undir **Á prentfletinum** athugaðu stærð hvers hlutar. Hlutur merktur **Utan prentflatar** þarf að færa. Færðu, snúðu og breyttu stærð hluta í sýninni með venjulegu verkfærunum.
4. Ýttu á {{ui:Raða á prentfletinum}} til að dreifa hlutunum, eða {{ui:Passa allt á prentflötinn}} til að minnka þá þar til þeir passa.
5. Undir **Prentarinn þinn** veldu **Prentflöt** stærð eða einn af prentarasniðunum.
6. Undir **Prentstillingar** veldu **Efni**, **Gæði** og **Fyllingu %**, og hakaðu við **Bæta við stuðningum undir yfirhengjum** ef lögunin þarfnast þeirra.
7. Ýttu á {{ui:Forskoða lög}} og færðu **Lag**-sleðann til að skoða sneiddu lögin. Ef þú breytir prentstiginu eða stillingunum á eftir, ýttu á {{ui:Forskoða lög}} aftur.
8. Undir **Tenging** veldu {{ui:USB-snúru}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} eða {{ui:PrusaLink}}. Fyrir USB ýttu á {{ui:Tengjast}}. Fyrir netprentara skrifaðu **Vistfang** hans (og **API-lykilinn** ef hann spyr), og ýttu síðan á {{ui:Prófa tenginguna}}.
9. Ýttu á {{ui:Senda í þrívíddarprentara}}. Spjaldið spyr hvort prentflöturinn sé auður og rétta efnið sé hlaðið, og sýnir tímann, efnið og hitastigin. Staðfestu til að senda.

Þú færð skilaboð um að prentarinn sé að ræsa sig. {{ui:Stöðva prentun}} slekkur á hitunum, viftunni og mótorunum. Ef þú vilt aðeins skrá, ýttu á {{ui:Vista G-code í staðinn}}.

## Athugasemdir

- USB krefst Chrome eða Edge á tölvu, og síðan verður að vera opin þar til prentuninni lýkur. Ef hún er lokuð stöðvast straumurinn.
- Netprentari verður að leyfa þessa síðu (í Moonraker bættu henni við `cors_domains`; í OctoPrint kveiktu á CORS og afritaðu API-lykil). Vafrinn þinn gæti beðið um aðgang að tækjum á netinu þínu.
- Ekkert tengist eða sendir án smells þíns.
- Listinn yfir sneiðara er undir **Sneiðari**. {{ui:CadCraft basic (innifalinn, hraðastur)}} er innbyggður. Kiri:Moto, PrusaSlicer, OrcaSlicer og Bambu Lab P2S eru eigin viðbætur sem þú kveikir á af spjaldinu eða undir {{ui:Stillingar}} › {{ui:Viðbætur}}. PrusaSlicer og OrcaSlicer nota þitt eigið eintak og vinna frá CadCraft Studio á tölvu.
- Bitar sem eru ekki lokuð föst form eru skildir eftir, og spjaldið segir þér hve stór hluti lögunarinnar það er.
- Fyrir plastefnisprentara, sjá [Sneiða fyrir plastefnisprentara](topic:resin-printing). Til að athuga eða lagfæra líkan fyrst, sjá [Stuðningar, veggþykkt, holun og lagfæring](topic:print-tools).
