---
title: Frjáls yfirborð (NURBS)
summary: Slétt ferlar og yfirborð fyrir skeljar framleiðsluvara, bílayfirbyggingar og bátaskrokk — sveipun, drag, ferlanet, fjórkanta-flekar, blöndun og klippingar — með G0, G1 og G2 samfellu mældri á nákvæmu yfirborðunum, föst form með sameiningu, frádrætti og skurði, sýn á zebra- og sveigjusvæði, fletir aðlagaðir skanna með mældri skekkju, og STEP- eða IGES-skrár.
keywords: nurbs, skönnun, bakverkfræði, aðlögun, möskvi í yfirborð, punktaský, stl, klipping, klippt, gat, skurður, fast form, föst form, boolean, sameining, frádráttur, skurðarsnerting, sauma, lokað, frjálst form, freeform, yfirborð, b-spline, bspline, ferill, spline, sveipun, drag, leiðarlína, net, coons, flekur, blöndun, samfella, g0, g1, g2, snertill, sveigja, zebra, stjórnpunktar, hnútar, stig, step, iges, A-flokkur
from: 09887405
---

**Yfirborð**-spjaldið býr til slétta ferla og yfirborð af þeirri gerð sem notuð er í skeljar framleiðsluvara, bílayfirbyggingar og bátaskrokk: NURBS, sömu stærðfræði og aðrir yfirborðsmótunarforritar nota. Allt er mælt á nákvæmu yfirborðunum, aldrei á þríhyrningunum sem þú sérð. Stærðir í spjaldinu eru í **millimetrum**, hvaða einingu sem líkanið sýnir.

Opnaðu það úr hægra spjaldinu: {{ui:Yfirborð}} › {{ui:Opna yfirborðsgluggann}}. Líkan sem þegar hefur yfirborð opnar það sjálft.

## Hvernig skipun virkar

1. Ýttu á skipun (til dæmis **Sveipun**). Spjaldið segir hvað það þarf enn: punkta, ferla, yfirborðsbrún eða enda ferils.
2. Veldu þá: smelltu á þá í 3D-sýninni, eða ýttu á **Velja** (eða brúna- og endahnappana) við hvern í listanum. Fyrir brún skaltu smella nálægt þeirri brún yfirborðsins.
3. Yfirfarðu valkostina (stig, vikmörk, samfellu, …) og ýttu á **Búa til**.

Ferlar út frá punktum taka punktana sem slegnir eru inn, einn á línu (`x, y, z` í mm), eða **Veldu punkta í sýninni**: hver smellur notar sömu smellingu og teikniverkfærin; ýttu á <kbd>Enter</kbd> eða tvísmelltu til að ljúka, og <kbd>Esc</kbd> til að hætta.

## Ferlar

- **Ferill um punkta** fer í gegnum alla punkta. **Ferill eftir stjórnpunktum** fylgir í staðinn neti punkta.
- **Bæta við hnúti**, **Hækka stig** og **Lækka stig** breyta því hvernig ferill er lýstur án þess að færa hann (lækkun er hafnað þegar ferillinn myndi færast meira en vikmörkin). **Endurbyggja feril** gefur honum nýjan fjölda stjórnpunkta og segir hversu langt hann færðist.
- **Passa feril** lætur enda eins ferils mætast enda annars með G0 (snertir), G1 (sama stefna) eða G2 (sama sveigja líka). **Blanda feril** bætir nýjum ferli milli tveggja enda.
- **Sameina ferla** og **Skipta ferli**.

## Yfirborð

