---
title: Yenza imodeli esakhiweni sepulani yesayithi kusuka ku-DWG noma ku-DXF
summary: Ngenisa isayithi ye-CAD noma ipulani yezakhiwo njengemigqa emhlabathini, phendula umbuzo wamayunithi, bese uyilandela ibe ubuso nezinqwaba.
keywords: ipulani yesayithi, dwg, dxf, cad, ngenisa, isikethi, isikethi sesithombe, isikethi sesandla, isithombe, iphepha, imibala yepeni, amablokhi asebenzayo, izimo zokubonakala, umbhalo, hatch, spline, ellipse, 3d face, landela, ipulani yegumbi, ilothi, umugqa wempahla, amayunithi, underlay, indawo ezungezile
from: 3415dc96
---

ModelCraft ingangenisa imigqa yomdwebo we-CAD oyimbili-ngobubanzi, ipulani yesayithi noma ipulani yegumbi, iwabeke emhlabathini ukuze ukwazi ukumodela phezu kwawo.

## Ngenisa umdwebo

1. Chofoza {{ui:Ngenisa}} eqenjini le-{{ui:Ifayela}} (noma wehlise ifayela kumbono we-3D).
2. Khetha ifayela `.dwg` noma `.dxf`.

   I-DWG enkulu ithatha isikhashana: ibha yesimo ithi "Ifunda plan.dwg…" kuze kungene.

3. Uma umdwebo ungasho ukuthi amayunithi awo ayini, ingxoxo ebizwa ngokuthi "Amayunithi womdwebo" ibuza: "Yiyiphi iyunithi eyodwa yomdwebo?" Khetha {{ui:Amainshi}}, {{ui:Amafidi}}, {{ui:Amamilimitha}} noma {{ui:Amamitha}}. Amapulani amaningi eMelika adwetshwa ngamafidi, amapulani ezakhiwo ngamainshi, namapulani esilinganiso ngamamilimitha.

   Umdwebo ufika njengeqembu lemiphetho emhlabathini, likhethiwe, nombono usondela kuwo. Ibha yesimo ibonisa imiphetho emingaki efikile, isibonelo: "Ukungeniswa kwe-site.dwg: imiphetho engu-1697 emhlabathini, ngaphakathi eqenjini. Yiqhekeze ukuze udwebe phezu kwayo ngqo."

## Okufika

- Imigqa, imigqa emincane (kuhlanganise namajika ayo), imibuthano namajika, namabhlogi nakho konke okungaphakathi kwawo, kusuka kuphela ku-**model space**. Amajika ahlukaniswa abe imigqa emifushane.
- Imigqa, imigqa emincane, amajika, imibuthano, ama-ellipse nama-spline kufika kuhle emhlabathini njengemiphetho.
- **Imigqa yokufiphaza** iba ubuso emhlabathini, nezihlahla zayo zibe izimbobo, ukuze ukwazi ukusunduza/hudula indawo efiphazwe ngokushesha.
- **Ubuso be-3D** nemithamo eqinile kuba ubuso; ubuso be-3D bugcina ukuphakama kwabo.
- **Umbhalo** (umbhalo womugqa owodwa, umbhalo wemigqa eminingi nezixabiso zezakhi) udwetshwa njengemiphetho ngohlobo lombhalo olulula lomugqa owodwa, ngobude bombhalo, i-engeli nokuhlelwa kwawo. Ifonti yawo akuyona yomdwebo, ngakho amagama angase ahlale ude noma amfushane kancane. Izinhlamvu ezingenayo isimo kuleli hlobo zidwetshwa njengamabhokisi amancane futhi ziyabalwa.
- **Izilinganiso** zidwetshwa njengoba umdwebo uzikhombisa (imigqa yazo, izinhloko zemicibisho nombhalo, njengemiphetho nobuso).
- **Amablokhi asebenzayo** angena njengoba umdwebo uwakhombisa: ibhlokhi ngayinye ebekiwe esimweni esagcinwa ngaso, nemigqa yalowo mbono kuphela. Ibha yesimo iwahlu, ibonise izimo ezikhonjisiwe nezinye izimo ezikhona kuwo, isibonelo: "Receptacle shown as Duplex ×38, GFI ×7 (states: Duplex, GFI)". ModelCraft ayishintshi izimo.
- **Izinto eziqinile ze-3D, izifunda nemizimba** (idatha ye-ACIS yomdwebo) ifika njengamaqembu ayo: isolidi evaliwe njengesolidi, isifunda noma umzimba ovulekile njengobuso. Ubuso obuyisicaba buyafika bugcwele; ubuso obugoqekile (amasilinda, ama-cone, izinkundla, amatorasi, izindawo ezilula ze-spline) njengama-triangle amancane nemiphetho ethambile phakathi kwawo, ukuze kubonakale kuphela imiphetho yesolidi. Ubuso ohlobo lwendawo olunye lushiywa ngaphandle futhi luyabhalwa: "Not drawn yet (3D solids): …".
- Akungeniswa: amaphoyinti, amathebula, ama-multileader, izithombe nezinye izinhlobo zezinto. Ibha yesimo ibhala ngohlobo, isibonelo "Not imported: 12 POINT." Konke okusesakhiweni lephepha (paper space) nakho kushiywa ngaphandle, ngaphandle kokubhalwa.
- Amalayiyeri awagcinwa: yonke imigqa ifika ifana.

