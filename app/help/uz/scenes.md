---
title: Koʻrinishlarni sahna sifatida saqlash
summary: Kamera va uslubni sahna sifatida saqlang, sahnani yangilang va qayta nomlang, hamda loyihani taqdim etish uchun sahnalar boʻylab qadam tashlang yoki ijro eting.
keywords: sahna, koʻrinish, saqlangan koʻrinish, kamera, taqdimot, animatsiya, ijro, slayd-shou, page up, page down, yorliqlar, sayr
from: 38680d6e
---

**Sahna** kamera holatini, uslubni va yashirilgan narsalarni eslab qoladi: qayerdan qarayotganingiz, perspektiva yoki parallel, yuz uslubi, qirralar, quyosh sozlamalari, yashirilgan guruhlar, oʻchirilgan teglar va kesim. Sahnalar `.modelcraft` faylida saqlanadi.

## Sahna qoʻshish

1. Koʻrinishni sozlang: aylantiring, kattalashtiring, uslub tanlang, quyoshni sozlang.
2. Oʻng tomondagi {{ui:Sahnalar}} panelida {{ui:Sahna qoʻshish}} ni bosing.

   Sahna roʻyxatda "Sahna 1", "Sahna 2" va hokazo nom bilan paydo boʻladi, hamda 3D koʻrinish ustidagi yorliq sifatida. Holat qatorida "Sahna 1 saqlandi: bu kamera, uslub va yashirilgan narsalar." deyiladi.

## Sahnaga oʻtish

- 3D koʻrinish ustidagi yorligʻini yoki {{ui:Sahnalar}} roʻyxatidagi nomini bosing.
- Yoki keyingi sahna uchun {{key:PageDown}}, oldingisi uchun {{key:PageUp}} ni bosing. Roʻyxat ostidagi {{ui:Keyingi}} va {{ui:Oldingi}} xuddi shuni qiladi.

Kamera sahnaga bir yarim soniyadan biroz koʻproq vaqtda silliq suriladi. Kompyuteringiz harakatni kamaytirishga sozlangan boʻlsa, u shunchaki oʻsha joyga sakraydi.

## Sahnani oʻzgartirish, qayta nomlash yoki oʻchirish

Roʻyxatdagi har bir sahnaning nomidan keyin uchta kichik tugma bor:

- **Yangilash** (aylanma strelkalar): joriy kamera, uslub va yashirilgan narsalarni oʻsha sahnaga saqlaydi. "Sahna 2 yangilandi."
- **Qayta nomlash** (qalam): "Sahnani qayta nomlash" dialogini ochadi. Yangi nomni kiriting va {{ui:Saqlash}} ni bosing.
- **Oʻchirish** (axlat qutisi): sahnani oʻchiradi. "Sahna 2 oʻchirildi. Ctrl+Z uni qaytaradi."

Sahna qoʻshish, yangilash, qayta nomlash va oʻchirish, modeldagi oʻzgarishlar kabi bekor qilish bosqichlari hisoblanadi.

## Sahna kamerasini qulflash

Dizayn oʻzgarganda bir xil koʻrinishni qayta-qayta renderlasangiz, koʻrinish tasodifan siljimasligi uchun shu sahnaning kamerasini qulflang.

1. {{ui:Sahnalar}} roʻyxatida sahna nomidan keyingi **qulf** tugmasini (ochiq qulf) bosing. U yopiladi, sahnaning 3D koʻrinish ustidagi yorligʻida kichik qulf paydo boʻladi. Holat qatorida "Sahna 2: kamera qulflandi." deyiladi.
2. Renderlamoqchi boʻlganingizda sahnaga oʻting: kamera aynan saqlangan koʻrinishga qaytadi, shuning uchun undan olingan rasmlar oldingilar bilan mos keladi.

Kamera qulflangan paytda **Yangilash** uslub va yashirilgan narsalarni sahnaga baribir saqlaydi, lekin kamera oʻz joyida qoladi, hatto siz aylantirib ketgan boʻlsangiz ham. Qulfni qayta bosib uni oching; shundan keyin Yangilash joriy koʻrinishni yana saqlaydi. Qulflash va ochish bekor qilish bosqichlari boʻlib, qulf `.modelcraft` faylida saqlanadi.

## Taqdim etish

1. Kamida ikkita sahna qoʻshing.
2. Roʻyxat ostidagi {{ui:Ijro}} tugmasini bosing. ModelCraft har bir necha soniyada keyingi sahnaga oʻtadi va oxirgisidan keyin birinchisiga qaytadi.
3. Toʻxtatish uchun {{ui:Toʻxtatish}} (oʻsha tugma) ni bosing yoki {{key:Esc}} ni bosing.

Quyosh tadqiqoti uchun har bir soat uchun bitta sahna qoʻshing, faqat {{ui:Vaqt}} oʻzgartirilgan holda, soʻng ularni ijro eting. Qarang: [Uslublar va quyosh soyalari](topic:styles-shadows#a-sun-study).

Panelsiz taqdim etish uchun {{key:Ctrl+Shift+F}} ni ikki marta bosing: toʻliq ekran, soʻng panellar yashirilgan toʻliq ekran. Sahna yorliqlari koʻrinish ustida qoladi.

## Sahna nimani koʻrsatadi

Sahna saqlanayotganda nima yashirilganini eslab qoladi: [yashirgan](topic:hide-isolate) guruhlar va komponentlar, oʻchirgan [teglar](topic:tags) va qaysi [kesim tekisliklari](topic:sections) kesadi. Sahnaga oʻtish ularni qayta yashiradi yoki koʻrsatadi. Shunday qilib, bir sahna butun uyni, keyingisi tomi tegi oʻchirilgan uyni, undan keyingisi uning kesimini koʻrsatishi mumkin.

Yashirilgan boʻsh yuzalar va qirralar sahnalarning bir qismi emas. Sahnaga oʻtish bekor qilish bosqichi hosil qilmaydi. Oldingi ModelCraft versiyasida saqlangan sahnalar yashirilganlarni oʻz holicha qoldiradi; ularga saqlash uchun Yangilash ni bosing.

## Animatsiyani eksport qilish

{{ui:Animatsiyani eksport qilish}} roʻyxat ostida boʻlib, sahnalarni birinchisidan oxirgisigacha ijro etadi, kamerani ular orasida silliq siljitadi va filmni **WebM** video sifatida saqlaydi (har bir sahna uchun ikki soniya siljish va qisqa pauza). U koʻrinishni koʻrganingizdek, ekrandagi oʻlchamida, [taqdimot koʻrinishida](topic:styles-shadows#presentation-view) (oʻqlar, yoʻriqnomalar va tanlovsiz) yozadi. Saqlamasdan toʻxtatish uchun {{key:Esc}} ni bosing yoki tugmani yana bosing. WebM brauzerlarda va VLC da ijro etiladi, video muharrirlar uni konvertatsiya qiladi.

Oʻlcham tanlab, renderlangan sayr (osmon, quyosh, soyalar, materiallar) uchun {{ui:Render video…}} ni ishlating: animatsiya kalitlari boʻlmasa, u sahnalarni tartibda kamera yoʻli sifatida oladi. Qarang: [Kamera va obyektlarni animatsiya qilish](topic:animation).

## Muhim eslatmalar

- Uslubni oʻzgartirish yoki sahnaga oʻtgandan keyin kamerani siljitish, Yangilash ni bosmaguningizcha sahnani oʻzgartirmaydi.
- Sahnalar Collada, OBJ, glTF, STL yoki IFC ga eksport qilinmaydi.
