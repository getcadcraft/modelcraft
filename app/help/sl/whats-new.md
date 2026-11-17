---
title: Kaj je novega v 0.9
summary: Faza tiskanja z lastnim slicerjem in pošiljanjem prek USB, Klipper, OctoPrint in PrusaLink, rezanje za smolo in dodatki za datoteke, pretok materiala, dodatka Digitalni dvojček in Tovarniška hala, NURBS zaobljave, debelitev in prilagajanje skeniranju, AR na lokaciji ter deset načinov za lok.
keywords: kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, faza tiskanja, 3d-tiskanje, pošlji tiskalniku, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, smolno tiskanje, goo, sl1, ctb, anycubic, preizkus osvetlitve, pretok materiala, digitalni dvojček, tovarniška hala, plc, tekoči trak, nurbs, zaobljava, debelitev, prilagoditev skeniranju, ar, na lokaciji, načini loka, enote, 0.8, 0.8.1, različica, nove funkcije, mehanizem upodabljanja, mehanizem, open in, usd, gltf, unreal, dodatek, nurbs, ploskve, loft, sweep, zveznost, g0, g1, g2, zebra, step, iges, povej prizor, prizor, vreme, čas dneva, letni čas, pomočnik, material iz fotografije, fotografija, fotografija skice, opremi, opremi sobo, poševni rez, razrez, preverjanje tiskanja, težave, mreža lastnosti, svetila, jeziki, vnosne naprave, vrstice orodij, dwg, live
from: 169048a2
---

To so spremembe v ModelCraft 0.9 v primerjavi z 0.8.1. ModelCraft zdaj seže do tiskalnika in tovarniške hale: stvari lahko postavite na tiskalno ploščo in jih pošljete brez izvoza, režete za filament ali smolo ter načrtujete linijo za ravnanje z materialom. To je CadCraft Studio 0.9 z njegovimi osmimi aplikacijami; večina novih funkcij spodaj je dodatkov.

## Novo

### 3D-tiskanje

- **Faza tiskanja.** Kliknite {{ui:Faza tiskanja}} na orodni vrstici. Dodajte elemente knjižnice na ploščo tiskalnika, jih razporedite, pogledate skozi narezane plasti in pritisnete {{ui:Pošlji 3D-tiskalniku}}, brez STL za izvoz. Pripada dodatku 3D-tisk, ki je privzeto vklopljen in ga lahko odstranite kot kateri koli dodatek. Glejte [Stvari na tiskalni plošči in njihovo pošiljanje tiskalniku](topic:print-stage).
- **Naš lastni slicer za filament.** {{ui:CadCraft basic (vključen, najhitrejši)}} je slicer v seznamu **Slicer** na kartici: stene, lupine, polnilo, podpore in obrobe, v ozadju, da stran ostane uporabna. {{ui:Predogled plasti}} z drsnikom **Layer** prikaže plasti pred pošiljanjem. Profili tiskalnikov, kakršna sta sloga Ender-3 in Prusa MK4, nosijo svojo začetno G-kodo.
- **Pošiljanje.** Prek USB (Chrome ali Edge na računalniku, s stranjo, ki ostane odprta) ali na Klipper (Moonraker), OctoPrint ali PrusaLink v vašem omrežju. Nič se ne poveže ali pošlje brez klika, pošiljanje pa najprej vpraša.
- **Drugi slicerji.** Kiri:Moto, PrusaSlicer in OrcaSlicer so samostojni dodatki, privzeto izklopljeni; dodate jih s kartice ali iz {{ui:Nastavitve}} › {{ui:Dodatki}}. PrusaSlicer in OrcaSlicer uporabljata vašo lastno nameščeno kopijo iz CadCraft Studio. Dodatek za tiskalnike Bambu Lab reže z vašim OrcaSlicerjem in njegovimi prednastavitvami P2S ter potrebuje Studio na računalniku.
- **Tiskanje na smolo.** Dodatki za smolo (privzeto izklopljeni) naredijo slike plasti za zaslon vašega tiskalnika, z votlinami in odzračevalnimi luknjami, podlago (raft) in podporami, predogledom plasti ter časom, smolo in stroški. Dodatki za zapisovanje datotek zapišejo Elegoo GOO, SL1, Chitubox (CBDDLP in CTB 2 do 5) in Anycubic (PWMX in PWS). Preizkus osvetlitve na smolo naredi lestvico petih osvetlitev. Glejte [Rezanje za tiskalnik na smolo](topic:resin-printing).
- **Nespremenjeno.** {{ui:Izvozi}} › {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}}, orodja za tiskanje in Razdeli za tiskanje delujejo kakor v 0.8. Glejte [Pripravite model za 3D-tiskanje](topic:print-3d).

