---
title: Waxa cusub ee 0.9 (hore)
summary: Qaybta daabacaadda oo leh goynteenna iyo u dirista USB, Klipper, OctoPrint iyo PrusaLink, goynta rasiinka iyo kordhinnada faylka, socodka agabka, kordhinnada mataanaha lamahaha iyo qaybta warshadda, fillets-ka NURBS, qaro iyo waafinta scan-ka, AR goobta iyo toddobo hababka qaanso.
keywords: waxa cusub 0.9, nooca hore, waxa cusub, waxa cusub, qoraallada nooca, changelog, 0.9, qaybta daabacaadda, daabacaad 3D, u dir daabacaha 3D, goynta, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, rasiin, daabacaadda rasiinka, goo, sl1, ctb, anycubic, tijaabada ifka, socodka agabka, mataanaha lamahaha, plc, qaylo, nurbs, fillet, qaro, waafi scan, ar, goobta, hababka qaanso, unugyada, waxa cusub, qoraallada nooca, changelog, isbeddelo, 0.8, 0.8.1, nooca, astaamaha cusub, injinka bixinta, injin, ka fur, usd, gltf, unreal, injinka kordhinta, nurbs, surfaces, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, ku sheeg muuqaalka, muuqaal, cimilada, waqtiga maalinta, xilli, kaaliye, agab sawir ka, sawir, sawir gacmeed, alaab, qol alaab ku rakib, jeexid, jeexid, hubinta daabacaadda, dhibaatooyin, gridka hantida, laydhadhka, luuqadaha, aaladaha gelinta, safafka qalabka, dwg, toos
from: 2717d1b1
---

Tani waa waxa isbeddelay ModelCraft 0.9, marka la barbar dhigo 0.8.1. ModelCraft hadda wuxuu gaarayaa daabacaha iyo sariifka warshadda: waxaad walxaha ku dhigi kartaa sariifka daabacaadda oo waad u dir kartaa adigoon u soo saarin, goo filaamenti ama rasiin, oo waxaad habayn kartaa khadka gacan-qabsiga agabka. Tani waa CadCraft Studio 0.9 iyo sideeda kordhinood; inta badan astaamaha cusub ee hoose waa kordhinno.

## Cusub

### Daabacaadda 3D

- **Qaybta daabacaadda.** Riix {{ui:Print stage}} qalabka hore. Ku dar walxaha Library sariifka daabacaha, habee, eeg lakabyada la goyay oo riix {{ui:Send to 3D printer}}, adigoo aan STL u soo saarin. Waxay ka tirsan tahay kordhinta 3D Print, taas oo furan si caadi ah oo la saari karo sida kordhin kasta. Eeg [Dhig walxaha sariifka daabacaadda oo u dir daabacaha](topic:print-stage).
- **Goyntayada filaamenti ee gaarka ah.** {{ui:CadCraft basic (included, fastest)}} waa goynta liiska **Slicer** ee kaadhka: darbiyo, maqaarro, dhufashada, taageerooyin iyo skirt, oo ku shaqeeya worker si bogga u sii wado inuu isticmaal karo. {{ui:Preview layers}} oo leh shiishadda **Layer** wuxuu muujiyaa lakabyada ka hor intaadan dirin. Profiles-yada daabacaha sida nooca Ender-3 iyo Prusa MK4 waxay leeyihiin G-code bilowga u gaar ah.
- **U dirista.** Ku USB (Chrome ama Edge kombuyuutar, bogga oo furan), ama Klipper (Moonraker), OctoPrint ama PrusaLink shabakadaada. Waxba ma xidhmo ama ma dirto ilaa la riixo, dirista waxay horey u weydiisaa.
- **Goyntayada kale.** Kiri:Moto, PrusaSlicer iyo OrcaSlicer waa kordhin u gaar ah, oo damsan caadi ahaan; ku dar kaadhka ama {{ui:Settings}} › {{ui:Add-ons}}. PrusaSlicer iyo OrcaSlicer waxay isticmaalaan nuqulkaaga ku rakiban CadCraft Studio. Kordhinta daabacayaasha Bambu Lab waxay goysaa OrcaSlicer-kaaga iyo presets-yada P2S, waxayna u baahan tahay Studio kombuyuutar.
- **Daabacaadda rasiinka.** Kordhinnada rasiinka (damsan) waxay sameeyaan sawirro lakab ah oo shaashadda daabacahaaga u diyaar ah, leh godadka dhexe iyo godadka hawo, raft iyo taageerooyin, muuqaal lakabka, iyo waqti, rasiin iyo qiimaha. Kordhinnada faylka waxay qoraan Elegoo GOO, SL1, Chitubox (CBDDLP iyo CTB 2 ilaa 5) iyo Anycubic (PWMX iyo PWS). Tijaabada ifka rasiinka waxay samaysaa tallaabooyin shan ifka ah. Eeg [Goynta daabacaha rasiinka](topic:resin-printing).
- **Lama bedelin.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, qalabka daabacaadda iyo Split for printing waxay shaqeeyaan sida 0.8. Eeg [Diyaari moodeelka daabacaadda 3D](topic:print-3d).

