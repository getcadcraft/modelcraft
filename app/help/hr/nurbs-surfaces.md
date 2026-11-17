---
title: Slobodne plohe (NURBS)
summary: Glatke krivulje i plohe za ljuske proizvoda, karoserije automobila i trupove brodova — loft, sweep, mreže krivulja, zakrpe od četiri brida, prijelazi, obrezivanja — s G0, G1 i G2 kontinuitetom mjerenim na točnim plohama, tijela s unijom, oduzimanjem i presjekom, zebra i prikazi zakrivljenosti, plohe prilagođene skeniranju s izmjerenom pogreškom te datoteke STEP ili IGES.
keywords: nurbs, skeniranje, obrnuto inženjerstvo, prilagodi, mreža u plohu, oblak točaka, stl, obrezivanje, obrezano, rupa, rez, tijelo, tijela, booleova, unija, oduzimanje, presjek, razlika, zašivanje, zatvoreno, slobodni oblik, freeform, ploha, plohe, b-spline, bspline, krivulja, spline, loft, sweep, tračnica, mreža, coons, zakrpa, prijelaz, usklađivanje, kontinuitet, g0, g1, g2, tangenta, zakrivljenost, zebra, kontrolne točke, čvorovi, stupanj, step, iges, klasa A
from: 09887405
---

Ploča **Plohe** izrađuje glatke krivulje i plohe kakve se koriste za ljuske proizvoda, karoserije automobila i trupove brodova: NURBS, ista matematika koju koriste drugi modelari ploha. Sve se mjeri na točnim plohama, nikad na trokutima koje vidite. Dimenzije u ploči su u **milimetrima**, bez obzira na jedinicu koju model prikazuje.

Otvorite je s desne ploče: {{ui:Plohe}} › {{ui:Otvori ploču Plohe}}. Model koji već ima plohe otvara je sam.

## Kako naredba radi

1. Pritisnite naredbu (na primjer **Loft**). Ploča kaže što još treba: točke, krivulje, rub plohe ili kraj krivulje.
2. Odaberite ih: kliknite ih u 3D prikazu ili pritisnite **Odaberi** (ili gumbe za rub i kraj) pored svake u popisu. Za rub kliknite blizu tog ruba plohe.
3. Provjerite opcije (stupanj, tolerancija, kontinuitet, …) i pritisnite **Izradi**.

Krivulje iz točaka uzimaju točke upisane po jednu u retku (`x, y, z` u mm), ili **Odaberi točke u prikazu**: svaki klik koristi isto hvatanje kao alati za crtanje. Pritisnite <kbd>Enter</kbd> ili dvaput kliknite za završetak, <kbd>Esc</kbd> za zaustavljanje.

## Krivulje

- **Krivulja kroz točke** prolazi kroz svaku točku. **Krivulja po kontrolnim točkama** slijedi kavez točaka umjesto toga.
- **Umetni čvor**, **Povisi stupanj** i **Snizi stupanj** mijenjaju način opisivanja krivulje bez pomicanja (snižavanje se odbija ako bi se krivulja pomaknula više od tolerancije). **Ponovno izgradi krivulju** daje joj novi broj kontrolnih točaka i kaže koliko se pomaknula.
- **Usklađi krivulju** čini da se kraj jedne krivulje spoji s drugom uz G0 (dodir), G1 (isti smjer) ili G2 (i ista zakrivljenost). **Krivulja prijelaza** dodaje novu krivulju između dva kraja.
- **Spoji krivulje** i **Podijeli krivulju**.

## Plohe

- **Loft** kroz dvije ili više krivulja, **Pravčasta ploha** između dvije, **Izvuci krivulju**, **Rotiraj krivulju**.
- **Sweep duž jedne tračnice** nosi profil duž putanje bez uvijanja; **Sweep duž dviju tračnica** drži krajeve profila na obje tračnice. Sweepovi se prilagođavaju: statusni redak kaže koliko je blizu ostao pravom sweepu.
- **Ploha iz mreže krivulja** prolazi kroz mrežu krivulja (prvi odabiri su profili, ostali vodilice). **Zakrpa iz četiri brida** ispunjava četiri krivulje koje se sastaju u kutovima.
- **Usklađi plohu** čini da rub plohe dotakne susjeda s G0, G1 ili G2; **Prijelazna ploha** dodaje plohu između dva brida.
- **Odmakni plohu**, **Produži plohu** (ploha se nastavlja kako je išla), **Ponovno izgradi plohu**, te čvorovi i stupanj za plohe.

## Provjera kvalitete

