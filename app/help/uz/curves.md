---
title: Egri chiziq obyektlari
summary: Bézier, NURBS va toʻgʻri segmentli egri chiziqlarni chizing, ularga qalinlik, kenglik yoki torayish bering, yassi egri chiziqlarni toʻldiring, matnni egri chiziq sifatida oʻrnating va ularni toʻrlarga aylantiring.
keywords: egri chiziq, egri chiziqlar, bezier, nurbs, spline, splinelar, yoʻl, quvur, trubka, kabel, arqon, qiyalik, bevel, ekstrudlash, torayish, egish, radius, toʻldirish, profil, matn, harflar, logotip, egri chiziqni toʻrga aylantirish
from: 602bf077
---

**Egri chiziq obyekti** — bu shakl yasaydigan egri chiziq: uning boʻylab quvur (bevel), lenta (ekstrudlash), torayuvchi shox (torayish) yoki — yassi va yopiq boʻlsa — toʻldirilgan plastina yoki harflar. Shakl egri chiziqqa ergashadi: nuqtani koʻchiring va quvur u bilan birga koʻchadi. Shakl toʻgʻri boʻlgach, uni toʻrga aylantiring.

## Egri chiziq qoʻshish

Ish maydonlari roʻyxatidan {{ui:Egri chiziq}} ni tanlang va {{ui:Qoʻshish}} ni bosing:

| Tur | Nima u |
| --- | --- |
| Bézier egri chizigʻi, Bézier aylanasi | Oʻz nuqtalaridan oʻtadi; har bir nuqtada egri chiziq yoʻnalishini belgilaydigan ikkita dastak bor |
| NURBS egri chizigʻi, NURBS aylanasi, Yoʻl | Silliq, nuqtalariga tortilgan (uchlaridan boshlanadi va tugaydi); har bir nuqtada vazn bor |
| Matn | Matningiz yassi, toʻldirilgan harf konturlari sifatida |

Yangi egri chiziq koʻrinishi va tanlanishi uchun ingichka quvur oladi; yalang egri chiziq uchun uning qiyalik chuqurligini 0 ga qoʻying.

Chizilgan narsadan ham boshlashingiz mumkin: Model ish maydonida yoy, aylana, koʻpburchak yoki chizilgan egri chiziqni tanlang va Obyekt maʼlumoti ichida {{ui:Egri chiziq obyektini yasash}} ni bosing. Chizilgan chiziqlar qoladi.

## Nuqtalarni tahrirlash

Egri chiziq obyektini ikki marta bosing (yoki uni tanlab {{ui:Egri chiziq}} ni tanlang) uni tahrirlash uchun.

- Nuqta yoki dastakni bosing ({{key:Shift}} qoʻshadi yoki olib tashlaydi); uni koʻchirish uchun suring. Tanlash uchun boʻsh joyda quti bilan suring.
- {{ui:Choʻzish}} ({{key:E}} yoki {{key:Ctrl}}+bosish) tanlangan uchdan keyin kursor ostida nuqta qoʻshadi.
- {{ui:Boʻlish}} ({{key:W}}) tanlangan qoʻshni juftliklar orasiga nuqta qoʻyadi; Bézier oʻz shaklini saqlaydi.
- {{ui:Koʻchirish}}, {{ui:Aylantirish}}, {{ui:Masshtab}} tanlangan nuqtalarni kursor bilan koʻchiradi (modelerning tugmalari {{key:G}} {{key:R}} {{key:S}}, itarish/tortish tugmalari {{key:M}} {{key:Q}} {{key:S}}); saqlash uchun bosing, bekor qilish uchun {{key:Esc}}.
- {{ui:Yopish}} ({{key:C}}) ochiq splaynni yopadi yoki yopiqni ochadi; {{ui:Teskari aylantirish}} ({{key:Shift+R}}) uni teskari yoʻnalishda ishlatadi.
- Bézier dastaklari: {{ui:Silliq}} ({{key:V}}) ularni silliq egri chiziq uchun joylashtiradi, {{ui:Burchak}} ({{key:Shift+V}}) ularni qoʻshnilarga yoʻnaltiradi, {{ui:Erkin}} ({{key:Alt+V}}) ularni qoʻyilgan joyda qoldiradi. Dastakni surish uni erkin qiladi.
- {{ui:Bézier}}, {{ui:NURBS}} va {{ui:Poli}} tanlangan splaynlarning turini oʻzgartiradi, nuqtalarni saqlab.

Har bir oʻzgarish bitta ortga qaytarish bosqichi.

## Shakl

Sozlamalar panelda (va Model ish maydonida Obyekt maʼlumotida):

- **Shakl:** 3D egri chiziqlar istalgan yoʻnalishda boradi; yassi egri chiziq oʻz tekisligida qoladi va toʻldirilishi mumkin.
- **Yopiq splaynlarni toʻldirish** (yassi): konturlar plastinaga aylanadi; boshqasining ichidagi kontur teshik boʻladi, shuning uchun harflar oʻz teshiklarini saqlaydi.
- **Ekstrudlash:** lenta kengligining yarmi (ochiq yoki 3D egri chiziqlar), yoki plastina qalinligining yarmi (toʻldirilgan).
- **Qiyalik chuqurligi** va **dumaloqlik:** egri chiziq boʻylab yumaloq quvur (ekstrudlash bilan: yumaloq lenta); toʻldirilgan shaklda, yumaloq chekka.
- **Uchlarni yopish:** ochiq quvurda qopqoqlar.
- **Uning boʻylab torayish:** har bir splayn boʻylab teng ravishda masshtablaydi, masalan shox uchun `1, 0.2`, urchuq uchun `0, 1, 0`.
- **Silliqlik** va NURBS uchun **tartib**: egri chiziq qanchalik nozik chizilishi va qanchalik silliqligi (2 — toʻgʻri … 6 — eng silliq).
- Nuqtalar tanlangan holda: **radius** (quvur qalinligi oʻsha joyda, qiyalikka koʻpaytirilgan), **egish** (lentani egri chiziq atrofida buradi) va NURBS uchun **vazn**.

Modifikatorlar egri chiziq obyektida toʻrdagidek ishlaydi: uning boʻylab Massiv, Mirror, Subdivision sirti. Qarang: [Toʻrdagi modifikatorlar](topic:modifiers).

## Toʻrga aylantirish

{{ui:Toʻrga}} (Egri chiziq ish maydonida yoki Obyekt maʼlumotida, {{ui:Egri chiziqni toʻrga aylantirish}}) egri chiziq obyektini hozir koʻrsatayotgan toʻrga aylantiradi; uning modifikatorlari ustida qoladi. Soʻng uni Toʻr ish maydonida tahrirlang. Ortga qaytarish uni qaytaradi.

Qarang ham: [Toʻrlar](topic:meshes) va [Toʻrni tahrirlash](topic:mesh-edit).
