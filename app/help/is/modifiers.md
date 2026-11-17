---
title: Breytur á möskva, hópi eða íhlut
summary: Breyttu mælikvarða, speglaðu, fjölfaldaðu, sléttaðu, skásníddu, skerðu og beygðu möskva án þess að breyta honum; endurtaktu eða breyttu mælikvarða hóps eða íhlutar með sama staflanum; gerðu það varanlegt þegar þú ert tilbúinn.
keywords: breyta, breytur, stafli, hópur, íhlutur, mælikvarði, baka, breyta uppruna, óeyðandi, spegla, fjölföldun, geislafjölföldun, undirskipting, undirskiptiflötur, sléttun, skásníða, þykkja, þykkt, boolean, skera, færa, grind, búr, sveigja ferils, beygja, vefjun, beita
from: dd5ec1cb
---

**Breyta** breytir því sem möskvi sýnir án þess að breyta sjálfum möskvanum. Speglaðu öðrum helmingi hluta og mótaðu aðeins þann helming; ávalaðu kassa með undirskiptiflöt og haltu áfram að breyta kassanum. Breytur sitja í **staflu** og vinna í röð, að ofan og niður. Það sem þú sérð, flytur út, prentar og myndgerir er möskvinn með öllum breytum sem eru á.

## Bæta við breytu

1. Veldu möskva. Í Líkanvinnusvæðinu er hluti hans **Breytur** í {{ui:Upplýsingar um eind}}; í Möskvavinnusvæðinu er hann í spjaldinu hægra megin.
2. Veldu eina úr {{ui:Bæta við breytu…}}. Hún fer neðst í staflann.
3. Breyttu stillingum hennar undir nafninu. Lengdir taka sömu gildi og gildisreiturinn, svo `600mm`, `2'6"` og `(6m)/4` virka öll.

Hver breyting er eitt afturkallsskref: {{key:Mod+Z}} tekur hana til baka.

## Hnapparnir á hverri breytu

- Gátreiturinn kveikir eða slekkur á henni.
- Skjáhnappurinn sýnir eða felur hana í sýninni (hún er áfram í staflanum).
- Myndavélarhnappurinn sýnir eða felur hana í myndgerðum myndum og myndböndum, svo breyta getur verið eingöngu fyrir myndgerðir (eða eingöngu fyrir sýnina).
- Örvarnar færa hana upp eða niður staflann. Röðin skiptir máli: spegla og síðan undirskipta gefur mjúka samskeyti, undirskipta og síðan spegla gerir það ekki.
- {{ui:Beita}} gerir lögunina hluta af möskvanum: breyturnar fyrir ofan hana og hún sjálf eru framkvæmdar á möskvanum sjálfum og fara úr staflanum. Þetta er eitt afturkallsskref.
- Krossinn fjarlægir hana.

## Breyturnar

| Breyta | Hvað hún gerir |
| --- | --- |
| {{ui:Mælikvarði}} | Breytir mælikvarða um uppruna hlutarins, stuðull fyrir rautt, grænt og blátt. Einnig á hóp eða íhlut. |
| Spegla | Bætir við speglaðri afriti yfir rautt, grænt eða blátt í gegnum uppruna möskvans, og sameinar helmingana þar sem þeir mætast. |
| {{ui:Fjölföldun}} | Afritar í línu (skref af eigin stærð margfaldað með tölunum sem þú gefur, auk fasts skrefs), um ás, eða eftir ferli í líkaninu. Hópur eða íhlutur tekur línuna. |
| Undirskiptiflötur | Sléttar möskvann með Catmull-Clark undirskiptingu. Skarpar brúnir haldast fald. Myndgerðir geta notað fleiri stig en sýnin. |
| {{ui:Skásníða}} | Ávalar hverja brún sem er skarpari en hornið sem þú gefur. |
| Þykkja | Gefur fleti þykkt og lokar brúninni. |
| Boolean | Sker burt, sameinar eða geymir skörunina við annan hlut í líkaninu. Báðir þurfa að vera lokuð rúmtök. |
| Afmyndun | Færir yfirborðið inn eða út með sléttu suði. Sama fræ gefur sömu hnúða í hvert skipti. |
| Sameina | Sameinar hornpunkta sem eru nær en fjarlægð. |
| Grisjun | Heldur hlutfalli þríhyrninganna og fjarlægir þá sem breyta lögun minnst. |
| {{ui:Slétta}} | Slakar hornpunktum í átt að nágrönnum. |
| {{ui:Grind}} | Beygir möskvann með búri: færðu punkta búrsins og möskvinn fylgir. |
| Sveigja ferils | Beygir möskvann eftir ferli í líkaninu, eftir rauðu, grænu eða bláu. |
| Vefjun | Færir hvern hornpunkt á næsta punkt annars hlutar. |

## Á hópi eða íhlut

Hópur eða íhlutur getur geymt uppskrift líka, svo skermur lampa getur verið **Mælikvarði** og **Fjölföldun** af einum skermi, og breyting á tölu breytir lampanum.

