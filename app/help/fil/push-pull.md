---
title: Itulak at hilahin ang mga face para maging solid
summary: Gawing kahon ang isang face, gawing mas mataas o mas mababa ang gusali, magdagdag ng bay o recess, at ulitin ang isang distansya sa pamamagitan ng double-click.
keywords: push pull, extrude, taas, solid, kahon, mass, mas mataas, recess, bump out, ulitin, double-click, volume, level, on face, flush, parehong taas
from: dc093c91
---

Inililipat ng {{ui:Push/pull}} ({{key:P}}) ang face sa sarili nitong direksyon: pataas at pababa para sa sahig, papasok at palabas para sa pader. Nakadepende sa face ang mangyayari.

## Gumawa ng solid mula sa face

1. Gumuhit ng face, halimbawa isang rectangle sa lupa ([Gumuhit ng face](topic:draw-faces)).
2. Pindutin ang {{key:P}}.
3. Ituro ang face. Mag-highlight ito.
4. I-click ang face, tapos galawin ang pointer. Tumataas (o lumulubog) ang face at tumutubo ang mga gilid mula sa mga dulo nito. Ipinapakita ng value box ({{ui:Distansya}}) at ng tip ang distansya.
5. I-click para tapusin, o mag-type ng distansya at pindutin ang {{key:Enter}}: `3m`, `10'`, `2700` sa model na nasa millimeter.

   Mayroon ka na ngayong closed solid. Piliin ang lahat at i-group ito (tingnan ang [Groups at components](topic:groups-components)): pagkatapos, ipinapakita ng {{ui:Impormasyon ng entity}} ang "Solid: Yes" at ang volume nito.

Maaaring pumunta sa alinmang direksyon ang nag-iisang face: hilahin pataas para sa masa sa ibabaw ng lupa, itulak pababa para sa hukay o pundasyon.

:::tip
Sa halip na mag-click nang dalawang beses, pindutin ang face, i-drag, at bitawan. Sa touch screen, ito ang natural na paraan: pindutin, i-drag, iangat.
:::

## Hilahin hanggang sa taas ng ibang bagay

Habang humihila ka, ituro ang sulok, midpoint, gilid o guide ng ibang bahagi ng model. Didikit ang face sa taas na iyon at ipapakita ng marker ang punto. Gamitin ito para gawing magkakapareho ang taas ng dalawang block, o para huminto sa guide line na inilagay mo gamit ang [tape measure](topic:guides-measure).

Maaari mo ring ituro ang face na parallel sa itinutulak mo, gaya ng tuktok ng ibang block o tuktok ng kahon na nakatayuan ng poste. Sinasabi ng tip na "On face", at ang face na itinutulak mo ay magtatapos na kapantay nito. Halimbawa, itulak pababa ang loob na face ng tubo hanggang maging kapantay ito ng kahon sa ilalim ng tubo.

Hindi nagtatakda ng antas ang face na nasa anggulo sa itinutulak mo. Sumusunod sa pointer ang distansya. Ganoon din ang face na nasa likod ng itinutulak mo.

Kapag ang naitulak na face ay muling natapos na kapantay ng mga face sa paligid nito, mawawala ang mga gilid nito. Walang natitirang gilid na zero ang taas, at nananatili sa face ang outline na iginuhit mo, kaya maaari mo itong itulak muli sa susunod. Para maging iisang face muli, burahin ang mga gilid ng outline gamit ang {{ui:Eraser}}: magdurugtong ang dalawang face.

## Gawing mas mataas o mas mababa ang kahon

I-push/pull ang tuktok ng kahon. Dahil tuwid na paakyat na ang mga gilid mula rito, gumagalaw lang ang tuktok: nagiging mas mataas o mas mababa ang kahon, at walang bagong gilid na ginagawa.

- Kapag itinulak ang tuktok hanggang sa ilalim, natatanggal ang kahon. Humihinto ang ModelCraft sa zero na taas; hindi nito kailanman binabaligtad ang kahon.
- Ganoon din sa anumang face na ang mga kapitbahay ay nakahanay sa direksyon nito, gaya ng dulo ng pader.

## Magdagdag ng bay o recess

1. Gumuhit ng rectangle sa gilid ng kahon (simulan ito sa face; nananatili ito sa eroplano ng face).
2. Pindutin ang {{key:P}} at hilahin **palabas** ang bagong rectangle. Nagdadagdag ito ng materyal: bay, chimney, canopy.
3. O itulak ito **papasok**. Gumagawa ito ng recess: porch, niche, set-back na entrance.

Kapag nakahanay ang mga gilid ng bagong bahagi sa mga face na naroon na, nagsasama ang mga ito sa iisang face, kaya walang lumilihis na linya sa patag na pader.

## Itulak hanggang sa dulo

Humihinto sa unang face sa likod nito ang pagtulak ng face papasok sa solid. Kapag naabot nito ang face na iyon, gumagawa ito ng butas na tumatagos. Ganito gumawa ng bintana at pinto sa pader na may kapal. Tingnan ang [Gumawa ng butas sa pader](topic:openings).

## Mag-type ng distansya

Pagkatapos i-click ang face, i-type ang distansya at pindutin ang {{key:Enter}}.

- Ang na-type na distansya ay sumusunod sa direksyong ginagalaw mo. Kung hindi ka pa gumagalaw, papunta ito sa harap ng face (palabas sa solid, pataas mula sa lupa).
- Mag-type ng negatibong numero, gaya ng `-500`, para pumunta sa kabilang direksyon.
- Kung magbago ang isip mo bago mag-click, pindutin ang {{key:Esc}}. Babalik ang face.

## Ulitin ang huling distansya

Pagkatapos ng isang push/pull, i-double-click ang ibang face habang naka-select pa rin ang {{ui:Push/pull}}. Gagalaw ito ng parehong distansya. Ito ang mabilis na paraan para bigyan ng parehong kapal o taas ang maraming pader o maraming sahig.

Naaalala ng ModelCraft ang distansya hanggang lumipat ka sa ibang tool.

## Mga dapat malaman

- Isang face lang ang gumagana ang push/pull sa bawat pagkakataon. Kung mag-click ka ng bagay na hindi face, sinasabi ng status bar: "Gumagana ang push/pull sa isang face. I-click ang isang face."
- Para i-push/pull ang face sa loob ng group o component, buksan muna ito (i-double-click).
- Kapag naka-on ang **Collide**, humihinto ang push o pull na tumatama sa ibang solid sa puntong dumidikit ito, at sinasabi ng tip kung ano ang tinamaan nito (pangalan ng object, o "maluwag na geometry sa group na ito") at hine-highlight ang mga face na natamaan nito. Ang bulsang itinulak mo papasok sa sarili nitong solid (halimbawa, face na may offset na itinulak pabalik pababa) ay bahagi ng solid na iyon at hindi kailanman napipigilan ng mga pader nito.
- Ang dalawang solid na naitulak sa isa't isa ay hindi nagpuputol o nagdudugtong sa isa't isa: dumadaan lang ang mga face nila. Tingnan ang [Hindi pa ginagawa](topic:not-built-yet).
