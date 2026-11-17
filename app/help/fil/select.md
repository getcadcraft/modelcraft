---
title: Piliin ang mga object
summary: I-click, i-double-click at i-triple-click, mag-drag ng window o crossing box, magdagdag at mag-alis gamit ang modifier key, at burahin.
keywords: piliin, selection, window, crossing, idagdag sa selection, deselect, piliin lahat, triple click, double click, burahin, erase
from: d56d1f89
---

{{ui:Select}} ({{key:Space}}) ang tool na sinisimulan ng ModelCraft, at ito ang binabalikan ng {{key:Esc}}. Ang mga napiling bagay ay nagiging asul, at sinasabi ng {{ui:Entity info}} sa kanan kung ano ang mga ito.

## I-click

| Gawin ito | Pumipili ng |
|---|---|
| I-click ang face o edge | Ang face o edge na iyon |
| I-click ang group o component | Ang buong group o component |
| I-double-click ang face | Ang face at ang mga edge nito |
| I-double-click ang edge | Ang edge at ang mga face sa magkabilang gilid |
| I-double-click ang group o component | Binubuksan ito para i-edit (tingnan ang [Mga group at component](topic:groups-components)) |
| I-triple-click ang face o edge | Lahat ng nakakonekta rito: ang buong object |
| I-click ang walang lamang espasyo | Wala (inaalis ang pagpili) |
| I-double-click ang walang lamang espasyo habang nag-e-edit ng group | Isinasara ang group |

Mas madaling tamaan ang mga edge kaysa sa mga face: kapag nasa ilang pixel lang ang pointer mula sa edge, edge ang pipiliin ng click.

## Mag-drag ng box

- **Kaliwa papuntang kanan** ay gumuguhit ng solid box: isang **window** na pagpili. Tanging ang mga bagay na ganap na nasa loob nito ang napipili.
- **Kanan papuntang kaliwa** ay gumuguhit ng dashed box: isang **crossing** na pagpili. Napipili ang anumang hinahawakan ng box, at napipili ang face kapag nasa loob mismo ng face ang box.

Ang group o component ay binibilang bilang isang bagay: kailangang nasa loob ng window ang buong group, pero sapat na ang paghawak nito sa crossing.

## Idagdag at alisin

Pindutin ang key habang nag-click o nag-drag:

| Key | Epekto |
|---|---|
| {{key:Shift}} | Nagpapalit: idinadagdag ang hindi napili, inaalis ang napili |
| {{key:Mod}} | Nagdadagdag |
| {{key:Shift}} at {{key:Mod}} nang sabay | Nag-aalis |

Para piliin ang lahat sa model (o lahat sa group na ine-edit mo), pindutin ang {{key:Mod+A}}.

## Alisin ang pagpili

Pindutin ang {{key:Esc}} (kapag {{ui:Select}} ang tool), o i-click ang walang lamang espasyo.

## Burahin ang napili

Pindutin ang {{key:Delete}} o {{key:Backspace}}. Ang mga face, edge, group at guide sa pagpili ay tinatanggal sa isang hakbang; ibinabalik ang mga ito ng {{key:Mod+Z}}.

Ang pagbura ng edge ay nagtatanggal ng mga face na nangangailangan nito, maliban kung ang edge ay naghihiwalay lang ng dalawang face sa iisang eroplano: sa kasong iyon, nagsasama ang dalawang face bilang isa. Ang pagbura ng face ay nag-iiwan ng mga edge nito. Tingnan ang [Burahin at linisin](topic:erase).

## Pumili sa loob ng group

Ang pag-click sa group ay pumipili ng buong group. Para pumili ng face sa loob nito, i-double-click ang group para buksan ito, saka mag-click. Habang bukas ang group, ang mga click ay umaabot lamang sa mga nasa loob nito; kumukupas ang iba. Pindutin ang {{key:Esc}} na walang napili, o i-double-click ang walang lamang espasyo, para isara ito.

Ang {{ui:Outliner}} sa kaliwa ay pumipili ng mga group at component ayon sa pangalan, na nakakatulong kapag nakatago ang mga ito sa likod ng ibang bagay.
