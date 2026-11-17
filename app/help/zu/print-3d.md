---
title: Lungiselela imodeli yokuprinta nge-3D
summary: Hlola ukuthi imodeli ivaliwe futhi ibheka ngendlela efanele, bona usayizi wayo, isisekelo nokuthambekela, lungisa okungalungile, bese uyilanda njenge-STL noma 3MF ukuze isilayisi sakho sikwazi ukuyisebenzisa.
keywords: ukuprinta nge-3d, umshini wokuprinta, ukuprinta, isilayisi, stl, 3mf, ukuvalwa, manifold, solid, izimbobo, phakathi phandle, okuphambekayo, izisekelo, isisekelo, ibhedi, usayizi webhedi, millimeters, ukuthumela, ukulungisa, ukugobhoza, usayizi webhedi, oqalayo, ukujula kodonga, amathuluzi okuprinta
from: 948e19af
---

Isilayisi somshini wokuprinta sidinga isimo esivaliwe: akukho zimbobo, zonke izinhlangothi zibheke ngaphandle, akukho okudlula kuso. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} ikhangela lokho ngaphambi kokuthi uyilande ifayela.

## Hlola bese ulanda

1. Khetha lokho ofuna ukukuprinta: iqembu elilodwa noma amaningi, noma amakhomponenti, noma ezinye izinhlangothi. Uma kungekho okukhethiwe, konke okubonakalayo kuyaprintwa.
2. Chofoza {{ui:Export}} eqenjini le-{{ui:File}}, bese {{ui:Check for 3D printing (STL or 3MF)…}}.

   Ingxoxo iqala ngomugqa owodwa: "Ready to print", inani lezinto okufanele zilungiswe ngaphambi kokuprinta, noma inani okufanele ulibheke kuqala. Inkinga ngayinye inezingxenye ezintathu: okungalungile, kungani kubalulekile, nokufanele wenze. Kulandela usayizi ngamamilimitha, ivolumu, inani lezinxantathu nebhedi lakho lomshini wokuprinta.

3. Uma ingxoxo idweba izinto okufanele zilungiswe, chofoza {{ui:Fix what can be fixed}} (bona ngezansi). Ukuhlola kuyaphinda ngokuzenzakalela.
4. Chofoza {{ui:Download 3MF}} noma {{ui:Download STL}}.

Okuprintwayo yikho okubonakalayo: izinhlangothi ezifihliwe, amaqembu namakhomponenti afihliwe, nanoma yini esesihlokweni esifihliwe akufakiwe. Usayizi ukhona ngamamilimitha, iyunithi elilindelwe yizilayisi, nanoma iyiphi iyunithi imodeli ibonisa.

:::tip
Khetha i-3MF uma isilayisi sakho siyayifunda: igcina imibala nezinyunithi. I-STL ayinazo zombili, futhi izilayisi zicabanga ukuthi ngamamilimitha.
:::

## Yini ehlolwayo

Lezi zimisa ukuprinta noma zikonakalise, futhi zenze ingxoxo ithi "Not ready to print" (Ayilungele ukuprinta):

| Inkinga | Okusho | Okufanele wenze |
|---|---|---|
| Uhlangothi olulodwa kuphela | Imbobo: umphetho unohlangothi ohlangothini olulodwa kanti kwelinye akukho lutho | Dweba uhlangothi olusilelayo (umugqa ogqumela igebe uvame ukulivala), noma sebenzisa {{ui:Fix}} (ngezansi) |
| Zabelwana yizinhlangothi ezintathu noma ngaphezulu | Izinhlangothi zihlangana emphethweni noma udonga ngaphakathi kwe-solid | Susa uhlangothi wangaphakathi |
| Izinhlangothi zibheka ngezindlela ezingafani | Ezinye zibheke phakathi, ezinye zibheke phandle | Khetha izinhlangothi ezibheka phakathi bese uchofoza {{ui:Reverse face}} ku-{{ui:Entity info}} |
| Phakathi phandle | Yonke ingxenye evaliwe ibheka ngaphakathi | Khetha izinhlangothi zayo bese uzibuyisela emuva |
| Idlula kuyo yona | Ingxenye eyodwa igoba idlule kuyo yona | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, bese ususa okungaphakathi. Bona [Intersect faces](topic:intersect) |

Lezi ziwumlayezo wokusengaphambili: imodeli iyaprinta, kodwa buka kuqala.

