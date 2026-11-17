---
title: Modelovanie na situačnom pláne z DWG alebo DXF
summary: Načítajte CAD situačný alebo pôdorysný plán ako čiary na zemi, odpovedzte na otázku jednotiek a obtiahnite ho na plochy a hmoty.
keywords: situačný plán, dwg, dxf, cad, import, náčrt, fotografia náčrtu, ručný náčrt, náčrt na servítku, fotografia, papier, farby pera, dynamické bloky, stavy viditeľnosti, text, šrafovanie, spline, elipsa, 3D plocha, obtiahnutie, pôdorys, parcela, hranica pozemku, jednotky, podklad, kontext
from: 3415dc96
---

ModelCraft dokáže načítať čiary 2D CAD výkresu, situačného plánu alebo pôdorysu a položiť ich na zem, aby ste na nich mohli modelovať.

## Import výkresu

1. Kliknite na {{ui:Importovať}} v skupine {{ui:Súbor}} (alebo pretiahnite súbor do 3D zobrazenia).
2. Vyberte súbor `.dwg` alebo `.dxf`.

   Veľký DWG súbor chvíľu trvá: stavový riadok hovorí "Čítanie plan.dwg…", kým sa nenačíta.

3. Ak výkres neuvádza svoje jednotky, dialógové okno s názvom "Jednotky výkresu" sa spýta: "Čo je jedna jednotka výkresu?" Vyberte {{ui:Palce}}, {{ui:Stopy}}, {{ui:Milimetre}} alebo {{ui:Metre}}. Väčšina situačných plánov v USA sa kreslí v stopách, architektonické plány v palcoch a metrické plány v milimetroch.

   Výkres sa načíta ako skupina hrán na zemi, vybraná, a zobrazenie sa na ňu priblíži. Stavový riadok hovorí, koľko hrán sa načítalo, napríklad "Importované site.dwg: 1697 hrán na zemi, v skupine. Rozložte ju, aby ste na nej mohli kresliť priamo."

## Čo sa načíta

- Úsečky, lomené čiary (vrátane ich oblúkov), kružnice a oblúky a bloky so všetkým, čo obsahujú, iba z **priestoru modelu**. Krivky sa zmenia na krátke rovné úseky.
- Úsečky, lomené čiary, oblúky, kružnice, elipsy a spline sa na zemi položia naplocho ako hrany.
- **Šrafovania** sa stanú plochami na zemi, s ich ostrovmi ako dierami, takže šrafovanú plochu môžete hneď upraviť nástrojom {{ui:Tlač/ťah}}.
- **3D plochy** a plné výplne sa stanú plochami; 3D plochy si zachovajú svoje výšky.
- **Text** (jednoriadkový text, viacriadkový text a hodnoty atribútov) sa kreslí ako hrany jednoduchým písmom s jednou ťahovou čiarou, vo vlastnej výške, uhle a zarovnaní textu. Jeho písmo nie je písmo výkresu, takže slová môžu byť o trochu dlhšie alebo kratšie. Znaky, pre ktoré písmo nemá tvar, sa kreslia ako malé štvorčeky a počítajú sa.
- **Kóty** sa kreslia tak, ako ich zobrazuje výkres (ich čiary, šípky a text ako hrany a plochy).
- **Dynamické bloky** sa načítajú tak, ako ich výkres zobrazuje: každý umiestnený blok v stave viditeľnosti, v akom bol uložený, a iba čiary tohto stavu. Stavový riadok ich uvádza so zobrazeným stavom a ostatnými stavmi, ktoré každý má, napríklad "Receptacle zobrazený ako Duplex ×38, GFI ×7 (stavy: Duplex, GFI)". ModelCraft stavy neprepína.
- **3D telesá, regióny a objemové telesá** (dáta ACIS výkresu) sa načítajú ako vlastné skupiny: uzavreté teleso ako teleso, región alebo otvorené teleso ako plochy. Rovné plochy sa načítajú celé; zakrivené plochy (valce, kužele, gule, torusy, jednoduché spline plochy) ako malé trojuholníky s jemnými hranami medzi nimi, takže sa zobrazia iba vlastné hrany telesa. Plocha na inom type povrchu sa vynechá a uvedie sa: "Zatiaľ nenakreslené (3D telesá): …".
- Nenačítava sa: body, tabuľky, viacnásobné vynášacie čiary, obrázky a ďalšie typy objektov. Stavový riadok ich uvádza podľa typu, napríklad "Nenačítané: 12 POINT." Všetko na rozložení (priestor papiera) sa tiež vynechá, bez uvedenia v zozname.
- Hladiny sa nezachovávajú: všetky čiary sa načítajú rovnako.