### Pretok materiala, digitalni dvojček in tovarniška hala

Ti trije so dodatki, izklopljeni, dokler jih ne vklopite v {{ui:Nastavitve}} › {{ui:Dodatki}}; vsak ima svojo pomoč, ko je vklopljen.

- **Pretok materiala.** Podokno z imenom Pretok materiala razporedi tekoče trakove, postaje, medpomnilnike in poti AGV v 3D pogledu, zažene simulacijo s semenom, jo predvaja in prikazuje pretok, čase dobave in čakalne vrste; rezultati se shranijo kot CSV. Naročila lahko pridejo iz datoteke CSV. Robotske celice lahko preverite in izvozite. Povezava PLC ima mehki način in pravi način prek Modbus TCP, ki deluje le v CadCraft Studio.
- **Digitalni dvojček.** Bere postavitev pretoka materiala in na njej zažene mehki PLC, z napakami, ki jih lahko vsilite, preizkusi zalog, primerjavo postavitev in kosovnico.
- **Tovarniška hala.** Postaje spremeni v stroje in celice, bere jih v živo ali iz simulatorja ter vodi čakalno vrsto nalog in preprost OEE. Samo bere: ta izdaja ne more pisati v stroj ali PLC.

### Površine, modeli in risba

- **Zaobljave, debelitev in logične operacije na NURBS.** Plošča {{ui:Površine}} ima {{ui:Zaobli med ploskvami}}, {{ui:Zaobli več robov}}, {{ui:Odebeli v telo}} ter Unijo, Odštevanje in Presek, vsako z izmerjenim odstopanjem. Glejte [Proste površine (NURBS)](topic:nurbs-surfaces).
- **Prilagodite površine skeniranju.** Izberite skenirano mrežo in uporabite {{ui:Prilagodi ploskve skeniranju}} v skupini **Skeniranje**, nato {{ui:Sešij ploskve v telo}}. Je prvo prilagajanje, ne popoln paket za obratni inženiring.
- **Živa povezava iz modelirnika .3dm.** Ena smer, iz Rhino 8 ali Grasshopperja, in potrebuje CadCraft Studio na istem računalniku. Glejte [Ohranjanje modela .3dm v živo](topic:live-3dm-link).
- **Oglejte si model na lokaciji.** {{ui:Pogled na gradbišču (AR, telefon)}} v meniju {{ui:Pogledi}} deluje na telefonu Android s Chromom. Glejte [Ogled modela na lokaciji s telefonom Android (AR)](topic:ar-on-site).
- **Načini loka.** Spustni seznam {{ui:Načini loka}} ponuja deset načinov risanja loka, vključno z {{ui:3 točke}} in {{ui:Začetek, središče, konec}}.
- **Več enot.** Teže (kg, lb, t, ton) in temperature (stopinje C, F, K in R) so razumljene tam, kjer vnašate vrednosti z enotami.

## V vseh aplikacijah

