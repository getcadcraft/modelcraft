---
title: Kaj je novega v 0.8 in 0.8.1
summary: Izbira pogona upodabljanja z datotekami za druge programe, prostoročne površine NURBS z merjeno zveznostjo, prizor, ki ga opišete pomočniku, material iz ene fotografije, skica s fotografije na tla, opremljene sobe, poševni rezi za 3D-tiskanje ter preverjanje tiska v podoknu Težave.
keywords: kaj je novega, novosti, opombe ob izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, pogon upodabljanja, pogon, odpri v, usd, gltf, unreal, pogon dodatka, nurbs, površine, prehod, potegni po poti, zveznost, g0, g1, g2, zebra, step, iges, opiši prizor, prizor, vreme, čas dneva, letni čas, pomočnik, material iz fotografije, fotografija, skica s fotografije, opremi, opremi prostor, poševni rez, preverjanje tiska, težave, mreža lastnosti, svetilke, jeziki, vhodne naprave, vrstice orodij, dwg, live
from: e4989b17
---

To je, kar se je spremenilo v ModelCraft 0.8 (2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. Pogovorno okno {{ui:Upodobi sliko…}} lahko zdaj pošlje prizor drugemu programu, podokno {{ui:Površine}} ustvarja gladke prostoročne površine, pomočnik, ki ga povežete, pa lahko nastavi cel prizor z enim stavkom.

## Novo

### Upodabljanje

- **Izbira pogona.** {{ui:Upodobi sliko…}} ima seznam **Pogon** nad **Način**. Naša dva pogona, Hitri in sledilnik poti, sta privzeta in delujeta povsod. Drugi vnosi shranijo prizor kot paket (model kot datoteko USD ter nastavitveno datoteko s točnimi vrednostmi materialov, vklopljenimi svetilkami, soncem, nebom, izpostavitvijo in kamero), ki ga odnesete v drug program. Slika, narisana z drugim programom, pove, kateri program in katera različica sta jo naredila. Glejte [Izberite, kateri program riše sliko](topic:render-engines).
- **Odpri v drugem programu.** Seznam Pogon lahko shrani prizor kot datoteko USD, datoteko glTF (`.glb`) ali mapo projekta Unreal (`.zip`), v brskalniku in v CadCraft Studio. V Studiu lahko zažene tudi usdview ali privzeti program računalnika za to datoteko. Glejte [Odprite prizor v drugem programu](topic:render-open-in).
- **Pošiljanje v igralni pogon iz Studia.** Studio zapiše prizor v projekt Unreal Engine in ga ob vsakem pošiljanju ohrani usklajenega, samo v eno smer. Vaši lastni popravki so v plasti, ki je CadCraft nikoli ne piše. Glejte [Pošiljanje prizora v igralni pogon](topic:render-unreal).
- **Pogoni iz dodatkov.** Dodatek lahko doda pogon na seznam. Tisti, napisan v JavaScriptu, riše v brskalniku in v Studiu; tisti, ki zažene program, v Studiu potrebuje vaše dovoljenje. Glejte [Narišite sliko z drugim programom](topic:render-other-program) in [Dodajte pogon upodabljanja z dodatkom](topic:render-engine-addons).
- **Opišite prizor.** Povezanemu pomočniku recite „somrak, rahel dež, jesenska drevesa, ljudje na trgu“ in ModelCraft nastavi prizor v enem koraku: sonce se premakne na datum in čas, da sledijo sence, nebo se spremeni, pojavijo se mokre površine, drevesa in ljudje pa so postavljeni kot pravi predmeti na oznake, ki jih lahko skrijete, premaknete ali izbrišete. Čas dneva, datum, letni čas in vreme (jasno, oblačno, megla, rahel dež, dež, nevihta) delujejo tudi sami, pozneje zahtevo pa spremeni isti prizor. Megla se prikaže na sliki visoke kakovosti na grafični kartici; drugi pogoni prikažejo nebo, svetlobo in mokre površine. Dež ni narisan kot padajoče črte.

### Materiali

- **Material iz ene fotografije.** Dajte ModelCraftu fotografijo površine (stena, tla, kamen), in ta naredi ponavljajoči se material: osvetlitev po fotografiji se poravna, robovi se zlijejo, zemljevid barv, zemljevid hrapavosti in zemljevid normal pa se izračunajo iz slike. Gre za navadno obdelavo slike na vaši lastni sliki, brez naučenega modela. Hrapavost je ocena. Ravna, kvadratna, naravnost posneta fotografija da najboljšo ploščico; močan vzorec, kot so opeke, lahko pokaže mehak duh tam, kjer je spoj zlit.

### Površine

- **Prostoročne površine.** Podokno {{ui:Površine}} ustvarja krivulje NURBS in površine brez obrezovanja: krivulje skozi točke, prehod (loft), linearne, iztisni, zavrti, poteze vzdolž ene ali dveh tirnic, površine iz mreže krivulj, zaplate iz štirih robov, ujemanje in zlivanje. Vsak skupni rob se meri kot G0, G1 ali G2 (vrzel, kot, skok ukrivljenosti) na točnih površinah, rob, ki je slabši, kot ste zahtevali, pa se pojavi v podoknu Težave s popravkom **Ujemi**. Zebraste proge in barve ukrivljenosti so narisane iz točnih površin. Datoteki STEP in IGES se izvozita in uvozita. Glejte [Prostoročne površine (NURBS)](topic:nurbs-surfaces).

### Parcela in prostori

- **Skica s fotografije na tla.** {{ui:Datoteka}} › {{ui:Uvozi fotografijo skice …}} spremeni fotografijo ročne skice, posneto s telefonom, v robove na tleh v merilu, ki ga navedete: ena skupina, z oznako za vsako barvo peresa. Papir se na vašem računalniku najde in poravna, nič pa se ne pošlje nikamor. Glejte [Model na situacijskem načrtu](topic:site-plan).
- **Opremite prostor.** Izberite tla in uporabite {{ui:Razvrsti}} › {{ui:Opremi prostor …}}. Pohištvo za spalnico, dnevno sobo, jedilnico, kuhinjo, kopalnico ali pisarno se postavi po pravilih, ob stenah in stran od vrat ter oken, v eni skupini, ki jo lahko odstranite v enem koraku. Gre za privzeto razporeditev, ki jo morate pregledati; ni načrt. Glejte [Začetna knjižnica](topic:starter).

### 3D-tiskanje

- **Poševni rezi.** Razdelitev za tiskanje lahko nagne reze do 60 stopinj, kar da kosom več površine za lepljenje. Povezovalniki stojijo pravokotno na rez. Glejte [Razdelitev modela za tiskanje](topic:print-split).
- **Preverjanje za tiskanje v podoknu Težave.** Ugotovitve preverjanja za 3D-tiskanje se prikažejo v podoknu Težave z oznakami na modelu, Popravi pa jih odpravi od tam. Glejte [Podpore, debelina sten, votlenje in popravilo](topic:print-tools).

### V vseh aplikacijah

- **Jeziki.** Pomoč in aplikacije so na voljo v 54 jezikih. Deset jih je novih: litovščina, latvijščina, bosanščina, maratščina, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina. Jeziki, razen angleščine, so do pregleda materinskega govorca strojni osnutki, teme pomoči pa so lahko še v angleščini.
- **Vhodne naprave.** Sledilna ploščica, pisalo, 3D-miška, igralni krmilnik in krmiljenje MIDI lahko poganjajo aplikacije, za vse ali za eno.
- **Vrstice orodij.** {{ui:Nastavitve}} › {{ui:Splošno}} › Vrstice orodij nastavi Prelom (kot prej), 2 vrstici ali 1 vrstico. Vrstica, ki se ne prilega, se pomika vstran in ne vzame prostora risbi. Prelom ostane privzet.
- **Mreža lastnosti.** Polja svetilk ModelCraft uporabljajo skupno mrežo: zložljive kategorije, stolpca oznak in vrednosti ter gostoto Kompaktno. Vpisana aritmetika, na primer `2*450`, še vedno deluje.
- **Težave.** Podokno Težave (gumb z opozorilom v vrstici aplikacije) je skupno za vse aplikacije. V ModelCraftu vsebuje preverjanje za tisk in opozorila o zveznosti površin.
- **Live.** Seja Live TeamWork pokaže, kdo je kje. Glejte [Modeliranje skupaj z Live TeamWork](topic:work-live).
- **Dodatki.** Dodatki lahko dodajo pogone upodabljanja, kot zgoraj.
- **Povežite svojega pomočnika AI.** Pogodba o orodjih in preverjanja vseh osmih aplikacij so opravljena, skupaj 454 orodij. Povezava z enim klikom v Studiu, gostujoči konektor za pomočnike v brskalniku, vaš lastni ključ v Studiu in objavljen paket še niso obljubljeni. Aplikacije nimajo lastne umetne inteligence. Glejte [Uporaba ModelCraft s pomočniki AI](topic:use-with-ai-assistants).

## Popravljeno v 0.8.1

- **Razdelek razredov DWG.** Razdelek razredov datoteke DWG je bil prebran kot napačen tip, zaradi česar je lahko uvoz pokvaril datoteko. Zdaj je pravilno prebran, v ModelCraftu in drugih aplikacijah, ki berejo DWG.
- **Tablični računalniki v pokončni postavitvi.** Prosta višina mreže gre na platno, postavitev lista pa se začne pri širini 760 slikovnih pik ali manj. Tudi slogovna predloga ModelCraft ima to spremembo.
- **Jezik v Studiu.** CadCraft Studio in pakirane izdaje lahko med delovanjem preklopijo jezik; prej so bile samo v angleščini. Še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.

## Še ni v tej različici

- **Ni podpisano s kodo.** Windows lahko prikaže SmartScreen: izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu desno kliknite in izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane, izdaja za iPad in iPhone pa za 0.8.1 ni bila znova zgrajena.
- Drugi program, ki riše sliko brez dodatka za pogon upodabljanja, panoramske ali stereo kamere ter slika neba prek drugega programa, in vtičnik, ki odpre oder Unreal, še niso tu. Datoteke so zapisane; vtičnik ni izdan in ni bil zagnan v Unrealu.
- Prostoročne površine: G3 in razred A nista merjena ali zatrjevana, obrezovanje in telesa pridejo pozneje.
- Slike iz drugih programov niso piksel za piksel enake naši: ujemajo se samo kamera, sonce, svetilke in izpostavitev.
- Popravek za 0.8.1 za preklop jezika v Studiu ni preizkušen na vseh platformah.

Vse drugo je v [Še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
