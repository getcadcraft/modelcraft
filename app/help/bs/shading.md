---
title: Pravljenje materijala čvorovima
summary: Napravite materijal od tekstura, slika i proračuna u radnom prostoru Sjenčenje, vidite ga u prikazu dok radite i bojite površine njime.
keywords: sjenčenje, pečenje, pečenje tekstura, ambijentalna okluzija, ao, zakrivljenost, pečenje normala, visoka rezolucija, niska rezolucija, svjetlosna mapa, dekal, dekali, nalijepnica, logo, oznaka, bojenje tekstura, kist, materijal, materijali, materialx, mtlx, openpbr, standard surface, biblioteka materijala, librarycraft, skup tekstura, pbr, uvoz tekstura, zip, cc0, prevuci, čvor, čvorovi, uređivač čvorova, shader, tekstura, proceduralno, šum, šahovnica, voronoi, ćelije, talasi, cigle, pločice, drvo, mramor, gradijent, prljavština, habanje ivica, rampa boja, miješanje, izbočina, mapa normala, hrapavost, metalnost, neprozirnost, izrez, emisija, sjaj, pomak, mapiranje kutije, triplanar, uv, slika, slikovna tekstura
from: d7368b21
---

Materijal napravljen u radnom prostoru **Sjenčenje** pripada datoteci. To je mali graf: **čvorovi** koji prave teksture, slike i brojeve, povezani na **Izlaz materijala** čiji su ulazi izgled površine (osnovna boja, hrapavost, metalnost, normala, neprozirnost, emisija i ostatak OpenPBR modela). Površine bojite njime kao bilo koji materijal iz biblioteke, a svaka promjena odmah se prikazuje u prikazu.

## Otvaranje

Odaberite {{ui:Sjenčenje}} na listi radnih prostora. 3D prikaz zadržava vrh ekrana, a **uređivač čvorova** zauzima dno. Panel s desne strane navodi materijale datoteke.

- {{ui:Novi materijal}} pravi sivi materijal samo s njegovim Izlazom materijala.
- **Napravi uređivu kopiju materijala iz biblioteke** pretvara ciglu, drvo, pločicu i ostale u graf koji možete mijenjati: njegova tekstura dolazi preko čvora Tekstura iz biblioteke, a njegove izbočine preko čvora Izbočina.
- {{ui:Oboji njime}} boji odabrane površine ili grupe, ili bira materijal za alat {{ui:Boji}}. Materijali alata {{ui:Boji}} također navode materijale datoteke pod **U ovoj datoteci**.
- {{ui:Dupliraj}} i {{ui:Izbriši}} rade s materijalom koji uređujete. Brisanje se ne može poništiti: površine obojene njime prikazuju podrazumijevanu boju dok ih ponovo ne obojite.

## Materijali iz biblioteke

**Biblioteka materijala** na panelu navodi materijale biblioteke, svaki s pregledom koji iscrtava CadCraft-ov path tracer. To su skupovi tekstura objavljeni pod CC0, s navođenjem autora.

- Kliknite jedan da ga uvedete u datoteku (njegove slike dolaze s njim) i, uz odabrane površine ili grupe, da ih obojite.
- Prevucite jedan na površinu ili grupu u prikazu da obojite samo nju.
- Postaje jedan od materijala datoteke: mijenjajte njegove čvorove kao bilo koji drugi. Njegovo navođenje autora prikazuje se na panelu i ostaje u datoteci.

## Uvoz skupa tekstura

{{ui:Slike ili zip…}} ili {{ui:Folder…}} pod **Uvezi skup tekstura** pravi materijal od skupa mapa. Mape se pronalaze po riječima u imenima datoteka: color, albedo, diffuse ili basecolor; roughness (ili gloss, pretvoren u hrapavost); metalness ili metallic; normal (OpenGL ili DirectX, iz `gl` / `dx` u imenu); height ili displacement; ambient occlusion; opacity; emission. Spakovane mape (ARM, ORM) se izostavljaju. Pločica počinje na 1 × 1 m: postavite njenu stvarnu veličinu na Izlazu materijala. Visina ide u pomak s razmjerom 0; podignite razmjer da je koristite na mrežama.

## MaterialX

MaterialX je otvoreni format koji ostali 3D i renderovanje programi koriste za prenos materijala.

