---
title: Har qanday xususiyatni animatsiya qiling, egri chiziqlar bilan shakllantiring va kliplarni aralashtiring
summary: Animatsiya ish maydoni obyektning joyi, burilishi va oʻlchamini, chiroqning yorqinligi, yoyilishi va rangini, linzani hamda toʻrning shakl kalitlarini kalitlaydi; armaturalar toʻrni suyaklar va boʻyalgan vaznlar bilan egadi; IK va cheklovlar suyaklar va obyektlarga yetib borish, qarash, nusxalash, chegaralar ichida turish, boshqalardan osilish yoki ularni kuzatish imkonini beradi; qattiq jismlar tushadi, uyiladi va toʻqnashadi hamda kalitlarga hisoblab yoziladi; drayverlar qiymatni boshqalardan oladi; vaqt chizigʻining Egri chiziqlar koʻrinishi har bir oʻzgarishni Bézier dastaklari va sikllar bilan shakllantiradi, Kliplar koʻrinishi esa animatsiyalarni qayta joylashtiriladigan va aralashtiriladigan harakatlar sifatida saqlaydi.
keywords: fizika, qattiq jism, qattiq jismlar, simulyatsiya, simulyatsiya qilish, tushirish, tushish, tortishish, toʻqnashish, toʻqnashuv, uyish, sakrash, ishqalanish, hisoblab yozish, hisoblab yozilgan, IK, teskari kinematika, cheklov, cheklovlar, qarash, kuzatish, nishonga olish, oʻzgarishlarni nusxalash, joyni nusxalash, burilishni nusxalash, burilish chegarasi, chegaralar, tobe, ota, yoʻlni kuzatish, yoʻl, qutb, FABRIK, zanjir, armatura, skelet, suyaklar, suyak, skelet, teri, vaznlar, vaznlarni boʻyash, uchlar guruhlari, avtomatik vaznlar, suyak issiqligi, poza, poza rejimi, ikki kvaternion, chiziqli aralashtirish, shakl kalitlari, shakl kaliti, morf, morflar, morf nishonlari, aralashtirilgan shakllar, yuz, ifoda, drayver, drayverlar, ifodalar, animatsiya ish maydoni, animatsiya, animatsiya qilish, kadr kaliti, kalit, kalitlar, xususiyat, xususiyatlar, oʻzgartirish, joy, aylantirish, masshtab, chiroq, yorqinlik, rang, linza, koʻrish maydoni, FOV, grafik muharrir, egri chiziqlar, egri chiziq, Bézier, dastaklar, tangens, interpolyatsiya, sikl, sikllar, takrorlash, halqa, oldinga-orqaga, siljish, kalitlar jadvali, kalitlarni tanlash, quti bilan tanlash, kalitlarni nusxalash, kalitlarni qoʻyish, kalitlarni choʻzish, kalitlarni masshtablash, kliplar, harakatlar, NLA, aralashtirish, aralashtirish, taʼsir, zaxiraga olish
from: 16d8e12f
---

[Vaqt chizigʻi](topic:animation) kamerani va butun guruhlar hamda komponentlarni harakatlantiradi. **Animatsiya** ish maydoni buning ustiga koʻp narsani kalitlaydi, vaqt chizigʻi esa kalitlagan narsalaringizni shakllantirish va qayta ishlatish uchun yana ikki koʻrinish oladi.

## Ochish

Asboblar panelidagi ish maydonlari roʻyxatidan {{ui:Animate}} ni tanlang. Vaqt chizigʻi koʻrinish ostida ochiladi, asboblar panelida Animatsiya guruhlari koʻrinadi ({{ui:Kalitlar}}, {{ui:Ijro}}, {{ui:Vaqt chizigʻi}}), oʻngdagi panel esa ijro koʻrsatkichida kalitlash mumkin boʻlgan narsalarni sanab beradi.

## Xususiyatni kalitlash

