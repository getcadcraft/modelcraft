---
title: Okusha ku-0.8 nele-0.8.1
summary: Ukukhetha injini yokurenda enamafayela ezinye izinhlelo, izinkalo ze-NURBS ezinokuqhubeka okulinganiswayo, isithombe sesikethi sibe ngaphansi, amakamelo ahlobisiwe, ukusika okuthambekile kokuprinta nge-3D, nokuhlola kokuprinta kuphaneli yezinkinga.
keywords: okusha, izinguquko, amanothi okukhishwa, ushintsho, 0.8, 0.8.1, uguqulo, izici ezintsha, injini yokurenda, injini, vula ngu, usd, gltf, unreal, injini ye-add-on, nurbs, izinkalo, loft, sweep, ukuqhubeka, g0, g1, g2, zebra, step, iges, tshela umsizi, isithombe, isithombe sesikethi, hlobisa, hlobisa igumbi, ukusika okuthambekile, ukuhlola kokuprinta, izinkinga, izibani, izilimi, amadivayisi okufaka, dwg, live
from: e4989b17
---

Lokhu kushintshile ku-ModelCraft 0.8 (2026-11-01) nakwe-0.8.1 (2026-11-02), kuqhathaniswa ne-0.7. Ingxoxo {{ui:Renda isithombe…}} manje ingathumela isimo kwenye ihlelo, iphaneli yezinkalo yenza izinkalo ezibushelelezi ezikhululekile, nomsizi oxhunyiwe ungabeka isimo sonke ngomusho owodwa.

## Okusha

### Ukurenda

- **Ukukhetha injini.** {{ui:Renda isithombe…}} inohlu lwe-**Injini** phezulu kwe-Imodi. Izinjini zethu ezimbili, Fast ne-Path tracer, ziyizinzo futhi zisebenza noma kuphi. Ezinye izingenisi zigcina isimo njengephakheji (imodeli njengefayela le-USD, kanye nefayela lezilungiselelo elinamanani ezimpahla angokoqobo, izibani ezivuliwe, ilanga, isibhakabhaka, ukukhanya kwesithombe nekhamera) ukuze uyithathe ohlelweni lwenye. Isithombe esidwetshwe yinye inhlelo sitshela ukuthi yiyiphi inhlelo nenguqulo eyisebenzisile. Bona [Khetha ukuthi yiyiphi inhlelo edweba isithombe](topic:render-engines).
- **Vula kwenye inhlelo.** Uhlu lwe-Injini lungagcina isimo njengefayela le-USD, ifayela le-glTF (`.glb`) noma ifolda yeprojekthi ye-Unreal (`.zip`), kusibukeli nakusi-CadCraft Studio. Ku-Studio ingaphinda iqale i-usdview noma uhlelo lwekhompyutha lwefayela. Bona [Vula isimo kwenye inhlelo](topic:render-open-in).
- **Thumela kwinjini yemidlalo ngaphuma ku-Studio.** I-Studio ibhala isimo kuprojekthi ye-Unreal Engine futhi iyigcina ifanele njalo lapho ithunyelwa, ngohlangothi olulodwa. Okwakho okuhlelwe kulayini ongaloti i-CadCraft. Bona [Thumela isimo enjinini yemidlalo](topic:render-unreal).
- **Izinjini ezivela ku-add-ons.** I-add-on ingangeza injini kuhlu. Eyabhalwe nge-JavaScript idweba kusibukeli nakuStudio; eyodwa esebenza uhlelo idinga ukuvuma kwakho ku-Studio. Bona [Dweba isithombe ngenye inhlelo](topic:render-other-program) kanye [Engeza injini yokurenda nge-add-on](topic:render-engine-addons).
- **Chaza isimo.** Tshela umsizi wakho oxhunyiwe "intambama, imvula encane, izihlahla zesikhathi sokuwa, abantu esquareni" nendawo ye-ModelCraft iyasetha ngesinyathelo esisodwa: ilanga lihamba ngokusuka kusuku nesikhathi ukuze izithunzi zilandele, isibhakabhaka siyashintsha, izindawo ezimanzi ziyavela, nezihlahla nabantu kubekwa njengezinto eziyangempela ezinamathegi ongawafihla, ongawahambisa noma ongawasusa. Isikhathi sosuku, usuku noma inkathi yonyaka, nesimo sezulu (esicacile, esimpunga, inkungu, imvula encane, imvula, isiphepho) nazo zisebenza zodwa, futhi isicelo esilandelayo sishintsha isimo esifanayo. Inkungu ibonakala esithombeni esiphezulu esisebenza ngekhadi lezithombe; ezinye izinjini zibonisa isibhakabhaka, ukukhanya nezindawo ezimanzi. Imvula ayidwetshwa njengemigqa eyehla.

