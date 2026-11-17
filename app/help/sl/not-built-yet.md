---
title: Še ni izdelano
summary: Kaj ta različica ModelCraft še ne počne in kaj storiti namesto tega za zdaj.
keywords: manjka, še ne, omejitve, načrt razvoja, materiali, teksture, besedilo, sloji, prirezi, razdelitev, oblak, namizje
from: 179fa5e4
---

ModelCraft je zgodnja različica. Ta stran našteje, kaj še ne počne, da ne iščete zaman, ter najbližji način, kako opraviti delo že danes.

## Orodja za risanje

| Še ni | Namesto tega, danes |
|---|---|
| Prostoročno risanje | Klikajte točke z {{ui:Krivulja}} |
| Spreminjanje števila segmentov loka ali kroga po risanju | Izbrišite ga in narišite znova, potem ko vnesete `24s` |
| Izbira pisave za [3D besedilo](topic:text3d) ali urejanje njegovih besed po postavitvi | Izbrišite ga in znova dodajte besedilo |
| Spreminjanje kota z vnosom v kotno koto ali velikosti valja iz mere kroga | Zasukajte robove z {{ui:Zasukaj (Q)}}; valj skalirajte z {{ui:Merilo (S)}} |
| Mere v izvoženih datotekah modela | Mere so prikazane na slikah, izpisih in PDF-jih pogleda; datoteke modela vsebujejo samo geometrijo |
| Prirezi, Razdeli in Zunanja lupina | [Unija, Odštej in Presek](topic:solids) zaprtih skupin ali [presek ploskev](topic:intersect) in izbrišite, kar ne potrebujete |
| Izbira osi vrtenja s puščičnimi tipkami | Kliknite središče {{ui:Zasukaj (Q)}} na ploskvi, obrnjeni v smeri, v katero mora kazati os |
| Zaklepanje več smeri zaskakovanja hkrati | Zaklenite eno smer s puščično tipko, nato se zaskočite na točko |
| Spreminjanje velikosti vzdolž poševnice ali z konca mere, ki ni na vogalu | Postavite mero na dva vogala, vzdolž roba ali vzdolž rdeče, zelene ali modre |

## Animacija

