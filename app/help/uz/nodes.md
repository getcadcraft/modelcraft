---
title: Tugunlar: simlar orqali model yasash
summary: Raqamlarni nuqtalarga, nuqtalarni egri chiziqlarga, egri chiziqlarni sirtlarga ulang. Raqamni oʻzgartirsangiz, undan keyingi hamma narsa qayta quriladi. Har bir tugun ham CraftScript qatori boʻladi, graf esa fayl ichida saqlanadi.
keywords: tugunlar, tugunlar muharriri, vizual skript, parametrik, graf, simlar, portlar, erkin shakl, freeform, nurbs, loft, ekstrudlash, aylantirib yasash, aylana, egri chiziq, sirt, seriya, diapazon, tasodifiy, roʻyxat, skript, craftscript
from: 9c8e254f
---

**Tugunlar** muharriri geometriyani qutilarni bir-biriga ulash orqali quradi. Har bir quti (tugun) bitta kichik vazifani bajaradi: raqam, nuqta, aylana yoki loft yaratadi. Bir tugunning natijasini keyingisining kirishiga ulaysiz va boshidagi raqamni oʻzgartirganingizda model unga ergashadi.

Uni oʻng panelidan oching: {{ui:Tugunlar}} › {{ui:Tugunlar…}}. Grafi bor fayl uni oʻzi ochadi. Bu 3D koʻrinish ustidagi oyna: uni sarlavha satridan torting — koʻchadi, burchagidan torting — oʻlchami oʻzgaradi.

## Ulash

1. Chapdagi roʻyxatdan tugun tanlang (qidiruv maydoniga yozib torayting; <kbd>Enter</kbd> birinchi mosini qoʻshadi). U kanvas oʻrtasida paydo boʻladi.
2. Bir tugunning oʻng tomonidagi yumaloq **chiqish** nuqtasidan boshqa tugunning chap tomonidagi yumaloq **kirish** nuqtasiga torting. Nuqta mos kelsa yashil, mos kelmasa qizil boʻladi; sababini bilish uchun ustiga koʻrsating.
3. Hech narsa ulanmagan kirish uchun yozma qiymat uchun quti chiqadi. Raqam kiriting va <kbd>Tab</kbd> bosing: natija qayta quriladi.
4. Tugun sarlavha satridagi kichik doira uning **koʻzi**. Koʻzi yoqilgan tugun 3D koʻrinishda chiziladi: egri chiziqlar chiziq sifatida, sirtlar soyalangan, nuqtalar esa nuqta sifatida.

Tugunni sarlavha satridan torting. Fonni torting — kanvas siljiydi, gʻildirakni aylantiring — kattalashadi. <kbd>Delete</kbd> tanlangan tugunni oʻchiradi. {{ui:Tartibga solish}} tugunlarni ustunlarga joylaydi, {{ui:Moslash}} hammasini koʻrinishga keltiradi, {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} tahrirlar boʻylab yuradi.

## Turlar va birliklar

Portlarning turi bor: raqam, ha/yoʻq, nuqta, vektor, egri chiziq, sirt, mesh, jism yoki barchasi uchun "geometriya". Nuqtani vektor kirishiga va orqaga ulash mumkin. Raqamlarning birligi bor: **uzunlik** millimetrda, **burchak** gradusda. Uzunlikni burchak kirishiga ulab boʻlmaydi, uzunlikni uzunlikka koʻpaytirish (maydon) esa rad etiladi, shuning uchun notoʻgʻri sim ulansa, uni ulash paytidayoq toʻxtatiladi.

Kvadrat nuqta **roʻyxat**dir. Roʻyxat bitta qiymatli kirishga yetganda, tugun har bir element uchun bir marta ishlaydi va natijasi roʻyxatga aylanadi. Qisqaroq roʻyxatning oxirgi elementi takrorlanadi. Masalan, balandliklarning **Seriya**si **Koʻchirish**ga berilsa, nusxalar ustuni hosil boʻladi.

## Jismlar va Bul amallari tugunlar sifatida

**Jismlar** guruhi Sirtlar panelidagi oʻsha aniq sirtlardan yopiq jismlar yasaydi: **Quti jism**, **Silindr jism** va **Shar jism** (oʻlchamlari mm da), **Birlashtirish**, **Ayirish** va **Kesishtirish** (ikkinchi jism birinchisidan olinadi; tolerantlik — jism dvigatelining uchburchaklari aniq sirtlardan qanchalik uzoqda boʻlishi mumkinligi), **Yuzlar orasida Fillet** (yuzlar jismdagi raqami boʻyicha, birinchisi 1; radius va, 0 dan katta boʻlsa, oxirdagi radius), **Jism hajmi** (mm³) va **Jismdan meshga** (uni koʻrish yoki modelga oʻtkazish uchun). Jismning oʻz port turi bor: nuqta yoki raqamni jism kirishiga ulab boʻlmaydi va nuqta qizil qoladi. Bul va Fillet tugunlari dasturning oʻz jism dvigatelidan foydalanadi, u muharrir birinchi marta ochilganda yuklanadi.

## Xatolar

Tugun oʻz vazifasini bajara olmasa, uning nomi ostida qizil rangda sababi chiqadi ("Radius noldan katta boʻlishi kerak."), undan keyingi tugunlar esa kutadi. Xuddi shu xabar Muammolar panelida ham **Muammo** sifatida chiqadi, shuning uchun uni oʻsha yerdan topishingiz mumkin.

## Har bir tugun — skript qatori

{{ui:Skript}} tugmasini bosing — graf CraftScript koʻrinishida chiqadi: har bir tugun uchun bitta qator, masalan `n3 = nd_circle(n2, n1, [0 0 1]);`. Matnni tahrirlab, {{ui:Grafikni shu skriptdan yaratish}} tugmasini bosing, shunda graf qayta tiklanadi. Xuddi shu `nd_` funksiyalari PartCraftdagi CraftScriptda ham ishlaydi, shuning uchun graf u yerda ishga tushirilishi, takrorlanishi yoki sinovdan oʻtkazilishi mumkin. Tasodifiy sonlar har doim **urugʻ** (seed) oladi, shuning uchun bir xil graf har bir kompyuterda bir xil natija beradi.

## Fayl bilan birga saqlanadi

Graf model faylida saqlanadi. Tugunlar oʻzlarining egri chiziqlari, sirtlari va meshlarini yaratadi: siz soʻramaguningizcha modelning yuzlarini oʻzgartirmaydi.

## Modelga oʻtkazish

Sirt yoki mesh yaratadigan tugunning koʻzini yoqing, soʻng Tugunlar oynasida {{ui:Modelga oʻtkazish}} tugmasini bosing. Koʻrsatilgan har bir sirt yoki mesh metrda modelga yuzlar guruhi sifatida tushadi va uni boshqa narsa kabi tahrirlash mumkin. Bu bitta Ortga qaytarish qadami. Graf qoladi, lekin nusxa unga endi ergashmaydi: raqamni oʻzgartiring va yangisini olish uchun yana oʻtkazing. Nuqtalar va egri chiziqlar jism emas, shuning uchun ular chiqarib tashlanadi va xabar ularning nechtasi chiqarilganini aytadi.
