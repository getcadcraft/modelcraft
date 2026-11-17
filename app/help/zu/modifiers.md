---
title: Izisiguquli ku-mesh, iqembu noma ingxenye
summary: Shintsha usayizi, buyisa, hlela ngohlu, bushelelezisa, goqa, sika nagoba imesh ngaphandle kokuyishintsha; phinda noma shintsha usayizi weqembu noma ingxenye ngesitaki esifanayo; yenze isihlala uma usulungele.
keywords: isiguquli, izisiguquli, isitaki, iqembu, ingxenye, shintsha usayizi, bhaka, hlela umthombo, ukungaguquki, buyisa, array, array ejikelezayo, indawo ehlukaniswe, bushelelezisa, goqa, qinisa, ukuqina, boolean, sika, fuduka, fakela, nciphisa, lattice, ikheji, goba ngevolo, goba, ncishisa, sebenzisa
from: dd5ec1cb
---

**Isiguquli** (modifier) siguqula okubonakala njengemesh ngaphandle kokuguqula imesh ngokwayo. Buyisela uhhafu wephathi bese umodela kuphela leyo ngxenye; goqa ibhokisi nge-subdivision surface futhi uqhubeke uhlela ibhokisi. Izisiguquli zihlala ku-**isitaki** zisebenza ngokulandelana, phezulu kuya phansi. Okubonwa, okukhishwa, okuphrintwa nokurenderwa yimesh enazo zonke izisiguquli ezisebenzayo.

## Engeza isiguquli

1. Khetha imesh. Endaweni yokusebenza ye-Model ingxenye yayo ethi **Izisiguquli** itholakala ku-{{ui:Entity info}}; endaweni yokusebenza ye-Mesh itholakala ephanelini langakwesokudla.
2. Khetha esinye ku-{{ui:Add a modifier…}}. Sengezwa ekugcineni kwesitaki.
3. Shintsha izilungiselelo zaso ngaphansi kwegama lalo. Amalunga athatha amanani afanayo nebhokisi lenani, ngakho `600mm`, `2'6"` kanye no-`(6m)/4` konke kuyasebenza.

Ushintsho ngalunye yisinyathelo esisodwa sokuhlehlisa: {{key:Mod+Z}} iyaluhlehlisa.

## Izinkinobho kwisiguquli ngasinye

- Ibhokisi elikhethwayo liyasivula noma livale.
- Inkinobho yesikrini ikhombisa noma ifihle esibukweni (isahlala esitakini).
- Inkinobho yekhamera ikhombisa noma ifihle ezithombeni ezirenderiwe nasevidiyweni, ngakho isiguquli singaba sezithombe kuphela (noma sokubuka kuphela).
- Imicibisholo ihambisa ukuya phezulu noma phansi kwesitaki. Ukulandelana kuyabaluleka: buyisela bese ubushelelezisa kunikeza umphetho obushelelezi; bushelelezisa bese ubuyisela akunikezi.
- {{ui:Apply}} yenza umumo ube yingxenye yemesh: izisiguquli ezingaphezulu kwalo nalo zenziwa kumesh ngokwayo futhi zishiya isitaki. Kuyinyathelo elilodwa lokuhlehlisa.
- Ukuphambana kuyasusa.

## Izisiguquli

