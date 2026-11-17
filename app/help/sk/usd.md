---
title: Uloženie, otvorenie a export USD
summary: Uložte celý model ako USD (.usda, .usdc alebo .usdz) bez straty, otvorte ho znova a importujte scény USD z iných 3D programov.
keywords: usd, usda, usdc, usdz, openusd, univerzálny popis scény, uložiť ako, export, import, zostavenie scény, archviz, openpbr, materialx, balík
from: 73d299f9
---

USD je formát scény, ktorý zdieľa veľa 3D, renderovacích a archviz programov. ModelCraft ho zapisuje aj číta. `.modelcraft` zostáva formátom, do ktorého zapisuje {{ui:Uložiť}}; USD je voľba v {{ui:Uložiť ako}}.

## Uloženie ako USD

1. Zvoľte {{ui:Uložiť ako}} v skupine {{ui:Súbor}} (alebo stlačte {{key:Mod+Shift+S}}).
2. Zvoľte formát: {{ui:Text (.usda)}} (čitateľný, vhodný na správu verzií), {{ui:Binárny (.usdc)}} (najmenší a najrýchlejší) alebo {{ui:Balík (.usdz)}} (jeden súbor s textúrami vo vnútri).
3. Súbor sa stiahne (v desktopovej aplikácii zvolíte, kam sa uloží).

Tie isté voľby sú v {{ui:Exportovať}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nič sa nestratí

Otvorte súbor USD, ktorý uložil ModelCraft, a model dostanete späť presne: plochy aj s ich otvormi, mäkké a skryté hrany, krivky, skupiny a komponenty, štítky, scény, kóty, vodiace čiary, rezné roviny, svetlá, importované textúry a pohľad. Ostatné programy vidia ten istý model ako siete, skupiny, prototypy komponentov, materiály, svetlá a kamery.

:::note
Ak iný program zmení geometriu skupiny alebo komponentu, ModelCraft otvorí túto časť ako sieť so zachovanou zmenou a oznámi, koľko častí takto načítal. Umiestnenie presunuté alebo zmazané v inom programe zostane presunuté alebo zmazané.
:::

## Otvorenie alebo import cudzieho USD

- {{ui:Otvoriť}} súbor `.usd`, `.usda`, `.usdc` alebo `.usdz` a začnite z neho model.
- {{ui:Importovať}} ho pridajte do otvoreného modelu. Spolu s ním presuňte aj súbory, na ktoré odkazuje (iné vrstvy, textúry).

Siete sa importujú s ich normálami, UV súradnicami a farbami, zdieľaná geometria ako komponenty, materiály ako farby náteru, svetlá ako svetlá a kamery ako scény, v metroch s osou Z nahor bez ohľadu na jednotky a hlavnú os súboru.

## Zatiaľ nie

Animácie, kostry a uzlové grafy MaterialX sa zatiaľ nečítajú ani nezapisujú ako USD. Vlastné animácie a uzlové materiály ModelCraft sa zachovávajú v súbore USD, ktorý uložil, aby ich ModelCraft mohol znova otvoriť, ale ostatné programy ich nevidia. Vrstvy, na ktoré súbor odkazuje a ktoré ModelCraft nedokáže prečítať (napríklad dokument MaterialX), sa vynechajú s poznámkou.
