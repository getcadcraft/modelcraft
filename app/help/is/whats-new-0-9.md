---
title: Nýtt í 0.9 (eldra)
summary: Prentstig með eigin sneiðara og sendingu um USB, Klipper, OctoPrint og PrusaLink, sneiðing fyrir plastefni og skráaviðbætur, efnisflæði, viðbætur fyrir stafrænan tvíbura og verksmiðjugólf, NURBS-rúnanir, þykknun og skannaaðlögun, AR á staðnum og tíu bogaaðferðir.
keywords: nýtt í 0.9, eldri útgáfa, nýtt, hvað er nýtt, útgáfuskýringar, breytingaskrá, 0.9, prentstig, þrívíddarprentun, senda í þrívíddarprentara, sneiðari, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, plastefni, plastefnisprentun, goo, sl1, ctb, anycubic, lýsingarpróf, efnisflæði, stafrænn tvíburi, verksmiðjugólf, plc, færiband, nurbs, rúnun, þykkva, skönnunaraðlögun, ar, á staðnum, bogaaðferðir, einingar, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, myndgerðarvél, vél, opna í, usd, gltf, unreal, vélaviðbót, yfirborð, loft, sópa, samfella, g0, g1, g2, sebra, step, iges, segðu senuna, sena, veður, tími dags, árstíð, aðstoðarmaður, efni úr mynd, mynd, skissumynd, innrétta, innrétta herbergi, skáskurður, skipting, prentathugun, vandamál, eiginleikanet, lampar, tungumál, inntakstæki, tækjastikuraðir, dwg, í beinni
from: 2717d1b1
---

Þetta er það sem breyttist í ModelCraft 0.9 miðað við 0.8.1. ModelCraft nær nú til prentarans og gólfs verksmiðjunnar: þú getur sett hluti á prentbakka og sent þá án útflutnings, sneitt fyrir þráð eða plastefni og skipulagt efnismeðhöndlunarlínu. Þetta er CadCraft Studio 0.9 og öppin átta; flestir nýju eiginleikarnir hér að neðan eru viðbætur.

## Nýtt

### Þrívíddarprentun

- **Prentstig.** Smelltu á {{ui:Prentstig}} á tækjastikunni. Bættu safnatriðum á prentbakka prentarans, raðaðu þeim, skoðaðu sneiddu lögin og ýttu á {{ui:Senda í þrívíddarprentara}}, án þess að flytja út STL. Það tilheyrir viðbótinni 3D Print, sem er kveikt á sjálfgefið og má fjarlægja eins og hverja aðra viðbót. Sjá [Settu hluti á prentbakkann og sendu þá í prentara](topic:print-stage).
- **Eigin þráðarsneiðari.** {{ui:CadCraft basic (fylgir, hraðvirkast)}} er sneiðarinn í **Sneiðari**-listanum á kortinu: veggir, yfirborðslög, fylling, stoðir og pilsrönd, keyrt á vinnsluþræði svo síðan haldist nothæf. {{ui:Forskoða lög}} með **Lag**-sleðanum sýnir lögin áður en þú sendir. Prentarasnið eins og Ender-3 og Prusa MK4 bera sína eigin upphafs-G-kóða.
- **Sending.** Um USB (Chrome eða Edge á tölvu, með síðuna opna), eða til Klipper (Moonraker), OctoPrint eða PrusaLink á netinu þínu. Ekkert tengist eða sendir án smells, og sending spyr fyrst.
- **Aðrir sneiðarar.** Kiri:Moto, PrusaSlicer og OrcaSlicer eru eigin viðbætur, slökktar sjálfgefið; bættu þeim við af kortinu eða úr {{ui:Stillingar}} › {{ui:Viðbætur}}. PrusaSlicer og OrcaSlicer nota þitt eigið uppsetta eintak úr CadCraft Studio. Viðbótin fyrir Bambu Lab prentara sneiðir með OrcaSlicer og P2S-forstillingum þess og þarf Studio á tölvu.
- **Prentun á plastefni.** Plastefnisviðbæturnar (slökktar sjálfgefið) búa til lagamyndir fyrir skjá prentarans, með holun og loftgötum, fleka og stoðum, lagaforskoðun og tíma, plastefni og kostnaði. Skráarsniðsviðbætur skrifa Elegoo GOO, SL1, Chitubox (CBDDLP og CTB 2 til 5) og Anycubic (PWMX og PWS). Lýsingarpróf fyrir plastefni býr til stiga með fimm lýsingum. Sjá [Sneiddu fyrir plastefnisprentara](topic:resin-printing).
- **Óbreytt.** {{ui:Flytja út}} › {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}, prentverkfærin og Skipting fyrir prentun virka eins og í 0.8. Sjá [Gerðu líkan tilbúið fyrir þrívíddarprentun](topic:print-3d).

