---
title: Mesh haykaltaroshligi
summary: Meshni loy kabi choʻtkalar bilan shakllantiring — chizish, loy, silliqlash, ushlash, shishirish, burma, qisish, tekislash; niqob bilan qismlarni himoya qiling, X boʻyicha aks ettiring va haykaltaroshlik qilgan joyda tafsilot qoʻshing.
keywords: haykaltaroshlik, choʻtka, choʻtkalar, loy, chizish, silliqlash, ushlash, shishirish, burma, qisish, tekislash, niqob, simmetriya, aks, tafsilot, dinamik topologiya, qalam, bosim, planshet, stilus
from: 5477801a
---

Haykaltaroshlik ish maydoni meshni choʻtkalar bilan loy kabi shakllantiradi: sirt boʻylab sudrang, u yumaloq choʻtka ostida koʻtariladi, botadi, silliqlanadi yoki koʻrsatkichga ergashadi; kuchi markazda eng katta va chekkasida yoʻqolguncha pasayadi.

## Boshlash

Meshni tanlang va Ish maydoni roʻyxatidan {{ui:Haykaltaroshlik}} ni tanlang. Guruh yoki komponent avval mesh boʻladi, Mesh ish maydonidagi kabi. Choʻtkalar meshning uchlarida ishlaydi, shuning uchun ularning soni koʻp boʻlgan mesh nozikroq shakl beradi: avval uni boʻling ({{ui:Boʻlish}} Mesh ish maydonidan, yoki qoʻllagan Subdivision surface modifikatori), yoki {{ui:Tafsilot}} ni yoqing.

## Choʻtkalar

| Choʻtka | Tugma | Nima qiladi |
| --- | --- | --- |
| {{ui:Chizish}} | {{key:D}} | Choʻtka ostidagi sirtni koʻtaradi |
| {{ui:Loy}} | {{key:C}} | Tekis qatlamlarni qoʻshadi, avval botiqlarni toʻldiradi |
| {{ui:Silliqlash}} | {{key:S}} | Doʻngliklarni tekislaydi; istalgan choʻtka bilan silliqlash uchun {{key:Shift}} ni ushlab turing |
| {{ui:Ushlash}} | {{key:G}} | Sirtni koʻrsatkich bilan birga tortadi |
| {{ui:Shishirish}} | {{key:I}} | Sirtni oʻz yoʻnalishi boʻylab shishiradi |
| {{ui:Burma}} | {{key:Shift+C}} | Oʻtkir egatni kesadi |
| {{ui:Qisish}} | {{key:P}} | Sirtni choʻtka oʻrtasiga tortadi |
| {{ui:Tekislash}} | {{key:T}} | Sirtni oʻrtacha tekisligiga bosadi |
| {{ui:Niqob}} | {{key:M}} | Boshqa choʻtkalardan sirtni himoya qiluvchi niqob chizadi |

Teskari ishlash uchun (koʻtarish oʻrniga pasaytirish, egat oʻrniga qirra, niqobni olib tashlash) chizish paytida {{key:Ctrl}} ni ushlab turing yoki {{ui:Olib tashlash}} ni yoqing.

## Oʻlcham va kuch

Choʻtkaning oʻlchami ekrandagi piksellarda, shuning uchun qanchalik yaqinlashsangiz ham bir xil his qilinadi: {{key:[}} va {{key:]}} uni kichraytiradi va kattalashtiradi, {{key:Shift+[}} va {{key:Shift+]}} kuchini oʻzgartiradi. Panel ikkalasini ham koʻrsatadi.

Planshetdagi qalam bilan qattiqroq bosish choʻtkani kattaroq va kuchliroq qiladi; panel ularning ikkalasini ham oʻchiradi.

## Aks, niqob va tafsilot

- {{ui:X boʻyicha aks}} ({{key:X}}) qizil boʻylab ikki tomonni bir vaqtda haykaltaroshlik qiladi, yuzlar va figuralar uchun.
- Niqob haykaltaroshlik paytida quyuqroq koʻrinadi. {{ui:Niqobni tozalash}} ({{key:Alt+M}}) uni olib tashlaydi, {{ui:Niqobni teskari aylantirish}} ({{key:Ctrl+I}}) niqoblanmaganni niqoblaydi va niqoblanganni ochadi. Niqob mesh bilan saqlanadi.
- {{ui:Tafsilot}} haykaltaroshlik qilgan joyda uchburchak qoʻshadi: panelda belgilangan oʻlchamdan (ekrandagi piksellar) uzun qirralar choʻtka ostida boʻlinadi. U uchburchaklardan iborat mesh talab qiladi va avval uni yasashni soʻraydi.

Har bir chiziq bitta bekor qilish bosqichi.

:::note
Tafsilot faqat uchburchak qoʻshadi; juda kichik boʻlib qolganlarini olib tashlamaydi. Remesh (Mesh ish maydoni) butun meshni yana tekislaydi.
:::

Qarang: [Meshni tahrirlash](topic:mesh-edit), [Meshlar](topic:meshes) va [Mesh’dagi modifikatorlar](topic:modifiers).
