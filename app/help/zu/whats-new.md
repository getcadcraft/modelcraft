---
title: Okusha ku-0.9
summary: Isigaba sokuprinta nesi-slicer sethu nokuthumela nge-USB, Klipper, OctoPrint nePrusaLink, ukusika ngeresini nezengezo zamafayela, ukugeleza kwezinto, izengezo zomugqa wefektri nedijithali, ukugoba kwe-NURBS, ukujiyisa nokulinganisa ukuskena, i-AR endaweni nezindlela eziyishumi zomnsalo.
keywords: okusha, izinto ezintsha, amanothi okukhishwa, changelog, 0.9, isigaba sokuprinta, ukuprinta nge-3D, thumela kumshini wokuprinta, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, iresini, ukuprinta ngeresini, goo, sl1, ctb, anycubic, ukuhlola ukuvezwa, ukugeleza kwezinto, ikhophi yedijithali, factory floor, plc, conveyor, nurbs, ukugoba, ukujiyisa, ukulinganisa ukuskena, ar, endaweni, izindlela zomnsalo, izinhlelo zokulinganisa, izinguqulo, ukusetha, uhlu, indawo, 0.8, 0.8.1, inguqulo, izinto ezintsha, render engine, usd, gltf, unreal, nurbs, izindawo, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, ingxoxo, isimo, isikhathi sosuku, isizini, umsizi, impahla esitholwe esithombeni, isithombe, isithombe sesikeshi, hlobisa, hlobisa igumbi, ukusika okuthambekile, ukuhlukanisa, ukuhlola ukuprinta, izinkinga, iphrophathi, izibani, izilimi, amadivayisi okufaka, imigqa yethuluzi, dwg, live
from: 169048a2
---

Lokhu yikho okushintshe ku-ModelCraft 0.9, uma kuqhathaniswa no-0.8.1. Manje i-ModelCraft ifinyelela umshini wokuprinta nefilogo lefektri: ungabeka izinto ebhedini lokuprinta uzithumele ngaphandle kokukhipha, usike ifilamenti noma iresini, futhi uhlele umugqa wokuphatha izinto. Lokhu yi-CadCraft Studio 0.9 nezinhlelo zayo eziyisishiyagalombili; izici eziningi ezintsha ezilandelayo ziyizengezo.

## Okusha

### Ukuprinta nge-3D

- **Isigaba sokuprinta.** Chofoza {{ui:Isigaba sokuprinta}} kwithuluzi. Engeza izinto ezisemtapweni ebhedini lomshini wokuprinta, uzihlele, ubheke izendlalelo ezisikiwe bese ucindezela {{ui:Thumela kumshini wokuprinta}}, ngaphandle kokukhipha i-STL. Ingxenye yezengezo ye-3D Print, evulekile ngokuzenzakalelayo futhi ingasuswa njengazo zonke ezinye izengezo. Bona [Beka izinto ebhedini lokuprinta uzithumele kumshini wokuprinta](topic:print-stage).
- **I-slicer yethu yefilamenti.** {{ui:CadCraft basic (ifakiwe, eyashesha kakhulu)}} iyi-slicer kuhlu lwe-**Slicer** lekhadi: izindonga, izikhumba, ukugcwaliswa, izisekelo nomphetho wokuqala, kumsebenzi ongemuva ukuze ikhasi lihlale lisebenza. I-{{ui:Bona izendlalelo}} nesilayidi se-**Ungqimba** ikhombisa izendlalelo ngaphambi kokuthumela. Amaphrofayili omshini wokuprinta afana ne-Ender-3 nesitayela se-Prusa MK4 aqukethe i-G-code yawo yokuqala.
- **Ukuthumela.** Nge-USB (i-Chrome noma i-Edge kwikhompyuta, ikhasi livulekile), noma ku-Klipper (Moonraker), OctoPrint noma PrusaLink kunethiwekhi yakho. Akukho okuxhumayo noma okuthunyelwayo ngaphandle kokuchofoza, futhi ukuthumela kubuza kuqala.
- **Ezinye i-slicer.** I-Kiri:Moto, i-PrusaSlicer ne-OrcaSlicer ziyizengezo zazo, zivaliwe ngokuzenzakalelayo; zengeze kusuka ekhadini noma ku-{{ui:Izilungiselelo}} › {{ui:Okwengeziwe}}. I-PrusaSlicer ne-OrcaSlicer zisebenzisa ikhophi yakho efakiwe ye-CadCraft Studio. Ingxenye yezengezo yomshini we-Bambu Lab isika nge-OrcaSlicer yakho namaphrofayili ayo e-P2S futhi idinga i-Studio ekhompyutheni.
- **Ukuprinta ngeresini.** Izengezo zeresini (zivaliwe ngokuzenzakalelayo) zenza izithombe zezendlalelo zesikrini somshini wakho wokuprinta, nezimbobo zokuphuma komoya nezimbobo ezingaphansi, i-raft nezisekelo, ukubuka kwezendlalelo, nesikhathi, iresini nezindleko. Izengezo zefomethi yefayela zibhala i-Elegoo GOO, i-SL1, i-Chitubox (CBDDLP ne-CTB 2 kuya ku-5) ne-Anycubic (PWMX ne-PWS). Ukuhlolwa kokuvezwa kweresini kwenza ilebhu lokuvezwa okuyisihlanu. Bona [Sika ukuze uprinte ngomshini weresini](topic:resin-printing).
- **Akushintshiwe.** Ku-{{ui:Khipha}} › {{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}}, amathuluzi okuprinta nokuhlukanisa ukuze uprinte asebenza njengakwi-0.8. Bona [Lungiselela imodeli yokuprinta nge-3D](topic:print-3d).