Panel ijro koʻrsatkichida quyidagilarni sanaydi:

- **Tanlangan obyekt**: uning {{ui:Joylashtirish}}, {{ui:Burilish (°)}} va {{ui:Oʻlcham}} qiymatlari, har biri uchtadan raqam. Raqam kiriting va {{key:Enter}} tugmasini bosing: u ijro koʻrsatkichida kalitlanadi va obyekt oʻsha yerga koʻchadi. Qator yonidagi rombcha qiymatni hozirgi holatida kalitlaydi; toʻldirilgan romb ijro koʻrsatkichida allaqachon kalit borligini bildiradi.
- **Chiroqlar**: har bir chiroqning {{ui:Yorqinlik (lm)}}, {{ui:Yoyilish (°)}} (projektor chiroqlari uchun) va {{ui:Rang}} xususiyatlari.
- **Kamera**: {{ui:Linza burchagi (°)}}, kamera harakatlanayotganda kattalashtirish uchun.

{{ui:Kalit oʻzgartirish}} ({{key:I}} tugmasi bilan ham) tanlangan har bir guruh yoki komponentning joyi, burilishi va oʻlchamini bir vaqtda kalitlaydi; {{ui:Kamera kaliti}} ({{key:K}}) kamerani kalitlaydi. {{ui:Avtomatik kalit}} yoqilgan boʻlsa, joyi, burilishi va oʻlchami shu usulda kalitlangan guruh har safar koʻchirilganda yangi kalit oladi.

Burilishlar uchta burchak: avval X, soʻng Y, soʻng Z oʻqi atrofida. 180° dan oshgan kalitlangan burilish oʻsha yoʻnalishda davom etadi (190° 190° boʻlib qoladi, −170° emas), shuning uchun gʻildirak bir necha marta aylanishi mumkin.

:::tip
Vaqt chizigʻida {{ui:Tanlangan kalit}} bilan kalitlangan guruhda butun joylashuv kalitlari boʻladi. Uning qatoridagi egri chiziq tugmasi ularni joy, burilish va oʻlcham egri chiziqlariga aylantiradi (har bir kalitda bir xil joylashuv bilan), shunda ularni {{ui:Egri chiziqlar}} da shakllantirish mumkin.
:::

## Shakl kalitlari (morflar)

**Shakl kaliti** — bu bir xil [toʻr](topic:meshes)ning boshqa shakli: yuzdagi tabassum, eshikning boʻrtishi, egilgan barg. Uning surgichi toʻrning hozirgi holatidan (0) oʻsha shaklga (1) qadar aralashtiradi; bir necha kalit qoʻshiladi.

1. Animatsiya ish maydonida toʻrni tanlang: panelda {{ui:Shakl kalitlari}} koʻrinadi.
2. {{ui:Shakl kaliti qoʻshish}} tugmasini bosing. ModelCraft yangi kalit tahrirlanayotgan [toʻr ish maydoni](topic:mesh-edit)ga oʻtadi: nuqtalarni siljiting, choʻzing, haykaltaroshlik qiling — toʻrni kerakli shaklga aylantiring.
3. Animatsiya ish maydoniga qaytib, {{ui:Tayyor}} tugmasini bosing. Toʻr avvalgi holatiga qaytadi, kalit esa oʻzgarishingizni saqlab qoladi.

Keyin aralashtirish uchun kalitning surgichini suring (yoki qiymat kiriting). Rombcha qiymatni ijro koʻrsatkichida kalitlaydi, shuning uchun kalit vaqt oʻtishi bilan kuchayishi va soʻnishi mumkin; traektoriyasi boʻlgach, yangi qiymat ijro koʻrsatkichida kalitlanadi. Qalam kalit shaklini yana tahrirlaydi (toʻr {{ui:Tayyor}} tugmasigacha uni toʻliq koʻrsatadi; {{ui:Bekor qilish}} kalitni avvalgi holatida qoldiradi), koʻz belgisi kalitni oʻchirib qoʻyadi, chiqindi qutisi esa uni olib tashlaydi.

