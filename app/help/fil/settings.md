---
title: Mga setting ng ModelCraft
summary: Piliin ang key style na alam mo, gawing mag-orbit at mag-pan ang trackpad nang walang camera button, at i-on o i-off ang snapping at solid collision.
keywords: settings, preferences, controls, key style, keymap, shortcuts, blender, trackpad, touchpad, scroll, orbit, pinch, snap, snapping, collide, collision, overlap, intersect, dumaan sa loob
from: caf77d5b
---

Buksan ang {{ui:Settings}} gamit ang gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:ModelCraft}}, ay naglalaman ng mga setting na para sa app na ito; ang {{ui:General}} ay naglalaman ng mga setting na pinagsasaluhan ng bawat CadCraft app (theme, toolbar, panel). Ang mga setting ng ModelCraft ay umiiral lamang sa app: dito mo sila binabago, at naaalala sila ng browser na ito.

## Controls: aling mga key at mouse button

Dalawang key style. Lumipat sa pagitan ng mga ito gamit ang {{ui:Keys: Push-pull}} / {{ui:Keys: Modeler}} sa ibabang kanan ng view, o sa dulo ng menu na {{ui:More}} ng toolbar:

- **Push-pull style** (ang panimula; ang mga letra ng push-pull modeler gaya ng SketchUp): pumipili ang letra ng tool: {{key:L}} linya, {{key:R}} rectangle, {{key:P}} push/pull, {{key:M}} ilipat, {{key:Q}} i-rotate, {{key:S}} scale, {{key:G}} gumawa ng component. Tingnan ang [Mga key at aksyon ng mouse](topic:keyboard).
- **Modeler style** (ang mga key ng mesh modeler gaya ng Blender): pumili muna, saka kumilos kaagad sa napili. Inililipat ng {{key:G}} ito, iniikot ito ng {{key:R}}, at sinasaklaw ito ng {{key:S}} mula sa kinaroroonan ng pointer: walang unang click. Habang gumagalaw ito, ang {{key:X}}, {{key:Y}} o {{key:Z}} ay nagla-lock ng pula, berde o asul na axis; ang tinype na numero ang nagtatakda ng distansya (o degree, o factor), at ang click o {{key:Enter}} ang naglalagay nito; ang {{key:Esc}} o right-click ay ibinabalik ito. Pagkatapos, bumabalik ka sa {{ui:Select}}.

