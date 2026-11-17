---
title: Narsalarni bosma stoliga qoʻying va printerga yuboring
summary: Kutubxona elementlarini yoki oʻz modelingizni printer stoliga qoʻshing, joylashtiring, qatlamlangan koʻrinishni koʻrib chiqing va chop etishni USB yoki tarmoq orqali yuboring yoki G-kodni saqlang, avval STL eksport qilmasdan.
keywords: bosma bosqichi, 3d bosma, printer, stol, 3D printerga yuborish, slayser, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, kutubxona, joylashtirish, hammasini sigʻdirish, qatlam koʻrinishi, toʻldirish, tayanchlar, filament, pla, petg, qoʻshimcha, 3D bosma qoʻshimchasi
from: abcf5d7e
---

{{ui:Print stage}} narsalarni printeringizning stolida joylashtiradi, ularni qatlamlarga ajratadi va printerga yuboradi. Avval faylni eksport qilishingiz shart emas. U 3D Print qoʻshimchasiga tegishli, u standart holatda yoqilgan.

:::note
Bu bilan hali haqiqiy printerda hech narsa chop etilmagan. Slayser yangi: birinchi chop etishingizning birinchi qatlamlarini kuzating va yuborishdan oldin qatlam koʻrinishidan foydalaning.
:::

## Nima qilasiz

Modelni stolga qoʻying, sigʻishini tekshiring, qatlamlangan koʻrinishni koʻring va uni printerga yuboring yoki G-kodni saqlang.

## Bosqichlar

1. Asboblar panelidagi {{ui:Print stage}} tugmasini bosing. Koʻrinish ustida karta ochiladi va punktir kontur stolingizni koʻrsatadi.
2. **Kutubxonadan qoʻshish** ostida qidiruv maydoniga nom kiriting, {{ui:Search}} tugmasini bosing va natijada {{ui:Add}} ni bosing. Element stolga toʻliq oʻlchamda tushadi yoki sigʻishi uchun kichraytiriladi. Siz allaqachon chizgan yoki import qilgan va koʻrinishda koʻrinib turgan har qanday narsa ham stolda boʻladi.
3. **Stolda** ostida har bir elementning oʻlchamini tekshiring. **Stoldan tashqarida** deb belgilangan element koʻchirilishi kerak. Koʻrinishda narsalarni odatdagi asboblar bilan koʻchiring, aylantiring va oʻlchamini oʻzgartiring.
4. Narsalarni yoyish uchun {{ui:Arrange on the bed}} ni yoki ular sigʻguncha kichraytirish uchun {{ui:Fit all on the bed}} ni bosing.
5. **Printeringiz** ostida **Stol** oʻlchamini yoki printer profillaridan birini tanlang.
6. **Chop etish sozlamalari** ostida **Material**, **Sifat** va **Toʻldirish %** ni tanlang, va shakl kerak boʻlsa, **Osilgan qismlar ostiga tayanchlar qoʻshish** ni belgilang.
7. {{ui:Preview layers}} ni bosing va qatlamlarni koʻrish uchun **Qatlam** sirgʻasini suring. Agar keyin bosqichni yoki sozlamalarni oʻzgartirsangiz, {{ui:Preview layers}} ni qayta bosing.
8. **Ulanish** ostida {{ui:USB cable}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} yoki {{ui:PrusaLink}} ni tanlang. USB uchun {{ui:Connect}} ni bosing. Tarmoqli printer uchun uning **Manzil**ini kiriting (agar soʻrasa, **API kalit**ini ham), keyin {{ui:Test the connection}} ni bosing.
9. {{ui:Send to 3D printer}} ni bosing. Karta stol boʻsh va toʻgʻri material yuklanganini soʻraydi, vaqt, material va haroratlarni koʻrsatadi. Yuborish uchun tasdiqlang.

Printer ishga tushayotgani haqida xabar olasiz. {{ui:Stop the print}} isitgichlar, ventilyator va motorlarni oʻchiradi. Faqat fayl kerak boʻlsa, {{ui:Save the G-code instead}} ni bosing.

## Izohlar

- USB uchun kompyuterda Chrome yoki Edge kerak, va chop etish tugaguncha sahifa ochiq turishi kerak. Uni yopish oqimni toʻxtatadi.
- Tarmoqli printer bu saytga ruxsat berishi kerak (Moonraker da `cors_domains` ga qoʻshing; OctoPrint da CORS ni yoqing va API kalitni nusxalang). Brauzeringiz tarmogʻingizdagi qurilmalarga kirishga ruxsat soʻrashi mumkin.
- Sizning bosishingizsiz hech narsa ulanmaydi va yubormaydi.
- Slayserlar roʻyxati **Slayser** ostida. {{ui:CadCraft basic (included, fastest)}} ichiga oʻrnatilgan. Kiri:Moto, PrusaSlicer, OrcaSlicer va Bambu Lab P2S — ularning oʻz qoʻshimchalari; ularni karta ichidan yoki {{ui:Settings}} › {{ui:Add-ons}} ostidan yoqasiz. PrusaSlicer va OrcaSlicer oʻz nusxangizdan foydalanadi va kompyuterda CadCraft Studio dan ishlaydi.
- Yopiq jism boʻlmagan boʻlaklar chiqarib tashlanadi va karta shakldan qancha qismi shunday ekanini aytadi.
- Smola printerlar uchun qarang: [Smola printer uchun kesish](topic:resin-printing). Modelni avval tekshirish yoki tuzatish uchun [Tayanchlar, devor qalinligi, boʻshatish va tuzatish](topic:print-tools) ga qarang.