### Efnisflæði, stafrænn tvíburi og verksmiðjugólf

Þessi þrjú eru viðbætur, slökkt þar til þú kveikir á þeim í {{ui:Stillingar}} › {{ui:Viðbætur}}, og hver hefur sína eigin hjálp þegar hún er komin á.

- **Efnisflæði.** Spjald sem heitir Efnisflæði setur út færibönd, stöðvar, biðminni og AGV-leiðir í þrívíddarglugganum, keyrir hermun með föstu upphafsgildi, spilar hana til baka og sýnir afköst, afhendingartíma og biðraðir, með niðurstöðum vistuðum sem CSV. Pantanir geta komið úr CSV-skrá. Vélmennafrumur má athuga og flytja út. PLC-tengingin hefur mjúka stillingu og raunstillingu yfir Modbus TCP, sem virkar aðeins í CadCraft Studio.
- **Stafrænn tvíburi.** Les skipulag Efnisflæðis og keyrir mjúkt PLC á því, með bilunum sem þú getur þvingað fram, lagerprófunum, samanburði á skipulagi og efnislista.
- **Verksmiðjugólf.** Breytir stöðvunum í vélar og frumur, les þær í beinni eða úr hermi, og heldur verkaröð og einföldu OEE. Það les aðeins: þessi útgáfa getur ekki skrifað í vél eða PLC.

### Yfirborð, líkön og teikning

- **Rúnanir, þykknun og aðgerðir á NURBS.** {{ui:Yfirborð}}-spjaldið hefur {{ui:Rúnun milli flata}}, {{ui:Rúna nokkrar brúnir}}, {{ui:Þykkva í fasthluta}} og Sameina, Draga frá og Skerast, hver með mældu frávikagildi. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Fella fleti að skönnun.** Veldu skannað möskva og notaðu {{ui:Fella fleti að skönnun}} í **Skönnun**-hópnum, síðan {{ui:Sauma fleti saman í rúmtak}}. Þetta er fyrsta aðlögun, ekki fullur pakki fyrir öfugverkfræði.
- **Lifandi tenging við .3dm-hönnunarforrit.** Í eina átt, frá Rhino 8 eða Grasshopper, og hún þarf CadCraft Studio á sömu tölvu. Sjá [Hafðu .3dm-líkan í beinni](topic:live-3dm-link).
- **Skoðaðu líkanið á byggingarstað.** {{ui:Skoða á byggingarstað (AR, sími)}} í {{ui:Sýnir}}-valmyndinni virkar á Android síma með Chrome. Sjá [Skoðaðu líkanið á byggingarstað með Android síma (AR)](topic:ar-on-site).
- **Bogaaðferðir.** {{ui:Bogaaðferðir}}-fellilistinn býður upp á tíu leiðir til að teikna boga, þar á meðal {{ui:3 punktar}} og {{ui:Byrjun, miðja, endir}}.
- **Fleiri einingar.** Þyngdir (kg, lb, t, ton) og hitastig (gráður C, F, K og R) skiljast þar sem þú slærð inn gildi með einingum.

## Í öllum öppum

