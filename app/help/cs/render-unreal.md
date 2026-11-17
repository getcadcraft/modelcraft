---
title: Odeslání scény do herního enginu
summary: Studio může zapsat scénu do projektu Unreal Engine a při každém odeslání ji udržet v souladu; vaše vlastní úpravy zůstávají ve vrstvě, kterou CadCraft nikdy nezapisuje. Zásuvný modul, který ji otevře, zatím není vydán.
keywords: unreal, unreal engine, herní engine, odkaz, odeslat, USD stage, projekt, živě, cine kamera, fronta vykreslování filmu
from: 9a765cc2
---

V CadCraft Studiu může seznam enginů obsahovat **odkaz** na projekt Unreal Engine. Pouze jedním směrem: z CadCraftu do Unrealu.

## Odeslání scény

1. Vyberte položku Unreal v seznamu enginů. Při prvním použití vás Studio požádá o výběr složky projektu (té, která obsahuje soubor `.uproject`); tuto složku si zapamatuje.
2. Klikněte na {{ui:Odeslat}}. Studio zapíše do projektu `CadCraft/<název souboru>/`: scénu jako soubor USD, soubor nastavení, profily světel a dva malé soubory vrstev.
3. Změňte model, uložte a odešlete znovu. Nahradí se pouze scéna a soubor nastavení.

## Vaše úpravy jsou v bezpečí

Stage, který Unreal otevře, je malá kořenová vrstva vytvořená jednou, se dvěma vrstvami pod ní: **vaše** nahoře (`<name>.user.usda`, zpočátku prázdná, CadCraft ji nikdy nepřepíše) a scéna CadCraftu pod ní. Úpravy, které uložíte do své vrstvy, zůstanou i při dalším odeslání scény. Světla a další aktéři (actors), které umístíte do úrovně Unrealu, jsou mimo stage a také zůstávají nedotčeni.

## Bez Studia

V prohlížeči nebo na počítači, kde Studio Unreal nenajde, vyberte v seznamu enginů položku **Složka projektu Unreal (.zip)** a klikněte na {{ui:Vykreslit}}. Uloží se stejná složka jako zip: rozbalte ji do složky `CadCraft` ve svém projektu. Při prvním uložení nechte zapnuté **Zahrnout soubory stage**; při dalších uloženích jej vypněte, aby zip obsahoval jen scénu a soubor nastavení a vaše vlastní vrstva se nikdy nepřepsala.

:::note
Zásuvný modul pro Unreal, který otevře stage, použije slunce, lampy, kamery a expozici, sleduje každé odeslání a vykresluje kameru, **zatím není vydán** a v Unrealu nebyl spuštěn. Dokud nebude, Odeslat uloží soubory do projektu a vlastní nástroje Unrealu pro USD je mohou otevřít. Prvním systémem je Windows, macOS bude následovat.
:::