### Socodka agabka, Digital twin iyo Qaybta warshadda

Saddexdan waa kordhino, damsan ilaa aad furto {{ui:Settings}} › {{ui:Add-ons}}, mid kastaana wuxuu leeyahay caawimaadiisa u gaar ah marka uu furmo.

- **Socodka agabka.** Panel magaciisu yahay Material flow wuxuu habeeyaa conveyors, stations, buffers iyo jidadka AGV ee muuqaalka 3D, wuxuu socodsiiyaa simulation la beeray, wuxuu dib u ciyaaraa, wuxuuna muujiyaa throughput, waqtiyada hoggaaminta iyo safafka, natiijooyinkana waxa lagu kaydiyaa CSV. Dalabyada waxa laga soo qaadi karaa fayl CSV. Unugyada robot-ka waa la hubin karaa oo la soo saari karaa. Xidhiidhka PLC wuxuu leeyahay habka pilot-ka iyo habka dhabta ah oo Modbus TCP ku shaqeeya, taas oo shaqeysa oo kaliya CadCraft Studio.
- **Digital twin.** Wuxuu akhriyaa habaynta Material flow wuxuuna ku socodsiiyaa PLC pilot ah, oo leh khaladaad aad u qasbi karto, tijaabooyin kayd, isbarbardhig habayn iyo bill of materials.
- **Qaybta warshadda.** Wuxuu stations u beddelaa mashiinno iyo unugyo, wuxuuna akhriyaa iyaga toos ama simulator-ka, wuxuuna haya safka shaqada iyo OEE fudud. Waxay akhrisaa oo kaliya: nooca hadda uma qori karo mashiin ama PLC.

### Surfaces, moodeelada iyo naqshadaynta

- **Fillets, qaro iyo booleans ee NURBS.** Panel-ka {{ui:Surfaces}} wuxuu leeyahay {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} iyo Union, Subtract iyo Intersect, mid kastaana leh kala duwanaanshaha la cabbiray. Eeg [Dusha bilaa qaab (NURBS)](topic:nurbs-surfaces).
- **Waafi dusha scan-ka.** Dooro mesh la scan-gareeyay oo isticmaal {{ui:Fit surfaces to the scan}} kooxda **Scan**, kadibna {{ui:Stitch the surfaces to a solid}}. Waa waafin hore, ma aha xirmo buuxda oo dib-u-hagid ah.
- **Xidhiidh toos ah oo ka yimid modeller .3dm.** Hal jihood, Rhino 8 ama Grasshopper, waana u baahan tahay CadCraft Studio isla kombuyuutarka. Eeg [Ku hay moodeelka .3dm toos](topic:live-3dm-link).
- **Ku arag moodeelka goobta.** {{ui:View on site (AR, phone)}} menu-ga {{ui:Views}} wuxuu ku shaqeeyaa taleefanka Android oo leh Chrome. Eeg [Ku arag moodeelka goobta taleefanka Android (AR)](topic:ar-on-site).
- **Hababka qaanso.** Liiska hoos-u-dhaca {{ui:Arc methods}} wuxuu bixiyaa toddobo siyood oo qaanso ah, oo ay ku jiraan {{ui:3-Point}} iyo {{ui:Start, Center, End}}.
- **Unugyo badan.** Miisaanka (kg, lb, t, ton) iyo heerkulka (degrees C, F, K iyo R) waa la fahmaa meelaha aad ku qortid qiyamka leh unugyada.

