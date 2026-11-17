---
title: Hreyfðu hvaða eiginleika sem er, mótaðu þá sem ferla og blandaðu bútum
summary: Hreyfivinnusvæðið setur lykla á stöðu, snúning og stærð hlutar, birtu, dreifingu og lit ljóss, linsuna og formlykla möskva; beinagrindur beygja möskva með beinum og máluðum vægjum; IK og þvinganir láta bein og hluti ná til, horfa á, afrita, halda sér innan marka, hanga á eða fylgja öðrum; stífir hlutir detta, hlaðast og rekast saman og eru reiknaðir út í lykla; drífarar láta gildi ráðast af öðrum; ferlasýn tímalínunnar mótar hverja breytingu með Bézier-handföngum og lykkjum, og bútasýnin vistar hreyfingar sem aðgerðir sem þú setur aftur og blandar.
keywords: eðlisfræði, stífur hlutur, stífir hlutir, hermun, herma, detta, falla, þyngdarafl, rekast á, árekstur, stafla, frákast, núningur, reikna út, útreiknað, ik, öfug hreyfifræði, þvingun, þvinganir, horfa á, elta, miða, afrita umbreytingar, afrita staðsetningu, afrita snúning, takmarka snúning, mörk, barn af, foreldri, fylgja slóð, slóð, póll, fabrik, keðja, beinagrind, beinagrindun, bein, húð, húðun, vægi, vægismálun, punktahópar, sjálfvirk vægi, beinhiti, stelling, stellingarhamur, tvöfaldur kvaternjón, línuleg blöndun, formlyklar, formlykill, formbreyting, formbreytingar, formmarkmið, blöndunarform, andlits, segð, drífari, drífarar, hreyfivinnusvæði, hreyfa, hreyfimynd, rammalykill, lykill, lyklar, eiginleiki, eiginleikar, umbreyting, staðsetning, snúningur, mælikvarði, ljós, birta, litur, linsa, sjónsvið, fov, ferilritill, ferlar, ferill, bezier, handföng, snertill, millifærsla, lota, lotur, endurtekning, lykkja, fram og til baka, frávik, lykillisti, velja lykla, kassaval, afrita lykla, líma lykla, teygja lykla, mælikvarða lykla, bútar, aðgerðir, nla, blanda, áhrif, geyma
from: 16d8e12f
---

[Tímalínan](topic:animation) færir myndavélina og heila hópa og einingar. Vinnusvæðið **Hreyfa** lykla meira en það, og tímalínan fær tvær sýnir til viðbótar til að móta og endurnýta það sem þú hefur sett lykla á.

## Opna það

Veldu {{ui:Hreyfa}} í lista yfir vinnusvæði á tækjastikunni. Tímalínan opnast undir sýninni, tækjastikan sýnir hreyfihóparna ({{ui:Lyklar}}, {{ui:Spila}}, {{ui:Tímalína}}) og spjaldið hægra megin sýnir það sem þú getur sett lykil á við spilhausinn.

## Setja lykil á eiginleika

Spjaldið sýnir, við spilhausinn:

- **Valinn hlutur**: {{ui:Staðsetja}}, {{ui:Snúningur (°)}} og {{ui:Stærð}}, þrjár tölur hvert. Skrifaðu tölu og ýttu á {{key:Enter}}: hún er sett sem lykill við spilhausinn og hluturinn færist þangað. Demanturinn við línu setur lykil á gildið eins og það er núna; fylltur demantur þýðir að þegar er lykill við spilhausinn.
- **Ljós**: {{ui:Birta (lm)}}, {{ui:Dreifing (°)}} (fyrir kastljós) og {{ui:Litur}} hvers ljóss.
- **Myndavél**: {{ui:Linsuhorn (°)}}, til aðdráttar meðan myndavélin hreyfist.

{{ui:Lykilumbreyting}} (eða {{key:I}}) setur lykil á staðsetningu, snúning og stærð allra valinna hópa eða eininga í einu; {{ui:Lykilmyndavél}} (eða {{key:K}}) setur lykil á myndavélina. Með {{ui:Sjálfvirkur lykill}} kveiktu fær hópur, sem staðsetning, snúningur og stærð eru sett þannig á, nýjan lykil í hvert skipti sem þú færir hann.

Snúningur eru þrjú horn, um X, síðan Y, síðan Z. Snúningur sem settur er lykill yfir 180° heldur áfram í sömu átt (190° helst 190°, ekki −170°), svo hjól geti snúist nokkrum sinnum.

