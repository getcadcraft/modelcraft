---
title: Yenza izinto ezinama-nodi
summary: Yakha impahla kusuka ku-texture, izithombe nezibalo ku-workspace ethi Ukushadisa, ubone kumbono njengoba uqhubeka, bese upenda ubuso ngayo.
keywords: ukushadisa, bhaka, ukubhaka, ukubhaka kwe-texture, ukuvinjelwa okuzungezile, ao, ukugoba, ukubhaka okujwayelekile, phezu kwesiqukathi, ukuphezulu okuphansi, imephu yokukhanya, idekali, idekali, isitika, logo, ilebhuli, ukupenda kwe-texture, ukupenda i-texture, ibhulashi, impahla, izimpahla, materialx, mtlx, openpbr, standard surface, umtapo wezimpahla, librarycraft, isethi ye-texture, pbr, ngenisa ama-texture, zip, cc0, hudula, inodi, amanodi, umhleli wenodi, shader, texture, procedural, umsindo, ichekhi, voronoi, amaseli, amagagasi, izitini, amathayili, ukhuni, imabula, ukuguquka kombala, ukungcola, ukuguga kwemiphetho, ibhendi lombala, xuba, ukuvuvuka, imephu ejwayelekile, ukuqina, ubungcwebe, ukungaboni, ukusika, ukukhipha, ukukhanya, ukuqhathaniswa, ukuhlelwa kwebhokisi, triplanar, uv, isithombe, i-texture yesithombe, openpbr
from: d7368b21
---

Impahla eyenziwe ku-workspace ethi **{{ui:Ukushadisa}}** ingeyefayela. Iyigrafu encane: **amanodi** adala ama-texture, izithombe nezinombolo, axhunyiwe ku-**Okuphumayo kwempahla**, okungenayo kuyisimo sobuso — umbala oyisisekelo, ukuqina, ubungcwebe, normal, ukungaboni, ukukhipha nezinye izingxenye zemodeli ye-OpenPBR. Upenda ubuso ngayo njengalowo nalowo mpahla yomtapo, futhi lonke ushintsho buvela kumbono ngesikhathi esisodwa.

## Vula

Khetha {{ui:Ukushadisa}} ohlwini lwe-workspace. Ibhodi lokubuka le-3D lihlala phezulu kwiscreen, futhi **umhleli wenodi** uthatha ingxenye engezansi. Iphaneli ngakwesokudla ibhala izimpahla zefayela.

- {{ui:Impahla entsha}} yenza eyemnyama-mhlophe enoKuphumayo kwempahla kuphela.
- **Yenza ikhophi ehlelekayo yempahla yomtapo** iguqula i-brick, igatsha, ithayili nezinye zibe yigrafu ongayishintsha: i-texture yayo ifika ngenodi ye-Library texture, nezintaba zayo ngenodi ye-Bump.
- {{ui:Phenda ngayo}} upenda ubuso noma amaqembu akhethiwe, noma ikhetha impahla yethuluzi lokupenda. Izimpahla zethuluzi lokupenda zibhale nezefayela ngaphansi kwe-**Kulo fayela**.
- {{ui:Phinda}} no-{{ui:Susa}} zisebenza empahleni oyihlelayo. Ukususa akukwazi ukuhlehliswa; ubuso obupenteke ngayo bubonisa umbala ozenzakalelayo kuze kube usubuphenta futhi.

## Izimpahla zomtapo

Ephaneli, **umtapo wezimpahla (Library)** ubhala izimpahla zomtapo, ngayinye inokubuka okwenziwe yi-path tracer ye-CadCraft. Zisethi ze-texture ezikhishwe ngaphansi kwe-CC0, ezinikezwa kubantu ezenzile.

- Chofoza eyodwa ukuze uyiletha efayelweni (izithombe zayo ziza nayo) futhi, uma ubuso noma amaqembu akhethiwe, uwapenda.
- Hudula eyodwa phezu kobuso noma iqembu kumbono ukuze upende kuphela lowo.
- Iba yenye yezimpahla zefayela: shintsha amanodi ayo njengoba unjalo nanoma iyiphi enye. Ukubongwa kwayo kuveza ephaneli futhi kuhlala efayelweni.

## Ngenisa isethi ye-texture

