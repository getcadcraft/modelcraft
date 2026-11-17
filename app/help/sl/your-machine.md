---
title: S čim vaš računalnik upodablja
summary: Nastavitve › Upodabljanje prikazujejo grafiko, procesorska jedra in pomnilnik, ki jih ta brskalnik dovoli aplikaciji, ter raven, ki določa, kje se upodabljanje začne.
keywords: vaš računalnik, grafična kartica, gpu, webgpu, webgl, procesor, cpu, jedra, niti, pomnilnik, ram, skupni pomnilnik, izolacija, stopnja, raven, hitrost, počasno, hitrost upodabljanja, prenosnik
from: 8a0c21c9
---

Odprite {{ui:Nastavitve}} ({{key:Mod+,}}), ostanite na zavihku te aplikacije in se pomaknite do {{ui:Upodabljanje}}. {{ui:Vaš računalnik}} prikazuje, kaj ta brskalnik dovoli aplikaciji za upodabljanje. Nič od tega ne zapusti vašega računalnika.

| Vrstica | Kaj pomeni |
|---|---|
| {{ui:Grafika}} | Grafična kartica, ki jo prijavi brskalnik. „WebGPU“ pomeni, da lahko opravi vse delo upodabljanja; „WebGL 2 only“ pomeni, da živi pogled in {{ui:Upodobi sliko…}} uporabljata to (visoka kakovost s sledilnikom poti WebGL), upodabljanje v pogledu in vrsta upodabljanja, ki potrebujeta WebGPU, pa nista na voljo; programska nadomestitev pomeni, da vse teče na procesorju |
| {{ui:Procesor}} | Koliko procesorskih jeder prijavi brskalnik |
| {{ui:Pomnilnik}} | Približno koliko pomnilnika ima računalnik, kadar ga brskalnik sporoči. Nekateri brskalniki tega ne sporočajo |
| {{ui:Skupni pomnilnik}} | Ali stran lahko deli pomnilnik med svojimi delavci. Če je vklopljeno, lahko vsako jedro dela na eni kopiji prizora; če je izklopljeno, potrebuje vsako svojo kopijo, zato se velik prizor prilega na manj jeder hkrati |
| {{ui:Hitra koda procesorja}} | Ali brskalnik izvaja hitrejšo kodo WebAssembly. Brez nje se uporabi počasnejša rezervna koda |
| {{ui:Raven}} | {{ui:Grafična kartica, visoka}}, {{ui:Grafična kartica, osnovna}} ali {{ui:Samo procesor}}, z razlogom pod tem |

## Raven

Raven določa, kje se [pogled v živo](topic:live-view) začne ({{ui:Za ta računalnik}}), koliko raztresenih predmetov nariše in koliko ploskev [podrazdeljene ploskve](topic:modifiers#subdivision-surface) sme prikazati v pogledu, da prenosnik z vgrajenim grafičnim vezjem ali brez grafične kartice ostane odziven. Vgrajeno ali telefonsko grafično vezje ali 4 GB pomnilnika ali manj nikoli ne dobi možnosti {{ui:Grafična kartica, visoka}}.

:::note
Brskalniki se razlikujejo. Isti računalnik lahko v enem brskalniku prikaže WebGPU, v drugem pa „WebGL 2 only“. V Linuxu večina brskalnikov še nima WebGPU.
:::
