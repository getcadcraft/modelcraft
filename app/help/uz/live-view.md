---
title: Jonli koʻrinish
summary: Modelning yonida uni real vaqt koʻrinishida, quyosh va soyalar bilan koʻrsatadigan oyna; siz qilgan har bir oʻzgarishni kuzatadi. Ichida yuring, kun vaqtini va oyni sozlang.
keywords: ulashish, panorama, 360, tur, virtual tur, mustaqil koʻruvchi, oflayn koʻruvchi, mijozga yuborish, video, yurish videosi, sochish, oʻt, oʻtloq, oʻrmon, toshlar, oʻsimliklar, daraxtlar, odamlar, oʻsimliklarni boʻyash, jonli koʻrinish, real vaqt, real vaqt render, yurish, ichida yurish, birinchi shaxs, taqdimot, mijoz, ikkinchi ekran, ikkinchi oyna, monitor, kun vaqti, quyosh, fasl, oy, soyalar, atrof soyasi, aks etishlar, qaytgan yorugʻlik, global illumination, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} ilova ustida panel ochadi, u modelni real vaqt koʻrinishida koʻrsatadi: modelingizning joyi va sanasiga koʻra osmon va quyosh, quyosh soyalari, sirtlarga bergan koʻrinishlar va materiallar, lampalar hamda devor va polalardan qaytgan yorugʻlik. U siz qilgan ishni kuzatib boradi: koʻrinishni aylantirsangiz, u ham aylanadi; modelni oʻzgartirsangiz, bir zumdan soʻng oʻzgarishni koʻrsatadi. Hech narsa yuklanmaydi.

## Ochish

1. {{ui:Export}} › {{ui:Live view}} ni tanlang. Panel pastki oʻng burchakda ochiladi.
2. Uni koʻchirish uchun sarlavha satrini suring, kattalashtirish uchun burchagini torting.
3. {{ui:New window}} uni ikkinchi ekran uchun alohida oynaga koʻchiradi. {{ui:Export}} › {{ui:Live view in a new window}} uni darhol oʻsha yerda ochadi. Agar brauzeringiz qalqib chiquvchi oynalarni bloklasa, u panel sifatida ochiladi.
4. {{ui:Close}} uni yopadi.

## Boshqaruv elementlari

| Boshqaruv | Nima qiladi |
|---|---|
| {{ui:Follow the view}} | Yoqilgan boʻlsa: jonli koʻrinish ModelCraft koʻrinishi qaragan joyga qaraydi. Yurish uni oʻchiradi |
| {{ui:Walk}} | Modelni kezib chiqish (quyida) |
| {{ui:Gravity}} | Yurish paytida: poldan turib zinadan chiqish. Oʻchiq boʻlsa: uchish |
| {{ui:Time}} | Kunning soati, 05:00 dan 21:00 gacha. Siz sudrasangiz quyosh harakatlanadi |
| {{ui:Month}} | Oy (uning 21-kuni), shunda qishda va yozda quyoshni koʻrishingiz mumkin |
| {{ui:Quality}} | {{ui:Bu kompyuter uchun}} ([sizning kompyuteringiz](topic:your-machine) oladigan), yoki {{ui:Past}}, {{ui:Oʻrta}} yoki {{ui:Yuqori}} |

Pastki qatorda koʻrinishni qaysi texnologiya chizishi (WebGPU yoki WebGL 2), sifat va qaytgan yorugʻlik koʻrsatiladi.

## Modelni kezib chiqish

1. Asosiy koʻrinishni turmoqchi boʻlgan joyga buring va {{ui:Walk}} ni tanlang. Siz koʻrinishning koʻz nuqtasi ostidagi polda, 1.6 m balandlikda turasiz.
2. Jonli koʻrinishni bosing, soʻng {{key:W}} {{key:A}} {{key:S}} {{key:D}} yoki strelka tugmalaridan foydalaning. Yugurish uchun {{key:Shift}} ni ushlab turing. Atrofga qarash uchun suring.
3. 40 sm gacha qadamlar koʻtariladi (zinalar); undan balandroq narsa devor hisoblanadi. Devorlar sizni toʻxtatadi va siz ularning boʻylab suriladi.
4. {{ui:Gravity}} oʻchiq boʻlsa, siz uchasiz: {{key:E}} yuqoriga, {{key:Q}} pastga.
5. {{key:Esc}} yurishni toʻxtatadi.

