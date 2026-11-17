---
title: Izrada materijala pomoću čvorova
summary: Izgradite materijal od tekstura, slika i izračuna u radnom prostoru Sjenčanje, pratite ga u prikazu dok radite i bojite plohe njime.
keywords: sjenčanje, pečenje, pečenje tekstura, ambijentalna okluzija, ao, zakrivljenost, pečenje normala, visoka razlučivost, niska razlučivost, svjetlosna mapa, naljepnica, dekal, nalijepnica, logo, oznaka, slikanje teksture, boja teksture, kist, materijal, materijali, materialx, mtlx, openpbr, standard surface, knjižnica materijala, librarycraft, skup tekstura, pbr, uvoz tekstura, zip, cc0, povuci, čvor, čvorovi, uređivač čvorova, shader, tekstura, proceduralno, šum, šahovnica, voronoi, ćelije, valovi, cigle, pločice, drvo, mramor, prijelaz boja, prljavština, istrošenost bridova, rampa boja, miješanje, reljef, normalna mapa, hrapavost, metalnost, neprozirnost, izrez, emisija, sjaj, pomak, box mapping, triplanarno, uv, slika, tekstura slike, openpbr
from: d7368b21
---

Materijal izrađen u radnom prostoru **Sjenčanje** pripada datoteci. To je mali graf: **čvorovi** koji izrađuju teksture, slike i brojeve, povezani u **Izlaz materijala**, čiji su ulazi izgled površine — osnovna boja, hrapavost, metalnost, normala, neprozirnost, emisija i ostatak OpenPBR modela. Plohe bojate njime kao i bilo koji materijal iz knjižnice, a svaka promjena odmah se vidi u prikazu.

## Otvaranje

Odaberite {{ui:Sjenčanje}} na popisu radnih prostora. 3D prikaz zadržava gornji dio zaslona, a **uređivač čvorova** zauzima donji dio. Ploča s desne strane popisuje materijale same datoteke.

- {{ui:Novi materijal}} stvara sivi materijal samo s njegovim izlazom materijala.
- **Napravi uređivu kopiju materijala iz knjižnice** pretvara ciglu, drvo, pločice i ostalo u graf koji možete mijenjati: njegova tekstura dolazi preko čvora Tekstura knjižnice, a njegov reljef preko čvora Reljef.
- {{ui:Oboji njime}} boji odabrane plohe ili grupe ili odabire materijal za alat Oboji. Materijali alata Oboji također navode materijale same datoteke pod **U ovoj datoteci**.
- {{ui:Dupliciraj}} i {{ui:Izbriši}} rade na materijalu koji uređujete. Brisanje se ne može poništiti: plohe obojene njime prikazuju zadanu boju dok ih ponovno ne obojite.

## Materijali iz knjižnice

Ploča **Knjižnica materijala (Library)** navodi materijale knjižnice, svaki s pregledom izrađenim path tracerom programa CadCraft. Riječ je o skupovima tekstura objavljenima pod CC0, a autori su navedeni uz njih.

- Kliknite jedan da ga uvedete u datoteku (sa svojim slikama) i, uz odabrane plohe ili grupe, obojite ih.
- Povucite jedan na plohu ili grupu u prikazu da obojite samo to.
- Postaje jedan od materijala datoteke: mijenjajte mu čvorove kao i bilo koje druge. Njegovo navođenje autora prikazuje se na ploči i ostaje u datoteci.

## Uvoz skupa tekstura

{{ui:Slike ili zip…}} ili {{ui:Mapa…}} pod **Uvoz skupa tekstura** izrađuje materijal iz skupa karata. Karte se prepoznaju prema riječima u nazivima datoteka: color, albedo, diffuse ili basecolor; roughness (ili gloss, pretvoren u hrapavost); metalness ili metallic; normal (OpenGL ili DirectX, prema `gl` / `dx` u nazivu); height ili displacement; ambient occlusion; opacity; emission. Spojene karte (ARM, ORM) se izostavljaju. Pločica počinje od 1 × 1 m: stvarnu veličinu postavite na Izlazu materijala. Visina ide u pomak s mjerilom na 0 — povećajte mjerilo da bi se koristila na mrežama.

## MaterialX

MaterialX je otvoreni format koji drugi 3D i renderirajući programi koriste za prijenos materijala.