{{ui:Izithombe noma i-zip…}} noma {{ui:Ifolda…}} ngaphansi kwe-**Ngenisa isethi ye-texture** zenza impahla kusuka kusethi yamamephu. Amamephu atholwa ngamagama asemagameni amafayela awo: color, albedo, diffuse noma basecolor; roughness (noma gloss, eguqulwa ibe roughness); metalness noma metallic; normal (OpenGL noma DirectX, kusuka ku-`gl` / `dx` egameni); height noma displacement; ambient occlusion; opacity; emission. Amamephu apakishiwe (ARM, ORM) ayashiywa ngaphandle. Ithayili liqala ku-1 × 1 m: setha usayizi wangempela kuKuphumayo kwempahla. I-height iya ku-displacement nesikali sayo ku-0 — khulisa isikali ukuze uyisebenzise kuma-mesh.

## MaterialX

I-MaterialX ifomethi evulekile ezinye izinhlelo ze-3D nezokurenda ezisebenzisa ukudlulisa izimpahla.

- {{ui:Thumela njenge-MaterialX…}} igcina impahla oyihlelayo: amanani ayo, nayo yonke i-texture njengesithombe se-PNG ngaseceleni kwefayela le-`.mtlx` (ku-zip). Khetha i-shader ibhalwe ngayo: **OpenPBR Surface** (MaterialX 1.39, imodeli efanayo ne-ModelCraft isebenzisa) noma **Standard Surface** (MaterialX 1.38, ezinye izinhlelo eziyifunda manje). Ama-texture ayabekwa ngokuhlelwa kwe-UV ngamamitha; ukuhlelwa kwebhokisi nokwe-triplanar kubhalwa njenge-UV.
- {{ui:Ngenisa i-MaterialX…}} (noma {{ui:Kusukela kufolda…}}) ifunda amafayela `.mtlx` anama-shader e-OpenPBR, Standard Surface, UsdPreviewSurface noma glTF PBR. Nika izithombe futhi, noma i-zip yakho yonke into: isithombe sitholakala ngendlela yaso, ngegama layo, noma ngegama layo nohlobo olunye lwesithombe (i-`.exr` amafayela asho ingafika njenge-`.jpg` eduze kwayo). Ama-texture, amamephu ajwayelekile, izibalo, izixube nokuqhathaniswa kufika njengamanodi; okunye konke kugcina inani laso, nomugqa wesimo ubhala okushiyiwe.

## Amadekali

Idekali isithombe esibekwe phezu kobuso — ilogo, uphawu, ilebhuli, isitheni — nempahla yaso.

- Setha **Ububanzi bedekali elisha**, bese {{ui:Beka idekali…}} (noma {{ui:Idekali}} kwithuluzi), khetha isithombe se-PNG, JPEG noma WebP bese uchofoza ubuso. Isithombe siprojektwa phezu kobuso lapho, sigcina ukulingana kwaso; izingxenye ezibonakala ngaphuma kwe-PNG ziyahlala zibonakala ngaphuma.
- Ikhona eqenjini noma kwisakhi ochofoze kuso futhi ihamba nalo. Imboza ubuso ngaphakathi kwebhokisi layo obubheke ngendlela efanayo, bese imi emaphethelweni alo lapho ikhona.
- Idekali ngayinye inempahla yayo, ibizwa ngokuthi **Decal: <isithombe>**, ohlwini lwefayela: yihlele njengoba unjalo nanoma iyiphi enye (roughness, bump, ukukhanya). I-{{ui:Impahla}} eduze kwedekali iyayivula.
- Eduze kwedekali ngayinye: ububanzi bayo (ubude buyalandela isithombe), {{ui:Jikisa}} (ukujika ngekota) no-{{ui:Susa}}. Amadekali agcinwa nempahla yefayela, ngaphandle kwe-Undo.
- Abonakala emcabangweni oshadiswe, emirenjini esheshayo nasezithombeni ezinekhwalithi ephezulu.

## Penda ku-texture

{{ui:Penda ukwakheka}} (noma {{ui:Penda}} ngaphansi kwe-**Penda ku-texture**) yenza inkomba ibe yibhulashi elizungezile. Hudula ubuso oluthwele enye yezimpahla zalo fayela: ibhulashi lipenda isithombe esingemuva kombala wayo oyisisekelo.

