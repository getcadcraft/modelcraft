---
title: Što je novo u 0.9 (ranije)
summary: Faza ispisa s vlastitim rezačem i slanjem putem USB-a, Klipper-a, OctoPrint-a i PrusaLink-a, rezanje za smolu i dodaci za datoteke, tok materijala, dodaci digitalnog blizanca i tvorničkog poda, NURBS zaobljenja, odebljavanje i prilagodba skenu, AR na lokaciji te deset načina crtanja luka.
keywords: što je novo 0.9, raniji izdanje, što je novo, what's new, bilješke o izdanju, dnevnik promjena, 0.9, faza ispisa, 3d ispis, slanje 3D pisaču, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, ispis smolom, goo, sl1, ctb, anycubic, test ekspozicije, tok materijala, digitalni blizanac, tvornički pod, plc, transporter, nurbs, zaobljenje, odebljavanje, prilagodba skenu, ar, na lokaciji, načini luka, jedinice, što je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, motor prikaza, motor, otvori u, usd, gltf, unreal, motor dodataka, nurbs, plohe, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, reci scenu, scena, vremenski uvjeti, doba dana, godišnje doba, asistent, materijal iz fotografije, fotografija, fotografija skice, namjesti, namjesti prostoriju, kosi rez, podjela, provjera ispisa, problemi, rešetka svojstava, svjetiljke, jezici, ulazni uređaji, redovi alatne trake, dwg, live
from: 2717d1b1
---

Ovo je što se promijenilo u ModelCraft 0.9 u odnosu na 0.8.1. ModelCraft sada dopire do pisača i do pogona: stvari možete postaviti na podlogu za ispis i poslati ih bez izvoza, pripremiti za filament ili smolu te izraditi liniju za rukovanje materijalom. Ovo je CadCraft Studio 0.9 i njegovih osam aplikacija; većina novih značajki u nastavku su dodaci.

## Novo

### 3D ispis

- **Faza ispisa.** Kliknite {{ui:Faza ispisa}} na alatnoj traci. Dodajte stavke knjižnice na podlogu pisača, rasporedite ih, pregledajte izrezane slojeve i pritisnite {{ui:Pošalji 3D pisaču}}, bez izvoza STL-a. Pripada dodatku 3D Print, koji je uključen prema zadanim postavkama i može se ukloniti kao svaki dodatak. Pogledajte [Postavljanje stvari na podlogu za ispis i slanje pisaču](topic:print-stage).
- **Vlastiti rezač za filament.** {{ui:CadCraft basic (uključeno, najbrže)}} je rezač na popisu **Slicer** na kartici: zidovi, kože, ispuna, potpore i rub, na radniku da stranica ostane upotrebljiva. {{ui:Pregled slojeva}} s klizačem **Sloj** prikazuje slojeve prije slanja. Profili pisača, poput stilova Ender-3 i Prusa MK4, nose vlastiti početni G-kod.
- **Slanje.** Putem USB-a (Chrome ili Edge na računalu, uz stranicu koja ostaje otvorena) ili na Klipper (Moonraker), OctoPrint ili PrusaLink na vašoj mreži. Ništa se ne spaja i ništa se ne šalje bez klika, a slanje prvo pita za potvrdu.
- **Drugi rezači.** Kiri:Moto, PrusaSlicer i OrcaSlicer vlastiti su dodaci, isključeni prema zadanim postavkama; dodajte ih s kartice ili iz {{ui:Postavke}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste vašu vlastitu instaliranu kopiju iz CadCraft Studio. Dodatak za pisače Bambu Lab reže pomoću vašeg OrcaSlicer-a i njegovih P2S predložaka te zahtijeva Studio na računalu.
- **Ispis smolom.** Dodaci za smolu (isključeni prema zadanim postavkama) izrađuju slike slojeva za zaslon vašeg pisača, uz šupljine i otvore za odzračivanje, podlogu i potpore, pregled slojeva te vrijeme, smolu i trošak. Dodaci za format datoteke pišu Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) i Anycubic (PWMX i PWS). Test ekspozicije za smolu izrađuje ljestvicu od pet ekspozicija. Pogledajte [Priprema za pisač na smolu](topic:resin-printing).
- **Nepromijenjeno.** {{ui:Izvezi}} › {{ui:Provjera za 3D ispis (STL ili 3MF)…}}, alati za ispis i Split for printing rade kao u 0.8. Pogledajte [Priprema modela za 3D ispis](topic:print-3d).

### Tok materijala, digitalni blizanac i tvornički pod

Ova tri su dodaci, isključeni dok ih ne uključite u {{ui:Postavke}} › {{ui:Dodaci}}, a svaki ima vlastitu pomoć nakon uključivanja.

