---
title: Skipta stóru líkani til prentunar
summary: Skera líkan sem er of stórt fyrir prentarann í bita sem passa á prentflötinn, með töppum, lyklum, svalaskörðum, dorn- eða seglagötum og númeri samskeytisins á báðum flötum, og sækja alla bitana og samsetningarblað í einni zip-skrá.
keywords: 3d prentun, skipting, halli, hallandi skurður, skáskurður, skurður, of stórt, stærð prentflatar, byggingarrúmmál, bitar, hlutar, tengi, tappar, lyklar, svalaskarð, dorn, segull, bil, vikmörk, hlutanúmer, samsetning, sundurtekin mynd, zip, stl, 3mf, leyfi, licence, license, USB-lykill, dongle
from: ee96ba77
---

Þegar líkan er stærra en prentflötur prentarans, skiptir **Skipting til prentunar** því í bita sem passa, bætir við tengjum svo bitarnir falla saman þegar þeir eru settir saman, og grefur sama númerið á báða fleti hverrar samskeytis. Opnaðu {{ui:Flytja út}} › {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}; í glugganum er línan **Prentverkfæri** sem hefur {{ui:Skipting til prentunar}}. Hún opnast sem spjald yfir sýninni.

Hún vinnur á því sem prentast: valinu, eða öllu sem sýnt er þegar ekkert er valið. Það sem prentast verður að vera lokað fast form; finni athugunin göt, notaðu fyrst [Lagfæra](topic:print-tools#repair).

Hún keyrir í ModelCraft, á tölvunni þinni: enginn leyfisþjónn, enginn USB-lykill, ekkert sent upp.

## Hvernig er skorið

- **Passa á prentflötinn, sem fæst bitar**: gefðu breidd, dýpt og hæð prentflatarins (þær byrja frá {{ui:Stillingar}} › ModelCraft › þrívíddarprentari). Spjaldið segir hve marga bita þarf og hversu stór hver er; það sker líkanið í jafna bita, eins fáa og passa. Bit má liggja á hliðinni í skránum ef það gerir það að verkum að það passi. Tengin sem standa út úr bita telja með í stærð hans.
- **Á stöðum sem ég gef**: veldu ásinn sem skorið er þvert á og skrifaðu hvar, í millimetrum frá lága enda líkansins, með kommum á milli (`100, 200` gerir þrjá bita).
  **Halli** snýr skurðunum um allt að 60° um annan hinna tveggja ása (til dæmis skurður þvert á Z hallaður um X): hver hallandi skurður liggur í gegnum miðlínu líkansins á sínum stað, gefur bitunum meira límflöt og felur samskeytið betur á hallandi fleti. Tengin standa hornrétt á skurðinn.

Skurðflötin eru teiknuð umhverfis líkanið sem strikalínur meðan spjaldið er opið.

## Tengi

Á hverjum stað þar sem tveir bitar snertast fá þeir tengi, sett þar sem mest er rýmið: að minnsta kosti **minnsta veggþykkt** auk **bilsins** auk eigin stærðar frá ytra byrði, og nógu langt frá hverjum öðrum skurði að göt mætist aldrei. Á löngum fleti eru tvö tengi dreifð eftir honum, svo bitarnir geti ekki snúist.

- **Kringlóttir tappar**: tappi á öðrum bitanum (skáskorinn á oddinum), gat á hinum.
- **Ferkantaðir lyklar**: það sama, ferkantað, svo bitinn kemst aðeins á einn veg.
- **Svalaskarð**: tunga sem rennur inn í rauf frá hliðinni. Þar sem annar endi raufarinnar myndi mæta öðrum skurði, stöðvast svalaskarðið áður og rennur inn frá opna endanum. Svalaskarð hentar skurðum í eina átt (röð af sneiðum); í neti skal nota tappa eða dorna.
- **Dornagöt**: gat á hvorri hlið; pinnarnir eru líka prentaðir (í zip-skránni).
- **Seglavasar**: vasi á hvorri hlið fyrir kringlóttan segul af þvermáli og þykkt sem þú gefur. Athugaðu pólana áður en þú límir þá í.
- **Ekkert (lím)**.

**Bilið** er rýmið á hvorri hlið milli tappa og gats hans (0.2 mm til að byrja með). Það er rétt miðað við töluna sem þú gefur: kringlótt göt eru gerð aðeins stærri svo að flatar hliðar þeirra, ekki hornin, haldi þessu bili. Hækkaðu það ef hlutar prentarans koma of þröngir út.

Þegar samskeyti hefur ekkert pláss fyrir tengi (þunnan vegg, lítinn snertiflöt), segir spjaldið það: límdu það samskeyti.

## Hlutanúmer

Með **Grafa samskeytanúmer á báða fleti** á fær hvert samskeyti númer bitanna tveggja, til dæmis `3-4`, grafið 0.6 mm djúpt á báða fleti og lesist rétt á hvorum. Númerin byrja 5 mm há og minnka til að passa, niður í 2.5 mm; samskeyti án pláss fyrir númerið er skráð. Bitar eru númeraðir frá neðsta lagi upp.

## Forskoðun, sækja, skipta líkaninu

1. {{ui:Forskoðun}} skerir líkanið og segir hve marga bita, samskeyti og tengi er um að ræða, hvort hver bitinn standist þrívíddarprentunarathugunina og passi á prentflötinn, og listar stærð hvers bita. Hringur merkir hvert tengi og númer í sýninni.
2. {{ui:Sækja hlutana (.zip)}} vistar eina zip-skrá: skrá fyrir hvern bita (STL eða 3MF, eftir vali þínu undir **Skrár**), hvern standandi á prentfletinum; dornpinnana; og **samsetningarblaðið**, mynd af bitunum teknum í sundur með númerum sínum (`assembly.svg` og `assembly.png`) og lista yfir bita og samskeyti (`assembly.txt`).
3. {{ui:Skipta líkaninu}} setur bitana inn í líkanið í stað valinna hópa eða eininga, nefnda eins og á samsetningarblaðinu, í einu skrefi: {{ui:Afturkalla}} setur upprunalega hlutinn aftur. Það þarf að hópar eða einingar sem á að skipta séu valin; sækingin virkar á því sem prentast.

## Færðu tengin sjálf

Eftir forskoðun leyfir **Tengi handvirkt** þér að leiðrétta hvar tengin fara:

- {{ui:Færa eitt}}: smelltu á rauðan hring í sýninni (hann verður grænn), og smelltu svo þar sem hann á að fara á skurðinum.
- {{ui:Bæta við einu}}: smelltu í sýninni þar sem tengi á að vera. Það fer á skurðflötinn sem smellurinn nær til, milli bitanna tveggja þar.
- {{ui:Fjarlægja eitt}}: smelltu á rauðan hring til að fjarlægja það tengi.

Hver breyting er athuguð aftur eins og sjálfvirku tengin: staður of nálægt útlínunni, öðrum skurði eða öðru tengi er ekki gerður, og spjaldið segir það. {{ui:Sjálfvirkt aftur}} gleymir stöðunum þínum. Þeir haldast meðan líkanið, valið og skurðirnir eru óbreyttir.

Forskoðun helst þar til líkanið, valið eða stilling breytist; þá biður spjaldið þig um að forskoða aftur.

:::note
Hver bitinn er athugaður eins og þrívíddarprentunarathugunin myndi gera fyrir niðurhal. Sneiðarinn þinn ákveður samt hvernig hver bitinn prentast: skoðaðu hvern þeirra þar, og prentaðu eitt samskeyti fyrst til að sjá hvernig prentarinn ræður við bilið.
:::
