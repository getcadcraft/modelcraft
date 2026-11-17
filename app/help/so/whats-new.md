---
title: Waxa cusub ee 0.9
summary: Marxalada daabacaadda oo leh slicer-keenna iyo u diri USB, Klipper, OctoPrint iyo PrusaLink, slicing-ka resin iyo add-ons-ka faylalka, material flow, digital twin iyo factory floor add-ons, NURBS fillets, thickening iyo scan fitting, AR goobta iyo toban arc methods.
keywords: waxa cusub, release notes, changelog, 0.9, qaybta daabacaadda, daabacaadda 3d, u dir daabacaha 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, daabacaadda resin, goo, sl1, ctb, anycubic, imtixaan exposure, material flow, digital twin, factory floor, plc, conveyor, nurbs, fillet, thicken, scan fit, ar, goobta, arc methods, units, changelog, isbeddel, 0.8, 0.8.1, nooca, astaamo cusub, engine, render engine, open in, usd, gltf, unreal, add-on engine, nurbs, surfaces, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, say the scene, muuqaal, cimilada, waqtiga maalinta, xilliga, kaaliye, agab sawir ka, sawir, sketch photo, furnish, furnish a room, slant, jarista xagal, split, hubinta daabacaadda, dhibaatooyin, property grid, lambaro, luuqadaha, aaladaha gelinta, safafka toolbar, dwg, live
from: 169048a2
---

Tanu waa waxa isbeddelay ModelCraft 0.9, marka la barbardhigo 0.8. ModelCraft hadda wuxuu gaaraa sariirta daabacaha iyo dhulka warshadda: waxaad shayaad saari kartaa sariirta daabacaha oo u dirtaa adoon faylal dhoofin, u slice-garee filament ama resin, oo habayn kartaa khadka maareynta alaabta. Tanu waa CadCraft Studio 0.9 iyo sideeda apps-kiisa; inta badan astaamaha cusub ee hoose waa add-ons.

## Cusub

### Daabacaadda 3D

- **Qaybta daabacaadda.** Riix {{ui:Qaybta daabacaadda}} qalabka. Ku dar shayaadka Maktabadda sariirta daabacaha, habee, eeg lakabyada la slice-gareeyay oo riix {{ui:U dir daabacaha 3D}}, iyada oo aan STL la dhoofin. Waxay ka tirsan tahay add-on-ka 3D Print, kaas oo furan bilowga oo laga saari karo sida add-on kasta. Eeg [Shayaad saar sariirta daabacaha oo u dir printer-ka](topic:print-stage).
- **Slicer-keenna alaabta filament-ka.** {{ui:CadCraft basic (ku jira, ugu degdeg badan)}} waa slicer-ka liiska **Slicer** ee kaarka: derbiyada, lakabyada, infill, taageerooyinka iyo skirt, worker dhexdeeda si bogga uu u sii yahay wax la isticmaali karo. {{ui:Hor-eeg lakabyada}} oo leh slider-ka **Layer** wuxuu muujinayaa lakabyada ka hor intaadan u dirin. Profiles-ka printer-ka sida Ender-3 iyo Prusa MK4 waxay leeyihiin G-code bilowga u gaar ah.
- **U dirid.** Over USB (Chrome ama Edge kombiyuutar, bogga oo furan), ama Klipper (Moonraker), OctoPrint ama PrusaLink shabakadda. Wax aan riix lagu xirayn ama lagu dirin, u diridda waxay weydiisaa marka hore.
- **Slicer-yada kale.** Kiri:Moto, PrusaSlicer iyo OrcaSlicer waa add-ons gaar ah, oo bilowga laga go'ay; ku dar kaarka ama {{ui:Dejinta}} › {{ui:Kordhinno}}. PrusaSlicer iyo OrcaSlicer waxay isticmaalaan nuqulkaaga la rakibay ee CadCraft Studio. Add-on-ka printers-ka Bambu Lab wuxuu slice-gareeyaa OrcaSlicer-kaaga iyo preset-yadiisa P2S wuxuuna u baahan yahay Studio kombiyuutar.
- **Daabacaadda resin.** Add-ons-ka resin (bilowga laga go'ay) waxay sameeyaan sawirro lakab ah oo shaashada printer-kaaga, oo leh godad dhex-madhan iyo hawo, raft iyo taageerooyin, hor-eeg lakabyada, iyo waqti, resin iyo kharash. Add-ons-ka faylalka waxay qoraan Elegoo GOO, SL1, Chitubox (CBDDLP iyo CTB 2 ilaa 5) iyo Anycubic (PWMX iyo PWS). Imtixaanka resin exposure wuxuu sameeyaa sulam shan exposures ah. Eeg [Slice-garee printer-ka resin-ka](topic:resin-printing).
- **Aan wax isbeddelin.** {{ui:Soo saar}} › {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}}, qalabka daabacaadda iyo kala-jarka daabacaadda waxay shaqeeyaan sida 0.8. Eeg [Diyaarso moodeel daabacaadda 3D](topic:print-3d).

