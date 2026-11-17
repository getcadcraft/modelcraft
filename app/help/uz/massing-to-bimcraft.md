---
title: Massingni BimCraftʼga yuborish
summary: Push/pull bilan modellangan massalarni BimCraftʼga massing variantlari sifatida uzating: har bir qattiq jismdan qavatlar, poydevor, umumiy qavat maydoni va hajm hisoblangan holda.
keywords: massing, massa, konsepsiya, variantlar, bimcraft, ifc, bim, push pull, qavatlar, qavatlar soni, umumiy qavat maydoni, poydevor, hajm, yuborish, topshirish, bino massasi, 2-bosqich
from: 73c51f3f
---

## Nima qilasiz

Push/pull bilan modellagan bloklaringizni BimCraft tushunadigan massing variantlariga aylantiring, shunda konsepsiya bino modeli sifatida davom etadi.

## Boshlashdan oldin

Har bir massani **guruh** yoki **komponent** qiling va nomlang. Har biri bitta variantga aylanadi. Erkin geometriya yuborilmaydi.

## Yuborish

1. Yuboriladigan guruhlarni tanlang. Hech narsa tanlanmagan boʻlsa, yuqori darajadagi barcha guruh va komponentlar yuboriladi.
2. {{ui:Export}}, soʻng {{ui:Massing to BimCraft…}} ni tanlang.
3. {{ui:Variantlar toʻplamining nomi}} va {{ui:Qavat balandligi}} ni kiriting.
4. Roʻyxatni tekshiring: har bir variantning qavatlari, poydevori, umumiy qavat maydoni va hajmi.
5. Variantlar bilan BimCraftʼni yangi yorliqda ochish uchun **BimCraftʼga yuborish** ni tanlang, yoki faylni yuklab olish va u yerda oʻzingiz ochish uchun {{ui:IFC sifatida saqlash}} ni tanlang.

BimCraftʼda variantlar "Modeldagi massing variantlari" ostida roʻyxatlanadi, u yerda ulardan birini joriy variant qilib, devor va qavatlarga aylantirish mumkin.

## Qattiq jism qanday massaga aylanadi

- **Qavatlar** qattiq jism balandligini qavat balandligiga boʻlish orqali hisoblanadi, yaxlitlanadi va kamida bitta boʻladi. Qavatlar qattiq jism balandligini teng boʻlishadi, shuning uchun 3 m qavatli 10 m blok 3.33 m dan 3 ta qavatga ega boʻladi.
- **Qavat maydoni** shu qavat sathidagi qattiq jismning oʻz gorizontal kesimi maydonidir. Orqaga qadam tashlaydigan blokning yuqori qavatlari kichikroq boʻladi va umumiy qavat maydoni ularning yigʻindisidir.
- **Poydevor** qattiq jism asosi ustidagi kesim konturidir.
- **Hajm** qattiq jismning oʻz hajmidir.

IFC faylida har bir variant bino elementi proksi sifatida (poydevor qattiq jism balandligigacha koʻtarilgan) boʻladi, har bir qavat uchun bitta boʻshliq shu qavatning umumiy maydonini olib yuradi. Barcha variantlar bitta binoda boʻladi, qavatlar soni eng baland variantdagidek.

## Soddalashtirilgan shakllar

Oddiy tik blok modellangani kabi aynan oʻtadi. Boshqa barcha narsa baribir yuboriladi va roʻyxatda shakli nima uchun soddalashtirilganini koʻrsatadi:

- **Qavatlarining hammasi asosi kattaligida emas** (orqaga qadam tashlaydi yoki qiyalikka ega): BimCraftdagi massa asos konturi toʻliq balandlikkacha koʻtarilgan holda boʻladi, lekin qavat maydonlari va hajm qattiq jismning oʻziniki boʻladi.
- **Qattiq jism yopiq emas**: kesimi yopilmaydigan qavatlar oʻlchanmaydi va nolga teng hisoblanadi. Toʻliq raqamlar uchun qattiq jismni yoping ({{ui:Obyekt maʼlumoti}} "Qattiq jism: Ha" deydi).
- **Asosida bir nechta kontur bor**: eng kattasi poydevor sifatida olinadi.

## Bilish foydali

- {{ui:BimCraft uchun IFC (.ifc)}} boshqa eksport: u faqat shakllar va nomlarni yuboradi, qavatlar yoki maydonlarsiz.
- Hech narsa yuklanmaydi. Fayl shu kompyuterdagi BimCraft yorligʻiga uzatiladi.
