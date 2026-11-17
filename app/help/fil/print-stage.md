---
title: Maglagay ng mga bagay sa print bed at ipadala ang mga ito sa printer
summary: Magdagdag ng mga item mula sa Library o sarili mong model sa bed ng printer mo, ayusin ang mga ito, tingnan ang mga sliced layer, at ipadala ang print sa pamamagitan ng USB o network, o i-save ang G-code, nang hindi muna nag-e-export ng STL.
keywords: print stage, 3d print, printer, bed, ipadala sa 3d printer, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, library, ayusin, pagkasyahin lahat, layer preview, infill, supports, filament, pla, petg, add-on, 3d print add-on
from: abcf5d7e
---

Inaayos ng {{ui:Yugto ng print}} ang mga bagay sa bed ng printer mo, hinihiwa ang mga ito sa layers at ipinapadala sa printer. Hindi ka muna nag-e-export ng file. Bahagi ito ng 3D Print add-on, na naka-on bilang default.

:::note
Wala pang naipi-print sa totoong printer gamit ito. Bago pa lang ang slicer: bantayan ang unang layers ng unang print mo, at gamitin ang layer preview bago ka magpadala.
:::

## Ang gagawin mo

Maglagay ng model sa bed, tiyaking kasya ito, tingnan ang mga sliced layer, at ipadala ito sa printer o i-save ang G-code.

## Mga hakbang

1. I-click ang {{ui:Yugto ng print}} sa toolbar. Bubukas ang isang card sa ibabaw ng view, at ipinapakita ng dashed outline ang bed mo.
2. Sa ilalim ng **Magdagdag mula sa Library**, mag-type ng pangalan sa search box, pindutin ang {{ui:Hanapin}} at pindutin ang {{ui:Add}} sa isang resulta. Mapupunta ang item sa bed sa buong laki, o liliit para kumasya. Kasama rin sa bed ang anumang nagawa mo o na-import na at nakikita sa view.
3. Sa ilalim ng **Sa bed**, tingnan ang laki ng bawat item. Kailangang ilipat ang item na may markang **Wala sa bed**. Ilipat, i-rotate at i-scale ang mga bagay sa view gamit ang karaniwang tools.
4. Pindutin ang {{ui:Ayusin sa bed}} para ikalat ang mga item, o {{ui:Pagkasyahin lahat sa bed}} para paliitin ang mga ito hanggang kumasya.
5. Sa ilalim ng **Printer mo**, piliin ang laki ng **Bed** o isa sa mga printer profile.
6. Sa ilalim ng **Print settings**, piliin ang **Material**, ang **Quality** at ang **Infill %**, at lagyan ng check ang **Magdagdag ng supports sa ilalim ng overhangs** kung kailangan ng hugis.
7. Pindutin ang {{ui:Preview ng layers}} at ilipat ang slider na **Layer** para tingnan ang mga sliced layer. Kung babaguhin mo ang yugto o ang mga setting pagkatapos, pindutin ulit ang {{ui:Preview ng layers}}.
8. Sa ilalim ng **Connection**, piliin ang {{ui:USB cable}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} o {{ui:PrusaLink}}. Para sa USB, pindutin ang {{ui:Kumonekta}}. Para sa network printer, i-type ang **Address** nito (at ang **API key** kung hinihingi), tapos pindutin ang {{ui:Subukan ang connection}}.
9. Pindutin ang {{ui:Ipadala sa 3D printer}}. Tinatanong ng card kung malinis ang bed at tama ang materyal na nakalagay, at ipinapakita ang oras, ang materyal at ang mga temperatura. Kumpirmahin para ipadala.

Makakatanggap ka ng mensahe na nagsisimula na ang printer. Pinapatay ng {{ui:Itigil ang print}} ang mga heater, fan at motor. Kung file lang ang gusto mo, pindutin ang {{ui:I-save ang G-code sa halip}}.

## Mga tala

- Kailangan ng USB ang Chrome o Edge sa computer, at dapat bukas ang page hanggang matapos ang print. Kapag isinara ito, hihinto ang stream.
- Dapat payagan ng network printer ang site na ito (sa Moonraker, idagdag ito sa `cors_domains`; sa OctoPrint, i-on ang CORS at kopyahin ang isang API key). Maaaring humingi ang browser mo ng pahintulot na maabot ang mga device sa network mo.
- Walang kumokonekta o nagpapadala nang walang click mo.
- Nasa ilalim ng **Slicer** ang listahan ng slicer. Nakapaloob na ang {{ui:CadCraft basic (kasama, pinakamabilis)}}. Ang Kiri:Moto, PrusaSlicer, OrcaSlicer at Bambu Lab P2S ay sarili nilang add-on na ina-on mo mula sa card o sa ilalim ng {{ui:Mga setting}} › {{ui:Mga Add-on}}. Ginagamit ng PrusaSlicer at OrcaSlicer ang sarili mong kopya at gumagana mula sa CadCraft Studio sa computer.
- Hindi isasama ang mga piraso na hindi closed solid, at sinasabi ng card kung gaano karami sa hugis ang mga ito.
- Para sa resin printer, tingnan ang [I-slice para sa resin printer](topic:resin-printing). Para i-check o ayusin muna ang model, tingnan ang [Supports, kapal ng pader, hollowing at repair](topic:print-tools).