- **Vísbendingar.** Texti sem birtist þegar bendillinn er yfir hnöppum og styttum heitum er Bootstrap-vísbending.
- **Lokanlegt byrjunarspjald.** Ráðskortið á tómu teikningasvæði er með litlu x til að loka. Það helst lokað, og skipanaleitin getur sýnt það aftur.
- **Skrollandi flipaslár.** Flipaslá spjalds sem passar ekki skrollast í stað þess að vera skorin af.
- **Flipaheiti.** Þegar skjal er opið byrjar vafraflipinn á nafni skjalsins, síðan ModelCraft og CadCraft. Punktur kemur fyrst meðan það er óvistað.
- **Uppsetning.** {{ui:Stillingar}} › {{ui:Almennt}} › Uppsetning geymir uppsetningarnar í fellilista, með vali um að nota uppsetningu fyrir þetta forrit eitt og hnapp til að endurstilla uppsetninguna.
- **Tungumál.** Tungumálalistinn í Stillingum fylgir þýðingarskránum sem smíðin inniheldur. Önnur tungumál en enska eru vélþýðingar.
- **Í beinni og Safn.** Live TeamWork sýnir bendla og nöfn í beinni, og söfn í Safni gefa hverju forriti sjálfgefið safn.

## Lagfært

- {{ui:Spila}} breytist í {{ui:Hlé}} meðan hreyfimynd spilast, og {{key:Space}} spilar og gerir hlé meðan tímalínan er opin.
- Kyrrmyndin fellur aftur á WebGL þegar skjákortið getur ekki ræst slóðarekjarann. Lifandi myndgerðargluggi gæti enn sýnt villuna; þetta var ekki athugað á Windows-vél með þeim rekli.
- Raunstilling Efnisflæðis tengist aftur eftir að tenging lauk á PLC-svörum með villu.

## Takmarkanir

- Ekkert hefur verið prentað á raunverulegan prentara: ekki þráður, ekki plastefni, ekki í gegnum Bambu Connect. Plastefnisskrár hafa verið lesnar aftur eingöngu af lesurum CadCraft.
- Stafræni tvíburinn og verksmiðjugólfið hafa verið prófuð á hermum og þekktum svörum eingöngu, án raunverulegs PLC, línu eða samskiptareglu. Þau eru hjálpartæki við athuganir, ekki öryggisprófun. Eðlisfræðin nær aðeins yfir kassa, allt að átta álögum.
- Tengingin við Rhino og Grasshopper hefur aldrei keyrt í raunverulegu forritunum.
- Önnur tungumál en enska eru vélþýðingar.

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), miðað við 0.7. {{ui:Myndgera mynd…}}-glugginn getur nú sent senuna til annars forrits, Yfirborð-spjaldið býr til mjúk frjáls yfirborð, og aðstoðarmaður sem þú tengir getur sett upp heila senu með einni setningu.

### Nýtt

**Myndgerð**

- **Vélarval.** {{ui:Myndgera mynd…}} er með **Vél**-lista fyrir ofan Hamur. Okkar eigin tvær vélar, Hröð og Slóðarekjari, eru sjálfgefnar og virka alls staðar. Aðrar færslur vista senuna sem pakka (líkanið sem USD-skrá, auk stillingaskrár með nákvæmum efnisgildum, kveiktum ljósum, sólinni, himninum, lýsingunni og myndavélinni) til að taka með í annað forrit. Mynd sem annað forrit teiknaði segir hvaða forrit og útgáfu gerðu hana. Sjá [Veldu hvaða forrit teiknar myndina](topic:render-engines).
- **Opna í öðru forriti.** Vél-listinn getur vistað senuna sem USD-skrá, glTF-skrá (`.glb`) eða Unreal-verkefnismöppu (`.zip`), í vafranum og í CadCraft Studio. Í Studio getur hann einnig ræst usdview eða eigið forrit tölvunnar fyrir skrána. Sjá [Opnaðu senuna í öðru forriti](topic:render-open-in).
- **Senda í leikjavél úr Studio.** Studio skrifar senuna í Unreal Engine-verkefni og heldur henni í takt við hverja sendingu, aðeins í eina átt. Þínar eigin breytingar eru í lagi sem CadCraft skrifar aldrei í. Sjá [Sendu senuna í leikjavél](topic:render-unreal).
- **Vélar úr viðbótum.** Viðbót getur bætt vél á listann. Vél skrifuð í JavaScript teiknar í vafranum og í Studio; vél sem keyrir forrit þarf samþykki þitt í Studio. Sjá [Teiknaðu myndina með öðru forriti](topic:render-other-program) og [Bættu myndgerðarvél við með viðbót](topic:render-engine-addons).
- **Segðu senuna.** Segðu tengda aðstoðarmanninum „rökkur, léttur regn, haustlituð tré, fólk á torginu“ og ModelCraft setur þetta upp í einu skrefi: sólin færist að dagsetningu og tíma svo skuggarnir fylgi, himinninn breytist, blautir fletir birtast, og tré og fólk eru sett inn sem alvöru hlutir á merkjum sem þú getur falið, fært eða eytt. Tími dags, dagsetning eða árstíð, og veður (heiðskírt, skýjað, þoka, léttur regn, rigning, stormur) virka líka ein og sér, og síðari beiðni breytir sömu senu. Þoka sést í hágæðamyndinni á skjákortinu; hinar vélarnar sýna himininn, ljósið og blautu fletina. Rigning er ekki teiknuð sem fallandi strik.

