---
title: Šta je novo u 0.9 (ranije)
summary: Faza štampanja s vlastitim rezačem i slanjem preko USB-a, Klipper-a, OctoPrint-a i PrusaLink-a, rezanje za smolu i dodaci za datoteke, tok materijala, dodaci za digitalnog blizanca i proizvodni pogon, NURBS zaobljenja, zadebljivanje i prilagodba skeniranja, AR na lokaciji i deset metoda luka.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, napomene o izdanju, dnevnik promjena, 0.9, faza štampanja, 3D štampa, pošalji 3D štampaču, rezač, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, štampanje smolom, goo, sl1, ctb, anycubic, test ekspozicije, tok materijala, digitalni blizanac, proizvodni pogon, plc, transporter, nurbs, zaobljenje, zadebljivanje, prilagodba skeniranja, ar, na lokaciji, metode luka, jedinice, promjene, 0.8, 0.8.1, verzija, nove funkcije, mehanizam renderovanja, mehanizam, otvori u, usd, gltf, unreal, mehanizam dodatka, površine, loft, provlačenje, kontinuitet, g0, g1, g2, zebra, step, iges, opiši scenu, scena, vremenski uslovi, doba dana, godišnje doba, asistent, materijal iz fotografije, fotografija, fotografija skice, namjesti, namjesti prostoriju, kosi rez, podijeli, provjera štampe, problemi, mreža svojstava, lampe, jezici, ulazni uređaji, redovi alatne trake, dwg, uživo
from: 2717d1b1
---

Ovo je šta se promijenilo u ModelCraftu 0.9, u odnosu na 0.8.1. ModelCraft sada dopire do štampača i do proizvodnog pogona: možeš postaviti stvari na podlogu za štampu i poslati ih bez izvoza, rezati za filament ili smolu i postaviti liniju za rukovanje materijalom. Ovo je CadCraft Studio 0.9 i njegovih osam aplikacija; većina novih funkcija ispod su dodaci.

## Novo

### 3D štampa

- **Faza štampanja.** Klikni {{ui:Faza štampanja}} na alatnoj traci. Dodaj stavke iz biblioteke na podlogu štampača, rasporedi ih, pogledaj razrezane slojeve i pritisni {{ui:Pošalji 3D štampaču}}, bez STL-a za izvoz. Pripada dodatku 3D štampa, koji je uključen po zadanom i može se ukloniti kao svaki dodatak. Vidi [Postavi stvari na podlogu za štampanje i pošalji ih štampaču](topic:print-stage).
- **Vlastiti rezač za filament.** {{ui:CadCraft basic (uključen, najbrži)}} je rezač na listi **Rezač** na kartici: zidovi, omotači, ispuna, oslonci i skirt, na radniku, pa stranica ostaje upotrebljiva. {{ui:Pregled slojeva}} s klizačem **Sloj** prikazuje slojeve prije slanja. Profili štampača, poput stilova Ender-3 i Prusa MK4, nose svoj početni G-kod.
- **Slanje.** Preko USB-a (Chrome ili Edge na računaru, uz stranicu koja ostaje otvorena), ili na Klipper (Moonraker), OctoPrint ili PrusaLink na tvojoj mreži. Ništa se ne povezuje niti šalje bez klika, a slanje prvo pita.
- **Drugi rezači.** Kiri:Moto, PrusaSlicer i OrcaSlicer su zasebni dodaci, isključeni po zadanom; dodaj ih s kartice ili iz {{ui:Postavke}} › {{ui:Dodaci}}. PrusaSlicer i OrcaSlicer koriste tvoju instaliranu kopiju iz CadCraft Studija. Dodatak za Bambu Lab štampače reže pomoću tvog OrcaSlicera i njegovih P2S profila i zahtijeva Studio na računaru.
- **Štampanje smolom.** Dodaci za smolu (isključeni po zadanom) prave slike slojeva za ekran tvog štampača, s izdubljivanjem i otvorima za odzračivanje, plutajućom podlogom i osloncima, pregledom slojeva, te vremenom, smolom i troškom. Dodaci za formate datoteka zapisuju Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) i Anycubic (PWMX i PWS). Test ekspozicije smole pravi ljestvicu od pet ekspozicija. Vidi [Rezanje za štampač sa smolom](topic:resin-printing).
- **Nepromijenjeno.** {{ui:Izvezi}} › {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}, alati za štampu i Podijeli za štampanje rade kao u 0.8. Vidi [Pripremi model za 3D štampanje](topic:print-3d).

### Tok materijala, digitalni blizanac i proizvodni pogon

