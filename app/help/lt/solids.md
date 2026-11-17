---
title: Kietųjų kūnų įrankiai: sujungti, atimti, susikirtimas
summary: Sujunkite uždaras grupes ir komponentus į vieną, iškirpkite vieną iš kito arba palikite tik tai, ką jie turi bendro.
keywords: kietasis kūnas, kietieji kūnai, kietųjų kūnų tikrinimas, nekietas, taisyti kietąjį kūną, skylė, klaidinga briauna, išvirkščias, sujungti, jungti, sudėti, sujungti į vieną, atimti, skirtumas, iškirpti, susikirtimas, sankirta, logika, išorinis apvalkalas
from: f35df1cc
---

Kietųjų kūnų įrankiai sujungia **kietuosius kūnus**: grupes ir komponentus, kurių paviršiai uždaro tūrį, o kiekviena briauna jungia tiksliai du paviršius. {{ui:Objekto informacija}} rodo {{ui:Kietasis kūnas}}: {{ui:Taip}}, jei tai kietasis kūnas, ir parodo jo tūrį.

Jie yra {{ui:Kietieji kūnai}} meniu grupėje {{ui:Tvarkymas}}.

## Kai kažkas nėra kietasis kūnas

Pasirinkite grupę arba komponentą. Jei tai nėra kietasis kūnas, {{ui:Objekto informacija}} parodo kodėl, pavyzdžiui: „Ne kietasis kūnas: 4 briaunos ribojasi su skyle · 1 laisva briauna“.

| Problema | Ką tai reiškia |
|---|---|
| Briaunos ribojasi su skyle | Trūksta paviršiaus |
| Briaunas dalijasi trys ar daugiau paviršių | Paviršius dalija vidų arba dvi formos liečiasi išilgai briaunos |
| Paviršiai formos viduje | Siena, paliktą tūrio viduje |
| Laisvos briaunos | Linijos, kurios nesudaro paviršiaus |
| Paviršiai išvirkščiai | Jų priekinės pusės nukreiptos į vidų, priešingai kaimynams |

{{ui:Rodyti problemas}} atveria tai su pažymėtomis tomis briaunomis ir paviršiais, kad galėtumėte jas pamatyti. {{ui:Taisyti}} sutvarko paprastus atvejus vienu anuliavimo žingsniu: pašalina laisvas briaunas ir paviršius formos viduje, paviršius pasuka teisinga kryptimi ir uždaro skyles, kurių kraštas yra plokščias. Ko negali saugiai sutvarkyti (skylę, kuri nėra plokščia, briauną, dalijamą daugybės paviršių), palieka jums ir nurodo, kas liko.

## Sujungimas

1. Pasirinkite du ar daugiau kietųjų kūnų (spustelėkite vieną, {{key:Ctrl}}+spustelėkite kitus).
2. {{ui:Kietieji kūnai}} › {{ui:Sujungti}}.

Jie tampa vienu kietuoju kūnu vienoje grupėje. Kur jie persidengė, vidiniai paviršiai dingsta.

## Atimimas

1. {{ui:Kietieji kūnai}} › {{ui:Atimti}}.
2. Spustelėkite kietąjį kūną, kurį **atimti** (įrankį).
3. Spustelėkite kietąjį kūną, kurį **pjauti**.

Tai, kas lieka iš antrojo kieto kūno, išlieka; įrankis sunaudojamas. Pavyzdžiui, norėdami padaryti skylę per bloką, nubrėžkite stulpą per jį, paverskite stulpą grupe, tada atimkite stulpą iš bloko.

## Susikirtimas

Pasirinkite du ar daugiau kietųjų kūnų, tada {{ui:Kietieji kūnai}} › {{ui:Susikirtimas}}. Lieka tik ta dalis, kurią jie visi turi bendrą.

## Verta žinoti

- Rezultatas yra nauja grupė. Ji išlaiko pirmojo kieto kūno pavadinimą, spalvą ir žymę (atimant – to, kurį pjovėte). Ant jos paviršių nudažytos spalvos neišlieka.
- Rezultato plokšti šonai yra vientisi paviršiai. Apvalūs šonai išeina kaip plokšti fasetai, kuriais jie buvo nubraižyti.
- Jei grupė ar komponentas nėra kietasis kūnas, įrankis nurodo, kuris, ir nieko nekeičia. Ieškokite trūkstamo paviršiaus ar klaidingo paviršiaus viduje.
- Atvirame grupėje įrankiai veikia su tos grupės grupėmis ir komponentais.
- Kiekvienas įrankis yra vienas anuliavimo žingsnis.
- Pirmą kartą naudojant kietųjų kūnų įrankį, jo variklis (manifold-3d) įkeliamas, o tai gali užtrukti akimirką.
