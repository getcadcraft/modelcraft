---
title: Ano ang bago sa 0.9 (dati)
summary: Print stage na may sarili naming slicer at pagpapadala sa USB, Klipper, OctoPrint at PrusaLink, resin slicing at file add-on, material flow, digital twin at factory floor add-on, NURBS fillet, thicken at scan fit, AR sa site, at sampung arc method.
keywords: ano ang bago sa 0.9, naunang release, ano ang bago, what's new, release notes, changelog, 0.9, print stage, 3d print, ipadala sa 3d printer, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resin printing, goo, sl1, ctb, anycubic, exposure test, material flow, digital twin, factory floor, plc, conveyor, nurbs, fillet, thicken, scan fit, ar, sa site, arc methods, mga unit, ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, render engine, engine, buksan sa, usd, gltf, unreal, add-on engine, nurbs, mga surface, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, sabihin ang eksena, eksena, panahon, oras ng araw, season, assistant, materyal mula sa larawan, larawan, sketch na larawan, furnish, furnish a room, slant, slanted cut, split, print check, mga problema, property grid, lamp, mga wika, input device, mga row ng toolbar, dwg, live
from: 2717d1b1
---

Ito ang mga pagbabago sa ModelCraft 0.9, kumpara sa 0.8.1. Naaabot na ngayon ng ModelCraft ang printer at ang plant floor: maaari kang maglagay ng mga bagay sa print bed at ipadala ang mga ito nang hindi nag-e-export, mag-slice para sa filament o resin, at mag-layout ng linya ng paghawak ng materyal. Ito ang CadCraft Studio 0.9 at ang walong app nito; karamihan sa mga bagong feature sa ibaba ay mga add-on.

## Bago

### 3D printing

- **Print stage.** I-click ang {{ui:Yugto ng print}} sa toolbar. Magdagdag ng mga item ng Library sa bed ng printer, ayusin ang mga ito, tingnan ang mga na-slice na layer, at pindutin ang {{ui:Ipadala sa 3D printer}}, nang walang STL na kailangang i-export. Bahagi ito ng 3D Print add-on, na naka-on bilang default at maaaring alisin tulad ng anumang add-on. Tingnan ang [Ilagay ang mga bagay sa print bed at ipadala sa printer](topic:print-stage).
- **Sarili naming filament slicer.** Ang {{ui:CadCraft basic (kasama, pinakamabilis)}} ang slicer sa listahang **Slicer** ng card: wall, skin, infill, support at skirt, sa isang worker para magamit pa rin ang page. Ipinapakita ng {{ui:I-preview ang mga layer}} na may slider na **Layer** ang mga layer bago ka magpadala. Ang mga printer profile gaya ng estilo ng Ender-3 at Prusa MK4 ay may sarili nilang start G-code.
- **Pagpapadala.** Sa USB (Chrome o Edge sa computer, habang nakabukas ang page), o sa Klipper (Moonraker), OctoPrint o PrusaLink sa iyong network. Walang kumokonekta o nagpapadala nang walang click, at nagtatanong muna ang pagpapadala.
- **Iba pang slicer.** Ang Kiri:Moto, PrusaSlicer at OrcaSlicer ay sarili nilang add-on, naka-off bilang default; idagdag ang mga ito mula sa card o mula sa {{ui:Mga setting}} › {{ui:Mga Add-on}}. Ginagamit ng PrusaSlicer at OrcaSlicer ang sarili mong naka-install na kopya mula sa CadCraft Studio. Ang add-on ng mga printer ng Bambu Lab ay nag-i-slice gamit ang iyong OrcaSlicer at ang mga P2S preset nito, at nangangailangan ng Studio sa computer.
- **Resin printing.** Ang mga resin add-on (naka-off bilang default) ay gumagawa ng mga layer picture para sa screen ng iyong printer, na may hollowing at vent hole, raft at support, layer preview, at oras, resin at gastos. Ang mga file-format add-on ay sumusulat ng Elegoo GOO, SL1, Chitubox (CBDDLP at CTB 2 hanggang 5) at Anycubic (PWMX at PWS). Ang resin exposure test ay gumagawa ng hagdan ng limang exposure. Tingnan ang [I-slice para sa resin printer](topic:resin-printing).
- **Hindi nagbago.** {{ui:Export}} › {{ui:Suriin para sa 3D printing (STL o 3MF)…}}, ang mga print tool at Hatiin para sa printing ay gumagana gaya ng sa 0.8. Tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d).

