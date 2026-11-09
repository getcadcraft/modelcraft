---
title: Novo u verzijama 0.8 i 0.8.1
summary: Izbor motora za renderovanje s datotekama za druge programe, slobodne NURBS površine s mjerenim kontinuitetom, scena koju opisujete svom asistentu, materijal napravljen od jedne fotografije, fotografija skice na terenu, namještene prostorije, kosi presjeci za 3D štampu i provjera za štampu u panelu Problemi.
keywords: šta je novo, novosti, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, motor renderovanja, motor, otvori u, usd, gltf, unreal, motor iz dodatka, nurbs, površine, loft, sweep, kontinuitet, g0, g1, g2, zebra, step, iges, opiši scenu, scena, vremenske prilike, doba dana, godišnje doba, asistent, materijal iz fotografije, fotografija, fotografija skice, namjesti, namjesti prostoriju, kosi presjek, presjek, provjera za štampu, problemi, tabela svojstava, lampe, jezici, ulazni uređaji, redovi alatne trake, dwg, uživo
from: e4989b17
---

Ovo je spisak promjena u ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. Dijalog {{ui:Renderuj sliku…}} sada može poslati scenu drugom programu, panel {{ui:Površine}} pravi glatke slobodne površine, a asistent koji povežete može postaviti cijelu scenu jednom rečenicom.

## Novo

### Renderovanje

