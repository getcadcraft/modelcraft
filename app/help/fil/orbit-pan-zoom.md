---
title: Orbit, pan at zoom
summary: Umikot sa paligid ng model gamit ang mouse, trackpad, touch screen o keyboard, at tumalon sa mga karaniwang view.
keywords: orbit, pan, zoom, long press, three fingers, two fingers, tap, navigate, camera, view, rotate view, trackpad, touch, pinch, middle button, zoom extents, perspective, parallel, top view, iso
from: 10d4d33a
---

Maaari mong ilipat ang camera anumang oras, kahit sa gitna ng pagguhit ng linya o pagtulak ng face: maghihintay sa dating lugar ang tool.

## Gamit ang three-button na mouse

| Para | Gawin ito |
|---|---|
| Orbit | I-drag gamit ang middle button (pindutin ang wheel) |
| Pan | I-drag gamit ang right button, o hawakan ang {{key:Shift}} at i-drag gamit ang middle button. Ang pagpindot o pagbitaw ng {{key:Shift}} habang nagdra-drag ay nagpapalipat-lipat sa pagitan ng orbit at pan |
| Zoom | I-scroll ang wheel. Nag-zoom ito patungo sa face sa ilalim ng pointer, o patungo sa punto sa ilalim nito sa lalim ng gitna ng view |
| Tingnan ang buong model | {{key:Shift+Z}} o {{ui:Extents}} |

Ang Orbit ay umiikot sa view sa paligid ng bahagi ng model sa ilalim ng pointer, kaya nananatili sa lugar ang puntong iyon habang umiikot ang lahat sa paligid nito. Sa ibabaw ng walang laman na espasyo, umiikot ito sa gitna ng view. Pinananatili ng Pan ang punto na hinawakan mo sa ilalim ng pointer.

Para laging umikot sa gitna ng view, o para gawing mas mabilis o mas mabagal ang orbit at pan, buksan ang {{ui:Settings}} ({{key:Mod+,}}), tab na {{ui:ModelCraft}}, **Orbit and pan**. Nalalapat ang mga bilis sa mouse, trackpad, touch at arrow key.

Walang ginagawa ang right-click na walang drag; walang right-click menu ang ModelCraft.

## Kung walang middle button

Gamitin ang mga camera tool sa toolbar, o ang keyboard:

1. Pindutin ang {{key:O}} (o i-click ang {{ui:Orbit}}) at i-drag gamit ang left button para umikot. Hawakan ang {{key:Shift}} habang nagdra-drag para mag-pan.
2. Pindutin ang {{key:H}} (o i-click ang {{ui:Pan}}) at i-drag para mag-pan.
3. Pindutin ang {{key:Z}} (o i-click ang {{ui:Zoom}}) at i-drag pataas para mag-zoom in, pababa para mag-zoom out.
4. Pindutin ang {{key:Space}} para bumalik sa {{ui:Select}}, o pindutin ang key ng tool na gusto mo sunod.

Pinapalitan ng mga camera tool ang tool na ginagamit mo. Para tumingin sa paligid sa gitna ng isang operasyon nang hindi ito nawawala, gamitin ang keyboard:

- Umiikot ang view sa arrow keys.
- Ang {{key:Shift}} kasama ang arrow keys ay nagpa-pan.

