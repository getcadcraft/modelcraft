---
title: Okusha ku-0.9 (ngaphambili)
summary: Isigaba sokuprinta ngesilayisi sethu nokuthumela nge-USB, Klipper, OctoPrint nePrusaLink, ukusika nge-resin nokwengeziwe kwamafayela, ukugeleza kwempahla, okwengeziwe kwe-digital twin nomgundwane wefektri, ukugoqa kwe-NURBS, ukujiyisa nokulinganisa ukuskena, i-AR endaweni nezindlela eziyishumi zomnsalo.
keywords: okusha ku-0.9, ukukhishwa kwangaphambili, okusha, isigaba sokuprinta, ukuprinta nge-3D, thumela emshinini wokuprinta nge-3D, isilayisi, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, ukuprinta nge-resin, goo, sl1, ctb, anycubic, isivivinyo sokuveza, ukugeleza kwempahla, digital twin, umgundwane wefektri, plc, isithwali, nurbs, ukugoqa, ukujiyisa, ukulinganisa ukuskena, ar, endaweni, izindlela zomnsalo, izinyunithi, izinguquko, amanothi okukhishwa, ushintsho, 0.8, 0.8.1, inguqulo, izici ezintsha, injini yokurenda, injini, vula ku, usd, gltf, unreal, injini yokwengeziwe, izindawo, loft, sweep, ukuqhubeka, g0, g1, g2, zebra, step, iges, tshela isimo, isimo, isimo sezulu, isikhathi sosuku, isikhathi sonyaka, umsizi, impahla kusuka esithombeni, isithombe, isithombe sesikeshi, hlobisa, hlobisa igumbi, ukusika okuthambekile, ukuhlukanisa, ukuhlola kokuprinta, izinkinga, igridi yezici, amalambu, izilimi, amadivayisi okufaka, imigqa yethuluzi, dwg, live
from: 2717d1b1
---

Lokhu kushintshile ku-ModelCraft 0.9, uqhathaniswa no-0.8.1. Manje i-ModelCraft ifinyelela umshini wokuprinta nomgundwane wesitshalo: ungabeka izinto ebhedini lokuprinta uzithumele ngaphandle kokuzithumela, usike ngefilamenti noma ngeresini, futhi ulungise umugqa wokuphatha impahla. Lo ngu-CadCraft Studio 0.9 nezinhlelo zakhe eziyisishiyagalombili; izici ezintsha eziningi ezingezansi ziyizengeziwe.

## Okusha

### Ukuprinta nge-3D

