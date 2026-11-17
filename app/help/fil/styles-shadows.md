---
title: Mga istilo at anino ng araw
summary: Ipakita ang model na shaded, bilang hidden lines, bilang wireframe o see-through, at pag-aralan ang mga anino nito sa anumang petsa, oras at lugar.
keywords: presentation view, malinis na view, itago ang mga guide, itago ang mga axis, style, shaded, hidden line, wireframe, x-ray, mga gilid, mga anino, araw, pag-aaral sa araw, solar, petsa, oras, latitude, longitude, time zone, hilaga
from: 09c95329
---

Ang panel na {{ui:Style}} sa kanan ang nagbabago kung paano iginuguhit ang model. Walang binabago rito sa mismong model, at hindi ito bahagi ng undo. Naaalala ng bawat [scene](topic:scenes) ang sarili nitong istilo, at naaalala ng file ang istilong meron ka noong i-save mo ito.

## Mga face

Pumili sa listahang {{ui:Faces}}:

| Istilo | Mukhang |
|---|---|
| {{ui:Shaded}} | Solid na mga face, may malambot na liwanag. Asul-abo ang mga face na nakikita mula sa likod. Lumalabas ang mga kulay na na-import. |
| {{ui:Hidden line}} | Mga face sa kulay ng background na may mga edge sa tinta: malinis na line drawing na walang nakatagong linya. Puti sa {{ui:Papel}}, maitim sa {{ui:Model}}. |
| {{ui:Wireframe}} | Mga edge lang. Hindi iginuguhit ang mga face, pero nabibilang pa rin ang mga ito kapag nag-click at nag-snap ka: hindi ka makakapili sa likod nila. |
| {{ui:X-ray}} | See-through na mga face, para makita ang nasa likod o sa loob. Gaya ng wireframe, humihinto pa rin ang mga click at snap sa pinakamalapit na face. |

Ang {{ui:Ipakita ang mga gilid}} ang nag-o-on o nag-o-off ng mga edge sa lahat ng istilo maliban sa {{ui:Wireframe}}. Kapag naka-off ito, halos walang ipinapakita ang {{ui:Hidden line}}, dahil magkakatugma ang mga face at ang background. Hindi kailanman iginuguhit ang malambot na mga gilid, gaya ng mga gilid ng hinilang bilog.

## I-on ang mga anino ng araw

1. Lagyan ng tsek ang {{ui:Anino ng araw}}. Nagiging aktibo ang mga setting ng araw sa ibaba nito, at naghahagis ng anino ang model sa sarili nito at sa lupa.
2. Itakda ang lugar:
   - {{ui:Latitude}}: positibo ang hilaga, negatibo ang timog (ang New York ay humigit-kumulang 40.7, ang Sydney humigit-kumulang -33.9).
   - {{ui:Longitude}}: positibo ang silangan, negatibo ang kanluran (ang New York ay humigit-kumulang -74.0).
   - {{ui:UTC offset}}: ang offset ng lugar mula sa UTC sa oras, gaya ng `-5` para sa New York sa taglamig. Hindi ina-apply ng ModelCraft ang daylight saving time; gamitin ang `-4` para sa New York sa tag-init.
3. Itakda ang {{ui:Petsa}} (buwan at araw) at i-drag ang slider ng {{ui:Oras}}. Gumagalaw ang oras sa 15-minutong hakbang at lumalabas sa tabi ng slider, gaya ng "3:00 pm".

Ang linyang nasa ilalim ng mga setting ang nagsasabi kung nasaan ang araw, gaya ng "Araw 52° sa itaas, 250° mula sa hilaga. Ang hilaga ay ang green axis." Sa gabi, sinasabi nito ang "Nasa ilalim ng abot-tanaw ang araw sa oras na ito."

Ang bagong model ay nagsisimula sa araw noong June 21 ng 3:00 pm, sa latitude 40, longitude -105, UTC offset -7.

## Itapat ang model sa hilaga

Ang hilaga ng ModelCraft ay palaging ang **green axis**. Para pag-aralan ang totoong lugar, i-turn ang model para ang hilagang bahagi nito ay nakaharap sa green: piliin ang lahat ({{key:Mod+A}}), pindutin ang {{key:Q}}, i-click ang center sa lupa, at i-turn ito ayon sa anggulo ng lugar mula sa hilaga (tingnan ang [I-rotate at i-scale](topic:rotate-scale)).

## Pag-aaral sa araw

1. Itakda ang lugar at ang petsa.
2. Magdagdag ng scene ({{ui:Add scene}} sa {{ui:Scenes}}).
3. Ilipat ang slider ng oras, saka magdagdag ng isa pang scene. Ulitin para sa bawat oras na gusto mo.
4. I-click ang {{ui:Play}} para isa-isang tingnan ang mga ito. Tingnan ang [I-save ang mga view bilang scene](topic:scenes).

## Mga dapat tandaan

- Maaaring magmukhang magaspang ang mga anino sa napakalaking model, dahil iisang shadow map ang sumasakop sa buong model.
- Hindi iginuguhit ang mga anino sa {{ui:Wireframe}}.
- Sumusunod ang posisyon ng araw sa kalkulasyon ng NOAA solar at tumpak hanggang sa bahagi ng isang degree, sapat na para sa massing studies. Hindi isinasaalang-alang ang atmospheric refraction, kaya maaaring bahagyang mali ang napakababang anggulo ng araw malapit sa pagsikat at paglubog nito.

## Presentation view

{{ui:Views}} › {{ui:Presentation view}} (o {{key:Shift+P}}) ay nagpapakita lang ng model: nawawala ang mga axis, guide line at guide point, ang outline ng section plane (nananatili ang hiwa), ang marka ng lamp, ang kahon ng bukas na group, ang snapping mark at tip, at ang highlight ng selection. Gamitin ito para malinaw na makita ang model, o bago kumuha ng screenshot. Gumagana pa rin ang mga tool at nagsa-snap pa rin; hindi mo lang nakikita ang mga marka. Pindutin ulit ang {{key:Shift+P}} para ibalik ang mga ito. Nananatili ang mga dimension, dahil bahagi sila ng drawing. Habang nag-e-edit ka sa loob ng group, hindi na nawawala ang iba pang bahagi ng model: lumalabas ito gaya ng dati, kasama ang mga texture.
