---
title: Terreni: toka nga vijat e nivelit dhe modelimi i saj
summary: Krijo tokë nga vijat e nivelit ose si rrjet, pastaj ngri dhe ul atë me një furçë të butë.
keywords: terren, tokë, peizazh, topografi, kurba, vija e nivelit, vend, pjerrësi, kodër, gunguzhë, kuti rëre, smoove, modelim, nivelim, TIN
from: 407652b3
---

Terreni është tokë e bërë me trekëndësha, kështu që mund të ndjekë çdo formë. Është një grup: kliko dy herë për ta redaktuar.

## Nga vijat e nivelit

1. Merr vijat e nivelit në lartësitë e tyre: vizato ato, ose [importo një plan vendi](topic:site-plan) dhe lëviz çdo kurbë deri në nivelin e vet.
2. Përzgjidhi (të gjitha skajet e të gjitha kurbave).
3. {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Terren nga kurbat e përzgjedhura}}.

ModelCraft i bashkon pikat e kurbave me trekëndësha (një TIN), dhe i zbut të gjitha skajet brenda, kështu që toka hijëzohet e lëmuar. Vetë vijat mbeten; fshiji ose fshihi kur nuk të duhen më. Kurbat shumë të dendura reduktohen në 8 000 pika.

## Një rrjet për të modeluar

{{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Rrjeti i terrenit…}} kërkon një gjerësi, një thellësi dhe një madhësi qelize, pastaj vendos një rrjet të sheshtë trekëndëshash aty ku klikon cepin e tij. Qelizat e vogla modelohen më lëmuar, por krijojnë më shumë sipërfaqe (më së shumti 200 × 200 qeliza).

## Modelo: ngri dhe ul tokën

1. Kliko dy herë terrenin për ta hapur.
2. {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Modelo terrenin}}. Një rreth tregon furçën mbi tokën nën kursor.
3. Tërhiq lart për të ngritur tokën nën furçë, ose poshtë për ta ulur. Mesi lëviz më shumë, dhe toka zbutet deri në zero te skaji i rrethit, kështu që gunguzhat dhe gropat dalin të lëmuara.

Për të bërë një gunguzhë me lartësi të saktë, kliko një herë, pastaj shkruaj lartësinë, si `1.5m` (minusi e ul), dhe shtyp {{key:Enter}}. Për të ndryshuar furçën, shkruaj një gjatësi përpara se të klikosh: `5m` i jep furçës 5 m gjerësi në rreze.

Çdo modelim është një hap i vetëm {{ui:Zhbëj}}.

## Gjëra që duhet ditur

- Modelimi lëviz vetëm sipërfaqet trekëndëshe, kështu që çdo sipërfaqe mbetet e sheshtë. Sipërfaqet e vizatuara me dorë (drejtkëndësha, shumëkëndësha) nuk janë terren: vegla e thotë këtë.
- Modelimi lëviz pikat vetëm lart e poshtë; nuk shton pika. Për detaje më të imta, bëj një rrjet me qeliza më të vogla.
- Terreni eksportohet si çdo grup tjetër. Në IFC është një element ndërtese proxy, si çdo gjë tjetër.
