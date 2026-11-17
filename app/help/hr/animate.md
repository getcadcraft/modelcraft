---
title: Animirajte bilo koje svojstvo, oblikujte ga krivuljama i miješajte klipove
summary: Radni prostor Animacija ključa položaj, zakret i veličinu objekta, svjetlinu, raspršenje i boju svjetiljke, leću i ključeve oblika mreže; kosturi savijaju mrežu kostima i obojanim težinama; IK i ograničenja čine da kosti i objekti dosežu, gledaju prema, kopiraju, ostaju unutar granica, vise ili slijede druge; kruta tijela padaju, slažu se i sudaraju te se pretvaraju u ključeve; upravljači postavljaju vrijednost prema drugima; pogled Krivulje na vremenskoj crti oblikuje svaku promjenu Bézier ručkama i ciklusima, a pogled Klipovi sprema animacije kao akcije koje ponovno postavljate i miješate.
keywords: fizika, kruto tijelo, kruta tijela, simulacija, simulirati, pad, padati, gravitacija, sudar, sudarati se, slaganje, odskakanje, trenje, ispeci, ispečeno, ik, inverzna kinematika, ograničenje, ograničenja, gledaj prema, prati putanju, kopiraj transformacije, kopiraj položaj, kopiraj rotaciju, ograničenje rotacije, granice, podređeno, roditelj, putanja, pol, fabrik, lanac, kostur, kosturi, rig, rigging, kosti, kost, skelet, koža, skiniranje, težine, slikanje težina, grupe vrhova, automatske težine, poza, način poze, dualni kvaternion, linearno miješanje, ključevi oblika, ključ oblika, morph, morfovi, ciljevi morfa, oblici za miješanje, lice, izraz, upravljač, upravljači, izrazi, radni prostor animacija, animirati, animacija, ključni okvir, ključ, ključevi, svojstvo, svojstva, transformacija, položaj, rotacija, veličina, svjetiljka, svjetlina, boja, leća, kut vidnog polja, fov, editor grafa, krivulje, krivulja, bezier, ručke, tangenta, interpolacija, ciklus, ciklusi, ponavljanje, petlja, ping pong, pomak, dope sheet, odabir ključeva, box select, kopiraj ključeve, zalijepi ključeve, razvuci ključeve, skaliraj ključeve, klipovi, akcije, nla, miješanje, miješati, utjecaj, stash
from: 16d8e12f
---

[vremenska crta](topic:animation) pomiče kameru te cijele grupe i komponente. Radni prostor **Animacija** ključa više od toga, a vremenska crta dobiva dva dodatna pogleda za oblikovanje i ponovno korištenje onoga što ste ključali.

## Otvorite ga

Odaberite {{ui:Animacija}} na popisu radnih prostora na alatnoj traci. Vremenska crta se otvara ispod pogleda, alatna traka prikazuje grupe za animaciju ({{ui:Ključevi}}, {{ui:Reproduciraj}}, {{ui:Vremenska crta}}), a ploča s desne strane navodi što možete ključati na pokazivaču vremena.

## Ključanje svojstva

Ploča na pokazivaču vremena navodi:

- **Odabrani objekt**: njegov {{ui:Postavi}}, {{ui:Zakretanje (°)}} i {{ui:Veličina}}, po tri broja za svaki. Upišite broj i pritisnite {{key:Enter}}: ključ se postavlja na pokazivaču vremena i objekt se tamo pomiče. Romb pored retka ključa vrijednost onakvu kakva je sada; ispunjeni romb znači da na pokazivaču vremena već postoji ključ.
- **Svjetiljke**: {{ui:Svjetlina (lm)}}, {{ui:Raspršenje (°)}} (reflektorske svjetiljke) i {{ui:Boja}} svake svjetiljke.
- **Kamera**: {{ui:Kut leće (°)}}, za zumiranje dok se kamera pomiče.

{{ui:Ključ transformacije}} (ili {{key:I}}) ključa položaj, zakret i veličinu svake odabrane grupe ili komponente odjednom; {{ui:Ključ kamere}} (ili {{key:K}}) ključa kameru. Uz uključen {{ui:Automatski ključ}}, grupa čiji su položaj, zakret i veličina ključani na ovaj način dobiva novi ključ svaki put kad je pomaknete.

