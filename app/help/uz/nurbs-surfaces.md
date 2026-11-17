---
title: Erkin shaklli sirtlar (NURBS)
summary: Mahsulot qobiqlari, avtomobil va qayiq korpuslari uchun silliq egri chiziqlar va sirtlar — loft, sweep, egri chiziqlar tarmogʻi, toʻrt qirrali yamalar, blendlar, trimlar — G0, G1 va G2 uzluksizligi aniq sirtlarda oʻlchanadi, union, subtract va intersect bilan jismlar, zebra va egrilik koʻrinishlari, skanerga moslangan yuzlar va oʻlchangan xato, hamda STEP yoki IGES fayllari.
keywords: nurbs, skaner, teskari muhandislik, moslash, mesh sirtga, nuqtalar bulutı, stl, trim, kesilgan, teshik, kesish, jism, jismlar, bul, birlashtirish, ayirish, kesishtirish, farq, tikish, yopiq, erkin shakl, sirt, sirtlar, b-spline, bspline, egri chiziq, spline, loft, sweep, rels, tarmoq, coons, yama, blend, moslash, uzluksizlik, g0, g1, g2, urinma, egrilik, zebra, boshqaruv nuqtalari, tugunlar, daraja, step, iges, class a
from: 09887405
---

**Sirtlar** paneli mahsulot qobiqlari, avtomobil korpuslari va qayiq korpuslarida ishlatiladigan silliq egri chiziqlar va sirtlar yasaydi: NURBS, boshqa sirt modellash dasturlari ishlatadigan oʻsha matematika. Hamma narsa aniq sirtlarda oʻlchanadi, siz koʻradigan uchburchaklarda emas. Paneldagi oʻlchamlar **millimetrda**, model qaysi birlikda koʻrsatilishidan qat'iy nazar.

Uni oʻng panelidan oching: {{ui:Sirtlar}} › {{ui:Sirtlar panelini ochish}}. Sirtlari bor model uni oʻzi ochadi.

## Buyruq qanday ishlaydi

1. Buyruqni bosing (masalan, **Loft**). Panel nima kerakligini aytadi: nuqtalar, egri chiziqlar, sirt qirrasi yoki egri chiziq uchi.
2. Ularni tanlang: 3D koʻrinishda bosing yoki roʻyxatdagi har biri yonidagi **Tanlash** (yoki qirra va uch tugmalari) tugmasini bosing. Qirra uchun sirtning oʻsha qirrasi yonini bosing.
3. Sozlamalarni tekshiring (daraja, tolerantlik, uzluksizlik va boshqalar) va **Yaratish** ni bosing.

Nuqtalardan egri chiziqlar har qatorga bittadan yozilgan nuqtalar bilan yaratiladi (`x, y, z` mm da), yoki **Koʻrinishda nuqtalarni tanlash**: har bir bosish chizish asboblari bilan bir xil tutib olishdan foydalanadi; yakunlash uchun <kbd>Enter</kbd> yoki ikki marta bosing, toʻxtatish uchun <kbd>Esc</kbd>.

## Egri chiziqlar

- **Nuqtalar orqali egri chiziq** har bir nuqtadan oʻtadi. **Boshqaruv nuqtalari bilan egri chiziq** esa nuqtalar qafasiga ergashadi.
- **Tugun qoʻshish**, **Darajani oshirish** va **Darajani kamaytirish** egri chiziqni joyidan siljitmasdan tasvirlash usulini oʻzgartiradi (kamaytirish egri chiziq tolerantlikdan koʻproq siljiydigan boʻlsa rad etiladi). **Egri chiziqni qayta qurish** unga boshqaruv nuqtalarining yangi sonini beradi va u qancha siljiganini aytadi.
- **Egri chiziqni moslash** bir egri chiziqning uchini boshqasining uchi bilan G0 (tegish), G1 (bir xil yoʻnalish) yoki G2 (bir xil egrilik ham) bilan uchrashtiradi. **Egri chiziqni blendlash** ikki uch orasiga yangi egri chiziq qoʻshadi.
- **Egri chiziqlarni birlashtirish** va **Egri chiziqni boʻlish**.

## Sirtlar

