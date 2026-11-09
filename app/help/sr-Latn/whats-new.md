---
title: Šta je novo u verzijama 0.8 i 0.8.1
summary: Izbor mehanizma za renderovanje sa datotekama za druge programe, slobodne NURBS površi sa merenim kontinuitetom, scena koju opisujete svom asistentu, materijal napravljen od jedne fotografije, fotografija skice na terenu, opremljene prostorije, kosi rezovi za 3D štampu i provera za štampu na panelu Problemi.
keywords: šta je novo, what's new, beleške o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, mehanizam za renderovanje, mehanizam, otvori u, usd, gltf, unreal, mehanizam iz dodatka, nurbs, površi, loft, provlačenje, kontinuitet, g0, g1, g2, zebra, step, iges, opiši scenu, scena, vremenske prilike, doba dana, godišnje doba, asistent, materijal iz fotografije, fotografija, fotografija skice, opremi, opremi prostoriju, kosi rez, podela, provera za štampu, problemi, tabela svojstava, svetiljke, jezici, ulazni uređaji, redovi alatke, dwg, uživo
from: e4989b17
---

Ovo je šta se promenilo u ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. Dijalog {{ui:Renderuj sliku…}} sada može da pošalje scenu drugom programu, panel {{ui:Površi}} pravi glatke slobodne površi, a asistent koji povežete može da postavi celu scenu jednom rečenicom.

## Novo

### Renderovanje

- **Izbor mehanizma.** {{ui:Renderuj sliku…}} ima listu **Mehanizam** iznad režima. Naša dva sopstvena mehanizma, Fast (Brzi) i Path tracer, podrazumevani su i rade svuda. Ostali unosi čuvaju scenu kao paket (model kao USD datoteku, plus datoteku podešavanja sa tačnim vrednostima materijala, svetiljkama koje su uključene, suncem, nebom, ekspozicijom i kamerom) da je odnesete u drugi program. Slika nacrtana u drugom programu kaže koji program i koju verziju ga je napravio. Pogledajte [Izaberite koji program crta sliku](topic:render-engines).
- **Otvori u drugom programu.** Lista Mehanizam može da sačuva scenu kao USD datoteku, glTF datoteku (`.glb`) ili fasciklu Unreal projekta (`.zip`), u pregledaču i u CadCraft Studio. U Studiju može i da pokrene usdview ili sopstveni program računara za datoteku. Pogledajte [Otvorite scenu u drugom programu](topic:render-open-in).
- **Slanje mehanizmu za igre iz Studija.** Studio upisuje scenu u projekat Unreal Engine i održava je usklađenom pri svakom slanju, samo u jednom smeru. Vaše izmene žive u sloju koji CadCraft nikad ne upisuje. Pogledajte [Pošaljite scenu mehanizmu za igre](topic:render-unreal).
- **Mehanizmi iz dodataka.** Dodatak može da doda mehanizam na listu. Onaj napisan u JavaScript-u crta u pregledaču i u Studiju; onaj koji pokreće program traži vaše da u Studiju. Pogledajte [Nacrtajte sliku drugim programom](topic:render-other-program) i [Dodajte mehanizam za renderovanje dodatkom](topic:render-engine-addons).
- **Opišite scenu.** Recite svom povezanom asistentu „sumrak, laka kiša, jesenja stabla, ljudi na trgu” i ModelCraft je postavlja u jednom koraku: sunce se pomera na datum i vreme da senke prate, nebo se menja, pojavljuju se mokre površine, a drveće i ljudi se postavljaju kao pravi objekti na oznakama koje možete sakriti, pomeriti ili obrisati. Doba dana, datum ili godišnje doba i vremenske prilike (vedro, oblačno, magla, laka kiša, kiša, oluja) rade i sami, a kasniji zahtev menja istu scenu. Magla se vidi u visokokvalitetnoj slici na grafičkoj kartici; ostali mehanizmi prikazuju nebo, svetlo i mokre površine. Kiša se ne crta kao padajuće linije.

### Materijali

- **Materijal iz jedne fotografije.** Dajte ModelCraft-u fotografiju površine (zid, pod, kamen) i on pravi materijal za popločavanje: osvetljenje preko fotografije se izravnava, ivice se spajaju, a mapa boje, mapa hrapavosti i mapa normala se izračunavaju iz slike. To je obična obrada slike vaše sopstvene fotografije, bez obučenog modela. Hrapavost je procena. Ravna, kvadratna fotografija snimljena pravo spreda daje najbolju pločicu; jak uzorak, kao što su cigle, može da pokaže mutnu senku tamo gde je spoj stopljen.

### Površi

- **Slobodne površi.** Panel {{ui:Površi}} pravi NURBS krive i površi bez odsecanja: krive kroz tačke, loft, ravne površi, izvlačenje, rotiranje, provlačenja duž jedne ili dve vodilice, površi iz mreže krivih, zakrpe od četiri ivice, poklapanje i stapanje. Svaka zajednička ivica se meri kao G0, G1 ili G2 (razmak, ugao, skok krivine) na tačnim površima, a ivica lošija od tražene pojavljuje se na panelu Problemi sa popravkom **Poklopi**. Zebra pruge i boje krivine crtaju se iz tačnih površi. STEP i IGES datoteke se izvoze i uvoze. Pogledajte [Slobodne površi (NURBS)](topic:nurbs-surfaces).

