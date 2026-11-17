---
title: Modelni VR shlemida koʻrib chiqish
summary: VR shlemida modelni toʻliq oʻlchamda kezing: sakrang, buriling, oʻlchang, kesib oching, rasm bilan muammolar qoʻying, stol usti modeli sifatida koʻring va jonli sessiyadagi boshqalar bilan uchrashing.
keywords: vr, virtual reality, virtual haqiqat, shlem, webxr, xr, immersiv, quest, oculus, vive, index, pico, kezish, yurish, teleport, dizayn koʻrib chiqish, koʻrib chiqish, oʻlchash, kesim, kesish, muammo, muammolar, bcf, stol usti, miqyosli model, ishtirok, avatarlar, jonli, birga
from: fa2f591a
---

{{ui:VR da koʻrib chiqish}} modelning ichiga VR shlemi bilan, toʻliq oʻlchamda kiritadi. Siz koʻrinish kamerasi turgan joyda, undan pastda, xuddi oʻsha tomonga qarab turasiz. Hech narsa yuklanmaydi: shlem brauzer shu kompyuterda (yoki shlemning oʻz brauzerida) chizgan narsani koʻrsatadi.

## Kerak boʻladigan narsalar

- Brauzer boshqara oladigan shlem (WebXR): shlemning oʻz brauzeri yoki shlem ulangan kompyuterdagi Chrome yoki Edge.
- ModelCraft xavfsiz sahifada (https) ochiq boʻlishi kerak, bu saytda boʻlgani kabi.

Shlem boʻlmasa, {{ui:VR da koʻrib chiqish}} xira boʻladi va nega ekanini aytadi.

## Boshlash

1. Boshlamoqchi boʻlgan joyingizda koʻrinishni tayyorlang: xonada yoki tashqarida, binoga qarab.
2. {{ui:Kamera}} guruhida {{ui:Koʻrinishlar}} ni, soʻng {{ui:VR da koʻrib chiqish}} ni bosing.
3. Shlemni kiying.

Menyu chap qoʻlingizning orqa tomonida. Oʻng kontroller bilan unga qarang va tugmani tanlash uchun trigger ni torting. (Faqat bitta qoʻl bilan menyu boshlagan joyingiz oldida suzadi.)

## Qanday koʻrinadi

Shlem modelni [jonli koʻrinish](topic:live-view) koʻrinishida koʻrsatadi: yuzlarga bergan koʻrinish va materiallar, osmon va quyosh — modelingiz joyi va sanasi boʻyicha soya bilan, chiroqlar, sochilgan oʻsimliklar va toshlar, hamda devor va polardan qaytgan yorugʻlik (siz qarab turganingizda kompyuterda hisoblanadi va siz harakatlanganingizda ergashadi). Yorugʻlik va koʻrinish oʻzgartirishi (ACES yoki AgX) [Rasmni render qilish](topic:render) dagidek. Qancha chizilishi shlemning brauzerida nima borligiga bogʻliq, kompyuterdagidek; atrof-muhit soyasi (ambient occlusion), akslar va porlash esa kompyuterda qoladi.

## Atrofda harakatlanish

- **Sakrash:** {{ui:Koʻchirish}} da polga qarab trigger ni torting; oʻsha yerga tushasiz. Yoki tayoqchani oldinga surib nishonlang va sakrash uchun qoʻyib yuboring. Faqat pol va yer (yuqoriga qaragan yuzlar) ga tushishingiz mumkin, hech qachon devorga emas.
- **Burilish:** tayoqchani chapga yoki oʻngga suring: har safar 30° buriladi.
- **Yurish:** oʻynash maydoningizda shunchaki yuring.

## Oʻlchash

{{ui:Oʻlchash}} ni tanlang, soʻng ikki nuqtada trigger ni torting. Masofa ular orasida modelning birliklarida koʻrsatiladi. Burchak yaqinidagi nuqta burchakka tortiladi.

## Ochib tashlash (kesish)

{{ui:Kesim}} ni tanlang va yuzda trigger ni torting:

- devorda (yoki pol boʻlmagan har qanday narsada): siz bilan oʻsha yuza orasidagi hamma narsa kesib tashlanadi, shunda ichkarini koʻrasiz. Bu tashqaridan yoki xona boʻylab eng yaxshi ishlaydi;
- polda, yuqoridan: oʻsha pol ustida 1.2 m balandlikda plan kesimi, shunda devorlarning pastki qismi koʻrinadi.

{{ui:Tozalash}} kesim va oʻlchovlarni olib tashlaydi. Agar boshlaganingizda koʻrinishda kesim tekisligi modelni kesib tursa, shlem u bilan boshlanadi.

## Muammo qoʻyish

{{ui:Muammo}} ni tanlang va muammo joyida trigger ni torting. Raqamlangan pin uni belgilaydi, ModelCraft esa muammoni koʻrgan narsangizning rasmi va qayerda turganingiz bilan saqlaydi. VR dan chiqqanda muammolar oʻng tomondagi {{ui:Muammolar}} roʻyxatida boʻladi:

- koʻz tugmasi muammoni qoʻyilgan joydan koʻrsatadi;
- {{ui:BCF sifatida saqlash}} ularning hammasini BCF fayl sifatida yuklab oladi, uni BIM koʻrib chiqish dasturlari ochadi (kamera va rasm bilan birga);
- ular `.modelcraft` faylida ham saqlanadi.

Muammoga izoh qoʻshish VR dan chiqqandan keyin, BCF dasturida: shlemda yozish hali qurilmagan.

## Stol usti modeli sifatida koʻrish

{{ui:Stol usti}} modelni oldingizdagi stolga sigʻadigan qilib kichraytiradi; uning atrofida yuring yoki tayoqcha bilan buring. {{ui:Toʻliq oʻlcham}} sizni avval turgan joyingizga qaytaradi.

## Boshqalar bilan, jonli

[Jonli sessiyada](topic:work-live) VR dagi har kim boshqalarni oʻz rangidagi bosh va ikki qoʻl sifatida, ismi bilan va har biri nimaga ishora qilayotganini koʻrsatuvchi nuqta bilan koʻradi. Har kimning oʻzgartirishlari bir zumda shlemingizga yetib boradi. Stolda turgan odamlar shlemda hali koʻrsatilmaydi.

## Chiqish

{{ui:VR dan chiqish}} ni tanlang (yoki shlemni yechib, sessiyani shu yerda tugating). Ekrandagi koʻrinish boshingiz turgan joyga suriladi.

:::note
Faqat shlem emulyatori bilan sinalgan, hali haqiqiy shlem bilan emas. Katta model shlemni qotirib qoʻyishi mumkin: avval kerak boʻlmaganini yashiring ([yashirish va ajratish](topic:hide-isolate)).
:::