Kalitni tahrirlash paytida qoʻshgan uch nuqta toʻrning oʻziga tegishli: u qoʻyilgan joyida qoladi, har bir shaklda.

:::note
Shakl kalitlari toʻrni [modifikatorlar](topic:modifiers) oldidan siljitadi: Subdivision modifikatori aralashtirilgan shaklni silliqlaydi. Render qilingan rasmlar va videolar kalitlarni har bir kadrda koʻrsatadi.
:::

## Armaturalar: toʻrni egadigan suyaklar

**Armatura** — [toʻr](topic:meshes) ichidagi suyaklar toʻplami. Suyaklarni poza qilsangiz, toʻr ularga ergashadi, har bir nuqta esa **vaznlari** koʻrsatganicha.

1. Animatsiya ish maydonida toʻrni tanlang va panelda {{ui:Armatura qoʻshish}} ni bosing (yoki {{ui:Skelet}} guruhidagi {{ui:Suyak qoʻshish}} ni): birinchi suyak toʻrning oʻrtasi boʻylab uning tagidan yuqoriga ketadi.
2. Suyak tanlangan holda, {{ui:Pastki suyak qoʻshish}} keyingisini uning uchidan qoʻshadi. Panelda istalgan suyakning {{ui:Bosh}}, {{ui:Uchi}}, {{ui:Aylanish (°)}} va {{ui:Osilgan suyak}} qiymatlarini belgilang; boshqa suyakdan osilgan suyak u bilan birga harakatlanadi. Faqat boshqalarni boshqaradigan suyak uchun {{ui:Setkani harakatlantiradi}} belgisini olib tashlang.
3. {{ui:Avtomatik vaznlar}} ni bosing: har bir suyak oʻziga eng yaqin nuqtalarni ushlaydi va bu ushlash toʻr boʻylab silliq tarqaladi, shunda ikki suyak orasidagi nuqtalar ularni boʻlishadi. {{ui:Faqat eng yaqin suyaklar}} tezroq va qattiqroq boʻlinish.

**Suyaklarni poza qiling** {{ui:Poza}} ({{key:P}}) bilan: suyakni tanlash uchun bosing, koʻrinish oʻqi atrofida burish uchun suring, koʻchirish uchun {{key:Shift}} bilan suring. Yoki uning {{ui:Joylashtirish}}, {{ui:Burilish (°)}} va {{ui:Oʻlcham}} qiymatlarini {{ui:Poza}} ostida kiriting; burilishlar suyakning oʻz oʻqlarida, uning dam holatidan hisoblanadi. Rombchalar va {{ui:Butun pozani kalitlash}} pozani ijro koʻrsatkichida kalitlaydi; suyakda kalitlar boʻlgach, uni pozalash u yerda kalitlaydi. {{ui:Bu suyakni tiklash}} va {{ui:Pozani tiklash}} suyaklarni dam holatiga qaytaradi.

**Vaznlarni boʻyash** ({{key:W}}) tanlangan suyak uchun: toʻr dam holatida koʻrinadi, har bir yuz suyak uni qanchalik ushlashiga qarab rangli boʻladi — qizil hammasi, koʻk hech narsa. Ushlashni qoʻshish uchun boʻyang ({{key:Mod}} uni olib tashlaydi, {{key:Shift}} silliqlaydi); {{ui:Oʻlcham (px)}} va {{ui:Kuch}} cho'tkani sozlaydi. {{ui:Har bir nuqtaning ogʻirliklari yigʻindisi 1 boʻlib qolsin}} belgilangan boʻlsa, bir suyakka qoʻshimcha berilsa, boshqalardan shuncha olinadi. Har bir chiziq modelning ortga qaytarish bosqichlaridan bittasi.

