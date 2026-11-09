---
title: Začetek dela z ModelCraft
summary: Čemu je ModelCraft namenjen, kako ga odprete ter kako iz pravokotnika narišete prvi kvader in shranite model.
keywords: začetek, prvi model, začetek dela, vadnica, uvod, kvader, skica mase, 3D, potisni povleci, hitri začetek, vodeni, vodnik, začetnik, nov v 3D
from: d47ad719
---

ModelCraft je 3D-modelirnik za zgodnjo fazo načrtovanja: študije mas, razporeditve prostorov, hitre oblike stavb in sence, ki jih mečejo. Ravne oblike narišete, jih potisnete v telesa in nadaljujete z risanjem na njihovih ploskvah. Deluje v spletnem brskalniku, vaši modeli pa ostanejo na vašem računalniku.

Če ste uporabljali SketchUp, bo večina znanja uporabna tudi tukaj: enake črke orodij, potisni/povleci, vrednostno polje za natančne mere, skupine in komponente. [Prehod z drugih modelirnikov](topic:coming-from) navaja, kaj je drugače.

## Odprite ModelCraft

1. Odprite ModelCraft v trenutni različici brskalnika Chrome, Edge, Firefox ali Safari. Glejte [Brskalniki in računalniki](common:browsers).
2. Počakajte, da se prikaže 3D-pogled: svetlo (ali temno) območje na sredini s kartico z naslovom „Začnite modelirati“.

Zaslon ima orodno vrstico na vrhu, na levi {{ui:Struktura}} in {{ui:Komponente}}, 3D-pogled na sredini, na desni {{ui:Podatki o entiteti}}, {{ui:Slog}} in {{ui:Prizori}}, na dnu pa vrstico stanja z vrednostnim poljem in enotami. [Zaslon ModelCraft](topic:workspace) opisuje vsak del.

