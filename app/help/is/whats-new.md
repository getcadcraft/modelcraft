---
title: Nýtt í 0.9
summary: Prentstig með eigin sneiðara og sending á USB, Klipper, OctoPrint og PrusaLink, sneiðing fyrir þráð og plastefni og viðbætur fyrir skrár, efnisflæði, stafrænan tvíbura og viðbætur fyrir verksmiðjugólf, NURBS-rúnanir, þykknun og skönnunarpassun, AR á byggingarstað og tíu bogaaðferðir.
keywords: hvað er nýtt, hvað er nýtt, útgáfuskýringar, breytingaskrá, 0.9, prentstig, þrívíddarprentun, senda í þrívíddarprentara, sneiðari, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, plastefni, plastefnisprentun, goo, sl1, ctb, anycubic, lýsingarpróf, efnisflæði, stafrænn tvíburi, verksmiðjugólf, plc, færiband, nurbs, rúnun, þykkva, skönnunarpassun, ar, á staðnum, bogaaðferðir, einingar, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, vél, opna í, usd, gltf, unreal, viðbótarvél, loft, sópun, samfella, g0, g1, g2, zebra, step, iges, lýsa senunni, sena, veður, tími dags, árstíð, aðstoðarmaður, efni úr mynd, mynd, skissumynd, innrétta, innrétta rými, skáskurður, skipting, prentathugun, vandamál, eiginleikanet, lampar, tungumál, inntakstæki, tækjastikuraðir, dwg, lifandi
from: 169048a2
---

Þetta er það sem breyttist í ModelCraft 0.9, miðað við 0.8.1. ModelCraft nær nú til prentarans og verksmiðjugólfsins: þú getur sett hluti á prentbeðið og sent þá án útflutnings, sneitt fyrir þráð eða plastefni og skipulagt efnismeðhöndlunarlínu. Þetta er CadCraft Studio 0.9 og átta forrit þess; flestir nýju eiginleikarnir hér að neðan eru viðbætur.

## Nýtt

### Þrívíddarprentun

- **Prentstig.** Smelltu á {{ui:Prentstig}} í tækjastikunni. Bættu hlutum úr Safni á prentbeð prentarans, raðaðu þeim, skoðaðu sneiddu lögin og ýttu á {{ui:Senda í þrívíddarprentara}}, án þess að flytja út STL-skrá. Það tilheyrir 3D Print viðbótinni, sem er kveikt á sjálfgefið og má fjarlægja eins og hverja aðra viðbót. Sjá [Settu hluti á prentbeðið og sendu þá í prentara](topic:print-stage).
- **Okkar eigin þráðarsneiðari.** {{ui:CadCraft basic (fylgir, hraðvirkast)}} er sneiðarinn í **Sneiðari**-lista spjaldsins: veggir, yfirborðslög, fylling, stoðir og pilsi (skirt), á vinnsluþræði svo síðan haldist nothæf. {{ui:Forskoða lög}} með **Lag**-sleðanum sýnir lögin áður en þú sendir. Prentaraprófílar eins og Ender-3 og Prusa MK4 bera sinn eigin upphafs-G-kóða.
- **Sending.** Um USB (Chrome eða Edge á tölvu, með síðunni opinni), eða til Klipper (Moonraker), OctoPrint eða PrusaLink á netinu þínu. Ekkert tengist eða sendir án smells, og sending spyr fyrst.
- **Aðrir sneiðarar.** Kiri:Moto, PrusaSlicer og OrcaSlicer eru viðbætur hver fyrir sig, sjálfgefið slökktar; bættu þeim við af spjaldinu eða úr {{ui:Stillingar}} › {{ui:Viðbætur}}. PrusaSlicer og OrcaSlicer nota þitt eigið uppsetta eintak úr CadCraft Studio. Viðbótin Bambu Lab prentarar sneiðir með þínum OrcaSlicer og P2S-forstillingum og þarfnast Studio á tölvu.
- **Plastefnisprentun.** Plastefnisviðbæturnar (sjálfgefið slökktar) búa til lagamyndir fyrir skjá prentarans þíns, með holun og loftgötum, fleka og stoðum, forskoðun laga, og tíma, plastefni og kostnað. Skráarsniðsviðbætur skrifa Elegoo GOO, SL1, Chitubox (CBDDLP og CTB 2 til 5) og Anycubic (PWMX og PWS). Lýsingarpróf fyrir plastefni býr til stiga með fimm lýsingum. Sjá [Sneiðing fyrir plastefnisprentara](topic:resin-printing).
- **Óbreytt.** {{ui:Flytja út}} › {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}, prentverkfærin og Skipting fyrir prentun virka eins og í 0.8. Sjá [Gerðu líkan tilbúið fyrir þrívíddarprentun](topic:print-3d).

