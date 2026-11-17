---
title: Što je novo u 0.9
summary: Faza ispisa s vlastitim slicerom i slanjem putem USB-a, Klippera, OctoPrinta i PrusaLinka, slicing za smolu i dodaci za datoteke, tok materijala, dodaci za digitalnog blizanca i proizvodni pogon, NURBS zaobljenja, odebljavanje i prilagodba skena, AR na lokaciji i deset načina crtanja luka.
keywords: što je novo, bilješke o izdanju, popis promjena, 0.9, faza ispisa, 3d ispis, pošalji 3d pisaču, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, ispis smolom, goo, sl1, ctb, anycubic, test ekspozicije, tok materijala, digitalni blizanac, proizvodni pogon, plc, transporter, nurbs, zaobljenje, odebljavanje, prilagodba skena, ar, na lokaciji, načini luka, jedinice, promjene, 0.8, 0.8.1, verzija, nove značajke, motor renderiranja, motor, otvori u, usd, gltf, unreal, motor dodatka, plohe, loft, provlačenje, kontinuitet, g0, g1, g2, zebra, step, iges, opiši scenu, scena, vremenske prilike, doba dana, godišnje doba, pomoćnik, materijal iz fotografije, fotografija, fotografija skice, namjesti, namjesti prostoriju, kosina, kosi rez, podijeli, provjera ispisa, problemi, mreža svojstava, svjetiljke, jezici, ulazni uređaji, redovi alatne trake, dwg, uživo
from: 169048a2
---

Ovo je što se promijenilo u ModelCraftu 0.9 u odnosu na 0.8.1. ModelCraft sada seže do pisača i do proizvodne linije: stvari možete staviti na podlogu za ispis i poslati ih bez izvoza, slicati za filament ili smolu te slagati liniju za rukovanje materijalom. Ovo je CadCraft Studio 0.9 i njegovih osam aplikacija; većina novih značajki u nastavku su dodaci.

## Novo

### 3D ispis

- **Faza ispisa.** Kliknite {{ui:Faza ispisa}} na alatnoj traci. Dodajte stavke Knjižnice na podlogu pisača, poredajte ih, pregledajte slojeve nakon slicinga i pritisnite {{ui:Pošalji 3D pisaču}}, bez izvoza STL-a. Pripada dodatku 3D Print, koji je uključen zadano i može se ukloniti kao svaki dodatak. Vidi [Stavite stvari na podlogu za ispis i pošaljite ih pisaču](topic:print-stage).
- **Vlastiti slicer za filament.** {{ui:CadCraft basic (uključen, najbrži)}} je slicer na popisu **Slicer** na kartici: zidovi, pokožice, ispuna, potpore i suknja (skirt), u radniku da stranica ostane upotrebljiva. {{ui:Pregled slojeva}} s klizačem **Sloj** prikazuje slojeve prije slanja. Profili pisača, poput stilova Ender-3 i Prusa MK4, nose vlastiti početni G-kod.
- **Slanje.** Putem USB-a (Chrome ili Edge na računalu, uz otvorenu stranicu) ili na Klipper (Moonraker), OctoPrint ili PrusaLink na vašoj mreži. Ništa se ne povezuje ili šalje bez klika, a slanje prvo pita.
- **Ostali slicer-i.** Kiri:Moto, PrusaSlicer i OrcaSlicer vlastiti su dodaci, isključeni zadano; dodajte ih s kartice ili iz {{ui:Postavke}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste vašu vlastitu instaliranu kopiju iz CadCraft Studija. Dodatak za pisače Bambu Lab slicira s vašim OrcaSlicerom i njegovim P2S postavkama te treba Studio na računalu.
- **Ispis smolom.** Dodaci za smolu (isključeni zadano) izrađuju slike slojeva za zaslon vašeg pisača, sa šupljinama i otvorima za odzračivanje, podlogom i potporama, pregledom slojeva te vremenom, smolom i cijenom. Dodaci za formate datoteka pišu Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) i Anycubic (PWMX i PWS). Test ekspozicije smole izrađuje ljestve od pet ekspozicija. Vidi [Slicing za pisač smolom](topic:resin-printing).
- **Nepromijenjeno.** {{ui:Izvezi}} › {{ui:Provjera za 3D ispis (STL ili 3MF)…}}, alati za ispis i Podjela za ispis rade kao u 0.8. Vidi [Pripremite model za 3D ispis](topic:print-3d).

### Tok materijala, digitalni blizanac i proizvodni pogon

Ta tri su dodaci, isključeni dok ih ne uključite u {{ui:Postavke}} › {{ui:Dodaci}}, a svaki ima vlastitu pomoć kad je uključen.