- {{ui:Izvezi kao MaterialX…}} čuva materijal koji uređujete: njegove vrijednosti i svaku teksturu kao PNG sliku pored `.mtlx` datoteke (u zipu). Izaberite shader u kojem se zapisuje: **OpenPBR Surface** (MaterialX 1.39, isti model koji koristi ModelCraft) ili **Standard Surface** (MaterialX 1.38, koji danas čita više programa). Teksture se postavljaju po UV koordinatama u metrima; kutija i triplanarno postavljanje zapisuju se kao UV.
- {{ui:Uvezi MaterialX…}} (ili {{ui:Iz foldera…}}) čita `.mtlx` datoteke s OpenPBR, Standard Surface, UsdPreviewSurface ili glTF PBR shaderima. Dajte mu i slike, ili zip sa svime: slika se pronalazi po svojoj putanji, imenu ili imenu s drugom vrstom slike (`.exr` koju datoteke navode može doći kao `.jpg` pored njega). Teksture, mape normala, aritmetika, miješanja i pomak ulaze kao čvorovi; sve ostalo zadržava svoju vrijednost, a statusna linija kaže šta je izostavljeno.

## Dekali

Dekal je slika postavljena na površinu (logo, znak, oznaka, mrlja) sa vlastitim materijalom.

- Postavite **Širina novog dekala**, zatim {{ui:Postavi dekal…}} (ili {{ui:Dekal}} na traci alata), izaberite PNG, JPEG ili WebP sliku i kliknite površinu. Slika se projektuje na površine tu, zadržavajući svoje proporcije; prozirni dijelovi PNG-a ostaju prozirni.
- Pripada grupi ili komponenti u koju ste kliknuli i pomjera se s njom. Pokriva površine unutar svoje kutije koje gledaju u istom smjeru, i staje na ivicama onoga na čemu leži.
- Svaki dekal dobija svoj materijal, nazvan **Dekal: <slika>**, na listi datoteke: uređujte ga kao bilo koji drugi (hrapavost, izbočina, sjaj). {{ui:Materijal}} pored dekala ga otvara.
- Uz svaki dekal: njegova širina (visina prati sliku), {{ui:Okreni}} (četvrtina okreta) i {{ui:Izbriši}}. Dekali se čuvaju uz materijale datoteke, izvan Poništi.
- Prikazuju se u sjenčanom prikazu, u brzim renderima i u slikama visokog kvaliteta.

## Slikanje na teksturi

{{ui:Oboji teksturu}} (ili {{ui:Boji}} pod **Slikanje na teksturi**) pretvara pokazivač u okrugli kist. Prevucite po površini koja nosi jedan od materijala ove datoteke: kist slika sliku iza njene osnovne boje.

- Na mreži slika ide duž UV mreže (prvo je razmotajte u radnom prostoru UV); na drugim površinama slika se proteže preko površine, pa se ponavlja s pločicom materijala.
- Materijal čija je osnovna boja obična boja dobija novu sliku 512 × 512 piksela te boje kad ga prvi put obojite. Materijal čija osnovna boja dolazi iz drugih čvorova treba čvor Slika povezan s Osnovnom bojom.
- Postavite boju kista, veličinu (u pikselima slike), jačinu i tvrdoću na panelu. {{ui:Poništi potez}} ili Ctrl+Z (dok slikate) vraća potez, do posljednjih 20.
- Obojena slika se čuva u datoteci. Materijali iz biblioteke ne mogu se bojiti: prvo napravite uređivu kopiju.

## Pečenje tekstura

**Peci teksture** zapisuje u slike ono što oblik i scena daju površini, duž UV mreže.

- Odaberite mrežu koja ima UV (razmotajte je u radnom prostoru UV), označite mape i pritisnite {{ui:Peci}}:
  - **Ambijentalna okluzija**: koliko je svaka tačka otvorena. Uglovi, nabori i mjesta ispod drugih stvari postaju tamnija. Sve prikazano u modelu je osjenčava, do udaljenosti okluzije.
  - **Zakrivljenost**: svijetla uz vanjske ivice, tamna u unutrašnjim uglovima, srednje siva na ravnim i blago zakrivljenim dijelovima, preko širine ivice koju postavite.
  - **Normale iz objekta visoke detaljnosti**: odaberite i detaljniju kopiju. Njen detalj površine zapisuje se kao mapa normala za jednostavniji objekat (onaj s manje trouglova, na koji se peče). Udaljenost pretrage je koliko smiju biti udaljene dvije površine.
  - **Osvjetljenje**: sunce mjesta i datuma modela (Stil) sa svojim sjenama, plus nebo, kao svjetlosna mapa.
- Slike se pridružuju datoteci i pojavljuju u čvorovima Slika. Ako materijal koji uređujete ima čvor **Prljavština i habanje ivica**, odmah čita novu okluziju i zakrivljenost.
- Više zraka po teselu daje glađu okluziju i osvjetljenje, ali traje duže. Pečenje se izvodi na jezgrima procesora računara u pozadini; {{ui:Zaustavi pečenje}} ga prekida.

## Pravljenje grafa

