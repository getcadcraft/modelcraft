---
title: Tayanchlar, devor qalinligi, boʻshatish va tuzatish
summary: Bosma uchun tayanch kerak boʻlgan joylarni va taxminan qancha kerakligini koʻring, juda yupqa devorlarni toping, qismni drenaj teshiklari bilan belgilangan devor qalinligigacha boʻshating va har bir tuzatishni roʻyxati bilan mesh ni tuzating.
keywords: 3d bosma, tayanchlar, tayanch koʻrinishi, osilma, daraxt tayanchlar, ustun tayanchlar, devor qalinligi, yupqa devorlar, juda yupqa, soplo, boʻshatish, qobiq, drenaj teshigi, smola, tuzatish, mesh tuzatish, teskari yoʻnalish, teshiklar, kichik qobiqlar, oʻzaro kesishish, ustma-ust, birlashtirish
from: 286bde26
---

Bosma printer uchun modelni tayyorlashning toʻrtta vositasi. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} ni oching; dialogdagi **Bosma vositalari** qatorida {{ui:Supports preview}}, {{ui:Wall thickness}}, {{ui:Hollow}} va {{ui:Repair}} bor. Har biri koʻrinish ustida karta sifatida ochiladi; {{ui:Close}} (xoch) uni va uning belgilarini olib tashlaydi. Bir vaqtda bitta karta koʻrinadi.

Har bir vosita bosiladigan narsalar ustida ishlaydi: tanlov, yoki hech narsa tanlanmagan boʻlsa, koʻrinib turgan hamma narsa. {{ui:Hollow}} va {{ui:Repair}} bitta guruh, komponent yoki mesh tanlangan boʻlishini talab qiladi, chunki ular uni oʻzgartiradi.

## Tayanchlar koʻrinishi

Tik holatdan **Osilish burchagi**dan koʻproq ogʻgan yuzlar qizil rangda soyalanadi, va ulardan oddiy tayanchlar (toʻq sariq) pastga chiziladi — stolga yoki ularning ostidagi model qismiga.

- **Osilish burchagi**: 45° — koʻpchilik printerlar tayanchsiz bajara oladigan burchak. Yaxshi koʻprik quradigan printer uchun uni oshiring.
- **Ustunlar**: har bir osilma ostida har 3 mm da toʻgʻri ustun. Hisob ularni 15% tayanch naqshi deb sanaydi.
- **Daraxt**: yaqin nuqtalar oʻrtasi ostida bitta tanaga birlashadi; hech bir shoxi 45° dan koʻproq ogʻmaydi. Daraxtlar odatda kamroq material oladi va stolga kamroq joyda tegadi.

Karta qancha yuza tayanchga muhtojligini, nechta tayanch nuqtasi borligini va ularga taxminan qancha material ketishini aytadi. Modelda turgan tayanchlar (stolda emas) hisobga olinadi: ular u yerda izlar qoldiradi. {{ui:Settings}} da printer stoli tanlangan boʻlsa, stol model ostida chiziladi.

:::note
Bu oldindan koʻrish, slayser emas: haqiqiy tayanchlarni slayseringiz hal qiladi. Juda katta osilmada tayanch nuqtalari kengroq tarqatiladi, shunda koʻrinish tez qoladi; karta buni aytadi.
:::

## Devor qalinligi

Har bir yuz qattiq jism orqali toʻgʻri, qarama-qarshi tomongacha oʻlchanadi. **Ruxsat etiladigan eng yupqa devor** dan kichik devorlar qizil, uning bir yarim barobaridan kichik devorlar esa toʻq sariq: ular chop etiladi, lekin kuchsiz chiqishi mumkin.

Yupqa joylar eng yupqasidan boshlab, qanchalik yupqaligi va har biri qanchalik katta ekani bilan roʻyxatlanadi. {{ui:Show}} kamerani shu joyga buradi.

Printer soplo kengligining taxminan ikki baravaridan yupqaroq devor yasay olmaydi: keng tarqalgan 0,4 mm soplo uchun 0,8 mm (boshlanish qiymati). Smola printerlar kamroq imkon beradi; printeringiz qoʻllanmasini tekshiring.

Juda katta modelda faqat ayrim yuzlar nur yuboradi, qolganlari qoʻshni yuzlarning qalinligini oladi; karta nechtasi oʻlchanganini aytadi.

## Boʻshatish

Boʻshatish tashqi qismni oʻz holicha qoldiradi va ichini olib tashlaydi, siz soʻragan qalinlikdagi devorlarni qoldirib. Smola chop etishda kamroq smola sarflanadi va qurilish platformasiga kamroq tortiladi; filament chop etishda esa toʻldirishga qaraganda kamroq plastik sarflanadi.

