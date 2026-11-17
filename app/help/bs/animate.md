---
title: Animiraj bilo koje svojstvo, oblikuj ga krivama i miješaj isječke
summary: Radni prostor Animiraj postavlja ključeve za položaj, okret i veličinu objekta, svjetlinu, širenje i boju svjetiljke, objektiv i ključeve oblika mreže; armature savijaju mrežu kostima i obojenim težinama; IK i ograničenja tjeraju kosti i objekte da dosegnu, pogledaju, kopiraju, ostanu unutar granica, vise o drugima ili prate druge; kruta tijela padaju, slažu se i sudaraju i zapečena su kao ključevi; pokretači postavljaju vrijednost prema drugima; prikaz Krive vremenske linije oblikuje svaku promjenu Bézier ručicama i ciklusima, a prikaz Isječci čuva animacije kao radnje koje ponovo postavljate i miješate.
keywords: fizika, kruto tijelo, kruta tijela, simulacija, simulirati, pustiti da padne, pad, gravitacija, sudar, sudaranje, slaganje, odskok, trenje, zapeci, zapečeno, ik, inverzna kinematika, ograničenje, ograničenja, gledaj prema, prati cilj, cilj, kopiraj transformacije, kopiraj položaj, kopiraj rotaciju, ograniči rotaciju, granice, podređen, roditelj, prati putanju, putanja, pol, fabrik, lanac, armatura, armature, rig, riganje, kosti, kost, skelet, koža, kožni prikaz, težine, bojenje težina, grupe vrhova, automatske težine, toplotna kost, poza, režim poze, dual quaternion, linearno miješanje, ključevi oblika, ključ oblika, morf, morfovi, ciljevi morfa, mješavina oblika, blendshape, izraz lica, pokretač, pokretači, izrazi, radni prostor animacije, animiraj, animacija, ključni kadar, ključ, ključevi, svojstvo, svojstva, transformacija, položaj, rotacija, veličina, svjetiljka, svjetlina, boja, objektiv, ugao vidnog polja, fov, grafički uređivač, krive, kriva, bezier, ručice, tangenta, interpolacija, ciklus, ciklusi, ponavljanje, petlja, ping pong, pomak, lista kadrova, odabir ključeva, izbor okvirom, kopiranje ključeva, lijepljenje ključeva, rastezanje ključeva, skaliranje ključeva, isječci, radnje, nla, miješanje, mješavina, utjecaj, sklanjanje
from: 16d8e12f
---

[Vremenska linija](topic:animation) pomjera kameru i cijele grupe i komponente. Radni prostor **Animiraj** postavlja ključeve i za više od toga, a vremenska linija dobija još dva prikaza za oblikovanje i ponovno korištenje onoga što ste postavili.

## Otvaranje

Odaberi {{ui:Animiraj}} na listi radnih prostora na traci sa alatima. Vremenska linija se otvara ispod prikaza, traka sa alatima prikazuje grupe Animiraj ({{ui:Ključevi}}, {{ui:Pusti}}, {{ui:Vremenska linija}}), a panel s desne strane navodi šta možete postaviti na pokazivaču vremena.

## Postavi svojstvo

Panel navodi, na pokazivaču vremena:

- **Odabrani objekat**: njegov {{ui:Postavi}}, {{ui:Rotacija (°)}} i {{ui:Veličina}}, po tri broja za svaki. Upiši broj i pritisni {{key:Enter}}: postavlja se ključ na pokazivaču vremena i objekat se tamo pomjera. Romb pored reda postavlja ključ prema trenutnoj vrijednosti; ispunjen romb znači da na pokazivaču vremena već postoji ključ.
- **Svjetiljke**: {{ui:Svjetlina (lm)}}, {{ui:Širenje (°)}} (reflektorske svjetiljke) i {{ui:Boja}} svake svjetiljke.
- **Kamera**: {{ui:Ugao objektiva (°)}}, za zumiranje dok se kamera pomjera.

{{ui:Ključ transformacije}} (ili {{key:I}}) postavlja položaj, rotaciju i veličinu svake odabrane grupe ili komponente odjednom; {{ui:Ključna kamera}} (ili {{key:K}}) postavlja ključ kamere. Kad je uključen {{ui:Automatski ključ}}, grupa čiji su položaj, rotacija i veličina postavljeni na ovaj način dobija novi ključ svaki put kad je pomjeriš.