### Efnisflæði, stafrænn tvíburi og verksmiðjugólf

Þessir þrír eru viðbætur, slökkt þar til þú kveikir á þeim í {{ui:Stillingar}} › {{ui:Viðbætur}}, og hver hefur sína hjálp þegar kveikt er á henni.

- **Efnisflæði.** Spjald sem heitir Efnisflæði leggur út færibönd, stöðvar, biðminni og AGV-slóðir í þrívíddarsýninni, keyrir uppgerð með fræi, spilar hana til baka og sýnir afköst, afhendingartíma og biðraðir, með niðurstöðum vistuðum sem CSV. Pantanir geta komið úr CSV-skrá. Vélmennafrumur er hægt að athuga og flytja út. PLC-tengingin hefur mjúkan hátt og raunhátt yfir Modbus TCP, sem virkar aðeins í CadCraft Studio.
- **Stafrænn tvíburi.** Les útlit Efnisflæðis og keyrir mjúkan PLC á því, með bilunum sem þú getur þvingað, lagerprófunum, samanburði útlita og efnislista.
- **Verksmiðjugólf.** Breytir stöðvunum í vélar og frumur, les þær í beinni útsendingu eða úr hermi, og heldur verkaröð og einfaldri OEE. Það les eingöngu: þessi útgáfa getur ekki skrifað í vél eða PLC.

### Yfirborð, líkön og teikning

- **Rúnanir, þykknun og aðgerðir á NURBS.** {{ui:Yfirborð}}-spjaldið hefur {{ui:Rúnun milli flata}}, {{ui:Rúna nokkrar brúnir}}, {{ui:Þykkva í fasthluta}} og Sameina, Draga frá og Skerast, hvert með sitt mælda frávik. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Fella fleti að skönnun.** Veldu skannaðan möskva og notaðu {{ui:Fella fleti að skönnun}} í **Skönnun**-hópnum, og síðan {{ui:Sauma fleti saman í rúmtak}}. Þetta er fyrsta passun, ekki fullur pakki fyrir öfugvirkjun.
- **Bein tenging frá .3dm-hönnunarforriti.** Í eina átt, frá Rhino 8 eða Grasshopper, og þarfnast CadCraft Studio á sömu tölvu. Sjá [Haltu .3dm-líkani lifandi](topic:live-3dm-link).
- **Skoðaðu líkanið á staðnum.** {{ui:Skoða á byggingarstað (AR, sími)}} í {{ui:Sýnir}}-valmyndinni virkar á Android-síma með Chrome. Sjá [Skoðaðu líkanið á staðnum með Android-síma (AR)](topic:ar-on-site).
- **Bogaaðferðir.** {{ui:Bogaaðferðir}}-fellilistinn býður upp á tíu leiðir til að teikna boga, þar á meðal {{ui:3 punktar}} og {{ui:Byrjun, miðja, endir}}.
- **Fleiri einingar.** Þyngdir (kg, lb, t, ton) og hitastig (gráður C, F, K og R) skiljast þar sem þú slærð inn gildi með einingum.

## Í hverju forriti