- **Sveipun** yfir tvo eða fleiri ferla, **Línuyfirborð** milli tveggja, **Draga feril út**, **Snúa ferli**.
- **Drag eftir einni leiðarlínu** ber snið eftir slóð án þess að snúa því, og **Drag eftir tveimur leiðarlínum** heldur endum sniðsins á báðum leiðarlínum. Drög eru löguð: stöðulínan segir hversu nærri raunverulegum drætti þau héldust.
- **Yfirborð út frá ferlaneti** fer í gegnum rist af ferlum (fyrstu valin eru sniðin, hin leiðbeiningarnar). **Flekur úr fjórum brúnum** fyllir fjóra ferla sem mætast á hornum sínum.
- **Passa yfirborð** lætur yfirborðsbrún mætast nágranna með G0, G1 eða G2; **Blanda yfirborð** bætir yfirborði milli tveggja brúna.
- **Hliðra yfirborði**, **Lengja yfirborð** (yfirborðið heldur áfram eins og það var á leiðinni), **Endurbyggja yfirborð**, og hnútar og stig fyrir yfirborð.

## Athuga gæði

Taflan **Sameiginlegar brúnir** listar hverja brún sem tvö yfirborð deila, með bilinu (mm), horninu á milli þeirra (°) og sveigjustökkinu (1/mm), og hvort það gerir hana að G0, G1 eða G2. Brún sem er verri en þú baðst um er einnig í **Vandamálum** (⚠-hnappurinn í forritastikunni) með **Passa**-lagfæringu.

**Sýna sem** › **Zebra-rendur** og **Sveigja (Gauss)** koma úr nákvæma yfirborðinu: rendur sem halda áfram óslitnar yfir brún þýða G1; rendur sem halda líka breidd sinni þýða G2. Sveigjan er blá þar sem yfirborðið er hnakki, rauð þar sem það er hvelfing og hvít þar sem það er flatt. **Stjórnpunktar** sýnir stjórnnetin.

G0–G2 eru mæld í 33 punktum á hverja brún. **G3 og „A-flokks“ gæði eru ekki mæld** og er ekki haldið fram.

## Klippa yfirborð

**Klippa**-hópurinn sker yfirborð án þess að breyta lögun þess: yfirborðið heldur öllum stjórnpunktum sínum og aðeins hlutinn innan útlínunnar er sýndur, talinn og skrifaður. **Klippa í rétthyrning** og **Klippa með hring** vinna á hlutdeild (0 til 1) yfirborðsins í hverri átt, svo þær þurfa ekkert val í sýninni. **Klippa eftir ferli** tekur lokaðan feril sem liggur á yfirborðinu (hann er varpaður inn á yfirborðið og hafnað með orðum ef hann er opinn eða meira en vikmörkin frá því). Hakaðu við **Skera gat** til að fjarlægja innan útlínunnar; skildu hann ómerktan til að halda aðeins því sem er innan. Yfirborð getur haft eina útlínu sem er haldið og hvaða fjölda gata sem er; útlína sem sker aðra er hafnað. **Fjarlægja klippinguna** sýnir allt yfirborðið aftur. Skornu brúnirnar fylgja útlínunni nákvæmlega; **Afturkalla** spjaldsins tekur klippingu til baka eins og hvert annað skref.

STEP ber klippinguna sem mörk flatarins og IGES sem klippt yfirborð (eining 144); bæði lesa hana til baka.

## Föst form og Boolean-aðgerðir

**Föst form**-hópurinn breytir yfirborðum í lokaða hluti og sameinar þá. Fast form hér er sett af yfirborðum spjaldsins sem saman loka rúmmáli; fletir þess eru áfram nákvæm NURBS-yfirborð með klippingum sínum.

- **Kassi úr föstu formi**, **strokkur úr föstu formi** og **kúla úr föstu formi** búa til eitt úr stærðum sem slegnar eru inn (í mm): kassa með sex flötum fleti, strokk með hringlaga hlið og tveimur flötum endum klipptum að hringnum, og kúlu úr einu snúnu yfirborði.
- **Föst form úr yfirborðum** hópar yfirborð sem þú bjóst til sjálfur. Veldu þau, eða veldu ekkert til að nota öll sýnd yfirborð sem eru ekki þegar í föstu formi. Þau eru saumuð saman innan vikmarka: ef þau lokast ekki breytist ekkert og spjaldið segir hversu margar brúnir eru opnar og hversu nærri þær þurfa að mætast.
- **Sameina**, **Draga frá** (annað fasta formið er dregið frá því fyrsta) og **Skera saman** (aðeins það sem bæði eiga) taka tvö föst form: smelltu á flöt af hvoru í sýninni, eða ýttu á **Velja** í **Föst form**-listanum. Hakaðu við **Halda báðum föstu formunum** til að skilja þau eftir við hliðina á útkomunni.