## Oʻsimliklar, toshlar va odamlarni sochish

Jonli koʻrinish panelidagi {{ui:Scatter}} rasm yonida sochish panelini ochadi. Sochish toʻplami atrof-muhit kutubxonasidagi narsalarni (daraxtlar, butalar, oʻt, gullar, toshlar, odamlar, mashinalar) modelning bir qismiga tarqatadi. Bu narsalar faqat jonli koʻrinishda chiziladi: ular modeldagi geometriya emas va asosiy koʻrinishda koʻrinmaydi.

1. **Sirtlarni toʻldirish:** ModelCraftʼda sirtlarni (yoki relyef kabi guruhni) tanlang, soʻng {{ui:Fill selection}} ni tanlang. Toʻplam ularni qoplaydi.
2. **Boʻyash:** {{ui:Paint}} ni tanlang, soʻng jonli koʻrinish ustida suring. Sirtlar tanlangan boʻlsa, boʻyoq faqat ularga tushadi; hech narsa tanlanmagan boʻlsa, choʻtka ostidagi har qanday narsaga, shu jumladan yerga ham tushadi. {{ui:Brush size}} choʻtkani sozlaydi; {{ui:Eraser}} boʻyalgan dogʻlarni olib tashlaydi.
3. Sochiladigan narsalarni belgilang. Har birining yonidagi raqam uning ogʻirligi: 3 va 1 har bir ikkinchisidan uchta birinchisini hosil qiladi.

| Boshqaruv | Nima qiladi |
|---|---|
| {{ui:m² uchun}} | Har bir kvadrat metrda nechta narsa |
| {{ui:Uzoqlik (m)}} | Boshqa obyektlardan bundan yaqinroq narsa boʻlmaydi va tom yoki stol ostida ham yoʻq. 0 uni oʻchiradi |
| {{ui:Burilish (°)}} | Har bir narsa vertikal oʻq atrofida tasodifiy qanchaga burilishi |
| {{ui:Eng tik (°)}} | Sirt bundan tikroq boʻlgan joylarda narsa boʻlmaydi |
| {{ui:Oʻlcham}} | Eng kichik va eng katta oʻlcham, narsaning oʻz oʻlchamiga koeffitsiyent sifatida |
| {{ui:Balandlik, dan va gacha (m)}} | Faqat shu balandliklar orasida (boʻsh = istalgan) |
| {{ui:Sirt bilan egilish}} | 0 narsalarni tik saqlaydi; 1 ularni nishabga nisbatan tik turgizadi |
| {{ui:Urugʻ}}, {{ui:Aralashtirish}} | Bir xil urugʻ har doim bir xil sochishni beradi; Aralashtirish boshqasini tanlaydi |

Toʻplamlar `.modelcraft` faylida saqlanadi va siz ularni oʻzgartirganingizda, ular qoplagan sirtlarga ergashadi. Jonli koʻrinish eng koʻpi bilan qancha narsa chizishi [sizning kompyuteringiz](topic:your-machine) darajasiga bogʻliq: {{ui:Faqat protsessor}} uchun 20 000, {{ui:Grafika kartasi, oddiy}} uchun 100 000, {{ui:Grafika kartasi, yuqori}} uchun million. Panelda zichlik talab qiladigan miqdordan qancha joylashtirilganini koʻrsatadi: byudjetga yetganda yoki obyektlar ularni chetlatganda kamroq joylashtiriladi. Kamera yaqinidagi narsalar oʻzidek chiziladi; uzoqdagilar esa rangli oddiy shakllar sifatida.

:::note
Sochilgan narsalar jonli koʻrinishda (uning yurishi, panoramalari va mustaqil koʻruvchisida) boʻladi. Rasm renderini yaratish hozircha ularni chizmaydi.
:::

## Ulashish: panoramalar, turlar, koʻruvchi, video

Jonli koʻrinish panelidagi {{ui:Share}} jonli koʻrinishdan fayllar yaratadi. Hammasi shu kompyuterda yaratiladi; hech narsa yuklanmaydi.

