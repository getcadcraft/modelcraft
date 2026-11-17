---
title: Ihanda ang model para sa 3D printing
summary: Suriin kung sarado at nakaharap sa tamang direksyon ang model, tingnan ang laki, base at mga overhang nito, ayusin ang mali, at i-download ito bilang STL o 3MF para sa iyong slicer.
keywords: 3d print, 3d printing, printer, print, slicer, stl, 3mf, watertight, closed, manifold, solid, holes, inside out, overhang, supports, base, bed, millimeters, export, fix, repair, hollow, bed size, beginner, wall thickness, print tools
from: 948e19af
---

Kailangan ng slicer ng 3D printer ng saradong hugis: walang butas, bawat face ay nakaturo palabas, at walang dumadaan sa sarili nito. Hinahanap ng {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} ang mga iyon bago mo i-download ang file.

## Suriin at i-download

1. Piliin ang gusto mong i-print: isa o higit pang group o component, o ilang face. Kapag walang napili, lahat ng ipinapakita ay ipi-print.
2. I-click ang {{ui:Export}} sa grupong {{ui:File}}, saka {{ui:Check for 3D printing (STL or 3MF)…}}.

   Nagsisimula ang dialog sa isang linya: "Ready to print", kung ilang bagay ang aayusin bago mag-print, o kung ilan ang titingnan muna. Bawat problema ay may tatlong bahagi: ano ang mali, bakit ito mahalaga, at ano ang gagawin. Kasunod nito ang laki sa millimetre, ang volume, ang bilang ng triangle at ang bed ng iyong printer.

3. Kung nakalista sa dialog ang mga dapat ayusin, i-click ang {{ui:Fix what can be fixed}} (tingnan sa ibaba). Awtomatikong uulitin ang pagsusuri.
4. I-click ang {{ui:Download 3MF}} o {{ui:Download STL}}.

Ang ipi-print ay kung ano ang nakikita mo: ang mga nakatagong face, nakatagong group at component, at anumang nasa nakatagong tag ay hindi isasama. Palaging nasa millimetre ang mga sukat, ang unit na inaasahan ng mga slicer, anuman ang unit na ipinapakita ng model.

:::tip
Piliin ang 3MF kung binabasa ito ng iyong slicer: pinananatili nito ang mga kulay at unit. Walang kulay at unit ang STL, at ipinapalagay ng mga slicer na millimetre ang mga ito.
:::

## Ano ang hinahanap ng pagsusuri

Ang mga ito ay humihinto sa pag-print o sumisira dito, at ginagawang "Not ready to print" ang dialog:

| Problema | Ano ang ibig sabihin | Ano ang gagawin |
|---|---|---|
| Face sa isang gilid lamang | Butas: may face ang isang edge sa isang gilid at wala sa kabila | Iguhit ang nawawalang face (kadalasang nagsasara ang linyang nasa ibabaw ng agwat), o gamitin ang {{ui:Fix}} (sa ibaba) |
| Pinagsasaluhan ng tatlo o higit pang face | Nagtatagpo ang mga face sa isang palikpik o pader sa loob ng solid | Burahin ang panloob na face |
| Magkasalungat ang direksyon ng mga face | May ilang face na nakaturo papasok, ang iba palabas | Piliin ang mga face na nakaturo papasok at i-click ang {{ui:Reverse face}} sa {{ui:Entity info}} |
| Nakabaligtad | Ang buong saradong bahagi ay nakaturo papasok | Piliin ang mga face nito at baligtarin ang mga ito |
| Dumadaan sa sarili | Tumutupi ang isang bahagi sa sarili nito | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, saka burahin ang nasa loob. Tingnan ang [Intersect faces](topic:intersect) |

Ang mga ito ay babala: mai-print pa rin ang model, pero tingnan muna.

- **Nagkakapatong ang magkakahiwalay na bahagi**, o **nagdidikit nang face sa face**: karaniwang pinagsasama ng mga slicer ang mga ito sa iisa. Para sa mas malinis na file, pagdugtungin ang mga ito gamit ang {{ui:Solids}} › {{ui:Union}}. Tingnan ang [Mga solid tool](topic:solids).
- **Walang nakahiga nang patag sa ilalim**: paikutin ang model para dumapo ang isang face sa bed, kung hindi ay maglalagay ang slicer ng support o raft.
- **Lumalabas nang higit sa 45° mula sa patayo**: kailangan ng support ang mga face na iyon. Sinasabi ng dialog kung gaano karami ng surface ang ganoon.
- **Wala pang 1 mm ang lapad**: malamang na nagmodelo sa maling unit. Suriin ang unit sa status bar.