### Izinto zokwakha

- **Impahla yokwakha kusithombe esisodwa.** Nika i-ModelCraft isithombe sendawo (udonga, umgangatho, ilitha) futhi yenza impahla ephindwayo: ukukhanya esithombeni kuyalinganiswa, imiphetho yenziwa ihlangane, futhi imephu yombala, imephu yokungaboni kahle nemephu ejwayelekile zisebenziswa esithombeni. Kuyukuhlaziya izithombe okuyinqubo elula, ngesithombe sakho, ngaphandle kwemodeli eqeqeshiwe. Ukungaboni kahle kuyisilinganiso. Isithombe esilula, esisikwele nesiqondile sinika ithayili elingcono kakhulu; ipetheni eqinile njengezitini ingabonisa umbhalo ofiphele lapho kuhlanganiswa khona.

### Izinkalo

- **Izinkalo ezikhululekile.** Iphaneli ye-{{ui:Izinkalo}} yenza amajika nezinkalo ze-NURBS ezingasikiwe: amajika adlula kumaphoyinti, loft, ruled, extrude, revolve, ama-sweep ngaphezu kwerelu eyodwa noma ezimbili, izinkalo ezivela kunethiwekhi yamajika, ama-patch kusuka kuma-edge amane, match nokuxuba. Umphetho ngamunye oyabelanwa ulinganiswa njenge-G0, G1 noma G2 (igebe, i-engeli, ukushintsha kokugoba) ezinkalweni eziqondile, futhi umphetho owungcono kakhulu kunalokho okucele uvela kuphaneli yezinkinga nge-**Match** yokulungisa. Imigqa yezebra nemibala yokugoba idwetshwa kusuka ezinkalweni eziqondile. Amafayela e-STEP ne-IGES ayaphuma futhi angene. Bona [Izinkalo ezikhululekile (NURBS)](topic:nurbs-surfaces).

### Indawo namakamelo

- **Isithombe sesikethi ngaphansi.** {{ui:Ifayela}} › {{ui:Ngenisa isithombe sesikethi…}} iguqula isithombe sefoni sesikethi esidwetshwe ngesandla ibe imiphetho ngaphansi ngesikali osisho: iqembu elilodwa, nethegi ngayinye yombala wepeni. Iphepha litholakala futhi liqondiswe ku-kompyutha yakho, futhi akukho lutho olusiwe kwenye indawo. Bona [Yenza imodeli ngepulani yesayithi](topic:site-plan).
- **Hlobisa igumbi.** Khetha ifulowa bese usebenzisa {{ui:Lungisa}} › {{ui:Hlobisa igumbi…}}. Impahla yasekamelweni lokulala, yasekamelweni lokuhlala, yasekamelweni lokudlela, yasekhishini, yasebhavini noma yehhovisi ibekwa ngemithetho, ngasezindongeni nangaphandle kwezicabha nezinifasi, kuqembu elilodwa ongalisusa ngesinyathelo esisodwa. Yisimo esizenzakalelayo sokubuyekeza, hhayi idizayini. Bona [Ilabhulari yokuqala](topic:starter).

### Ukuprinta nge-3D

- **Ukusika okuthambekile.** Ukuhlukanisa kokuprinta kungasika izinkinga zakho ngama-degree angu-60, okunika izingxenye indawo eningi yokunamathisela. Izixhumanisi zimi ngokuqondile kunqamuko. Bona [Hlukanisa imodeli yokuprinta](topic:print-split).
- **Ukuhlola kokuprinta kuPhaneli yezinkinga.** Okutholakele kokuhlolwa kokuprinta nge-3D kubonakala kuPhaneli yezinkinga nezimaki emodelini, futhi Lungisa kuyawalungisa kusuka lapho. Bona [Izixhasi, ukuqina kwendonga, ukugodla nokulungisa](topic:print-tools).

### Kuzo zonke izinhlelo

