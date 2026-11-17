---
title: Animiraj bilo koje svojstvo, oblikuj ga kao krive i mešaj isečke
summary: Radni prostor Animate postavlja ključeve za mesto, okretanje i veličinu objekta, za svetlinu, rasprostiranje i boju svetiljke, za objektiv i za ključeve oblika mreže; armature savijaju mrežu pomoću kostiju i obojenih težina; IK i ograničenja čine da kosti i objekti dosežu, gledaju, kopiraju, ostaju u granicama, vise ili prate druge; kruta tela padaju, slažu se i sudaraju i izračunavaju se u ključeve; upravljači postavljaju vrednost iz drugih; prikaz Krive na vremenskoj liniji oblikuje svaku promenu Bézier ručicama i ciklusima, a prikaz Isečci čuva animacije kao radnje koje ponovo postavljate i mešate.
keywords: fizika, kruto telo, kruta tela, simulacija, simulirati, pad, padati, gravitacija, sudar, sudariti, slaganje, odskok, trenje, izračunati, izračunato, ik, inverzna kinematika, ograničenje, ograničenja, gledaj ka, prati, cilj, kopiraj transformacije, kopiraj položaj, kopiraj rotaciju, ograniči rotaciju, granice, podređen, roditelj, prati putanju, putanja, pol, fabrik, lanac, armatura, armature, rig, rigovanje, kosti, kost, skelet, koža, obložiti, težine, slikanje težina, grupe temena, automatske težine, poza, režim poze, dvostruki kvaternion, linearno mešanje, ključevi oblika, ključ oblika, morf, morfovi, ciljevi morfa, mešanje oblika, izraz, upravljač, upravljači, izrazi, radni prostor animacije, animiraj, animacija, ključni kadar, ključ, ključevi, svojstvo, svojstva, transformacija, položaj, rotacija, skaliranje, svetiljka, svetlina, boja, objektiv, ugao vidnog polja, fov, grafikon, krive, kriva, bezier, ručice, tangenta, interpolacija, ciklus, ciklusi, ponavljanje, petlja, ping pong, pomeraj, dope sheet, izbor ključeva, izbor okvirom, kopiraj ključeve, nalepi ključeve, rastegni ključeve, skaliraj ključeve, isečci, radnje, nla, mešanje, mešati, uticaj, skladištenje
from: 16d8e12f
---

[Vremenska linija](topic:animation) pomera kameru i cele grupe i komponente. Radni prostor **Animate** postavlja ključeve za još toga, a vremenska linija dobija još dva prikaza za oblikovanje i ponovno korišćenje onoga što ste postavili.

## Otvaranje

Izaberite {{ui:Animiraj}} na listi radnih prostora na alatnoj traci. Vremenska linija se otvara ispod prikaza, alatna traka prikazuje grupe za animaciju ({{ui:Ključevi}}, {{ui:Pusti}}, {{ui:Vremenska linija}}), a panel desno navodi šta možete da ključujete na pokazivaču vremena.

## Postavljanje ključa za svojstvo

Panel na pokazivaču vremena navodi:

- **Izabrani objekat**: njegovi {{ui:Postavi}}, {{ui:Okretanje (°)}} i {{ui:Veličina}}, po tri broja za svaki. Upišite broj i pritisnite {{key:Enter}}: postavlja se ključ na pokazivaču vremena i objekat se tamo pomera. Romb pored reda postavlja ključ za vrednost kakva je sada; popunjen romb znači da na pokazivaču vremena već postoji ključ.
- **Svetiljke**: {{ui:Svetlina (lm)}} svake svetiljke, {{ui:Rasprostiranje (°)}} (reflektorske svetiljke) i {{ui:Boja}}.
- **Kamera**: {{ui:Ugao objektiva (°)}}, za zumiranje dok se kamera pomera.

{{ui:Ključ transformacije}} (ili {{key:I}}) odjednom postavlja ključ za mesto, okretanje i veličinu svake izabrane grupe ili komponente; {{ui:Ključ kamere}} (ili {{key:K}}) postavlja ključ za kameru. Kada je uključeno {{ui:Automatski ključ}}, grupa čiji su mesto, okretanje i veličina na ovaj način ključevima dobija novi ključ kad god je pomerite.

