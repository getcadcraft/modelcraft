---
title: Novosti u verziji 0.9 (ranije)
summary: Faza štampe sa sopstvenim programom za podelu na slojeve i slanjem preko USB-a, Klipper-a, OctoPrint-a i PrusaLink-a, podela na slojeve za smolu i dodaci za datoteke, tok materijala, dodaci digitalni blizanac i fabrički pod, NURBS zaobljenja, zadebljavanje i prilagođavanje skenu, AR na terenu i deset metoda luka.
keywords: novosti 0.9, ranija verzija, novosti, šta je novo, beleške o izdanju, dnevnik promena, izmene, 0.9, faza štampe, 3d štampa, pošalji na 3D štampač, slajser, cadcraft osnovni, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, štampanje smolom, goo, sl1, ctb, anycubic, test ekspozicije, tok materijala, digitalni blizanac, fabrički pod, plc, transporter, nurbs, zaobljenje, zadebljavanje, prilagođavanje skena, ar, na terenu, metode luka, jedinice, mehanizam renderovanja, mehanizam, otvori u, usd, gltf, unreal, dodatak mehanizma, površi, loft, provlačenje, kontinuitet, g0, g1, g2, zebra, step, iges, opiši scenu, scena, vreme, doba dana, godišnje doba, asistent, materijal sa fotografije, fotografija, fotografija skice, opremanje, opremanje prostorije, kosi, kosi rez, podela, provera štampe, problemi, mreža svojstava, svetiljke, jezici, ulazni uređaji, redovi alatki, dwg, uživo
from: 2717d1b1
---

Ovo se promenilo u ModelCraft 0.9 u odnosu na 0.8.1. ModelCraft sada dopire do štampača i do pogona: deo možete staviti na podlogu za štampu i poslati ga bez izvoza, podeliti na slojeve za filament ili smolu i rasporediti liniju za rukovanje materijalom. Ovo je CadCraft Studio 0.9 i njegovih osam aplikacija; većina novih funkcija ispod su dodaci.

## Novo

### 3D štampa

- **Faza štampe.** Kliknite {{ui:Faza štampe}} na traci sa alatkama. Dodajte stavke iz biblioteke na podlogu štampača, rasporedite ih, pogledajte podeljene slojeve i pritisnite {{ui:Pošalji na 3D štampač}}, bez izvoza STL-a. Pripada dodatku 3D štampa, koji je uključen podrazumevano i može se ukloniti kao svaki dodatak. Pogledajte [Postavljanje stvari na podlogu za štampu i slanje štampaču](topic:print-stage).
- **Naš program za podelu na slojeve za filament.** {{ui:CadCraft osnovni (uključen, najbrži)}} je program u listi **Slajser** na kartici: zidovi, omotači, ispuna, oslonci i pregrada, na radnom procesu da stranica ostane upotrebljiva. {{ui:Pregledaj slojeve}} sa klizačem **Sloj** prikazuje slojeve pre slanja. Profili štampača, kao što su stilovi Ender-3 i Prusa MK4, nose sopstveni početni G-kod.
- **Slanje.** Preko USB-a (Chrome ili Edge na računaru, sa otvorenom stranicom), ili na Klipper (Moonraker), OctoPrint ili PrusaLink na vašoj mreži. Ništa se ne povezuje i ništa se ne šalje bez klika, a slanje uvek pita pre nego što krene.
- **Ostali programi za podelu na slojeve.** Kiri:Moto, PrusaSlicer i OrcaSlicer su zasebni dodaci, isključeni podrazumevano; dodajte ih iz kartice ili iz {{ui:Podešavanja}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste vašu instaliranu kopiju iz CadCraft Studia. Dodatak za Bambu Lab štampače deli na slojeve pomoću vašeg OrcaSlicer-a i njegovih P2S profila i zahteva Studio na računaru.
- **Štampanje smolom.** Dodaci za smolu (isključeni podrazumevano) prave slike slojeva za ekran vašeg štampača, sa izdubljivanjem i otvorima za vazduh, podlogom i osloncima, pregledom slojeva, i vremenom, smolom i cenom. Dodaci za format datoteke upisuju Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) i Anycubic (PWMX i PWS). Test ekspozicije za smolu pravi lestvicu od pet ekspozicija. Pogledajte [Podela na slojeve za štampač smolom](topic:resin-printing).
- **Bez promena.** {{ui:Izvezi}} › {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}, alati za štampu i podela za štampanje rade kao u 0.8. Pogledajte [Priprema modela za 3D štampu](topic:print-3d).

### Tok materijala, digitalni blizanac i fabrički pod