Ova tri su dodaci, isključeni dok ih ne uključiš u {{ui:Postavke}} › {{ui:Dodaci}}, i svaki ima vlastitu pomoć kad je uključen.

- **Tok materijala.** Panel pod nazivom Tok materijala postavlja transportere, stanice, bafere i putanje AGV-a u 3D prikazu, pokreće simulaciju sa zadanim sjemenom, reproducira je i prikazuje protok, vremena isporuke i redove, a rezultati se spašavaju kao CSV. Narudžbe mogu doći iz CSV datoteke. Roboti ćelije mogu se provjeriti i izvesti. PLC veza ima meki režim i pravi režim preko Modbus TCP-a, koji radi samo u CadCraft Studiju.
- **Digitalni blizanac.** Čita raspored Toka materijala i pokreće meki PLC nad njim, s kvarovima koje možeš prisilno uključiti, testovima zaliha, poređenjem rasporeda i listom materijala.
- **Proizvodni pogon.** Pretvara stanice u mašine i ćelije, čita ih uživo ili iz simulatora, i vodi red poslova i jednostavan OEE. Samo čita: ova verzija ne može pisati na mašinu ili PLC.

### Površine, modeli i crtanje

- **Zaobljenja, zadebljivanje i bulovske operacije na NURBS-u.** Panel {{ui:Površine}} ima {{ui:Zaobljenje između površina}}, {{ui:Zaobljenje više ivica}}, {{ui:Zadeblji u tijelo}} i Unija, Oduzmi i Presjek, svaka s izmjerenim odstupanjem. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Prilagodba površina skenu.** Odaberi skeniranu mrežu i koristi {{ui:Prilagodi površine skenu}} u grupi **Skeniraj**, zatim {{ui:Spoji površine u tijelo}}. To je prvo prilagođavanje, a ne potpun paket za reverzni inženjering.
- **Živa veza s 3dm modelarom.** Jednosmjerna, iz Rhina 8 ili Grasshoppera, i potreban je CadCraft Studio na istom računaru. Vidi [Održavaj .3dm model živim](topic:live-3dm-link).
- **Pogled modela na lokaciji.** {{ui:Pogled na lokaciji (AR, telefon)}} u meniju {{ui:Pogledi}} radi na Android telefonu s Chromeom. Vidi [Pogled modela na lokaciji Android telefonom (AR)](topic:ar-on-site).
- **Metode luka.** Padajući meni {{ui:Metode luka}} nudi deset načina crtanja luka, uključujući {{ui:3 tačke}} i {{ui:Početak, centar, kraj}}.
- **Više jedinica.** Težine (kg, lb, t, ton) i temperature (stepeni C, F, K i R) se prepoznaju tamo gdje upisuješ vrijednosti s jedinicama.

## U svakoj aplikaciji

- **Oblačići.** Tekst koji se pojavi pri prelasku mišem preko dugmadi i skraćenih natpisa je Bootstrap tooltip.
- **Zatvorljiva početna napomena.** Kartica napomene na praznom području crteža ima mali zatvarač x. Ostaje zatvorena, a paleta naredbi je može ponovo prikazati.
- **Traka kartica s pomicanjem.** Ako traka kartica panela ne stane, pomiče se umjesto da bude odsječena.
- **Naslovi kartica.** Kad je dokument otvoren, kartica preglednika počinje nazivom dokumenta, zatim ModelCraft i CadCraft. Tačka dolazi prva dok je nespašen.
- **Raspored.** {{ui:Postavke}} › {{ui:Opšte}} › Raspored drži rasporede u padajućem meniju, s izborom da se raspored koristi samo za ovu aplikaciju i dugmetom za vraćanje rasporeda.
- **Jezici.** Lista jezika u Postavkama prati jezičke datoteke koje build sadrži. Jezici osim engleskog su nacrti mašinskog prevoda.
- **Uživo i biblioteka.** Live TeamWork pokazuje kursore i imena uživo, a kolekcije biblioteke daju svakoj aplikaciji zadanu kolekciju.

## Ispravljeno

- {{ui:Pusti}} se pretvara u {{ui:Pauziraj}} dok se animacija pušta, a {{key:Space}} pušta i pauzira dok je vremenska linija otvorena.
- Statički render se vraća na WebGL kad grafička kartica ne može pokrenuti path tracer. Prikaz živog rendera i dalje može pokazivati grešku; nije provjereno na Windows računaru s tim drajverom.
- Stvarni režim Toka materijala ponovo se povezuje nakon što veza prekine na odgovorima o izuzecima PLC-a.

## Stvarna ograničenja

