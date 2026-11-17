---
title: Ndriço një model me llamba
summary: Vendos llamba, reflektorë dhe panele drite në model, që pamjet e renderuara të tregojnë dhoma natën ose brendësi të ndriçuara, me hije të buta.
keywords: dritë, drita, llambë, llamba, ndriçim, llambë elektrike, dritë tavani, reflektor, dritë e ulët, panel drite, dritë sipërfaqe, lumen, ndriçimi, temperaturë ngjyre, e ngrohtë, natë, brendësi, renderim
from: c8d72cbc
---

Llambat ndriçojnë [pamjet e renderuara](topic:render). Ato nuk e ndryshojnë pamjen 3D, ku çdo llambë shfaqet si një shenjë e vogël me ngjyrën e vet.

## Shto një llambë

1. Te seksioni {{ui:Dritat}} në të djathtë, kliko {{ui:Llambë}}, {{ui:Reflektor}} ose {{ui:Panel drite}}.
2. Kliko aty ku shkon. Kapja funksionon njësoj si gjatë vizatimit.
   - Në tavan ose mur, një **llambë** varet 25 cm jashtë sipërfaqes, në anën nga e cila shikon; një **panel drite** shtrihet mbi sipërfaqe dhe ndriçon larg saj.
   - Një **reflektor** kërkon dy klikime: ku ndodhet, pastaj ku shënjon.

Llamba e re përzgjidhet te {{ui:Dritat}}, gati për t'u ndryshuar.

## Ndrysho një llambë

Kliko emrin e një llambe te {{ui:Dritat}}, ose shenjën e saj në pamje me {{ui:Përzgjidh}}. Pastaj:

| Cilësimi | Çfarë bën |
|---|---|
| {{ui:Ndriçimi (lumen)}} | Sa dritë jep. Një llambë shtëpie është rreth 800 lumen; një panel i ndritshëm tavani 3000 |
| {{ui:Ngjyra}} | {{ui:E ngrohtë}} (si llambë shtëpie), {{ui:Neutrale}} ose {{ui:Dritë dite}}, ose çdo ngjyrë |
| {{ui:Rreze (gradë)}} | Koni i një reflektori, nga skaji në skaj |
| {{ui:Madhësia e llambës}}, {{ui:Gjerësia}}, {{ui:Thellësia}} | Llambat dhe panelet më të mëdha japin hije më të buta |
| {{ui:E kuqe (x)}}, {{ui:E gjelbër (y)}}, {{ui:Lartësia}} | Ku ndodhet |

Shenja pranë emrit të një llambe e ndez ose e fik. {{ui:Fshi dritën}} e heq. Çdo ndryshim është një hap: {{key:Ctrl+Z}} e zhbën. Llambat ruhen në skedarin `.modelcraft`.

## Pamje natën

Te {{ui:Rendero një foto…}}, shëno {{ui:Përdor një datë dhe orë tjetër për këtë imazh}} dhe zgjidh një orë mbrëmjeje. Me diellin poshtë, qielli errësohet dhe vetëm llambat ndriçojnë modelin. Rrit {{ui:Ndriçimi}} në dialog nëse pamja është shumë e errët, ose shto llamba.

:::tip
Për një dhomë të parë nga brenda, vendos kamerën brenda dhomës (rrotullo dhe zmadho, ose një [skenë](topic:scenes)), shto një llambë në tavan dhe rendero natën. Në modalitetin {{ui:Me shpejtësi}}, qoshet larg një llambe mbeten më të errëta se në një foto; [modaliteti me cilësi të lartë](topic:render#high-quality) e lejon dritën të reflektohet nga muret.
:::