Okreti su tri ugla, oko X, zatim Y, pa Z. Okret postavljen preko 180° nastavlja isti smjer (190° ostaje 190°, a ne −170°), tako da se točak može okretati više puta.

:::tip
Grupa postavljena pomoću {{ui:Ključ za odabrano}} na vremenskoj liniji ima ključeve za cijeli položaj. Dugme krive na njenom redu pretvara ih u krive položaja, rotacije i veličine (isti položaj na svakom ključu), da ih možete oblikovati u {{ui:Krive}}.
:::

## Ključevi oblika (morfovi)

**Ključ oblika** je drugi oblik iste [mreže](topic:meshes): osmijeh na licu, ispupčenje vrata, savijen list. Njegov klizač miješa mrežu kakva jeste (0) i taj oblik (1); više ključeva se sabira.

1. Odaberi mrežu u radnom prostoru Animiraj: panel prikazuje njene {{ui:Ključevi oblika}}.
2. Klikni {{ui:Dodaj ključ oblika}}. ModelCraft prelazi u [radni prostor Mreža](topic:mesh-edit) s novim ključem u uređivanju: pomjeraj tačke, izvlači, oblikuj. Pretvori mrežu u oblik koji želiš.
3. Vrati se u {{ui:Animiraj}} i klikni {{ui:Gotovo}}. Mreža se vraća kakva je bila, a ključ zadržava tvoju izmjenu.

Zatim prevuci klizač ključa (ili upiši vrijednost) da ga miješaš. Romb postavlja vrijednost ključa na pokazivaču vremena, pa ključ može postepeno rasti i nestajati; kad ima putanju, nova vrijednost se postavlja na pokazivaču vremena. Olovka ponovo uređuje oblik ključa (mreža ga prikazuje u potpunosti do {{ui:Gotovo}}; {{ui:Otkaži}} ostavlja ključ kakav je bio), oko isključuje ključ, a kanta ga uklanja.

Vrh koji dodaš dok uređuješ ključ pripada samoj mreži: ostaje tamo gdje si ga postavio, u svakom obliku.

:::note
Ključevi oblika pomjeraju mrežu prije njenih [modifikatora](topic:modifiers): modifikator Podjela glača miješani oblik. Renderovane slike i video snimci prikazuju ključeve na svakom kadru.
:::

## Armature: kosti koje savijaju mrežu

**Armatura** je skup kostiju unutar [mreže](topic:meshes). Postavi kosti i mreža ih prati, svaka tačka onoliko koliko kažu njene **težine**.

1. Odaberi mrežu u radnom prostoru Animiraj i klikni {{ui:Dodaj armaturu}} u panelu (ili {{ui:Dodaj kost}} u grupi {{ui:Rig}}): prva kost ide sredinom mreže od svog podnožja.
2. Kad je kost odabrana, {{ui:Dodaj podređenu kost}} dodaje sljedeću od njenog vrha. Postavi {{ui:Glava}}, {{ui:Kraj}}, {{ui:Uvijanje (°)}} i {{ui:Vezana za}} za bilo koju kost u panelu; kost koja visi o drugoj kreće se s njom. Odznači {{ui:Pomjera mrežu}} za kost koja samo upravlja drugima.
3. Klikni {{ui:Automatske težine}}: svaka kost preuzima tačke najbliže sebi, a taj uticaj se glatko širi preko mreže, pa tačke između dvije kosti dijele težinu. {{ui:Samo najbliže kosti}} je brža, oštrija podjela.

**Postavi** kosti pomoću {{ui:Poza}} ({{key:P}}): klikni kost da je odabereš, prevuci da je okreneš oko ose prikaza, {{key:Shift}}-prevlačenje da je pomjeriš. Ili upiši njen {{ui:Postavi}}, {{ui:Rotacija (°)}} i {{ui:Veličina}} pod {{ui:Poza}}; uglovi su u sopstvenim osama kosti, od mjesta gdje leži. Romb i {{ui:Postavi ključeve za cijelu pozu}} postavljaju pozu na pokazivaču vremena; kad kost ima ključeve, pomicanje je automatski postavlja tu. {{ui:Vrati ovu kost}} i {{ui:Vrati pozu}} vraćaju kosti u mirovanje.

