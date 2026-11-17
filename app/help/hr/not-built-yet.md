---
title: Još nije izrađeno
summary: Što ova verzija ModelCraft još ne radi i što za sada raditi umjesto toga.
keywords: nedostaje, još nije, ograničenja, plan razvoja, materijali, teksture, tekst, slojevi, skrati, podijeli, oblak, radna površina
from: 179fa5e4
---

ModelCraft je rana verzija. Ova stranica navodi što još ne radi, da ne tražite to uzalud, te najbliži način da obavite posao danas.

## Alati za crtanje

| Još nije | Umjesto toga, za sada |
|---|---|
| Slobodno crtanje | Klikajte točke s {{ui:Krivulja}} |
| Promjena broja segmenata luka ili kružnice nakon crtanja | Izbrišite i ponovno nacrtajte nakon upisa `24s` |
| Odabir fonta za [3D tekst](topic:text3d) ili uređivanje riječi nakon postavljanja | Izbrišite ga i ponovno dodajte tekst |
| Promjena kuta upisivanjem u kutnu kotu ili veličine cilindra iz kote njegove kružnice | Zakrenite bridove s {{ui:Zakreni}}; skalirajte cilindar s {{ui:Skaliraj}} |
| Kote u izvezenim datotekama modela | Kote se prikazuju na slikama, ispisima i PDF-ovima prikaza; datoteke modela nose samo geometriju |
| Skrati, Podijeli i Vanjska ljuska | [Unija, oduzmi i presijeci](topic:solids) zatvorene grupe, ili [presijecite plohe](topic:intersect) i izbrišite što ne treba |
| Odabir osi rotacije tipkama sa strelicama | Kliknite središte {{ui:Zakreni}} na plohi okrenutoj u smjeru u kojem os treba pokazivati |
| Zaključavanje na više smjerova istovremeno | Zaključajte jedan smjer tipkom sa strelicom, zatim se hvatajte za točku |
| Promjena veličine duž kosine ili s kraja kote koji nije na kutu | Postavite kotu na dva kuta, duž brida ili duž crvene, zelene ili plave osi |

## Animacija

