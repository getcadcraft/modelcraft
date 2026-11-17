---
title: Ustvarjanje materialov z vozlišči
summary: Sestavite material iz tekstur, slik in matematike v delovnem okolju Senčenje, med delom ga spremljajte v pogledu in z njim pobarvajte ploskve.
keywords: senčenje, pečenje, pečenje tekstur, ambientna okluzija, ao, ukrivljenost, pečenje normal, visoka gostota, nizka gostota, svetlobna karta, nalepka, nalepke, logotip, oznaka, slikanje teksture, material, materiali, materialx, mtlx, openpbr, standard surface, knjižnica materialov, librarycraft, nabor tekstur, pbr, uvoz tekstur, zip, cc0, povleci, vozlišče, vozlišča, urejevalnik vozlišč, senčilnik, tekstura, proceduralno, šum, šahovnica, voronoi, celice, valovi, opeke, ploščice, les, marmor, prelivanje, umazanija, obraba robov, barvni trak, mešanje, izboklina, normalna karta, hrapavost, kovinskost, neprozornost, izrez, emisija, sij, zamik, preslikava škatle, triplanar, uv, slika, openpbr
from: d7368b21
---

Material, ustvarjen v delovnem okolju **Senčenje**, pripada datoteki. Je majhen graf: **vozlišča**, ki ustvarjajo teksture, slike in števila, povezana v **Izhod materiala**, katerega vhodi so videz površine: osnovna barva, hrapavost, kovinskost, normala, neprozornost, emisija in preostali deli modela OpenPBR. Ploskve pobarvate z njim kot s katerim koli materialom iz knjižnice, vsaka sprememba pa se takoj pokaže v pogledu.

## Odprite ga

Izberite {{ui:Senčenje}} na seznamu delovnih okolij. 3D pogled zadrži vrh zaslona, **urejevalnik vozlišč** pa zavzame spodnji del. Podokno na desni našteje materiale datoteke.

- {{ui:Nov material}} ustvari sivega, z samo njegovim izhodom materiala.
- **Naredite urejljivo kopijo materiala iz knjižnice** spremeni opeko, les, ploščico in preostalo v graf, ki ga lahko spremenite: njegova tekstura pride prek vozlišča Tekstura iz knjižnice, njegove izbokline pa prek vozlišča Izboklina.
- {{ui:Slikaj z njim}} pobarva izbrane ploskve ali skupine ali izbere material za orodje Pobarvaj. Materiali orodja Pobarvaj navajajo tudi materiale datoteke pod **V tej datoteki**.
- {{ui:Podvoji}} in {{ui:Izbriši}} delujeta na materialu, ki ga urejate. Brisanja ni mogoče razveljaviti: ploskve, pobarvane z njim, do ponovnega barvanja kažejo privzeto barvo.

## Materiali iz knjižnice

Podokno **Knjižnica materialov (Library)** navaja materiale knjižnice, vsak s predogledom, ki ga izriše sledilnik poti CadCraft. Gre za nabore tekstur, izdane pod licenco CC0, in pripisane avtorjem.

- Kliknite enega, da ga prenesete v datoteko (njegove slike pridejo z njim) in, če so ploskve ali skupine izbrane, jih pobarvate.
- Povlecite enega na ploskev ali skupino v pogledu, da pobarvate samo to.
- Postane eden od materialov datoteke: spremenite njegova vozlišča kot katerega koli drugega. Njegova navedba se prikaže v podoknu in ostane v datoteki.

## Uvoz nabora tekstur

{{ui:Slike ali zip…}} ali {{ui:Mapa…}} pod **Uvoz nabora tekstur** ustvari material iz nabora zemljevidov tekstur. Zemljevide najde po besedah v imenih datotek: color, albedo, diffuse ali basecolor; roughness (ali gloss, pretvorjen v hrapavost); metalness ali metallic; normal (OpenGL ali DirectX, iz `gl` / `dx` v imenu); height ali displacement; ambient occlusion; opacity; emission. Pakirani zemljevidi (ARM, ORM) so izpuščeni. Ploščica se začne pri 1 × 1 m: njeno pravo velikost nastavite na Izhodu materiala. Višina gre v premik z merilom 0; za uporabo na mrežah merilo povečajte.

## MaterialX

MaterialX je odprt format, ki ga druga 3D in upodabljalna programa uporabljata za izmenjavo materialov.