Ova tri su dodaci, isključeni dok ih ne uključite u {{ui:Podešavanja}} › {{ui:Dodaci}}, a svaki ima svoju pomoć kada je uključen.

- **Tok materijala.** Panel pod nazivom Tok materijala raspoređuje transportere, stanice, bafere i putanje AGV vozila u 3D prikazu, pokreće simulaciju sa zadatim semenom, pušta je i prikazuje protok, rokove isporuke i redove čekanja, a rezultati se čuvaju kao CSV. Narudžbine mogu doći iz CSV datoteke. Ćelije sa robotima mogu se proveriti i izvesti. Veza sa PLC-om ima meki režim i pravi režim preko Modbus TCP-a, koji radi samo u CadCraft Studiu.
- **Digitalni blizanac.** Čita raspored iz toka materijala i pokreće meki PLC nad njim, sa greškama koje možete prisilno izazvati, testovima zaliha, poređenjem rasporeda i spiskom materijala.
- **Fabrički pod.** Pretvara stanice u mašine i ćelije, čita ih uživo ili iz simulatora, i vodi red poslova i jednostavan OEE. Samo čita: ova verzija ne može da piše mašini ili PLC-u.

### Površi, modeli i crtež

- **Zaobljenja, zadebljavanje i bulove operacije na NURBS-u.** Panel {{ui:Površi}} ima {{ui:Zaobljenje između površi}}, {{ui:Zaobljenje više ivica}}, {{ui:Zadeblji u čvrsto telo}} i Unija, Oduzimanje i Presek, svaku sa izmerenim odstupanjem. Pogledajte [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Prilagodi površine skenu.** Izaberite skenirani mesh i koristite {{ui:Prilagodi površine skenu}} u grupi **Skeniranje**, pa {{ui:Spoji površine u čvrsto telo}}. To je prvo prilagođavanje, a ne ceo paket za reverzni inženjering.
- **Živa veza sa .3dm modelarom.** Jednosmerna, iz Rhino 8 ili Grasshopper-a, i zahteva CadCraft Studio na istom računaru. Pogledajte [Držanje .3dm modela živim](topic:live-3dm-link).
- **Pogledajte model na terenu.** {{ui:Pregled na terenu (AR, telefon)}} u meniju {{ui:Pogledi}} radi na Android telefonu sa Chrome-om. Pogledajte [Pogled na model na terenu preko Android telefona (AR)](topic:ar-on-site).
- **Metode luka.** Padajuća lista {{ui:Metode luka}} nudi deset načina crtanja luka, uključujući {{ui:3 tačke}} i {{ui:Početak, Centar, Kraj}}.
- **Više jedinica.** Težine (kg, lb, t, ton) i temperature (stepeni C, F, K i R) se razumeju tamo gde unosite vrednosti sa jedinicama.

## U svakoj aplikaciji

- **Kratki opisi.** Tekst koji se pojavi pri prelasku mišem preko dugmadi i skraćenih natpisa je Bootstrap tooltip.
- **Zatvorivi početni savet.** Kartica sa savetom na praznom području crteža ima mali zatvarač x. Ostaje zatvorena, a paleta komandi može da je ponovo prikaže.
- **Trake kartica sa pomeranjem.** Traka kartica panela koja ne staje pomera se umesto da bude odsečena.
- **Naslovi kartica.** Kada je dokument otvoren, kartica pregledača počinje imenom dokumenta, pa ModelCraft i CadCraft. Tačka se pojavljuje ispred dok nije sačuvano.
- **Raspored.** {{ui:Podešavanja}} › {{ui:Opšte}} › Raspored sadrži rasporede u padajućoj listi, sa izborom da raspored važi samo za ovu aplikaciju i dugmetom za vraćanje rasporeda.
- **Jezici.** Lista jezika u Podešavanjima prati jezičke datoteke koje build sadrži. Jezici osim engleskog su mašinski nacrti.
- **Uživo i biblioteka.** Live TeamWork prikazuje kursore i imena uživo, a kolekcije biblioteke daju svakoj aplikaciji podrazumevanu kolekciju.

## Ispravljeno

- {{ui:Pusti}} se pretvara u {{ui:Pauziraj}} dok animacija radi, a {{key:Space}} pušta i pauzira dok je vremenska linija otvorena.
- Nepokretni render se vraća na WebGL kada grafička karta ne može da pokrene path tracer. Prikaz živog renderovanja i dalje može pokazivati grešku; nije proveren na Windows računaru sa tim drajverom.
- Veza u pravom režimu toka materijala ponovo se povezuje posle prekida veze zbog odgovora PLC-a sa izuzetkom.

## Iskrena ograničenja

- Ništa nije odštampano na pravom štampaču: ni filament, ni smola, ni preko Bambu Connect-a. Datoteke za smolu su proverene samo čitačima koje ima CadCraft.
- Digitalni blizanac i fabrički pod su testirani samo na simulatorima i poznatim rezultatima, bez pravog PLC-a, linije ili protokola. To su pomoćna sredstva za proveru, a ne bezbednosna provera. Fizika pokriva samo kutije, do osam opterećenja.
- Veza sa Rhino-m i Grasshopper-om nikada nije radila u pravim programima.
- Jezici osim engleskog su mašinski nacrti.

## Ranije: 0.8 i 0.8.1

Ovo se promenilo u ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Dijalog {{ui:Renderuj sliku…}} sada može poslati scenu drugom programu, panel Površi pravi glatke slobodne površine, a asistent koji povežete može da postavi celu scenu jednom rečenicom.

### Novo

**Renderovanje**

- **Izbor mehanizma.** {{ui:Renderuj sliku…}} ima listu **Mehanizam** iznad Režima. Naša dva mehanizma, Brzi i Path tracer, su podrazumevani i rade svuda. Ostali unosi čuvaju scenu kao paket (model kao USD datoteka, plus datoteka podešavanja sa tačnim vrednostima materijala, uključenim svetiljkama, suncem, nebom, ekspozicijom i kamerom) da ga odnesete u drugi program. Slika koju je nacrtao drugi program kaže koji ga je program i koja verzija napravila. Pogledajte [Izbor programa koji crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Lista Mehanizam može da sačuva scenu kao USD datoteku, glTF datoteku (`.glb`) ili fasciklu Unreal projekta (`.zip`), u pregledaču i u CadCraft Studiu. U Studiu može i da pokrene usdview ili sopstveni program računara za datoteku. Pogledajte [Otvaranje scene u drugom programu](topic:render-open-in).
- **Slanje u mehanizam za igre iz Studija.** Studio upisuje scenu u Unreal Engine projekat i održava je u skladu pri svakom slanju, samo u jednom smeru. Vaše izmene žive u sloju koji CadCraft nikada ne piše. Pogledajte [Slanje scene u mehanizam za igre](topic:render-unreal).
- **Mehanizmi iz dodataka.** Dodatak može dodati mehanizam u listu. Onaj napisan u JavaScript-u crta u pregledaču i u Studiu; onaj koji pokreće program traži vaše da u Studiu. Pogledajte [Crtanje slike drugim programom](topic:render-other-program) i [Dodavanje mehanizma za renderovanje dodatkom](topic:render-engine-addons).
- **Opišite scenu.** Recite svom povezanom asistentu „sumrak, laka kiša, jesenja stabla, ljudi na trgu” i ModelCraft postavlja sve u jednom koraku: sunce se pomera na datum i vreme da senke prate, nebo se menja, pojavljuju se mokre površine, a drveće i ljudi se postavljaju kao pravi objekti na oznakama koje možete sakriti, pomeriti ili obrisati. Doba dana, datum ili godišnje doba i vreme (vedro, oblačno, magla, laka kiša, kiša, oluja) rade i sami, a kasniji zahtev menja istu scenu. Magla se vidi na slici visokog kvaliteta na grafičkoj karti; ostali mehanizmi prikazuju nebo, svetlo i mokre površine. Kiša se ne crta kao padajuće linije.

**Materijali**

- **Materijal sa jedne fotografije.** Dajte ModelCraft-u fotografiju površine (zid, pod, kamen) i pravi materijal za popločavanje: osvetljenje preko fotografije se izravnava, ivice se spajaju, a mape boje, hrapavosti i normale se izvode iz slike. To je obična obrada slike vaše fotografije, bez obučenog modela. Hrapavost je procena. Ravna, kvadratna fotografija pravo iz ugla daje najbolju pločicu; jak uzorak, kao što su cigle, može pokazati mutan duh tamo gde je spoj stopljen.

**Površi**

- **Slobodne površine.** Panel {{ui:Površi}} pravi NURBS krive i neobrezane površine: krive kroz tačke, loft, pravolinijske, izvlačenje, rotiranje, provlačenje duž jedne ili dve šine, površine iz mreže krivih, zakrpe od četiri ivice, poklapanje i stapanje. Svaka zajednička ivica se meri kao G0, G1 ili G2 (razmak, ugao, skok zakrivljenosti) na tačnim površinama, a ivica lošija od tražene pojavljuje se u panelu Problemi sa popravkom **Poklopi**. Zebra pruge i boje zakrivljenosti crtaju se iz tačnih površina. STEP i IGES datoteke se šalju i primaju. Pogledajte [Slobodne površine (NURBS)](topic:nurbs-surfaces).

**Lokacija i prostorije**

- **Skica sa fotografije na tlo.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju ručne skice snimljenu telefonom u ivice na tlu u razmeri koju navedete: jedna grupa, sa oznakom za svaku boju olovke. Papir se pronalazi i ispravlja na vašem računaru, a ništa se nigde ne šalje. Pogledajte [Model na situacionom planu](topic:site-plan).
- **Opremanje prostorije.** Izaberite pod i koristite {{ui:Organizacija}} › {{ui:Opremi prostoriju…}}. Nameštaj za spavaću sobu, dnevnu sobu, trpezariju, kuhinju, kupatilo ili kancelariju raspoređuje se po pravilima, uz zidove i bez vrata i prozora, u jednoj grupi koju možete ukloniti u jednom koraku. To je podrazumevani raspored za vaš pregled, a ne projekat. Pogledajte [Početna biblioteka](topic:starter).

**3D štampa**

- **Kosi rezovi.** Podela za štampanje može kositi rezove do 60 stepeni, što delovima daje veću površinu za lepljenje. Spojnice stoje upravno na rez. Pogledajte [Podela modela za štampanje](topic:print-split).
- **Provera štampe u Problemima.** Nalazi provere 3D štampe prikazuju se u panelu Problemi sa oznakama na modelu, a Popravi ih ispravlja odatle. Pogledajte [Oslonci, debljina zida, izdubljivanje i popravka](topic:print-tools).

**U svakoj aplikaciji**

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbekistanski. Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik, a teme pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Touchpad, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu upravljati aplikacijama, za sve njih ili za jednu.
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › Redovi alatki postavljaju Prelom (kao ranije), 2 reda ili 1 red. Traka koja ne staje pomera se u stranu umesto da uzima prostor od crteža. Prelom ostaje podrazumevan.
- **Mreža svojstava.** Polja svetiljki u ModelCraft-u koriste zajedničku mrežu: sklopive kategorije, kolone natpisa i vrednosti, i gustina Kompaktno. Upisana aritmetika kao `2*450` i dalje radi.
- **Problemi.** Panel Problemi (dugme upozorenja na traci aplikacije) deli svih aplikacija. U ModelCraft-u sadrži proveru štampe i upozorenja o kontinuitetu površi.
- **Uživo.** Sesija Live TeamWork prikazuje ko je gde. Pogledajte [Zajednički model uz Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu dodati mehanizme za renderovanje, kao gore.
- **Povežite svoj AI.** Ugovor o alatkama i provere osam aplikacija su prošli, sa 454 alata ukupno. Povezivanje jednim klikom u Studiu, hostovani konektor za asistente u pregledaču, vaš sopstveni ključ u Studiu i objavljen paket još nisu obećani. Aplikacije ne sadrže sopstvenu AI. Pogledajte [Korišćenje ModelCraft-a sa AI asistentima](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Odeljak klasa DWG datoteke.** Odeljak klasa DWG datoteke bio je pročitan kao pogrešan tip, što je moglo da pokvari datoteku pri uvozu. Sada se čita ispravno, u ModelCraft-u i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Višak visine mreže ide na platno, a raspored lista počinje na 760 piksela širine ili manje. Stil ModelCraft-a takođe ima tu izmenu.
- **Jezik u Studiu.** CadCraft Studio i spakovana izdanja mogu da promene jezik dok rade; pre toga bili su samo na engleskom. Ovo nije testirano na svim platformama: javite nam ako se jezik ne menja.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u kliknite desnim tasterom i izaberite {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- Drugi program koji crta sliku bez dodatka za mehanizam renderovanja, panoramske ili stereo kamere i slika neba preko drugog programa još nisu tu, kao ni dodatak koji otvara Unreal scenu. Datoteke se upisuju; dodatak nije objavljen i nije pokrenut u Unreal-u.
- Slobodne površine: G3 i klasa A se ne mere niti tvrde, a sečenje i tela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel kao naše: poklapaju se samo kamera, sunce, svetiljke i ekspozicija.
- Ispravka za 0.8.1 za promenu jezika u Studiu nije testirana na svim platformama.

Sve ostalo je u [Još nije izrađeno](topic:not-built-yet). Za prethodno izdanje pogledajte [Novosti u verziji 0.7](topic:whats-new-0-7).
