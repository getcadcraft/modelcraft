---
title: Gamitin ang ModelCraft kasama ang AI assistant
summary: Hayaan ang sarili mong AI assistant o script na tingnan ang model at gumawa ng simpleng solid: mga pahintulot, pagkonekta sa pamamagitan ng CadCraft Studio, at ang activity log.
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, modeling, box, cylinder, render, render queue, pahintulot, idiskonekta, aktibidad
from: 629cd0b7
---

## Ano ang matututunan mo

Paano hayaang gumana ang isang AI assistant (o script na isinulat mo) kasama ang ModelCraft, at paano pagpapasyahan kung ano ang maaari nitong galawin.

Walang sariling AI ang ModelCraft at wala itong ipinapadala kahit saan. Ikaw ang magdadala ng assistant: anumang program na nagsasalita ng Model Context Protocol (MCP). Nagbibigay lang ang ModelCraft ng mga tool, at ikaw ang pumipili kung alin.

## I-on ito

1. Buksan ang {{ui:Mga setting}} (ang gear sa app bar, o {{key:Mod+,}}) at pumunta sa tab na {{ui:ModelCraft}}.
2. Sa ilalim ng {{ui:Mga Assistant}}, lagyan ng tsek ang **Hayaang gamitin ng mga AI assistant at script ang ModelCraft**. Naka-off ito hangga't hindi mo ito ginagawa.
3. Piliin kung ano ang maaari nitong gawin: naka-tsek na ang **Basahin** sa simula; lagyan ng tsek ang **I-edit**, **I-save** o **I-export** lang kapag kailangan mo ang mga ito.

Hindi iaalok sa assistant ang mga tool na wala sa mga pahintulot na tinsekan mo, at kung humingi pa rin ito ng isa, tinatanggihan ito ng ModelCraft at isinusulat sa activity log. Ang pag-off ng switch ay nagtatapos sa lahat ng koneksyon nang sabay-sabay; pina-off din ito ng {{ui:I-reset ang mga setting ng ModelCraft}}.

## Ikonekta ang iyong assistant

Kumokonekta ang mga assistant sa pamamagitan ng **CadCraft Studio** sa computer mo: nagpapatakbo ang Studio ng maliit na server na abot lang ng computer na ito, at protektado ng token na ginagawa nito tuwing magsisimula. Sa Studio, piliin ang {{ui:Ikonekta ang isang assistant}} at kopyahin ang address at ang token sa assistant mo (ipinapakita ng Studio ang eksaktong setting na ipe-paste). Huwag kailanman ibahagi ang token.

:::note
Hindi makapagbubukas ng koneksyon para sa assistant ang browser tab: sa mga app sa browser, walang epekto ang switch hanggang gamitin mo ang CadCraft Studio sa computer mo.
:::

## Ikaw pa rin ang may kontrol

- **Isang undo step ang bawat pagbabago**, may label na pangalan ng assistant (halimbawa "Assistant: box"). Binabawi ng {{key:Mod+Z}} ang huling pagbabago ng assistant nang buo.
- **Alam mo kung may nakakonekta.** Ipinapakita ng isang button sa app bar ang pangalan ng assistant habang nakakonekta ito; i-click ito para makita kung ano ang maaari nitong gawin, o para **Idiskonekta** ito.
- **Aktibidad.** Inililista ng {{ui:Mga setting}} › {{ui:ModelCraft}} › {{ui:Mga Assistant}} › {{ui:Aktibidad}} ang bawat tawag: kailan, aling tool, tapos o tinanggihan. Itinatago ng {{ui:I-save ang log}} ang isang kopya.

## Ano ang maaaring hingin ng assistant

