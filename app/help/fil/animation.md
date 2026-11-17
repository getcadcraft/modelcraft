---
title: I-animate ang camera at mga object, at mag-render ng video
summary: Maglagay ng keys para sa camera at para sa mga group at component sa isang timeline, i-play ang mga ito sa view, at i-render ang animation bilang WebM video gamit ang sky, araw at mga materyal ng renderer.
keywords: animation, animate, timeline, keyframe, keys, key frame, camera path, fly through, flythrough, walkthrough, walk through, video, movie, film, webm, render video, frames, frame rate, fps, playhead, auto key, ease, smooth, hold, scenes, png sequence, galaw
from: d3a58249
---

Ginagalaw ng **timeline** ang camera at anumang group o component sa paglipas ng panahon. Nagtatakda ka ng **keys** (kung nasaan ang isang bagay sa isang tiyak na sandali); maayos na gumagalaw ang ModelCraft mula key papunta sa key. I-play ito sa view, pagkatapos i-render sa video na may parehong sky, araw, materyal at lamp gaya ng [isang rendered na larawan](topic:render).

## Buksan ang timeline

I-click ang {{ui:Views}} sa {{ui:Camera}} group, pagkatapos ang {{ui:Animation timeline}}. Bubukas ang timeline sa ilalim ng view: ang mga kontrol sa itaas, pagkatapos ang isang **Camera** row at isang row para sa bawat group o component na gumagalaw. Ang mga diamond ay keys; ang pulang linya ay ang **playhead**, ang sandaling ipinapakita sa view.

:::touch
Sa phone, bumubukas din ang timeline sa ilalim ng view. Isang row ang mga kontrol nito: i-swipe ito pagilid para maabot ang iba; ang button na nagsasara ng timeline ay nananatili sa dulo nito.
:::

I-drag ang slider (o i-click sa isang row) para ilipat ang playhead. Ang {{ui:Play}} ay nagpe-play mula sa playhead at nagiging {{ui:Pause}} habang tumatakbo; i-click ulit para huminto kung nasaan ito. Ginagawa rin ito ng {{key:Space}} habang bukas ang timeline (kapag sarado ang timeline, Select pa rin ang Space). Tumatalon ang {{ui:Previous key}} at {{ui:Next key}} sa pagitan ng keys. Maaaring bigyan ng sariling style ang play at pause ng ibang key: {{ui:Settings}}, pagkatapos ang mga menu, keys at mouse, ang command na *Play or pause the animation*.

## Ilipat ang camera

1. Ilipat ang playhead sa simula ng shot (0 s), ayusin ang view, at i-click ang {{ui:Key camera}}.
2. Ilipat ang playhead sa mas huli (halimbawa 4 s), mag-orbit, mag-pan o maglakad sa view papunta sa susunod na posisyon, at i-click ulit ang {{ui:Key camera}}.
3. Magdagdag ng kasing-dami ng keys na gusto mo, pagkatapos {{ui:Play}}.

Dumadaan ang camera nang maayos sa bawat key at nagsisimula at nagtatapos sa pahinga.

:::tip
May [scenes](topic:scenes) ka na? Ginagawa ng {{ui:From scenes}} ang landas ng camera mula sa mga ito: humihinto ito sa bawat scene, pagkatapos lumilipat sa susunod. Kung walang keys ang timeline, ginagawa ito mismo ng {{ui:Render video…}}, kaya sapat na ang dalawa o higit pang scene para sa walkthrough video.
:::

## Ilipat ang group o component

1. Piliin ang group o component (tanging buong group at component ang gumagalaw; [gumawa ng group](topic:groups-components) muna).
2. Sa 0 s, i-click ang {{ui:Key selected}}.
3. Ilipat ang playhead sa mas huli, [ilipat, i-rotate o i-scale](topic:move-copy) ang group sa tamang lugar nito, at i-click ulit ang {{ui:Key selected}}.

Dumudulas, umiikot at lumalaki ito sa pagitan ng mga key nito. Pinipili ng mga turn ang maikling daan.

Ang **Auto key** ay nagtitipid ng click sa hakbang 3: habang naka-on ang {{ui:Auto key}}, ang napiling group o component na iyong ililipat, iikutin o isasukat ay makakakuha ng key sa playhead nang kusa (at, sa unang pagkakataon, isang key sa 0 s kung saan ito naroon).

:::note
Ang paggalaw ng animated na group nang walang key ay tumatagal lamang hanggang gumalaw ang playhead: sa susunod na pag-play mo o pag-scrub, babalik ito kung saan ito inilagay ng mga key nito. Sinasabi ito ng status bar. Pindutin ang {{ui:Key selected}} para mapanatili ito.
:::