- **Isigaba sokuprinta.** Chofoza {{ui:Isigaba sokuprinta}} kumugqa wethuluzi. Engeza izinto ze-Library ebhedini lomshini wokuprinta, zihlele, bheka izingqimba ezisikiwe bese ucindezela {{ui:Thumela emshinini wokuprinta nge-3D}}, ngaphandle kokukhipha i-STL. Sisebenza kwi-3D Print add-on, evulekile ngokuzenzakalela futhi engasuswa njengoba kunjalo nakwezinye izinto ezingezansi. Bona [Beka izinto ebhedini lokuprinta uzithumele emshinini](topic:print-stage).
- **Isilayisi sethu sefilamenti.** I-{{ui:CadCraft basic (ifakiwe, eshesha kakhulu)}} yisilayisi ohlwini lwe-**Isilayisi** ekhadini: izindonga, izikhumba, ukugcwalisa, izisekelo nomphetho ombalo, emsebenzini ongaphansi ukuze ikhasi lisasebenziseka. I-{{ui:Buka izingqimba}} nesilayidi se-**Ungqimba** zikhombisa izingqimba ngaphambi kokuthumela. Amaphrofayili omshini wokuprinta, njengamasitayela e-Ender-3 ne-Prusa MK4, aneziqalo zawo zeG-code.
- **Ukuthumela.** Nge-USB (i-Chrome noma i-Edge ekhompyutheni, nekhasi livulekile), noma ku-Klipper (Moonraker), OctoPrint noma PrusaLink kunethiwekhi yakho. Akukho okuxhumayo noma okuthumelwayo ngaphandle kokuchofoza, futhi ukuthumela kubuza kuqala.
- **Eminye imisiki.** I-Kiri:Moto, i-PrusaSlicer ne-OrcaSlicer ziyizengeziwe zazo, zivaliwe ngokuzenzakalela; zengeze ekhadini noma ku-{{ui:Izilungiselelo}} › {{ui:Okwengeziwe}}. I-PrusaSlicer ne-OrcaSlicer zisebenzisa ikopi yakho efakiwe ye-CadCraft Studio. Okwengeziwe kwomshini we-Bambu Lab kusika ngo-OrcaSlicer wakho namaprofayili wayo we-P2S futhi kudinga i-Studio ekhompyutheni.
- **Ukuprinta nge-resin.** Okwengeziwe kwe-resin (kuvaliwe ngokuzenzakalela) kwenza izithombe zezingqimba zesikrini somshini wakho, ngokugoba nezimbobo zokuphefumula, uhlaka nezisekelo, ukubuka kwezingqimba, kanye nesikhathi, iresini nezindleko. Okwengeziwe kwefomethi yefayela kubhala i-Elegoo GOO, SL1, Chitubox (CBDDLP ne-CTB 2 kuya ku-5) ne-Anycubic (PWMX ne-PWS). Isivivinyo sokuveza ngeresini senza uhlaka lwezinveza ezinhlanu. Bona [Sika ngomshini wokuprinta ngeresini](topic:resin-printing).
- **Akushintshile.** {{ui:Khipha}} › {{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}}, amathuluzi okuprinta nokuHlukanisa ukuprinta kusebenza njengakwi-0.8. Bona [Lungiselela imodeli ukuze iprintwe nge-3D](topic:print-3d).

### Ukugeleza kwempahla, i-Digital twin nomgundwane wefektri

Lezi zintathu ziyizengeziwe, zivaliwe kuze kube yilapho uzivula ku-{{ui:Izilungiselelo}} › {{ui:Okwengeziwe}}, futhi ngayinye inosizo lwayo oluqondile uma ivuliwe.

- **Ukugeleza kwempahla.** Ipaneli ebizwa ngokuthi Ukugeleza kwempahla yakha amabhande okuthwala, izikhungo, izibambiswano nezindlela ze-AGV ku-3D view, isebenzise ukulingisa okuqalwe ngembewu, iyidlalele emuva, futhi ibonise ukudlula, izikhathi zokufika nemigqa elindile, imiphumela ilondolozwe njenge-CSV. Ama-oda angavela kwifayela le-CSV. Amaseli arobhothi angahlolwa futhi akhishwe. Ukuxhumana kwe-PLC kunemodi ethambile nemodi yangempela nge-Modbus TCP, esebenza kuphela ku-CadCraft Studio.
- **Digital twin.** Ifunda ukwakheka kokugeleza kwempahla bese isebenza njenge-PLC ethambile kuso, nemiphumela yokuphazamiseka oyiphoqelelayo, izivivinyo zesitokhi, ukuqhathanisa kokwakheka nebhilidi lezinto.
- **Umgundwane wefektri.** Iguqula izikhungo zibe imishini namaseli, ibafunde ngokuqondile noma kusuka kwisimulator, futhi igcine uhlu lomsebenzi nendlela elula ye-OEE. Ifunda kuphela: lolu buthmbo alukwazi ukubhala emshinini noma ku-PLC.

### Izindawo, imodeli nokudweba