### Lokacija i prostorije

- **Fotografija skice na terenu.** {{ui:Datoteka}} › {{ui:Uvezi fotografiju skice…}} pretvara fotografiju skice rukom, snimljenu telefonom, u ivice na terenu u razmeri koju navedete: jedna grupa, sa oznakom za svaku boju olovke. Papir se pronalazi i ispravlja na vašem računaru, a ništa se nigde ne šalje. Pogledajte [Modelujte na situacionom planu](topic:site-plan).
- **Opremi prostoriju.** Izaberite pod i upotrebite {{ui:Organizacija}} › {{ui:Opremi prostoriju…}}. Nameštaj za spavaću sobu, dnevnu sobu, trpezariju, kuhinju, kupatilo ili kancelariju postavlja se po pravilima, uz zidove i van vrata i prozora, u jednoj grupi koju možete odneti u jednom koraku. To je podrazumevani raspored za vaš pregled, a ne projekat. Pogledajte [Početna biblioteka](topic:starter).

### 3D štampa

- **Kosi rezovi.** Podela za štampu može da nakosi rezove do 60 stepeni, što delovima daje više površine za lepljenje. Spojnici stoje upravno na rez. Pogledajte [Podelite model za štampu](topic:print-split).
- **Provera za štampu u Problemima.** Nalazi provere za 3D štampu prikazuju se na panelu Problemi, sa oznakama na modelu, a Popravi ih ispravlja odatle. Pogledajte [Oslonci, debljina zida, šupljina i popravka](topic:print-tools).

### U svakoj aplikaciji

- **Jezici.** Pomoć i aplikacije dolaze na 54 jezika. Deset je novo: litvanski, letonski, bosanski, maratski, telugu, albanski, afrikanski, filipinski, svahili i uzbekistanski. Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik, a teme pomoći mogu biti i dalje na engleskom.
- **Ulazni uređaji.** Tačped, olovka, 3D miš, kontroler za igre i MIDI kontrole mogu da upravljaju aplikacijama, za sve njih ili za jednu.
- **Redovi alatke.** {{ui:Podešavanja}} › {{ui:Opšte}} › Redovi alatke postavlja Prelom (kao ranije), 2 reda ili 1 red. Traka koja ne staje se pomera u stranu umesto da oduzima prostor crtežu. Prelom ostaje podrazumevan.
- **Tabela svojstava.** Polja svetiljki ModelCraft-a koriste zajedničku tabelu: sklopive kategorije, kolone oznake i vrednosti, i gustinu Zbijeno. Unesena aritmetika, kao `2*450`, i dalje radi.
- **Problemi.** Panel Problemi (dugme upozorenja na traci aplikacije) deli svaka aplikacija. U ModelCraft-u sadrži proveru za štampu i upozorenja o kontinuitetu površi.
- **Uživo.** Sesija Live TeamWork pokazuje ko je gde. Pogledajte [Modelujte zajedno uz Live TeamWork](topic:work-live).
- **Dodaci.** Dodaci mogu da dodaju mehanizme za renderovanje, kao što je gore opisano.
- **Povežite svoj AI.** Ugovor o alatima i provere osam aplikacija su prošle, sa 454 alata ukupno. Povezivanje jednim klikom u Studiju, hostovani konektor za asistente u pregledaču, vaš sopstveni ključ u Studiju i objavljeni paket još nisu obećani. Aplikacije ne sadrže sopstveni AI. Pogledajte [Koristite ModelCraft sa AI asistentima](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Odeljak klasa DWG.** Odeljak klasa DWG datoteke bio je pročitan kao pogrešan tip, što je moglo da pokvari datoteku pri uvozu. Sada se čita ispravno, u ModelCraft-u i u drugim aplikacijama koje čitaju DWG.
- **Tableti uspravno.** Višak visine mreže ide platnu, a raspored lista počinje na 760 piksela širine ili manje. Stilska tabela ModelCraft-a takođe ima ovu promenu.
- **Jezik u Studiju.** CadCraft Studio i spakovana izdanja mogu da promene jezik dok rade; pre su bili samo na engleskom. Ovo još nije testirano na svim platformama: javite nam ako se jezik ne menja.

## Nije u ovoj verziji još

- **Nije potpisano kodom.** Windows može da prikaže SmartScreen: izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u kliknite desnim tasterom i izaberite {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- Drugi program crta sliku bez dodatka za mehanizam za renderovanje, panoramske ili stereo kamere i slika neba kroz drugi program, kao i dodatak koji otvara Unreal scenu, nisu tu još. Datoteke se upisuju; dodatak nije objavljen i nije pokrenut u Unreal-u.
- Slobodne površi: G3 i klasa A se ne mere niti tvrde, a odsecanje i tela dolaze kasnije.
- Slike iz drugih programa nisu piksel za piksel kao naše: poklapaju se samo kamera, sunce, svetiljke i ekspozicija.
- Ispravka za 0.8.1 za promenu jezika u Studiju nije testirana na svim platformama.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet). Za prethodno izdanje pogledajte [Šta je novo u 0.7](topic:whats-new-0-7).
