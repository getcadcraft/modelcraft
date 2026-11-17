---
title: Paka rangi kwa rangi na nyenzo
summary: Kipe nyuso, vikundi na vipengele rangi thabiti au nyenzo kama tofali, ubao wa ukuta, vigae vya paa au mbao, na uvihifadhi unaposafirisha.
keywords: paka rangi, rangi, rangi, nyenzo, umbile, umbile, tofali, ubao wa ukuta, vigae vya paa, paa, mbao, jiwe, vigae, zege, stucco, nyasi, changarawe, kioo, chuma, ndoo ya rangi, jaza, sampuli, kichagua rangi, chaguo-msingi, glb, obj, mtl, collada
from: b1500523
---

Rangi zinakusaidia kutofautisha sehemu za modeli, na **nyenzo** (tofali, ubao wa ukuta, paa, mbao, jiwe, vigae, zege, stucco, nyasi, kioo, chuma) zinaifanya ionekane kama ilivyojengwa kwa vitu gani. Zote mbili hupakwa kwa namna ile ile.

## Chagua rangi

Sehemu ya {{ui:Rangi}} upande wa kulia inaonyesha safu ya rangi thabiti, {{ui:Chaguo-msingi}} (ile iliyovukwa na mstari: hakuna rangi) na kipande cha {{ui:+}} kwa rangi nyingine yoyote. Bofya moja ili iwe rangi ya sasa. Zana ya Rangi huanza nayo.

## Paka rangi

1. Bonyeza {{key:B}} ({{ui:Rangi}}), au, bila kitu chochote kilichochaguliwa, bofya rangi. (Kikiwa na kitu kilichochaguliwa, kubofya rangi hupaka uteuzi mara moja.)
2. Bofya uso ili kuupaka rangi.
3. Bofya kikundi au kipengele ili kupaka nakala hiyo: nyuso zake ambazo hazina rangi yake yenyewe zinachukua rangi hii. Nyuso ulizopaka ndani yake zinabaki na rangi zao.

Ili kupaka vitu kadhaa kwa wakati mmoja, vichague kwanza kisha bofya rangi, au bofya kimojawapo kwa {{ui:Rangi}}. Ni hatua moja ya kutendua.

| Shikilia | Kisha bofya uso | Kinachopakwa |
|---|---|---|
| — | | Uso huo |
| {{key:Ctrl}} | | Nyuso zote zilizounganishwa nao zenye rangi ile ile |
| {{key:Shift}} | | Nyuso zote zenye rangi hiyo katika kikundi unachofanyia kazi |
| {{key:Alt}} | | Hakuna: badala yake unachukua rangi hiyo |

Ili kurudisha uso bila rangi, chagua {{ui:Chaguo-msingi}} kisha ubofye.

## Paka kwa nyenzo

Sehemu ya {{ui:Nyenzo}}, chini ya {{ui:Rangi}}, inaorodhesha maktaba ya nyenzo kwa aina: tofali na block, ubao wa ukuta, paa, mbao, jiwe, vigae, zege, stucco, ardhi, kioo na chuma. Elekeza kipande ili kuona jina lake. Bofya moja, kisha upake nayo kama ilivyo kwa rangi: {{key:B}}, bofya nyuso, vikundi au vipengele; au chagua kwanza kisha bofya nyenzo.

- Katika mtindo wa **Shaded** nyuso zinaonyesha umbile la nyenzo. Hidden line, wireframe na x-ray zinaonyesha rangi yake.
- Umbile hupangwa **sawa kando ya kila uso** na **juu yake**: safu za tofali zinabaki sawa kwenye kila ukuta, vigae vya paa vinashuka kwenye mteremko wa paa, mbao za sakafu zinafuata mhimili mwekundu. Zina ukubwa wake halisi (tofali lina urefu wa takriban 215 mm), kwa hiyo zinaonekana sawa kutoka umbali wowote.
- Katika [picha iliyotengenezwa](topic:render) nyenzo huhifadhi umbile lao, ukwaru wao na, kwa kioo na chuma, mng'ao wao.
- {{key:Alt}}-bofya kwa {{ui:Rangi}} pia huchukua nyenzo ya uso.

Umbile zinachorwa na ModelCraft yenyewe, kwa hiyo zinafanya kazi nje ya mtandao na ni bure kutumia kwa chochote (CC0).

## Vipengele na rangi

Rangi iliyopakwa kwenye uso **ndani** ya kipengele huonekana kwenye kila nakala, kwa sababu nakala zinashiriki ufafanuzi mmoja. Rangi iliyopakwa kwenye **nakala** kutoka nje (kipengele kikiwa kimefungwa) ni ya nakala hiyo pekee, kwa hiyo nakala mbili za kipengele kimoja zinaweza kuwa na rangi tofauti. {{ui:Taarifa ya kitu}} huonyesha rangi ya uso, kikundi au kipengele kilichochaguliwa.

## Rangi katika faili

- Faili ya ModelCraft huhifadhi kila rangi na kila nyenzo.
- Miundo mingine hupata **rangi ya nyenzo** (mwonekano wake kwa mbali) badala ya umbile: glTF, Collada, OBJ, DWG na DXF, pamoja na ukaguzi wa uchapishaji wa 3D. Katika glTF, Collada na OBJ nyenzo huhifadhi jina lake, kama `Material_brick-red`.
- **glTF (.glb)** na **Collada (.dae)**: kila rangi inakuwa nyenzo. Kipengele kinachoonyeshwa kwa rangi tofauti huandikwa mara moja kwa kila rangi. glTF pia huandika umbile zilizoletwa kama umbile.
- **OBJ**: kusafirisha hupakua faili mbili, `.obj` na faili ya nyenzo `.mtl` yenye rangi. Ziweke kwenye folda moja. Kwa umbile zilizoletwa, `.obj`, `.mtl` na picha zinakuja kama `.zip` moja.
- **DWG** huhifadhi rangi halisi; **DXF** hutumia rangi iliyo karibu zaidi kati ya rangi 255 za kawaida za CAD.
- **STL** na **PLY** hubeba rangi: STL kwa mpangilio wa VisCAM / SolidView (programu zisizoisoma hazizingatii), PLY kama rangi kwenye kila nukta. Tazama [Miundo ya faili kwa undani](topic:formats).

:::tip
Ili kuunda modeli ya skrini, paka fremu rangi ya mkaa na kioo rangi ya bluu baada ya kunakili uso wa mbele kwa [umbali](topic:draw-faces).
:::
