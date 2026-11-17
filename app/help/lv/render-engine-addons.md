---
title: Renderēšanas dzinēja pievienošana ar papildinājumu
summary: Ko papildinājums var pievienot renderēšanas dialoga dzinēju sarakstam, atļauju, kas nepieciešama programmas palaišanai, un ko Studio pārbauda un jautā.
keywords: papildinājums, addon, dzinējs, renderēšanas dzinējs, izstrādātājs, engine.run, atļauja, programma, skripts, parakstīts, studio, api
from: cd7a39ba
---

Papildinājums (Iestatījumi › Papildinājumi) var pievienot dzinēju {{ui:Renderēt attēlu…}} dzinēju sarakstam. Pilns teksts papildinājumu autoriem ir papildinājumu specifikācijas 16. sadaļā; īsumā:

- Papildinājums reģistrē dzinēju ar ID, kas sākas ar tā paša, nosaukumu, izvēles iestatījumiem un **vai** programmu, ko palaist, **vai** funkciju JavaScript, kas zīmē attēlu.
- Dzinējam, kas palaiž programmu, nepieciešama atļauja **`engine.run`**, kas tiek parādīta pirms instalēšanas un iestatījumos. Tas darbojas tikai Studio; pārlūkā tas tiek rādīts kā fails saglabāšanai.
- Papildinājums nosauc programmu (vienkāršs faila nosaukums, nekad apvalks (shell)), skriptu, kas atrodas **parakstītajā papildinājumā**, un argumentus, kas sastāv no vietturiem un vienkāršiem vārdiem. Studio atrod programmu vai vienreiz pajautā, lai norādītu uz to.
- Pirmo reizi, kad papildinājums palaiž programmu, **Studio jautā jums savā dialogā**: kurš papildinājums, kura programma un ka skripts var darīt visu, ko var programma. Atļaujiet to tikai papildinājumam, kuram uzticaties. Jūsu atbilde tiek atcerēta šim papildinājumam un programmai.
- Pakotne (aina kā USD un iestatījumu fails, ar glTF failu, ja to pieprasa papildinājums) un papildinājuma skripts tiek ievietoti jaunā pagaidu mapē, programma tur darbojas, un attēls atgriežas, atzīmēts ar papildinājuma dzinēja nosaukumu.

:::note
Papildinājumi var pievienot renderēšanas dzinējus tikai no papildinājumu API 1.4. Praktisks piemērs atvērtā koda komandrindas renderētājam atrodas tā paša repozitorijā; to šajā renderētājā vēl nav izpildīts.
:::