:::note
ModelCraft potrebuje WebGL, 3D-risalno funkcijo brskalnika. Če ostane sredina zaslona prazna in orodja ne delujejo, glejte [Odpravljanje težav](topic:troubleshooting#the-3d-view-is-blank).
:::

## Najprej preverite enote

Poglejte spodnji desni kot. Izbirnik enot kaže, v katerih enotah se merijo dolžine.

- Nov model se začne v **čevljih in palcih**, če je brskalnik nastavljen na Združene države (tudi Liberija in Mjanmar), drugje pa v **milimetrih**.
- Za spremembo izberite drugo enoto v izbirniku: {{ui:ft in in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ali {{ui:mm}}. Model se ne spremeni po velikosti; spremeni se le prikaz dolžin in branje golih števil.

Število, ki ga vpišete brez enote, uporablja enoto modela. V modelu v čevljih in palcih golo število pomeni **palce**, zato `120` pomeni 10 čevljev.

## Naj vas ModelCraft vodi pri prvem modelu

Prvič pri 3D? Na kartici {{ui:Začnite modelirati}} kliknite {{ui:Vodeni prvi model}} (je tudi v {{ui:Pogledi}}). Majhna kartica vas vodi skozi štiri korake, od ravnega pravokotnika do modela, pripravljenega za 3D-tiskalnik:

1. Narišite pravokotnik na tla.
2. Potisnite ga navzgor v kvader.
3. Kvader spremenite v en predmet (skupino).
4. Preverite za 3D-tiskanje, nato prenesite datoteko 3MF ali STL.

Kartica spremlja model, ne gumbov: premakne se naprej, ko je korak opravljen, ne glede na to, kako ste ga opravili, in se vrne korak nazaj, ko razveljavite. {{ui:Izberite orodje}} izbere orodje namesto vas. Zaprete jo kadarkoli z {{ui:×}}.

## Narišite prvi kvader

1. Pritisnite {{key:R}} za orodje {{ui:Pravokotnik (R)}} ali kliknite {{ui:Pravokotnik (R)}} v skupini {{ui:Risanje}} orodne vrstice.
2. Kliknite enkrat na tla blizu sredine pogleda. To je prvi kot.
3. Premaknite kazalec stran. Pravokotnik mu sledi, vrednostno polje na dnu (označeno z {{ui:Kote}}) pa prikazuje njegovo velikost.
4. Vpišite velikost in pritisnite {{key:Enter}}: na primer `4m,3m` ali `16',12'` v čevljih in palcih. Vrednostnega polja vam ni treba kliknuti prej; ko vpišete število, se vpiše tja.

   Dobite ravni pravokotnik na tleh. To je **ploskev**: površina z robovi okoli nje.

5. Pritisnite {{key:P}} za {{ui:Potisni/povleci}}.
6. Kliknite pravokotnik, premaknite kazalec navzgor in spet kliknite. Ali kliknite pravokotnik in vpišite višino, na primer `3m` ali `10'`, nato pritisnite {{key:Enter}}.

   Pravokotnik se spremeni v kvader z zgornjo ploskvijo, spodnjo ploskvijo in štirimi stranicami.

7. Pritisnite {{key:Space}}, da se vrnete na {{ui:Izberi}}, nato kliknite zgornjo ploskev kvadra. {{ui:Podatki o entiteti}} na desni prikažejo njeno površino.

:::tip
Namesto dvakratnega klika lahko tudi povlečete: pritisnite na prvi kot, povlecite in spustite na drugem. Oba načina delujeta pri vseh orodjih za risanje.
:::

## Oglejte si okolico

- **Orbitiraj:** povlecite s srednjim gumbom (kolesce) ali pritisnite {{key:O}} in povlecite z levim gumbom.
- **Pomik:** povlecite z desnim gumbom ali s srednjim gumbom med držanjem {{key:Shift}}.
- **Povečava:** zavrtite kolesce. Povečava gre proti temu, kar je pod kazalcem.
- **Prikaži vse:** pritisnite {{key:Shift+Z}} ali kliknite {{ui:Obseg}}.

Na sledilni ploščici ali zaslonu na dotik so kretnje drugačne. Glejte [Orbitiranje, pomik in povečava](topic:orbit-pan-zoom).

## Razveljavitev

Pritisnite {{key:Mod+Z}} za razveljavitev in {{key:Mod+Y}} za uveljavitev ali uporabite {{ui:Razveljavi}} in {{ui:Uveljavi}} na orodni vrstici. ModelCraft si zapomni zadnjih 200 korakov, dokler je model odprt. Zgodovina se ne shrani v datoteko.

## Shranite model

1. Kliknite {{ui:Shrani}} v skupini {{ui:Datoteka}} ali pritisnite {{key:Mod+S}}.
2. Brskalnik prenese datoteko, poimenovano po vašem modelu, na primer `Untitled.modelcraft`. Vrstica stanja pove, kam je šla: „Shranjeno: Untitled.modelcraft v mapo s prenosi.“

**Shranjevanje je prenos.** Vsako shranjevanje ustvari novo kopijo v mapi s prenosi; odprte datoteke ne prepiše. Če želite urejeno mapo projekta, datoteko tam premaknite ali preimenujte sami. [Odpiranje, shranjevanje, uvoz in izvoz](topic:files) pojasnjuje, zakaj in kaj še lahko naredite.

:::warning
ModelCraft ne shranjuje sam. Če zaprete zavihek z neshranjenimi spremembami, vas brskalnik najprej vpraša „Zapustiti spletno mesto?“. Ostanite na strani in nato shranite.
:::

## Pomoč

Pritisnite {{key:F1}} ali kliknite {{ui:Pomoč}} v vrstici aplikacije, da se ta pomoč odpre ob modelu. Deluje tudi brez povezave. Ponovno pritisnite {{key:F1}} ali pritisnite {{key:Esc}} v pomoči, da jo zaprete. Glejte [Uporaba te pomoči](common:help).

## Kam naprej

- [Risanje ploskev s črtami, pravokotniki in krožnicami](topic:draw-faces)
- [Potiskanje in vlečenje ploskev v telesa](topic:push-pull)
- [Vnos natančnih mer v vrednostno polje](topic:value-box)
- [Vsa dejanja s tipkami in miško](topic:keyboard)
