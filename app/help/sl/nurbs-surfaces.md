---
title: Proste površine (NURBS)
summary: Gladke krivulje in površine za lupine izdelkov, karoserije avtomobilov in trupe čolnov – prehod, potegnjeno po poti, mreže krivulj, zaplate iz štirih robov, zlivanja, prirezi – z zveznostjo G0, G1 in G2, izmerjeno na točnih površinah, telesa z unijo, odštevanjem in presekom, pogledi zebra in ukrivljenosti, ploskve, prilagojene skenu z izmerjeno napako, ter datoteke STEP ali IGES.
keywords: nurbs, skeniranje, reverzni inženiring, prilagoditev, mreža v površino, oblak točk, stl, prirez, prirezan, luknja, rez, telo, telesa, booleova, unija, odštej, presek, razlika, zašij, zaprt, prosta oblika, freeform, free-form, površina, površine, b-spline, bspline, krivulja, zlepek, prehod, potegni, vodilo, mreža, coons, zaplata, zlij, uskladi, zveznost, g0, g1, g2, tangenta, ukrivljenost, zebra, kontrolne točke, vozli, stopnja, step, iges, razred A
from: 09887405
---

Podokno **Površine** ustvari gladke krivulje in površine, kakršne se uporabljajo za lupine izdelkov, karoserije avtomobilov in trupe čolnov: NURBS, ista matematika, ki jo uporabljajo drugi programi za modeliranje površin. Vse je izmerjeno na točnih površinah, nikoli na trikotnikih, ki jih vidite. Velikosti v podoknu so v **milimetrih**, ne glede na enoto, ki jo prikazuje model.

Odprete ga z desne plošče: {{ui:Površine}} › {{ui:Odpri podokno Površine}}. Model, ki že ima površine, ga odpre sam.

## Kako deluje ukaz

1. Pritisnite ukaz (na primer **Prehod**). Podokno pove, kaj še potrebuje: točke, krivulje, rob površine ali konec krivulje.
2. Izberite jih: kliknite jih v 3D pogledu ali pritisnite **Izberi** (ali gumbe za rob in konec) ob vsakem na seznamu. Za rob kliknite blizu tega roba površine.
3. Preverite možnosti (stopnja, toleranca, zveznost, …) in pritisnite **Ustvari**.

Krivulje iz točk vzamejo točke, vpisane po eno na vrstico (`x, y, z` v mm), ali **Izberi točke v pogledu**: vsak klik uporabi isto zaskakovanje kot orodja za risanje. Za konec pritisnite <kbd>Enter</kbd> ali dvakrat kliknite, za ustavitev pa <kbd>Esc</kbd>.

## Krivulje

- **Krivulja skozi točke** gre skozi vsako točko. **Krivulja po kontrolnih točkah** namesto tega sledi mreži točk.
- **Vstavi vozel**, **Dvigni stopnjo** in **Zniži stopnjo** spremenijo opis krivulje, ne da bi jo premaknili (zniževanje zavrne, če bi se krivulja premaknila več kot toleranca). **Obnovi krivuljo** ji da novo število kontrolnih točk in pove, kako daleč se je premaknila.
- **Uskladi krivuljo** naredi, da se konec ene krivulje stakne z drugo z G0 (dotik), G1 (ista smer) ali G2 (tudi enaka ukrivljenost). **Zlij krivuljo** doda novo krivuljo med dvema koncema.
- **Združi krivulje** in **Razdeli krivuljo**.

## Površine

- **Prehod** skozi dve ali več krivulj, **Linearna površina** med dvema, **Iztisni krivuljo**, **Zavrti krivuljo**.
- **Potegni po enem vodilu** nosi profil vzdolž poti brez zvijanja; **Potegni po dveh vodilih** ohrani konce profila na obeh vodilih. Potegi so prilagojeni: vrstica stanja pove, kako blizu so ostali pravemu potegu.
- **Površina iz mreže krivulj** gre skozi mrežo krivulj (prvi izbori so profili, ostali vodila). **Zaplata iz štirih robov** zapolni štiri krivulje, ki se srečajo v vogalih.
- **Uskladi površino** naredi, da rob površine stakne z sosedo z G0, G1 ali G2; **Zlij površino** doda površino med dvema robovoma.
- **Odmakni površino**, **Podaljšaj površino** (površina se nadaljuje, kot je šla), **Obnovi površino** ter vozli in stopnja za površine.

## Preverjanje kakovosti