Okretanja su tri ugla, oko X, zatim Y, pa Z. Okretanje postavljeno preko 180° nastavlja u istom smeru (190° ostaje 190°, a ne −170°), pa točak može da se okrene nekoliko puta.

:::tip
Grupa za koju je {{ui:Ključ za izabrano}} postavljen na vremenskoj liniji ima ključeve za ceo položaj. Dugme krive u njenom redu pretvara ih u krive mesta, okretanja i veličine (isti položaj u svakom ključu), da biste ih oblikovali u {{ui:Krive}}.
:::

## Ključevi oblika (morfovi)

**Ključ oblika** je drugi oblik iste [mreže](topic:meshes): osmeh na licu, ispupčenje vrata, savijen list. Njegov klizač meša od mreže kakva jeste (0) do tog oblika (1); više ključeva se sabira.

1. Izaberite mrežu u radnom prostoru {{ui:Animiraj}}: panel prikazuje njene {{ui:Ključeve oblika}}.
2. Kliknite {{ui:Dodaj ključ oblika}}. ModelCraft prelazi u [radni prostor mreže](topic:mesh-edit) sa novim ključem u uređivanju: pomerajte tačke, izvlačite, oblikujte, pa mrežu pretvorite u oblik koji želite.
3. Vratite se na {{ui:Animiraj}} i kliknite {{ui:Gotovo}}. Mreža se vraća kakva je bila, a ključ čuva vašu izmenu.

Zatim prevucite klizač ključa (ili upišite vrednost) da ga pomešate. Romb postavlja vrednost na pokazivaču vremena, pa ključ može da raste i da se gubi tokom vremena; kada ima trag, nova vrednost se postavlja na pokazivaču vremena. Olovka ponovo menja oblik ključa (mreža ga prikazuje u celosti dok ne kliknete {{ui:Gotovo}}; {{ui:Otkaži}} ostavlja ključ onakvim kakav je bio), oko isključuje ključ, a korpa ga uklanja.

Teme koje dodate dok uređujete ključ pripada samoj mreži: ostaje tamo gde ste ga postavili, u svakom obliku.

:::note
Ključevi oblika pomeraju mrežu pre njenih [modifikatora](topic:modifiers): modifikator podele zaglađuje pomešani oblik. Renderovane slike i video snimci prikazuju ključeve na svakom kadru.
:::

## Armature: kosti koje savijaju mrežu

**Armatura** je skup kostiju unutar [mreže](topic:meshes). Postavite kosti u položaj i mreža ih prati, svaka tačka onoliko koliko kažu njene **težine**.

1. Izaberite mrežu u radnom prostoru {{ui:Animiraj}} i kliknite {{ui:Dodaj armaturu}} na panelu (ili {{ui:Dodaj kost}} u grupi {{ui:Rig}}): prva kost ide sredinom mreže od njenog dna.
2. Kada je kost izabrana, {{ui:Dodaj podređenu kost}} dodaje sledeću od njenog vrha. Na panelu podesite {{ui:Glava}}, {{ui:Vrh}}, {{ui:Uvrtanje (°)}} i {{ui:Visi sa}} za svaku kost; kost koja visi sa druge kreće se s njom. Isključite {{ui:Pomera mrežu}} za kost koja samo upravlja drugima.
3. Kliknite {{ui:Automatske težine}}: svaka kost preuzima tačke koje su joj najbliže, a uticaj se glatko širi preko mreže, pa tačke između dve kosti dele uticaj. {{ui:Samo najbliže kosti}} je brža i oštrija podela.

**Postavite** kosti u položaj pomoću {{ui:Poza}} ({{key:P}}): kliknite kost da je izaberete, prevucite da je okrenete oko ose prikaza, {{key:Shift}}-prevlačenjem da je pomerite. Ili upišite njeno {{ui:Postavi}}, {{ui:Okretanje (°)}} i {{ui:Veličina}} pod {{ui:Poza}}; okretanja su u sopstvenim osama kosti, od mesta gde miruje. Romboidi i {{ui:Zabeleži ceo položaj}} postavljaju položaj na pokazivaču vremena; kada kost već ima ključeve, njeno postavljanje ih dopunjuje. {{ui:Vrati ovu kost}} i {{ui:Vrati položaj}} vraćaju kosti u mirovanje.