### Ukugeleza kwezinto, Ikhophi yedijithali nengxenye yefektri

Lezi zintathu ziyizengezo, zivaliwe kuze kube yilapho uzivula ku-{{ui:Izilungiselelo}} › {{ui:Okwengeziwe}}, futhi ngalinye linosizo lwalo lwalo lapho livulekile.

- **Ukugeleza kwezinto.** Iphaneli ebizwa ngokuthi Ukugeleza kwezinto ihlela izinsimbi, izikhungo, izibambi nemizila ye-AGV kumbono we-3D, iqhuba ukulingisa okuqalwe ngembewu, iyidlalise kabusha, futhi ibonise ukuphuma, izikhathi zokulinda nemigqa, nemiphumela iyagcinwa njenge-CSV. Ama-oda angavela kufayela le-CSV. Amaseli ezandla angahlolwa futhi akhishwe. Ukuxhumana kwe-PLC kunemodi ethambile nemodi yangempela ku-Modbus TCP, esebenza kuphela ku-CadCraft Studio.
- **Ikhophi yedijithali.** Ifunda ukuhlelwa kokugeleza kwezinto iphinde iqhube i-PLC ethambile kuso, ingaphoqa izinkinga, kunemivivinyo yesitoko, ukuqhathaniswa kokuhlelwa nohlu lwezinto.
- **Iflowa lefektri.** Iguqula izikhungo ibe yimishini namaseli, iyifunda ibukeka ngokuqondile noma isuka kwisimuleli, futhi igcina uhlu lomsebenzi kanye ne-OEE elula. Ifunda kuphela: le nguqulo ayikwazi ukubhala emshinini noma ku-PLC.

### Izindawo, amamodeli nokudweba

- **Ukugoba, ukujiyisa nokusebenza kwe-boolean ku-NURBS.** Iphaneli ye-{{ui:Izinkalo}} inezinto ezithi {{ui:Ukugoba phakathi kwezinhlangothi}}, {{ui:Ukugoba imiphetho eminingi}}, {{ui:Ukujiyisa kube yivolumu eqinile}} kanye ne-Union, Subtract ne-Intersect, ngayinye inokuphambuka okulinganisiwe. Bona [Izindawo ezikhululekile (NURBS)](topic:nurbs-surfaces).
- **Linganisa izindawo nokuskena.** Khetha imeshi eskenwe usebenzise {{ui:Linganisa izindawo nokuskena}} eqenjini le-**Scan**, bese {{ui:Fakela izindawo esiqinileni}}. Kuwukulinganisa kokuqala, hhayi iphakheji ephelele yokuhlehlisa ukwakheka.
- **Ukuxhumana okuphilayo nomklami we-.3dm.** Ngalunye, kusuka ku-Rhino 8 noma ku-Grasshopper, futhi kudinga i-CadCraft Studio kwikhompyuta efanayo. Bona [Gcina imodeli ye-.3dm iphila](topic:live-3dm-link).
- **Bona imodeli endaweni.** {{ui:Bona endaweni (AR, ifoni)}} kumenyu ye-{{ui:Ukubuka}} isebenza kufoni ye-Android ene-Chrome. Bona [Bona imodeli endaweni ngefoni ye-Android (AR)](topic:ar-on-site).
- **Izindlela zomnsalo.** Uhlu oluwehlayo i-{{ui:Izindlela zomnsalo}} linikeza izindlela eziyishumi zokudweba umnsalo, kuhlanganise ne-{{ui:3-Point}} ne-{{ui:Qala, Isikhungo, Ukuphela}}.
- **Amayunithi amaningi.** Izisindo (kg, lb, t, ton) nezinga lokushisa (degrees C, F, K kanye ne-R) ziyaqondwa lapho uthayipha amanani anamayunithi.

