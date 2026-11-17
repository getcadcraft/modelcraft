---
title: Magtrabaho sa modelo kasama ang Live TeamWork
summary: Ano ang nagbabago sa ModelCraft habang nasa session ka ng Live TeamWork mula sa CadCraft Studio: ang mga group at component ng lahat sa iisang model, sino ang maaaring mag-reshape ng ano nang sabay, ang sarili mong undo, at pagsali mula sa browser sa parehong network.
keywords: live, live teamwork, studio live, magkasama, makipagtulungan, session, ibahagi nang live, sumali, group, component, push pull, cursor, pointer, makita ang isa't isa, mga pangalan, kulay, pagpili, undo, host
from: d8d2f282
---

## Ano ang matututunan mo

Ano ang nangyayari sa isang model habang maraming tao ang nagtatrabaho dito nang sabay. Sinisimulan at sinasalihan ng CadCraft Studio ang session ng Live TeamWork (Ibahagi, Sumali); tungkol sa mismong model ang pahinang ito.

## Magtrabaho sa sarili mong group

Sabay-sabay na nag-e-edit ang lahat sa iisang model, at agad lumalabas ang sarili mong edit. Nakadepende kung paano nagsasama ang mga pagbabago sa binabago mo:

- **Ang paggalaw, pagpapangalan, pagkukulay o pagtatago ng mga nailagay na group at component** ay nagsasama: kapag dalawang tao ang gumalaw ng dalawang group, parehong nananatili ang kanilang galaw.
- **Ang geometry sa loob ng isang group** (ang mga edge at face nito: pagguhit, push/pull, pagbura) ay iisang piraso. Kapag dalawang tao ang nag-reshape ng iisang group nang sabay, binabawi ang pangalawang pagbabago at sinasabi ito ng status bar. Hindi kailanman nagkakabanggaan ang magkaibang group.
- **Loose geometry** (wala sa anumang group) ay ang sariling group ng model: isang tao lang ang maaaring mag-reshape nito sa isang pagkakataon.

Kaya magkasundo kung sino ang nagtatrabaho sa aling group, o gumawa ng group para sa bahagi ng bawat tao bago magsimula. Ang mga guide, dimension at section plane ay nagsasama isa-isa; ang mga scene, tag, palapag at drawing axes ay mapupunta sa huling nagbago ng mga ito.

## Makita ang isa't isa

May sariling kulay ang bawat tao sa session. Nakikita mo ang pointer ng bawat tao bilang arrow sa kanilang kulay na may pangalan sa tabi, sa lalim ng view na tinitingnan mo, at isang dashed box sa kanilang kulay sa paligid ng kanilang napili.

Para lang sa session ang mga pointer, pangalan at pagpili: hindi kailanman naka-save ang mga ito sa file at hindi kailanman napupunta sa undo ng sinuman. Dumudulas ang mga ito papunta sa kinaroroonan ng bawat tao, kaya nananatiling makinis kahit mabagal ang koneksyon.

## Binabawi ng undo ang sarili mong gawa

Binabawi ng {{key:Mod+Z}} ang sarili mong huling step at iniiwan ang sa iba. Kapag may nagbago na ng parehong bagay mula noon, walang nababawi at sinasabi ng status bar kung sino.

## Sumali mula sa browser

Maaaring i-scan ng kasamahang walang Studio ang larawan sa ilalim ng code ng host gamit ang telepono, tablet o computer sa parehong network. Bubukas ang ModelCraft sa browser at mapupunan ng model ng host kapag pinapasok ka ng host. Ang invite link ay nagpapahintulot sa isang tao na sumali mula sa ibang network: kailangan ng host ng Team Cloud Plan seat para sa app, libre ang iba pang sasali, at gumagana lang ang link habang bukas ang session ng host.

## Kapag natapos ang session

Ang host lang ang nagse-save ng model. Ang iba ay nagtatago ng hindi naka-save na kopya: i-save ito kung gusto mong panatilihin.