**Bojenje težina** ({{key:W}}) za izabranu kost: mreža se prikazuje u mirovanju, a svaka strana je obojena prema tome koliko je ta kost drži: crveno sve, plavo ništa. Bojenjem dodajete uticaj ({{key:Mod}} ga oduzima, {{key:Shift}} zaglađuje); {{ui:Veličina (px)}} i {{ui:Jačina}} podešavaju četkicu. Uz {{ui:Zbir težina svake tačke ostaje 1}}, dajući jednoj kosti više, ostalima se isto oduzima. Svaki potez je jedan korak opoziva modela.

{{ui:Koža}} određuje kako se tačka između kostiju pomera: {{ui:Linearna (brza)}} meša pomeranja kostiju i malo steže savijen zglob; {{ui:Dvostruki kvaternion (čuva zapreminu u zglobovima)}} umesto toga okreće tačku oko zgloba, pa laktovi ili kolena zadržavaju debljinu (tada {{ui:Veličina}} kosti ne rasteže kožu).

:::note
Prvo dolaze ključevi oblika, zatim armatura, pa [modifikatori](topic:modifiers). Prikaz, slike i video snimci svi prikazuju postavljenu mrežu; težine mreže se čuvaju uz nju, a kosti i njihov položaj uz animaciju.
:::

## IK i ograničenja

**Ograničenje** pomera kost ili objekat posle njegovih ključeva, prema pravilu. Izaberite objekat (ili, u armaturi, kost) i dodajte jedno pod {{ui:Ograničenja za …}}; više ograničenja se izvršava redom kojim su navedena (strelice menjaju redosled), a svako ima {{ui:Koliko}} (od 0 do 1, sa ključem preko romba kao svako svojstvo) i prekidač uključeno/isključeno.

| Ograničenje | Za | Šta radi |
|---|---|---|
| {{ui:Dosezanje (IK)}} | Kosti | Kost i kosti sa kojih visi ({{ui:Kosti u lancu}}) se savijaju tako da njen vrh dosegne cilj. Sa dve kosti i {{ui:Pol (savijanje je ka njemu)}}, lakat ili koleno gleda ka polu; duži lanci se glatko savijaju. Kada je cilj van dometa, lanac pokazuje ravno ka njemu. |
| {{ui:Gledaj ka}} | Oboje | Okreće tako da {{ui:Osa koja pokazuje}} gleda ka cilju, a {{ui:Osa koja ostaje gore}} ostaje što bliže gore. |
| {{ui:Kopiraj transformacije}} | Oboje | Preuzima mesto, okretanje ili veličinu cilja: one koje su označene. |
| {{ui:Granice}} | Oboje | Zadržava sopstveno mesto, okretanje (stepeni) ili veličinu između {{ui:min}} i {{ui:maks}} po osi; ostavite par prazan da ta osa bude slobodna. |
| {{ui:Podređen}} | Oboje | Kreće se s ciljem kao da visi sa njega, od mesta gde su oba bila kada ste izabrali cilj. |
| {{ui:Prati putanju}} | Objekti | Stoji na [objektu krive](topic:curves) na {{ui:Duž krive}} (0 je njen početak, 1 kraj; postavite ključ da putuje), a uz {{ui:Okreni duž krive}} gleda duž nje. |

Cilj je drugi objekat u otvorenoj grupi, kost iste armature ili {{ui:Tačka}} koju upišete (tačka objekta je u koordinatama modela, a tačka kosti u koordinatama njene mreže). Za IK nogu postavite cilj tamo gde treba da bude stopalo i postavite ključ za cilj, ili postavite ključ za {{ui:Koliko}} da biste nogu prepustili između ključeva i IK-a.

:::tip
Objekat koji gleda u onaj koji prati putanju vidi ga na putanji: ModelCraft prvo izračuna ciljeve, bez obzira na redosled objekata.
:::

## Fizika: pad, slaganje i sudari

Pustite objekte da padnu i udare jedan u drugi, pa zadržite rezultat kao ključeve.