Zakreti su tri kuta, oko X, zatim Y, pa Z. Zakret ključan preko 180° nastavlja istim smjerom (190° ostaje 190°, a ne −170°), pa se kotač može okretati nekoliko puta.

:::tip
Grupa ključana s {{ui:Ključ odabira}} na vremenskoj crti ima ključeve cijelog položaja. Gumb krivulje u njezinu retku pretvara ih u krivulje položaja, zakreta i veličine (isti položaj na svakom ključu), pa ih možete oblikovati u {{ui:Krivulje}}.
:::

## Ključevi oblika (morfovi)

**Ključ oblika** je drugi oblik iste [mreže](topic:meshes): osmijeh na licu, ispupčenje vrata, savijeni list. Njegov klizač miješa mrežu kakva jest (0) s tim oblikom (1); više ključeva se zbraja.

1. Odaberite mrežu u radnom prostoru Animacija: ploča prikazuje njezine {{ui:Ključevi oblika}}.
2. Kliknite {{ui:Dodaj ključ oblika}}. ModelCraft prelazi u [radni prostor za mreže](topic:mesh-edit) s novim ključem u uređivanju: pomičite točke, izvlačite, oblikujte. Promijenite mrežu u oblik koji želite.
3. Vratite se na {{ui:Animacija}} i kliknite {{ui:Gotovo}}. Mreža se vraća kakva je bila, a ključ zadržava vašu promjenu.

Zatim povucite klizač ključa (ili upišite vrijednost) da ga umiješate. Romb ključa postavlja vrijednost na pokazivaču vremena, pa ključ može postupno rasti i nestajati; kad ima putanju, nova vrijednost se ključa na pokazivaču vremena. Olovka ponovno uređuje oblik ključa (mreža ga prikazuje u cijelosti do {{ui:Gotovo}}; {{ui:Odustani}} ostavlja ključ kakav je bio), oko isključuje ključ, a kanta ga uklanja.

Vrh koji dodate dok uređujete ključ pripada samoj mreži: ostaje tamo gdje ste ga postavili, u svakom obliku.

:::note
Ključevi oblika pomiču mrežu prije njezinih [modifikatora](topic:modifiers): modifikator Subdivision zaglađuje umiješani oblik. Renderirane slike i videozapisi prikazuju ključeve na svakoj sličici.
:::

## Kosturi: kosti koje savijaju mrežu

**Kostur** je skup kostiju unutar [mreže](topic:meshes). Postavite kosti i mreža ih slijedi, svaka točka onoliko koliko kažu njezine **težine**.

1. Odaberite mrežu u radnom prostoru Animacija i kliknite {{ui:Dodaj kostur}} na ploči (ili {{ui:Dodaj kost}} u grupi {{ui:Kostur}}): prva kost ide od svog podnožja kroz sredinu mreže.
2. Uz odabranu kost, {{ui:Dodaj podređenu kost}} dodaje sljedeću od njezina vrha. Na ploči postavite {{ui:Glava}}, {{ui:Vrh}}, {{ui:Valjanje (°)}} svake kosti i to {{ui:Visi s}} čime; kost koja visi o drugoj pomiče se s njom. Odznačite {{ui:Pomiče mrežu}} za kost koja samo upravlja drugima.
3. Kliknite {{ui:Automatske težine}}: svaka kost hvata točke koje su joj najbliže, a obuhvat se glatko širi po mreži, pa točke između dviju kostiju dijele težinu. {{ui:Samo najbliže kosti}} je brža, oštrija podjela.

**Postavite** kosti pomoću {{ui:Poza}} ({{key:P}}): kliknite kost da je odaberete, povucite da je zakrenete oko osi pogleda, ili povucite uz {{key:Shift}} da je pomaknete. Ili upišite njezin {{ui:Postavi}}, {{ui:Zakretanje (°)}} i {{ui:Veličina}} pod {{ui:Poza}}; zakreti su u vlastitim osima kosti, od mjesta na kojem miruje. Romb i {{ui:Ključ cijele poze}} ključaju pozu na pokazivaču vremena; kad kost ima ključeve, njezino postavljanje ključa ju tamo. {{ui:Vrati ovu kost}} i {{ui:Vrati pozu}} vraćaju kosti u mirovanje.