**Efni**

- **Efni úr einni mynd.** Gefðu ModelCraft mynd af fleti (vegg, gólfi, steini) og það býr til flísanlegt efni: birtan yfir myndina er jöfnuð, brúnirnar látnar tengjast, og litakort, grófleikakort og eðlilegt kort eru reiknuð út frá myndinni. Þetta er einföld myndvinnsla á þinni eigin mynd, án þjálfaðs líkans. Grófleiki er mat. Slétt, ferhyrnd og bein mynd gefur bestu flísina; sterkt mynstur eins og múrsteinar getur sýnt mjúkan draug þar sem samskeytin eru blönduð.

**Yfirborð**

- **Frjáls yfirborð.** Yfirborð-spjaldið býr til NURBS-ferla og óklippta fleti: ferla í gegnum punkta, loft, reglulega fleti, útdrætti, snúninga, sópanir eftir einum eða tveimur teinum, yfirborð úr ferlaneti, plástra úr fjórum brúnum, samsvörun og blöndun. Sérhver sameiginleg brún er mæld sem G0, G1 eða G2 (bil, horn, sveigjustökk) á nákvæmu yfirborðunum, og brún sem er verri en þú baðst um birtist í Vandamálaspjaldinu með **Samsvörun**-lagfæringu. Sebru-rendur og sveigjulitir eru teiknaðir af nákvæmu yfirborðunum. STEP- og IGES-skrár fara út og koma inn. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).

**Svæði og herbergi**

- **Skissumynd á jörðina.** {{ui:Skrá}} › {{ui:Flytja inn skissumynd…}} breytir símamynd af handskissu í brúnir á jörðinni í þeim mælikvarða sem þú gefur upp: einn hópur, með merki fyrir hvern pennalit. Blaðið er fundið og rétt af á tölvunni þinni og ekkert er sent neitt. Sjá [Líkan á lóðarteikningu](topic:site-plan).
- **Innrétta herbergi.** Veldu gólf og notaðu {{ui:Skipuleggja}} › {{ui:Innrétta rými…}}. Húsgögn fyrir svefnherbergi, stofu, borðstofu, eldhús, baðherbergi eða skrifstofu eru sett eftir reglum, upp við veggi og laus frá hurðum og gluggum, í einum hópi sem þú getur tekið burt í einu skrefi. Þetta er sjálfgefið skipulag til yfirferðar, ekki hönnun. Sjá [Byrjunarsafn](topic:starter).

**Þrívíddarprentun**

- **Skáskurðir.** Skipting fyrir prentun getur gert skurðina skáa um allt að 60 gráður, sem gefur hlutunum meiri límflöt. Tengin standa hornrétt á skurðinn. Sjá [Skiptu líkani fyrir prentun](topic:print-split).
- **Prentathugunin í Vandamálum.** Niðurstöður þrívíddarprentathugunarinnar birtast í Vandamálaspjaldinu með merkjum á líkaninu, og Viðgerð lagar þær þaðan. Sjá [Stoðir, veggþykkt, holun og viðgerð](topic:print-tools).

**Í öllum öppum**

