---
title: Slobodne površi (NURBS)
summary: Glatke krive i površi za školjke proizvoda, karoserije automobila i trupove brodova — loft, prevlačenje, mreže krivih, zakrpe od četiri ivice, prelazi, obrezivanja — s G0, G1 i G2 kontinuitetom mjerenim na tačnim površima, tijela sa spajanjem, oduzimanjem i presijecanjem, prikaz zebra pruga i zakrivljenosti, plohe prilagođene skenu s izmjerenom greškom, te STEP ili IGES datoteke.
keywords: nurbs, skeniranje, reverzni inženjering, prilagođavanje, mreža u površ, oblak tačaka, stl, obrezivanje, obrezan, rupa, rez, tijelo, tijela, bulova, spajanje, oduzimanje, presijecanje, razlika, sašivanje, zatvoreno, slobodna forma, freeform, površ, površi, b-spline, bspline, kriva, spline, loft, prevlačenje, šina, mreža, coons, zakrpa, prelaz, poklapanje, kontinuitet, g0, g1, g2, tangenta, zakrivljenost, zebra, kontrolne tačke, čvorovi, stepen, step, iges, klasa a
from: 09887405
---

Panel **Površine** pravi glatke krive i površi onoga tipa koji se koristi za školjke proizvoda, karoserije automobila i trupove brodova: NURBS, ista matematika koju koriste drugi alati za modeliranje površi. Sve se mjeri na tačnim površima, nikada na trouglovima koje vidiš. Veličine u panelu su u **milimetrima**, bez obzira na jedinicu koju model prikazuje.

Otvori ga iz desnog panela: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Model koji već ima površi otvara ga sam.

## Kako radi naredba

1. Pritisni naredbu (na primjer **Loft**). Panel kaže šta još treba: tačke, krive, ivicu površi ili kraj krive.
2. Odaberi ih: klikni ih u 3D pogledu ili pritisni **Odaberi** (ili dugmad za ivicu i kraj) pored svake u listi. Za ivicu klikni blizu te ivice površi.
3. Provjeri opcije (stepen, tolerancija, kontinuitet, …) i pritisni **Napravi**.

Krive iz tačaka uzimaju tačke upisane po jedna u redu (`x, y, z` u mm), ili **Odaberi tačke u pogledu**: svaki klik koristi isto hvatanje kao alati za crtanje; pritisni <kbd>Enter</kbd> ili dvaput klikni da završiš, <kbd>Esc</kbd> da zaustaviš.

## Krive

- **Kriva kroz tačke** prolazi kroz svaku tačku. **Kriva po kontrolnim tačkama** prati mrežu tačaka umjesto toga.
- **Umetni čvor**, **Povisi stepen** i **Snizi stepen** mijenjaju način opisa krive bez pomjeranja (snižavanje se odbija kada bi kriva pomjerila više od tolerancije). **Ponovo izgradi krivu** joj daje novi broj kontrolnih tačaka i kaže koliko se pomjerila.
- **Poklopi krivu** čini da se kraj jedne krive sastane s drugom uz G0 (dodir), G1 (isti smjer) ili G2 (i ista zakrivljenost). **Prelazna kriva** dodaje novu krivu između dva kraja.
- **Spoji krive** i **Podijeli krivu**.

## Površi

- **Loft** kroz dvije ili više krivih, **Linearna površ** između dvije, **Ekstrudiraj krivu**, **Rotiraj krivu**.
- **Prevlačenje po jednoj šini** nosi profil duž putanje bez uvijanja; **Prevlačenje po dvije šine** drži krajeve profila na obje šine. Prevlačenja su prilagođena: statusna linija kaže koliko je ostalo blizu tačnog prevlačenja.
- **Površ iz mreže krivih** prolazi kroz mrežu krivih (prvi izbori su profili, ostali vodilice). **Zakrpa iz četiri ivice** popunjava četiri krive koje se sastaju na uglovima.
- **Poklopi površ** čini da se ivica površi sastane sa susjedom uz G0, G1 ili G2; **Prelazna površ** dodaje površ između dvije ivice.
- **Ofset površi**, **Produži površ** (površ se nastavlja kako je išla), **Ponovo izgradi površ**, te čvorovi i stepen za površi.

## Provjera kvaliteta

Tabela **Zajedničke ivice** navodi svaku ivicu koju dvije površi dijele, s razmakom (mm), uglom između njih (°) i skokom zakrivljenosti (1/mm), te kaže da li to čini G0, G1 ili G2. Ivica lošija od one koju si tražio također je u **Problemima** (dugme ⚠ u traci aplikacije) s popravkom **Poklopi**.

