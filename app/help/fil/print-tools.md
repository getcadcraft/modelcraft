---
title: Supports, kapal ng pader, hollowing at repair
summary: Tingnan kung saan kailangan ng supports ang isang print at tinatayang dami nito, hanapin ang mga pader na masyadong manipis para i-print, gawing guwang ang isang piyesa na may tiyak na kapal ng pader at drain holes, at ayusin ang mesh gamit ang listahan ng bawat ayos.
keywords: 3d print, supports, support preview, overhang, tree supports, column supports, kapal ng pader, manipis na pader, masyadong manipis, nozzle, hollow, hollowing, shell, drain hole, resin, repair, ayusin ang mesh, non-manifold, baligtad na face, butas, maliliit na shell, self-intersection, overlap, join
from: 286bde26
---

Apat na tool para ihanda ang model para sa 3D printer. Buksan ang {{ui:Export}} › {{ui:Suriin para sa 3D printing (STL o 3MF)…}}; ang linya ng dialog na **Mga print tool** ay may {{ui:Preview ng supports}}, {{ui:Kapal ng pader}}, {{ui:Gawing guwang}} at {{ui:Ayusin}}. Bumubukas ang bawat isa bilang card sa ibabaw ng view; inaalis ng {{ui:Isara}} (ang krus) ang card at ang mga marka nito. Isang card lang ang nakikita sa isang pagkakataon.

Gumagana ang bawat tool sa mga ipi-print: ang selection, o lahat ng nakikita kapag walang napili. Kailangan ng {{ui:Gawing guwang}} at {{ui:Ayusin}} ng isang napiling group, component o mesh, dahil binabago nila ito.

## Preview ng supports

Ang mga face na lumalabas nang higit sa **anggulo ng overhang** mula sa patayo ay minamarkahan ng pulang shade, at mula sa mga ito ay iginuguhit ang simpleng supports (kahel) pababa sa bed, o sa bahagi ng model sa ibaba nila.

- **Anggulo ng overhang**: 45° ang kayang abutin ng karamihan ng printer nang walang support. Itaas ito para sa printer na magaling mag-bridge.
- **Columns**: isang tuwid na column bawat 3 mm sa ilalim ng bawat overhang. Binibilang ito ng tantiya bilang 15% support pattern.
- **Tree**: nagdurugtong ang mga kalapit na punto sa iisang trunk sa ilalim ng gitna nila; walang sangang mas nakahilig sa 45°. Karaniwang mas kaunti ang materyal ng tree, at mas kaunti ang lugar na dumidikit sa bed.

Sinasabi ng card kung gaano karaming surface ang kailangan ng support, ilan ang support points, at tinatayang dami ng materyal ng mga ito. Binibilang ang mga support na nakatayo sa model (hindi sa bed): nag-iiwan sila ng marka roon. Kapag may napiling bed ng printer sa {{ui:Mga setting}}, iginuguhit ang bed sa ilalim ng model.

:::note
Preview ito, hindi slicer: ang slicer mo ang nagpapasya sa totoong supports. Sa napakalaking overhang, mas ikinakalat ang support points para mabilis pa rin ang preview; sinasabi ito ng card.
:::

## Kapal ng pader

Sinusukat ang bawat face nang diretso sa loob ng solid hanggang sa kabilang panig. Pula ang mga pader na mas manipis sa **pinakamanipis na pader na papayagan**, at kahel ang mga pader na mas manipis sa isa't kalahating beses nito: naipi-print ang mga iyon, pero maaaring mahina ang lumabas.

Nakalista ang manipis na bahagi, pinakamanipis muna, kasama kung gaano kanipis at kalaki ang bawat isa. Itinututok ng {{ui:Ipakita}} ang camera dito.

Hindi kayang gumawa ng printer ng pader na mas manipis sa humigit-kumulang dalawang lapad ng nozzle nito: 0.8 mm para sa karaniwang 0.4 mm nozzle (ang panimula). Mas kaunti ang kaya ng resin printer; i-check ang gabay ng printer mo.

Sa napakalaking model, iilang face lang ang naglalabas ng ray, at ang iba ay kinukuha ang kapal ng mga kapitbahay nila; sinasabi ng card kung ilan ang nasukat.

## Gawing guwang

Pinananatili ng hollowing ang labas gaya ng dati at tinatanggal ang loob, at iniiwan ang mga pader na kasing kapal ng hinihingi mo. Mas kaunti ang resin na nagagamit ng resin print at mas kaunti ang hila nito sa build plate; mas kaunti ang plastic ng filament print kaysa sa infill.

