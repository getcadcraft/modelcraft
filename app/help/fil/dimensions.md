---
title: Dimension at baguhin ang laki ng iginuhit mo
summary: Maglagay ng dimension sa pagitan ng mga sulok, sa mga arc at circle, o sa pagitan ng dalawang gilid; mag-type ng bagong haba para i-resize ang model. Mag-retype ng haba ng gilid, o ng lapad, lalim at taas ng group, sa Entity info.
keywords: dimension, dimensions, resize, baguhin ang laki, i-edit ang laki, haba, lapad, lalim, taas, stretch, driving dimension, annotate, sukatin, pagkatapos ng katotohanan, radius, diameter, angle, angular, arc, circle, R, Ø
from: a1f815ec
---

Hindi nakapirmi ang mga laki sa ModelCraft kapag nakaguhit na ang isang bagay. Ipinapakita ng dimension ang haba sa model, at ang pag-type ng bagong haba dito ay nagre-resize sa model para tumugma. Maaari mo ring i-retype ang haba ng gilid, o ang lapad, lalim at taas ng group, sa {{ui:Entity info}}.

## Maglagay ng dimension

1. Pindutin ang {{key:D}}, o i-click ang {{ui:Dimension}} sa toolbar.
2. I-click ang sulok na susukatin. Nagsa-snap ito sa mga sulok, midpoint at gilid, gaya ng sa pagguhit.
3. I-click ang ikalawang sulok.

   O i-click nang isang beses ang isang **gilid** (sinasabi ng tip na "On edge") para i-dimension ang buong gilid na iyon sa isang click.
4. Ilipat ang pointer kung saan dapat ang linya ng dimension, at i-click. Maaari mo ring i-type ang offset, tulad ng `0.5m`, at pindutin ang {{key:Enter}}.

   Nananatiling pahalang ang linya ng dimension para sa pahalang na gilid, maliban kung tinitingnan mo ito mula sa gilid. Para sa patayong gilid, nananatili ito sa patayong eroplano na pinakaharap sa iyo.

Sinasabi ng status bar na "Dimension 4 m." Ipinapakita ng mga dimension ang haba nila sa unit ng model, at nag-a-update kapag binago mo ang unit sa picker.

## Radius, diameter at anggulo

Ginagamit din ang parehong {{ui:Dimension}} tool para sukatin ang mga bilog at anggulo:

- **Isang arc:** i-click ang arc. Sinasabi ng tip ang {{ui:Radius}}. Ilipat ang pointer kung saan dapat ang teksto at i-click: binabasa ng dimension ang **R 1.5 m**.
- **Isang circle:** i-click ang circle. Makakakuha ka ng **diameter** (**Ø 3 m**) na may linyang tumatawid sa circle sa sentro nito. Pareho ang gawi sa polygons, na ang mga sulok ay nasa circle.
- **Ang anggulo sa pagitan ng dalawang gilid:** i-click ang isang gilid, pagkatapos i-click ang pangalawang gilid na nagtatagpo rito sa isang sulok (habang nasa ibabaw mo ito, sinasabi ng tip ang {{ui:Angle between the edges}}). Pagkatapos, ilipat sa anggulong gusto mo, at i-click. Sa loob ng sulok makukuha mo ang anggulo sa pagitan ng mga gilid; lumipat sa isang panig at makukuha mo ang anggulong katabi nito (halimbawa 150° sa halip na 30°). Kung gaano kalayo sa sulok ka mag-click ang nagtatakda kung saan pupunta ang arc; o i-type ang distansyang iyon.

Para lumipat ang radius sa diameter o pabalik, piliin ang dimension at pumili sa {{ui:Show as}} sa {{ui:Entity info}}.

**Pag-resize gamit ang mga ito:** mag-type ng bagong radius o diameter kaagad pagkatapos maglagay ng isa, o piliin ito pagkatapos at mag-type. Nananatili ang sentro ng arc o circle at nagbabago ang laki; ang face na nililimitahan nito (disc, dulo ng slot) ay nagbabago kasabay nito. Dalawang bagay lang ang sumusukat:

- **Ang dimension ng anggulo** ay hindi kailanman nagbabago sa model. Para baguhin ang anggulo, i-rotate ang mga gilid gamit ang {{ui:Rotate}}.
- **Ang circle sa dulo ng cylinder** (circle na hinila mo gamit ang {{ui:Push/pull}}) ay hindi mare-resize mula sa dimension nito, dahil kailangan ding magbago ang mga gilid nito. I-scale ang cylinder sa halip, sa paligid ng axis nito.

## I-resize ang model gamit ang dimension

Kaagad pagkatapos maglagay ng dimension, mag-type ng bagong haba at pindutin ang {{key:Enter}}: `6m`, `12'`, `3500` sa millimeter na model. Nagbabago ang model sa laking iyon.

Anumang oras pagkatapos:

1. Gamit ang {{ui:Select}}, i-click ang teksto o linya ng dimension. Sinasabi ng {{ui:Entity info}} na **Dimension** at ipinapakita ang {{ui:Length}} nito.
2. Mag-type ng bagong haba at pindutin ang {{key:Enter}}. Maaari kang mag-type nang direkta sa value box, o sa {{ui:Length}} box sa {{ui:Entity info}}.

### Ano ang gumagalaw

Gumagalaw ang pangalawang sulok na in-click mo, at gayundin ang lahat ng nasa likod nito:

- **Parehong sulok sa iisang piraso** (lapad ng box, taas ng pader): ang panig sa gumagalaw na sulok ay dumudulas palabas o papasok, at nag-uunat ang mga face na nakadugtong dito. Nananatiling saradong solid ang box, at ang anumang nasa buong panig na iyon, gaya ng window component, ay gumagalaw kasama nito.
- **Mga sulok sa dalawang magkahiwalay na piraso** (agwat sa pagitan ng dalawang box): buo ang gumagalaw na piraso ng sulok, at nagbabago ang agwat.
- **Ang gumagalaw na sulok sa loob ng group o component** na wala roon ang kabilang sulok: buong gumagalaw ang group.
- **Parehong sulok sa loob ng iisang group o component**: nag-uunat ito sa loob. Nagbabago ang component saanman ito nakalagay, gaya ng lagi nitong ginagawa kapag inedit.

Para baguhin kung aling dulo ang gumagalaw, piliin ang dimension at pumili sa {{ui:Moves}} sa {{ui:Entity info}}:

| Pagpipilian | Ang nangyayari |
|---|---|
| {{ui:Ikalawang dulo}} (default) | Gumagalaw ang dulong pangalawa mong in-click |
| {{ui:Unang dulo}} | Gumagalaw ang dulong unang in-click mo |
| {{ui:Parehong dulo (nasa gitna)}} | Bawat dulo ay gumagalaw ng kalahati ng pagbabago, kaya nananatili sa gitna ang gitna |

### Kapag tinanggihan ang resize

Walang binabago ang ModelCraft at sinasabi nito ang dahilan sa status bar:

- "a face would bend out of its plane": ang dimension ay tumatakbo nang pahilis sa hugis. Mag-dimension sa kahabaan ng gilid, o sa kahabaan ng pula, berde o asul.
- "a face would shrink to nothing or turn inside out": masyadong maikli ang bagong haba para sa hugis.
- "the end that moves is not on a corner of the model": nailagay ang dulong iyon sa bakanteng espasyo o sa gitna ng gilid. Piliin ang kabilang dulo sa {{ui:Moves}}, o ilagay ang dimension sa dalawang sulok.
- "a length must be above zero".

Isang hakbang ang bawat resize: binabawi ito ng {{key:Mod+Z}}.

## Retype ang laki sa Entity info

Hindi laging kailangan ng dimension:

- **Isang gilid:** piliin ito. Ang {{ui:Length}} nito sa {{ui:Entity info}} ay kahon na maaari mong i-type. Gumagana rin ang pag-type ng haba sa value box. Ang dulong mas malayo sa kahabaan ng pula, pagkatapos berde, pagkatapos asul ang gumagalaw, at nag-uunat ang anumang nakadugtong dito. Halimbawa, ang pag-retype sa ibabang harap na gilid ng box ay nagpapalapad sa box papunta sa kanan.
- **Isang group o component:** piliin ito. Ang {{ui:Width (red)}}, {{ui:Depth (green)}} at {{ui:Height (blue)}} ay mga kahon. Gumagalaw ang malayong panig nito (kanan, likod, itaas). Ito ang sariling axes ng group, bago ang anumang rotation na ibinigay mo rito.

Pindutin ang {{key:Enter}} para ilapat, o {{key:Esc}} para ibalik ang lumang value.

## Sumusunod ang mga dimension sa model

Nakakabit ang dimension sa dalawang sulok kung saan ito inilagay (sa anggulo: sa sulok nito at sa malalayong dulo ng dalawang gilid nito; sa radius o diameter: sa arc o circle nito). Ilipat, i-push/pull o i-resize ang geometry, at susunod ang dimension at ipapakita ang bagong haba. Nananatili itong nakakabit kapag ginawa mong group o component ang geometry.

Kung ang isang dulo ay nailagay sa lugar na hindi sulok (sa face, o sa bakanteng espasyo), o nabura ang sulok nito, nananatili roon ang dulong iyon. Sumusukat pa rin ang dimension, pero maaari lang itong mag-resize mula sa kabilang dulo.

## Tanggalin ang mga dimension

- Isang dimension: piliin ito at pindutin ang {{key:Delete}}, o i-click ito gamit ang {{ui:Eraser}}.
- Lahat ng dimension: kapag walang napili, i-click ang {{ui:Delete all dimensions}} sa {{ui:Entity info}}.

Nakasave ang mga dimension sa `.modelcraft` file. Hindi ito iniexport sa ibang format, na nagdadala lang ng 3D model. Nagbubukas pa rin ang file na may dimension sa mas lumang ModelCraft, kaya lang wala ang mga ito roon.