- Ništa nije štampano na pravom štampaču: ni filament, ni smola, ni preko Bambu Connecta. Datoteke za smolu provjerili su samo vlastiti čitači CadCrafta.
- Digitalni blizanac i Proizvodni pogon testirani su samo na simulatorima i poznatim odgovorima, bez pravog PLC-a, linije ili protokola. Oni su pomoć za provjeru, a ne sigurnosna validacija. Fizika pokriva samo kutije, do osam opterećenja.
- Veza s Rhinom i Grasshopperom nikad nije radila u pravim programima.
- Jezici osim engleskog su nacrti mašinskog prevoda.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u ModelCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Dijalog {{ui:Renderuj sliku…}} sada može poslati scenu drugom programu, panel Površine pravi glatke slobodne površine, a asistent koji povežeš može postaviti cijelu scenu jednom rečenicom.

### Novo

**Renderovanje**

- **Izbor mehanizma.** {{ui:Renderuj sliku…}} ima listu **Mehanizam** iznad Režima. Naša dva mehanizma, Brzi i Path tracer, su zadani i rade svuda. Ostali unosi spašavaju scenu kao paket (model kao USD datoteka, plus datoteka postavki s tačnim vrijednostima materijala, lampama koje su uključene, suncem, nebom, ekspozicijom i kamerom) za odnijeti u drugi program. Slika nacrtana drugim programom kaže koji program i koju verziju ga je napravio. Vidi [Odaberi koji program crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Lista Mehanizam može spasiti scenu kao USD datoteku, glTF datoteku (`.glb`) ili fasciklu Unreal projekta (`.zip`), u pregledniku i u CadCraft Studiju. U Studiju može i pokrenuti usdview ili vlastiti program računara za datoteku. Vidi [Otvori scenu u drugom programu](topic:render-open-in).
- **Pošalji mehanizmu za igre iz Studija.** Studio upisuje scenu u projekt Unreal Enginea i održava je u skladu pri svakom slanju, samo u jednom smjeru. Tvoje vlastite izmjene žive u sloju koji CadCraft nikad ne piše. Vidi [Pošalji scenu mehanizmu za igre](topic:render-unreal).
- **Mehanizmi iz dodataka.** Dodatak može dodati mehanizam na listu. Onaj napisan u JavaScriptu crta u pregledniku i u Studiju; onaj koji pokreće program traži tvoje da u Studiju. Vidi [Nacrtaj sliku drugim programom](topic:render-other-program) i [Dodaj mehanizam renderovanja dodatkom](topic:render-engine-addons).
- **Opiši scenu.** Reci svom povezanom asistentu „sumrak, lagana kiša, jesenja stabla, ljudi na trgu“ i ModelCraft postavlja sve u jednom koraku: sunce se pomjera na datum i vrijeme da sjenke prate, nebo se mijenja, pojavljuju se mokre površine, a stabla i ljudi se postavljaju kao pravi objekti na oznakama koje možeš sakriti, pomjeriti ili obrisati. Doba dana, datum ili godišnje doba i vremenski uslovi (vedro, oblačno, magla, lagana kiša, kiša, oluja) također rade sami, a kasniji zahtjev mijenja istu scenu. Magla se prikazuje u visokokvalitetnoj slici na grafičkoj kartici; ostali mehanizmi prikazuju nebo, svjetlo i mokre površine. Kiša se ne crta kao padajuće linije.

**Materijali**

- **Materijal iz jedne fotografije.** Daj ModelCraftu fotografiju površine (zid, pod, kamen) i napravi popločani materijal: osvjetljenje preko fotografije se izravnava, ivice se spajaju, a mapa boja, mapa hrapavosti i mapa normala izračunavaju se iz slike. To je obična obrada slike tvoje vlastite fotografije, bez treniranog modela. Hrapavost je procjena. Ravna, kvadratna fotografija snimljena ravno sprijeda daje najbolju pločicu; jak uzorak poput cigle može pokazati mutni duh tamo gdje je spoj stopljen.

**Površine**

- **Slobodne površine.** Panel {{ui:Površine}} pravi NURBS krivulje i neobrezane površine: krivulje kroz tačke, loft, ruled, extrude, revolve, provlačenja duž jedne ili dvije šine, površine iz mreže krivulja, zakrpe iz četiri ivice, usklađivanje i stapanje. Svaka zajednička ivica mjeri se kao G0, G1 ili G2 (razmak, ugao, skok zakrivljenosti) na tačnim površinama, a ivica lošija od tražene pojavljuje se na panelu Problemi s popravkom **Usklađi**. Zebra pruge i boje zakrivljenosti crtaju se iz tačnih površina. STEP i IGES datoteke se izvoze i uvoze. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).