Tablica **Zajednički bridovi** navodi svaki brid koji dijele dvije plohe, s razmakom (mm), kutom između njih (°) i skokom zakrivljenosti (1/mm), te kaže je li to G0, G1 ili G2. Brid lošiji od zatraženog nalazi se i u **Problemima** (gumb ⚠ u traci aplikacije) s popravkom **Usklađi**.

**Prikaži kao** › **Zebra pruge** i **Zakrivljenost (Gaussova)** dolaze iz točne plohe: pruge koje se bez prekida nastavljaju preko brida znače G1; pruge koje zadržavaju i svoju širinu znače G2. Zakrivljenost je plava tamo gdje je ploha sedlo, crvena gdje je kupola, a bijela gdje je ravna. **Kontrolne točke** crtaju kontrolne mreže.

G0–G2 se mjere u 33 točke po bridu. **G3 i „klasa A“ kvaliteta se ne mjere** i ne tvrdi se da jesu.

## Obrezivanje plohe

Grupa **Obrezivanje** reže plohu bez promjene njezina oblika: ploha zadržava sve svoje kontrolne točke, a prikazuje se, broji i zapisuje samo dio unutar obrisa. **Obreži na pravokutnik** i **Obreži kružnicom** rade na udjelu (0 do 1) plohe u svakom smjeru, pa im ne treba odabir u prikazu. **Obreži krivuljom** uzima zatvorenu krivulju koja leži na plohi (projicira se u plohu, a odbija se riječima ako je otvorena ili je više od tolerancije udaljena). Označite **Izreži rupu** za uklanjanje unutrašnjosti obrisa; ostavite neoznačeno da zadržite samo unutrašnjost. Ploha može imati jedan zadržani obris i bilo koji broj rupa; obris koji siječe drugi se odbija. **Ukloni obrezivanje** prikazuje cijelu plohu ponovno. Rezani bridovi točno prate obris; Poništi u ploči vraća obrezivanje kao i svaki drugi korak.

STEP nosi obrezivanje kao granice plohe, a IGES kao obrezanu plohu (entitet 144); oba ga čitaju natrag.

## Tijela i Booleove operacije

Grupa **Tijela** pretvara plohe u zatvorena tijela i kombinira ih. Tijelo je ovdje skup ploha iz ploče koje zajedno zatvaraju volumen; njegove plohe ostaju točne NURBS plohe s obrezivanjima.

- **Kutijasto tijelo**, **Cilindrično tijelo** i **Kuglasto tijelo** izrađuju tijelo iz upisanih dimenzija (u mm): kutiju od šest ravnih ploha, cilindar s okruglom stranom i dva ravna kraja obrezana na kružnicu, kuglu od jedne rotirane plohe.
- **Tijelo iz ploha** grupira plohe koje ste sami izradili. Odaberite ih ili ništa da biste koristili sve prikazane plohe koje još nisu u tijelu. Zašivaju se unutar tolerancije: ako se ne zatvore, ništa se ne mijenja i ploča kaže koliko bridova ostaje otvoreno i koliko blizu se moraju spojiti.
- **Unija**, **Oduzmi** (drugo tijelo se oduzima od prvog) i **Presijeci** (samo ono što oba dijele) uzimaju dva tijela: kliknite plohu svakog u prikazu ili pritisnite **Odaberi** na popisu **Tijela**. Označite **Zadrži oba tijela** da ih ostavite pored rezultata.
- Booleova operacija zadržava svaku plohu na njezinoj točnoj površini i reže je novim obrisima obrezivanja duž presjeka. Redak rezultata daje izmjerene brojke: koliko su se točke motora tijela morale pomaknuti da sjednu na točne plohe (nikad više od tolerancije), koliko su točke presjeka blizu obje plohe (obično nekoliko milijunki milimetra), volumen i zatvaraju li se nove plohe ponovno kad se zašiju iz svojih točnih ploha. Volumeni se mjere na trokutima unutar tolerancije (0.05 mm osim ako ne postavite drugu), pa volumen kugle ili cilindra prikazuje se malo ispod točnog: manja tolerancija dolazi bliže. Booleova operacija koja se ne može čisto obaviti (tijela ništa ne dijele, obris bi se sjekao sam sa sobom) odbija se riječima i ništa ne mijenja. Jedna Booleova operacija je jedan korak **Poništi** ploče.
- U popisu **Tijela** **Razgrupiraj** zadržava plohe kao obične plohe; koš uklanja tijelo i njegove plohe.
- **Dodaj u model** (u popisu **Tijela**) stavlja kopiju tijela u model kao jednu zatvorenu grupu, njezine plohe kao trokute unutar 0.05 mm, u jednom koraku Poništi modela. Tada radi s vlastitim alatima Unija, Oduzmi i Presijeci modela, potisni/povuci i provjerom za 3D ispis; točno tijelo ostaje u ploči.