{{ui:Teri}} suyaklar orasidagi nuqta qanday harakatlanishini tanlaydi: {{ui:Chiziqli (tez)}} suyaklar harakatlarini aralashtiradi va egilgan boʻgʻimni biroz siqadi; {{ui:Ikki kvaternion (boʻgʻimlarda hajmni saqlaydi)}} esa nuqtani boʻgʻim atrofida aylantiradi, shunda tirsak yoki tizza qalinligini saqlaydi ({{ui:Oʻlcham}} qiymati teriyi choʻzmaydi).

:::note
Avval shakl kalitlari, soʻng armatura, keyin [modifikatorlar](topic:modifiers) qoʻllanadi. Koʻrinish, rasmlar va videolarning hammasi pozalangan toʻrni koʻrsatadi; toʻrning vaznlari u bilan birga, suyaklar va ularning pozasi esa animatsiya bilan birga saqlanadi.
:::

## IK va cheklovlar

**Cheklov** suyak yoki obyektni kalitlaridan keyin qoida boʻyicha harakatlantiradi. Obyektni tanlang (yoki armaturada suyakni) va {{ui:Cheklovlar…}} ostiga bittasini qoʻshing; bir nechtasi koʻrsatilgan tartibda ishlaydi (strelkalar tartibni oʻzgartiradi), va har birida {{ui:Qanchalik kuchli}} (0 dan 1 gacha, har qanday xususiyat kabi romb bilan kalitlanadi) va yoqish/oʻchirish tugmasi bor.

| Cheklov | Uchun | Nima qiladi |
|---|---|---|
| {{ui:Yetib borish (IK)}} | Suyaklar | Suyak va undan osilgan suyaklar ({{ui:Zanjirdagi suyaklar}}) egiladi, shunda uchi nishonga yetadi. Ikki suyak va {{ui:Qutb (egilish unga qaraydi)}} bilan tirsak yoki tizza qutb tomon qaraydi; uzunroq zanjirlar silliq egiladi. Yetib boʻlmasa, zanjir toʻgʻridan nishonga qaraydi. |
| {{ui:Qaratish}} | Ikkalasi | Aylanadi, shunda {{ui:Qaratiladigan oʻq}} nishonga qaraydi, {{ui:Yuqorida saqlanadigan oʻq}} esa imkon qadar yuqoriga yaqin turadi. |
| {{ui:Oʻzgarishlarni nusxalash}} | Ikkalasi | Nishonning joyi, burilishi yoki oʻlchamini oladi — belgilanganlarini. |
| {{ui:Chegaralar}} | Ikkalasi | Oʻz joyi, burilishi (gradus) yoki oʻlchamini har bir oʻq boʻyicha {{ui:min}} va {{ui:max}} oraligʻida ushlab turadi; juftlikni boʻsh qoldirsangiz, oʻq erkin qoladi. |
| {{ui:Tobe boʻlish}} | Ikkalasi | Nishon bilan birga harakatlanadi, xuddi undan osilgandek, nishonni tanlaganingizda ikkalasi turgan joydan boshlab. |
| {{ui:Yoʻlni kuzatish}} | Obyektlar | [Egri chiziq obyekti](topic:curves)da {{ui:Egri chiziq boʻylab}} turadi (0 — boshi, 1 — oxiri; harakatlanish uchun kalitlang), va {{ui:Egri chiziq boʻylab burish}} bilan unga qarab yoʻnaladi. |

Nishon ochiq guruhdagi boshqa obyekt, bir armaturadagi suyak yoki kiritgan {{ui:Nuqta}} boʻlishi mumkin (obyektning nuqtasi model koordinatalarida, suyakning nuqtasi esa uning toʻridagi koordinatalarda). IK oyogʻi uchun nishonni oyoq boʻlishi kerak boʻlgan joyga qoʻying va nishonni kalitlang, yoki {{ui:Qanchalik kuchli}} ni kalitlang, shunda oyoqni kalitlar va IK oʻrtasida uzatasiz.

