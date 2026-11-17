---
title: Šta je novo u 0.9
summary: Faza štampanja s našim slajserom i slanjem preko USB-a, Klipper-a, OctoPrint-a i PrusaLink-a, slajsovanje za smolu i dodaci za datoteke, tok materijala, digitalni blizanac i dodaci za fabrički pod, NURBS zaobljenja, zadebljavanje i prilagođavanje skenu, AR na terenu i deset metoda luka.
keywords: šta je novo, bilješke o izdanju, dnevnik promjena, 0.9, faza štampanja, 3d štampanje, pošalji 3D štampaču, slajser, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, štampanje smolom, goo, sl1, ctb, anycubic, test ekspozicije, tok materijala, digitalni blizanac, fabrički pod, plc, transporter, nurbs, zaobljenje, zadebljavanje, prilagođavanje skenu, ar, na terenu, metode luka, jedinice, promjene, 0.8, 0.8.1, verzija, nove funkcije, motor, otvori u drugom programu, usd, gltf, unreal, dodatak motora, površine, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, reci scenu, scena, vremenske prilike, doba dana, godišnje doba, asistent, materijal iz fotografije, fotografija, fotografija skice, opremi, opremi sobu, kosi rez, podjela, provjera štampanja, problemi, mreža svojstava, lampe, jezici, uređaji za unos, redovi alatne trake, dwg, uživo
from: 169048a2
---

Ovo je ono što se promijenilo u ModelCraftu 0.9, u odnosu na 0.8.1. ModelCraft sada dopire do štampača i do pogona: stvari možeš staviti na radnu ploču za štampanje i poslati ih bez izvoza, slajsovati za filament ili smolu, i rasporediti liniju za rukovanje materijalom. Ovo je CadCraft Studio 0.9 i njegovih osam aplikacija; većina novih funkcija u nastavku su dodaci.

## Novo

### 3D štampanje

- **Faza štampanja.** Klikni {{ui:Faza štampanja}} na alatnoj traci. Dodaj stavke iz biblioteke na ploču štampača, rasporedi ih, pogledaj kroz slajsovane slojeve i pritisni {{ui:Pošalji 3D štampaču}}, bez STL-a za izvoz. Pripada dodatku za 3D štampanje, koji je podrazumijevano uključen i može se ukloniti kao svaki dodatak. Vidi [Stavi stvari na ploču za štampanje i pošalji ih štampaču](topic:print-stage).
- **Naš vlastiti slajser za filament.** {{ui:CadCraft basic (uključen, najbrži)}} je slajser na listi **Slajser** na kartici: zidovi, kože, ispuna, podrške i suknja, na radnom procesu da stranica ostane upotrebljiva. {{ui:Pregled slojeva}} s klizačem **Sloj** prikazuje slojeve prije slanja. Profili štampača, kao stilovi Ender-3 i Prusa MK4, nose svoj početni G-kod.
- **Slanje.** Preko USB-a (Chrome ili Edge na računaru, uz otvorenu stranicu), ili na Klipper (Moonraker), OctoPrint ili PrusaLink na tvojoj mreži. Ništa se ne povezuje niti šalje bez klika, a slanje prvo pita.
- **Drugi slajseri.** Kiri:Moto, PrusaSlicer i OrcaSlicer su dodaci za sebe, podrazumijevano isključeni; dodaj ih s kartice ili iz {{ui:Postavke}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste tvoju vlastitu instaliranu kopiju iz CadCraft Studija. Dodatak za štampače Bambu Lab slajsuje s tvojim OrcaSlicerom i njegovim P2S profilima i treba Studio na računaru.
- **Štampanje smolom.** Dodaci za smolu (podrazumijevano isključeni) prave slike slojeva za ekran tvog štampača, sa šupljenjem i rupama za odzračivanje, splavom i podrškama, pregledom slojeva, te vremenom, smolom i cijenom. Dodaci za formate datoteka pišu Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) i Anycubic (PWMX i PWS). Test ekspozicije smolom pravi ljestvice od pet ekspozicija. Vidi [Slajsovanje za štampač smolom](topic:resin-printing).
- **Nepromijenjeno.** {{ui:Izvezi}} › {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}, alati za štampanje i Podijeli za štampanje rade kao u 0.8. Vidi [Pripremi model za 3D štampanje](topic:print-3d).

### Tok materijala, digitalni blizanac i fabrički pod

Ovo su tri dodatka, isključena dok ih ne uključiš u {{ui:Postavke}} › {{ui:Dodaci}}, a svaki ima vlastitu pomoć kad je uključen.

