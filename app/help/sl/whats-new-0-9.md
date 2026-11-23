---
title: Kaj je novega v različici 0.9 (prej)
summary: Faza tiskanja z lastnim slicerjem in pošiljanjem prek USB, Klipperja, OctoPrint in PrusaLink, rezanje za smolo in dodatki za datoteke, pretok materiala, digitalni dvojček in dodatek za tovarniška tla, zaobljenosti NURBS, odebelitev in prilagajanje skeniranju, AR na gradbišču ter deset načinov loka.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, faza tiskanja, 3D-tiskanje, pošlji na 3D-tiskalnik, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, smola, tiskanje s smolo, goo, sl1, ctb, anycubic, preskus osvetlitve, pretok materiala, digitalni dvojček, tovarniška tla, plc, tekoči trak, nurbs, zaobljenost, odebeli, prilagoditev skeniranju, ar, na gradbišču, načini loka, enote, kaj je novega, spremembe, 0.8, 0.8.1, različica, nove funkcije, upodobitveni pogon, pogon, odpri v, usd, gltf, unreal, pogon dodatka, ploskve, prehod, potegni po poti, zveznost, g0, g1, g2, zebra, step, iges, opiši prizor, prizor, vreme, čas dneva, letni čas, pomočnik, material iz fotografije, fotografija, fotografija skice, opremi, opremi prostor, nagib, poševni rez, razdeli, preverjanje tiskanja, težave, mreža lastnosti, svetilke, jeziki, vhodne naprave, vrstice orodij, dwg, live
from: 2717d1b1
---

To so spremembe v ModelCraft 0.9 v primerjavi z 0.8.1. ModelCraft zdaj seže do tiskalnika in tovarniških tal: stvari lahko postavite na mizo za tiskanje in jih pošljete brez izvoza, režete za filament ali smolo ter oblikujete linijo za ravnanje z materialom. To je CadCraft Studio 0.9 in njegovih osem aplikacij; večina novih funkcij spodaj je dodatkov.

## Novo

### 3D-tiskanje

- **Faza tiskanja.** Kliknite {{ui:Faza tiskanja}} na orodni vrstici. Dodajte elemente knjižnice na mizo tiskalnika, jih razporedite, pogledate rezane plasti in pritisnete {{ui:Pošlji na 3D-tiskalnik}}, brez izvoza STL. Spada v dodatek 3D Print, ki je privzeto vklopljen in ga lahko odstranite kot vsak dodatek. Glejte [Postavite stvari na mizo za tiskanje in jih pošljite na tiskalnik](topic:print-stage).
- **Lasten slicer za filament.** {{ui:CadCraft basic (vključen, najhitrejši)}} je slicer na seznamu **Slicer** na kartici: stene, površine, polnilo, podpore in obrobo, na delavcu, da stran ostane uporabna. {{ui:Predogled plasti}} z drsnikom **Plast** prikaže plasti, preden pošljete. Profili tiskalnikov, kot sta Ender-3 in Prusa MK4, nosijo svojo začetno G-kodo.
- **Pošiljanje.** Prek USB (Chrome ali Edge na računalniku, s stranjo, ki ostane odprta) ali na Klipper (Moonraker), OctoPrint ali PrusaLink v vašem omrežju. Nič se ne poveže ali pošlje brez klika, pošiljanje pa vedno najprej vpraša.
- **Drugi slicerji.** Kiri:Moto, PrusaSlicer in OrcaSlicer so svoji dodatki, privzeto izklopljeni; dodajte jih s kartice ali iz {{ui:Nastavitve}} › {{ui:Dodatki}}. PrusaSlicer in OrcaSlicer uporabljata vašo lastno nameščeno kopijo iz CadCraft Studio. Dodatek za tiskalnike Bambu Lab reže z vašim OrcaSlicerjem in njegovimi profili P2S ter za delovanje potrebuje Studio na računalniku.
- **Tiskanje s smolo.** Dodatki za smolo (privzeto izklopljeni) naredijo slike plasti za zaslon vašega tiskalnika, z izdolbitvijo in odzračevalnimi luknjami, podlago in podporami, predogledom plasti ter časom, smolo in ceno. Dodatki za datotečne formate zapisujejo Elegoo GOO, SL1, Chitubox (CBDDLP in CTB 2 do 5) ter Anycubic (PWMX in PWS). Preskus osvetlitve za smolo naredi lestev petih osvetlitev. Glejte [Rezanje za tiskalnik s smolo](topic:resin-printing).
- **Nespremenjeno.** {{ui:Izvozi}} › {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}}, orodja za tiskanje in Razdelitev za tiskanje delujejo kot v 0.8. Glejte [Pripravite model za 3D-tiskanje](topic:print-3d).