:::tip
Hópur sem hefur lykla með {{ui:Lykill valinn}} á tímalínunni fær lykla fyrir alla staðsetninguna. Ferilhnappurinn á línu hans breytir þeim í ferla fyrir staðsetningu, snúning og stærð (sama staðsetning við hvern lykil) svo hægt sé að móta þá í {{ui:Ferlar}}.
:::

## Formlyklar (formbreytingar)

**Formlykill** er önnur lögun sama [möskva](topic:meshes): bros á andliti, bunga á hurð, bogið blað. Rennan hans blandar frá möskvanum eins og hann er (0) yfir í þá lögun (1); nokkrir lyklar leggjast saman.

1. Veldu möskva í Hreyfa-vinnusvæðinu: spjaldið sýnir {{ui:Formlyklar}} hans.
2. Smelltu á {{ui:Bæta við formlykli}}. ModelCraft fer í [möskvavinnusvæðið](topic:mesh-edit) með nýja lyklinum í vinnslu: færðu punkta, dragðu út, mótaðu — breyttu möskvanum í þá lögun sem þú vilt.
3. Farðu aftur í {{ui:Hreyfa}} og smelltu á {{ui:Lokið}}. Möskvinn fer aftur eins og hann var og lykillinn geymir breytinguna þína.

Dragðu síðan rennu lykilsins (eða skrifaðu gildi) til að blanda honum inn. Demanturinn setur gildið inn við spilhausinn, svo lykill getur vaxið og dofnað með tímanum; þegar hann hefur feril er nýtt gildi sett inn við spilhausinn. Blýanturinn breytir lögun lykilsins aftur (möskvinn sýnir hana að fullu þar til {{ui:Lokið}}; {{ui:Hætta við}} skilur lykilinn eftir eins og hann var), augað slekkur á lyklinum og ruslafatan eyðir honum.

Punktur sem þú bætir við meðan þú breytir lykli tilheyrir möskvanum sjálfum: hann er þar sem þú settir hann, í öllum lögunum.

:::note
Formlyklar færa möskvann áður en [breytar](topic:modifiers) koma: Subdivision-breytir sléttir blönduðu lögunina. Myndir og myndskeið sem eru myndgerð sýna lyklana í hverjum ramma.
:::

## Beinagrindur: bein sem beygja möskva

**Beinagrind** er safn beina inni í [möskva](topic:meshes). Stilltu beinin og möskvinn fylgir, hver punktur eins mikið og **vægin** hans segja til um.

1. Veldu möskvann í Hreyfa-vinnusvæðinu og smelltu á {{ui:Bæta við beinagrind}} í spjaldinu (eða {{ui:Bæta við beini}} í hópnum {{ui:Beinagrind}}): fyrsta beinið liggur upp um miðju möskvans frá fætinum.
2. Með bein valið bætir {{ui:Bæta við undirbeini}} því næsta við frá endanum. Stilltu {{ui:Höfuð}}, {{ui:Endi}}, {{ui:Snúningur (°)}} og það sem bein {{ui:Hangir á}} í spjaldinu; bein sem hangir á öðru færist með því. Taktu af {{ui:Hreyfir möskvann}} fyrir bein sem stýrir aðeins öðrum.
3. Smelltu á {{ui:Sjálfvirk vægi}}: hvert bein grípur punktana sem eru næst því, og haldið dreifist mjúklega yfir möskvann, svo punktar milli tveggja beina deila því. {{ui:Aðeins næstu bein}} er fljótlegri og harðari skipting.

**Stilltu** beinin með {{ui:Stelling}} ({{key:P}}): smelltu á bein til að velja það, dragðu til að snúa því um ás sýnarinnar, {{key:Shift}}-dragðu til að færa það. Eða skrifaðu {{ui:Staðsetja}}, {{ui:Snúningur (°)}} og {{ui:Stærð}} undir {{ui:Stelling}}; snúningar eru um eigin ása beinsins, frá hvíldarstöðu þess. Demantarnir og {{ui:Setja lykil á alla stellinguna}} setja stellinguna inn við spilhausinn; þegar bein hefur lykla setur það hans inn þar þegar þú stillir það. {{ui:Endurstilla þetta bein}} og {{ui:Endurstilla stellinguna}} færa beinin aftur í hvíld.

