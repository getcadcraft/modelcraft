---
title: Podpore, debelina sten, izdolbljenje in popravilo
summary: Poglejte, kje tisk potrebuje podpore in približno koliko, poiščite pretanke stene, izdolbite del do debeline stene z odtočnimi luknjami in popravite mrežo, pri čemer je navedeno vsako popravilo.
keywords: 3D-tiskanje, podpore, predogled podpor, previs, stebri, drevesne podpore, debelina sten, tanke stene, prevelika tankost, šoba, izdolbi, izdolbljenje, lupina, odtočna luknja, smola, popravilo, popravi mrežo, non-manifold, obrnjene ploskve, luknje, majhne lupine, samopresek, prekrivanje, združi
from: 286bde26
---

Štiri orodja za pripravo modela za 3D-tiskalnik. Odprite {{ui:Izvozi}} › {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}}; vrstica **Orodja za tiskanje** v pogovornem oknu ima {{ui:Predogled podpor}}, {{ui:Debelina sten}}, {{ui:Izdolbi}} in {{ui:Popravilo}}. Vsako se odpre kot kartica nad pogledom; {{ui:Zapri}} (križec) jo zapre skupaj z njenimi oznakami. Hkrati je prikazana ena kartica.

Vsako orodje deluje na tistem, kar se bo natisnilo: na izboru ali na vsem prikazanem, če nič ni izbrano. {{ui:Izdolbi}} in {{ui:Popravilo}} potrebujeta eno skupino, komponento ali mrežo v izboru, ker ju spremenita.

## Predogled podpor

Ploskve, ki se odmikajo bolj od **kota previsa** od navpičnega, so obarvane rdeče, iz njih pa so narisane preproste podpore (oranžne) navzdol do podlage ali do dela modela pod njimi.

- **Kot previsa**: 45° je tisto, kar večina tiskalnikov zmore brez podpore. Povišajte ga za tiskalnik, ki dobro premošča.
- **Stebri**: raven steber na vsakih 3 mm pod vsakim previsom. Ocena jih šteje kot vzorec podpore 15 %.
- **Drevo**: bližnje točke se združijo v eno deblo pod njihovo sredino; nobena veja se ne nagiba za več kot 45°. Drevesa običajno vzamejo manj materiala in se dotikajo podlage na manj mestih.

Kartica pove, kolikšna površina potrebuje podporo, koliko je podpornih točk in približno koliko materiala zasedejo. Podpore, ki stojijo na modelu (ne na podlagi), se štejejo: tam pustijo oznake. Če je v {{ui:Nastavitve}} izbrana tiskalna podlaga, je pod modelom narisana podlaga.

:::note
To je predogled, ne slicer: vaš slicer odloči o pravih podporah. Na zelo velikem previsu so podporne točke razporejene širše, da predogled ostane hiter; kartica to pove.
:::

## Debelina sten

Vsaka ploskev se izmeri naravnost skozi telo do druge strani. Stene pod **najtanjšo dovoljeno steno** so rdeče, stene pod enkrat in pol tem pa oranžne: natisnejo se, a so lahko šibke.

Tanka območja so navedena od najtanjšega naprej, z debelino in velikostjo vsakega. {{ui:Pokaži}} obrne kamero k njemu.

Tiskalnik ne more narediti stene tanjše od približno dveh širin svoje šobe: 0,8 mm za pogosto šobo 0,4 mm (začetna vrednost). Tiskalniki s smolo zmorejo manj; preverite vodnik za svoj tiskalnik.

Pri zelo velikem modelu merijo žarek le nekatere ploskve, druge pa prevzamejo debelino sosednjih; kartica pove, koliko jih je bilo izmerjenih.

## Izdolbljenje

Izdolbljenje ohrani zunanjost, odstrani notranjost in pusti stene tako debele, kot zahtevate. Izdelki s smolo porabijo manj smole in manj vlečejo na tiskalno ploščo; filamentni izdelki porabijo manj plastike, kot bi jo porabilo polnilo.

