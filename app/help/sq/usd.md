---
title: Ruaj, hap dhe eksporto USD
summary: Ruaj gjithë modelin si USD (.usda, .usdc ose .usdz) pa humbur asgjë, hape sërish, dhe importo skena USD nga programe të tjera 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, ruaj si, eksporto, importo, montim skene, archviz, openpbr, materialx, paketë
from: 73d299f9
---

USD është një format skenash që shumë programe 3D, renderimi dhe archviz ndajnë. ModelCraft e shkruan dhe e lexon. `.modelcraft` mbetet formati që shkruan {{ui:Ruaj}}; USD është një zgjedhje te {{ui:Ruaj si}}.

## Ruaj si USD

1. Zgjidh {{ui:Ruaj si}} te grupi {{ui:Skedari}} (ose shtyp {{key:Mod+Shift+S}}).
2. Zgjidh formatin: {{ui:Tekst (.usda)}} (i lexueshëm, i mirë për kontrollin e versioneve), {{ui:Binar (.usdc)}} (më i vogli dhe më i shpejti) ose {{ui:Paketë (.usdz)}} (një skedar me teksturat brenda).
3. Skedari shkarkohet (në aplikacionin desktop zgjedh ku shkon).

Të njëjtat zgjedhje janë te {{ui:Eksporto}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Asgjë nuk humbet

Hap një skedar USD që ModelCraft e ruajti dhe e merr modelin përsëri saktësisht: sipërfaqet me vrimat e tyre, skajet e butë dhe të fshehur, kurbat, grupet dhe komponentët, etiketat, skenat, përmasat, udhëzuesit, planet e prerjes, dritat dhe pamjen. Programe të tjera e shohin të njëjtin model si rrjete, grupe, prototipe për komponentët, materiale, drita dhe kamera.

:::note
Nëse një program tjetër ndryshon gjeometrinë e një grupi ose komponenti, ModelCraft e hap atë pjesë si rrjet me ndryshimin e ruajtur, dhe thotë sa pjesë lexoi kështu. Një vendosje e lëvizur ose e fshirë në një program tjetër mbetet e lëvizur ose e fshirë.
:::

## Hap ose importo USD të dikujt tjetër

- {{ui:Hap}} një skedar `.usd`, `.usda`, `.usdc` ose `.usdz` për të nisur një model prej tij.
- {{ui:Importo}} një të tillë për ta shtuar te modeli i hapur. Lësho bashkë me të skedarët ku i referohet (shtresa të tjera, tekstura).

Rrjetet hyjnë me normalet, koordinatat UV dhe ngjyrat e tyre, gjeometria e përbashkët si komponentë, materialet si ngjyra lyerjeje, dritat si drita dhe kamerat si skena, në metra me Z lart, çfarëdo qoftë njësia e skedarit dhe boshti lart.

## Jo akoma

Animacioni, skeletet dhe grafet e nyjeve MaterialX nuk lexohen ose shkruhen ende si USD. Animacioni dhe materialet me nyje të ModelCraft mbahen në një skedar USD që ruajti, që ModelCraft ta hapë sërish, por programet e tjera nuk i shohin. Shtresat ku skedari i referohet dhe që ModelCraft nuk mund t'i lexojë (për shembull një dokument MaterialX) lihen jashtë, me një shënim.