Tabela **Skupni robovi** navaja vsak rob, ki ga delita dve površini, z režo (mm), kotom med njima (°) in skokom ukrivljenosti (1/mm), ter pove, ali to pomeni G0, G1 ali G2. Rob, slabši od zahtevanega, je tudi v **Težave** (gumb ⚠ v vrstici aplikacije) z popravkom **Uskladi**.

**Prikaži kot** › **Zebraste črte** in **Ukrivljenost (Gauss)** prihajata iz točne površine: črte, ki tečejo nepretrgano čez rob, pomenijo G1; črte, ki ohranijo tudi širino, pomenijo G2. Ukrivljenost je modra tam, kjer je površina sedlo, rdeča tam, kjer je kupola, in bela, kjer je ravna. **Kontrolne točke** prikažejo mreže kontrol.

G0–G2 se merijo v 33 točkah na rob. **G3 in kakovost „razred A“ nista izmerjeni** in se ne trdita.

## Prirezi površine

Skupina **Prirezi** reže površino, ne da bi spremenila njeno obliko: površina ohrani vse svoje kontrolne točke, prikazan, preštet in zapisan pa je le del znotraj obrisa. **Priree na pravokotnik** in **Prirezi s krogom** delujeta na deležu (0 do 1) površine v vsaki smeri, zato ne potrebujeta izbiranja v pogledu. **Prirezi s krivuljo** vzame zaprto krivuljo, ki leži na površini (projicirana je v površino in zavrnjena z besedami, če je odprta ali več kot toleranca oddaljena). Označite **Izreži luknjo**, da odstranite notranjost obrisa; pustite neoznačeno, da ohranite samo notranjost. Površina lahko ima en ohranjen obris in poljubno število lukenj; obris, ki seka drugega, je zavrnjen. **Odstrani prirez** prikaže celotno površino znova. Rezani robovi natančno sledijo obrisu; Razveljavi v podoknu vrne prirez nazaj kot vsak drug korak.

STEP nosi prirez kot meje ploskve, IGES pa kot prirezano površino (entiteta 144); oba ga znova preberata.

## Telesa in Booleove operacije

Skupina **Telesa** spremeni površine v zaprta telesa in jih združuje. Telo je tukaj niz površin podokna, ki skupaj zapirajo prostornino; njegove ploskve ostanejo točne površine NURBS s svojimi prirezi.

- **Telo: škatla**, **Telo: valj** in **Telo: krogla** naredijo eno iz vnesenih velikosti (v mm): škatlo s šestimi ravnimi ploskvami, valj z okroglo stranjo in dvema ravnima koncema, prirezanima na krog, kroglo z eno zasukano površino.
- **Telo iz površin** združi površine, ki ste jih naredili sami. Izberite jih ali ne izberite nobene, da uporabite vse prikazane površine, ki še niso v telesu. Zašijejo se skupaj v okviru tolerance: če ne zaprejo, se nič ne spremeni in podokno pove, koliko robov ostane odprtih in kako blizu se morajo srečati.
- **Unija**, **Odštej** (drugo telo se odvzame prvemu) in **Presek** (samo to, kar imata obe) vzamejo dve telesi: kliknite ploskev vsakega v pogledu ali pritisnite **Izberi** v seznamu **Telesa**. Označite **Ohrani obe telesi**, da ju pustite ob rezultatu.

Booleova operacija ohrani vsako ploskev na njeni točni površini in jo zreže z novimi obrisi prirezov vzdolž presečišča. Vrstica rezultata navaja izmerjene številke: kako daleč so morale točke motorja telesa premakniti, da sedijo na točnih površinah (nikoli več kot toleranca), kako blizu so presečne točke obema površinama (običajno nekaj milijonink milimetra), prostornino ter ali se nove ploskve spet zaprejo, če so zašite na novo iz svojih točnih površin. Prostornine se merijo na trikotnikih znotraj tolerance (0,05 mm, če ne nastavite drugače), zato je prostornina krogle ali valja rahlo pod točno; manjša toleranca se približa. Booleova operacija, ki ni mogoče čisto (telesi nimata nič skupnega, obris bi se sekal sam), je zavrnjena z besedami in ne spremeni ničesar. Ena Booleova operacija je en korak **Razveljavi** podokna.

V seznamu **Telesa** **Razveži** ohrani ploskve kot navadne površine; koš odstrani telo in njegove ploskve.

**Dodaj v model** (v seznamu **Telesa**) da kopijo telesa v model kot eno zaprto skupino, njegove ploskve kot trikotnike znotraj 0,05 mm, v enem koraku razveljavitve modela. Nato deluje z lastnimi operacijami Unija, Odštej in Presek modela, potiskanjem in vlečenjem ter preverjanjem za 3D-tiskanje; točno telo ostane v podoknu.

