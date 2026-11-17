---
title: Slobodne površi (NURBS)
summary: Glatke krive i površi za školjke proizvoda, karoserije automobila i trupove brodova — loft, sweep, mreže krivih, zakrpe od četiri ivice, prelazi, obrezivanja — s kontinuitetom G0, G1 i G2 izmerenim na tačnim površima, čvrsta tela sa spojem, oduzimanjem i presekom, prikazi zebra i zakrivljenosti, površi prilagođene skeniranju uz izmerenu grešku, i STEP ili IGES datoteke.
keywords: nurbs, skeniranje, reverzni inženjering, prilagođavanje, mreža u površ, oblak tačaka, stl, obrezivanje, obrezana, rupa, sečenje, telo, tela, bulova, spoj, oduzmi, presek, razlika, sašivanje, zatvoreno, slobodna forma, površ, površi, b-spline, bspline, kriva, spline, loft, sweep, šina, mreža, coons, zakrpa, prelaz, poklapanje, kontinuitet, g0, g1, g2, tangenta, zakrivljenost, zebra, kontrolne tačke, čvorovi, stepen, step, iges, klasa a
from: 09887405
---

Panel **Površi** pravi glatke krive i površi onakve kakve se koriste za školjke proizvoda, karoserije automobila i trupove brodova: NURBS, ista matematika koju koriste drugi alati za površi. Sve se meri na tačnim površima, nikad na trouglovima koje vidite. Veličine u panelu su u **milimetrima**, bez obzira na jedinicu koju model prikazuje.

Otvorite ga iz desnog panela: {{ui:Površi}} › {{ui:Otvori panel Površi}}. Model koji već ima površi ga otvara sam.

## Kako radi komanda

1. Pritisnite komandu (na primer **Loft**). Panel kaže šta još treba: tačke, krive, ivicu površi ili kraj krive.
2. Izaberite ih: kliknite ih u 3D prikazu, ili pritisnite **Izaberi** (ili dugmad za ivicu i kraj) pored svake stavke na listi. Za ivicu, kliknite blizu te ivice površi.
3. Proverite opcije (stepen, tolerancija, kontinuitet, …) i pritisnite **Napravi**.

Krive iz tačaka uzimaju tačke upisane jednu po liniji (`x, y, z` u mm), ili **Izaberi tačke u prikazu**: svaki klik koristi isto hvatanje kao alati za crtanje; pritisnite <kbd>Enter</kbd> ili dvaput kliknite da završite, <kbd>Esc</kbd> da zaustavite.

## Krive

- **Kriva kroz tačke** prolazi kroz svaku tačku. **Kriva kontrolnim tačkama** umesto toga prati mrežu tačaka.
- **Umetni čvor**, **Podigni stepen** i **Spusti stepen** menjaju način opisivanja krive bez pomeranja (spuštanje se odbija kad bi se kriva pomerila više od tolerancije). **Ponovo izgradi krivu** joj daje novi broj kontrolnih tačaka i kaže koliko se pomerila.
- **Poklopi krivu** pravi da se kraj jedne krive sretne s krajem druge sa G0 (dodir), G1 (isti pravac) ili G2 (i ista zakrivljenost). **Prelaz krive** dodaje novu krivu između dva kraja.
- **Spajanje krivih** i **Deljenje krive**.

## Površi

- **Loft** kroz dve ili više krivih, **Pravolinijska površ** između dve, **Izvlačenje krive**, **Rotiranje krive**.
- **Provlačenje duž jedne šine** nosi profil duž putanje bez uvijanja; **Provlačenje duž dve šine** drži krajeve profila na obe šine. Provlačenja su prilagođena: statusna linija kaže koliko je ostalo blizu pravog provlačenja.
- **Površ iz mreže krivih** prolazi kroz mrežu krivih (prvi izbori su profili, ostali vodilice). **Zakrpa od četiri ivice** popunjava četiri krive koje se sastaju u uglovima.
- **Poklopi površ** tera ivicu površi da se sretne sa susedom sa G0, G1 ili G2; **Prelaz površi** dodaje površ između dve ivice.
- **Ofset površi**, **Produži površ** (površ nastavlja kako je išla), **Ponovo izgradi površ**, i čvorovi i stepen za površi.

## Provera kvaliteta

