---
title: Waxa cusub ee 0.8 iyo 0.8.1
summary: Doorashada injinka rendarka oo leh faylal loogu talagalay barnaamijyada kale, dusha NURBS ee bilaa xuduud ah oo leh joogteyn la cabbiray, muuqaal aad ku sharraxdo kaaliyahaaga, agab laga sameeyay hal sawir, sawir gacmeed oo dhulka lagu dhigo, qolal alaab lagu rakibay, goynno janjeeran oo daabacaadda 3D, iyo hubinta daabacaadda ee panelka Dhibaatooyinka.
keywords: waxa cusub, sii deynta, liiska isbeddelada, isbeddello, 0.8, 0.8.1, nooca, qaabab cusub, injin rendar, injin, fur ku, usd, gltf, unreal, injin add-on, nurbs, dusha, loft, sweep, joogteyn, g0, g1, g2, zebra, step, iges, muuqaal ku sheeg, muuqaal, cimilada, waqtiga maalinta, xilli, kaaliye, agab sawir, sawir, sawir gacmeed, qol alaab, janjeer, goynta janjeeran, hubinta daabacaadda, dhibaatooyin, panel guuri, nalalka, luuqado, aaladaha gelinta, saf-qalabka, dwg, live
from: e4989b17
---

Waa waxa isbeddelay ModelCraft 0.8 (2026-11-01) iyo 0.8.1 (2026-11-02), marka la barbardhigo 0.7. Badhanka {{ui:Rendar sawir…}} hadda wuxuu muuqaalka u diri karaa barnaamij kale, panelka {{ui:Dusha}} wuxuu sameeyaa dusha bilaa xuduud ah oo siman, kaaliyahaaga aad ku xidho wuxuu dejin karaa muuqaal oo dhan hal jumlad.

## Cusub

### Rendarka

- **Doorashada injinka.** {{ui:Rendar sawir…}} wuxuu leeyahay liis **Injin** oo kor ku taal Habka. Injimadayada laba ah, Degdeg iyo Raadraaca jidka, ayaa ah kuwa caadiga ah oo meel kasta shaqeeya. Ikhtiyaarada kale waxay muuqaalka u kaydiyaan sida xirmo (moodelka oo ah fayl USD, iyo fayl habayn ah oo leh qiyamka saxda ah ee agabka, nalalka shidan, qorraxda, cirka, iftiinka iyo kamaradda) si aad ugu qaaddo barnaamij kale. Sawir ay barnaamij kale sameeyay wuxuu sheegayaa barnaamijka iyo nooca uu sameeyay. Eeg [Dooro barnaamijka sawirka sameeya](topic:render-engines).
- **Fur muuqaalka barnaamij kale.** Liiska Injinka wuxuu muuqaalka u kaydin karaa fayl USD, fayl glTF (`.glb`) ama galka mashruuca Unreal (`.zip`), browser-ka iyo CadCraft Studio. Studio-da wuxuu sidoo kale bilaabi karaa usdview ama barnaamijka kombiyuutarka ee faylka. Eeg [Fur muuqaalka barnaamij kale](topic:render-open-in).
- **U dir injinka ciyaarta Studio-ka.** Studio wuxuu muuqaalka ku qoraa mashruuca Unreal Engine, wuxuuna ku ilaaliyaa isbeddelada mar kasta oo la diro, hal jiho oo keliya. Tafatirkaaga wuxuu ku jiraa lakab CadCraft marna aan qorin. Eeg [U dir muuqaalka injinka ciyaarta](topic:render-unreal).
- **Injimo add-on-ka ka yimid.** Add-on wuxuu liiska ku dari karaa injin. Mid lagu qoray JavaScript wuxuu sawir ku sameeyaa browser-ka iyo Studio-ba; mid barnaamij kale socodsiiya wuxuu u baahan yahay ogolaanshaadaada Studio-ba. Eeg [Sawirka ku samee barnaamij kale](topic:render-other-program) iyo [Ku dar injin rendar add-on-ka](topic:render-engine-addons).
- **Muuqaalka ku sheeg.** Kaaliyahaaga xidhan u sheeg "dhawaqa habeenka, roob khafiif ah, geedaha dayrta, dadka saaxadda" waxaana ModelCraft dejin doonaa hal tallaabo: qorraxdu waxay u guurtaa taariikhda iyo waqtiga si hooskuna u raaco, cirku wuu beddelmaa, dusha qoyan ayaa soo muuqda, geedaha iyo dadka waxaa lagu dhigaa sida shayada dhabta ah oo ku yaal calaamado aad qarin, guurin ama tirtiri karto. Waqtiga maalinta, taariikhda ama xilliga, iyo cimilada (cad, daruur, fog, roob khafiif, roob, duufaan) ayaa sidoo kale shaqeeya keligood, codsi dambe wuxuu beddelaa isla muuqaalkii. Fog wuxuu ka muuqdaa sawirka tayada sare ee kaarka garaafyada; injimada kale waxay tusaan cirka, iftiinka iyo dusha qoyan. Roobku ma muuqdo sida xariiqyo dhulka ku dhacaya.

