---
title: Boshqa modelerlardan kelganlar
summary: Itarish/tortish modellash odatlari ModelCraft bilan tugmama-tugma qanday moslashishi va odamlarni chalgʻitadigan farqlar.
keywords: oʻtish, koʻchirish, tanish, farqlar, itarish tortish, modelchi, skp, tezkor tugmalar, odatlar, taqqoslash, oʻlchov qutisi, obyektlar daraxti, obyekt maʼlumoti
from: 74ffd4ac
---

Agar SketchUp da modellashtirgan boʻlsangiz, ModelCraft sizga tanish tuyuladi: yuzlar va itarish/tortish gʻoyasi, xuddi shu asbob harflari, bosmasdan kiritadigan qiymat qutisi, qizil, yashil va koʻk oʻqlar boʻyicha aniqlash (inference), guruhlar, komponentlar, obyektlar daraxti, obyekt maʼlumoti va sahnalar. Bu sahifada toʻgʻridan-toʻgʻri moslashadigan narsalar va — eng muhimi — moslashmaydiganlar sanab oʻtilgan.

## Saqlanib qoladigan odatlar

| Odatingiz | ModelCraft da |
|---|---|
| Tanlash uchun {{key:Space}}; Chiziq uchun L, Toʻrtburchak uchun R, Aylana uchun C bosing | Xuddi shunday: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| P — itarish/tortish, M — koʻchirish, Q — aylantirish, S — masshtab, E — oʻchirgich, T — lenta oʻlchagich | Xuddi shunday: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| O — orbita boʻylab aylantirish, H — surish, Z — kattalashtirish, Shift+Z — hammasini kattalashtirish | Xuddi shunday: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Komponent yaratish uchun G ni bosing | Xuddi shunday: {{key:G}}. {{key:Shift+G}} guruh yaratadi |
| Oʻlchovlar qutisiga bosmasdan yozing | Xuddi shunday, pastdagi qiymat qutisida. {{key:Enter}} ni bosing |
| Toʻrtburchak uchun `4m,3m`, tomonlar uchun `12s` yozing | Xuddi shunday |
| Koʻchirish nusxasidan keyin `3x` yoki `/3` yozing | Xuddi shunday; `*3` ham ishlaydi |
| Nuqta yoki siljish uchun `[x,y,z]` yoki `<dx,dy,dz>` yozing | Xuddi shunday |
| Arxitektura dyuymli modelda faqat raqam kiriting va dyuym oling | Xuddi shunday |
| Oʻrta tugmani surib aylantirish, Shift+oʻrta tugma bilan surib surish, gʻildirak bilan kursor ostida kattalashtirish | Xuddi shunday |
| Itarish/tortish bilan ikki marta bosing: masofani takrorlash | Xuddi shunday |
| Qizil, yashil, koʻkni va parallelni qulflash uchun strelka tugmalari | Xuddi shunday: {{key:Right}} qizil, {{key:Left}} yashil, {{key:Up}} koʻk, {{key:Down}} parallel |
| Aniqlashni qulflash uchun Shift ni ushlab turing | Xuddi shunday |
| Harakat paytida nusxalash uchun Ctrl (Mac da Option) | {{key:Ctrl}}, {{key:Mod}} yoki {{key:Alt}}, istalgan kompyuterda |
| Almashtirish uchun Shift, qoʻshish uchun Ctrl, tanlovdan olib tashlash uchun Shift+Ctrl | Xuddi shunday kalitlar; Mac da Ctrl oʻrniga {{key:Mod}} ishlating |
| Chapdan oʻngga oyna, oʻngdan chapga kesishish | Xuddi shunday |
| Uzunliklarni belgilash uchun Oʻlcham asbobi | {{key:D}}, va yana: yangi uzunlikni oʻlchamga kiriting va model shunga moslashadi. Qarang: [Oʻlcham va oʻlchamini oʻzgartirish](topic:dimensions) |
| Yuzni ikki marta bosing — yuz va qirralar; uch marta bosing — barcha bogʻlangan | Xuddi shunday |
| Guruhni tahrirlash uchun ikki marta bosing; yopish uchun Esc | Xuddi shunday |
| Yuzni boʻlish uchun uning ustidan chiziq chizing; bir tekislikdagi yuzlar orasidagi qirrani oʻchirib, ularni birlashtiring | Xuddi shunday |
| Devorni kesish uchun deraza toʻrtburchagini devor orqali itaring | Xuddi shunday |
| Orqa yuzlar koʻk-kulrang; Yuzlarni teskari aylantirish | Xuddi shunday rang; {{ui:Yuzni teskari aylantirish}} {{ui:Obyekt maʼlumoti}} ichida |
| Sahnalar koʻrinish ustidagi yorliqlar sifatida, Page Up va Page Down | Xuddi shunday, {{ui:Sahnalar}} panelidagi {{ui:Ijro}} bilan |
| Soyalar sana, vaqt, kenglik va uzunlikdan, shimol yashilda | Xuddi shunday, {{ui:Uslub}} panelida |

