---
title: Sahnani oʻyin dvigateliga yuborish
summary: Studio sahnani Unreal Engine loyihasiga yozishi va har bir yuborishda uni yangilab turishi mumkin; sizning tahrirlaringiz CadCraft hech qachon yozmaydigan qatlamda saqlanadi. Uni ochadigan plagin hali chiqarilmagan.
keywords: unreal, unreal engine, oʻyin dvigateli, bogʻlanish, yuborish, USD stage, loyiha, jonli, cine kamera, film render navbati
from: 9a765cc2
---

CadCraft Studio’da Dvigatel roʻyxatida Unreal Engine loyihasiga **bogʻlanish**ni saqlash mumkin. Bu faqat bir yoʻnalishda ishlaydi: CadCraft’dan Unreal’ga.

## Sahnani yuborish

1. Dvigatel roʻyxatidan Unreal yozuvini tanlang. Birinchi marta Studio sizdan loyihangiz jildini (`.uproject` fayli bor jildni) tanlashni soʻraydi; u uni eslab qoladi.
2. {{ui:Yuborish}} tugmasini bosing. Studio loyiha ichiga `CadCraft/<fayl nomi>/` jildini yozadi: sahna USD fayli sifatida, sozlamalar fayli, yorugʻlik profillari va ikkita kichik qatlam fayli.
3. Modelni oʻzgartiring, saqlang va yana yuboring. Faqat sahna va sozlamalar fayli almashtiriladi.

## Sizning tahrirlaringiz xavfsiz

Unreal ochadigan stage bir marta yaratilgan kichik ildiz qatlam boʻlib, uning ostida ikkita qatlam bor: yuqorida **sizniki** (`<name>.user.usda`, boshida boʻsh, CadCraft uni hech qachon qayta yozmaydi) va pastda CadCraft’ning sahnasi. Sizning qatlamingizga saqlagan tahrirlaringiz sahna qayta yuborilganda ham saqlanib qoladi. Unreal darajasiga joylashtirgan yorugʻliklar va boshqa aktyorlar stage’dan tashqarida boʻladi va ularga ham tegilmaydi.

## Studiosiz

Brauzerda yoki Studio Unreal’ni topmaydigan kompyuterda Dvigatel roʻyxatidan **Unreal loyiha jildi (.zip)** ni tanlang va {{ui:Render}} tugmasini bosing. U xuddi shu jildni zip sifatida saqlaydi: uni loyihangizdagi `CadCraft` jildiga ochib joylashtiring. Birinchi marta **Sahna fayllarini qoʻshish** belgisini qoldiring; keyingi saqlashlar uchun uni oʻchiring, shunda zip faqat sahna va sozlamalar faylini oladi va sizning qatlamingiz hech qachon almashtirilmaydi.

:::note
Stage’ni ochadigan, quyosh, chiroqlar, kameralar va ekspozitsiyani qoʻllaydigan, har bir yuborishni kuzatadigan va kameradan render qiladigan Unreal plagini hali **chiqarilmagan** va Unreal’da ishga tushirilmagan. U tayyor boʻlguncha {{ui:Yuborish}} fayllarni loyihaga joylashtiradi, Unreal’ning oʻz USD vositalari esa ularni ochishi mumkin. Birinchi qoʻllab-quvvatlanadigan tizim Windows; macOS undan keyin keladi.
:::