- **Ukugoqa, ukujiyisa nama-boolean ku-NURBS.** Ipaneli ye-{{ui:Izinkalo}} inezinto ezithi {{ui:Ukugoqa phakathi kwezinhlangothi}}, {{ui:Ukugoqa imiphetho eminingi}}, {{ui:Ukujiyisa kube yivolumu eqinile}} kanye ne-Union, Subtract ne-Intersect, ngayinye inokuphambuka okulinganisiwe. Bona [Izindawo ezikhululekile (NURBS)](topic:nurbs-surfaces).
- **Linganisa izindawo nokuskena.** Khetha imesh eskeniwe bese usebenzisa {{ui:Linganisa izindawo nokuskena}} eqenjini le-**Scan**, bese {{ui:Fakela izindawo esiqinileni}}. Kuwukulinganisa kokuqala, hhayi iphakheji ephelele yokuhlehlisa.
- **Uxhumo olusha kumklami we-.3dm.** Olunye uhlangothi, kusuka ku-Rhino 8 noma Grasshopper, futhi kudinga i-CadCraft Studio kukhompyutha efanayo. Bona [Gcina imodeli ye-.3dm ibukeka](topic:live-3dm-link).
- **Bona imodeli endaweni.** {{ui:Bona endaweni (AR, ifoni)}} kumenyu ethi {{ui:Ukubuka}} isebenza kufoni ye-Android ene-Chrome. Bona [Bona imodeli endaweni ngefoni ye-Android (AR)](topic:ar-on-site).
- **Izindlela zomnsalo.** I-drop-down ethi {{ui:Izindlela zomnsalo}} inikeza izindlela eziyishumi zokudweba umnsalo, kuhlanganise {{ui:3-Point}} no-{{ui:Qala, Isikhungo, Ukuphela}}.
- **Amanani amaningi.** Isisindo (kg, lb, t, ton) nezinga lokushisa (degrees C, F, K no-R) kuyaqondakala lapho uthayipha amanani anamayunithi.

## Kuzo zonke izinhlelo

- **Amathiphu.** Umbhalo ophuma uma uhlaka inkinobho noma amalebula anqunyiwe yithiphu ye-Bootstrap.
- **Ithiphu lokuqala elivalekayo.** Ikhadi lethiphu endaweni yokudweba engenalutho linophawu oluncane lokuvala x. Lihlala livaliwe, futhi i-command palette ingakubonisa futhi.
- **Imizila yethebhu ehambayo.** Umzila wethebhu yepaneli ongalingani usuka ukuze ungasikwa.
- **Izihloko zethebhu.** Uma kuvulwe idokhumenti, ithebhu yesiphequluli iqala ngegama ledokhumenti, bese ModelCraft kanye CadCraft. Ichashazi lokuqala uma lingalondoloziwe.
- **Ukwakheka.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › Ukwakheka kubamba izakheko ohlwini oluwisayo, nenketho yokusebenzisa ukwakheka kule nhlelo kuphela kanye nenkinobho yokusetha kabusha ukwakheka.
- **Izilimi.** Uhlu lwezilimi ku-Izilungiselelo lulandela amafayela ezilimi aqukethwe yisakhiwo. Ezinye izilimi ngaphandle kwesiNgisi ngamadrafthi emishini.
- **Live ne-Library.** I-Live TeamWork ikhombisa amakhesa aphilayo namagama, ne-Library iqoqo ngalinye lohlelo lwalo iqoqo elizenzakalelayo.

## Okulungisiwe

- I-{{ui:Dlala}} iguquka ibe {{ui:Misa}} uma i-animation idlala, futhi {{key:Space}} iyadlala iphinde imise uma i-timeline ivuliwe.
- Isithombe esimile siwela ku-WebGL uma ikhadi lezithombe lingaqali i-path tracer. Umbono ophilayo wokurenda ungase usakhombisa iphutha; lokhu akuhlolwanga ekhompyutheni ye-Windows enaleso dilaymeni.
- Imodi yangempela ye-Material flow ixhuma kabusha emva kokuthi uxhumo luphele ngezimpendulo zesiphambeko se-PLC.

## Imikhawulo eqinisekile

- Akukaze kuprintwe emshinini wangempela: hhayi ngefilamenti, hhayi ngeresini, hhayi nge-Bambu Connect. Amafayela eresini afundwe emuva yizifundi zeCadCraft zodwa.
- I-digital twin nomgundwane wefektri zavivinywa ngama-simulator nezimpendulo ezaziwayo kuphela, ngaphandle kwe-PLC, umugqa noma iprothokholi yangempela. Ayizisizi zokuhlola, hhayi ukuqinisekisa ukuphepha. Ifiziksi imboza amabhokisi kuphela, kuye kwafika ezintwini eziyisishiyagalombili.
- Uxhumo lwe-Rhino ne-Grasshopper alikaze lisebenze ezinhlelweni zangempela.
- Ezinye izilimi ngaphandle kwesiNgisi ngamadrafthi emishini.

