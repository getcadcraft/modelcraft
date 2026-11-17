---
title: Modelni 3D bosishga tayyorlash
summary: Model yopiqligini va yuzlari toʻgʻri yoʻnalganini tekshiring, oʻlchami, tagligi va qiyaliklarini koʻring, xatolarni tuzating va slayser uchun STL yoki 3MF sifatida yuklab oling.
keywords: 3d bosish, 3d chop etish, printer, bosish, slayser, stl, 3mf, yopiq, manifold, jism, teshiklar, ichki tashqi, qiyalik, tayanch, stol, millimetr, eksport, tuzatish, boʻshatish, stol oʻlchami, yangi boshlovchi, devor qalinligi, bosish asboblari
from: 948e19af
---

3D printer slayseri yopiq shaklni talab qiladi: teshiklar yoʻq, har bir yuz tashqariga qaragan, hech narsa oʻzidan oʻtmagan. {{ui:Eksport}} › {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} faylni yuklashdan oldin aynan shularni qidiradi.

## Tekshirish va yuklab olish

1. Bosiladigan narsani tanlang: bir yoki bir nechta guruh yoki komponent, yoki baʼzi yuzlar. Hech narsa tanlanmagan boʻlsa, koʻrinadigan hamma narsa bosiladi.
2. {{ui:Fayl}} guruhidagi {{ui:Eksport}} ni bosing, soʻng {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} ni.

   Dialog bitta qator bilan boshlanadi: "Bosishga tayyor", bosishdan oldin tuzatiladigan narsalar soni yoki avval koʻrib chiqish kerak boʻlgan narsalar soni. Har bir muammoda uch qism bor: nima notoʻgʻri, nima uchun muhim va nima qilish kerak. Soʻng millimetrdagi oʻlcham, hajm, uchburchaklar soni va printer stolingiz keladi.

3. Agar dialogda tuzatiladigan narsalar roʻyxati boʻlsa, {{ui:Tuzatish mumkin boʻlganlarini tuzatish}} ni bosing (pastda). Tekshiruv oʻzi qayta ishlaydi.
4. {{ui:3MF yuklab olish}} yoki {{ui:STL yuklab olish}} ni bosing.

Koʻrinadigan narsa bosiladi: yashirin yuzlar, yashirin guruhlar va komponentlar, hamda yashirin tegdagi narsalar chiqarib tashlanadi. Oʻlchamlar doim millimetrda — slayserlar kutadigan birlikda — model qaysi birlikda koʻrsatilishidan qat'iy nazar.

:::tip
Slayseringiz oʻqiy oladigan boʻlsa, 3MF ni afzal koʻring: u ranglar va birliklarni saqlaydi. STL da ikkalasi ham yoʻq, slayserlar esa millimetr deb hisoblaydi.
:::

## Tekshiruv nimani qidiradi

Bular bosishni toʻxtatadi yoki buzadi va dialog "Bosishga tayyor emas" deydi:

| Muammo | Nima degani | Nima qilish |
|---|---|---|
| Faqat bir tomonda yuz | Teshik: qirrada bir tomonda yuz bor, ikkinchi tomonda hech narsa yoʻq | Yetishmayotgan yuzni chizing (boʻshliq boʻylab chiziq uni koʻpincha yopadi), yoki pastdagi {{ui:Tuzatish}} dan foydalaning |
| Uch yoki undan koʻp yuz tomonidan ulashilgan | Yuzlar qanotda yoki jism ichidagi devorda uchrashadi | Ichki yuzni oʻchiring |
| Yuzlar qarama-qarshi tomonga qaragan | Ba'zi yuzlar ichkariga, ba'zilari tashqariga qaraydi | Ichkariga qaragan yuzlarni tanlang va {{ui:Obyekt maʼlumoti}} dagi {{ui:Yuzni teskari aylantirish}} ni bosing |
| Ichki tashqariga | Butun yopiq qism ichkariga qaraydi | Uning yuzlarini tanlang va teskari aylantiring |
| Oʻzidan oʻtadi | Bir qism oʻzidan oʻtib buklanadi | {{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Model bilan kesishtirish}}, soʻng ichidagini oʻchiring. Qarang: [Yuzlarni kesishtirish](topic:intersect) |

Bular ogohlantirishlar: model bosiladi, lekin avval koʻrib chiqing.