## Dhammaan barnaamijyada

- **Qoraallada hoose.** Qoraalka hoose badhanada iyo calaamadaha la gooyay waa Bootstrap tooltip.
- **Talo bilowga la xidhi karo.** Kaadhka talada ee goobta sawirka banaan wuxuu leeyahay xidh yar oo x ah. Wuu xiran yahay, palette-ka amarku wuu tusi karaa mar kale.
- **Safafka tabka ee la jiid karo.** Safka tabka panel-ka oo aan ku habboonayn wuu jiidaa halkii uu ka go'ayn lahaa.
- **Magacyada tabka.** Markii dukumeenti furan yahay, tabka browser-ka wuxuu ka bilaabaa magaca dukumeentiga, kadibna ModelCraft iyo CadCraft. Dhibic ayaa hore u imanaysa intuusan kaydin.
- **Habaynta.** {{ui:Settings}} › {{ui:General}} › Layout wuxuu hayaa habaynta liiska hoos-u-dhaca, oo leh ikhtiyaar ah in habayn loo isticmaalo barnaamijkan oo keliya, iyo badhan dib u dejiya habaynta.
- **Luuqadaha.** Liiska luuqadaha ee Settings wuxuu raacaa faylalka luuqadda ee dhismuhu leeyahay. Luuqadaha aan Ingiriisiga ahayn waa qabyo mashiin.
- **Live iyo Library.** Live TeamWork wuxuu muujiyaa cursors-ka iyo magacyada toosa, Library ururinnadu waxay siiyaan barnaamij kasta ururin caadi ah.

## Waa la hagaajiyay

- {{ui:Play}} wuxuu noqdaa {{ui:Pause}} markii animation ciyaarayo, {{key:Space}} wuu ciyaaraa oo sii dhejiyaa markii timeline-ku furan yahay.
- Sawirka aan dhaqdhaqaaqa lahayn wuxuu u noqdaa WebGL markii kaarka muuqaalka aan bilaabi karin path tracer-ka. Muuqaalka render-ka toosa wuu wali tusi karaa khaladka; tan lama hubin kombuyuutar Windows ah oo leh darawalkaas.
- Socodka agabka habka dhabta ah wuu mar kale isku xidhaa markii xidhiidhku joogsado jawaabaha khaladka PLC.

## Xaddidaadda runta

- Wax lagama daabacin daabacaha dhabta ah: ma filaamenti, ma rasiin, ma Bambu Connect. Faylalka rasiinka waxaa akhriyay kaliya akhristayaasha CadCraft.
- Digital twin iyo Qaybta warshadda waxaa lagu tijaabiyay simulator-ro iyo jawaabo la yaqaan oo keliya, iyadoo aan PLC, khad ama protocol dhab ah lahayn. Waa caawimo hubin, ma aha xaqiijin badbaado. Fiisigiska wuxuu daboolaa sanduuqyada oo keliya, ilaa sideed culeys.
- Xidhiidhka Rhino iyo Grasshopper weligiis ma shaqayn barnaamijyada dhabta ah.
- Luuqadaha aan Ingiriisiga ahayn waa qabyo mashiin.

## Hore: 0.8 iyo 0.8.1

