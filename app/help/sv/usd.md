---
title: Spara, öppna och exportera USD
summary: Spara hela modellen som USD (.usda, .usdc eller .usdz) utan att något går förlorat, öppna den igen, och importera USD-scener från andra 3D-program.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, spara som, exportera, importera, scensammanställning, arkitekturvisualisering, openpbr, materialx, paket
from: 73d299f9
---

USD är ett scenformat som många 3D-, renderings- och arkitekturvisualiseringsprogram delar. ModelCraft skriver och läser det. `.modelcraft` är fortfarande formatet som {{ui:Spara}} skriver; USD är ett val i {{ui:Spara som}}.

## Spara som USD

1. Välj {{ui:Spara som}} i gruppen {{ui:Fil}} (eller tryck på {{key:Mod+Shift+S}}).
2. Välj format: {{ui:Text (.usda)}} (läsbart, bra för versionshantering), {{ui:Binär (.usdc)}} (minst och snabbast) eller {{ui:Paket (.usdz)}} (en fil med texturerna inuti).
3. Filen laddas ned (i skrivbordsappen väljer du var den ska sparas).

Samma val finns i {{ui:Exportera}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Inget går förlorat

Öppnar du en USD-fil som ModelCraft sparat får du tillbaka modellen exakt: ytor med sina hål, mjuka och dolda kanter, kurvor, grupper och komponenter, taggar, scener, mått, hjälplinjer, sektionsplan, lampor, importerade texturer och vyn. Andra program ser samma modell som nät, grupper, prototyper för komponenter, material, lampor och kameror.

:::note
Om ett annat program ändrar geometrin för en grupp eller komponent öppnar ModelCraft den delen som ett nät med ändringen kvar, och anger hur många delar den läste på det sättet. En placering som flyttats eller tagits bort i ett annat program förblir flyttad eller borttagen.
:::

## Öppna eller importera någon annans USD

- {{ui:Öppna}} en `.usd`-, `.usda`-, `.usdc`- eller `.usdz`-fil för att starta en modell från den.
- {{ui:Importera}} en för att lägga till den i den öppna modellen. Dra in filerna den refererar till (andra lager, texturer) tillsammans med den.

Nät importeras med sina normaler, UV-koordinater och färger; delad geometri som komponenter; material som målfärger; lampor som lampor och kameror som scener, i meter med Z uppåt, oavsett filens enheter och uppaxel.

## Inte än

Animering, skelett och MaterialX-nodgrafer läses inte och skrivs inte som USD ännu. ModelCraft:s egna animeringar och nodmaterial sparas i en USD-fil som den har sparat, så att ModelCraft kan öppna dem igen, men andra program ser dem inte. Lager som en fil refererar till som ModelCraft inte kan läsa (till exempel ett MaterialX-dokument) utelämnas med en notering.
