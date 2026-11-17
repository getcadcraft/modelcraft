---
title: Búa til efni með hnútum
summary: Búðu til efni úr áferðum, myndum og reikningi í Skyggnun-vinnusvæðinu, sjáðu það í sýninni á meðan þú vinnur, og málaðu fleti með því.
keywords: skyggnun, baka, bakstur áferða, umhverfislokun, ao, sveigja, bakstur normala, há fjölrúmfræði, lág fjölrúmfræði, ljóskort, límmiði, límmiðar, merki, miði, málun áferðar, mála áferð, bursti, efni, efni, materialx, mtlx, openpbr, standard surface, efnissafn, librarycraft, áferðasett, pbr, flytja inn áferðir, zip, cc0, draga, hnútur, hnútar, hnútaritill, skuggalitur, áferð, reiknuð áferð, hávaði, skákborð, voronoi, frumur, bylgjur, flísar, múrsteinar, viður, marmari, halli, óhreinindi, slit á brúnum, litastigi, blanda, upphleðsla, normalkort, grófleiki, málmleiki, ógegnsæi, útskurður, útgeislun, ljómi, færsla, kassavarpa, þríplan, uv, mynd, myndaáferð
from: d7368b21
---

Efni sem búið er til í **Skyggnun**-vinnusvæðinu tilheyrir skránni. Það er lítið net: **hnútar** sem búa til áferðir, myndir og tölur, tengdir við **Efnisúttak**, en inntök þess eru útlit yfirborðsins: grunnlitur, grófleiki, málmleiki, normal, ógegnsæi, útgeislun og restin af OpenPBR-líkaninu. Þú málar fleti með því eins og hverju öðru efni úr safni, og sérhver breyting birtist í sýninni samstundis.

## Opna það

Veldu {{ui:Skyggnun}} í vinnusvæðalistanum. Þrívíddarsýnin heldur efri hluta skjásins og **hnútaritillinn** tekur þann neðri. Spjaldið hægra megin listar efni skrárinnar.

- {{ui:Nýtt efni}} býr til grátt efni með aðeins Efnisúttaki sínu.
- **Búa til breytanlegt afrit af efni úr safni** breytir múrsteini, viði, flísum og öllu hinu í net sem þú getur breytt: áferð þess kemur í gegnum hnútinn Áferð úr safni, upphleðslur þess í gegnum Upphleðsluhnút.
- {{ui:Mála með því}} málar valda fleti eða hópa, eða velur efnið fyrir Málunarverkfærið. Málunarverkfærið sýnir einnig efni skrárinnar undir **Í þessari skrá**.
- {{ui:Tvöfalda}} og {{ui:Eyða}} vinna á efninu sem þú breytir. Eyðing verður ekki afturkölluð: fletir sem þú málaðir með því sýna sjálfgefinn lit þar til þú málar þá aftur.

## Efni úr safninu

Spjaldið **Efnissafn (Library)** listar efni safnsins, hvert með forskoðun sem CadCraft-rekjarinn myndgerir. Þetta eru áferðasett gefin út undir CC0, skráð á þá sem gerðu þau.

- Smelltu á eitt til að flytja það inn í skrána (myndir þess koma með) og, með fleti eða hópa valda, mála þá.
- Dragðu eitt á flöt eða hóp í sýninni til að mála aðeins þann.
- Það verður eitt af efnum skrárinnar: breyttu hnútum þess eins og hverju öðru. Eignin þess sést í spjaldinu og helst í skránni.

## Flytja inn áferðasett

{{ui:Myndir eða zip…}} eða {{ui:Mappa…}} undir **Flytja inn áferðasett** býr til efni úr setti af kortum. Kortin finnast eftir orðunum í skráarheitum þeirra: color, albedo, diffuse eða basecolor; roughness (eða gloss, breytt í roughness); metalness eða metallic; normal (OpenGL eða DirectX, út frá `gl` / `dx` í heitinu); height eða displacement; ambient occlusion; opacity; emission. Pökkuð kort (ARM, ORM) eru ekki tekin með. Flísin byrjar í 1 × 1 m: stilltu raunstærð hennar á Efnisúttakinu. Hæð fer í færslu með stærðina 0: hækkaðu stærðina til að nota hana á möskva.

## MaterialX

MaterialX er opna sniðið sem önnur þrívíddar- og myndgerðarforrit nota til að senda efni á milli sín.

- {{ui:Flytja út sem MaterialX…}} vistar efnið sem þú breytir: gildi þess og hverja áferð sem PNG-mynd við hliðina á `.mtlx`-skránni (í zip). Veldu skuggalitinn sem það er skrifað sem: **OpenPBR Surface** (MaterialX 1.39, sama líkan og ModelCraft notar) eða **Standard Surface** (MaterialX 1.38, sem fleiri forrit lesa í dag). Áferðirnar eru settar eftir UV-hnitum í metrum; kassa- og þríplanstaðsetning er skrifuð sem UV.
- {{ui:Flytja inn MaterialX…}} (eða {{ui:Úr möppu…}}) les `.mtlx`-skrár með OpenPBR, Standard Surface, UsdPreviewSurface eða glTF PBR skuggalitum. Gefðu því myndirnar líka, eða zip með öllu: mynd finnst eftir slóð sinni, nafni eða nafni sínu með annarri myndgerð (`.exr` sem skráin nefnir getur komið sem `.jpg` við hliðina á sér). Áferðir, normalkort, reikningur, blöndur og færsla koma inn sem hnútar; allt annað heldur gildi sínu, og stöðulínan segir hvað var skilið eftir.

