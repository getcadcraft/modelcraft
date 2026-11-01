---
title: Simulan ang ModelCraft
summary: Ano ang silbi ng ModelCraft, paano ito buksan, at ang unang box mo mula sa rectangle hanggang sa naka-save na model.
keywords: simula, start, unang model, magsimula, tutorial, panimula, box, massing, 3d, push pull, mabilisang simula, gabay, guided, guide, beginner, bago sa 3d
from: d47ad719
---

Ang ModelCraft ay isang 3D modeler para sa maagang disenyo: massing study, layout ng silid, mabilis na anyo ng gusali at ang mga anino na ipinapatong ng mga ito. Gumuguhit ka ng patag na hugis, hinihila ang mga ito pataas para maging solid, at patuloy na nagtatrabaho sa mga ito sa pamamagitan ng pagguhit sa kanilang mga face. Tumatakbo ito sa iyong web browser, at nananatili sa iyong computer ang iyong mga model.

Kung nakagamit ka na ng SketchUp, karamihan sa alam mo ay magagamit pa rin: ang parehong letra ng tool, push/pull, isang value box para sa eksaktong laki, mga group at component. Nakalista sa [Galing sa ibang modeler](topic:coming-from) ang mga pagkakaiba.

## Buksan ang ModelCraft

1. Buksan ang ModelCraft sa kasalukuyang bersyon ng Chrome, Edge, Firefox o Safari. Tingnan ang [Mga browser at computer](common:browsers).
2. Hintayin na lumitaw ang 3D view: isang maliwanag (o madilim) na bahagi sa gitna na may card na pinamagatang "Simulan ang modeling".

May toolbar sa itaas ang screen, ang {{ui:Outliner}} at {{ui:Mga component}} sa kaliwa, ang 3D view sa gitna, ang {{ui:Impormasyon ng entity}}, {{ui:Istilo}} at {{ui:Mga scene}} sa kanan, at status bar sa ibaba na may value box at ang mga unit. Ipinapaliwanag ng [Ang screen ng ModelCraft](topic:workspace) ang bawat bahagi.