Habang nasa gitna ng operasyon ang isang drawing tool (pagkatapos ng unang click nito), ang arrow keys ay nagla-lock ng mga direksyon sa halip na mag-orbit. Tingnan ang [Inference at snapping](topic:inference#lock-a-direction).

## Sa trackpad

Ang pinakamadaling paraan: buksan ang {{ui:Settings}} ({{key:Mod+,}}), tab na {{ui:ModelCraft}}, at itakda ang Scrolling sa **Trackpad** (o iwan sa "Work it out"). Pagkatapos, mag-swipe gamit ang dalawang daliri para mag-orbit, hawakan ang {{key:Shift}} at mag-swipe para mag-pan, at mag-pinch para mag-zoom, walang camera button. Tingnan ang [Mga setting ng ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Kapag nakatakda ang Scrolling sa **Mouse wheel**:

:::mac
- **Zoom:** mag-scroll gamit ang dalawang daliri, o mag-pinch. Parehong nag-zo-zoom patungo sa pointer.
- **Pan:** pindutin gamit ang dalawang daliri (secondary click) at panatilihing nakadiin ang mga daliri habang nagdra-drag. I-on ang "Secondary click" sa **System Settings**, pagkatapos ay **Trackpad**, kung walang nangyayari sa two-finger click.
- **Orbit:** pindutin ang {{key:O}} at mag-drag gamit ang isang daliri, o gamitin ang arrow keys.
- Maaaring hindi bilangin bilang right-click sa ModelCraft ang pagpindot sa {{key:Ctrl}} habang nag-click, depende sa browser: maaari itong kumilos bilang click na may hawak na {{key:Ctrl}}. Gamitin ang two-finger press para mag-pan.
:::

:::windows linux
- **Zoom:** mag-scroll gamit ang dalawang daliri. Nag-zo-zoom din ang pinch kung ipinapadala ito ng touchpad driver bilang scroll na may {{key:Ctrl}}.
- **Pan:** mag-drag gamit ang right button (sa maraming touchpad, pindutin ang ibabang kanang sulok at mag-drag), o pindutin ang {{key:H}} at mag-drag.
- **Orbit:** pindutin ang {{key:O}} at mag-drag, o gamitin ang arrow keys.
:::

Kapag Mouse wheel ang nakatakda, nag-zo-zoom ang two-finger scrolling; hindi ito nag-pa-pan. Kabaligtaran ito ng maraming web page, at ganito kumilos ang mouse wheel sa karamihan ng 3D modeler.

:::tip
Pinipili ng {{key:Space}} ang {{ui:Select}} tool sa ModelCraft. Ang paghawak sa {{key:Space}} at pag-drag ay hindi nagpa-pan, gaya ng sa ilang ibang app.
:::

## Sa touch screen

:::touch
- **Isang daliri** ay gumagamit ng kasalukuyang tool: **tap** para mag-click, **pindutin at i-drag** para gumuhit o mag-drag.
- Habang nakadiin ang daliri ng drawing tool, may **loupe** sa itaas nito na nagpapakita kung ano ang nasa ilalim ng daliri, para makita mo ang endpoint, midpoint o edge na sinasnapan nito bago mo bitawan.
- **Manatiling nakatigil** nang kalahating segundo para tapusin ang ginagawa ng tool, gaya ng ginagawa ng {{key:Enter}}: isang curve, isang chain ng linya. Kapag walang ginagawa, ang pananatiling nakatigil at pagkatapos ay pag-drag gamit ang parehong daliri ay **nag-oorbit** hanggang bitawan mo ito.
- **Dalawang daliri** na sabay na dina-drag ay **nag-pa-pan**; **pinch** para mag-zoom. Parehong gumagana sa isang galaw.
- **Tatlong daliri** na sabay na dina-drag ay **nag-oorbit**.
- Para palitan ang mga ito (dalawang daliri ang mag-orbit, tatlo ang mag-pan), buksan ang {{ui:Settings}}, tab na {{ui:ModelCraft}}, Touch screen.
- Ang paglalagay ng pangalawang daliri ay **nagkakansela** sa sinimulan ng unang daliri (isang rectangle na kalahating nagawa, isang push/pull na ginagawa). Bitawan ang mga daliri at magsimula muli.
- May maliit na bar sa ibaba ng view na may **Done** ({{key:Enter}}), **Cancel** ({{key:Esc}}) at **Undo**, para sa mga walang keyboard.
- Mas malayo ang abot ng snapping at pagpili kaysa sa mouse, at mas malaki ang mga button, kaya kayang tamaan ng daliri.
:::

:::mouse
Sa touch screen, ang isang daliri ay gumagamit ng kasalukuyang tool (tap para mag-click, manatiling nakatigil para tapusin, o manatiling nakatigil at mag-drag para mag-orbit), ang dalawang daliri ay nag-pa-pan at nag-pi-pinch para mag-zoom, ang tatlong daliri ay nag-oorbit, at may maliit na bar na nag-aalok ng Done, Cancel at Undo.
:::

## Mga karaniwang view

1. I-click ang {{ui:Views}} sa kanang dulo ng toolbar.
2. Piliin ang {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} o {{ui:Bottom}}.

Umiikot ang view patungo sa direksyong iyon at kasya ang buong model. Tumitingin ang {{ui:Front}} pahilaga, kasama ang berdeng axis; ang {{ui:Top}} ay tumitingin pababa nang tuwid na nakaturo ang hilaga pataas.

Ang view cube sa kanang itaas ng view ay ginagawa rin ito sa isang click, kasama ang mga gilid at sulok, isang compass ring para paikutin ang model, at home button. Tingnan ang [The view cube](topic:view-cube).

## Perspective at parallel projection

Piliin ang {{ui:Views}}, saka {{ui:Perspective}}. Ang check mark ay nangangahulugang naka-on ang perspective. Kapag naka-off ito, ang view ay parallel (orthographic) projection: nananatiling parallel sa screen ang mga linyang parallel sa model, at iyon ang gusto mo para sa elevation mula sa {{ui:Front}} o {{ui:Right}}. Sinasabi ng status bar na "Perspective." o "Parallel projection."

Naaalala ng bawat scene kung nasa perspective ito. Tingnan ang [I-save ang mga view bilang scene](topic:scenes).