## Kuzo zonke izinhlelo

- **Amathiphu okuma.** Umbhalo ovela uma uhlehlela ezinkinobho nezinhlamvu ezinqunyiwe ungumbhalo weBootstrap tooltip.
- **Ikhadi lethiphu lokuqala elivalekayo.** Ikhadi lethiphu endaweni yokudweba engenalutho linekhamera encane yokuvala. Lihlala livaliwe, futhi i-command palette ingalibonisa futhi.
- **Imigqa yamathebhu eskrolwayo.** Umugqa wamathebhu ephaneli okungafanele usuke uskrola esikhundleni sokunqunywa.
- **Izihloko zamathebhu.** Uma kuvulekile idokhumenti, ithebhu yesiphequluli iqala ngegama ledokhumenti, bese kufika ModelCraft kanye ne-CadCraft. Ichashazi lisuka phambili uma idokhumenti ingalondolozwanga.
- **Isakhiwo.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › Isakhiwo sibamba izakhiwo kuhlu oluwehlayo, nenketho yokusebenzisa isakhiwo kulolu hlelo kuphela kanye nenkinobho yokusetha kabusha isakhiwo.
- **Izilimi.** Uhlu lwezilimi kuzilungiselelo lulandela amafayela ezilimi aqukethwe yisakhiwo. Ezinye izilimi ngaphandle kwesiNgisi ziyizinguqulo zomshini.
- **Okuphilayo nelabhulali.** I-Live TeamWork ikhombisa izikhasimende eziphilayo namagama, nelabhulali yamaqoqo inikeza ikhasi ngalinye iqoqo lokuzenzakalelayo.

## Okulungisiwe

- {{ui:Dlala}} iguqukela ku-{{ui:Misa}} uma i-animation idlalwa, futhi {{key:Space}} iyadlala iphinde imise uma i-timeline ivulekile.
- Okwenziwa okungasemaphethelweni kubuyela ku-WebGL uma ikhadi lezithombe lingakwazi ukuqala i-path tracer. Ibhokisi lokubuka okuphilayo lingasabonisa iphutha; lokhu akuhlolwanga kumshini we-Windows nalowo mshayeli.
- Imodi yangempela ye-Material flow iyaxhuma futhi emva kokuthi uxhumo luphele ngezimpendulo zesimo se-PLC.

## Imikhawulo eqinisekisiwe

- Akukho okuprintiwe emshinini wokuprinta wangempela: hhayi ifilamenti, hhayi iresini, hhayi nge-Bambu Connect. Amafayela eresini afundwe kuphela ngabafundi bakwa-CadCraft.
- I-digital twin ne-Factory floor zihlolwe ngezimuleli nemiphumela eyaziwayo kuphela, kungekho PLC, umugqa noma iprothokholi yangempela. Ziyizisizo zokuhlola, hhayi ukuqinisekiswa kokuphepha. Ifiziksi ihlanganisa amabhokisi kuphela, kuze kube imithwalo eyisishiyagalombili.
- Uxhumo lwe-Rhino ne-Grasshopper alikaze lusebenze ezinhlelweni zangempela.
- Izilimi ezingeyisiNgisi ziyizinguqulo zomshini.

## Ngaphambilini: 0.8 no-0.8.1