- **Nasveti.** Besedilo, ki se pokaže ob zadržanju miške na gumbih in odrezanih oznakah, je Bootstrap nasvet.
- **Zaprt začetni namig.** Kartica namiga na prazni risalni površini ima majhen gumb za zapiranje (x). Ostane zaprta, paleta ukazov pa jo lahko spet pokaže.
- **Drsni zavihki.** Vrstica zavihkov podokna, ki se ne prilega, se pomakne, namesto da bi se odrezala.
- **Naslovi zavihkov.** Ko je dokument odprt, se zavihek brskalnika začne z imenom dokumenta, nato ModelCraft in CadCraft. Pika je prva, dokler je dokument neshranjen.
- **Postavitev.** {{ui:Nastavitve}} › {{ui:Splošno}} › Postavitev hrani postavitve v spustnem seznamu, z izbiro uporabe postavitve samo za to aplikacijo in gumbom za ponastavitev postavitve.
- **Jeziki.** Seznam jezikov v Nastavitvah sledi jezikovnim datotekam, ki jih vsebuje izdaja. Jeziki razen angleščine so strojni osnutki.
- **Live in Knjižnica.** Live TeamWork pokaže žive kazalce in imena, zbirke v Knjižnici pa vsaki aplikaciji dajo privzeto zbirko.

## Popravljeno

- {{ui:Predvajaj}} se spremeni v {{ui:Premor}}, medtem ko se animacija predvaja, {{key:Space}} pa predvaja in ustavi, ko je časovnica odprta.
- Upodobitev slike se vrne na WebGL, ko grafična kartica ne more zagnati sledilnika poti. Živi pogled upodabljanja lahko še vedno kaže napako; tega ni bilo preverjeno na računalniku z Windows s tem gonilnikom.
- Pretok materiala na pravem načinu se spet poveže, potem ko se povezava konča zaradi odgovorov PLC z izjemo.

## Iskreno o omejitvah

- Nič ni bilo natisnjeno na pravem tiskalniku: ne z filamentom, ne s smolo, ne prek Bambu Connect. Datoteke za smolo so bile prebrane le z lastnimi bralniki CadCraft.
- Digitalni dvojček in Tovarniška hala sta bila preizkušena samo s simulatorji in znanimi odgovori, brez pravega PLC, linije ali protokola. Sta pripomočka za preverjanje, ne varnostna potrditev. Fizika zajema samo kvadre, do osem obremenitev.
- Povezava Rhino in Grasshopper še nikoli ni delovala v pravih programih.
- Jeziki razen angleščine so strojni osnutki.

## Prej: 0.8 in 0.8.1

To so spremembe v ModelCraft 0.8 (2026-11-01) in 0.8.1 (2026-11-02), v primerjavi z 0.7. Pogovorno okno {{ui:Upodobi sliko…}} lahko zdaj pošlje prizor drugemu programu, plošča Površine naredi gladke proste površine, povezan pomočnik pa lahko nastavi cel prizor z enim stavkom.

### Novo

**Upodabljanje**