1. Guruh, komponent yoki meshni tanlang, keyin {{ui:Hollow}} ni oching.
2. **Devor** ni (boshlash uchun 2 mm) va **drenaj teshiklari** qanchalik keng boʻlishini belgilang.
3. Smola chop etish uchun {{ui:Place a drain hole}} ni bosing, keyin modelning tashqi tomonida qayerga qoʻyilishini bosing: pastda, qurilish platformasiga yaqin, suyuq smola oqib chiqishi uchun. Kerakcha qoʻying; har biri koʻk doira boʻlib koʻrinadi va {{ui:Remove}} bilan roʻyxatlanadi.
4. {{ui:Preview}} boshlanishi qancha narsani olib tashlashini koʻrsatadi.
5. {{ui:Hollow it}} oʻzgarishni amalga oshiradi: {{key:Mod+Z}} bilan bekor qilinadigan bitta qadam.

Natija 3D-bosma tekshiruvi qabul qiladigan bitta yopiq jism: ModelCraft buni avval tekshiradi va agar oʻtmasa, hech narsani oʻzgartirmaydi. Model ikki devordan yupqa boʻlgan joylarda u yaxlit qoladi. Natija — tekis yuzlari yagona yuza boʻlgan guruh, shuning uchun uni {{ui:Push/pull}} bilan modellashtirishda davom etishingiz mumkin; egri qism mayda toʻrda boʻshatilganda esa odatda bunday uchun juda koʻp yuzga ega boʻladi va mesh ga aylanadi, buni holat qatori aytadi.

:::tip
Koʻpchilik shakllar uchun ichki qism tashqi qismning aynan devor qadar ichkariga surilganidir. Burchaklar yoki yupqa qismlar buni imkonsiz qilganda, ModelCraft mayda toʻrda tashqi qismga devor masofasida ergashadi; karta esa qanchalik yaqinligini aytadi (millimetrning bir qismigacha aniqlikda).
:::

## Tuzatish

{{ui:Repair}} tanlangan qismni slayser koʻrgandek tekshiradi, xavfsiz tuzatish mumkin boʻlganlarini tuzatadi va har bir tuzatishni roʻyxatga oladi:

| Tuzatadi | Bu nimani anglatadi |
|---|---|
| Maydoni boʻlmagan uchburchaklar | chiqarib tashlanadi |
| Ikki marta chizilgan uchburchak | bitta nusxa qoldiriladi; oʻziga orqa-orqa chizilgan yuz (qalinligisiz) olib tashlanadi |
| 0,5 mm dan kichik boʻsh boʻlaklar | olib tashlanadi |
| Notoʻgʻri yoʻnalgan uchburchaklar | qoʻshnilariga mos qilib buriladi |
| Teshiklar, tekis yoki yoʻq | har bir teshikning oʻrtasidan yangi uchburchaklar toʻplami bilan yopiladi |
| Ichini tashqariga qaratilgan qism | tashqariga qaratiladi (boshqa qism ichidagi boʻshliq qoldiriladi: u shunday boʻlishi kerak) |

{{ui:Fix the safe ones}} ularning hammasini bitta qadamda bajaradi; uni {{key:Mod+Z}} bekor qiladi va holat qatori har bir tuzatishni roʻyxatlaydi. Tuzatilgan qism tekis yuzlari yagona yuza boʻlgan guruhga aylanadi. Agar u hali ham yopilmasa (**Siz uchun qoldirilgan** ostida biror narsa qolsa) yoki guruh uchun juda koʻp yuzga ega boʻlsa, u mesh ga aylanadi: yuzlari uchburchak boʻlib qoladi, tekis yonlari esa hali ham tekis koʻrinadi. Holat qatori buni aytadi. {{ui:Join overlapping parts}} ham xuddi shunday ishlaydi.

Xavfsiz tarzda tuzatib boʻlmaydigan narsalar **Siz uchun qoldirilgan** ostida roʻyxatlanadi va koʻrinishda binafsha rang bilan belgilanadi; {{ui:Show}} bilan:

- **Uch yoki undan koʻp yuz tutashgan qirralar**: qaysi yuz tegishli ekanini hal qiling va qolganlarini oʻchiring.
- **Oʻzidan oʻtib ketadigan qism**: oʻsha qismni koʻchiring yoki qayta chizing. Qarang: [Yuzlarni kesishtirish](topic:intersect).
- **Yopish uchun juda katta yoki juda chigal teshiklar**: ular ustidan yuzlar chizing.
- **Ustma-ust tushgan alohida qismlar**: slayserlar baribir ularni birlashtiradi. {{ui:Join overlapping parts}} ularni bitta yopiq jismga aylantiradi (u qismlar uchrashgan joyda yuzlarni qayta quradi, shuning uchun bu alohida tugma va hech qachon siz uchun avtomatik bajarilmaydi).

Push/pull guruhlari uchun ularni bir vaqtda bittadan {{ui:Entity info}} › {{ui:Show problems}} / {{ui:Fix}} orqali ham tuzatishingiz mumkin; bu siz chizgan yuzlarni saqlaydi. Qarang: [Qattiq jism asboblari](topic:solids).

Bogʻliq: [Modelni 3D bosmaga tayyorlash](topic:print-3d) · [Boshlovchi uslubi](topic:beginner) · [Hali qurilmagan](topic:not-built-yet#3d-printing)
