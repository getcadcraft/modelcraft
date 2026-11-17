---
title: Animirajte poljubno lastnost, oblikujte jo s krivuljami in mešajte posnetke
summary: Delovni prostor Animacija ključi mesto, zasuk in velikost predmeta, svetlost, razpršitev in barvo svetila, objektiv ter oblikovne ključe mreže; okostja upognejo mrežo s kostmi in naslikanimi utežmi; IK in omejitve naredijo, da kosti in predmeti sežejo, gledajo, kopirajo, ostanejo v mejah, visijo ali sledijo drugim; togala telesa padejo, se zložijo in trčijo ter se pečejo v ključe; gonilniki nastavijo vrednost iz drugih; pogled Krivulje na časovnici oblikuje vsako spremembo z ročicami Bézier in ponavljanji, pogled Posnetki pa shrani animacije kot dejanja, ki jih znova postavite in mešate.
keywords: fizika, togo telo, togo telesa, simulacija, simulirati, padec, padati, gravitacija, trčenje, trk, zlaganje, odboj, trenje, peči, pečen, IK, inverzna kinematika, omejitev, omejitve, gledaj proti, sledi, kopiraj transformacije, kopiraj lokacijo, kopiraj rotacijo, omeji rotacijo, meje, podrejeno, starš, sledi poti, pot, pol, veriga, okostje, okostja, rig, kosti, kost, skelet, koža, uteži, slikanje uteži, skupine oglišč, samodejne uteži, poza, način poze, dvojni kvaternion, linearno mešanje, oblikovni ključi, oblikovni ključ, morf, morfi, ciljne oblike, mešanje oblik, obraz, mimika, izraz, gonilnik, gonilniki, izrazi, delovni prostor animacija, animacija, animirati, ključna sličica, ključ, ključi, lastnost, lastnosti, transformacija, lokacija, rotacija, velikost, svetilo, luč, svetlost, barva, objektiv, vidni kot, graf urejevalnik, krivulje, krivulja, bezier, ročice, tangenta, interpolacija, cikel, cikli, ponavljanje, zanka, nihanje naprej nazaj, zamik, časovni list, izbira ključev, izbor z okvirjem, kopiraj ključe, prilepi ključe, raztegni ključe, skaliraj ključe, posnetki, dejanja, NLA, mešanje, vpliv, shrani
from: 16d8e12f
---

[Časovnica](topic:animation) premika kamero ter cele skupine in komponente. Delovni prostor **Animacija** ključi več kot to, časovnica pa dobi še dva pogleda, s katerima lahko oblikujete in znova uporabite to, kar ste ključili.

## Odprite ga

Izberite {{ui:Animacija}} v seznamu delovnih prostorov na orodni vrstici. Pod pogledom se odpre časovnica, orodna vrstica pokaže skupine Animacije ({{ui:Ključi}}, {{ui:Predvajaj}}, {{ui:Časovnica}}), podokno na desni pa našteje, kaj lahko ključite na predvajalni glavi.

## Ključite lastnost

Podokno na predvajalni glavi našteje:

- **Izbrani predmet**: njegovo {{ui:Postavi}}, {{ui:Zasuk (°)}} in {{ui:Velikost}}, po tri števila za vsako. Vpišite število in pritisnite {{key:Enter}}: ključ se postavi na predvajalno glavo in predmet se tam premakne. Rombek ob vrstici ključi vrednost, kakršna je zdaj; napolnjen romb pomeni, da je na predvajalni glavi že ključ.
- **Svetila**: {{ui:Svetlost (lm)}}, {{ui:Razpršitev (°)}} (reflektorska svetila) in {{ui:Barva}} vsakega svetila.
- **Kamera**: {{ui:Kot leče (°)}} za približanje, medtem ko se kamera premika.

{{ui:Ključ transformacije}} (ali {{key:I}}) ključi mesto, zasuk in velikost vseh izbranih skupin ali komponent naenkrat; {{ui:Ključ kamere}} (ali {{key:K}}) ključi kamero. Ko je vklopljen {{ui:Samodejni ključ}}, skupina, katere mesto, zasuk in velikost so ključeni na ta način, dobi nov ključ ob vsakem premiku.