**Mála vægi** ({{key:W}}) fyrir valið bein: möskvinn sýnist í hvíld, hver flötur litaður eftir því hversu mikið beinið heldur honum — rautt allt, blátt ekkert. Málaðu til að bæta við haldi ({{key:Mod}} tekur það burt, {{key:Shift}} sléttir); {{ui:Stærð (px)}} og {{ui:Styrkur}} stilla penslinn. Með {{ui:Halda því að vægi hvers punkts leggist saman í 1}} tekur það sama af hinum beinunum þegar einu beini er gefið meira. Hvert strok er eitt skref í afturköllun líkansins.

{{ui:Húð}} velur hvernig punktur milli beina hreyfist: {{ui:Línuleg (hröð)}} blandar hreyfingum beinanna og klemmir beygðan lið aðeins; {{ui:Tvöfaldur kvaternjón (heldur rúmmáli við liði)}} snýr punktinum um liðinn í staðinn, svo olnbogi eða hné heldur þykkt sinni ({{ui:Stærð}} beins teygir þá ekki húðina).

:::note
Formlyklar koma fyrst, svo beinagrindin, svo [breytarnir](topic:modifiers). Sýnin, myndir og myndskeið sýna öll stillta möskvann; vægi möskvans eru vistuð með honum, beinin og stelling þeirra með hreyfimyndinni.
:::

## IK og þvinganir

**Þvingun** færir bein eða hlut eftir lyklum hans, samkvæmt reglu. Veldu hlutinn (eða, í beinagrind, beinið) og bættu einni við undir {{ui:Þvinganir á …}}; nokkrar keyra í þeirri röð sem þær eru taldar upp (örvarnar breyta henni), og hver hefur {{ui:Hversu mikið}} (0 til 1, sett inn með demantinum eins og hver annar eiginleiki) og rofa til að kveikja og slökkva.

| Þvingun | Fyrir | Hvað hún gerir |
|---|---|---|
| {{ui:Teygja (IK)}} | Bein | Beinið og beinin sem það hangir á ({{ui:Bein í keðjunni}}) beygjast svo endi þess nái markinu. Með tveimur beinum og {{ui:Póll (beygjan vísar á hann)}} vísar olnbogi eða hné í átt að pólnum; lengri keðjur beygjast mjúklega. Utan seilingar vísar keðjan beint á markið. |
| {{ui:Horfa á}} | Bæði | Snýr þannig að {{ui:Ás sem vísar}} snýr að markinu og heldur {{ui:Ás haldið upp}} eins nálægt upp og hægt er. |
| {{ui:Afrita umbreytingar}} | Bæði | Tekur staðsetningu, snúning eða stærð marksins — þá sem eru hakaðir. |
| {{ui:Mörk}} | Bæði | Heldur eigin staðsetningu, snúningi (gráðum) eða stærð milli {{ui:lágmark}} og {{ui:hámark}} á hvern ás; skildu par eftir autt til að gefa þeim ás frjálsan. |
| {{ui:Barn af}} | Bæði | Færist með markinu eins og það hangi á því, frá stöðunum þar sem bæði voru þegar þú valdir markið. |
| {{ui:Fylgja slóð}} | Hlutir | Situr á [ferilhlut](topic:curves) við {{ui:Eftir ferlinum}} (0 upphafið, 1 endinn; settu lykil á það til að ferðast) og snýr eftir honum með {{ui:Snúa eftir ferlinum}}. |

Mark er annar hlutur í opna hópnum, bein af sömu beinagrind, eða {{ui:Punktur}} sem þú skrifar (punktur hlutar er í hnitum líkansins, punktur beins í hnitum möskvans). Fyrir IK-fót skaltu setja markið þar sem fóturinn á að vera og setja lykil á markið, eða setja lykil á {{ui:Hversu mikið}} til að láta fótinn skipta á milli lyklanna og IK.

:::tip
Hlutur sem horfir á annan sem fylgir slóð sér hann á slóðinni: ModelCraft reiknar mörkin fyrst, hver sem röð hlutanna er.
:::

## Eðlisfræði: detta, hlaðast og rekast saman

Láttu hluti falla og rekast hver á annan, og haltu síðan niðurstöðunni sem lyklum.