1. Izaberite grupu, komponentu ili mrežu i podesite njeno {{ui:Kruto telo}} pod {{ui:Fizika}}: {{ui:Pada i sudara se}} (kreće se) ili {{ui:Ostaje na mestu, smeta}} (sto, zid, rampa). Padajućem dajte njegov {{ui:Oblik}}, {{ui:Kutija (njene granice)}} ili {{ui:Lopta (zaobljeno oko granica)}}, zatim njegovu {{ui:Masa (kg)}}, {{ui:Trenje}} i {{ui:Odskok}} (0 je tup udar, 1 odskače nazad jednako visoko).
2. Pod {{ui:Ceo model}} podesite {{ui:Od (s)}} i {{ui:Do (s)}}, {{ui:Gravitacija (m/s², nadole)}} i da li postoji {{ui:Podloga na kojoj se sleće}} (i njena visina).
3. Kliknite {{ui:Izračunaj fiziku}} (na panelu ili u grupi {{ui:Fizika}}). Svaki padajući objekat dobija ključ mesta, okretanja i veličine na svakom kadru između dva vremena; pustite ga kao i svaku animaciju.

Ponovno izračunavanje zamenjuje te ključeve; {{ui:Ukloni izračunate ključeve}} ih skida. Objekti počinju u mirovanju, tamo gde ih njihovi ključevi, krive i ograničenja postavljaju u trenutku {{ui:Od (s)}} (pomeranje sa ključem pre toga ne prelazi u pad). Više {{ui:Koraka po kadru}} čini visoka slaganja stabilnijim; statusna traka kaže kada se nešto na kraju još kreće.

:::note
Oblici su kutije i lopte oko granica svakog objekta; kutija dodiruje svojim uglovima, sredinama ivica i sredinama strana, pa se kutije slažu i prevrću kako biste očekivali. Tkanina, tečnosti, zglobovi između objekata i tačni oblici nisu ugrađeni.
:::

## Upravljači

**Upravljač** postavlja ključ oblika iz drugih stvari, umesto rukom: otvorite upravljač ključa (dugme kalkulatora), napišite **izraz** i svakom imenu u njemu dajte ono što čita ({{ui:Čita}}): vreme u sekundama, kadar, mesto, okretanje ili veličinu položaja duž X, Y ili Z, svetlinu svetiljke ili drugi ključ oblika. Na primer, uz `v` koje čita okretanje vrata oko Z, `clamp(v / 90, 0, 1)` otvara oblik dok se vrata otvaraju.

Izrazi koriste brojeve, imena, `+ - * / % ^` i zagrade, i funkcije `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` sa `pi` i `e`. Greška se ukazuje i ništa se ne menja. Klizač ključa pod upravljačem pokazuje vrednost upravljača; upravljač ima prednost nad trakom ključa dok ga ne uklonite.

## Biranje i menjanje ključeva (prikaz Ključevi)

{{ui:Ključevi}} prikazuje red po traci: kameru, svaku pokretnu grupu i svako svojstvo („Svetiljka 2 · Svetlina (lm)“; ključevi svojstava su okrugli).

- Kliknite ključ da ga izaberete; {{key:Shift}}-klik ili {{key:Mod}}-klik dodaje ili uklanja ključeve iz izbora. {{key:Shift}}-prevlačenje preko redova crta okvir koji dodaje svaki ključ u njemu.
- Prevucite izabrani ključ da pomerite sve njih; {{key:Left}} / {{key:Right}} ih pomeraju za kadar ({{key:Shift}}: deset).
- {{key:Mod+C}} kopira izabrane ključeve, {{key:Mod+V}} ih nalepljuje od pokazivača vremena na iste trake (i druga kartica ModelCraft-a može da ih nalepi).
- {{ui:Istezanje}} razmiče izabrane ključeve od pokazivača vremena za broj pored njega (2 = dvostruko dalje; 0.5 ih primiče).
- Lista ublažavanja određuje kako se svaki izabrani ključ nastavlja dalje.

## Oblikovanje krivih (prikaz Krive)

{{ui:Krive}} je grafik svakog broja tokom vremena: vreme ide po horizontali, vrednost gore. Označite krive koje želite da prikažete na spisku levo (X, Y i Z su crvena, zelena i plava).