Tani waa waxa isbeddelay ModelCraft 0.8 (2026-11-01) iyo 0.8.1 (2026-11-02), marka la barbar dhigo 0.7. Haddaba {{ui:Render a picture…}} wuxuu hadda u diri karaa muuqaalka barnaamij kale, panel-ka Surfaces wuxuu sameeyaa dusha bilaa qaab oo jilicsan, kaaliyihii aad xidhiidhiso wuxuu dejin karaa muuqaal oo dhan hal jumlad.

### Cusub

**Render-ka**

- **Doorashada Engine.** {{ui:Render a picture…}} wuxuu leeyahay liiska **Engine** ee ka sarreeya Mode. Labadayada injin ee aan lahayn, Fast iyo Path tracer, ayaa caadi ah oo meel walba shaqeeya. Galalka kale waxay kaydiyaan muuqaalka sida xirmo (moodeelka sida faylka USD, iyo faylka dejinta oo leh qiyamka agabka saxda ah, laydhadhka shidan, qorraxda, cirka, iftiinka iyo kaameraha) si aad ugu qaaddo barnaamij kale. Sawir ay barnaamij kale sameeyay wuxuu sheegaa barnaamijka iyo nooca sameeyay. Eeg [Dooro barnaamijka sawirka sameeya](topic:render-engines).
- **Ka fur barnaamij kale.** Liiska Engine wuxuu muuqaalka u kaydin karaa faylka USD, faylka glTF (`.glb`) ama fargeeska Unreal (`.zip`), browser-ka iyo CadCraft Studio. Studio wuxuu sidoo kale bilaabi karaa usdview ama barnaamijka kombuyuutarka ee faylka. Eeg [Ka fur muuqaalka barnaamij kale](topic:render-open-in).
- **U dir injinka ciyaarta Studio-ka.** Studio wuxuu muuqaalka ku qoraa mashruuc Unreal Engine, wuxuuna ku hayaa tallaabo kasta oo dirista, hal jihood oo keliya. Tafatirkaaga wuxuu ku jiraa layer aan CadCraft weligiis qorin. Eeg [U dir muuqaalka injinka ciyaarta](topic:render-unreal).
- **Injinno kordhinnada ka yimid.** Kordhin wuxuu liiska ku dari karaa injin. Mid JavaScript ku qoran wuxuu sawirka ka sameeyaa browser-ka iyo Studio; mid barnaamij socodsiiya wuxuu u baahan yahay ogolaanshaadaada Studio. Eeg [Sawirka ku samee barnaamij kale](topic:render-other-program) iyo [Ku dar injin render ah kordhin](topic:render-engine-addons).
- **Ku sheeg muuqaalka.** Ku sheeg kaaliyahaaga xidhiidhsan "dusk, light rain, autumn trees, people on the plaza" ModelCraft wuxuu dejiyaa tallaabo keliya: qorraxdu waxay u guurtaa taariikhda iyo waqtiga si hooska u raaco, cirku wuu isbeddelaa, qoyan oo aad u qoyan ayaa soo muuqda, geedaha iyo dadka waxaa lagu meeleeyaa sida walxo dhab ah oo tags-yo aad qarin karto, u guuri karto ama tirtiri karto. Waqtiga maalinta, taariikhda ama xilliga, iyo cimilada (cad, daruur, dhiig, roobka khafiifka, roob, duufaan) waxay sidoo kale shaqeeyaan keligood, codsi dambe wuxuu bedelaa isla muuqaalkaas. Dhiigga waxa lagu muujiyaa sawirka tayada sare ee kaadhka muuqaalka; injiniyada kale waxay muujiyaan cirka, iftiinka iyo dusha qoyan. Roobka lama sawiro sida xariiqyo dhulka u dhaca.

**Agabka**

