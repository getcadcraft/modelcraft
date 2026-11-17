---
title: Import modelu .3dm
summary: Importujte súbor .3dm s jeho sieťami, plochami, krivkami, blokmi, vrstvami a farbami; odkiaľ prichádzajú trojuholníky a čo sa vynecháva.
keywords: 3dm, import, nurbs, polyplocha, brep, plochy, vykresľovacia sieť, vytlačenie, krivky, bloky, vrstvy, štítky, farby, jednotky, prepínanie, migrácia
from: 3cf29879
---

ModelCraft číta súbory `.3dm` vlastným čítačom priamo na stránke. Nič sa nenahráva a funguje offline vždy, keď funguje ModelCraft. Súbory uložené vo formátoch verzií 5, 6, 7 a 8 boli otestované; staršie (verzie 2 až 4) by sa mali otvoriť, ale ešte neboli vyskúšané.

## Import súboru

1. Kliknite na {{ui:Importovať}} v skupine {{ui:Súbor}} (alebo pretiahnite súbor `.3dm` na 3D view).
2. Vyberte súbor.

   Stavový riadok počas čítania hovorí "Čítam chair.3dm…" a potom, čo prišlo, napríklad "Importované chair.3dm: 14 sietí (8330 plôch), 8 kriviek, 5 umiestnení blokov, 3 vrstvy ako štítky. Plochy: 7 plôch zo sietí uložených v súbore, 29 rozdelených programom CadCraft."

Celý model príde ako jedna skupina pomenovaná podľa súboru, vybratá, a view sa na ňu priblíži. Jedno {{key:Mod+Z}} ho zase odstráni vrátane štítkov.

## Odkiaľ prichádzajú trojuholníky

ModelCraft pracuje s plochami a sieťami, takže každá plocha v súbore príde ako [sieť](topic:meshes) malých plochých trojuholníkov. Pre každú plochu polyplochy (a každé vytlačenie) ModelCraft vezme v tomto poradí:

1. **Vykresľovaciu sieť uloženú v súbore.** Väčšina modelovacích programov ukladá ku každej ploche sieť, ktorú zobrazili na obrazovke; ak je tam, ModelCraft ju použije bez zmien.
2. **Vlastné rozdelenie**, keď súbor nemá uloženú sieť: roviny, plochy NURBS, rotačné plochy (gule, kužele, torusy, tvary sústruhu), vytlačené krivky a vytlačenia (s ich otvormi a koncovými krytmi), orezané svojimi hranami. Plochy jednej polyplochy zdieľajú body svojich hrán, takže uzavretá polyplocha príde ako uzavretá sieť. Zakrivené oblasti sa delia, dokiaľ trojuholníky neležia v rámci približne 0.15 % veľkosti objektu od skutočnej plochy.
3. **Nič**, pre plochu typu, ktorý ModelCraft zatiaľ nečíta. Stavový riadok hovorí, koľko plôch a akého typu.

Časť "Plochy:" stavového riadku hovorí, koľko plôch prišlo z uložených sietí a koľko ich ModelCraft rozdelil. Hrany vnútri jednej plochy zo súboru sú mäkké a hrany medzi dvoma plochami ostré, takže zakrivená plocha sa tieni hladko.

:::tip
Pre čo najvernejšie tvary uložte súbor s jeho vykresľovacími sieťami v programe, ktorý ho vytvoril (zvyčajne je to predvolené; možnosť „uložiť malý súbor“ ich vynecháva).
:::

## Čo prichádza

- **Siete** s ich farbami vrcholov a súradnicami textúry.
- **Polyplochy, plochy a vytlačenia**, ako je popísané vyššie.
- **Krivky** (čiary, lomené čiary, oblúky, kružnice, krivky NURBS a krivky z nich spojené) ako [hrany](topic:curves), jedna skupina hrán na vrstvu.
- **Bloky** sa stanú [komponentmi](topic:groups-components): každé umiestnenie bloku je umiestnením jedného komponentu, takže úprava jednej kópie zmení všetky. Bloky vnútri blokov sa zachovajú.
- **Vrstvy** sa stanú [štítkami](topic:tags) s celým názvom vrstvy („Furniture::Chairs“), skrytými, keď bola vrstva vypnutá. Umiestnenie každého objektu nesie štítok svojej vrstvy.
- **Farby.** Farba objektu pochádza odtiaľ, kde ju súbor uvádza: jeho vlastná farba, farba jeho vrstvy alebo základná farba jeho materiálu. Stane sa farbou jeho plôch.
- **Skryté objekty prichádzajú skryté**; {{ui:Zobraziť všetko}} ich zobrazí.
- **Jednotky:** súbor uvádza svoju jednotku; model príde v svojej skutočnej veľkosti.

## Čo sa vynecháva (a je to uvedené)

Časť "Poznámky:" stavového riadku pomenúva všetko, čo neprišlo, s počtami:

- body a oblaky bodov, text, textové body, kóty, vynášacie čiary, šrafovanie, svetlá, orezávacie roviny a detaily rozloženia;
- objekty SubD: najprv ich v programe, ktorý súbor vytvoril, premeňte na siete alebo polyplochy;
- plochy na odsadených plochách a iné typy plôch, ktoré ModelCraft zatiaľ nečíta, ak pre ne súbor neuložil sieť;
- bloky prepojené z iných súborov (číta sa len súbor, ktorý importujete);
- vytlačenia so šikmo zrezanými koncami prichádzajú s rovnými koncami.

Textúry materiálov, nastavenia vykresľovania, pomenované pohľady, skupiny a používateľský text sa nečítajú; materiál dá len svoju základnú farbu.

## Limity

Súbory do 300 MB. Poškodený súbor oznámi, čo je zle, a nič nepridá; jeden objekt, ktorý sa nedá prečítať, sa vynechá a spočíta a zvyšok prpríde.
