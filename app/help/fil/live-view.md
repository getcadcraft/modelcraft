---
title: Ang live view
summary: Isang window sa tabi ng model na nagpapakita nito sa real-time na itsura, may araw at mga anino, at sumusunod sa bawat pagbabago mo; maglakad dito, at itakda ang oras ng araw at ang buwan.
keywords: share, panorama, 360, tour, virtual tour, standalone viewer, offline viewer, ipadala sa client, video, walkthrough video, scatter, scattering, damo, parang, gubat, bato, halaman, puno, tao, ipinta ang halaman, live view, real time, realtime, real-time render, walkthrough, lakad, first person, presentasyon, client, pangalawang screen, pangalawang window, monitor, oras ng araw, araw, season, buwan, anino, ambient occlusion, reflections, bounce light, global illumination, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} ay nagbubukas ng panel sa ibabaw ng app na nagpapakita ng model sa real-time na itsura: ang langit at araw mula sa lugar at petsa ng model mo, ang mga anino ng araw, ang mga look at materyal na ibinigay mo sa mga face, mga lampara, at liwanag na tumalbog mula sa mga dingding at sahig. Sumusunod ito sa ginagawa mo: ikutin ang view at iikot din ito, baguhin ang model at makikita mo ang pagbabago pagkaraan ng sandali. Walangina-upload.

## Buksan ito

1. Piliin ang {{ui:Export}} › {{ui:Live view}}. Lalabas ang panel sa kanang ibabang sulok.
2. I-drag ang title bar nito para ilipat, hilahin ang sulok nito para palakihin.
3. Inilalagay ng {{ui:New window}} ito sa sariling window, para sa pangalawang screen. Agad itong bubukas doon sa {{ui:Export}} › {{ui:Live view in a new window}}. Kung hinaharangan ng browser mo ang pop-up window, magbubukas ito bilang panel.
4. Isinasara ito ng {{ui:Close}}.

## Mga kontrol

| Control | Ano ang ginagawa nito |
|---|---|
| {{ui:Follow the view}} | Kapag naka-on: tumitingin ang live view kung saan tumitingin ang view ng ModelCraft. Pinapatay ito ng paglalakad |
| {{ui:Walk}} | Maglakad sa model (sa ibaba) |
| {{ui:Gravity}} | Habang naglalakad: tumayo sa sahig at umakyat sa hagdan. Naka-off: lumipad |
| {{ui:Time}} | Ang oras ng araw, mula 05:00 hanggang 21:00. Gumagalaw ang araw habang dina-drag |
| {{ui:Month}} | Ang buwan (ang ika-21 nito), para makita mo ang araw sa taglamig at tag-init |
| {{ui:Quality}} | {{ui:For this computer}} (kung ano ang nakukuha ng [iyong machine](topic:your-machine)), o {{ui:Low}}, {{ui:Medium}} o {{ui:High}} |

Ang linya sa ibaba ay nagsasabi kung ano ang gumuguhit ng view (WebGPU o WebGL 2), ang kalidad, at ang bounce light.

## Maglakad sa model

1. Iharap ang main view kung saan mo gustong tumayo at piliin ang {{ui:Walk}}. Nakatayo ka sa sahig sa ibaba ng eye point ng view, 1.6 m ang taas.
2. I-click ang live view, saka gamitin ang {{key:W}} {{key:A}} {{key:S}} {{key:D}} o ang arrow keys. Pindutin nang matagal ang {{key:Shift}} para tumakbo. I-drag para tumingin sa paligid.
3. Inaakyat ang mga hakbang na hanggang 40 cm (hagdan); anumang mas mataas ay dingding. Hinaharangan ka ng mga dingding at dumudulas ka sa tabi nila.
4. Kapag naka-off ang {{ui:Gravity}}, lumilipad ka: umaakyat ang {{key:E}}, bumababa ang {{key:Q}}.
5. Hinihinto ng {{key:Esc}} ang paglalakad.

## Magkalat ng halaman, bato at tao

{{ui:Scatter}} sa bar ng live view ay nagbubukas ng scatter panel sa tabi ng larawan. Ang scatter set ay nagkakalat ng mga item mula sa entourage library (puno, shrub, damo, bulaklak, bato, tao, sasakyan) sa bahagi ng model. Iginuguhit lamang ang mga item sa live view: hindi sila geometry sa model, at hindi sila ipinapakita ng main view.

1. **Punan ang mga face:** piliin ang mga face (o isang grupo, gaya ng terrain) sa ModelCraft, saka piliin ang {{ui:Fill selection}}. Sasakupin ng set ang mga ito.
2. **Ipinta:** piliin ang {{ui:Paint}}, saka i-drag sa ibabaw ng live view. Kapag may napiling face, sa mga iyon lamang lalapat ang pintura; kapag wala, sa anumang nasa ilalim ng brush lalapat, kasama ang lupa. Itinatakda ng {{ui:Brush size}} ang brush; inaalis ng {{ui:Eraser}} ang mga pininturahang bahagi.
3. Lagyan ng tick ang ikakalat. Ang numerong nasa tabi ng bawat isa ay ang weight nito: ang 3 at 1 ay gumagawa ng tatlo sa una sa bawat isa sa pangalawa.