### Pretok materiala, digitalni dvojček in tovarniška tla

Ti trije so dodatki, izklopljeni, dokler jih ne vklopite v {{ui:Nastavitve}} › {{ui:Dodatki}}, vsak pa ima lastno pomoč, ko je vklopljen.

- **Pretok materiala.** Panel z imenom Pretok materiala postavi tekoče trakove, postaje, medpomnilnike in poti AGV v 3D pogledu, zažene simulacijo s semenom, jo predvaja nazaj ter prikaže pretočnost, čase dobave in čakalne vrste, rezultati pa so shranjeni kot CSV. Naročila so lahko iz datoteke CSV. Robotske celice je mogoče preveriti in izvoziti. Povezava PLC ima mehki način in pravi način prek Modbus TCP, ki deluje samo v CadCraft Studio.
- **Digitalni dvojček.** Bere postavitev Pretoka materiala in na njej zažene mehki PLC, z napakami, ki jih lahko vsilite, preskusi zalog, primerjavo postavitev in kosovnico.
- **Tovarniška tla.** Postaje spremeni v stroje in celice, bere jih v živo ali iz simulatorja ter hrani čakalno vrsto opravil in preprost OEE. Samo bere: ta gradnja ne more pisati v stroj ali PLC.

### Ploskve, modeli in risanje

- **Zaobljenost, odebelitev in logične operacije na NURBS.** Panel {{ui:Površine}} ima {{ui:Zaobli med ploskvami}}, {{ui:Zaobli več robov}}, {{ui:Odebeli v telo}} ter unijo, odštevanje in presek, vsaka z izmerjenim odklonom. Glejte [Prosto oblikovane ploskve (NURBS)](topic:nurbs-surfaces).
- **Prilagajanje ploskev skenu.** Izberite skenirano mrežo in uporabite {{ui:Prilagodi ploskve skeniranju}} v skupini **Skeniranje**, nato {{ui:Sešij ploskve v telo}}. Gre za prvo prilagoditev, ne za celoten paket za povratni inženiring.
- **Živa povezava iz modelirnika .3dm.** Enosmerna, iz Rhino 8 ali Grasshopperja, in potrebuje CadCraft Studio na istem računalniku. Glejte [Ohranite model .3dm v živo](topic:live-3dm-link).
- **Ogled modela na gradbišču.** {{ui:Pogled na gradbišču (AR, telefon)}} v meniju {{ui:Pogledi}} deluje na Android telefonu s Chromom. Glejte [Oglejte si model na gradbišču z Android telefonom (AR)](topic:ar-on-site).
- **Načini loka.** Spustni seznam {{ui:Načini loka}} ponuja deset načinov risanja loka, vključno z {{ui:3 točke}} in {{ui:Začetek, središče, konec}}.
- **Več enot.** Mase (kg, lb, t, ton) in temperature (stopinje C, F, K in R) so razumljive tam, kjer vnašate vrednosti z enotami.

## V vseh aplikacijah