1. Veldu hóp, einingu eða möskva og stilltu {{ui:Stífur hlutur}} undir {{ui:Eðlisfræði}}: {{ui:Fellur og rekst á}} (hann hreyfist) eða {{ui:Stendur kyrr, er í vegi}} (borð, veggur, rampur). Gefðu fallandi hlut sína {{ui:Lögun}} — {{ui:Kassi (útmörk hans)}} eða {{ui:Kúla (ávöl útmörk)}} — sinn {{ui:Massi (kg)}}, {{ui:Núningur}} og {{ui:Frákast}} (0 dynur, 1 skoppar aftur jafn hátt).
2. Undir {{ui:Allt líkanið}} stilltu {{ui:Frá (s)}} og {{ui:Til (s)}}, {{ui:Þyngdarhröðun (m/s², niður)}} og hvort það er {{ui:Jörð til að lenda á}} (og hæð hennar).
3. Smelltu á {{ui:Reikna eðlisfræði}} (í spjaldinu eða í hópnum {{ui:Eðlisfræði}}). Hver fallandi hlutur fær lykil fyrir staðsetningu, snúning og stærð á hverjum ramma milli tímanna tveggja; spilaðu það eins og hverja aðra hreyfimynd.

Endurreikningur kemur í stað þeirra lykla; {{ui:Fjarlægja útreiknaða lykla}} tekur þá burt. Hlutirnir byrja kyrrir, þar sem lyklar þeirra, ferlar og þvinganir setja þá við {{ui:Frá (s)}} (hreyfing með lykli fyrir þann tíma heldur ekki áfram inn í fallið). Fleiri {{ui:Skref á ramma}} gera háa stafla stöðugri; stöðustikan segir til um hvort eitthvað hreyfist enn í lokin.

:::note
Form eru kassar og kúlur utan um útmörk hvers hlutar; kassi snertir með hornum, miðjum kanta og miðjum flata, svo kassar hlaðast og velta eins og þú býst við. Dúkar, vökvar, liðir milli hluta og nákvæm form eru ekki smíðuð.
:::

## Drífarar

**Drífari** setur formlykil eftir öðru í stað þess að gera það með hendi: opnaðu drífara lykilsins (reiknivélahnappinn), skrifaðu **segð** og gefðu hverju nafni í henni það sem það les ({{ui:Les}}): tímann í sekúndum, rammann, staðsetningu, snúning eða stærð hlutar eftir X, Y eða Z, birtu ljóss, eða annan formlykil. Til dæmis, með `v` sem les snúning hurðar um Z, opnar `clamp(v / 90, 0, 1)` lögun þegar hurðin opnast.

Segðir nota tölur, nöfnin, `+ - * / % ^` og sviga, og föllin `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` ásamt `pi` og `e`. Villa er bent á og engu er breytt. Renna drifins lykils sýnir gildi drífarans; drífarinn ræður yfir ferli lykilsins þar til þú fjarlægir hann.

## Velja og breyta lyklum (Lyklasýn)

{{ui:Lyklar}} sýnir eina línu fyrir hvert spor: myndavélina, hvern hópinn sem hreyfist og hvern eiginleika („Ljós 2 · Birta (lm)“; eiginleikalyklar eru kringlóttir).

- Smelltu á lykil til að velja hann; {{key:Shift}}-smell eða {{key:Mod}}-smell bætir lyklum við valið eða tekur þá burt. {{key:Shift}}-dráttur yfir línurnar dregur kassa sem bætir við öllum lyklum í honum.
- Dragðu valinn lykil til að færa þá alla; {{key:Left}} / {{key:Right}} færa þá um ramma ({{key:Shift}}: tíu).
- {{key:Mod+C}} afritar valda lykla, {{key:Mod+V}} límir þá frá spilhausnum á sömu spor (annar ModelCraft-flipi getur líka límt þá).
- {{ui:Teygja}} dreifir völdum lyklum út frá spilhausnum um töluna við hliðina (2 = tvöfalt lengra á milli; 0.5 dregur þá saman).
- Mjúkleikalistinn stillir hvernig hver valinn lykill færist áfram.

## Móta ferlana (Ferlasýn)

{{ui:Ferlar}} er graf af hverri tölu yfir tíma: tími eftir láréttum ás, gildi upp. Hakaðu við ferlana sem sýna á listanum vinstra megin (X, Y og Z eru rauð, græn og blá).