- **Tok materijala.** Panel pod nazivom Material flow raspoređuje transportere, stanice, međuspremnike i staze AGV-a u 3D prikazu, pokreće simulaciju s zadanim sjemenom, reproducira je te prikazuje protok, vremena isporuke i redove. Rezultati se spremaju kao CSV. Narudžbe mogu doći iz CSV datoteke. Ćelije robota mogu se provjeriti i izvesti. PLC veza ima meki način rada i stvarni način rada preko Modbus TCP-a, koji radi samo u CadCraft Studio.
- **Digitalni blizanac.** Čita raspored iz Material flow i pokreće meki PLC nad njime, uz kvarove koje možete namjerno izazvati, testove zaliha, usporedbu rasporeda i sastavnicu.
- **Tvornički pod.** Stanice pretvara u strojeve i ćelije, čita ih uživo ili iz simulatora te vodi red poslova i jednostavan OEE. Samo čita: ova verzija ne može pisati na stroj ili PLC.

### Plohe, modeli i crtanje

- **Zaobljenja, odebljavanje i bulove operacije na NURBS-u.** Panel {{ui:Plohe}} ima {{ui:Zaobljenje između ploha}}, {{ui:Zaobli više bridova}}, {{ui:Odeblji u puno tijelo}} te Union, Subtract i Intersect, a svaka ima izmjereno odstupanje. Pogledajte [Slobodne plohe (NURBS)](topic:nurbs-surfaces).
- **Prilagodba ploha skenu.** Odaberite skenirani mrežni model i upotrijebite {{ui:Prilagodi površine skenu}} u grupi **Scan**, a zatim {{ui:Spoji površine u puno tijelo}}. To je prvo prilagođavanje, a ne potpuni paket za reverzni inženjering.
- **Živa veza s modelarom .3dm.** Jednosmjerna, iz Rhino 8 ili Grasshoppera, i treba CadCraft Studio na istom računalu. Pogledajte [Održavanje .3dm modela živim](topic:live-3dm-link).
- **Pogled modela na lokaciji.** {{ui:Pregled na lokaciji (AR, telefon)}} u izborniku {{ui:Pogledi}} radi na Android telefonu s Chromeom. Pogledajte [Pogled modela na lokaciji Android telefonom (AR)](topic:ar-on-site).
- **Načini luka.** Padajući izbornik {{ui:Načini luka}} nudi deset načina crtanja luka, uključujući {{ui:3 točke}} i {{ui:Početak, središte, kraj}}.
- **Više jedinica.** Težine (kg, lb, t, ton) i temperature (stupnjevi C, F, K i R) prepoznaju se tamo gdje upisujete vrijednosti s jedinicama.

## U svim aplikacijama

- **Savjeti.** Tekst koji se pojavi pri zadržavanju pokazivača na gumbima i skraćenim oznakama je Bootstrap tooltip.
- **Zatvorivi početni savjet.** Kartica savjeta na praznom području crteža ima mali zatvarač x. Ostaje zatvorena, a paleta naredbi može ga ponovno prikazati.
- **Kartice s klizanjem.** Traka kartica panela koja ne stane klizi umjesto da bude odrezana.
- **Naslovi kartica.** Kad je dokument otvoren, kartica preglednika počinje nazivom dokumenta, zatim ModelCraft i CadCraft. Točka dolazi prva dok nije spremljeno.
- **Raspored.** {{ui:Postavke}} › {{ui:Općenito}} › Raspored sadrži rasporede u padajućem izborniku, s mogućnošću korištenja rasporeda samo za ovu aplikaciju i gumbom za vraćanje rasporeda na zadano.
- **Jezici.** Popis jezika u postavkama prati jezične datoteke koje sadrži verzija. Jezici osim engleskog su strojni nacrti.
- **Live i Library.** Live TeamWork prikazuje pokazivače i imena uživo, a zbirke knjižnice daju svakoj aplikaciji zadanu zbirku.

## Ispravljeno

- {{ui:Reproduciraj}} se pretvara u {{ui:Pauziraj}} dok animacija traje, a {{key:Space}} pokreće i zaustavlja reprodukciju dok je vremenska crta otvorena.
- Statički prikaz vraća se na WebGL kad grafička kartica ne može pokrenuti path tracer. Prikaz uživo i dalje može prikazivati pogrešku; to nije provjereno na Windows računalu s tim upravljačkim programom.
- Stvarni način rada Material flow ponovno se spaja nakon što je veza prekinuta zbog odgovora o iznimci PLC-a.

## Iskrena ograničenja

