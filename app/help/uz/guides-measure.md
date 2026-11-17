---
title: Oʻlchash va yoʻriqnomalarni joylashtirish
summary: Uzunlik va maydonlarni oʻqing, lenta bilan ikki nuqta orasini oʻlchang, hamda chizish uchun yoʻriqnoma chiziqlari va nuqtalarini joylashtiring.
keywords: oʻlchash, oʻlchov lentasi, transportir, burchak, qiya yoʻriqnoma, yoʻriqnoma, yoʻriqnoma chizigʻi, qurilish chizigʻi, masofa, oʻlcham, uzunlik, maydon, siljitish, joylashuv, yoʻriqnoma nuqtasi
from: de6d04d9
---

## Oʻlchamlarni oʻlchamasdan oʻqish

Biror narsani tanlang va {{ui:Obyekt maʼlumoti}} ga qarang:

- Qirra oʻzining **uzunligini** koʻrsatadi.
- Yuza oʻzining **maydonini** va nechta teshigi borligini koʻrsatadi.
- Bir necha yuza **umumiy maydonini** koʻrsatadi.
- Guruh yoki komponent oʻzining **oʻlchamini** (atrofidagi qutining eni × chuqurligi × balandligi) va agar yopiq yaxlit jism boʻlsa, **hajmini** koʻrsatadi.
- Hech narsa tanlanmagan boʻlsa, {{ui:Obyekt maʼlumoti}} butun modelning oʻlchamini koʻrsatadi.

Uzunlik va maydonlar pastki oʻngdagi tanlagichdagi birlikda koʻrsatiladi. Millimetrli modelda 0.01 m² va undan katta maydonlar kvadrat metrda koʻrsatiladi (4 × 3 m xona "12 m²" deb oʻqiladi).

Chizish paytida qiymat maydoni jonli uzunlikni, oʻlchamni, radiusni yoki masofani koʻrsatadi, shuning uchun chizgandan keyin kamdan-kam oʻlchash kerak boʻladi.

Chizgandan keyin oʻlchamni oʻzgartirish uchun qirra yoki guruhni tanlang va {{ui:Obyekt maʼlumoti}} ichida uzunlik yoki oʻlchamni qayta kiriting. Yoki [oʻlcham](topic:dimensions) joylashtirib, unga yangi uzunlik kiriting.

## Ikki nuqta orasini oʻlchash

1. {{ui:Oʻlchov lentasi}} uchun {{key:T}} tugmasini bosing.
2. Nuqtani bosing: burchak, oʻrta nuqta, yuzadagi nuqta yoki yer. (Qirrani bosish boshqa ish bajaradi; pastga qarang.)
3. Ikkinchi nuqtaga koʻching. Uchi va qiymat maydoni ({{ui:Uzunlik}}) masofani koʻrsatadi. U nuqtalarga hamda qizil, yashil va koʻk yoʻnalishlarga tutiladi.
4. Bosing. Holat satrida "Oʻlchandi: 4' 6"." deb chiqadi va ikkinchi nuqtada **yoʻriqnoma nuqtasi** qoldiriladi.

Yoʻriqnoma nuqtasini aniq masofada qoldirish uchun, buning oʻrniga, birinchi bosishdan keyin masofani kiriting va {{key:Enter}} tugmasini bosing: u koʻrsatgan yoʻnalishda joylashadi.

## Yoʻriqnoma chizigʻini joylashtirish

Yoʻriqnoma chizigʻi — tanlagan masofada qirraga parallel joylashgan cheksiz shtrixli chiziq. Yoʻriqnomalar chekinish, qavat balandligi yoki deraza qayerdan boshlanishini belgilash uchun ishlatiladi.

1. {{key:T}} tugmasini bosing.
2. **Qirra** ustiga bosing (uning uchiga emas). Maslahatda "Qirrada" deb chiqadi.
3. Yoʻriqnoma qaysi tomonga borishi kerak boʻlsa, qirradan oʻsha tomonga chiqing. Qirraga parallel shtrixli chiziq ergashadi va qiymat maydoni ({{ui:Siljitish}}) masofani koʻrsatadi.
4. Bosing yoki siljishni kiriting va {{key:Enter}} tugmasini bosing: `1.5m`, `5'`.

   Holat satrida: "Yoʻriqnoma chizigʻi qirradan 1.5 m uzoqlikda." deb chiqadi.

Mavjud yoʻriqnoma chizigʻida boshlasangiz, unga parallel yana bir yoʻriqnoma yaratiladi, shuning uchun bitta yoʻriqnomadan setkani qadamlab chiqarish mumkin.

Agar qirradan avval chiqmasdan siljishni kiritsangiz, ModelCraft qaysi tomon kerakligini aniqlay olmaydi: "Qaysi tomon ekanini koʻrsatish uchun avval qirradan chiqing."

## Burchakdagi yoʻriqnoma: Transportir

1. {{ui:Oʻzgartirish}} guruhidagi {{ui:Transportir}} tugmasini bosing.
2. Markazni bosing: yoʻriqnoma oʻtadigan nuqta. Yuzada transportir oʻsha yuzada yotadi; boshqa joyda tekis yotadi. Shu bosishdan keyin {{key:Right}}, {{key:Left}} yoki {{key:Up}} uni qizil, yashil yoki koʻk tomonga tik turgizadi (bekor qilish uchun yana bosing).
3. 0° ni belgilaydigan nuqtani bosing, masalan qirra boʻylab.
4. Kerakli burchakka koʻchib bosing: u 15° qadamlarga tutiladi. Yoki burchakni gradusda kiriting, masalan `22.5`, va {{key:Enter}} tugmasini bosing; yoʻriqnoma kursor turgan tomonga boradi.

Yoʻriqnoma chizigʻi markaz orqali oʻsha burchakda oʻtadi. Tom qiyaligi, faska yoki qiya devor uchun uning boʻylab {{ui:Chiziq}} bilan chizing.

## Yoʻriqnomalar boʻylab chizish

Chizish asboblari yoʻriqnoma chiziqlariga ("Yoʻriqnomada") va yoʻriqnoma nuqtalariga ("Yoʻriqnoma nuqtasi") tutiladi, shuningdek yoʻriqnoma chizigʻi oʻq yoʻnalishini kesgan joyga ham. Toʻrtburchakni aniq joylashtirish uchun ikki yoʻriqnoma kesishgan joydan boshlang.

## Yoʻriqnomalarni olib tashlash

- Bitta yoʻriqnoma: uni {{ui:Tanlash}} bilan bosing va {{key:Delete}} tugmasini bosing, yoki {{ui:Oʻchirgich}} bilan bosing.
- Hammasi: hech narsa tanlanmagan holda {{ui:Obyekt maʼlumoti}} ichidagi {{ui:Barcha yoʻriqnomalarni oʻchirish}} tugmasini bosing.

Yoʻriqnomalar `.modelcraft` faylida saqlanadi. Boshqa formatlarga eksport qilinmaydi.