:::tip
Yoʻlni kuzatayotgan obyektga qaraydigan obyekt uni yoʻlda koʻradi: ModelCraft obyektlarning tartibiga qaramay, avval nishonlarni hisoblaydi.
:::

## Fizika: tushirish, uyish va toʻqnashish

Obyektlarni tushiring va bir-biriga urilishiga ruxsat bering, soʻng natijani kalitlar sifatida saqlang.

1. Guruh, komponent yoki toʻrni tanlang va uning {{ui:Qattiq jism}} ni {{ui:Fizika}} ostida belgilang: {{ui:Tushadi va toʻqnashadi}} (u harakatlanadi) yoki {{ui:Joyida turadi, boshqalarga toʻsqinlik qiladi}} (stol, devor, qiya tekislik). Tushayotgan obyektga {{ui:Shakl}} qiymatini bering — {{ui:Quti (oʻz chegaralari boʻyicha)}} yoki {{ui:Shar (chegaralari atrofida yumaloq)}}, shuningdek {{ui:Massa (kg)}}, {{ui:Ishqalanish}} va {{ui:Sakrash}} ni (0 — gursillaydi, 1 — xuddi shuncha baland qaytadi).
2. {{ui:Butun model}} ostida {{ui:Boshlanishi (s)}} va {{ui:Tugashi (s)}} ni, {{ui:Tortishish (m/s², pastga)}} ni hamda {{ui:Quriladigan yer}} boʻlsinmi yoki yoʻqmi (va uning balandligi) ni belgilang.
3. {{ui:Fizikani hisoblab yozish}} ni bosing (panelda yoki {{ui:Fizika}} guruhida). Har bir tushayotgan obyekt ikki vaqt oraligʻidagi har bir kadrda joy, burilish va oʻlcham kalitini oladi; uni xuddi har qanday animatsiya kabi ijro eting.

Qayta hisoblab yozish bu kalitlarni almashtiradi; {{ui:Hisoblangan kalitlarni oʻchirish}} ularni olib tashlaydi. Obyektlar dam holatida boshlanadi: ularning kalitlari, egri chiziqlari va cheklovlari ularni {{ui:Boshlanishi (s)}} vaqtida qayerga qoʻygan boʻlsa, oʻsha yerda (undan oldingi kalitlangan harakat tushishga davom etmaydi). Koʻproq {{ui:Kadrda qadamlar}} baland uyumlarni barqarorroq qiladi; holat paneli oxirida biror narsa hali ham harakatlanayotganini aytadi.

:::note
Shakllar — har bir obyekt chegaralari atrofidagi qutilar va sharlar; quti oʻz burchaklari, qirralarining oʻrtasi va yuzlarining oʻrtasi bilan tegadi, shuning uchun qutilar kutilganidek uyiladi va agʻdarilib ketadi. Mato, suyuqliklar, obyektlar orasidagi boʻgʻinlar va aniq shakllar hali amalga oshirilmagan.
:::

## Drayverlar

**Drayver** shakl kalitini qoʻlda emas, boshqa narsalardan oʻrnatadi: kalitning drayverini oching (kalkulyator tugmasi), **ifoda** yozing va undagi har bir nomga nima oʻqishini bering ({{ui:Oʻqiydi}}): soniyadagi vaqt, kadr, joylashuvning joyi, X, Y yoki Z boʻylab burilishi yoki oʻlchami, chiroqning yorqinligi yoki boshqa shakl kaliti. Masalan, `v` eshikning Z boʻylab burilishini oʻqisa, `clamp(v / 90, 0, 1)` eshik ochilganda shaklni ochadi.

