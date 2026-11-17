---
title: Još nije napravljeno
summary: Šta ova verzija ModelCraft-a još ne radi i šta da radite umesto toga danas.
keywords: nedostaje, još nije, ograničenja, plan razvoja, materijali, teksture, tekst, slojevi, obrezivanje, podela, oblak, radna površina
from: 179fa5e4
---

ModelCraft je rana verzija. Ova stranica navodi šta još ne radi, da ne tražite to, i najbliži način da danas završite posao.

## Alati za crtanje

| Još nije | Umesto toga, danas |
|---|---|
| Slobodno crtanje | Kliknite tačke alatom {{ui:Kriva}} |
| Promena broja segmenata luka ili kruga posle crtanja | Obrišite ga i ponovo nacrtajte posle upisa `24s` |
| Izbor fonta za [3D tekst](topic:text3d) ili izmena njegovih reči posle postavljanja | Obrišite ga i ponovo dodajte tekst |
| Promena ugla unosom u kotu ugla, ili veličine valjka iz kote njegovog kruga | Rotirajte ivice alatom {{ui:Rotiraj}}; skalirajte valjak alatom {{ui:Skaliraj}} |
| Kote u izvezenim datotekama modela | Kote se prikazuju na slikama, štampi i PDF-ovima prikaza; datoteke modela nose samo geometriju |
| Obrezivanje, Podela i Spoljna ljuska | Zatvorene grupe [Spoj, Oduzmi i Presek](topic:solids) ili [presek površi](topic:intersect) i obrišite ono što ne treba |
| Izbor ose rotacije strelicama | Kliknite centar {{ui:Rotiraj}} na površ koja gleda u smeru u kome treba da pokazuje osa |
| Zaključavanja na više od jednog pravca odjednom | Zaključajte jedan pravac strelicom, pa se hvatajte za tačku |
| Promena veličine duž kose linije ili s kraja kote koji nije na uglu | Postavite kotu na dva ugla, duž ivice ili duž crvene, zelene ili plave |

## Animacija