- **Ábendingar.** Texti sem birtist þegar bent er á hnappa og afskorin heiti er Bootstrap-ábending (tooltip).
- **Lokanleg byrjunarábending.** Ábendingaspjaldið á tómu teikniflötinni er með lítinn lokunarhnapp. Það helst lokað, og skipanaskúffan getur sýnt það aftur.
- **Skrollanlegar fliparaðir.** Fliparöð spjalds sem passar ekki skrollar í stað þess að vera skorin af.
- **Flipaheiti.** Með skjali opnu byrjar flipi vafrans á nafni skjalsins, síðan ModelCraft og CadCraft. Punktur kemur fyrst á meðan það er óvistað.
- **Uppsetning.** {{ui:Stillingar}} › {{ui:Almennt}} › Uppsetning geymir uppsetningarnar í fellilista, með valkosti um að nota uppsetningu fyrir þetta forrit eitt og hnapp til að endurstilla uppsetninguna.
- **Tungumál.** Tungumálalistinn í Stillingum fylgir tungumálaskránum sem smíðin inniheldur. Önnur tungumál en enska eru vélþýðingar.
- **Lifandi og Safn.** Live TeamWork sýnir lifandi bendla og nöfn, og söfn í Safni gefa hverju forriti sjálfgefið safn.

## Lagfært

- {{ui:Spila}} verður {{ui:Hlé}} meðan hreyfimynd spilast, og {{key:Space}} spilar og gerir hlé meðan tímalínan er opin.
- Kyrrmyndin fellur aftur á WebGL þegar skjákortið getur ekki ræst slóðarekjarann. Lifandi myndsýnin gæti ennþá sýnt villuna; þetta var ekki prófað á Windows-tölvu með þeim rekli.
- Raunhamur Efnisflæðis tengist aftur eftir að tenging lauk á PLC-undantekningarsvörum.

## Heiðarleg takmörk

- Ekkert hefur verið prentað á raunverulegan prentara: hvorki þráður, plastefni né gegnum Bambu Connect. Plastefnisskrár hafa aðeins verið lesnar til baka af eigin lesurum CadCraft.
- Stafrænn tvíburi og verksmiðjugólf voru prófuð gegn hermum og þekktum svörum eingöngu, án raunverulegs PLC, línu eða samskiptareglu. Þau eru hjálpartæki við athuganir, ekki öryggisprófun. Eðlisfræði nær aðeins yfir kassa, allt að átta álögum.
- Rhino- og Grasshopper-tengingin hefur aldrei keyrt í raunverulegu forritunum.
- Tungumál önnur en enska eru vélþýðingar.

## Fyrr: 0.8 og 0.8.1

Þetta er það sem breyttist í ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), miðað við 0.7. Valmyndin {{ui:Myndgera mynd…}} getur nú sent senuna í annað forrit, Yfirborðsspjaldið býr til mjúk frjáls yfirborð, og aðstoðarmaður sem þú tengir getur sett upp heila senu úr einni setningu.

### Nýtt

**Myndgerð**

- **Vél-val.** {{ui:Myndgera mynd…}} hefur **Vél**-lista fyrir ofan Hamur. Okkar eigin tvær vélar, Fast og Slóðarekjarinn, eru sjálfgefnar og virka alls staðar. Aðrir valkostir vista senuna sem pakka (líkanið sem USD-skrá, auk stillingarskrár með nákvæmum efnisgildum, lömpum sem eru kveiktir, sólinni, himninum, lýsingunni og myndavélinni) til að fara með í annað forrit. Mynd sem annað forrit teiknar segir hvaða forrit og útgáfa bjó hana til. Sjá [Veldu hvaða forrit teiknar myndina](topic:render-engines).
- **Opna í öðru forriti.** Vél-listinn getur vistað senuna sem USD-skrá, glTF-skrá (`.glb`) eða Unreal-verkefnismöppu (`.zip`), í vafranum og í CadCraft Studio. Í Studio getur hann líka ræst usdview eða eigin forriti tölvunnar fyrir skrána. Sjá [Opnaðu senuna í öðru forriti](topic:render-open-in).
- **Senda í leikjavél úr Studio.** Studio skrifar senuna í Unreal Engine-verkefni og heldur henni í takt við hverja sendingu, í eina átt. Þínar eigin breytingar lifa í lagi sem CadCraft skrifar aldrei. Sjá [Sendu senuna í leikjavél](topic:render-unreal).
- **Vélar úr viðbótum.** Viðbót getur bætt vél á listann. Ein skrifuð í JavaScript teiknar í vafranum og í Studio; ein sem keyrir forrit þarfnast samþykkis þíns í Studio. Sjá [Teiknaðu myndina með öðru forriti](topic:render-other-program) og [Bættu myndgerðarvél við með viðbót](topic:render-engine-addons).
- **Lýstu senunni.** Segðu tengda aðstoðarmanninum þínum „rökkur, léttur regn, haustatré, fólk á torginu“ og ModelCraft setur hana upp í einu skrefi: sólin færist að dagsetningu og tíma svo skuggar fylgi, himinninn breytist, blaut yfirborð birtast, og tré og fólk eru sett inn sem raunverulegir hlutir á merkjum sem þú getur falið, fært eða eytt. Tími dags, dagsetning eða árstíð, og veður (heiðskírt, skýjað, þoka, léttur regn, rigning, stormur) virka líka ein og sér, og síðari beiðni breytir sömu senu. Þoka sést í hágæðamyndinni á skjákortinu; hinar vélarnar sýna himininn, ljósið og blaut yfirborð. Rigning er ekki teiknuð sem fallandi strik.

