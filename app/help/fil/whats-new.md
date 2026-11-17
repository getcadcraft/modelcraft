---
title: Ano ang bago sa 0.9
summary: Print stage na may sariling slicer at pagpapadala sa USB, Klipper, OctoPrint at PrusaLink, resin slicing at file add-on, material flow, digital twin at factory floor na add-on, NURBS fillet, thickening at scan fitting, AR sa site at sampung arc method.
keywords: whats new, what's new, release notes, changelog, 0.9, print stage, 3d print, ipadala sa 3d printer, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resin printing, goo, sl1, ctb, anycubic, exposure test, material flow, digital twin, factory floor, plc, conveyor, nurbs, fillet, thicken, scan fit, ar, on site, arc methods, units, whats new, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, render engine, engine, buksan sa, usd, gltf, unreal, add-on engine, nurbs, surfaces, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, sabihin ang scene, scene, panahon, oras ng araw, season, assistant, materyal mula sa larawan, larawan, larawan ng sketch, lagyan ng muwebles ang kuwarto, furnish a room, hilig na hiwa, split, print check, problema, property grid, mga lampara, mga wika, input device, mga hilera ng toolbar, dwg, live
from: 169048a2
---

Ito ang nagbago sa ModelCraft 0.9, kumpara sa 0.8.1. Abot na ngayon ng ModelCraft ang printer at ang plant floor: maaari mong ilagay ang mga bagay sa print bed at ipadala ang mga ito nang hindi nag-e-export, mag-slice para sa filament o resin, at magplano ng linya ng paghawak ng materyal. Ito ang CadCraft Studio 0.9 at ang walong app nito; karamihan sa mga bagong feature sa ibaba ay mga add-on.

## Bago

### 3D printing

- **Print stage.** I-click ang {{ui:Print stage}} sa toolbar. Magdagdag ng mga item ng Library sa bed ng printer, ayusin ang mga ito, tingnan ang mga na-slice na layer, at pindutin ang {{ui:Ipadala sa 3D printer}}, nang walang STL na ie-export. Bahagi ito ng 3D Print add-on, na naka-on bilang default at maaaring alisin tulad ng anumang add-on. Tingnan ang [Ilagay ang mga bagay sa print bed at ipadala sa printer](topic:print-stage).
- **Sariling filament slicer.** Ang {{ui:CadCraft basic (kasama, pinakamabilis)}} ang slicer sa listahang **Slicer** ng card: mga pader, skin, infill, supports at skirt, sa isang worker para manatiling magagamit ang page. Ipinapakita ng {{ui:I-preview ang mga layer}} kasama ang slider na **Layer** ang mga layer bago ipadala. Ang mga printer profile gaya ng estilo ng Ender-3 at Prusa MK4 ay may sariling start G-code.
- **Pagpapadala.** Sa pamamagitan ng USB (Chrome o Edge sa computer, habang bukas ang page), o sa Klipper (Moonraker), OctoPrint o PrusaLink sa network mo. Walang kumokonekta o nagpapadala nang walang click, at nagtatanong muna ang pagpapadala.
- **Iba pang slicer.** Ang Kiri:Moto, PrusaSlicer at OrcaSlicer ay sariling add-on, naka-off bilang default; idagdag ang mga ito mula sa card o mula sa {{ui:Mga setting}} › {{ui:Mga Add-on}}. Ginagamit ng PrusaSlicer at OrcaSlicer ang sarili mong naka-install na kopya mula sa CadCraft Studio. Ang add-on ng mga printer na Bambu Lab ay nag-s-slice gamit ang iyong OrcaSlicer at mga P2S preset nito, at kailangan ng Studio sa computer.
- **Resin printing.** Ginagawa ng mga resin add-on (naka-off bilang default) ang mga larawan ng layer para sa screen ng printer mo, may paggawang guwang at vent hole, raft at supports, preview ng layer, at oras, resin at gastos. Isinusulat ng mga file-format add-on ang Elegoo GOO, SL1, Chitubox (CBDDLP at CTB 2 hanggang 5) at Anycubic (PWMX at PWS). Ang resin exposure test ay gumagawa ng hagdan ng limang exposure. Tingnan ang [Mag-slice para sa resin printer](topic:resin-printing).
- **Hindi nagbago.** Ang {{ui:I-export}} › {{ui:Suriin para sa 3D printing (STL o 3MF)…}}, ang print tools at ang Split for printing ay gumagana gaya ng sa 0.8. Tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d).

