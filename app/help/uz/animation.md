---
title: Kamera va obyektlarni animatsiya qiling hamda videoni render qiling
summary: Vaqt chizigʻida kamera, guruhlar va komponentlar uchun kalitlar qoʻying, ularni koʻrinishda ijro eting va animatsiyani renderer osmoni, quyoshi va materiallari bilan WebM videoga render qiling.
keywords: animatsiya, animatsiya qilish, vaqt chizigʻi, kadr kaliti, kalitlar, kalit kadr, kamera yoʻli, uchish, sayohat, yurish, video, film, kino, webm, video render qilish, kadrlar, kadr tezligi, fps, ijro koʻrsatkichi, avtomatik kalit, silliqlash, silliq, ushlab turish, sahnalar, png ketma-ketligi, harakat
from: d3a58249
---

**Vaqt chizigʻi** kamerani va istalgan guruh yoki komponentni vaqt boʻyicha harakatlantiradi. Siz **kalitlar** oʻrnatasiz (ma'lum bir daqiqada narsa qayerda boʻlishi); ModelCraft uni kalitdan kalitga silliq koʻchiradi. Uni koʻrinishda ijro eting, soʻng [rasm render qilish](topic:render) kabi bir xil osmon, quyosh, materiallar va chiroqlar bilan videoga render qiling.

## Vaqt chizigʻini ochish

{{ui:Koʻrinishlar}} tugmasini {{ui:Kamera}} guruhida bosing, soʻng {{ui:Animatsiya vaqt chizigʻi}} ni. Vaqt chizigʻi koʻrinish ostida ochiladi: tepada boshqaruv elementlari, soʻng **Kamera** qatori va har bir harakatlanuvchi guruh yoki komponent uchun qator. Rombchalar kalitlar; qizil chiziq — **ijro koʻrsatkichi**, yaʼni koʻrinishda koʻrsatilayotgan daqiqa.

:::touch
Telefonda ham vaqt chizigʻi koʻrinish ostida ochiladi. Uning boshqaruv elementlari bir qatorda: qolganlariga yetish uchun uni yon tomonga suring; vaqt chizigʻini yopadigan tugma uning oxirida qoladi.
:::

Ijro koʻrsatkichini koʻchirish uchun surgichni suring (yoki qatorda bosing). {{ui:Ijro}} ijro koʻrsatkichidan boshlab ijro etadi va ijro vaqtida {{ui:Pauza}} ga aylanadi; yana bossangiz, oʻsha joyda toʻxtaydi. Vaqt chizigʻi ochiq boʻlganda {{key:Space}} ham xuddi shunday qiladi (vaqt chizigʻi yopiq boʻlsa, Space hali ham {{ui:Tanlash}}). {{ui:Oldingi kalit}} va {{ui:Keyingi kalit}} kalitlar orasida sakraydi. Oʻz uslubingiz ijro va pauzaga boshqa tugma berishi mumkin: {{ui:Sozlamalar}}, soʻng menyular, tugmalar va sichqoncha boʻlimi, buyruq *Animatsiyani ijro etish yoki pauza qilish*.

## Kamerani harakatlantirish

1. Ijro koʻrsatkichini kadr boshlanadigan joyga (0 s) koʻchiring, koʻrinishni sozlang va {{ui:Kamera kaliti}} ni bosing.
2. Ijro koʻrsatkichini keyinroq (masalan, 4 s) koʻchiring, koʻrinishni aylantiring, suring yoki keyingi joyga yuring va yana {{ui:Kamera kaliti}} ni bosing.
3. Istagancha kalit qoʻshing, soʻng {{ui:Ijro}} ni bosing.

Kamera har bir kalitdan silliq oʻtadi va dam holatida boshlanib tugaydi.

:::tip
[Sahnalaringiz](topic:scenes) bormi? {{ui:Sahnalardan}} ulardan kameraning yoʻlini yaratadi: u har bir sahnada toʻxtaydi, soʻng keyingisiga oʻtadi. Agar vaqt chizigʻida hech qanday kalit boʻlmasa, {{ui:Render video…}} buni oʻzi bajaradi, shuning uchun aylanib yurish videosi uchun ikki yoki undan ortiq sahna yetarli.
:::

## Guruh yoki komponentni harakatlantirish

1. Guruh yoki komponentni tanlang (faqat butun guruhlar va komponentlar harakatlanadi; avval [guruh yarating](topic:groups-components)).
2. 0 s da {{ui:Tanlangan kalit}} ni bosing.
3. Ijro koʻrsatkichini keyinroq koʻchiring, guruhni kerakli joyga [koʻchiring, aylantiring yoki masshtablang](topic:move-copy) va yana {{ui:Tanlangan kalit}} ni bosing.

U kalitlari orasida suriladi, buriladi va kattalashadi. Burilishlar qisqa yoʻldan aylanadi.

**Avtomatik kalit** 3-qadamdagi bosishni tejaydi: {{ui:Avtomatik kalit}} yoqilgan boʻlsa, tanlangan guruh yoki komponent koʻchirilganda, aylantirilganda yoki masshtablanganda ijro koʻrsatkichida oʻzi kalit oladi (birinchi marta esa, u turgan joyda 0 s da ham kalit).

:::note
Kalitsiz animatsiyalangan guruhni koʻchirish faqat ijro koʻrsatkichi harakatlangunga qadar davom etadi: keyingi safar ijro etsangiz yoki surkasangiz, u kalitlari qoʻygan joyga qaytadi. Holat paneli buni aytadi. Saqlash uchun {{ui:Tanlangan kalit}} ni bosing.
:::

## Kalitlarni oʻzgartirish

- **Kalitni tanlang** rombchasini bosib: ijro koʻrsatkichi unga oʻtadi.
- **Kalitni koʻchiring** rombchasini qatori boʻylab surib, yoki {{key:Left}} va {{key:Right}} bilan (bir kadr; {{key:Shift}} bilan, oʻn kadr).
- **Oʻchiring**: {{ui:Kalitni oʻchirish}} bilan (tanlangan kalit yoki ijro koʻrsatkichidagi har bir kalit) yoki tanlangan rombchada {{key:Delete}} bilan.
- **Keyingisiga qanday oʻtadi**, tanlangan kalit uchun: {{ui:Silliqlash}} (atrofidagi kalitlar orqali egri chiziq), {{ui:Bir tekis}} (bir xil tezlikdagi toʻgʻri chiziq), {{ui:Asta kirish va chiqish}} (bu kalitda toʻxtaydi) yoki {{ui:Ushlab turish}} (keyingi kalitgacha oʻz joyida turadi).
- **Uzunlik (s)** animatsiya qancha davom etishini belgilaydi; oxiridan keyin qoʻyilgan kalit uni uzaytiradi. Qisqartirish uchun avval yangi oxiridan oʻtgan kalitlarni koʻchiring yoki oʻchiring.
- Guruh qatoridagi **×** uni animatsiya qilishni toʻxtatadi.

Vaqt chizigʻining oʻz {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} tugmalari bor: modelning ortga qaytarishi ({{key:Mod+Z}}) modelni oʻzgartiradi, kalitlarni emas. Animatsiya `.modelcraft` faylida saqlanadi. Vaqt chizigʻini yopish harakatlanuvchi guruhlarni ularning birinchi holatiga qaytaradi.

## Videoni render qilish

1. Vaqt chizigʻida {{ui:Render video}} ni bosing (yoki {{ui:Eksport}} › {{ui:Render video…}}).
2. {{ui:Oʻlcham}}, {{ui:Kadr tezligi}}, {{ui:Har bir kadr sifati}} va {{ui:Fayl}} ni tanlang.
3. {{ui:Render video}} ni bosing. Har bir kadr tayyor boʻlgach koʻrinadi, qolgan vaqt bilan birga.
4. Tayyor boʻlgach, {{ui:Videoni saqlash}} ni bosing.

{{ui:Toʻxtatish}} ({{key:Esc}}) muddatidan oldin tugatadi; soʻng {{ui:Videoni saqlash}} allaqachon tayyor boʻlgan kadrlarni qisqaroq video sifatida saqlaydi.

Osmon, quyosh, materiallar, chiroqlar va yorqinlik {{ui:Rasm renderini yaratish…}} da sozlangan boʻladi: avval shu yerda sozlang, bitta rasmni tekshirib. Har bir kadr shu kompyuterda render qilinadi; hech narsa yuklanmaydi.

| Sozlama | Nima qiladi |
|---|---|
| {{ui:Oʻlcham}} | 480p, 720p HD, 1080p Full HD yoki koʻrinishning oʻz shakli (1920 piksel kenglikkacha) |
| {{ui:Kadr tezligi}} | Soniyasiga 24, 25, 30 yoki 60 kadr. Kadrlar ikki baravar boʻlsa, vaqt ham ikki baravar koʻp ketadi |
| {{ui:Har bir kadr sifati}} | {{ui:Tez}} (4 oʻtish), {{ui:Qoralama}} (16) yoki {{ui:Yaxshi}} (64): koʻproq oʻtish soyalar va chekkalarni silliqroq qiladi |
| {{ui:Fayl}} | {{ui:WebM video}}, brauzer yoza oladigan joyda {{ui:MP4 video (H.264)}}, yoki videomuharrirlar uchun {{ui:PNG rasmlar, har bir kadr uchun bittadan (ZIP)}} (va video kodlovchisi boʻlmagan brauzerlar uchun) |

:::tip
10 soniyali video soniyasiga 30 kadrda 301 kadr boʻladi. Avval harakatni tekshirish uchun 480p da {{ui:Tez}} ni sinab koʻring, soʻng kattaroq oʻlchamda {{ui:Qoralama}} yoki {{ui:Yaxshi}} ni render qiling.
:::

WebM brauzerlarda va VLC da ijro etiladi, videomuharrirlar uni konvertatsiya qiladi. {{ui:MP4 video (H.264)}} brauzer yoza oladigan joyda taklif etiladi. {{ui:Render video}} tez renderlovchidan foydalanadi; har bir kadrni yoʻl izlash bilan (path trace) render qilish uchun shu oynada {{ui:Bu animatsiyani navbatga qoʻshish}} ni tanlang: kadrlar [render navbati](topic:render#the-render-queue)da render qilinadi, bunga WebGPU kerak.

:::firefox safari
Video render qilish uchun brauzer video kodlashni oʻzi bajarishi kerak (WebCodecs): yangi Chrome, Edge, Firefox va Safari 17 bunga qodir. Aks holda {{ui:PNG rasmlar, har bir kadr uchun bittadan (ZIP)}} ni tanlang.
:::

## Bilish kerak boʻlgan narsalar

- Faqat butun guruhlar va komponentlar harakatlanadi. Yuzlar, qirralar, quyoshning vaqti va uslub hali vaqt boʻyicha oʻzgarmaydi.
- [Sahnalar](topic:scenes) ostidagi {{ui:Animatsiyani eksport qilish}} koʻrinishni hozir ekranda qanday boʻlsa, real vaqtda yozib oladi; {{ui:Render video}} esa har bir kadrni osmon, soyalar va materiallar bilan render qiladi.
