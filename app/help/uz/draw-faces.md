---
title: Chiziqlar, toʻrtburchaklar, aylanalar va yoylar bilan yuzalar chizish
summary: Yer yoki boshqa yuzalarda tekis yuzalar yasang, ularni chiziqlar bilan boʻling va kerakli tomonlar soni bilan aylana va koʻpburchaklar chizing.
keywords: chizish, chiziq, toʻrtburchak, aylana, koʻpburchak, siljitish, ichkariga siljitish, ramka, chegara, yoy, egri chiziq, spline, silliq, kabel, yoʻl, bukish, radius, yuza, qavat rejasi, tayanch izi, boʻlish, tomonlar, segmentlar, kontur, qalam
from: b6d7b7dd
---

ModelCraftʼda hamma narsa tekis **yuza**dan boshlanadi: qirralar bilan yopilgan sirt. Yuzani toʻgʻridan-toʻgʻri {{ui:Toʻrtburchak}}, {{ui:Aylana}} yoki {{ui:Koʻpburchak}} bilan chizishingiz mumkin, yoki {{ui:Chiziq}} bilan bitta qirrani bir vaqtda chizib kontur hosil qilishingiz mumkin. Yuzalar [Itarish/tortish](topic:push-pull) orqali yaxlit jismlarga aylanadi.

## Toʻrtburchak chizish

1. {{key:R}} tugmasini bosing.
2. Birinchi burchakni bosing: yer sathida yoki modelning istalgan yuzasida.
3. Koʻrsatkichni harakatlantiring. Toʻrtburchak yer sathida (yoki boshlagan yuzangizda) qoladi va qiymat maydoni ({{ui:Oʻlchamlar}}) uning kengligi va chuqurligini koʻrsatadi. Tomonlari teng boʻlsa, maslahatda "Kvadrat" deb yoziladi.

   Boshqa tekislikda chizish uchun unga koʻrsatkichni qaratib turing: birinchi burchakdan oʻtadigan yuza toʻrtburchakni shu yuzada joylashtiradi, birinchi tekislikdan tashqaridagi nuqtaga (uchi, qirra yoki koʻk oʻq) tutib olish esa toʻrtburchakni ikkala burchak orqali tik turgizadi. Yana birinchi tekislikdagi nuqtaga tutib olsangiz, u yana yotib qoladi. Tekislikni saqlab qolish uchun yoʻnalish tugmasini bosing: {{key:Up}} toʻrtburchakni gorizontal (koʻk tekislik) holatda ushlab turadi, {{key:Right}} qizil tekislikda, {{key:Left}} yashil tekislikda. Qulfni ochish uchun yana oʻsha tugmani bosing.
4. Qarama-qarshi burchakni bosing yoki ikki oʻlchamni vergul bilan ajratib kiriting va {{key:Enter}} ni bosing: `4m,3m`, millimetrli modelda `4000,3000`, yoki futda va dyuymda `12',10'6"`.

   Yuza atrofida toʻrtta qirrali yuza paydo boʻladi.

Kiritilgan oʻlchamlar koʻrsatkich qaragan yoʻnalishda qoʻllanadi: kiritayotganingizda koʻrsatkich birinchi burchakdan chapda boʻlsa, toʻrtburchak chapga qarab oʻsadi.

:::warning
Vergul ikki oʻlchamni ajratadi, shuning uchun u oʻnlik belgisi boʻla olmaydi. `2.5m,3m` deb yozing, `2,5m` emas.
:::

## Aylana yoki koʻpburchak chizish

1. Aylana uchun {{key:C}}, koʻpburchak uchun {{key:N}} tugmasini bosing.
2. Tomonlar sonini oʻzgartirish uchun uni bosishdan oldin kiriting: `12s` (yoki faqat `12`) va {{key:Enter}}. Aylana 24 tomon bilan, koʻpburchak 6 tomon bilan boshlanadi. Maslahatda joriy son koʻrsatiladi, va ModelCraft uni keyingi aylana uchun saqlaydi, siz uni oʻzgartirmaguningizcha yoki asbobni almashtirmaguningizcha.
3. Markazni bosing: yer sathida yoki yuzada. Uni yuza markaziga joylashtirish uchun koʻrsatkichni yuza oʻrtasiga ("Yuza markazi") yoki uning qirralaridan biri oʻrtasiga ("Oʻrta nuqta") qaratib turing, koʻrsatkich yuza ichida boʻlsin: aylana oʻsha yuzada chiziladi, hatto uzun quti tor uchida boʻlsa ham.
4. Radiusni belgilash uchun bosing yoki uni kiriting ({{ui:Radius}} qiymat maydonida) va {{key:Enter}} ni bosing.

Aylana koʻp tomonli koʻpburchakdir. Uni itarish/tortish bilan koʻtarganingizda, uning tomonlari yumshatiladi va silindr bitta silliq sirt boʻlib koʻrinadi.

## Yoy chizish