### Material flow, Digital twin at Factory floor

Tatlong add-on ito, naka-off hanggang i-on mo sila sa {{ui:Mga setting}} › {{ui:Mga Add-on}}, at may sariling help ang bawat isa kapag naka-on na.

- **Material flow.** Ang panel na may pangalang Material flow ay naglalatag ng conveyor, station, buffer at AGV path sa 3D view, nagpapatakbo ng simulation na may seed, pinatutugtog ito pabalik, at ipinapakita ang throughput, lead time at pila, na may resulta na naka-save bilang CSV. Maaaring manggaling sa CSV file ang mga order. Maaaring suriin at i-export ang mga robot cell. May soft mode at real mode sa Modbus TCP ang koneksyon ng PLC, na gumagana lang sa CadCraft Studio.
- **Digital twin.** Binabasa ang layout ng Material flow at nagpapatakbo ng soft PLC dito, may mga fault na maaari mong pilitin, stock test, paghahambing ng layout at bill of materials.
- **Factory floor.** Ginagawang makina at cell ang mga station, binabasa ang mga ito nang live o mula sa simulator, at nagtatago ng job queue at simpleng OEE. Pagbabasa lang ang ginagawa nito: hindi kayang sumulat ng build na ito sa makina o PLC.

### Surface, model at drawing

- **Fillet, thickening at boolean sa NURBS.** May {{ui:Fillet sa pagitan ng mga face}}, {{ui:Fillet sa ilang edge}}, {{ui:I-thicken na maging solid}} at Union, Subtract at Intersect ang panel na {{ui:Mga surface}}, bawat isa may sinusukat na paglihis. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Ikabit ang surface sa scan.** Piliin ang na-scan na mesh at gamitin ang {{ui:Ikabit ang surfaces sa scan}} sa grupong **Scan**, saka ang {{ui:I-stitch ang surfaces bilang solid}}. Unang pagkakabit lang ito, hindi kumpletong reverse-engineering package.
- **Live link mula sa .3dm modeller.** Isang direksyon lang, mula sa Rhino 8 o Grasshopper, at kailangan nito ang CadCraft Studio sa parehong computer. Tingnan ang [Panatilihing live ang modelong .3dm](topic:live-3dm-link).
- **Tingnan ang model sa site.** Gumagana ang {{ui:View sa site (AR, telepono)}} sa menu na {{ui:Views}} sa Android phone na may Chrome. Tingnan ang [Tingnan ang model sa site gamit ang Android phone (AR)](topic:ar-on-site).
- **Arc methods.** Ang drop-down na {{ui:Mga paraan ng Arko}} ay nag-aalok ng sampung paraan para gumuhit ng arc, kasama ang {{ui:3-Point}} at {{ui:Start, Center, End}}.
- **Mas maraming unit.** Nauunawaan ang mga timbang (kg, lb, t, ton) at temperatura (degrees C, F, K at R) kung saan ka nag-type ng halaga na may unit.

## Sa bawat app

- **Tooltip.** Ang hover text sa mga button at putol na label ay Bootstrap tooltip.
- **Tip sa simula na maisasara.** May maliit na close x ang tip card sa walang laman na drawing area. Nananatili itong sarado, at maaaring ipakitang muli ng command palette.
- **Mga tab strip na nagsa-scroll.** Ang tab strip ng panel na hindi kasya ay nagsa-scroll sa halip na putulin.
- **Mga pamagat ng tab.** Kapag may bukas na dokumento, ang browser tab ay nagsisimula sa pangalan ng dokumento, saka ModelCraft at CadCraft. Nauuna ang isang tuldok habang hindi pa naka-save.
- **Layout.** Ang {{ui:Mga setting}} › {{ui:General}} › Layout ay naglalaman ng mga layout sa drop-down, may pagpipiliang gamitin ang layout para sa app na ito lang at button para i-reset ang layout.
- **Mga wika.** Ang listahan ng wika sa {{ui:Mga setting}} ay sumusunod sa mga language file na nasa build. Ang mga wikang iba sa Ingles ay mga draft ng makina.
- **Live at Library.** Ipinapakita ng Live TeamWork ang live na cursor at pangalan, at ang mga koleksyon ng Library ay nagbibigay sa bawat app ng default na koleksyon.

