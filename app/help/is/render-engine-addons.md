---
title: Bættu við myndgerðarvél með viðbót
summary: Hvað viðbót getur bætt við vél-listann í glugganum Myndgera, heimildin sem hún þarf til að keyra forrit, og hvað Studio athugar og spyr um.
keywords: viðbót, addon, vél, myndgerðarvél, þróunaraðili, engine.run, heimild, forrit, handrit, undirritað, studio, api
from: cd7a39ba
---

Viðbót (Stillingar › Viðbætur) getur bætt vél við vél-listann í {{ui:Myndgera mynd…}}. Allur texti fyrir höfunda viðbóta er 16. kafli í forskrift viðbótanna; í stuttu máli:

- Viðbótin skráir vél með auðkenni sem byrjar á hennar eigin, heiti, valfrjálsum stillingum og **annað hvort** forriti til að keyra **eða** falli í JavaScript sem teiknar myndina.
- Vél sem keyrir forrit þarf **`engine.run`**-heimildina, sem sýnd er áður en uppsetning fer fram og í Stillingum. Hún keyrir aðeins í Studio; í vafranum birtist hún sem skrá til að vista.
- Viðbótin nefnir forritið (einfalt skráarheiti: aldrei skel), handrit sem er **inni í undirritaðri viðbótinni**, og skipanaviðföng úr staðgenglum og einföldum orðum. Studio finnur forritið eða biður þig að benda á það einu sinni.
- Í fyrsta skipti sem viðbót keyrir forrit, **spyr Studio þig í sínum eigin glugga**: hvaða viðbót, hvaða forrit, og að handrit geti gert allt sem forritið getur. Leyfðu það aðeins fyrir viðbót sem þú treystir. Svar þitt er munað fyrir þá viðbót og það forrit.
- Pakkinn (senan sem USD og stillingaskrá, með glTF-skránni þegar viðbótin biður um hana) og handrit viðbótarinnar fara í nýja, tímabundna möppu, forritið keyrir þar, og myndin kemur til baka merkt með heiti vélar viðbótarinnar.

:::note
Viðbætur geta aðeins bætt við myndgerðarvélum frá viðbótar-API 1.4. Dæmi um skipanalínumyndgerð með opnum hugbúnaði er í sinni eigin geymslu; það hefur ekki enn verið keyrt í þeirri myndgerð.
:::