Uma umdwebo ukude nomsuka wawo (isibonelo ama-coordinates wesifunda), uyangeniswa, kodwa ungafika kude nomsuka we-ModelCraft. Imidwebo efinyelela ngaphezu kuka-10,000 km esuka emsukeni wayo iyenqatshwa: sondeza umdwebo ku-0,0 ku-CAD program kuqala.

## Landela ibe ubuso

Imigqa efakiwe kaningi ayivali ibe ubuso ngokwayo. Izindlela ezimbili zokusebenza:

**Gcina ipulani njengengaphansi (kuyancoméwe)**

1. Shiya ipulani njengeqembu layo.
2. Dwebela isakhiwo sakho phezu kwayo nge-{{ui:Unxande}} ne-{{ui:Umugqa}}, ubambelele emakhoneni epulani ("Endpoint") nasemiphethweni yayo ("On edge").
3. Sunduza/hudula ubuso bakho ukuze baphakame. Ipulani ihlala ingathintwa ngaphansi, futhi ungasula iqembu lonke ngokuchofoza kanye emuva.

Ukubambelela kusebenza phakathi kwamaqembu: ungabambelela emakhoneni epulani ngaphandle kokuyivula.

**Dwebela phezu komugqa wepulani**

1. Khetha iqembu lepulani bese uchofoza {{ui:Chitha}}. Imigqa yalo iba imiphetho ekhululekile.
2. Lapho umugqa ovaliwe kufanele ube ubuso, dweba umugqa phezu kwanoma yimuphi umphetho walo nge-{{ui:Umugqa}}, usuka ekhoneni uye kwelinye. Uma umugqa ovaliwe ulingana futhi uyisicaba, ubuso buvame ukugcwala. Uma kungenjalo, bheka isikhala noma ukudlanga kwemigqa bese udweba phezu kwakho.
3. Sunduza/hudula.

Lokhu kusebenza kahle kakhulu epulanini elihlanzekile. Ekuhloleni okuyinkimbinkimbi, ukulandela phezulu kuyashesha.

## Izinkinga

- "This is a binary DXF. Save it as ASCII DXF and try again." — Lena yi-DXF ye-binary. Yigcine kabusha njenge-DXF ye-ASCII kusuka ku-CAD program bese uzama futhi.
- "…has no lines, arcs or circles in model space to bring in." — …akunamigqa, amajika noma imibuthano ku-model space okufanele ingeniswe. Umdwebo mhlawumbe wonke usesakhiweni sephepha, noma wonke ungumbhalo namahatch.
- "This drawing could not be read (…). It may be damaged, or saved in a DWG version the reader does not handle…" — Lo mdwebo awukwazanga ukufundwa (…). Mhlawumbe wonakele, noma wagcinwa ngenguqulo ye-DWG umfundi angayisekeli… Izibhakabhaka zithi kungani, isibonelo "DWG version AC1009 is not supported". Gcina njenge-DXF, noma njenge-DWG kusukela ku-AutoCAD 2000 kuya ku-2018, kusuka ku-CAD program.
- Ipulani inosayizi ongalungile: ukhethe iyunithi engalungile. Hlehlisa ({{key:Mod+Z}}) bese uyangenisa futhi, noma [shintsha usayizi](topic:rotate-scale) weqembu ngesilinganiso esifanele (12 phakathi kwamafidi namainshi, 25.4 phakathi kwamainshi namamilimitha).

Ukuze uguqule imigqa yamakhonco ibe umhlabathi ongawubumba, bona [Umhlabathi](topic:terrain).

## Kusuka esithombeni sesikethi sesandla

**Ifayela › Ngenisa isithombe sesikethi…** uthatha isithombe sesikethi ephepheni (JPEG, PNG noma TIFF, ivela ku-foni kuyalungile) bese yenza izinhlobo ezifanayo zemiphetho emhlabathini. Chaza ukuthi liphepha muni (noma vumela kuthole ishidi, lithathwe njenge-A4) nesikali sesikethi, isibonelo 1 : 100. Umphetho wephepha uyatholakala futhi isithombe siyaqondiswa, uyinki ulandelwa ube imigqa namajika, futhi umbala ngamunye wepeni (black, red, blue, green) uba yiqembu layo nethegi (**Sketch black**, **Sketch red**, …), zonke ngaphakathi kweqembu elilodwa elibizwa ngegama lesithombe. Kuyinyathelo elilodwa lokuhlehlisa, futhi konke kwenzeka kulo kompyutha: akukho okuthunyelwa noma kuphi.

Uma kungatholakali umphetho wephepha, isithombe sonke sithathwa njengeshidi futhi umugqa wesimo uyakusho: linganisa okuthile okwaziyo bese ushintsha usayizi weqembu uma kukhubazekile. Landela imigqa ibe ubuso njengaphezulu.
