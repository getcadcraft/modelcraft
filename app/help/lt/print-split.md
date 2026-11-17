---
title: Padalykite didelį modelį spausdinimui
summary: Supjaukite modelį, per didelį jūsų spausdintuvui, į dalis, tinkančias darbo stalui, su kaiščiais, raktais, uodegėlėmis, kaiščių ar magnetų angomis ir jungties numeriu ant abiejų paviršių, ir atsisiųskite kiekvieną dalį bei surinkimo lapą viename zip faile.
keywords: 3d spausdinimas, padalyti, įstrižas, įstrižas pjūvis, kampinis pjūvis, įstrižas, pjaustyklė, pjūvis, per didelis, stalo dydis, darbinis tūris, dalys, detalės, jungiamieji elementai, kaiščiai, raktai, uodeginė jungtis, kaištis, magnetas, tarpas, tolerancija, dalių numeriai, surinkimas, suskleista schema, zip, stl, 3mf, licencija, licencija, USB raktas, apsaugos raktas
from: ee96ba77
---

Kai modelis yra didesnis už jūsų spausdintuvo darbo stalą, **Padalyti spausdinimui** supjausto jį į dalis, kurios tilps, prideda jungiamuosius elementus, kad dalys susilygiuotų surinkus, ir išgraviruoja tą patį numerį ant abiejų kiekvienos jungties paviršių. Atidarykite {{ui:Eksportuoti}} › {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}; dialogo eilutėje **Spausdinimo įrankiai** yra {{ui:Padalyti spausdinimui}}. Jis atsidaro kaip kortelė virš vaizdo.

