---
title: Inference at snapping
summary: Ano ang ibig sabihin ng mga kulay na marker, aling snap ang nananaig, at paano i-lock ang direksyon gamit ang arrow key o Shift.
keywords: inference, snap, snapping, endpoint, midpoint, center ng face, centre, on edge, on face, axis, red axis, green axis, blue axis, parallel, perpendicular, lock, shift, osnap
from: e78984e9
---

Habang gumagana ang isang drawing o editing tool, tumitingin ang ModelCraft sa nasa ilalim ng pointer at sumusnap sa pinakakapaki-pakinabang na nasa malapit. Ipinapakita ng marker kung ano ang nahanap nito, at ipinapangalan ito ng tip sa ibabang kaliwa.

## Mga marker at tip

| Tip | Marker | Sumusnap sa |
|---|---|---|
| Endpoint | Berdeng bilog | Ang dulo ng gilid |
| Midpoint | Cyan na bilog | Ang gitna ng gilid |
| Center ng face | Asul na bilog | Ang gitna ng face sa ilalim ng pointer |
| Guide point | Abo | Guide point na iniwan ng tape measure |
| Origin | Ochre | Kung saan nagtatagpo ang pula, berde at asul na axes |
| Nasa red axis / Nasa green axis / Nasa blue axis | Linya sa kulay na iyon | Linya mula sa panimulang punto sa direksyong iyon |
| Parallel sa edge / Perpendicular sa edge | Magenta na linya | Linya mula sa panimulang punto, parallel o perpendicular sa natandaang gilid (tingnan sa ibaba) |
| Naka-lock | Magenta na linya | Direksyong na-lock mo gamit ang arrow key o {{key:Shift}} |
| Nasa edge | Pulang parisukat | Kahit saan sa kahabaan ng gilid |
| Nasa guide | Abo | Kahit saan sa kahabaan ng guide line |
| Nasa face | Asul na diamond | Kahit saan sa face |
| Nasa plane | wala | Ang plane na sinimulan mo, kapag nasa walang lamang espasyo ang pointer |
| Nasa ground | wala | Ang ground (ang pula-berdeng plane), kapag walang ibang naroon |

Kapag may axis line mula sa panimulang punto na tumatawid sa gilid o guide, sumusnap ang ModelCraft sa tawiran, at ipinapangalan ng tip ang dalawa, gaya ng "Nasa red axis, nasa edge".

## Aling snap ang nananaig

1. **Mga punto** sa loob ng humigit-kumulang 12 pixel: endpoint muna, pagkatapos guide point, midpoint, center ng face sa ilalim ng pointer, at origin.
2. **Mga direksyon** mula sa panimulang punto: ang red, green at blue axes, at parallel o perpendicular sa natandaang gilid.
3. **Nasa gilid** o sa guide line.
4. **Nasa face.**
5. **Ang drawing plane**, o ang ground.

Hindi kailanman nagsa-snap ang mga bagay na nakatago sa likod ng face. Mag-orbit para makita mo ang puntong gusto mo.

## Pagguhit sa face mula sa isang punto

Ang {{ui:Rectangle}}, {{ui:Circle}} o {{ui:Polygon}} na sinimulan sa sulok, midpoint, gilid o center ng face ay iginuguhit **sa plane ng face na nasa ilalim ng pointer**, at pumuputol sa face na iyon. Dalawang face ang pag-aari ng isang gilid, kaya ang panig ng gilid kung nasaan ang pointer ang nagpapasya: para gumuhit sa dulo ng mahabang kahon, magsimula sa gitna ng isa sa mga gilid nito, habang nasa loob lang ng dulong face ang pointer.

## Parallel at perpendicular

Natatandaan ng ModelCraft ang **huling gilid na nadaanan ng pointer bago ang una mong click**. Ang pagsisimula sa sulok o sa gilid ay binibilang bilang pagdaan sa gilid na iyon. Kapag gumagana na ang tool, hindi napapalitan ang gilid na iyon ng ibang gilid na madaanan ng pointer.

Para gumuhit ng linyang parallel sa umiiral na gilid:

1. Pindutin ang {{key:L}} at dumaan sa gilid na gusto mong tularan.
2. Lumipat sa punto ng simula, nang hindi tumatawid sa ibang gilid sa daan kung kaya, at i-click.
3. Lumipat sa direksyong parallel sa gilid na iyon. Nagiging magenta ang linya at sinasabi ng tip ang "Parallel sa edge". Pareho ang paraan ng perpendicular, sa loob ng plane na iginuguhit mo.

Kung maling gilid ang natandaan, pindutin ang {{key:Esc}}, dumaan sa tamang gilid, at magsimula ulit.

## I-lock ang direksyon

Pagkatapos ng unang click ng isang tool, maaari mong panatilihin ang susunod na punto sa isang linya:

| Key | Naka-lock sa |
|---|---|
| {{key:Right}} | Ang red axis |
| {{key:Left}} | Ang green axis |
| {{key:Up}} | Ang blue axis (diretso pataas) |
| {{key:Down}} | Parallel sa natandaang gilid (tingnan sa itaas) |

Pindutin ulit ang parehong arrow para i-unlock. Sinasabi ng status bar ang "Naka-lock sa red axis. Pindutin ang parehong arrow para i-unlock."

Habang naka-lock, dumudulas ang punto sa linya patungo sa kung nasaan ang pointer, at nakahanay pa rin ito sa mga punto na dinadaanan mo: dumaan sa sulok ng ibang kahon para gumuhit ng linya sa red nang eksaktong kasing-layo ng sulok na iyon.

Ang **{{key:Shift}}** ay nagla-lock sa anumang direksyong kasalukuyang sinusnapan mo (isang axis, o parallel), hangga't hawak mo ito. Bitawan para i-unlock.

Gumagana ang mga lock sa {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} at {{ui:Tape}}. Bago ang unang click, ang mga arrow key ay nag-o-orbit muna sa view.

## Sa loob ng group

Habang nag-e-edit ka sa loob ng group o component, ang mga axis ay sarili nilang axes ng group (gumagalaw ang mga ito kasama nito, at umiikot kung na-rotate ito). Nakakahanap pa rin ang snap ng mga punto at gilid sa labas ng group, kaya maaari mong ihanay ang mga bagay sa iba pang bahagi ng model.