- **Loft** ikki yoki undan koʻp egri chiziq orqali, **Chiziqli sirt** ikkitasi orasida, **Egri chiziqni ekstruziya** qilish, **Egri chiziqni aylantirib yasash**.
- **Bitta rels boʻylab sweep** profilni buralmasdan yoʻl boʻylab olib yuradi; **Ikki rels boʻylab sweep** profil uchlarini ikkala relsda ushlab turadi. Sweeplar moslashtiriladi: holat satri ular haqiqiy sweepdan qanchalik yaqin qolganini aytadi.
- **Egri chiziqlar tarmogʻidan sirt** egri chiziqlar toʻriga orqali oʻtadi (birinchi tanlovlar profillar, qolganlari yoʻriqlar). **Toʻrt qirradan yama** burchaklarida uchrashgan toʻrtta egri chiziqni toʻldiradi.
- **Sirtni moslash** sirt qirrasini qoʻshni bilan G0, G1 yoki G2 bilan uchrashtiradi; **Sirtni blendlash** ikki qirra orasiga sirt qoʻshadi.
- **Sirtni ofset qilish**, **Sirtni choʻzish** (sirt oldingi yoʻnalishda davom etadi), **Sirtni qayta qurish**, hamda sirtlar uchun tugunlar va daraja.

## Sifatni tekshirish

**Umumiy qirralar** jadvali ikki sirt ulashadigan har bir qirrani sanab chiqadi: tirqish (mm), ular orasidagi burchak (°) va egrilik sakrashi (1/mm), hamda bu uni G0, G1 yoki G2 qiladimi. Siz soʻragandan yomonroq qirra **Muammolar** ichida ham chiqadi (ilova panelidagi ⚠ tugmasi) **Moslash** tuzatishi bilan.

**Koʻrinish turi** › **Zebra chiziqlari** va **Egrilik (Gauss)** aniq sirtdan keladi: chiziqlar qirra ustidan uzilmay oʻtsa, bu G1 degani; chiziqlar kengligini ham saqlasa, bu G2. Egrilik sirt egar boʻlgan joyda koʻk, gumbaz boʻlgan joyda qizil va tekis joyda oq boʻladi. **Boshqaruv nuqtalari** boshqaruv toʻrlarini chizadi.

G0–G2 har bir qirrada 33 nuqtada oʻlchanadi. **G3 va "class A" sifati oʻlchanmaydi** va da'vo qilinmaydi.

## Sirtni trimlash

**Trim** guruhi sirtni shaklini oʻzgartirmasdan kesadi: sirt barcha boshqaruv nuqtalarini saqlaydi, faqat kontur ichidagi qism koʻrsatiladi, sanaladi va yoziladi. **Toʻrtburchakka trim** va **Aylana bilan trim** sirtning har bir yoʻnalishdagi ulushi (0 dan 1 gacha) boʻyicha ishlaydi, shuning uchun koʻrinishda tanlash kerak emas; **Egri chiziq bilan trim** sirt ustida yotgan yopiq egri chiziqni oladi (u sirtga proyeksiya qilinadi va ochiq boʻlsa yoki tolerantlikdan uzoq boʻlsa, soʻzlar bilan rad etiladi). **Teshik kesish** katakchasini belgilang — kontur ichini olib tashlash uchun; uni qoldirsangiz, faqat ichki qism qoladi. Sirtda bitta saqlanadigan kontur va istalgancha teshik boʻlishi mumkin; boshqasini kesib oʻtadigan kontur rad etiladi. **Trimni olib tashlash** sirtni yana butunlay koʻrsatadi. Kesilgan qirralar konturni aniq kuzatadi; panelning Ortga qaytarishi trimni boshqa qadam kabi qaytaradi.

STEP trimni yuzning chegaralari sifatida, IGES esa trimlangan sirt sifatida (entity 144) saqlaydi; ikkalasi ham uni qaytadan oʻqiydi.

## Jismlar va Bul amallari

**Jismlar** guruhi sirtlarni yopiq jismlarga aylantiradi va ularni birlashtiradi. Bu yerda jism — paneldagi oʻz sirtlarining toʻplami, ular birgalikda hajmni yopadi; uning yuzlari trimlari bilan aniq NURBS sirtlar boʻlib qoladi.