- **Alohida qismlar ustma-ust tushadi** yoki **yuzma-yuz tegadi**: slayserlar odatda ularni bitta qilib birlashtiradi. Toza fayl uchun ularni {{ui:Jismlar}} › {{ui:Birlashtirish}} bilan qoʻshing. Qarang: [Jism asboblari](topic:solids).
- **Pastda hech narsa tekis yotmaydi**: modelni shunday aylantiringki, bir yuz stolga tegsin, aks holda slayser tayanch yoki plot qoʻshadi.
- **Tik holatdan 45° dan koʻproq tashqariga ogʻadi**: bu yuzlarga tayanch kerak. Dialog yuzaning qancha qismi shunday ekanini aytadi.
- **Eni 1 mm dan kam**: ehtimol notoʻgʻri birlikda yasalgan. Holat panelidagi birlikni tekshiring.

Yarim boʻsh qism (ichidagi yopiq qobiq) yaxshi: uning yuzlari boʻshliqqa qaraydi va hajmi olib tashlanadi.

## Xatolarni tuzatish

Dialogdagi **Muammolar joyi** ostida har bir guruh yoki komponent nomi koʻrsatiladi, notoʻgʻri narsasi bilan birga (guruhda boʻlmagan erkin yuzlar "Guruhda boʻlmagan yuzlar" deb roʻyxatga olinadi). Bir necha marta joylashtirilgan komponent bir marta roʻyxatga olinadi: uni tuzatish har bir nusxani tuzatadi.

- {{ui:Koʻrsatish}} oʻsha guruhni ochadi va notoʻgʻri qirra va yuzlarni tanlaydi, shunda ular yoritilgan koʻrinadi.
- {{ui:Tuzatish mumkin boʻlganlarini tuzatish}} ularning hammasini bir vaqtda tuzatadi: tekis qirralari bor teshiklarni yopadi, shakl ichidagi yuzlar va erkin qirralarni oʻchiradi va yuzlarni toʻgʻri tashqariga aylantiradi. Bu bitta qadam: {{key:Mod+Z}} uni bekor qiladi. Soʻng tekshiruv yana ishlaydi va qolganini koʻrsatadi.

Qoʻlda tuzatib boʻlmaydigan narsalar (tekis boʻlmagan qirralari bor teshik, oʻzidan oʻtadigan qism) roʻyxatda qoladi, qoʻlda nima qilish kerakligi bilan. {{ui:Bosish asboblari}} ostidagi {{ui:Tuzatish}} koʻproq narsani qiladi: tekis boʻlmagan teshiklarni yopadi, erkin boʻlaklar va takroriy yuzlarni olib tashlaydi va har bir tuzatishni roʻyxatlaydi. Qarang: [Tayanchlar, devor qalinligi, boʻshatish va tuzatish](topic:print-tools#repair). Bitta guruhni ham tuzatishingiz mumkin: uni tanlang, soʻng {{ui:Obyekt maʼlumoti}} da {{ui:Muammolarni koʻrsatish}} va {{ui:Tuzatish}} ni ishlating. Qarang: [Jism asboblari](topic:solids).

## Boʻshatilgan qism

{{ui:Boʻshatish}} ({{ui:Bosish asboblari}} ostida) qismni koʻrsatilgan devor qalinligigacha boʻshatadi, bosgan joyingizda drenaj teshiklari bilan. Qarang: [Boʻshatish](topic:print-tools#hollow).

Boʻshliqni oʻzingiz ham chizishingiz mumkin: qismning ichidagi yopiq guruh, unga tegmagan, barcha yuzlari boʻshliqqa qaragan holda teskari aylantirilgan. Tekshiruv uni boʻshliq deb sanaydi va hajmini olib tashlaydi; u tuzatiladigan narsalar roʻyxatiga kirmaydi.

## Printer stoli

{{ui:Sozlamalar}} › {{ui:ModelCraft}} › {{ui:3D printer stoli}} da printer stolingiz oʻlchamini tanlang. Tekshiruv model stoldan katta boʻlsa ogohlantiradi, ikki yoʻnalishda ham. Qarang: [Sozlamalar](topic:settings#3d-printer-bed).

## Bosish asboblari

Dialog natijalari ostida **Bosish asboblari** {{ui:Tayanchlar koʻrinishi}} (tayanchlar qayerga va taxminan qancha ketishi), {{ui:Devor qalinligi}} (bosish uchun juda yupqa devorlar), {{ui:Boʻshatish}} va {{ui:Tuzatish}} ni ochadi. Qarang: [Tayanchlar, devor qalinligi, boʻshatish va tuzatish](topic:print-tools). {{ui:Bosma uchun boʻlish}} stolga sigʻmaydigan modelni ulagichlar va raqamlangan birikmalar bilan boʻlaklarga boʻladi: qarang [Katta modelni bosish uchun boʻlish](topic:print-split).

## Tekshirilmaydi

Tekshiruv slayslamaydi: sopingiz chiza olmaydigan juda mayda detallar va haqiqiy tayanchlar slayseringizga tegishli. Qarang: [Hali qurilmagan](topic:not-built-yet#3d-printing).