### Socodka alaabta, Digital twin iyo Factory floor

Saddexdan waa add-ons, ilaa aad ku shido {{ui:Dejinta}} › {{ui:Kordhinno}}, mid kastaa caawinteeda gaarka ah ayuu leeyahay marka uu shido.

- **Material flow.** Panel la magacdaray Material flow wuxuu habeeyaa suunka, siteeshinnada, buffers-ka iyo jidadka AGV ee aragta 3D, wuxuu socodsiiyaa simulation seeded ah, wuu dib u ciyaaraa, wuxuuna muujiyaa throughput, lead times iyo queues, natiijooyinka wuxuu keydiyaa CSV. Amarada waxa laga yaabaa inay ka imaan faylka CSV. Robot cells waa la hubin karaa oo la dhoofin karaa. Xiriirka PLC wuxuu leeyahay mode pousi ah (soft) iyo mode dhab ah oo ku saabsan Modbus TCP, taas oo shaqeysa CadCraft Studio keliya.
- **Digital twin.** Wuxuu akhrisaa habaynta Material flow wuxuuna socodsiiyaa PLC pousi ah, oo leh khaladaad aad qasbi karto, tijaabooyin kaydka, isbarbardhig habaynta iyo bill of materials.
- **Factory floor.** Wuxuu siteeshinnada u beddelaa machines iyo cells, wuxuuna akhriyaa toosa ama simulator-ka, wuxuuna haya jaro shaqo iyo OEE fudud. Wuxuu akhrisaa kaliya; dhismahan ma qori karo machine ama PLC.

### Dusha, moodeelada iyo naqshadaynta

- **Gees-wareeg, qaro iyo booleans NURBS dusha.** Panelka {{ui:Dusha}} wuxuu leeyahay {{ui:Gees-wareeg u dhexeeya dhinacyada}}, {{ui:Wareeg dhowr geesood}}, {{ui:Qaro oo ka dhig jidh}} iyo Isku geyn, Jar, Isgoys, mid kastaa leh deviation-ka la cabbiray. Eeg [Dusha bilaa-qaab (NURBS)](topic:nurbs-surfaces).
- **Waafi dusha scan-ka.** Dooro mesh scan-ka oo isticmaal {{ui:Waafi dusha scan-ka}} kooxda **Scan**, ka dibna {{ui:Isku xidh dusha jidh ah}}. Waa waafin hore, ma aha xirmo reverse-engineering oo buuxa.
- **Xiriir toos ah oo ka yimaada modeller .3dm.** Hal dhinac oo keliya, Rhino 8 ama Grasshopper, wuxuuna u baahan yahay CadCraft Studio isla kombiyuutarka. Eeg [Ilaali moodeel .3dm oo toos ah](topic:live-3dm-link).
- **Arag moodeelka goobta.** {{ui:Eeg goobta (AR, taleefan)}} oo ku jirta menu-ka {{ui:Muuqaalo}} wuxuu shaqeeyaa taleefan Android ah oo leh Chrome. Eeg [Arag moodeelka goobta taleefan Android (AR)](topic:ar-on-site).
- **Habka qaanso.** Liiska {{ui:Hababka qaanso}} wuxuu bixiyaa toban siyaabood oo lagu sawiro qaanso, oo ay ku jiraan {{ui:3-Bar}} iyo {{ui:Bilow, Dhexe, Dhammaad}}.
- **Cutubyo dheeraad ah.** Miisaanka (kg, lb, t, ton) iyo heerkulka (digrii C, F, K iyo R) waa la fahmaa meelaha aad ku qorto qiyamka leh unit-yo.