| Isiguquli | Okwenzayo |
| --- | --- |
| {{ui:Scale}} | Ishintsha usayizi ngokuzungeza imvelaphi yento, isilinganiso sebomvu, oluhlaza nokuluhlaza okwesibhakabhaka. Nakweqembu noma engxenyeni futhi. |
| Mirror (Buyisa) | Yengeza ikhophi ebuyisiwe ngokudlula ebomvwini, oluhlazeni noma okuluhlaza okwesibhakabhaka kumvelaphi yemesh, futhi ihlanganise izingxenye lapho zihlangana. |
| {{ui:Array}} | Kopisha ngomugqa (isinyathelo sosayizi wayo ngamanani onawanikeza, kanye nesinyathelo esisungulwe), ngokuzungeza i-axis, noma ngevolo emodelini. Iqembu noma ingxenye ithatha umugqa. |
| Subdivision surface (Indawo ehlukaniswe) | Igudisa imesh ngokuhlukaniswa kwe-Catmull-Clark. Imiphetho ebukhali ihlala ibukhali. Ukurenderwa kungasebenzisa amazinga amaningi kunokubuka. |
| {{ui:Bevel}} | Igoba yonke imiphetho ebukhali kunangelo onawunikezayo. |
| Solidify (Qinisa) | Inika umphezulu ukuqina futhi ivale umphetho. |
| Boolean | Isusa, ihlanganise noma igcine ukuphambana nento enye emodelini. Zombili kumele ibe yisolidi evaliwe. |
| Displace (Fuduka) | Ifudusa umphezulu ngaphakathi noma ngaphandle ngomsindo ogudile. Imbewu efanayo inikeza izintambo ezifanayo njalo. |
| Weld (Fakela) | Ihlanganisa amaphoyinti aseduze kunebanga elinikeziwe. |
| Decimate (Nciphisa) | Igcina ingxenye yamatrianguli, isuse leyo eshintsha ukwakheka kancane kakhulu. |
| {{ui:Smooth}} | Ikhulula amaphoyinti ngokuya kubamakhelwane bawo. |
| {{ui:Lattice}} | Igoba imesh ngekheji: hambisa amaphoyinti ekheji, nemesh iyalandela. |
| Curve deform (Goba ngevolo) | Igoba imesh eduze kwevolo emodelini, ngomugqa obomvu, oluhlaza noma okuluhlaza okwesibhakabhaka. |
| Shrinkwrap (Ncishisa) | Ifudusa wonke amaphoyinti ephoyinteni elisondele kakhulu kwenye into. |

## Kweqembu noma ingxenye

Iqembu noma ingxenye nayo ingagcina iresiphi, ngakho umthunzi wesibane ungaba **Scale** kanye ne-**Array** yomthunzi owodwa, futhi ukushintsha inombolo kushintsha isibane.

1. Khetha iqembu noma ingxenye. Ku-{{ui:Entity info}} ingxenye yayo ethi **Izisiguquli** ibala isitaki (ingasekuqaleni ingenalutho).
2. Khetha {{ui:Scale}} noma {{ui:Array}} ku-{{ui:Add a modifier…}}. Iqembu liba yingxenye **yokuqala, ebekwe yisitaki**. Okokuqala kuyagcinwa: uyihlele futhi zonke izikhopi zilandele ngokushesha.
3. Scale ithatha isilinganiso sebomvu, oluhlaza nokuluhlaza okwesibhakabhaka (`1, 1, 2` iphindaphindeka ukuphakama). Array ithatha inani lezikhopi, isinyathelo njengengxenye yosayizi womphumela sakuleso sikhathi, kanye nesinyathelo esengeziwe ngamalunga.

Isitaki sisebenza phezulu kuya phansi ezimpangeni zokuqala zokuqala zalo, ngakho ukulandelana kuyabaluleka: i-Array yezikhopi ezintathu ezinama-3 m ngokuhlukana, bese Scale 2 kubomvu, ibeka izikhopi ngama-6 m ngokuhlukana; uma Scale iqala bese i-Array ilandela, zihlala zingu-3 m ngokuhlukana. Ibhokisi, izinkinobho nekhasi kusebenza njengasemeshini; izinkinobho zombono nekhamera ne-Apply kwisiguquli esisodwa azisebenzi, ngoba isitaki kweqembu siyinto eyodwa.