1. {{key:A}} ({{ui:Yoy}}) tugmasini bosing.
2. Yoy boshlanadigan nuqtani, soʻngra tugaydigan nuqtani bosing (yoki ular orasidagi uzunlikni kiriting).
3. Koʻrsatkichni harakatlantirib yoy chiqishini bering va bosing. Bukilish uchlari orasidagi masofaning yarmiga teng boʻlganda maslahatda "Yarim aylana" yoziladi. Yoki oʻrtasi qancha chiqib turishini kiriting: `2` va {{key:Enter}}.

Markaz atrofida yoy chizish uchun buning oʻrniga {{ui:Markaz boʻyicha yoy}} dan foydalaning: markazni bosing, soʻngra yoy boshlanadigan nuqtani (yoki radiusni kiriting), soʻngra tugaydigan nuqtani (yoki burchakni gradusda kiriting, masalan `90`). U 15° qadamlar bilan tutib oladi.

Yuzada boshlangan yoy oʻsha yuzada chiziladi; aks holda u yer sathida yotadi yoki ikki uchi har xil balandlikda boʻlsa tik turadi. Yoyda 12 segment bor; koʻproq uchun chizish paytida `24s` kiriting. Yoylar ham chiziqlar kabi yuzalarni yopadi: toʻrtburchak burchagi orqali oʻtgan yoy uni boʻladi.

## Silliq egri chiziq chizish

{{ui:Egri chiziq}} har bir bosgan nuqtadan oʻtadigan silliq chiziq chizadi: kabel, tutqichning yoʻli, bogʻ chegarasi. U yerdan koʻtarilishi mumkin: nuqtalar istalgan joyda burchaklar, qirralar va yuzalarga tutib olinadi, yoʻnalish tugmalari esa {{ui:Chiziq}} bilan boʻlgani kabi qizil, yashil yoki koʻk tomonni qulflaydi.

1. {{ui:Chizish}} guruhidagi {{ui:Egri chiziq}} tugmasini bosing.
2. Egri chiziq oʻtadigan nuqtalarni bosing. Oxirgi nuqtadan 1 birlik yuqorida boʻlgan nuqta uchun `<0,0,1>` yozib {{key:Enter}} ni bosing, aniq joy uchun `[x,y,z]`, yoki koʻrsatkich tomonidagi shuncha masofadagi nuqta uchun uzunlik kiriting.
3. Tugatish uchun {{key:Enter}} ni bosing yoki ikki marta bosing. Egri chiziqni yopish uchun birinchi nuqtani yana bosing. {{key:Backspace}} oxirgi nuqtani olib tashlaydi.

Egri chiziq bitta boʻlak sifatida tanlanadi. Uni oʻzgartirish uchun uni tanlang va {{ui:Obyekt maʼlumoti}} ichida {{ui:Nuqtalarni tahrirlash}} tugmasini bosing: nuqtalari kvadrat sifatida koʻrinadi. Birini bosing, soʻngra u qayerga borishini bosing (yoki `<dx,dy,dz>` kiriting). {{key:Esc}} nuqtani joyiga qaytaradi va tahrirlashni tugatadi. Yopiq tekis egri chiziq yuza hosil qiladi; yuzani chegaralaydigan egri chiziqni endi tahrirlab boʻlmaydi.

## Siljitish: yuza ichidagi yoki tashqarisidagi chegara

{{ui:Siljitish}} yuza konturini belgilangan masofada ichkariga (yoki tashqariga) nusxalaydi: ramka, chegara, tokcha yoki ekran oynasining shishasi uchun.

1. {{key:F}} tugmasini bosing va yuzani bosing, yoki avval yuzani tanlab, soʻngra {{key:F}} ni bosing.
2. Ichki kontur uchun koʻrsatkichni yuza ichiga, tashqi uchun undan tashqariga harakatlantiring. Yangi kontur ergashadi va maslahatda masofa koʻrsatiladi.
3. Bosing yoki masofani kiriting va {{key:Enter}} ni bosing.

Yuza ikkiga boʻlinadi: ichki yuza va uning atrofidagi ramka (yoki tashqarida yangi halqa). Ikkalasini ham darhol itarish/tortish mumkin: ekran uchun quti chizing, uni qalinligiga itarib chiqing, old yuzani 30 mm ichkariga siljiting va oyna uchun ichki yuzani biroz ichkariga itaring. Yuzadagi teshiklar ham siljitiladi, va yoy yoki aylana bitta (kichikroq yoki kattaroq) egri chiziq boʻlib qoladi.

- **Ikki marta bosing** {{ui:Siljitish}} bilan yuzani, oxirgi masofa boʻyicha yana siljitish uchun.
- **Qirralar:** bitta tekislikda ulangan qirralar zanjirini tanlang (masalan, L harfining ikki chizigʻi), {{key:F}} ni bosing, kerakli tomonga oʻting va masofani kiriting: parallel nusxa chiziladi, burchaklari qiyshiq kesilgan holda.
- Masofa yuza ruxsat beradigandan katta boʻlsa, ModelCraft buni aytadi va hech narsa chizmaydi.

