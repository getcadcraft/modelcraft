---
title: Itago, i-isolate at ipakita
summary: Ilayo ang mga bagay para makapagtrabaho sa pagitan nila, o ipakita lang ang pinagtatrabahuhan mo; nananatiling nakatago ang mga nakatagong bagay sa file.
keywords: itago, ipakita, ipakita lahat, isolate, itago ang iba, show, nakatago, local view, visibility, ilayo
from: 2c8a3457
---

Ang pagtatago ay naglalayo ng mga bagay nang hindi binubura ang mga ito. Ang nakatagong face, gilid, group o component ay hindi iginuguhit, at hindi mo ito maaaring i-snap, i-click, o piliin, kaya makakapagtrabaho ka sa nasa likod o nasa pagitan ng mga bagay.

## Itago

1. Piliin ang itatago: mga face, gilid, group o component.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Halimbawa, para magtrabaho sa makitid na puwang sa pagitan ng dalawang group na magkalapit, piliin ang nasa harap at itago ito: ang mga click at snap ay aabot na ngayon sa face sa likod.

## I-isolate

Piliin ang gusto mong manatili sa paningin, pagkatapos {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Matatago ang lahat ng iba pa sa model o, habang nag-e-edit ka sa loob ng group, ang lahat ng iba pa sa group na iyon. Nananatili ang mga gilid ng napiling face.

## Ipakita lahat

Ipinapakita ng {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} muli ang lahat, sa bawat group. Sinasabi ng {{ui:Entity info}} kung ilang bagay ang nakatago kapag walang napili, na may {{ui:Unhide all}} na button din doon.

Ipinapakita ng {{ui:Outliner}} ang mga nakatagong group at component sa italics, na may nakasarang mata; i-click ang mata para ipakitang muli ang isa.

:::note
Sa Modeler keys, ang {{key:H}} ay nagtatago, ang {{key:Shift+H}} ay nag-i-isolate, at ang {{key:Alt+H}} ay nagpapakita ng lahat. (Pinipili ng {{ui:Settings}} › {{ui:ModelCraft}} ang istilo ng key.)
:::

## Mga dapat malaman

- Ang nakatago ay nase-save sa ModelCraft file, at nananatiling nakatago kapag binuksan ito.
- Nasa model pa rin ang mga nakatago: kasama ang mga ito sa mga export, at kasama rin sila sa volume at laki sa {{ui:Entity info}}.
- Bawat hide, isolate o unhide ay isang hakbang sa undo.
