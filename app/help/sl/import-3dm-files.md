---
title: Uvoz modela .3dm
summary: Uvozite datoteko .3dm z mrežami, ploskvami, krivuljami, bloki, sloji in barvami; od kod prihajajo trikotniki in kaj je izpuščeno.
keywords: 3dm, uvoz, nurbs, polipovršina, brep, ploskve, mreža za upodabljanje, izvlečenje, krivulje, bloki, sloji, oznake, barve, enote, preklop, selitev
from: 3cf29879
---

ModelCraft bere datoteke `.3dm` s svojim bralnikom, na strani. Nič ne pošlje v splet, deluje brez povezave, kadarkoli deluje ModelCraft. Datoteke, shranjene v zapisih različic 5, 6, 7 in 8, so bile preizkušene; starejše (različice 2 do 4) naj bi se odprle, vendar še niso bile preizkušene.

## Uvoz datoteke

1. Kliknite {{ui:Import}} v skupini {{ui:File}} (ali spustite datoteko `.3dm` na 3D pogled).
2. Izberite datoteko.

   Vrstica stanja pokaže „Berem chair.3dm…“, medtem ko bere, nato pa, kaj je prišlo noter, na primer „Uvoženo chair.3dm: 14 mrež (8330 ploskev), 8 krivulj, 5 postavitev blokov, 3 sloji kot oznake. Ploskve: 7 ploskev iz mrež, shranjenih v datoteki, 29 razdeljenih na trikotnike s strani CadCraft.“

Celoten model pride kot ena skupina, poimenovana po datoteki, izbrana, pogled pa se približa nanjo. Ena {{key:Mod+Z}} vse spet odstrani, skupaj z oznakami.

## Od kod prihajajo trikotniki

ModelCraft modelira s ploskvami in mrežami, zato vsaka površina v datoteki pride kot [mreža](topic:meshes) iz majhnih ravnih trikotnikov. Za vsako ploskev polipovršine (in vsak izvleček) ModelCraft vzame, v tem vrstnem redu:

1. **Mrežo za upodabljanje, shranjeno v datoteki.** Večina modelirnih programov shrani mrežo, ki so jo prikazali na zaslonu, skupaj z vsako površino; če je tam, ModelCraft uporabi njo, takšno, kot je.
2. **Lastno razdelitev na trikotnike**, kadar datoteka nima shranjene mreže: ravnine, ploskve NURBS, rotacijske ploskve (krogle, stožci, tori, oblike struženja), izvlečene krivulje in izvlečke (z njihovimi luknjami in pokrovi), obrezane z robovi. Ploskve ene polipovršine delijo točke svojih robov, zato zaprta polipovršina pride kot zaprta mreža. Ukrivljena območja se delijo, dokler trikotniki ne ležijo znotraj približno 0.15 % velikosti predmeta od prave ploskve.
3. **Nič**, za ploskev vrste površine, ki je ModelCraft še ne bere. Vrstica stanja pove, koliko je takih ploskev in kakšne vrste so.

Del „Ploskve:“ v vrstici stanja pove, koliko ploskev je prišlo iz shranjenih mrež in koliko jih je ModelCraft razdelil. Robovi znotraj ene ploskve datoteke so mehki, robovi med dvema ploskvama ostri, zato se ukrivljena ploskev senči gladko.

:::tip
Za najbolj zveste oblike shranite datoteko z njenimi mrežami za upodabljanje v programu, ki jo je ustvaril (to je običajno privzeto; možnost „shrani majhno“ jih izpusti).
:::

## Kaj pride noter

- **Mreže** z barvami oglišč in koordinatami teksture.
- **Polipovršine, površine in izvlečki**, kot je opisano zgoraj.
- **Krivulje** (črte, polilinije, loki, krožnice, krivulje NURBS in krivulje, sestavljene iz njih) kot [robovi](topic:curves), ena skupina robov na sloj.
- **Bloki** postanejo [komponente](topic:groups-components): vsaka postavitev bloka je postavitev ene komponente, zato urejanje ene kopije spremeni vse. Bloki znotraj blokov ostanejo.
- **Sloji** postanejo [oznake](topic:tags) s polnim imenom sloja („Pohištvo::Stoli“), skrite, če je bil sloj izklopljen. Vsaka postavitev predmeta nosi oznako svojega sloja.
- **Barve.** Barva predmeta pride od tam, kamor jo določa datoteka: njegova lastna barva, barva njegovega sloja ali osnovna barva materiala. Postane barva njegovih ploskev.
- **Skriti predmeti pridejo skriti**; {{ui:Unhide all}} jih pokaže.
- **Enote:** datoteka pove svojo enoto; model pride v svoji pravi velikosti.

## Kaj je izpuščeno (in povedano)

Del „Opombe:“ v vrstici stanja našteje vse, kar ni prišlo noter, s številom:

- točke in oblaki točk, besedilo, besedilne pike, kote, vodilke, šrafure, luči, rezalne ravnine in podrobnosti postavitve;
- objekte SubD: najprej jih pretvorite v mreže ali polipovršine v programu, ki je ustvaril datoteko;
- ploskve na zamaknjenih površinah in druge vrste površin, ki jih ModelCraft še ne bere, kadar datoteka zanje ni shranila mreže;
- bloki, povezani iz drugih datotek (bere se samo uvožena datoteka);
- izvlečki s poševnimi (zarezanimi) konci pridejo s ploskimi konci.

Teksture materialov, nastavitve upodabljanja, poimenovani pogledi, skupine in uporabniško besedilo se ne berejo; material da samo osnovno barvo.

## Meje

Datoteke do 300 MB. Poškodovana datoteka pove, kaj je narobe, in ne doda ničesar; en predmet, ki ga ni mogoče prebrati, se izpusti in šteje, ostali pa pridejo noter.