**Boji težine** ({{key:W}}) za odabranu kost: mreža se prikazuje u mirovanju, a svaka površina je obojena prema tome koliko je kost drži: crveno sve, plavo ništa. Boji da dodaš držanje ({{key:Mod}} ga oduzima, {{key:Shift}} zaglađuje); {{ui:Veličina (px)}} i {{ui:Jačina}} podešavaju četkicu. Uz {{ui:Zadrži da zbir težina svake tačke bude 1}}, davanje više težine jednoj kosti uzima isto od ostalih. Svaki potez je jedan korak poništavanja modela.

{{ui:Koža}} bira kako se tačka između kostiju pomjera: {{ui:Linearno (brzo)}} miješa pomjeranja kostiju i malo stišće savijeni zglob; {{ui:Dual quaternion (čuva volumen u zglobovima)}} umjesto toga okreće tačku oko zgloba, pa lakat ili koljeno zadržavaju debljinu (tada {{ui:Veličina}} kosti ne rasteže kožu).

:::note
Prvo dolaze ključevi oblika, zatim armatura, pa [modifikatori](topic:modifiers). Prikaz, slike i video snimci pokazuju mrežu u pozi; težine mreže se čuvaju uz nju, a kosti i njihova poza uz animaciju.
:::

## IK i ograničenja

**Ograničenje** pomjera kost ili objekat nakon njegovih ključeva, prema pravilu. Odaberi objekat (ili, u armaturi, kost) i dodaj ga pod {{ui:Ograničenja za …}}; više ograničenja se izvršava redom kojim su navedena (strelice to mijenjaju), a svako ima {{ui:Koliko}} (0 do 1, postavlja se rombom kao i svako svojstvo) i prekidač uključeno/isključeno.

| Ograničenje | Za | Šta radi |
|---|---|---|
| {{ui:Dosezanje (IK)}} | Kosti | Kost i kosti o kojima visi ({{ui:Kosti u lancu}}) se savijaju tako da joj vrh dostigne cilj. Uz dvije kosti i {{ui:Pol (savijanje ide prema njemu)}}, lakat ili koljeno gleda prema polu; duži lanci se glatko savijaju. Van dosega, lanac gleda ravno u cilj. |
| {{ui:Gledaj prema}} | Oba | Okreće se tako da {{ui:Osa koja pokazuje}} gleda u cilj, a {{ui:Osa koja ostaje gore}} ostaje što bliže gore. |
| {{ui:Kopiraj transformacije}} | Oba | Preuzima položaj, rotaciju ili veličinu cilja, one koje su označene. |
| {{ui:Granice}} | Oba | Drži sopstveni položaj, rotaciju (stepeni) ili veličinu između {{ui:min}} i {{ui:max}} po osi; ostavi par praznim da ta osa bude slobodna. |
| {{ui:Podređen objektu}} | Oba | Kreće se s ciljem kao da visi o njemu, od mjesta gdje su oba bila kad si odabrao cilj. |
| {{ui:Prati putanju}} | Objekti | Sjedi na [objektu krive](topic:curves) na {{ui:Duž krive}} (0 je njegov početak, 1 kraj; postavi ključ da putuje), a uz {{ui:Okreni duž krive}} gleda duž nje. |

Cilj je drugi objekat u otvorenoj grupi, kost iste armature ili {{ui:Tačka}} koju upišeš (tačka objekta je u koordinatama modela, a tačka kosti u koordinatama njene mreže). Za IK nogu stavi cilj tamo gdje treba biti stopalo i postavi ključ za cilj, ili postavi ključ za {{ui:Koliko}} da noga između ključeva prelazi s ključeva na IK.

:::tip
Objekat koji gleda u onaj koji prati putanju vidi ga na putanji: ModelCraft prvo izračunava ciljeve, bez obzira na redoslijed objekata.
:::

## Fizika: pad, slaganje i sudari

Pusti objekte da padaju i udaraju jedni o druge, pa rezultat zadrži kao ključeve.