:::note
Kailangan ng ModelCraft ang WebGL, ang tampok sa pagguhit ng 3D ng iyong browser. Kung nananatiling walang laman ang gitna ng screen at walang nagagawa ang mga tool, tingnan ang [Pag-troubleshoot](topic:troubleshooting#the-3d-view-is-blank).
:::

## Suriin muna ang mga unit

Tingnan ang kanang ibabang sulok. Ipinapakita ng units picker kung ano ang sukat ng mga haba.

- Nagsisimula ang bagong model sa **feet at inches** kapag nakatakda ang browser mo sa United States (gayundin sa Liberia at Myanmar), at sa **millimeters** saanman.
- Para baguhin ito, pumili ng ibang unit sa picker: {{ui:ft at in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} o {{ui:mm}}. Hindi nagbabago ang laki ng model mismo; ang nagbabago lang ay kung paano ipinapakita ang mga haba at kung paano binabasa ang mga numerong walang unit.

Ang numerong i-type mo nang walang unit ay gumagamit ng unit ng model. Sa model na feet at inches, ang numerong walang unit ay **inches**, kaya ang `120` ay nangangahulugang 10 feet.

## Hayaang gabayan ka ng ModelCraft sa unang model mo

Bago sa 3D? Sa card na {{ui:Simulan ang modeling}}, i-click ang {{ui:Gabay sa unang model}} (nasa {{ui:Views}} din ito). Gagabayan ka ng isang maliit na card sa apat na hakbang, mula sa patag na rectangle hanggang sa model na handa para sa 3D printer:

1. Gumuhit ng rectangle sa lupa.
2. Hilahin ito pataas para maging box.
3. Gawing isang object ang box (isang group).
4. Suriin ito para sa 3D printing, saka i-download ang file na 3MF o STL.

Binabantayan ng card ang model, hindi ang mga button: lumilipat ito sa susunod na hakbang kapag tapos na ang hakbang, anuman ang paraan ng ginawa mo, at bumabalik ng isang hakbang kapag nag-undo ka. Pinipili ng {{ui:Piliin ang tool}} ang tool para sa iyo. Isara ito anumang oras gamit ang {{ui:×}}.

## Gumuhit ng unang box mo

1. Pindutin ang {{key:R}} para sa tool na {{ui:Rectangle}}, o i-click ang {{ui:Rectangle}} sa {{ui:Draw}} group ng toolbar.
2. I-click nang isang beses sa lupa malapit sa gitna ng view. Iyon ang unang sulok.
3. Ilayo ang pointer. Susunod dito ang isang rectangle, at ipinapakita ng value box sa ibaba (may label na {{ui:Dimension}}) ang laki nito.
4. I-type ang laki at pindutin ang {{key:Enter}}: halimbawa `4m,3m`, o `16',12'` sa feet at inches. Hindi mo kailangang i-click muna ang value box; ang pag-type ng numero ay direktang ipinapadala ito roon.

   Makakakuha ka ng patag na rectangle sa lupa. Isa itong **face**: isang surface na may mga edge sa paligid nito.

5. Pindutin ang {{key:P}} para sa {{ui:Push/pull}}.
6. I-click ang rectangle, ilipat ang pointer pataas, at i-click muli. O i-click ang rectangle at i-type ang taas, gaya ng `3m` o `10'`, saka pindutin ang {{key:Enter}}.

   Nagiging box ang rectangle, na may itaas, ibaba at apat na gilid.

7. Pindutin ang {{key:Space}} para bumalik sa {{ui:Piliin}}, saka i-click ang itaas ng box. Ipinapakita ng {{ui:Impormasyon ng entity}} sa kanan ang lawak nito.

:::tip
Maaari ka ring mag-drag sa halip na mag-click nang dalawang beses: pindutin ang unang sulok, i-drag, at bitawan sa pangalawa. Gumagana ang parehong paraan sa bawat drawing tool.
:::

## Tumingin sa paligid

- **Orbit:** i-drag gamit ang gitnang mouse button (ang wheel), o pindutin ang {{key:O}} at i-drag gamit ang kaliwang button.
- **Pan:** i-drag gamit ang kanang button, o gamit ang gitnang button habang hawak ang {{key:Shift}}.
- **Zoom:** iikot ang wheel. Nag-zo-zoom ito patungo sa anumang nasa ilalim ng pointer.
- **Tingnan lahat:** pindutin ang {{key:Shift+Z}}, o i-click ang {{ui:Extents}}.

Iba ang galaw sa trackpad o touch screen. Tingnan ang [Orbit, pan at zoom](topic:orbit-pan-zoom).

## I-undo

Pindutin ang {{key:Mod+Z}} para i-undo at {{key:Mod+Y}} para i-redo, o gamitin ang {{ui:I-undo}} at {{ui:I-redo}} sa toolbar. Naaalala ng ModelCraft ang huling 200 hakbang habang bukas ang model. Hindi naka-save sa file ang history.

## I-save ang model mo

1. I-click ang {{ui:I-save}} sa {{ui:File}} group, o pindutin ang {{key:Mod+S}}.
2. Dina-download ng browser ang file na pinangalanan ayon sa model mo, gaya ng `Untitled.modelcraft`. Sinasabi ng status bar kung saan ito napunta: "Na-save ang Untitled.modelcraft sa iyong mga download."

**Ang pag-save ay isang download.** Ang bawat save ay gumagawa ng bagong kopya sa iyong downloads folder; hindi nito pinapalitan ang file na binuksan mo. Para panatilihing maayos ang project folder, ilipat o palitan ang pangalan ng file doon mismo. Ipinapaliwanag ng [Buksan, i-save, i-import at i-export](topic:files) kung bakit at ano pa ang maaari mong gawin.

:::warning
Hindi nag-si-save nang kusa ang ModelCraft. Kung isasara mo ang tab na may hindi pa nai-save na pagbabago, unang magtatanong ang browser ("Leave site?"). Piliing manatili, saka mag-save.
:::

## Kumuha ng tulong

Pindutin ang {{key:F1}} o i-click ang {{ui:Tulong}} sa app bar para buksan ang help na ito sa tabi ng model. Gumagana ito nang walang koneksyon. Pindutin muli ang {{key:F1}}, o ang {{key:Esc}} sa loob ng help, para isara ito. Tingnan ang [Paggamit ng help na ito](common:help).

## Saan pupunta susunod

- [Gumuhit ng face gamit ang mga linya, rectangle at bilog](topic:draw-faces)
- [Itulak at hilahin ang mga face para maging solid](topic:push-pull)
- [I-type ang eksaktong laki sa value box](topic:value-box)
- [Bawat key at mouse action](topic:keyboard)
