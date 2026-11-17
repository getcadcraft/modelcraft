---
title: Odoslanie hmôt do BimCraft
summary: Odošlite hmoty z tlač/ťah do BimCraft ako hmotové varianty, s podlažiami, pôdorysom, hrubou podlahovou plochou a objemom vypočítanými z každého telesa.
keywords: hmota, hmoty, koncept, varianty, bimcraft, ifc, bim, tlač/ťah, podlažia, poschodia, hrubá podlahová plocha, pôdorys, objem, odoslanie, odovzdanie, hmota budovy, fáza 2
from: 73c51f3f
---

## Čo budete robiť

Premeňte bloky, ktoré ste modelovali pomocou tlač/ťah, na hmotové varianty, ktorým BimCraft rozumie, aby koncept pokračoval ako model budovy.

## Pred začiatkom

Každú hmotu urobte ako **skupinu** alebo **komponent** a pomenujte ju. Každá sa stane jednou variantou. Voľná geometria sa neposiela.

## Odoslanie

1. Vyberte skupiny na odoslanie. Ak nič nie je vybrané, pôjde každá skupina a komponent najvyššej úrovne.
2. Zvoľte {{ui:Exportovať}}, potom {{ui:Hmoty do BimCraft…}}.
3. Zadajte {{ui:Názov sady možností}} a {{ui:Výška podlažia}}.
4. Skontrolujte zoznam: podlažia, pôdorys, hrubú podlahovú plochu a objem každej varianty.
5. Zvoľte **Odoslať do BimCraft**, aby sa BimCraft otvoril v novej karte s variantami, alebo {{ui:Uložiť ako IFC}}, aby sa súbor stiahol a otvorili ho tam sami.

V BimCraft sú varianty uvedené pod "Hmotové varianty v modeli", kde jednu možno nastaviť ako aktuálnu variantu a rozvinúť ju na steny a podlahy.

## Ako sa teleso stane hmotou

- **Podlažia** sú výška telesa delená výškou podlažia, zaokrúhlená a najmenej jedno. Podlažia potom rovnomerne zdieľajú výšku telesa, takže blok 10 m pri podlažiach po 3 m má 3 podlažia po 3.33 m.
- **Plocha podlažia** je plocha vlastného vodorovného rezu telesa na úrovni toho podlažia. Blok, ktorý sa ustupuje, má menšie horné podlažia, a hrubá podlahová plocha je ich súčet.
- **Pôdorys** je obrys rezu tesne nad základňou telesa.
- **Objem** je vlastný objem telesa.

V súbore IFC je každá varianta proxy prvok budovy (pôdorys vyzdvihnutý do výšky telesa) s jedným priestorom na podlažie, ktorý nesie hrubú plochu podlažia. Všetky varianty zdieľajú jednu budovu s toľkými podlažiami, koľko má najvyššia varianta.

## Zjednodušené tvary

Obyčajný zvislý blok ide presne tak, ako bol modelovaný. Všetko ostatné sa stále odošle a zoznam uvedie, prečo sa tvar zjednodušuje:

- **Nie všetky jeho podlažia majú veľkosť základne** (ustupuje alebo sa sklápa): hmota v BimCraft je obrys základne vyzdvihnutý do plnej výšky, ale plochy podlaží a objem sú vlastné telesu.
- **Teleso nie je uzavreté**: podlažia, ktorých rez sa nedá uzavrieť, sa nemerajú a počítajú sa ako nula. Uzavrite teleso ({{ui:Informácie o entite}} hovorí "Solid: Yes") pre úplné údaje.
- **Jeho základňa má viac než jeden obrys**: ako pôdorys sa použije najväčší.

## Dobre vedieť

- {{ui:IFC pre BimCraft (.ifc)}} je iný export: posiela len tvary a názvy, bez podlaží a plôch.
- Nič sa nenahráva. Súbor sa odovzdá karte BimCraft na tomto počítači.