- **Tok materijala.** Panel pod nazivom Tok materijala raspoređuje transportne trake, stanice, bafere i staze AGV-a u 3D prikazu, pokreće simulaciju s fiksnim sjemenom, pušta je i prikazuje protok, rokove isporuke i redove, s rezultatima sačuvanim kao CSV. Narudžbe mogu doći iz CSV datoteke. Robotske ćelije mogu se provjeriti i izvesti. PLC veza ima meki režim i pravi režim preko Modbus TCP-a, koji radi samo u CadCraft Studiju.
- **Digitalni blizanac.** Čita raspored Toka materijala i na njemu pokreće meki PLC, s greškama koje možeš prisiliti, testovima zaliha, poređenjem rasporeda i sastavnicom.
- **Fabrički pod.** Pretvara stanice u mašine i ćelije, čita ih uživo ili iz simulatora, i vodi red poslova i jednostavan OEE. Samo čita: ova verzija ne može pisati u mašinu ili PLC.

### Površine, modeli i crtanje

- **Zaobljenja, zadebljavanje i bulove operacije na NURBS-u.** Panel {{ui:Površine}} ima {{ui:Zaobljenje između površina}}, {{ui:Zaobljenje više ivica}}, {{ui:Zadeblji u tijelo}} i Spoji, Oduzmi i Presijeci, svaki s izmjerenim odstupanjem. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Prilagodi površine skenu.** Odaberi skeniranu mrežu i koristi {{ui:Prilagodi površine skenu}} u grupi **Skeniranje**, pa {{ui:Spoji površine u tijelo}}. Ovo je prvo prilagođavanje, a ne cijeli paket za reverzni inženjering.
- **Živa veza s .3dm modelarom.** Jednosmjerna, iz Rhina 8 ili Grasshoppera, i treba CadCraft Studio na istom računaru. Vidi [Drži .3dm model živim](topic:live-3dm-link).
- **Pogledaj model na terenu.** {{ui:Pogled na lokaciji (AR, telefon)}} u meniju {{ui:Pogledi}} radi na Android telefonu s Chromeom. Vidi [Pogledaj model na terenu s Android telefonom (AR)](topic:ar-on-site).
- **Metode luka.** Padajući meni {{ui:Metode luka}} nudi deset načina crtanja luka, uključujući {{ui:3 tačke}} i {{ui:Početak, centar, kraj}}.
- **Više jedinica.** Težine (kg, lb, t, ton) i temperature (stepeni C, F, K i R) prepoznaju se tamo gdje upisuješ vrijednosti s jedinicama.

## U svakoj aplikaciji

- **Savjeti.** Tekst pri zadržavanju pokazivača na dugmadima i odsječenim oznakama je Bootstrap savjet.
- **Savjet za početak koji se može zatvoriti.** Kartica savjeta na praznom području crteža ima mali križić za zatvaranje. Ostaje zatvorena, a paleta naredbi može je ponovo prikazati.
- **Trake kartica koje se pomjeraju.** Traka kartica panela koja ne staje se pomjera umjesto da bude odsječena.
- **Naslovi kartica.** Kad je dokument otvoren, kartica preglednika počinje nazivom dokumenta, pa ModelCraft i CadCraft. Tačka dolazi prva dok nije sačuvano.
- **Raspored.** {{ui:Postavke}} › {{ui:Opšte}} › Raspored čuva rasporede u padajućem meniju, s izborom da se raspored koristi samo za ovu aplikaciju i dugmetom za vraćanje rasporeda.
- **Jezici.** Lista jezika u Postavkama prati jezičke datoteke koje build sadrži. Jezici osim engleskog su mašinski nacrti.
- **Uživo i Biblioteka.** Live TeamWork prikazuje žive kursore i imena, a zbirke Biblioteke daju svakoj aplikaciji podrazumijevanu zbirku.

## Ispravljeno

- {{ui:Pusti}} se pretvara u {{ui:Pauziraj}} dok animacija svira, a {{key:Space}} pušta i pauzira dok je vremenska linija otvorena.
- Statični render se vraća na WebGL kad grafička kartica ne može pokrenuti praćenje putanje. Prikaz živog renderovanja i dalje može pokazati grešku; ovo nije provjereno na Windows računaru s tim upravljačkim programom.
- Pravi režim Toka materijala ponovo se povezuje nakon što veza završi na odgovorima o izuzecima PLC-a.

## Iskreno o ograničenjima