## Naayos

- Nagiging {{ui:Pause}} ang {{ui:Play}} habang tumatakbo ang animation, at nagpe-play at nagpa-pause ang {{key:Space}} habang bukas ang timeline.
- Bumabalik sa WebGL ang still render kapag hindi masimulan ng graphics card ang path tracer. Maaaring ipakita pa rin ng live render view ang error; hindi ito nasuri sa Windows machine na may driver na iyon.
- Muling kumokonekta ang real mode ng Material flow pagkatapos magtapos ang link dahil sa PLC exception answer.

## Mga tapat na limitasyon

- Wala pang na-print sa totoong printer: hindi filament, hindi resin, hindi sa pamamagitan ng Bambu Connect. Ang mga resin file ay binasa lang muli ng sarili nilang reader ng CadCraft.
- Ang digital twin at Factory floor ay sinubukan lang laban sa simulator at mga kilalang sagot, walang totoong PLC, linya o protocol. Pantulong sila sa pagsusuri, hindi validation ng kaligtasan. Box lang ang sakop ng physics, hanggang walong load.
- Hindi pa kailanman tumakbo sa totoong program ang link ng Rhino at Grasshopper.
- Mga draft ng makina ang mga wikang hindi Ingles.

## Mas maaga: 0.8 at 0.8.1

