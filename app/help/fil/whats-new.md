---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Pagpili ng render Engine na may mga file para sa ibang program, freeform NURBS surface na may sinusukat na continuity, eksenang inilalarawan mo sa iyong assistant, materyal na gawa sa isang larawan, sketch photo sa lupa, mga kuwartong may muwebles, hilig na hiwa para sa 3D printing, at print check sa panel ng Problema.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, render engine, engine, buksan sa, usd, gltf, unreal, add-on engine, nurbs, surface, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, ilarawan ang eksena, eksena, panahon, oras ng araw, season, assistant, materyal mula sa larawan, larawan, sketch photo, lagyan ng muwebles, lagyan ng muwebles ang kuwarto, hilig, hilig na hiwa, hati, print check, problema, property grid, lampara, mga wika, input device, mga hanay ng toolbar, dwg, live
from: e4989b17
---

Ito ang nagbago sa ModelCraft 0.8 (2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Maaari nang ipadala ng dialog na {{ui:Render a picture…}} ang eksena sa ibang program, ang panel na {{ui:Surfaces}} ay gumagawa ng makinis na freeform surface, at ang assistant na ikinonekta mo ay makapagtatakda ng buong eksena mula sa isang pangungusap.

## Bago

### Pag-render

- **Pagpili ng Engine.** Ang {{ui:Render a picture…}} ay may listahan ng **Engine** sa itaas ng Mode. Ang sarili naming dalawang engine, ang Fast at ang Path tracer, ang default at gumagana kahit saan. Ang iba pang entry ay nagse-save ng eksena bilang package (ang model bilang USD file, kasama ang settings file na may eksaktong halaga ng materyal, ang mga lampara na nakabukas, ang araw, ang langit, ang exposure at ang camera) para dalhin sa ibang program. Ang larawang iginuhit ng ibang program ay nagsasabi kung aling program at bersyon ang gumawa nito. Tingnan ang [Piliin kung aling program ang gumuguhit ng larawan](topic:render-engines).
- **Buksan sa ibang program.** Maaaring i-save ng Engine list ang eksena bilang USD file, glTF file (`.glb`) o Unreal project folder (`.zip`), sa browser at sa CadCraft Studio. Sa Studio, maaari rin nitong simulan ang usdview o ang sariling program ng computer para sa file. Tingnan ang [Buksan ang eksena sa ibang program](topic:render-open-in).
- **Ipadala sa game engine mula sa Studio.** Isinusulat ng Studio ang eksena sa isang Unreal Engine project at pinananatili itong magkasabay sa bawat pagpapadala, isang direksyon lamang. Nasa isang layer na hindi kailanman isinusulat ng CadCraft ang sarili mong mga edit. Tingnan ang [Ipadala ang eksena sa game engine](topic:render-unreal).
- **Mga engine mula sa add-on.** Maaaring magdagdag ang isang add-on ng engine sa listahan. Ang isinulat sa JavaScript ay gumuguhit sa browser at sa Studio; ang nagpapatakbo ng program ay nangangailangan ng iyong pahintulot sa Studio. Tingnan ang [Gumuhit ng larawan gamit ang ibang program](topic:render-other-program) at [Magdagdag ng render engine gamit ang add-on](topic:render-engine-addons).
- **Ilarawan ang eksena.** Sabihin sa iyong nakakabit na assistant ang "takipsilim, mahinang ulan, mga punong taglagas, mga tao sa plaza" at ise-set up ito ng ModelCraft sa isang hakbang: gumagalaw ang araw sa petsa at oras para sumunod ang mga anino, nagbabago ang langit, lumilitaw ang mga basang surface, at inilalagay ang mga puno at tao bilang totoong object sa mga tag na maaari mong itago, ilipat o burahin. Gumagana rin nang mag-isa ang oras ng araw, petsa o season, at panahon (malinaw, maulap, hamog, mahinang ulan, ulan, bagyo), at binabago ng susunod na request ang parehong eksena. Lumalabas ang hamog sa high-quality na larawan sa graphics card; ipinapakita ng ibang engine ang langit, ang ilaw at ang mga basang surface. Hindi iginuguhit bilang bumabagsak na guhit ang ulan.

### Materyal

- **Materyal mula sa isang larawan.** Bigyan ang ModelCraft ng larawan ng isang surface (pader, sahig, bato) at gagawa ito ng tiling material: pinapantay ang liwanag sa buong larawan, ginagawang magdugtong ang mga gilid, at kinukuwenta mula sa larawan ang color map, roughness map at normal map. Simpleng image processing ito sa sarili mong larawan, walang trained model. Ang roughness ay pagtatantiya. Ang simple, parisukat at tuwid na kuha ang nagbibigay ng pinakamahusay na tile; ang malakas na pattern gaya ng ladrilyo ay maaaring magpakita ng malabong multo kung saan hinahalo ang dugtungan.

### Surface

- **Freeform surfaces.** Ang panel na {{ui:Surfaces}} ay gumagawa ng NURBS curve at untrimmed surface: curve na dumadaan sa mga punto, loft, ruled, extrude, revolve, sweep sa isa o dalawang rail, surface mula sa curve network, patch mula sa apat na gilid, match at blend. Bawat magkadugtong na gilid ay sinusukat bilang G0, G1 o G2 (puwang, anggulo, pagbabago ng curvature) sa eksaktong surface, at ang gilid na mas masama sa hiniling mo ay lumilitaw sa panel ng Problema na may ayos na **Match**. Ang zebra stripes at kulay ng curvature ay iginuguhit mula sa eksaktong surface. Nakakapag-export at nakakapag-import ng STEP at IGES file. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

### Site at kuwarto

- **Sketch photo papunta sa lupa.** {{ui:File}} › {{ui:Import a sketch photo…}} ay ginagawang mga gilid sa lupa ang kuha sa telepono ng hand sketch, sa sukat na sasabihin mo: isang grupo, may tag para sa bawat kulay ng panulat. Hinahanap at itinutuwid ang papel sa iyong computer, at walang ipinapadala kahit saan. Tingnan ang [Model sa site plan](topic:site-plan).
- **Lagyan ng muwebles ang kuwarto.** Pumili ng sahig at gamitin ang {{ui:Organize}} › {{ui:Furnish a room…}}. Ang muwebles ng silid-tulugan, sala, kainan, kusina, banyo o opisina ay inilalagay ayon sa mga panuntunan, nakasandal sa mga pader at malayo sa mga pinto at bintana, sa isang grupo na maaari mong alisin sa isang hakbang. Ito ay default na layout na susuriin mo, hindi disenyo. Tingnan ang [Starter library](topic:starter).

### 3D printing

- **Mga hilig na hiwa.** Ang Split for printing ay maaaring ipahilig ang mga hiwa nito hanggang 60 degrees, na nagbibigay ng mas malaking lugar ng pagdidikit sa mga piyesa. Nakatayo nang patayo sa hiwa ang mga connector. Tingnan ang [Hatiin ang model para sa printing](topic:print-split).
- **Ang print check sa Problema.** Ang mga resulta ng 3D print check ay lumalabas sa panel ng Problema na may marker sa model, at inaayos ang mga ito ng Repair mula roon. Tingnan ang [Supports, kapal ng pader, hollowing at repair](topic:print-tools).

### Sa bawat app

- **Mga wika.** Ang help at mga app ay nasa 54 na wika. Sampu ang bago: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek. Ang mga wikang iba sa English ay machine draft hanggang mabasa ito ng isang katutubong nagsasalita, at maaaring nasa English pa rin ang ilang help topic.
- **Mga input device.** Maaaring kontrolin ng trackpad, pen, 3D mouse, game controller at MIDI control ang mga app, para sa lahat ng ito o para sa isa lamang.
- **Mga hanay ng toolbar.** {{ui:Settings}} › {{ui:General}} › Toolbar rows ay nagtatakda ng Wrap (gaya ng dati), 2 rows o 1 row. Ang bar na hindi kasya ay nag-i-scroll sa gilid sa halip na kumuha ng espasyo sa drawing. Nananatiling default ang Wrap.
- **Property grid.** Ang mga field ng lampara ng ModelCraft ay gumagamit ng shared grid: mga collapsible na kategorya, column ng label at value, at Compact density. Patuloy na gumagana ang typed arithmetic gaya ng `2*450`.
- **Problema.** Ang panel ng Problema (ang warning button sa app bar) ay shared ng lahat ng app. Sa ModelCraft, dito ang print check at mga babala sa surface continuity.
- **Live.** Ipinapakita ng Live TeamWork session kung sino ang nasaan. Tingnan ang [Mag-model nang sabay gamit ang Live TeamWork](topic:work-live).
- **Add-on.** Maaaring magdagdag ang mga add-on ng render engine, gaya ng nasa itaas.
- **Ikonekta ang iyong AI.** Pumasa ang tool contract at ang mga check ng walong app, na may 454 na tool sa kabuuan. Hindi pa ipinangangako ang one-click na koneksyon sa loob ng Studio, ang hosted connector para sa browser assistant, ang sarili mong key sa loob ng Studio at ang nai-publish na package. Walang sariling AI ang mga app. Tingnan ang [Gamitin ang ModelCraft kasama ang mga AI assistant](topic:use-with-ai-assistants).

## Naayos sa 0.8.1

- **Seksyon ng classes ng DWG.** Mali ang uri ng pagbasa sa seksyon ng classes ng DWG file, at maaari nitong masira ang file sa pag-import. Tama na itong nababasa ngayon, sa ModelCraft at sa iba pang app na bumabasa ng DWG.
- **Mga tablet sa portrait.** Ang sobrang taas ng grid ay napupunta sa canvas, at ang sheet layout ay nagsisimula sa 760 pixel ang lapad o mas kaunti. Kasama rin ng style sheet ng ModelCraft ang pagbabago.
- **Wika sa Studio.** Maaaring magpalit ng wika ang CadCraft Studio at ang mga packed edition habang tumatakbo; dati, English lamang ang mga ito. Hindi pa ito nasusubukan sa bawat platform: sabihan kami kung hindi nagbabago ang wika.

## Wala pa sa bersyong ito

- **Hindi code-signed.** Maaaring magpakita ang Windows ng SmartScreen: piliin ang {{ui:More info}}, pagkatapos ay {{ui:Run anyway}}. Sa Mac, i-right-click at piliin ang {{ui:Open}}. Naka-hold ang mga Store build, at hindi pa na-rebuild ang iPad at iPhone build para sa 0.8.1.
- Wala pa rito ang ibang program na gumuguhit ng larawan nang walang render-engine add-on, ang panorama o stereo camera, ang sky picture sa pamamagitan ng ibang program, at ang plug-in na nagbubukas ng Unreal stage. Naisusulat na ang mga file; hindi pa inilalabas ang plug-in at hindi pa ito napapatakbo sa Unreal.
- Freeform surfaces: hindi sinusukat o inaangkin ang G3 at class A, at darating pa ang trimming at solid.
- Hindi eksaktong kapareho ng atin ang mga larawan mula sa ibang program na pixel por pixel: tugma lamang ang camera, araw, lampara at exposure.
- Hindi pa nasusubukan sa bawat platform ang 0.8.1 na ayos sa pagpapalit ng wika sa Studio.

Ang lahat ng iba pa ay nasa [Not built yet](topic:not-built-yet). Para sa nakaraang release, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