1. Veldu hóp eða íhlut. Í {{ui:Upplýsingar um eind}} sýnir **Breytur**-hlutinn staflann (tómur í fyrstu).
2. Veldu {{ui:Mælikvarði}} eða {{ui:Fjölföldun}} úr {{ui:Bæta við breytu…}}. Hópurinn verður að íhlut sem er **upprunalegi, staðsettur af staflanum**. Upprunalegi er geymdur: breyttu honum og hvert afrit fylgir strax.
3. Mælikvarði tekur stuðul fyrir rautt, grænt og blátt (`1, 1, 2` tvöfaldar hæðina). Fjölföldun tekur fjölda afrita, skref sem hlutfall af stærð niðurstöðunnar það sem af er, og aukaskref í lengdareiningum.

Staflinn keyrir að ofan og niður á eigin ásum upprunalega hlutarins um uppruna hans, svo röðin skiptir máli: Fjölföldun af þremur afritum með 3 m á milli, síðan Mælikvarði 2 á rautt, setur afritin 6 m á milli; Mælikvarði fyrst og síðan Fjölföldun heldur þeim 3 m á milli. Gátreiturinn, örvarnar og krossinn virka eins og á möskva; skjá- og myndavélarhnapparnir og {{ui:Beita}} á einni breytu gera það ekki, því stafli á hópi er ein heild.

- {{ui:Breyta uppruna}} opnar upprunalega á sínum stað. Breytingar sjást í hverju afriti; lokun skilar þér þangað sem þú varst.
- {{ui:Baka breytingar}} gerir niðurstöðuna að venjulegum brúnum og fleti og tekur staflann burt, í einu afturkallsskrefi. Afrit sem skarast haldast sem aðskilin rúmfræði: Baka er ekki sameining.
- Afrit íhlutarins deila uppskriftinni; {{ui:Gera einstaka}} aðskilur hana (upprunalegi helst sameiginlegur).
- Staflinn er vistaður í skránni, fluttur með afriti og líma og með afturköllun, og Hreinsa ónotað heldur upprunalega. Forrit sem þekkir ekki breytur sýnir samt afritin.
- Þar til Baka er ekki hægt að fara inn í, sundurliða, breyta stærð eða teygja niðurstöðuna: hún yrði byggð upp aftur við næstu breytingu. Hvert þeirra segir það.
- Mörkin eru 32 breytur og 1.000 afrit. Íhlutur gerður til að teygjast (Teygja) og stafli geta ekki deilt skilgreiningu enn.

## Undirskiptiflötur

Undirskipting sléttar möskva með Catmull-Clark: sérhver flötur verður að ferhyrndum flötum, og hvert stig gerir fjórum sinnum fleiri. Kassi með tvö eða þrjú stig lítur þegar út eins og ávalt form, og þú heldur áfram að breyta kassanum.

- **Stig í sýn** stillir hversu slétt það er.
- **Stig í myndgerðum** stillir hversu slétt myndgerðar myndir og myndbönd eru; myndgerðir geta notað fleiri stig en sýnin.
- **Myndgerðir á hinum raunverulega slétta fleti** setur punkta myndgerðs möskva á takmarksfletinn sem stigin stefna á, svo jafnvel tvö stig myndgerast eins slétt og mörg.
- **Fald** heldur brúnum skörpum: í Möskvavinnusvæðinu veldu brúnir og notaðu {{ui:Fald}} (1 helst skarpt, 0,5 ávalast örlítið, 0 er slétt). Sjá [Breyta möskva](topic:mesh-edit).
- **Lækkaðu sýnarstigið á stórum möskva:** þegar stigin sem þú biður um myndu gefa fleiri fleti en tölvan þín ræður vel við í sýninni, sýnir sýnin lægra stig og segir hvaða. {{ui:Beita}} notar alltaf öll stigin. Hve marga fleti er ákvarðað af flokki tölvunnar þinnar í {{ui:Stillingar}} › Myndgerð › [Tölvan þín](topic:your-machine).
- Opnir jaðrar halda hornum sínum og haldast á línu brúna sinna.

## Beygja með grindarbúri

1. Bættu við {{ui:Grind}} breytu og ýttu á {{ui:Bæta við grindarbúri utan um möskvann}}. Búr af 3 × 3 × 3 punktum birtist utan um möskvann, teiknað sem vírar.
2. Opnaðu búrið í Möskvavinnusvæðinu (tvísmelltu á það) og færðu punkta þess. Möskvinn fylgir mjúklega.

:::tip
Búr er möskvi eins og hver annar: feldu það með merkinu þegar þú ert búinn.
:::

## Stórir möskvar

Litlir staflar eru reiknaðir strax. Stór er reiknaður í bakgrunni á hverjum kjarna tölvunnar: sýnin sýnir síðustu niðurstöðu þar til sú nýja er tilbúin. Booleanar hlaða rúmtaksmótunarkjarnanum fyrst í stað; sýnin segir frá því í smá stund.

## Það sem breytur gera ekki enn

- Vægi á hvern hornpunkt (deyfing máluð á möskvann) fyrir Afmyndun, Slétta og Vefjun.
- Breytur aðrar en Mælikvarði og línuleg Fjölföldun á ýta/toga-rúmfræði (hópum og íhlutum): breyttu fyrst í möskva ({{ui:Breyta í möskva}}). Spegla, hringlaga eða ferilsfjölföldun, Beygja og Mjókka á hópum koma síðar.
