---
title: Rasmni qaysi dastur chizishini tanlash
summary: Render dialogidagi Dvigatel tanlovi, bizning ikkita dvigatelimiz, CadCraft Studio dagi boshqa dasturlar va veb nima qilishi haqida.
keywords: render, dvigatel, renderer, render dvigateli, plagin, plugin, studio, tashqi dastur, chizgan, navbat, qoʻshimcha dvigateli
from: be4b056a
---

{{ui:Render a picture…}} da **Rejim** dan yuqorida **Dvigatel** tanlovi bor. Bizning ikkita dvigatelimiz doim mavjud va hamma joyda ishlaydi; qoʻshimchalar yana qoʻshishi mumkin, CadCraft Studio da esa roʻyxatda sahnani oʻz qoʻliga oladigan dasturlar ham boʻladi.

| Dvigatel | Nima qiladi | Qayerda |
|---|---|---|
| Ichki: Tez | Tez rasm: kunduzgi yorugʻlik, yumshoq soyalar, shisha va metall koʻrinishlari, soniyalarda | Brauzer va Studio |
| Ichki: Path tracer | Yuzalar orasida yorugʻlik sakrashi, grafik kartangizda yoki protsessoringizda, render navbati va tarmogʻingizdagi boshqa kompyuterlar | Brauzer va Studio |
| Qoʻshimchaning dvigateli | U chizadi va rasmni qaytaradi: [Rasmni boshqa dastur bilan chizish](topic:render-other-program) ga qarang | Brauzer (JavaScript da yozilgan dvigatel) yoki Studio (dastur ishga tushiradigan dvigatel) |
| Sahnani oʻz qoʻliga oladigan dastur | Studio sahnani oʻz jildiga qoʻyadi va uni yangilab turadi | Studio |
| … da ochish | Sahnani saqlaydi va dasturda ochadi; hech narsa qaytmaydi: [Sahnani boshqa dasturda ochish](topic:render-open-in) ga qarang | Veb faylni saqlaydi |

## Tanlov qanday ishlaydi

- Tez yoki Path tracer ni tanlash **Rejim** ni ham oʻzgartiradi va teskarisi. Dialogning boshqa hech narsasi, boshqa dvigatellardan foydalanmaydiganlar uchun oʻzgarmaydi.
- Mavjud boʻlmagan dvigatel roʻyxatda qoladi, sababi bilan ("topilmadi", "yangi versiya kerak"); uni tanlab boʻlmaydi. Brauzerda faqat Studio da ishlaydigan dvigatel "fayl saqlaydi" deb koʻrsatiladi: {{ui:Render a picture…}} sahnani va uning sozlamalarini oʻsha dasturga olib boradigan faylga saqlaydi.
- Tanlov fayl render sozlamalari bilan birga saqlanadi, va oxirgi tanlagan dvigatelingiz oʻz tanlovi boʻlmagan fayllar uchun boshlangʻich dvigatel boʻladi.
- Boshqa dasturdan kelgan rasm qaysi dastur uni chizganini va uning versiyasini dialogda ham, render navbatida ham aytadi. [Render](topic:render) sahifasidagi kafolatlar faqat **bizning** dvigatellarimizga tegishli: boshqa dastur yorugʻlik, tonni va namunalarni oʻz usulida beradi, shuning uchun bir sahnaning ikki rasmi kamera, quyosh, lampalar va ekspozitsiya jihatidan oʻxshash boʻladi, lekin piksel-piksel bir xil emas.

## Har bir dvigatel nimani oladi

Sahna boshqa dasturga **paket** sifatida boradi: model USD fayli (xuddi [USD sifatida saqlash](topic:usd) yozadigan fayl) va sozlamalar fayli. Unda USD import qiluvchiga ishonib boʻlmaydigan narsalar bor: aniq material qiymatlari, yoqilgan lampalar ularning quvvati va yorugʻlik profillari bilan, quyosh, osmon, ekspozitsiya va dialog chizadigan kamera. Hech narsa hech qayerga yuklanmaydi.

## Render navbati

Boshqa dastur uchun rasm yoki animatsiya xuddi bizniki kabi [render navbati](topic:render#the-render-queue) da kutishi mumkin; uning vazifasi qaysi dvigatel uchunligini eslab qoladi. Animatsiya dasturga bir yurishda boradi.