**Slikajte težine** ({{key:W}}) za odabranu kost: mreža se prikazuje u mirovanju, svaka ploha obojena prema tome koliko je kost drži: crveno sve, plavo ništa. Slikajte da dodate držanje ({{key:Mod}} ga uklanja, {{key:Shift}} zaglađuje); {{ui:Veličina (px)}} i {{ui:Jačina}} postavljaju kist. Uz {{ui:Neka težine svake točke u zbroju daju 1}}, davanje više jedne kosti oduzima istu količinu od ostalih. Svaki potez je jedan korak poništavanja modela.

{{ui:Koža}} bira kako se točka između kostiju pomiče: {{ui:Linearno (brzo)}} miješa pomake kostiju i malo steže savijeni zglob; {{ui:Dualni kvaternion (čuva volumen u zglobovima)}} umjesto toga okreće točku oko zgloba, pa lakat ili koljeno zadržava debljinu ({{ui:Veličina}} kosti tada ne rasteže kožu).

:::note
Prvo dolaze ključevi oblika, zatim kostur, pa [modifikatori](topic:modifiers). Pogled, slike i videozapisi prikazuju postavljenu mrežu; težine mreže spremaju se uz nju, a kosti i njihova poza uz animaciju.
:::

## IK i ograničenja

**Ograničenje** pomiče kost ili objekt nakon njegovih ključeva, prema nekom pravilu. Odaberite objekt (ili, u kosturu, kost) i dodajte ograničenje pod {{ui:Ograničenja za …}}. Više ih se izvršava redoslijedom kojim su navedena (strelice mijenjaju redoslijed), a svako ima {{ui:Koliko}} (0 do 1, ključa se romom kao i svako svojstvo) i prekidač uključeno/isključeno.

| Ograničenje | Za | Što radi |
|---|---|---|
| {{ui:Dosezanje (IK)}} | Kosti | Kost i kosti o kojima visi ({{ui:Kosti u lancu}}) se savijaju tako da njezin vrh dosegne cilj. Uz dvije kosti i {{ui:Pol (savijanje pokazuje prema njemu)}}, lakat ili koljeno pokazuje prema polu; duži lanci se glatko savijaju. Izvan dosega lanac pokazuje ravno prema cilju. |
| {{ui:Gledaj prema}} | Oboje | Zakreće se tako da {{ui:Os koja pokazuje}} gleda prema cilju, a {{ui:Os koja ostaje gore}} ostaje što bliže gore. |
| {{ui:Kopiraj transformacije}} | Oboje | Preuzima položaj, zakret ili veličinu cilja, one koje su označene. |
| {{ui:Granice}} | Oboje | Drži vlastiti položaj, zakret (stupnjevi) ili veličinu između {{ui:min}} i {{ui:max}} po osi; ostavite par prazan da os ostane slobodna. |
| {{ui:Podređeno}} | Oboje | Pomiče se s ciljem kao da visi o njemu, od mjesta na kojem su oba bila kad ste odabrali cilj. |
| {{ui:Prati putanju}} | Objekte | Sjedi na [objektu krivulje](topic:curves) na {{ui:Duž krivulje}} (0 je početak, 1 kraj; ključajte ga da putuje), a uz {{ui:Zakreni duž krivulje}} gleda duž nje. |

Cilj je drugi objekt u otvorenoj grupi, kost istog kostura ili {{ui:Točka}} koju upišete (točka objekta je u koordinatama modela, a točka kosti u koordinatama njezine mreže). Za IK nogu postavite cilj tamo gdje treba biti stopalo i ključajte cilj, ili ključajte {{ui:Koliko}} da noga između ključeva prepusti IK-u.

:::tip
Objekt koji gleda u onaj koji slijedi putanju vidi ga na putanji: ModelCraft prvo izračunava ciljeve, bez obzira na redoslijed objekata.
:::

## Fizika: padanje, slaganje i sudari

Pustite objekte da padnu i udare jedan u drugi, zatim zadržite rezultat kao ključeve.