1. {{ui:Dodaj čvor…}} (ili {{key:Shift+A}} u uređivaču čvorova) dodaje čvor u sredinu uređivača.
2. Prevucite od izlazne tačke (s desne strane čvora) do ulazne tačke (s lijeve strane čvora) da ih povežete. Druga veza u ulaz zamjenjuje prvu; prevucite povezani ulaz da ga odvojite.
3. Ulazi koji nisu povezani prikazuju svoju vrijednost: unesite broj ili izaberite boju. Postavke su na dnu svakog čvora.

Prevucite čvor za njegov naslov da ga pomjerite, prevucite prazan prostor da pomjerite pogled, a točkićem zumirajte. {{key:Delete}} uklanja odabrane čvorove ili vezu, {{key:Mod+Z}} poništava, {{key:Mod+D}} dupliraj, a {{key:F}} prikazuje sve čvorove. Svaka promjena je jedan korak poništavanja uređivača čvorova. Poništavanje modela ne mijenja materijale.

| Čvorovi | Šta prave |
|---|---|
| Koordinate teksture | Gdje je tačka na pločici: ponavlja je, pomjera, okreće za četvrtinu. |
| Vrijednost, Boja | Broj, boja. |
| Slika | Slika datoteke (ona koja je došla s uvezenim modelom ili ona koju ste dodali s {{ui:Dodaj sliku…}}). Izaberite **Boje** za fotografiju i **Podaci** za mapu hrapavosti ili normale. |
| Tekstura iz biblioteke | Tekstura, hrapavost i visina materijala iz biblioteke. |
| Šahovnica, Šum | Kvadrati; glatki fraktalni šum s detaljem, hrapavošću i sjemenom. |
| Ćelije Voronoi, Talasi, Gradijent | Ćelije (udaljenost do najbliže tačke, ivice između ćelija, boja po ćeliji); pruge poprijeko, gore ili dijagonalno, kao sinus, testera ili trougao, savijene šumom; linearni, kvadratni, radijalni i sferni gradijenti. |
| Cigle, Pločice | Redovi cigli s pomjerenim spojem, ili mreža pločica: boje, malter ili fuga, razmak i zakošenje u metrima, visina za izbočine, slučajan broj po komadu. |
| Drvo, Mramor | Godovi duž vlakana s finim vlaknima; žile savijene turbulencijom. |
| Prljavština i habanje ivica | Troši konveksne ivice i prlja udubljenja iz slika zakrivljenosti i okluzije mreže ([Peci teksture](topic:shading#bake-textures) ih pravi; ili postavite njene dvije postavke slike, u UV rasporedu mreže: postavite materijal po UV koordinatama). Bez njih ne mijenja ništa. |
| Miješaj boje, Rampa boja, Nijansa/zasićenje/vrijednost, Svjetlina i kontrast, Invertuj, Gama, Razdvoji i Spoji RGB | Rad s bojama. |
| Matematika, Opseg mape | Aritmetika s brojevima (sabiranje, množenje, stepen, glatki korak i još). |
| Izbočina, Mapa normala | Normala iz visine (Izbočina) ili iz slike mape normala (Mapa normala: izaberite smjer zelenog kanala). |

## Izlaz materijala

Njegove postavke govore kako tekstura leži na površinama:

- **Širina pločice** i **Visina pločice**: koliko metara jedna pločica teksture pokriva. Sve što graf pravi ponavlja se preko pločice bez šava.
- **Postavlja se**: **UV koordinate** prate površine (površine gurni/povuci: duž svake površine; mreže: njihovi UV, jedna UV jedinica = jedna pločica), **Kutija** projektuje iz najbliže od tri ose, **Triplanar** miješa tri projekcije na nagnutim površinama (**Oštrina miješanja**: veća znači tvrđe miješanje).
- **Jačina normale** skalira ulaz normale. **Razmjer pomaka** određuje koliko ulaz pomaka pomjera tjemena mreže.
- {{ui:Više ulaza}} prikazuje ostale OpenPBR ulaze: coat, fuzz, subsurface, thin film, transmission i njihove boje.

## U slikama visokog kvaliteta

Path tracer čita osnovnu boju, hrapavost, metalnost, neprozirnost, normalu i emisiju iz grafa kako se mijenjaju po površini. Svaki drugi ulaz koji povežete (npr. coat koji se mijenja) koristi se u prosjeku; panel kaže koji. Izrez iz teksture neprozirnosti pokazuje svoj oblik, a njegova sjena je ravnomjerno prozirna. Sjajna tekstura osvjetljava ono prema čemu je okrenuta, bez uzorkovanja kao svjetla.

**Pomak** pomjera tjemena samo mreža, pa dodajte modifikator podjele za detalj ([Modifikatori](topic:modifiers)). Površine gurni/povuci zadržavaju oblik i dobijaju izbočine iz normale.

:::tip
Na računaru s WebGPU-om graf se računa na grafičkoj kartici; bez njega, na procesoru. Rezultat je isti.
:::
