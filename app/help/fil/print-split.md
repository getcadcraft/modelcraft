---
title: Hatiin ang malaking model para sa pag-print
summary: Hiwain ang model na masyadong malaki para sa printer mo sa mga piraso na kasya sa bed, may pegs, keys, dovetails, dowel o magnet holes, at numero ng joint sa magkabilang face, at i-download ang bawat piraso at ang assembly sheet sa iisang zip.
keywords: 3d print, hiwa, split, hilig, hilig na cut, angled cut, oblique, splitter, cut, masyadong malaki, laki ng bed, build volume, mga piraso, parts, connectors, pegs, keys, dovetail, dowel, magnet, clearance, tolerance, part numbers, assembly, exploded view, zip, stl, 3mf, lisensya, license, usb key, dongle
from: ee96ba77
---

Kapag mas malaki ang model kaysa sa bed ng printer mo, **Split para sa pag-print** ang humihiwa rito sa mga piraso na kasya, nagdadagdag ng connectors para magtugma ang mga piraso kapag pinagsama mo, at nag-e-engrave ng parehong numero sa magkabilang face ng bawat joint. Buksan ang {{ui:Export}} › {{ui:Suriin para sa 3D printing (STL o 3MF)…}}; ang linya ng dialog na **Mga print tool** ay may {{ui:Split para sa pag-print}}. Bumubukas ito bilang card sa ibabaw ng view.