- **Izingxenye ezihlukene ziyahlangana**, noma **zihlangana ngobuso**: izilayisi zivame ukuzihlanganisa zibe eyodwa. Ukuze uthole ifayela elicocekile, zihlanganise nge-{{ui:Solids}} › {{ui:Union}}. Bona [Amathuluzi e-solid](topic:solids).
- **Akukho okulala phansi ngokulingana**: phendula imodeli ukuze uhlangothi lulale ebhedini, noma isilayisi sizofaka izisekelo noma i-raft.
- **Ithambekela ngaphezu kuka-45° kusukela ekumeni**: lezo zinhlangothi zidinga ukusekelwa. Ingxoxo ithi yiluphi uhlangothi oludingayo.
- **Ngaphansi kwe-1 mm ububanzi**: mhlawumbe yenziwe ngeyunithi engafanele. Hlola iyunithi kubha yesimo.

Ingxenye egobile (igobolondo elivaliwe ngaphakathi kwelinye) ilungile: izinhlangothi zayo zibheke ekugobeni, nevolumu yayo iyasuswa.

## Lungisa izinkinga

Ngaphansi kwe-**Lapho izinkinga zikhona**, ingxoxo ibiza iqembu ngalinye noma ikhomponenti enenkinga, ngalokho okungalungile kuyo (izinhlangothi ezikhululekile ezingekho eqenjini zilethwa njengo "Faces not in a group"). Ikhomponenti efakwe izikhathi eziningi ilethwa kanye: ukulungisa kuyo kulungisa wonke amakhophi.

- {{ui:Show}} ivula leliqembu bese ikhetha imiphetho nezinhlangothi ezingalungile, ukuze zibonakale zigqanyisiwe.
- {{ui:Fix what can be fixed}} ilungisa zonke ngesikhathi esisodwa: ivala izimbobo ezinemiphetho elalayo, isusa izinhlangothi ezingaphakathi kwesimo nemiphetho edukayo, futhi iphendulela izinhlangothi ukuze zibheke ngaphandle. Kuyisinyathelo esisodwa: {{key:Mod+Z}} iyakuhlehlisa. Ukuhlola kuphinda bese kubonisa okusele.

Okungakwazi ukulungisa (imbobo enemiphetho engalali, ingxenye edlula kuyo yona) kuhlala ohlwini nalokho okufanele wenze ngesandla. {{ui:Repair}} ngaphansi kwe-**Print tools** iyaqhubeka ngaphezulu: ivala izimbobo ezingalali, isusa izingcezu ezidukile nezinhlangothi eziphindwe kabili, futhi ibala konke okulungisiwe. Bona [Izisekelo, ukujula kodonga, ukugobhoza nokulungisa](topic:print-tools#repair). Ungalungisa iqembu elilodwa ngesikhathi: likhethe, bese usebenzisa {{ui:Show problems}} no-{{ui:Fix}} ku-{{ui:Entity info}}. Bona [Amathuluzi e-solid](topic:solids).

## Ingxenye egobile

{{ui:Hollow}} ngaphansi kwe-**Print tools** igobhoza ingxenye ngokujula kodonga okunikezayo, namabhobho okukhipha lapho uchofoza khona. Bona [Hollow](topic:print-tools#hollow).

Ungadweba ugobhoza ngokwakho: iqembu elivaliwe ngaphakathi engxenyeni, lingathintani nayo, zonke izinhlangothi zalo zibuyiselwe emuva ukuze zibheke ekugobeni. Ukuhlola kubala njengokugobhoza futhi kususa ivolumu yalo; ayilethwa njengento okufanele ilungiswe.

## Ibhedi lomshini wakho

Khetha usayizi webhedi lomshini wakho wokuprinta ku-{{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. Ukuhlola kuyoxwayisa uma imodeli inkulu kunebhedi, noma ijikeleza noma iyiphi indlela. Bona [Izilungiselelo](topic:settings#3d-printer-bed).

## Amathuluzi okuprinta

Ngaphansi kwemiphumela yengxoxo, **Print tools** ivula {{ui:Supports preview}} (lapho kuzofakwa khona izisekelo nokuthi zingaki), {{ui:Wall thickness}} (izindonga ezincane kakhulu zokuprinta), {{ui:Hollow}} no-{{ui:Repair}}. Bona [Izisekelo, ukujula kodonga, ukugobhoza nokulungisa](topic:print-tools). {{ui:Split for printing}} inquma imodeli enkulu kakhulu ebhedini ibe izingcezu ngokuxhuma namajoyinti anamanani: bona [Hlukanisa imodeli enkulu ukuze uyiprinte](topic:print-split).

## Akuhlolwanga

Ukuhlola akuhlukanisi: imininingwane encane embobo yakho yokuprinta engakwazi ukuyidweba nezisekelo zangempela zesilayisi sakho. Bona [Akukakwakhiwe](topic:not-built-yet#3d-printing).