Lokhu yikho okushintshe ku-ModelCraft 0.8 (2026-11-01) no-0.8.1 (2026-11-02), uma kuqhathaniswa no-0.7. Ingxoxo ye-{{ui:Renda isithombe…}} ingathumela isimo kwenye inhlelo, iphaneli ye-Surfaces yenza izindawo ezibushelelezi ezikhululekile, futhi umsizi oxhumile angasetha isimo sonke ngomusho owodwa.

### Okusha

**Ukurenda**

- **Ukukhetha kwe-Engine.** I-{{ui:Renda isithombe…}} inohlu lwe-**Engine** phezu kwe-Mode. Izinjini zethu ezimbili, i-Fast ne-Path tracer, zizo ezizenzakalelayo futhi zisebenza noma kuphi. Ezinye izinketho zigcina isimo njengephakheji (imodeli njengefayela le-USD, kanye nefayela lezilungiselelo elinamanani afanele ezimpahla, izibani ezivuliwe, ilanga, isibhakabhaka, ukuvezwa kanye nekhamera) ukuze uyithathe kwenye inhlelo. Isithombe esidwetshwe yinye inhlelo sitshela ukuthi yiyiphi inhlelo nenguqulo yayo. Bona [Khetha ukuthi iyiphi inhlelo ezodweba isithombe](topic:render-engines).
- **Vula kwenye inhlelo.** Uhlu lwe-Engine lungagcina isimo njengefayela le-USD, efayeleni le-glTF (`.glb`) noma ifoda yephrojekthi ye-Unreal (`.zip`), kusiphequluli nakwi-CadCraft Studio. Ku-Studio ingaphinde iqale i-usdview noma uhlelo lwekhompyutha ukuze ivule lelo fayela. Bona [Vula isimo kwenye inhlelo](topic:render-open-in).
- **Thumela kwi-game engine kusuka ku-Studio.** I-Studio ibhala isimo kwiphrojekthi ye-Unreal Engine ihlale isalingana ngesikhathi sokuthumela ngakunye, ngohlangothi lwesisodwa kuphela. Ukuhlela kwakho kuhlala kulayili ongakaze ubhalwe yi-CadCraft. Bona [Thumela isimo ku-game engine](topic:render-unreal).
- **Izinjini ezivela ezengezweni.** Isengezo singangeza injini kuhlu. Eyabhalwe nge-JavaScript idweba esiphequluleni nasku-Studio; eyodwa esebenzisa uhlelo idinga ukuvuma kwakho ku-Studio. Bona [Dweba isithombe ngenye inhlelo](topic:render-other-program) kanye [Engeza injini yokurenda ngesengezo](topic:render-engine-addons).
- **Chaza isimo.** Tshela umsizi oxhumile ukuthi "intambama, imvula encane, izihlahla zasekwindla, abantu esikhumulweni" futhi i-ModelCraft iyasetha ngesinyathelo esisodwa: ilanga lihamba ngosuku nangesikhathi ukuze izithunzi zilandele, isibhakabhaka siyashintsha, izindawo ezimanzi ziyavela, nezihlahla nabantu bamiswa njengezinto zangempela ku-tags ongazifihla, ongazihambisa noma ongazisusa. Isikhathi sosuku, usuku noma isizini, nesimo sezulu (esicacile, esimpunga, inkungu, imvula encane, imvula, isiphepho) nakho kusebenza ngokwako, futhi isicelo sakamuva siguqula isimo esifanayo. Inkungu ibonakala esithombeni esiphezulu ekhadini lezithombe; ezinye izinjini zibonisa isibhakabhaka, ukukhanya nezindawo ezimanzi. Imvula ayidwetshwa njengemigqa eyehlayo.

**Izinto**

- **Izinto kusuka esithombeni esisodwa.** Nika i-ModelCraft isithombe sendawo (udonga, ifloro, ilitshe) yona ihlanganisa into ethile: ukukhanya kwesithombe kuyalingana, imiphetho yenziwa ukuthi ihlangane, kanye nemephu yombala, imephu ye-roughness nemephu ye-normal kuyaphenywa esithombeni. Kuwukusebenza kwesithombe kuphela esithombeni sakho, ngaphandle kwemodeli efundisiwe. I-roughness iyisilinganiso. Isithombe esihlanzekile, esisikwele nesiqondile sinikeza ithayili elihle kakhulu; iphethini enamandla njengezitini ingabonisa isithunzi esithambile lapho kuhlanganiswe khona.

