---
title: Još nije izrađeno
summary: Šta ova verzija ModelCraft-a još ne radi i šta danas raditi umjesto toga.
keywords: nedostaje, još ne, ograničenja, plan razvoja, materijali, teksture, tekst, slojevi, obrezivanje, podjela, oblak, desktop
from: 179fa5e4
---

ModelCraft je rana verzija. Ova stranica navodi šta još ne radi, da ne tražiš to uzalud, i najbliži način da danas završiš posao.

## Alati za crtanje

| Još nije | Umjesto toga, danas |
|---|---|
| Slobodno crtanje | Klikaj tačke alatom {{ui:Curve}} |
| Promjena broja segmenata luka ili kruga nakon crtanja | Obriši ga i nacrtaj ponovo nakon upisa `24s` |
| Izbor fonta za [3D tekst](topic:text3d) ili izmjena njegovih riječi nakon postavljanja | Obriši ga i ponovo dodaj tekst |
| Promjena ugla upisom u kotu ugla ili veličine valjka iz kote njegovog kruga | Rotiraj ivice alatom {{ui:Rotate}}; skaliraj valjak alatom {{ui:Scale}} |
| Kote u izvezenim datotekama modela | Kote se prikazuju na slikama, štampi i PDF-ovima pogleda; datoteke modela nose samo geometriju |
| Obrezivanje, podjela i vanjska ljuska | [Spoji, oduzmi i presijeci](topic:solids) zatvorene grupe ili [presijeci plohe](topic:intersect) i obriši ono što ti ne treba |
| Odabir ose rotacije strelicama na tastaturi | Klikni centar {{ui:Rotate}} na plohi okrenutoj u smjeru u kojem treba biti osa |
| Zaključavanje na više od jednog vođenja istovremeno | Zaključaj jedan smjer strelicom, pa se hvataj za tačku |
| Promjena veličine duž kose ili s kraja kote koji nije na uglu | Postavi kotu na dva ugla, duž ivice ili duž crvene, zelene ili plave |

## Animacija