- **Quti jism**, **Silindr jism** va **Shar jism** kiritilgan oʻlchamlardan (mm) yasaydi: oltita tekis yuzli quti, yumaloq yon va ikki tekis uchi aylanaga trimlangan silindr, bitta aylantirilgan sirtli shar.
- **Sirtlardan jism** oʻzingiz yasagan sirtlarni guruhlaydi. Ularni tanlang yoki hech narsa tanlamang — u hali jismda boʻlmagan barcha koʻrinadigan sirtlardan foydalanadi. Ular tolerantlik ichida tikiladi: agar yopilmasa, hech narsa oʻzgarmaydi va panel nechta qirra ochiq qolganini hamda ular qancha yaqin uchrashishi kerakligini aytadi.
- **Birlashtirish**, **Ayirish** (ikkinchi jism birinchisidan olib tashlanadi) va **Kesishtirish** (ikkalasi birgalikda boʻlgan qism) ikki jism oladi: har birining yuzini koʻrinishda bosing yoki **Jismlar** roʻyxatidagi **Tanlash** tugmasini bosing. Ikkala jismni yonida qoldirish uchun **Ikki jismni saqlash** katakchasini belgilang.

Bul har bir yuzni oʻz aniq sirtida saqlaydi va uni kesishish boʻyicha yangi trim konturlari bilan kesadi. Natija satri oʻlchangan raqamlarni beradi: jism dvigatelining nuqtalari aniq sirtlarga oʻtkazish uchun qanchaga siljishi kerakligi (hech qachon tolerantlikdan koʻp emas), kesishish nuqtalari ikkala sirtga qanchalik yaqin (odatda millionning bir necha ulushi mm), hajm va yangi yuzlar aniq sirtlaridan qayta tikilganda yana yopiladimi. Hajmlar tolerantlik ichidagi uchburchaklardan oʻlchanadi (agar boshqa tolerantlik qoʻymagan boʻlsangiz, 0.05 mm), shuning uchun shar yoki silindr hajmi aniqdan biroz kam chiqadi: kichikroq tolerantlik yaqinroq qiladi. Toza bajarib boʻlmaydigan Bul (jismlar hech narsani ulashmasa, kontur oʻz-oʻzini kesib oʻtsa) soʻzlar bilan rad etiladi va hech narsani oʻzgartirmaydi. Bitta Bul panelning **Ortga qaytarish**idagi bitta qadam.

**Jismlar** roʻyxatida **Guruhdan chiqarish** yuzlarni oddiy sirt sifatida saqlaydi; axlatga tashlash jismni va uning yuzlarini oʻchiradi.

**Modelga qoʻshish** (**Jismlar** roʻyxatida) jismning nusxasini modelga bitta yopiq guruh sifatida qoʻshadi, uning yuzlari 0.05 mm ichidagi uchburchaklar boʻladi, bu modelning Ortga qaytarishidagi bitta qadam. Shundan keyin u modelning oʻz **Birlashtirish**, **Ayirish** va **Kesishtirish**, itarish/tortish va 3D bosish tekshiruvi bilan ishlaydi; aniq jism esa panelda qoladi.

## Fillet va qalinlashtirish

**Yuzlar orasida Fillet** bitta jismning ikki yuzi uchrashgan qirrani yumaloqlaydi: ikki yuzni tanlang (koʻrinishda yoki roʻyxatdagi **Tanlash** bilan), **radius** kiriting va qirra boʻylab oʻzgaradigan radius uchun **oxirdagi radius** ham (0 bitta radiusni saqlaydi). Ushbu radiusdagi shar qirra boʻylab ikkala yuzga tegib dumalatiladi; fillet har bir nuqtada qoldiradigan aniq aylana yoy boʻlib, bitta sirtga birlashtiriladi va ikki yuz shar tegadigan joylarda trimlanadi. Tashqi qirra material yoʻqotadi, ichki burchak esa material qoʻshadi. Natija satri oʻlchangan narsalarni beradi: fillet sirti qurilgan nuqtalar orasida dumalayotgan sharga qanchalik uzoqligi (nuqtalar tolerantlikning choragi ichida boʻlguncha qoʻshiladi), fillet bilan har bir yuz orasidagi eng katta burchak tegish chiziqlari boʻylab va Birlashtirish bilan bir xil raqamlar. Mos kelmaydigan radius (shar yuzdan chiqib ketadi yoki yuz radiusdan qattiqroq egiladi) yuz nomi bilan rad etiladi va hech narsa oʻzgarmaydi.