Zasuki so tri kote, okoli osi X, nato Y in nato Z. Zasuk, ključen čez 180°, se nadaljuje v isto smer (190° ostane 190°, ne −170°), zato se lahko kolo zavrti večkrat.

:::tip
Skupina, ki jo ključite z {{ui:Ključ izbora}} na časovnici, ima ključe za celotno postavitev. Gumb krivulje v njeni vrstici jih spremeni v krivulje mesta, zasuka in velikosti (enaka postavitev pri vsakem ključu), da jih lahko oblikujete v {{ui:Krivulje}}.
:::

## Oblikovni ključi (morfi)

**Oblikovni ključ** je druga oblika iste [mreže](topic:meshes): nasmeh na obrazu, izboklina vrat, zvit list. Njegov drsnik prehaja od mreže, kakršna je (0), do te oblike (1); več ključev se sešteva.

1. Izberite mrežo v delovnem prostoru Animacija: podokno pokaže njene {{ui:Ključe oblike}}.
2. Kliknite {{ui:Dodaj ključ oblike}}. ModelCraft preklopi v [delovni prostor Mreža](topic:mesh-edit) z novim ključem v urejanju: premikajte točke, iztiskajte, oblikujte – spremenite mrežo v želeno obliko.
3. Vrnite se v {{ui:Animacija}} in kliknite {{ui:Končano}}. Mreža se vrne v prvotno stanje, ključ pa obdrži vašo spremembo.

Nato povlecite drsnik ključa (ali vpišite vrednost), da ga zmešate. Romb ključi vrednost na predvajalni glavi, zato ključ lahko sčasoma narašča in bledi; ko ima progo, se nova vrednost ključi na predvajalni glavi. Svinčnik znova uredi obliko ključa (mreža jo kaže v celoti do {{ui:Končano}}; {{ui:Prekliči}} pusti ključ takšen, kakršen je bil), oko ključ izklopi, koš ga odstrani.

Vsako oglišče, ki ga dodate med urejanjem ključa, pripada samo mreži: ostane tam, kjer ste ga postavili, v vseh oblikah.

:::note
Oblikovni ključi premaknejo mrežo pred njenimi [modifikatorji](topic:modifiers): modifikator Subdivision zgladi zmešano obliko. Upodobljene slike in videoposnetki prikazujejo ključe na vsaki sličici.
:::

## Okostja: kosti, ki upogibajo mrežo

**Okostje** je niz kosti znotraj [mreže](topic:meshes). Postavite kosti in mreža sledi, vsaka točka toliko, kolikor povedo njene **uteži**.

1. Izberite mrežo v delovnem prostoru Animacija in kliknite {{ui:Dodaj okostje}} v podoknu (ali {{ui:Dodaj kost}} v skupini {{ui:Okostje}}): prva kost teče po sredini mreže od njenega podnožja.
2. Ko je kost izbrana, {{ui:Dodaj podrejeno kost}} doda naslednjo od njene konice. V podoknu nastavite vsaki kosti {{ui:Glava}}, {{ui:Konica}}, {{ui:Zasuk (°)}} in {{ui:Visi na}}: kost, ki visi na drugi, se premika z njo. Odkljukajte {{ui:Premika mrežo}} pri kosti, ki le usmerja druge.
3. Kliknite {{ui:Samodejne uteži}}: vsaka kost prime točke, ki so ji najbližje, in oprijem se gladko razširi po mreži, tako da si točke med dvema kostema delita. {{ui:Samo najbližje kosti}} je hitrejša, ostrejša delitev.

**Pozirajte** kosti z {{ui:Poza}} ({{key:P}}): kliknite kost, da jo izberete, povlecite, da jo zasukate okoli osi pogleda, {{key:Shift}}-povlecite, da jo premaknete. Ali vpišite njeno {{ui:Postavi}}, {{ui:Zasuk (°)}} in {{ui:Velikost}} pod {{ui:Poza}}; zasuki so v lastnih osah kosti, merjeni od njenega mirovnega položaja. Rombki in {{ui:Postavi ključ za celotno pozo}} ključijo pozo na predvajalni glavi; ko ima kost ključe, jo pozirati pomeni, da se ključi tam. {{ui:Ponastavi to kost}} in {{ui:Ponastavi pozo}} vrneta kosti v mirovanje.

