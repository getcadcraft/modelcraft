---
title: I-render ang larawan ng model
summary: Gumawa ng larawang mukhang liwanag ng araw: langit, araw mula sa lugar at petsa ng model, malalambot na anino, itsura ng salamin at metal, at saka i-save bilang PNG.
keywords: render, preset, presets, scene preset, panloob, panlabas, section view, gabi, isang click, rendering, path tracing, path traced, ray tracing, global illumination, reflections, refraction, high quality, larawan, photo, photoreal, realistic, picture, image, png, still, langit, araw, daylight, shadows, soft shadows, ambient occlusion, salamin, metal, glossy, materyal, exposure, liwanag, overcast, dusk, studio, presentation, fog, haze, ambon, usok, ulap, volume, light shafts, god rays, caustics, adaptive sampling, noise
from: 517ba4d3
---

Ang {{ui:I-render ang larawan…}} ay gumagawa ng larawan ng view na mukhang liwanag ng araw at hindi drawing: isang langit, ang araw kung saan ito ilalagay ng lugar at petsa ng model, malalambot na anino, liwanag mula sa buong langit na nagpapadilim sa mga sulok at siwang, at mga kulay na maaaring magmukhang salamin, metal o gloss na pintura. Hindi binabago ang model.

## I-render ang view