- **Izbor motora.** {{ui:Renderuj sliku…}} ima listu **Motor** iznad Načina. Naša dva motora, Brzi i Path tracer, su zadani i rade svuda. Ostale stavke čuvaju scenu kao paket (model kao USD datoteka, plus datoteka postavki s tačnim vrijednostima materijala, uključenim lampama, suncem, nebom, ekspozicijom i kamerom) za odnošenje u drugi program. Slika nacrtana u drugom programu kaže koji je program i koja verzija ga je napravila. Pogledaj [Odaberi koji program crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Lista Motor može spasiti scenu kao USD datoteku, glTF datoteku (`.glb`) ili fasciklu Unreal projekta (`.zip`), u pregledniku i u programu CadCraft Studio. U programu Studio može i pokrenuti usdview ili podrazumijevani program računara za datoteku. Pogledaj [Otvori scenu u drugom programu](topic:render-open-in).
- **Pošalji u motor za igre iz programa Studio.** Studio upisuje scenu u projekat Unreal Engine i održava je u skladu pri svakom slanju, samo u jednom smjeru. Vaše vlastite izmjene su u sloju koji CadCraft nikad ne upisuje. Pogledaj [Pošalji scenu u motor za igre](topic:render-unreal).
- **Motori iz dodataka.** Dodatak može dodati motor na listu. Onaj napisan u JavaScriptu crta u pregledniku i u programu Studio; onaj koji pokreće drugi program traži vašu potvrdu u programu Studio. Pogledaj [Nacrtaj sliku drugim programom](topic:render-other-program) i [Dodaj motor za renderovanje pomoću dodatka](topic:render-engine-addons).
- **Opiši scenu.** Reci svom povezanom asistentu „sumrak, slaba kiša, jesenja stabla, ljudi na trgu” i ModelCraft će je postaviti u jednom koraku: sunce se pomjera na datum i vrijeme da senke prate, nebo se mijenja, pojavljuju se mokre površine, a drveće i ljudi se postavljaju kao pravi objekti na oznakama koje možete sakriti, pomjeriti ili izbrisati. Doba dana, datum ili godišnje doba i vremenske prilike (vedro, oblačno, magla, slaba kiša, kiša, oluja) također rade samostalno, a kasniji zahtjev mijenja istu scenu. Magla se prikazuje u slici visokog kvaliteta na grafičkoj kartici; ostali motori prikazuju nebo, svjetlo i mokre površine. Kiša se ne crta kao padajuće linije.

### Materijali

- **Materijal iz jedne fotografije.** Dajte programu ModelCraft fotografiju površine (zid, pod, kamen) i on pravi ponavljajući materijal: osvjetljenje preko fotografije se izravnava, ivice se spajaju, a mapa boje, mapa hrapavosti i mapa normala izračunavaju se iz slike. Riječ je o običnoj obradi slike vaše vlastite fotografije, bez treniranog modela. Hrapavost je procjena. Ravna, kvadratna fotografija snimljena ravno spreda daje najbolju pločicu; jak uzorak, kao što su cigle, može pokazati mutan trag tamo gdje je spoj stopljen.

### Površine

- **Slobodne površine.** Panel {{ui:Površine}} pravi NURBS krive i neobrezane površine: krive kroz tačke, loft, ravne površine, izvlačenje, rotaciju, sweep duž jedne ili dvije vodilice, površine iz mreže krivih, zakrpe iz četiri ivice, poklapanje i stapanje. Svaka zajednička ivica mjeri se kao G0, G1 ili G2 (razmak, ugao, skok zakrivljenosti) na tačnim površinama, a ivica lošija od tražene pojavljuje se u panelu Problemi s popravkom **Poklapanje**. Zebra pruge i boje zakrivljenosti crtaju se iz tačnih površina. STEP i IGES datoteke se izvoze i uvoze. Pogledaj [Slobodne površine (NURBS)](topic:nurbs-surfaces).

### Teren i prostorije

- **Fotografija skice na terenu.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju ručne skice snimljenu telefonom u ivice na terenu u razmjeri koju navedete: jedna grupa, s oznakom za svaku boju olovke. Papir se na računaru pronalazi i ispravlja, a ništa se nigdje ne šalje. Pogledaj [Modeliraj na situacionom planu](topic:site-plan).
- **Namjesti prostoriju.** Odaberi pod i koristi {{ui:Organizuj}} › {{ui:Namjesti prostoriju…}}. Namještaj za spavaću sobu, dnevnu sobu, trpezariju, kuhinju, kupatilo ili kancelariju postavlja se po pravilima, uz zidove i bez zapreka ispred vrata i prozora, u jednu grupu koju možete odnijeti u jednom koraku. To je zadani raspored za vaš pregled, a ne projekat. Pogledaj [Početna biblioteka](topic:starter).

### 3D štampa

- **Kosi presjeci.** Podjela za štampu može nakositi presjeke do 60 stepeni, što dijelovima daje veću površinu za lijepljenje. Spojnici stoje okomito na presjek. Pogledaj [Podijeli model za štampu](topic:print-split).
- **Provjera za štampu u panelu Problemi.** Nalazi provjere za 3D štampu prikazuju se u panelu Problemi s oznakama na modelu, a dugme **Popravi** ih ispravlja odatle. Pogledaj [Podrške, debljina zida, šupljenje i popravak](topic:print-tools).

### U svakoj aplikaciji

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Jezici osim engleskog su mašinski nacrti dok ih izvorni govornik ne pročita, a teme pomoći mogu i dalje biti na engleskom.
- **Ulazni uređaji.** Touchpad, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu upravljati aplikacijama, za sve ili za jednu.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › Redovi alatne trake postavljaju Prelom (kao prije), 2 reda ili 1 red. Traka koja ne stane pomjera se u stranu umjesto da uzima prostor od crteža. Prelom ostaje zadano.
- **Tabela svojstava.** Polja za lampe u programu ModelCraft koriste zajedničku tabelu: kategorije koje se mogu sklapati, kolone za naziv i vrijednost, te gustinu Kompaktna. Unesena aritmetika, kao `2*450`, i dalje radi.
- **Problemi.** Panel Problemi (dugme upozorenja na traci aplikacije) zajednički je za sve aplikacije. U programu ModelCraft sadrži provjeru za štampu i upozorenja o kontinuitetu površina.
- **Uživo.** Sesija Live TeamWork pokazuje ko je gdje. Pogledaj [Modeliraj zajedno uz Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu dodati motore za renderovanje, kao što je gore navedeno.
- **Povežite svoju AI.** Ugovor o alatima i provjere osam aplikacija su prošli, sa 454 alata ukupno. Povezivanje jednim klikom unutar programa Studio, hostovani konektor za asistente u pregledniku, vlastiti ključ unutar programa Studio i objavljeni paket još nisu obećani. Aplikacije same po sebi ne sadrže AI. Pogledaj [Koristi ModelCraft s AI asistentima](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Odjeljak klasa DWG datoteka.** Odjeljak klasa u DWG datoteci bio je pročitan kao pogrešan tip, što je moglo pokvariti datoteku pri uvozu. Sada se čita ispravno, u programu ModelCraft i u drugim aplikacijama koje čitaju DWG.
- **Tableti u uspravnom položaju.** Slobodna visina mreže ide na platno, a raspored lista počinje na 760 piksela širine ili manje. Stilski list programa ModelCraft također ima tu promjenu.
- **Jezik u programu Studio.** CadCraft Studio i spakovana izdanja mogu promijeniti jezik dok rade; ranije su bila samo na engleskom. Ovo još nije provjereno na svim platformama: javite nam ako se jezik ne promijeni.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows može prikazati SmartScreen: odaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu kliknite desnim tasterom i odaberite {{ui:Otvori}}. Verzije za prodavnice su na čekanju, a verzija za iPad i iPhone nije ponovo izgrađena za 0.8.1.
- Crtanje slike drugim programom bez dodatka za motor za renderovanje, panoramske ili stereo kamere i slika neba preko drugog programa, te dodatak koji otvara Unreal scenu, još nisu tu. Datoteke se pišu; dodatak nije objavljen i nije pokrenut u programu Unreal.
- Slobodne površine: G3 i klasa A se ne mjere niti tvrde, a obrezivanje i tijela dolaze kasnije.
- Slike iz drugih programa nisu piksel po piksel kao naše: poklapaju se samo kamera, sunce, lampe i ekspozicija.
- Ispravka 0.8.1 za promjenu jezika u programu Studio nije provjerena na svim platformama.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za prethodno izdanje pogledaj [Novo u verziji 0.7](topic:whats-new-0-7).