- Kukhona i-mesh ipenda ngokulandela ama-UV ayo (yenze ingabe nayo ku-workspace ye-UV kuqala); kwezinye izinhlangothi ipenda ngokuhlangana ubuso, ngakho ukupenda kuphindeka nethayili lempahla.
- Impahla okuyimbala oqondile oyisisekelo wayo ithola isithombe esisha se-512 × 512 salowo mbala ukuqala lapho uyipenda. Impahla enombala oyisisekelo ovela kwamanye amanodi idinga inodi yesithombe exhunyiwe ku-Base color.
- Setha umbala webhulashi, usayizi (ngamapikseli esithombe), amandla nobulukhuni ephaneli. {{ui:Hlehlisa umkwapho}} noma Ctrl+Z (ngenkathi upenda) ibuyisa umkwapho, kuze kube ngu-20 okokugcina.
- Isithombe esipentiwe sigcinwa efayelweni. Izimpahla zomtapo azipentwa: yenza ikhophi ehlelekayo kuqala.

## Bhaka ama-texture

**Bhaka ama-texture** ibhala okwenziwa yisimo nesimo sesiteji ebuso ibe yizithombe ngama-UV ka-mesh.

- Khetha i-mesh enama-UV (yenze ingabe nayo ku-workspace ye-UV), thikisha amamephu bese ucindezela {{ui:Bhaka}}:
  - **Ukuvinjelwa okuzungezile** — ukuthi iphoyinti ngalinye livulekile kangakanani: amakhoni, izimbobo nezindawo ngaphansi kwezinye izinto ziba mnyama. Konke okubonakala emodelini kuyashadisa, kuze kube sekuguqukeni kokuvinjelwa.
  - **Ukugoba** — kukhanya emaphethelweni angaphandle, kumnyama emakhoneni angaphakathi, kube mpunga-mnyama ezindaweni ezilinganayo nezigobile kancane, ngaphezu kobubanzi bomphetho owusethile.
  - **Okujwayelekile kusuka kwento enemininingwane eminingi** — khetha nekhophi enemininingwane eminingi: inemininingwane yobuso bayo ibhalwa njengemephu ejwayelekile yento elula (into enamatrayangela amancane ibhakwa phezu kwayo). Ibanga lokusesha ngumgama phakathi kwezinhlangothi ezimbili ezingaba khona.
  - **Ukukhanya** — ilanga lendawo yemodeli nosuku (Style) namathunzi alo, kanye nesibhakabhaka, njengemephu yokukhanya.
- Izithombe ziyahlanganyela efayelweni futhi zivela kumanodi ezithombe. Uma impahla oyihlelayo inenodi ethi **Dirt and edge wear**, ifunda ukuvinjelwa okusha nokugoba ngokushesha.
- Amarray amaningi nge-texel ayenza ukuvinjelwa nokukhanya kube bushelelezi, kuthathe isikhathi eside. Ukubhaka kusebenza ezinqubeni zomkhuhlane wekhompyutha ngasemuva; {{ui:Yima ukubhaka}} iyayimisa.

## Yakha igrafu

1. {{ui:Engeza inodi…}} (noma {{key:Shift+A}} kumhleli wenodi) yengeza inodi phakathi komhleli.
2. Hudula kusuka kuchashaza lokukhiphayo (ngakwesokudla kwenodi) kuya kuchashaza lokungenayo (ngakwesobunxele kwenodi) ukuze uxhumanise. Ukuxhumana okwesibili kokungenayo kuyayishintsha eyokuqala; hudula okungenayo okuxhunyiwe ukuze ukukhulule.
3. Okungenayo okungaxhunyiwe kukhombisa inani laso: bhala inombolo noma khetha umbala. Izilungiselelo zisezansi kwenodi ngayinye.

Hudula inodi ngesihloko sayo ukuze uyinyakazise, hudula indawo engenalutho ukuze ushelelise, bese usebenzisa ivili ukuze usondeze. {{key:Delete}} isusa amanodi akhethiwe noma ixhumanisi, {{key:Mod+Z}} iyahlehlisa, {{key:Mod+D}} iyaphinda, {{key:F}} ibonisa wonke amanodi. Yonke into eshintshayo iyinyathelo elilodwa lokuhlehlisa kumhleli wenodi. Ukuhlehlisa okuyimodeli akushintshi izimpahla.