Ifodalarda raqamlar, nomlar, `+ - * / % ^` amallari va qavslar hamda funksiyalar ishlatiladi: `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, `pi` va `e` konstantalari bilan. Xato koʻrsatiladi va hech narsani oʻzgartirmaydi. Drayver boshqargan kalitning surgichi drayver qiymatini koʻrsatadi; drayver siz uni olib tashlaguncha kalit traektoriyasidan ustun turadi.

## Kalitlarni tanlash va oʻzgartirish (Kalitlar koʻrinishi)

{{ui:Kalitlar}} har bir traektoriya uchun bitta qatorni koʻrsatadi: kamera, har bir harakatlanayotgan guruh va har bir xususiyat ("Chiroq 2 · Yorqinlik (lm)"; xususiyat kalitlari dumaloq boʻladi).

- Kalitni tanlash uchun bosing; {{key:Shift}} bilan bosish yoki {{key:Mod}} bilan bosish tanlovga kalit qoʻshadi yoki undan olib tashlaydi. Qatorlar ustida {{key:Shift}} bilan surish ichidagi barcha kalitlarni qoʻshadigan quti chizadi.
- Tanlangan kalitni surib, hammasini koʻchiring; {{key:Left}} / {{key:Right}} ularni bir kadrga koʻchiradi ({{key:Shift}} bilan: oʻn kadr).
- {{key:Mod+C}} tanlangan kalitlarni nusxalaydi, {{key:Mod+V}} ularni ijro koʻrsatkichidan oʻsha traektoriyalarga qoʻyadi (boshqa ModelCraft yorligʻi ham ularni qoʻyishi mumkin).
- {{ui:Choʻzilish}} tanlangan kalitlarni ijro koʻrsatkichidan yonidagi raqam boʻyicha yoyadi (2 = ikki baravar uzoqroq; 0.5 ularni yaqinlashtiradi).
- Yumshatish roʻyxati tanlangan har bir kalit keyingisiga qanday oʻtishini belgilaydi.

## Egri chiziqlarni shakllantirish (Egri chiziqlar koʻrinishi)

{{ui:Egri chiziqlar}} har bir sonning vaqt boʻyicha grafigi: vaqt boʻylab, qiymat yuqoriga. Chapdagi roʻyxatda koʻrsatiladigan egri chiziqlarni belgilang (X, Y va Z qizil, yashil va koʻk).

- Kalitni (kvadratni) tanlash uchun bosing, koʻprogi uchun {{key:Shift}} bilan bosing yoki quti suring. Tanlangan kalitni surib, uning vaqti va qiymatini oʻzgartiring; bir nechtasi tanlangan boʻlsa, surish ularni vaqt boʻylab koʻchiradi.
- Tanlangan kalit ikkita **dastak**ni koʻrsatadi. Birini suring — egri chiziq shu tomonda shakllanadi. {{ui:Dastaklar}} ularning xatti-harakatini belgilaydi: {{ui:Avtomatik}} (atrofidagi kalitlardan silliq egri chiziq), {{ui:Keyingi kalitga qaratilgan}}, {{ui:Tekislangan}} (ikkalasi toʻgʻri chiziqda qoladi, shuning uchun egri chiziqda burchak yoʻq) yoki {{ui:Erkin}}.
- {{ui:Tanlangan kalitlardan}} har bir tanlangan kalitning keyingisiga qanday oʻtishini belgilaydi: {{ui:Egri chiziq (dastaklar)}}, {{ui:Silliqlash}}, {{ui:Bir tekis}}, {{ui:Asta kirish va chiqish}} yoki {{ui:Ushlab turish}}.
- {{ui:Oldin}} va {{ui:Keyin}} egri chiziq kalitlaridan tashqarida nima qilishini belgilaydi: {{ui:Ushlab turish}} (birinchi yoki oxirgi qiymatda qoladi), {{ui:Takrorlash}}, {{ui:Oldinga va orqaga}} yoki {{ui:Takrorlash va davom ettirish}} (har bir takrorlash oxirgisi tugagan joydan boshlanadi: gʻildirak aylanishda davom etadi, piyoda yurishda davom etadi).
- Gʻildirak kattalashtiradi ({{key:Mod}}: faqat qiymatlar; {{key:Shift}}: faqat vaqt); oʻrta tugma bilan yoki {{key:Alt}} bilan surib suring; {{ui:Hammasini koʻrsatish}} yoki {{key:Home}} har bir koʻrsatilgan egri chiziqni sigʻdiradi. Boʻsh joyni bosing — ijro koʻrsatkichi shu yerga koʻchadi. {{key:Delete}} tanlangan kalitlarni oʻchiradi.

Dastaklar vaqt boʻyicha bir-birini kesib oʻtishdan saqlanadi, shuning uchun egri chiziq hech qachon orqaga ketmaydi.

## Animatsiyalarni qayta ishlatish (Kliplar koʻrinishi)

**Klip** vaqt chizigʻida saqlangan animatsiyani (**harakat**) ijro etadi. Kliplar tartib boʻyicha aralashtiriladi, pastki qatorlar yuqoridagilar ustiga; vaqt chizigʻining oʻz traektoriyalari har bir klipdan ustun turadi.

1. Guruhlar va chiroqlarni odatdagidek kalitlang, soʻng {{ui:Kliplar}} ichida {{ui:Klip yaratish}} ni bosing va harakatga nom bering. Traektoriyalar harakatga aylanadi va klip ularni oʻsha joyda ijro etadi (kamera vaqt chizigʻida qoladi).
2. Uni qayta ishlatish uchun harakatni tanlang va {{ui:Klip qoʻshish}} ni bosing: yangi klip ijro koʻrsatkichidan boshlanadi.
3. Klipni qatori boʻylab surib koʻchiring; uni bossangiz, {{ui:Boshlanish (s)}}, {{ui:Tezlik}} (2 = ikki baravar tez), {{ui:Takrorlar}}, {{ui:Qanchalik kuchli}} (0 dan 1 gacha), {{ui:Aralashtirish}} ({{ui:Almashtirish}} yoki undan oldingi kliplar ustiga {{ui:Ustiga qoʻshish}}), {{ui:Klipdan tashqarida}} (hech narsa, uning oxirini ushlab turish yoki ikkala uchini ushlab turish) va {{ui:Oʻchirib qoʻyish}} ni belgilang. Strelkalar tartibni oʻzgartiradi; chiqindi qutisi uni olib tashlaydi (hech bir klip ishlatmaydigan harakat ham u bilan ketadi).

{{ui:Qanchalik kuchli}} toʻliq boʻlmagan klip ostidagi narsadan aralashadi: undan oldingi klip yoki animatsiyasiz qanday boʻlsa, oʻsha holatdagi chiroq yoki joylashuv.

## Qayerda nima ijro etiladi

| Nima | Koʻrinishda | Render qilingan videoda |
|---|---|---|
| Kamera kalitlari, kamera kalitlari bilan linza burchagi | Ha | Ha |
| Joylashuv, burilish va oʻlcham (kalitlar, egri chiziqlar, kliplar) | Ha | Ha |
| Chiroq yorqinligi, yoyilishi va rangi | Ha | Hali yoʻq: video boshlanganda chiroqlar qanday boʻlsa, shundayligicha ishlatiladi (qarang: [hali amalga oshirilmagan narsalar](topic:not-built-yet)) |
| Kamera kalitlarisiz linza burchagi | Ha | Hali yoʻq: kamerani ham kalitlang |
| Shakl kalitlari va drayverlar | Ha | Ha |
| Armaturalar (pozalangan toʻrlar) | Ha | Ha |
| IK va cheklovlar | Ha | Ha |
| Hisoblab yozilgan fizika (kalitlar) | Ha | Ha |

Hammasi `.modelcraft` faylida animatsiyaning qolgan qismi bilan birga saqlanadi, va vaqt chizigʻining {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} tugmalari ularning istalgan qismini qaytaradi.
