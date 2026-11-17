---
title: ModelCraft ni AI yordamchi bilan ishlatish
summary: Oʻz AI yordamchingiz yoki skriptingizga modelni koʻrish va oddiy jismlar yasash imkonini bering: ruxsatlar, CadCraft Studio orqali ulanish va faollik jurnali.
keywords: ai, yordamchi, agent, mcp, model context protocol, skript, avtomatlashtirish, modellashtirish, quti, silindr, render, render navbati, ruxsatlar, ulanishni uzish, faollik
from: 629cd0b7
---

## Nima oʻrganasiz

AI yordamchi (yoki siz yozgan skript) bilan ModelCraft ni qanday ishlatish va unga nimalarga ruxsat berishni qanday hal qilish.

ModelCraft oʻzining AI ga ega emas va hech narsani hech qayerga yubormaydi. Yordamchini oʻzingiz olib kelasiz: Model Context Protocol (MCP) ni qoʻllaydigan har qanday dastur. ModelCraft unga faqat vositalarni beradi, qaysilarini berishni esa siz tanlaysiz.

## Yoqish

1. {{ui:Sozlamalar}} ni oching (ilova panelidagi tishli belgi yoki {{key:Mod+,}}) va {{ui:ModelCraft}} yorligʻiga oʻting.
2. {{ui:Yordamchilar}} ostida **AI yordamchilar va skriptlarga ModelCraft dan foydalanishga ruxsat berish** katagini belgilang. Siz buni qilmaguningizcha u oʻchiq boʻladi.
3. Unga nimalarga ruxsat berishni tanlang: **Oʻqish** boshida belgilangan boʻladi; **Tahrirlash**, **Saqlash** yoki **Eksport** ni faqat kerak boʻlganda belgilang.

Siz belgilagan ruxsatlar doirasidan tashqari vositalar yordamchiga taklif etilmaydi. U baribir soʻrasa, ModelCraft uni rad etadi va buni faollik jurnaliga yozadi. Kalitni oʻchirish barcha ulanishlarni bir zumda tugatadi; {{ui:ModelCraft sozlamalarini tiklash}} ham uni oʻchiradi.

## Yordamchingizni ulash

Yordamchilar kompyuteringizdagi **CadCraft Studio** orqali ulanadi: Studio faqat shu kompyuterga yetib boradigan kichik server ishga tushiradi, u esa har safar ishga tushganda yaratadigan token bilan himoyalangan. Studio da {{ui:Yordamchini ulash}} ni tanlang va manzil hamda tokenni yordamchingizga nusxalang (Studio qoʻyish kerak boʻlgan aniq sozlamalarni koʻrsatadi). Tokenni hech kimga bermang.

:::note
Brauzer yorligʻi yordamchi uchun ulanish ocha olmaydi: brauzer ilovalarida kalit faqat kompyuteringizdagi CadCraft Studio ni ishlatmaguningizcha ta'sir qilmaydi.
:::

## Siz nazoratda qolasiz

- **Har bir oʻzgarish bitta bekor qilish qadamidir**, yordamchi nomi bilan belgilangan (masalan, "Yordamchi: box"). {{key:Mod+Z}} yordamchining oxirgi oʻzgarishini butunligicha qaytaradi.
- **Ulanganini bilasiz.** Ilova panelidagi tugma ulangan paytda yordamchi nomini koʻrsatadi; uning nima qila olishini koʻrish yoki uni **Uzish** uchun bosing.
- **Faollik.** {{ui:Sozlamalar}} › {{ui:ModelCraft}} › {{ui:Yordamchilar}} › {{ui:Faollik}} har bir chaqiruvni sanab beradi: qachon, qaysi vosita, bajarildimi yoki rad etildimi. {{ui:Jurnalni saqlash}} nusxa saqlaydi.

## Yordamchi nima soʻrashi mumkin