| Amanodi | Okwenziwayo |
|---|---|
| Ukuhlelwa kwe-texture | Lapho iphoyinti lisendaweni yethayili: liphindaphinde, liguqule endaweni, liphendule ngekota. |
| Value, Color | Inombolo, umbala. |
| Picture | Isithombe sefayela (esafika kanye nemodeli eyenganiswe, noma esengeziwe nge-{{ui:Engeza isithombe…}}). Khetha **Colors** ngesithombe sokuthwebula nge-**Data** ngemephu yokuqina noma ejwayelekile. |
| Library texture | I-texture yempahla yomtapo, ukuqina nobude bayo. |
| Checker, Noise | Izikwele; umsindo oshelelezayo ofrakhali nemininingwane, ukuqina nembewu. |
| Voronoi cells, Waves, Gradient | Amaseli (umgama ngokuya kwephoyinti eliseduze, imiphetho phakathi kwamaseli, umbala ngeseli ngayinye); amabhande aphuma phansi, phezulu noma adayisa, njengesine, isaw noma itriyangela, agobile ngomsindo; ukuguquka kwemigqa, kwe-quadratic, okuyisangqa nokwebhola. |
| Bricks, Tiles | Imigqa yezitini enokufuduka okuqhubekayo, noma igridi yamathayili: imibala, umbhobo noma ugcwele, igebe nokuqeqeshwa ngamamitha, ubude bokuvuvuka, inombolo engakhethiwe ngayinye. |
| Wood, Marble | Imisele ecaleni kwegatsha ngezinwele ezincane; imitsha egoqwe ngumsindo. |
| Dirt and edge wear | Igqoka imiphetho evuthayo futhi ingcolise izikhala ngokugoba nezithombe zokuvinjelwa zemesh ([Bhaka ama-texture](topic:shading#bake-textures) iyazidala; noma setha izilungiselelo zazo ezimbili zezithombe, ku-UV layout yemesh: beka impahla ngokuhlelwa kwe-UV). Ngaphandle kwazo akushintshi lutho. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Umsebenzi wombala. |
| Math, Map range | Izibalo ezinombolweni (engeza, phindaphinda, amandla, smooth step nokunye). |
| Bump, Normal map | Normal ngokusuka kukuphakama (Bump) noma ezithombeni zemephu ejwayelekile (Normal map: khetha icala lohlobo oluhlaza). |

## Okuphumayo kwempahla

Izilungiselelo zayo zichaza ukuthi i-texture ihlala kanjani ebusweni:

- **Ububanzi bethayili** ne-**Ukuphakama kwethayili**: amamitha angaki ethayili eyodwa ye-texture imboza. Konke igrafu eyenzayo iphindaphinda ethayilini ngaphandle komphetho.
- **Kubekwe yi**: **Ama-UV** alandela ubuso (ukuhudula kwezinhlangothi: ngabunye ubuso; ama-mesh: ama-UV awo, i-UV unit eyodwa = ithayili eyodwa), **Ibhokisi** liprojekthela kusuka ku-eksisi eseduze kakhulu kwezintathu, **Triplanar** ixuba ukuprojekthela kwezintathu ezindaweni ezithambekile (**Ukuxuba ukubukhali**: okuphezulu kuyixube elinzima).
- **Amandla ejwayelekile** ahlahla inani lokungenayo elijwayelekile. **Isikali sokuqhathaniswa** sisetha ukuthi ukungenayo kokuqhathaniswa kunyakazisa kangakanani amaphoyinti e-mesh.
- {{ui:Izingenayo eziningi}} ibonisa okunye kwezingenayo ze-OpenPBR: coat, fuzz, subsurface, thin film, transmission nemibala yazo.

## Ezithombeni ezinekhwalithi ephezulu

I-path tracer ifunda umbala oyisisekelo, ukuqina, ubungcwebe, ukungaboni, normal nokukhipha kusuka egrafini njengoba zishintsha ebusweni. Noma yikuphi okunye okungenayo okuxhunyiwe (isibonelo i-coat eshintshayo) isetshenziswa ngesilinganiso sayo; umugqa wephaneli ukhombisa lokho. Ukusika kusuka ku-opacity texture kubonisa isimo sakho, nethunzi layo liba nokungaboni okulinganayo. I-texture ekhanyayo ikhanyisa okubhekene nayo, ngaphandle kokuthathwa njengelambu.

**Ukuqhathaniswa** kuhambisa amaphoyinti e-mesh kuphela, ngakho engeza i-Subdivision modifier ukuze uthole imininingwane ([Ama-modifier](topic:modifiers)). Ubuso obusunduzwa/hudulwa bugcina ukwakheka kwabo bese buthola ukuvuvuka kusuka ku-normal.

:::tip
Kukhompyutha enayo i-WebGPU igrafu yenziwa ekhadini lezithombe; kungekho, enziwa kuprosesa. Umphumela ufana.
:::
