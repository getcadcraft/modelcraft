---
title: Što je novo u 0.8 i 0.8.1
summary: Izbor motora za renderiranje s datotekama za druge programe, slobodne NURBS površine s izmjerenim kontinuitetom, scena koju opisujete pomoćniku, materijal izrađen iz jedne fotografije, fotografija skice na terenu, namještene prostorije, kosi rezovi za 3D ispis i provjera ispisa na ploči Problemi.
keywords: što je novo, bilješke o izdanju, popis promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, motor za renderiranje, motor, otvori u, usd, gltf, unreal, dodatak motor, nurbs, plohe, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, opiši scenu, scena, vrijeme, doba dana, godišnje doba, pomoćnik, materijal iz fotografije, fotografija, fotografija skice, namjesti, namjesti prostoriju, kosi rez, podijeli, provjera ispisa, problemi, mreža svojstava, svjetiljke, jezici, ulazni uređaji, redovi alatne trake, dwg, live
from: e4989b17
---

Ovo se promijenilo u ModelCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Dijaloški okvir {{ui:Renderiraj sliku…}} sada može poslati scenu drugom programu, ploča {{ui:Plohe}} izrađuje glatke slobodne površine, a pomoćnik koji povežete može postaviti cijelu scenu jednom rečenicom.

## Novo

### Renderiranje

