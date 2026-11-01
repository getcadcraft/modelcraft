---
title: ModelCraft bilan boshlash
summary: ModelCraft nima uchun ishlatilishi, uni qanday ochish, birinchi qutingiz — toʻrtburchakdan saqlangan modelgacha.
keywords: ishga tushirish, birinchi model, darslik, kirish, quti, massing, 3d, itarish tortish, tez boshlash, yoʻriqnoma, yoʻl-yoʻriq, boshlovchi, 3d ga yangi
from: d47ad719
---

ModelCraft dastlabki loyihalash uchun 3D modelyor: hajmiy tadqiqotlar, xona joylashuvlari, tezkor bino shakllari va ular tashlaydigan soyalar. Yassi shakllar chizasiz, ularni tortib qattiq jismlarga aylantirasiz va ularning yuzalarida chizib ishlashni davom ettirasiz. U veb brauzeringizda ishlaydi, modellaringiz esa kompyuteringizda qoladi.

Agar SketchUp dan foydalangan boʻlsangiz, bilganlaringizning aksariyati oʻz kuchida qoladi: oʻsha asbob harflari, itarish/tortish, aniq oʻlchamlar uchun qiymat maydoni, guruhlar va komponentlar. [Boshqa modelyorlardan kelish](topic:coming-from) farqlarni sanab beradi.

## ModelCraft ni ochish

1. ModelCraft ni Chrome, Edge, Firefox yoki Safarining joriy versiyasida oching. [Brauzerlar va kompyuterlar](common:browsers) ga qarang.
2. 3D koʻrinish paydo boʻlishini kuting: oʻrtada yorugʻ (yoki qorongʻi) soha va "Modellashtirishni boshlash" nomli karta.

Ekranda yuqorida asboblar paneli, chap tomonda {{ui:Obyektlar daraxti}} va {{ui:Komponentlar}}, oʻrtada 3D koʻrinish, oʻng tomonda {{ui:Obyekt maʼlumoti}}, {{ui:Uslub}} va {{ui:Sahnalar}}, pastda esa qiymat maydoni va birliklar bilan holat paneli bor. [ModelCraft ekrani](topic:workspace) har bir qismni tushuntiradi.

