---
title: Uložení, otevření a export USD
summary: Uložte celý model jako USD (.usda, .usdc nebo .usdz) bez ztráty, otevřete jej znovu a importujte USD scény z jiných 3D programů.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, uložit jako, export, import, sestavení scény, archviz, openpbr, materialx, balíček
from: 73d299f9
---

USD je formát scén, který sdílí mnoho 3D, renderovacích a archvizualizačních programů. ModelCraft ho zapisuje i čte. `.modelcraft` zůstává formátem, který zapisuje {{ui:Uložit}}; USD je volba v {{ui:Uložit jako}}.

## Uložení jako USD

1. Zvolte {{ui:Uložit jako}} ve skupině {{ui:Soubor}} (nebo stiskněte {{key:Mod+Shift+S}}).
2. Vyberte formát: {{ui:Text (.usda)}} (čitelný, vhodný pro správu verzí), {{ui:Binární (.usdc)}} (nejmenší a nejrychlejší) nebo {{ui:Balíček (.usdz)}} (jeden soubor s texturami uvnitř).
3. Soubor se stáhne (v desktopové aplikaci zvolíte, kam se uloží).

Stejné volby jsou v {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nic se neztratí

Otevřete soubor USD, který ModelCraft uložil, a dostanete model zpět přesně: plochy i s jejich otvory, měkké a skryté hrany, křivky, skupiny a komponenty, štítky, scény, kóty, vodítka, řezové roviny, světla, importované textury a pohled. Jiné programy vidí stejný model jako sítě, skupiny, prototypy komponent, materiály, světla a kamery.

:::note
Pokud jiný program změní geometrii skupiny nebo komponenty, ModelCraft tuto část otevře jako síť se zachovanou změnou a řekne, kolik částí takto přečetl. Umístění přesunuté nebo smazané v jiném programu zůstane přesunuté nebo smazané.
:::

## Otevření nebo import cizího USD

- {{ui:Otevřít}} soubor `.usd`, `.usda`, `.usdc` nebo `.usdz` a začněte z něj model.
- {{ui:Import}} jej přidá do otevřeného modelu. Přetáhněte spolu s ním i soubory, na které odkazuje (jiné vrstvy, textury).

Sítě se naimportují s normálami, souřadnicemi UV a barvami, sdílená geometrie jako komponenty, materiály jako barvy malování, světla jako světla a kamery jako scény, v metrech s osou Z nahoru bez ohledu na jednotky a osu souboru.

## Zatím ne

Animace, kostry a uzlové grafy MaterialX zatím nejsou jako USD čteny ani zapisovány. Vlastní animace a uzlové materiály ModelCraftu se uchovávají v souboru USD, který uložil, aby jej ModelCraft mohl znovu otevřít, ale jiné programy je nevidí. Vrstvy, na které soubor odkazuje a které ModelCraft nemůže číst (například dokument MaterialX), se vynechají s poznámkou.
