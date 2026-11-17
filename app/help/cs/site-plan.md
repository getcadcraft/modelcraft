---
title: Modelování na situačním plánu z DWG nebo DXF
summary: Načtěte CAD situační nebo půdorysný plán jako čáry na zemi, zodpovězte otázku jednotek a obtáhněte ho na plochy a hmoty.
keywords: situační plán, dwg, dxf, cad, import, náčrt, fotografie náčrtu, ruční náčrt, náčrt na ubrousku, fotografie, papír, barvy per, dynamické bloky, stavy viditelnosti, text, šrafa, spline, elipsa, 3D plocha, obtažení, půdorys, parcela, hranice pozemku, jednotky, podklad, kontext
from: 3415dc96
---

ModelCraft umí načíst čáry 2D CAD výkresu, situačního plánu nebo půdorysu a položit je na zem, abyste na nich mohli modelovat.

## Import výkresu

1. Klikněte na {{ui:Import}} ve skupině {{ui:Soubor}} (nebo přetáhněte soubor do 3D pohledu).
2. Vyberte soubor `.dwg` nebo `.dxf`.

   Velký DWG chvíli trvá: stavový řádek ukazuje „Čtení plan.dwg…“, dokud se nenačte.

3. Pokud výkres neuvádí své jednotky, dialog nazvaný „Jednotky výkresu“ se zeptá: „Jaká je jedna jednotka výkresu?“ Zvolte {{ui:Palce}}, {{ui:Stopy}}, {{ui:Milimetry}} nebo {{ui:Metry}}. Většina amerických situačních plánů je kreslena ve stopách, architektonické plány v palcích a metrické plány v milimetrech.

   Výkres přijde jako skupina hran na zemi, vybraná, a pohled se na ni přiblíží. Stavový řádek říká, kolik hran přišlo, například „Importováno site.dwg: 1697 hran na zemi, ve skupině. Rozložte ji a kreslete přímo na ni.“

## Co se načte

- Úsečky, mnohočáry (včetně jejich oblouků), kružnice a oblouky a bloky se vším, co obsahují, pouze z **prostoru modelu**. Křivky se změní na krátké rovné úseky.
- Úsečky, mnohočáry, oblouky, kružnice, elipsy a splines leží na zemi naplocho jako hrany.
- **Šrafy** se stanou plochami na zemi, jejich ostrovy jako otvory, takže šrafovanou plochu můžete hned vytáhnout tlač/tahem.
- **3D plochy** a plné výplně se stanou plochami; 3D plochy si zachovají své výšky.
- **Text** (jednořádkový text, víceřádkový text a hodnoty atributů) se kreslí jako hrany jednoduchým jednotahovým písmem, ve výšce, úhlu a zarovnání samotného textu. Jeho písmo není písmem výkresu, takže slova mohou být o něco delší nebo kratší. Znaky, které písmo nemá, se kreslí jako malé čtverečky a počítají se.
- **Kóty** se kreslí tak, jak je výkres ukazuje (jejich čáry, šipky a text jako hrany a plochy).
- **Dynamické bloky** přicházejí tak, jak je výkres ukazuje: každý umístěný blok ve stavu viditelnosti, v jakém byl uložen, a jen čáry tohoto stavu. Stavový řádek je vypisuje se zobrazeným stavem a ostatními stavy, které každý má, například „Receptacle zobrazen jako Duplex ×38, GFI ×7 (stavy: Duplex, GFI)“. ModelCraft stavy nepřepíná.
- **3D tělesa, oblasti a tělesa** (data ACIS výkresu) přicházejí jako vlastní skupiny: uzavřené těleso jako těleso, oblast nebo otevřené těleso jako plochy. Rovné plochy přicházejí vcelku; zakřivené plochy (válce, kužely, koule, torusy, jednoduché spline plochy) jako malé trojúhelníky s měkkými hranami mezi nimi, takže jsou vidět jen vlastní hrany tělesa. Plocha na jiném typu povrchu se vynechá a vypíše se: „Zatím nenakresleno (3D tělesa): …“.
- Nenačítá se: body, tabulky, víceúrovňové výnosky, obrázky a další typy objektů. Stavový řádek je vypisuje podle typu, například „Nenačteno: 12 POINT.“ Cokoli na rozvržení (prostoru papíru) se také vynechá, bez výpisu.
- Vrstvy se neuchovávají: všechny čáry přicházejí stejně.

