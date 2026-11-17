---
title: Terén: země z vrstevnic a její tvarování
summary: Vytvořte terén z vrstevnic nebo jako mřížku, pak ho měkkým štětcem zvedejte a snižujte.
keywords: terén, země, krajina, topografie, vrstevnice, vrstevnicové čáry, pozemek, svah, kopec, navršenina, sandbox, smoove, tvarovat, sklon, TIN
from: 407652b3
---

Terén je země tvořená trojúhelníky, takže může kopírovat jakýkoli tvar. Je to skupina: dvojklikem ji upravíte.

## Z vrstevnic

1. Získejte vrstevnice v jejich výškách: nakreslete je, nebo [naimportujte situační plán](topic:site-plan) a každou vrstevnici posuňte do její úrovně.
2. Vyberte je (všechny hrany všech vrstevnic).
3. {{ui:Úpravy}} › {{ui:Další}} › {{ui:Terén z vybraných vrstevnic}}.

ModelCraft spojí body vrstevnic trojúhelníky (TIN) a změkčí každou hranu uvnitř, aby země byla stínována hladce. Samotné čáry zůstanou; smažte je nebo skryjte, až je nebudete potřebovat. Velmi husté vrstevnice se zředí na 8 000 bodů.

## Mřížka k tvarování

{{ui:Úpravy}} › {{ui:Další}} › {{ui:Mřížka terénu…}} se zeptá na šířku, hloubku a velikost buňky a poté umístí plochou mřížku trojúhelníků tam, kam kliknete na její roh. Malé buňky se tvarují hladčeji, ale vytvoří více ploch (nejvýše 200 × 200 buněk).

## Tvarování: zvedání a snižování země

1. Dvojklikem na terén jej otevřete.
2. {{ui:Úpravy}} › {{ui:Další}} › {{ui:Tvarovat terén}}. Kružnice ukazuje štětec na zemi pod ukazatelem.
3. Táhněte nahoru, aby se země pod štětcem zvedla, nebo dolů, aby se snížila. Střed se posouvá nejvíce a země se k okraji kružnice plynule ztrácí, takže navršeniny a prohlubně vyjdou hladké.

Chcete-li navršeninu přesné výšky, klikněte jednou, pak napište výšku, například `1.5m` (mínus ji sníží), a stiskněte {{key:Enter}}. Chcete-li změnit štětec, napište délku před kliknutím: `5m` dá štětec s poloměrem 5 m.

Každé tvarování je jeden krok funkce zpět.

## Co je dobré vědět

- Tvarování posouvá jen trojúhelníkové plochy, takže každá plocha zůstane rovná. Plochy nakreslené ručně (obdélníky, mnohoúhelníky) nejsou terén: nástroj to řekne.
- Tvarování posouvá body přímo nahoru a dolů; body nepřidává. Pro jemnější detail vytvořte mřížku s menšími buňkami.
- Terén se exportuje jako každá jiná skupina. V IFC je to building element proxy, jako všechno ostatní.