| Tanlov | Nima olasiz |
|---|---|
| {{ui:360° panorama}} | Koʻrinish turgan joydan (yoki yurgan joyingizdan) 360° rasm, panorama koʻruvchilari va koʻpchilik foto saytlar ochadigan equirectangular PNG shaklida |
| {{ui:Bu nuqtani turga qoʻshish}}, soʻng {{ui:Turni saqlash}} | Bitta veb-sahifa: har bir nuqtada panorama va har biri koʻra oladigan nuqtalarga oʻqlar bilan (orada devor boʻlsa, oʻq yashiriladi) |
| {{ui:Koʻruvchini saqlash}} | Bitta veb-sahifa: model shu real vaqt koʻrinishida, uni buring, ichida yuring, saqlangan sahnalariga oʻting. U brauzerda WebGPU yoki WebGL 2 bilan oflayn ochiladi, papkadan, USB flesh-xotiradan yoki elektron pochtadan, oʻrnatishsiz va hisobsiz, va internetdan hech narsa yuklamaydi |
| {{ui:Yoʻl videosi}} | Vaqt chizigʻidagi kamera yoʻli (yoki saqlangan sahnalar tartibda) shu real vaqt koʻrinishida, jonli koʻrinish oʻlchamida video sifatida: brauzer yaratishi mumkin boʻlsa WebM yoki MP4, aks holda ZIP ichida raqamlangan rasmlar |

Panoramaning oʻlchami sifatga bogʻliq: Past, Oʻrta va Yuqori sifatda kengligi 1024, 2048 yoki 4096 piksel. Koʻruvchi fayli modeldan tashqari taxminan 5 MB.

:::note
Tur va koʻruvchi namoyish uchun yaratiladi, tahrirlash uchun emas: saqlaganingizda model oʻsha holatda qoladi.
:::

## Sifat

| | Past | Oʻrta | Yuqori |
|---|---|---|---|
| Quyosh soyalari | bitta soya xaritasi | uchta kaskad | toʻrtta kaskad |
| Atrof soyasi (ambient occlusion, kontakt soyalar) | | ✓ | ✓, nozikroq |
| Metalldagi akslar | | | ✓ |
| Bloom (Rasm renderini yaratish sozlaganda) | | ✓ | ✓ |
| Qirralarni silliqlash | FXAA | bir necha kadr davomida (TAA) | bir necha kadr davomida (TAA) |
| Qaytgan yorugʻlik | yirik | nozikroq | eng nozik |

{{ui:Bu kompyuter uchun}} foydalanish mumkin boʻlgan grafika kartasi boʻlmagan kompyuterda {{ui:Past}}ni, oʻrnatilgan grafika chipi bilan {{ui:Oʻrta}}ni, alohida grafika kartasi bilan {{ui:Yuqori}}ni tanlaydi. Past 8 GB li, grafika kartasi boʻlmagan noutbuk uchun moʻljallangan.

## Qaytgan yorugʻlik

Quyosh tushgan devordan polga qaytgan yorugʻlik va xonaning qorongʻi ichki qismi [renderlangan rasmlar](topic:render) yaratadigan oʻsha yoʻl kuzatuvchisi bilan hisoblanadi: u model boʻylab nuqtalarda kichik panorama renderlaydi, har bir protsessor yadrosida fonda. U ishlayotganda pastki qatorda {{ui:Yorugʻlik aksi: 40 %}} yoziladi; tayyor boʻlganda koʻrinish uni qabul qiladi. Oʻzgarishdan soʻng u qaytadan boshlanadi.

:::note
Bu jonli koʻrinish uchun taxminiy hisob, renderlangan rasm emas: nuqtalar orasidagi kichik tafsilotlar yaqin nuqtalarning qaytgan yorugʻligini oladi. Tayyor rasm uchun [Rasm renderini yaratish](topic:render) dan foydalaning.
:::

## Yorqinlik va ranglar

Jonli koʻrinish [Rasm renderini yaratish](topic:render) bilan bir xil yorqinlik, oq balans, kontrast va koʻrinish oʻzgartirishini (ACES, AgX, filmic yoki standart) ishlatadi: ularni u yerda sozlang, jonli koʻrinish ergashadi.

:::note
Brauzerlar farq qiladi. WebGPU mavjud boʻlgan brauzerlarda (Windows, macOS va ChromeOS dagi Chrome va Edge, Safari 26) jonli koʻrinish undan foydalanadi; boshqa joylarda (Linux dagi koʻpchilik brauzerlar, eski Apple tizimlari) u WebGL 2 dan foydalanadi va bir xil koʻrinadi.
:::