- **Agab sawir keliya ka dhigo.** Ii sii sawir dusha (darbi, dhul, dhagax) ModelCraft wuxuu sameeyaa agab la isku dhejin karo: iftiinka sawirka oo dhan waa la jilicsiiyay, geesaha waa la isku xidhay, khariidadda midabka, khariidadda xoogga iyo khariidadda jihada waxaa laga shaqeeyay sawirka. Waa habaynta sawirka oo keliya oo sawirkaaga, ma jiro moodel la tababbaray. Xoogga waa qiyaas. Sawir fudud, labajibbaaran oo toosan ayaa siiya tiilka ugu fiican; qaab xoog leh sida biyaha ayaa muujin kara hal dhiig xagga xidhiidhka.

**Dusha**

- **Dusha bilaa qaab.** Panel-ka {{ui:Surfaces}} wuxuu sameeyaa curves NURBS iyo dusha aan la jarin: curves oo dhibcaha ka mara, loft, ruled, extrude, revolve, sweeps oo ku socda hal ama laba rail, dusha curve network-ka ka soo baxa, patches afar geesood ka, match iyo blend. Geesood kasta oo la wadaago waxa lagu cabbiraa G0, G1 ama G2 (furitaan, xagal, kor u kac curvature) dusha saxda ah, geeska ka xun intaad weydiisatay wuxuu ka muuqdaa panel-ka Problems oo leh hagaajin **Match**. Xariiqyada zebra iyo midabada curvature waxay ka muuqdaan dusha saxda ah. Faylalka STEP iyo IGES way baxaan oo way soo galaan. Eeg [Dusha bilaa qaab (NURBS)](topic:nurbs-surfaces).

**Goob iyo qolal**

- **Sawir gacmeed oo dhul ku jira.** {{ui:File}} › {{ui:Import a sketch photo…}} wuxuu sawirka telefoonka ee sawirka gacanta u beddelaa geesood dhul ku jira cabbirka aad sheegto: hal koox, oo leh calaamad midkasta oo qalinka midabkiisa. Warqadda kombuyuutarkaaga ayaa la helaa oo la toosiyaa, wax meel ah lama dirin. Eeg [Ku dhig goobta qorshaha](topic:site-plan).
- **Qolka alaab ku rakib.** Dooro dhul oo isticmaal {{ui:Organize}} › {{ui:Furnish a room…}}. Qolka hurdada, qolka fadhiga, qolka cunta, jikada, musqulaha ama alaabta xafiiska ayaa lagu meeleeyaa xeerar, darbiyada ag, iyo si ka fog albaabbada iyo daaqadaha, hal koox oo aad ka qaadi karto hal tallaabo. Waa habayn caadi ah oo aad dib u eegtid, ma aha naqshad. Eeg [Maktabadda bilowga](topic:starter).

**Daabacaadda 3D**

- **Jeexyada janjeeran.** Split for printing wuxuu jeexyadiisa u janjeeri karaa ilaa 60 darajo, taasoo siiya qaybaha meel dheeraad ah oo ku dhejisa. Xidhidhadu waxay ku taagan yihiin jeexda toosan. Eeg [Kala qaybi moodeelka daabacaadda](topic:print-split).
- **Hubinta daabacaadda ee Problems.** Natiijooyinka hubinta daabacaadda 3D waxay ka muuqdaan panel-ka Problems oo leh calaamado moodeelka dushiisa, Repair wuxuu ka hagaajiyaa. Eeg [Taageerooyin, dhumucda darbiga, godan iyo hagaajin](topic:print-tools).

**Barnaamij kasta**