1. Ihanda ang view ayon sa larawang gusto mo: mag-orbit, mag-zoom, pumili ng [scene](topic:scenes), itago ang dapat hindi lumabas. Ginagamit ng larawan ang sariling camera ng view.
2. I-click ang {{ui:I-export}} sa {{ui:File}} group, pagkatapos ang {{ui:I-render ang larawan…}}.
3. Pumili ng {{ui:Eksena}} kung hindi ang napindot ang gusto mo (tingnan ang [Mga preset ng scene](topic:render#scene-presets-a-good-picture-in-one-click)), piliin ang {{ui:Sukat}}, pagkatapos i-click ang {{ui:I-render}}.

   Lumilitaw ang larawan habang nire-render at nagiging mas makinis sa bawat pass. Ang {{ui:Itigil}} (o {{key:Esc}}) ay nagtatapos nang maaga at pinananatili ang larawang nagawa na.

4. I-click ang {{ui:I-save}} para i-download ito (PNG maliban kung sinabi ng {{ui:I-save bilang}}).

:::tip
Magsimula sa {{ui:Draft}} sa {{ui:Laki ng view}} para tingnan ang camera at itsura, pagkatapos i-render ang {{ui:Maganda}} o {{ui:Pinakamaganda}} sa mas malaking sukat para sa huling larawan.
:::

## Mga preset ng scene: magandang larawan sa isang click

Nasa itaas ng dialog ang apat na button na {{ui:Eksena}}. Bawat isa ay nagtatakda ng langit, liwanag, lupa, mga linya ng gilid, kalidad at araw sa isang click, kaya walang kailangang alamin bago ang unang larawan. I-click ang isa, pagkatapos ang {{ui:I-render}}.

| Eksena | Ano ang itinatakda | Gamitin para sa |
|---|---|---|
| {{ui:Panlabas}} | Maaliwalas na langit, sariling araw ng model, naka-on ang lupa | Ang gusali mula sa labas |
| {{ui:Panloob}} | Maulap na langit (malambot na liwanag, walang matapang na sinag ng araw), kalahating stop na mas maliwanag | Ang view mula sa loob ng kuwarto |
| {{ui:Section view}} | Puting studio, walang lupa, mga linya ng gilid sa mabilis na render | Model na hiniwa ng section |
| {{ui:Gabi}} | Lumubog ang araw (hatinggabi sa kalagitnaan ng taglamig para sa kalahati ng mundo ng site), isang stop na mas maliwanag | Mga lampara na nagbibigay liwanag sa model. Kung walang lampara, madilim ang larawan |

- {{ui:Piliin para sa view na ito}} ang pumipili para sa iyo: {{ui:Section view}} kapag may naka-on na section cut, {{ui:Panloob}} kapag nasa loob ng model ang camera, kung hindi ay {{ui:Panlabas}}. Sa unang pagbukas mo ng dialog, ganito ito magsisimula nang kusa.
- Nasa ibaba ang bawat setting at maaaring palitan. Kapag binago mo ang isa sa mga itinakda ng eksena, walang button na mananatiling napindot, at sasabihin ng linya sa ilalim ng mga button na sarili mo na ang mga setting. I-click muli ang eksena para maibalik ang mga halaga nito.
- Hindi ginagalaw ng eksena ang engine, ang mode, ang sukat, ang mga materyal, ang camera o ang mga lampara.

:::note
Pareho ang halaga ng mga eksena sa ModelCraft at BimCraft. Ang itsura ng tapos na larawan ay nakadepende sa iyong model at sa iyong graphics card.
:::

## Mga setting

| Setting | Ano ang ginagawa |
|---|---|
| {{ui:Sukat}} | Laki ng view, dalawang beses ang laki ng view, Full HD, 4K o parisukat. Ang nakapirming sukat ay nagpapanatili ng camera ng view at nagpapakita ng kaunti pang higit o kulang sa mga gilid |
| {{ui:Mode}} | {{ui:Mabilis}}, o {{ui:High quality (path traced)}} (nasa ibaba) kasama ang {{ui:Limitasyon sa oras}} nito |
| {{ui:Kalidad}} | Ilang pass (o, sa high quality, sample) ang ina-average: {{ui:Draft}} 16, {{ui:Maganda}} 64, {{ui:Pinakamaganda}} 256. Mas maraming pass ang nagbibigay ng mas makinis na anino at gilid, at mas matagal |
| {{ui:Langit}} | {{ui:Maaliwalas na langit}}, {{ui:Maulap}} (malambot na liwanag, mahinang anino), {{ui:Dapithapon}} (mababa, mainit na liwanag) o {{ui:Puting studio}} (simpleng puting background) |
| {{ui:Araw}} | Nagmumula ang araw sa petsa, oras at lugar sa {{ui:Istilo}} › araw. Lagyan ng tsek ang {{ui:Gamitin ang ibang petsa at oras para sa larawang ito}} para subukan ang ibang oras nang hindi binabago ang istilo ng model |
| {{ui:Liwanag}} | Mas maliwanag o mas madilim, sa mga hakbang (stop) |
| {{ui:Lupa sa ilalim ng model}} | Lupang sumasalo ng mga anino at nawawala sa abot-tanaw. I-off ito para sa model na lumulutang |
| {{ui:Iguhit ang mga gilid}} | Gumuguhit ng manipis na gilid ng model sa ibabaw ng larawan, para sa itsurang iginuhit |

Kapag nasa ibaba ng abot-tanaw ang araw sa napiling oras, gabi na: nagiging madilim ang langit at binibigyan ng liwanag ng model ang [mga lampara](topic:lights). Sinasabi ito ng dialog.

Naka-save ang mga setting sa `.modelcraft` file, kaya ang susunod na larawan ng parehong model ay magsisimula kung saan ka tumigil.

## Gawing mukhang salamin o metal ang mga kulay

Sa ilalim ng {{ui:Mga materyal}}, bawat kulay sa screen ay may itsura: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Pinakintab na metal}}, {{ui:Salamin}} o {{ui:Frosted glass}}. Ang {{ui:Mga face na walang pintura}} ay ang mga face na walang sariling kulay.

Para gawing salamin ang mga bintana, [pinturahan](topic:paint) ng isang kulay ang mga pane ng bintana, pagkatapos itakda ang kulay na iyon sa {{ui:Salamin}}. Hinahayaan ng salamin na makita ang langit at kung ano ang nasa likod nito, may kulay ayon sa kulay nito, at sumasalamin ito sa langit.

:::note
Sa {{ui:Mabilis}} na mode, sumasalamin ang salamin at metal sa langit, hindi sa iba pang bahagi ng model, at hindi yumuyuko ang liwanag sa salamin. Ginagawa ng {{ui:High quality (path traced)}} na mode sa ibaba ang dalawa.
:::

## High quality

Piliin ang {{ui:Mode}} › {{ui:High quality (path traced)}} para sa larawang sumusunod sa liwanag ayon sa nakikita ng camera:

- tumatalbog ang liwanag sa pagitan ng mga surface, kaya ang kuwartong naiilawan sa bintana o ng lampara ay naiilawan sa lahat ng panig, at dumadaloy ang mga kulay sa mga katabi nito;
- tunay na salamin ang salamin: yumuyuko ang liwanag dito at sumasalamin ito sa model;
- ang metal at pinakintab na surface ay sumasalamin sa iba pang bahagi ng model;
- ang light panel ay nagbibigay-liwanag bilang panel, na may malalambot na anino.

Mas mabagal ito nang malaki kaysa sa {{ui:Mabilis}}: sinusundan ng bawat pass ang liwanag ng bawat pixel muli. Magaspang ang larawan sa simula at lumilinaw habang nadadagdagan ang mga sample, kaya magsimula nang maliit ({{ui:Laki ng view}}, {{ui:Draft}}) at pumili ng {{ui:Limitasyon sa oras}}: kapag naubos ito, pinananatili ang larawang nagawa na. Pinananatili rin ito ng {{ui:Itigil}}. Naghihintay ang unang pass habang inihahanda ng browser ang path tracer.

Kung may WebGPU ang browser, sariling path tracer ng CadCraft ang gamit at tumatakbo ito sa graphics card; sinasabi ng linya sa ilalim ng larawan ang {{ui:Path traced sa graphics card (WebGPU)}}. Pagkatapos ng {{ui:Itigil}} o ng limitasyon sa oras, ipinagpapatuloy ng {{ui:Ituloy}} ang parehong larawan hanggang makuha ang lahat ng sample nito; ang pagbabago ng setting o muling pagpindot ng {{ui:I-render}} ay nagsisimula ulit. Kung walang WebGPU, gumagamit ang larawan ng WebGL path tracer (sinasabi ito ng linya) at hindi inaalok ang {{ui:Ituloy}}.

:::linux
Ang Firefox at karamihang setup ng Chrome sa Linux ay wala pang WebGPU, kaya gumagamit ng WebGL ang high quality doon.
:::