Boolean-aðgerð heldur hverjum fleti á eigin nákvæma yfirborði og sker hann með nýjum klippiútlínum eftir skurðlínunni. Niðurstöðulínan gefur mældar tölur: hversu langt punktar vélarinnar fyrir föst form þurftu að færast til að sitja á nákvæmu yfirborðunum (aldrei meira en vikmörkin), hversu nærri skurðpunktarnir eru báðum yfirborðum (venjulega nokkrar milljónustu úr millimetra), rúmmálið, og hvort nýju fletirnir lokast aftur þegar þeir eru saumaðir upp á nýtt úr nákvæmu yfirborðunum sínum. Rúmmál eru mæld á þríhyrningum innan vikmarka (0,05 mm nema þú stillir annað), svo rúmmál kúlu eða strokks er aðeins lægra en hið nákvæma: minni vikmörk nálgast það betur. Boolean-aðgerð sem ekki er hægt að framkvæma hreint (formin eiga ekkert sameiginlegt, útlína myndi skera sjálfa sig) er hafnað með orðum og engu breytist. Ein Boolean-aðgerð er eitt skref í **Afturkalla** spjaldsins.

Í **Föst form**-listanum **Taka í sundur** heldur fletunum sem venjulegum yfirborðum; ruslafatan eyðir fasta forminu og flötum þess.

**Bæta við líkanið** (í **Föst form**-listanum) setur afrit af fasta forminu í líkanið sem einn lokaðan hóp, með fletina sem þríhyrninga innan 0,05 mm, í einu skrefi í afturköllun líkansins. Það virkar þá með eigin **Sameina**, **Draga frá** og **Skera saman** líkansins, ýta/toga og prentunarprófinu; nákvæma fasta formið er áfram í spjaldinu.

## Ávalanir og þykknun

**Ávöl milli fleta** rúnar brúnina þar sem tveir fletir á sama föstu formi mætast: veldu flötina tvo (í sýninni, eða með **Velja** í listanum), sláðu inn **radíus** og, fyrir radíus sem breytist eftir brúninni, **radíus í endanum** (0 heldur einum radíus). Kúla af þeim radíus er rúllað eftir brúninni og snertir báða fletina; ávölunin er nákvæmi hringboginn sem hún skilur eftir í hverjum punkti, sameinaður í eitt yfirborð, og flatirnir tveir eru klipptir þar sem kúlan snertir þá. Ytri brún missir efni, innra horn fær það. Niðurstöðulínan gefur það sem mældist: hversu langt ávölunaryfirborðið er frá rúllandi kúlunni milli punktanna sem það var smíðað úr (punktum er bætt við þar til það er innan fjórðungs vikmarka), mesta horn milli ávölunar og hvors flatar eftir snertilínunum, og sömu tölur og fyrir Sameina. Radíus sem passar ekki (kúlan færi af fleti, eða flötur beygist þéttar en radíusinn) er hafnað með nafni flatarins, og engu breytist.

