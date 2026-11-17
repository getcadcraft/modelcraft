---
title: Novosti u verziji 0.9
summary: Faza štampanja sa sopstvenim slajserom i slanjem preko USB-a, Klipper-a, OctoPrint-a i PrusaLink-a, slajsovanje za smolu i dodaci za datoteke, tok materijala, digitalni blizanac i dodaci za fabričku halu, NURBS zaobljenja, zadebljavanje i prilagođavanje skenu, AR na terenu i deset metoda lukova.
keywords: novosti, šta je novo, napomene o izdanju, dnevnik promena, 0.9, faza štampanja, 3d štampa, pošalji 3d štampaču, slajser, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, štampanje smolom, goo, sl1, ctb, anycubic, test ekspozicije, tok materijala, digitalni blizanac, fabrička hala, plc, transporter, nurbs, zaobljenje, zadebljavanje, prilagođavanje skeniranja, ar, na terenu, metode lukova, jedinice, novosti, šta je novo, napomene o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, motor renderovanja, motor, otvori u, usd, gltf, unreal, motor dodataka, nurbs, površi, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, reci scenu, scena, vremenska prognoza, doba dana, godišnje doba, asistent, materijal sa fotografije, fotografija, fotografija skice, opremi, opremi prostoriju, nagib, kosi rez, podela, provera štampe, problemi, mreža svojstava, lampe, jezici, ulazni uređaji, redovi alatne trake, dwg, uživo
from: 169048a2
---

Ovo je šta se promenilo u ModelCraft-u 0.9, u poređenju sa 0.8.1. ModelCraft sada dopire do štampača i do fabričke hale: stvari možete da stavite na radnu ploču i da ih pošaljete bez izvoza, slajsujete za filament ili smolu, i rasporedite liniju za rukovanje materijalom. Ovo je CadCraft Studio 0.9 i njegovih osam aplikacija; većina novih funkcija ispod su dodaci.

## Novo

### 3D štampa

- **Faza štampanja.** Kliknite {{ui:Faza štampanja}} na alatnoj traci. Dodajte stavke iz biblioteke na radnu ploču štampača, rasporedite ih, pogledajte kroz slojeve posle slajsovanja i pritisnite {{ui:Pošalji 3D štampaču}}, bez STL-a za izvoz. Pripada dodatku 3D štampa, koji je uključen podrazumevano i može se ukloniti kao svaki dodatak. Vidi [Stavite stvari na radnu ploču i pošaljite ih štampaču](topic:print-stage).
- **Sopstveni slajser za filament.** {{ui:CadCraft basic (uključen, najbrži)}} je slajser u listi **Slajser** na kartici: zidovi, kože, ispuna, oslonci i skirt, na radniku pa stranica ostaje upotrebljiva. {{ui:Pregled slojeva}} sa klizačem **Sloj** prikazuje slojeve pre slanja. Profili štampača, kao stilovi Ender-3 i Prusa MK4, nose sopstveni početni G-kod.
- **Slanje.** Preko USB-a (Chrome ili Edge na računaru, sa otvorenom stranicom), ili ka Klipper-u (Moonraker), OctoPrint-u ili PrusaLink-u na vašoj mreži. Ništa se ne povezuje niti šalje bez klika, a slanje pita pre nego što krene.
- **Drugi slajseri.** Kiri:Moto, PrusaSlicer i OrcaSlicer su sopstveni dodaci, isključeni podrazumevano; dodajte ih sa kartice ili iz {{ui:Podešavanja}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste vašu sopstvenu instaliranu kopiju iz CadCraft Studija. Dodatak za Bambu Lab štampače slajsuje pomoću vašeg OrcaSlicer-a i njegovih P2S profila, i treba Studio na računaru.
- **Štampanje smolom.** Dodaci za smolu (isključeni podrazumevano) prave slike slojeva za ekran vašeg štampača, sa šupljenjem i otvorima za odušak, splavom i osloncima, pregledom slojeva i vremenom, smolom i troškom. Dodaci za formate datoteka pišu Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) i Anycubic (PWMX i PWS). Test ekspozicije za smolu pravi lestvicu od pet ekspozicija. Vidi [Slajsovanje za štampač smolom](topic:resin-printing).
- **Nepromenjeno.** {{ui:Izvezi}} › {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}, alati za štampu i {{ui:Podeli za štampanje}} rade kao u 0.8. Vidi [Pripremite model za 3D štampu](topic:print-3d).

### Tok materijala, digitalni blizanac i fabrička hala

