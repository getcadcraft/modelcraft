---
title: Modelni lampalar bilan yoritish
summary: Modelga lampalar, projektorlar va yorugʻlik panellarini joylashtiring, shunda renderlangan rasmlarda xonalar tunda yoki yoritilgan ichki qismi yumshoq soyalar bilan koʻrinadi.
keywords: chiroq, chiroqlar, lampa, lampalar, yoritish, lampochka, shift chirogʻi, projektor, pastga yoritgich, yorugʻlik paneli, maydon yoritgichi, lyumen, yorqinlik, rang harorati, iliq, tun, ichki qism, render
from: c8d72cbc
---

Lampalar [renderlangan rasmlarni](topic:render) yoritadi. Ular 3D koʻrinishni oʻzgartirmaydi; u yerda har bir lampa oʻz rangidagi kichik belgi sifatida koʻrinadi.

## Lampa qoʻshish

1. Oʻngdagi {{ui:Lights}} boʻlimida {{ui:Lamp}}, {{ui:Spotlight}} yoki {{ui:Light panel}} ni bosing.
2. Joyini bosing. Tutib olish chizishdagidek ishlaydi.
   - Shift yoki devorda **lampa** sirtdan 25 sm uzoqlikda, siz qarayotgan tomonda osiladi; **yorugʻlik paneli** sirtga yotadi va undan uzoqqa yoritadi.
   - **Projektor** ikki marta bosishni talab qiladi: avval uning joyi, soʻng u qaratilgan nuqta.

Yangi lampa {{ui:Lights}} boʻlimida tanlanadi va oʻzgartirishga tayyor boʻladi.

## Lampani oʻzgartirish

{{ui:Lights}} boʻlimida lampa nomini bosing yoki koʻrinishdagi belgisini {{ui:Select}} bilan bosing. Soʻng:

| Sozlama | Nima qiladi |
|---|---|
| {{ui:Brightness (lumens)}} | Qancha yorugʻlik berishi. Oddiy maishiy lampochka taxminan 800 lyumen; yorqin shift paneli — 3000 |
| {{ui:Color}} | {{ui:Warm}} (uy lampochkasi), {{ui:Neutral}} yoki {{ui:Daylight}}, yoki istalgan rang |
| {{ui:Beam (degrees)}} | Projektor konusi, chetdan chetgacha |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Katta lampochkalar va panellar yumshoqroq soyalar beradi |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Qayerda joylashgani |

Lampa nomi yonidagi belgi uni yoqadi yoki oʻchiradi. {{ui:Delete the light}} uni olib tashlaydi. Har bir oʻzgarish alohida bosqich: {{key:Ctrl+Z}} uni bekor qiladi. Lampalar `.modelcraft` faylida saqlanadi.

## Kechasi tushirilgan rasmlar

{{ui:Render a picture…}} ichida {{ui:Use another date and time for this picture}} belgisini qoʻying va kechki soatni tanlang. Quyosh botganda osmon qorayadi va modelni faqat lampalar yoritadi. Agar rasm juda qorongʻi boʻlsa, dialogda {{ui:Brightness}} ni oshiring yoki lampalar qoʻshing.

:::tip
Xonani ichkaridan koʻrish uchun kamerani xona ichiga qoʻying (aylantiring va kattalashtiring yoki [sahna](topic:scenes) yarating), shiftga lampa qoʻshing va kechasi render qiling. {{ui:Fast}} rejimida lampadan uzoqdagi burchaklar fotosuratga qaraganda qorongʻiroq boʻladi; [yuqori sifat rejimi](topic:render#high-quality) esa yorugʻlikni devorlardan aks ettirishga imkon beradi.
:::
