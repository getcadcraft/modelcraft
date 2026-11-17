---
title: Nastavitve ModelCraft
summary: Izberite slog tipk, ki ga poznate, omogočite orbitiranje in pomikanje s sledilno ploščico brez gumbov kamere ter vklopite ali izklopite lovljenje in trke teles.
keywords: nastavitve, možnosti, upravljanje, slog tipk, preslikava tipk, bližnjice, blender, sledilna ploščica, dotikalna ploščica, drsenje, orbitiranje, stisk, lovljenje, lovi, trk, trkanje, prekrivanje, presek, prehod skozi
from: caf77d5b
---

Odprite {{ui:Nastavitve}} z zobnikom v vrstici aplikacije ali s {{key:Mod+,}}. Prvi zavihek, {{ui:ModelCraft}}, vsebuje nastavitve, ki pripadajo tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki so skupne vsem aplikacijam CadCraft (tema, orodna vrstica, podokna). Nastavitve ModelCraft veljajo samo v aplikaciji: spremenite jih tukaj, ta brskalnik pa si jih zapomni.

## Upravljanje: katere tipke in gumbi miške

Dva sloga tipk. Preklopite ju tukaj, s {{ui:Tipke: potisni/povleci}} / {{ui:Tipke: modelar}} v spodnjem desnem kotu pogleda ali na koncu menija {{ui:Več}} v orodni vrstici:

- **Slog potisni/povleci** (začetni): črka izbere orodje: {{key:L}} črta, {{key:R}} pravokotnik, {{key:P}} potisni/povleci, {{key:M}} premakni, {{key:Q}} zasukaj, {{key:S}} merilo, {{key:G}} ustvari komponento. Glejte [Tipke in dejanja miške](topic:keyboard).
- **Slog modelar** (tipke mrežnih modelarjev, kot je Blender): najprej izberite, nato takoj delujte nad izborom. {{key:G}} ga premakne, {{key:R}} zasuka in {{key:S}} spremeni merilo od položaja kazalca, brez prvega klika. Med premikanjem {{key:X}}, {{key:Y}} ali {{key:Z}} zaklene rdečo, zeleno ali modro os, vtipkano število določi razdaljo (oziroma stopinje ali faktor), klik ali {{key:Enter}} ga postavi; {{key:Esc}} ali desni klik ga vrneta na prvotno mesto. Nato ste spet v {{ui:Izberi}}.

Slog tipk je enaka izbira kot slog menija: slog modelar je slog menija {{ui:Modeler}}, izbira enega izbere tudi drugega. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse). Celoten seznam za modelar je v [Tipke in dejanja miške](topic:keyboard#modeler-keys). Opisi orodij v orodni vrstici in na začetni kartici sledijo izbranemu slogu.

## Drsenje: kolesce miške ali sledilna ploščica

- **Ugotovi sam** (začetni): ModelCraft spremlja drsenje. Stransko ali drobno drsenje, kakršnega pošilja sledilna ploščica, orbitira; cele zareze kolesca povečajo.
- **Kolesce miške**: drsenje vedno povečuje proti kazalcu.
- **Sledilna ploščica**: podrsajte z dvema prstoma za orbitiranje, držite {{key:Shift}} in podrsajte za pomik, stisnite za povečavo. Gumbov {{ui:Orbitiraj}}, {{ui:Pomik (H)}} in {{ui:Povečava (Z)}} nikoli ne potrebujete.

Stisk povečuje v vseh izbirah. Če „Ugotovi sam“ napačno ugane za vašo miško ali sledilno ploščico, izberite tisto, ki jo imate.

:::tip
V slogu modelar lahko orbitirate tudi tako, da držite {{key:Alt}} in povlečete, pomikate pa s {{key:Alt+Shift}} in povlekom, kar je prikladno na prenosniku brez srednjega gumba.
:::

## Lovljenje

**Lovi točke, robove in osi** (vklopljeno na začetku) potegne kazalec do krajišč, razpolovišč, robov, vodil ter rdeče, zelene in modre osi; glejte [Sklepanje](topic:inference). Izklopite ga, kadar želite nekaj postaviti prosto blizu druge geometrije, da ne preskoči. Ploskve, tla in zaklepanje osi delujejo tudi z izklopljenim lovljenjem.

Gumb {{ui:Lovljenje}} v spodnjem desnem kotu pogleda naredi enako za delo v tej seji (shrani se tudi). V slogu modelar {{key:Shift+Tab}} preklopi lovljenje.

## Telo se ustavi ob dotiku

**Ustavi telesa, kjer se dotikajo** (vklopljeno na začetku) prepreči, da bi se stena premaknila skozi drugo steno. Pri {{ui:Premakni (M)}} (in {{key:G}}, ter podvojitvi in premiku s {{key:Mod+D}}) izbor drsi do drugega telesa in se ustavi, ko se ga dotakne; pri {{ui:Potisni/povleci}} se ploskev ustavi, ko naleti na drugo telo. Počivanje na nečem in drsenje ob tem sta v redu, ustavljen je samo prehod v notranjost. Stvari, ki se že prekrivajo ob začetku, je še vedno mogoče razmakniti.

Če želite nekaj namerno potisniti skozi, kliknite {{ui:Trk}} v spodnjem desnem kotu (ali izklopite nastavitev), naredite premik in ga znova kliknite.

:::note
Trki se preverjajo pri premikih in potisku/povleku. {{ui:Zasukaj (Q)}} in {{ui:Merilo (S)}} jih še ne preverjata, geometrija, ki se dotika, pa se vedno združi, kot je vedno bilo. Ločene stvari ohranite v [skupinah](topic:groups-components), da ostanejo ločene.
:::

## Podlaga 3D tiskalnika

Velikost podlage vašega tiskalnika: {{ui:Ni nastavljeno}} (na začetku), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ali 300 × 300 × 400 mm. Izberite velikost, ki je najbližja gradbenemu prostoru vašega tiskalnika. [Preverjanje za 3D tiskanje](topic:print-3d) nato pove, kdaj je model večji od podlage; pri {{ui:Ni nastavljeno}} se velikost ne preverja.

## Orbitiranje in pomik

**Orbitiraj okoli tega, kar je pod kurzorjem** (vklopljeno na začetku): orbitiranje se vrti okoli dela modela pod kazalcem, pomik pa ohrani to točko pod kazalcem; nad praznim prostorom oboje uporablja središče pogleda. Izklopite, če želite vedno orbitirati okoli središča pogleda. **Hitrost orbitiranja** in **Hitrost pomika** segata od 0.25× do 3× (1× je začetna vrednost) in veljata za miško, sledilno ploščico, dotik in puščične tipke. Glejte [Orbitiranje, pomik in povečava](topic:orbit-pan-zoom).

## Indikator v kotu

Kaj se prikaže v kotu 3D pogleda: **Kocka pogleda** (na začetku; zgoraj desno: kliknite ploskev, rob ali oglišče, da pogledate z nje, povlecite za orbitiranje, povlecite obroč busole, da zavrtite model), **Ikona osi** (majhna oznaka X, Y, Z spodaj levo, ki se vrti z pogledom: X rdeča, Y zelena, Z modra) ali **Brez**. Glejte [Kocka pogleda](topic:view-cube).