## Barnaamij kasta

- **Qoraalka hoverka.** Qoraalka hoverka ee badhamada iyo labels-ka jaraan waa Bootstrap tooltip.
- **Tip-ka bilowga oo la xidhi karo.** Kaarka tip-ka ee goobta naqshadda madhan wuxuu leeyahay xidhid x yar. Waa xirnaan, command palette-ka ayaa mar kale muujin kara.
- **Tabs-ka soo socda.** Tab strip-ka panelka oo aan ku habboonayn wuu soo socdaa halkii la jari lahaa.
- **Cinwaanka tabka.** Haddii dukumeenti la furay, tab-ka browser-ka wuxuu ku bilaabmaa magaca dukumeentiga, kadibna ModelCraft iyo CadCraft. Dhibic ayaa hore u iman marka uusan kaydsanayn.
- **Qaabeyn.** {{ui:Dejinta}} › {{ui:Guud}} › Layout wuxuu hayaa qaabeynta liis hoos-u-dhac ah, oo leh doorasho si qaabeyn loogu isticmaalo app-kan keligiis, iyo badhan dib-u-dejin qaabeynta.
- **Luuqadaha.** Liiska luuqadaha Dejinta wuxuu raacaa faylalka luuqadda ee dhismuhu leeyahay. Luuqadaha kale ee aan Ingiriisi ahayn waa qoraallo machine ah.
- **Live iyo Maktabad.** Live TeamWork wuxuu muujiyaa cursors-ka toosa iyo magacyada, Maktabad ururinta wuxuu siiyaa app kasta ururin caadi ah.

## La hagaajiyay

- {{ui:Ciyaar}} wuxuu noqdaa {{ui:Sii dheji}} inta animation-ku ciyaarayo, {{key:Space}} wuxuu ciyaaraa oo sii dhejiyaa inta timeline-ku furan yahay.
- Sawirka rendarka ee adag wuxuu u dhacaa WebGL marka kaarka garaafka uusan bilaabi karin path tracer-ka. Aragta rendarka toosa ayaa weli muuqan karta khalad; tan lama hubin kombiyuutarka Windows oo leh driver-kaas.
- Material flow real mode wuu dib u xiriiraa marka xiriirku dhammaado jawaabaha PLC exception.

## Xadka runta

- Waxba lama daabicin printer dhab ah: ma filament, ma resin, ma marka Bambu Connect. Faylalka resin waxa dib u akhriyay akhristayaasha CadCraft keliya.
- Digital twin iyo Factory floor waxaa lagu tijaabiyay simulators iyo jawaabo la yaqaan keliya, mana jiro PLC, line ama protocol dhab ah. Waa caawimo hubin, ma aha xaqiijin badbaado. Physics wuxuu daboolaa sanduuqyada keliya, ilaa siddeed culus.
- Xiriirka Rhino iyo Grasshopper weligiis ma shaqeyn barnaamijyada dhabta ah.
- Luuqadaha aan Ingiriisi ahayn waa qoraallo machine ah.

## Hore: 0.8 iyo 0.8.1