## Zaobljenosti in zadebelitev

**Zaobljenost med ploskvama** zaokroži rob, kjer se srečata dve ploskvi enega telesa: izberite dve ploskvi (v pogledu ali s **Izberi** v seznamu), vnesite **polmer** in, za polmer, ki se spreminja vzdolž roba, **polmer na koncu** (0 ohrani en polmer). Krogla tega polmera se kotali vzdolž roba in se dotika obeh ploskev; zaobljenost je točen krožni lok, ki ostane v vsaki točki, zlit v eno površino, obe ploskvi pa sta prirezani tam, kjer se krogla dotika. Zunanji rob izgubi material, notranji vogal pa ga pridobi. Vrstica rezultata pove, kaj je bilo izmerjeno: kako daleč je površina zaobljenosti od kotaleče krogle med točkami, iz katerih je bila zgrajena (točke se dodajajo, dokler ni znotraj četrtine tolerance), največji kot med zaobljenostjo in vsako ploskvijo vzdolž dotičnih črt ter enaka števila kot pri Uniji. Polmer, ki ne ustreza (krogla bi zapustila ploskev ali se ploskev ukrivi ostreje od polmera), je zavrnjen z imenom ploskve, nič pa se ne spremeni.

**Zaobljenost več robov** zaokroži veliko robov naenkrat: izberite dve ploskvi prvega roba, nato dve ploskvi naslednjega in tako naprej (ploskev je lahko v več parih, na primer zgornja ploskev škatle v štirih od njih); vsi robovi dobijo polmer, ki ga vnesete. Vsako zaokroževanje se izračuna na telesu, kot je bilo, nato se zaporedoma odreže, zato vrstni red ni pomemben. Kjer se dva zaokrožena roba srečata v vogalu, katerega drugi robovi ostanejo ostri, se obe zaobljenosti zlijeta skupaj vzdolž njune presečne krivulje (greben). Kjer se trije zaokroženi zunanji robovi treh ravnih ploskev, pravokotnih med seboj, srečajo z enim polmerom, je vogal en **krogelni zaplat**, tangenten na vse tri zaobljenosti (odkljukajte **Vogali**, da dobite vogal z grebenom); rob mora biti vsaj dvakrat daljši od polmera, kjer sta oba konca takšna vogala. Vrstica rezultata pove, koliko robov je bilo zaokroženih in kako so izšli vogali. Notranji robovi se lahko zaokrožijo skupaj, vendar se rezultat, ki se ne zapre spet, samo prijavi (vrstica to pove), zato ga preverite.

**Zadebeli v telo** da površini debelino: izberite jo, vnesite **debelino** in odkljukajte **Druga stran**, da raste na drugo stran. Odmaknjena ploskev se prilagodi površini in je izmerjena glede nanjo (vrstica rezultata da največjo razliko od debeline); stene sledijo vsakemu robu in vsakemu obrisu prireza. Če se površina ukrivi ostreje od debeline na tej strani ali se drug del nje nahaja bliže kot debelina, je zavrnjeno z imenom površine in mestom; nič se ne spremeni.

## Razveljavi, datoteka, STEP in IGES

Podokno ima svoj **Razveljavi** in **Uveljavi** (en korak na ukaz). Površine se shranijo v datoteki `.modelcraft` skupaj z modelom; niso del lastne razveljavitve modela, prav tako kot materiali datoteke.

**STEP…** (AP242) in **IGES…** shranita krivulje in površine točno, kot so (krivulje in površine B-zlepek, nič ni pretvorjeno v trikotnike). Vsaka površina je svoja ploskev s svojim prirezom; telo je zapisano kot ena zaprta lupina, pri čemer je vsak rob deljen med svoji dve ploskvi, kot to pričakujejo drugi programi CAD (vrstica stanja pove, koliko teles je bilo tako izvoženih). V IGES je isto telo ena mnogoterostna trdna B-rep (entiteta 186 nad zaprto lupino 514, ploskve 510, zanke 508, en seznam robov 504 in en seznam oglišč 502); telo, katerega ploskve se ne ujemajo rob za rob, je zapisano kot ločene ploskve, in vrstica to pove. **Uvozi…** prebere takšno telo nazaj kot telo, iz STEP in iz IGES. Prebere krivulje in površine, zapisane na ta način, ter nize zaplat `.ccnurbs`; teles STEP iz drugih programov se odprejo z Datoteka › Uvozi kot mreže.

