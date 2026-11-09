---
title: Hvað er nýtt í 0.8 og 0.8.1
summary: Val á myndgerðarvél með skrám fyrir önnur forrit, frjáls NURBS-yfirborð með mældri samfellu, sena sem þú lýsir fyrir aðstoðarmanninum þínum, efni úr einni mynd, skissumynd á jörðina, innréttuð herbergi, skáskurðir fyrir þrívíddarprentun, og prentathugunin í Vandamálaspjaldinu.
keywords: hvað er nýtt, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, myndgerðarvél, vél, opna í, usd, gltf, unreal, viðbótarvél, nurbs, yfirborð, loft, sveipa, samfella, g0, g1, g2, sebra, step, iges, segðu senuna, sena, veður, tími dags, árstíð, aðstoðarmaður, efni úr mynd, mynd, skissumynd, innrétta, innrétta herbergi, skáskurður, skipting, prentathugun, vandamál, eiginleikanet, lampar, tungumál, inntakstæki, raðir á tækjastiku, dwg, lifandi
from: e4989b17
---

Þetta er það sem breyttist í ModelCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), miðað við 0.7. Gluggi {{ui:Myndgera mynd…}} getur nú sent senuna í annað forrit, {{ui:Yfirborð}}-spjaldið býr til slétt frjáls yfirborð, og aðstoðarmaður sem þú tengir getur sett upp heila senu með einni setningu.

## Nýtt

### Myndgerð

- **Val á vél.** {{ui:Myndgera mynd…}} er með listann **Vél** fyrir ofan Hamur. Okkar eigin tvær vélar, Hröð og Slóðarekjarinn, eru sjálfgefnar og virka alls staðar. Aðrir valkostir vista senuna sem pakka (líkanið sem USD-skrá, auk stillingarskrár með nákvæmum efnisgildum, ljósunum sem eru kveikt á, sólinni, himninum, útsetningunni og myndavélinni) til að taka í annað forrit. Mynd sem annað forrit teiknar segir hvaða forrit og útgáfa bjuggu hana til. Sjá [Veldu hvaða forrit teiknar myndina](topic:render-engines).
- **Opna í öðru forriti.** Véllistinn getur vistað senuna sem USD-skrá, glTF-skrá (`.glb`) eða Unreal-verkefnismöppu (`.zip`), í vafranum og í CadCraft Studio. Í Studio getur hann einnig ræst usdview eða eigin forrit tölvunnar fyrir skrána. Sjá [Opna senuna í öðru forriti](topic:render-open-in).
- **Senda í leikjavél úr Studio.** Studio skrifar senuna inn í Unreal Engine-verkefni og heldur henni í takt við hverja sendingu, í eina átt aðeins. Þínar eigin breytingar eru í lagi sem CadCraft skrifar aldrei í. Sjá [Senda senuna í leikjavél](topic:render-unreal).
- **Vélar úr viðbótum.** Viðbót getur bætt vél í listann. Vél skrifuð í JavaScript teiknar í vafranum og í Studio; vél sem keyrir forrit þarf samþykki þitt í Studio. Sjá [Teiknaðu myndina með öðru forriti](topic:render-other-program) og [Bættu myndgerðarvél við með viðbót](topic:render-engine-addons).
- **Segðu senuna.** Segðu tengda aðstoðarmanninum þínum „rökkur, léttur regn, haustatré, fólk á torginu“ og ModelCraft setur hana upp í einu skrefi: sólin færist að dagsetningu og tíma svo skuggarnir fylgi, himinninn breytist, blaut yfirborð birtast, og tré og fólk eru sett inn sem raunverulegir hlutir á merkjum sem þú getur falið, fært eða eytt. Tími dags, dagsetning eða árstíð, og veður (heiðskírt, skýjað, þoka, léttur regn, rigning, stormur) virka líka ein og sér, og síðari beiðni breytir sömu senu. Þoka sést í hágæðamyndinni á skjákortinu; hinar vélarnar sýna himininn, ljósið og blautu yfirborðin. Rigning er ekki teiknuð sem fallandi strik.

### Efni

- **Efni úr einni mynd.** Gefðu ModelCraft mynd af yfirborði (vegg, gólfi, steini) og það býr til flísanlegt efni: birtan yfir myndina er jöfnuð, brúnirnar eru látnar mætast, og litakort, grófleikakort og eðlisvektorkort eru reiknuð út úr myndinni. Þetta er einföld myndvinnsla á þinni eigin mynd, án þjálfaðs líkans. Grófleiki er mat. Slétt, ferhyrnd mynd tekin beint framan frá gefur besta flísinn; sterkt mynstur eins og múrsteinar getur sýnt mjúkan draug þar sem samskeytin eru blönduð.

### Yfirborð

- **Frjáls yfirborð.** Spjaldið {{ui:Yfirborð}} býr til NURBS-ferla og óklippta fleti: ferla í gegnum punkta, loft, reglustrik, útdrátt, snúning, sveipingar eftir einni eða tveimur teinum, fleti úr ferilneti, bútar úr fjórum brúnum, samsvörun og blöndun. Sérhver sameiginleg brún er mæld sem G0, G1 eða G2 (bil, horn, breyting á sveigju) á nákvæmu yfirborðunum, og brún sem er verri en þú baðst um birtist í Vandamálaspjaldinu með lagfæringunni **Samsvörun**. Sebrarendur og sveigjulitir eru teiknaðir út frá nákvæmu yfirborðunum. STEP- og IGES-skrár fara út og koma inn. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).

### Lóð og herbergi