Tanu waa waxa isbeddelay ModelCraft 0.8 (2026-11-01) iyo 0.8.1 (2026-11-02), marka la barbardhigo 0.7. Badhanka {{ui:Rendar sawir…}} hadda wuxuu u dir karaa muuqaalka barnaamij kale, panelka Dusha wuxuu sameeyaa dusha bilaa-qaab, iyo kaaliye aad xidhay wuxuu dejin karaa muuqaal oo dhan hal jumlad.

### Cusub

**Rendarka**

- **Doorashada Engine.** {{ui:Rendar sawir…}} wuxuu leeyahay liis **Engine** oo ka sarreysa Mode. Laba engines-keenna, Fast iyo Path tracer, ayaa caadi ah oo meel kasta ka shaqeeya. Ikhtiyaarada kale waxay kaydiyaan muuqaalka sida package (moodeelka faylka USD, iyo faylka dejinta oo leh qiyamka agabka saxda ah, lambaro shidan, qorraxda, samada, exposure-ka iyo kaamerada) si loogu geeyo barnaamij kale. Sawirka barnaamij kale wuxuu sheegaa barnaamijka iyo nooca; eeg [Dooro barnaamijka sawirka kaa soo saara](topic:render-engines).
- **Ku fur barnaamij kale.** Liiska Engine wuxuu muuqaalka kaydin karaa fayl USD, fayl glTF (`.glb`) ama foolder mashruuc Unreal (`.zip`), browser-ka iyo CadCraft Studio. Studio-ga waxa kale oo uu bilaabi karaa usdview ama barnaamijka kombiyuutarka faylka. Eeg [Fur muuqaalka barnaamij kale](topic:render-open-in).
- **U dir game engine-ka Studio-ga.** Studio wuxuu muuqaalka ku qoraa mashruuc Unreal Engine wuxuuna joogteeyaa dir kasta, hal jihood oo keliya. Tafatirkaaga ayaa ku jira layer aan CadCraft weligeed qorin. Eeg [U dir muuqaalka game engine-ka](topic:render-unreal).
- **Engines-ka add-ons-ka.** Add-on wuxuu ku dari karaa engine liiska. Mid JavaScript ah wuxuu sawiraa browser-ka iyo Studio; mid barnaamij maamula wuxuu u baahan yahay ogolaashaadaada Studio-ga. Eeg [Sawir ku sameey barnaamij kale](topic:render-other-program) iyo [Ku dar render engine add-on ah](topic:render-engine-addons).
- **Ku sheeg muuqaalka.** Kaaliyahaaga AI ee xiriirsan ku sheeg "dusk, light rain, autumn trees, people on the plaza" wuxuuna ModelCraft u dejiyaa hal tallaabo: qorraxdu waxay u dhaqaaqaa taariikhda iyo waqtiga si hooska u raaco, samadu way beddelaysaa, dusha qoyan ayaa soo muuqda, geedaha iyo dadka waxaa lagu dhigaa sida shayaad dhab ah oo tags-ka aad qarin karto, u guuri karto ama tirtiri karto. Waqtiga maalinta, taariikhda ama xilliga, iyo cimilada (clear, overcast, fog, light rain, rain, storm) waxay sidoo kale shaqeeyaan keligood, codsi dambe wuxuu beddelaa isla muuqaalkaas. Ceeryaanka waxay muuqataa sawirka tayo sare ee kaarka garaafka; engines-ka kale waxay muujiyaan samada, iftiinka iyo dusha qoyan. Roobka lama sawiro sida xariiqyo dhaca.

**Agabka**

- **Agab hal sawir ka.** Ku sii sawir dusha (derbi, sagxad, dhagax) ModelCraft wuxuu sameeyaa agab tiling ah: iftiinka sawirka oo dhan ayaa la siman yahay, geesaha waa la isku xidhay, oo color map, roughness map iyo normal map waa laga shaqeeyay sawirka. Waa habayn sawir oo fudud oo ku saabsan sawirkaaga kombiyuutarka, oo aan model tababar ah lahayn. Roughness waa qiyaas. Sawir fudud, labajibbaaran, toosan ayaa tile ugu fiican siiya; qaab xoog leh sida dhagaxyada waxay muuqan kartaa sawir cadaadis jilicsan meesha isku xidhka la isku dhejiyo.