Sa mode na ito, hindi iginuguhit ang mga gilid, ipinapakita ng library texture ang kulay at pagkamagaspang nito pero hindi ang mga umbok nito (ang [materyal na gawa sa nodes](topic:shading#in-high-quality-pictures) ay nagpapakita ng normal at mga umbok nito), at ginagawa ang section cut sa model bago magsimula ang larawan.

Naka-on bilang default ang {{ui:Denoise (inaalis ang grain na naiwan pagkatapos ng samples)}}: kapag tapos o huminto na ang larawan, nililinis ang natitirang grain ng isang neural network na ginawa para dito (ang nailathalang network ng Intel Open Image Denoise, na tumatakbo sa sarili mong computer: sa graphics card, o kung wala, sa processor). Malinis na lumalabas ang larawang may kakaunting sample; ipinapakita ito ng {{ui:Ipakita}} › {{ui:Ang larawan bago i-denoise}} gaya ng na-render.

## I-render sa view

Pinapatakbo ng {{ui:I-render}} workspace ang path tracer sa mismong view: mag-orbit, mag-edit ng model o magpalit ng ilaw, at magsisimula ito muli agad. {{ui:Region}}: i-drag ang isang rectangle at iyon lang ang nire-render; bumabalik ito sa {{ui:Buong view}}. {{ui:Focus}}: i-click ang dapat maging matalas, at doon nakatutok ang depth of field. Ang {{ui:Detail}} ang nagtatakda kung ilang pixel ng view ang nire-render nito (mas kaunti, mas mabilis). {{ui:I-pause}} ay huminto at nagpapatuloy. Kailangan nito ng WebGPU: kung wala ito, sinasabi ito ng workspace, at gumagana pa rin ang {{ui:I-export}} › {{ui:I-render ang larawan…}}.

## Mga langit at light profile sa graphics card

Sa WebGPU, may dalawa pang langit ang high quality:

- Kinukuwenta ng {{ui:Physical sky}} ang liwanag ng araw mula sa taas ng araw: malalim na asul sa itaas, maputlang banda sa abot-tanaw, at araw na nagiging mas mainit at mas mahina habang bumababa. Ang {{ui:Haze}} ay mula sa napakalinaw na araw (2) hanggang sa maambong araw (10).
- Binibigyan ng {{ui:Larawan ng langit (HDRI)}} ng liwanag ang model gamit ang panorama na larawan ng tunay na lugar. Ang {{ui:Pumili ng larawan…}} ay tumatanggap ng equirectangular na `.hdr` o `.exr` file; ang {{ui:Paikutin}} ay pumipihit nito sa paligid ng model, at ang {{ui:Liwanag ng larawan}} ay nagpapaliwanag o nagpapadilim dito. May sariling araw ang larawan, kaya hindi idinadagdag ang araw ng model. Nananatili lang ito habang bukas ang page: pagkatapos magbukas muli, piliin ulit.

Ang bawat lampara sa listahan ng {{ui:Mga lampara}} ay maaaring kumuha ng light profile ng gumawa: binabasa ng {{ui:IES profile…}} ang IES (LM-63) file, at saka ikinakalat ng lampara ang liwanag nito gaya ng ginagawa ng fitting na iyon (isang makitid na downlight, isang wall washer). Ginagamit ito ng bawat lampara na may ganoong pangalan, at pinananatili ng lampara ang sarili nitong liwanag. I-click ang pangalan ng profile para ihinto ang paggamit nito.

Nakatutulong ang mga bintanang malinaw na salamin para makapasok ang liwanag ng langit sa kuwarto, kaya mas mabilis lumilinaw ang mga panloob na larawan sa ilalim ng langit.

Ipinapakita ng {{ui:Mabilis}} na mode at ng WebGL path tracer ang {{ui:Physical sky}} at {{ui:Larawan ng langit (HDRI)}} bilang maaliwalas na langit, at binabalewala ang mga light profile.

## Ang camera

Itinatakda ng {{ui:Camera}} ang larawan gaya ng isang litrato:

- {{ui:Exposure}}: panatilihin ang {{ui:Slider ng liwanag}}, o piliin ang {{ui:Mga setting ng camera}} at itakda ang {{ui:Aperture (f-stop)}}, {{ui:Bilis ng shutter}} at {{ui:ISO}} gaya sa camera; ang EV sa tabi nila ang karaniwang exposure value. Ang f/16 sa 1/100 s at ISO 100 ay tugma sa maaraw na araw; ang mas madilim na eksena ay nangangailangan ng mas malawak na aperture, mas mabagal na shutter o mas mataas na ISO. Gumagana ito sa bawat mode.
- Pinalalabo ng {{ui:Depth of field}} ang mas malapit o mas malayo sa {{ui:Distansya ng focus (m)}} gaya ng gagawin ng lens na may ganoong f-stop (iwanang walang laman para mag-focus sa nasa gitna ng view); binibigyan ng {{ui:Hugis ng aperture}} ang mga highlight na wala sa focus ng bilog o may talim na hugis.
- Pinapantay ng {{ui:Two-point perspective (nananatiling patayo ang vertical na linya)}} ang camera at inililipat ang larawan, gaya ng ginagawa ng architectural tilt-shift lens, kaya hindi nakahilig ang mga pader kapag tumingala o tumingin pababa sa gusali.
- Itinatakda ng {{ui:White balance}} kung aling kulay ng liwanag ang lalabas na puti: mas mababa (halimbawa 3000 K) para sa mainit na liwanag ng lampara, mas mataas para sa lilim at maulap na araw.
- {{ui:Projection}}: gumagawa ang {{ui:360° panorama}} ng 2:1 na larawan ng lahat ng nasa paligid ng camera para sa panorama viewer; pinagsasalansan ng {{ui:360° stereo panorama}} ang panorama para sa kaliwang mata at kanang mata para sa headset; gumagawa ang {{ui:Cube map (6 na face)}} ng anim na parisukat na view sa 3 × 2 na grid. Ang lapad ay mula sa {{ui:Sukat}}.

Kailangan ng Projection, depth of field, two-point perspective at white balance ang path tracer sa graphics card (WebGPU), kaya lumalabas lang ang mga ito sa {{ui:High quality}}.

## Tapusin ang larawan

Ang {{ui:Larawan}} ay nagbibigay ng grade sa high-quality na larawan gaya ng litrato, at agad na binabago ng bawat kontrol ang tapos na larawan nang walang muling pag-render:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (ang larawan gaya ng dati), {{ui:AgX}} (mas malambot, nagpapanatili ng kulay sa napakaliwanag na ilaw), {{ui:Filmic}} (banayad na film curve) o {{ui:Standard}} (payak; ang napakaliwanag na ilaw ay napuputol sa puti).
- {{ui:Contrast}} at {{ui:Pag-compress ng highlight}} (ibinabalik ang detalye sa napakaliwanag na bahagi).
- {{ui:Bloom}} (malambot na liwanag sa paligid ng maliwanag na ilaw), {{ui:Glare}} kasama ang {{ui:Glare streaks}} nito (mga sinag na parang bituin mula sa pinakamaliwanag na punto) at {{ui:Vignette}} (mas madilim na mga sulok).
- Inilalapat ng {{ui:Color table (.cube)…}} ang color grade mula sa `.cube` file, kasama ang {{ui:Lakas ng color table}} nito; gaya ng larawan ng langit, nananatili lang ito habang bukas ang page.

## I-save ang larawan

Pinipili ng {{ui:I-save bilang}} sa tabi ng {{ui:I-save}} ang file: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} para sa pagbabahagi (JPEG at WebP lang kung kaya itong isulat ng browser), at pagkatapos ng high-quality na render sa graphics card, pati rin ang:

- {{ui:PNG, 16 bits}}: ang naka-grade na larawan na may mas pinong hakbang sa pagitan ng mga shade, para sa pag-print o karagdagang pag-edit.
- {{ui:EXR, bawat layer (32-bit float)}}: ang larawan gaya ng na-render (linear na liwanag, walang grade) na may bawat render element at light group bilang sariling layer, para sa compositing programs.
- {{ui:Render file (.ccrender, para i-grade muli sa susunod)}}: lahat ng kailangan ng dialog para muling paghaluin at i-grade ang larawan. Ibinabalik ito ng {{ui:Magbukas ng render file…}}, kasama ang halo at grade nito, nang walang pag-render.

## Paghaluin ang mga ilaw pagkatapos ng render

I-on ang {{ui:Paghahalo ng ilaw (baguhin ang kulay at liwanag ng bawat ilaw pagkatapos ng render)}} bago pindutin ang {{ui:I-render}}. Kapag tapos na (o huminto) ang larawan, inilalista ng {{ui:Ihalo ang larawan}} ang mga ilaw nito sa mga grupo: ang langit, ang araw, at ang mga lampara ayon sa pangalan (bawat lampara na may parehong pangalan ay isang grupo). I-off ang isang grupo, bigyan ito ng kulay, o gawing mas maliwanag o mas madilim, at agad na nagbabago ang larawan nang walang muling pag-render. Itinatago ng {{ui:I-save ang halo}} ang halo sa ilalim ng pangalan para piliin muli sa susunod; ibinabalik ng {{ui:Gaya ng na-render}} ang larawan gaya ng ginawa ito. Ise-save ng {{ui:I-save}} ang pinaghalong larawan.

Itinatago rin ng {{ui:Mga render element (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} ang mga bahagi ng larawan. Inililipat ng {{ui:Ipakita}} ang view sa isa sa mga ito: ang kulay ng surface (albedo), ang normals, ang depth, ang diffuse, specular at transmitted na liwanag (bawat direct at indirect), kung ano ang kumikinang at ang langit, at isang kulay bawat object o bawat materyal para sa paggawa ng mask.

Pareho silang nagtatago ng dagdag na layer sa graphics card. Sa malalaking sukat, maaaring kulang ang espasyo ng graphics card; sinasabi ito ng dialog, at gumagana ang mas maliit na sukat.

## Ang render queue

Pagkatapos ng high-quality na setup, ang {{ui:Idagdag ang larawang ito sa pila}} sa ilalim ng {{ui:Pila ng render}} ay nag-iingat ng larawan gaya ng pagkakatakda nito ngayon; ang {{ui:Idagdag ang animation na ito sa pila}} ng video dialog ay gumagawa ng pareho para sa buong animation, path traced frame by frame. Nire-render ng {{ui:Simulan ang pila}} ang mga ito nang sunod-sunod sa computer na ito, at dina-download ng {{ui:I-save}} sa tabi ng bawat tapos na ang file. Ang pagsasara ng page ay nag-iingat ng pila: buksan ang parehong model at magpapatuloy ito kung saan ito huminto. Kailangan ng pila ang WebGPU.

## Fog, usok, ingay at caustics

Nasa ilalim ng {{ui:Fog, usok at ingay}} ang mga ito at gumagana sa {{ui:High quality}} sa graphics card; hindi isinasama ng ibang engine ang mga ito.

- Pinupuno ng {{ui:Fog at haze}} ang hangin hanggang sa isang taas ng ambon na pinaliliwanagan ng araw, ng langit at ng mga lampara. Itinatakda ng {{ui:Hanggang saan ang nakikita, sa metro}} ang kapal nito (mga 100 m ay magaan na haze, 20 m ay makapal na fog), ang {{ui:Taas ng fog mula sa lupa, sa metro}} ang kung saan ito nagtatapos, at ang {{ui:Light shafts}} ang kung gaano kalakas kumikinang ang ambon patungo sa liwanag. Lumalabas ang sikat ng araw sa itaas ng fog, kaya kapag sumisilip ang araw sa bintana o sa pagitan ng mga gusali, nakikita mo ito bilang mga sinag ng liwanag.
- Nagdadagdag ang {{ui:Usok o ulap}} ng isang volume ng usok o ulap na pinaliliwanagan gaya ng fog. Ang {{ui:Uri}} ay {{ui:Ulap}}, {{ui:Haligi ng usok}} o {{ui:Mula sa volume file (.ccvol)}}, ang sariling grid format ng CadCraft. Ang {{ui:Detail}} at {{ui:Pagkakaiba-iba}} ang nagbabago sa ginawang ulap o haligi; ang {{ui:Sukat ng pinakamahabang gilid nito, sa metro (0 = sukat ng model)}}, {{ui:Ilipat X (m)}}, {{ui:Ilipat Y (m)}}, {{ui:Ilipat Z (m)}} at {{ui:Paikutin}} ang naglalagay nito (nagsisimula ito sa gitna ng model); ang {{ui:Kapal}} ay nagpapasiksik dito, ang {{ui:Forward glow}} ay nagpapaliwanag dito patungo sa ilaw, at ang {{ui:Kulay}} ay nagbibigay ng kulay dito. Nananatili lang ang volume file habang bukas ang page, gaya ng larawan ng langit.
- Ang {{ui:Huminto nang maaga kung malinis na ang larawan (adaptive sampling)}} ay hindi na nagbibigay ng sample sa mga pixel na nakatapos na, kaya mas mabilis matapos ang natitirang bahagi ng larawan. Ang {{ui:Tanggap na noise}} ay ang dami ng grain na natitira kapag huminto ang isang pixel. Sinasabi ng linya sa ilalim ng larawan kung ilang sample ang natanggap ng isang pixel sa average.
- Sinusubaybayan ng {{ui:Caustics (liwanag na dumaan sa salamin o tumalbog sa mirror)}} ang liwanag mula sa mga lampara at sa araw, kaya malinis lumalabas ang maliwanag na bahagi sa ilalim ng glass ball, o ang liwanag ng mirror sa pader, sa halip na magaspang. Naka-off ito habang naka-on ang fog, usok, {{ui:Paghahalo ng ilaw pagkatapos ng render}} o mga render element, at para ito sa mga larawan, hindi para sa 360° na larawan, mga animation, o sa I-render workspace.

## Gaano katagal

Ginagawa ang larawan sa sarili mong computer, ng graphics card nito; walang ina-upload. Nakadepende sa card na iyon kung gaano katagal. Tumataas ang oras kasabay ng mga pass at pixel: ang {{ui:Pinakamaganda}} ay may 16 na beses ang pass ng {{ui:Draft}}, at ang 4K na larawan ay may mga apat na beses ang pixel ng Full HD. Nagre-render pa rin ang computer na walang graphics card, mas mabagal nga lang.

:::note
Kung sinasabi ng dialog na hindi makapag-render ng larawan ang browser, walang WebGL 2 ang browser. I-update ito, o i-on ang hardware acceleration sa mga setting nito.
:::
