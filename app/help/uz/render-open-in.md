---
title: Sahnani boshqa dasturda ochish
summary: Sahnani USD yoki glTF fayl sifatida oʻqiydigan istalgan dastur uchun saqlang yoki CadCraft Studio dan kompyuterdagi dasturda oching.
keywords: ochish, usd, gltf, glb, eksport, render dasturi, archviz, studio, usdview, yuborish, uzatish, paket, unreal jildi
from: 812329d5
---

{{ui:Render a picture…}} ning Dvigatel roʻyxatidagi **… da ochish** yozuvlaridan birini tanlang, va sahnani boshqa dasturga olib boring. Modelga hech narsa qaytmaydi.

## Har qanday dastur uchun fayl

- **USD fayl** sahnani `.usdc` (yoki modelda rasmlar boʻlsa `.usdz`) sifatida saqlaydi: [USD sifatida saqlash](topic:usd) bilan bir xil fayl, material, lampalar va kameralar bilan. U nusxalashlarni va aniq material qiymatlarini saqlaydi. Koʻpchilik renderlar, oʻyin dvigatellari va koʻrish dasturlari USD ni oʻqiydi.
- **glTF fayl (.glb)** yengilroq glTF 2.0 faylini material, tekstura va lampalar bilan saqlaydi; ModelCraft yozadigan formatlar uchun [Modelni boshqa dasturlar uchun eksport qilish](topic:export-model) ga qarang.

- **Unreal loyiha jildi (.zip)** [Sahnani oʻyin dvigateliga yuborish](topic:render-unreal) yozadigan jildni saqlaydi, istalgan kompyuterdagi loyiha uchun.

Uchalasi ham brauzerda va Studio da ishlaydi.

## Studio da: dasturda ochish

Studio kompyuteringizda sahnani ocha oladigan dasturlarni roʻyxatlaydi: qidiruv yoʻlingizda boʻlsa usdview, va fayl turi uchun kompyuterning oʻz dasturi. Birini tanlang, USD yoki glTF ni (ikkalasini oʻqiydigan joyda) tanlang va {{ui:Render}} ni bosing. Studio paketni **Hujjatlar** ichidagi yangi jildga yozadi (`CadCraft hand-off`; hech narsa ustiga yozilmaydi, har bir yuborish oʻz jildiga ega) va dasturni oʻsha jildda ishga tushiradi, keyin fayllar qayerdaligini aytadi.

| Dastur | Eng yaxshi oʻqiydi |
|---|---|
| usdview | USD |
| Kompyuterning oʻz dasturi | Fayl turi uchun kompyuterda nima boʻlsa |

Studio faqat shu qat'iy roʻyxatdagi dasturlarni ishga tushiradi; sahifa nom boʻyicha soʻragan hech narsani ishga tushirmaydi va hech qachon GNU GPL litsenziyasi ostidagi dasturni ishga tushirmaydi (qarang: [Rasmni boshqa dastur bilan chizish](topic:render-other-program#programs-cadcraft-never-runs)). USD yoki glTF ni oʻqiydigan har qanday dastur yuqoridagi **Har qanday dastur uchun fayl** dan faylni ochadi.

:::note
Twinmotion, Enscape va boshqa vizualizatsiya dasturlari roʻyxatda yoʻq: CadCraft ular bilan tekshirilmagan va ular haqida hech narsa daʼvo qilmaydi. Bu yerdan kelgan glTF yoki USD fayl kirish yoʻli boʻladi.
:::