Tabela **Zajedničke ivice** navodi svaku ivicu koju dve površi dele, s razmakom (mm), uglom između njih (°) i skokom zakrivljenosti (1/mm), i kaže da li je to G0, G1 ili G2. Ivica lošija od tražene je i u **Problemima** (dugme ⚠ u traci aplikacije) uz popravku **Poklopi**.

**Prikaži kao** › **Zebra pruge** i **Zakrivljenost (Gausova)** dolaze iz tačne površi: pruge koje se neprekidno nastavljaju preko ivice znače G1; pruge koje zadržavaju i širinu znače G2. Zakrivljenost je plava gde je površ sedlo, crvena gde je kupola i bela gde je ravna. **Kontrolne tačke** crtaju kontrolne mreže.

G0–G2 se mere u 33 tačke po ivici. **G3 i kvalitet „klase A” se ne mere** i ne tvrdi se da su postignuti.

## Obrezivanje površi

Grupa **Obrezivanje** seče površ bez promene oblika: površ zadržava sve kontrolne tačke, a prikazuje, broji i zapisuje se samo deo unutar obrisa. **Obreži pravougaonikom** i **Obreži krugom** rade na udelu (0 do 1) površi u svakom pravcu, pa ne traže biranje u prikazu; **Obreži krivom** uzima zatvorenu krivu koja leži na površi (projektuje se na površ, a odbija se uz poruku ako je otvorena ili je udaljena više od tolerancije). Označite **Isecite rupu** da uklonite unutrašnjost obrisa; ostavite neoznačeno da zadržite samo unutrašnjost. Površ može imati jedan zadržani obris i proizvoljan broj rupa; obris koji seče drugi se odbija. **Ukloni obrezivanje** prikazuje celu površ ponovo. Isečene ivice prate obris tačno; Opozovi u panelu vraća obrezivanje kao i svaki drugi korak.

STEP čuva obrezivanje kao granice lica, a IGES kao obrezanu površ (entitet 144); oba ga čitaju nazad.

## Čvrsta tela i Bulove operacije

Grupa **Čvrsta tela** pretvara površi u zatvorena tela i spaja ih. Čvrsto telo ovde je skup površi panela koje zajedno zatvaraju zapreminu; njegove površi ostaju tačne NURBS površi sa obrezivanjima.

- **Kutija čvrsto telo**, **Valjak čvrsto telo** i **Sfera čvrsto telo** prave telo iz upisanih veličina (u mm): kutija od šest ravnih površi, valjak od okrugle strane i dva ravna kraja obrezana na krug, sfera od jedne obrnute površi.
- **Čvrsto telo od površi** grupiše površi koje ste sami napravili. Izaberite ih, ili ne birajte nijednu da koristite sve prikazane površi koje još nisu u telu. Sašivaju se u okviru tolerancije: ako se ne zatvore, ništa se ne menja i panel kaže koliko ivica ostaje otvoreno i koliko blizu moraju da se sretnu.
- **Spoj**, **Oduzmi** (drugo telo se oduzima od prvog) i **Presek** (samo ono što oba dele) uzimaju dva tela: kliknite jednu površ svakog u prikazu, ili pritisnite **Izaberi** u listi **Čvrsta tela**. Označite **Zadrži dva tela** da ih ostavite pored rezultata.

Bulova operacija zadržava svaku površ na njenoj tačnoj površi i seče je novim obrisima obrezivanja duž preseka. Red rezultata daje izmerene brojeve: koliko su tačke motora čvrstih tela morale da se pomere da bi sedele na tačnim površima (nikad više od tolerancije), koliko su tačke preseka blizu obe površi (obično nekoliko milionitih delova milimetra), zapreminu i da li se nove površi ponovo zatvaraju kad se sašiju iz svojih tačnih površi. Zapremine se mere na trouglovima unutar tolerancije (0,05 mm osim ako ne postavite drugu), pa zapremina sfere ili valjka ispadne malo manja od tačne: manja tolerancija je bliža. Bulova operacija koja se ne može uraditi čisto (tela nemaju ništa zajedničko, obris bi se sekao sam sa sobom) odbija se uz objašnjenje i ništa ne menja. Jedna Bulova operacija je jedan korak **Opozovi** panela.

U listi **Čvrsta tela**, **Razgrupiši** zadržava površi kao obične površi; **Kanta** uklanja telo i njegove površi.