## Ngaphambili: 0.8 no-0.8.1

Lokhu kushintshile ku-ModelCraft 0.8 (2026-11-01) no-0.8.1 (2026-11-02), uqhathaniswa no-0.7. Ingxoxo ye-{{ui:Renda isithombe…}} manje ingathumela isimo kwenye inhlelo, ipaneli ye-Surfaces yenza izindawo ezibushelelezi zefomu elikhululekile, futhi umsizi oyixhumayo angasetha isimo sonke kusivakamo esisodwa.

### Okusha

**Ukuveza**

- **Ukukhetha kwenjini.** I-{{ui:Renda isithombe…}} inohlu lwe-**Injini** phezu kwe-Mode. Izinjini zethu ezimbili, i-Fast ne-Path tracer, zivamile futhi zisebenza kulo lonke indawo. Ezinye izinketho zigcina isimo njengephakheji (imodeli njenge-fayela le-USD, nefayela lezilungiselelo elinezinkomba zempahla eziqondile, amalambu avulekile, ilanga, isibhakabhaka, ukuveza nekhamera) ukuze uyithathe kwenye inhlelo. Isithombe esidwetshwe yenye inhlelo sitshela ukuthi iyiphi inhlelo nenguqulo eyidwebile. Bona [Khetha ukuthi iyiphi inhlelo ezodweba isithombe](topic:render-engines).
- **Vula kwenye inhlelo.** Uhlu lwe-Injini lungagcina isimo njenge-fayela le-USD, ifayela le-glTF (`.glb`) noma ifolda yephrojekthi ye-Unreal (`.zip`), esiphequluleni nasku-CadCraft Studio. Ku-Studio ingaqala futhi i-usdview noma uhlelo lwekhompyutha lwefayela. Bona [Vula isimo kwenye inhlelo](topic:render-open-in).
- **Thumela kwinjini yemidlalo kusuka ku-Studio.** I-Studio ibhala isimo kuphrojekthi ye-Unreal Engine futhi iyigcine ilingana ngalo lonke ukuthumela, kuhlangothi olulodwa kuphela. Ukuhlela kwakho kuhlala kusendaweni engabhalwa yi-CadCraft. Bona [Thumela isimo kwinjini yemidlalo](topic:render-unreal).
- **Izinjini kusuka kokwengeziwe.** Okwengeziwe kungangeza injini kuhlu. Eyabhalwa nge-JavaScript idweba esiphequluleni nase-Studio; eyodwa esebenzisa uhlelo idinga ukuvuma kwakho ku-Studio. Bona [Dweba isithombe ngenye inhlelo](topic:render-other-program) kanye [Engeza injini yokurenda ngokwengeziwe](topic:render-engine-addons).
- **Tshela isimo.** Tshela umsizi wakho oxhunyiwe ukuthi "dusk, light rain, autumn trees, people on the plaza" futhi i-ModelCraft iyasetha ngesinyathelo esisodwa: ilanga lihamba ngosuku nesikhathi ukuze izithunzi zilandele, isibhakabhaka siyashintsha, izindawo ezimanzi ziyavela, futhi izihlahla nabantu bayabekwa njengezinto zangempela ezinamathegi ongawacasa, ongawahambisa noma ongawasusa. Isikhathi sosuku, usuku noma isikhathi sonyaka, nesimo sezulu (sicwebile, sinamafu, insonga, imvula encane, imvula, isiphepho) nakho kuyasebenza ngokwako, futhi isicelo sakamuva siguqula isimo esifanayo. Insonga ibonakala esithombeni esiphezulu ekhadini; ezinye izinjini zikhombisa isibhakabhaka, ukukhanya nezindawo ezimanzi. Imvula ayidwetshwa njengemigqa eyehla.

