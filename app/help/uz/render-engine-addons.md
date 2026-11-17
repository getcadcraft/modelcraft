---
title: Qoʻshimcha orqali render dvigateli qoʻshish
summary: Qoʻshimcha Render dialogining Dvigatel roʻyxatiga nimani qoʻshishi mumkin, dastur ishga tushirish uchun qanday ruxsat kerakligi va Studio nimani tekshirib, nimani soʻrashi.
keywords: qoʻshimcha, addon, dvigatel, render dvigateli, ishlab chiquvchi, engine.run, ruxsat, dastur, skript, imzolangan, studio, api
from: cd7a39ba
---

Qoʻshimcha (Sozlamalar › Qoʻshimchalar) {{ui:Render a picture…}} ning Dvigatel roʻyxatiga dvigatel qoʻshishi mumkin. Qoʻshimcha mualliflari uchun toʻliq matn qoʻshimcha spetsifikatsiyasining 16-boʻlimida; qisqasi:

- Qoʻshimcha oʻzining nomi bilan boshlanadigan id bilan dvigatel roʻyxatdan oʻtkazadi, nomi, ixtiyoriy sozlamalari va **yoki** dastur ishga tushirish, **yoki** rasmni chizadigan JavaScript funksiyasi.
- Dastur ishga tushiradigan dvigatelga **`engine.run`** ruxsati kerak; u oʻrnatishdan oldin va Sozlamalarda koʻrsatiladi. U faqat Studio da ishlaydi; brauzerda u saqlanadigan fayl sifatida koʻrinadi.
- Qoʻshimcha dasturni nomlaydi (oddiy fayl nomi: hech qachon shell emas), **imzolangan qoʻshimcha ichida** joylashgan skriptni va oʻrin egallagichlar hamda oddiy soʻzlardan tuzilgan argumentlarni. Studio dasturni topadi yoki bir marta uni koʻrsatishingizni soʻraydi.
- Qoʻshimcha dastur birinchi marta ishga tushirganda, **Studio oʻz dialogida soʻraydi**: qaysi qoʻshimcha, qaysi dastur va skript dastur qila oladigan hamma narsani qila olishi. Faqat ishonchli qoʻshimchaga ruxsat bering. Javobingiz shu qoʻshimcha va dastur uchun eslab qolinadi.
- Paket (sahna USD va sozlamalar fayli, qoʻshimcha soʻragan holda glTF fayl bilan) yangi vaqtinchalik jildga tushadi, dastur oʻsha yerda ishlaydi va rasm qoʻshimchaning dvigatel nomi bilan belgilangan holda qaytadi.

:::note
Qoʻshimchalar faqat qoʻshimcha API 1.4 dan dvigatellar qoʻshishi mumkin. Ochiq kodli buyruq satri renderi uchun ishlangan misol oʻz omborida; u hali oʻsha render dasturida ishga tushirilmagan.
:::