## Baguhin ang keys

- **Pumili ng key** sa pamamagitan ng pag-click sa diamond nito: pupunta roon ang playhead.
- **Ilipat ang key** sa pamamagitan ng pag-drag ng diamond nito sa kahabaan ng row nito, o gamit ang {{key:Left}} at {{key:Right}} (isang frame; gamit ang {{key:Shift}}, sampu).
- **Burahin** gamit ang {{ui:Delete key}} (ang napiling key, o bawat key sa playhead) o ang {{key:Delete}} sa napiling diamond.
- **Paano ito lumilipat**, para sa napiling key: {{ui:Smooth}} (curve na dumadaan sa mga key sa paligid nito), {{ui:Steady}} (tuwid na linya sa iisang bilis), {{ui:Slow in and out}} (humihinto sa key na ito) o {{ui:Hold}} (nananatili hanggang sa susunod na key).
- Itinatakda ng **Haba (s)** kung gaano katagal ang animation; ang key na nakalagay pagkatapos ng dulo ay nagpapahaba nito. Para paikliin ito, ilipat o burahin muna ang mga key na lampas sa bagong dulo.
- Ang **×** sa row ng group ay humihinto sa pag-animate nito.

May sariling {{ui:Undo}} at {{ui:Redo}} ang timeline: binabawi ng undo ng model ({{key:Mod+Z}}) ang model, hindi ang mga key. Nakasave ang animation sa `.modelcraft` file. Ang pagsasara ng timeline ay ibinabalik ang mga gumagalaw na group sa kanilang unang pose.

## I-render ang video

1. I-click ang {{ui:Render video}} sa timeline (o {{ui:Export}} › {{ui:Render video…}}).
2. Piliin ang {{ui:Size}}, ang {{ui:Frame rate}}, ang {{ui:Quality of each frame}} at ang {{ui:File}}.
3. I-click ang {{ui:Render video}}. Lumalabas ang bawat frame habang ginagawa, kasama ang natitirang oras.
4. Kapag tapos na, i-click ang {{ui:Save video}}.

Ang {{ui:Stop}} (o {{key:Esc}}) ay tumitigil nang maaga; ang {{ui:Save video}} pagkatapos ay pinapanatili ang mga frame na nagawa na bilang mas maikling video.

Ang sky, araw, materyal, lamp at liwanag ay ang mga itinakda sa {{ui:Render a picture…}}: itakda ang mga iyon muna, at tingnan ang isang still. Nirerender ang bawat frame sa computer na ito; walang ina-upload.

| Setting | Ano ang ginagawa nito |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, o ang sariling hugis ng view (hanggang 1920 pixels ang lapad) |
| {{ui:Frame rate}} | 24, 25, 30 o 60 frame kada segundo. Dobleng frame ang dobleng tagal |
| {{ui:Quality of each frame}} | {{ui:Mabilis}} (4 pass), {{ui:Draft}} (16) o {{ui:Maganda}} (64): mas maraming pass ang mas makinis na anino at gilid |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} kung kaya itong isulat ng browser, o {{ui:PNG pictures, one per frame (ZIP)}} para sa mga video editor (at para sa mga browser na walang video encoder) |

:::tip
Ang 10-segundong video sa 30 frame kada segundo ay 301 frame. Subukan muna ang {{ui:Mabilis}} sa 480p para suriin ang galaw, pagkatapos i-render ang {{ui:Draft}} o {{ui:Maganda}} sa mas malaking sukat.
:::

Nagpe-play ang WebM sa mga browser at VLC, at kino-convert ito ng mga video editor. Inaalok ang {{ui:MP4 video (H.264)}} kung kaya itong isulat ng browser. Gumagamit ang {{ui:Render video}} ng mabilis na renderer; para i-path trace ang bawat frame, piliin ang {{ui:Add this animation to the queue}} sa parehong dialog: iire-render ang mga frame sa [render queue](topic:render#the-render-queue), na nangangailangan ng WebGPU.

:::firefox safari
Ang pag-render ng video ay nangangailangan ng browser na siya mismong nag-e-encode ng video (WebCodecs): kayang gawin ito ng mga bagong Chrome, Edge, Firefox at Safari 17. Kung wala nito, piliin ang {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Mga dapat tandaan

- Tanging buong group at component ang gumagalaw. Ang mga face, gilid, oras ng araw at style ay hindi pa nagbabago sa paglipas ng panahon.
- Ang {{ui:Export animation}} sa ilalim ng [Scenes](topic:scenes) ay nagre-record pa rin ng view gaya ng nakikita sa screen, sa real time; ang {{ui:Render video}} ay nagre-render ng bawat frame kasama ang sky, anino at materyal.