1. Odaberi grupu, komponentu ili mrežu i postavi njeno {{ui:Kruto tijelo}} pod {{ui:Fizika}}: {{ui:Pada i sudara se}} (pomjera se) ili {{ui:Stoji na mjestu, smeta drugima}} (sto, zid, rampa). Padajućem daj {{ui:Oblik}}, {{ui:Kutija (njene granice)}} ili {{ui:Lopta (zaobljeno oko granica)}}, zatim njegovu {{ui:Masa (kg)}}, {{ui:Trenje}} i {{ui:Odskok}} (0 tupo udara, 1 odskače nazad jednako visoko).
2. Pod {{ui:Cijeli model}} podesi {{ui:Od (s)}} i {{ui:Do (s)}}, {{ui:Gravitacija (m/s², prema dolje)}} i da li postoji {{ui:Podloga na koju se slijeće}} (i njena visina).
3. Klikni {{ui:Zapeci fiziku}} (u panelu ili u grupi {{ui:Fizika}}). Svaki padajući objekat dobija ključ položaja, rotacije i veličine na svakom kadru između dva vremena; pusti ga kao svaku drugu animaciju.

Ponovno zapečenje zamjenjuje te ključeve; {{ui:Ukloni zapečene ključeve}} ih uklanja. Objekti počinju u mirovanju, tamo gdje ih njihovi ključevi, krive i ograničenja postave na {{ui:Od (s)}} (pomjeranje zadano prije pada se ne nastavlja u padu). Više {{ui:Koraka po kadru}} održava visoke gomile stabilnijim; statusna traka kaže kad se nešto još uvijek pomjera na kraju.

:::note
Oblici su kutije i lopte oko granica svakog objekta; kutija dodiruje uglovima, sredinama ivica i sredinama površina, pa se kutije slažu i prevrću kako biste očekivali. Tkanina, fluidi, zglobovi između objekata i tačni oblici nisu izgrađeni.
:::

## Pokretači

**Pokretač** postavlja ključ oblika na osnovu drugih stvari umjesto ručno: otvori pokretač ključa (dugme s kalkulatorom), napiši **izraz** i daj svakom imenu u njemu ono što čita ({{ui:Čita}}): vrijeme u sekundama, kadar, položaj, rotaciju ili veličinu duž X, Y ili Z, svjetlinu svjetiljke ili drugi ključ oblika. Na primjer, uz `v` koji čita rotaciju vrata oko Z, `clamp(v / 90, 0, 1)` otvara oblik dok se vrata otvaraju.

Izrazi koriste brojeve, imena, `+ - * / % ^` i zagrade, te funkcije `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` uz `pi` i `e`. Greška se ističe i ništa se ne mijenja. Klizač upravljanog ključa prikazuje vrijednost pokretača; pokretač ima prednost nad putanjom ključa dok ga ne uklonite.

## Odabir i izmjena ključeva (prikaz Ključevi)

{{ui:Ključevi}} prikazuje red po putanji: kameru, svaku pokretnu grupu i svako svojstvo ("Svjetiljka 2 · Svjetlina (lm)"; ključevi svojstava su okrugli).

- Klikni ključ da ga odabereš; {{key:Shift}}-klik ili {{key:Mod}}-klik dodaje ili uklanja ključeve iz izbora. {{key:Shift}}-prevlačenje preko redova crta okvir koji dodaje svaki ključ u njemu.
- Prevuci odabrani ključ da pomjeriš sve njih; {{key:Left}} / {{key:Right}} ih pomjeraju za kadar ({{key:Shift}}: deset).
- {{key:Mod+C}} kopira odabrane ključeve, {{key:Mod+V}} ih lijepi od pokazivača vremena na iste putanje (i drugi ModelCraft tab ih može zalijepiti).
- {{ui:Rastegni}} razmiče odabrane ključeve od pokazivača vremena za broj pored njega (2 = dvostruko dalje; 0.5 ih primiče).
- Lista ublažavanja podešava kako se svaki odabrani ključ kreće dalje.

## Oblikovanje krivih (prikaz Krive)

{{ui:Krive}} je grafikon svakog broja kroz vrijeme: vrijeme ide duž, vrijednost gore. Označi krive koje treba prikazati na listi lijevo (X, Y i Z su crvena, zelena i plava).

