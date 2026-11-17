---
title: Animeer die kamera en voorwerpe, en weergee 'n video
summary: Stel sleutels vir die kamera en vir groepe en komponente op 'n tydlyn, speel dit in die aansig, en weergee die animasie na 'n WebM-video met die weergeër se lug, son en materiale.
keywords: animasie, animeer, tydlyn, sleutelraam, sleutels, sleutelraamsleutel, kameraroete, vlieg deur, vlugdeur, wandeltoer, wandel deur, video, film, webm, weergee video, rame, raamspoed, fps, speelkop, outosleutel, versag, glad, hou, tonele, PNG-reeks, beweging
from: d3a58249
---

Die **tydlyn** skuif die kamera en enige groep of komponent oor tyd. Jy stel **sleutels** (waar iets op 'n gegewe oomblik is); ModelCraft skuif dit glad van sleutel tot sleutel. Speel dit in die aansig, en weergee dit dan na 'n video met dieselfde lug, son, materiale en lampe as ['n gerendeerde prent](topic:render).

## Maak die tydlyn oop

Klik {{ui:Aansigte}} in die {{ui:Kamera}}-groep, dan {{ui:Animasietydlyn}}. Die tydlyn open onder die aansig: die kontroles langs die bopunt, dan 'n **Kamera**-ry en 'n ry vir elke groep of komponent wat beweeg. Die diamante is sleutels; die rooi lyn is die **speelkop**, die oomblik wat in die aansig gewys word.

:::touch
Op 'n foon open die tydlyn ook onder die aansig. Sy kontroles is een ry: veeg dit sywaarts om by die res uit te kom; die knoppie wat die tydlyn toemaak, bly aan sy einde.
:::

Sleep die skuiwer (of klik in 'n ry) om die speelkop te skuif. {{ui:Speel}} speel vanaf die speelkop en verander in {{ui:Pouseer}} terwyl dit speel; klik dit weer om waar dit is te stop. {{key:Space}} doen dieselfde terwyl die tydlyn oop is (met die tydlyn toe, is Space steeds Kies). {{ui:Vorige sleutel}} en {{ui:Volgende sleutel}} spring tussen sleutels. 'n Styl van jou eie kan speel en pouseer 'n ander sleutel gee: {{ui:Instellings}}, dan die menu's, sleutels en muis, die opdrag *Speel of pouseer die animasie*.

## Beweeg die kamera

1. Skuif die speelkop na waar die skoot begin (0 s), stel die aansig op, en klik {{ui:Sleutelkamera}}.
2. Skuif die speelkop later (sê 4 s), wentel, pan of stap met die aansig na die volgende posisie, en klik {{ui:Sleutelkamera}} weer.
3. Voeg soveel sleutels by as jy wil, en druk dan {{ui:Speel}}.

Die kamera gaan glad deur elke sleutel en begin en eindig in rus.

:::tip
Het jy reeds [tonele](topic:scenes)? {{ui:Uit tonele}} maak die kamera se pad daaruit: dit hou by elke toneel, en beweeg dan na die volgende. As die tydlyn helemaal geen sleutels het nie, doen {{ui:Weergee video…}} dit self, so twee tonele of meer is genoeg vir 'n stapvideo.
:::

## Beweeg 'n groep of komponent

1. Kies die groep of komponent (slegs hele groepe en komponente beweeg; [maak eers 'n groep](topic:groups-components)).
2. Klik op 0 s {{ui:Sleutel gekies}}.
3. Skuif die speelkop later, [skuif, draai of skaal](topic:move-copy) die groep waarheen dit moet, en klik {{ui:Sleutel gekies}} weer.

Dit gly, draai en groei tussen sy sleutels. Draaie neem die kort pad rond.

**Outosleutel** spaar stap 3 se klik: solank {{ui:Outosleutel}} aan is, kry 'n gekose groep of komponent wat jy skuif, draai of skaal 'n sleutel by die speelkop vanself (en, die eerste keer, 'n sleutel op 0 s waar dit was).

:::note
Om 'n geanimeerde groep sonder 'n sleutel te skuif, hou net tot die speelkop beweeg: die volgende keer dat jy speel of skrop, gaan dit terug waar sy sleutels dit plaas. Die statusbalk sê dit. Druk {{ui:Sleutel gekies}} om dit te hou.
:::

## Verander sleutels

- **Kies 'n sleutel** deur op sy diamant te klik: die speelkop gaan daarheen.
- **Skuif 'n sleutel** deur sy diamant langs sy ry te sleep, of met {{key:Left}} en {{key:Right}} (een raam; met {{key:Shift}}, tien).
- **Verwyder** met {{ui:Skrap sleutel}} (die gekose sleutel, of elke sleutel by die speelkop) of {{key:Delete}} op 'n gekose diamant.
- **Hoe dit voortbeweeg**, vir die gekose sleutel: {{ui:Gladmaak}} (’n kromme deur die sleutels rondom), {{ui:Gelykmatig}} (’n reguit lyn teen een spoed), {{ui:Stadig in en uit}} (kom in rus by hierdie sleutel) of {{ui:Hou}} (bly staan tot die volgende sleutel).
- **Lengte (s)** stel hoe lank die animasie is; 'n sleutel wat na die einde gestel word, maak dit langer. Om dit korter te maak, skuif of verwyder eers die sleutels verby die nuwe einde.
- Die **×** op 'n groep se ry stop om dit te animeer.

Die tydlyn het sy eie {{ui:Ontdoen}} en {{ui:Herdoen}}: die model se ontdoen ({{key:Mod+Z}}) verander die model, nie die sleutels nie. Die animasie word in die `.modelcraft`-lêer gestoor. Om die tydlyn toe te maak, sit bewegende groepe terug in hul eerste pose.

## Weergee die video

1. Klik {{ui:Weergee video}} op die tydlyn (of {{ui:Voer uit}} › {{ui:Weergee video…}}).
2. Kies die {{ui:Grootte}}, die {{ui:Raamspoed}}, die {{ui:Gehalte van elke raam}} en die {{ui:Lêer}}.
3. Klik {{ui:Weergee video}}. Elke raam wys soos dit gemaak word, met die tyd wat oorbly.
4. Wanneer dit klaar is, klik {{ui:Stoor video}}.

{{ui:Stop}} (of {{key:Esc}}) eindig vroeg; {{ui:Stoor video}} hou dan die rame wat reeds gemaak is as 'n korter video.

Die lug, son, materiale, lampe en helderheid is dié wat in {{ui:Weergee 'n prent…}} gestel is: stel hulle daar eers, en kontroleer 'n stilprent. Elke raam word op hierdie rekenaar gerendeer; niks word opgelaai nie.

| Instelling | Wat dit doen |
|---|---|
| {{ui:Grootte}} | 480p, 720p HD, 1080p Full HD, of die aansig se eie vorm (tot 1920 pixels breed) |
| {{ui:Raamspoed}} | 24, 25, 30 of 60 rame per sekonde. Twee keer die rame neem twee keer so lank |
| {{ui:Gehalte van elke raam}} | {{ui:Vinnig}} (4 deurgange), {{ui:Konsep}} (16) of {{ui:Goed}} (64): meer deurgange gee gladder skaduwees en rande |
| {{ui:Lêer}} | {{ui:WebM-video}}, {{ui:MP4-video (H.264)}} waar die blaaier dit kan skryf, of {{ui:PNG-prente, een per raam (ZIP)}} vir videoredigeerders (en vir blaaiers sonder 'n video-enkodeerder) |

:::tip
'n 10-sekonde video teen 30 rame per sekonde is 301 rame. Probeer eers {{ui:Vinnig}} op 480p om die beweging te kontroleer, en weergee dan {{ui:Konsep}} of {{ui:Goed}} op 'n groter grootte.
:::

WebM speel in blaaiers en VLC, en videoredigeerders skakel dit om. {{ui:MP4-video (H.264)}} word aangebied waar die blaaier dit kan skryf. {{ui:Weergee video}} gebruik die vinnige weergeër; om elke raam met padspoor te weergee, kies {{ui:Voeg hierdie animasie by die reeks}} in dieselfde dialoog: die rame word in die [weergee-reeks](topic:render#the-render-queue) gerendeer, wat WebGPU nodig het.

:::firefox safari
'n Video weergee benodig 'n blaaier wat self video enkodeer (WebCodecs): onlangse Chrome, Edge, Firefox en Safari 17 doen dit. Sonder dit, kies {{ui:PNG-prente, een per raam (ZIP)}}.
:::

## Dinge om te weet

- Slegs hele groepe en komponente beweeg. Vlakke, rande, die son se tyd en die styl verander nog nie oor tyd nie.
- {{ui:Voer animasie uit}} onder [Tonele](topic:scenes) neem steeds die aansig op soos dit op die skerm is, in werklike tyd; {{ui:Weergee video}} rendeer elke raam met lug, skaduwees en materiale.