**Izinkalo**

- **Izindawo ezikhululekile.** Ipaneli ye-{{ui:Izinkalo}} yenza amajika e-NURBS nezindawo ezingakhawulwanga: amajika adlula kumaphoyinti, loft, ruled, extrude, revolve, ama-sweep phezu kwamarele amabili noma ngaphezulu, izindawo kusuka kunethiwekhi yamajika, ama-patch kusuka kumaphethelo amane, match nokuhlanganisa. Komunye umphetho ngamunye ulinganiswa njenge-G0, G1 noma G2 (igebe, i-engeli, ukushintsha kwesigobe) ezindaweni ezinembile, futhi umphetho obi kunalokho owucelile uvela ku-ipaneli ye-Problems nge-**Match**. Imigqa yezebra nemibala yesigobe idwetshwa kusuka ezindaweni ezinembile. Amafayela ka-STL no-IGES aphuma futhi angene. Bona [Izindawo ezikhululekile (NURBS)](topic:nurbs-surfaces).

**Indawo namagumbi**

- **Isithombe sesikeshi phansi.** I-{{ui:Ifayela}} › {{ui:Ngenisa isithombe sesikeshi…}} iguqula isithombe sefoni sesikeshi sesandla ibe imiphetho phansi ngesikali osisho: iqembu elilodwa, namathegi ombala ngamunye wepeni. Iphepha litholwa futhi liqondiswe ekhompyutheni yakho, futhi akukho okuthunyelwa noma kuphi. Bona [Modela kuhlelo lwendawo](topic:site-plan).
- **Hlobisa igumbi.** Khetha ifuzi bese usebenzisa {{ui:Lungisa}} › {{ui:Hlobisa igumbi…}}. Impahla yegumbi lokulala, indawo yokuhlala, indawo yokudlela, ikhishi, ibhavu noma ehhovisi ibekwa ngemithetho, ecaleni kwezindonga futhi ingaphazamisi iminyango nezifasteli, eqenjini elilodwa elingasuswa ngesinyathelo esisodwa. Kuyisakhiwo esizenzakalelayo sokubuyekeza, hhayi idizayini. Bona [Ilabhulali yokuqala](topic:starter).

**Ukuprinta nge-3D**

- **Ukusika okuthambekile.** Hlukanisa ukuprinta kungathambekisa ukusika kwayo ngama-degree angu-60, okunika izingxenye indawo eningi yokunamathisela. Izixhumanisi zimi zikhonde ukusikwa. Bona [Hlukanisa imodeli ukuze iprintwe](topic:print-split).
- **Ukuhlola kokuprinta ku-Problems.** Imiphumela yokuhlolwa kokuprinta nge-3D ibonakala kwi-ipaneli ye-Problems ngamamaki emodelini, futhi i-Repair iyayilungisa kusuka lapho. Bona [Izisekelo, ukuminyana kwezindonga, ukugoba nokulungisa](topic:print-tools).

**Kuzo zonke izinhlelo**