### Material flow, Digital twin at Factory floor

Ang tatlong ito ay mga add-on, naka-off hanggang i-on mo sa {{ui:Mga setting}} › {{ui:Mga Add-on}}, at may sarili nitong tulong kapag naka-on na.

- **Material flow.** Isang panel na pinangalanang Material flow ang nag-aayos ng conveyor, station, buffer at AGV path sa 3D view, nagpapatakbo ng seeded simulation, nagpe-playback nito, at nagpapakita ng throughput, lead time at queue, na may resultang nakasave bilang CSV. Maaaring manggaling ang mga order sa CSV file. Maaaring suriin at i-export ang mga robot cell. May soft mode at real mode ang PLC link sa Modbus TCP, na gumagana lamang sa CadCraft Studio.
- **Digital twin.** Binabasa ang layout ng Material flow at nagpapatakbo ng soft PLC dito, na may mga fault na maaari mong pilitin, stock test, paghahambing ng layout at bill of materials.
- **Factory floor.** Ginagawang machine at cell ang mga station, binabasa ang mga ito nang live o mula sa simulator, at nagtatago ng job queue at simpleng OEE. Pagbasa lamang ito: hindi kayang magsulat ng build na ito sa machine o PLC.

### Mga surface, model at drawing

- **Fillet, thickening at boolean sa NURBS.** Ang panel na {{ui:Mga surface}} ay may {{ui:Fillet sa pagitan ng mga face}}, {{ui:Fillet sa ilang edge}}, {{ui:I-thicken na maging solid}} at Union, Subtract at Intersect, bawat isa ay may sinukat na deviation. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Ikabit ang mga surface sa scan.** Piliin ang na-scan na mesh at gamitin ang {{ui:Ikabit ang surfaces sa scan}} sa grupong **Scan**, saka {{ui:I-stitch ang surfaces bilang solid}}. Unang fit lamang ito, hindi buong reverse-engineering package.
- **Live na link mula sa .3dm modeller.** Isang direksyon lamang, mula sa Rhino 8 o Grasshopper, at kailangan nito ang CadCraft Studio sa parehong computer. Tingnan ang [Panatilihing live ang .3dm model](topic:live-3dm-link).
- **Tingnan ang model sa site.** {{ui:View sa site (AR, telepono)}} sa menu na {{ui:Views}} ay gumagana sa Android phone na may Chrome. Tingnan ang [Tingnan ang model sa site gamit ang Android phone (AR)](topic:ar-on-site).
- **Mga paraan ng arko.** Ang drop-down na {{ui:Mga paraan ng Arko}} ay nag-aalok ng sampung paraan para gumuhit ng arko, kasama ang {{ui:3-Point}} at {{ui:Start, Center, End}}.
- **Higit pang unit.** Kinikilala ang mga timbang (kg, lb, t, ton) at temperatura (degrees C, F, K at R) kung saan ka nagta-type ng mga halagang may unit.

## Sa bawat app

- **Tooltips.** Ang hover text sa mga button at putol na label ay Bootstrap tooltip.
- **Closable start tip.** Ang tip card sa walang laman na drawing area ay may maliit na close x. Nananatili itong sarado, at maaaring ipakita muli ng command palette.
- **Scrolling tab strips.** Ang tab strip ng panel na hindi kasya ay nag-i-scroll sa halip na maputol.
- **Mga pamagat ng tab.** Kapag may bukas na dokumento, nagsisimula ang pamagat ng browser tab sa pangalan ng dokumento, saka ModelCraft at CadCraft. Nauuna ang tuldok habang hindi pa na-save.
- **Layout.** {{ui:Mga setting}} › {{ui:Pangkalahatan}} › Layout ang naglalaman ng mga layout sa drop-down, may pagpipiliang gamitin ang layout para sa app na ito lamang at button para i-reset ang layout.
- **Mga wika.** Ang listahan ng wika sa Mga setting ay sumusunod sa mga file ng wika na nasa build. Ang mga wikang hindi Ingles ay machine draft.
- **Live at Library.** Ipinapakita ng Live TeamWork ang live na cursor at pangalan, at ang mga Library collection ay nagbibigay sa bawat app ng default na collection.

