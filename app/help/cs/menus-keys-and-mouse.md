---
title: Nabídky, klávesy a myš
summary: Vyberte styl nabídek, který odpovídá modeláři, jehož už znáte, přiřaďte libovolnému příkazu vlastní klávesu, přesouvejte příkazy mezi nabídkami a nastavte, co dělají kolečko a prostřední a pravé tlačítko myši.
keywords: styl nabídek, nabídky, lišta nabídek, panel nástrojů, klávesové zkratky, klávesy, styl kláves, mapa kláves, přizpůsobit, přemapovat, znovu přiřadit, myš, kolečko, obrátit, směr přiblížení, prostřední tlačítko, pravé tlačítko, orbita, posun, export, import, přepínání, známý, tlač/tah, modeler
from: e56fce3d
---

Nástroje ModelCraftu jsou stejné, ať se k nim dostanete jakkoli. **Styl nabídek** určuje, kde jsou na obrazovce, jak se tam jmenují a kterými klávesami se spouštějí. Zvolte jej v {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Nabídky, klávesy a myš}}; změna se projeví okamžitě a tento prohlížeč si ji zapamatuje.

## Styly

| Styl | Co dostanete |
|---|---|
| {{ui:ModelCraft}} | Vlastní panel nástrojů ModelCraftu (Soubor, Kreslení, Úprava, Uspořádání, Úpravy, Kamera) a jednopísmenné klávesy: {{key:L}} úsečka, {{key:R}} obdélník, {{key:P}} tlač/tah, {{key:M}} přesun, {{key:Q}} otočení, {{key:S}} měřítko, {{key:E}} guma, {{key:O}} orbita. Výchozí. |
| {{ui:Tlač/tah}} | Lišta nabídek (Soubor, Úpravy, Zobrazení, Kamera, Kreslení, Nástroje, Okno) nad řadou hlavních nástrojů, se stejnými jednopísmennými klávesami. |
| {{ui:Modeler}} | Záhlavní lišta nabídek (Soubor, Úpravy, Zobrazení, Výběr, Přidat, Objekt, Síť) a klávesy síťových modelářů: {{key:W}} výběr, {{key:G}} uchopení, {{key:R}} otočení a {{key:S}} měřítko výběru najednou ({{key:X}}, {{key:Y}} nebo {{key:Z}} zamkne osu při pohybu), {{key:E}} tlač/tah, {{key:B}} obdélník, {{key:X}} smazání, {{key:A}} vybrat vše, {{key:Alt+A}} zrušit výběr, {{key:Shift+D}} duplikovat, {{key:Mod+G}} skupina, {{key:H}} skrýt. Prostřední tlačítko otáčí pohled (orbita); {{key:Shift}} a prostřední tlačítko posouvají, {{key:Mod}} a prostřední tlačítko přibližují; pravé tlačítko zruší to, co nástroj dělá. |
| {{ui:Začátečník}} | Pás karet, jehož karta {{ui:Vytvořit}} má několik velkých tlačítek: tvary k vložení, otvory, přesun, otáčení a změna velikosti, zarovnání, {{ui:Skupina}} (otvory vyříznuté do tvarů) a kontrola pro 3D tisk; všechny ostatní nástroje na kartě {{ui:Další nástroje}}. Pravé tlačítko otáčí pohled, prostřední jej posouvá. Viz [Styl Začátečník](topic:beginner). |

Styl kláves, který možná znáte z {{ui:Klávesy}} vpravo dole v pohledu a z {{ui:Úpravy}} › {{ui:Další}}, je stejná volba: volba kláves modeleru tam zvolí styl {{ui:Modeler}}, volba kláves tlač/tah jej přepne na styl {{ui:ModelCraft}}. Pokud jste v starší verzi zvolili klávesy modeleru, ModelCraft se jednou sám otevře ve stylu {{ui:Modeler}}.

:::tip
Klávesa patřící k sadě tlač/tah, které váš styl přiřadí jiný příkaz, nic neudělá, a stavový řádek ukáže, kam se příkaz přesunul ("V Modeleru je Tlač/tah E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šipky mají vždy svůj význam, čísla vždy jdou do pole hodnoty a zatímco nástroj něco přesouvá, vyhrávají jeho vlastní klávesy.
:::

## Vytvořte si vlastní

1. Vyberte styl nejblíže tomu, co chcete, a klikněte na {{ui:Přizpůsobit…}}.
2. Na {{ui:Klávesy a nabídky}} najděte příkaz (pomůže vyhledávací pole). Klikněte na {{ui:Přidat klávesu}} a stiskněte klávesu. Kliknutím na klávesu ji odeberete.
3. U lišty nabídek {{ui:Kde je}} přesune příkaz do jiné nabídky, nebo na {{ui:Jen klávesy}}.
4. Na {{ui:Myš}} nastavte kolečko a to, co tlačítka dělají v 3D pohledu.
5. Zadejte název a klikněte na {{ui:Uložit}}.

Uložení vestavěného stylu vytvoří vlastní kopii ("My Modeler"); vestavěný se nikdy nemění. Vaše kopie čte klávesy stejně jako styl, ze kterého vychází: kopie vytvořená z {{ui:Modeler}} udržuje klávesy uchopení, otočení a měřítka fungující najednou.

## Myš

- **Kolečko myši**: {{ui:Posun kolečkem nahoru přibližuje}} (výchozí), nebo {{ui:Posun kolečkem nahoru oddaluje}}, a jak rychle. Sevření dvou prstů na touchpadu vždy přibližuje ve směru, kterým se prsty pohybují.
- **Tažení ve 3D pohledu**: {{ui:Každý pohled zvlášť}} ponechá tlačítka ModelCraftu (prostřední tlačítko otáčí pohled, pravé tlačítko nebo {{key:Shift}} a prostřední tlačítko posouvají). Nebo nastavte prostřední a pravé tlačítko na orbitu, posun, přiblížení nebo nic; {{key:Shift}} s tlačítkem prohodí orbitu a posun. Levé tlačítko vždy patří používanému nástroji.
- **Touchpady**: {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Rolování}} stále rozhoduje, zda dva prsty otáčejí pohled (touchpad), nebo přibližují (myš). Viz [Orbita, posun a přiblížení](topic:orbit-pan-zoom).

## Vezměte si je s sebou

{{ui:Export}} uloží používaný styl jako malý soubor `.ccinput.json`; {{ui:Importovat…}} přidá jeden, z jiného počítače nebo od kolegy. Importovaný soubor může odkazovat jen na vlastní příkazy ModelCraftu: cokoli dalšího v něm se vynechá a ve stavovém řádku se spočítá. {{ui:Smazat tento styl}} odstraní jeden z vašich vlastních.

:::note
Tato nastavení zůstávají v tomto prohlížeči. {{ui:Používat tento styl ve všech aplikacích}} pod kartami stylů způsobí, že se každá aplikace otevře v odpovídajícím stylu: {{ui:Tlač/tah}} odpovídá stylům lišty nabídek ostatních aplikací. {{ui:Modeler}} nemá v ostatních aplikacích protějšek, takže zůstává volbou ModelCraftu.
:::

Související: [Klávesy a akce myši](topic:keyboard) · [Nastavení ModelCraftu](topic:settings) · [Přechod z jiných modelářů](topic:coming-from)