- {{ui:Izvezi kao MaterialX…}} sprema materijal koji uređujete: njegove vrijednosti i svaku teksturu kao PNG sliku uz datoteku `.mtlx` (u zipu). Odaberite sjenčar u kojem se zapisuje: **OpenPBR Surface** (MaterialX 1.39, isti model koji koristi ModelCraft) ili **Standard Surface** (MaterialX 1.38, koji danas više programa čita). Teksture se postavljaju UV koordinatama u metrima; postavljanje kutijom i triplanarno zapisuju se kao UV.
- {{ui:Uvezi MaterialX…}} (ili {{ui:Iz mape…}}) čita datoteke `.mtlx` s OpenPBR, Standard Surface, UsdPreviewSurface ili glTF PBR sjenčarima. Dodajte i slike ili zip sa svime: slika se pronalazi po svojoj putanji, nazivu ili nazivu s drugom vrstom slike (datoteka navodi `.exr`, a može doći kao `.jpg` uz nju). Teksture, normalne mape, aritmetika, miješanja i pomak dolaze kao čvorovi; sve ostalo zadržava svoju vrijednost, a statusna traka kazuje što je izostavljeno.

## Naljepnice

Naljepnica je slika položena na površinu — logotip, znak, oznaka, mrlja — s vlastitim materijalom.

- Postavite **Širinu nove naljepnice**, zatim {{ui:Postavi naljepnicu…}} (ili {{ui:Naljepnica}} na alatnoj traci), odaberite PNG, JPEG ili WebP sliku i kliknite plohu. Slika se projicira na površine tamo, zadržavajući svoje proporcije; prozirni dijelovi PNG-a ostaju prozirni.
- Pripada grupi ili komponenti u koju ste kliknuli i miče se s njom. Pokriva plohe unutar svog okvira koje gledaju na isti način i staje na rubovima onoga na čemu leži.
- Svaka naljepnica dobiva vlastiti materijal, nazvan **Naljepnica: <slika>**, na popisu datoteke: uređujte ga kao i bilo koji drugi (hrapavost, reljef, sjaj). {{ui:Materijal}} uz naljepnicu ga otvara.
- Uz svaku naljepnicu: njezina širina (visina slijedi sliku), {{ui:Zakreni}} (četvrtina okreta) i {{ui:Izbriši}}. Naljepnice se čuvaju uz materijale datoteke, izvan poništavanja.
- Prikazuju se u sjenčanom prikazu, u brzim renderima i u slikama visoke kvalitete.

## Slikanje po teksturi

{{ui:Oslikaj teksturu}} (ili {{ui:Oboji}} pod **Slikanje po teksturi**) pretvara pokazivač u okrugli kist. Povucite po plohi koja nosi jedan od materijala ove datoteke: kist slika sliku iza njezine osnovne boje.

- Na mreži slika duž UV-a mreže (prvo je razmotajte u radnom prostoru UV); na ostalim plohama slika preko plohe, pa se slikanje ponavlja s pločicom materijala.
- Materijal čija je osnovna boja obična boja dobiva novu sliku 512 × 512 te boje pri prvom slikanju. Materijal čija osnovna boja dolazi od drugih čvorova treba čvor Slika povezan s Osnovnom bojom.
- Na ploči postavite boju kista, veličinu (u pikselima slike), jačinu i tvrdoću. {{ui:Poništi potez}} ili Ctrl+Z (dok slikate) vraća potez, do zadnjih 20.
- Oslikana slika sprema se u datoteku. Materijale iz knjižnice nije moguće slikati: najprije napravite uređivu kopiju.

## Pečenje tekstura

**Pečenje tekstura** zapisuje ono što oblik i scena daju površini u slike duž UV-a mreže.

- Odaberite mrežu koja ima UV (razmotajte je u radnom prostoru UV), označite karte i pritisnite {{ui:Ispeci}}:
  - **Ambijentalna okluzija** — koliko je svaka točka otvorena: kutovi, nabori i mjesta ispod drugih stvari tamnija su. Sve prikazano u modelu zasjenjuje je do udaljenosti okluzije.
  - **Zakrivljenost** — svijetla uz vanjske bridove, tamna u unutarnjim kutovima, srednje siva na ravnim i blago zakrivljenim dijelovima, prema širini brida koju postavite.
  - **Normale s objekta visoke razine detalja** — odaberite i detaljniju kopiju: njezini detalji površine zapisuju se kao normalna mapa za jednostavniji (objekt s manje trokuta na koji se peče). Udaljenost pretrage je koliko se dvije površine smiju razmaknuti.
  - **Osvjetljenje** — sunce mjesta i datuma modela (Stil) sa svojim sjenama, uz nebo, kao svjetlosna mapa.
- Slike se pridružuju datoteci i pojavljuju se u čvorovima Slika. Ako materijal koji uređujete ima čvor **Prljavština i istrošenost bridova**, odmah čita novu okluziju i zakrivljenost.
- Više zraka po teselu čini okluziju i osvjetljenje glađima, ali traje dulje. Pečenje se odvija na jezgrama procesora računala u pozadini; {{ui:Zaustavi pečenje}} ga zaustavlja.

## Izrada grafa