**Slikajte uteži** ({{key:W}}) za izbrano kost: mreža je prikazana v mirovanju, vsaka ploskev je obarvana glede na to, koliko jo ta kost drži – rdeča vsa, modra nič. Slikajte, da dodate oprijem ({{key:Mod}} ga odvzame, {{key:Shift}} zgladi); {{ui:Velikost (px)}} in {{ui:Moč}} nastavita čopič. Z {{ui:Uteži vsake točke naj dajo skupaj 1}} dodelitev več uteži eni kosti vzame enako ostalim. Vsak potez je en korak razveljavitve modela.

{{ui:Koža}} določi, kako se točka med kostmi premika: {{ui:Linearna (hitra)}} meša premike kosti in rahlo stisne upognjen sklep; {{ui:Dvojni kvaternion (ohrani prostornino v sklepih)}} pa točko zavrti okoli sklepa, tako da komolec ali koleno ohrani debelino (takrat {{ui:Velikost}} kosti kože ne razteguje).

:::note
Oblikovni ključi so najprej, nato okostje, nato [modifikatorji](topic:modifiers). Pogled, slike in videoposnetki vsi prikazujejo pozirano mrežo; uteži mreže se shranijo z njo, kosti in njihova poza pa z animacijo.
:::

## IK in omejitve

**Omejitev** premakne kost ali predmet po njegovih ključih, po pravilu. Izberite predmet (ali v okostju kost) in dodajte omejitev pod {{ui:Omejitve za …}}; več jih teče v navedenem vrstnem redu (puščice ga spremenijo), vsaka pa ima {{ui:Koliko}} (0 do 1, ključi se z rombkom kot vsaka lastnost) in stikalo za vklop in izklop.

| Omejitev | Za | Kaj naredi |
|---|---|---|
| {{ui:Doseg (IK)}} | Kosti | Kost in kosti, na katerih visi ({{ui:Kosti v verigi}}), se upognejo, da njena konica doseže cilj. Z dvema kostema in {{ui:Pol (upogib kaže proti njemu)}} komolec ali koleno kaže proti polu; daljše verige se gladko upognejo. Če je cilj izven dosega, veriga kaže naravnost proti njemu. |
| {{ui:Glej proti}} | Obe | Zasuka se tako, da {{ui:Os, ki kaže}} gleda proti cilju, {{ui:Os navzgor}} pa čim bližje navzgor. |
| {{ui:Kopiraj transformacije}} | Obe | Prevzame mesto, zasuk ali velikost cilja – tiste, ki so označene. |
| {{ui:Meje}} | Obe | Ohrani svoje mesto, zasuk (stopinje) ali velikost med {{ui:min}} in {{ui:maks}} po osi; prazen par pusti to os prosto. |
| {{ui:Podrejeno}} | Obe | Premika se s ciljem, kot da visi nanj, od mesta, kjer sta bila oba, ko ste izbrali cilj. |
| {{ui:Sledi poti}} | Predmeti | Sedi na [krivuljnem predmetu](topic:curves) pri {{ui:Vzdolž krivulje}} (0 na začetku, 1 na koncu; ključite jo, da potuje), z {{ui:Zasukaj vzdolž krivulje}} pa gleda vzdolž nje. |

Cilj je drug predmet v odprti skupini, kost istega okostja ali {{ui:Točka}}, ki jo vpišete (točka predmeta je v koordinatah modela, točka kosti pa v koordinatah njene mreže). Za IK nogo postavite cilj tja, kjer naj bo stopalo, in ključite cilj ali ključite {{ui:Koliko}}, da nogo med ključi predate med ključi in IK.

:::tip
Predmet, ki gleda na drugega, ki sledi poti, ga vidi na poti: ModelCraft najprej izračuna cilje, ne glede na vrstni red predmetov.
:::

## Fizika: padec, zlaganje in trki

Naj predmeti padajo in trkajo drug ob drugega, nato rezultat shranite kot ključe.