Ovo su tri dodatka, isključena dok ih ne uključite u {{ui:Podešavanja}} › {{ui:Dodaci}}, i svaki ima sopstvenu pomoć kad je uključen.

- **Tok materijala.** Panel pod imenom Tok materijala postavlja transportere, stanice, bafere i AGV staze u 3D pogledu, pokreće simulaciju sa semenom, pušta je unazad, i prikazuje propusnost, rokove i redove, sa rezultatima sačuvanim kao CSV. Narudžbine mogu da dođu iz CSV datoteke. Ćelije robota mogu da se provere i izvezu. PLC veza ima meki režim i pravi režim preko Modbus TCP-a, koji radi samo u CadCraft Studiju.
- **Digitalni blizanac.** Čita raspored iz Toka materijala i pokreće meki PLC nad njim, sa kvarovima koje možete da prisilite, testovima zaliha, poređenjem rasporeda i spiskom materijala.
- **Fabrička hala.** Pretvara stanice u mašine i ćelije, čita ih uživo ili iz simulatora, i vodi red poslova i jednostavan OEE. Samo čita: ova verzija ne može da piše mašini ni PLC-u.

### Površi, modeli i crtanje

- **Zaobljenja, zadebljavanje i bulove operacije na NURBS-u.** Panel {{ui:Površi}} ima {{ui:Zaobljenje između površi}}, {{ui:Zaobljenje više ivica}}, {{ui:Zadeblji u čvrsto telo}} i Spoj, Oduzmi i Presek, svako sa izmerenim odstupanjem. Vidi [Slobodne površi (NURBS)](topic:nurbs-surfaces).
- **Prilagođavanje površi skenu.** Izaberite skeniranu mrežu i koristite {{ui:Prilagodi površine skenu}} u grupi **Skeniranje**, pa {{ui:Spoji površine u čvrsto telo}}. To je prvo prilagođavanje, a ne ceo paket za reverzni inženjering.
- **Živa veza sa .3dm modelerom.** Jednosmerna, iz Rhino 8 ili Grasshopper-a, i treba joj CadCraft Studio na istom računaru. Vidi [Držite .3dm model živim](topic:live-3dm-link).
- **Pogled modela na terenu.** {{ui:Pregled na terenu (AR, telefon)}} u meniju {{ui:Pogledi}} radi na Android telefonu sa Chrome-om. Vidi [Pogled modela na terenu sa Android telefonom (AR)](topic:ar-on-site).
- **Metode lukova.** Padajuća lista {{ui:Metode lukova}} nudi deset načina da nacrtate luk, uključujući {{ui:3 tačke}} i {{ui:Početak, Centar, Kraj}}.
- **Više jedinica.** Težine (kg, lb, t, ton) i temperature (stepeni C, F, K i R) se razumeju tamo gde ukucavate vrednosti sa jedinicama.

## U svim aplikacijama

- **Opisi alata.** Tekst koji se pojavi kad pokažete na dugme ili odsečene oznake su Bootstrap opis alata.
- **Zatvorljiva početna napomena.** Kartica sa savetom na praznom crtežu ima malo dugme za zatvaranje. Ostaje zatvorena, a paleta komandi može da je ponovo prikaže.
- **Trake kartica sa pomicanjem.** Traka kartica panela koja ne staje se pomera umesto da bude odsečena.
- **Naslovi kartica.** Kad je dokument otvoren, kartica pregledača počinje imenom dokumenta, pa ModelCraft i CadCraft. Tačka dolazi prva dok nije sačuvano.
- **Raspored.** {{ui:Podešavanja}} › {{ui:Opšte}} › Raspored čuva rasporede u padajućoj listi, sa izborom da se raspored koristi samo za ovu aplikaciju i dugmetom za vraćanje rasporeda.
- **Jezici.** Lista jezika u Podešavanjima prati jezičke datoteke koje build sadrži. Jezici osim engleskog su mašinski nacrti.
- **Uživo i Biblioteka.** Live TeamWork prikazuje žive kursore i imena, a kolekcije Biblioteke daju svakoj aplikaciji podrazumevanu kolekciju.

## Ispravljeno

- {{ui:Reprodukuj}} se pretvara u {{ui:Pauziraj}} dok animacija svira, a {{key:Space}} pušta i pauzira dok je vremenska linija otvorena.
- Renderovanje slike vraća se na WebGL kad grafička kartica ne može da pokrene praćenje putanje zraka. Živi prikaz renderovanja i dalje može da pokaže grešku; ovo nije proverено na Windows računaru sa tim drajverom.
- Renderovanje toka materijala u pravom režimu ponovo se povezuje posle što se veza prekine zbog odgovora PLC-a sa greškom.