**Prikaži kao** › **Zebra pruge** i **Zakrivljenost (Gausova)** dolaze iz tačne površi: pruge koje se bez prekida nastavljaju preko ivice znače G1; pruge koje zadržavaju i svoju širinu znače G2. Zakrivljenost je plava tamo gdje je površ sedlo, crvena tamo gdje je kupola, a bijela tamo gdje je ravna. **Kontrolne tačke** crtaju kontrolne mreže.

G0–G2 se mjere u 33 tačke po ivici. **G3 i kvalitet „klase A” se ne mjere** i ne tvrdi se da su.

## Obrezivanje površi

Grupa **Obreži** siječe površ bez promjene njenog oblika: površ zadržava sve svoje kontrolne tačke, a prikazuje, broji i zapisuje se samo dio unutar obrisa. **Obreži na pravougaonik** i **Obreži krugom** rade na udjelu (0 do 1) površi u svakom smjeru, pa im ne treba odabir u pogledu; **Obreži krivom** uzima zatvorenu krivu koja leži na površi (projicira se u površ i odbija se riječima ako je otvorena ili je više od tolerancije udaljena). Označi **Presijeci rupu** da ukloniš unutrašnjost obrisa; ostavi neoznačeno da zadržiš samo unutrašnjost. Površ može imati jedan zadržani obris i bilo koji broj rupa; obris koji siječe drugi se odbija. **Ukloni obrezivanje** ponovo prikazuje cijelu površ. Presječene ivice tačno prate obris; Poništi panela vraća obrezivanje kao svaki drugi korak.

STEP nosi obrezivanje kao granice plohe, a IGES kao obrezanu površ (entitet 144); oba ga čitaju nazad.

## Tijela i Bulove operacije

Grupa **Tijela** pretvara površi u zatvorena tijela i kombinuje ih. Tijelo ovdje je skup površi panela koje zajedno zatvaraju zapreminu; njegove plohe ostaju tačne NURBS površi s obrezivanjima.

- **Tijelo kvadra**, **Tijelo valjka** i **Tijelo kugle** prave jedno od upisanih veličina (u mm): kvadar sa šest ravnih ploha, valjak s okruglom stranom i dva ravna kraja obrezana na krug, kugla od jedne rotirane površi.
- **Tijelo iz površi** grupiše površi koje si sam napravio. Odaberi ih, ili ne odaberi nijednu da koristiš sve prikazane površi koje još nisu u tijelu. Sašivaju se unutar tolerancije: ako se ne zatvore, ništa se ne mijenja, a panel kaže koliko ivica ostaje otvoreno i koliko blizu se moraju sastati.
- **Spoji**, **Oduzmi** (drugo tijelo se oduzima od prvog) i **Presijeci** (samo ono što oba dijele) uzimaju dva tijela: klikni plohu svakog u pogledu ili pritisni **Odaberi** u listi **Tijela**. Označi **Zadrži oba tijela** da ih ostaviš pored rezultata.

Bulova operacija zadržava svaku plohu na njenoj tačnoj površi i siječe je novim obrisima obrezivanja duž presjeka. Linija rezultata daje izmjerene brojeve: koliko su se tačke motora tijela morale pomjeriti da sjednu na tačne površi (nikada više od tolerancije), koliko su tačke presjeka blizu obje površi (obično nekoliko milionitih dijelova milimetra), zapreminu i da li se nove plohe ponovo zatvaraju kada se sašiju iz svojih tačnih površi. Zapremine se mjere na trouglovima unutar tolerancije (0,05 mm osim ako ne postaviš drugu), pa zapremina sfere ili valjka ispada malo manja od tačne: manja tolerancija se više približava. Bulova operacija koja se ne može obaviti čisto (tijela ništa ne dijele, obris bi sam sebe presjekao) se odbija riječima i ništa ne mijenja. Jedna Bulova operacija je jedan korak panelovog **Poništi**.

U listi **Tijela**, **Razgrupiši** zadržava plohe kao obične površi; kanta uklanja tijelo i njegove plohe.

**Dodaj u model** (u listi **Tijela**) stavlja kopiju tijela u model kao jednu zatvorenu grupu, njegove plohe kao trouglove unutar 0,05 mm, u jednom koraku Poništi modela. Zatim radi s vlastitim **Spoji**, **Oduzmi** i **Presijeci** modela, guranjem/povlačenjem i provjerom za 3D štampanje; tačno tijelo ostaje u panelu.