1. Izberite skupino, komponento ali mrežo in nastavite njeno {{ui:Togo telo}} pod {{ui:Fizika}}: {{ui:Pada in trči}} (premika se) ali {{ui:Ostane na mestu, ovira}} (miza, zid, klančina). Padajočemu določite {{ui:Oblika}} – {{ui:Kvader (njegove meje)}} ali {{ui:Krogla (okoli njegovih meja)}} –, njegovo {{ui:Maso (kg)}}, {{ui:Trenje}} in {{ui:Odboj}} (0 se udari, 1 se odbije nazaj enako visoko).
2. Pod {{ui:Cel model}} nastavite {{ui:Od (s)}} in {{ui:Do (s)}}, {{ui:Gravitacijo (m/s², navzdol)}} ter ali je tu {{ui:Tla za pristanek}} (in njihovo višino).
3. Kliknite {{ui:Peci fiziko}} (v podoknu ali skupini {{ui:Fizika}}). Vsak padajoči predmet dobi ključ mesta, zasuka in velikosti na vsaki sličici med obema časoma; predvajajte ga kot katero koli animacijo.

Ponovno pečenje nadomesti te ključe; {{ui:Odstrani pečene ključe}} jih odstrani. Predmeti se začnejo v mirovanju, kjer jih njihovi ključi, krivulje in omejitve postavijo ob {{ui:Od (s)}} (gibanje, ključeno pred tem, se ne nadaljuje v padec). Več {{ui:Korakov na sličico}} ohrani visoke sklade stabilnejše; vrstica stanja pove, ko je nekaj ob koncu še vedno v gibanju.

:::note
Oblike so kvadri in krogle okoli mej vsakega predmeta; kvader se dotika z vogali, sredinami robov in sredinami ploskev, zato se kvadri zlagajo in prevračajo, kot bi pričakovali. Tkanina, tekočine, sklepi med predmeti in natančne oblike niso izdelani.
:::

## Gonilniki

**Gonilnik** nastavi oblikovni ključ iz drugih stvari namesto ročno: odprite gonilnik ključa (gumb kalkulatorja), napišite **izraz** in vsakemu imenu v njem določite, kaj bere ({{ui:Bere}}): čas v sekundah, sličico, mesto, zasuk ali velikost predmeta vzdolž X, Y ali Z, svetlost svetila ali drug oblikovni ključ. Na primer, pri `v`, ki bere zasuk vrat okoli Z, `clamp(v / 90, 0, 1)` odpre obliko, ko se vrata odpirajo.

Izrazi uporabljajo števila, imena, `+ - * / % ^` in oklepaje ter funkcije `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` s `pi` in `e`. Napaka je označena in ničesar ne spremeni. Drsnik gnanega ključa kaže vrednost gonilnika; gonilnik prevlada nad progo ključa, dokler ga ne odstranite.

## Izbira in spreminjanje ključev (pogled Ključi)

{{ui:Ključi}} prikaže vrstico za vsako progo: kamero, vsako premikajočo se skupino in vsako lastnost („Svetilo 2 · Svetlost (lm)“; ključi lastnosti so okrogli).

- Kliknite ključ, da ga izberete; {{key:Shift}}-klik ali {{key:Mod}}-klik doda ali odstrani ključe iz izbora. {{key:Shift}}-povlek preko vrstic nariše okvir, ki doda vse ključe v njem.
- Povlecite izbrani ključ, da premaknete vse; {{key:Left}} / {{key:Right}} ga premakneta za sličico ({{key:Shift}}: deset).
- {{key:Mod+C}} kopira izbrane ključe, {{key:Mod+V}} jih prilepi od predvajalne glave na iste proge (tudi drug zavihek ModelCraft jih lahko prilepi).
- {{ui:Raztezek}} razmakne izbrane ključe od predvajalne glave za število poleg (2 = dvakrat dlje narazen; 0.5 jih zbere bliže).
- Seznam glajenja nastavi, kako se vsak izbrani ključ premakne naprej.

## Oblikovanje krivulj (pogled Krivulje)

{{ui:Krivulje}} je graf vsake številke čez čas: čas v desno, vrednost navzgor. Označite krivulje, ki jih želite prikazati v seznamu na levi (X, Y in Z so rdeča, zelena in modra).

