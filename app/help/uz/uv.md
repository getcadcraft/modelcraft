---
title: Mesh ning UV larini joylashtirish
summary: Choklarni belgilang, yoying, proyeksiyalang va mesh ning tekstura koordinatalarini UV ish maydonida joylashtiring, ularni katakli naqsh va choʻzilish ranglari bilan tekshiring.
keywords: uv, uvlar, yoyish, unwrap, chok, choklar, tekstura, tekstura koordinatalari, atlas, joylashtirish, pack, orol, orollar, katakli naqsh, choʻzilish, buzilish, quti proyeksiyasi, silindr proyeksiyasi, sfera proyeksiyasi, konform, burchakka asoslangan, lscm, abf
from: 00028f20
---

Tekstura tekis rasm; mesh esa tekis emas. Uning **UV** lari har bir yoqning har bir burchagi rasmda qayerda turishini belgilaydi. UV ish maydoni ularni yaratadi: meshni **choklar** boʻylab kesib ochasiz, boʻlaklarni tekislaysiz (**yoyish**) va ularni kvadratga joylashtirasiz (**joylashtirish**).

## Ochish

Meshni tanlang va Ish maydoni roʻyxatidan {{ui:UV}} ni tanlang. Guruh yoki komponent avval Mesh ish maydonidagidek meshga aylanadi. 3D koʻrinish chap yarmiga suriladi; oʻngdagi **UV muharriri** meshning yuzlarini tekstura kvadratida joylashgan holda koʻrsatadi. Tanlash Mesh ish maydonidagidek ishlaydi, va bir koʻrinishda tanlangan narsa ikkinchisida ham tanlanadi.

## Choklarni belgilash

Choklar — mesh kesilib ochilishi mumkin boʻlgan joylar; ikkala koʻrinishda ham qizil koʻrinadi.

- Qirralarni tanlang ({{ui:Qirra}}, yoki {{key:2}}) va {{ui:Chok belgilash}} ({{key:Ctrl+E}}) tugmasini bosing. {{ui:Chokni tozalash}} ({{key:Ctrl+Shift+E}}) ularni olib tashlaydi.
- {{ui:Oʻtkirda choklar}} har bir oʻtkir qirrani va yoqlar 60° dan ortiq burchak bilan uchrashadigan har bir qirrani belgilaydi: quti oltita tomoniga boʻlinadi.
- {{ui:UV lardan choklar}} UV lar allaqachon uzilgan joylarda choklarni belgilaydi, masalan, proyeksiyadan keyin.

Yopiq boʻlak tekis yotishi uchun choklar kerak: shar uchun kamida bitta kesim, naycha uchun esa uzunligi boʻylab kesim.

## Yoyish

Joylashtiriladigan yoqlarni tanlang (yoki butun mesh uchun hech narsa tanlamang) va {{ui:Yoyish}} ({{key:U}}) tugmasini bosing. Choklar orasidagi har bir boʻlak burchaklarini imkon qadar toʻgʻri saqlagan holda tekislanadi (burchakka asoslangan tekislash), soʻng boʻlaklar kvadratga joylashtiriladi. {{ui:Konform}} buning oʻrniga eng kichik kvadratlar konform xaritalari bilan yoyadi: tezroq, lekin kuchli egilgan boʻlaklarda biroz kamroq toʻgʻri. Bitta marta kesilgan silindr yon tomoni kabi tekis varaqdan yasalishi mumkin boʻlgan shakl hech qanday choʻzilishsiz yoyiladi.

## Proyeksiyalash

Oddiy shakllar uchun proyeksiya koʻpincha yetarli:

| Proyeksiya | Nima qiladi |
| --- | --- |
| {{ui:Quti}} | Har bir yoq oʻziga eng koʻp qaragan quti tomoniga |
| {{ui:Silindr}} | Koʻk oʻq atrofida: koʻndalang boʻylab — atrofdagi burchak, yuqoriga — balandlik |
| {{ui:Sfera}} | Markazdan: koʻndalang boʻylab — atrofdagi burchak, yuqoriga — kenglik |
| {{ui:Koʻrinishdan}} | Yoqlar hozir 3D koʻrinishda qanday koʻrinsa, shunday |

Silindr yoki sferaning qoʻshilish chizigʻi orqali oʻtadigan yoq bir boʻlakligicha saqlanadi, shuning uchun uning UV lari kvadratning oʻng chetidan biroz oʻtib ketishi mumkin; tekstura u yerda takrorlanadi.

## Joylashtirish

- {{ui:Joylashtirish}} boʻlaklarni (orollarni) kvadratga bitta teksel oʻlchamida joylashtiradi, har biri eng kam joy oladigan tarzda buriladi. Panel ular orasida qoldiriladigan boʻshliqni belgilaydi.
- {{ui:90° burish}} va {{ui:Aks ettirish}} tanlangan yoqlarning UV larini buradi yoki aks ettiradi.
- UV muharririda tanlangan yoqni sudrab, tanlangan UV larni koʻchiring; yoki muharrirga koʻrsatib {{key:R}} yoki {{key:S}} ni bosing, soʻng buring yoki masshtablang (bosish saqlaydi, {{key:Esc}} bekor qiladi). {{key:G}} sudramasdan koʻchiradi. Yoqni ikki marta bosing (yoki {{key:L}}) — butun orolini tanlaydi. Gʻildirak kattalashtiradi; oʻrta yoki oʻng tugma bilan sudrab suring; {{key:F}} kvadratni yana moslaydi.

Har bir oʻzgarish bitta bekor qilish qadamidir.

## Tekshirish

- {{ui:Katakli naqsh}} meshda uning UV larida yorliqli katakli naqshni koʻrsatadi: teng, kvadrat katakchalar tekstura bir tekis yotganini bildiradi; yorliqlar esa qaysi tomonga yoʻnalganini koʻrsatadi.
- {{ui:Choʻzilish}} har bir yoqni uning UV lari qanchalik choʻzayotganiga qarab rangga boʻyaydi: koʻk — yoʻq, yashil orqali qizilgacha — juda koʻp. Panel oʻlchashni **burchaklar egilgan** yoki **oʻlcham oʻzgargan** boʻyicha tanlaydi va oʻrtacha qiymatni koʻrsatadi.

Qarang: [Mesh ni tahrirlash](topic:mesh-edit), [Meshlar](topic:meshes) va [Mesh ustidagi modifikatorlar](topic:modifiers).