1. {{ui:Dodaj čvor…}} (ili {{key:Shift+A}} u uređivaču čvorova) dodaje čvor u sredini uređivača.
2. Povucite od izlazne točke (s desne strane čvora) do ulazne točke (s lijeve strane čvora) da ih povežete. Druga veza u ulaz zamjenjuje prvu; povucite povezani ulaz dalje da ga odvojite.
3. Ulazi koji nisu povezani prikazuju svoju vrijednost: upišite broj ili odaberite boju. Postavke se nalaze na dnu svakog čvora.

Povucite čvor za njegov naslov da ga pomaknete, povucite prazan prostor da pomaknete pogled, a kotačićem zumirajte. {{key:Delete}} uklanja odabrane čvorove ili vezu, {{key:Mod+Z}} poništava, {{key:Mod+D}} duplicira, {{key:F}} prikazuje sve čvorove. Svaka promjena je jedan korak poništavanja uređivača čvorova. Vlastito poništavanje modela ne mijenja materijale.

| Čvorovi | Što izrađuju |
|---|---|
| Koordinate teksture | Gdje je točka na pločici: ponavlja je, pomiče je, zakreće za četvrtinu. |
| Vrijednost, Boja | Broj, boju. |
| Slika | Slika datoteke (ona koja je došla s uvezenim modelom ili koju ste dodali s {{ui:Dodaj sliku…}}). Odaberite **Boje** za fotografiju i **Podaci** za mapu hrapavosti ili normalnu mapu. |
| Tekstura knjižnice | Teksturu, hrapavost i visinu materijala iz knjižnice. |
| Šahovnica, Šum | Kvadrati; glatki fraktalni šum s detaljem, hrapavošću i sjemenkom. |
| Voronoi ćelije, Valovi, Prijelaz | Ćelije (udaljenost do najbliže točke, rubovi među ćelijama, boja po ćeliji); pruge poprijeko, gore ili dijagonalno, kao sinus, pila ili trokut, savijene šumom; linearni, kvadratni, radijalni i sferni prijelazi. |
| Cigle, Pločice | Redovi cigli s pomakom, ili mreža pločica: boje, mort ili fuga, razmak i zakošenje u metrima, visina za izbočine, slučajan broj po komadu. |
| Drvo, Mramor | Godovi duž vlakana s finim vlaknima; žile savijene turbulencijom. |
| Prljavština i istrošenost bridova | Troši konveksne bridove i zaprlja udubljenja prema slikama zakrivljenosti i okluzije mreže ([Pečenje tekstura](topic:shading#bake-textures) ih izrađuje; ili postavite njegove dvije postavke slike, u rasporedu UV mreže: postavite materijal UV koordinatama). Bez njih ne mijenja ništa. |
| Miješanje boja, Rampa boja, Nijansa/zasićenost/vrijednost, Svjetlina i kontrast, Invertiraj, Gama, Razdvoji i spoji RGB | Rad s bojama. |
| Matematika, Raspon mapiranja | Aritmetika s brojevima (zbrajanje, množenje, potencija, glatki korak i ostalo). |
| Reljef, Normalna mapa | Normala iz visine (Reljef) ili iz slike normalne mape (Normalna mapa: odaberite smjer zelenog kanala). |

## Izlaz materijala

Njegove postavke određuju kako tekstura leži na površinama:

- **Širina pločice** i **Visina pločice**: koliko metara pokriva jedna pločica teksture. Sve što graf izradi ponavlja se po pločici bez šava.
- **Postavljeno prema**: **UV koordinate** prate plohe (potisnute/povučene plohe: duž svake plohe; mreže: njihov UV, jedna UV jedinica = jedna pločica), **Kutija** projicira s najbliže od tri osi, **Triplanar** miješa tri projekcije na nagnutim površinama (**Oštrina miješanja**: veća je tvrđe miješanje).
- **Jačina normale** skalira ulaz normale. **Mjerilo pomaka** određuje koliko ulaz pomaka pomiče vrhove mreže.
- {{ui:Više ulaza}} prikazuje ostale OpenPBR ulaze: premaz, dlakavost, podpovršinsko raspršenje, tanki film, prijenos i njihove boje.

## U slikama visoke kvalitete

Path tracer čita osnovnu boju, hrapavost, metalnost, neprozirnost, normalu i emisiju iz grafa dok se mijenjaju po površini. Svaki drugi ulaz koji povežete (primjerice premaz koji se mijenja) koristi se u prosjeku; ploča kazuje koji. Izrez iz teksture neprozirnosti pokazuje svoj oblik, a njegova sjena jednoliko je prozirna. Svijetleća tekstura osvjetljava ono prema čemu je okrenuta, bez da se uzorkuje kao svjetiljka.

**Pomak** pomiče vrhove samo mreža, pa dodajte modifikator podjele za detalje ([Modifikatori](topic:modifiers)). Potisnute/povučene plohe zadržavaju svoj oblik i dobivaju izbočine iz normale.

:::tip
Na računalu s WebGPU-om graf se izračunava na grafičkoj kartici; bez njega na procesoru. Rezultat je isti.
:::