- Kliknite ključ (kvadratek), da ga izberete, {{key:Shift}}-klik za več ali povlecite okvir. Povlecite izbrani ključ, da spremenite njegov čas in vrednost; pri več izbranih povlečenje premakne vse po času.
- Izbrani ključ prikaže svoji dve **ročici**. Povlecite eno, da oblikujete krivuljo na tej strani. {{ui:Ročice}} določajo obnašanje: {{ui:Samodejno}} (gladka krivulja skozi ključe okoli njega), {{ui:Usmerjeno na naslednji ključ}}, {{ui:Poravnano}} (obe ostaneta v ravni črti, tako da krivulja nima kota) ali {{ui:Prosto}}.
- {{ui:Iz izbranih ključev}} določa, kako se vsak izbrani ključ premakne do naslednjega: {{ui:Krivulja (ročice)}}, {{ui:Zgladi}}, {{ui:Enakomerno}}, {{ui:Počasen začetek in konec}} ali {{ui:Zadrži}}.
- {{ui:Pred}} in {{ui:Po}} določata, kaj krivulja počne zunaj svojih ključev: {{ui:Zadrži}} (ostane pri prvi ali zadnji vrednosti), {{ui:Ponovitev}}, {{ui:Naprej in nazaj}} ali {{ui:Ponovi in nadaljuj}} (vsaka ponovitev se začne tam, kjer se je zadnja končala: kolo se vrti naprej, hodec hodi naprej).
- Kolešček približa ({{key:Mod}}: samo vrednosti; {{key:Shift}}: samo čas); povlecite s srednjim gumbom ali z {{key:Alt}}, da se pomikate; {{ui:Pokaži vse}} ali {{key:Home}} prilagodi vse prikazane krivulje. Klik na prazen prostor premakne predvajalno glavo tja. {{key:Delete}} izbriše izbrane ključe.

Ročice se ne smejo križati v času, zato krivulja nikoli ne teče nazaj.

## Ponovna uporaba animacij (pogled Posnetki)

**Posnetek** predvaja shranjeno animacijo (**dejanje**) na časovnici. Posnetki se mešajo po vrstnem redu, spodnje vrstice čez zgornje; lastne proge časovnice so nad vsemi posnetki.

1. Ključite skupine in svetila kot ponavadi, nato kliknite {{ui:Naredi posnetek}} v {{ui:Posnetki}} in dejanju dajte ime. Proge postanejo dejanje, posnetek pa ga predvaja tam, kjer so bile (kamera ostane na časovnici).
2. Za ponovno uporabo izberite dejanje in kliknite {{ui:Dodaj posnetek}}: nov posnetek se začne na predvajalni glavi.
3. Povlecite posnetek vzdolž njegove vrstice, da ga premaknete; kliknite nanj, da nastavite {{ui:Začetek (s)}}, {{ui:Hitrost}} (2 = dvakrat hitreje), {{ui:Ponovitve}}, {{ui:Koliko}} (0 do 1), {{ui:Mešanje}} ({{ui:Zamenjaj}} ali {{ui:Dodaj povrhu}} pred njim stoječih posnetkov), {{ui:Zunaj posnetka}} (nič, zadrži njegov konec ali zadrži oba konca) in {{ui:Utišaj}}. Puščice spremenijo vrstni red; koš ga odstrani (dejanje, ki ga noben posnetek več ne uporablja, gre z njim).

Posnetek z manj kot polnim {{ui:Koliko}} se prelije iz tistega, kar je pod njim: prejšnjega posnetka ali svetila oz. postavitve, kakršna je brez animacije.

## Kaj se predvaja kje

| Kaj | V pogledu | V upodobljenem videu |
|---|---|---|
| Ključi kamere, kot leče s ključi kamere | Da | Da |
| Mesto, zasuk in velikost (ključi, krivulje, posnetki) | Da | Da |
| Svetlost, razpršitev in barva svetila | Da | Še ne: video uporablja svetila, kakršna so, ko se začne (glejte [kaj še ni izdelano](topic:not-built-yet)) |
| Kot leče brez ključev kamere | Da | Še ne: ključite tudi kamero |
| Oblikovni ključi in gonilniki | Da | Da |
| Okostja (pozirane mreže) | Da | Da |
| IK in omejitve | Da | Da |
| Pečena fizika (ključi) | Da | Da |

Vse je shranjeno v datoteki `.modelcraft` skupaj z ostalo animacijo, {{ui:Razveljavi}} in {{ui:Uveljavi}} na časovnici pa vrneta katero koli od teh sprememb.