Ang key style ay kapareho ng pagpili ng menu style: ang Modeler key style ay ang {{ui:Modeler}} menu style, at ang pagpili ng isa ay pumipili rin ng isa pa. Tingnan ang [Mga menu, key at mouse](topic:menus-keys-and-mouse). Ang buong listahan ng Modeler ay nasa [Mga key at aksyon ng mouse](topic:keyboard#modeler-keys). Sumusunod sa style na pipiliin mo ang mga tooltip sa toolbar at sa start card.

## Scrolling: mouse wheel o trackpad

- **Alamin ito** (ang panimula): binabantayan ng ModelCraft ang scrolling. Ang pahalang o pinong scrolling, gaya ng ipinapadala ng trackpad, ay nag-o-orbit; ang buong notch ng wheel ay nag-zo-zoom.
- **Mouse wheel**: palaging nag-zo-zoom ang scrolling papunta sa pointer.
- **Trackpad**: mag-swipe gamit ang dalawang daliri para mag-orbit, pindutin nang matagal ang {{key:Shift}} at mag-swipe para mag-pan, at mag-pinch para mag-zoom. Hindi mo kailangan kailanman ang mga button na {{ui:Orbit}}, {{ui:Pan}} o {{ui:Zoom}}.

Nag-zo-zoom ang pinch sa lahat ng pagpipilian. Kung nagkamali ang "Alamin ito" para sa iyong mouse o trackpad, piliin ang mayroon ka.

:::tip
Sa Modeler style, maaari ka ring mag-orbit sa pamamagitan ng pagpindot sa {{key:Alt}} at pag-drag, at mag-pan gamit ang {{key:Alt+Shift}} at drag: kapaki-pakinabang sa laptop na walang middle button.
:::

## Snapping

**I-snap sa mga point, edge at axis** (naka-on sa simula) ay humihila sa pointer papunta sa mga endpoint, midpoint, edge, guide, at sa pula, berde at asul na axis; tingnan ang [Inference](topic:inference). I-off ito kapag gusto mong maglagay ng isang bagay nang malaya malapit sa ibang geometry nang hindi ito tumatalon. Gumagana pa rin ang mga face, ang lupa, at ang axis lock kahit naka-off ang snapping.

Ang button na {{ui:Snap}} sa ibabang kanan ng view ay gumagawa ng pareho para sa trabaho ng session na ito (sine-save din ito). Sa Modeler style, nililipat ito ng {{key:Shift+Tab}}.

## Huminto ang solid kapag nagdidikit

**Patigilin ang solid kapag nagdidikit** (naka-on sa simula) ay pumipigil sa pader na mahila sa loob ng ibang pader. Sa {{ui:Move}} (at {{key:G}}, at paste-then-move gamit ang {{key:Mod+D}}), dumudulas ang napili hanggang sa ibang solid at humihinto na nakadikit dito; sa {{ui:Push/pull}}, humihinto ang face kapag tumama ito sa ibang solid. Ayos lang ang nakapatong sa isang bagay at dumudulas sa ibabaw nito; tanging ang pagpasok sa loob ang hinihinto. Ang mga bagay na nagkakapatong na sa simula ay maaari pa ring hiwalayin.

Para sadyang itulak ang isang bagay sa loob ng iba, i-click ang {{ui:Collide}} sa ibabang kanan (o i-clear ang setting), gawin ang move, at i-click ulit.

:::note
Tinitingnan ang mga collision sa move at push/pull. Ang {{ui:Rotate}} at {{ui:Scale}} ay hindi pa tumitingin sa mga ito, at ang maluwag na geometry na nagdidikit ay nagdurugtong pa rin, gaya ng dati: panatilihing hiwalay ang magkahiwalay na bagay sa [mga group](topic:groups-components) para manatili silang hiwalay.
:::

## Bed ng 3D printer

Ang laki ng bed ng iyong printer: {{ui:Not set}} (ang panimula), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 o 300 × 300 × 400 mm. Piliin ang laki na pinakamalapit sa build volume ng iyong printer. Pagkatapos, sinasabi ng [Pagsusuri para sa 3D printing](topic:print-3d) kung mas malaki ang model kaysa sa bed; kapag {{ui:Not set}}, hindi sinusuri ang laki.

## Orbit at pan

**Mag-orbit sa paligid ng nasa ilalim ng cursor** (naka-on sa simula): umiikot ang orbit sa bahagi ng model na nasa ilalim ng pointer, at pinananatili ng pan ang puntong iyon sa ilalim ng pointer; sa walang lamang espasyo, ang gitna ng view ang gamit ng pareho. I-off ito para laging mag-orbit sa gitna ng view. Ang **Bilis ng orbit** at **Bilis ng pan** ay mula 0.25× hanggang 3× (1× ang panimula) at nalalapat sa mouse, trackpad, touch at arrow key. Tingnan ang [Orbit, pan at zoom](topic:orbit-pan-zoom).

## Indicator sa sulok

Ang makikita sa sulok ng 3D view: **View cube** (ang panimula; sa itaas-kanan: i-click ang face, edge o corner para tumingin mula roon, i-drag ito para mag-orbit, i-drag ang compass ring nito para paikutin ang model), **Axis icon** (maliit na markang X, Y, Z sa ibabang kaliwa na umiikot kasabay ng view: X pula, Y berde, Z asul) o **Wala**. Tingnan ang [Ang view cube](topic:view-cube).