- **Izbira mehanizma.** {{ui:Upodobi sliko…}} ima seznam **Mehanizem** nad **Način**. Naša lastna dva mehanizma, Hitro in Sledilnik poti, sta privzeta in delujeta povsod. Drugi vnosi shranijo prizor kot paket (model kot datoteko USD ter nastavitveno datoteko z natančnimi vrednostmi materialov, vklopljenimi svetili, soncem, nebom, izpostavitvijo in kamero), ki ga odnesete v drug program. Slika, narisana z drugim programom, pove, kateri program in katera različica jo je naredila. Glejte [Izberite, kateri program riše sliko](topic:render-engines).
- **Odprite v drugem programu.** Seznam Mehanizem lahko shrani prizor kot datoteko USD, datoteko glTF (`.glb`) ali mapo projekta Unreal (`.zip`), v brskalniku in v CadCraft Studio. V Studiu lahko zažene tudi usdview ali računalnikov lastni program za datoteko. Glejte [Odpiranje prizora v drugem programu](topic:render-open-in).
- **Pošljite v igralni mehanizem iz Studia.** Studio zapiše prizor v projekt Unreal Engine in ga ob vsakem pošiljanju ohrani usklajenega, samo v eno smer. Vaša lastna urejanja živijo v plasti, ki je CadCraft nikoli ne zapiše. Glejte [Pošiljanje prizora v igralni mehanizem](topic:render-unreal).
- **Mehanizmi iz dodatkov.** Dodatek lahko doda mehanizem na seznam. Tisti, napisan v JavaScriptu, riše v brskalniku in v Studiu; tisti, ki zažene program, potrebuje vaše dovoljenje v Studiu. Glejte [Narišite sliko z drugim programom](topic:render-other-program) in [Dodajanje mehanizma upodabljanja z dodatkom](topic:render-engine-addons).
- **Povejte prizor.** Povejte svojemu povezanemu pomočniku „somrak, lahek dež, jesenska drevesa, ljudje na trgu“ in ModelCraft ga nastavi v enem koraku: sonce se premakne na datum in čas, da sence sledijo, nebo se spremeni, pojavijo se mokre površine, drevesa in ljudje pa so postavljeni kot pravi predmeti na oznake, ki jih lahko skrijete, premaknete ali izbrišete. Čas dneva, datum ali letni čas in vreme (jasno, oblačno, megla, lahek dež, dež, nevihta) delujejo tudi sami, poznejša zahteva pa spremeni isti prizor. Megla se prikaže v visokokakovostni sliki na grafični kartici; drugi mehanizmi prikažejo nebo, svetlobo in mokre površine. Dež ni narisan kot padajoče črte.

**Materiali**

- **Material iz ene fotografije.** Dajte ModelCraft fotografijo površine (zid, tla, kamen), in naredi se popločilni material: osvetlitev po fotografiji je izravnana, robovi se stikajo, zemljevid barv, zemljevid hrapavosti in normalni zemljevid pa se izračunajo iz slike. Gre za navadno obdelavo slik na vaši lastni sliki, brez naučenega modela. Hrapavost je ocena. Navadna, kvadratna, naravnost spredaj posneta fotografija da najboljšo ploščico; močan vzorec, kakor so opeke, pokaže mehak duh tam, kjer je spoj zmešan.

**Površine**

- **Proste površine.** Plošča {{ui:Površine}} naredi krivulje NURBS in neobrezane površine: krivulje skozi točke, prehod (loft), linearne, iztisnjene, zavrtene, potegnjene po eni ali dveh tirnicah, površine iz mreže krivulj, zaplate iz štirih robov, ujemanje in mešanje. Vsak skupni rob se izmeri kot G0, G1 ali G2 (razmik, kot, skok ukrivljenosti) na natančnih površinah; rob, slabši od tistega, ki ste ga zahtevali, se pojavi v podoknu Težave z gumbom **Ujemi**. Zebraste črte in barve ukrivljenosti so narisane iz natančnih površin. Datoteki STEP in IGES se izvozita in uvozita. Glejte [Proste površine (NURBS)](topic:nurbs-surfaces).

**Mesto in sobe**

- **Skica s fotografije na tla.** {{ui:Datoteka}} › {{ui:Uvozi fotografijo skice …}} spremeni fotografijo ročne skice v robove na tleh v merilu, ki ga navedete: ena skupina, z oznako za vsako barvo peresa. Papir se najde in poravna na vašem računalniku, nič se ne pošlje nikamor. Glejte [Model na tlorisu lokacije](topic:site-plan).
- **Opremite sobo.** Izberite tla in uporabite {{ui:Razvrsti}} › {{ui:Opremi prostor …}}. Pohištvo za spalnico, dnevno sobo, jedilnico, kuhinjo, kopalnico ali pisarno se postavi po pravilih, ob stenah in brez vrat ter oken, v eni skupini, ki jo odstranite v enem koraku. Je privzeta postavitev za pregled, ne načrt. Glejte [Začetna knjižnica](topic:starter).

**3D-tiskanje**