### Agabka

- **Agab hal sawir ka samee.** Sawir dusha (derbi, dhul, dhagax) siiso ModelCraft, wuxuu sameeyaa agab taabaqeeya oo isku xidha: iftiinka sawirka oo dhan waa la siman yahay, geesaha waa la isku xidhaa, khariidada midabka, khariidada xoogga (roughness) iyo khariidada jiifka (normal) waxaa laga soo saaraa sawirka. Waa hawlgal sawir oo fudud oo ku saabsan sawirkaaga, oo aan moodel tababaran lahayn. Xoogga waa qiyaas. Sawir fudud, labajibaaran, toos u eegan ayaa ugu wanaagsan; naqshad xoog leh sida dhagxaanka ayaa muuqan karta sawir jabaan ah meesha isku xidhka lagu daydo.

### Dusha

- **Dusha bilaa xuduud.** Panelka {{ui:Dusha}} wuxuu sameeyaa qalinno NURBS iyo dusha aan xuduud lahayn: khadad dhexmara dhibcaha, loft, ruled, extrude, revolve, sweeps oo ku dhex mara hal ama laba rail, dusha qalinka-shabakadda, afarta geesood ee patch, match iyo blend. Geesaha la wadaago kasta waa la cabbiray G0, G1 ama G2 (gap, angle, curvature jump) dusha saxda ah, geesta ka liita ee aad codsatay waxay ka muuqataa panelka Dhibaatooyinka oo leh hagaajin **Match**. Xariijinta zebra iyo midabyada curvature waxay ka dhex muuqdaan dusha saxda ah. Faylasha STEP iyo IGES way baxaan oo way soo galaan. Eeg [Dusha bilaa xuduud (NURBS)](topic:nurbs-surfaces).

### Goobta iyo qolalka

- **Sawir gacmeed oo dhulka lagu dhigo.** {{ui:Fayl}} › {{ui:Soo geli sawir gacmeed…}} wuxuu u beddelaa sawir taleefan oo sawir gacmeed ah xariiqyo dhulka ku jira, cabbirka aad sheegto: hal koox, tag oo midab kasta oo qalin ah. Warqadda waa la helaa oo la toosiyaa kombiyuutarkaaga, mana loo dirayo meel kale. Eeg [Moodel ku samee qorshe goob](topic:site-plan).
- **Qol alaab ku rakib.** Dooro dhul oo isticmaal {{ui:Habee}} › {{ui:Qol alaab ku rakib…}}. Alaabta qolka jiifka, qolka fadhiga, qolka cuntada, musqusha, qolka jimicada ama xafiiska waxaa lagu dhigaa xeerar, agagaarka darbiyada, oo ka fog albaabada iyo daaqadaha, kooxda oo hal tallaabo lagu qaadi karo. Waa qaabab caadi ah oo aad dib u eegtid, ma aha naqshad. Eeg [Maktabadda bilowga](topic:starter).

### Daabacaadda 3D

- **Goynno janjeeran.** Kala jar daabacaadda wuxuu goynnadiisa u janjeeri karaa ilaa 60 darajo, taasoo siinaysa qaybaha meel ballaadhan oo lagu xidho. Isku xidhayaashu waxay istaagaan toosan goynta. Eeg [Kala jar moodelka daabacaadda](topic:print-split).
- **Hubinta daabacaadda ee Dhibaatooyinka.** Natiijooyinka hubinta daabacaadda 3D waxay ka muuqdaan panelka Dhibaatooyinka oo leh calaamado moodelka ku yaal, Hagaaji ayaa ka hagaajinaya. Eeg [Taageerayaasha, dhumucda darbiga, qodista gudaha iyo hagaajinta](topic:print-tools).

### Barnaamij kasta