Ak je výkres ďaleko od svojho počiatku (napríklad súradnice štátnej roviny), stále sa načíta, ale môže pristáť ďaleko od počiatku ModelCraftu. Výkresy, ktoré siahajú viac ako 10,000 km od svojho počiatku, sa odmietnu: najprv presuňte výkres bližšie k 0,0 v CAD programe.

## Obtiahnutie na plochy

Načítané čiary sa zriedka samé uzavrú do plôch. Dva spôsoby práce:

**Ponechajte plán ako podklad (odporúčané)**

1. Nechajte plán ako vlastnú skupinu.
2. Nakreslite svoju budovu nad plán pomocou {{ui:Obdĺžnik}} a {{ui:Úsečka}}, s prichytením k rohom plánu ("Koncový bod") a hranám ("Na hrane").
3. Plochy vytiahnite nahor pomocou {{ui:Tlač/ťah}}. Plán zostane pod nimi nedotknutý a celú skupinu môžete neskôr zmazať jedným kliknutím.

Prichytávanie funguje naprieč skupinami: k rohom plánu sa môžete prichytiť bez toho, aby ste ho otvárali.

**Kreslite na vlastných čiarach plánu**

1. Vyberte skupinu plánu a kliknite na {{ui:Rozložiť}}. Jeho čiary sa stanú voľnými hranami.
2. Tam, kde má uzavretý obrys byť plocha, nakreslite pomocou {{ui:Úsečka}} čiaru cez ktorúkoľvek jeho hranu, od rohu k rohu. Keď je obrys uzavretý a rovný, plocha sa zvyčajne vyplní. Ak nie, hľadajte medzeru alebo prekrytie v obryse a nakreslite cez ne.
3. Vytiahnite ju nástrojom {{ui:Tlač/ťah}}.

Najlepšie to funguje na čistom pláne. Pri zaplnenom zameraní je obťahovanie nad ním rýchlejšie.

## Problémy

- "Toto je binárny DXF. Uložte ho ako ASCII DXF a skúste to znova." Uložte DXF znova z CAD programu ako ASCII (text).
- "…v priestore modelu nemá žiadne čiary, oblúky ani kružnice, ktoré by sa načítali." Výkres je pravdepodobne celý na rozloženiach alebo celý z textu a šrafovaní.
- "Tento výkres sa nepodarilo prečítať (…). Môže byť poškodený alebo uložený vo verzii DWG, ktorú čítačka nepodporuje…" Zátvorky uvádzajú dôvod, napríklad "Verzia DWG AC1009 nie je podporovaná". Uložte ho v CAD programe ako DXF alebo ako DWG z AutoCADu 2000 až 2018.
- Plán má zlú veľkosť: vybrali ste zlú jednotku. Vráťte späť ({{key:Mod+Z}}) a importujte znova, alebo [zmeňte mierku](topic:rotate-scale) skupiny správnym faktorom (12 medzi stopami a palcami, 25.4 medzi palcami a milimetrami).

Ak chcete vrstevnice premeniť na terén, ktorý môžete tvarovať, pozri [Terén](topic:terrain).

## Z fotografie ručného náčrtu

**Súbor › Importovať fotografiu náčrtu…** vezme fotografiu náčrtu na papieri (JPEG, PNG alebo TIFF, priamo z telefónu je v poriadku) a vytvorí rovnaký druh hrán na zemi. Povedzte, aký je to papier (alebo nechajte nájsť list, ktorý sa vezme ako A4) a mierku náčrtu, napríklad 1 : 100. Hrana papiera sa nájde a fotografia sa narovná, tuš sa obtiahne na čiary a oblúky a každá farba pera (čierna, červená, modrá, zelená) sa stane vlastnou skupinou so štítkom (**Náčrt čierny**, **Náčrt červený**, …), všetko vnútri jednej skupiny pomenovanej podľa fotografie. Je to jeden krok späť a všetko sa deje na tomto počítači: nič sa nikam neodosiela.

Ak sa hrana papiera nenájde, celá fotografia sa vezme ako list a stavový riadok to uvedie: odmerajte niečo, čo poznáte, a ak to nesedí, zmeňte mierku skupiny. Čiary obtiahnite na plochy ako vyššie.