**Lokacija i prostorije**

- **Fotografija skice na terenu.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju ručne skice snimljenu telefonom u ivice na tlu u razmjeri koju navedeš: jedna grupa, s oznakom za svaku boju olovke. Papir se pronalazi i ispravlja na tvom računaru i ništa se nigdje ne šalje. Vidi [Model na situacionom planu](topic:site-plan).
- **Namjesti prostoriju.** Odaberi pod i koristi {{ui:Organizuj}} › {{ui:Namjesti prostoriju…}}. Namještaj za spavaću sobu, dnevnu sobu, blagovaonicu, kuhinju, kupatilo ili kancelariju postavlja se po pravilima, uz zidove i izvan vrata i prozora, u jednoj grupi koju možeš ukloniti jednim korakom. To je zadani raspored za tvoj pregled, a ne projekt. Vidi [Početna biblioteka](topic:starter).

**3D štampa**

- **Kosi rezovi.** Podijeli za štampanje može nakositi rezove do 60 stepeni, što dijelovima daje veću površinu za lijepljenje. Konektori stoje okomito na rez. Vidi [Podijeli model za štampanje](topic:print-split).
- **Provjera štampe u Problemima.** Nalazi provjere 3D štampe prikazuju se na panelu Problemi s oznakama na modelu, a Popravi ih ispravlja odatle. Vidi [Oslonci, debljina zida, izdubljivanje i popravka](topic:print-tools).

**U svakoj aplikaciji**

- **Jezici.** Pomoć i aplikacije dostupne su na 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikanski, filipinski, svahili i uzbečki. Jezici osim engleskog su nacrti mašinskog prevoda dok ih izvorni govornik ne pregleda, a teme pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Touchpad, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu upravljati aplikacijama, za sve ili za jednu.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › Redovi alatne trake postavlja Prelom (kao ranije), 2 reda ili 1 red. Traka koja ne stane pomiče se u stranu umjesto da uzima prostor od crteža. Prelom ostaje zadani.
- **Mreža svojstava.** Polja lampi u ModelCraftu koriste zajedničku mrežu: sklopive kategorije, kolone naziva i vrijednosti, i gustina Kompaktno. Upisana aritmetika poput `2*450` i dalje radi.
- **Problemi.** Panel Problemi (dugme upozorenja na traci aplikacije) zajednički je svim aplikacijama. U ModelCraftu drži provjeru štampe i upozorenja o kontinuitetu površina.
- **Uživo.** Sesija Live TeamWork pokazuje ko je gdje. Vidi [Modeliraj zajedno uz Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu dodati mehanizme renderovanja, kao gore.
- **Poveži svog AI asistenta.** Ugovor o alatima i provjere svih osam aplikacija prolaze, s ukupno 454 alata. Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u pregledniku, tvoj vlastiti ključ unutar Studija i objavljeni paket nisu još obećani. Aplikacije ne sadrže vlastitu AI. Vidi [Koristi ModelCraft s AI asistentima](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Odjeljak klasa DWG-a.** Odjeljak klasa DWG datoteke bio je pročitan kao pogrešan tip, što je moglo pokvariti datoteku pri uvozu. Sada se čita ispravno, u ModelCraftu i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Slobodna visina mreže ide platnu, a raspored lista počinje na 760 piksela širine ili manje. Stilska datoteka ModelCraft-a ima tu izmjenu također.
- **Jezik u Studiju.** CadCraft Studio i spakovana izdanja mogu mijenjati jezik dok rade; ranije su bila samo na engleskom. Ovo još nije testirano na svim platformama: javi nam ako se jezik ne promijeni.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: odaberi {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnim klikom odaberi {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- Drugi program koji crta sliku bez dodatka mehanizma renderovanja, panoramske ili stereo kamere, i slika neba kroz drugi program, te dodatak koji otvara Unreal scenu još nisu tu. Datoteke se zapisuju; dodatak nije objavljen i nije pokrenut u Unrealu.
- Slobodne površine: G3 i klasa A se ne mjere niti tvrde, a obrezivanje i tijela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel kao naše: podudaraju se samo kamera, sunce, lampe i ekspozicija.
- Ispravka za promjenu jezika u Studiju iz 0.8.1 nije testirana na svim platformama.

Sve ostalo nalazi se u [Još nije napravljeno](topic:not-built-yet). Za prethodno izdanje vidi [Šta je novo u 0.7](topic:whats-new-0-7).