- **Namigi.** Besedilo ob kazalcu na gumbih in odrezane oznake so Bootstrap namigi.
- **Zapiralni začetni nasvet.** Kartica nasveta na praznem območju risbe ima majhen gumb x za zapiranje. Ostane zaprta, paleta ukazov pa jo lahko znova prikaže.
- **Drseče vrstice zavihkov.** Vrstica zavihkov podokna, ki se ne prilega, se pomika namesto da bi bila odrezana.
- **Naslovi zavihkov.** Ko je dokument odprt, se v brskalniškem zavihku najprej pojavi ime dokumenta, nato ModelCraft in CadCraft. Pika je na začetku, dokler so spremembe neshranjene.
- **Postavitev.** {{ui:Nastavitve}} › {{ui:Splošno}} › Postavitev hrani postavitve v spustnem seznamu, z izbiro uporabe postavitve samo za to aplikacijo in gumbom za ponastavitev postavitve.
- **Jeziki.** Seznam jezikov v Nastavitvah sledi jezikovnim datotekam, ki jih vsebuje gradnja. Jeziki, razen angleščine, so strojni osnutki.
- **Live in knjižnica.** Live TeamWork prikazuje žive kazalce in imena, zbirke knjižnice pa vsaki aplikaciji dajo privzeto zbirko.

## Popravljeno

- {{ui:Predvajaj}} se med predvajanjem animacije spremeni v {{ui:Premor}}, {{key:Space}} pa predvaja in ustavi, ko je časovnica odprta.
- Upodobitev slike se vrne na WebGL, kadar grafična kartica ne more zagnati sledilnika poti (path tracer). Pogled žive upodobitve lahko še vedno prikazuje napako; to ni bilo preverjeno na računalniku Windows s tem gonilnikom.
- Pravi način Pretoka materiala se spet poveže, potem ko se je povezava končala z odgovori izjem PLC.

## Iskreno o omejitvah

- Na pravem tiskalniku ničesar še ni bilo natisnjenega: ne filament, ne smola, ne prek Bambu Connect. Datoteke za smolo so prebrali samo lastni bralniki CadCraft.
- Digitalni dvojček in tovarniška tla sta bila preizkušena samo na simulatorjih in znanih rezultatih, brez pravega PLC, linije ali protokola. Sta pripomočka za preverjanje, ne varnostna validacija. Fizika zajema samo kvadre, do osem obremenitev.
- Povezava Rhino in Grasshopper še nikoli ni delovala v pravih programih.
- Jeziki, ki niso angleški, so strojni osnutki.

## Prej: 0.8 in 0.8.1