:::note
ModelCraft ga WebGL kerak, bu brauzeringizning 3D chizish imkoniyati. Agar ekranning oʻrtasi boʻsh qolsa va asboblar ishlamasa, [Muammolarni bartaraf etish](topic:troubleshooting#the-3d-view-is-blank) ga qarang.
:::

## Avval birliklarni tekshiring

Pastki oʻng burchakka qarang. Birliklar tanlagichi uzunliklar qaysi birlikda oʻlchanishini koʻrsatadi.

- Yangi model brauzeringiz AQSh sozlamasida boʻlsa (shuningdek Liberiya va Myanma) **futlar va duymlarda**, boshqa barcha joylarda esa **millimetrlarda** boshlanadi.
- Oʻzgartirish uchun tanlagichda boshqa birlikni tanlang: {{ui:ft va in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} yoki {{ui:mm}}. Model oʻzi oʻlchamini oʻzgartirmaydi; faqat uzunliklar qanday koʻrsatilishi va birlik yozilmagan raqamlar qanday oʻqilishi oʻzgaradi.

Birlik yozilmagan raqam model birligidan foydalanadi. Futlar va duymli modelda birlik yozilmagan raqam **duym** hisoblanadi, shuning uchun `120` 10 fut degani.

## ModelCraft birinchi modelingizda yoʻl-yoʻriq koʻrsatsin

3D bilan yangimisiz? {{ui:Modellashtirishni boshlash}} kartasida {{ui:Yoʻriqnomali birinchi model}} ni bosing (u {{ui:Koʻrinishlar}} ichida ham bor). Kichik karta sizni toʻrt bosqich orqali yoʻlga soladi: yassi toʻrtburchakdan 3D bosma uchun tayyor modelgacha:

1. Yerda toʻrtburchak chizing.
2. Uni tortib qutiga aylantiring.
3. Qutini bitta obyektga aylantiring (guruh).
4. 3D bosma uchun tekshiring, soʻng 3MF yoki STL faylini yuklab oling.

Karta modelni kuzatadi, tugmalarni emas: bosqich bajarilganda, qanday bajarilganidan qatʼi nazar, keyingisiga oʻtadi, va bekor qilsangiz, bir bosqich orqaga qaytadi. {{ui:Asbobni tanlang}} asbobni siz uchun tanlaydi. Istalgan vaqtda {{ui:×}} bilan yoping.

## Birinchi qutingizni chizing

1. {{key:R}} ni bosing — {{ui:Toʻrtburchak}} asbobi uchun — yoki asboblar panelidagi {{ui:Chizish}} guruhidagi {{ui:Toʻrtburchak}} ni bosing.
2. Koʻrinishning oʻrtasiga yaqin yerda bir marta bosing. Bu birinchi burchak.
3. Kursorni uzoqlashtiring. Toʻrtburchak unga ergashadi va pastdagi qiymat maydoni ({{ui:Oʻlchamlar}} deb belgilangan) uning oʻlchamini koʻrsatadi.
4. Oʻlchamni yozing va {{key:Enter}} ni bosing: masalan `4m,3m`, yoki futlar va duymlarda `16',12'`. Qiymat maydonini avval bosishingiz shart emas; raqam yozsangiz, u oʻsha yerga boradi.

   Siz yerda yassi toʻrtburchak olasiz. Bu **yuza**: atrofida qirralari boʻlgan sirt.

5. {{key:P}} ni bosing — {{ui:Itarish/tortish}} uchun.
6. Toʻrtburchakni bosing, kursorni yuqoriga suring va yana bosing. Yoki toʻrtburchakni bosing va balandlikni yozing, masalan `3m` yoki `10'`, soʻng {{key:Enter}} ni bosing.

   Toʻrtburchak usti, pasti va toʻrtta yon tomoni boʻlgan qutiga aylanadi.

7. {{key:Space}} ni bosib {{ui:Tanlash}} ga qayting, soʻng qutining ustini bosing. Oʻngdagi {{ui:Obyekt maʼlumoti}} uning maydonini koʻrsatadi.

:::tip
Ikki marta bosish oʻrniga sudrashingiz ham mumkin: birinchi burchakda bosing, sudrang va ikkinchisida boʻshating. Ikkala usul ham har bir chizish asbobida ishlaydi.
:::

## Atrofga qarash

- **Orbita:** oʻrta sichqoncha tugmasi (gʻildirak) bilan suring, yoki {{key:O}} ni bosing va chap tugma bilan suring.
- **Surish:** oʻng tugma bilan suring, yoki {{key:Shift}} ni bosib turgan holda oʻrta tugma bilan suring.
- **Kattalashtirish:** gʻildirakni aylantiring. U kursor ostidagi narsaga qarab kattalashtiradi.
- **Hammasini koʻrish:** {{key:Shift+Z}} ni bosing yoki {{ui:Chegaralar}} ni bosing.

Trackpad yoki sensorli ekranda imo-ishoralar boshqacha. [Orbita, surish va kattalashtirish](topic:orbit-pan-zoom) ga qarang.

## Ortga qaytarish

{{key:Mod+Z}} bilan bekor qiling va {{key:Mod+Y}} bilan qayta bajaring, yoki asboblar panelidagi {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} dan foydalaning. ModelCraft model ochiq boʻlganda oxirgi 200 qadamni eslab qoladi. Tarix faylda saqlanmaydi.

## Modelingizni saqlang

1. {{ui:Fayl}} guruhidagi {{ui:Saqlash}} ni bosing yoki {{key:Mod+S}} ni bosing.
2. Brauzer modelingiz nomi bilan fayl yuklab oladi, masalan `Untitled.modelcraft`. Holat paneli qayerga borganini aytadi: "Saved Untitled.modelcraft to your downloads." Yaʼni "Untitled.modelcraft yuklab olishlaringizga saqlandi."

**Saqlash bu yuklab olishdir.** Har bir saqlash yuklab olishlar jildingizda yangi nusxa yaratadi; ochgan faylingizni qayta yozmaydi. Loyiha jildini tartibli saqlash uchun faylni oʻzingiz koʻchiring yoki qayta nomlang. [Ochish, saqlash, import va eksport](topic:files) buning sababini va boshqa imkoniyatlarni tushuntiradi.

:::warning
ModelCraft oʻzi saqlamaydi. Saqlanmagan oʻzgarishlar bilan yorliqni yopsangiz, brauzer avval soraydi ("Leave site?"). Qolishni tanlang, soʻng saqlang.
:::

## Yordam olish

{{key:F1}} ni bosing yoki ilova panelidagi {{ui:Yordam}} ni bosing, bu yordamni model yonida ochish uchun. U ulanishsiz ham ishlaydi. Yordamni yopish uchun {{key:F1}} ni yana bosing yoki yordam ichida {{key:Esc}} ni bosing. [Bu yordamdan foydalanish](common:help) ga qarang.

## Keyin qayerga borish

- [Yuzalarni chiziqlar, toʻrtburchaklar va aylanalar bilan chizish](topic:draw-faces)
- [Yuzalarni itarish va tortish orqali qattiq jismlarga aylantirish](topic:push-pull)
- [Qiymat maydoniga aniq oʻlchamlarni kiritish](topic:value-box)
- [Har bir tugma va sichqoncha harakati](topic:keyboard)