## Naayos

- Nagiging {{ui:I-pause}} ang {{ui:Play}} habang tumatakbo ang animation, at {{key:Space}} ang nagpe-play at nagpa-pause habang bukas ang timeline.
- Bumabalik ang still render sa WebGL kapag hindi masimulan ng graphics card ang path tracer. Maaaring ipakita pa rin ng live render view ang error; hindi ito nasuri sa Windows machine na may ganoong driver.
- Muling kumokonekta ang Material flow real mode pagkatapos magtapos ang link sa mga sagot na PLC exception.

## Tapat na mga limitasyon

- Walang na-print sa totoong printer: hindi filament, hindi resin, hindi sa pamamagitan ng Bambu Connect. Nabasa lamang ng sarili nating reader ng CadCraft ang mga resin file.
- Sinubukan ang digital twin at Factory floor laban sa simulator at mga kilalang sagot lamang, na walang totoong PLC, linya o protocol. Mga pantulong sa pagsusuri ang mga ito, hindi safety validation. Ang physics ay sumasaklaw lamang sa mga box, hanggang walong load.
- Hindi pa kailanman nagamit ang Rhino at Grasshopper link sa totoong mga programa.
- Ang mga wikang hindi Ingles ay machine draft.

## Mas naunang bersyon: 0.8 at 0.8.1