- Ništa nije ispisano na pravom pisaču: ni filament, ni smola, ni putem Bambu Connect-a. Datoteke za smolu provjerili su samo vlastiti čitači programa CadCraft.
- Digitalni blizanac i tvornički pod testirani su samo na simulatorima i poznatim rezultatima, bez pravog PLC-a, linije ili protokola. To su pomagala za provjeru, a ne sigurnosna validacija. Fizika obuhvaća samo kutije, do osam opterećenja.
- Veza s Rhinom i Grasshopperom nikad nije radila u pravim programima.
- Jezici osim engleskog su strojni nacrti.

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Dijalog {{ui:Renderiraj sliku…}} sada može poslati scenu drugom programu, panel Surfaces izrađuje glatke slobodne plohe, a asistent koji povežete može postaviti cijelu scenu jednom rečenicom.

### Novo

**Renderiranje**

- **Izbor motora.** {{ui:Renderiraj sliku…}} ima popis **Engine** iznad Mode. Naša dva vlastita motora, Fast i Path tracer, zadani su i rade svugdje. Ostale stavke spremaju scenu kao paket (model kao USD datoteka, plus datoteka postavki s točnim vrijednostima materijala, uključenim svjetiljkama, suncem, nebom, ekspozicijom i kamerom) za prijenos u drugi program. Slika koju je izradio drugi program kaže koji ju je program i koja verzija izradila. Pogledajte [Odabir programa koji crta sliku](topic:render-engines).
- **Otvaranje u drugom programu.** Popis Engine može spremiti scenu kao USD datoteku, glTF datoteku (`.glb`) ili mapu projekta Unreal (`.zip`), u pregledniku i u CadCraft Studio. U Studiju može i pokrenuti usdview ili vlastiti program računala za tu datoteku. Pogledajte [Otvaranje scene u drugom programu](topic:render-open-in).
- **Slanje u motor za igre iz Studija.** Studio zapisuje scenu u projekt Unreal Engine i održava je usklađenom pri svakom slanju, samo u jednom smjeru. Vaše vlastite izmjene nalaze se u sloju koji CadCraft nikad ne piše. Pogledajte [Slanje scene u motor za igre](topic:render-unreal).
- **Motori iz dodataka.** Dodatak može dodati motor na popis. Motor napisan u JavaScriptu crta u pregledniku i u Studiju; onaj koji pokreće program traži vaše dopuštenje u Studiju. Pogledajte [Crtanje slike drugim programom](topic:render-other-program) i [Dodavanje motora za renderiranje dodatkom](topic:render-engine-addons).
- **Reci scenu.** Povezanom asistentu recite „sumrak, lagana kiša, jesenska stabla, ljudi na trgu” i ModelCraft će postaviti sve u jednom koraku: sunce se pomakne na datum i vrijeme pa sjene slijede, nebo se mijenja, pojavljuju se mokre površine, a stabla i ljudi postavljaju se kao stvarni objekti na oznakama koje možete sakriti, pomaknuti ili izbrisati. Doba dana, datum ili godišnje doba te vremenski uvjeti (vedro, oblačno, magla, lagana kiša, kiša, oluja) rade i sami, a kasniji zahtjev mijenja istu scenu. Magla se prikazuje u visokokvalitetnoj slici na grafičkoj kartici; ostali motori prikazuju nebo, svjetlo i mokre površine. Kiša se ne crta kao padajuće linije.

**Materijali**

- **Materijal iz jedne fotografije.** Dajte ModelCraft fotografiju površine (zid, pod, kamen) i on izrađuje popločani materijal: osvjetljenje preko fotografije se izravnava, rubovi se spajaju, a karta boja, karta hrapavosti i karta normala izrađuju se iz slike. To je obična obrada slike vaše vlastite fotografije, bez utreniranog modela. Hrapavost je procjena. Ravna, kvadratna fotografija snimljena izravno daje najbolju pločicu; jaki uzorak, poput cigle, može pokazati mutni trag na mjestu spoja.

**Plohe**

- **Slobodne plohe.** Panel {{ui:Plohe}} izrađuje NURBS krivulje i neobrezane plohe: krivulje kroz točke, loft, ravnate plohe, izvlačenje, rotaciju, sweep duž jedne ili dviju vodilica, plohe iz mreže krivulja, zakrpe od četiri brida, podudaranje i stapanje. Svaki zajednički brid mjeri se kao G0, G1 ili G2 (razmak, kut, skok zakrivljenosti) na točnim plohama, a brid lošiji od zatraženog pojavljuje se na panelu Problems s popravkom **Match**. Zebra pruge i boje zakrivljenosti crtaju se iz točnih ploha. Datoteke STEP i IGES se šalju i primaju. Pogledajte [Slobodne plohe (NURBS)](topic:nurbs-surfaces).

**Lokacija i prostorije**