- **Izbor motora.** {{ui:Renderiraj sliku…}} ima popis **Motor** iznad polja Način. Naša dva vlastita motora, Fast i Path tracer, zadana su i rade svugdje. Ostali unosi spremaju scenu kao paket (model kao USD datoteku, uz datoteku postavki s točnim vrijednostima materijala, svjetiljkama koje su uključene, suncem, nebom, ekspozicijom i kamerom) za prijenos drugom programu. Slika nacrtana drugim programom kaže koji je program i koja verzija ju je izradila. Pogledajte [Odaberite koji program crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Popis Motor može spremiti scenu kao USD datoteku, glTF datoteku (`.glb`) ili mapu projekta za Unreal (`.zip`), u pregledniku i u CadCraft Studiu. U Studiu može i pokrenuti usdview ili zadani program računala za tu datoteku. Pogledajte [Otvorite scenu u drugom programu](topic:render-open-in).
- **Pošaljite na pogon za igre iz Studija.** Studio zapisuje scenu u projekt Unreal Enginea i održava ga usklađenim pri svakom slanju, samo u jednom smjeru. Vaše vlastite izmjene nalaze se u sloju koji CadCraft nikad ne piše. Pogledajte [Pošaljite scenu na pogon za igre](topic:render-unreal).
- **Motori iz dodataka.** Dodatak može dodati motor na popis. Motor napisan u JavaScriptu crta u pregledniku i u Studiu; onaj koji pokreće program traži vaše dopuštenje u Studiu. Pogledajte [Nacrtajte sliku drugim programom](topic:render-other-program) i [Dodajte motor za renderiranje dodatkom](topic:render-engine-addons).
- **Opišite scenu.** Recite povezanom pomoćniku „sumrak, slaba kiša, jesenja stabla, ljudi na trgu“ i ModelCraft će je postaviti u jednom koraku: sunce se pomakne na datum i vrijeme tako da sjene prate, nebo se mijenja, pojavljuju se mokre površine, a stabla i ljudi postavljaju se kao pravi objekti na oznakama koje možete sakriti, pomaknuti ili izbrisati. Doba dana, datum ili godišnje doba te vrijeme (vedro, oblačno, magla, slaba kiša, kiša, oluja) rade i sami, a kasniji zahtjev mijenja istu scenu. Magla se vidi u visokokvalitetnoj slici na grafičkoj kartici; ostali motori prikazuju nebo, svjetlo i mokre površine. Kiša se ne crta kao padajuće crte.

### Materijali

- **Materijal iz jedne fotografije.** Dajte ModelCraftu fotografiju neke površine (zid, pod, kamen) i on će izraditi popločavajući materijal: osvjetljenje preko fotografije se izravnava, rubovi se spajaju, a karta boja, karta hrapavosti i karta normala izračunavaju se iz slike. Riječ je o običnoj obradi vaše vlastite slike, bez treniranog modela. Hrapavost je procjena. Ravna, kvadratna fotografija bez kuta daje najbolju pločicu; jak uzorak poput opeke može pokazati mutnu sjenu na mjestu spoja gdje je spoj stopljen.

### Plohe

- **Slobodne površine.** Ploča {{ui:Plohe}} izrađuje NURBS krivulje i neobrezane površine: krivulje kroz točke, loft, linearne površine, izvlačenje, rotaciju, provlačenja duž jedne ili dviju vodilica, površine iz mreže krivulja, zakrpe iz četiriju bridova, usklađivanje i stapanje. Svaki zajednički brid mjeri se kao G0, G1 ili G2 (razmak, kut, skok zakrivljenosti) na točnim površinama, a brid lošiji od traženog pojavljuje se na ploči Problemi s popravkom **Usklađi**. Zebra pruge i boje zakrivljenosti crtaju se iz točnih površina. STEP i IGES datoteke se izvoze i uvoze. Pogledajte [Slobodne površine (NURBS)](topic:nurbs-surfaces).

### Teren i prostorije

- **Fotografija skice na terenu.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju ručne skice telefonom u rubove na terenu u mjerilu koje navedete: jedna grupa, s oznakom za svaku boju olovke. Papir se pronalazi i ispravlja na vašem računalu, a ništa se ne šalje nikamo. Pogledajte [Modeliranje na situacijskom planu](topic:site-plan).
- **Namjestite prostoriju.** Odaberite pod i upotrijebite {{ui:Organizacija}} › {{ui:Namjesti prostoriju…}}. Spavaća soba, dnevni boravak, blagovaonica, kuhinja, kupaonica ili uredski namještaj postavlja se prema pravilima, uz zidove i izvan vrata i prozora, u jednoj grupi koju možete ukloniti u jednom koraku. To je zadani raspored za vaš pregled, a ne projekt. Pogledajte [Početna knjižnica](topic:starter).

### 3D ispis

- **Kosi rezovi.** Podjela za ispis može nagnuti rezove do 60 stupnjeva, čime komadi imaju veću površinu za lijepljenje. Spojnici stoje okomito na rez. Pogledajte [Podijelite model za ispis](topic:print-split).
- **Provjera ispisa u Problemima.** Nalazi provjere 3D ispisa prikazuju se na ploči Problemi s oznakama na modelu, a Popravi ih ispravlja odatle. Pogledajte [Potpore, debljina stijenke, šupljikavost i popravak](topic:print-tools).

### U svim aplikacijama

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Jezici osim engleskoga su strojni prijevodi dok ih izvorni govornik ne pregleda, a teme pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Dodirna podloga, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu upravljati aplikacijama, za sve ili za jednu.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › Redovi alatne trake postavlja Prelamanje (kao prije), 2 reda ili 1 red. Traka koja ne stane pomiče se u stranu umjesto da uzima prostor od crteža. Prelamanje ostaje zadano.
- **Mreža svojstava.** Polja svjetiljki u ModelCraftu koriste zajedničku mrežu: sažimljive kategorije, stupce oznake i vrijednosti te gustoću Kompaktno. Upisani izračuni poput `2*450` i dalje rade.
- **Problemi.** Ploča Problemi (gumb upozorenja u traci aplikacije) zajednička je svim aplikacijama. U ModelCraftu sadrži provjeru ispisa i upozorenja o kontinuitetu ploha.
- **Live.** Sesija Live TeamWork pokazuje tko je gdje. Pogledajte [Modelirajte zajedno uz Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu dodati motore za renderiranje, kao što je gore navedeno.
- **Povežite svoju AI.** Ugovor alata i provjere svih osam aplikacija prolaze, s ukupno 454 alata. Povezivanje jednim klikom unutar Studija, hostirani konektor za pomoćnike u pregledniku, vlastiti ključ u Studiu i objavljeni paket još nisu obećani. Aplikacije same po sebi nemaju AI. Pogledajte [Koristite ModelCraft s AI pomoćnicima](topic:use-with-ai-assistants).

## Popravljeno u 0.8.1

- **Odjeljak DWG klasa.** Odjeljak klasa DWG datoteke bio je pročitan kao pogrešan tip, što je moglo pokvariti datoteku pri uvozu. Sada se čita ispravno, u ModelCraftu i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Slobodna visina mreže ide platnu, a raspored listova počinje na 760 piksela širine ili manje. Stilska tablica u ModelCraftu ima tu promjenu također.
- **Jezik u Studiu.** CadCraft Studio i spakirana izdanja mogu mijenjati jezik dok rade; prije su bila samo na engleskom. To još nije ispitano na svim platformama: javite nam ako se jezik ne mijenja.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: odaberite {{ui:Više informacija}}, a zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom kliknite i odaberite {{ui:Otvori}}. Izdanja za trgovine su na čekanju, a verzija za iPad i iPhone nije ponovno izrađena za 0.8.1.
- Drugi program koji crta sliku bez dodatka motora za renderiranje, panoramske ili stereo kamere te slika neba kroz drugi program, kao i dodatak koji otvara Unreal scenu, još nisu tu. Datoteke se zapisuju; dodatak nije objavljen i nije pokrenut u Unrealu.
- Slobodne površine: G3 i klasa A se ne mjere niti tvrde, a obrezivanje i tijela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel kao naše: podudaraju se samo kamera, sunce, svjetiljke i ekspozicija.
- Popravak promjene jezika u Studiu u 0.8.1 nije ispitan na svim platformama.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet). Za prethodno izdanje pogledajte [Što je novo u 0.7](topic:whats-new-0-7).