- **Tok materijala.** Ploča pod nazivom Tok materijala slaže transportere, stanice, međuspremnike i staze AGV-a u 3D prikazu, pokreće simulaciju s utvrđenim sjemenom, reproducira je i prikazuje propusnost, vremena isporuke i redove, a rezultati se spremaju kao CSV. Narudžbe mogu doći iz CSV datoteke. Robotske ćelije mogu se provjeriti i izvesti. PLC veza ima meki način i stvarni način preko Modbus TCP-a, koji radi samo u CadCraft Studiu.
- **Digitalni blizanac.** Čita raspored toka materijala i pokreće na njemu meki PLC, s kvarovima koje možete forsirati, testovima zaliha, usporedbom rasporeda i sastavnicom.
- **Proizvodni pogon.** Pretvara stanice u strojeve i ćelije, čita ih uživo ili iz simulatora te vodi red poslova i jednostavnu OEE. Samo čita: ova izrada ne može pisati u stroj ili PLC.

### Plohe, modeli i crtanje

- **Zaobljenja, odebljavanje i bulove operacije na NURBS-u.** Ploča {{ui:Plohe}} ima {{ui:Zaobljenje između ploha}}, {{ui:Zaobli više bridova}}, {{ui:Odeblji u puno tijelo}} te Unija, Oduzmi i Presjek, svaki s izmjerenim odstupanjem. Vidi [Slobodne plohe (NURBS)](topic:nurbs-surfaces).
- **Prilagodba ploha skenu.** Odaberite skeniranu mrežu i upotrijebite {{ui:Prilagodi površine skenu}} u grupi **Skeniranje**, zatim {{ui:Spoji površine u puno tijelo}}. Ovo je prva prilagodba, a ne cijeli paket za reverzibilno inženjerstvo.
- **Veza uživo s .3dm modelarom.** Jednosmjerna, iz Rhina 8 ili Grasshoppera, i treba CadCraft Studio na istom računalu. Vidi [Držite .3dm model živim](topic:live-3dm-link).
- **Pogledajte model na lokaciji.** {{ui:Pregled na lokaciji (AR, telefon)}} u izborniku {{ui:Pogledi}} radi na Android telefonu s Chromeom. Vidi [Pogledajte model na lokaciji s Android telefonom (AR)](topic:ar-on-site).
- **Načini luka.** Padajući izbornik {{ui:Načini luka}} nudi deset načina crtanja luka, uključujući {{ui:3 točke}} i {{ui:Početak, središte, kraj}}.
- **Više jedinica.** Težine (kg, lb, t, ton) i temperature (stupnjevi C, F, K i R) prepoznaju se tamo gdje upisujete vrijednosti s jedinicama.

## U svakoj aplikaciji

- **Savjeti.** Tekst pri zadržavanju na gumbima i odrezanim oznakama je Bootstrap savjet.
- **Zatvorivi početni savjet.** Kartica savjeta na praznom području crteža ima mali gumb za zatvaranje (x). Ostaje zatvorena, a paleta naredbi može ga ponovno prikazati.
- **Pomične trake kartica.** Traka kartica ploče koja ne stane pomiče se umjesto da je odreže.
- **Naslovi kartica.** Kad je dokument otvoren, kartica preglednika počinje nazivom dokumenta, zatim ModelCraft i CadCraft. Točka dolazi prva dok nije spremljeno.
- **Raspored.** {{ui:Postavke}} › {{ui:Općenito}} › Raspored drži rasporede u padajućem izborniku, uz izbor da se raspored koristi samo za ovu aplikaciju i gumb za vraćanje rasporeda na zadano.
- **Jezici.** Popis jezika u Postavkama slijedi jezične datoteke koje izrada sadrži. Jezici osim engleskog su strojne radne verzije.
- **Uživo i Knjižnica.** Live TeamWork prikazuje kursore i imena uživo, a zbirke Knjižnice daju svakoj aplikaciji zadanu zbirku.

## Popravljeno

- {{ui:Reproduciraj}} se pretvara u {{ui:Pauziraj}} dok se animacija reproducira, a {{key:Space}} reproducira i pauzira dok je vremenska crta otvorena.
- Statično renderiranje se vraća na WebGL kad grafička kartica ne može pokrenuti path tracer. Prikaz renderiranja uživo može i dalje pokazivati grešku; nije provjereno na Windows računalu s tim upravljačkim programom.
- Stvarni način toka materijala ponovno se povezuje nakon što veza završi na odgovorima o iznimci PLC-a.

## Iskreno o ograničenjima

