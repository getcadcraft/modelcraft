---
title: Sizning kompyuteringiz render qilishda nimalardan foydalanadi
summary: Sozlamalar › Render brauzer ilovaga ruxsat bergan grafika, protsessor yadrolari va xotirani koʻrsatadi, hamda render qaysi darajadan boshlanishini belgilaydigan darajani.
keywords: sizning kompyuteringiz, grafika kartasi, gpu, webgpu, webgl, protsessor, cpu, yadrolar, oqimlar, xotira, ram, umumiy xotira, izolyatsiya, daraja, tezlik, sekin, render tezligi, noutbuk
from: 8a0c21c9
---

{{ui:Sozlamalar}} ({{key:Mod+,}}) oynasini oching, shu ilovaning oʻz yorligʻida qoling va {{ui:Render}} boʻlimigacha suring. {{ui:Sizning kompyuteringiz}} boʻlimida brauzer ilovaga render uchun nimalardan foydalanishga ruxsat berayotgani koʻrsatiladi. Undagi hech narsa kompyuteringizdan chiqmaydi.

| Qator | Nimani anglatadi |
|---|---|
| {{ui:Grafika}} | Brauzer xabar qilgan grafika kartasi. "WebGPU" degani u barcha render ishlarini bajara oladi; "WebGL 2 only" degani jonli koʻrinish va {{ui:Rasm renderini yaratish…}} WebGL yoʻl kuzatuvchisi bilan ishlaydi (yuqori sifatda), lekin koʻrinishdagi render va WebGPU talab qiluvchi render navbati taklif etilmaydi; dasturiy taqlid degani hamma narsa protsessorda ishlaydi |
| {{ui:Protsessor}} | Brauzer xabar qilgan protsessor yadrolari soni |
| {{ui:Xotira}} | Kompyuterda taxminan qancha xotira borligi, brauzer aytganda. Baʼzi brauzerlar buni koʻrsatmaydi |
| {{ui:Umumiy xotira}} | Sahifa oʻz ishchilari oʻrtasida xotirani ulashishi mumkinmi-yoʻqmi. Yoqilgan boʻlsa, har bir yadro bitta sahna nusxasida ishlashi mumkin; oʻchirilgan boʻlsa, har biriga oʻz nusxasi kerak, shuning uchun katta sahna bir vaqtda kamroq yadroga sigʻadi |
| {{ui:Tez protsessor kodi}} | Brauzer tezroq WebAssembly kodini ishga tushiradimi-yoʻqmi. Usiz sekinroq zaxira kod ishlatiladi |
| {{ui:Daraja}} | {{ui:Grafika kartasi, yuqori}}, {{ui:Grafika kartasi, oddiy}} yoki {{ui:Faqat protsessor}}, uning sababi pastda koʻrsatiladi |

## Daraja

Daraja [jonli koʻrinish](topic:live-view) qayerdan boshlanishini ({{ui:Bu kompyuter uchun}}), u nechta tarqoq elementni chizishini va koʻrinishda [subdivision sirt](topic:modifiers#subdivision-surface) nechta yuzni koʻrsatishi mumkinligini belgilaydi. Shunday qilib, oʻrnatilgan grafika chipi bor yoki umuman grafika kartasi yoʻq noutbuk ham tez javob beradi. Oʻrnatilgan yoki telefon grafika chipi yoki 4 GB yoki undan kam xotira hech qachon {{ui:Grafika kartasi, yuqori}} darajasini olmaydi.

:::note
Brauzerlar bir-biridan farq qiladi. Bir xil kompyuter bir brauzerda WebGPU, boshqasida "WebGL 2 only" koʻrsatishi mumkin. Linuxda aksariyat brauzerlarda hali WebGPU yoʻq.
:::