- Klikni ključ (kvadrat) da ga odabereš, {{key:Shift}}-klik za još, ili prevuci okvir. Prevuci odabrani ključ da promijeniš njegovo vrijeme i vrijednost; s više odabranih, prevlačenje ih pomjera kroz vrijeme.
- Odabrani ključ prikazuje svoje dvije **ručice**. Prevuci jednu da oblikuješ krivu s te strane. {{ui:Ručice}} kaže kako se ponašaju: {{ui:Automatski}} (glatka kriva kroz okolne ključeve), {{ui:Usmjerene prema sljedećem ključu}}, {{ui:Poravnate}} (dvije ostaju na pravoj liniji, pa kriva nema ugao) ili {{ui:Slobodno}}.
- {{ui:Iz odabranih ključeva}} podešava kako se svaki odabrani ključ kreće do sljedećeg: {{ui:Kriva (ručice)}}, {{ui:Zaglađivanje}}, {{ui:Ravnomjerno}}, {{ui:Usporeno na početku i kraju}} ili {{ui:Zadrži}}.
- {{ui:Prije}} i {{ui:Poslije}} određuju šta kriva radi izvan svojih ključeva: {{ui:Zadrži}} (ostaje na prvoj ili posljednjoj vrijednosti), {{ui:Ponavljanje}}, {{ui:Naprijed-nazad}} ili {{ui:Ponavljaj i nastavi}} (svako ponavljanje počinje tamo gdje je prethodno završilo: točak nastavlja da se kotrlja, hodač nastavlja da hoda).
- Točkić zumira ({{key:Mod}}: samo vrijednosti; {{key:Shift}}: samo vrijeme); prevuci srednjim dugmetom ili uz {{key:Alt}} za pomjeranje pogleda; {{ui:Prikaži sve}} ili {{key:Home}} uklapa sve prikazane krive. Klikni na prazan prostor da pomjeriš pokazivač vremena tamo. {{key:Delete}} briše odabrane ključeve.

Ručice se ne smiju ukrštati u vremenu, pa kriva nikad ne ide unazad.

## Ponovno korištenje animacija (prikaz Isječci)

**Isječak** pušta sačuvanu animaciju (**radnju**) na vremenskoj liniji. Isječci se miješaju redom, donji redovi preko gornjih; vlastite putanje vremenske linije idu iznad svakog isječka.

1. Postavi ključeve za grupe i svjetiljke kao i obično, zatim klikni {{ui:Napravi isječak}} u {{ui:Isječci}} i daj radnji ime. Putanje postaju radnja, a isječak je pušta tamo gdje su bile (kamera ostaje na vremenskoj liniji).
2. Da je ponovo koristiš, odaberi radnju i klikni {{ui:Dodaj isječak}}: novi isječak počinje na pokazivaču vremena.
3. Prevuci isječak duž njegovog reda da ga pomjeriš; klikni ga da podesiš {{ui:Početak (s)}}, {{ui:Brzina}} (2 = dvostruko brže), {{ui:Ponavljanja}}, {{ui:Koliko}} (0 do 1), {{ui:Miješanje}} ({{ui:Zamijeni}}, ili {{ui:Dodaj preko}} prethodnih isječaka), {{ui:Van isječka}} (ništa, zadrži njegov kraj ili zadrži oba kraja) i {{ui:Utišaj}}. Strelice mijenjaju redoslijed; kanta ga uklanja (radnja koju nijedan isječak više ne koristi ide s njim).

Isječak s manje od punog {{ui:Koliko}} se miješa s onim što je ispod njega: prethodnim isječkom, ili svjetiljkom odnosno položajem kakav je bez animacije.

## Šta se gdje pušta

| Šta | U prikazu | U renderovanom video snimku |
|---|---|---|
| Ključevi kamere, ugao objektiva uz ključeve kamere | Da | Da |
| Položaj, rotacija i veličina (ključevi, krive, isječci) | Da | Da |
| Svjetlina, širenje i boja svjetiljke | Da | Još ne: video koristi svjetiljke kakve jesu kad počne (vidi [šta još nije izgrađeno](topic:not-built-yet)) |
| Ugao objektiva bez ključeva kamere | Da | Još ne: postavi ključ i kameri |
| Ključevi oblika i pokretači | Da | Da |
| Armature (pozirane mreže) | Da | Da |
| IK i ograničenja | Da | Da |
| Zapečena fizika (ključevi) | Da | Da |

Sve se čuva u datoteci `.modelcraft` zajedno s ostatkom animacije, a {{ui:Poništi}} i {{ui:Ponovi}} na vremenskoj liniji vraćaju bilo koji od tih koraka.