- Ništa nije odštampano na pravom štampaču: ni filamentom, ni smolom, ni preko Bambu Connecta. Datoteke za smolu čitali su samo CadCraftovi vlastiti čitači.
- Digitalni blizanac i fabrički pod testirani su samo na simulatorima i poznatim odgovorima, bez pravog PLC-a, linije ili protokola. Pomoćna su sredstva za provjeru, a ne sigurnosna validacija. Fizika pokriva samo kutije, do osam opterećenja.
- Veza s Rhinom i Grasshopperom nikad nije radila u pravim programima.
- Jezici osim engleskog su mašinski nacrti.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promijenilo u ModelCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Dijalog {{ui:Renderuj sliku…}} sada može poslati scenu drugom programu, panel Površine pravi glatke slobodne površine, a asistent koji povežeš može postaviti cijelu scenu jednom rečenicom.

### Novo

**Renderovanje**

- **Izbor motora.** {{ui:Renderuj sliku…}} ima listu **Motor** iznad Režima. Naša dva vlastita motora, Brzi i Praćač putanje, podrazumijevani su i rade svuda. Ostali unosi čuvaju scenu kao paket (model kao USD datoteka, plus datoteka postavki s tačnim vrijednostima materijala, lampama koje su uključene, suncem, nebom, ekspozicijom i kamerom) da se odnese drugom programu. Slika koju nacrta drugi program kaže koji program i koja verzija su je napravili. Vidi [Izaberi koji program crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Lista motora može sačuvati scenu kao USD datoteku, glTF datoteku (`.glb`) ili mapu Unreal projekta (`.zip`), u pregledniku i u CadCraft Studiju. U Studiju može i pokrenuti usdview ili računarov vlastiti program za tu datoteku. Vidi [Otvori scenu u drugom programu](topic:render-open-in).
- **Slanje u pogon za igre iz Studija.** Studio upisuje scenu u projekat Unreal Engine i drži je usklađenom pri svakom slanju, samo jednosmjerno. Tvoje vlastite izmjene žive u sloju koji CadCraft nikad ne piše. Vidi [Pošalji scenu u pogon za igre](topic:render-unreal).
- **Motori iz dodataka.** Dodatak može dodati motor u listu. Onaj napisan u JavaScriptu crta u pregledniku i u Studiju; onaj koji pokreće program treba tvoje „da“ u Studiju. Vidi [Nacrtaj sliku drugim programom](topic:render-other-program) i [Dodaj motor za renderovanje dodatkom](topic:render-engine-addons).
- **Reci scenu.** Reci povezanom asistentu „sumrak, lagana kiša, jesenja stabla, ljudi na trgu“ i ModelCraft to postavlja u jednom koraku: sunce se pomjera na datum i vrijeme da sjene prate, nebo se mijenja, pojavljuju se mokre površine, a stabla i ljudi se postavljaju kao pravi objekti na oznakama koje možeš sakriti, pomjeriti ili obrisati. Doba dana, datum ili godišnje doba, i vremenske prilike (vedro, oblačno, magla, lagana kiša, kiša, oluja) rade i same, a kasniji zahtjev mijenja istu scenu. Magla se prikazuje u visokokvalitetnoj slici na grafičkoj kartici; ostali motori prikazuju nebo, svjetlo i mokre površine. Kiša se ne crta kao padajuće linije.

**Materijali**

- **Materijal iz jedne fotografije.** Daj ModelCraftu fotografiju površine (zid, pod, kamen) i on pravi pločasti materijal: osvjetljenje preko fotografije se izravnava, ivice se spajaju, a mapa boja, mapa hrapavosti i mapa normala izračunavaju se iz slike. To je obična obrada slike tvoje vlastite fotografije, bez obučenog modela. Hrapavost je procjena. Obična, kvadratna fotografija snimljena ravno daje najbolju pločicu; jak uzorak, kao cigle, može pokazati mutan duh tamo gdje je spoj stopljen.

**Površine**

- **Slobodne površine.** Panel {{ui:Površine}} pravi NURBS krive i površine bez obrezivanja: krive kroz tačke, loft, linearne, izvlačenje, rotaciju, opsege duž jedne ili dvije šine, površine iz mreže krivih, zakrpe iz četiri ivice, poklapanje i stapanje. Svaka zajednička ivica mjeri se kao G0, G1 ili G2 (razmak, ugao, skok zakrivljenosti) na tačnim površinama, a ivica lošija nego što si tražio pojavljuje se u panelu Problemi s ispravkom **Poklapanje**. Zebra pruge i boje zakrivljenosti crtaju se iz tačnih površina. Datoteke STEP i IGES izlaze i ulaze. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).

