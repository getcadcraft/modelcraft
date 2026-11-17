---
title: Uvoz modela SKP
summary: Uvozite datoteko .skp z njenimi skupinami, komponentami, barvami, teksturami, oznakami in mehkimi robovi, si oglejte, kaj je prišlo noter in kaj ne, ter nadaljujte z modeliranjem.
keywords: skp, uvoz, odpri skp, komponente, skupine, oznake, sloji, materiali, barve, teksture, skrito, mehki robovi, 3d warehouse, selitev, preklop
from: 325d3c81
---

ModelCraft bere datoteke SketchUp (`.skp`) s svojim bralnikom, na strani. Nič ne pošlje v splet, deluje brez povezave, kadarkoli deluje ModelCraft. Datoteke od SketchUp 3 do 2026 so bile preizkušene.

## Uvoz datoteke

1. Kliknite {{ui:Import}} v skupini {{ui:File}} (ali spustite datoteko `.skp` na 3D pogled).
2. Izberite datoteko.

   Vrstica stanja pokaže „Berem house.skp…“, medtem ko bere, nato pa, kaj je prišlo noter, na primer „Uvožena house.skp (SketchUp 25.0.575): 1240 ploskev, 6 komponent, v skupini.“

Celoten model pride kot ena skupina, poimenovana po datoteki, izbrana, pogled pa se približa nanjo. Ena {{key:Mod+Z}} vse spet odstrani, skupaj z oznakami.

:::tip
Razstavite skupino uvoza ({{ui:Entity info}} › {{ui:Explode}}), kadar želite njeno vsebino razprto v modelu namesto v eni skupini.
:::

## Kaj pride noter

- **Ploskve** z luknjami in **robovi**, ki niso del ploskve.
- **Skupine** pridejo kot skupine, **komponente** kot komponente: vsaka kopija komponente je postavitev ene definicije, zato urejanje ene kopije spremeni vse, kot v SketchUp. Imena pridejo z njimi.
- **Barve.** Lastni material ploskve ji da barvo. Material, nanesen na skupino ali komponento, postane barva te postavitve, zato ploskve znotraj, ki nimajo svoje barve, to prevzamejo, kot v SketchUp. Komponenta, obarvana rdeče na enem mestu in modro na drugem, ostane ena komponenta.
- **Teksture.** Ploskev, pobarvana s teksturiranim materialom, pride s svojo teksturo, položeno na ploskev kot v datoteki, in jo pokaže slog {{ui:Shaded}}. Slika se shrani v datoteko ModelCraft ob shranjevanju, prikaže pa jo tudi [upodobljena slika](topic:render). Teksturiran material, nanesen na celotno skupino ali komponento, da tisti kopiji samo barvo materiala.
- **Oznake.** Skupina ali komponenta na oznaki SketchUp dobi oznako ModelCraft z enakim imenom, navedeno v {{ui:Tags}}, prikazano ali skrito, kot je bila v SketchUp. Če vaš model že ima oznako s tem imenom, se uporabi ta oznaka.
- **Skrite stvari pridejo skrite:** ploskve, robovi, skupine in komponente ter ploskve in robovi na skriti oznaki. Vidite, kar je SketchUp pokazal, in nič se ne izgubi: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} jih pokaže. Glejte [Skrivanje, izolacija in prikaz](topic:hide-isolate).
- **Mehki in gladki robovi** ostanejo mehki, zato so ukrivljene površine še vedno gladke.
- **Velikosti** so pravilne v vsaki enoti: datoteke SketchUp so v notranjosti v palcih, ModelCraft pa jih pretvori.

## Kaj ne pride noter

Vrstica stanja pove, kaj je bilo izpuščeno, s števci.

- **Nekatere teksture** ohranijo samo barvo svojega materiala: tekstura, ki manjka v datoteki, slika v obliki, ki je brskalniki ne prikažejo (na primer datoteka Photoshop), ali tekstura brez velikosti. Ploskve s projicirano teksturo pridejo z nameščeno teksturo približno.
- **Oznake na prostih ploskvah in robovih.** ModelCraft označuje samo skupine in komponente, zato ploskev ali rob s svojo oznako pride brez oznake, vrstica stanja pa jih prešteje. Takšne ploskve spremenite v skupino ({{key:Shift+G}}) in označite skupino.
- **Slike**, postavljene v model, besedilo, kote, vodila, rezalne ravnine, scene in sloge.

## Težave

- „To ni datoteka SketchUp.“ ali „Ta datoteka SketchUp je poškodovana: …“: datoteka je odrezana ali pa gre za nekaj drugega z imenom `.skp`. Shranite jo znova v SketchUp ali zahtevajte novo kopijo.
- Datoteka iz različice SketchUp, novejše od tiste, ki jo pozna ModelCraft, je zavrnjena, prikazana pa je najdena različica.
- Model, ki je samo iz slik, besedila ali kot, pove, da nima ničesar za prikaz.

## Vrnitev modela

ModelCraft ne more shranjevati datotek `.skp`. Izvozite Collada ({{ui:Export}} › `.dae`) in jo uvozite v SketchUp: skupine, komponente in barve gredo čez; teksture gredo kot barva njihovega materiala. Glejte [Izvoz modela](topic:export-model).