- **Poševni rezi.** Razdeli za tiskanje lahko poševi svoje reze do 60 stopinj, kar da kosom več površine za lepljenje. Priključki stojijo pravokotno na rez. Glejte [Razdelitev modela za tiskanje](topic:print-split).
- **Preverjanje tiskanja v Težavah.** Ugotovitve preverjanja za 3D-tiskanje se pokažejo v podoknu Težave z oznakami na modelu, Popravilo jih od tam popravi. Glejte [Podpore, debelina sten, izdolbitev in popravilo](topic:print-tools).

**V vseh aplikacijah**

- **Jeziki.** Pomoč in aplikacije prihajajo v 54 jezikih. Deset jih je novih: litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikaans, filipinščina, svahili in uzbeščina. Jeziki razen angleščine so strojni osnutki, dokler jih materni govorec ne prebere, teme pomoči pa so lahko še v angleščini.
- **Vnosne naprave.** Sledilna ploščica, pisalo, 3D miška, igralni krmilnik in kontrole MIDI lahko upravljajo aplikacije, za vse ali za eno.
- **Vrstice orodij.** {{ui:Nastavitve}} › {{ui:Splošno}} › Vrstice orodij nastavi Prelom (kakor prej), 2 vrstici ali 1 vrstica. Vrstica, ki se ne prilega, se pomakne vstran namesto da bi vzela prostor risbi. Prelom ostane privzeto.
- **Mreža lastnosti.** Polja svetil ModelCraft uporabljajo skupno mrežo: zložljive kategorije, stolpca oznak in vrednosti ter gostoto Strnjeno. Vnesena aritmetika, kakršna je `2*450`, še vedno deluje.
- **Težave.** Podokno Težave (gumb z opozorilom v vrstici aplikacije) je skupno vsem aplikacijam. V ModelCraft vsebuje preverjanje tiskanja in opozorila o zveznosti površin.
- **Live.** Live TeamWork pokaže, kdo je kje. Glejte [Modeliranje skupaj z Live TeamWork](topic:work-live).
- **Dodatki.** Dodatki lahko dodajo mehanizme upodabljanja, kakor zgoraj.
- **Povežite svojo umetno inteligenco.** Pogodba orodij in preverjanja vseh osmih aplikacij so opravljena, skupaj 454 orodij. Enoklična povezava znotraj Studia, gostovani priklop za pomočnike v brskalniku, lastni ključ znotraj Studia in objavljen paket še niso obljubljeni. Aplikacije nimajo lastne umetne inteligence. Glejte [Uporaba ModelCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).

### Popravljeno v 0.8.1

- **Razdelek DWG classes.** Razdelek razredov datoteke DWG je bil prebran kot napačna vrsta, zaradi česar bi se datoteka lahko ob uvozu pokvarila. Zdaj se prebere pravilno v ModelCraft in v drugih aplikacijah, ki berejo DWG.
- **Tablice v pokončni postavitvi.** Odvečna višina mreže gre na platno, postavitev lista pa se začne pri 760 slikovnih točkah širine ali manj. Tudi slogovna predloga ModelCraft ima to spremembo.
- **Jezik v Studiu.** CadCraft Studio in spakirane izdaje lahko med delovanjem preklapljajo jezik; prej so bile samo v angleščini. To še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.

### Še ni v tej izdaji

- **Brez podpisa kode.** Windows lahko pokaže SmartScreen: izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu z desno tipko kliknite in izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane, izdelava za iPad in iPhone pa ni bila ponovno zgrajena za 0.8.1.
- Drug program, ki riše sliko brez dodatka za mehanizem upodabljanja, panoramske ali stereo kamere ter slika neba prek drugega programa, in vtičnik, ki odpre prizorišče Unreal, še niso tu. Datoteke so zapisane; vtičnik ni izdan in ni bil zagnan v Unreal.
- Proste površine: G3 in razred A nista izmerjena ali zatrjevana; obrezovanje in telesa pridejo pozneje.
- Slike iz drugih programov niso piksel za piksel enake kot naše: ujemajo se samo kamera, sonce, svetila in izpostavitev.
- Popravek za 0.8.1 za preklapljanje jezika v Studiu ni preizkušen na vseh platformah.

Vse drugo je v [Še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
