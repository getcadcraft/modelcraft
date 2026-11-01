---
title: ModelCraft ekrani
summary: Asboblar paneli, har ikki tomondagi panellar, 3D koʻrinish va holat paneli haqida ekrandagi nomlari bilan sayohat.
keywords: ekran, joylashuv, asboblar paneli, panellar, obyektlar daraxti, obyekt maʼlumoti, uslub, sahnalar, holat paneli, qiymat maydoni, birliklar, interfeys, sayohat
from: 4a9a4516
---

Yuqoridan pastga: ilova paneli, asboblar paneli, uch ustun (chap panellar, 3D koʻrinish, oʻng panellar) va holat paneli.

## Ilova paneli

Eng yuqoridagi ingichka panel barcha CadCraft ilovalariga tegishli. Unda ilova nomi va versiyasi, {{ui:ModelCraft haqida}}, ekran rejimi tugmasi va {{ui:Qogʻoz}} / {{ui:Model}} almashtirgichi bor.

- {{ui:Qogʻoz}} yorugʻ mavzu, {{ui:Model}} esa qorongʻi. 3D koʻrinish ranglarini unga moslaydi; modelingiz oʻzgarmaydi.
- Ekran rejimi tugmasi (dastlab u {{ui:Toʻliq ekran}} deb yozilgan) va {{key:Ctrl+Shift+F}} uch rejim boʻylab aylanadi: oddiy, toʻliq ekran va panellar yashirilgan toʻliq ekran. Panellar yashirilganda, ularni qaytarish uchun ekranning yuqori chetiga kursorni olib keling (yoki bosing). {{key:Esc}} toʻliq ekrandan chiqaradi.

:::note
{{key:Ctrl+Shift+F}} har bir kompyuterda Control tugmasidan foydalanadi, Mac da ham. iPhone da, brauzerlarda toʻliq ekran boʻlmagani uchun, tugma faqat panellarni yashiradi va koʻrsatadi.
:::

## Asboblar paneli

Asboblar paneli nomlangan guruhlarga boʻlingan. Tugma nomini va tugmasini koʻrish uchun uning ustiga sichqonchani olib boring.

