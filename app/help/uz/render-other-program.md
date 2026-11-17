---
title: Rasmni boshqa dastur bilan chizish
summary: Bizning render dvigatelimiz Render rasmini chizadi; boshqa dastur uni faqat CadCraft Studio dagi render-dvigatel qoʻshimchasi orqali chizishi mumkin. Nima olib oʻtiladi va nega ba'zi dasturlar hech qachon taklif qilinmaydi.
keywords: render, dvigatel, tashqi dastur, qoʻshimcha dvigateli, studio, fon, navbat, usd, gltf, chizgan, blender, gpl
from: 150f94f1
---

{{ui:Render a picture…}} dagi rasm **bizning ichki dvigatellarimiz** chizadi: Tez va Path tracer, brauzerda va CadCraft Studio da. Boshqa dastur uni faqat **render-dvigatel qoʻshimchasi** olib kelganda chizishi mumkin: qarang [Qoʻshimcha orqali render dvigateli qoʻshish](topic:render-engine-addons). Sahnani boshqa dasturga olib borib, u yerda ishlashni davom ettirish uchun [Sahnani boshqa dasturda ochish](topic:render-open-in) yoki [Sahnani oʻyin dvigateliga yuborish](topic:render-unreal) dan foydalaning.

## Qoʻshimcha dvigateli bilan rasm chizish

1. Sozlamalar › Qoʻshimchalar da qoʻshimchani yoqing. Uning dvigateli {{ui:Render a picture…}} ning Dvigatel roʻyxatida paydo boʻladi.
2. Uni tanlang. Uning oʻz sozlamalari Dvigatel roʻyxati ostida koʻrinadi.
3. {{ui:Render}} ni bosing. Studio da, qoʻshimcha birinchi marta dastur ishga tushirganda, Studio buni oʻz dialogida soʻraydi. Chizish paytida jarayon koʻrinadi; {{ui:Stop}} uni tugatadi. Rasm uni chizgan dvigatel bilan belgilangan holda paydo boʻladi.

JavaScript da yozilgan dvigatel brauzerda ham ishlaydi. Bu kompyuterda dastur ishga tushiradigan dvigatel faqat Studio da ishlaydi; brauzerda u saqlanadigan fayl sifatida koʻrinadi.

## Nima olib oʻtiladi

Dvigatel **paket** oladi: model USD fayli sifatida (va u soʻrasa glTF fayl), hamda sozlamalar fayli — aniq material qiymatlari, quyosh va osmon, yoqilgan har bir lampa uning quvvati va yorugʻlik profili bilan, kamera va ekspozitsiya. Har bir dastur yorugʻlik, tonni va namunalarni oʻz usulida beradi, shuning uchun rasmlar kamera, quyosh, lampalar va ekspozitsiya boʻyicha oʻxshash, lekin piksel-piksel bir xil emas.

## CadCraft hech qachon ishga tushirmaydigan dasturlar

CadCraft hech qachon GNU GPL litsenziyasi ostidagi dasturni ishga tushirmaydi va uni hech qachon Dvigatel roʻyxatida yoki "… da ochish" maqsadi sifatida koʻrsatmaydi. Blender ulardan biri, shuning uchun u Dvigatel roʻyxatida yoʻq. {{ui:Render a picture…}} dan saqlangan USD yoki glTF fayl baribir u yerda, bu fayllarni oʻqiydigan har qanday dasturdagidek ochiladi.

:::note
Panorama va stereo kameralar hamda osmon rasmi (osmonning ranglari oʻrniga ishlatiladi) boshqa dasturga olib oʻtilmaydi. Boshqa dasturda qilingan hech narsa modelga qaytmaydi.
:::