Ang nakahulog na bahagi (isang saradong shell sa loob ng isa pa) ay ayos lang: nakaturo sa loob ng guwang ang mga face nito, at inaalis ang volume nito.

## Ayusin ang mga problema

Sa ilalim ng **Where the problems are**, pinangalanan ng dialog ang bawat group o component na may mali, kasama kung ano ang mali dito (ang mga maluwag na face na wala sa group ay nakalista bilang "Faces not in a group"). Ang component na inilagay nang maraming beses ay nakalista nang isang beses: ang pag-ayos nito ay nag-aayos ng bawat kopya.

- Ang {{ui:Show}} ay nagbubukas ng group na iyon at pinipili ang mga edge at face na mali, para ipakita ang mga ito na naka-highlight.
- Inaayos ng {{ui:Fix what can be fixed}} ang lahat nang sabay-sabay: isinasara nito ang mga butas na ang mga edge ay nakahiga nang patag, tinatanggal ang mga face sa loob ng hugis at ang mga ligaw na edge, at ibinabaling nang tama palabas ang mga face. Isang hakbang ito: ang {{key:Mod+Z}} ay nag-u-undo nito. Pagkatapos, uulitin ang pagsusuri at ipapakita kung ano ang natitira.

Ang hindi nito kayang ayusin (butas na hindi nakahiga nang patag ang mga edge, bahaging dumadaan sa sarili) ay nananatili sa listahan kasama ang kung ano ang gagawin nang mano-mano. Ang {{ui:Repair}} sa ilalim ng **Print tools** ay lumalampas pa: isinasara nito ang butas na hindi patag, tinatanggal ang mga ligaw na piraso at dobleng face, at inililista ang bawat ayos. Tingnan ang [Supports, wall thickness, hollowing at repair](topic:print-tools#repair). Maaari mo ring ayusin ang isang group sa isang pagkakataon: piliin ito, saka gamitin ang {{ui:Show problems}} at {{ui:Fix}} sa {{ui:Entity info}}. Tingnan ang [Mga solid tool](topic:solids).

## Isang guwang na bahagi

Ang {{ui:Hollow}} sa ilalim ng **Print tools** ay ginagawang guwang ang bahagi sa kapal ng pader na ibibigay mo, na may mga drain hole kung saan ka mag-click. Tingnan ang [Hollow](topic:print-tools#hollow).

Maaari mo ring iguhit ang guwang nang mag-isa: isang saradong group sa loob ng bahagi, hindi nakadikit dito, na may lahat ng face nito na nakabaligtad para tumingin papasok sa guwang. Binibilang ito ng pagsusuri bilang guwang at inaalis ang volume nito; hindi ito nakalista bilang dapat ayusin.

## Bed ng iyong printer

Piliin ang laki ng bed ng iyong printer sa {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. Nagbababala ang pagsusuri kapag mas malaki ang model kaysa sa bed, sa alinmang paikot nito. Tingnan ang [Mga setting](topic:settings#3d-printer-bed).

## Mga print tool

Sa ilalim ng mga resulta ng dialog, binubuksan ng **Print tools** ang {{ui:Supports preview}} (kung saan pupunta ang support at tinatayang gaano karami), {{ui:Wall thickness}} (mga wall na masyadong manipis para ma-print), {{ui:Hollow}} at {{ui:Repair}}. Tingnan ang [Supports, wall thickness, hollowing at repair](topic:print-tools). Pinuputol ng {{ui:Split for printing}} ang model na masyadong malaki para sa bed sa mga piraso na may connector at may numerong joint: tingnan ang [Hatiin ang malaking model para sa pag-print](topic:print-split).

## Hindi sinusuri

Hindi nagsa-slice ang pagsusuri: ang maliliit na detalyeng hindi kayang iguhit ng iyong nozzle at ang mga totoong support ay sa iyong slicer. Tingnan ang [Hindi pa nagagawa](topic:not-built-yet#3d-printing).
