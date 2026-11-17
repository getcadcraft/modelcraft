---
title: I-save ang mga view bilang scene
summary: I-save ang camera at istilo bilang scene, i-update at palitan ang pangalan nito, at mag-step o mag-play sa mga scene para ipresenta ang disenyo.
keywords: scene, view, naka-save na view, camera, presentation, animation, play, slideshow, page up, page down, tabs, walkthrough
from: 38680d6e
---

Ang isang **scene** ay naaalala ang posisyon ng camera, istilo, at kung ano ang nakatago: saan ka tumitingin, perspective o parallel, ang estilo ng face, mga gilid, ang mga setting ng araw, mga nakatagong group, mga tag na naka-off, at ang section cut. Naka-save ang mga scene sa `.modelcraft` file.

## Magdagdag ng scene

1. Ihanda ang view: mag-orbit, mag-zoom, pumili ng estilo, itakda ang araw.
2. Sa {{ui:Mga scene}} panel sa kanan, i-click ang {{ui:Magdagdag ng scene}}.

   Lumilitaw ang scene sa listahan, pinangalanang "Scene 1", "Scene 2" at iba pa, at bilang tab sa itaas ng 3D view. Sinasabi ng status bar: "Na-save ang Scene 1: itong camera, istilo, at kung ano ang nakatago."

## Pumunta sa scene

- I-click ang tab nito sa ibabaw ng 3D view, o ang pangalan nito sa listahan ng {{ui:Mga scene}}.
- O pindutin ang {{key:PageDown}} para sa susunod na scene at {{key:PageUp}} para sa nauna. Ginagawa rin ng {{ui:Susunod}} at {{ui:Nakaraan}} sa ilalim ng listahan ang parehong bagay.

Dumudulas ang camera papunta sa scene sa mahigit kalahating segundo. Kung naka-set ang computer mo para bawasan ang galaw, tatalon ito papunta doon.

## Baguhin, palitan ang pangalan o burahin ang scene

May tatlong maliliit na button pagkatapos ng pangalan ang bawat scene sa listahan:

- **I-update** (ang mga pabilog na arrow): sine-save ang kasalukuyang camera, istilo, at kung ano ang nakatago sa scene na iyon. "Na-update ang Scene 2."
- **Palitan ang pangalan** (ang lapis): nagbubukas ng dialog na "Palitan ang pangalan ng scene". I-type ang bagong pangalan at i-click ang {{ui:I-save}}.
- **Burahin** (ang basurahan): tinatanggal ang scene. "Nabura ang Scene 2. Ibinabalik ito ng Ctrl+Z."

Ang pagdaragdag, pag-update, pagpapalit ng pangalan, at pagbura ng mga scene ay mga hakbang sa undo, gaya ng mga pagbabago sa model.

## I-lock ang camera ng scene

Kapag paulit-ulit mong ni-re-render ang parehong view habang nagbabago ang disenyo, i-lock ang camera ng scene na iyon para hindi kailanman maililipat nang hindi sinasadya ang view.

1. Sa listahan ng {{ui:Mga scene}}, i-click ang **lock** button (ang bukas na kandado) pagkatapos ng pangalan ng scene. Magsasara ito, at ang tab ng scene sa ibabaw ng 3D view ay magpapakita ng maliit na kandado. Sinasabi ng status bar: "Scene 2: naka-lock ang camera."
2. Pumunta sa scene tuwing gusto mong mag-render: babalik ang camera sa eksaktong naka-save na view, kaya magkakatugma ang mga larawang nagawa mula dito sa mga naunang larawan.

Habang naka-lock ang camera, sine-save pa rin ng **I-update** ang istilo at kung ano ang nakatago sa scene, pero nananatili ang camera kung nasaan ito, kahit nag-orbit ka na palayo. I-click muli ang kandado para i-unlock ito; sine-save na muli ng I-update ang kasalukuyang view. Ang pag-lock at pag-unlock ay mga hakbang sa undo, at naka-save ang lock sa `.modelcraft` file.

## Ipresenta

1. Magdagdag ng dalawa o higit pang scene.
2. I-click ang {{ui:Play}} sa ilalim ng listahan. Lumilipat ang ModelCraft sa susunod na scene bawat ilang segundo at bumabalik sa una pagkatapos ng huli.
3. I-click ang {{ui:Itigil}} (parehong button) o pindutin ang {{key:Esc}} para huminto.

Para sa pag-aaral ng araw, magdagdag ng isang scene bawat oras na tanging ang {{ui:Oras}} ang nabago, pagkatapos i-play ang mga ito. Tingnan ang [Mga istilo at anino ng araw](topic:styles-shadows#a-sun-study).

Para mag-present nang walang mga bar, pindutin ang {{key:Ctrl+Shift+F}} nang dalawang beses: full screen, pagkatapos full screen na nakatago ang mga bar. Nananatili sa ibabaw ng view ang mga tab ng scene.

## Ano ang ipinapakita ng scene

Naaalala ng scene kung ano ang nakatago noong i-save mo ito: mga group at component na [itinago](topic:hide-isolate) mo, mga [tag](topic:tags) na naka-off, at aling [section plane](topic:sections) ang pumuputol. Kapag pumunta ka sa scene, itinatago at ipinapakita ulit ang mga ito. Kaya ang isang scene ay maaaring magpakita ng buong bahay, ang susunod ay ang bahay na naka-off ang tag ng bubong, at ang sumunod naman ay isang section na dumaraan dito.

Hindi bahagi ng mga scene ang mga nakatagong maluwag na face at edge. Ang pagpunta sa scene ay hindi gumagawa ng undo step. Ang mga scene na na-save ng naunang build ng ModelCraft ay iniiwan ang nakatago ayon sa dati; i-click ang I-update para i-save ito sa mga iyon.

## I-export ang animation

{{ui:I-export ang animation}}, sa ilalim ng listahan, ay nagpe-play ng mga scene mula una hanggang huli, dahan-dahang inililipat ang camera sa pagitan ng mga ito, at sine-save ang pelikula bilang **WebM** na video (dalawang segundong galaw at maikling paghinto bawat scene). Nire-record nito ang view gaya ng nakikita mo, sa sukat nito sa screen, sa [presentation view](topic:styles-shadows#presentation-view) (walang axis, guide o napili). Pindutin ang {{key:Esc}} o i-click muli ang button para huminto nang hindi nagse-save. Tumatakbo ang WebM sa mga browser at sa VLC, at kino-convert ito ng mga video editor.

Para sa naka-render na walkthrough (langit, araw, anino, materyal) sa sukat na pipiliin mo, gamitin ang {{ui:I-render ang video…}}: kung walang animation key, kukunin nito ang mga scene, sa pagkakasunod-sunod, bilang landas ng camera. Tingnan ang [I-animate ang camera at mga bagay](topic:animation).

## Mga dapat malaman

- Hindi nababago ang scene kapag binago mo ang istilo o inilipat ang camera pagkatapos pumunta sa scene, hangga't hindi mo i-click ang I-update.
- Hindi ine-export ang mga scene sa Collada, OBJ, glTF, STL o IFC.