To so spremembe v ModelCraft 0.8 (2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. Pogovorno okno {{ui:Upodobi sliko…}} lahko zdaj pošlje prizor v drug program, panel Ploskve ustvarja gladke prosto oblikovane ploskve, pomočnik, ki ga povežete, pa lahko nastavi cel prizor z enim stavkom.

### Novo

**Upodabljanje**

- **Izbira pogona.** Pogovorno okno {{ui:Upodobi sliko…}} ima seznam **Pogon** nad možnostjo Način. Naša dva pogona, Hitri in Sledilnik poti, sta privzeta in delujeta povsod. Drugi vnosi shranijo prizor kot paket (model kot datoteka USD ter nastavitvena datoteka z natančnimi vrednostmi materialov, vklopljenimi svetilkami, soncem, nebom, osvetlitvijo in kamero), da ga odnesete v drug program. Slika, narisana z drugim programom, pove, kateri program in katera različica sta jo ustvarila. Glejte [Izberite program, ki riše sliko](topic:render-engines).
- **Odprtje v drugem programu.** Seznam Pogon lahko shrani prizor kot datoteko USD, datoteko glTF (`.glb`) ali mapo projekta Unreal (`.zip`), v brskalniku in v CadCraft Studio. V Studiu lahko zažene tudi usdview ali računalnikov lastni program za datoteko. Glejte [Odprite prizor v drugem programu](topic:render-open-in).
- **Pošiljanje v igralni pogon iz Studia.** Studio zapiše prizor v projekt Unreal Engine in ga ob vsakem pošiljanju uskladi, samo v eno smer. Vaše lastne spremembe so v plasti, ki je CadCraft nikoli ne zapiše. Glejte [Pošljite prizor v igralni pogon](topic:render-unreal).
- **Pogoni iz dodatkov.** Dodatek lahko doda pogon v seznam. Tisti, napisan v JavaScriptu, riše v brskalniku in v Studiu; tisti, ki zažene program, v Studiu potrebuje vaše dovoljenje. Glejte [Narišite sliko z drugim programom](topic:render-other-program) in [Dodajte upodobitveni pogon z dodatkom](topic:render-engine-addons).
- **Opišite prizor.** Povejte svojemu povezanemu pomočniku „mrak, rahel dež, jesenska drevesa, ljudje na trgu“ in ModelCraft nastavi prizor v enem koraku: sonce se premakne na datum in čas, da sence sledijo, nebo se spremeni, pojavijo se mokre površine, drevesa in ljudje pa so postavljeni kot pravi predmeti z oznakami, ki jih lahko skrijete, premaknete ali izbrišete. Čas dneva, datum ali letni čas ter vreme (jasno, oblačno, megla, rahel dež, dež, nevihta) delujejo tudi samostojno, kasnejša zahteva pa spremeni isti prizor. Megla se prikaže na visokokakovostni sliki na grafični kartici; drugi pogoni prikažejo nebo, svetlobo in mokre površine. Dež ni narisan kot padajoče črte.

**Materiali**

- **Material iz ene fotografije.** Dajte ModelCraft fotografijo površine (zid, tla, kamen) in naredil bo ploščičasti material: osvetlitev po fotografiji se poravna, robovi se stikajo, iz slike pa se izračunajo zemljevid barv, zemljevid hrapavosti in zemljevid normal. Gre za navadno obdelavo slike vaše lastne fotografije, brez naučenega modela. Hrapavost je ocena. Ravna, kvadratna fotografija naravnost od spredaj da najboljšo ploščico; močan vzorec, kot so opeke, lahko pokaže mehak duh tam, kjer je stik zlit.

**Ploskve**

- **Proste ploskve.** Panel {{ui:Površine}} ustvarja krivulje NURBS in neobrezane ploskve: krivulje skozi točke, prehod, linearne ploskve, iztis, zavrt, potege po eni ali dveh tirnicah, ploskve iz mreže krivulj, zaplate iz štirih robov, ujemanje in zlivanje. Vsak skupni rob je izmerjen kot G0, G1 ali G2 (vrzel, kot, skok ukrivljenosti) na natančnih ploskvah, rob, ki je slabši od zahtevanega, pa se pojavi v panelu Težave z popravkom **Match**. Zebra črte in barve ukrivljenosti so narisane iz natančnih ploskev. Datoteki STEP in IGES se izvozita in uvozita. Glejte [Prosto oblikovane ploskve (NURBS)](topic:nurbs-surfaces).

**Gradbišče in prostori**

- **Skica na tla.** {{ui:Datoteka}} › {{ui:Uvozi fotografijo skice …}} spremeni telefonsko fotografijo ročne skice v robove na tleh v merilu, ki ga navedete: ena skupina, z oznako za vsako barvo peresa. Papir se na vašem računalniku najde in poravna, nič pa se ne pošlje nikamor. Glejte [Model na situacijskem načrtu](topic:site-plan).
- **Opremite prostor.** Izberite tla in uporabite {{ui:Razvrsti}} › {{ui:Opremi prostor …}}. Pohištvo za spalnico, dnevno sobo, jedilnico, kuhinjo, kopalnico ali pisarno se postavi po pravilih, ob stene in stran od vrat ter oken, v eni skupini, ki jo lahko odstranite v enem koraku. Gre za privzeto postavitev za pregled, ne za načrt. Glejte [Začetna knjižnica](topic:starter).

**3D-tiskanje**

- **Poševni rezi.** Razdelitev za tiskanje lahko nagne svoje reze do 60 stopinj, kar da kosom več površine za lepljenje. Konektorji stojijo pravokotno na rez. Glejte [Razdelitev modela za tiskanje](topic:print-split).
- **Preverjanje tiskanja v Težavah.** Ugotovitve preverjanja za 3D-tiskanje se prikažejo v panelu Težave z oznakami na modelu, popraviti pa jih lahko od tam. Glejte [Podpore, debelina sten, izdolbitev in popravilo](topic:print-tools).

**V vseh aplikacijah**

- **Jeziki.** Pomoč in aplikacije so na voljo v 54 jezikih. Deset jih je novih: litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina. Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere izvorni govorec, teme pomoči pa so morda še v angleščini.
- **Vhodne naprave.** Sledilna ploščica, pisalo, 3D-miška, igralni krmilnik in krmilniki MIDI lahko upravljajo aplikacije, za vse ali za eno.
- **Vrstice orodij.** {{ui:Nastavitve}} › {{ui:Splošno}} › Vrstice orodij nastavi Prelom (kot prej), 2 vrstici ali 1 vrstica. Vrstica, ki se ne prilega, se pomika vstran, namesto da bi vzela prostor risbi. Prelom ostane privzet.
- **Mreža lastnosti.** Polja svetilk v ModelCraft uporabljajo skupno mrežo: skrčljive kategorije, stolpca oznake in vrednosti ter gostota Kompaktno. Vpisana aritmetika, kot je `2*450`, še vedno deluje.
- **Težave.** Panel Težave (gumb z opozorilom v vrstici aplikacije) je skupen vsem aplikacijam. V ModelCraft vsebuje preverjanje tiskanja in opozorila o zveznosti ploskev.
- **Live.** Seja Live TeamWork pokaže, kdo je kje. Glejte [Modeliranje skupaj z Live TeamWork](topic:work-live).
- **Dodatki.** Dodatki lahko dodajo upodobitvene pogone, kot zgoraj.
- **Povežite svojo umetno inteligenco.** Pogodba orodij in preverjanja osmih aplikacij sta uspešna, skupaj s 454 orodji. Povezava z enim klikom znotraj Studia, gostujoči konektor za pomočnike v brskalniku, lasten ključ v Studiu in objavljen paket še niso obljubljeni. Aplikacije same ne vsebujejo nobene umetne inteligence. Glejte [Uporaba ModelCraft z AI pomočniki](topic:use-with-ai-assistants).

### Popravljeno v 0.8.1

- **Razdelek razredov DWG.** Razdelek razredov datoteke DWG je bil prebran kot napačna vrsta, zaradi česar se je datoteka pri uvozu lahko pokvarila. Zdaj je prebran pravilno, v ModelCraft in drugih aplikacijah, ki berejo DWG.
- **Tablice v pokončni postavitvi.** Odvečna višina mreže gre na platno, postavitev lista pa se začne pri 760 slikovnih pikah ali manj. Tudi slog ModelCraft ima to spremembo.
- **Jezik v Studiu.** CadCraft Studio in pakirane izdaje lahko med delovanjem menjajo jezik; prej so bile samo v angleščini. To še ni preizkušeno na vseh platformah; sporočite nam, če se jezik ne spremeni.

### Še ni v tej različici

- **Ni podpisano s kodo.** Windows lahko prikaže SmartScreen: izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu z desnim klikom izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane, izdelava za iPad in iPhone pa za 0.8.1 ni bila ponovno zgrajena.
- Upodabljanje slike z drugim programom brez dodatka za upodobitveni pogon, panoramske ali stereo kamere ter slika neba prek drugega programa in vtičnik, ki odpira fazo Unreal, še niso na voljo. Datoteke so zapisane; vtičnik ni izdan in ni bil zagnan v Unrealu.
- Proste ploskve: G3 in razred A nista merjena ali zagotovljena, obrezovanje in telesa pridejo pozneje.
- Slike iz drugih programov niso piksel za piksel enake kot naše: ujemajo se le kamera, sonce, svetilke in osvetlitev.
- Popravek preklapljanja jezika v Studiu za 0.8.1 ni preizkušen na vseh platformah.

Vse drugo je v [Še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