- Smelltu á lykil (ferning) til að velja hann, {{key:Shift}}-smelltu fyrir fleiri, eða dragðu kassa. Dragðu valinn lykil til að breyta tíma hans og gildi; með nokkra valda færir dráttur þá eftir tíma.
- Valinn lykill sýnir sín tvö **handföng**. Dragðu annað til að móta ferilinn þeim megin. {{ui:Handföng}} segir til um hegðun þeirra: {{ui:Sjálfvirkt}} (mjúkur ferill í gegnum lyklana í kring), {{ui:Vísar á næsta lykil}}, {{ui:Jafnað}} (þau tvö haldast á beinni línu, svo ferillinn hefur ekkert horn) eða {{ui:Frjálst}}.
- {{ui:Frá völdum lyklum}} stillir hvernig hver valinn lykill færist á þann næsta: {{ui:Ferill (handföng)}}, {{ui:Slétta}}, {{ui:Jafnt}}, {{ui:Hægt inn og út}} eða {{ui:Halda}}.
- {{ui:Fyrir}} og {{ui:Eftir}} stilla hvað ferill gerir utan lyklanna sinna: {{ui:Halda}} (helst við fyrsta eða síðasta gildi), {{ui:Endurtekning}}, {{ui:Fram og til baka}} eða {{ui:Endurtaka og halda áfram}} (hver endurtekning byrjar þar sem síðasta endaði: hjól heldur áfram að rúlla, göngumaður heldur áfram að ganga).
- Hjólið aðdrættir ({{key:Mod}}: aðeins gildi; {{key:Shift}}: aðeins tími); dragðu með miðjuhnappi eða með {{key:Alt}} til að hliðra; {{ui:Sýna allt}} eða {{key:Home}} passar alla sýnda ferla. Smelltu á tómt svæði til að færa spilhausinn þangað. {{key:Delete}} eyðir völdum lyklum.

Handföng eru ekki látin skerast í tíma, svo ferill fer aldrei afturábak.

## Endurnýta hreyfingar (Bútasýn)

**Bútur** spilar vistaða hreyfimynd (**aðgerð**) á tímalínunni. Bútar eru blandaðir í röð, neðri línurnar yfir þær efri; eigin spor tímalínunnar fara ofan á alla búta.

1. Settu lykla á hópa og ljós eins og venjulega, smelltu síðan á {{ui:Gera búta}} í {{ui:Bútar}} og gefðu aðgerðinni nafn. Sporin verða að aðgerðinni og bútur spilar hana þar sem þau voru (myndavélin er áfram á tímalínunni).
2. Til að nota aftur skaltu velja aðgerðina og smella á {{ui:Bæta við bút}}: nýr bútur byrjar við spilhausinn.
3. Dragðu bút eftir línu sinni til að færa hann; smelltu á hann til að stilla {{ui:Upphaf (s)}}, {{ui:Hraði}} (2 = tvöfalt hraðar), {{ui:Endurtekningar}}, {{ui:Hversu mikið}} (0 til 1), {{ui:Blöndun}} ({{ui:Skipta út}}, eða {{ui:Bæta ofan á}} bútana á undan), {{ui:Utan bútsins}} (ekkert, halda endanum eða halda báðum endum) og {{ui:Þagga}}. Örvarnar breyta röðinni; ruslafatan eyðir bútnum (aðgerð sem enginn bútur notar lengur fer með honum).

Bútur undir fullu {{ui:Hversu mikið}} blandast við það sem er undir honum: bútinn á undan honum, eða ljósið eða staðsetningin eins og hún er án hreyfingarinnar.

## Hvað spilast hvar

| Hvað | Í sýninni | Í myndgerðu myndskeiði |
|---|---|---|
| Lyklar myndavélar, linsuhorn með lyklum myndavélar | Já | Já |
| Staðsetning, snúningur og stærð (lyklar, ferlar, bútar) | Já | Já |
| Birta, dreifing og litur ljósa | Já | Ekki enn: myndskeiðið notar ljósin eins og þau eru þegar það byrjar (sjá [það sem er ekki smíðað enn](topic:not-built-yet)) |
| Linsuhorn án lykla myndavélar | Já | Ekki enn: settu lykil á myndavélina líka |
| Formlyklar og drífarar | Já | Já |
| Beinagrindur (stilltir möskvar) | Já | Já |
| IK og þvinganir | Já | Já |
| Reiknuð eðlisfræði (lyklar) | Já | Já |

Allt er vistað í `.modelcraft`-skránni með restinni af hreyfimyndinni, og {{ui:Afturkalla}} og {{ui:Endurgera}} á tímalínunni taka til baka hvað sem er af því.