## Zaobljenja i zadebljavanje

**Zaobljenje između ploha** zaobljuje brid gdje se sastaju dvije plohe jednog tijela: odaberite dvije plohe (u prikazu ili s **Odaberi** u popisu), upišite **polumjer** i, za polumjer koji se mijenja duž brida, **polumjer na kraju** (0 zadržava jedan polumjer). Kugla tog polumjera kotrlja se duž brida dodirujući obje plohe; zaobljenje je točan kružni luk koji ostaje u svakoj točki, spojen u jednu plohu, a dvije plohe se obrezuju tamo gdje ih kugla dodiruje. Vanjski brid gubi materijal, unutarnji kut ga dobiva. Redak rezultata kaže što je izmjereno: koliko je ploha zaobljenja udaljena od kotrljajuće kugle između točaka iz kojih je izgrađena (točke se dodaju dok ne bude unutar četvrtine tolerancije), najveći kut između zaobljenja i svake plohe duž linija dodira, te iste brojke kao kod Unije. Polumjer koji ne odgovara (kugla bi napustila plohu, ili se plohe zakrivljuju strože od polumjera) odbija se, uz navođenje plohe, i ništa se ne mijenja.

**Zaobljenje više bridova** zaobljuje mnogo bridova u jednom koraku: odaberite dvije plohe prvog brida, zatim dvije plohe sljedećeg i tako dalje (ploha može biti u nekoliko parova, na primjer gornja ploha kutije u četiri od njih); svi bridovi dobivaju polumjer koji upišete. Svako zaobljenje se izračunava na tijelu kakvo je bilo, zatim se režu jedno za drugim, pa redoslijed nije važan. Gdje se dva zaobljena brida sastaju u kutu čiji ostali bridovi ostaju oštri, dva zaobljenja se spajaju duž svoje krivulje presjeka (nabor). Gdje se tri zaobljena vanjska brida triju ravnih ploha okomita jedan na drugi sastaju s jednim polumjerom, kut je jedan **komad kugle** tangentan na sva tri zaobljenja (isključite **Kutove** da dobijete kut s naborom); brid mora biti barem dvostruko dulji od polumjera tamo gdje su oba kraja takvi kutovi. Redak rezultata kaže koliko je bridova zaobljeno i kako su ispali kutovi. Unutarnji bridovi se također mogu zaobliti zajedno, ali rezultat koji se ne zatvara ponovno samo se prijavljuje (redak to kaže), pa ga provjerite.

**Zadebljaj u tijelo** daje plohi debljinu: odaberite je, upišite **debljinu**, i označite **Druga strana** da je proširite na drugu stranu. Odmaknuta ploha se prilagođava plohi i mjeri se prema njoj (redak rezultata daje najveću razliku od debljine); stijenke prate svaki brid i svaki obris obrezivanja. Ako se ploha zakrivljuje strože od debljine na toj strani, ili je neki drugi dio bliži od debljine, odbija se, uz navođenje plohe i mjesta, i ništa se ne mijenja.

## Poništi, datoteka, STEP i IGES

Ploča ima vlastite **Poništi** i **Ponovi** (jedan korak po naredbi). Plohe se spremaju u datoteku `.modelcraft` uz model; nisu dio poništavanja modela, kao ni materijali datoteke.

**STEP…** (AP242) i **IGES…** spremaju krivulje i plohe upravo onakve kakve jesu (B-spline krivulje i plohe, ništa pretvoreno u trokute). Svaka ploha je zasebna ploha sa svojim obrezivanjem; tijelo se zapisuje kao jedna zatvorena ljuska, a svaki brid dijele njegove dvije plohe kako drugi CAD programi očekuju (redak statusa kaže koliko je tijela tako izašlo). U IGES-u isto tijelo je jedan mnogostruki puni B-rep (entitet 186 nad zatvorenom ljuskom 514, plohe 510, petlje 508, jedan popis bridova 504 i jedan popis vrhova 502); tijelo čije se plohe ne podudaraju brid po brid zapisuje se kao zasebne plohe, a redak to kaže. **Uvezi…** čita takvo tijelo natrag kao tijelo, iz STEP-a i iz IGES-a. Čita krivulje i plohe zapisane na taj način te `.ccnurbs` skupove zakrpa; STEP tijela drugih programa otvaraju se kroz Datoteka › Uvezi kao mreže.

