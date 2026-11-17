---
title: Teiknaðu myndina með öðru forriti
summary: Okkar eigin slóðarekjari teiknar myndina í Myndgera; annað forrit getur aðeins teiknað hana í gegnum myndgerðarviðbót í CadCraft Studio. Hvað flyst með og hvers vegna sum forrit eru aldrei boðin.
keywords: myndgerð, vél, utanaðkomandi forrit, vélarviðbót, studio, bakgrunnur, biðröð, usd, gltf, teiknað af, blender, gpl
from: 150f94f1
---

Myndin í {{ui:Myndgera mynd…}} er teiknuð af **okkar eigin vélum**: Hraðvirku vélinni og Slóðarekjaranum, í vafranum og í CadCraft Studio. Annað forrit getur aðeins teiknað hana þegar **myndgerðarvélarviðbót** kemur með það: sjá [Bættu við myndgerðarvél með viðbót](topic:render-engine-addons). Til að fara með senuna í annað forrit og halda áfram að vinna þar, notaðu [Opnaðu senuna í öðru forriti](topic:render-open-in) eða [Senda senuna í leikjavél](topic:render-unreal).

## Teiknaðu mynd með vél viðbótar

1. Kveiktu á viðbótinni í Stillingar › Viðbætur. Vél hennar birtist á vél-listanum í {{ui:Myndgera mynd…}}.
2. Veldu hana. Eigin stillingar hennar birtast undir vél-listanum.
3. Smelltu á {{ui:Myndgera}}. Í Studio, í fyrsta skipti sem viðbót keyrir forrit, spyr Studio þig í sínum eigin glugga. Framvinda birtist meðan hún teiknar; {{ui:Stöðva}} lýkur henni. Myndin birtist merkt með vélinni sem teiknaði hana.

Vél skrifuð í JavaScript keyrir líka í vafranum. Vél sem keyrir forrit á þessari tölvu keyrir aðeins í Studio; í vafranum birtist hún sem skrá til að vista.

## Hvað flyst með

Vélin fær **pakka**: líkanið sem USD-skrá (og glTF-skrá þegar hún biður um hana), og stillingaskrá með nákvæmum efnisgildum, sólinni og himninum, hverjum lampa sem er kveiktur með afli sínu og ljósprófíl, myndavélinni og lýsingunni. Hvert forrit lýsir, litar og tekur sýni á sinn hátt, þannig að myndir eru líkar í myndavél, sól, lömpum og lýsingu, en ekki mynddíl fyrir mynddíl.

## Forrit sem CadCraft keyrir aldrei

CadCraft ræsir aldrei forrit undir GNU GPL-leyfinu, og skráir það aldrei sem vél eða sem Opna í-markmið. Blender er eitt þeirra, svo það er ekki á vél-listanum. USD- eða glTF-skrá sem vistuð er úr {{ui:Myndgera mynd…}} opnast samt í því eins og í hvaða forriti sem les þessar skrár.

:::note
Víðmynda- og steríómyndavélar og himinmynd (litir himinsins eru notaðir í staðinn) flytjast ekki yfir í annað forrit. Ekkert sem gert er í öðru forriti kemur til baka í líkanið.
:::