| Še ni | Namesto tega, danes |
|---|---|
| Animiranje ploskev, robov, sončnega časa dneva, sloga ali skritih delov | Premični del naredite skupino ali komponento; za drug čas dneva upodobite ločen video |
| Kamera, ki sledi narisani poti ali gleda premikajoč se predmet | Nastavite več ključev kamere vzdolž poti ([Animiraj](topic:animation)) |
| Zvok v videih in visokokakovostni videi (sledenje poti) brez WebGPU | Dodajte zvok v urejevalniku videa; brez WebGPU upodobite video s hitrim upodabljalnikom ([Upodobi video](topic:animation#render-the-video)) |
| Animirane luči (svetlost, razpršenost, barva) v upodobljenem videu, kot leče animiran brez ključev kamere v videu, animiranje materialov ali nastavitev upodabljanja | Luči se animirajo v pogledu; za zoom v videu ključite tudi kamero; za različne nastavitve luči upodobite ločene videe ([Animiraj poljubno lastnost](topic:animate)) |
| Zrcaljenje uteži ali kosti z ene strani na drugo, vidne ovojnice kosti, senčenje uteži točko za točko (prikazane na ploskev), ogled deformirane mreže med slikanjem uteži | Pobarvajte obe strani ali naredite eno polovico in uporabite modifikator Zrcali pred dodajanjem armature; za preverjanje preklapljajte med Slikanje uteži in Poza |
| Kosti, prebrane iz datotek glTF, FBX ali USD kot armatura, in armature, zapisane v te datoteke | Modeli s kostmi se uvozijo v mirovnem položaju z utežmi iz datoteke; dodajte kosti v vrstnem redu sklepov datoteke, nato {{ui:Uporabi uteži iz datoteke}} ([Animiraj](topic:animate)) |
| Premikanje ciljne točke IK ali pola z vlečenjem v pogledu, izbira prostora omejitve (lokalni ali svetovni), raztezanje verig IK, IK vzdolž krivulje | Vnesite točko cilja ali ciljajte na predmet in premaknite tega; verige ohranite v njihovih dolžinah |
| Tkanine, tekočine, mehka telesa, sklepi in tečaji med togimi telesi, trk z natančno obliko predmeta (okrog njega so le škatle in krogle), simulacija v živo med predvajanjem, začetna hitrost ali vrtenje (telesa se začnejo v mirovanju) | Zapecite togo telo in predvajajte ključe; tečaj sestavite iz ključev; nenavadno obliko razdelite na škatle (skupine) |
| Izvoz animacije v glTF ali druge datoteke modela | Upodobite video; datoteka `.modelcraft` in [datoteka USD](topic:usd), ki jo je ModelCraft shranil, ohranita animacijo za ModelCraft |
| Vnos komentarja ali naslova zadeve v VR, glasovne opombe, premikanje ravnine prereza z roko v VR | Postavite zadevo v VR, nato dodajte besede v program BCF; ravnino prereza nastavite v pogledu, preden greste v VR: glejte [Pregled modela v VR naglavniku](topic:vr-review) |
| Videti ljudi za mizo v VR (prikazani so le ljudje v VR), snemanje sprehoda po VR | Prosite jih, naj se pridružijo v VR, ali naredite [animacijo](topic:animation) sprehoda |

## Mreže

| Še ni | Namesto tega, danes |
|---|---|
| Oblikovanje po ravneh (multiresolution) in Podrobnost, ki odstrani trikotnike, ki so postali majhni | [Oblikujte](topic:sculpt) razdeljeno mrežo; {{ui:Ponovno mreži}}, da jo spet izenačite |
| Ponovna mreža v štirikotne ploskve, ki sledijo obliki | {{ui:Ponovno mreži}} (enakomerni trikotniki), nato jo ponovno zgradite z [Retopologijo](topic:mesh-edit#retopology) |
| Uteži, slikane na oglišča za modifikatorje (Displace, Smooth in Shrinkwrap delujejo na celotni mreži) | Uporabite modifikator, nato oblikujte ali uredite dele, ki to potrebujejo |
| Kopiranje in lepljenje oglišč, robov ali ploskev, rez z nožem, ki se konča znotraj ploskve, žični robovi brez ploskve | Podvojite mrežo v Modelu; nož od roba do roba; [Iztisnite](topic:mesh-edit#change-the-shape) odprte robove v ploskve |

## Organiziranje in ogled

| Še ni | Namesto tega, danes |
|---|---|
| Sloji tlorisov mest v DWG in DXF kot oznake | Tloris pride kot ena skupina: razstavite jo in združite dele, ki jih želite označiti |
| Več rezov prereza hkrati, okvir prereza ali obris prereza, izvožen kot risba | En [ravnina prereza](topic:sections) reže naenkrat; pogled izvozite kot sliko |
| Mehki robovi, prikazani črtkano, ali mehčanje med vlečenjem drsnika | [Zmehčajte po kotu](topic:soften) v {{ui:Podatki o entiteti}} in razveljavite, da preizkusite drug kot |
| Spletna knjižnica modelov za iskanje ali komponente z možnostmi izbire (barva, slog) | [Začetna knjižnica](topic:starter); uvozite modele Collada, OBJ ali glTF; [raztegnite](topic:stretch) kopijo na velikost |
| Postavljanje rastlin iz knjižnice rastlin | [Raztrosite](topic:live-view#scatter-plants-rocks-and-people) rastline v pogledu v živo ali postavite drevo iz začetne knjižnice |
| Neodvisne kopije skupine | Naredite jo komponento, nato {{ui:Naredi edinstveno}} (glejte [Odpravljanje težav](topic:troubleshooting#editing-one-group-changed-another)) |

## Upodabljanje

| Še ni | Namesto tega, danes |
|---|---|
| Upodabljanje v pogledu (delovno okolje {{ui:Upodobi}}), vrsta upodabljanja ter možnosti kamere, neba, megle in mešanja luči brez WebGPU | {{ui:Upodobi sliko…}} v {{ui:Visoka kakovost}} uporablja sledilnik poti WebGL, brez teh možnosti ([Upodobi sliko](topic:render#high-quality)) |
| Drug program riše sliko upodobitve brez dodatka upodabljalnika (CadCraft nikoli ne požene programa pod licenco GNU GPL); panoramske ali stereo kamere ter slika neba prek drugega programa; vtičnik Unreal Engine (datoteke se zapišejo, vtičnik, ki jih odpre, pa ni izdan) | Lastna upodabljalnika Fast in Path tracer; mehanizem dodatka ([narišite sliko z drugim programom](topic:render-other-program)); datoteka mape USD, glTF ali Unreal iz seznama Engine za odnos v katerikoli program |
| Raztresene rastline in kamenje v {{ui:Upodobi sliko…}} | Prikazani so v [pogledu v živo](topic:live-view), njegovih panoramah, pregledovalniku in videu |

## Materiali in barve

| Še ni | Namesto tega, danes |
|---|---|
| Vhodi, razen osnovne barve, hrapavosti, kovinskosti, prosojnosti, normale in emisije, ki se spreminjajo po površini v visokokakovostnih slikah (uporabljajo povprečje) | [Naredite materiale z vozlišči](topic:shading): povežite jih vseeno, pogled jih prikaže spremenljive |
| Premik na ploskvah potiskanja in vlečenja | Za premik pretvorite predmet v mrežo |
| Deljenje lastnih materialov v Knjižnico iz aplikacije ter zapakirane (ARM/ORM) ali EXR karte v uvoženem nizu tekstur | Ohranite jih v datoteki; uvozite ločene karte kot PNG ali JPEG |
| Materiali datoteke v sejah Live TeamWork (ostanejo v računalniku, ki jih je naredil) | Shranite datoteko in jo delite |
| Nalepke, ki se ukrivijo okrog ukrivljenih površin, nalepke v razveljavitvi ali slikanje tekstur več ploskev hkrati prek šiva | Postavite manjše nalepke na vsak del; vsako stran šiva pobarvajte posebej |
| Pečenje na ploskve potiskanja in vlečenja, pečenje več predmetov v eno sliko, roko oblikovan oklep ali zapečena osvetlitev iz luči | Pretvorite v mrežo in jo razvijte; vsak predmet zapecite posebej; povečajte razdaljo iskanja; za svetlobo luči upodobite sliko |
| Slikanje hrapavosti, kovinskosti ali višine, slikanje s slikami (žigi) in slikanje tekstur, večjih od 512 × 512 | Tukaj slikajte osnovno barvo; druge karte naredite v urejevalniku slik in jih uvozite kot niz tekstur |
| Teksture v izvozih Collada, STL, PLY, 3MF, IFC, DWG in DXF ter grafi vozlišč lastnih materialov datoteke v izvoženih modelih | Ti formati dobijo barvo vsakega materiala; glTF in OBJ ohranita uvožene teksture; material izvozite posebej kot [MaterialX](topic:shading#materialx); [USD](topic:usd) ohrani celoten model za ModelCraft |
| Teksture v datotekah Collada | Prešteti so in pri uvozu izpuščeni; teksture v datotekah `.skp` in `.glb` se uvozijo |

## Datoteke

| Še ni | Namesto tega, danes |
|---|---|
| Shranjevanje datotek SketchUp ter besedila in mer iz njih | [Uvozite](topic:import-sketchup-files) ohrani ploskve, barve in teksture; izvozite Collada (`.dae`), da se vrnete v SketchUp |
| Mere in vodila v izvozih DWG in DXF | Dodajte jih v programu CAD po izvozu |
| Točke, tabele in večkratne vodilke iz DWG in DXF | Prešteti so in izpuščeni; besedilo pride kot enočrtna pisava, ne v pisavi risbe |
| Površine, mreže, tabele in večkratne vodilke iz DWG in DXF; ploskve 3D teles na potegnjenih, prehodnih ali drugih prostih površinah | Tudi te so prešteti in izpuščeni (sama 3D telesa se uvozijo). Te dele izvozite iz programa CAD kot OBJ ali Collada in uvozite to |
| Tipi IFC, lastnosti ali materiali | Izvoz IFC ima [etaže](topic:formats#ifc-ifc) in splošne elemente; dodajte ostalo v programu BIM |
| Pošiljanje modela neposredno v BimCraft | Izvozite {{ui:IFC za BimCraft (.ifc)}} in ga odprite v BimCraft |
| Prosti robovi v glTF in STL | Za črtno risbo uporabite OBJ ali Collada |
| Materiali glTF in FBX razen osnovne barve (kovina, hrapavost, normalne karte, steklo, prozoren premaz, sijaj …) | Preberejo se in naštejejo; ModelCraft ohrani osnovno barvo ali teksturo. Videz obnovite v [delovnem okolju Senčenje](topic:shading) |
| Kosti, animacije in ciljne oblike glTF | Modeli s kostmi se uvozijo v mirovnem položaju; animirajte na [časovnici](topic:animation) |
| Barve in imena delov sestava iz datotek STEP | Deli pridejo kot mreže v pravi velikosti; po uvozu jih [pobarvajte](topic:paint) in poimenujte |
| Predmeti SubD, besedilo, mere in luči iz datotek `.3dm` | Glejte [kaj je izpuščeno](topic:import-3dm-files#what-is-left-out-and-said); SubD pretvorite v mreže v programu, ki je datoteko naredil |
| Teksture KTX2 in različice materialov v glTF | Izvozite s teksturami PNG ali JPEG; uporabi se privzeta različica |
| Zapisovanje glTF instanciranja (EXT_mesh_gpu_instancing) | Komponente se zapišejo enkrat in postavijo večkrat, kar vsak pregledovalnik prebere |
| Animacija Alembic (vsak vzorec predpomnilnika), točke in krivulje Alembic, zapisovanje Alembic | Pride prvi vzorec; animirajte na [časovnici](topic:animation); zapišite glTF, USD ali OBJ |
| Izbočilne in normalne karte v materialih OBJ | Pride samo barvna slika (`map_Kd`) |
| Kosti in animacija FBX, izvoz FBX, datoteke FBX 6 | Modeli s kostmi se uvozijo v mirovnem položaju; izvozite glTF; stare datoteke shranite kot FBX 2011 ali novejši |
| Skini, oblike, kamere, luči, usmeritev pogleda in skew transformacije Collada, zunanje reference | Pri uvozu izpuščeni in prešteti v sporočilu |
| Varnostne kopije datotek | {{ui:Shrani kot}} ({{key:Mod+Shift+S}}) shrani drugo kopijo. Po zrušitvi ModelCraft ponudi vaše neshranjeno delo nazaj („Obnovite svoje delo?“) |
| Shranjevanje v oblak in sinhronizacija med računalniki | Še ni na voljo. Shranite datoteke na svoj računalnik in jih kopirajte tja, kjer jih potrebujete |

## 3D-tiskanje

| Še ni | Namesto tega, danes |
|---|---|
| Prave podpore slicerja (vmesniki, raft, natančen vzorec podpore) | [Predogled podpor](topic:print-tools#supports-preview) pokaže, kje in približno koliko; predogled vašega slicerja pokaže prave |
| Razpletanje dela, ki prehaja skozi samega sebe, ali robovi, kjer se srečajo tri ali več ploskev | [Popravilo](topic:print-tools#repair) jih našteje in pove, kje so; uporabite [Presek ploskev](topic:intersect) in izbrišite, kar je znotraj |
| Vzorci notranje zapolnitve in mreža znotraj votline | [Izdolbi](topic:print-tools#hollow) ga pusti prazen; vaš slicer doda zapolnitev trdnemu delu |
| Podrobnosti, premajhne za vašo šobo (razen sten) | [Debelina sten](topic:print-tools#wall-thickness) najde tanke stene; predogled plasti vašega slicerja pokaže ostalo |

## Zmogljivost

Razveljavitev hrani kopijo modela za vsak korak ([mreža](topic:meshes) hrani le spremenjeno), zato zelo veliki uvozi geometrije potiskanja in vlečenja upočasnijo vsako urejanje. Uvažajte čim bolj vitko in shranite ter ponovno odprite, da počistite zgodovino.

## Aplikacije in platforme

- **Namizje:** ModelCraft teče v brskalniku na Macu, Windows in Linuxu ter v CadCraft Studio, namiznem programu z vsemi osmimi aplikacijami v eni namestitvi. Na Androidu se CadCraft Studio namesti iz APK na getcadcraft.com/download. Gradnje za iPad ali iPhone še ni.
- **Dotik:** glejte [Orbitiranje, pomik in povečava](topic:orbit-pan-zoom) za geste s prsti. Tlak peresa nastavi čopič v [Oblikovanju](topic:sculpt); drugje tlak in nagib peresa nista uporabljena.
- **Listi:** ModelCraft [natisne en pogled na stran](topic:export-model#print-the-view-or-save-it-as-a-pdf); ni postavitev listov z več pogledi in glavo risbe. Za risbe v merilu izvozite v DWG/DXF, primerne za CadCraft.
