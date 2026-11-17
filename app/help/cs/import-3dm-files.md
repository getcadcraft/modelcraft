---
title: Import modelu .3dm
summary: Naimportujte soubor .3dm se sítěmi, plochami, křivkami, bloky, vrstvami a barvami; odkud pocházejí trojúhelníky a co se vynechá.
keywords: 3dm, import, nurbs, polypovrch, brep, plochy, vykreslovací síť, vytažení, křivky, bloky, vrstvy, štítky, barvy, jednotky, přechod, migrace
from: 3cf29879
---

ModelCraft čte soubory `.3dm` vlastní čtečkou přímo na stránce. Nic se nenahrává a funguje offline, kdykoli funguje ModelCraft. Soubory uložené v rozloženích verzí 5, 6, 7 a 8 byly otestovány; starší soubory (verze 2 až 4) by se měly otevřít, ale zatím nebyly vyzkoušeny.

## Import souboru

1. Klikněte na {{ui:Import}} ve skupině {{ui:Soubor}} (nebo přetáhněte soubor `.3dm` do 3D pohledu).
2. Vyberte soubor.

   Stavový řádek hlásí "Čtení souboru chair.3dm…", dokud čte, a potom, co přišlo, například "Importován soubor chair.3dm: 14 sítí (8330 ploch), 8 křivek, 5 umístění bloků, 3 vrstvy jako štítky. Plochy: 7 ploch ze sítí uložených v souboru, 29 dopočítal CadCraft."

Celý model přijde jako jedna skupina pojmenovaná podle souboru, je vybrána a pohled se na ni přiblíží. Jedno {{key:Mod+Z}} ji všechnu zase odstraní, včetně štítků.

## Odkud pocházejí trojúhelníky

ModelCraft pracuje s plochami a sítěmi, takže každá plocha v souboru přijde jako [síť](topic:meshes) z malých rovných trojúhelníků. Pro každou plochu polypovrchu (a každé vytažení) ModelCraft vezme v tomto pořadí:

1. **Vykreslovací síť uloženou v souboru.** Většina modelovacích programů ukládá ke každé ploše síť, kterou zobrazovali na obrazovce; je-li přítomna, ModelCraft ji použije beze změny.
2. **Vlastní tesselaci**, není-li v souboru uložena žádná síť: roviny, plochy NURBS, plochy rotace (koule, kužely, tori, soustružené tvary), vytažené křivky a vytažení (s jejich otvory a koncovými víky), oříznuté podle svých hran. Plochy jednoho polypovrchu sdílejí body svých hran, takže uzavřený polypovrch přijde jako uzavřená síť. Zakřivené oblasti se dělí, dokud trojúhelníky neleží do vzdálenosti zhruba 0.15 % velikosti objektu od skutečné plochy.
3. **Nic**, u plochy druhu, který ModelCraft zatím nečte. Stavový řádek říká, kolik ploch a jakého druhu.

Část "Plochy:" ve stavovém řádku říká, kolik ploch přišlo z uložených sítí a kolik jich ModelCraft tesseloval. Hrany uvnitř jedné plochy souboru jsou měkké a hrany mezi dvěma plochami ostré, takže zakřivená plocha se stíní plynule.

:::tip
Pro co nejvěrnější tvary soubor ukládejte s vykreslovacími sítěmi v programu, který jej vytvořil (obvykle je to výchozí nastavení; volba "uložit malé" je vynechá).
:::

## Co přijde

- **Sítě** s barvami vrcholů a souřadnicemi textur.
- **Polypovrchy, plochy a vytažení**, jak je popsáno výše.
- **Křivky** (úsečky, mnohočáry, oblouky, kružnice, křivky NURBS a z nich spojené křivky) jako [hrany](topic:curves), jedna skupina hran na vrstvu.
- **Bloky** se stanou [komponentami](topic:groups-components): každé umístění bloku je umístěním jedné komponenty, takže úprava jedné kopie změní všechny. Bloky uvnitř bloků se zachovají.
- **Vrstvy** se stanou [štítky](topic:tags) s celým názvem vrstvy ("Furniture::Chairs"), skryté, byla-li vrstva vypnutá. Umístění každého objektu nese štítek své vrstvy.
- **Barvy.** Barva objektu pochází z místa, které to v souboru určuje: vlastní barva, barva vrstvy nebo základní barva jeho materiálu. Stane se barvou jeho ploch.
- **Skryté objekty přijdou skryté**; {{ui:Zobrazit vše}} je ukáže.
- **Jednotky:** soubor určuje svou jednotku; model přijde ve své skutečné velikosti.

## Co se vynechá (a řekne se to)

V části "Poznámky:" stavového řádku jsou uvedeny všechny položky, které nepřišly, s počtem:

- body a mračna bodů, text, textové body, kóty, výnosky, šrafy, světla, ořezové roviny a detaily rozvržení;
- objekty SubD: nejprve je v programu, který soubor vytvořil, převeďte na sítě nebo polypovrchy;
- plochy na odsazených plochách a jiné druhy ploch, které ModelCraft zatím nečte, není-li pro ně v souboru uložena síť;
- bloky propojené z jiných souborů (čte se pouze soubor, který importujete);
- vytažení se šikmými (zkosenými) konci přijdou s rovnými konci.

Textury materiálů, nastavení vykreslování, pojmenované pohledy, skupiny a uživatelský text se nečtou; materiál dává pouze svou základní barvu.

## Limity

Soubory do 300 MB. Poškozený soubor říká, co je v nepořádku, a nic nepřidá; jeden objekt, který nelze přečíst, se vynechá a započítá, zbytek se naimportuje.