| Vosita | Ruxsat | Nima qiladi |
|---|---|---|
| `app_info`, `model_describe` | Oʻqish | Modelning birligi, oʻlchami va har bir guruh hamda komponent qayerda joylashgani, yopiq jism ekanligi va hajmi |
| `view_screenshot` | Oʻqish | 3D koʻrinishning hozir koʻrinib turgan rasmi |
| `box_add`, `cylinder_add` | Tahrirlash | Quti yoki silindr yangi guruh sifatida, siz yoki yordamchi bergan joyda va oʻlchamda ("3m", "10'" yoki modelning birligidagi son) |
| `instance_move`, `instances_erase` | Tahrirlash | Guruhlar va komponentlarni koʻchiradi yoki oʻchiradi |
| `faces_list`, `materials_list` | Oʻqish | Guruh yoki bogʻlanmagan geometriyaning yuzlari (har birining yoʻnalishi, maydoni va markazi); u boʻyashi mumkin boʻlgan materiallar va ranglar |
| `push_pull` | Tahrirlash | {{ui:Itarish/tortish}} kabi yuzni itaradi yoki tortadi |
| `paint` | Tahrirlash | Yuzlarni yoki butun guruhni rang yoki material bilan boʻyaydi |
| `group_make` | Tahrirlash | Bogʻlanmagan yuzlar va guruhlardan guruh yoki komponent yasaydi |
| `scene_add`, `scene_show` | Tahrirlash | Koʻrinishni sahna sifatida saqlaydi; saqlangan sahnaga oʻtadi |
| `mesh_add` | Tahrirlash | Boshlash uchun mesh obyekti (kub, sfera, silindr va boshqalar), Mesh ish maydoni uni qoʻshadigandek |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Oʻqish / Tahrirlash | Meshning modifikatorlar steki: mirror, array, subdivision, bevel va boshqalar; hech narsa butunlay qoʻllanmaydi |
| `usd_export` | Eksport | Modelni OpenUSD sifatida (.usda, .usdc yoki .usdz), modelni USD sifatida saqlaganda yozilgani kabi ([USD](topic:usd)); Studio da ruxsat bergan jildga, aks holda yuklab olish sifatida |
| `render_still` | Eksport | Koʻrinish yoki saqlangan sahnaning renderlangan rasmi, {{ui:Render}} dialogidagi {{ui:Render}} tugmasi yaratganidek, sozlamalaringiz bilan, agar boshqa narsa soʻralmasa (sahna presetlari: tashqi, ichki, kesim, tun yoki avto; tez yoki yuqori sifat, oʻlcham, namunalar, osmon); yordamchi koʻra oladigan PNG yoki Studio da ruxsat bergan jildda PNG, EXR yoki render fayli ([Rasmni render qilish](topic:render)) |
| `render_queue` | Eksport | Render dialogi navbatiga yuqori sifatli rasmlar qoʻshadi (koʻrinish yoki saqlangan sahnalar) va navbatni ishga tushiradi; tayyor rasmlar ruxsat bergan jildga boradi yoki siz uchun Render dialogidagi {{ui:Render navbati}} da qoladi. WebGPU kerak |
| `link_push` | Tahrirlash | Boshqa dasturdan bogʻlangan modelni yangilaydi (qarang: [Jonli .3dm modelini saqlash](topic:live-3dm-link)) |
| `link_status` | Oʻqish | Bogʻlangan model hali mavjudligini va oxirgi marta qachon yangilanganini aytadi |
| `undo` | Tahrirlash | Oʻzining qadamlarini qaytaradi |

Yordamchi yasagan jismlar guruh sifatida keladi, shuning uchun ular siz chizgan narsalar bilan hech qachon birlashmaydi. Modelni saqlaydigan vosita yoʻq: saqlash sizda qoladi, eksport yoki render qilish uchun esa **Eksport** belgilangan boʻlishi kerak. Render modelga hech narsa oʻzgartirmaydi; saqlangan sahnani render qilish koʻrinishni oʻsha sahnaga oʻtkazadi, xuddi {{ui:Sahnalar}} kabi.

## Muammo boʻlsa

- **Yordamchi ModelCraft vositalarini koʻrmaydi:** bu oynada kalit yoqilganini va oyna Studio da ochiqligini tekshiring.
- **"needs the edit permission":** {{ui:Yordamchilar}} ostida **Tahrirlash** ni belgilang, soʻng qayta soʻrang. Xabar: "tahrirlash ruxsati kerak".
- **"401" yoki "token" xatolari:** token oʻzgargan (Studio qayta ishga tushgan yoki {{ui:Yangi token}} bosilgan). Yangi tokenni yordamchi sozlamalariga nusxalang.

## Qoʻshimcha

- [Yordamchilar uchun retseptlar](common:assistants-recipes): har biri chaqiradigan vositalari bilan ishlangan misollar.