- {{ui:Izvozi kot MaterialX…}} shrani material, ki ga urejate: njegove vrednosti in vsako teksturo kot sliko PNG ob datoteki `.mtlx` (v zipu). Izberite senčilnik, v katerem bo zapisan: **OpenPBR Surface** (MaterialX 1.39, isti model, ki ga uporablja ModelCraft) ali **Standard Surface** (MaterialX 1.38, ki ga danes bere več programov). Teksture so postavljene po koordinatah UV v metrih; škatlasta in triplanarna postavitev sta zapisani kot UV.
- {{ui:Uvozi MaterialX…}} (ali {{ui:Iz mape…}}) prebere datoteke `.mtlx` s senčilniki OpenPBR, Standard Surface, UsdPreviewSurface ali glTF PBR. Dajte mu tudi slike ali zip z vsem: sliko najde po poti, imenu ali imenu z drugo vrsto slike (datoteka `.exr` lahko pride kot `.jpg` ob njej). Teksture, normalne karte, aritmetika, mešanja in premiki pridejo kot vozlišča; vse drugo ohrani svojo vrednost, statusna vrstica pa pove, kaj je bilo izpuščeno.

## Nalepke

Nalepka je slika, položena na površino (logotip, znak, oznaka, madež), z lastnim materialom.

- Nastavite **Širina nove nalepke**, nato {{ui:Postavi nalepko…}} (ali {{ui:Nalepka}} na orodni vrstici), izberite sliko PNG, JPEG ali WebP in kliknite ploskev. Slika se projicira na površine tam, pri čemer ohrani razmerje; prosojni deli PNG ostanejo prosojni.
- Pripada skupini ali komponenti, v katero ste kliknili, in se premika z njo. Pokrije ploskve v svojem okvirju, ki kažejo v isto smer, in se ustavi ob robovih tistega, na čemer leži.
- Vsaka nalepka dobi svoj material, imenovan **Nalepka: <slika>**, na seznamu datoteke: uredite ga kot katerega koli drugega (hrapavost, izboklina, sij). {{ui:Material}} ob nalepki ga odpre.
- Ob vsaki nalepki: njena širina (višina sledi sliki), {{ui:Zasukaj}} (četrtinski obrat) in {{ui:Izbriši}}. Nalepke ostanejo z materiali datoteke, zunaj razveljavitve.
- Vidne so v senčenem pogledu, v hitrih upodobitvah in v visokokakovostnih slikah.

## Slikanje po teksturi

{{ui:Slikaj teksturo}} (ali {{ui:Pobarvaj (B)}} pod **Slikanje po teksturi**) spremeni kazalec v okrogel čopič. Povlecite po ploskvi, ki nosi enega od materialov te datoteke: čopič slika sliko za osnovno barvo.

- Na mreži slika vzdolž njenih UV (najprej jo razvijte v delovnem okolju UV); na drugih ploskvah slika čez ploskev, zato se slikanje ponavlja s ploščico materiala.
- Material, katerega osnovna barva je enobarvna, dobi ob prvem barvanju novo sliko 512 × 512 slikovnih pik te barve. Material, katerega osnovna barva prihaja iz drugih vozlišč, potrebuje vozlišče Slika, povezano z Osnovno barvo.
- Barvo čopiča, velikost (v slikovnih pikah slike), moč in trdoto nastavite v podoknu. {{ui:Razveljavi potez}} ali Ctrl+Z (med slikanjem) razveljavi potez, do zadnjih 20.
- Slikana slika se shrani v datoteko. Materiali iz knjižnice se ne dajo slikati: najprej naredite urejljivo kopijo.

## Pečenje tekstur

**Pečenje tekstur** zapiše, kar oblika in prizor dajeta površini, v slike vzdolž UV mreže.

- Izberite mrežo, ki ima UV (najprej jo razvijte v delovnem okolju UV), označite zemljevide in pritisnite {{ui:Peci}}:
  - **Ambientna okluzija**: kako odprta je vsaka točka. Vogali, gube in mesta pod drugimi stvarmi postanejo temnejša. Vse, kar je prikazano v modelu, jo senči do razdalje okluzije.
  - **Ukrivljenost**: svetla vzdolž zunanjih robov, temna v notranjih vogalih, srednje siva na ravnih in rahlo ukrivljenih delih, na širini roba, ki jo nastavite.
  - **Normale iz predmeta visoke podrobnosti**: izberite tudi podrobno kopijo. Njene podrobnosti se zapišejo kot normalna karta za preprostejši predmet (pečenje poteka na predmetu z manj trikotniki). Razdalja iskanja pove, kako daleč sta lahko ti dve površini narazen.
  - **Osvetlitev**: sonce na mestu in datumu modela (Slog) z njegovimi senčami ter nebo, kot svetlobna karta.
- Slike se pridružijo datoteki in se pojavijo v vozliščih Slika. Če ima material, ki ga urejate, vozlišče **Umazanija in obraba robov**, takoj prebere novo okluzijo in ukrivljenost.
- Več žarkov na teksel naredi gladšo okluzijo in osvetlitev, a traja dlje. Pečenje teče v ozadju na jedrih procesorja; {{ui:Ustavi pečenje}} ga ustavi.

## Sestavite graf

