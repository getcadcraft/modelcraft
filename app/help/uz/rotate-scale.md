---
title: Aylantirish va masshtablash
summary: Nuqtani bosish yoki gradusni yozish orqali narsalarni shu nuqta atrofida burang, va ularni koeffitsiyent bilan teng ravishda oʻlchamini oʻzgartiring.
keywords: masshtab tutqichlari, choʻzish, notekis, oʻq boʻyicha, aks ettirish, koʻzgudagi nusxa, aks ettirilgan nusxa, aks ettirish boʻylab, aylantirish, burish, burchak, gradus, transportir, masshtab, oʻlchamini oʻzgartirish, kattalashtirish, kichraytirish, koeffitsiyent, teng masshtab
from: 45cdcb49
---

## Aylantirish

{{ui:Rotate}} ({{key:Q}}) tanlovni markaziy nuqta atrofida buradi. U uchta bosishni talab qiladi: markaz, boshlangʻich yoʻnalish va oxirgi yoʻnalish.

1. Burmoqchi boʻlgan narsani tanlang. Agar hech narsa tanlanmagan boʻlsa, Aylantirish avval bosgan narsangizni oladi.
2. {{key:Q}} ni bosing. Koʻrsatkich ortidan halqa ergashadi va burilish tekisligini koʻrsatadi.
3. Aylantirish markazini bosing.
   - Yer ustida yoki boʻsh fazoda halqa yotiq (koʻk) boʻladi: burilish vertikal oʻq atrofida boʻladi, xuddi binoni oʻz joyida burgandek.
   - Yuzada halqa shu yuza tekisligida boʻladi: burilish yuzaning oʻz yoʻnalishi atrofida boʻladi. Devorni gorizontal oʻq atrofida burish uchun uni bosing.
4. Burchak qayerdan boshlanishini belgilaydigan nuqtani bosing, masalan burilayotgan narsaning chekkasi boʻylab.
5. Markaz atrofida koʻrsatkichni harakatlantiring. Burchak uchida va qiymat qutisida ({{ui:Angle}}) koʻrinadi. Yaqinlashganda 15° qadamlarga tortiladi.
6. Tugatish uchun bosing yoki burchakni gradusda yozib {{key:Enter}} ni bosing: `90`, `45`, `-30`.

   Musbat burchaklar halqa qaragan tomondan koʻringanda soat strelkasiga qarshi buriladi.

Aylantirish paytida {{key:Ctrl}} (yoki {{key:Alt}}) ni bosib **nusxani** burang va asl nusxa oʻz joyida qolsin, xuddi Koʻchirishdagidek; maslahatda nusxa yoqilganligi koʻrsatiladi va kalitni yana bosish uni oʻchiradi. Aylantirilgan nusxadan keyin darhol `3x` yozing, bir xil markaz atrofida yana nusxalar uchun.

Koʻchirishdagidek, ulangan geometriyaning bir qismini burish unga biriktirilgan yuzalarni buraydi. Butunlay burish uchun avval narsalarni guruhlang.

:::note
Maslahatda strelka tugmalari burilish oʻqini tanlashi aytilgan, lekin bu versiyada birinchi bosishdan oldin ular koʻrinishni aylantiradi. Oʻqni tanlash uchun markazni siz xohlagan tomonga qaragan yuzada bosing. Qarang: [Hali tayyor emas](topic:not-built-yet).
:::

## Masshtablash

{{ui:Scale}} ({{key:S}}) tanlovning oʻlchamini oʻzgartiradi. Avval oʻlchamini oʻzgartirmoqchi boʻlgan narsani tanlang, keyin {{key:S}} ni bosing: uning qutisi burchaklari, chekkalari va yon tomonlari oʻrtasida kichik kvadratchalar (tutqichlar) paydo boʻladi.

### Tutqichlar bilan choʻzish yoki masshtablash

- **Burchak** tutqichi barcha yoʻnalishlarda teng masshtablaydi, qarama-qarshi burchak atrofida.
- **Yon tomon** oʻrtasidagi tutqich faqat shu yoʻnalishda choʻzadi, qarama-qarshi tomon atrofida: qutini balandlashtirmasdan uzunroq qiling.
- **Quti chekkasi** oʻrtasidagi tutqich unga kesishgan ikki yoʻnalishda choʻzadi.
- Quti markazi atrofida masshtablash uchun tutqichni bosganda {{key:Ctrl}} ni ushlab turing.