Ito ang nagbago sa ModelCraft 0.8 (2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Maaari nang ipadala ng dialog na {{ui:I-render ang larawan…}} ang scene sa ibang program, gumagawa ang panel ng {{ui:Mga surface}} ng makinis na freeform surface, at ang assistant na ikinonekta mo ay makapagtatakda ng buong scene mula sa isang pangungusap.

### Bago

**Pag-render**

- **Pagpili ng engine.** Ang {{ui:I-render ang larawan…}} ay may listahang **Engine** sa itaas ng Mode. Ang sarili nating dalawang engine, ang Fast at ang Path tracer, ang default at gumagana kahit saan. Ang iba pang entry ay nagse-save ng scene bilang package (ang model bilang USD file, kasama ang settings file na may eksaktong halaga ng materyal, mga lampara na naka-on, ang araw, ang langit, ang exposure at ang camera) para dalhin sa ibang program. Ang larawang iginuhit ng ibang program ay nagsasabi kung aling program at bersyon ang gumawa nito. Tingnan ang [Pumili kung aling program ang gagawa ng larawan](topic:render-engines).
- **Buksan sa ibang program.** Maaaring i-save ng listahang Engine ang scene bilang USD file, glTF file (`.glb`) o Unreal project folder (`.zip`), sa browser at sa CadCraft Studio. Sa Studio, maaari rin nitong simulan ang usdview o ang sariling program ng computer para sa file. Tingnan ang [Buksan ang scene sa ibang program](topic:render-open-in).
- **Ipadala sa game engine mula sa Studio.** Isinusulat ng Studio ang scene sa proyekto ng Unreal Engine at pinananatili itong nakasabay tuwing magpapadala, isang direksyon lang. Ang sarili mong edit ay nasa layer na hindi kailanman isinusulat ng CadCraft. Tingnan ang [Ipadala ang scene sa game engine](topic:render-unreal).
- **Engine mula sa add-on.** Maaaring magdagdag ang isang add-on ng engine sa listahan. Ang isinulat sa JavaScript ay gumuguhit sa browser at sa Studio; ang nagpapatakbo ng programa ay nangangailangan ng pagsang-ayon mo sa Studio. Tingnan ang [Iguhit ang larawan gamit ang ibang program](topic:render-other-program) at [Magdagdag ng render engine gamit ang add-on](topic:render-engine-addons).
- **Sabihin ang scene.** Sabihin sa nakakonektang assistant mo ang "dapithapon, mahinang ulan, mga punong taglagas, mga tao sa plaza" at ise-set up ito ng ModelCraft sa isang hakbang: inilalagay ng araw ang oras at petsa para sundin ng anino, nagbabago ang langit, lumilitaw ang mga basang surface, at inilalagay bilang tunay na object ang mga puno at tao sa mga tag na maaari mong itago, ilipat o burahin. Ang oras ng araw, petsa o season, at ang panahon (malinaw, maulap, fog, mahinang ulan, ulan, bagyo) ay gumagana rin nang mag-isa, at binabago ng susunod na hiling ang parehong scene. Lumilitaw ang fog sa high-quality na larawan sa graphics card; ang ibang engine ay nagpapakita ng langit, ilaw at mga basang surface. Hindi iginuguhit ang ulan bilang bumabagsak na guhit.

**Materyal**

- **Materyal mula sa isang larawan.** Bigyan ang ModelCraft ng larawan ng surface (pader, sahig, bato) at gagawa ito ng tiling na materyal: pinapatag ang ilaw sa buong larawan, ginagawang nagdudugtong ang mga gilid, at kinukuwenta mula sa larawan ang color map, roughness map at normal map. Simpleng image processing lang ito sa sarili mong larawan, walang sinanay na model. Estimate lang ang roughness. Ang payak, parisukat at tuwid na larawan ang pinakamainam na tile; ang malakas na pattern gaya ng ladrilyo ay maaaring magpakita ng malabong multo kung saan hinahalo ang dugtungan.

**Mga surface**

- **Freeform surface.** Gumagawa ang panel na {{ui:Mga surface}} ng NURBS curve at untrimmed na surface: curve sa mga punto, loft, ruled, extrude, revolve, sweep sa isa o dalawang rail, surface mula sa network ng curve, patch mula sa apat na edge, match at blend. Bawat shared na edge ay sinusukat bilang G0, G1 o G2 (puwang, anggulo, pagtalon ng curvature) sa eksaktong surface, at ang edge na mas masama sa hiniling mo ay lumilitaw sa panel ng Problema na may **Match** na ayos. Iginuguhit mula sa eksaktong surface ang zebra stripe at curvature colors. Lumalabas at pumapasok ang mga file ng STEP at IGES. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

**Site at mga kuwarto**

- **Larawan ng sketch sa lupa.** Ang {{ui:File}} › {{ui:Mag-import ng sketch photo…}} ay ginagawang edge sa lupa ang larawan ng sketch sa kamay mula sa telepono sa sukat na sasabihin mo: isang group, may tag para sa bawat kulay ng panulat. Nahahanap at natutuwid ang papel sa computer mo, at walang ipinapadala kahit saan. Tingnan ang [Model sa site plan](topic:site-plan).
- **Lagyan ng muwebles ang kuwarto.** Pumili ng sahig at gamitin ang {{ui:Organize}} › {{ui:Lagyan ng muwebles ang kuwarto…}}. Ang muwebles ng kuwarto-tulugan, sala, kainan, kusina, banyo o opisina ay inilalagay ayon sa mga patakaran, nakasandal sa mga pader at malayo sa mga pinto at bintana, sa iisang group na maaari mong alisin sa isang hakbang. Default na layout ito para suriin mo, hindi disenyo. Tingnan ang [Starter library](topic:starter).

**3D printing**

- **Hilig na hiwa.** Ang Split for printing ay maaaring pahilig ang mga hiwa nito hanggang 60 degree, na nagbibigay sa mga piraso ng mas maraming lugar para sa pandikit. Nakatayong tuwid sa hiwa ang mga connector. Tingnan ang [Hatiin ang model para sa pag-print](topic:print-split).
- **Ang print check sa Problema.** Lumalabas sa panel ng Problema ang mga natuklasan ng 3D print check, may marker sa model, at inaayos ito ng {{ui:Ayusin}} mula roon. Tingnan ang [Supports, kapal ng pader, paggawang guwang at pag-ayos](topic:print-tools).

**Sa bawat app**

- **Mga wika.** May 54 na wika ang help at mga app. Sampu ang bago: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek. Mga draft ng makina ang mga wikang hindi Ingles hanggang masuri ito ng katutubong nagsasalita, at maaaring nasa Ingles pa rin ang mga help topic.
- **Input device.** Maaaring paandarin ang mga app ng trackpad, pen, 3D mouse, game controller at MIDI control, para sa lahat o para sa isa lang.
- **Mga hilera ng toolbar.** Itinatakda ng {{ui:Mga setting}} › {{ui:General}} › Mga hilera ng toolbar ang Wrap (gaya ng dati), 2 hilera o 1 hilera. Ang bar na hindi kasya ay nagsa-scroll sa gilid sa halip na kumuha ng espasyo sa drawing. Nananatiling default ang Wrap.
- **Property grid.** Ang mga field ng lampara ng ModelCraft ay gumagamit ng shared grid: mga kategoryang maaaring itupi, column ng label at halaga, at Compact density. Patuloy na gumagana ang na-type na aritmetika gaya ng `2*450`.
- **Problema.** Ang panel ng Problema (ang warning button sa app bar) ay shared ng lahat ng app. Sa ModelCraft, hawak nito ang print check at ang mga babala sa continuity ng surface.
- **Live.** Ipinapakita ng session ng Live TeamWork kung sino ang nasaan. Tingnan ang [Magtrabaho sa modelo kasama ang Live TeamWork](topic:work-live).
- **Mga add-on.** Maaaring magdagdag ng render engine ang mga add-on, gaya ng nasa itaas.
- **Ikonekta ang iyong AI.** Pumasa ang kontrata ng tool at ang mga check ng walong app, na may 454 na tool sa kabuuan. Hindi pa ipinapangako ang isang-click na koneksyon sa loob ng Studio, hosted connector para sa browser assistant, sarili mong key sa loob ng Studio, at na-publish na package. Walang sariling AI ang mga app. Tingnan ang [Gamitin ang ModelCraft kasama ang AI assistant](topic:use-with-ai-assistants).

### Naayos sa 0.8.1

- **Seksyon ng classes sa DWG.** Mali ang pagbasa sa seksyon ng classes ng DWG file bilang maling uri, na maaaring sumira sa file sa pag-import. Tama na itong nababasa, sa ModelCraft at sa iba pang app na nagbabasa ng DWG.
- **Tablet sa portrait.** Napupunta sa canvas ang natitirang taas ng grid, at nagsisimula ang layout ng sheet sa 760 pixel ang lapad o mas kaunti. May pagbabago rin ang style sheet ng ModelCraft.
- **Wika sa Studio.** Maaaring magpalit ng wika ang CadCraft Studio at ang packed edition habang tumatakbo; dati ay Ingles lang ang mga ito. Hindi pa ito nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbabago ang wika.

### Wala pa sa bersyong ito

- **Hindi naka-code-sign.** Maaaring magpakita ang Windows ng SmartScreen: piliin ang {{ui:Higit pang impormasyon}}, saka {{ui:Patakbuhin pa rin}}. Sa Mac, i-right-click at piliin ang {{ui:Buksan}}. Naka-hold ang mga store build, at hindi muling ginawa ang build para sa iPad at iPhone para sa 0.8.1.
- Hindi pa naroroon ang ibang program na nagguguhit ng larawan nang walang render-engine add-on, panorama o stereo camera at sky picture sa pamamagitan ng ibang program, at ang plug-in na nagbubukas ng Unreal stage. Naisulat na ang mga file; hindi pa nailalabas ang plug-in at hindi pa ito napapatakbo sa Unreal.
- Freeform surface: hindi sinusukat o ipinapahayag ang G3 at class A, at darating pa ang trimming at solid.
- Hindi magkapareho sa pixel ang mga larawan mula sa ibang program sa atin: tugma lang ang camera, araw, lampara at exposure.
- Hindi pa nasusubukan sa bawat platform ang ayos sa pagpapalit ng wika sa Studio sa 0.8.1.

Ang iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet). Para sa nakaraang release, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