**Teren i prostorije**

- **Fotografija skice na teren.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju ručne skice snimljenu telefonom u ivice na tlu u razmjeri koju navedeš: jedna grupa, s oznakom za svaku boju olovke. List se nalazi i ispravlja na tvom računaru i ništa se ne šalje nigdje. Vidi [Model na situacionom planu](topic:site-plan).
- **Namjesti prostoriju.** Odaberi pod i koristi {{ui:Organizuj}} › {{ui:Namjesti prostoriju…}}. Namještaj za spavaću sobu, dnevnu sobu, trpezariju, kuhinju, kupatilo ili kancelariju postavlja se po pravilima, uz zidove i izvan vrata i prozora, u jednoj grupi koju možeš ukloniti u jednom koraku. To je zadani raspored za tvoj pregled, a ne dizajn. Vidi [Početna biblioteka](topic:starter).

**3D štampanje**

- **Kosi rezovi.** Podjela za štampanje može nagnuti svoje rezove do 60 stepeni, što daje dijelovima više površine za lijepljenje. Spojnici stoje okomito na rez. Vidi [Podijeli model za štampanje](topic:print-split).
- **Provjera štampanja u Problemima.** Nalazi provjere za 3D štampanje prikazuju se u panelu Problemi s oznakama na modelu, a {{ui:Popravka}} ih odatle popravlja. Vidi [Podrška, debljina zida, šupljenje i popravka](topic:print-tools).

**U svakoj aplikaciji**

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Jezici osim engleskog su mašinski nacrti dok ih izvorni govornik ne pročita, a teme pomoći mogu i dalje biti na engleskom.
- **Uređaji za unos.** Trackpad, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu upravljati aplikacijama, za sve njih ili za jednu.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › Redovi alatne trake postavlja Prelom (kao ranije), 2 reda ili 1 red. Traka koja ne staje pomjera se u stranu umjesto da uzima prostor od crteža. Prelom ostaje podrazumijevan.
- **Mreža svojstava.** Polja lampi u ModelCraftu koriste zajedničku mrežu: kategorije koje se mogu sklapati, kolone oznake i vrijednosti, i zbijenu gustinu. Upisana aritmetika poput `2*450` i dalje radi.
- **Problemi.** Panel Problemi (dugme upozorenja u traci aplikacije) zajednički je za sve aplikacije. U ModelCraftu sadrži provjeru štampanja i upozorenja o kontinuitetu površina.
- **Uživo.** Sesija Live TeamWork pokazuje ko je gdje. Vidi [Modeluj zajedno s Live TeamWorkom](topic:work-live).
- **Dodaci.** Dodaci mogu dodati motore za renderovanje, kao gore.
- **Poveži svoj AI.** Ugovor o alatima i provjere osam aplikacija prolaze, sa 454 alata ukupno. Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u pregledniku, vlastiti ključ unutar Studija i objavljen paket još nisu obećani. Aplikacije nemaju vlastitu AI. Vidi [Koristi ModelCraft s AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Odjeljak klasa DWG-a.** Odjeljak klasa u DWG datoteci bio je pročitan kao pogrešan tip, što je moglo pokvariti datoteku pri uvozu. Sada se čita ispravno, u ModelCraftu i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Višak visine mreže ide platnu, a raspored lista počinje na 760 piksela širine ili manje. Stilska tabela ModelCraft-a također ima ovu promjenu.
- **Jezik u Studiju.** CadCraft Studio i spakovana izdanja mogu promijeniti jezik dok rade; ranije su bila samo na engleskom. Ovo još nije testirano na svim platformama: javi nam ako se jezik ne mijenja.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu desnim klikom izaberi {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- Drugi program koji crta sliku bez dodatka motora za renderovanje, panoramske ili stereo kamere i slika neba kroz drugi program, kao i dodatak koji otvara Unreal scenu, još nisu tu. Datoteke se pišu; dodatak nije objavljen i nije pokretan u Unrealu.
- Slobodne površine: G3 i klasa A se ne mjere niti tvrde, a obrezivanje i tijela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel kao naše: podudaraju se samo kamera, sunce, lampe i ekspozicija.
- Ispravka 0.8.1 za promjenu jezika u Studiju nije testirana na svim platformama.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za prethodno izdanje vidi [Šta je novo u 0.7](topic:whats-new-0-7).