- **Skissumynd á jörðina.** {{ui:Skrá}} › {{ui:Flytja inn skissumynd…}} breytir símamynd af handskissu í brúnir á jörðinni í þeim mælikvarða sem þú tilgreinir: einn hópur, með merki fyrir hvern pennalit. Blaðið er fundið og rétt af á tölvunni þinni og ekkert er sent neitt. Sjá [Móta á lóðarmynd](topic:site-plan).
- **Innrétta herbergi.** Veldu gólf og notaðu {{ui:Skipuleggja}} › {{ui:Innrétta rými…}}. Svefnherbergis-, stofu-, borðstofu-, eldhús-, baðherbergis- eða skrifstofuhúsgögn eru sett eftir reglum, upp við veggi og frí frá hurðum og gluggum, í einum hópi sem þú getur fjarlægt í einu skrefi. Þetta er sjálfgefið skipulag sem þú átt að yfirfara, ekki hönnun. Sjá [Byrjunarsafnið](topic:starter).

### Þrívíddarprentun

- **Skáskurðir.** Skipting fyrir prentun getur hallað skurðunum um allt að 60 gráður, sem gefur hlutunum meira límflötur. Tengi standa rétt á skurðinn. Sjá [Skipta líkani fyrir prentun](topic:print-split).
- **Prentathugunin í Vandamálum.** Niðurstöður þrívíddarprentathugunarinnar birtast í Vandamálaspjaldinu með merkjum á líkaninu, og **Lagfæra** lagar þær þaðan. Sjá [Stoðir, veggþykkt, holun og viðgerðir](topic:print-tools).

### Í öllum forritum

- **Tungumál.** Hjálpin og forritin koma á 54 tungumálum. Tíu eru ný: litháíska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí og úsbekska. Tungumál önnur en enska eru vélþýðingar þar til innfæddur málhafi hefur lesið þau, og hjálparefni gæti enn verið á ensku.
- **Inntakstæki.** Snertiborð, penni, þrívíddarmús, leikjastýring og MIDI-stýringar geta stjórnað forritunum, fyrir þau öll eða aðeins eitt þeirra.
- **Raðir á tækjastiku.** {{ui:Stillingar}} › {{ui:Almennt}} › Raðir á tækjastiku stillir Vefja (eins og áður), 2 raðir eða 1 röð. Stika sem passar ekki skrunar til hliðar í stað þess að taka pláss af teikningunni. Vefja er áfram sjálfgefið.
- **Eiginleikanet.** Ljósareitir ModelCraft nota sameiginlega netið: fellanlega flokka, dálka fyrir heiti og gildi, og þéttleika: Þéttur. Innslegin reikningsaðgerð eins og `2*450` virkar áfram.
- **Vandamál.** Vandamálaspjaldið (viðvörunarhnappurinn í forritastikunni) er sameiginlegt öllum forritunum. Í ModelCraft geymir það prentathugunina og viðvaranir um samfellu yfirborða.
- **Live.** Live TeamWork-fundur sýnir hver er hvar. Sjá [Móta saman með Live TeamWork](topic:work-live).
- **Viðbætur.** Viðbætur geta bætt við myndgerðarvélum, eins og að ofan.
- **Tengdu gervigreindina þína.** Verkfærasamningurinn og prófanir átta forritanna standast, með 454 verkfærum alls. Eins smells tenging innan Studio, hýstur tengill fyrir aðstoðarmenn í vafra, þinn eigin lykill innan Studio og birtur pakki eru ekki lofuð ennþá. Forritin hafa enga eigin gervigreind. Sjá [Nota ModelCraft með gervigreindaraðstoðarmönnum](topic:use-with-ai-assistants).

## Lagfært í 0.8.1

- **Flokkahluti DWG.** Flokkahluti DWG-skrár var lesinn sem röng gerð, sem gat skemmt skrána við innflutning. Hann er lesinn rétt núna, í ModelCraft og í hinum forritunum sem lesa DWG.
- **Spjaldtölvur í lóðréttri stöðu.** Laus hæð netsins fer í teikniflötinn, og blaðútlitið byrjar við 760 dílar á breidd eða minna. Stílblað ModelCraft hefur breytinguna líka.
- **Tungumál í Studio.** CadCraft Studio og pakkaðar útgáfur geta skipt um tungumál meðan þær keyra; áður voru þær aðeins á ensku. Þetta hefur ekki verið prófað á öllum stýrikerfum ennþá: láttu okkur vita ef tungumálið breytist ekki.

## Ekki í þessari útgáfu ennþá

- **Ekki kóðaundirritað.** Windows gæti sýnt SmartScreen: veldu {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, hægrismelltu og veldu {{ui:Opna}}. Verslunarútgáfur eru í bið, og iPad- og iPhone-útgáfan var ekki endurbyggð fyrir 0.8.1.
- Annað forrit sem teiknar myndina án viðbótar myndgerðarvélar, víðmyndavélar og steríómyndavélar, og himinmynd í gegnum annað forrit, og viðbótin sem opnar Unreal-sviðið eru ekki komin ennþá. Skrárnar eru skrifaðar; viðbótin er ekki gefin út og hefur ekki verið keyrð í Unreal.
- Frjáls yfirborð: G3 og A-flokkur eru hvorki mæld né fullyrt, og klipping og fastir hlutir koma síðar.
- Myndir úr öðrum forritum eru ekki díl fyrir díl eins og okkar: aðeins myndavélin, sólin, ljósin og útsetningin passa.
- Lagfæringin á tungumálaskiptum í Studio í 0.8.1 er ekki prófuð á öllum stýrikerfum.

Allt annað er í [Ekki smíðað ennþá](topic:not-built-yet). Fyrir fyrri útgáfuna, sjá [Hvað er nýtt í 0.7](topic:whats-new-0-7).