1. Odaberite grupu, komponentu ili mrežu i postavite joj {{ui:Kruto tijelo}} pod {{ui:Fizika}}: {{ui:Pada i sudara se}} (pomiče se) ili {{ui:Ostaje na mjestu, smeta}} (stol, zid, rampa). Padajućem dajte {{ui:Oblik}}, {{ui:Kutija (njegove granice)}} ili {{ui:Kugla (oko njegovih granica)}}, zatim {{ui:Masa (kg)}}, {{ui:Trenje}} i {{ui:Odskakivanje}} (0 tupo udara, 1 odskače natrag jednako visoko).
2. Pod {{ui:Cijeli model}} postavite {{ui:Od (s)}} i {{ui:Do (s)}}, {{ui:Gravitacija (m/s², prema dolje)}} te je li tu {{ui:Tlo na koje se pada}} (i njegova visina).
3. Kliknite {{ui:Ispeci fiziku}} (na ploči ili u grupi {{ui:Fizika}}). Svaki padajući objekt dobiva ključ položaja, zakreta i veličine na svakoj sličici između dva vremena; reproducirajte ga kao svaku animaciju.

Ponovno pečenje zamjenjuje te ključeve; {{ui:Ukloni ispečene ključeve}} ih uklanja. Objekti počinju u mirovanju, tamo gdje ih njihovi ključevi, krivulje i ograničenja postavljaju na {{ui:Od (s)}} (ključano kretanje prije toga ne prelazi u pad). Više {{ui:Koraka po sličici}} čini visoke slagalice stabilnijima; statusna traka kaže kad se nešto još uvijek pomiče na kraju.

:::note
Oblici su kutije i kugle oko granica svakog objekta; kutija dodiruje vrhovima, sredinama bridova i sredinama ploha, pa se kutije slažu i preturaju kako se i očekuje. Tkanina, fluidi, zglobovi između objekata i točni oblici još nisu izrađeni.
:::

## Upravljači

**Upravljač** postavlja ključ oblika iz drugih stvari umjesto rukom: otvorite upravljač ključa (gumb kalkulatora), napišite **izraz** i dajte svakom imenu u njemu što čita ({{ui:Čita}}): vrijeme u sekundama, sličicu, položaj, zakret ili veličinu duž X, Y ili Z, svjetlinu svjetiljke ili drugi ključ oblika. Na primjer, uz `v` koji čita zakret vrata oko Z, `clamp(v / 90, 0, 1)` otvara oblik dok se vrata otvaraju.

Izrazi koriste brojeve, imena, `+ - * / % ^` i zagrade te funkcije `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` s `pi` i `e`. Pogreška se označava i ništa se ne mijenja. Klizač upravljanog ključa prikazuje vrijednost upravljača; upravljač ima prednost nad putanjom ključa dok ga ne uklonite.

## Odabir i promjena ključeva (pogled Ključevi)

{{ui:Ključevi}} prikazuje redak po putanji: kameru, svaku pokretnu grupu i svako svojstvo ("Svjetiljka 2 · Svjetlina (lm)"; ključevi svojstava su okrugli).

- Kliknite ključ da ga odaberete; {{key:Shift}}-klik ili {{key:Mod}}-klik dodaje ili uklanja ključeve iz odabira. Povlačenje uz {{key:Shift}} preko redaka crta okvir koji dodaje svaki ključ u njemu.
- Povucite odabrani ključ da pomaknete sve njih; {{key:Left}} / {{key:Right}} pomiču ih za sličicu ({{key:Shift}}: deset).
- {{key:Mod+C}} kopira odabrane ključeve, {{key:Mod+V}} ih lijepi od pokazivača vremena na iste putanje (i drugi ModelCraft tab ih može zalijepiti).
- {{ui:Razvlačenje}} širi odabrane ključeve od pokazivača vremena za broj pored njega (2 = dvostruko dalje; 0.5 ih sažima).
- Popis ublažavanja postavlja kako se svaki odabrani ključ kreće dalje.

## Oblikovanje krivulja (pogled Krivulje)

{{ui:Krivulje}} je graf svakog broja tijekom vremena: vrijeme ide vodoravno, vrijednost gore. Označite krivulje koje se prikazuju na popisu lijevo (X, Y i Z su crvena, zelena i plava).