- **Luuqadaha.** Caawinta iyo barnaamijyadu waxay yimaadaan 54 luuqadood. Toban waa cusub: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili iyo Uzbek. Luuqadaha aan Ingiriisiga ahayn waa qabyo mashiin ilaa afka-hooyo uu akhriyo, mawduucyada caawinta qaarkood weli Ingiriisi ayaa ah.
- **Aaladaha gelinta.** Trackpad, qalin, mouse 3D, gacan-ciyaareed iyo kontoroolada MIDI waxay wadi karaan barnaamijyada, dhammaantood ama mid keliya.
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › Toolbar rows wuxuu dejiyaa Wrap (sida hore), 2 safaf ama 1 safaf. Qalabka aan ku habboonayn wuu jiidaa halkii uu meel ka qaadan lahaa sawirka. Wrap ayaa weli ah caadiga.
- **Gridka hantida.** Laydhadhka iftiinka ModelCraft waxay isticmaalaan gridka la wadaago: qaybo la gooyi karo, tiirarka magaca iyo qiimaha, iyo Compact density. Xisaabta la qoray sida `2*450` ayaa weli shaqeysa.
- **Problems.** Panel-ka Problems (badhanka digniinta ee bar-ka app-ka) waa mid dhammaan barnaamijyada wadaagaan. ModelCraft wuxuu ku hayaa hubinta daabacaadda iyo digniinaha joogtaynta dusha.
- **Live.** Kulanka Live TeamWork wuxuu muujiyaa qofka meesha uu joogo. Eeg [Ku moodel wada Live TeamWork](topic:work-live).
- **Kordhinno.** Kordhinnadu waxay ku dari karaan injiniyada render-ka, sida kor ku qoran.
- **Ku xidh AI-gaaga.** Heshiiska qalabka iyo hubinta siddeed barnaamijyada waa dhaafeen, oo wadar ahaan 454 qalab. Ku xidhidh hal-riix gudaha Studio, connector la martiqaadayo oo kaaliyayaasha browser-ka, furaha aad leedahay gudaha Studio iyo xirmo la daabacay lama ballan qaadin weli. Barnaamijyadu ma leh AI u gaar ah. Eeg [Isticmaal ModelCraft kaaliyayaasha AI](topic:use-with-ai-assistants).

### Waa la hagaajiyay 0.8.1

- **Qaybta classes ee DWG.** Qaybta classes ee faylka DWG waxa lagu akhriyay nooc qalad ah, taasoo jebin karta faylka markii la soo geliyo. Hadda si sax ah ayaa loo akhriyaa, ModelCraft iyo barnaamijyada kale ee akhrinaya DWG.
- **Taabletyada toosan.** Meeqaadka gridka ee dheeraadka ahi wuxuu u gudbaa canvas-ka, habaynta xaashida waxay bilaabataa 760 pixels ama ka yar. Miiraha qaabka ModelCraft wuu leeyahay isbeddelkaas.
- **Luuqadda Studio.** CadCraft Studio iyo nooca xirmada ah way beddeli karaan luuqadda markay shaqeynayaan; hore waxay ahaayeen Ingiriisi keliya. Weli kama tijaabin dhammaan barxadaha: naga sheeg haddii luuqaddu ku beddelan waydo.

### Weli kuma jirto nooca

- **Lama saxiixin.** Windows wuu muujin karaa SmartScreen: dooro {{ui:More info}}, kadibna {{ui:Run anyway}}. Mac-ka, riix midig oo dooro {{ui:Open}}. Dhismayaasha dukaanka way joogsadeen, dhismaha iPad iyo iPhone lama dib u dhisin 0.8.1.
- Barnaamij kale oo sawirka sameeya iyada oo aan kordhin render-ka lahayn, kaameraha panorama ama stereo iyo sawir cirka ah oo barnaamij kale ka yimid, iyo plug-in-ka furaya marxalada Unreal weli ma jiraan. Faylalka waa la qoray; plug-in-ka lama sii daayin, marna lama socodsiin Unreal.
- Dusha bilaa qaab: G3 iyo class A lama cabbiro ama lama sheego, jeexidda iyo jidhka waa mid dambe.
- Sawirrada barnaamijyada kale ma aha sida kuwayaga pixel-ba-pixel; kaameraha, qorraxda, laydhadhka iyo ifka oo keliya ayaa isku mid ah.
- Isbeddelka luuqadda Studio ee 0.8.1 lama tijaabin dhammaan barxadaha.

Waxa kale oo ku jira [Weli lama dhisin](topic:not-built-yet). Nooca hore, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