Gumagana ito sa mga ipi-print: ang selection, o lahat ng nakikita kapag walang napili. Ang ipi-print ay dapat closed solid; kung makakita ng butas ang check, gamitin muna ang [Repair](topic:print-tools#repair).

Tumatakbo ito sa ModelCraft, sa computer mo: walang license server, walang USB key, walang ina-upload.

## Paano hiwain

- **Kasyahin sa bed, pinakakaunting piraso**: ibigay ang lapad, lalim at taas ng bed (nagsisimula ang mga ito sa {{ui:Mga setting}} › ModelCraft › 3D printer). Sinasabi ng card kung ilang piraso ang kailangan at kung gaano kalaki ang bawat isa; hinihiwa nito ang model sa pantay na piraso, pinakakaunti hangga't kasya. Maaaring nakahiga sa gilid ang isang piraso sa mga file kung iyon ang magpapakasya rito. Kasama sa laki ng piraso ang mga connector na lumalabas dito.
- **Sa mga lugar na ibibigay ko**: piliin ang axis na hihiwain at i-type kung saan, sa millimetro mula sa mababang dulo ng model, na may kuwit sa pagitan (ang `100, 200` ay gagawa ng tatlong piraso).
  **Hilig** ay nagpapaikot ng mga cut hanggang 60° sa isa sa dalawang ibang axis (halimbawa, cut sa Z na hilig sa paligid ng X): dumadaan ang bawat hilig na cut sa gitnang linya ng model sa lugar nito, nagbibigay sa mga piraso ng mas malaking gluing area, at mas natatakpan ang joint sa nakahilig na surface. Nakatayo nang patayo sa cut ang mga connector.

Iginuguhit sa paligid ng model ang mga cut plane bilang dashed lines habang bukas ang card.

## Mga connector

Bawat lugar kung saan nagdidikit ang dalawang piraso ay may connectors, awtomatikong inilalagay kung saan may pinakamaraming espasyo: may layong hindi bababa sa **pinakamanipis na pader** kasama ang **clearance** at ang sarili nilang laki mula sa labas, at sapat na layo sa bawat ibang cut para hindi kailanman magkatagpo ang dalawang butas. Sa mahabang face, dalawang connector ang ikinakalat sa kahabaan nito, para hindi maikot ang mga piraso.

- **Bilog na peg**: isang peg sa isang piraso (may chamfer sa dulo), at butas sa kabila.
- **Parisukat na key**: pareho, parisukat, para isang direksyon lang makapasok ang piraso.
- **Dovetail**: dilang dumudulas sa slot mula sa gilid. Kapag ang isang dulo ng slot ay tatama sa ibang cut, humihinto nang maikli ang dovetail at dumudulas mula sa bukas na dulo. Bagay ang dovetail sa mga cut sa iisang direksyon (hanay ng mga hiwa); sa grid, gumamit ng peg o dowel.
- **Butas ng dowel**: butas sa bawat panig; ipi-print din ang mga pin (nasa zip).
- **Bulsa ng magnet**: bulsa sa bawat panig para sa bilog na magnet na may diametro at kapal na ibibigay mo. I-check ang mga pole bago idikit.
- **Wala (glue)**.

Ang **clearance** ay ang puwang sa bawat panig sa pagitan ng peg at ng butas nito (0.2 mm sa simula). Totoo ito sa numerong ibibigay mo: bahagyang ginagawang mas malaki ang bilog na butas para ang mga patag na gilid nila, hindi ang mga sulok, ang may hawak ng puwang na iyon. Itaas ito kung masyadong masikip ang lumalabas na mga piyesa ng printer mo.

Kapag walang espasyo para sa connector ang isang joint (manipis na pader, maliit na dikit na bahagi), sinasabi ito ng card: idikit na lang ang joint na iyon.

## Mga part number

Kapag naka-on ang **I-engrave ang joint numbers sa magkabilang face**, bawat joint ay may numero ng dalawa nitong piraso, gaya ng `3-4`, na in-engrave nang 0.6 mm ang lalim sa magkabilang face, nababasa nang tama sa bawat isa. Nagsisimula sa 5 mm ang taas ng mga numero at lumiliit para kumasya, hanggang 2.5 mm; nakalista ang joint na walang espasyo para sa numero nito. Ninumerohan ang mga piraso mula sa pinakailalim na layer pataas.

## Preview, i-download, i-split ang model

1. {{ui:Preview}} ay humihiwa sa model at sinasabi kung ilan ang piraso, joint at connector, kung ang bawat piraso ay pumapasa sa 3D-print check at kasya sa bed, at inililista ang laki ng bawat piraso. Naglalagay ng singsing sa bawat connector at numero sa view.
2. {{ui:I-download ang mga piraso (.zip)}} ay nagse-save ng isang zip: isang file bawat piraso (STL o 3MF, ayon sa pipiliin mo sa ilalim ng **Files**), bawat isa ay nakatayo sa bed; ang mga dowel pin; at ang **assembly sheet**, isang larawan ng mga piraso na nakahiwalay kasama ang kanilang mga numero (`assembly.svg` at `assembly.png`), at isang listahan ng mga piraso at joint (`assembly.txt`).
3. {{ui:I-split ang model}} ay inilalagay ang mga piraso sa model kapalit ng napiling mga group o component, pinangalanan gaya ng nasa assembly sheet, sa isang hakbang: ibinabalik ng {{ui:I-undo}} ang orihinal. Kailangan nitong napiling mga group o component na hahatiin; gumagana ang download sa anumang maaaring i-print.

## Ilipat ang mga connector nang mano-mano

Pagkatapos ng preview, hinahayaan ka ng **Connectors nang mano-mano** na itama kung saan pupunta ang mga connector:

- {{ui:Ilipat ang isa}}: i-click ang pulang singsing sa view (magiging berde ito), tapos i-click kung saan ito dapat pumunta sa cut.
- {{ui:Magdagdag ng isa}}: i-click sa view kung saan dapat pumunta ang connector. Mapupunta ito sa cut plane na naabot ng click mo, sa pagitan ng dalawang piraso roon.
- {{ui:Alisin ang isa}}: i-click ang pulang singsing para alisin ang connector na iyon.

Sinusuri ulit ang bawat pagbabago gaya ng mga awtomatiko: hindi gagawin ang puwesto na masyadong malapit sa outline, sa ibang cut o sa ibang connector, at sinasabi ito ng card. Kinakalimutan ng {{ui:Awtomatiko ulit}} ang mga puwesto mo. Nananatili ang mga ito habang nananatiling pareho ang model, ang selection at ang mga cut.

Nananatili ang preview hangga't hindi nagbabago ang model, ang selection o isang setting; pagkatapos, hihingi ang card na mag-preview ulit.

:::note
Bawat piraso ay sinusuri gaya ng pagsusuri ng 3D-print check bago mo i-download. Ang slicer mo pa rin ang nagpapasya kung paano ipi-print ang bawat piraso: tingnan ang bawat isa roon, at mag-print muna ng isang joint para makita kung paano hinaharap ng printer mo ang clearance.
:::