| Još nije | Umjesto toga, za sada |
|---|---|
| Animiranje ploha, bridova, doba dana sunca, stila ili skrivenog | Napravite pomični dio grupom ili komponentom; za drugo doba dana renderirajte zasebni video |
| Kamera koja prati nacrtanu putanju ili gleda pokretni objekt | Postavite više ključeva kamere duž puta ([Animiraj](topic:animation)) |
| Zvuk u videima i visokokvalitetni (path-traced) videi bez WebGPU-a | Dodajte zvuk u uređivaču videa; bez WebGPU-a renderirajte video brzim renderom ([Renderiraj video](topic:animation#render-the-video)) |
| Animirane svjetiljke (svjetlina, raspršenje, boja) u renderiranom videu, kut objektiva animiran bez ključeva kamere u videu, animiranje materijala ili postavki rendera | Svjetiljke se animiraju u prikazu; za video postavite ključeve i za kameru za zumiranje; za različite postavke svjetiljki renderirajte zasebne videe ([Animiraj bilo koje svojstvo](topic:animate)) |
| Zrcaljenje težina ili kostiju s jedne strane na drugu, vidljivi omotači kostiju, prikaz težina sjenčano po točkama (prikazuju se po plohi), vidljiva pozirana mreža dok slikate težine | Slikajte s obje strane ili izradite jednu polovicu i koristite modifikator Zrcaljenje prije dodavanja armature; za provjeru prebacujte između Slikaj težine i Poza |
| Kosti učitane iz glTF, FBX ili USD datoteka kao armatura, i armature zapisane u te datoteke | Modeli s kožom ulaze u mirovanju s težinama iz datoteke; dodajte kosti redoslijedom zglobova u datoteci, zatim {{ui:Koristi težine iz datoteke}} ([Animiraj](topic:animate)) |
| Pomicanje IK cilja ili pola povlačenjem u prikazu, vlastiti prostor ograničenja (lokalni ili svjetski) za odabir, rastezanje IK lanaca, IK duž krivulje | Upišite točku cilja ili ciljajte na objekt i pomaknite ga; držite lance na njihovim duljinama |
| Tkanina, fluidi, meka tijela, zglobovi i šarke između krutih tijela, sudar s točnim oblikom objekta (oko njega samo kutije i kugle), simulacija uživo dok reproducirate, početna brzina ili okretanje (tijela počinju mirovati) | Pretvorite kruta tijela i reproducirajte ključeve; izradite šarku od ključeva; podijelite čudan oblik na kutije (grupe) |
| Izvoz animacije u glTF ili druge datoteke modela | Renderirajte video; datoteka `.modelcraft` i [USD datoteka](topic:usd) koju je ModelCraft spremio zadržavaju je za ModelCraft |
| Upisivanje komentara ili naslova teme u VR-u, glasovne bilješke, ručno pomicanje ravnine presjeka u VR-u | Postavite temu u VR-u, zatim dodajte tekst u BCF program; postavite ravninu presjeka u prikazu prije ulaska: vidi [Pregled modela u VR naglavnom uređaju](topic:vr-review) |
| Prikaz ljudi za stolom u VR-u (prikazuju se samo ljudi u VR-u), snimanje VR šetnje | Zamolite ih da se pridruže u VR-u ili izradite [animaciju](topic:animation) šetnje |

## Mreže

| Još nije | Umjesto toga, za sada |
|---|---|
| Oblikovanje po razinama (multiresolution), a Detail uklanja trokute koji su postali sitni | [Oblikujte](topic:sculpt) podijeljenu mrežu; {{ui:Remesh}} za ponovno izjednačavanje |
| Ponovna izrada mreže u četverokutne plohe koje prate oblik | {{ui:Remesh}} (ujednačeni trokuti), zatim je ponovno izgradite s [Retopologijom](topic:mesh-edit#retopology) |
| Težine slikane na vrhovima za modifikatore (Displace, Smooth i Shrinkwrap rade na cijeloj mreži) | Primijenite modifikator, zatim oblikujte ili uredite dijelove koji to trebaju |
| Kopiranje i lijepljenje vrhova, bridova ili ploha, rez nožem koji završava unutar plohe, žičani bridovi bez plohe | Dupliciraj mrežu u Modelu; rezom nožem od brida do brida; [Izvuci](topic:mesh-edit#change-the-shape) otvorene bridove u plohe |

## Organizacija i prikaz

| Još nije | Umjesto toga, za sada |
|---|---|
| Slojevi DWG i DXF situacijskih planova kao oznake | Situacijski plan ulazi kao jedna grupa: rastavite ga i grupirajte dijelove koje želite označiti |
| Više presjeka odjednom, kutija presjeka ili obris presjeka izvezen kao crtež | Jedna [ravnina presjeka](topic:sections) presijeca odjednom; izvezite prikaz kao sliku |
| Prikaz mekih bridova crtkano ili omekšavanje dok povlačite klizač | [Zagladi prema kutu](topic:soften) u Informacije o entitetu, a poništite da isprobate drugi kut |
| Mrežna knjižnica modela za pretragu ili komponente s opcijama za odabir (boja, stil) | [Početna knjižnica](topic:starter); uvezite modele Collada, OBJ ili glTF; [rastegnite](topic:stretch) kopiju na veličinu |
| Postavljanje biljaka iz biblioteke biljaka | [Raspršite](topic:live-view#scatter-plants-rocks-and-people) biljke u živom prikazu ili postavite stablo iz početne knjižnice |
| Neovisne kopije grupe | Napravite je komponentom, zatim {{ui:Učini jedinstvenom}} (vidi [Rješavanje problema](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderiranje

| Još nije | Umjesto toga, za sada |
|---|---|
| Renderiranje u prikazu (radni prostor {{ui:Renderiraj}}), red za renderiranje, te opcije kamere, slike neba, magle i miješanja svjetla bez WebGPU-a | {{ui:Renderiraj sliku…}} u {{ui:Visoka kvaliteta}} koristi WebGL path tracer, bez tih opcija ([Renderiraj sliku](topic:render#high-quality)) |
| Drugi program crta sliku renderiranja bez dodatka za motor renderiranja (CadCraft nikad ne pokreće program pod licencom GNU GPL); panoramske ili stereo kamere i slika neba kroz drugi program; dodatak Unreal Engine (datoteke se zapisuju, dodatak koji ih otvara nije objavljen) | Naši vlastiti motori Fast i Path tracer; motor dodatka ([nacrtajte sliku drugim programom](topic:render-other-program)); USD, glTF ili Unreal mapa s datotekama s popisa Motor za odnijeti u bilo koji program |
| Raspršene biljke i kamenje u {{ui:Renderiraj sliku…}} | Prikazuju se u [živom prikazu](topic:live-view), njegovim panoramama, preglednikom i videu |

## Materijali i boje

| Još nije | Umjesto toga, za sada |
|---|---|
| Ulazi osim osnovne boje, hrapavosti, metalnosti, neprozirnosti, normale i emisije koji se mijenjaju po plohi u slikama visoke kvalitete (koriste svoj prosjek) | [Izradite materijale čvorovima](topic:shading): svejedno ih povežite, prikaz ih pokazuje kao promjenjive |
| Pomak (displacement) na plohama potisni/povuci | Pretvorite objekt u mrežu za pomak |
| Dijeljenje vlastitih materijala u Knjižnicu iz aplikacije, te spakirane (ARM/ORM) ili EXR karte u uvezenom skupu tekstura | Zadržite ih u datoteci; uvezite zasebne karte kao PNG ili JPEG |
| Materijali datoteke u sesijama Live TeamWork (ostaju na računalu koje ih je izradilo) | Spremite datoteku i podijelite je |
| Naljepnice koje se savijaju oko zakrivljenih ploha, naljepnice u poništavanju, ili slikanje tekstura više ploha odjednom preko šava | Postavite manje naljepnice na svaki dio; svaku stranu šava slikajte zasebno |
| Pečenje na plohe potisni/povuci, pečenje više objekata u jednu sliku, ručno oblikovan kavez ili pečeno osvjetljenje od svjetiljki | Pretvorite u mrežu i razvijte je; pecite svaki objekt; povećajte udaljenost pretrage; renderirajte sliku za svjetlo svjetiljki |
| Slikanje hrapavosti, metalnosti ili visine, slikanje slikama (pečatima) i slikanje tekstura većih od 512 × 512 | Ovdje slikajte osnovnu boju; ostale karte izradite u uređivaču slika i uvezite ih kao skup tekstura |
| Teksture u izvozima Collada, STL, PLY, 3MF, IFC, DWG i DXF, te grafovi čvorova materijala datoteke u izvezenim modelima | Ti formati dobivaju boju svakog materijala; glTF i OBJ nose uvezene teksture; izvezite materijal samostalno kao [MaterialX](topic:shading#materialx); [USD](topic:usd) zadržava cijeli model za ModelCraft |
| Teksture u datotekama Collada | Pri uvozu se broje i izostavljaju; teksture u datotekama `.skp` i `.glb` se uvoze |

## Datoteke

| Još nije | Umjesto toga, za sada |
|---|---|
| Spremanje SketchUp datoteka, te teksta i kota iz njih | [Uvoz](topic:import-sketchup-files) čuva plohe, boje i teksture; izvezite Collada (`.dae`) za povratak u SketchUp |
| Kote i pomoćne linije u izvozima DWG i DXF | Dodajte ih u CAD programu nakon izvoza |
| Točke, tablice i višestruke vodilice iz DWG i DXF | Broje se i izostavljaju; tekst ulazi kao jednolinijski tekst, a ne kao font crteža |
| Plohe, mreže, tablice i višestruke vodilice iz DWG i DXF; plohe 3D tijela na provučenim, loft ili drugim slobodnim plohama | Također se broje i izostavljaju (sama 3D tijela se uvoze). Izvezite te dijelove iz CAD programa kao OBJ ili Collada i uvezite to |
| IFC tipovi, svojstva ili materijali | IFC izvoz ima [etaže](topic:formats#ifc-ifc) i generičke elemente; ostalo dodajte u BIM programu |
| Slanje modela izravno u BimCraft | Izvezite {{ui:IFC za BimCraft (.ifc)}} i otvorite ga u programu BimCraft |
| Slobodni bridovi u glTF i STL | Za crtanje linija koristite OBJ ili Collada |
| Materijali glTF i FBX osim osnovne boje (metal, hrapavost, normalne karte, staklo, bistri premaz, sjaj…) | Čitaju se i navode se; ModelCraft zadržava osnovnu boju ili teksturu. Izgled ponovno izgradite u [radnom prostoru Sjenčanje](topic:shading) |
| Kosti, animacije i ciljevi morfiranja u glTF-u | Modeli s kožom ulaze u mirovnom položaju; animirajte na [vremenskoj traci](topic:animation) |
| Boje i nazivi dijelova sklopa iz STEP datoteka | Dijelovi ulaze kao mreže u stvarnoj veličini; [obojite](topic:paint) ih i imenujte nakon uvoza |
| SubD objekti, tekst, kote i svjetla iz `.3dm` datoteka | Vidi [što je izostavljeno](topic:import-3dm-files#what-is-left-out-and-said); pretvorite SubD u mreže u programu koji je izradio datoteku |
| KTX2 teksture i varijante materijala u glTF-u | Izvezite s PNG ili JPEG teksturama; koristi se zadana varijanta |
| Zapisivanje instanciranja u glTF-u (EXT_mesh_gpu_instancing) | Komponente se zapisuju jednom i postavljaju više puta, što svaki preglednik čita |
| Alembic animacija (svaki uzorak predmemorije), Alembic točke i krivulje, zapisivanje Alembica | Ulazi prvi uzorak; animirajte na [vremenskoj traci](topic:animation); zapišite glTF, USD ili OBJ |
| Bump i normalne karte u OBJ materijalima | Ulazi samo slika boje (`map_Kd`) |
| FBX kosti i animacija, FBX izvoz, FBX 6 datoteke | Modeli s kožom ulaze u mirovanju; izvezite glTF; stare datoteke spremite kao FBX 2011 ili noviji |
| Collada kože, morfovi, kamere, svjetla, transformacije look-at i skew, vanjske reference | Pri uvozu se izostavljaju i broje u poruci |
| Sigurnosne kopije | {{ui:Spremi kao}} ({{key:Mod+Shift+S}}) sprema još jednu kopiju. Nakon pada ModelCraft nudi vraćanje vašeg nespremljenog rada („Oporavite svoj rad?“) |
| Spremanje u oblak i sinkronizacija između računala | Još nije dostupno. Spremajte datoteke na računalo i kopirajte ih tamo gdje trebate |

## 3D ispis

| Još nije | Umjesto toga, za sada |
|---|---|
| Stvarni oslonci slicera (sučelja, splav, točan uzorak oslonaca) | [Pregled oslonaca](topic:print-tools#supports-preview) pokazuje gdje i koliko otprilike; pregled vašeg slicera prikazuje stvarne |
| Razdvajanje dijela koji prolazi kroz sebe, ili bridova na kojima se sastaju tri ili više ploha | [Popravak](topic:print-tools#repair) ih navodi s mjestom; koristite [presijecite plohe](topic:intersect) i izbrišite što je unutra |
| Uzorci ispune i rešetka unutar šupljine | [Izdubi](topic:print-tools#hollow) ostavlja je praznom; vaš slicer dodaje ispunu punom dijelu |
| Detalji premali za vašu mlaznicu (osim stijenki) | [Debljina stijenke](topic:print-tools#wall-thickness) pronalazi tanke stijenke; pregled slojeva vašeg slicera prikazuje ostalo |

## Performanse

Poništavanje čuva kopiju modela za svaki korak ([mreža](topic:meshes) čuva samo ono što se promijenilo), pa vrlo veliki uvozi geometrije potisni/povuci usporavaju svako uređivanje. Držite uvoze lakima, a spremite i ponovno otvorite da biste očistili povijest.

## Aplikacije i platforme

- **Radna površina:** ModelCraft radi u pregledniku na Macu, Windowsu i Linuxu te u CadCraft Studiju, aplikaciji za radnu površinu sa svih osam aplikacija u jednoj instalaciji. Na Androidu se CadCraft Studio instalira iz svoje APK datoteke na getcadcraft.com/download. Verzija za iPad ili iPhone još ne postoji.
- **Dodir:** pogledajte [Orbit, Pan i zumiranje](topic:orbit-pan-zoom) za geste prstima. Pritisak olovke postavlja kist u [Oblikovanju](topic:sculpt); inače se pritisak i nagib olovke ne koriste.
- **Listovi:** ModelCraft [ispisuje jedan prikaz po stranici](topic:export-model#print-the-view-or-save-it-as-a-pdf); nema rasporeda listova s više prikaza ili zaglavljem crteža. Izvezite u DWG/DXF prikladne za CadCraft za crteže u mjerilu.
