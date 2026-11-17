---
title: Komponenty, ktoré sa dajú natiahnuť
summary: Vytvorte jednu kópiu komponentu širšiu, hlbšiu alebo vyššiu, pričom jeho časti si zachovajú svoje rozmery: dlhší stôl s rovnakými nohami, vyššia polica s rozmiestnenými policami, zábradlie, ktorého stĺpiky sa opakujú.
keywords: dynamický komponent, natiahnutie, zmena veľkosti komponentu, parametrický, pomenované veľkosti, opakovať, pole, nohy, police, zábradlie, pravidlá, premenné
from: b4c40f43
---

Zmena mierky komponentu zväčší všetko v ňom, aj nohy a priečky. **Natiahnuť túto kópiu** mení šírku, hĺbku alebo výšku komponentu, pričom každá časť sa riadi pravidlom: doska stola sa zväčší, jeho nohy si zachovajú hrúbku a zostanú na koncoch.

Funguje na komponentoch zložených z častí, teda na skupinách alebo komponentoch vnútri komponentu, ako je každá vec z [štartovacej knižnice](topic:starter).

## Natiahnutie kópie

1. Vyberte komponent.
2. V {{ui:Informácie o entite}} kliknite na {{ui:Natiahnuť túto kópiu…}}.
3. Zadajte novú {{ui:Šírka (červená)}}, {{ui:Hĺbka (zelená)}} a {{ui:Výška (modrá)}} a kliknite na {{ui:Natiahnutie}}.

Mení sa iba táto kópia: stane sa vlastným komponentom, ktorý si pamätá pôvodný komponent, z ktorého vznikol. Natiahnite ju kedykoľvek znova a vypočíta sa nanovo z pôvodného komponentu, takže sa nič neodchýli. Ostatné kópie pôvodného komponentu zostanú, aké boli.

## Pravidlá

Otvorte komponent (dvojitým kliknutím) a vyberte jednu z jeho častí. {{ui:Informácie o entite}} zobrazia {{ui:Keď sa komponent naťahuje}} s pravidlom pozdĺž červenej, zelenej a modrej:

| Pravidlo | Čo časť robí | Príklad |
|---|---|---|
| {{ui:Natiahnutie}} | Narastá spolu s komponentom; jej vzdialenosti k obom stranám ostanú | Doska stola |
| {{ui:Zostať na začiatku}} / {{ui:Zostať na konci}} | Zachová svoju veľkosť a svoju vzdialenosť od tej strany | Nohy |
| {{ui:Posunúť pomerne}} | Zachová veľkosť; jej stred sa posunie pomerne | Police, kľučka dverí |
| {{ui:Zmeniť mierku pomerne}} | Jej miesto aj veľkosť sa menia pomerne | Schodové stupne |
| {{ui:Opakovať}} | Jej kópie, každých ({{ui:Každých}}), od miesta, kde sa začína, po vzdialenú stranu | Stĺpiky zábradlia |

{{ui:Automatické}} (predvolené) pravidlo určí a ukáže, ktoré: {{ui:Natiahnutie}}, keď časť prechádza celým komponentom, {{ui:Posunúť pomerne}}, keď je zhruba v strede, inak zostane pri strane, ku ktorej je bližšie.

## Čo treba vedieť

- Vlastné tvary častí sú zdieľané, takže natiahnutá kópia je ľahká. Úprava časti zmení ju vo všetkých kópiách.
- Natiahnutá kópia nesleduje neskoršie zmeny pravidiel ani rozloženia pôvodného komponentu: natiahnite ju znova, aby sa zmeny prevzali.
- Plochy nakreslené voľne v komponente (nie v časti) si zachovajú veľkosť; urobte z nich časť, aby ich sledovala.
- Pravidlá a to, z čoho bola každá kópia natiahnutá, sa uložia do súboru ModelCraft.