## Límmiðar

Límmiði er mynd sem lögð er á yfirborð (merki, skilti, miði, blettur) með eigið efni.

- Stilltu **Breidd nýs límmiða**, síðan {{ui:Setja límmiða…}} (eða {{ui:Límmiði}} á tækjastikunni), veldu PNG-, JPEG- eða WebP-mynd og smelltu á flöt. Myndin er varpað á yfirborðin þar, með hlutföllum sínum; gagnsæir hlutar PNG-myndar haldast gegnsæir.
- Hann tilheyrir hópnum eða einingunni sem þú smelltir í og hreyfist með henni. Hann þekur fleti innan reits síns sem snúa eins og hann, og stöðvast við brúnir þess sem hann liggur á.
- Hver límmiði fær eigið efni, nefnt **Límmiði: <mynd>**, í lista skráarinnar: breyttu því eins og hverju öðru (grófleika, upphleðslu, ljóma). {{ui:Efni}} við hliðina á límmiðanum opnar það.
- Við hvern límmiða: breidd hans (hæðin fylgir myndinni), {{ui:Snúa}} (fjórðungssnúningur) og {{ui:Eyða}}. Límmiðar eru geymdir með efnum skrárinnar, utan Afturkalla.
- Þeir sjást í skyggðu sýninni, í hraðri myndgerð og í hágæðamyndum.

## Mála á áferðina

{{ui:Mála áferð}} (eða {{ui:Mála}} undir **Mála á áferðina**) breytir bendlinum í kringlóttan bursta. Dragðu á flöt sem ber eitt af efnum þessarar skráar: burstinn málar myndina á bak við grunnlitinn.

- Á möskva málar hann eftir UV-hnitum möskvans (taktu hann fyrst úr umbroti í UV-vinnusvæðinu); á öðrum fletum málar hann þvert yfir flötinn, svo málningin endurtekur sig með flísinni í efninu.
- Efni þar sem grunnliturinn er einfaldur litur fær nýja 512 × 512 pixla mynd af þeim lit í fyrsta skipti sem þú málar það. Efni þar sem grunnliturinn kemur frá öðrum hnútum þarf Myndhnút tengdan við Grunnlit.
- Stilltu lit, stærð (í pixlum myndarinnar), styrk og hörku bursta í spjaldinu. {{ui:Afturkalla strok}} eða Ctrl+Z (meðan málað er) tekur til baka strok, allt að síðustu 20.
- Málaða myndin er vistuð í skránni. Ekki er hægt að mála efni úr safni: búðu fyrst til breytanlegt afrit.

## Baka áferðir

**Baka áferðir** skrifar það sem lögunin og senan gefa yfirborði í myndir eftir UV-hnitum möskva.

- Veldu möskva sem hefur UV (taktu hann úr umbroti í UV-vinnusvæðinu), hakaðu við kortin og ýttu á {{ui:Baka}}:
  - **Umhverfislokun**: hversu opinn hver punktur er. Horn, fellingar og staðir undir öðru verða dekkri. Allt sem sést í líkaninu skyggir hana, upp að lokunarfjarlægðinni.
  - **Sveigja**: björt meðfram ytri brúnum, dökk í innri hornum, miðgrá á flötum og lítt bognum hlutum, yfir brúnbreiddina sem þú stillir.
  - **Normalar úr hágæðahlutnum**: veldu einnig nákvæmara afrit. Yfirborðsmyndun þess er skrifuð sem normalkort fyrir einfaldari hlutinn (hlutinn með færri þríhyrninga er bakaður á). Leitarfjarlægðin er hversu langt tvö yfirborð mega vera hvort frá öðru.
  - **Lýsing**: sól staðarins og dagsetningar líkansins (Stíll) með skuggum sínum, auk himinsins, sem ljóskort.
- Myndirnar bætast í skrána og birtast í Myndhnútum. Ef efnið sem þú breytir hefur hnút **Óhreinindi og slit á brúnum**, les hann nýju lokunina og sveigjuna samstundis.
- Fleiri geislar á hvern texel gera lokun og lýsingu mýkri, en taka lengri tíma. Bakstur keyrir á örgjörvakjörnum tölvunnar í bakgrunni; {{ui:Hætta bakstri}} stöðvar hann.

## Byggja net

