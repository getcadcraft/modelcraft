---
title: Nástroje pre telesá: zjednotenie, odčítanie, prienik
summary: Spojte uzavreté skupiny a komponenty do jedného, vyrežte jeden z druhého alebo ponechajte iba to, čo majú spoločné.
keywords: teleso, telesá, kontrola telesa, nie je teleso, opraviť teleso, diera, voľná hrana, naruby, zjednotenie, spojiť, skombinovať, zlúčiť, odčítanie, rozdiel, vyrezať, diera, prienik, priesečník, boolean, vonkajšia škrupina
from: f35df1cc
---

Nástroje telies kombinujú **telesá**: skupiny a komponenty, ktorých plochy uzatvárajú objem, pričom každá hrana spája presne dve plochy. {{ui:Informácie o entite}} uvádza {{ui:Teleso}}: {{ui:Áno}} pre teleso a zobrazí jeho objem.

Nachádzajú sa v ponuke {{ui:Telesá}} v skupine {{ui:Usporiadanie}}.

## Keď niečo nie je teleso

Vyberte skupinu alebo komponent. Ak nie je teleso, {{ui:Informácie o entite}} uvedie dôvod, napríklad "Nie je teleso: 4 hrany ohraničujú dieru · 1 voľná hrana":

| Problém | Čo to znamená |
|---|---|
| Hrany ohraničujú dieru | Chýba plocha |
| Hrany zdieľané tromi a viacerými plochami | Plocha rozdeľuje vnútro, alebo sa dva tvary dotýkajú pozdĺž hrany |
| Plochy vnútri tvaru | Stena zostala vnútri objemu |
| Voľné hrany | Čiary, ktoré neohraničujú žiadnu plochu |
| Plochy otočené naruby | Ich predná strana smeruje dovnútra, proti susedom |

{{ui:Zobraziť problémy}} ju otvorí s vybranými týmito hranami a plochami, aby ste ich videli. {{ui:Opraviť}} opraví jednoduché prípady jedným krokom späť: odstráni voľné hrany a plochy vnútri tvaru, otočí plochy správnym smerom von a uzavrie diery, ktorých okraj leží naplocho. Čo nedokáže bezpečne opraviť (diera, ktorá nie je rovná, hrana zdieľaná mnohými plochami), ponechá vám a uvedie, čo zostalo.

## Zjednotenie

1. Vyberte dve alebo viac telies (kliknite na jedno, {{key:Ctrl}}+kliknutie na ostatné).
2. {{ui:Telesá}} › {{ui:Zjednotenie}}.

Stanú sa jedným telesom v jednej skupine. Tam, kde sa prekrývali, plochy vnútri zmizli.

## Odčítanie

1. {{ui:Telesá}} › {{ui:Odčítanie}}.
2. Kliknite na teleso, ktoré chcete **odobrať** (rezač).
3. Kliknite na teleso, ktoré chcete **vyrezať**.

Zvyšok druhého telesa zostane; rezač sa spotrebuje. Napríklad na vytvorenie diery cez blok nakreslite cez neho tyč, urobte z tyče skupinu a potom odčítajte tyč od bloku.

## Prienik

Vyberte dve alebo viac telies, potom {{ui:Telesá}} › {{ui:Prienik}}. Zachová sa iba časť, ktorú všetky zdieľajú.

## Dôležité informácie

- Výsledok je nová skupina. Zachová názov, farbu a štítok prvého telesa (pri Odčítaní: to, ktoré ste vyrezali). Farby natreté na jeho plochy sa nezachovajú.
- Rovné strany výsledku sú jednotlivé plochy. Okrúhle strany vychádzajú ako rovné facety, ktorými boli nakreslené.
- Ak skupina alebo komponent nie je teleso, nástroj povie, ktorý, a nič nezmení. Hľadajte chýbajúcu plochu alebo voľnú plochu vnútri.
- Vnútri otvorenej skupiny nástroje pracujú so skupinami a komponentmi v tej skupine.
- Každý nástroj je jeden krok späť.
- Pri prvom použití nástroja pre telesá sa načíta jeho motor (manifold-3d), čo môže chvíľu trvať.