**Efni**

- **Efni úr einni mynd.** Gefðu ModelCraft mynd af yfirborði (vegg, gólfi, steini) og það býr til flísanlegt efni: lýsingin yfir myndina er jöfnuð, brúnirnar látnar tengjast, og litakort, grófleikakort og eðlilegt kort eru reiknuð út úr myndinni. Þetta er einföld myndvinnsla á þinni eigin mynd, án þjálfaðs líkans. Grófleiki er mat. Slétt, ferhyrnd, bein mynd gefur bestu flísina; sterkt mynstur eins og múrsteinar getur sýnt mjúkan draug þar sem samskeytin eru blönduð.

**Yfirborð**

- **Frjáls yfirborð.** {{ui:Yfirborð}}-spjaldið býr til NURBS-ferla og óklippt yfirborð: ferla í gegnum punkta, loft, reglubundin, útdrátt, snúning, sópanir eftir einni eða tveimur teinum, yfirborð úr netum ferla, plástra úr fjórum brúnum, jöfnun og blöndun. Sérhver sameiginleg brún er mæld sem G0, G1 eða G2 (bil, horn, sveigjustökk) á nákvæmu yfirborðunum, og brún verri en þú baðst um birtist í Vandamálaspjaldinu með lagfæringunni **Jafna**. Zebra-rendur og sveigjulitir eru teiknaðir út frá nákvæmu yfirborðunum. STEP- og IGES-skrár fara út og inn. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).

**Staður og herbergi**

- **Skissumynd á jörðina.** {{ui:Skrá}} › {{ui:Flytja inn skissumynd…}} breytir símamynd af handskissu í brúnir á jörðinni í þeim mælikvarða sem þú nefnir: einn hópur, með merki fyrir hvern pennalit. Blaðið er fundið og rétt af á tölvunni þinni, og ekkert er sent neitt. Sjá [Líkan á lóðarteikningu](topic:site-plan).
- **Innrétta herbergi.** Veldu gólf og notaðu {{ui:Skipuleggja}} › {{ui:Innrétta rými…}}. Svefnherbergis-, stofu-, borðstofu-, eldhús-, baðherbergis- eða skrifstofuhúsgögn eru sett eftir reglum, upp við veggi og frá hurðum og gluggum, í einum hópi sem þú getur fjarlægt í einu skrefi. Þetta er sjálfgefið skipulag til yfirferðar, ekki hönnun. Sjá [Byrjunarsafn](topic:starter).

**Þrívíddarprentun**

- **Skáskurðir.** Skipting fyrir prentun getur skáskorið skurði sína um allt að 60 gráður, sem gefur hlutunum meira límflöt. Tengi standa rétt á skurðinum. Sjá [Skiptu líkani fyrir prentun](topic:print-split).
- **Prentathugunin í Vandamálum.** Niðurstöður prentathugunar birtast í Vandamálaspjaldinu með merkjum á líkaninu, og Lagfæra lagar þær þaðan. Sjá [Stoðir, veggþykkt, holun og viðgerð](topic:print-tools).

**Í hverju forriti**