**Dusha**

- **Dusha bilaa-qaab.** Panelka {{ui:Dusha}} wuxuu sameeyaa curves NURBS iyo dusha aan la jarin: curves oo dhibco ku maran, loft, ruled, extrude, revolve, sweeps oo ku socda hal ama laba rail, dusha laga sameeyo shabakad curve, patches laga sameeyo afar geesood, match iyo blend. Geesaha la wadaago kasta waxaa lagu cabbiraa G0, G1 ama G2 (fur, xagal, jump curvature) dusha saxda ah, geesta xumaysa ee aad codsatay waxay ka muuqataa panelka {{ui:Dhibaatooyinka}} oo leh badhanka **Match**. Zebra stripes iyo midabka curvature waxaa laga sameeyaa dusha saxda ah. Faylalka STEP iyo IGES way baxaan oo way imaan. Eeg [Dusha bilaa-qaab (NURBS)](topic:nurbs-surfaces).

**Goobta iyo qolalka**

- **Sawir sketch ah oo ku yaal dhulka.** {{ui:Fayl}} › {{ui:Soo geli sawir gacmeed…}} wuxuu u beddelaa sawir taleefan oo gacan-sawir ah geesood dhulka cabbir aad sheegto: hal koox, tag kasta midabka qalinka. Waraaqda waa la helaa oo toosiya kombiyuutarkaaga, wax lagama dirin. Eeg [Qorshe goobeed](topic:site-plan).
- **Qol alaab ku rakib.** Dooro floor oo isticmaal {{ui:Habee}} › {{ui:Qol alaab ku rakib…}}. Alaabta qolka jiifka, qolka fadhiga, qolka cunista, qolka cuntada, musqusha ama xafiiska waa la dhigaa qawaaniin, derbiyada ku dhow oo ka fog albaabbada iyo daaqadaha, hal koox oo aad mar kale ka saari karto. Waa qaabeyn caadi ah oo aad dib u eegto, ma aha naqshad. Eeg [Maktabadda bilowga](topic:starter).

**Daabacaadda 3D**

- **Jarista xagal.** Split for printing wuxuu xagal ahaan jari karaa jarista ilaa 60 darajo, taasoo siinaysa qaybaha meel dheeraad ah oo lagu xidho. Connectors-ka waxay istaagaan toosan jarista. Eeg [Kala-jar moodeelka daabacaadda](topic:print-split).
- **Hubinta daabacaadda ee Dhibaatooyinka.** Natiijooyinka hubinta daabacaadda 3D waxay muuqdaan panelka {{ui:Dhibaatooyinka}} oo leh calaamado moodeelka, {{ui:Hagaaji}} ayaa ka soo saaraa. Eeg [Taageerooyinka, ballaca darbiga, dhex-madhanka iyo hagaaska](topic:print-tools).

**Barnaamij kasta**