**Izindawo**

- **Izindawo ezikhululekile.** Iphaneli ye-{{ui:Izinkalo}} yenza amajika e-NURBS nezindawo ezingakanqunywa: amajika adlula emaphointini, loft, ruled, extrude, revolve, ama-sweep phezu kwerelo elingalinye noma amabili, izindawo kunethiwekhi yamajika, ama-patch kusuka emiphethweni emine, match nokuxuba. Yonke imphetho ehlanganyelwe ilinganiswa njenge-G0, G1 noma G2 (igebe, i-engeli, ukushintsha kokugoba) ezindaweni ezingokoqobo, futhi imphetho embi kunalokho owacela ivela ephaneli ye-Problems ne-**Match** fix. Imigqa ye-Zebra nemibala yokugoba kudwetshwa kusuka ezindaweni ezingokoqobo. Amafayela e-STEP ne-IGES ayaphuma futhi ayangena. Bona [Izindawo ezikhululekile (NURBS)](topic:nurbs-surfaces).

**Indawo nezigumbi**

- **Isithombe sesikeshi sibe ngumhlaba.** {{ui:Ifayela}} › {{ui:Ngenisa isithombe sesikeshi…}} iguqula isithombe sefoni sesikeshi sesandla ibe yimiphetho emhlabeni ngesilinganiso osisho: iqembu elilodwa, nethegi yombala ngamunye wepeni. Iphepha litholakala futhi liqondiswe ku-khompyutha yakho, futhi akukho okuthunyelwa noma yikuphi. Bona [Modela endaweni yesakhiwo](topic:site-plan).
- **Hlobisa igumbi.** Khetha ifloro bese usebenzisa {{ui:Lungisa}} › {{ui:Hlobisa igumbi…}}. Impahla yekamelo lokulala, yendawo yokuhlala, yokudlela, yekhishi, yasendlini yokugezela noma yehhovisi ibekwa ngemithetho, eceleni kwezindonga negxile kude nemnyango nezifasteli, iqembu elilodwa ongalisusa ngesinyathelo esisodwa. Kuwukuhlelwa okuzenzakalelayo okuhlolwa nawe, hhayi ukuklama. Bona [Ilabhulali yokuqala](topic:starter).

**Ukuprinta nge-3D**

- **Ukusika okuthambekile.** Ukuhlukanisa ukuze uprinte kungathambekisa ukusika kwayo kuze kube ngamadigri angu-60, okunika izingxenye indawo eningi yokunamathisela. Izixhumanisi zimi zibe ngqo ngokusika. Bona [Hlukanisa imodeli ukuze uprinte](topic:print-split).
- **Ukuhlola kokuprinta kuPhakathi Kwezinkinga.** Okutholakele ekuhlolweni kokuprinta nge-3D kuvela ephaneli ye-Problems namamaki emodelini, futhi i-Repair iyawalungisa kusuka lapho. Bona [Izisekelo, ubukhulu bodonga, ukugcwaliswa nokulungisa](topic:print-tools).

**Kuzo zonke izinhlelo**