| Control | Ano ang ginagawa nito |
|---|---|
| {{ui:Per m²}} | Ilan ang item sa bawat metro kuwadrado |
| {{ui:Keep away (m)}} | Walang item na mas malapit dito sa ibang bagay, at walang nasa ilalim ng bubong o mesa. Pinapatay ito ng 0 |
| {{ui:Turn (°)}} | Gaano kaikot nang random ang bawat item sa paligid ng vertical |
| {{ui:Steepest (°)}} | Walang item kung saan mas matarik ang ibabaw |
| {{ui:Size}} | Ang pinakamaliit at pinakamalaking sukat, bilang factor ng sariling sukat ng item |
| {{ui:Height from, to (m)}} | Sa pagitan lamang ng mga taas na ito (blangko = alinman) |
| {{ui:Lean with the surface}} | Ang 0 ay nagpapanatiling tuwid ang mga item; ang 1 ay itinatayo ang mga ito nang patayo sa dalisdis |
| {{ui:Seed}}, {{ui:Shuffle}} | Laging parehong scatter ang ibinibigay ng parehong seed; pumipili ang Shuffle ng iba |

Naka-save ang mga set sa .modelcraft file at sinusundan ang mga face na sakop ng mga ito kapag binago mo ang mga ito. Ang pinakamaraming item na iginuguhit ng live view ay nakadepende sa antas ng [iyong machine](topic:your-machine): 20 000 para sa {{ui:Processor only}}, 100 000 para sa {{ui:Graphics card, basic}}, isang milyon para sa {{ui:Graphics card, high}}. Ipinapakita ng panel kung ilan ang nailagay sa ilan na hinihingi ng density: mas kaunti ang nailalagay kapag naabot na ang budget, o kapag may bagay na pumipigil sa mga ito. Ang mga item na malapit sa camera ay iginuguhit bilang sarili nila; ang malalayo ay bilang simpleng hugis na may kanilang kulay.

:::note
Nasa live view ang mga scattered na item (at sa walk, panorama at standalone viewer nito). Hindi pa sila iginuguhit ng I-render ang larawan.
:::

## Ibahagi: panorama, tour, viewer, video

{{ui:Share}} sa bar ng live view ay gumagawa ng mga file mula sa live view. Lahat ay ginagawa sa computer na ito; walangina-upload.

| Pagpipilian | Ang makukuha mo |
|---|---|
| {{ui:360° panorama}} | Isang 360° na larawan mula sa kinatatayuan ng view (o kung nasaan ka habang naglalakad), bilang equirectangular PNG na binubuksan ng mga panorama viewer at karamihan ng photo site |
| {{ui:Add this spot to the tour}}, saka {{ui:Save the tour}} | Isang web page na may panorama sa bawat lugar at mga arrow patungo sa mga lugar na nakikita ng bawat isa (ang dingding sa gitna ay nagtatago ng arrow) |
| {{ui:Save a viewer}} | Isang web page na may model sa real-time na itsura na ito: ikutin ito, lakarin, tumalon sa mga naka-save nitong scene. Bumubukas ito offline sa browser na may WebGPU o WebGL 2, mula sa folder, USB stick o email, nang walang install at walang account, at walang kinukuha mula sa internet |
| {{ui:Video of the path}} | Ang camera path ng timeline (o ang mga naka-save na scene nang sunud-sunod) bilang video sa real-time na itsura na ito, sa laki ng live view: WebM o MP4 kung kaya ng browser, kung hindi ay mga numerong larawan sa ZIP |

Sumusunod ang laki ng panorama sa kalidad: 1024, 2048 o 4096 pixels ang lapad sa Low, Medium at High. Mga 5 MB ang viewer file, dagdag ang model.

:::note
Ginawa ang tour at ang viewer para sa pagpapakita, hindi para sa pag-e-edit: pinananatili nila ang model gaya ng nasa sandaling i-save mo ang mga ito.
:::

## Kalidad

| | Low | Medium | High |
|---|---|---|---|
| Mga anino ng araw | isang shadow map | tatlong cascade | apat na cascade |
| Ambient occlusion (mga contact shadow) | | ✓ | ✓, mas pino |
| Repleksyon sa metal | | | ✓ |
| Bloom (kapag itinakda ito ng I-render ang larawan) | | ✓ | ✓ |
| Pinakinis na mga gilid | FXAA | sa ilang frame (TAA) | sa ilang frame (TAA) |
| Bounce light | magaspang | mas pino | pinakapino |

{{ui:For this computer}} ay pumipili ng Low sa computer na walang magagamit na graphics card, Medium sa may built-in na graphics chip, at High sa hiwalay na graphics card. Para sa 8 GB na laptop na walang graphics card ang Low.

## Bounce light

Ang liwanag na tumatalbog mula sa dingding na tinamaan ng araw papunta sa sahig, at ang mas madilim na loob ng silid, ay kinukuwenta ng parehong path tracer na gumagawa ng [rendered na larawan](topic:render): nagre-render ito ng maliit na panorama sa mga punto sa loob ng model, sa background sa bawat processor core. Habang gumagana ito, sinasabi ng ibabang linya ang {{ui:Bounce light: 40 %}}; kapag handa na, tinatanggap ito ng view. Pagkatapos ng pagbabago, nagsisimula ulit ito.

:::note
Tinatayang resulta ito para sa live view, hindi rendered na larawan: maliliit na detalye sa pagitan ng mga punto ay tumatanggap ng bounce light ng mga kalapit na punto. Para sa tapos na larawan, gamitin ang [I-render ang larawan](topic:render).
:::

## Liwanag at kulay

Gumagamit ang live view ng parehong liwanag, white balance, contrast at view transform (ACES, AgX, filmic o standard) gaya ng [I-render ang larawan](topic:render): itakda ang mga iyon doon at susundan sila ng live view.

:::note
Nagkakaiba ang mga browser. Kung may WebGPU ang browser (Chrome at Edge sa Windows, macOS at ChromeOS, Safari 26), ginagamit ng live view ang WebGPU; sa iba (karamihan ng browser sa Linux, mas lumang Apple system), gumagamit ito ng WebGL 2 at pareho ang itsura.
:::