## Yoylar, aylanalar va koʻpburchaklar — egri chiziqlar

Yoyning, aylananing yoki koʻpburchakning istalgan segmentini bosing va butun egri chiziq tanlanadi. {{ui:Obyekt maʼlumoti}} keyin uning radiusini, segmentlarini, burchagini (yoylar uchun) va uzunligini koʻrsatadi. Shu yerga yangi radius kiriting: u markaz atrofida oʻlchamini oʻzgartiradi, uning tekisligida chizilgan yuzalar ergashadi. Egri chiziqning yuzasi bir marta itarilgan yoki tortilgan boʻlsa, uning radiusi oʻsha holicha qoladi.

## Chiziqlar bilan chizish

1. {{key:L}} tugmasini bosing.
2. Chiziq boshlanadigan joyni bosing.
3. Chiziq tugaydigan joyni bosing yoki uzunlikni kiriting va {{key:Enter}} ni bosing. Kiritilgan uzunlik koʻrsatkich koʻrsatgan yoʻnalishda boʻladi.
4. Bosishda davom eting. Har bir bosish oxirgi chiziq tugagan joydan keyingi chiziqni boshlaydi.
5. Konturni birinchi nuqtani yana bosib yoping. Chiziqlar tekis halqa hosil qilsa, u yuza bilan toʻladi va asbob zanjirlashni toʻxtatadi. Istalgan vaqtda toʻxtatish uchun {{key:Esc}} ni bosing.

Qizil, yashil va koʻk yoʻnalishlarga yaqinlashganda chiziqlar ularga ergashadi; chiziq shu rangga kiradi va maslahatda "Qizil oʻqda" deb yoziladi. Yoʻnalishni qulflash va nuqtalarga tutib olish uchun [Yoʻnalish va tutib olish](topic:inference) boʻlimiga qarang.

### Chiziq hech narsaga tegmasa, u qayerga boradi

- Yuzada boshlangan chiziq oʻsha yuzaning tekisligida qoladi.
- Yer sathida yoki boʻsh fazoda boshlangan chiziq boshlangan nuqtasi bilan bir sathda qoladi. Modelga qirra tomondan qarasangiz, u oʻrniga siz tomonga qaragan vertikal tekislikda boradi.
- Chiziqni aniq joyga chizish uchun nuqta kiriting: model ichidagi nuqta uchun `[x,y,z]`, yoki boshlanish nuqtasidan siljish uchun `<dx,dy,dz>`. Qarang: [Aniq oʻlchamlarni kiritish](topic:value-box).

## Yuzani boʻlish

Yuza ustiga chiziq chizing, bir qirradan boshqasigacha (yoki boshqa chiziqlar orqali qirradan qirragacha). Yuza ikkita yuzaga boʻlinadi. Har biri oʻz tomonini va rangini saqlaydi. Yuzada chizilgan toʻrtburchak yoki aylana bilan ham xuddi shunday: shakl kattaroq yuza ichida oʻz yuzasiga aylanadi va u endi teshikka ega boʻladi.

Shunday qilib siz yer plitasida xonalarni, devorda derazani yoki zinapoyada qadamni joylashtirasiz: yuzada konturni chizing, soʻngra yangi yuzani itaring yoki torting.

## Notoʻgʻri tomonga qaragan yuzalar

Har bir yuzaning old va orqa tomoni bor. Orqa tomon koʻk-kulrang koʻrinadi. Yer sathida chizilgan yuzalar yuqoriga qaraydi; boshqa yuzada chizilgan yuzalar oʻsha yuza qaragan tomonga qaraydi.

Agar yuza kutganingizdek old tomoni bilan emas, orqa tomoni bilan koʻrinsa, uni tanlang va {{ui:Obyekt maʼlumoti}} ichida {{ui:Yuzni teskari aylantirish}} tugmasini bosing.

## Chizish paytida nimani koʻrasiz

- Koʻrsatkich tutib olgan joyda rangli belgi va uning nomi pastki chapdagi maslahatda.
- Chiziq yoki shaklning koʻrinishi.
- Jonli oʻlcham qiymat maydonida. Istalgan vaqtda uning ustiga yozishingiz mumkin.

## Shakl kutganingizdek joyda boʻlmasa

- Sensorli ekranda, [Muammolarni bartaraf etish](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen) boʻlimiga qarang.
- Chiziq uzoqdagi biror narsaga tutib olingan boʻlsa, biroz aylantiring: yuza ortida yashiringan nuqtalar hech qachon tutib olinmaydi, lekin uning qirrasidagi nuqtalar tutib olinadi.
- Oxirgi shaklni bekor qilish uchun {{key:Mod+Z}} ni bosing; bitta ortga qaytarish bitta chiziq yoki shaklni olib tashlaydi.