- **Fotografija skice na tlo.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju ruke skicirane na papiru u rubove na tlu u mjerilu koje navedete: jedna grupa, s oznakom za svaku boju olovke. Papir se pronalazi i ispravlja na vašem računalu, a ništa se ne šalje nigdje. Pogledajte [Model na situacijskom planu](topic:site-plan).
- **Namještanje prostorije.** Odaberite pod i upotrijebite {{ui:Organizacija}} › {{ui:Namjesti prostoriju…}}. Namještaj za spavaću sobu, dnevni boravak, blagovaonicu, kuhinju, kupaonicu ili ured postavlja se prema pravilima, uz zidove i bez dodirivanja vrata i prozora, u jednu grupu koju možete ukloniti u jednom koraku. To je zadani raspored za vaš pregled, a ne dizajn. Pogledajte [Početna knjižnica](topic:starter).

**3D ispis**

- **Kosi rezovi.** Split for printing može nagnuti svoje rezove do 60 stupnjeva, čime dijelovi imaju više površine za lijepljenje. Spojnice stoje okomito na rez. Pogledajte [Podjela modela za ispis](topic:print-split).
- **Provjera ispisa u Problems.** Nalazi provjere 3D ispisa prikazuju se na panelu Problems s oznakama na modelu, a Repair ih popravlja s tog mjesta. Pogledajte [Potpore, debljina stijenke, šupljine i popravak](topic:print-tools).

**U svim aplikacijama**

- **Jezici.** Pomoć i aplikacije dostupne su na 54 jezika. Deset je novo: litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Jezici osim engleskog su strojni nacrti dok ih izvorni govornik ne pročita, a teme pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Touchpad, olovka, 3D miš, igraći kontroler i MIDI kontrole mogu upravljati aplikacijama, za sve ili za jednu.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › Redovi alatne trake postavlja Wrap (kao prije), 2 reda ili 1 red. Traka koja ne stane klizi u stranu umjesto da oduzima prostor crtežu. Wrap ostaje zadani.
- **Rešetka svojstava.** Polja svjetiljki u ModelCraftu koriste zajedničku rešetku: sklopive kategorije, stupce oznake i vrijednosti te gustoću Compact. Upisani izrazi poput `2*450` i dalje rade.
- **Problems.** Panel Problems (gumb upozorenja na traci aplikacije) dijele sve aplikacije. U ModelCraftu sadrži provjeru ispisa i upozorenja o kontinuitetu ploha.
- **Live.** Sesija Live TeamWork pokazuje tko je gdje. Pogledajte [Zajednički rad na modelu s Live TeamWorkom](topic:work-live).
- **Dodaci.** Dodaci mogu dodati motore za renderiranje, kao gore.
- **Povežite svoj AI.** Ugovor o alatima i provjere osam aplikacija prolaze, s ukupno 454 alata. Povezivanje jednim klikom u Studiju, hostirani konektor za asistente u pregledniku, vlastiti ključ u Studiju i objavljeni paket još nisu obećani. Aplikacije nemaju vlastitu umjetnu inteligenciju. Pogledajte [Korištenje ModelCraft-a s AI asistentima](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Odjeljak klasa DWG-a.** Odjeljak klasa DWG datoteke čitao se kao pogrešan tip, što je moglo pokvariti datoteku pri uvozu. Sada se čita ispravno, u ModelCraftu i u drugim aplikacijama koje čitaju DWG.
- **Tableti u portretu.** Višak visine rešetke ide na platno, a raspored lista počinje pri širini od 760 piksela ili manje. Stilski list ModelCraft-a također ima ovu promjenu.
- **Jezik u Studiju.** CadCraft Studio i spakirana izdanja mogu mijenjati jezik dok rade; prije su bila samo na engleskom. Ovo još nije provjereno na svim platformama: javite nam ako se jezik ne promijeni.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom kliknite i odaberite {{ui:Otvori}}. Izdanja za trgovine su na čekanju, a izdanje za iPad i iPhone nije ponovno izrađeno za 0.8.1.
- Drugi program koji crta sliku bez dodatka motora za renderiranje, panoramske ili stereo kamere te slika neba kroz drugi program, kao ni dodatak koji otvara scenu u Unrealu, još nisu tu. Datoteke se pišu; dodatak nije objavljen i nije pokrenut u Unrealu.
- Slobodne plohe: G3 i klasa A se ne mjere niti tvrde, a rezanje i tijela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel jednake našima: podudaraju se samo kamera, sunce, svjetiljke i ekspozicija.
- Ispravak iz 0.8.1 za promjenu jezika u Studiju nije testiran na svim platformama.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet). Za prethodno izdanje pogledajte [Što je novo u 0.7](topic:whats-new-0-7).