**Dodaj u model** (u listi **Čvrsta tela**) stavlja kopiju tela u model kao jednu zatvorenu grupu, njene površi kao trouglove unutar 0,05 mm, u jednom koraku Opozovi modela. Tada radi s modelovim **Spoj**, **Oduzmi** i **Presek**, guranjem/vučenjem i proverom za 3D štampu; tačno telo ostaje u panelu.

## Zaobljenja i zadebljavanje

**Zaobljenje između površi** zaobljuje ivicu gde se dve površi jednog tela sreću: izaberite dve površi (u prikazu ili s **Izaberi** u listi), upišite **poluprečnik** i, za poluprečnik koji se menja duž ivice, **poluprečnik na kraju** (0 zadržava jedan poluprečnik). Lopta tog poluprečnika se kotrlja duž ivice dodirujući obe površi; zaobljenje je tačan kružni luk koji ostaje u svakoj tački, spojen u jednu površ, a dve površi su obrezane tamo gde ih lopta dodiruje. Spoljna ivica gubi materijal, a unutrašnji ugao dobija. Red rezultata daje izmerene vrednosti: koliko je površ zaobljenja udaljena od kotrljajuće lopte između tačaka od kojih je napravljena (dodaju se tačke dok ne bude unutar četvrtine tolerancije), najveći ugao između zaobljenja i svake površi duž linija dodira, i iste brojeve kao kod Spoja. Poluprečnik koji ne staje (lopta bi napustila površ, ili površ krivi tesnije od poluprečnika) odbija se uz navođenje površi, i ništa se ne menja.

**Zaobli više ivica** zaobljuje mnogo ivica u jednom koraku: izaberite dve površi prve ivice, pa dve površi sledeće, i tako dalje (površ može biti u nekoliko parova); sve ivice dobijaju poluprečnik koji upišete. Svako zaobljenje se računa na telu kakvo je bilo, pa se seku jedno za drugim, tako da redosled nije važan. Gde se dva zaobljena ruba sretnu u uglu čije ostale ivice ostaju oštre, dva zaobljenja se spajaju duž njihove krive preseka (nabor). Gde se tri zaobljene spoljne ivice tri ravne površi koje su pod pravim uglom sretnu sa jednim poluprečnikom, ugao je jedna **zakrpa sfere** tangentna na sva tri zaobljenja (isključite **Uglove** da dobijete ugao sa naborom); ivica mora biti bar dva puta duža od poluprečnika na oba kraja takvih uglova. Red rezultata kaže koliko je ivica zaobljeno i kako su ispali uglovi. Unutrašnje ivice mogu se zaobliti zajedno, ali se rezultat koji se ne zatvara ponovo samo prijavljuje (red to kaže), pa ga proverite.

**Zadebljaj u čvrsto telo** daje površi debljinu: izaberite je, upišite **debljinu** i označite **Drugu stranu** da je rastete na drugu stranu. Ofset površ se prilagođava površi i meri se u odnosu na nju (red rezultata daje najveću razliku od debljine); zidovi prate svaku ivicu i svaki obris obrezivanja. Ako površ krivi tesnije od debljine na toj strani, ili je neki drugi deo bliži od debljine, odbija se uz navođenje površi i mesta, i ništa se ne menja.

## Opozovi, datoteka, STEP i IGES

Panel ima sopstveni **Opozovi** i **Ponovi** (jedan korak po komandi). Površi se čuvaju u datoteci `.modelcraft` uz model; nisu deo sopstvenog opoziva modela, kao ni materijali datoteke.

**STEP…** (AP242) i **IGES…** čuvaju krive i površi tačno kakve jesu (B-spline krive i površi, ništa pretvoreno u trouglove). Svaka površ je sopstveno lice sa svojim obrezivanjem; čvrsto telo se piše kao jedna zatvorena ljuska, svaka ivica deljena između dve površi kako to drugi CAD programi očekuju (statusna linija kaže koliko je tela tako izvezeno). U IGES-u isto telo je jedan mnogostruki čvrsti B-rep (entitet 186 nad zatvorenom ljuskom 514, površi 510, petlje 508, jedna lista ivica 504 i jedna lista temena 502); telo čije se površi ne uparuju ivicu po ivicu piše se kao odvojene površi, i red to kaže. **Uvezi…** čita takvo telo nazad kao telo, iz STEP-a i iz IGES-a. Čita krive i površi napisane na ovaj način, i skupove zakrpa `.ccnurbs`; STEP tela drugih programa otvaraju se kroz Datoteka › Uvezi kao mreže.

## Površi iz skeniranja (reverzni inženjering)

