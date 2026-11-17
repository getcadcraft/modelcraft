---
title: Potisnite in povlecite ploskve v telesa
summary: Spremenite ploskev v kvader, naredite stavbo višjo ali nižjo, dodajte izboklino ali udrtino ter ponovite razdaljo z dvojnim klikom.
keywords: potisni povleci, iztisni, višina, telo, kvader, masa, višje, udrtina, izboklina, ponovi, dvojni klik, prostornina, nivo, na ploskvi, poravnano, enaka višina
from: dc093c91
---

{{ui:Potisni/povleci}} ({{key:P}}) premakne ploskev vzdolž njene lastne smeri: gor in dol za tla, noter in ven za steno. Kaj se zgodi, je odvisno od ploskve.

## Naredite telo iz ploskve

1. Narišite ploskev, na primer pravokotnik na tleh ([Risanje ploskev](topic:draw-faces)).
2. Pritisnite {{key:P}}.
3. Premaknite kazalec nad ploskev. Osvetli se.
4. Kliknite ploskev, nato premaknite kazalec. Ploskev se dvigne (ali spusti) in stranice zrastejo z njenih robov. Polje za vrednost ({{ui:Razdalja}}) in namig prikazujeta razdaljo.
5. Kliknite za zaključek ali vnesite razdaljo in pritisnite {{key:Enter}}: `3m`, `10'`, `2700` v modelu v milimetrih.

   Zdaj imate zaprto telo. Izberite ga vse in ga združite v skupino (glejte [Skupine in komponente](topic:groups-components)): {{ui:Podatki o entiteti}} nato pokaže "Telo: Da" in njegovo prostornino.

Osamljena ploskev lahko gre na obe strani: povlecite jo navzgor za maso nad tlemi, potisnite navzdol za jamo ali temelj.

:::tip
Namesto dvakratnega klika pritisnite na ploskev, povlecite in spustite. Na zaslonu na dotik je to naravni način: pritisnite, povlecite, dvignite.
:::

## Povlecite do višine nečesa drugega

Med vlečenjem prelebdite vogal, sredino, rob ali vodilo drugega dela modela. Ploskev se prilepi na to višino in oznaka prikaže točko. Uporabite, da naredite dva bloka enake višine ali se ustavite pri vodilni črti, ki ste jo postavili z [merilnim trakom](topic:guides-measure).

Lahko tudi prelebdite ploskev, ki je vzporedna tisti, ki jo potiskate, na primer vrh drugega bloka ali vrh kvadra, na katerem stoji steber. Namig pravi "Na ploskvi", ploskev, ki jo potiskate, pa konča poravnana z njo. Na primer potisnite notranjo ploskev cevi navzdol, dokler ni poravnana s kvadrom pod cevjo.

Ploskev pod kotom glede na tisto, ki jo potiskate, ne določa nivoja. Razdalja sledi kazalcu. Enako velja za ploskev za ploskvijo, ki jo potiskate.

Ko potisnjena ploskev spet konča poravnana z okoliškimi ploskvami, njene stranice izginejo. Ne ostanejo nobene stranice z ničelno višino, obris, ki ste ga narisali, pa ostane na ploskvi, zato jo lahko kasneje spet potisnete. Da postane spet ena ploskev, izbrišite robove obrisa z {{ui:Radirka (E)}}: dve ploskvi se združita.

## Naredite kvader višji ali nižji

Potisnite/povlecite vrh kvadra. Ker stranice že tečejo naravnost navzgor od njega, se vrh preprosto premakne: kvader postane višji ali nižji in nastanejo nove robove.

- Če vrh potisnete do konca navzdol do dna, kvader izgine. ModelCraft se ustavi pri ničelni višini; nikoli ne obrne kvadra na glavo.
- Enako velja za vsako ploskev, katere sosedi tečejo vzdolž njene smeri, na primer konec stene.

## Dodajte izboklino ali udrtino

1. Narišite pravokotnik na stranico kvadra (začnite ga na ploskvi; ostane v ravnini ploskve).
2. Pritisnite {{key:P}} in povlecite nov pravokotnik **ven**. To doda material: izboklino, dimnik, nadstrešek.
3. Ali pa ga potisnite **noter**. To izreže udrtino: verando, nišo, vhod, umaknjen v notranjost.

Ko se stranice novega dela poravnajo z ploskvami, ki so že tam, se združijo v eno ploskev, zato na ravni steni ne dobite blodečih črt.

## Potisnite do konca

Potiskanje ploskve v telo se ustavi na prvi ploskvi za njo. Ko doseže to ploskev, izreže odprtino skozi. Tako naredite okna in vrata v steni z debelino. Glejte [Izrežite odprtino skozi steno](topic:openings).

## Vnesite razdaljo

Po kliku na ploskev vnesite razdaljo in pritisnite {{key:Enter}}.

- Vnesena razdalja gre v smeri, v kateri ste se premikali. Če se še niste premaknili, gre proti sprednji strani ploskve (iz telesa ven, od tal navzgor).
- Vnesite negativno število, na primer `-500`, da gre v nasprotno smer.
- Če se premislite, preden kliknete, pritisnite {{key:Esc}}. Ploskev se vrne.

## Ponovite zadnjo razdaljo

Po enem potiskanju/povlečenju dvakrat kliknite drugo ploskev, medtem ko je {{ui:Potisni/povleci}} še izbran. Premakne se za isto razdaljo. To je hiter način, da več sten ali več tal dobi enako debelino ali višino.

ModelCraft si zapomni razdaljo, dokler ne preklopite na drugo orodje.

## Stvari, ki jih morate vedeti

- Potisni/povleci deluje na eno ploskev naenkrat. Če kliknete nekaj, kar ni ploskev, vrstica stanja pokaže "Potisni/povleci deluje na ploskvi. Kliknite ploskev."
- Za potiskanje/povlečenje ploskve znotraj skupine ali komponente jo najprej odprite (dvakrat kliknite nanjo).
- Ko je vklopljena možnost **Trči**, se potiskanje ali vlečenje, ki zadene ob drugo telo, ustavi, kjer se dotakne, namig pa pove, česa se dotika (ime predmeta ali "neurejena geometrija v tej skupini"), in označi ploskve, s katerimi je stik. Žep, v katerega potisnete znotraj njegovega lastnega telesa (na primer odmaknjena ploskev, potisnjena nazaj navzdol), je del tega telesa in ga njegove stene nikoli ne ustavijo.
- Dve telesi, potisnjeni drugo v drugo, se ne režeta in ne združita: njune ploskve preprosto gredo druga skozi drugo. Glejte [Še ni izdelano](topic:not-built-yet).