- **Izilimi.** Usizo nezinhlelo kuza ngezilimi ezingu-54. Eziyishumi ziyizintsha: isiLithuania, isiLatvia, isiBosnia, isiMarathi, isiTelugu, isiAlbania, isiAfrikaans, isiFilipino, isiSwahili nesiUzbek. Izilimi ezingaphandle kwesiNgisi ziyizinhlobo zokuqala zomshini kuze kufundwe umuntu osebenzisa lelo limi, futhi izihloko zosizo zingase zisabhalwe ngesiNgisi.
- **Amadivayisi okufaka.** I-trackpad, ipeni, i-3D mouse, isilawuli somdlalo nezilawuli ze-MIDI zingaqhuba izinhlelo, zonke noma eyodwa.
- **Imigqa yebha yamathuluzi.** Ku-{{ui:Izilungiselelo}} › {{ui:Jwayelekile}} › Imigqa yebha yamathuluzi kusetha i-Wrap (njengangaphambili), imigqa emi-2 noma umugqa oyodwa. Ibha engafanele ishelelisa ngokuthi isuke esikhundleni sokuthatha isikhala emdwebeni. I-Wrap isahlala iyinzo.
- **Igridi yezakhiwo.** Izinkambu zezibani ze-ModelCraft zisebenzisa igridi ejwayelekile: izigaba ezingasongwa, amakholomu omkhiqizo nelebula, nokuma kwe-Compact. Izibalo ezithayiphiwe ezifana no-`2*450` ziyaqhubeka zisebenza.
- **Izinkinga.** Iphaneli yezinkinga (inkinobho yesexwayiso kubha yohlelo) yabelwana ngazo zonke izinhlelo. Ku-ModelCraft iqukethe ukuhlolwa kokuprinta nezexwayiso zokuqhubeka kwezinkalo.
- **Live.** Iseshini ye-Live TeamWork ikhombisa ukuthi ubani usephi. Bona [Modela ndawonye nge-Live TeamWork](topic:work-live).
- **Ama-add-ons.** Ama-add-ons angangeza izinjini zokurenda, njengalapho ngenhla.
- **Xhuma i-AI yakho.** Isivumelwano sezinto zamathuluzi nokuhlolwa kwezinhlelo ezingu-8 kudlule, ngamathuluzi angu-454 ngokubalwa konke. Ukuxhumana ngokuthepha kukodwa ku-Studio, isixhumi esiphethwe kwiwebhu sabasizi bewebhu, ukhiye wakho ku-Studio nephakheji eshicilelwe akukaqinisekiswa. Izinhlelo azinayo i-AI yazo. Bona [Sebenzisa i-ModelCraft nabasizi be-AI](topic:use-with-ai-assistants).

## Okulungisiwe ku-0.8.1

- **Isigaba samaklasi e-DWG.** Isigaba samaklasi efayela le-DWG sifundwe njengohlobo olungalungile, okungenza kwephuke ifayela ngesikhathi sokungenisa. Manje sifundwa kahle, ku-ModelCraft nasezinye izinhlelo ezifunda i-DWG.
- **Amathebulethi ngokuma.** Ukuphakama kwegridi okusele kuya ekhanvasini, futhi ilayawudi yeshidi iqala ku-760 amapikseli ububanzi noma ngaphansi kwalo. Isitayela seshidi se-ModelCraft nakho sinalolo shintsho.
- **Ulimi ku-Studio.** I-CadCraft Studio namaphakheji apakishiwe angashintsha ulimi ngesikhathi esisebenza; ngaphambili kwakuyisiNgisi kuphela. Lokhu akukahlolwa kuwo wonke amapulatifomu: sitshele uma ulimi lungashintshi.

## Akukakatholakali kulolu guqulo

- **Ayikho ekhodiwe ngesiqinisekiso.** Windows ingabonisa i-SmartScreen: khetha {{ui:Ulwazi olwengeziwe}}, bese {{ui:Yenza noma kunjalo}}. Ku-Mac, chofoza ngesokudla bese ukhetha {{ui:Vula}}. Izakhiwo ze-Store zimi, futhi isakhiwo se-iPad ne-iPhone asizange sakhiwe kabusha ngo-0.8.1.
- Enye inhlelo idweba isithombe ngaphandle kwe-add-on yenjini yokurenda, izithombe zamapanorama nezamakhamera amabili kanye nesibhakabhaka sesithombe ngenye inhlelo, nalo plugin evula isiteji se-Unreal akukakho. Amafayela ayabhalwa; i-plugin ayikakhishwa futhi ayikaqhutshwa ku-Unreal.
- Izinkalo ezikhululekile: i-G3 nelebula A ayilinganiswa noma ayizange zitshelwe, ukusikwa nemithamo kuzofika kamuva.
- Izithombe ezivela kwezinye izinhlelo azifani ngamaphikseli nezethu: kuhambisana kuphela ikhamera, ilanga, izibani nokukhanya.
- Ukulungiswa kwe-0.8.1 kokushintsha ulimi ku-Studio akuhlolwanga kuwo wonke amapulatifomu.

Konke okunye kusencwadini ethi [Akukakwakhiwa](topic:not-built-yet). Ngokuthi uguqulo olwedlule, bona [Okusha ku-0.7](topic:whats-new-0-7).
