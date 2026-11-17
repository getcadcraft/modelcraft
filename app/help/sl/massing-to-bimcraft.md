---
title: Pošiljanje mas v BimCraft
summary: Pošljite mase, narejene s potisni/povleci, v BimCraft kot možnosti mas, z etažami, zasedeno površino, bruto etažno površino in prostornino, izračunanimi iz vsakega telesa.
keywords: masa, mase, zasnova, možnosti, bimcraft, ifc, bim, potisni/povleci, etaže, nadstropja, bruto etažna površina, zasedena površina, prostornina, pošiljanje, predaja, masa stavbe, faza 2
from: 73c51f3f
---

## Kaj boste naredili

Bloke, ki ste jih modelirali s potisni/povleci, spremenite v možnosti mas, ki jih BimCraft razume, da zasnova nadaljuje kot model stavbe.

## Preden začnete

Vsaka masa mora biti **skupina** ali **komponenta** in imeti ime. Vsaka postane ena možnost. Prosta geometrija se ne pošlje.

## Pošljite

1. Izberite skupine za pošiljanje. Če nič ni izbrano, gredo vse skupine in komponente na najvišji ravni.
2. Izberite {{ui:Izvozi}}, nato {{ui:Mase v BimCraft…}}.
3. Vnesite {{ui:Ime nabora možnosti}} in {{ui:Višina etaže}}.
4. Preverite seznam: etaže, zasedeno površino, bruto etažno površino in prostornino vsake možnosti.
5. Izberite **Pošlji v BimCraft**, da odprete BimCraft v novem zavihku z možnostmi, ali {{ui:Shrani kot IFC}}, da prenesete datoteko in jo tam odprete sami.

V BimCraft so možnosti navedene pod „Možnosti mas v modelu“, kjer lahko eno nastavite kot trenutno možnost in jo razvijete v zidove in plošče.

## Kako telo postane masa

- **Etaže** so višina telesa, deljena z višino etaže, zaokrožena in vsaj ena. Etaže si nato enakomerno delijo višino telesa: blok, visok 10 m, pri etažah po 3 m ima 3 etaže po 3.33 m.
- **Površina etaže** je površina lastnega vodoravnega preseka telesa na višini te etaže. Blok, ki se zamakne, ima manjše zgornje etaže, bruto etažna površina pa je njihova vsota.
- **Zasedena površina** je obris preseka tik nad osnovo telesa.
- **Prostornina** je prostornina samega telesa.

V datoteki IFC je vsaka možnost gradbeni element proxy (zasedena površina, dvignjena na višino telesa) z enim prostorom na etažo, ki nosi bruto površino etaže. Vse možnosti delijo eno stavbo s toliko etažami, kolikor jih ima najvišja možnost.

## Poenostavljene oblike

Preprost pokončen blok gre čez natanko tako, kot ste ga modelirali. Vse drugo se vseeno pošlje, seznam pa pove, zakaj je oblika poenostavljena:

- **Njegove etaže niso vse tako velike kot osnova** (zamakne se ali nagiba): masa v BimCraft je obris osnove, dvignjen na polno višino, površine etaž in prostornina pa so lastne telesu.
- **Telo ni zaprto**: etaže, katerih presek ni mogoče zapreti, se ne izmerijo in štejejo za nič. Zaprite telo ({{ui:Podatki o entiteti}} pokaže „Telo: Da“) za polne podatke.
- **Njegova osnova ima več kot en obris**: za zasedeno površino se uporabi največji.

## Dobro je vedeti

- {{ui:IFC za BimCraft (.ifc)}} je drug izvoz: pošlje samo oblike in imena, brez etaž in površin.
- Nič se ne naloži. Datoteka se preda zavihku BimCraft na tem računalniku.