Jis veikia su tuo, kas spausdinama: pasirinkimu arba visu rodomu, kai nieko nepasirinkta. Tai, kas spausdinama, turi būti uždarytas kietasis kūnas; jei patikra randa skyles, pirmiausia naudokite [Taisyti](topic:print-tools#repair).

Veikia ModelCraft programoje, jūsų kompiuteryje: jokio licencijų serverio, jokio USB rakto, nieko neįkeliama.

## Kaip pjauti

- **Pritaikyti prie stalo, mažiausiai dalių**: nurodykite stalo plotį, gylį ir aukštį (jie pradedami nuo {{ui:Parametrai}} › ModelCraft › 3D spausdintuvas). Kortelė nurodo, kiek dalių prireiks ir koks bus kiekvienos dydis; modelis supjaustomas į lygias dalis, tiek mažiausiai, kiek telpa. Dalis failuose gali gulėti ant šono, jei taip ji telpa. Jungiamieji elementai, išsikišantys iš dalies, skaičiuojami į jos dydį.
- **Nurodytose vietose**: pasirinkite ašį, kuria pjauti, ir įveskite vietas milimetrais nuo žemesnio modelio krašto, atskirdami kableliais (`100, 200` sukuria tris dalis).
  **Įstrižas** pasuka pjūvius iki 60° aplink vieną iš dviejų kitų ašių (pavyzdžiui, pjūvis per Z, įstrižas aplink X): kiekvienas įstrižas pjūvis eina per modelio vidurio liniją savo vietoje, suteikia dalims daugiau klijavimo ploto ir geriau paslepia jungtį ant nuožulnaus paviršiaus. Jungiamieji elementai stovi statmenai pjūviui.

Pjūvio plokštumos aplink modelį nubraižomos brūkšninėmis linijomis, kol kortelė atidaryta.

## Jungiamieji elementai

Kiekviena vieta, kur dvi dalys liečiasi, gauna jungiamuosius elementus, kurie patys išdėstomi ten, kur yra daugiausia vietos: bent **mažiausia sienelė** pliusas **tarpas** pliusas jų pačių dydis nuo išorės ir pakankamai toli nuo kiekvieno kito pjūvio, kad dvi angos niekada nesusitiktų. Ilgame paviršiuje du jungiamieji elementai išdėstomi išilgai jo, kad dalys negalėtų pasisukti.

- **Apvalūs kaiščiai**: kaištis vienoje dalyje (smaigalys nuskluostas), anga kitoje.
- **Kvadratiniai raktai**: tas pats, tik kvadratinis, todėl dalis gali būti uždėta tik vienu sukimu.
- **Uodeginės jungtys**: liežuvėlis, kuris slysta į griovelį iš šono. Ten, kur vienas griovelio galas susitiktų su kitu pjūviu, uodeginė jungtis sustoja prieš tai ir įslysta iš atviro galo. Uodeginės jungtys tinka pjūviams viena kryptimi (eilė riekių); tinkle naudokite kaiščius arba kaiščių angas.
- **Kaiščių angos**: anga kiekvienoje pusėje; kaiščiai taip pat spausdinami (zip faile).
- **Magnetų lizdai**: lizdas kiekvienoje pusėje apvaliam magnetui, kurio skersmuo ir storis nurodyti jūsų. Prieš klijuodami patikrinkite polius.
- **Nėra (klijai)**.

**Tarpas** yra tarpas kiekvienoje pusėje tarp kaiščio ir jo angos (pradžiai 0,2 mm). Jis atitinka skaičių, kurį nurodote: apvalios angos padaromos šiek tiek didesnės, kad plokščios jų pusės, o ne kampai, išlaikytų tą tarpą. Padidinkite, jei jūsų spausdintuvo dalys išeina per stiprios.

Jei jungtyje nėra vietos jungiamajam elementui (plonas sienelė, maža liečiama sritis), kortelė tai nurodo: tą jungtį klijuokite.

## Dalių numeriai

Įjungus **Graviruoti jungčių numerius ant abiejų paviršių**, kiekviena jungtis gauna jos dviejų dalių numerį, pavyzdžiui `3-4`, išgraviruotą 0,6 mm gylyje abiejuose paviršiuose, kiekvienas skaitomas teisinga kryptimi. Numeriai pradedami 5 mm aukščio ir mažėja, kad tilptų, iki 2,5 mm; jungtis be vietos numeriui įrašoma į sąrašą. Dalys numeruojamos nuo apatinio sluoksnio aukštyn.

## Peržiūra, atsisiuntimas, modelio padalijimas

1. {{ui:Peržiūra}} supjausto modelį ir parodo, kiek yra dalių, jungčių ir jungiamųjų elementų, ar kiekviena dalis praeina 3D spausdinimo patikrą ir telpa į stalą, bei išvardija kiekvienos dalies dydį. Žiedas vaizde pažymi kiekvieną jungiamąjį elementą ir numerį.
2. {{ui:Atsisiųsti dalis (.zip)}} įrašo vieną zip failą: failą kiekvienai daliai (STL arba 3MF, kaip pasirinksite skiltyje **Failai**), kiekviena stovi ant stalo; kaiščių angas; ir **surinkimo lapą** — dalių paveikslėlį, išskleistą atskirai su jų numeriais (`assembly.svg` ir `assembly.png`), bei dalių ir jungčių sąrašą (`assembly.txt`).
3. {{ui:Padalyti modelį}} vienu žingsniu įdeda dalis į modelį vietoj pasirinktų grupių ar komponentų, pavadintas taip, kaip surinkimo lape: {{ui:Anuliuoti}} grąžina originalą. Tam reikia pasirinktų grupių ar komponentų, kuriuos padalyti; atsisiuntimas veikia su tuo, kas spausdinama.

## Perkelkite jungiamuosius elementus patys

Po peržiūros **Jungiamieji elementai rankiniu būdu** leidžia pataisyti, kur jie dedami:

- {{ui:Perkelti vieną}}: spustelėkite raudoną žiedą vaizde (jis tampa žalias), tada spustelėkite vietą pjūvyje, kur jis turi būti.
- {{ui:Pridėti vieną}}: spustelėkite vaizde vietą, kur turi būti jungiamasis elementas. Jis dedamas ant pjūvio plokštumos, kurią pasiekia jūsų spustelėjimas, tarp dviejų dalių.
- {{ui:Pašalinti vieną}}: spustelėkite raudoną žiedą, kad pašalintumėte tą jungiamąjį elementą.

Kiekvienas pakeitimas tikrinamas iš naujo kaip automatiniai: vieta per arti kontūro, kitas pjūvis ar kitas jungiamasis elementas nebus padaryti, ir kortelė tai nurodo. {{ui:Vėl automatiškai}} pamiršta jūsų vietas. Jos išlieka, kol modelis, pasirinkimas ir pjūviai išlieka tokie patys.

Peržiūra išlieka, kol keičiasi modelis, pasirinkimas ar nustatymas; tada kortelė paprašo peržiūrėti dar kartą.

:::note
Kiekviena dalis tikrinama taip, kaip ją tikrintų 3D spausdinimo patikra, prieš atsisiunčiant. Jūsų pjaustyklė vis tiek nusprendžia, kaip spausdinama kiekviena dalis: pažiūrėkite kiekvieną ten ir pirmiausia atspausdinkite vieną jungtį, kad pamatytumėte, kaip jūsų spausdintuvas tvarkosi su tarpu.
:::