Izaberite skeniranu mrežu u modelu (ako ništa nije izabrano, uzima se sve prikazano), otvorite **Površi**, i u grupi **Skeniranje** izaberite **Prilagodi površi skeniranju**. Alat traži **ravni**, **cilindre**, **sfere** i **konuse** (tačne površi od kojih se sastoji obrađeni deo; svaki red prikazuje poluprečnik ili polovinu ugla koju je našao), nalazi **zaobljenja** (zaobljene ivice i uglovi: mali cilindar ili sfera koja tangentno ulazi u dve ili više drugih površi, prikazana sa poluprečnikom i površima koje spaja), **obodna zaobljenja** (torus: zaobljena ivica gde ravna površ susreće cilindar ili konus, prikazana sa svojim poluprečnikom i poluprečnikom prstena) i **promenljiva zaobljenja** (zaobljena ivica čiji se poluprečnik menja duž nje, prikazana sa poluprečnikom na svakom kraju), prilagođava **jednu slobodnu zakrpu** glatkom, blago zakrivljenom delu, i seče svaku površ na obris dela skeniranja iz kog je potekla, tako da rupe i uglovi ostaju. Opcije: **tolerancija** (koliko, u mm, tačka skeniranja sme biti udaljena od ravni ili cilindra a da i dalje pripada njemu, i cilj za slobodnu zakrpu), **najmanji deo** (udeo površine) i **najviše površi**. Isto skeniranje i iste opcije uvek daju iste površi.

Rezultat je tabela, jedan red po površi: njena vrsta, koliko trouglova je dao i greška **izmerena od skeniranja do površi** (rms, najveća i udeo tačaka unutar tolerancije). Izmerene tačke su temena skeniranja i središta svakog trougla. Greška se ne meri obrnuto (od površi do skeniranja), pa površ koja seže dalje od skeniranja ne bi bila vidljiva. Napomena ispod tabele kaže i koliki deo površine je bio premal za prilagođavanje. U prikazu su tačke skeniranja obojene po svojoj **mapi odstupanja**: plavo na površi, zeleno na pola tolerancije, crveno na toleranciji ili više (isključite **Prikaži mapu odstupanja** da je sakrijete). Delovi koji se preklapaju sami na sebe (na primer zatvorena cev prilagođena slobodnim zakrpama) navode se kao neprilagođeni, nikad se ne tera u jednu površ.

**Sašij površi u čvrsto telo** šiva svaku prikazanu površ koja nije u telu u jedno zatvoreno telo. Površi skeniranja se sastaju samo unutar sopstvene greške skeniranja, pa proba najmanje rastojanje spoja koje zatvara (nikad više od **rastojanja šivanja** koje postavite) i odbija uz objašnjenje kad se površi ne zatvaraju. Nikad ne krpi prazninu. Kutija sa zaobljenim ivicama se šiva kad su njena zaobljenja nađena kao sopstvene površi; rastojanje spoja koje je zatvorilo je u rezultatu. Telo tada radi sa Spoj, Oduzmi, Presek i **Dodaj u model**.

Šta ne radi: **obodno zaobljenje** (torus) se traži samo oko ose cilindra ili konusa koji su već nađeni, a **promenljivo zaobljenje** samo duž prilično prave ivice (njegovi preseci su sečeni upravno na jedan pravac); drugde ispadaju kao slobodne zakrpe kad su dovoljno glatke, a inače se izostavljaju; sfere, konusi i zaobljenja se nalaze slučajnim uzorkovanjem, pa jedno jako malo (nekoliko trouglova) može da bude propušteno; mapa odstupanja prikazuje rastojanje od skeniranja do površi, a ne obrnuto; vrlo velika skeniranja (preko 300.000 trouglova) se ovde odbijaju. Površi punog okreta cilindra se seku oko rupa, a šav je postavljen tamo gde nema rupe. Proverite svaku površ naspram skeniranja pre nego što se oslonite na nju.

## Još nije napravljeno

Zaobljavanje ivica koje se sastaju u uglu zakrivljenih površi ili sa različitim poluprečnicima (mešanje temena), zaobljenje između površi koje se ne sastaju, unutrašnje zaobljenje koje se završava na kosoj ili zakrivljenoj površi, i Bulove operacije i zaobljenja izračunata na površima bez trouglova (ovde motor čvrstih tela radi na trouglovima unutar tolerancije, a svaka tačka se zatim vraća na tačne površi).