- **Luuqadaha.** Caawimaadda iyo barnaamijyadu waxay ku imaan 54 luuqadood. Toban ayaa cusub: Lituaniya, Latfiya, Boosniya, Maraathi, Telugu, Albaaniya, Afrikaans, Filibiino, Swahili iyo Uzbek. Luuqadaha aan Ingiriisiga ahayn waa qabyo ilaa uu hal af-dhalad akhriyo, mawduucyada caawimaadduna waxay weli ku jiri karaan Ingiriisi.
- **Aaladaha gelinta.** Trackpad, qalin, mouse 3D, gacmo-ciyaareed iyo kontoroolada MIDI ayaa wax ku shaqayn kara barnaamijyadan, dhammaantood ama mid keliya.
- **Saf-qalabka.** {{ui:Dejinta}} › {{ui:Guud}} › Saf-qalabka wuxuu dejiyaa Wrap (sida hore), 2 rows ama 1 row. Bar aan ku habboonayn wuxuu u dhaqaaqaa dhinac, halkii uu ka qaadan lahaa meesha sawirka. Wrap ayaa weli ah kan caadiga ah.
- **Grid-ka sifooyinka.** Nalalka ModelCraft waxay isticmaalaan grid-ka la wadaago: qaybo la soo xidhi karo, tiirarka magaca iyo qiimaha, iyo Compact density. Xisaabinta sida `2*450` ayaa sii shaqeysa.
- **Dhibaatooyinka.** Panelka Dhibaatooyinka (badhanka digniinta ee bar-ka app-ka) waa mid wadaagga dhammaan barnaamijyada. ModelCraft wuxuu ku jiraa hubinta daabacaadda iyo digniinta joogtaynta dusha.
- **Live.** Fadhiga Live TeamWork wuxuu muujiyaa kuwa meel ku jira. Eeg [Ku wada moodelka Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons waxay ku dari karaan injimo rendar, sida kor ku xusan.
- **Ku xidh AI-gaaga.** Qaabka qalabka iyo hubinta sideed app-ka waa la gudbay, oo leh 454 qalab oo dhan. Ku xidhidda hal-riix gudaha Studio, connector la martiqaado oo kaaliyayaasha browser-ka, furihaaga gudaha Studio iyo xirmada la daabacay lama balan qaadin wali. Apps-ku ma leh AI gaar ah. Eeg [Isticmaal ModelCraft kaaliyayaasha AI](topic:use-with-ai-assistants).

## Waxa lagu hagaajiyay 0.8.1

- **Qaybta classes ee DWG.** Qaybta classes ee faylka DWG waxa loo akhriyay nooc qaldan, taasoo burburin karta faylka marka la soo dhoofinayo. Hadda waa si sax ah loo akhriyaa, ModelCraft iyo apps-ka kale ee akhrisa DWG.
- **Tableyaasha jihada toosan.** Meesha grid-ka ee dheeraadka ah waxay u gudubtaa canvas-ka, habaynta xaashiga waxay bilaabataa 760 pikseel ama ka yar ballac. Style sheet-ka ModelCraft wuxuu leeyahay isbeddelkan.
- **Luuqadda Studio.** CadCraft Studio iyo xirmooyinka la rakibay waxay beddeli karaan luuqadda intay socdaan; ka hor waxay ahaayeen Ingiriisi kaliya. Tani weli lama tijaabin dhammaan madbaxyada: noo sheeg haddii luuqaddu ka beddelmin.

## Aan ku jirin nooca hadda

- **Lama saxiixin.** Windows waxay tusi kartaa SmartScreen: dooro {{ui:Macluumaad dheeraad ah}}, kadibna {{ui:Ku socodso si kastaba}}. Mac-ka, midig guji oo dooro {{ui:Fur}}. Dhismaha dukaanka waa la joojiyay, dhismaha iPad iyo iPhone looma dib-u-dhigin 0.8.1.
- Barnaamij kale oo sawirka sameeya iyada oo aan add-on injin rendar lahayn, kamaradaha panorama ama stereo iyo sawir cirka barnaamij kale ku sameeyay, iyo plug-in-ka furaya masraxa Unreal weli ma jiraan. Faylasha waa la qoraa; plug-in-ka lama sii daayin oo lama shaqeynin Unreal.
- Dusha bilaa xuduud: G3 iyo class A lama cabbiro ama lama sheego; gooyn iyo jidh adag way imaan doonaan.
- Sawirrada barnaamijyada kale ma aha pixel-ka-pixel sida kanaaga: kaliya kamaradda, qorraxda, nalalka iyo dhalaalka ayaa is waafaqa.
- Hagaajinta 0.8.1 ee beddelka luuqadda Studio lama tijaabin dhammaan madbaxyada.

Wixii kale oo dhan waa [Aan wali la dhisin](topic:not-built-yet). Nooca hore, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
