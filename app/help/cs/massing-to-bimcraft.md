---
title: Odeslání hmot do BimCraftu
summary: Předejte hmoty modelované tlač/tah do BimCraftu jako varianty hmoty, s podlažími, půdorysem, hrubou podlahovou plochou a objemem spočítanými z každého tělesa.
keywords: hmota, hmoty, koncept, varianty, bimcraft, ifc, bim, tlač/tah, podlaží, patra, hrubá podlahová plocha, půdorys, objem, odeslat, předat, hmota budovy, fáze 2
from: 73c51f3f
---

## Co uděláte

Převeďte bloky, které jste namodelovali tlačením a tažením, na varianty hmot, kterým BimCraft rozumí, aby koncept pokračoval jako model budovy.

## Před začátkem

Každou hmotu udělejte jako **skupinu** nebo **komponentu** a pojmenujte ji. Každá se stane jednou variantou. Volná geometrie se neodesílá.

## Odeslání

1. Vyberte skupiny k odeslání. Když nic nevyberete, odešlou se všechny skupiny a komponenty nejvyšší úrovně.
2. Zvolte {{ui:Export}}, potom {{ui:Hmoty pro BimCraft…}}.
3. Zadejte {{ui:Název sady variant}} a {{ui:Výška podlaží}}.
4. Zkontrolujte seznam: podlaží, půdorys, hrubou podlahovou plochu a objem každé varianty.
5. Zvolte **Odeslat do BimCraftu**, čímž se BimCraft otevře v nové kartě s variantami, nebo {{ui:Uložit jako IFC}}, abyste soubor stáhli a otevřeli jej tam sami.

V BimCraftu jsou varianty uvedeny pod "Varianty hmot v modelu", kde lze jednu nastavit jako aktuální variantu a rozvinout ji do stěn a podlaží.

## Jak se těleso stane hmotou

- **Podlaží** je výška tělesa dělená výškou podlaží, zaokrouhleno, a nejméně jedno. Podlaží pak sdílejí výšku tělesa rovnoměrně, takže blok o výšce 10 m při podlažích po 3 m má 3 podlaží po 3.33 m.
- **Plocha podlaží** je plocha vodorovného řezu samotného tělesa na úrovni daného podlaží. Blok, který ustupuje, má menší horní podlaží, a hrubá podlahová plocha je jejich součet.
- **Půdorys** je obrys řezu těsně nad základnou tělesa.
- **Objem** je objem samotného tělesa.

V souboru IFC je každá varianta zástupným prvkem stavby (půdorys vytažený do výšky tělesa) s jedním prostorem na podlaží, který nese hrubou podlahovou plochu podlaží. Všechny varianty sdílejí jednu budovu s tolika podlažími, kolik má nejvyšší varianta.

## Zjednodušené tvary

Jednoduchý svislý blok se přenese přesně tak, jak byl namodelován. Cokoli jiného se odešle také a seznam uvede, proč je tvar zjednodušen:

- **Jeho podlaží nemají všechna velikost základny** (ustupuje nebo se svažuje): hmota v BimCraftu je obrys základny vytažený do plné výšky, ale plochy podlaží a objem jsou samotného tělesa.
- **Těleso není uzavřené**: podlaží, jejichž řez nelze uzavřít, se neměří a počítají se jako nic. Uzavřete těleso (v {{ui:Informace o prvku}} je uvedeno "Těleso: ano") pro úplné údaje.
- **Základna má více obrysů**: jako půdorys se použije největší.

## Dobré vědět

- {{ui:IFC pro BimCraft (.ifc)}} je jiný export: odesílá jen tvary a názvy, bez podlaží a ploch.
- Nic se nenahrává. Soubor se předá kartě BimCraftu na tomto počítači.