Chap tomonda {{ui:Ish maydoni}} roʻyxati asboblar paneli va oʻng panel nima uchun ishlashini almashtiradi: {{ui:Model}} (itarish/tortish bilan modellash, quyidagi tur), {{ui:Mesh}} ([meshni tahrirlash](topic:mesh-edit)), {{ui:Egri chiziq}} ([egri chiziq obyektlari](topic:curves)), {{ui:UV}} ([UVlarni joylashtirish](topic:uv)), {{ui:Haykaltaroshlik}} ([haykaltaroshlik](topic:sculpt)), {{ui:Soyalash}} ([tugunlar bilan yaratilgan materiallar](topic:shading)), {{ui:Animatsiya}} ([animatsiya](topic:animate)) va {{ui:Render}} ([koʻrinishda render](topic:render#render-in-the-view)).

| Guruh | Tugmalar |
|---|---|
| Fayl | {{ui:Yangi}}, {{ui:Ochish}}, {{ui:Saqlash}}, {{ui:Import}}, {{ui:Eksport}} (formatlar menyusi) |
| Chizish | {{ui:Chiziq}} ({{key:L}}), {{ui:Toʻrtburchak}} ({{key:R}}), {{ui:Aylana}} ({{key:C}}), {{ui:Koʻpburchak}} ({{key:N}}) |
| Oʻzgartirish | {{ui:Tanlash}} ({{key:Space}}), {{ui:Itarish/tortish}} ({{key:P}}), {{ui:Koʻchirish}} ({{key:M}}), {{ui:Aylantirish}} ({{key:Q}}), {{ui:Masshtab}} ({{key:S}}), {{ui:Oʻchirgich}} ({{key:E}}), {{ui:Oʻlchov lentasi}} ({{key:T}}) |
| Tashkil qilish | {{ui:Komponent}} ({{key:G}}), {{ui:Guruh}} ({{key:Shift+G}}), {{ui:Parchalash}} |
| Tahrirlash | {{ui:Ortga qaytarish}} ({{key:Mod+Z}}), {{ui:Qayta bajarish}} ({{key:Mod+Y}}), {{ui:Nusxalash}} ({{key:Mod+C}}), {{ui:Qoʻyish}} ({{key:Mod+V}}), {{ui:Yana}} (menyu: kesish, nusxalash, qoʻyish, joyida qoʻyish {{key:Mod+Shift+V}}, nusxasini yaratish {{key:Mod+D}}, oʻchirish, hammasini tanlash, hech narsani tanlamaslik va tugmalar uslubi) |
| Kamera | {{ui:Orbita}} ({{key:O}}), {{ui:Surish}} ({{key:H}}), {{ui:Kattalashtirish}} ({{key:Z}}), {{ui:Chegaralar}} ({{key:Shift+Z}}), {{ui:Koʻrinishlar}} (menyu) |

Koʻrsatilgan tugmalar itarish/tortish uchun; [ModelCraft sozlamalari](topic:settings) da Modelchi uslubi tanlangan boʻlsa, maslahat matnlari oʻrniga shu tugmalarni koʻrsatadi. Ishlatayotgan asbob bosilgan holda koʻrsatiladi. Tor ekranda asboblar paneli yon tomonga suriladi.

{{ui:Koʻrinishlar}} menyusida {{ui:Izometrik}}, {{ui:Yuqori}}, {{ui:Old}}, {{ui:Oʻng}}, {{ui:Orqa}}, {{ui:Chap}} va {{ui:Pastki}} bor, ularning har biri modelga moslanadi, hamda {{ui:Perspektiva}} — perspektiva va parallel proyeksiya oʻrtasida almashtiradi.

## 3D koʻrinish

Ekranning oʻrtasi. Qizil, yashil va koʻk chiziqlar oʻqlar: qizil va yashil yerda yotadi, koʻk yuqoriga qaratilgan, va **shimol yashil oʻq**. Ular kesishgan joy koordinata boshi.

- Boshlaganingizda "Modellashtirishni boshlash" deb nomlangan karta birinchi bir necha tugmani koʻrsatadi. Chizish asbobini tanlasangiz yoki koʻrinishda bossangiz, u yoʻqoladi.
- Asbob ishlayotganda koʻrinishda **xulosa belgilari** koʻrinadi: kursor tutiladigan joylardagi kichik rangli shakllar (uchida yashil doira, oʻrtasida havorang doira, qirrada qizil kvadrat, yuzada koʻk romb). [Xulosa va tutish](topic:inference) ga qarang.
- Tanlangan narsalar koʻkka aylanadi. Orqadan koʻrilgan yuza koʻk-kulrang boʻladi.
- Guruhni tahrirlash uchun ochganingizda, undan tashqaridagi hamma narsa xiralashadi va oʻqlar guruhning oʻz oʻqlariga koʻchadi.
- Modelda sahnalar boʻlsa, koʻrinishning yuqori qismida sahna yorliqlari qatori paydo boʻladi.
- Faylni koʻrinishning istalgan joyiga sudrab tashlab, ochish yoki import qilish mumkin.

## Chap panellar

**{{ui:Obyektlar daraxti}}** modeldagi guruhlar va komponentlarni xuddi modeldagidek ichma-ich joylashgan holda koʻrsatadi. Bir necha marta ishlatilgan komponent necha marta ishlatilganini koʻrsatadi, masalan "Deraza (4)".

- Nomini bosib tanlang. Tahrirlash uchun ikki marta bosib oching.
- **Nom boʻyicha qidirish** (ikki yoki undan ortiq guruh boʻlganda koʻrinadi) faqat nomi mos keladigan qatorlarni, ular joylashgan guruhlar bilan birga qoldiradi. {{key:Esc}} uni tozalaydi.
- Qator oxiridagi **koʻz** oʻsha guruh yoki komponentni yashiradi yoki koʻrsatadi ({{ui:Tahrirlash}} › {{ui:Yana}} › {{ui:Yashirish}} kabi). Teg belgisi uning [tegi](topic:tags) tufayli yashirin ekanligini bildiradi.
- **Joyida nomini oʻzgartirish:** qatorni bosing, soʻng {{key:F2}} ni bosing, yozing va {{key:Enter}} ni bosing ({{key:Esc}} eski nomni saqlaydi).
- **Qatorni sudrang:** boshqa guruh qatorining oʻrtasiga tashlasangiz, u oʻsha guruh ichiga koʻchadi; qatorning yuqori yoki pastki chetiga tashlasangiz, shu qatordan oldin yoki keyin qoʻyiladi; {{ui:Obyektlar daraxti}} sarlavhasiga tashlasangiz, yuqori darajaga koʻchadi. U modeldagi oʻz joyida qoladi, rangi, tegi va nomini saqlaydi. Guruh oʻz ichiga kira olmaydi. Har bir koʻchirish bitta bekor qilish qadamidir. [Obyektlar daraxtida qayta joylashtirish](topic:groups-components#rearrange-in-the-outliner) ga qarang.
- Guruh ichida tahrirlayotganingizda, "Tahrirlanmoqda: Model › …" degan satr paydo boʻladi va {{ui:Guruhni yopish}} tugmasi koʻrinadi. U barcha ochiq darajalarni bir vaqtda yopadi.

**{{ui:Komponentlar}}** har bir komponent taʼrifini necha nusxasi joylashtirilganini ("3×") bilan koʻrsatadi va bosgan joyingizga yana bir nusxa qoʻshadigan {{ui:Joylashtirish}} tugmasi bor.

## Oʻng panellar

**{{ui:Obyekt maʼlumoti}}** tanlanganni tasvirlaydi. Uning sarlavhasi bu nima ekanini aytish uchun oʻzgaradi:

| Sarlavha | Koʻrsatadi | Tugmalar |
|---|---|---|
| Model (hech narsa tanlanmagan) | Yuzalar, qirralar, guruhlar, komponentlar va ularning nechta joylashtirilganligi, yoʻriqnomalar, umumiy oʻlcham | {{ui:Barcha yoʻriqnomalarni oʻchirish}} (yoʻriqnomalar boʻlganda) |
| Yuza | Maydon, teshiklar soni | {{ui:Yuzni teskari aylantirish}} |
| Qirra | Uzunlik | yoʻq |
| Guruh yoki komponent | Nomi (oʻzgartirish uchun yozing), necha marta joylashtirilganligi, yopiq jism ekanligi, hajmi, oʻlchami | {{ui:Tahrirlash}}, {{ui:Parchalash}}, {{ui:Yagona qilish}} (bir necha marta joylashtirilgan komponent), {{ui:Komponent yaratish}} (guruh) |
| Yoʻriqnoma nuqtasi yoki yoʻriqnoma chizigʻi | yoʻq | {{ui:Oʻchirish}} |
| Bir nechta narsa | Nechta yuza, qirra, guruh va yoʻriqnoma, yuzalarning umumiy maydoni | {{ui:Komponent yaratish (G)}}, {{ui:Guruh yaratish (Shift+G)}} |

**{{ui:Uslub}}** modelning chizilish usulini belgilaydi: {{ui:Yuzalar}} ({{ui:Soyali}}, {{ui:Yashirin chiziq}}, {{ui:Karkas}}, {{ui:Rentgen}}), {{ui:Qirralarni koʻrsatish}} va sana, vaqt va quyoshning joylashuvi bilan {{ui:Quyosh soyalari}}. [Uslublar va quyosh soyalari](topic:styles-shadows) ga qarang.

**{{ui:Sahnalar}}** koʻrinishlarni saqlaydi: {{ui:Sahna qoʻshish}}, sahnalar roʻyxati va {{ui:Oldingi}}, {{ui:Ijro}} va {{ui:Keyingi}}. [Koʻrinishlarni sahna sifatida saqlash](topic:scenes) ga qarang.

## Holat paneli

Pastda, chapdan oʻngga:

1. **Maslahat**: asbob keyin nima kutayotgani yoki kursor nimaga tutilayotgani ("Uchi", "Qizil oʻqda").
2. **Xabarlar**: nima yuz berganligi ("Itarish/tortish bekor qilindi.", "site.dxf import qilindi: yerda 1697 ta qirra, guruhda.") yoki nima uchun ish bajarilmaganligi.
3. **Qiymat maydoni**: uning yorligʻi asbobga qarab oʻzgaradi ({{ui:Uzunlik}}, {{ui:Oʻlchamlar}}, {{ui:Radius}}, {{ui:Tomonlar}}, {{ui:Masofa}}, {{ui:Burchak}}, {{ui:Masshtab}}, {{ui:Siljitish}}). Ishlash vaqtida jonli oʻlchamni koʻrsatadi va siz yozgan qiymatni qabul qiladi. [Qiymat maydoniga aniq oʻlchamlarni kiritish](topic:value-box) ga qarang.
4. **Tugmalar uslubi**: {{ui:Tugmalar: Itarish/tortish}} yoki {{ui:Tugmalar: Modelchi}} klaviatura yorliqlari va sichqoncha tugmalarini bir vaqtda almashtiradi ([ModelCraft sozlamalari](topic:settings) dagi kabi).
5. **{{ui:Tutish}} va {{ui:Toʻqnashuv}}**: nuqtalar, qirralar va oʻqlarga tutish, hamda jismlarning bir-biriga tegadigan joyda toʻxtashi. Chizilgan = oʻchiq. Almashtirish uchun bosing. [ModelCraft sozlamalari](topic:settings) ga qarang.
6. **Birliklar tanlagichi**: uzunliklar qaysi birlikda koʻrsatilishi. [Boshlash](topic:getting-started#check-the-units-first) ga qarang.

## Tor ekranda

Taxminan 760 pikseldan tor ekranda (telefon yoki tor oyna), 3D koʻrinish ekranni saqlab qoladi. Asboblar paneli bitta qator boʻlib, yon tomonga suriladi, panellar esa ekran pastidagi panel orqali varaq sifatida ochiladi.