Ito ang mga pagbabago sa ModelCraft 0.8 (2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Maaari nang ipadala ng {{ui:I-render ang larawan…}} na dialog ang eksena sa ibang programa, gumagawa ang panel ng Mga surface ng makinis na freeform surface, at nagtatakda ang assistant na nakakonekta mo ng buong eksena mula sa isang pangungusap.

### Bago

**Rendering**

- **Pagpipilian ng Engine.** Ang {{ui:I-render ang larawan…}} ay may listahang **Engine** sa itaas ng Mode. Ang sarili nating dalawang engine, ang Fast at ang Path tracer, ang default at gumagana kahit saan. Ang iba pang entry ay nagse-save ng eksena bilang package (ang model bilang USD file, kasama ang settings file na may eksaktong halaga ng materyal, ang mga lamp na naka-on, ang araw, ang langit, ang exposure at ang camera) para dalhin sa ibang programa. Sinasabi ng larawang iginuhit ng ibang programa kung aling programa at bersyon ang gumawa nito. Tingnan ang [Pumili kung aling programa ang gagawa ng larawan](topic:render-engines).
- **Buksan sa ibang programa.** Maaaring i-save ng listahang Engine ang eksena bilang USD file, glTF file (`.glb`) o Unreal project folder (`.zip`), sa browser at sa CadCraft Studio. Sa Studio, maaari rin nitong simulan ang usdview o ang sariling programa ng computer para sa file. Tingnan ang [Buksan ang eksena sa ibang programa](topic:render-open-in).
- **Ipadala sa game engine mula sa Studio.** Sinusulat ng Studio ang eksena sa Unreal Engine project at pinananatiling nakasabay ito sa bawat pagpapadala, isang direksyon lamang. Nasa layer na hindi kailanman isinusulat ng CadCraft ang sarili mong mga edit. Tingnan ang [Ipadala ang eksena sa game engine](topic:render-unreal).
- **Mga engine mula sa add-on.** Maaaring magdagdag ng engine sa listahan ang isang add-on. Ang nakasulat sa JavaScript ay gumuguhit sa browser at sa Studio; ang nagpapatakbo ng programa ay nangangailangan ng iyong pahintulot sa Studio. Tingnan ang [Iguhit ang larawan gamit ang ibang programa](topic:render-other-program) at [Magdagdag ng render engine gamit ang add-on](topic:render-engine-addons).
- **Sabihin ang eksena.** Sabihin sa iyong nakakonektang assistant ang "dapithapon, magaan na ulan, mga punong taglagas, mga tao sa plaza" at isasaayos ito ng ModelCraft sa isang hakbang: gagalaw ang araw ayon sa petsa at oras para sumunod ang mga anino, magbabago ang langit, lilitaw ang mga basang surface, at ilalagay ang mga puno at tao bilang totoong object sa mga tag na maaari mong itago, ilipat o burahin. Gumagana rin nang mag-isa ang oras ng araw, petsa o season, at panahon (clear, overcast, fog, light rain, rain, storm), at ang susunod na kahilingan ay bumabago sa parehong eksena. Nakikita ang fog sa mataas na kalidad na larawan sa graphics card; ipinapakita ng ibang engine ang langit, ilaw at mga basang surface. Hindi iginuguhit ang ulan bilang mga bumabagsak na guhit.

**Mga materyal**

- **Materyal mula sa isang larawan.** Bigyan ang ModelCraft ng larawan ng isang surface (pader, sahig, bato) at gagawa ito ng tiling material: pinapantay ang ilaw sa buong larawan, ginagawang nagdudugtong ang mga gilid, at kinukuwenta mula sa larawan ang color map, roughness map at normal map. Simpleng image processing ito sa sarili mong larawan, walang trained model. Tantiya lamang ang roughness. Ang payak, parisukat, tuwid na larawan ang nagbibigay ng pinakamagandang tile; ang malakas na pattern gaya ng ladrilyo ay maaaring magpakita ng malabong multo kung saan hinahalo ang dugtungan.

**Mga surface**

- **Freeform surfaces.** Ang panel na {{ui:Mga surface}} ay gumagawa ng NURBS curve at untrimmed surface: curve sa pamamagitan ng mga punto, loft, ruled, extrude, revolve, sweep sa isa o dalawang rail, surface mula sa curve network, patch mula sa apat na gilid, match at blend. Sinusukat ang bawat shared edge bilang G0, G1 o G2 (gap, anggulo, pagtalon ng curvature) sa eksaktong surface, at ang edge na mas masama kaysa hiniling mo ay lumilitaw sa panel ng Problems na may fix na **Match**. Iginuguhit mula sa eksaktong surface ang zebra stripe at mga kulay ng curvature. Lumalabas at pumapasok ang mga STEP at IGES file. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

**Site at mga silid**

- **Larawan ng sketch papunta sa lupa.** {{ui:File}} › {{ui:Mag-import ng sketch photo…}} ay ginagawang edge sa lupa ang larawan ng sketch sa kamay mula sa telepono, sa sukat na sasabihin mo: isang grupo, na may tag para sa bawat kulay ng panulat. Hinahanap at ginagawang tuwid ang papel sa iyong computer, at walang ipinapadalang kahit saan. Tingnan ang [Mag-model sa site plan](topic:site-plan).
- **Lagyan ng muwebles ang kuwarto.** Piliin ang floor at gamitin ang {{ui:Organize}} › {{ui:Lagyan ng muwebles ang kuwarto…}}. Ang muwebles ng kuwarto sa tulugan, sala, kainan, kusina, banyo o opisina ay inilalagay ayon sa mga panuntunan, nakasandal sa mga pader at malayo sa mga pinto at bintana, sa isang grupo na maaari mong alisin sa isang hakbang. Ito ay default na layout para suriin mo, hindi disenyo. Tingnan ang [Starter library](topic:starter).

**3D printing**

- **Mga hilig na hiwa.** Ang Hatiin para sa printing ay maaaring pahilisin ang mga hiwa hanggang 60 digri, na nagbibigay sa mga piraso ng mas malawak na lugar na pandikit. Nakatayo nang tuwid sa hiwa ang mga connector. Tingnan ang [Hatiin ang model para sa printing](topic:print-split).
- **Ang print check sa Problems.** Lumalabas sa panel ng Problems ang mga resulta ng 3D print check na may marker sa model, at mula roon ay inaayos ang mga ito ng Repair. Tingnan ang [Supports, kapal ng pader, hollowing at repair](topic:print-tools).

**Sa bawat app**

- **Mga wika.** Ang help at mga app ay may 54 na wika. Sampu ang bago: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek. Ang mga wikang hindi Ingles ay machine draft hanggang mabasa ito ng native speaker, at maaaring nasa Ingles pa ang ilang help topic.
- **Input device.** Maaaring gamitin ang trackpad, pen, 3D mouse, game controller at MIDI control sa mga app, para sa lahat o para sa isa.
- **Mga row ng toolbar.** {{ui:Mga setting}} › {{ui:Pangkalahatan}} › Toolbar rows ang nagtatakda ng Wrap (gaya ng dati), 2 row o 1 row. Ang bar na hindi kasya ay nag-i-scroll pahalang sa halip na kumuha ng espasyo sa drawing. Nananatiling default ang Wrap.
- **Property grid.** Ang mga field ng lamp ng ModelCraft ay gumagamit ng shared grid: mga collapsible na kategorya, column ng label at value, at density na Compact. Patuloy na gumagana ang tinype na arithmetic gaya ng `2*450`.
- **Mga problema.** Ang panel ng Problems (ang warning button sa app bar) ay shared ng lahat ng app. Sa ModelCraft, dito nakalagay ang print check at ang mga babala sa surface continuity.
- **Live.** Ipinapakita ng Live TeamWork session kung sino ang nasaan. Tingnan ang [Mag-model nang sabay gamit ang Live TeamWork](topic:work-live).
- **Add-on.** Maaaring magdagdag ng render engine ang mga add-on, gaya ng nasa itaas.
- **Ikonekta ang iyong AI.** Pumasa ang tool contract at ang mga check ng walong app, na may 454 na tool sa kabuuan. Hindi pa ipinangako ang one-click connection sa loob ng Studio, hosted connector para sa browser assistant, sarili mong key sa loob ng Studio, at published package. Walang sariling AI ang mga app. Tingnan ang [Gamitin ang ModelCraft kasama ang AI assistant](topic:use-with-ai-assistants).

### Naayos sa 0.8.1

- **Seksyon ng classes ng DWG.** Mali ang pagkabasa sa seksyon ng classes ng DWG file bilang maling uri, na maaaring makasira sa file sa pag-import. Tama na itong nababasa, sa ModelCraft at sa iba pang app na nagbabasa ng DWG.
- **Tablet sa portrait.** Ang sobrang taas ng grid ay napupunta sa canvas, at nagsisimula ang sheet layout sa lapad na 760 pixel o mas mababa pa. Mayroon ding pagbabagong ito ang style sheet ng ModelCraft.
- **Wika sa Studio.** Ang CadCraft Studio at ang packed edition ay maaaring magpalit ng wika habang tumatakbo; dati, Ingles lamang. Hindi pa ito nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbago ang wika.

### Hindi pa kasama sa bersyong ito

- **Hindi code-signed.** Maaaring magpakita ang Windows ng SmartScreen: piliin ang {{ui:Higit pang impormasyon}}, saka {{ui:Patakbuhin pa rin}}. Sa Mac, i-right-click at piliin ang {{ui:Buksan}}. Naka-hold ang store build, at hindi na-rebuild ang iPad at iPhone build para sa 0.8.1.
- Wala pa ang ibang programang gumuguhit ng larawan nang walang render-engine add-on, panorama o stereo camera, at sky picture sa pamamagitan ng ibang programa, at ang plug-in na nagbubukas ng Unreal stage. Nakasulat na ang mga file; hindi pa inilalabas ang plug-in at hindi pa ito napapatakbo sa Unreal.
- Freeform surfaces: hindi pa sinusukat o inaangkin ang G3 at class A, at darating pa ang trimming at solid.
- Hindi eksaktong kapareho ng atin ang mga larawan mula sa ibang programa pixel-for-pixel: tugma lamang ang camera, araw, lamp at exposure.
- Hindi pa lubos na nasusubukan sa bawat platform ang pag-ayos ng 0.8.1 sa pagpapalit ng wika sa Studio.

Ang lahat ng iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet). Para sa nakaraang release, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
