---
title: Suriin ang model sa VR headset
summary: Lakarin ang model sa buong laki sa VR headset: tumalon, lumiko, sumukat, hiwain ito, maglagay ng issue na may larawan, tingnan ito bilang table-top na model, at makasama ang iba sa live na session.
keywords: vr, virtual reality, headset, webxr, xr, immersive, quest, oculus, vive, index, pico, lakad, walkthrough, teleport, pagsusuri ng disenyo, review, sukat, section, hiwa, issue, issues, bcf, table top, scale model, presensya, avatar, live, magkasama
from: fa2f591a
---

Inilalagay ka ng {{ui:Review in VR}} sa loob ng model gamit ang VR headset, sa buong laki. Tatayo ka kung nasaan ang camera ng view, sa sahig sa ibaba nito, nakaharap sa parehong direksyon. Walang ina-upload: ipinapakita ng headset ang iginuguhit ng browser sa computer na ito (o sa browser ng headset mismo).

## Ang kailangan mo

- Headset na kayang paandarin ng browser (WebXR): ang sariling browser ng standalone na headset, o Chrome o Edge sa PC na may nakakonektang headset.
- Bukas ang ModelCraft sa secure na page (https), gaya ng nasa site na ito.

Kapag walang headset, naka-gray out ang {{ui:Review in VR}} at sinasabi kung bakit.

## Simulan

1. Ihanda ang view kung saan mo gustong magsimula: sa loob ng kuwarto, o sa labas na nakatingin sa gusali.
2. I-click ang {{ui:Views}} sa grupong {{ui:Camera}}, saka ang {{ui:Review in VR}}.
3. Isuot ang headset.

Nasa likod ng kaliwang kamay mo ang menu. Ituro ito gamit ang kanang controller at hilain ang trigger para pumili ng button. (Kapag isang kamay lang, lumulutang ang menu sa harap ng pinagsimulan mo.)

## Ang itsura

Ipinapakita ng headset ang model sa itsura ng [live view](topic:live-view): ang mga itsura at materyal na ibinigay mo sa mga face, ang langit at ang araw mula sa lugar at petsa ng model mo kasama ang anino nito, mga lampara, nakakalat na halaman at bato, at liwanag na tumatalbog sa mga pader at sahig (kinukuwenta sa computer na ito habang tumitingin ka, at sumusunod sa iyo habang gumagalaw ka). Ang liwanag at ang view transform (ACES o AgX) ay gaya ng sa [I-render ang larawan](topic:render). Depende sa kaya ng browser ng headset kung gaano karami ang iginuguhit, gaya sa desktop; nananatili sa desktop ang ambient occlusion, reflections at bloom.

## Gumalaw

- **Tumalon:** sa {{ui:Ilipat}}, ituro ang sahig at hilain ang trigger; doon ka lalapag. O itulak ang stick pasulong para tumutok, at bitawan para tumalon. Sa sahig at lupa lang (mga surface na nakaharap pataas) ka maaaring lumapag, hindi kailanman sa pader.
- **Lumiko:** itulak ang stick pakaliwa o pakanan: lumiliko ka ng 30° sa bawat pagkakataon.
- **Lumakad:** sa iyong play area, lakad lang nang lakad.

## Sumukat

Piliin ang {{ui:Sukat}}, saka hilain ang trigger sa dalawang punto. Ipinapakita ang distansya sa pagitan nila, sa unit ng model. Ang punto malapit sa sulok ay didikit sa sulok.

## Hiwain ito

Piliin ang {{ui:Section}} at hilain ang trigger sa isang surface:

- sa pader (o anumang hindi sahig): lahat ng nasa pagitan mo at ng surface na iyon ay hihiwain, para makita mo ang loob. Pinakamahusay ito mula sa labas, o sa kabila ng kuwarto;
- sa sahig, mula sa itaas: hiwa ng plano na 1.2 m sa ibabaw ng sahig na iyon, kaya ipinapakita ng mga pader ang mas mababang bahagi nila.

Tinatanggal ng {{ui:Burahin}} ang hiwa at mga sukat. Kung may section plane na humihiwa sa model sa view kapag nagsimula ka, magsisimula ang headset na kasama nito.

## Maglagay ng issue

Piliin ang {{ui:Issue}} at hilain ang trigger kung nasaan ang problema. May numerong pin na nagmamarka rito, at itinatabi ng ModelCraft ang issue kasama ang larawan ng nakita mo at kung saan ka nakatayo. Kapag umalis ka sa VR, nasa listahan ng {{ui:Mga Issue}} sa kanan ang mga issue:

- ipinapakita ng eye button ang issue mula sa lugar kung saan ito inilagay;
- dina-download ng {{ui:I-save bilang BCF}} ang lahat ng ito bilang BCF file, na binubuksan ng mga BIM review program (kasama ang camera at larawan);
- naka-save din ang mga ito sa file na `.modelcraft`.

Magdagdag ng komento sa issue pagkatapos mong umalis sa VR, sa BCF program: hindi pa ginagawa ang pag-type sa headset.

## Tingnan bilang table-top na model

Pinaliliit ng {{ui:Table top}} ang model para magkasya sa mesa sa harap mo; lakarin ito, o paikutin gamit ang stick. Ibinabalik ka ng {{ui:Full size}} kung nasaan ka dati.

## Kasama ang iba, live

Sa [live session](topic:work-live), nakikita ng lahat sa VR ang iba bilang ulo at dalawang kamay sa sarili nilang kulay, kasama ang pangalan nila, at isang tuldok kung saan nakaturo ang bawat isa. Ang mga pagbabagong ginagawa ng sinuman ay umaabot sa headset mo sa loob ng sandali. Hindi pa ipinapakita sa headset ang mga taong nasa mesa.

## Umalis

Piliin ang {{ui:Umalis sa VR}} (o tanggalin ang headset at tapusin doon). Lilipat ang view sa screen sa lugar kung nasaan ang ulo mo dati.

:::note
Nasubukan lang gamit ang headset emulator, hindi pa sa totoong headset. Ang malaking model ay maaaring magpautal sa headset: itago muna ang hindi mo kailangan ([itago at ihiwalay](topic:hide-isolate)).
:::