- Kliknite ključ (kvadrat) da ga izaberete, {{key:Shift}}-klik za još, ili prevucite okvir. Prevucite izabrani ključ da promenite njegovo vreme i vrednost; kada je izabrano više, prevlačenje ih pomera duž vremena.
- Izabrani ključ pokazuje svoje dve **ručice**. Prevucite jednu da oblikujete krivu s te strane. {{ui:Ručice}} kažu kako se ponašaju: {{ui:Automatski}} (glatka kriva kroz ključeve oko njega), {{ui:Usmerene ka sledećem ključu}}, {{ui:Poravnate}} (dve ostaju u pravoj liniji, pa kriva nema ugao) ili {{ui:Slobodno}}.
- {{ui:Iz izabranih ključeva}} određuje kako se svaki izabrani ključ nastavlja na sledeći: {{ui:Kriva (ručice)}}, {{ui:Zaglađivanje}}, {{ui:Ravnomerno}}, {{ui:Usporavanje na početku i kraju}} ili {{ui:Zadrži}}.
- {{ui:Pre}} i {{ui:Posle}} određuju šta kriva radi van svojih ključeva: {{ui:Zadrži}} (ostaje na prvoj ili poslednjoj vrednosti), {{ui:Ponavljaj}}, {{ui:Napred pa nazad}} ili {{ui:Ponavljaj i nastavi}} (svako ponavljanje počinje tamo gde se prethodno završilo: točak se kotrlja, hodač nastavlja da hoda).
- Točkić miša zumira ({{key:Mod}}: samo vrednosti, {{key:Shift}}: samo vreme); prevucite srednjim dugmetom ili uz {{key:Alt}} da pomerate pogled; {{ui:Prikaži sve}} ili {{key:Home}} uklapa sve prikazane krive. Kliknite na prazan prostor da pomerite pokazivač vremena tamo. {{key:Delete}} briše izabrane ključeve.

Ručice se drže tako da se ne ukrštaju u vremenu, pa kriva nikada ne ide unazad.

## Ponovno korišćenje animacija (prikaz Isečci)

**Isečak** pušta sačuvanu animaciju (**radnju**) na vremenskoj liniji. Isečci se mešaju redom, donji redovi preko gornjih; sopstvene trake vremenske linije idu iznad svakog isečka.

1. Postavite ključeve za grupe i svetiljke kao obično, pa kliknite {{ui:Napravi isečak}} u {{ui:Isečci}} i dajte radnji ime. Trake postaju radnja, a isečak je pušta tamo gde su bile (kamera ostaje na vremenskoj liniji).
2. Da je ponovo upotrebite, izaberite radnju i kliknite {{ui:Dodaj isečak}}: novi isečak počinje na pokazivaču vremena.
3. Prevucite isečak duž njegovog reda da ga pomerite; kliknite na njega da podesite {{ui:Početak (s)}}, {{ui:Brzina}} (2 = dvostruko brže), {{ui:Ponavljanja}}, {{ui:Koliko}} (0 do 1), {{ui:Mešanje}} ({{ui:Zameni}}, ili {{ui:Dodaj preko}} isečaka pre njega), {{ui:Van isečka}} (ništa, zadrži njegov kraj ili zadrži oba kraja) i {{ui:Utišaj}}. Strelice menjaju redosled; korpa ga uklanja (radnja koju nijedan isečak više ne koristi ide s njim).

Isečak sa manje od pune vrednosti {{ui:Koliko}} meša se sa onim što je ispod njega: isečkom pre njega, ili svetiljkom ili položajem kakvi su bez animacije.

## Šta se gde pušta

| Šta | U prikazu | U renderovanom video snimku |
|---|---|---|
| Ključevi kamere, ugao objektiva uz ključeve kamere | Da | Da |
| Mesto, okretanje i veličina (ključevi, krive, isečci) | Da | Da |
| Svetlina, rasprostiranje i boja svetiljke | Da | Još ne: video koristi svetiljke kakve su na početku (vidi [šta još nije ugrađeno](topic:not-built-yet)) |
| Ugao objektiva bez ključeva kamere | Da | Još ne: postavite i ključeve kamere |
| Ključevi oblika i upravljači | Da | Da |
| Armature (postavljene mreže) | Da | Da |
| IK i ograničenja | Da | Da |
| Izračunata fizika (ključevi) | Da | Da |

Sve se čuva u datoteci `.modelcraft` zajedno sa ostatkom animacije, a {{ui:Opozovi}} i {{ui:Ponovi}} na vremenskoj liniji vraćaju bilo šta od toga.