- **Tungumál.** Hjálp og öpp koma á 54 tungumálum. Tíu eru ný: litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkaans, filippseyska, svahílí og úsbekska. Tungumál önnur en enska eru vélþýðingar þar til móðurmálsmaður hefur lesið þau, og hjálparsíður geta enn verið á ensku.
- **Inntakstæki.** Snertiborð, penni, þrívíddarmús, leikjastýring og MIDI-stýringar geta stýrt forritunum, fyrir þau öll eða aðeins eitt.
- **Tækjastikuraðir.** {{ui:Stillingar}} › {{ui:Almennt}} › Tækjastikuraðir stillir Vefja (eins og áður), 2 raðir eða 1 röð. Stika sem passar ekki skrollar til hliðar í stað þess að taka pláss frá teikningunni. Vefja er áfram sjálfgefið.
- **Eiginleikanet.** Ljósareitir ModelCraft nota sameiginlega netið: samanfellanlega flokka, nafna- og gildadálka, og Þétt þéttleika. Reikningar sem slegnir eru inn, eins og `2*450`, virka áfram.
- **Vandamál.** Vandamálaspjaldið (viðvörunarhnappurinn í forritastikunni) er sameiginlegt öllum öppunum. Í ModelCraft geymir það prentathugunina og viðvaranir um samfellu yfirborða.
- **Í beinni.** Live TeamWork-lota sýnir hver er hvar. Sjá [Líkan saman með Live TeamWork](topic:work-live).
- **Viðbætur.** Viðbætur geta bætt myndgerðarvélum við, eins og að ofan.
- **Tengdu gervigreindina þína.** Verkfærasamningurinn og athuganir allra átta appanna standast, með 454 verkfærum alls. Eins smells tenging inni í Studio, hýstur tengill fyrir vafraaðstoðarmenn, þinn eigin lykill inni í Studio og útgefinn pakki eru ekki lofuð enn. Öppin hafa enga gervigreind af eigin rammleik. Sjá [Notaðu ModelCraft með gervigreindaraðstoðarmönnum](topic:use-with-ai-assistants).

### Lagfært í 0.8.1

- **DWG-flokkahluti.** Flokkahluti DWG-skráar var lesinn sem röng tegund, sem gat skemmt skrána við innflutning. Hann er nú lesinn rétt, í ModelCraft og í hinum öppunum sem lesa DWG.
- **Spjaldtölvur í lóðréttri stöðu.** Auka hæð ristar fer í strigann, og blaðauppsetningin byrjar við 760 pixla breidd eða minna. Stílblað ModelCraft hefur breytinguna líka.
- **Tungumál í Studio.** CadCraft Studio og pakkaðar útgáfur geta skipt um tungumál meðan þær keyra; áður voru þær aðeins á ensku. Þetta hefur ekki verið prófað á öllum stýrikerfum enn: láttu okkur vita ef tungumálið breytist ekki.

### Ekki í þessari útgáfu enn

- **Ekki kóðaundirritað.** Windows gæti sýnt SmartScreen: veldu {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, hægrismelltu og veldu {{ui:Opna}}. Store-útgáfur eru í bið, og iPad- og iPhone-útgáfan var ekki endursmíðuð fyrir 0.8.1.
- Annað forrit sem teiknar myndina án myndgerðarvélarviðbótar, víðmynd- eða þrívíddarmyndavélar og himinmynd í gegnum annað forrit, og viðbótin sem opnar Unreal-sviðið, eru ekki komin enn. Skrárnar eru skrifaðar; viðbótin er ekki gefin út og hefur ekki verið keyrð í Unreal.
- Frjáls yfirborð: G3 og flokkur A eru ekki mæld né staðhæfð, og klipping og fasthlutir koma síðar.
- Myndir úr öðrum forritum eru ekki pixel fyrir pixel eins og okkar: aðeins myndavélin, sólin, ljósin og lýsingin passa.
- Lagfæringin á tungumálaskiptum í Studio í 0.8.1 er ekki prófuð á öllum stýrikerfum.

Allt annað er í [Ekki byggt enn](topic:not-built-yet). Fyrir fyrri útgáfuna, sjá [Nýtt í 0.7](topic:whats-new-0-7).
