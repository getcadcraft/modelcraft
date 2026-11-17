---
title: Posun a natočení os kreslení
summary: Natočte červenou, zelenou a modrou osu tak, aby seděly na budovu, která k nim není kolmá, nebo je zarovnejte na plochu, aby kreslení a psaní je sledovaly.
keywords: osy, osy kreslení, počátek, zarovnat osy, natočit osy, otočit osy, obnovit osy, budova pod úhlem, zkosený, ucs, souřadný systém
from: cab258f7
---

Červená, zelená a modrá osa vedou všechno, co kreslíte: obdélníky se k nim zarovnávají, čáry se k nim přichytávají a zem je rovina červená–zelená. Když budova stojí pod úhlem (situační plán, který není kolmý na sever, křídlo natočené o 30°), přesuňte na ni osy, aby kreslení sledovalo její stěny. Samotný model se nehýbe.

Všechny tři příkazy jsou v {{ui:Edit}} › {{ui:More}}.

## Umístění os

1. {{ui:Edit}} › {{ui:More}} › {{ui:Place axes}}.
2. Klikněte, kam má počátek, třeba na roh budovy.
3. Klikněte na bod podél nové červené osy, třeba dál podél stěny.
4. Klikněte na bod směrem k nové zelené ose. Zelená se udělá kolmá na červenou a modrá stojí kolmo na obě.

Osy se vykreslí na svém novém místě. Obdélník, který teď nakreslíte na zemi nebo zadáte jako `4m,3m`, vede podél natočené červené a zelené; šipkové klávesy se k nim přichytávají a přichytávání k počátku je na novém počátku.

## Zarovnání os na plochu

Vyberte jednu plochu a pak {{ui:Edit}} › {{ui:More}} › {{ui:Align axes to face}}. Modrá pak ukazuje ven z plochy, červená vede podél její nejdelší hrany a počátek je na začátku té hrany. Použijte to, když chcete kreslit na šikmou střechu, jako by byla zemí.

## Obnovení os

{{ui:Edit}} › {{ui:More}} › {{ui:Reset axes}} je vrátí tam, kde model začínal.

## Na co dát pozor

- Uvnitř otevřené skupiny nebo komponenty se používají její vlastní osy (natáčejí se s ní); osy modelu platí na nejvyšší úrovni.
- Osy se ukládají do souboru ModelCraft a každá změna je jeden krok zpět.
- Exporty a standardní pohledy ({{ui:Top}}, {{ui:Front}}…) stále používají vlastní směry modelu.