- Ništa nije ispisano na stvarnom pisaču: ni filamentom, ni smolom, ni putem Bambu Connecta. Datoteke za smolu čitali su samo vlastiti čitači CadCrafta.
- Digitalni blizanac i Proizvodni pogon testirani su samo na simulatorima i poznatim odgovorima, bez stvarnog PLC-a, linije ili protokola. Pomoćna su sredstva za provjeru, a ne sigurnosna validacija. Fizika pokriva samo kutije, do osam opterećenja.
- Veza s Rhinom i Grasshopperom nikad nije radila u stvarnim programima.
- Jezici osim engleskog su strojne radne verzije.

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u ModelCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Dijaloški okvir {{ui:Renderiraj sliku…}} sada može poslati scenu drugom programu, ploča Plohe izrađuje glatke slobodne plohe, a pomoćnik koji povežete može postaviti cijelu scenu jednom rečenicom.

### Novo

**Renderiranje**

- **Izbor motora.** {{ui:Renderiraj sliku…}} ima popis **Motor** iznad načina. Naša dva vlastita motora, Brzi i Path tracer, zadani su i rade svugdje. Ostali unosi spremaju scenu kao paket (model kao USD datoteku, uz datoteku postavki s točnim vrijednostima materijala, svjetiljkama koje su uključene, suncem, nebom, ekspozicijom i kamerom) za odnijeti u drugi program. Slika koju je nacrtao drugi program kaže koji ju je program i verzija izradio. Vidi [Odabir programa koji crta sliku](topic:render-engines).
- **Otvaranje u drugom programu.** Popis motora može spremiti scenu kao USD datoteku, glTF datoteku (`.glb`) ili mapu projekta Unreal (`.zip`), u pregledniku i u CadCraft Studiu. U Studiu može pokrenuti i usdview ili vlastiti program računala za tu datoteku. Vidi [Otvaranje scene u drugom programu](topic:render-open-in).
- **Slanje motoru igre iz Studija.** Studio zapisuje scenu u projekt Unreal Engine i održava ga usklađenim pri svakom slanju, samo u jednom smjeru. Vaše vlastite izmjene nalaze se u sloju koji CadCraft nikad ne zapisuje. Vidi [Slanje scene motoru igre](topic:render-unreal).
- **Motori iz dodataka.** Dodatak može dodati motor na popis. Onaj napisan u JavaScriptu crta u pregledniku i u Studiu; onaj koji pokreće program traži vaš pristanak u Studiu. Vidi [Crtanje slike drugim programom](topic:render-other-program) i [Dodavanje motora renderiranja dodatkom](topic:render-engine-addons).
- **Opišite scenu.** Recite povezanom pomoćniku „sumrak, slaba kiša, jesenska stabla, ljudi na trgu“ i ModelCraft to postavlja u jednom koraku: sunce se pomiče na datum i vrijeme pa sjene slijede, nebo se mijenja, pojavljuju se mokre plohe, a stabla i ljudi postavljaju se kao pravi objekti na oznakama koje možete sakriti, pomaknuti ili izbrisati. Doba dana, datum ili godišnje doba te vremenske prilike (vedro, oblačno, magla, slaba kiša, kiša, oluja) također rade sami od sebe, a kasniji zahtjev mijenja istu scenu. Magla se prikazuje na slici visoke kvalitete na grafičkoj kartici; ostali motori prikazuju nebo, svjetlo i mokre plohe. Kiša se ne crta kao padajuće crte.

**Materijali**

- **Materijal iz jedne fotografije.** Dajte ModelCraftu fotografiju površine (zid, pod, kamen) i on izrađuje popločavajući materijal: osvjetljenje preko fotografije se izravnava, rubovi se spajaju, a mapa boja, mapa hrapavosti i mapa normala izračunavaju se iz slike. To je obična obrada slike vaše fotografije, bez treniranog modela. Hrapavost je procjena. Ravna, kvadratna, pravo usmjerena fotografija daje najbolju pločicu; jak uzorak, poput opeka, može pokazati mutnu sjenu tamo gdje je spoj stopljen.

**Plohe**

- **Slobodne plohe.** Ploča {{ui:Plohe}} izrađuje NURBS krivulje i neobrezane plohe: krivulje kroz točke, loft, pravocrtne, izvlačenje, rotaciju, provlačenja duž jedne ili dviju šina, plohe iz mreže krivulja, zakrpe od četiri brida, poklapanje i stapanje. Svaki zajednički brid mjeri se kao G0, G1 ili G2 (razmak, kut, skok zakrivljenosti) na točnim plohama, a brid lošiji od onoga što ste tražili pojavljuje se na ploči Problemi s gumbom **Poklapanje**. Zebra pruge i boje zakrivljenosti crtaju se iz točnih ploha. Datoteke STEP i IGES izlaze i ulaze. Vidi [Slobodne plohe (NURBS)](topic:nurbs-surfaces).