Tutqichni bosing, koʻrsatkichni harakatlantiring va yana bosing; yoki tutqichni bosing va koeffitsiyent yozing (`2` ikki marta kattalashtiradi, `0.5` ikki barobar kichraytiradi) hamda {{key:Enter}} ni bosing. Har bir yoʻnalish uchun alohida koeffitsiyent berish uchun uchtasini yozing — qizil, yashil va koʻk uchun: `2,1,0.5`. Ochiq guruh ichida yoʻnalishlar guruhning oʻz yoʻnalishlari boʻladi.

### Nuqta atrofida masshtablash

Tutqichdan boshqa istalgan joyni bosing, oʻzingiz tanlagan nuqta atrofida teng masshtablash uchun. Uchta bosish talab qilinadi:

1. Oʻlchamini oʻzgartirmoqchi boʻlgan narsani tanlang. Agar hech narsa tanlanmagan boʻlsa, Masshtablash avval bosgan narsangizni oladi.
2. {{key:S}} ni bosing.
3. Oʻz joyida qoladigan nuqtani bosing (tutqichda emas), masalan pastki burchakni.
4. Tayanch nuqtani bosing. Uning birinchi nuqtadan masofasi 1× sifatida hisoblanadi.
5. Koʻrsatkichni birinchi nuqtaga yaqinlashtiring yoki undan uzoqlashtiring. Koeffitsiyent maslahatda va qiymat qutisida ({{ui:Scale}}) koʻrinadi.
6. Tugatish uchun bosing yoki koeffitsiyent yozib {{key:Enter}} ni bosing: `2` oʻlchamni ikki barobar, `0.5` esa ikki barobar kichraytiradi.

### Aniq oʻlchamgacha masshtablash

Narsani aniq uzunlikka keltirish uchun koeffitsiyentni hisoblang: yangi uzunlikni joriy uzunlikka boʻling. Uch bosish rejimida qiymat qutisi arifmetikani bajaradi, shuning uchun 3.6 m devorni 4.2 m uzunlikka keltirish uchun `4.2/3.6` yozing. Tutqich qutisi faqat oddiy sonlarni qabul qiladi: avval koeffitsiyentni hisoblang (4.2 ni 3.6 ga boʻlish taxminan 1.1667). Joriy uzunlikni {{ui:Entity info}} da koʻrish uchun avval chetni tanlang.

### Notoʻgʻri oʻlchamda kelgan importni tuzatish

OBJ fayllarida birlik yoʻq, shuning uchun millimetrda chizilgan model 1000 marta katta keladi. Import qilingan guruhni tanlang, {{key:S}} ni bosing, burchak tutqichini bosing va `0.001` yozib {{key:Enter}} ni bosing. Dyuymda chizilgan model uchun `0.0254` yozing.

## Muhim jihatlar

- Uch bosish bilan nuqta atrofida masshtablash teng boʻladi. Faqat bir yoʻnalishda choʻzish uchun yon tomon yoki chekka tutqichidan foydalaning (yuqoriga qarang).
- Guruh yoki komponentni masshtablash siz masshtablagan nusxani oʻzgartiradi; komponentning boshqa nusxalari oʻz oʻlchamini saqlaydi.
- Oxirgi bosishdan oldin bekor qilish uchun {{key:Esc}} ni bosing.

## Aks ettirish

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} yoki {{ui:Flip along blue}} tanlovni oʻz joyida, qutisining oʻrtasi orqali aks ettiradi: chap qoʻl zinasi oʻng qoʻl zinasiga aylanadi. Yuzalar tashqariga qarab turadi, guruh yoki komponent esa butunligicha aks ettiriladi (ichki qismi qayta yozilmaydi).

{{ui:Flipped copy along red}} (va green, blue) asl nusxani oʻz joyida qoldiradi va tanlov qutisining uzoq tomoni boʻylab yonida aks ettirilgan nusxa qoʻyadi: juftlikdagi ikkinchi eshik, binoning ikkinchi qanoti. U yerga tegib turgan erkin geometriya asl nusxaga qoʻshiladi, tegib turgan geometriya doim shunday qiladi; ularni ajratib turish uchun avval asl nusxani guruhga aylantiring.

Ochiq guruh ichida qizil, yashil va koʻk — guruhning oʻz oʻqlari.