**Bir nechta qirrani fillet** bir qadamda bir nechta qirrani yumaloqlaydi: birinchi qirraning ikki yuzini, soʻng keyingi qirraning ikki yuzini tanlang va hokazo (yuz bir nechta juftlikda boʻlishi mumkin, masalan quti tepa yuzi toʻrttasida); barcha qirralar siz kiritgan radiusni oladi. Har bir yumaloqlash jismning oʻsha holatida hisoblanadi, soʻng ular birin-ketin kesiladi, shuning uchun tartib ahamiyatga ega emas. Yumaloqlangan ikki qirra oʻtkir qolgan boshqa qirralari bilan burchakda uchrashsa, ikki fillet kesishish egri chizigʻi boʻylab bir-biriga kiradi (burma). Uchta yumaloqlangan tashqi qirra uchta tekis yuzdan bir radius bilan uchrashib, bir-biriga perpendikulyar boʻlsa, burchak uchala fillet bilan urinadigan bitta **sfera yamasi** boʻladi (buralgan burchak uchun **Burchaklar** katakchasini belgilamang); bunday burchaklarning ikki uchida ham qirra kamida radiusning ikki barobar uzunligida boʻlishi kerak. Natija satri nechta qirra yumaloqlanganini va burchaklar qanday chiqqanini aytadi. Ichki qirralarni ham birgalikda yumaloqlash mumkin, lekin qayta yopilmaydigan natija faqat xabar qilinadi (satr buni aytadi), shuning uchun uni tekshiring.

**Jismga qalinlik berish** sirtga qalinlik beradi: uni tanlang, **qalinlik** kiriting va boshqa tomonga oʻsishi uchun **Boshqa tomon** ni belgilang. Ofset yuz sirtga moslashtiriladi va unga nisbatan oʻlchanadi (natija satri qalinlikdan eng katta farqni beradi); devorlar har bir qirra va har bir trim konturi boʻylab boradi. Agar sirt shu tomonda qalinlikdan qattiqroq egilsa yoki sirtning boshqa qismi qalinlikdan yaqinroq tursa, u sirt nomi va joyi bilan rad etiladi va hech narsa oʻzgarmaydi.

## Ortga qaytarish, fayl, STEP va IGES

Panelda oʻz **Ortga qaytarish** va **Qayta bajarish** bor (buyruq boʻyicha bitta qadam). Sirtlar model bilan birga `.modelcraft` faylida saqlanadi; ular modelning oʻz ortga qaytarishiga kirmaydi, fayl materiallari kabi.

**STEP…** (AP242) va **IGES…** egri chiziqlar va sirtlarni aynan shundayligicha saqlaydi (B-spline egri chiziqlar va sirtlar, uchburchaklarga aylantirilmasdan). Har bir sirt oʻz trimi bilan oʻz yuzi boʻladi; jism bitta yopiq qobiq sifatida yoziladi, har bir qirra ikki yuzi bilan ulashgan holda, boshqa CAD dasturlari kutganidek (holat satri shunday chiqqan jismlar sonini aytadi). IGESda xuddi shu jism bitta manifold qattiq B-rep (entity 186, yopiq qobiq 514 ustida, yuzlar 510, halqalar 508, bitta qirralar roʻyxati 504 va bitta uchlar roʻyxati 502) sifatida yoziladi; yuzlari qirra-bo-qirra juftlashmagan jism alohida yuzlar sifatida yoziladi va satr buni aytadi. **Import…** bunday jismni STEP va IGESdan jism sifatida qaytaradi. U shu tarzda yozilgan egri chiziqlar va sirtlarni, hamda `.ccnurbs` yama toʻplamlarini oʻqiydi; boshqa dasturlarning STEP jismlari Fayl › Import orqali mesh sifatida ochiladi.

## Skanerdan sirtlar (teskari muhandislik)

Modelda skanerlangan meshni tanlang (hech narsa tanlanmagan boʻlsa, hammasi koʻrsatilgan), **Sirtlar** ni oching va **Skanerlash** guruhida **Sirtlarni skanerga moslash** ni tanlang. Asbob **tekisliklar**, **silindrlar**, **sferalar** va **konuslar** (mashinada ishlangan qism yasalgan aniq sirtlar; har bir qator topgan radius yoki yarim burchakni koʻrsatadi) ni qidiradi, **filletlar** (yumaloqlangan qirralar va burchaklar: boshqa ikki yoki undan koʻp yuzga urinib kiradigan kichik silindr yoki sfera, radiusi va ulagan yuzlari bilan) ni topadi, **rim filletlar** (torus: tekis yuz silindr yoki konus bilan uchrashgan yumaloq qirra, radiusi va halqa radiusi bilan) va **oʻzgaruvchan filletlar** (uzunligi boʻylab radiusi oʻzgaradigan yumaloq qirra, har bir uchidagi radius bilan) ni topadi, silliq, sekin egilgan qismga **bitta erkin shaklli yama** moslaydi va har bir yuzni u kelgan skaner qismining konturiga kesadi, shuning uchun teshiklar va burchaklar saqlanadi. Sozlamalar: **tolerantlik** (mm da, skanerning nuqtasi tekislik yoki silindrdan qanchaga uzoq boʻlsa ham unga tegishli hisoblanadi va erkin shaklli yama uchun maqsad), **eng kichik boʻlak** (sirt maydonining ulushi) va **eng koʻp yuz**. Bir xil skaner va sozlamalar har doim bir xil yuzlarni beradi.