Je-li výkres daleko od svého počátku (například souřadnice v systému státní roviny), přesto se načte, ale může přistát daleko od počátku ModelCraft. Výkresy zasahující více než 10,000 km od svého počátku se odmítnou: nejprve přesuňte výkres blíž k 0,0 v CAD programu.

## Obtažení na plochy

Načtené čáry se samy zřídka uzavřou do ploch. Dva způsoby práce:

**Ponechte plán jako podklad (doporučeno)**

1. Nechte plán jako vlastní skupinu.
2. Nakreslete svou budovu nahoře pomocí {{ui:Obdélník}} a {{ui:Úsečka}} s přichycením k rohům plánu („Koncový bod“) a hranám („Na hraně“).
3. Plochy vytáhněte tlač/tahem nahoru. Plán zůstane pod nimi netknutý a celou skupinu pak můžete smazat jedním kliknutím.

Přichytávání funguje napříč skupinami: k rohům plánu se můžete přichytit, aniž byste ho otevřeli.

**Kreslete na vlastní čáry plánu**

1. Vyberte skupinu plánu a klikněte na {{ui:Rozložit}}. Jeho čáry se stanou volnými hranami.
2. Tam, kde má uzavřený obrys být plochou, nakreslete přes kteroukoli jeho hranu jednu čáru pomocí {{ui:Úsečka}}, od rohu k rohu. Je-li obrys uzavřený a rovný, plocha se obvykle vyplní. Pokud ne, hledejte mezeru nebo překrytí v obrysu a překreslete je.
3. Vytáhněte ji tlač/tahem.

Nejlépe to funguje na čistém plánu. Na přeplněném zaměření je obtažení nahoře rychlejší.

## Potíže

- „Toto je binární DXF. Uložte jej jako ASCII DXF a zkuste to znovu.“ Uložte DXF znovu z CAD programu jako ASCII (text).
- „…v prostoru modelu nejsou žádné čáry, oblouky ani kružnice k načtení.“ Výkres je pravděpodobně celý na rozvrženích, nebo jen text a šrafy.
- „Tento výkres nelze přečíst (…). Může být poškozený, nebo uložený ve verzi DWG, kterou čtečka nepodporuje…“ Závorky říkají proč, například „verze DWG AC1009 není podporována“. Uložte jej z CAD programu jako DXF, nebo jako DWG z AutoCADu 2000 až 2018.
- Plán má špatnou velikost: zvolili jste špatnou jednotku. Vraťte zpět ({{key:Mod+Z}}) a importujte znovu, nebo [změňte měřítko](topic:rotate-scale) skupiny správným koeficientem (12 mezi stopami a palci, 25.4 mezi palci a milimetry).

Chcete-li vrstevnice převést na terén, který lze tvarovat, viz [Terén](topic:terrain).

## Z fotografie ručního náčrtu

**Soubor › Importovat fotografii náčrtu…** vezme fotografii náčrtu na papíře (JPEG, PNG nebo TIFF, přímo z telefonu je v pořádku) a vytvoří stejný druh hran na zemi. Řekněte, který papír to je (nebo nechte, ať list najde sám, počítá se jako A4) a měřítko náčrtu, například 1 : 100. Hrana papíru se najde a fotografie se narovná, tuš se obtáhne na čáry a oblouky a každá barva pera (černá, červená, modrá, zelená) se stane vlastní skupinou se štítkem (**Náčrt černý**, **Náčrt červený**, …), vše uvnitř jedné skupiny pojmenované podle fotografie. Je to jeden krok zpět a vše se děje na tomto počítači: nic se nikam neodesílá.

Když hrana papíru nelze najít, vezme se celá fotografie jako list a stavový řádek to řekne: změřte něco, co znáte, a je-li to mimo, změňte měřítko skupiny. Čáry obtáhněte na plochy jako výše.