**Ávöl nokkrar brúnir** rúnar margar brúnir í einu skrefi: veldu flötina tvo fyrir fyrstu brúnina, svo flötina tvo fyrir þá næstu, og svo framvegis (flötur getur verið í nokkrum pörum, til dæmis efri flötur kassa í fjórum þeirra); allar brúnir fá þann radíus sem þú slærð inn. Hver ávöl er reiknuð út á fasta forminu eins og það var, og síðan skorin ein eftir annarri, svo röðin skiptir ekki máli. Þar sem tvær ávalar brúnir mætast í horni þar sem hinar brúnirnar eru skarpar, renna ávölunin tvær saman eftir skurðlínu sinni (fellingu). Þar sem þrjár ávalar ytri brúnir á þremur flötum sem standa hornrétt hver á aðra mætast með einum radíus, verður hornið að einni **kúluflikk** sem snertir allar þrjár ávölurnar (afveldu **Horn** til að fá fellt horn í staðinn); brún verður að vera að minnsta kosti tvöfalt lengri en radíusinn þar sem báðir endar hennar eru slík horn. Niðurstöðulínan segir hversu margar brúnir voru ávalaðar og hvernig hornin komu út. Innri brúnir má líka ávala saman, en niðurstaða sem lokast ekki aftur er aðeins tilkynnt (línan segir það), svo athugaðu hana.

**Þykkna í fast form** gefur yfirborði þykkt: veldu það, sláðu inn **þykktina**, og hakaðu við **Hin hliðin** til að láta það vaxa hina leiðina. Hliðraði flöturinn er lagaður að yfirborðinu og mældur á móti því (niðurstöðulínan gefur mesta mismun frá þykktinni); veggir fylgja hverri brún og hverri klippiútlínu. Ef yfirborðið beygist þéttar en þykktin á þeirri hlið, eða annar hluti þess liggur nær en þykktin, er því hafnað, með nafni yfirborðsins og staðsetningunni, og engu breytist.

## Afturkalla, skráin, STEP og IGES

Spjaldið hefur sína eigin **Afturkalla** og **Endurgera** (eitt skref fyrir hverja skipun). Yfirborðin eru vistuð í `.modelcraft`-skránni með líkaninu; þau eru ekki hluti af eigin afturköllun líkansins, eins og efni skráarinnar.

**STEP…** (AP242) og **IGES…** vista ferla og yfirborð nákvæmlega eins og þau eru (B-spline ferlar og yfirborð, ekkert breytt í þríhyrninga). Hvert yfirborð er sinn eigin flötur, með klippingu sinni; föst form eru skrifuð sem einn lokaður skel, hver brún deilir sínum tveimur fletum eins og önnur CAD-forrit búast við (stöðulínan segir hversu mörg föst form fóru út þannig). Í IGES er sama fasta form ein manifold föst B-rep-eining (eining 186 yfir lokaðri skel 514, fletir 510, lykkjur 508, einn brúnalisti 504 og einn hnitalisti 502); fast form þar sem fletir passa ekki saman brún fyrir brún er skrifað sem aðskildir fletir, og línan segir það. **Flytja inn…** les slíkt fast form til baka sem fast form, bæði úr STEP og IGES. Það les ferla og yfirborð sem eru skrifuð þannig og `.ccnurbs`-flekasöfn; föst form úr STEP-skrám annarra forrita opnast með Skrá › Flytja inn sem möskvar.

## Yfirborð úr skönnun (bakverkfræði)

Veldu skannaða möskvann í líkaninu (ekkert valið þýðir allt sem er sýnt), opnaðu **Yfirborð**, og veldu í **Skönnun**-hópnum **Aðlaga yfirborð að skönninni**. Tólið leitar að **sléttum flötum**, **sívölum**, **kúlum** og **keilum** (nákvæmu yfirborðunum sem vélunnir hlutar eru gerðir úr; hver röð sýnir radíusinn eða hálfhornið sem það fann), finnur **ávalanir** (ávalar brúnir og horn: lítinn strokk eða kúlu sem snertir tvo eða fleiri aðra fleti, sýnd með radíusinum og flötunum sem hún tengir), **hringávalir** (tóra: ávalda brúnina þar sem flatur flötur mætir strokk eða keilu, sýnd með radíusinum og hringradíusnum sínum) og **breytilegar ávalanir** (ávalda brún sem breytir radíus eftir sér, sýnd með radíusinum á hvorum enda), aðlagar **einn frjálsan flekk** að sléttu, mildlega bognu stykki, og sker hvern flöt að útlínu þess hluta skönnunarinnar sem hann kom úr, svo göt og horn haldist. Valkostir: **vikmörkin** (hversu langt, í mm, skannapunktur má vera frá sléttu eða sívölu og samt tilheyra því, og markmið fyrir frjálsan flekk), **minnsti hlutinn** (hlutdeild af flatarmáli yfirborðsins) og **flestir fletir**. Sama skönnun og sömu valkostir gefa alltaf sömu fleti.