| Tool | Pahintulot | Ano ang ginagawa nito |
|---|---|---|
| `app_info`, `model_describe` | Basahin | Ang unit ng model, laki, at bawat group at component kasama ang kinalalagyan nito, kung ito ay closed solid, at ang volume nito |
| `view_screenshot` | Basahin | Larawan ng 3D view gaya ng nakikita |
| `box_add`, `cylinder_add` | I-edit | Isang box o silindro bilang bagong group, sa lugar at laki na ibibigay mo o ng assistant ("3m", "10'" o numero sa unit ng model) |
| `instance_move`, `instances_erase` | I-edit | Ginagalaw o binubura ang mga group at component |
| `faces_list`, `materials_list` | Basahin | Ang mga face ng isang group o ng loose geometry (direksyon, lawak at sentro ng bawat isa); ang mga materyal at kulay na maaari nitong ipintura |
| `push_pull` | I-edit | Itinutulak o hinihila ang isang face, gaya ng ginagawa ng {{ui:Push/pull}} |
| `paint` | I-edit | Nagpipintura ng mga face o buong group ng kulay o materyal |
| `group_make` | I-edit | Gumagawa ng group o component mula sa loose na face at group |
| `scene_add`, `scene_show` | I-edit | Sine-save ang view bilang scene; pumupunta sa naka-save na scene |
| `mesh_add` | I-edit | Isang mesh object na pagsisimulan (cube, sphere, cylinder …), gaya ng pagdagdag nito sa Mesh workspace |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Basahin / I-edit | Ang modifier stack ng mesh: mirror, array, subdivision, bevel at iba pa; walang ina-apply nang permanente |
| `usd_export` | I-export | Ang model bilang OpenUSD (.usda, .usdc o .usdz), gaya ng pagsulat ng pag-save ng model bilang USD ([USD](topic:usd)); sa folder na pinayagan mo sa Studio, kung hindi, download |
| `render_still` | I-export | Isang na-render na larawan ng view o ng naka-save na scene, gaya ng ginagawa ng button na {{ui:I-render}} sa dialog na {{ui:I-render}}, gamit ang mga setting ng render mo maliban kung humingi ito ng iba (preset ng scene: exterior, interior, section, night o auto; mabilis o high quality, laki, samples, sky); isang PNG na maaari nitong tingnan, o PNG, EXR o render file sa folder na pinayagan mo sa Studio ([I-render ang larawan](topic:render)) |
| `render_queue` | I-export | Nagdaragdag ng high-quality na larawan sa pila ng dialog na Render (ang view, o naka-save na scene) at pinapatakbo ang pila; ang natapos na larawan ay napupunta sa folder na pinayagan mo, o nananatili sa {{ui:Pila ng render}} ng dialog para sa iyo. Kailangan ng WebGPU |
| `link_push` | I-edit | Ina-update ang model na naka-link mula sa ibang program (tingnan ang [Panatilihing live ang modelong .3dm](topic:live-3dm-link)) |
| `link_status` | Basahin | Sinasabi kung nandiyan pa ang naka-link na model at kailan ito huling na-update |
| `undo` | I-edit | Binabawi ang sarili nitong mga step |

Ang mga solid na ginagawa ng assistant ay pumapasok bilang group, kaya hindi kailanman nagsasama ang mga ito sa iginuhit mo. Walang tool na nagse-save ng model: ikaw pa rin ang nag-save, at ang pag-export o pag-render ay nangangailangan ng naka-tsek na **I-export**. Hindi nagbabago ng anuman sa model ang render; ang pag-render ng naka-save na scene ay inililipat ang view dito, gaya ng ginagawa ng {{ui:Mga scene}}.

## Kung may hindi gumana

- **Walang nakikitang tool ng ModelCraft ang assistant:** tingnan kung naka-on ang switch sa window na ito, at kung bukas ang window sa Studio.
- **"Kailangan ng pahintulot na i-edit":** lagyan ng tsek ang **I-edit** sa ilalim ng {{ui:Mga Assistant}}, saka humiling ulit.
- **Mga error na "401" o "token":** nagbago ang token (nag-restart ang Studio, o {{ui:Bagong token}}). Kopyahin ang bago sa mga setting ng assistant.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang may kumpletong hakbang, bawat isa may tool na tinatawag nito.