| Još nije | Umesto toga, danas |
|---|---|
| Animiranje površi, ivica, dnevnog doba sunca, stila ili onoga što je sakriveno | Napravite pokretni deo grupom ili komponentom; za drugo doba dana renderujte poseban video |
| Kamera koja prati nacrtanu putanju ili gleda u pokretni objekat | Postavite više ključeva kamere duž puta ([Animiraj](topic:animation)) |
| Zvuk u videima i kvalitetni (path-traced) videi bez WebGPU-a | Dodajte zvuk u programu za obradu videa; bez WebGPU-a renderujte video brzim renderom ([Renderuj video](topic:animation#render-the-video)) |
| Animirane lampe (svetlina, rasprostranjenost, boja) u renderovanom videu, ugao objektiva animiran bez ključeva kamere u videu, animiranje materijala ili podešavanja renderovanja | Lampe se animiraju u prikazu; za video, animirajte i kameru za zumiranje; renderujte posebne videe za različita podešavanja lampi ([Animiraj bilo koje svojstvo](topic:animate)) |
| Preslikavanje težina ili kostiju sa jedne strane na drugu, vidljivi omotači kostiju, prikaz težina senčenih tačku po tačku (prikazuju se po površi), videti pozirani mrežu dok bojite težine | Obojite obe strane ili napravite jednu polovinu i koristite modifikator Ogledalo pre dodavanja armature; prebacujte se između Boji težine i Poza da proverite |
| Kosti pročitane iz glTF, FBX ili USD datoteka kao armatura, i armature upisane u te datoteke | Modeli sa kostima ulaze u mirovanju s težinama iz datoteke; dodajte kosti po redosledu zglobova u datoteci, pa {{ui:Koristi težine iz datoteke}} ([Animiraj](topic:animate)) |
| Pomeranje IK cilja ili pola prevlačenjem u prikazu, izbor prostora ograničenja (lokalni ili svetski), istezanje IK lanaca, IK duž krive | Ukucajte tačku cilja, ili ciljajte objekat i pomerajte njega; zadržite lance na njihovim dužinama |
| Tkanina, fluidi, meka tela, zglobovi i šarke između krutih tela, sudar sa tačnim oblikom objekta (oko njih su samo kutije i kugle), simulacija uživo dok puštate, početna brzina ili obrtanje (tela počinju u mirovanju) | Zapecite kruta tela i pustite ključeve; napravite šarku od ključeva; podelite neobičan oblik na kutije (grupe) |
| Izvoz animacije u glTF ili druge datoteke modela | Renderujte video; datoteka `.modelcraft` i [USD datoteka](topic:usd) koju ModelCraft sačuva ostaju za ModelCraft |
| Unos komentara ili naslova o problemu u VR-u, glasovne beleške, pomeranje ravni preseka rukom u VR-u | Postavite problem u VR-u, pa dodajte reči u BCF program; postavite ravan preseka u prikazu pre ulaska: vidi [Pregled modela u VR naočarima](topic:vr-review) |
| Prikaz ljudi za stolom u VR-u (prikazuju se samo ljudi u VR-u), snimanje VR šetnje | Zamolite ih da se pridruže u VR-u, ili napravite [animaciju](topic:animation) šetnje |

## Mreže

| Još nije | Umesto toga, danas |
|---|---|
| Vajanje po nivoima (multirezolucija) i Detalj koji uklanja trouglove koji su postali sitni | [Vajaj](topic:sculpt) podeljenu mrežu; {{ui:Ponovo mrežiraj}} da je ponovo izjednačite |
| Ponovno mrežiranje u četvorougaone površi koje prate oblik | {{ui:Ponovo mrežiraj}} (ravnomerni trouglovi), pa je ponovo izgradite [Retopologijom](topic:mesh-edit#retopology) |
| Težine nanesene na temena za modifikatore (Displace, Smooth i Shrinkwrap rade na celoj mreži) | Primenite modifikator, pa vajajte ili uređujte delove kojima treba |
| Kopiranje i lepljenje temena, ivica ili površi, rez nožem koji se završava unutar površi, žičane ivice bez površi | Dupliraj mrežu u Modelu; rezati nožem od ivice do ivice; [Izvuci](topic:mesh-edit#change-the-shape) otvorene ivice u površi |

## Organizacija i prikaz

| Još nije | Umesto toga, danas |
|---|---|
| Slojevi DWG i DXF situacionih planova kao oznake | Situacioni plan dolazi kao jedna grupa: razbijte je i grupišite delove koje želite da označite |
| Više preseka istovremeno, kutija preseka ili obris preseka izvezen kao crtež | Jedna [ravan preseka](topic:sections) seče u jednom trenutku; izvezite prikaz kao sliku |
| Prikazivanje mekih ivica isprekidano, ili omekšavanje dok vučete klizač | [Omekšaj po uglu](topic:soften) u Podacima o entitetu, pa opozovite da probate drugi ugao |
| Online biblioteka modela za pretragu, ili komponente sa opcijama za izbor (boja, stil) | [Početna biblioteka](topic:starter); uvezite Collada, OBJ ili glTF modele; [istegnite](topic:stretch) kopiju na veličinu |
| Postavljanje biljaka iz biblioteke biljaka | [Rasuti](topic:live-view#scatter-plants-rocks-and-people) biljke u živom prikazu, ili postavite drvo iz početne biblioteke |
| Nezavisne kopije grupe | Napravite je komponentom, pa {{ui:Napravi jedinstvenu}} (vidi [Rešavanje problema](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderovanje

| Još nije | Umesto toga, danas |
|---|---|
| Renderovanje u prikazu (radni prostor {{ui:Renderuj}}), red za renderovanje, i opcije kamere, nebeske slike, magle i mešanja svetla bez WebGPU-a | {{ui:Renderuj sliku…}} u {{ui:Visoki kvalitet}} koristi WebGL praćenje putanje tamo, bez tih opcija ([Renderuj sliku](topic:render#high-quality)) |
| Crtanje slike drugim programom bez dodatka za motor renderovanja (CadCraft nikad ne pokreće program pod GNU GPL licencom); panoramske ili stereo kamere i nebeska slika kroz drugi program; dodatak za Unreal Engine (datoteke se pišu, dodatak koji ih otvara nije objavljen) | Naši sopstveni motori Brzi i Praćenje putanje; motor nekog dodatka ([crtanje slike drugim programom](topic:render-other-program)); datoteka mape USD, glTF ili Unreal iz liste Motor za nošenje u bilo koji program |
| Rasute biljke i kamenje u {{ui:Renderuj sliku…}} | Prikazuju se u [živom prikazu](topic:live-view), njegovim panoramama, pregledniku i videu |

## Materijali i boje

| Još nije | Umesto toga, danas |
|---|---|
| Ulazi osim osnovne boje, hrapavosti, metalnosti, neprovidnosti, normale i emisije koji se menjaju duž površi na slikama visokog kvaliteta (koriste svoj prosek) | [Pravite materijale čvorovima](topic:shading): povežite ih ipak, prikaz ih pokazuje kako se menjaju |
| Pomeranje na površima guranja/vučenja | Pretvorite objekat u mrežu za pomeranje |
| Deljenje sopstvenih materijala u Biblioteku iz aplikacije, i spakovane (ARM/ORM) ili EXR mape u uvezenom skupu tekstura | Čuvajte ih u datoteci; uvezite odvojene mape kao PNG ili JPEG |
| Materijali datoteke u sesijama Live TeamWork (ostaju na računaru koji ih je napravio) | Sačuvajte datoteku i podelite je |
| Kalkomanije koje se savijaju oko krivih površi, kalkomanije u Opozovi, ili bojenje tekstura više površi odjednom preko šava | Postavite manje kalkomanije na svaki deo; obojite svaku stranu šava zasebno |
| Pečenje na površi guranja/vučenja, pečenje više objekata u jednu sliku, kavez koji oblikujete rukom, ili pečeno osvetljenje iz lampi | Pretvorite u mrežu i odmotajte je; pecite svaki objekat posebno; povećajte daljinu pretrage; renderujte sliku za svetlo lampi |
| Bojenje hrapavosti, metalnosti ili visine, bojenje slikama (pečatima) i bojenje tekstura većih od 512 × 512 | Obojite osnovnu boju ovde; napravite druge mape u programu za slike i uvezite ih kao skup tekstura |
| Teksture u Collada, STL, PLY, 3MF, IFC, DWG i DXF izvozima, i grafovi čvorova sopstvenih materijala datoteke u izvezenim modelima | Ovi formati dobijaju boju svakog materijala; glTF i OBJ nose uvezene teksture; izvezite materijal sam kao [MaterialX](topic:shading#materialx); [USD](topic:usd) čuva ceo model za ModelCraft |
| Teksture u Collada datotekama | Broje se i izostavljaju pri uvozu; teksture u `.skp` i `.glb` datotekama se uvoze |

## Datoteke

| Još nije | Umesto toga, danas |
|---|---|
| Čuvanje SketchUp datoteka, i tekst i kote iz njih | [Uvoz](topic:import-sketchup-files) zadržava površi, boje i teksture; izvezite Collada (`.dae`) da se vratite u SketchUp |
| Kote i vodilice u DWG i DXF izvozima | Dodajte ih u CAD programu posle izvoza |
| Tačke, tabele i višestruke oznake iz DWG i DXF | Broje se i izostavljaju; tekst dolazi kao jednolinijsko pismo, a ne kao font crteža |
| Površi, mreže, tabele i višestruke oznake iz DWG i DXF; površi 3D tela na izvlačenim, lofted ili drugim slobodnim površima | I one se broje i izostavljaju (sama 3D tela se uvoze). Izvezite te delove iz CAD programa kao OBJ ili Collada i uvezite to |
| Tipovi IFC-a, svojstva ili materijali | IFC izvoz ima [spratove](topic:formats#ifc-ifc) i opšte elemente; dodajte ostalo u BIM programu |
| Slanje modela direktno u BimCraft | Izvezite {{ui:IFC za BimCraft (.ifc)}} i otvorite ga u BimCraft-u |
| Labave ivice u glTF i STL | Koristite OBJ ili Collada za linijski crtež |
| glTF i FBX materijali osim osnovne boje (metal, hrapavost, normalne mape, staklo, premaz, sjaj…) | Čitaju se i navode se; ModelCraft zadržava osnovnu boju ili teksturu. Ponovo napravite izgled u [radnom prostoru Senčenje](topic:shading) |
| glTF kosti, animacije i morph mete | Modeli s kostima se uvoze kako stoje u mirovanju; animirajte u [vremenskoj liniji](topic:animation) |
| Boje i imena delova sklopa iz STEP datoteka | Delovi se uvoze kao mreže u pravoj veličini; [bojite](topic:paint) i imenujte ih posle uvoza |
| SubD objekti, tekst, kote i svetla iz `.3dm` datoteka | Vidi [šta se izostavlja](topic:import-3dm-files#what-is-left-out-and-said); pretvorite SubD u mreže u programu koji je napravio datoteku |
| KTX2 teksture i varijante materijala u glTF-u | Izvezite sa PNG ili JPEG teksturama; koristi se podrazumevana varijanta |
| Pisanje glTF instanciranja (EXT_mesh_gpu_instancing) | Komponente se pišu jednom i postavljaju mnogo puta, što svaki pregledač čita |
| Alembic animacija (svaki uzorak keša), Alembic tačke i krive, pisanje Alembic-a | Prvi uzorak se uvozi; animirajte u [vremenskoj liniji](topic:animation); pišite glTF, USD ili OBJ |
| Mape izbočina i normala u OBJ materijalima | Uvozi se samo slika boje (`map_Kd`) |
| FBX kosti i animacija, FBX izvoz, FBX 6 datoteke | Modeli s kostima se uvoze u mirovanju; izvezite glTF; sačuvajte stare datoteke kao FBX 2011 ili novije |
| Collada skinovi, morfovi, kamere, svetla, transformacije look-at i skew, spoljne reference | Izostavljaju se pri uvozu i broje se u poruci |
| Rezervne datoteke | {{ui:Sačuvaj kao}} ({{key:Mod+Shift+S}}) čuva još jednu kopiju. Posle pada, ModelCraft nudi nazad vaš nesačuvan rad („Vratiti vaš rad?”) |
| Čuvanje u oblaku i sinhronizacija između računara | Još nije dostupno. Čuvajte datoteke na računaru i kopirajte ih tamo gde treba |

## 3D štampa

| Još nije | Umesto toga, danas |
|---|---|
| Prave podrške slicera (interfejsi, raft, tačan obrazac podrške) | [Pregled podrške](topic:print-tools#supports-preview) pokazuje gde i koliko približno; pregled vašeg slicera pokazuje prave |
| Razmrsivanje dela koji prolazi kroz sebe, ili ivica gde se sastaju tri ili više površi | [Popravka](topic:print-tools#repair) ih navodi s mestom; koristite [Presek površi](topic:intersect) i obrišite ono unutra |
| Šare ispune i rešetka unutar šupljine | [Izdubi](topic:print-tools#hollow) ostavlja prazno; slicer dodaje ispunu punom delu |
| Detalji premali za vaš mlaznik (osim zidova) | [Debljina zida](topic:print-tools#wall-thickness) nalazi tanke zidove; pregled slojeva u slicer-u pokazuje ostalo |

## Performanse

Opozovi čuva kopiju modela za svaki korak ([mreža](topic:meshes) čuva samo ono što je promenjeno), pa su vrlo veliki uvozi geometrije guranja/vučenja sporiji pri svakoj izmeni. Držite uvoze lakim, a sačuvajte i ponovo otvorite da obrišete istoriju.

## Aplikacije i platforme

- **Računar:** ModelCraft radi u pregledaču na Mac-u, Windows-u i Linux-u, i u CadCraft Studio, desktop aplikaciji sa svih osam aplikacija u jednoj instalaciji. Na Android-u se CadCraft Studio instalira iz APK-a na getcadcraft.com/download. Još nema verzije za iPad ili iPhone.
- **Dodir:** vidi [Orbitiraj, pomeri pogled i zumiraj](topic:orbit-pan-zoom) za pokrete prstima. Pritisak olovke podešava četkicu u [Vajaj](topic:sculpt); inače se pritisak i nagib olovke ne koriste.
- **Listovi:** ModelCraft [štampa jedan prikaz po stranici](topic:export-model#print-the-view-or-save-it-as-a-pdf); nema rasporeda listova sa više prikaza ni naslovnog bloka. Izvezite u DWG/DXF prijateljski za CadCraft za crteže u razmeri.