1. Izberite skupino, komponento ali mrežo, nato odprite {{ui:Izdolbi}}.
2. Nastavite **stena** (za začetek 2 mm) in kako široke so **odtočne luknje**.
3. Pri tisku s smolo kliknite {{ui:Postavi odtočno odprtino}}, nato kliknite zunanjost modela, kjer naj bo: nizko, blizu tiskalne plošče, da tekoča smola odteče. Postavite jih, kolikor potrebujete; vsaka se prikaže kot moder krog in je navedena z {{ui:Odstrani}}.
4. {{ui:Predogled}} pove, koliko izdolbljenje odstrani.
5. {{ui:Izdolbi}} naredi spremembo: en korak, ki ga {{key:Mod+Z}} razveljavi.

Rezultat je eno zaprto telo, ki ga preverjanje za 3D-tiskanje sprejme: ModelCraft ga najprej preveri in ničesar ne spremeni, če ne bi prestal. Kjer je model tanjši od dveh sten, ostane poln. Rezultat je skupina, katere ravne strani so posamezne ploskve, zato jo lahko še vedno oblikujete z {{ui:Potisni/povleci}}; ukrivljen del, izdolbljen na fini mreži, ima običajno preveč ploskev za to in postane mreža; vrstica stanja pove, kateri.

:::tip
Pri večini oblik je notranjost zunanjost, premaknjena navznotri za točno debelino stene. Kjer vogali ali tanki deli to onemogočajo, ModelCraft na fini mreži namesto tega sledi zunanjosti na razdalji stene; kartica nato pove, kako natančno je (na delček milimetra).
:::

## Popravilo

{{ui:Popravilo}} pregleda izbrani del, kot ga bo pregledal slicer tiskalnika, popravi, kar lahko varno popravi, in navede vsak popravek:

| Popravi | Kaj to pomeni |
|---|---|
| Trikotnike brez površine | izpuščeni |
| Trikotnik, narisan dvakrat | ohranjen en primerek; ploskev, narisana hrbtno na hrbtni strani z samo seboj (brez debeline), je odstranjena |
| Ohlapne kose pod 0,5 mm | odstranjeni |
| Trikotnike, obrnjene v napačno smer | obrnjeni, da se ujemajo s sosedi |
| Luknje, ravne ali ne | zaprte z lepezo novih trikotnikov iz središča vsake luknje |
| Del, obrnjen naopako | obrnjen navzven (notranjost v drugem delu pustite, kot je: namenjena je, da kaže navznoter) |

{{ui:Popravi varne}} naredi vse v enem koraku, ki ga {{key:Mod+Z}} razveljavi, vrstica stanja pa navede vsak popravek. Popravljeni del postane skupina, katere ravne strani so posamezne ploskve. Če se še vedno ne zapre (ostane kaj pod **Pustite za vas**) ali bi imela preveč ploskev za skupino, postane mreža: njene ploskve ostanejo trikotniki, ravne strani pa so še vedno videti ravne. Vrstica stanja pove, kateri. {{ui:Združi prekrivajoče se dele}} deluje enako.

Česar ni mogoče varno popraviti, je navedeno pod **Pustite za vas** in označeno z vijolično barvo v pogledu, z {{ui:Pokaži}}:

- **Robovi, kjer se srečajo tri ali več ploskev**: odločite, katera ploskev pripada, in izbrišite ostale.
- **Del, ki poteka skozi sebe**: premaknite ali na novo narišite ta del. Glejte [Presek ploskev](topic:intersect).
- **Luknje, prevelike ali preveč zapletene za zapiranje**: narišite ploskve čez njih.
- **Ločeni kosi, ki se prekrivajo**: slicerji jih vseeno združijo. {{ui:Združi prekrivajoče se dele}} jih naredi v eno zaprto telo (na mestih, kjer se srečajo, prerisuje ploskve, zato je to ločen gumb, ki ga nikoli ne izvede samodejno).

Za skupine potiska/povlečenja lahko popravite tudi po eno: v {{ui:Podatki o entiteti}} › {{ui:Pokaži težave}} / {{ui:Popravi}}, kar ohrani ploskve, ki ste jih narisali. Glejte [Orodja za telesa](topic:solids).

Povezano: [Pripravite model za 3D-tiskanje](topic:print-3d) · [Slog za začetnike](topic:beginner) · [Še ni izdelano](topic:not-built-yet#3d-printing)