1. {{ui:Bæta við hnúti…}} (eða {{key:Shift+A}} í hnútaritlinum) bætir hnúti í miðju ritilsins.
2. Dragðu frá úttakspunkti (hægra megin á hnúti) að inntakspunkti (vinstra megin á hnúti) til að tengja þá. Önnur tenging í inntak kemur í stað þeirrar fyrri; dragðu tengt inntak burt til að aftengja það.
3. Inntök sem eru ekki tengd sýna gildi sitt: skrifaðu tölu eða veldu lit. Stillingar eru neðst á hverjum hnúti.

Dragðu hnút í gegnum titil hans til að færa hann, dragðu autt rými til að hliðra og notaðu hjólið til að aðdraga. {{key:Delete}} fjarlægir valda hnúta eða tengil, {{key:Mod+Z}} afturkallar, {{key:Mod+D}} tvöfaldar, {{key:F}} sýnir alla hnútana. Sérhver breyting er eitt afturköllunarskref í hnútaritlinum. Afturköllun líkansins breytir ekki efnum.

| Hnútar | Það sem þeir búa til |
|---|---|
| Hnit áferðar | Hvar á flísinni punktur er: endurtaka hana, færa hana, snúa henni um fjórðung. |
| Gildi, Litur | Tala, litur. |
| Mynd | Mynd úr skránni (ein sem fylgdi innfluttu líkani, eða ein sem þú bættir við með {{ui:Bæta við mynd…}}). Veldu **Litir** fyrir ljósmynd og **Gögn** fyrir grófleika- eða normalkort. |
| Áferð úr safni | Áferð, grófleiki og hæð efnis úr safninu. |
| Skákborð, Hávaði | Reitir; mjúkur brotinn hávaði með smáatriðum, grófleika og fræi. |
| Voronoi-frumur, Bylgjur, Halli | Frumur (fjarlægð í næsta punkt, brúnirnar milli fruma, lit á hverja frumu); bönd þvert, upp eða á ská, sem sínus, sög eða þríhyrningur, beygð með hávaða; línulegir, annars stigs, geislastrendir og kúlulaga hallar. |
| Múrsteinar, Flísar | Raðir múrsteina með hlaupandi skekkju, eða rist af flísum: litir, múr eða fúga, bil og skábrún í metrum, hæð fyrir upphleðslu, slembitala á hvert stykki. |
| Viður, Marmari | Hringir eftir æðinni með fínum trefjum; æðar beygðar af ókyrrð. |
| Óhreinindi og slit á brúnum | Slitir kúptar brúnir og óhreinkar holur út frá sveigju möskvans og umhverfislokunarmyndum ([Baka áferðir](topic:shading#bake-textures) býr þær til; eða stilltu tvær myndastillingar þess í UV-umbroti möskvans: staðsettu efnið eftir UV-hnitum). Án þeirra breytir það engu. |
| Blanda litum, Litastigi, Litblær/mettun/birtustig, Birta og andstæður, Öfugt, Gamma, Skilja og sameina RGB | Litavinna. |
| Reikningur, Kortsvið | Reikningur á tölum (samlagning, margföldun, veldi, mjúkt skref og fleira). |
| Upphleðsla, Normalkort | Normal út frá hæð (Upphleðsla) eða úr normalkortsmynd (Normalkort: veldu stefnu græna rásarinnar). |

## Efnisúttakið

Stillingar þess segja til um hvernig áferðin liggur á yfirborðum:

- **Breidd flísar** og **Hæð flísar**: hversu marga metra ein flís af áferðinni nær yfir. Allt sem netið býr til endurtekur sig yfir flísina án sauma.
- **Staðsett eftir**: **UV-hnit** fylgja flötum (ýttu/togaðu fletir: eftir hverjum fleti; möskvar: UV þeirra, ein UV-eining = ein flís), **Kassi** varpar frá nær þremur ásum, **Þríplan** blandar þremur vörpunum á hallandi yfirborðum (**Blöndunarskerpa**: hærra gildi er harðari blanda).
- **Normalstyrkur** skalar normal-inntakið. **Færslustærð** segir hversu langt færsluinntakið hreyfir hornpunkta möskva.
- {{ui:Fleiri inntök}} sýnir restina af OpenPBR-inntökunum: skel, lóð, undirflöt, þunna filmu, gegnsæi og liti þeirra.

## Í hágæðamyndum

Rekjarinn les grunnlit, grófleika, málmleika, ógegnsæi, normal og útgeislun úr netinu eins og þau breytast yfir yfirborðið. Önnur inntök sem þú tengir (skel sem breytist, til dæmis) eru notuð á meðalgildi sínu; spjaldið segir hvaða. Útskurður úr ógegnsæisáferð sýnir lögun sína og skuggi hans er jafnt gegnsær. Glóandi áferð lýsir því sem hún snýr að, án þess að vera tekin sem ljós.

**Færsla** færir hornpunkta möskva eingöngu, svo bættu við Undirdeilingarbreyti fyrir smáatriði ([Breytar](topic:modifiers)). Ýttu/togaðu fletir halda lögun sinni og fá upphleðslurnar úr normalnum.

:::tip
Í tölvu með WebGPU er netið reiknað á skjákortinu; annars á örgjörvanum. Niðurstaðan er sú sama.
:::