**Lokacija i prostorije**

- **Fotografija skice na tlu.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju mobitelom ručne skice u bridove na tlu u mjerilu koje navedete: jedna grupa, s oznakom za svaku boju olovke. Papir se na vašem računalu pronalazi i ispravlja, a ništa se nigdje ne šalje. Vidi [Model na situacijskom planu](topic:site-plan).
- **Namjestite prostoriju.** Odaberite pod i upotrijebite {{ui:Organizacija}} › {{ui:Namjesti prostoriju…}}. Namještaj za spavaću sobu, dnevni boravak, blagovaonicu, kuhinju, kupaonicu ili ured postavlja se prema pravilima, uz zidove i izvan vrata i prozora, u jednoj grupi koju možete ukloniti u jednom koraku. To je zadani raspored za vaš pregled, a ne dizajn. Vidi [Početna biblioteka](topic:starter).

**3D ispis**

- **Kosi rezovi.** Podjela za ispis može nagnuti rezove do 60 stupnjeva, što dijelovima daje više površine za lijepljenje. Spojnice stoje okomito na rez. Vidi [Podjela modela za ispis](topic:print-split).
- **Provjera ispisa u Problemima.** Nalazi provjere 3D ispisa prikazuju se na ploči Problemi s oznakama na modelu, a {{ui:Popravak}} ih ispravlja odatle. Vidi [Potpore, debljina stijenke, izdubljivanje i popravak](topic:print-tools).

**U svakoj aplikaciji**

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Jezici osim engleskog su strojne radne verzije dok ih izvorni govornik ne pregleda, a teme pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Sensorska podloga, olovka, 3D miš, kontroler za igre i MIDI upravljači mogu upravljati aplikacijama, za sve ili za jednu.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › Redovi alatne trake postavlja Prelamanje (kao prije), 2 reda ili 1 red. Traka koja ne stane pomiče se u stranu umjesto da uzima prostor od crteža. Prelamanje ostaje zadano.
- **Mreža svojstava.** Polja svjetiljki u ModelCraftu koriste zajedničku mrežu: sažimljive kategorije, stupce oznake i vrijednosti te gustoću {{ui:Zbijeno}}. Upisana aritmetika poput `2*450` i dalje radi.
- **Problemi.** Ploča Problemi (gumb upozorenja u traci aplikacije) zajednička je svim aplikacijama. U ModelCraftu sadrži provjeru ispisa i upozorenja o kontinuitetu ploha.
- **Uživo.** Sesija Live TeamWork pokazuje tko je gdje. Vidi [Model zajedno s Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu dodati motore renderiranja, kao gore.
- **Povežite svoju AI.** Ugovor alata i provjere osam aplikacija prolaze, s ukupno 454 alata. Povezivanje jednim klikom u Studiju, hostirani konektor za pomoćnike u pregledniku, vlastiti ključ u Studiju i objavljeni paket još nisu obećani. Aplikacije same po sebi nemaju AI. Vidi [Korištenje ModelCraft-a s AI pomoćnikom](topic:use-with-ai-assistants).

### Popravljeno u 0.8.1

- **Odjeljak klasa DWG-a.** Odjeljak klasa DWG datoteke čitao se kao pogrešan tip, što je moglo pokvariti datoteku pri uvozu. Sada se čita ispravno, u ModelCraftu i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Slobodna visina mreže ide platnu, a raspored lista počinje na 760 piksela širine ili manje. Stilski list ModelCraft-a također ima tu promjenu.
- **Jezik u Studiju.** CadCraft Studio i spakirana izdanja mogu promijeniti jezik dok rade; prije su bili samo na engleskom. Ovo još nije testirano na svakoj platformi: javite nam ako se jezik ne mijenja.

### Nije još u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom kliknite i odaberite {{ui:Otvori}}. Izrade za trgovine su na čekanju, a izrada za iPad i iPhone nije ponovno izrađena za 0.8.1.
- Drugi program koji crta sliku bez dodatka motora renderiranja, panorame ili stereo kamere te slika neba kroz drugi program, i dodatak koji otvara scenu Unreal, još nisu tu. Datoteke se zapisuju; dodatak nije objavljen i nije pokrenut u Unrealu.
- Slobodne plohe: G3 i klasa A se ne mjere niti tvrde, a obrezivanje i tijela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel kao naše: podudaraju se samo kamera, sunce, svjetiljke i ekspozicija.
- Popravak promjene jezika u Studiju u 0.8.1 nije testiran na svakoj platformi.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet). Za prethodno izdanje vidi [Što je novo u 0.7](topic:whats-new-0-7).
