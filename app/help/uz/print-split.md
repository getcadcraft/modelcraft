---
title: Katta modelni bosma uchun boʻlish
summary: Printer stoliga sigʻmaydigan modelni stolga mos boʻlaklarga kesing, qoziq, kalit, dumcha, shponka yoki magnit teshiklari bilan, har bir boʻgʻinning raqami ikki yuzida, va barcha boʻlaklar hamda yigʻma varagʻini bitta zip faylda yuklab oling.
keywords: 3d bosma, boʻlish, qiya, qiya kesim, burchakli kesim, oblik, boʻluvchi, kesish, juda katta, stol oʻlchami, bosma hajmi, boʻlaklar, qismlar, ulagichlar, qoziqlar, kalitlar, dumcha, shponka, magnit, tirqish, tolerantlik, qism raqamlari, yigʻma, yoyilgan koʻrinish, zip, stl, 3mf, litsenziya, license, usb kalit, dongle
from: ee96ba77
---

Model printer stolidan katta boʻlganda, **Bosma uchun boʻlish** uni sigʻadigan boʻlaklarga kesadi, boʻlaklar yigʻilganda bir-biriga mos tushishi uchun ulagichlar qoʻshadi va har bir boʻgʻinning bir xil raqamini ikkala yuzaga oʻyib yozadi. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} ni oching; dialogdagi **Bosma vositalari** qatorida {{ui:Split for printing}} bor. U koʻrinish ustida karta sifatida ochiladi.