- {{ui:Edit source}} ivula okokuqala endaweni yakho. Izinguquko zibonakala kuzo zonke izikhopi; ukuvala kubuyisela lapho ubekhona.
- {{ui:Bake modifiers}} yenza umphumela ube yimiphetho nezinhlangothi ezilula futhi isuse isitaki, ngesinyathelo esisodwa sokuhlehlisa. Izikhopi ezihlanganayo zihlala njengejiyometri ehlukene: Bake akuyona indibano.
- Izikhopi zengxenye zabelana ngayo iresiphi; {{ui:Make unique}} iyihlukanisa (okokuqala kuhlala kwabelwana).
- Isitaki silondolozwa efayeleni, sihamba nokukopisha nokunamathisela nokuhlehlisa, futhi i-Susa okungasetshenziswa igcina okokuqala. Uhlelo olungazi izisiguquli lusabonisa izikhopi.
- Kuze kube yi-Bake, umphumela awukwazi ukungeniswa, ukuchithwa, ukushintshwa usayizi noma ukwelulwa: uzakhiwa kabusha ngoshintsho olulandelayo. Konke kuyakutshela lokho.
- Imikhawulo ingu-32 wezisiguquli ne-1,000 wezikhopi. Ingxenye eyenziwe ukuze yelulwe (Stretch) nesitaki akukwazi ukwabelana ngencazelo okwamanje.

## Indawo ehlukaniswe

Subdivision igudisa imesh nge-Catmull-Clark: yonke inhlangothi iba yizinhlangothi ezine, futhi ileveli ngayinye yenza amanani amane kabili. Ibhokisi elinamazinga amabili noma amathathu sekuvele lifane nesimo esigudile, futhi uqhubeka uhlela ibhokisi.

- **Amazinga esibukweni** ayo abeka ukuthi igudile kangakanani.
- **Amazinga ezithombeni** ayo abeka ukuthi izithombe ezirenderiwe nevidiyo zigudile kangakanani; ukurenderwa kungasebenzisa amazinga amaningi kunokubuka.
- **Ukurenderwa ngomumo wangempela ogudile** kubeka amaphoyinti emesh erenderiwe emkhawulweni womumo amazinga angena kuwo, ngakho ngisho namazinga amabili enza ukurenderwa okugudile njengamaningi.
- **Ukugoba** kugcina imiphetho ibukhali: ku-Mesh workspace khetha imiphetho usebenzise {{ui:Crease}} (1 ihlala ibukhali, 0.5 igoba kancane, 0 igudile). Bona [Hlela imesh](topic:mesh-edit).
- **Nciphisa ileveli yokubuka emeshini enkulu:** uma amazinga ocela ezonikeza izinhlangothi eziningi kunalezi isibukeli somshini sizokwazi ngokuhle, ukubuka kukhombisa ileveli ephansi futhi kuyashoyo. {{ui:Apply}} isebenzisa wonke amazinga njalo. Inani lezinhlangothi lilungiswa yiklasi lomshini wakho ku-{{ui:Settings}} › Rendering › Your machine.
- Imiphetho evulekile igcina amakhona ayo futhi ihlala emgqeni wemiphetho yayo.

## Goba ngekheji

1. Engeza isiguquli se-{{ui:Lattice}} bese ucindezela {{ui:Add a lattice cage round the mesh}}. Ikheji elinamaphoyinti ama-3 × 3 × 3 livela lizungeze imesh, lidwetshwe ngamawaya.
2. Vula ikheji ku-Mesh workspace (chofoza kabili kuyo) uhambise amaphoyinti ayo. Imesh iyalandela ngobunono.

:::tip
Ikheji iyimesh njanoma iyiphi enye: yifihle ngethegi yayo uma usuqedile.
:::

## Ama-mesh amakhulu

Izitaki ezincane zisetshenziswa ngokushesha. Okukhulu kwenziwa ngemuva kuwo wonke ama-core ekhompyutha yakho: ukubuka kugcina kukhombisa umphumela wokugcina kuze kube yilapho olusha selulungile. Ama-Boolean alayisha isimodeli solid okokuqala; ukubuka kuyakutshela lokho isikhashana.

## Okungakenziwa yizisiguquli okwamanje

- Izisindo ngephoyinti ngalinye (ukwehla okupeyintwe emesheni) ku-Displace, ku-{{ui:Smooth}} noma ku-Shrinkwrap.
- Ezinye izisiguquli ngaphandle kwe-Scale ne-Array elula kujiyometri ye-push/pull (amaqembu nezingxenye): yiguqule ibe yimesh kuqala ({{ui:Convert to mesh}}). I-Mirror, i-Array ejikelezayo noma evolweni, i-Bend kanye ne-Taper emaqenjini kuzofika kamuva.