- **Izilimi.** Usizo nezinhlelo kutholakala ngezilimi ezingama-54. Ezilishumi ziyizintsha: isiLithuanian, isiLatvian, isiBosnian, isiMarathi, isiTelugu, isiAlbanian, isiAfrikaans, isiFilipino, isiSwahili kanye nesiUzbek. Izilimi ezingeyisiNgisi ziyizinguqulo zomshini kuze kube yilapho umuntu owazi lo lwimi ezifundile, futhi izihloko zosizo zisengaba yisiNgisi.
- **Amadivayisi okufaka.** Ipadi lokuthinta, ipeni, imawuseni ye-3D, ukhonkolo wegeyimu nezilawuli ze-MIDI zingasebenza nezinhlelo, zonke noma eyodwa.
- **Imigqa yethuluzi.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › Imigqa yethuluzi isetha i-Wrap (njengangaphambili), imigqa emi-2 noma umugqa oyodwa. Ibha engafanele iskrola ngokuhlangothi esikhundleni sokuthatha isikhala kudwetshwe. I-Wrap ihlala iyinkambiso.
- **Ikholomu yephrophathi.** Izinkambu zezibani ze-ModelCraft zisebenzisa igridi ejwayelekile: izigaba ezingavulwa nokuwa, amakholomu okubhalwa nevelu, kanye ne-Compact density. Ukubalwa okubhaliwe njengo `2*450` kuyaqhubeka nokusebenza.
- **Izinkinga.** Iphaneli ye-Problems (inkinobho yesexwayiso ebha yohlelo) ihlanganyelwa yizinhlelo zonke. Ku-ModelCraft iqukethe ukuhlola kokuprinta nezexwayiso zokuqhubeka kwendawo.
- **Okuphilayo.** Iseshini ye-Live TeamWork ikhombisa ukuthi ubani usiphi. Bona [Modela ndawonye nge-Live TeamWork](topic:work-live).
- **Izengezo.** Izengezo zingangeza izinjini zokurenda, njengalokhu okungenhla.
- **Xhuma i-AI yakho.** Ukuxhumana kwezivumelwano zamathuluzi kanye nokuhlolwa kwezinhlelo ezingu-8 kuyadlula, kunamathuluzi angu-454 ngokubonke. Ukuxhuma ngokuchofoza kanye nakwi-Studio, ikhonektha esingiwe yabasizi besiphequluli, ukhiye wakho ngaphakathi kwe-Studio kanye nephakheji eshicilelwe akukaqinisekiswa. Izinhlelo azinayo i-AI yazo. Bona [Sebenzisa i-ModelCraft nabasizi be-AI](topic:use-with-ai-assistants).

### Okulungisiwe ku-0.8.1

- **Isigaba se-DWG classes.** Isigaba sezigaba zefayela le-DWG sifundwe njengohlobo olungalungile, okungaphula ifayela lapho lingeniswa. Manje sifundwa ngendlela efanele, ku-ModelCraft nakwezinye izinhlelo ezifunda i-DWG.
- **Amathebhulethi ngokuma.** Ukuphakama kwegridi okungasetshenziswa kuya endaweni yokudweba, nesakhiwo sephepha siqala ku-760 pixels ububanzi noma ngaphansi kwalokho. Isitayela se-ModelCraft nasso sinalolu shintsho.
- **Ulimi ku-Studio.** I-CadCraft Studio namaphakheji anokushicilelwa angashintsha ulimi aphinde ahambe; ngaphambili kwakuyisiNgisi kuphela. Lokhu akuvivinywanga kuzo zonke izinkundla kodwa sitshele uma ulimi lungashintshi.

### Akukakahleleki kule nguqulo

- **Akusayinwanga ngekhodi.** I-Windows ingabonisa i-SmartScreen: khetha {{ui:Ulwazi oluningiwe}}, bese {{ui:Qhubeka noma kunjalo}}. Ku-Mac, cofa ngesokudla bese ukhetha {{ui:Vula}}. Izakhiwo zesitolo zimisiwe, futhi isakhiwo se-iPad ne-iPhone asizange sakhiwe kabusha ngo-0.8.1.
- Ukudweba isithombe ngenye inhlelo ngaphandle kwesengezo sesinjini sokurenda, amakhamera epanorama noma we-stereo nesithombe sesibhakabhaka ngenye inhlelo, kanye nepulaki evula isiteji se-Unreal azikakho. Amafayela ayabhalwa; ipulaki akikhishwanga futhi aykaze isebenze ku-Unreal.
- Izindawo ezikhululekile: i-G3 nelebhu A akulinganiswa noma kuqinisekiswe, nokusika kanye nezinto eziqinile kuzofika kamuva.
- Izithombe zezinhlelo zangaphandle azifani ngokuphelele pixel nge-pixel nezethu: kuhambisana kuphela ikhamera, ilanga, izibani nokuvezwa.
- Ukulungiswa kwe-0.8.1 kokushintsha ulimi ku-Studio akuvivinywanga kuzo zonke izinkundla.

Konke okunye kusencwadini [Akukakhiwa](topic:not-built-yet). Ngokukhishwa okwedlule, bona [Okusha ku-0.7](topic:whats-new-0-7).