- Kliknite ključ (kvadrat) da ga odaberete, {{key:Shift}}-klik za više, ili povucite okvir. Povucite odabrani ključ da promijenite njegovo vrijeme i vrijednost; s više odabranih povlačenje ih pomiče duž vremena.
- Odabrani ključ prikazuje svoje dvije **ručke**. Povucite jednu da oblikujete krivulju s te strane. {{ui:Ručke}} kaže kako se ponašaju: {{ui:Automatski}} (glatka krivulja kroz ključeve oko njega), {{ui:Usmjerene na sljedeći ključ}}, {{ui:Poravnate}} (dvije ostaju u ravnoj liniji, pa krivulja nema kut) ili {{ui:Slobodno}}.
- {{ui:Iz odabranih ključeva}} postavlja kako se svaki odabrani ključ kreće do sljedećeg: {{ui:Krivulja (ručke)}}, {{ui:Zagladi}}, {{ui:Ravnomjerno}}, {{ui:Sporo na početku i kraju}} ili {{ui:Zadrži}}.
- {{ui:Prije}} i {{ui:Poslije}} postavljaju što krivulja radi izvan svojih ključeva: {{ui:Zadrži}} (ostaje na prvoj ili zadnjoj vrijednosti), {{ui:Ponavljanje}}, {{ui:Naprijed-natrag}} ili {{ui:Ponavljaj i nastavi dalje}} (svako ponavljanje počinje tamo gdje je završilo prethodno: kotač se kotrlja dalje, hodač hoda dalje).
- Kotačić zumira ({{key:Mod}}: samo vrijednosti; {{key:Shift}}: samo vrijeme); povucite srednjom tipkom ili uz {{key:Alt}} za pomicanje; {{ui:Prikaži sve}} ili {{key:Home}} uklapa sve prikazane krivulje. Kliknite prazan prostor da pomaknete pokazivač vremena tamo. {{key:Delete}} briše odabrane ključeve.

Ručke se ne presijecaju u vremenu, pa krivulja nikad ne ide unatrag.

## Ponovno korištenje animacija (pogled Klipovi)

**Klip** reproducira spremljenu animaciju (**akciju**) na vremenskoj crti. Klipovi se miješaju redom, donji redci preko gornjih; vlastite putanje vremenske crte idu iznad svakog klipa.

1. Ključajte grupe i svjetiljke kao i obično, zatim kliknite {{ui:Napravi klip}} u {{ui:Klipovi}} i dajte akciji ime. Putanje postaju akcija, a klip je reproducira tamo gdje su bile (kamera ostaje na vremenskoj crti).
2. Za ponovnu upotrebu odaberite akciju i kliknite {{ui:Dodaj klip}}: novi klip počinje na pokazivaču vremena.
3. Povucite klip po njegovu retku da ga pomaknete; kliknite ga da postavite {{ui:Početak (s)}}, {{ui:Brzina}} (2 = dvostruko brže), {{ui:Ponavljanja}}, {{ui:Koliko}} (0 do 1), {{ui:Miješanje}} ({{ui:Zamijeni}} ili {{ui:Dodaj povrh}} klipova prije njega), {{ui:Izvan klipa}} (ništa, zadrži njegov kraj ili zadrži oba kraja) i {{ui:Utišaj}}. Strelice mijenjaju redoslijed; kanta ga uklanja (akcija koju nijedan klip više ne koristi odlazi s njim).

Klip s manje od punog {{ui:Koliko}} miješa se s onim što je ispod njega: prethodnim klipom, ili svjetiljkom ili položajem kakvi jesu bez animacije.

## Što se gdje reproducira

| Što | U pogledu | U renderiranom videu |
|---|---|---|
| Ključevi kamere, kut leće uz ključeve kamere | Da | Da |
| Položaj, zakret i veličina (ključevi, krivulje, klipovi) | Da | Da |
| Svjetlina, raspršenje i boja svjetiljke | Da | Još ne: video koristi svjetiljke kakve su na početku (vidi [što još nije izrađeno](topic:not-built-yet)) |
| Kut leće bez ključeva kamere | Da | Još ne: ključajte i kameru |
| Ključevi oblika i upravljači | Da | Da |
| Kosturi (postavljene mreže) | Da | Da |
| IK i ograničenja | Da | Da |
| Ispečena fizika (ključevi) | Da | Da |

Sve se sprema u datoteci `.modelcraft` zajedno s ostatkom animacije, a {{ui:Poništi}} i {{ui:Ponovi}} na vremenskoj crti vraćaju bilo koju od tih promjena.
