---
title: Osvetlenie modelu lampami
summary: Vložte do modelu lampy, reflektory a svetelné panely, aby vykreslené obrázky mohli ukazovať izby v noci alebo osvetlené interiéry, s jemnými tieňmi.
keywords: svetlo, svetlá, lampa, lampy, osvetlenie, žiarovka, stropné svetlo, reflektor, bodové svetlo, svetelný panel, plošné svetlo, lúmeny, jas, farebná teplota, teplá, noc, interiér, vykreslenie
from: c8d72cbc
---

Lampy osvetľujú [vykreslené obrázky](topic:render). Nemenia 3D pohľad, kde sa každá lampa zobrazuje ako malá značka vo vlastnej farbe.

## Pridanie lampy

1. V sekcii {{ui:Svetlá}} vpravo kliknite na {{ui:Lampa}}, {{ui:Reflektor}} alebo {{ui:Svetelný panel}}.
2. Kliknite, kam ju umiestniť. Prichytávanie funguje ako pri kreslení.
   - Na strope alebo stene visí **lampa** 25 cm od plochy, na strane, z ktorej sa pozeráte; **svetelný panel** leží na ploche a svieti od nej preč.
   - **Reflektor** vyžaduje dve kliknutia: najprv miesto, kde je, potom to, na čo mieri.

Nová lampa je vybraná v {{ui:Svetlá}}, pripravená na úpravu.

## Úprava lampy

Kliknite na názov lampy v {{ui:Svetlá}} alebo na jej značku v pohľade pomocou {{ui:Vybrať}}. Potom:

| Nastavenie | Čo robí |
|---|---|
| {{ui:Jas (lúmeny)}} | Koľko svetla dáva. Bežná domáca žiarovka má asi 800 lúmenov; jasný stropný panel 3000 |
| {{ui:Farba}} | {{ui:Teplá}} (domáca žiarovka), {{ui:Neutrálna}} alebo {{ui:Denné svetlo}}, alebo ľubovoľná farba |
| {{ui:Lúč (stupne)}} | Kužeľ reflektora od okraja k okraju |
| {{ui:Veľkosť žiarovky}}, {{ui:Šírka}}, {{ui:Hĺbka}} | Väčšie žiarovky a panely dávajú jemnejšie tiene |
| {{ui:Červená (x)}}, {{ui:Zelená (y)}}, {{ui:Výška}} | Kde sa nachádza |

Prepínač vedľa názvu lampy ju zapína alebo vypína. {{ui:Zmazať svetlo}} ju odstráni. Každá zmena je jeden krok: {{key:Ctrl+Z}} ju vráti späť. Lampy sa ukladajú do súboru `.modelcraft`.

## Obrázky v noci

V {{ui:Vykresliť obrázok…}} zaškrtnite {{ui:Použiť iný dátum a čas pre tento obraz}} a vyberte večernú hodinu. Keď je slnko pod obzorom, obloha stmavne a model osvetľujú len lampy. Ak je obrázok príliš tmavý, zvýšte v dialógu {{ui:Jas}} alebo pridajte lampy.

:::tip
Pri izbe pozeranej zvnútra umiestnite kameru do izby (otáčajte a priblížte, alebo [scéna](topic:scenes)), pridajte lampu na strop a vykreslite v noci. V režime {{ui:Rýchly}} sú rohy vzdialené od lampy tmavšie než na fotografii; [režim vysokej kvality](topic:render#high-quality) nechá svetlo odrážať sa od stien.
:::