## Plohe iz skeniranja (obrnuto inženjerstvo)

Odaberite skenirani mrežu u modelu (ništa odabrano znači sve prikazano), otvorite **Plohe**, i u grupi **Skeniranje** odaberite **Prilagodi plohe skeniranju**. Alat traži **ravnine**, **cilindre**, **kugle** i **stošce** (točne plohe od kojih je izrađen obrađeni dio; svaki redak prikazuje polumjer ili polukut koji je našao), nalazi **zaobljenja** (zaobljene bridove i kutove: mali cilindar ili kuglu koji tangentno prelazi u dvije ili više drugih ploha, prikazan s polumjerom i plohama koje spaja), **zaobljenja ruba** (torus: zaobljeni brid gdje ravna ploha prelazi u cilindar ili stožac, prikazan s polumjerom i polumjerom prstena) i **promjenjiva zaobljenja** (zaobljeni brid čiji se polumjer mijenja duž njega, prikazan s polumjerom na svakom kraju), prilagođava **jednu slobodnu zakrpu** glatkom, blago zakrivljenom dijelu te reže svaku plohu prema obrisu dijela skeniranja iz kojeg je došla, pa rupe i kutovi ostaju. Opcije: **tolerancija** (koliko, u mm, točka skeniranja smije biti udaljena od ravnine ili cilindra i još pripadati mu, te cilj za slobodnu zakrpu), **najmanji dio** (udio površine plohe) i **najviše ploha**. Isto skeniranje i iste opcije uvijek daju iste plohe.

Rezultat je tablica, jedan redak po plohi: njezina vrsta, koliko je trokuta iz nje nastalo i pogreška **izmjerena od skeniranja do plohe** (rms, najveća i udio točaka unutar tolerancije). Mjerene točke su vrhovi skeniranja i sredina svakog trokuta. Pogreška se ne mjeri obrnuto (od plohe do skeniranja), pa ploha koja seže iza skeniranja to ne bi pokazala. Bilješka ispod tablice također kaže koliki je dio površine bio premalen za prilagodbu. U prikazu se točke skeniranja boje prema svojoj **karti odstupanja**: plavo na plohi, zeleno na pola tolerancije, crveno na toleranciji ili iznad (isključite oznaku **Prikaži kartu odstupanja** da je sakrijete). Dijelovi koji se savijaju sami u sebe (primjerice zatvorena cijev prilagođena slobodnim zakrpama) navode se kao neprilagođeni, nikad ne prisiljeni u jednu plohu.

**Spoji plohe u tijelo** zašiva svaku prikazanu plohu koja nije u tijelu u jedno zatvoreno tijelo. Plohe skeniranja se spajaju samo unutar vlastite pogreške skeniranja, pa isprobava najmanju udaljenost zašivanja koja zatvara (nikad više od **udaljenosti zašivanja** koju postavite) i odbija riječima kad se plohe ne zatvaraju. Nikad ne zakrpljuje prazninu. Kutija sa zaobljenim bridovima se zašiva kad su njezina zaobljenja pronađena kao zasebne plohe; udaljenost zašivanja koja je zatvorila nalazi se u rezultatu. Tijelo tada radi s alatima Unija, Oduzmi, Presijeci i **Dodaj u model**.

Što ne radi: **zaobljenje ruba** (torus) traži se samo oko osi već pronađenog cilindra ili stošca, a **promjenjivo zaobljenje** samo duž prilično ravnog brida (njegovi presjeci su rezani okomito na jedan smjer); drugdje ispadaju kao slobodne zakrpe kad su dovoljno glatke, a inače se izostavljaju. Kugle, stošci i zaobljenja traže se slučajnim uzorkovanjem, pa se vrlo mali (nekoliko trokuta) mogu propustiti. Karta odstupanja prikazuje udaljenost od skeniranja do ploha, a ne obrnuto. Vrlo veliki skenovi (preko 300.000 trokuta) ovdje se odbijaju. Plohe punog cilindra režu se oko rupa, a šav je postavljen tamo gdje nema rupe. Provjerite svaku plohu u odnosu na skeniranje prije oslanjanja na nju.

## Još nije izrađeno

Zaobljavanje bridova koji se sastaju u kutu zakrivljenih ploha ili s različitim polumjerima (miješanje vrhova), zaobljenje između ploha koje se ne sastaju, unutarnje zaobljenje koje završava na kosoj ili zakrivljenoj plohi, te Booleove operacije i zaobljenja izračunata na plohama bez trokuta (ovdje motor tijela radi na trokutima unutar tolerancije, a svaka točka se zatim vraća na točne plohe).