## Zaobljenja i zadebljavanje

**Zaobljenje između ploha** zaobljuje ivicu na kojoj se sastaju dvije plohe jednog tijela: odaberi dvije plohe (u pogledu ili s **Odaberi** u listi), upiši **poluprečnik** i, za poluprečnik koji se mijenja duž ivice, **poluprečnik na kraju** (0 zadržava jedan poluprečnik). Kugla tog poluprečnika se kotrlja duž ivice dodirujući obje plohe; zaobljenje je tačan kružni luk koji ostaje u svakoj tački, spojen u jednu površ, a dvije plohe su obrezane gdje ih kugla dodiruje. Vanjska ivica gubi materijal, a unutrašnji ugao ga dobija. Linija rezultata kaže šta je izmjereno: koliko je površ zaobljenja udaljena od kotrljajuće kugle između tačaka iz kojih je napravljena (dodaju se tačke dok ne bude unutar četvrtine tolerancije), najveći ugao između zaobljenja i svake plohe duž linija dodira, te iste brojeve kao kod Spajanja. Poluprečnik koji ne odgovara (kugla bi napustila plohu, ili se ploha savija oštrije od poluprečnika) se odbija, uz imenovanje plohe, i ništa se ne mijenja.

**Zaobli više ivica** zaobljuje mnogo ivica u jednom koraku: odaberi dvije plohe prve ivice, pa dvije plohe sljedeće, i tako dalje (ploha može biti u više parova, na primjer gornja ploha kvadra u četiri od njih); sve ivice dobijaju poluprečnik koji upišeš. Svako zaobljenje se izračunava na tijelu kakvo je bilo, pa se onda redom sijeku, tako da redoslijed nije bitan. Gdje se dvije zaobljene ivice sastaju u uglu čije ostale ivice ostaju oštre, dva zaobljenja se spajaju duž svoje presječne krive (nabora). Gdje se tri zaobljene vanjske ivice tri ravne plohe međusobno pod pravim uglom sastaju s jednim poluprečnikom, ugao je jedna **zakrpa sfere** tangentna na sva tri zaobljenja (isključi **Uglove** da dobiješ ugao s naborom); ivica mora biti najmanje dvostruko duža od poluprečnika tamo gdje su oba njena kraja takvi uglovi. Linija rezultata kaže koliko je ivica zaobljeno i kako su ispali uglovi. Unutrašnje ivice se također mogu zaobljavati zajedno, ali se rezultat koji se ponovo ne zatvara samo prijavljuje (linija to kaže), pa ga provjeri.

**Pretvori u tijelo** daje površi debljinu: odaberi je, upiši **debljinu** i označi **Druga strana** da je proširiš na drugu stranu. Ofset ploha se prilagođava površi i mjeri se u odnosu na nju (linija rezultata daje najveću razliku od debljine); zidovi prate svaku ivicu i svaki obris obrezivanja. Ako površ ima zakrivljenost oštriju od debljine na toj strani, ili je neki drugi dio bliži od debljine, odbija se uz imenovanje površi i mjesta, i ništa se ne mijenja.

## Poništi, datoteka, STEP i IGES

Panel ima svoje **Poništi** i **Ponovi** (jedan korak po naredbi). Površi se čuvaju u datoteci `.modelcraft` uz model; nisu dio modelovog poništavanja, kao ni materijali datoteke.

**STEP…** (AP242) i **IGES…** čuvaju krive i površi tačno kakve jesu (B-spline krive i površi, ništa pretvoreno u trouglove). Svaka površ je sopstvena ploha s obrezivanjem; tijelo se zapisuje kao jedna zatvorena ljuska, svaka ivica dijeljena između svoje dvije plohe kako to drugi CAD programi očekuju (statusna linija kaže koliko je tijela tako izašlo). U IGES-u isto tijelo je jedan mnogostruki čvrsti B-rep (entitet 186 nad zatvorenom ljuskom 514, plohe 510, petlje 508, jedna lista ivica 504 i jedna lista vrhova 502); tijelo čije se plohe ne podudaraju ivica po ivica zapisuje se kao zasebne plohe, a linija to kaže. **Uvezi…** čita takvo tijelo nazad kao tijelo, iz STEP-a i iz IGES-a. Čita krive i površi zapisane na ovaj način, i skupove zakrpa `.ccnurbs`; STEP tijela iz drugih programa se otvaraju kroz Datoteka › Uvezi kao mreže.

