---
title: Flyttu út líkan fyrir önnur forrit
summary: Veldu rétta útflutninginn fyrir myndgerð, vefinn, þrívíddarprentun, BIM og BimCraft, og athugaðu hvað hver þeirra geymir.
keywords: prenta, 3mf, pdf, pappír, mynd, png, ljósmynd, skjáskot, myndgerð, myndgera, vista sýn, flytja út, deila, gltf, glb, collada, dae, obj, stl, þrívíddarprentun, ifc, bim, bimcraft, senda, önnur forrit
from: 9e13e80d
---

Útflutningur býr til afrit af líkaninu á öðru sniði. Geymdu `.modelcraft`-skrána þína líka: hún er eina skráin sem geymir allt, og sú eina sem ModelCraft opnar beint.

## Útflutningur

1. Vistaðu fyrst ({{key:Mod+S}}), svo vinnuskráin þín sé örugg.
2. Smelltu á {{ui:Export}} í hópnum {{ui:File}}.
3. Veldu sniðið. Vafrinn sækir það, og það er nefnt eins og líkanið.

Allt líkanið er flutt út. Til að flytja út einn hluta skaltu vista, strjúka hitt út, flytja út, og síðan afturkalla eða opna aftur.

## Hvaða snið

| Þú vilt | Veldu | Athugasemdir |
|---|---|---|
| Opna það í öðru þrívíddarlíkanaforriti | {{ui:Collada (.dae)}} | Heldur hópum, hreiðruðum hópum, einingum (sameiginlegum, ekki afrituðum), heitum og litum. Z upp, metrar. |
| Myndgera það, eða nota það í sjónrænu forriti | {{ui:OBJ (.obj)}} eða {{ui:glTF binary (.glb)}} | OBJ er mest lesið; það skrifar staðsetningu hvers hóps sem sérstakan hlut, en hefur engan lit og engar sameiginlegar einingar. glTF heldur einingum og litum. |
| Setja það á vefinn, í leikjavél eða í AR | {{ui:glTF binary (.glb)}} | Ein skrá með öllu í sér. |
| Prenta það í þrívídd | {{ui:Check for 3D printing (STL or 3MF)…}} | Athugar að líkanið sé lokað og snúi rétt, og skrifar síðan STL eða 3MF í millimetrum. Sjá [Undirbúðu líkan fyrir þrívíddarprentun](topic:print-3d). {{ui:STL for printing (.stl, millimeters)}} skrifar allt líkanið án athugunarinnar. |
| Opna það í BimCraft eða öðru BIM-forriti | {{ui:IFC for BimCraft (.ifc)}} | Hver efsti hópur eða eining verður eitt byggingarhluti. |

Stöðustikan staðfestir hvern útflutning, til dæmis „Flutt út House.stl (millimetrar).“ eða „Flutt út House.dae (Collada 1.4.1, Z upp, metrar; einingar haldast sameiginlegar).“

## Áður en þú flytur út

- **Raðaðu hlutunum í hópa.** Collada, glTF og IFC halda hópum og einingum sem aðskildum hlutum. Laus rúmfræði fer út sem einn klumpur; í IFC verður hún að einu frumefni sem heitir „Loose geometry“.
- **Gefðu þeim heiti.** Heiti hópa og eininga fara í Collada og IFC, svo veggur sem heitir Norðurveggur kemur út sem Norðurveggur.
- **Athugaðu stefnu flatanna.** Fletir sem sýna blágrátt utan á munu vísa inn á við í útflutningnum. Lagaðu þá með {{ui:Reverse face}} (sjá [Strokaðu og hreinsaðu](topic:erase#a-face-facing-the-wrong-way)).
- **Fyrir prentun** gerðu hlutana að lokuðum föstum rúmtökum: veldu hvern hóp og athugaðu hvort {{ui:Entity info}} segir „Heilt rúmtak: Já“. Stærðu síðan líkanið í prentaða stærð, eða stærðu það í hugbúnaði prentarans.

## Senda líkan til BimCraft

1. Gerðu hvern byggingarhluta að hóp eða einingu og gefðu honum heiti.
2. Veldu {{ui:Export}}, og síðan {{ui:IFC for BimCraft (.ifc)}}.
3. Opnaðu niðurhalaða `.ifc`-skrána í BimCraft.

Fyrir hugmyndalegan massa skaltu nota {{ui:Export}} › {{ui:Massing to BimCraft…}} í staðinn: hver hópur fer sem massavalkostur með hæðum, gólfflötum og rúmmáli. Sjá [Senda massa til BimCraft](topic:massing-to-bimcraft).

Venjulegur IFC-útflutningur hefur enga beina tengingu milli forritanna tveggja. IFC-skráin hefur eina hæð og sérhvert frumefni er staðgengill byggingarþáttar án gerðar eða eiginleika: það ber aðeins lögun og heiti. Lokaðir hópar verða að föstum formum; opnir verða að yfirborðum.

## Línur án fleta

Jaðrar sem eru ekki hluti af neinum fleti (hjálparlínur, innflutt lóðarmynd) fara í OBJ og Collada sem línur. glTF og STL hafa ekki stað fyrir þær og sleppa þeim. Hjálparlínur og senur eru ekki fluttar út á neitt snið.

## Vista sýnina sem mynd

{{ui:Export}} › {{ui:Image of the view (.png)}} vistar nákvæmlega það sem þrívíddarsýnin sýnir, í stærðinni á skjánum. {{ui:Image at twice the size (.png)}} vistar hana tvöfalt breiðari og tvöfalt hærri (fyrir prentun eða skarpa glæru), með málsetningum og merkjum teiknuðum aftur í þeirri stærð í stað þess að vera teygð.

Fyrir mynd sem líkist dagsbirtu (himni, sól, mjúkum skuggum, gleri) skaltu nota {{ui:Export}} › {{ui:Render a picture…}} í staðinn: sjá [Myndgera mynd](topic:render).

Fyrir hreina mynd skaltu fyrst kveikja á [kynningarsýn](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): ásarnir, hjálparlínur, útlínur sniða og valið eru sleppt. Stilltu myndavélina, stílinn og skuggana eins og þú vilt, eða farðu í [senu](topic:scenes); til að vista hreyfimynd af senum þínum skaltu nota {{ui:Export animation}} á spjaldinu {{ui:Scenes}}.

## Prenta sýnina, eða vista hana sem PDF

- {{ui:Export}} › {{ui:PDF of the view (.pdf)}} vistar eina blaðsíðu PDF: sýnina í tvöföldri skjástærð sinni, með málsetningum sínum, á A4-blaði (Letter þegar líkanið er í fetum og tommum), lárétt, með línu undir sem gefur skráarheitið, dagsetninguna og mælieininguna.
- {{ui:Export}} › {{ui:Print the view…}} setur sömu síðu fyrir framan prentgluggann í vafranum þínum. Veldu prentara, eða „Vista sem PDF“.

Síðan sýnir sýnina eins og hún er: það er enginn mælikvarði á sjónarhornssýn. Fyrir teikningu í mælikvarða skaltu slökkva á {{ui:Perspective}} og horfa ofanfrá {{ui:Top}} eða framan frá {{ui:Front}}, og bæta við [málsetningum](topic:dimensions) fyrir þær stærðir sem skipta máli. [Kynningarsýn](topic:styles-shadows#presentation-view) sleppir ásum, hjálparlínum og valinu; málsetningar haldast.