U bosiladigan narsalar ustida ishlaydi: tanlov, yoki hech narsa tanlanmagan boʻlsa, koʻrinib turgan hamma narsa. Bosiladigan narsa yopiq jism boʻlishi kerak; agar tekshiruv teshiklar topsa, avval [Tuzatish](topic:print-tools#repair) dan foydalaning.

U ModelCraft ichida, sizning kompyuteringizda ishlaydi: litsenziya serveri yoʻq, USB kalit yoʻq, hech narsa yuklanmaydi.

## Qanday kesish

- **Stolga sigʻdirish, eng kam boʻlaklar**: stolning enini, chuqurligini va balandligini kiriting (ular {{ui:Settings}} › ModelCraft › 3D printer dan boshlanadi). Karta necha boʻlak kerakligini va har birining oʻlchamini koʻrsatadi; u modelni teng boʻlaklarga, sigʻish uchun eng kam sonda kesadi. Agar sigʻishga yordam bersa, boʻlak fayllarda yon tomoni bilan yotishi mumkin. Boʻlakdan chiqib turgan ulagichlar uning oʻlchamiga kiradi.
- **Men koʻrsatgan joylarda**: kesish oʻqini tanlang va millimetrda modelning pastki chetidan qayerda kesilishini, vergul bilan ajratib kiriting (`100, 200` uchta boʻlak hosil qiladi).
  **Qiyalik** kesimlarni ikki boshqa oʻqdan biri atrofida 60° gacha buradi (masalan, Z boʻylab kesim X atrofida qiyalanadi): har bir qiyalik kesimi oʻz joyida modelning oʻrta chizigʻi orqali oʻtadi, boʻlaklarga koʻproq yopishish yuzasi beradi va qiya sirtda boʻgʻinni yaxshiroq yashiradi. Ulagichlar kesimga nisbatan tik turadi.

Karta ochiq turganda kesish tekisliklari model atrofida punktir chiziqlar bilan chiziladi.

## Ulagichlar

Ikki boʻlak tegib turgan har bir joyga ulagichlar qoʻyiladi; ular eng koʻp boʻsh joy bor joylarga oʻzlari joylashadi: tashqi chetdan kamida **eng kichik devor** + **tirqish** + oʻz oʻlchamiga teng masofada, va boshqa har bir kesimdan shunchalik uzoqda, ikki teshik hech qachon uchrashmasin. Uzun yuzda ikki ulagich boʻylab taqsimlanadi, shunda boʻlaklar aylana olmaydi.

- **Dumaloq qoziqlar**: bir boʻlakda qoziq (uchi qiya kesilgan), ikkinchisida teshik.
- **Kvadrat kalitlar**: xuddi shunday, lekin kvadrat shaklda, shuning uchun boʻlak faqat bir tomonga oʻrnatiladi.
- **Dumchalar**: yondan yoriqqa suriladigan tilcha. Yoriqning bir uchi boshqa kesimga tegadigan joyda dumcha qisqaroq boʻladi va ochiq uchidan suriladi. Dumchalar bir yoʻnalishdagi kesimlarga mos (boʻlaklar qatori); panjarada qoziq yoki shponkadan foydalaning.
- **Shponka teshiklari**: har ikki tomonda teshik; shponkalar ham bosiladi (zip faylda).
- **Magnit choʻntaklari**: har ikki tomonda, siz bergan diametr va qalinlikdagi dumaloq magnit uchun choʻntak. Yopishtirishdan oldin qutblarni tekshiring.
- **Yoʻq (yelim)**.

**Tirqish** qoziq va teshik orasidagi har bir tomondagi boʻshliq (boshlash uchun 0,2 mm). U siz bergan raqamga aniq mos: dumaloq teshiklar bir oz kattaroq qilinadi, shunda ularning tekis yonlari, burchaklari emas, shu boʻshliqni saqlaydi. Printeringiz qismlari qattiq chiqsa, uni oshiring.

Agar boʻgʻinda ulagich uchun joy boʻlmasa (yupqa devor, kichik tegish maydoni), karta buni aytadi: shu boʻgʻinni yelim bilan yopishtiring.

## Qism raqamlari

**Boʻgʻin raqamlarini ikki yuzaga oʻyish** yoqilganda, har bir boʻgʻin ikki boʻlagining raqamini oladi, masalan `3-4`, u har ikki yuzaga 0,6 mm chuqurlikda oʻyiladi va har birida toʻgʻri yoʻnalishda oʻqiladi. Raqamlar 5 mm balandlikdan boshlanadi va sigʻish uchun 2,5 mm gacha kichrayadi; raqamiga joyi yetmaydigan boʻgʻin roʻyxatga olinadi. Boʻlaklar pastki qatlamdan yuqoriga qarab raqamlanadi.

## Oldindan koʻrish, yuklab olish, modelni boʻlish

1. {{ui:Preview}} modelni kesadi va nechta boʻlak, boʻgʻin va ulagich borligini aytadi, har bir boʻlak 3D-bosma tekshiruvidan oʻtadimi va stolga sigʻadimi, hamda har bir boʻlakning oʻlchamini roʻyxatlaydi. Koʻrinishda har bir ulagich va raqam halqa bilan belgilanadi.
2. {{ui:Download the pieces (.zip)}} bitta zip faylni saqlaydi: har bir boʻlak uchun fayl (STL yoki 3MF, **Fayllar** ostida tanlaganingizga koʻra), har biri stolda turgan holda; shponka qistirmalari; va **yigʻma varagʻi** — boʻlaklarning rasmi, ular ajratilgan holda raqamlari bilan (`assembly.svg` va `assembly.png`), hamda boʻlaklar va boʻgʻinlar roʻyxati (`assembly.txt`).
3. {{ui:Split the model}} modeldagi tanlangan guruhlar yoki komponentlar oʻrniga boʻlaklarni yigʻma varagʻidagidek nomlab, bir qadamda qoʻyadi: {{ui:Undo}} asl holatini qaytaradi. Boʻlinadigan guruhlar yoki komponentlar tanlangan boʻlishi kerak; yuklab olish esa bosiladigan narsa boʻyicha ishlaydi.

## Ulagichlarni oʻzingiz koʻchiring

Oldindan koʻrishdan keyin **Ulagichlar qoʻlda** ulagichlar qayerga borishini tuzatishga imkon beradi:

- {{ui:Move one}}: koʻrinishda qizil halqani bosing (u yashil boʻladi), keyin uni kesimda qayerga qoʻyish kerakligini bosing.
- {{ui:Add one}}: ulagich boʻlishi kerak boʻlgan joyni koʻrinishda bosing. U bosishingiz yetib boradigan kesim tekisligiga, ikki boʻlak orasiga tushadi.
- {{ui:Remove one}}: oʻsha ulagichni olib tashlash uchun qizil halqani bosing.

Har bir oʻzgarish avtomatiklar kabi qayta tekshiriladi: konturga juda yaqin joy, boshqa kesim yoki boshqa ulagich bajarilmaydi va karta buni aytadi. {{ui:Automatic again}} sizning joylaringizni unutadi. Model, tanlov va kesimlar oʻzgarmasa, ular saqlanib qoladi.

Oldindan koʻrish model, tanlov yoki sozlama oʻzgarguncha saqlanadi; shundan keyin karta sizdan yana oldindan koʻrishni soʻraydi.

:::note
Har bir boʻlak yuklab olishdan oldin 3D-bosma tekshiruvi qanday tekshirsa, shunday tekshiriladi. Slayseringiz har bir boʻlak qanday bosilishini hali ham hal qiladi: uni u yerda koʻrib chiqing va tirqish printeringizda qanday ishlashini bilish uchun avval bitta boʻgʻinni bosing.
:::