## Iskreno o ograničenjima

- Ništa nije odštampano na pravom štampaču: ni filamentom, ni smolom, ni preko Bambu Connect-a. Datoteke za smolu su čitali samo sopstveni čitači CadCraft-a.
- Digitalni blizanac i fabrička hala testirani su samo sa simulatorima i poznatim odgovorima, bez pravog PLC-a, linije ili protokola. Oni su pomoć pri proveri, a ne bezbednosna validacija. Fizika pokriva samo kutije, do osam opterećenja.
- Veza sa Rhino-om i Grasshopper-om nikad nije radila u pravim programima.
- Jezici osim engleskog su mašinski nacrti.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u ModelCraft-u 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u poređenju sa 0.7. Dijalog {{ui:Renderuj sliku…}} sada može da pošalje scenu drugom programu, panel Površi pravi glatke slobodne površi, a asistent koji povežete može da postavi celu scenu iz jedne rečenice.

### Novo

**Renderovanje**

- **Izbor mehanizma.** {{ui:Renderuj sliku…}} ima listu **Mehanizam** iznad režima. Naša dva sopstvena mehanizma, Brzi i Praćenje putanje zraka, su podrazumevani i rade svuda. Ostali unosi čuvaju scenu kao paket (model kao USD datoteka, plus datoteka podešavanja sa tačnim vrednostima materijala, lampama koje su uključene, suncem, nebom, ekspozicijom i kamerom) da ga odnesete drugom programu. Slika koju je nacrtao drugi program kaže koji program i koja verzija su je napravili. Vidi [Izaberite koji program crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Lista Mehanizam može da sačuva scenu kao USD datoteku, glTF datoteku (`.glb`) ili fasciklu Unreal projekta (`.zip`), u pregledaču i u CadCraft Studiju. U Studiju može i da pokrene usdview ili računarov sopstveni program za datoteku. Vidi [Otvorite scenu u drugom programu](topic:render-open-in).
- **Pošaljite u igrački motor iz Studija.** Studio upisuje scenu u Unreal Engine projekat i održava je sinhronizovanom pri svakom slanju, samo u jednom smeru. Vaše sopstvene izmene žive u sloju koji CadCraft nikad ne piše. Vidi [Pošaljite scenu igračkom motoru](topic:render-unreal).
- **Mehanizmi iz dodataka.** Dodatak može da doda mehanizam listi. Onaj napisan u JavaScript-u crta u pregledaču i u Studiju; onaj koji pokreće program traži vaše da u Studiju. Vidi [Nacrtajte sliku drugim programom](topic:render-other-program) i [Dodajte mehanizam renderovanja dodatkom](topic:render-engine-addons).
- **Recite scenu.** Recite povezanom asistentu „sumrak, laka kiša, jesenja stabla, ljudi na trgu” i ModelCraft je postavi u jednom koraku: sunce se pomera na datum i vreme da senke prate, nebo se menja, pojave se mokre površi, a drveće i ljudi se postavljaju kao pravi objekti na oznakama koje možete sakriti, pomerati ili obrisati. Doba dana, datum ili godišnje doba, i vremenska prognoza (vedro, oblačno, magla, laka kiša, kiša, oluja) rade i sami, a kasniji zahtev menja istu scenu. Magla se vidi na slici visokog kvaliteta na grafičkoj kartici; ostali mehanizmi prikazuju nebo, svetlo i mokre površi. Kiša se ne crta kao padajuće linije.

**Materijali**

- **Materijal sa jedne fotografije.** Dajte ModelCraft-u fotografiju površi (zida, poda, kamena) i on pravi materijal pločica: osvetljenje preko fotografije se izravnava, ivice se spajaju, a mapa boje, mapa hrapavosti i mapa normala se izvode iz slike. To je obična obrada slike na vašoj sopstvenoj fotografiji, bez treniranog modela. Hrapavost je procena. Ravna, kvadratna, pravo gledana fotografija daje najbolju pločicu; jak uzorak kao cigle može da pokaže mutnu senku tamo gde je spoj stopljen.

**Površi**

- **Slobodne površi.** Panel {{ui:Površi}} pravi NURBS krive i površi bez obrezivanja: krive kroz tačke, loft, pravolinijske, izvlačenje, rotiranje, provlačenja duž jedne ili dve šine, površi iz mreže krivih, zakrpe od četiri ivice, poklapanje i stapanje. Svaka zajednička ivica meri se kao G0, G1 ili G2 (razmak, ugao, skok zakrivljenosti) na tačnim površima, a ivica lošija nego što ste tražili pojavi se u panelu Problemi sa popravkom **Poklopi**. Zebra pruge i boje zakrivljenosti crtaju se iz tačnih površi. STEP i IGES datoteke se izvoze i uvoze. Vidi [Slobodne površi (NURBS)](topic:nurbs-surfaces).

**Teren i prostorije**

- **Skica sa fotografije na tlu.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju telefonom ručne skice u ivice na tlu u razmeri koju kažete: jedna grupa, sa oznakom za svaku boju olovke. Papir se pronalazi i ispravlja na vašem računaru, i ništa se nigde ne šalje. Vidi [Model na situacionom planu](topic:site-plan).
- **Opremite prostoriju.** Izaberite pod i koristite {{ui:Organizacija}} › {{ui:Opremi prostoriju…}}. Nameštaj za spavaću sobu, dnevnu sobu, trpezariju, kuhinju, kupatilo ili kancelariju postavlja se po pravilima, uz zidove i dalje od vrata i prozora, u jednoj grupi koju možete odneti u jednom koraku. To je podrazumevani raspored za vaš pregled, a ne dizajn. Vidi [Početna biblioteka](topic:starter).

**3D štampa**

- **Kosi rezovi.** Podeli za štampanje može da nagne rezove do 60 stepeni, što delovima daje više površine za lepljenje. Konektori stoje normalno na rez. Vidi [Podela modela za štampanje](topic:print-split).
- **Provera štampe u Problemima.** Nalazi provere za 3D štampu pokazuju se u panelu Problemi sa oznakama na modelu, a Popravka ih popravlja odatle. Vidi [Oslonci, debljina zida, šuplјenje i popravka](topic:print-tools).

**U svim aplikacijama**

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbekistanski. Jezici osim engleskog su mašinski nacrti dok ih ne pregleda izvorni govornik, a tekstovi pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Tačpad, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu da pokreću aplikacije, za sve ili za jednu.
- **Redovi alatne trake.** {{ui:Podešavanja}} › {{ui:Opšte}} › Redovi alatne trake postavlja Prelom (kao ranije), 2 reda ili 1 red. Traka koja ne staje pomera se bočno umesto da uzima prostor od crteža. Prelom ostaje podrazumevan.
- **Mreža svojstava.** Polja lampi u ModelCraft-u koriste zajedničku mrežu: kategorije koje se skupljaju, kolone za oznaku i vrednost, i gustinu Zbijeno. Unete računice poput `2*450` i dalje rade.
- **Problemi.** Panel Problemi (dugme upozorenja na traci aplikacije) dele sve aplikacije. U ModelCraft-u sadrži proveru štampe i upozorenja o kontinuitetu površi.
- **Uživo.** Sesija Live TeamWork pokazuje ko je gde. Vidi [Zajednički rad na modelu uz Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu da dodaju mehanizme renderovanja, kao gore.
- **Povežite svog AI.** Ugovor o alatima i provere osam aplikacija prolaze, sa 454 alata ukupno. Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u pregledaču, vaš sopstveni ključ unutar Studija i objavljen paket još nisu obećani. Aplikacije nemaju sopstveni AI. Vidi [Korišćenje ModelCraft-a uz AI asistenta](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Odeljak klasa DWG-a.** Odeljak klasa u DWG datoteci bio je pročitan kao pogrešan tip, što je moglo da pokvari datoteku pri uvozu. Sada se čita ispravno, u ModelCraft-u i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Višak visine mreže ide platnu, a raspored lista počinje na 760 piksela širine ili manje. Stilska tabela ModelCraft-a ima tu promenu.
- **Jezik u Studiju.** CadCraft Studio i spakovana izdanja mogu da promene jezik dok rade; pre toga bili su samo na engleskom. Ovo nije testirano na svakoj platformi, pa nam javite ako se jezik ne menja.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može da prikaže SmartScreen: izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, kliknite desnim tasterom i izaberite {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- Drugi program koji crta sliku bez dodatka za mehanizam renderovanja, panorame ili stereo kamere i slika neba preko drugog programa još nisu tu, kao ni dodatak koji otvara Unreal scenu. Datoteke se pišu; dodatak nije objavljen i nije pokrenut u Unreal-u.
- Slobodne površi: G3 i klasa A se ne mere niti tvrde, a obrezivanje i tela dolaze kasnije.
- Slike iz drugih programa nisu piksel za piksel kao naše: samo kamera, sunce, lampe i ekspozicija se poklapaju.
- Popravka promene jezika u Studiju za 0.8.1 nije testirana na svakoj platformi.