- **Tungumál.** Hjálp og forrit koma á 54 tungumálum. Tíu eru ný: litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí og úsbeska. Tungumál önnur en enska eru vélþýðingar þar til móðurmálsmaður hefur lesið þau, og hjálparefni gæti ennþá verið á ensku.
- **Inntakstæki.** Snertiflötur, penni, þrívíddarmús, leikjastýring og MIDI-stýringar geta stjórnað forritunum, fyrir þau öll eða eitt.
- **Tækjastikuraðir.** {{ui:Stillingar}} › {{ui:Almennt}} › Tækjastikuraðir stillir Vefja (eins og áður), 2 raðir eða 1 röð. Stika sem passar ekki skrollar til hliðar í stað þess að taka pláss af teikningunni. Vefja er áfram sjálfgefið.
- **Eiginleikanet.** Lampareitir ModelCraft nota sameiginlega netið: samanfellanlega flokka, dálka fyrir heiti og gildi, og Þétt þéttleika. Innsláttur reikniaðgerða eins og `2*450` virkar áfram.
- **Vandamál.** Vandamálaspjaldið (viðvörunarhnappurinn í forritastikunni) er sameiginlegt öllum forritunum. Í ModelCraft geymir það prentathugunina og viðvaranir um samfellu yfirborða.
- **Lifandi.** Live TeamWork-fundur sýnir hver er hvar. Sjá [Módelaðu saman með Live TeamWork](topic:work-live).
- **Viðbætur.** Viðbætur geta bætt við myndgerðarvélum, eins og að ofan.
- **Tengdu gervigreindina þína.** Verkfærasamningurinn og athuganirnar á átta forritunum standast, með 454 verkfærum alls. Eins smells tenging innan Studio, hýstur tengill fyrir vafraaðstoðarmenn, eigin lykill innan Studio og birtur pakki eru ekki lofuð enn. Forritin innihalda enga gervigreind sjálf. Sjá [Notaðu ModelCraft með gervigreindaraðstoðarmönnum](topic:use-with-ai-assistants).

### Lagfært í 0.8.1

- **Kaflinn um DWG-flokka.** Kafli um flokka í DWG-skrá var lesinn sem röng tegund, sem gat skemmt skrána við innflutning. Hann er lesinn rétt núna, í ModelCraft og í hinum forritunum sem lesa DWG.
- **Spjaldtölvur í portrait.** Auka rúðuhæð fer í teikniflötinn, og blaðuppsetningin byrjar við 760 pixla breidd eða minna. Stílblað ModelCraft hefur breytinguna líka.
- **Tungumál í Studio.** CadCraft Studio og pakkaðar útgáfur geta skipt um tungumál meðan þær keyra; áður voru þær eingöngu á ensku. Þetta hefur ekki verið prófað á hverjum vettvangi enn: láttu okkur vita ef tungumálið breytist ekki.

### Ekki komið í þessa útgáfu enn

- **Ekki kóðaundirritað.** Windows gæti sýnt SmartScreen: veldu {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, hægrismelltu og veldu {{ui:Opna}}. Búðarútgáfur eru í bið, og iPad- og iPhone-smíðin var ekki endurbyggð fyrir 0.8.1.
- Annað forrit sem teiknar myndina án myndgerðarvélarviðbótar, víðmyndar- eða þrívíddarmyndavélar og himinmynd gegnum annað forrit, og viðbótin sem opnar Unreal-sviðið, eru ekki komin enn. Skrárnar eru skrifaðar; viðbótin er ekki gefin út og hefur ekki verið keyrð í Unreal.
- Frjáls yfirborð: G3 og flokkur A eru ekki mæld né fullyrt, og klipping og fasthlutar koma síðar.
- Myndir úr öðrum forritum eru ekki pixla fyrir pixla eins og okkar: aðeins myndavélin, sólin, lampar og lýsing passa.
- Lagfæringin í 0.8.1 fyrir tungumálaskiptin í Studio er ekki prófuð á hverjum vettvangi.

Allt annað er í [Ekki búið enn](topic:not-built-yet). Fyrir fyrri útgáfuna, sjá [Nýtt í 0.7](topic:whats-new-0-7).