| Još nije | Umjesto toga, danas |
|---|---|
| Animiranje ploha, ivica, doba dana sunca, stila ili onoga što je skriveno | Napravi pokretni dio grupom ili komponentom; za drugo doba dana renderuj poseban video |
| Kamera koja prati nacrtanu putanju ili gleda pokretan objekt | Postavi više ključeva kamere duž puta ([Animiraj](topic:animation)) |
| Zvuk u videima i visokokvalitetni (path-traced) videi bez WebGPU | Dodaj zvuk u programu za obradu videa; bez WebGPU renderuj video brzim rendererom ([Renderuj video](topic:animation#render-the-video)) |
| Animirane svjetiljke (svjetlina, širenje, boja) u renderovanom videu, ugao objektiva animiran bez ključeva kamere u videu, animiranje materijala ili postavki renderovanja | Svjetiljke se animiraju u pogledu; za video ključ i kameru zbog zumiranja; renderuj zasebne videe za različite postavke svjetiljki ([Animiraj bilo koje svojstvo](topic:animate)) |
| Prebacivanje težina ili kostiju s jedne strane na drugu, vidljive omotače kostiju, prikaz težina zasjenjen tačku po tačku (prikazuju se po plohi), gledanje pozirane mreže dok bojiš težine | Boji obje strane ili napravi jednu polovinu i koristi modifikator Ogledalo prije dodavanja armature; prebacuj se između Boji težine i Poza za provjeru |
| Kosti učitane iz glTF, FBX ili USD datoteka kao armatura, i armature zapisane u te datoteke | Modeli sa skinom ulaze u mirovanju s težinama iz datoteke; dodaj kosti redoslijedom zglobova u datoteci, pa {{ui:Use the file's weights}} ([Animiraj](topic:animate)) |
| Pomjeranje IK cilja ili pola prevlačenjem u pogledu, izbor prostora ograničenja (lokalnog ili svjetskog), rastezanje IK lanaca, IK duž krive | Upiši tačku cilja ili cilja na objekt i pomjeri taj objekt; drži lance na njihovim dužinama |
| Tkanina, fluidi, meka tijela, zglobovi i šarke između krutih tijela, sudar s tačnim oblikom objekta (oko njih samo kvadri i kugle), živa simulacija dok puštaš, početna brzina ili rotacija (tijela počinju u mirovanju) | Zapeci kruta tijela i pusti ključeve; napravi šarku ključevima; razdvoji neobičan oblik na kvadre (grupe) |
| Izvoz animacije u glTF ili druge datoteke modela | Renderuj video; datoteka `.modelcraft` i [USD datoteka](topic:usd) koju je ModelCraft sačuvao ostaju za ModelCraft |
| Pisanje komentara ili naslova na problemu u VR-u, glasovne bilješke, ručno pomjeranje ravni presjeka u VR-u | Postavi problem u VR-u, pa dodaj njegov tekst u BCF program; postavi ravan presjeka u pogledu prije ulaska: vidi [Pregled modela u VR naočarima](topic:vr-review) |
| Ljudi za stolom u VR-u (prikazuju se samo ljudi u VR-u), snimanje VR šetnje | Zamoli ih da se pridruže u VR-u ili napravi [animaciju](topic:animation) šetnje |

## Mreže

| Još nije | Umjesto toga, danas |
|---|---|
| Vajanje po nivoima (multirezolucija) i Detalj koji uklanja trouglove koji su postali sitni | [Vajaj](topic:sculpt) podijeljenu mrežu; {{ui:Remesh}} za ponovno ujednačavanje |
| Ponovna mreža u četverouglove ploha koje prate oblik | {{ui:Remesh}} (ujednačeni trouglovi), pa je ponovo izgradi [Retopologijom](topic:mesh-edit#retopology) |
| Težine nacrtane na vrhovima za modifikatore (Pomjeri, Glađenje i Skupljanje omotača rade na cijeloj mreži) | Primijeni modifikator, pa vajaj ili uredi dijelove koji to trebaju |
| Kopiranje i lijepljenje vrhova, ivica ili ploha, rez nožem koji se završava unutar plohe, žičane ivice bez plohe | Dupliciraj mrežu u Modelu; reži nožem od ivice do ivice; [Ekstrudiraj](topic:mesh-edit#change-the-shape) otvorene ivice u plohe |

## Organizacija i pregled

| Još nije | Umjesto toga, danas |
|---|---|
| Slojevi DWG i DXF situacionih planova kao oznake | Situacioni plan dolazi kao jedna grupa: razdvoji je i grupiši dijelove koje želiš označiti |
| Više presjeka istovremeno, kutija presjeka ili obris presjeka izvezen kao crtež | Jedna [ravan presjeka](topic:sections) reže u jednom trenutku; izvezi pogled kao sliku |
| Prikaz mekih ivica isprekidano ili omekšavanje dok vučeš klizač | [Omekšaj po uglu](topic:soften) u Podacima o entitetu, pa poništi da probaš drugi ugao |
| Online biblioteka modela za pretragu ili komponente s opcijama za izbor (boja, stil) | [Početna biblioteka](topic:starter); uvezi modele Collada, OBJ ili glTF; [rastegni](topic:stretch) kopiju na veličinu |
| Postavljanje biljaka iz biblioteke biljaka | [Rasuti](topic:live-view#scatter-plants-rocks-and-people) biljke u živom pogledu ili postavi drvo iz početne biblioteke |
| Nezavisne kopije grupe | Napravi je komponentom, pa {{ui:Make unique}} (vidi [Rješavanje problema](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderovanje

| Još nije | Umjesto toga, danas |
|---|---|
| Renderovanje u pogledu (radni prostor {{ui:Render}}), red za renderovanje i opcije kamere, slike neba, magle i miješanja svjetla bez WebGPU | {{ui:Render a picture…}} u {{ui:High quality}} koristi WebGL path tracer, bez tih opcija ([Renderuj sliku](topic:render#high-quality)) |
| Crtanje slike Render drugim programom bez dodatka za render engine (CadCraft nikada ne pokreće program pod GNU GPL licencom); panoramske ili stereo kamere i slika neba kroz drugi program; dodatak za Unreal Engine (datoteke se zapisuju, ali dodatak koji ih otvara nije objavljen) | Naši sopstveni motori Fast i Path tracer; motor dodatka ([nacrtaj sliku drugim programom](topic:render-other-program)); USD, glTF ili Unreal folder iz liste Engine koji možeš odnijeti u bilo koji program |
| Raspršene biljke i kamenje u {{ui:Render a picture…}} | Prikazuju se u [živom pogledu](topic:live-view), njegovim panoramama, pregledniku i videu |

## Materijali i boje

| Još nije | Umjesto toga, danas |
|---|---|
| Ulazi osim osnovne boje, hrapavosti, metalnosti, neprozirnosti, normale i emisije koji se mijenjaju preko plohe u slikama visokog kvaliteta (koriste svoj prosjek) | [Pravi materijale čvorovima](topic:shading): svejedno ih poveži, pogled ih prikazuje kako se mijenjaju |
| Pomak na plohama guranja/povlačenja | Pretvori objekt u mrežu za pomak |
| Dijeljenje sopstvenih materijala u Biblioteku iz aplikacije, i spakovane (ARM/ORM) ili EXR mape u uvezenom skupu tekstura | Čuvaj ih u datoteci; uvezi zasebne mape kao PNG ili JPEG |
| Materijali datoteke u Live TeamWork sesijama (ostaju na računaru koji ih je napravio) | Sačuvaj datoteku i podijeli je |
| Oblaganje koje se savija oko zakrivljenih površi, oblaganje u poništavanju, ili bojenje tekstura više ploha istovremeno preko šava | Postavi manja oblaganja na svaki dio; boji svaku stranu šava zasebno |
| Pečenje na plohe guranja/povlačenja, pečenje više objekata u jednu sliku, kavez koji oblikuješ rukom, ili pečeno osvjetljenje iz svjetiljki | Pretvori u mrežu i razvij je; peci svaki objekt zasebno; povećaj udaljenost pretrage; renderuj sliku za svjetlo svjetiljki |
| Bojenje hrapavosti, metalnosti ili visine, bojenje slikama (pečatima) i bojenje tekstura većih od 512 × 512 | Boji osnovnu boju ovdje; napravi ostale mape u uređivaču slika i uvezi ih kao skup tekstura |
| Teksture u izvozima Collada, STL, PLY, 3MF, IFC, DWG i DXF, i grafovi čvorova sopstvenih materijala datoteke u izvezenim modelima | Ti formati dobijaju boju svakog materijala; glTF i OBJ nose uvezene teksture; izvezi materijal sam kao [MaterialX](topic:shading#materialx); [USD](topic:usd) čuva cijeli model za ModelCraft |
| Teksture u Collada datotekama | Broje se i izostavljaju pri uvozu; teksture u `.skp` i `.glb` datotekama se uvoze |

## Datoteke

| Još nije | Umjesto toga, danas |
|---|---|
| Čuvanje SketchUp datoteka, te teksta i kota iz njih | [Uvoz](topic:import-sketchup-files) čuva plohe, boje i teksture; izvezi Collada (`.dae`) da se vratiš u SketchUp |
| Kote i vodilice u DWG i DXF izvozima | Dodaj ih u CAD programu nakon izvoza |
| Tačke, tabele i višestruke oznake iz DWG i DXF | Broje se i izostavljaju; tekst dolazi kao jednolinijsko pismo, a ne font iz crteža |
| Površi, mreže, tabele i višestruke oznake iz DWG i DXF; plohe 3D tijela na slobodnim, lofted ili drugim slobodnim površima | I one se broje i izostavljaju (sama 3D tijela se uvoze). Izvezi te dijelove iz CAD programa kao OBJ ili Collada i uvezi to |
| Tipovi, svojstva ili materijali IFC-a | IFC izvoz ima [etaže](topic:formats#ifc-ifc) i generičke elemente; dodaj ostalo u BIM programu |
| Slanje modela direktno u BimCraft | Izvezi {{ui:IFC for BimCraft (.ifc)}} i otvori ga u BimCraft-u |
| Slobodne ivice u glTF i STL | Za linijski rad koristi OBJ ili Collada |
| Materijali glTF i FBX-a osim osnovne boje (metal, hrapavost, normalne mape, staklo, premaz, sjaj…) | Čitaju se i navode se; ModelCraft zadržava osnovnu boju ili teksturu. Ponovo izgradi izgled u [radnom prostoru Shading](topic:shading) |
| Kosti, animacije i morph ciljevi glTF-a | Modeli sa skinom ulaze stojeći onako kako miruju; animiraj u [vremenskoj liniji](topic:animation) |
| Boje i imena dijelova sklopa iz STEP datoteka | Dijelovi dolaze kao mreže u pravoj veličini; [oboji](topic:paint) ih i daj im imena nakon uvoza |
| Objekti SubD, tekst, kote i svjetla iz `.3dm` datoteka | Vidi [šta je izostavljeno](topic:import-3dm-files#what-is-left-out-and-said); pretvori SubD u mreže u programu u kojem je datoteka napravljena |
| KTX2 teksture i varijante materijala u glTF-u | Izvezi s PNG ili JPEG teksturama; koristi se podrazumijevana varijanta |
| Pisanje glTF instanciranja (EXT_mesh_gpu_instancing) | Komponente se zapisuju jednom i postavljaju mnogo puta, što svaki pregledač čita |
| Alembic animacija (svaki uzorak keša), Alembic tačke i krive, pisanje Alembica | Prvi uzorak se uvozi; animiraj u [vremenskoj liniji](topic:animation); piši glTF, USD ili OBJ |
| Mape izbočina i normala u OBJ materijalima | Uvozi se samo slika boje (`map_Kd`) |
| FBX kosti i animacija, FBX izvoz, FBX 6 datoteke | Modeli sa skinom ulaze u mirovanju; izvezi glTF; stare datoteke sačuvaj kao FBX 2011 ili noviji |
| Collada skinovi, morfovi, kamere, svjetla, transformacije look-at i skew, vanjske reference | Izostavljaju se pri uvozu i broje se u poruci |
| Rezervne kopije | {{ui:Save as}} ({{key:Mod+Shift+S}}) čuva još jednu kopiju. Nakon pada, ModelCraft ti nudi nesačuvani rad nazad („Vratiti tvoj rad?”) |
| Čuvanje u oblaku i sinhronizacija između računara | Još nije dostupno. Čuvaj datoteke na računar i kopiraj ih tamo gdje trebaju |

## 3D štampanje

| Još nije | Umjesto toga, danas |
|---|---|
| Prave podrške slajsera (sučelja, podloga, tačan uzorak podrške) | [Pregled podrške](topic:print-tools#supports-preview) pokazuje gdje i otprilike koliko; pregled tvog slajsera pokazuje prave |
| Razmrsivanje dijela koji prolazi kroz sebe ili ivica gdje se sastaju tri ili više ploha | [Popravka](topic:print-tools#repair) ih navodi s mjestom gdje su; koristi [Presijeci plohe](topic:intersect) i obriši ono što je unutra |
| Uzorci ispune i rešetka unutar šupljine | [Šuplje](topic:print-tools#hollow) ga ostavlja praznog; tvoj slajser dodaje ispunu čvrstom dijelu |
| Detalji premali za tvoju mlaznicu (osim zidova) | [Debljina zida](topic:print-tools#wall-thickness) pronalazi tanke zidove; pregled slojeva tvog slajsera pokazuje ostalo |

## Performanse

Poništavanje čuva kopiju modela za svaki korak (a [mreža](topic:meshes) čuva samo ono što je promijenjeno), pa vrlo veliki uvozi geometrije guranja/povlačenja čine svaku izmjenu sporijom. Drži uvoze vitkim, a sačuvaj i ponovo otvori da očistiš istoriju.

## Aplikacije i platforme

- **Desktop:** ModelCraft radi u pregledaču na Mac-u, Windows-u i Linux-u, te u CadCraft Studio, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji. Na Androidu se CadCraft Studio instalira iz svoje APK datoteke na getcadcraft.com/download. Još ne postoji verzija za iPad ili iPhone.
- **Dodir:** vidi [Orbita, pomjeranje pogleda i zumiranje](topic:orbit-pan-zoom) za gestove prstima. Pritisak pera postavlja četkicu u [Vajanju](topic:sculpt); drugdje se pritisak i nagib pera ne koriste.
- **Listovi:** ModelCraft [štampa jedan pogled po stranici](topic:export-model#print-the-view-or-save-it-as-a-pdf); nema rasporeda listova s više pogleda ili zaglavlja crteža. Izvezi u DWG/DXF prijateljski za CadCraft da bi crteži bili u razmjeri.
