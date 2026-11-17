---
title: Odoslať scénu do herného enginu
summary: Studio dokáže zapísať scénu do projektu Unreal Engine a pri každom odoslaní ju udržiavať v súlade; vaše vlastné úpravy sú vo vrstve, do ktorej CadCraft nikdy nezapisuje. Zásuvný modul, ktorý ju otvorí, ešte nie je vydaný.
keywords: unreal, unreal engine, herný engine, prepojenie, odoslať, usd stage, projekt, naživo, filmová kamera, rad vykresľovania filmu
from: 9a765cc2
---

V CadCraft Studio môže zoznam Engine obsahovať **prepojenie** na projekt Unreal Engine. Iba jedným smerom: z CadCraftu do Unreal.

## Odoslanie scény

1. Vyberte položku Unreal v zozname Engine. Pri prvom použití vás Studio požiada, aby ste vybrali priečinok vášho projektu (ten so súborom `.uproject`); tento priečinok si zapamätá.
2. Kliknite na {{ui:Send}}. Studio zapíše `CadCraft/<file name>/` do projektu: scénu ako súbor USD, súbor nastavení, profily svetiel a dva malé súbory vrstiev.
3. Zmeňte model, uložte a odošlite znova. Nahradia sa iba scéna a súbor nastavení.

## Vaše vlastné úpravy sú v bezpečí

Stage, ktorý Unreal otvorí, je malá koreňová vrstva vytvorená raz, s dvoma vrstvami pod ňou: **vaša** hore (`<name>.user.usda`, spočiatku prázdna, CadCraft ju nikdy neprepíše) a scéna CadCraftu pod ňou. Úpravy, ktoré uložíte do svojej vrstvy, zostanú zachované, keď sa scéna odošle znova. Svetlá a ďalší aktéri, ktorých umiestnite do úrovne Unreal, sú mimo stage a ani tie nie sú dotknuté.

## Bez Studia

V prehliadači alebo na počítači, kde Studio nenájde Unreal, vyberte v zozname Engine položku **Priečinok projektu Unreal (.zip)** a kliknite na {{ui:Render}}. Uloží sa rovnaký priečinok ako zip: rozbaľte ho do priečinka `CadCraft` vášho projektu. Pri prvom uložení nechajte **Zahrnúť súbory stage** zapnuté; pri ďalších uloženiach ho vypnite, aby zip obsahoval iba scénu a súbor nastavení a vaša vrstva sa nikdy nenahradila.

:::note
Zásuvný modul Unreal, ktorý otvára stage, aplikuje slnko, svetlá, kamery a expozíciu, sleduje každé odoslanie a vykresľuje kameru, **zatiaľ nie je vydaný** a v Unreal ešte nebol spustený. Dovtedy Odoslať uloží súbory do projektu a vlastné nástroje Unreal pre USD ich dokážu otvoriť. Prvým systémom je Windows; macOS nasleduje.
:::