- **Luuqadaha.** Caawinta iyo apps-ka waxay imaan 54 luuqadood. Toban waa cusub: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili iyo Uzbek. Luuqadaha aan Ingiriisi ahayn waa qoraallo machine ah ilaa uu barto af-hooyo, mawduucyada caawinta waxay weli ku jiri karaan Ingiriisi.
- **Aaladaha gelinta.** Trackpad, qalin, 3D mouse, game controller iyo kontoroolada MIDI waxay wadi karaan apps-ka, dhammaantood ama mid keliya.
- **Safafka toolbar-ka.** {{ui:Dejinta}} › {{ui:Guud}} › Toolbar rows wuxuu dejiyaa Wrap (sida hore), 2 safaf ama 1 safaf. Bar aan ku habboonayn wuu sideeyaa halkii uu ka qaadan lahaa meesha naqshadda. Wrap wuxuu weli yahay caadi.
- **Property grid.** Goobaha lambarada ModelCraft waxay isticmaalaan grid-ka wadaagga ah: qaybo la ruxi karo, tiirarka label-ka iyo qiimaha, iyo cufnaanta {{ui:Kooban}}. Xisaabinta sida `2*450` way sii shaqeysaa.
- **Dhibaatooyinka.** Panelka {{ui:Dhibaatooyinka}} (badhanka digniinta ee bar-ka app-ka) waa la wadaagaa dhammaan apps-ka. ModelCraft wuxuu leeyahay hubinta daabacaadda iyo digniinaha isku xidhka dusha.
- **Live.** Kalfadhi Live TeamWork wuxuu muujiyaa qofka meesha uu joogo. Eeg [Moodeel si wadajir ah oo Live TeamWork](topic:work-live).
- **Kordhinno.** Add-ons-ka waxay ku dari karaan render engines, sida kor.
- **Ku xidh AI-gaaga.** Qaabka qalabka iyo hubinta sideeda apps-ka way gudbeen, oo leh 454 qalab oo dhan. Ku xidhka hal-riix gudaha Studio, connector la martiqaadayo kaaliyayaasha browser-ka, furaha aad leedahay gudaha Studio iyo package la daabacay lama ballan qaadin weli. Apps-ka ma leh AI gaar ah. Eeg [Isticmaal ModelCraft kaaliye AI ah](topic:use-with-ai-assistants).

### La hagaajiyay 0.8.1

- **Qaybta classes ee DWG.** Qaybta classes ee faylka DWG waxaa lagu akhriyay nooc qaldan, taas oo ka dhigi karta faylka mid xun marka la soo geliyo. Hadda si sax ah ayaa loo akhriyaa, ModelCraft iyo apps-ka kale ee akhrinaya DWG.
- **Tablets-ka xaashida.** Dhererka grid-ka ee dheeraadka ah wuxuu u gudbaa canvas-ka, qaabeynta xaashida waxay bilaabataa 760 pixels ama ka yar ballac. Style sheet-ka ModelCraft wuxuu leeyahay isbeddelkaas sidoo kale.
- **Luuqadda Studio.** CadCraft Studio iyo nooca xirmada waxay beddeli karaan luuqadda intay shaqeynayaan; ka hor waxay ahaayeen Ingiriis keliya. Lama tijaabin dhammaan madalaha weli: noo sheeg haddii luuqadu aanay beddelin.

### Weli kuma jirto nooca

- **Lama saxiixin code.** Windows wuxuu muujin karaa SmartScreen: dooro {{ui:Macluumaad dheeraad ah}}, ka dibna {{ui:Wax kasta sii wad}}. Mac-ka, midig-guji oo dooro {{ui:Fur}}. Dhismaha store-ka waa la joojiyay ilaa hadda, iPad iyo iPhone dhismaha lama dib u dhisin 0.8.1.
- Barnaamij kale oo sawiraya sawirka aan add-on render engine lahayn, panoramas ama kamaarooyin stereo iyo sawirka samada ee barnaamij kale, iyo plug-in-ka furaya Unreal stage weli ma jiraan. Faylalka waa la qoraa; plug-in-ka lama sii dayn, Unreal kuma shaqayn.
- Dusha bilaa-qaab: G3 iyo class A lama cabbiro ama lama sheego, trimming iyo solids way dambeeyaan.
- Sawirrada barnaamijyada kale ma aha pixel ilaa pixel sida kuwayaga: kaamera, qorraxda, lambaro iyo exposure-ka oo keliya ayaa isku mid ah.
- Hagaajinta 0.8.1 ee beddelka luuqadda Studio lama tijaabin dhammaan madalaha.

Waxa kale oo dhan waa ku jira [Weli lama dhisin](topic:not-built-yet). Nooca hore, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
