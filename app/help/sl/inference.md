---
title: Sklepanje in lovljenje
summary: Kaj pomenijo barvne oznake, kateri zaskok prevlada in kako zakleniti smer s puščičnimi tipkami ali Shift.
keywords: sklepanje, lovljenje, krajišče, razpolovišče, središče ploskve, na robu, na ploskvi, os, rdeča os, zelena os, modra os, vzporedno, pravokotno, zaklepanje, shift, osnap
from: e78984e9
---

Med delom orodja za risanje ali urejanje ModelCraft pogleda, kaj je pod kazalko, in se lovi na najuporabnejšo stvar v bližini. Oznaka pokaže, kaj je našel, namig v spodnjem levem kotu pa to poimenuje.

## Oznake in namigi

| Namig | Oznaka | Lovi na |
|---|---|---|
| Krajišče | Zelen krog | Konec roba |
| Razpolovišče | Cian krog | Sredina roba |
| Središče ploskve | Moder krog | Sredina ploskve pod kazalko |
| Točka vodila | Siva | Točko vodila, ki jo pusti merilni trak |
| Izhodišče | Okrasto rumena | Mesto, kjer se srečajo rdeča, zelena in modra os |
| Na rdeči osi / Na zeleni osi / Na modri osi | Črta v tej barvi | Črta od začetne točke v tej smeri |
| Vzporedno z robom / Pravokotno na rob | Magenta črta | Črta od začetne točke, vzporedna ali pravokotna na zapomnjeni rob (glejte spodaj) |
| Zaklenjeno | Magenta črta | Smer, ki ste jo zaklenili s puščično tipko ali {{key:Shift}} |
| Na robu | Rdeč kvadrat | Kjerkoli vzdolž roba |
| Na vodilu | Siva | Kjerkoli vzdolž vodilne črte |
| Na ploskvi | Moder diamant | Kjerkoli na ploskvi |
| Na ravnini | brez | Ravnino, na kateri ste začeli, kadar je kazalka nad prazno površino |
| Na tleh | brez | Tla (rdeče-zelena ravnina), kadar ni nič drugega |

Kadar os iz začetne točke seka rob ali vodilo, ModelCraft lovi na presečišče in namig poimenuje oba, na primer „Na rdeči osi, na robu“.

## Kateri zaskok prevlada

1. **Točke** v okviru približno 12 slikovnih pik: najprej krajišča, nato točke vodil, razpolovišča, središče ploskve pod kazalko in izhodišče.
2. **Smeri** od začetne točke: rdeča, zelena in modra os ter vzporedno ali pravokotno na zapomnjeni rob.
3. **Na robu** ali **na vodilni črti**.
4. **Na ploskvi.**
5. **Ravnina risanja** ali tla.

Stvari, skrite za ploskvijo, se nikoli ne lovijo. Orbitirajte, da vidite točko, ki jo želite.

## Risanje na ploskev iz točke

{{ui:Rectangle}}, {{ui:Circle}} ali {{ui:Polygon}}, začet na vogalu, razpolovišču, robu ali središču ploskve, se riše **v ravnini ploskve pod kazalko** in prereže to ploskev. Rob pripada dvema ploskvama, zato odloči stran roba, na kateri je kazalka: če želite risati na konec dolgega kvadra, začnite na sredini enega od njegovih robov, kazalka pa naj bo tik znotraj čelne ploskve.

## Vzporedno in pravokotno

ModelCraft si zapomni **zadnji rob, ki ga je kazalka prečkala pred vašim prvim klikom**. Začetek na vogalu ali na robu se šteje kot prečkanje tega roba. Ko orodje deluje, drugi robovi, nad katerimi lebdite, ga ne nadomestijo.

Za risanje črte vzporedno z obstoječim robom:

1. Pritisnite {{key:L}} in lebdite nad robom, ki ga želite ujemati.
2. Premaknite se do začetne točke, če lahko, brez prečkanja drugih robov na poti, in kliknite.
3. Premaknite se v smeri, vzporedni temu robu. Črta postane magenta, namig pa pove „Vzporedno z robom“. Pravokotno deluje enako, znotraj ravnine, v kateri rišete.

Če je bil zapomnjen napačen rob, pritisnite {{key:Esc}}, lebdite nad pravim robom in začnite znova.

## Zaklenite smer

Po prvem kliku orodja lahko naslednjo točko držite na eni črti:

| Tipka | Zaklene na |
|---|---|
| {{key:Right}} | Rdečo os |
| {{key:Left}} | Zeleno os |
| {{key:Up}} | Modro os (naravnost navzgor) |
| {{key:Down}} | Vzporedno z zapomnjenim robom (glejte zgoraj) |

Ponovno pritisnite isto puščico, da odklenete. Vrstica stanja pokaže „Zaklenjeno na rdečo os. Za odklep znova pritisnite isto puščico.“

Medtem ko je zaklenjeno, se točka pomika vzdolž črte proti kamorkoli je kazalka, in se še vedno poravna s točkami, nad katerimi lebdite: lebdite nad vogalom drugega kvadra, da narišete črto vzdolž rdeče osi do natanko tega vogala.

**{{key:Shift}}** zaklene smer, na katero ste trenutno zaskočeni (os ali vzporedno), dokler ga držite. Spustite, da odklenete.

Zaklepi delujejo v orodjih {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} in {{ui:Tape}}. Pred prvim klikom puščične tipke namesto tega orbitirajo pogled.

## V skupini

Medtem ko urejate znotraj skupine ali komponente, so osi lastne osi skupine (premikajo se z njo in se obračajo z njo, če je bila zasukana). Zaskoki še vedno najdejo točke in robove zunaj skupine, zato lahko stvari poravnate z ostalim modelom.