## Površi iz skena (reverzni inženjering)

Odaberi skenirani mrežu u modelu (ništa odabrano znači sve prikazano), otvori **Površine**, pa u grupi **Skeniranje** izaberi **Prilagodi površi skenu**. Alat traži **ravni**, **valjke**, **sfere** i **konuse** (tačne površi od kojih se sastoji obrađeni dio; svaki red pokazuje poluprečnik ili polovinu ugla koju je našao), nalazi **zaobljenja** (zaobljene ivice i uglove: mali valjak ili sfera koji tangentno ulazi u dvije ili više drugih ploha, prikazan s poluprečnikom i plohama koje spaja), **obodna zaobljenja** (torus: zaobljena ivica gdje se ravna ploha sastaje s valjkom ili konusom, prikazana s poluprečnikom i poluprečnikom prstena) i **promjenjiva zaobljenja** (zaobljena ivica čiji se poluprečnik mijenja duž nje, prikazana s poluprečnikom na svakom kraju), uklapa **jednu slobodnu zakrpu** na glatki, blago zakrivljeni dio, te svaku plohu siječe do obrisa dijela skena iz kojeg je došla, tako da rupe i uglovi ostaju. Opcije: **tolerancija** (koliko, u mm, tačka skena smije biti udaljena od ravni ili valjka a da još pripada njoj, i cilj za slobodnu zakrpu), **najmanji dio** (udio površine) i **najviše ploha**. Isti sken i iste opcije uvijek daju iste plohe.

Rezultat je tabela, jedan red po plohi: njena vrsta, koliko trouglova je iz nje, i greška **izmjerena od skena do plohe** (srednja kvadratna, najveća i udio tačaka unutar tolerancije). Mjere se vrhovi skena i sredina svakog trougla. Greška se ne mjeri obrnuto (ploha do skena), pa se ploha koja seže dalje od skena ne bi pokazala. Napomena ispod tabele također kaže koliki je dio površine bio premali za uklapanje. U pogledu su tačke skena obojene po **mapi odstupanja**: plave na plohi, zelene na pola tolerancije, crvene na toleranciji ili većoj (isključi **Prikaži mapu odstupanja** da je sakriješ). Dijelovi koji se savijaju sami u sebe (na primjer zatvorena cijev prilagođena slobodnim zakrpama) navode se kao neuklopljeni, nikada se ne tjeraju u jednu površ.

**Sašij površi u tijelo** sašiva svaku prikazanu površ koja nije u tijelu u jedno zatvoreno tijelo. Plohe skena se spajaju samo unutar greške samog skena, pa pokušava najmanju udaljenost spoja koja zatvara (nikada više od **udaljenosti sašivanja** koju postaviš) i odbija se riječima kada se plohe ne zatvaraju. Nikada ne zakrpljuje prazninu. Kvadar sa zaobljenim ivicama se sašiva kada su njegova zaobljenja pronađena kao sopstvene plohe; udaljenost spoja koja je zatvorila je u rezultatu. Tijelo tada radi sa Spoji, Oduzmi, Presijeci i **Dodaj u model**.

Šta ne radi: **obodno zaobljenje** (torus) se traži samo oko ose valjka ili konusa koji je već nađen, a **promjenjivo zaobljenje** samo duž prilično prave ivice (njegovi presjeci su odsječeni okomito na jedan smjer); drugdje ispadaju kao slobodne zakrpe kada su dovoljno glatke, a inače se izostavljaju; sfere, konusi i zaobljenja se nalaze slučajnim uzorkovanjem, pa se vrlo mali (nekoliko trouglova) mogu propustiti; mapa odstupanja prikazuje udaljenost od skena do ploha, a ne obrnuto; vrlo veliki skenovi (preko 300.000 trouglova) se ovdje odbijaju. Plohe valjka s punim okretom se režu oko rupa, a šav se stavlja tamo gdje nema rupe. Provjeri svaku plohu u odnosu na svoj sken prije nego što se osloniš na nju.

## Još nije izrađeno

Zaobljavanje ivica koje se sastaju u uglu zakrivljenih ploha ili s različitim poluprečnicima (miješanje vrhova), zaobljenje između ploha koje se ne sastaju, unutrašnje zaobljenje koje se završava na kosoj ili zakrivljenoj plohi, te Bulove operacije i zaobljenja izračunata na površima bez trouglova (ovdje motor tijela radi na trouglovima unutar tolerancije, a svaka tačka se nakon toga vraća na tačne površi).