Natija jadval boʻladi, har bir yuz uchun bitta qator: uning turi, qancha uchburchakdan kelgani va **skanerdan yuzga** oʻlchangan xato (rms, eng kattasi va tolerantlik ichidagi nuqtalar ulushi). Oʻlchangan nuqtalar skanerning uchlari va har bir uchburchakning oʻrtasi. Xato teskari yoʻnalishda oʻlchanmaydi (yuzdan skanerga), shuning uchun skanerdan uzoqqa choʻzilgan yuz bu bilan koʻrinmaydi. Jadval ostidagi izoh, moslashtirish uchun juda kichik boʻlgan maydon ulushini ham aytadi. Koʻrinishda skan nuqtalari **og'ish xaritasi** boʻyicha rangga boʻyaladi: yuzda koʻk, tolerantlikning yarmigacha yashil, tolerantlikda yoki undan koʻp boʻlsa qizil (**Og'ish xaritasini koʻrsatish** ni belgilamasdan yashiring). Oʻzini qayta kesib oʻtadigan boʻlaklar (masalan, erkin shaklli yamalar bilan moslashtirilgan yopiq quvur) moslanmagan deb roʻyxatga olinadi, hech qachon bitta sirtga majburan kiritilmaydi.

**Sirtlarni jismga tikish** jismda boʻlmagan barcha koʻrinadigan sirtlarni bitta yopiq jismga tikadi. Skan yuzlari faqat skanerning oʻz xatosi ichida uchrashadi, shuning uchun u yopiladigan eng kichik birlashish masofasini sinaydi (siz qoʻygan **tikish masofasi** dan hech qachon koʻp emas) va yuzlar yopilmasa, soʻzlar bilan rad etadi. U hech qachon boʻshliqni yamamaydi. Yumaloq qirrali quti, filletlari alohida yuz sifatida topilgan boʻlsa, tikiladi; yopilgan birlashish masofasi natijada koʻrsatiladi. Keyin jism Birlashtirish, Ayirish, Kesishtirish va **Modelga qoʻshish** bilan ishlaydi.

Nimalar qilinmaydi: **rim fillet** (torus) faqat allaqachon topilgan silindr yoki konus oʻqi atrofida qidiriladi, **oʻzgaruvchan fillet** esa faqat ancha toʻgʻri qirra boʻylab (uning kesmalari bir yoʻnalishga perpendikulyar kesiladi); boshqa joylarda ular yetarlicha silliq boʻlsa erkin shaklli yamalar boʻlib chiqadi, aks holda chiqarib tashlanadi; sferalar, konuslar va filletlar tasodifiy namunalash bilan topiladi, shuning uchun juda kichik (bir necha uchburchakli) biri oʻtkazib yuborilishi mumkin; og'ish xaritasi skandan yuzlargacha masofani koʻrsatadi, aksincha emas; juda katta skanerlar (300 000 uchburchakdan koʻp) bu yerda rad etiladi. To'liq aylanadigan silindrning yuzlari teshiklar atrofida kesiladi, tikuv esa teshik boʻlmagan joyga qoʻyiladi. Tayanishdan oldin har bir yuzni skaneringiz bilan tekshiring.

## Hali qurilmagan

Burchakda uchrashadigan egri yuzlarning yoki turli radiusli qirralarning yumaloqlanishi (uchi blendi), uchrashmaydigan yuzlar orasidagi fillet, egri yoki qiya yuzda tugaydigan ichki fillet, hamda hisoblari uchburchaklarsiz sirtlarda bajariladigan Bul va filletlar (bu yerda jism dvigateli tolerantlik ichidagi uchburchaklar bilan ishlaydi va keyin har bir nuqta aniq sirtlarga qaytariladi).
