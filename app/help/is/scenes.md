---
title: Vista sýnir sem senur
summary: Vistaðu myndavél og stíl sem senu, uppfærðu og endurnefndu hana, og farðu skref fyrir skref eða spilaðu í gegnum senur til að kynna hönnun.
keywords: sena, sýn, vistuð sýn, myndavél, kynning, hreyfimynd, spila, skyggnusýning, page up, page down, flipar, gönguferð
from: 38680d6e
---

Ein **sena** man myndavélarstöðu, stíl og hvað er falið: hvaðan þú horfir, fláröð eða samsíða, andlitsstíl, jaðra, sólarstillingar, falda hópa, slökkt merki og sniðskurðinn. Senur eru vistaðar í `.modelcraft` skránni.

## Bæta við senu

1. Stilltu sýnina: snúðu, aðdráttur, veldu stíl, stilltu sólina.
2. Í {{ui:Senur}}-glugganum hægra megin smelltu á {{ui:Bæta við senu}}.

   Senan birtist í listanum, nefnd „Sena 1“, „Sena 2“ og svo framvegis, og sem flipi efst yfir þrívíðu sýninni. Stöðustikan segir „Sena 1 vistuð: þessi myndavél, stíll og það sem er falið.“

## Fara í senu

- Smelltu á flipann hennar yfir þrívíðu sýninni, eða nafn hennar í {{ui:Senur}}-listanum.
- Eða ýttu á {{key:PageDown}} fyrir næstu senu og {{key:PageUp}} fyrir þá fyrri. {{ui:Næsta}} og {{ui:Fyrri}} undir listanum gera það sama.

Myndavélin rennur að senunni á rúmlega hálfri sekúndu. Ef tölvan þín er stillt á minni hreyfingu, stekkur hún þangað í staðinn.

## Breyta, endurnefna eða eyða senu

Hver sena í listanum hefur þrjá litla hnappa eftir nafninu:

- **Uppfæra** (hringlaga örvarnar): vistar núverandi myndavél, stíl og það sem er falið í þá senu. „Sena 2 uppfærð.“
- **Endurnefna** (blýanturinn): opnar gluggann „Endurnefna senu“. Skrifaðu nýja heitið og smelltu á {{ui:Vista}}.
- **Eyða** (ruslatunnan): fjarlægir senuna. „Sena 2 eydd. Ctrl+Z skilar henni.“

Að bæta við, uppfæra, endurnefna og eyða senum eru skref í afturköllun, eins og breytingar á líkaninu.

## Læsa myndavél senu

Þegar þú myndgerir sömu sýnina aftur og aftur meðan hönnunin breytist, læstu myndavél þeirrar senu svo sýnin færist aldrei óvart.

1. Í {{ui:Senur}}-listanum smelltu á **læsingarhnappinn** (opna lásinn) eftir nafni senunnar. Hann lokast, og flipi senunnar yfir þrívíðu sýninni sýnir lítinn lás. Stöðustikan segir „Sena 2: myndavél læst.“
2. Farðu í senuna hvenær sem þú vilt myndgera: myndavélin fer aftur í nákvæmlega vistuðu sýnina, svo myndir gerðar úr henni passa við þær fyrri.

Meðan myndavélin er læst vistar **Uppfæra** enn stílinn og það sem er falið í senuna, en myndavélin er á sínum stað, jafnvel þótt þú hafir snúið burt. Smelltu á lásinn aftur til að opna; þá vistar Uppfæra núverandi sýn aftur. Læsing og opnun eru skref í afturköllun, og læsingin er vistuð í `.modelcraft` skránni.

## Kynning

1. Bættu við tveimur eða fleiri senum.
2. Smelltu á {{ui:Spila}} undir listanum. ModelCraft færist í næstu senu á nokkurra sekúndna fresti og fer aftur í þá fyrstu eftir þá síðustu.
3. Smelltu á {{ui:Stöðva}} (sama hnapp) eða ýttu á {{key:Esc}} til að stoppa.

Fyrir sólarrannsókn skaltu bæta við einni senu á klukkustund þar sem aðeins {{ui:Tími}} er breytt, og spila þær síðan. Sjá [Stílar og sólarskuggar](topic:styles-shadows#a-sun-study).

Til að kynna án stikanna ýtirðu tvisvar á {{key:Ctrl+Shift+F}}: fyrst fullur skjár, og síðan fullur skjár með földum stikum. Flipar senanna eru áfram yfir sýninni.

## Hvað sena sýnir

Sena man hvað var falið þegar þú vistaðir hana: hópa og íhluti sem þú [faldir](topic:hide-isolate), [merki](topic:tags) sem þú slökktir á, og hvaða [sniðplan](topic:sections) skera. Að fara í senu felur þau og sýnir þau aftur. Þannig getur ein sena sýnt allt húsið, sú næsta húsið með merki þaksins slökkt, og sú þriðja sniðskurð í gegnum það.

Falin lausflötur og jaðrar eru ekki hluti af senum. Að fara í senu býr ekki til afturköllunarskref. Senur sem eldri útgáfa ModelCraft vistaði skilja það sem er falið eftir eins og það er; smelltu á Uppfæra til að vista það í þær.

## Flytja út hreyfimynd

{{ui:Flytja út hreyfimynd}}, undir listanum, spilar senunum frá fyrstu til síðustu, færir myndavélina mjúklega á milli þeirra og vistar myndina sem **WebM** myndskeið (tvær sekúndur af hreyfingu og stutt hlé á hverri senu). Það tekur sýnina eins og þú sérð hana, í stærð sinni á skjánum, í [kynningarsýn](topic:styles-shadows#presentation-view) (án ása, leiðbeininga eða vals). Ýttu á {{key:Esc}} eða smelltu á hnappinn aftur til að stoppa án þess að vista. WebM spilast í vöfrum og VLC, og myndvinnsluforrit breyta því.

Fyrir myndgerða gönguferð (himinn, sól, skuggar, efni) í stærð sem þú velur, notaðu {{ui:Myndgerð myndskeiðs…}} í staðinn: án hreyfilykla tekur hann senurnar í röð sem slóð myndavélarinnar. Sjá [Hreyfðu myndavélina og hluti](topic:animation).

## Atriði til að vita

- Að breyta stíl eða færa myndavélina eftir að farið er í senu breytir ekki senunni fyrr en þú smellir á Uppfæra.
- Senur eru ekki fluttar út í Collada, OBJ, glTF, STL eða IFC.