Niðurstaðan er tafla, ein röð á hvern flöt: gerð hans, hversu margir þríhyrningar hann kom úr, og villan **mæld frá skönnuninni að fletinum** (rms, sú stærsta, og hlutdeild punkta innan vikmarkanna). Mældu punktarnir eru hnit skönnunarinnar og miðja hvers þríhyrnings. Villan er ekki mæld á hinn veginn (flötur að skönnun), svo flötur sem nær út fyrir skönnunina myndi ekki sjást. Athugasemdin undir töflunni segir líka hversu mikið af flatarmálinu var of lítið til að passa. Í sýninni eru skannapunktarnir litaðir eftir **frávikskorti**: blátt á fletinum, grænt hálfa leið að vikmörkunum, rautt við vikmörkin eða yfir þau (afveldu **Sýna frávikskortið** til að fela það). Hlutar sem brotna saman á sjálfa sig (til dæmis lokað rör sem er aðlagað með frjálsum flekkjum) eru skráðir sem ekki aðlagaðir, og þvingaðir aldrei í einn flöt.

**Sauma yfirborðin í fast form** saumar hvert sýnt yfirborð sem er ekki í föstu formi í eitt lokað fast form. Skannaflatir mætast aðeins innan eigin skekkju skönnunarinnar, svo það reynir minnstu samskeytafjarlægð sem lokar (aldrei meira en **saumfjarlægðin** sem þú setur) og hafnar með orðum þegar flatirnir lokast ekki. Það fyllir aldrei upp í bil. Kassi með ávölum brúnum saumast þegar ávalanir hans fundust sem fletir út af fyrir sig; samskeytafjarlægðin sem lokaði er í niðurstöðunni. Fasta formið virkar þá með Sameina, Draga frá, Skera saman og **Bæta við líkanið**.

Hvað það gerir ekki: **hringávalir** (tóra) eru aðeins leitaðar umhverfis ás sívals eða keilu sem þegar er fundinn, og **breytilegar ávalanir** aðeins eftir frekar beinni brún (snið hennar eru skorin hornrétt á eina átt); annars verða þær að frjálsum flekkjum þegar þær eru nógu sléttar, og annars skildar eftir. Kúlur, keilur og ávalanir eru fundnar með slembisýnatöku, svo mjög lítil (nokkrir þríhyrningar) getur sloppið. Frávikskortið sýnir fjarlægðina frá skönnuninni að fletinum, ekki á hinn veginn. Mjög stórar skannanir (yfir 300.000 þríhyrninga) eru hafnaðar hér. Fletir á heilum hring sívals eru skornir umhverfis göt, með saumnum settum þar sem ekkert gat er. Athugaðu hvern flöt á móti skönnuninni áður en þú treystir honum.

## Ekki tilbúið enn

Ávalar brúnir sem mætast í horni á bognum flötum eða með mismunandi radíusum (hornblöndun), ávalar milli flata sem mætast ekki, innri ávöl sem endar á hallandi eða bognum fleti, og Boolean-aðgerðir og ávalanir reiknaðar á yfirborðunum án þríhyrninga (hér vinnur vél fyrir föst form á þríhyrningum innan vikmarka, og hver punktur er þá settur aftur á nákvæmu yfirborðin).