1. Piliin ang group, component o mesh, tapos buksan ang {{ui:Gawing guwang}}.
2. Itakda ang **pader** (2 mm sa simula) at kung gaano kalapad ang **drain holes**.
3. Para sa resin print, i-click ang {{ui:Maglagay ng drain hole}}, tapos i-click ang labas ng model kung saan ito ilalagay: mababa, malapit sa build plate, para lumabas ang likidong resin. Maglagay ng kasing dami ng kailangan mo; lumalabas ang bawat isa bilang asul na bilog at nakalista kasama ang {{ui:Alisin}}.
4. Sinasabi ng {{ui:Preview}} kung gaano karami ang natatanggal ng hollowing.
5. Ginagawa ng {{ui:Gawing guwang}} ang pagbabago: isang hakbang na ina-undo ng {{key:Mod+Z}}.

Ang resulta ay isang closed solid na tinatanggap ng 3D-print check: sinusuri muna ito ng ModelCraft at walang binabago kung hindi ito papasa. Kung mas manipis ang model kaysa dalawang pader, nananatili itong solid. Ang resulta ay isang group na ang mga patag na gilid ay iisang face, kaya maaari mo pa itong i-model gamit ang {{ui:Push/pull}}; ang curved na piyesang ginawang guwang sa fine grid ay kadalasang may sobrang daming face para doon, kaya nagiging mesh na lang ito, at sinasabi ng status line kung alin.

:::tip
Sa karamihan ng hugis, ang loob ay ang labas na inilipat papasok nang eksaktong kapal ng pader. Kung hindi ito posible dahil sa mga sulok o manipis na bahagi, sinusundan ng ModelCraft ang labas sa layong katumbas ng pader sa fine grid; sinasabi ng card kung gaano ito kalapit (sa loob ng bahagi ng isang millimetro).
:::

## Repair

Tinitingnan ng {{ui:Ayusin}} ang napiling piyesa gaya ng pagtingin ng slicer ng printer, inaayos ang kaya nitong ayusin nang ligtas, at inililista ang bawat ayos:

| Inaayos nito | Ibig sabihin nito |
|---|---|
| Triangle na walang area | tinatanggal |
| Triangle na iginuhit nang dalawang beses | isang kopya ang itinatabi; tinatanggal ang face na nakadikit sa sarili nitong likod (walang kapal) |
| Maluwag na piraso na mas mababa sa 0.5 mm | tinatanggal |
| Triangle na nakaharap sa maling direksyon | pinaiikot para tumugma sa mga kapitbahay nito |
| Butas, patag man o hindi | sinasara gamit ang bagong triangle na nagmumula sa gitna ng bawat butas |
| Piyesang baligtad | pinaiikot palabas (ang guwang sa loob ng ibang piyesa ay iniiwan kung ano na ito: sadyang nakaharap ito papasok) |

Ginagawa ng {{ui:Ayusin ang mga ligtas}} ang lahat ng ito sa iisang hakbang na ina-undo ng {{key:Mod+Z}}, at inililista ng status line ang bawat ayos. Nagiging group ang naayos na piyesa na ang mga patag na gilid ay iisang face. Kung hindi pa rin ito nagsasara (may natitira sa ilalim ng **Iiwan para sa iyo**), o sobra ang face nito para sa isang group, nagiging mesh na lang ito: nananatiling triangle ang mga face nito, at patag pa rin ang itsura ng mga patag na gilid. Sinasabi ng status line kung alin. Gumagana ang {{ui:Join overlapping parts}} sa parehong paraan.

Ang hindi ligtas na maayos ay nakalista sa ilalim ng **Iiwan para sa iyo** at minarkahan ng lila sa view, kasama ang {{ui:Ipakita}}:

- **Mga gilid kung saan nagtatagpo ang tatlo o higit pang face**: piliin kung aling face ang dapat, at burahin ang iba.
- **Piyesang dumadaan sa sarili nito**: ilipat o iguhit muli ang bahaging iyon. Tingnan ang [Intersect faces](topic:intersect).
- **Butas na masyadong malaki o gusot para isara**: gumuhit ng face sa ibabaw nila.
- **Magkakahiwalay na piyesang nagsasapawan**: pinagsasama ng mga slicer ang mga ito kahit ano. Ginagawa ng {{ui:Join overlapping parts}} na iisang closed body ang mga ito (muling binubuo nito ang mga face kung saan sila nagtatagpo, kaya hiwalay itong button, hindi ito ginagawa para sa iyo).

Para sa push/pull group, maaari mo ring ayusin ang isa-isa sa {{ui:Impormasyon ng entity}} › {{ui:Ipakita ang mga problema}} / {{ui:Ayusin}}, na nananatili ang mga face na iginuhit mo. Tingnan ang [Solid tools](topic:solids).

Kaugnay: [Ihanda ang model para sa 3D printing](topic:print-3d) · [Ang Beginner style](topic:beginner) · [Hindi pa ginagawa](topic:not-built-yet#3d-printing)