1. {{ui:Dodaj vozlišče…}} (ali {{key:Shift+A}} v urejevalniku vozlišč) doda vozlišče v sredino urejevalnika.
2. Povlecite od izhodne pike (na desni strani vozlišča) do vhodne pike (na levi strani vozlišča), da ju povežete. Druga povezava v isti vhod nadomesti prvo; povezan vhod odklopite tako, da ga povlečete stran.
3. Nepovezani vhodi pokažejo svojo vrednost: vtipkajte število ali izberite barvo. Nastavitve so na dnu vsakega vozlišča.

Povlecite vozlišče za naslov, da ga premaknete, povlecite prazen prostor za pomik in uporabite kolesce za povečavo. {{key:Delete}} odstrani izbrana vozlišča ali povezavo, {{key:Mod+Z}} razveljavi, {{key:Mod+D}} podvoji, {{key:F}} pokaže vsa vozlišča. Vsaka sprememba je en korak razveljavitve urejevalnika vozlišč. Razveljavitev modela ne spreminja materialov.

| Vozlišča | Kaj ustvarjajo |
|---|---|
| Koordinate teksture | Kje je točka na ploščici: ponovi jo, zamakni jo, zasuči za četrtino. |
| Vrednost, Barva | Število, barva. |
| Slika | Slika datoteke (ta je prišla z uvoženim modelom ali ste jo dodali z {{ui:Dodaj sliko…}}). Izberite **Barve** za fotografijo in **Podatki** za karto hrapavosti ali normalno karto. |
| Tekstura iz knjižnice | Tekstura, hrapavost in višina materiala iz knjižnice. |
| Šahovnica, Šum | Kvadrati; gladek fraktalni šum s svojo podrobnostjo, hrapavostjo in semenom. |
| Celice Voronoi, Valovi, Prelivanje | Celice (razdalja do najbližje točke, robovi med celicami, barva na celico); pasovi čez, gor ali diagonalno, kot sinus, žaga ali trikotnik, upognjeni s šumom; linearno, kvadratno, radialno in sferično prelivanje. |
| Opeke, Ploščice | Vrste opek z zamikom ali mreža ploščic: barve, malta ali fuga, reža in fazeta v metrih, višina za izbokline, naključno število za vsak kos. |
| Les, Marmor | Kolobarji vzdolž vlaken s finimi vlakni; žile, upognjene s turbulenco. |
| Umazanija in obraba robov | Obrablja konveksne robove in umazuje vdolbine iz slik ukrivljenosti in okluzije mreže ([Pečenje tekstur](topic:shading#bake-textures) jih naredi; ali nastavite njeni dve nastavitvi slike v UV postavitvi mreže: postavite material po koordinatah UV). Brez njih ne spremeni ničesar. |
| Mešanje barv, Barvni trak, Odtenek/nasičenost/vrednost, Svetlost in kontrast, Invertiranje, Gama, Razdeli in Združi RGB | Delo z barvami. |
| Matematika, Obseg preslikave | Aritmetika s števili (seštevanje, množenje, potenca, gladek korak in več). |
| Izboklina, Normalna karta | Normala iz višine (Izboklina) ali iz slike normalne karte (Normalna karta: izberite smer zelenega kanala). |

## Izhod materiala

Njegove nastavitve povedo, kako tekstura leži na površinah:

- **Širina ploščice** in **Višina ploščice**: koliko metrov pokrije ena ploščica teksture. Vse, kar graf ustvari, se ponavlja po ploščici brez šiva.
- **Postavitev**: **Koordinate UV** sledijo ploskvam (ploskve potisni/povleci: vzdolž vsake ploskve; mreže: njihove UV, ena enota UV = ena ploščica), **Škatla** projicira iz najbližje od treh osi, **Triplanar** pa zlije tri projekcije na nagnjenih površinah (**Ostrina zlivanja**: višje je trše zlivanje).
- **Moč normale** skalira vhod normale. **Merilo premika** določa, kako daleč vhod premika oglišča mreže.
- {{ui:Več vhodov}} pokaže preostale vhode OpenPBR: plašč, puh, podpovršinsko, tanko plast, prepustnost in njihove barve.

## V visokokakovostnih slikah

Sledilnik poti prebere osnovno barvo, hrapavost, kovinskost, neprozornost, normalo in emisijo iz grafa, kakor se spreminjajo po površini. Vsak drug vhod, ki ga povežete (na primer plašč, ki se spreminja), se uporabi v svoji povprečni vrednosti; podokno pove, kateri. Izrez iz teksture neprozornosti pokaže svojo obliko, njegova senca pa je enakomerno prosojna. Svetleča tekstura osvetli, kar je obrnjeno proti njej, brez vzorčenja kot svetilka.

**Premik** premakne oglišča samo mrež, zato za podrobnosti dodajte modifikator Subdivision ([Modifikatorji](topic:modifiers)). Ploskve potisni/povleci ohranijo svojo obliko in dobijo izbokline iz normale.

:::tip
Na računalniku z WebGPU graf izračuna grafična kartica; brez njega izračuna procesor. Rezultat je isti.
:::