- **Izilimi.** Usizo nezinhlelo zifika ngezilimi ezingu-54. Eziyishumi zintsha: isiLithuania, isiLatvia, isiBosnia, isiMarathi, isiTelugu, isiAlbania, isiAfrikaans, isiFilipino, isiSwahili nesiUzbek. Ezinye izilimi ngaphandle kwesiNgisi ngamadrafthi emishini kuze kube yilapho umuntu wendabuko efunda, futhi izihloko zosizo zisengase zisesiNgisi.
- **Amadivayisi okufaka.** I-trackpad, ipeni, imouse ye-3D, isilawuli semidlalo nezilawuli ze-MIDI zingasebenzisa izinhlelo, zonke noma eyodwa.
- **Imigqa yethuluzi.** I-{{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › Imigqa yethuluzi isetha i-Phindisa (njengakuqala), imigqa emi-2 noma umugqa o-1. Ibha engangeni ihamba ngokuhlehla ngokuthatha indawo kwidrawing. Phindisa kusalokhu kuyinkambo ezenzakalelayo.
- **Igridi yezici.** Amalambu e-ModelCraft asebenzisa igridi ejwayelekile: izigaba ezingawa, amakholomu wamalebula nezinani, nobuningi be-Compact. Ukubala okubhaliwe njenge-`2*450` kuyaqhubeka kusebenza.
- **Izinkinga.** Ipaneli ye-Problems (inkinobho yesexwayiso ebha ye-app) yabelwana ngayo yonke izinhlelo. Ku-ModelCraft ibamba ukuhlolwa kokuprinta nezexwayiso zokuqhubeka kwezindawo.
- **Live.** Iseshini ye-Live TeamWork ikhombisa ukuthi ubani ukuphi. Bona [Modela ndawonye nge-Live TeamWork](topic:work-live).
- **Okwengeziwe.** Okwengeziwe kungangeza izinjini zokurenda, njengalapho ngenhla.
- **Xhuma i-AI yakho.** Ukuxhumana kwamathuluzi nokuhlolwa kwezinhlelo ezingu-8 kudlule, kunamathuluzi angu-454 ngokubalwa konke. Ukuxhuma ngokuchofoza kube kodwa kuSudio, isixhumi esiphethwe ebhulawuzeni, ukhiye wakho ku-Studio nephakheji eshicilelwe azikaze zithenjiswe okwamanje. Izinhlelo azinayo i-AI yazo. Bona [Sebenzisa i-ModelCraft nabasizi be-AI](topic:use-with-ai-assistants).

### Okulungisiwe ku-0.8.1

- **Isigaba se-DWG classes.** Isigaba samakilasi efayela le-DWG safundwa njengohlobo olungalungile, okungaphula ifayela lapho lingeniswa. Manje sifundwa kahle, ku-ModelCraft nakwezinye izinhlelo ezifunda i-DWG.
- **Amathebhulethi ngokuma.** Ukuphakama kwegridi okusele kuya kuthebhuletsi, futhi isakhiwo esikhethekile sishintsha kusukela ku-760 wamapikseli noma ngaphansi. Isitayela se-ModelCraft naso sinalotshintsho.
- **Ulimi ku-Studio.** I-CadCraft Studio namaphakheji akhiwe angashintsha ulimi ngesikhathi esesebenza; ngaphambili kwakuyisiNgisi kuphela. Lokhu akuhlolwanga kuzo zonke izinkundla okwamanje: sitshele uma ulimi lungashintshi.

### Akusafiki kule nguqulo

- **Akuphawulwanga ngekhodi.** I-Windows ingabonisa i-SmartScreen: khetha {{ui:Ulwazi olwengeziwe}}, bese {{ui:Qhuba noma kunjalo}}. Ku-Mac, cindezela ngesokudla bese ukhetha {{ui:Vula}}. Ukukhishwa kwesitolo kumisiwe, futhi isakhiwo se-iPad ne-iPhone asizange sakhiwe kabusha ngo-0.8.1.
- Enye inhlelo idweba isithombe ngaphandle kokwengeziwe kwenjini yokurenda, amakhamera ePanorama noma e-stereo kanye nesithombe sesibhakabhaka ngenye inhlelo, nomcu ovula isiteji se-Unreal awukho okwamanje. Amafayela ayabhalwa; umcu awukakhishwa futhi awukakasebenzi ku-Unreal.
- Izindawo ezikhululekile: i-G3 nama-class A akalinganiswa noma akhonjwa, futhi ukusika nama-solid kuzofika kamuva.
- Izithombe zezinhlelo zangaphandle azifani ngephikseli nezethu: kuhambisana kuphela ikhamera, ilanga, amalambu nokuveza.
- Ukulungiswa kwe-0.8.1 kokushintsha kolimi ku-Studio akuhlolwanga kuzo zonke izinkundla.

Konke okunye kukuthi [Akusakhiwa okwamanje](topic:not-built-yet). Ngokukhishwa kwangaphambili, bona [Okusha ku-0.7](topic:whats-new-0-7).