## Površine iz skena (reverzni inženiring)

Izberite skenirano mrežo v modelu (če nič ni izbrano, so to vse prikazane stvari), odprite **Površine** in v skupini **Skeniranje** izberite **Prilagodi ploskve skenu**. Orodje išče **ravnine**, **valje**, **krogle** in **stožce** (točne površine, iz katerih je narejen obdelani del; vsaka vrstica prikaže polmer ali polkot, ki ga je našlo), najde **zaobljenosti** (zaokrožene robove in vogale: majhen valj ali krogla, ki tangentno teče v dve ali več drugih ploskev, prikazana z njenim polmerom in ploskvami, ki jih povezuje), **zaobljenosti obroča** (torus: zaokrožen rob, kjer se ravna ploskev sreča z valjem ali stožcem, prikazan z njenim polmerom in polmerom obroča) ter **spremenljive zaobljenosti** (zaokrožen rob, čigar polmer se spreminja vzdolž njega, prikazan s polmerom na vsakem koncu), prilagodi **eno prosto zaplato** gladkemu, rahlo ukrivljenemu kosu in reže vsako ploskev na obris dela skena, iz katerega je prišla, tako da luknje in vogali ostanejo. Možnosti: **toleranca** (kako daleč, v mm, sme biti točka skena od ravnine ali valja in še pripadati njemu ter cilj za prosto zaplato), **najmanjši kos** (delež površine) in **največ ploskev**. Isti sken in iste možnosti vedno dajo iste ploskve.

Rezultat je tabela, ena vrstica na ploskev: njena vrsta, koliko trikotnikov je iz nje prišlo in napaka, **izmerjena od skena do ploskve** (rms, največja in delež točk znotraj tolerance). Izmerjene točke so oglišča skena in sredina vsakega trikotnika. Napaka ni izmerjena v nasprotni smeri (ploskev do skena), zato ploskev, ki sega čez sken, ne bi bila vidna. Opomba pod tabelo pove tudi, kolikšen del površine je bil premajhen za prilagajanje. V pogledu so točke skena obarvane po njihovem **zemljevidu odstopanja**: modre na ploskvi, zelene na pol poti do tolerance, rdeče pri toleranci ali več (odkljukajte **Pokaži zemljevid odstopanja**, da ga skrijete). Kosi, ki se zvijajo nazaj nase (na primer zaprta cev, prilagojena s prostimi zaplatami), so navedeni kot neprilagojeni in nikoli prisiljeni v eno površino.

**Zašij ploskve v telo** zašije vsako prikazano površino, ki še ni v telesu, v eno zaprto telo. Ploskve skena se srečajo samo znotraj lastne napake skena, zato poskusi najmanjšo razdaljo spoja, ki zapre (nikoli več kot nastavljena **razdalja šivanja**), in zavrne z besedami, kadar se ploskve ne zaprejo. Nikoli ne zakrpa reže. Škatla z zaokroženimi robovi se zašije, če so bile njene zaobljenosti najdene kot lastne ploskve; razdalja spoja, ki je zaprla, je v rezultatu. Telo nato deluje z Unijo, Odštejem, Presekom in **Dodaj v model**.

Česa ne naredi: **zaobljenost obroča** (torus) se išče samo okoli osi valja ali stožca, ki je že najden, in **spremenljiva zaobljenost** samo vzdolž precej ravnega roba (njeni preseki so narezani pravokotno na eno smer); drugje se pojavijo kot proste zaplate, kadar so dovolj gladke, sicer pa izpuščene; krogle, stožci in zaobljenosti se najdejo z naključnim vzorčenjem, zato se zelo majhna (nekaj trikotnikov) lahko zgreši; zemljevid odstopanja kaže razdaljo od skena do ploskev, ne v nasprotno smer; zelo veliki skeni (nad 300.000 trikotnikov) so tu zavrnjeni. Ploskve polnega obrata valja so izrezane okoli lukenj, s šivom postavljenim tam, kjer ni luknje. Preverite vsako ploskev glede na sken, preden se zanesete nanjo.

## Še ni izdelano

Zaokroževanje robov, ki se srečajo v vogalu ukrivljenih ploskev ali z različnimi polmeri (mešanje vogala), zaobljenost med ploskvami, ki se ne srečajo, notranja zaobljenost, ki se konča na poševni ali ukrivljeni ploskvi, ter Booleove operacije in zaobljenosti, izračunane na površinah brez trikotnikov (tukaj motor teles deluje na trikotnikih znotraj tolerance, vsaka točka pa je nato vrnjena na točne površine).