## Odamlarni chalgʻitadigan farqlar

### Saqlash bu yuklab olish

Ochgan faylingizni ustidan yozadigan {{ui:Saqlash}} yoʻq, nom bilan {{ui:Boshqacha saqlash}} dialogi ham, avtomatik saqlash va zaxira fayl ham yoʻq. {{ui:Saqlash}} ({{key:Mod+S}}) har safar yangi `.modelcraft` faylini yuklab oladi, odatda yuklamalar jildiga. Tez-tez saqlang va fayllarni oʻzingiz nomlang yoki koʻchiring. Qarang: [Ochish, saqlash, import va eksport](topic:files).

### U .skp fayllarni import qiladi, lekin saqlamaydi

{{ui:Import}} SketchUp fayllarini ModelCraft oʻzining oʻqish vositasi bilan, sahifaning ichida oʻqiydi: guruhlar, komponentlar, ranglar, yuzlardagi teksturalar, teglar va yumshoq qirralar oʻtadi. Qarang: [Fayl formatlari batafsil](topic:formats#skp-files). ModelCraft `.skp` ni saqlay olmaydi: qaytish uchun ModelCraft dan Collada eksport qiling va uni SketchUp da import qiling.

### Oʻng tugma menyusi yoʻq

Oʻng tugmani surish koʻrinishni suradi; oʻng tugma bosilganda hech narsa boʻlmaydi. Kontekst menyusida topadigan buyruqlar {{ui:Obyekt maʼlumoti}} ichida ({{ui:Yuzni teskari aylantirish}}, {{ui:Tahrirlash}}, {{ui:Parchalash}}, {{ui:Yagona qilish}}, {{ui:Komponent yaratish}}) va asboblar panelidagi {{ui:Tartiblash}} guruhida.

### Oʻlchov birliklari holat panelida

Model maʼlumoti yoki shablon tanlovi yoʻq. Birlik tanlagichi pastki oʻng burchakda. Yangi model AQShda futlar va dyuymlarda, boshqa joylarda millimetrlarda boshlanadi — brauzeringizning til sozlamasiga qarab. Oʻnlik kasrlar doim nuqta bilan yoziladi: `2.5m`, `2,5m` emas, chunki vergul doim qiymatlarni ajratadi.

### Boʻyashning oʻz materiallari bor

{{ui:Boʻyash}} ({{key:B}}) qattiq ranglarni va {{ui:Materiallar}} boʻlimidagi materiallarni boʻyaydi: gʻisht, tashqi qoplama, tom qoplamasi, yogʻoch, tosh va boshqalar, ModelCraft ularni chizadi. Hali oʻz rasmingizni material sifatida yuklay olmaysiz; import qilingan fayllar bilan kelgan teksturalar saqlanadi. Qarang: [Ranglar va materiallar bilan boʻyash](topic:paint).

### Masshtab bir xil, tutqichsiz

Masshtab tutqichli quti koʻrsatmaydi. Qolgan nuqtani, yaʼni tayanch nuqtani bosing, soʻng yangi oʻlchamni yoki yozilgan koeffitsiyentni kiriting. U doim barcha yoʻnalishda bir xil masshtablaydi. Bitta yoʻnalishda choʻzish uchun itarish/tortish yoki yuzni koʻchirish, yoki guruh kengligi, chuqurligi yoki balandligini {{ui:Obyekt maʼlumoti}} ichida qayta kiriting, yoki [oʻlcham bilan oʻlchamini oʻzgartiring](topic:dimensions).

### Aylantirish tekisligini bosgan joyingizdan tanlaydi

Strelka tugmalari bilan tekislikni tanlash uchun yuzlarga yopishadigan transportir yoʻq. Yuzning markazini bosing — u yuzning tekisligida buriladi, yoki yerda bosing — vertikal oʻq atrofida buriladi. Birinchi bosishdan oldin strelka tugmalari koʻrinishni aylantiradi.

### Oʻtib ketgan nuqtalardan aniqlash

ModelCraft oʻq yoʻnalishlarini **boshlangʻich nuqtangizdan** va kursor ostidagi nuqtalar, qirralar va yuzlarga tortadi. U faqat ustidan oʻtgan nuqtadan yoʻnalishni kuzatmaydi (nuqtali "nuqtadan" aniqlash). Uzoqdagi burchak bilan tekislash uchun oʻqni strelka tugmasi bilan qulflang va oʻsha burchak ustiga olib boring: qulflangan nuqta unga tekislanadi. Yoki [yoʻriqnoma](topic:guides-measure) qoʻying.

### Parallel boshlashdan oldin oʻtgan qirrani ishlatadi

Parallel va perpendikulyar aniqlash **birinchi bosishdan oldin** kursor kesib oʻtgan oxirgi qirrani ishlatadi, chizish paytida ustidan oʻtgan qirralarni emas. Qarang: [Aniqlash va tortish](topic:inference#parallel-and-perpendicular).

### Guruh nusxalari bogʻlangan

{{ui:Koʻchirish}} bilan guruhni nusxalash xuddi shu guruhning ikkinchi joylashuvini yaratadi, shuning uchun birini tahrirlash ikkalasini ham oʻzgartiradi, komponentlarda boʻlgani kabi. SketchUp guruhlarni mustaqil qiladi. Qarang: [Muammolarni hal qilish](topic:troubleshooting#editing-one-group-changed-another).

### Space surmaydi

{{key:Space}} {{ui:Tanlash}} ni tanlaydi, xuddi SketchUp dagidek. Baʼzi boshqa veb-ilovalarda Space ni ushlab turish suradi; bu yerda undaq emas. Oʻrniga oʻng tugma bilan surib suring.

### Ikki barmoq bilan aylantirish kattalashtiradi

Sensorli panelda {{ui:Sozlamalar}} › {{ui:ModelCraft}} › Aylantirish boʻlimida Sensorli panelni tanlang: ikki barmoq orbitada aylantiradi, {{key:Shift}} va ikki barmoq suradi, barmoqlarni qisish kattalashtiradi. Qarang: [Aylantirish, surish va kattalashtirish](topic:orbit-pan-zoom#on-a-trackpad).

Agar tugmalarni SketchUp emas, Blender dan bilsangiz, {{ui:Modelchi}} menyu uslubini tanlang: {{key:G}}, {{key:R}} va {{key:S}} tanlovga bir vaqtda taʼsir qiladi, {{key:E}} ekstrudlaydi (itarish/tortish), {{key:Shift+D}} nusxa koʻchiradi, va sarlavha menyu paneli (Fayl, Tahrirlash, Koʻrinish, Tanlash, Qoʻshish, Obyekt, Toʻr) asboblar panelini almashtiradi. SketchUp dan kelganda, {{ui:Itarish-tortish}} uslubi xuddi shu asbob harflari ustida oʻz menyu panelini beradi. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).

### Bir-biriga itarilgan jismlar kesilmaydi

Itarish/tortish bir obyektda orqasidagi yuzni kesib oʻtadi, lekin bir-biriga itarilgan ikkita alohida jism kesishmaydi. Yuzlarni kesishtirish va qattiq jism asboblari yoʻq.

### Yoʻq narsalar

Erkin chizish, Kesish (Trim), Boʻlish (Split) va Tashqi qobiq, oʻz rasm materiallaringiz, kengaytmalar hamda varaqlar uchun maketlash asbobi bu versiyada yoʻq. [Hali amalga oshirilmagan](topic:not-built-yet) da nima qilish kerakligi sanab oʻtilgan.

## Brauzer saqlab qoladigan tugmalar

ModelCraft brauzerda ishlaydi, shuning uchun bir nechta tugma ilovaga emas, brauzerga tegishli. {{key:Mod+N}} brauzer oynasini ochadi (foydalaning: {{ui:Yangi}}), va {{key:Mod+W}} yorliqni yopadi. Saqlanmagan oʻzgarishlar boʻlsa, brauzer yopishdan oldin soʻraydi. Qarang: [Tugmalar, sichqonchalar va sensorli panellar](common:keys#shortcuts-the-browser-keeps).
