---
title: Verdeel 'n groot model vir druk
summary: Sny 'n model wat te groot is vir jou drukker in stukke wat op die bed pas, met pinne, sleutels, swaelstertverbindings, dowel- of magneetgate en die verbinding se nommer op albei vlakke, en laai elke stuk en 'n samestellingsblad in een zip-lêer af.
keywords: 3d-druk, verdeel, skuins, skuins snit, hoekige snit, oblique, verdeler, snit, te groot, beddgrootte, bouvolume, stukke, dele, verbindings, pinne, sleutels, swaelstert, dowel, magneet, speling, toleransie, onderdeelnommers, samestelling, ontplooide aansig, zip, stl, 3mf, lisensie, usb-sleutel, dongle
from: ee96ba77
---

Wanneer 'n model groter is as jou drukker se bed, sny **Verdeel vir druk** dit in stukke wat pas, voeg verbindings by sodat die stukke aanmekaar pas wanneer jy hulle saamsit, en graveer dieselfde nommer op albei vlakke van elke verbinding. Open {{ui:Voer uit}} › {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}; die dialoog se **Drukgereedskap**-reël het {{ui:Verdeel vir druk}}. Dit open as 'n kaart oor die aansig.

Dit werk op wat gedruk word: die seleksie, of alles wat gewys word as niks gekies is nie. Wat gedruk word, moet 'n geslote soliede voorwerp wees; as die kontrole gate vind, gebruik eers [Herstel](topic:print-tools#repair).

Dit loop in ModelCraft, op jou rekenaar: geen lisensiebediener, geen USB-sleutel, niks word opgelaai nie.

## Hoe om te sny

- **Pas by die bed, minste stukke**: gee die bed se breedte, diepte en hoogte (dit begin by {{ui:Instellings}} › ModelCraft › 3D-drukker). Die kaart sê hoeveel stukke dit neem en hoe groot elkeen is; dit sny die model in gelyke stukke, so min as wat pas. 'n Stuk mag in die lêers op sy sy lê as dit dit laat pas. Die verbindings wat uit 'n stuk uitsteek, tel mee vir die grootte daarvan.
- **By plekke wat ek gee**: kies die as om oor te sny en tik waar, in millimeter vanaf die lae kant van die model, met kommas tussen (`100, 200` maak drie stukke).
  **Skuins** draai die snitte tot 60° om een van die twee ander asse ('n snit oor Z skuins om X, byvoorbeeld): elke skuins snit loop deur die model se middellyn by sy plek, gee die stukke meer plakoppervlak en verberg die verbinding beter op 'n hellende oppervlak. Verbindings staan reguit op die snit.

Die snitvlakke word as gestreepte lyne om die model geteken terwyl die kaart oop is.

## Verbindings

Elke plek waar twee stukke aanmekaar raak, kry verbindings, wat self geplaas word waar die meeste ruimte is: minstens die **minste muur** plus die **speling** plus hul eie grootte weg van die buitekant, en ver genoeg van elke ander snit af dat twee gate nooit ontmoet nie. Op 'n lang vlak word twee verbindings langs dit versprei, sodat die stukke nie kan draai nie.

- **Ronde pinne**: 'n pen op een stuk (met 'n skuinste punt), 'n gat in die ander.
- **Vierkantige sleutels**: dieselfde, vierkantig, sodat 'n stuk net een kant toe kan pas.
- **Swaelstertverbindings**: 'n tong wat van die kant in 'n gleuf skuif. Waar een end van die gleuf met 'n ander snit sou ontmoet, eindig die swaelstert vroeër en skuif dit in vanaf die oop end. Swaelstertverbindings pas by snitte in een rigting ('n ry skywe); in 'n rooster, gebruik pinne of dowels.
- **Dowelgate**: 'n gat aan elke kant; die penne word ook gedruk (in die zip).
- **Magneetholtes**: 'n holte aan elke kant vir 'n ronde magneet van die middellyn en dikte wat jy gee. Kontroleer die pole voordat jy hulle vasplak.
- **Geen (gom)**.

Die **speling** is die opening aan elke kant tussen 'n pen en sy gat (0.2 mm om mee te begin). Dit is korrek volgens die getal wat jy gee: ronde gate word 'n bietjie groter gemaak sodat hul plat sye, nie hul hoeke nie, daardie opening behou. Verhoog dit as die onderdele van jou drukker te styf uitkom.

As 'n verbinding nie ruimte vir 'n verbinding het nie ('n dun muur, 'n klein raakvlak), sê die kaart dit: plak daardie een vas.

## Onderdeelnommers

Met **Graveer die verbindingsnommers op albei vlakke** aan, kry elke verbinding die nommer van sy twee stukke, soos `3-4`, 0.6 mm diep op albei vlakke gegraveer, elkeen so dat dit reg om gelees. Die nommers begin 5 mm hoog en word kleiner om te pas, tot 2.5 mm; 'n verbinding sonder ruimte vir sy nommer word gelys. Stukke word van die onderste laag na bo genommer.

## Voorskou, aflaai, verdeel die model

1. {{ui:Voorskou}} sny die model en sê hoeveel stukke, verbindingsvlakke en verbindings daar is, of elke stuk die 3D-druktoets slaag en by die bed pas, en lys die grootte van elke stuk. 'n Ring merk elke verbinding en nommer in die aansig.
2. {{ui:Laai die stukke af (.zip)}} stoor een zip: 'n lêer per stuk (STL of 3MF, soos jy onder **Lêers** kies), elk staan op die bed; die dowelpenne; en die **samestellingsblad**, 'n prent van die stukke uitmekaar getrek met hul nommers (`assembly.svg` en `assembly.png`) en 'n lys van die stukke en verbindingsvlakke (`assembly.txt`).
3. {{ui:Verdeel die model}} plaas die stukke in die model in die plek van die gekose groepe of komponente, benoem soos op die samestellingsblad, in een stap: {{ui:Ontdoen}} plaas die oorspronklike terug. Dit benodig dat die groepe of komponente om te verdeel gekies is; die aflaai werk op wat ook al gedruk word.

## Skuif die verbindings self

Ná 'n voorskou laat **Verbindings met die hand** jou regstel waar die verbindings gaan:

- {{ui:Skuif een}}: klik op 'n rooi ring in die aansig (dit word groen), klik dan waar dit op die snit moet wees.
- {{ui:Voeg een by}}: klik in die aansig waar 'n verbinding moet wees. Dit gaan op die snitvlak wat jou klik bereik, tussen die twee stukke daar.
- {{ui:Verwyder een}}: klik op 'n rooi ring om daardie verbinding weg te neem.

Elke verandering word weer nagegaan soos die outomatiese een: 'n plek te naby aan die buitelyn, 'n ander snit of 'n ander verbinding word nie gemaak nie, en die kaart sê so. {{ui:Outomaties weer}} vergeet jou plekke. Hulle word behou solank die model, die seleksie en die snitte soos is, bly.

'n Voorskou bly totdat die model, die seleksie of 'n instelling verander; dan vra die kaart jou om weer 'n voorskou te doen.

:::note
Elke stuk word nagegaan soos die 3D-druktoets dit sou nagaan voordat jy aflaai. Jou snyprogram besluit steeds hoe elke stuk gedruk word: kyk na elkeen daar, en druk eers een verbindingsvlak om te sien hoe jou drukker die speling hanteer.
:::
